import { contact } from "@/utils/data/content";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rdconstruction.builders";

export const siteName = "RD Construction";
export const siteTagline = "Premium Marble Flooring & Construction";
export const siteDescription =
  "RD Construction - premium marble flooring, wall cladding, countertops, polishing and restoration. Trusted marble and construction experts delivering flawless finishes.";

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/rd-construction-logo.png`,
  image: `${siteUrl}/rd-construction-logo.png`,
  description: siteDescription,
  email: contact.email,
  telephone: contact.phone,
  sameAs: ["https://www.instagram.com/rdconstructionss"],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  alternateName: ["RD Construction Marble", "RD Marble"],
  url: siteUrl,
};
