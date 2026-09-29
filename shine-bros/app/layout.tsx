import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import LocalBusinessSchema from "./local-schema";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theshinebros.com"),
  title: {
    default: "The Shine Bros | Window Cleaning Charlotte, NC",
    template: "%s | The Shine Bros",
  },
  description:
    "Professional window cleaning for homes and businesses in Charlotte, NC. Hand-cleaned interior and exterior glass, screens, sills, and tracks. Free quotes.",
  keywords: [
    "window cleaning Charlotte NC",
    "residential window cleaning Charlotte",
    "commercial window cleaning Charlotte",
    "window washers Charlotte",
    "Ballantyne window cleaning",
    "Myers Park window cleaning",
    "SouthPark window cleaning",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Shine Bros",
    title: "The Shine Bros | Window Cleaning Charlotte, NC",
    description:
      "Professional window cleaning for homes and businesses in Charlotte, NC.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-navy-950 text-foreground font-sans antialiased">
        <LocalBusinessSchema />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
