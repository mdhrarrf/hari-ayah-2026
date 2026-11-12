import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { site } from "../content/site";

const serif = Lora({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "id_ID",
  },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#F7F4EE" };

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans text-ink">{children}</body>
    </html>
  );
}
