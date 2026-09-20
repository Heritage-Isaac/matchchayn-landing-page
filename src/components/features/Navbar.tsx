"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import { useWaitlist } from "@/components/features/WaitlistModal";
import { motion } from "framer-motion";

const navLinks = [
  { label: "How it works", id: "how-it-works" },
  { label: "Why MatchChayn", id: "why" },
  { label: "More than dating", id: "more-than-dating" },
  { label: "Waitlist", id: "waitlist" },
];

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("how-it-works");
  const { open: openWaitlist } = useWaitlist();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = navLinks
        .map((l) => ({ id: l.id, el: document.getElementById(l.id) }))
        .filter((l) => l.el)
        .reduce((acc, l) => (l.el!.getBoundingClientRect().top <= 140 ? l.id : acc), "");
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6 lg:px-[100px]">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
          <img src={logo.src} alt="MatchChayn" className="h-11 w-auto" />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="nav-ghost"
              size="sm"
              onClick={() => scrollToId(link.id)}
              className={active === link.id ? "text-foreground" : ""}
            >
              {link.label}
            </Button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="pill" size="sm" className="text-xs" onClick={openWaitlist}>
            Join waitlist
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setMobileOpen(false);
                scrollToId(link.id);
              }}
              className={`block w-full text-left py-3 text-sm font-medium ${
                active === link.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button variant="pill" size="sm" className="w-full mt-4 text-xs" onClick={() => { setMobileOpen(false); openWaitlist(); }}>
            Join waitlist
          </Button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
