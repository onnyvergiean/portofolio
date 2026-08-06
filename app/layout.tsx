import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Onny Vergiean Saputra — Software Engineer",
  description:
    "Software Engineer based in Yogyakarta, Indonesia. Building internal platforms, automation systems, and APIs using Node.js, TypeScript, and MySQL.",
  authors: [{ name: "Onny Vergiean Saputra" }],
  icons: {
    icon: "/avatar.png",
    apple: "/avatar.png",
  },
  openGraph: {
    title: "Onny Vergiean Saputra — Software Engineer",
    description:
      "Software Engineer based in Yogyakarta, Indonesia. Building internal platforms, automation systems, and APIs using Node.js, TypeScript, and MySQL.",
    url: "https://onnyvergiean.dev",
    siteName: "Onny Vergiean Saputra",
    images: [{ url: "/avatar.png", width: 400, height: 400, alt: "Onny Vergiean Saputra" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Onny Vergiean Saputra — Software Engineer",
    description: "Software Engineer based in Yogyakarta, Indonesia.",
    images: ["/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
