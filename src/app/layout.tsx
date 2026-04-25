import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bedrock Financial Planning | Alternative Real Estate Investments",
  description:
    "Earn 13-28% annual returns through secured alternative real estate investments. UCC-backed, no downside exposure, expert guidance. Get your free evaluation today.",
  keywords: [
    "alternative real estate investments",
    "high yield investments",
    "UCC secured investments",
    "passive income real estate",
    "Bedrock Financial Planning",
    "real estate investing",
    "secured returns",
  ],
  openGraph: {
    title: "Bedrock Financial Planning | Alternative Real Estate Investments",
    description:
      "Earn 13-28% annual returns through secured alternative real estate investments backed by UCC filings.",
    type: "website",
    locale: "en_US",
    siteName: "Bedrock Financial Planning",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
