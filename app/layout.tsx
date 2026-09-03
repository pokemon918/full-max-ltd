import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fullmaxapex.com"),
  title: {
    default:
      "FullMax Apex Solutions — AI, Full-Stack & Automation, delivered production-ready.",
    template: "%s · FullMax Apex Solutions",
  },
  description:
    "FullMax Apex Solutions Ltd is a UK-registered software engineering studio. We design and build AI applications, full-stack products, and automation systems for teams that need reliable, scalable technology.",
  keywords: [
    "AI development",
    "Full-stack engineering",
    "Automation studio",
    "AI consultancy UK",
    "Software engineering firm",
    "FullMax Apex Solutions",
  ],
  authors: [{ name: "FullMax Apex Solutions Ltd" }],
  openGraph: {
    title:
      "FullMax Apex Solutions — AI, Full-Stack & Automation, delivered production-ready.",
    description:
      "A UK-registered software engineering studio building AI applications, full-stack products, and automation for teams that need reliable, scalable technology.",
    url: "https://fullmaxapex.com",
    siteName: "FullMax Apex Solutions",
    locale: "en_GB",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-canvas text-ink">{children}</body>
    </html>
  );
}
