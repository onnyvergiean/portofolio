import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Onny Vergiean Saputra — Software Engineer",
  description:
    "Software Engineer based in Yogyakarta, Indonesia. Building internal platforms, automation systems, and APIs using Node.js, TypeScript, and MySQL.",
  authors: [{ name: "Onny Vergiean Saputra" }],
  icons: {
    icon: "/Avatar.jpg",
    apple: "/Avatar.jpg",
  },
  openGraph: {
    title: "Onny Vergiean Saputra — Software Engineer",
    description:
      "Software Engineer based in Yogyakarta, Indonesia. Building internal platforms, automation systems, and APIs using Node.js, TypeScript, and MySQL.",
    url: "https://onnyvergiean.dev",
    siteName: "Onny Vergiean Saputra",
    images: [{ url: "/Avatar.jpg", width: 400, height: 400, alt: "Onny Vergiean Saputra" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Onny Vergiean Saputra — Software Engineer",
    description: "Software Engineer based in Yogyakarta, Indonesia.",
    images: ["/Avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
