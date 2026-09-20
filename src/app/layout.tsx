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
  keywords: ["Dating", "Professionals", "Matchmaking", "Networking", "Events", "MatchChayn"],
  authors: [{ name: "MatchChayn" }],
  openGraph: {
    title: "MatchChayn — Where Professionals Find Love",
    description: "Intentional matching, professional networking, and curated events for professionals.",
    type: "website",
    siteName: "MatchChayn",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MatchChayn",
  },
  robots: "index, follow",
  verification: {
    google: "google-site-verification-code", // Replace with real Google verification code if you have one
  }
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
