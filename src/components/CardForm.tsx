"use client";

import { CardData } from "@/types/card";

interface CardFormProps {
  data: CardData;
  onChange: (data: CardData) => void;
}

export default function CardForm({ data, onChange }: CardFormProps) {
  const update = (field: keyof CardData, value: string | boolean) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <section>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Personal Information
        </h3>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Full Name *"
            value={data.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Designation / Job Title"
            value={data.designation}
            onChange={(e) => update("designation", e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Department"
            value={data.department}
            onChange={(e) => update("department", e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="url"
            placeholder="Website"
            value={data.website}
            onChange={(e) => update("website", e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </section>

      {/* Company Information */}
      <section>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Company Information
        </h3>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Company Name"
            value={data.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Company Tagline"
            value={data.companyTagline}
            onChange={(e) => update("companyTagline", e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <textarea
            placeholder="Company Address"
            value={data.companyAddress}
            onChange={(e) => update("companyAddress", e.target.value)}
            rows={2}
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
      </section>

      {/* Design Options */}
      <section>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Card Design
        </h3>
        <div className="space-y-3">
          {/* Layout */}
          <div>
            <label className="text-sm text-gray-400 mb-1.5 block">Layout Style</label>
            <div className="grid grid-cols-3 gap-2">
              {(["modern", "classic", "minimal"] as const).map((layout) => (
                <button
                  key={layout}
                  onClick={() => update("layout", layout)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                    data.layout === layout
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {layout}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Primary</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={data.primaryColor}
                  onChange={(e) => update("primaryColor", e.target.value)}
                  className="w-8 h-8 rounded cursor-pointer border-0"
                />
                <span className="text-xs text-gray-500">{data.primaryColor}</span>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Accent</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={data.secondaryColor}
                  onChange={(e) => update("secondaryColor", e.target.value)}
                  className="w-8 h-8 rounded cursor-pointer border-0"
                />
                <span className="text-xs text-gray-500">{data.secondaryColor}</span>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Text</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={data.textColor}
                  onChange={(e) => update("textColor", e.target.value)}
                  className="w-8 h-8 rounded cursor-pointer border-0"
                />
                <span className="text-xs text-gray-500">{data.textColor}</span>
              </div>
            </div>
          </div>

          {/* Toggles */}
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={data.showQR}
                onChange={(e) => update("showQR", e.target.checked)}
                className="w-4 h-4 rounded accent-blue-600"
              />
              <span className="text-sm text-gray-300">Show QR Code</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={data.showLogo}
                onChange={(e) => update("showLogo", e.target.checked)}
                className="w-4 h-4 rounded accent-blue-600"
              />
              <span className="text-sm text-gray-300">Show Logo</span>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}
