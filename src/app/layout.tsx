import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/features/providers";
import Navbar from "@/components/features/Navbar";
import Footer from "@/components/features/Footer";
import "@/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MatchChayn — Where Professionals Find Love",
  description: "MatchChayn is a dating platform for professionals: intentional matching, professional networking, curated events, and Private Mode browsing.",
  authors: [{ name: "MatchChayn" }],
  openGraph: {
    title: "MatchChayn — Where Professionals Find Love",
    description: "Intentional matching, professional networking, and curated events for professionals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MatchChayn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="grain-overlay" />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
