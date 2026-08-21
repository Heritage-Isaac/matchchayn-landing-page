import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const socials = [
  { label: "Twitter", Icon: Twitter, href: "#" },
  { label: "Instagram", Icon: Instagram, href: "#" },
  { label: "LinkedIn", Icon: Linkedin, href: "#" },
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
            <div className="flex items-center gap-2">
              <img src={logo} alt="MatchChayn" className="h-8 w-8" />
              <span className="font-hero text-xl text-foreground">MatchChayn</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Where professionals find love. Intentional matching, curated networking, and events that bring people together.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
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
                className="flex-1 h-10 rounded-full bg-muted border border-border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <Button variant="pill" size="sm">Join</Button>
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
