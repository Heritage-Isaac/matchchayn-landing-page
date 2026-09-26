import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/features/providers";
import Navbar from "@/components/features/Navbar";
import Footer from "@/components/features/Footer";
import "@/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MatchChayn | Exclusive Dating & Networking for Professionals",
    template: "%s | MatchChayn",
  },
  description:
    "MatchChayn is the premier dating and networking platform for ambitious professionals. Discover intentional matching, curated events, and a secure environment to find love and expand your professional network.",
  keywords: [
    "dating app for professionals",
    "professional dating",
    "elite matchmaking",
    "professional networking",
    "career and love",
    "executive dating",
    "MatchChayn",
  ],
  authors: [{ name: "Heritage Isaac" }, { name: "MatchChayn Team" }],
  creator: "Heritage Isaac",
  publisher: "MatchChayn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://matchchayn.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MatchChayn | Exclusive Dating & Networking for Professionals",
    description:
      "Join the exclusive community where career ambitions meet meaningful relationships. Intentional matching, professional networking, and curated events.",
    url: "https://matchchayn.com",
    siteName: "MatchChayn",
    images: [
      {
        url: "https://res.cloudinary.com/dwuaixu4c/image/upload/matchchayn-emails/couple-intro.png",
        width: 1200,
        height: 630,
        alt: "MatchChayn - Where Professionals Find Love",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MatchChayn | Exclusive Dating & Networking",
    description:
      "Join the exclusive community where career ambitions meet meaningful relationships.",
    images: ["https://res.cloudinary.com/dwuaixu4c/image/upload/matchchayn-emails/couple-intro.png"],
    creator: "@MatchChayn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", 
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
