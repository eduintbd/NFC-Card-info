export interface CardData {
  // Personal info
  fullName: string;
  designation: string;
  department: string;
  phone: string;
  email: string;
  website: string;

  // Company info
  companyName: string;
  companyTagline: string;
  companyAddress: string;

  // Design
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  layout: "modern" | "classic" | "minimal";
  showQR: boolean;
  showLogo: boolean;
}

export const defaultCardData: CardData = {
  fullName: "",
  designation: "",
  department: "",
  phone: "",
  email: "",
  website: "aibd.ai",

  companyName: "AIBD",
  companyTagline: "AI-Powered Business Development",
  companyAddress: "",

  primaryColor: "#0f172a",
  secondaryColor: "#3b82f6",
  textColor: "#ffffff",
  layout: "modern",
  showQR: true,
  showLogo: true,
};
