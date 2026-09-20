"use client";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Send, Youtube, Facebook, Music2 } from "lucide-react";
import logo from "@/assets/logo.svg";

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.6l-5.2-6.8L5.5 22H2.4l7.3-8.3L1.2 2h6.7l4.8 6.4L18.9 2zm-1.1 18h1.8L6.4 3.8H4.5L17.8 20z" />
  </svg>
);

const socials = [
  { label: "X", Icon: XIcon, href: "https://x.com/MatchChayn" },
  { label: "Instagram", Icon: Instagram, href: "https://www.instagram.com/matchchayn/" },
  { label: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/company/matchchayn" },
  { label: "Telegram", Icon: Send, href: "https://t.me/matchchayn" },
  { label: "TikTok", Icon: Music2, href: "https://tiktok.com/@matchchayn" },
  { label: "YouTube", Icon: Youtube, href: "https://www.youtube.com/@MatchChayn" },
  { label: "Facebook", Icon: Facebook, href: "https://www.facebook.com/share/1Ae6wtP7em" },
];

const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const sectionLinks = [
  { label: "How it works", id: "how-it-works" },
  { label: "Why MatchChayn", id: "why" },
  { label: "More than dating", id: "more-than-dating" },
  { label: "Join waitlist", id: "waitlist" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background relative">
      <div className="container mx-auto px-6 lg:px-[100px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo.src} alt="MatchChayn" className="h-11 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Where professionals find love. Intentional matching, curated networking, and events that bring people together.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-foreground">Explore</h4>
            {sectionLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-foreground">Stay in the loop</h4>
            <p className="text-sm text-muted-foreground">Get updates on features, launches, and curated events.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-10 min-w-0 rounded-full bg-muted border border-border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <Button variant="pill" size="sm" className="px-6 shrink-0">Join</Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 MatchChayn. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">
            Built by{" "}
            <a
              href="https://heritageisaac.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Heritage Isaac
            </a>
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
