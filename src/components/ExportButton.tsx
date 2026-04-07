"use client";

import { toPng } from "html-to-image";
import { CardData } from "@/types/card";

interface ExportButtonProps {
  frontRef: React.RefObject<HTMLDivElement | null>;
  backRef: React.RefObject<HTMLDivElement | null>;
  data: CardData;
}

function generateVCard(data: CardData): string {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${data.fullName}`,
    `ORG:${data.companyName}`,
    `TITLE:${data.designation}`,
    `TEL:${data.phone}`,
    `EMAIL:${data.email}`,
    `URL:https://${data.website}`,
    `ADR:;;${data.companyAddress}`,
    "END:VCARD",
  ].join("\r\n");
}

async function downloadImage(element: HTMLDivElement, filename: string) {
  const dataUrl = await toPng(element, {
    pixelRatio: 3,
    cacheBust: true,
  });
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
}

export default function ExportButton({ frontRef, backRef, data }: ExportButtonProps) {
  const handleExportFront = async () => {
    if (!frontRef.current) return;
    const name = data.fullName ? data.fullName.replace(/\s+/g, "_") : "card";
    await downloadImage(frontRef.current, `${name}_front.png`);
  };

  const handleExportBack = async () => {
    if (!backRef.current) return;
    const name = data.fullName ? data.fullName.replace(/\s+/g, "_") : "card";
    await downloadImage(backRef.current, `${name}_back.png`);
  };

  const handleExportVCard = () => {
    const vcard = generateVCard(data);
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `${data.fullName || "contact"}.vcf`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const disabled = !data.fullName;

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={handleExportFront}
        disabled={disabled}
        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
      >
        Export Front (PNG)
      </button>
      <button
        onClick={handleExportBack}
        disabled={disabled}
        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
      >
        Export Back (PNG)
      </button>
      <button
        onClick={handleExportVCard}
        disabled={disabled}
        className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
      >
        Download vCard (.vcf)
      </button>
    </div>
  );
}
