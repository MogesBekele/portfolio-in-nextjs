import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Ovo } from "next/font/google";

export const metadata: Metadata = {
  title: "Portfolio in Next.js",
  description: "",
};

// Initialize the Google fonts with variable option
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "500", "600", "700"] });
const ovo = Ovo({ subsets: ["latin"], variable: "--font-ovo", weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.className} ${ovo.className} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
