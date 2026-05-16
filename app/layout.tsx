import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr Goel's Dental & Orthodontic Centre | Hauz Khas, New Delhi",
  description:
    "24 years of dental excellence. Dr. Rupender Goel — Orthodontist (MDS). Invisalign, Braces, Dental Implants & Cosmetic Dentistry at Hauz Khas, New Delhi. Call 9810110827.",
  keywords:
    "dentist Hauz Khas, orthodontist Delhi, Invisalign New Delhi, dental implants Hauz Khas, Dr Goel dental",
  openGraph: {
    title: "Dr Goel's Dental & Orthodontic Centre",
    description:
      "24 years of dental excellence in Hauz Khas, New Delhi. Invisalign, Braces, Implants.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
