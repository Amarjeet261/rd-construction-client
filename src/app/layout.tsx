import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { businessSchema, siteDescription, siteName, siteTagline, siteUrl, websiteSchema } from "@/utils/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ${siteTagline}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "RD Construction",
    "marble flooring",
    "marble contractor",
    "marble polishing",
    "marble wall cladding",
    "marble countertops",
    "Italian marble",
    "Makrana marble",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} | ${siteTagline}`,
    description: siteDescription,
    url: "/",
    images: [{ url: "/rd-construction-logo.png", alt: siteName }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteSchema, businessSchema]) }}
        />
        {children}
      </body>
    </html>
  );
}
