"use client";

import { useRef, useState } from "react";
import CardForm from "@/components/CardForm";
import CardPreview from "@/components/CardPreview";
import ExportButton from "@/components/ExportButton";
import { CardData, defaultCardData } from "@/types/card";

export default function Home() {
  const [cardData, setCardData] = useState<CardData>(defaultCardData);
  const [activeSide, setActiveSide] = useState<"front" | "back">("front");
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/aibd_logo.svg" alt="AIBD" className="h-8 brightness-0 invert" />
            <div>
              <h1 className="text-lg font-bold">NFC Card Maker</h1>
              <p className="text-xs text-gray-500">by aibd.ai</p>
            </div>
          </div>
          <span className="text-xs text-gray-600 hidden sm:block">
            Design &middot; Preview &middot; Export
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8">
          {/* Left: Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
              <h2 className="text-lg font-semibold mb-4">Card Details</h2>
              <CardForm data={cardData} onChange={setCardData} />
            </div>
          </div>

          {/* Right: Preview & Export */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Preview</h2>
                <div className="flex bg-gray-800 rounded-lg p-0.5">
                  <button
                    onClick={() => setActiveSide("front")}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      activeSide === "front"
                        ? "bg-blue-600 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Front
                  </button>
                  <button
                    onClick={() => setActiveSide("back")}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      activeSide === "back"
                        ? "bg-blue-600 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Back
                  </button>
                </div>
              </div>

              {/* Card preview area */}
              <div className="flex justify-center py-6 bg-gray-800/50 rounded-xl">
                <div className="transform scale-90 origin-center">
                  {activeSide === "front" ? (
                    <CardPreview data={cardData} side="front" cardRef={frontRef} />
                  ) : (
                    <CardPreview data={cardData} side="back" cardRef={backRef} />
                  )}
                </div>
              </div>

              {/* Hidden refs for export (both sides always rendered) */}
              <div className="fixed -left-[9999px] top-0">
                <CardPreview data={cardData} side="front" cardRef={frontRef} />
                <CardPreview data={cardData} side="back" cardRef={backRef} />
              </div>
            </div>

            {/* Export section */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
              <h2 className="text-lg font-semibold mb-3">Export</h2>
              <p className="text-xs text-gray-500 mb-4">
                Export high-resolution card images for printing, or download a .vcf file
                for NFC encoding.
              </p>
              <ExportButton frontRef={frontRef} backRef={backRef} data={cardData} />
            </div>

            {/* NFC Info */}
            <div className="bg-blue-950/30 border border-blue-900/50 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-blue-400 mb-2">
                NFC Card Setup
              </h3>
              <ol className="text-xs text-blue-300/70 space-y-1 list-decimal list-inside">
                <li>Design your card using the form</li>
                <li>Export the front &amp; back as PNG for printing</li>
                <li>Download the .vcf (vCard) file</li>
                <li>Write the vCard data to your NFC chip using an NFC writer app</li>
                <li>Print the card design and attach to NFC card</li>
              </ol>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-4 mt-8">
        <div className="max-w-7xl mx-auto text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} AIBD &middot; aibd.ai &middot; NFC Card Maker
        </div>
      </footer>
    </div>
  );
}
