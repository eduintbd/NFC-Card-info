"use client";

import { QRCodeSVG } from "qrcode.react";
import { CardData } from "@/types/card";

interface CardPreviewProps {
  data: CardData;
  side: "front" | "back";
  cardRef?: React.RefObject<HTMLDivElement | null>;
}

function generateVCardURL(data: CardData): string {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${data.fullName}`,
    `ORG:${data.companyName}`,
    `TITLE:${data.designation}`,
    `TEL:${data.phone}`,
    `EMAIL:${data.email}`,
    `URL:${data.website}`,
    `ADR:;;${data.companyAddress}`,
    "END:VCARD",
  ].join("\n");
  return vcard;
}

function ModernFront({ data }: { data: CardData }) {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-8 rounded-2xl overflow-hidden relative"
      style={{ backgroundColor: data.primaryColor, color: data.textColor }}
    >
      {/* Accent stripe */}
      <div
        className="absolute top-0 left-0 w-2 h-full"
        style={{ backgroundColor: data.secondaryColor }}
      />

      <div className="pl-4">
        {data.showLogo && (
          <img src="/aibd_logo.svg" alt="AIBD" className="h-10 mb-4 brightness-0 invert" />
        )}
        <div className="mt-auto">
          <h2 className="text-2xl font-bold tracking-tight">
            {data.fullName || "Your Name"}
          </h2>
          <p className="text-sm mt-1 opacity-80">
            {data.designation || "Designation"}
          </p>
          {data.department && (
            <p className="text-xs mt-0.5 opacity-60">{data.department}</p>
          )}
        </div>
      </div>

      <div className="pl-4 flex items-end justify-between">
        <div className="space-y-1 text-xs opacity-70">
          {data.phone && <p>{data.phone}</p>}
          {data.email && <p>{data.email}</p>}
          {data.website && <p>{data.website}</p>}
        </div>
        {data.showQR && data.fullName && (
          <div className="bg-white p-1.5 rounded-lg">
            <QRCodeSVG value={generateVCardURL(data)} size={56} />
          </div>
        )}
      </div>
    </div>
  );
}

function ClassicFront({ data }: { data: CardData }) {
  return (
    <div
      className="w-full h-full flex flex-col p-8 rounded-2xl overflow-hidden relative"
      style={{ backgroundColor: data.primaryColor, color: data.textColor }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 w-full h-1.5"
        style={{ backgroundColor: data.secondaryColor }}
      />

      <div className="flex items-center justify-between mb-6">
        {data.showLogo && (
          <img src="/aibd_logo.svg" alt="AIBD" className="h-8 brightness-0 invert" />
        )}
        <span className="text-xs opacity-50 uppercase tracking-widest">
          {data.companyName}
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center text-center">
        <h2 className="text-2xl font-bold">{data.fullName || "Your Name"}</h2>
        <p className="text-sm mt-1" style={{ color: data.secondaryColor }}>
          {data.designation || "Designation"}
        </p>
        {data.department && (
          <p className="text-xs mt-1 opacity-60">{data.department}</p>
        )}
      </div>

      <div className="flex items-end justify-between text-xs opacity-70">
        <div className="space-y-0.5">
          {data.phone && <p>{data.phone}</p>}
          {data.email && <p>{data.email}</p>}
        </div>
        {data.showQR && data.fullName && (
          <div className="bg-white p-1.5 rounded-lg">
            <QRCodeSVG value={generateVCardURL(data)} size={50} />
          </div>
        )}
      </div>
    </div>
  );
}

function MinimalFront({ data }: { data: CardData }) {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-8 rounded-2xl overflow-hidden"
      style={{ backgroundColor: data.primaryColor, color: data.textColor }}
    >
      <div className="flex items-start justify-between">
        {data.showLogo && (
          <img src="/aibd_logo.svg" alt="AIBD" className="h-8 brightness-0 invert" />
        )}
        {data.showQR && data.fullName && (
          <div className="bg-white p-1.5 rounded-lg">
            <QRCodeSVG value={generateVCardURL(data)} size={44} />
          </div>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          {data.fullName || "Your Name"}
        </h2>
        <p className="text-sm mt-0.5 opacity-60">
          {data.designation || "Designation"}
          {data.department ? ` · ${data.department}` : ""}
        </p>
        <div
          className="w-8 h-0.5 my-3 rounded"
          style={{ backgroundColor: data.secondaryColor }}
        />
        <div className="space-y-0.5 text-xs opacity-60">
          {data.phone && <p>{data.phone}</p>}
          {data.email && <p>{data.email}</p>}
          {data.website && <p>{data.website}</p>}
        </div>
      </div>
    </div>
  );
}

function CardBack({ data }: { data: CardData }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-8 rounded-2xl overflow-hidden relative"
      style={{ backgroundColor: data.primaryColor, color: data.textColor }}
    >
      {/* Decorative circle */}
      <div
        className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full opacity-10"
        style={{ backgroundColor: data.secondaryColor }}
      />
      <div
        className="absolute -left-12 -top-12 w-32 h-32 rounded-full opacity-5"
        style={{ backgroundColor: data.secondaryColor }}
      />

      {data.showLogo && (
        <img src="/aibd_logo.svg" alt="AIBD" className="h-16 brightness-0 invert mb-4" />
      )}
      <h3 className="text-xl font-bold">{data.companyName || "AIBD"}</h3>
      {data.companyTagline && (
        <p className="text-xs mt-1 opacity-60 text-center">{data.companyTagline}</p>
      )}
      {data.companyAddress && (
        <p className="text-xs mt-3 opacity-40 text-center max-w-[200px]">
          {data.companyAddress}
        </p>
      )}
      <div
        className="w-16 h-0.5 mt-4 rounded opacity-30"
        style={{ backgroundColor: data.secondaryColor }}
      />
      <p className="text-[10px] mt-2 opacity-30">Tap to connect</p>
    </div>
  );
}

export default function CardPreview({ data, side, cardRef }: CardPreviewProps) {
  const layouts = { modern: ModernFront, classic: ClassicFront, minimal: MinimalFront };
  const FrontComponent = layouts[data.layout];

  return (
    <div
      ref={cardRef}
      className="w-[400px] h-[240px] shadow-2xl"
      style={{ aspectRatio: "3.37 / 2.125" }}
    >
      {side === "front" ? <FrontComponent data={data} /> : <CardBack data={data} />}
    </div>
  );
}
