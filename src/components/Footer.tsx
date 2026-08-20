import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background relative">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="MatchChayn" className="h-8 w-8" />
              <span className="font-hero text-xl text-foreground">MatchChayn</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where professionals find love. Intentional matching, curated networking, and events that bring people together.
            </p>
            <div className="flex gap-3">
              {["X", "Discord", "TG", "IG"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-foreground">Product</h4>
            {["Features", "Join Waitlist", "Web App", "Private Mode", "Events"].map((item) => (
              <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-foreground">Company</h4>
            {[
              { label: "About", href: "/about" },
              { label: "Community", href: "/community" },
              { label: "Careers", href: "#" },
              { label: "Press", href: "#" },
            ].map((item) => (
              <Link key={item.label} to={item.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </Link>
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
