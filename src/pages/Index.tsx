import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import phoneMockup from "@/assets/phone-mockup-home.png";
import webappScreenshot from "@/assets/webapp-screenshot.png";
import logo from "@/assets/logo.png";
import {
  Briefcase,
  Users,
  CalendarHeart,
  EyeOff,
  Compass,
  Sparkles,
  MessagesSquare,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Compass,
    title: "Tell us who you want to meet",
    desc: "Choose the kinds of professionals you want to discover.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Get intentional matches",
    desc: "Our algorithm is designed to match people aligned with your preferences.",
  },
  {
    n: "03",
    icon: MessagesSquare,
    title: "Connect beyond swiping",
    desc: "Build relationships through conversations, networking, and real-world events.",
  },
];

const reasons = [
  {
    icon: Briefcase,
    title: "Professional-Based Matching",
    desc: "Discover people across tech, medicine, finance, aviation, law, and more.",
  },
  {
    icon: Users,
    title: "Networking Meets Dating",
    desc: "Build relationships and meaningful connections in one place.",
  },
  {
    icon: CalendarHeart,
    title: "Events & Social Discovery",
    desc: "Attend or create curated events that bring people together offline.",
  },
  {
    icon: EyeOff,
    title: "Private by Choice",
    desc: "Use Private Mode when you want discreet browsing.",
  },
];

const pillars = ["Intentional People", "Meaningful Connections", "Professional Networking", "Curated Events"];

const industries = ["Tech", "Medicine", "Finance", "Aviation", "Law", "Web3", "Design", "Academia"];

const Index = () => {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 hairline-grid opacity-[0.35]" />
        <div className="relative container mx-auto px-6 lg:px-[100px]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            <div className="space-y-8">
              <span className="eyebrow">MatchChayn</span>
              <h1 className="font-hero text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.02em]">
                Where Professionals
                <br />
                <span className="italic text-accent">Find Love.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Find the right person through intentional matching, curated networking, and a platform designed to make
                discovering the right people easier.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="pill" size="lg" asChild>
                  <a href="#waitlist">
                    Join waitlist <ArrowUpRight size={16} />
                  </a>
                </Button>
                <Button variant="ghost-pill" size="lg" disabled>
                  Download app — coming soon
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 border-t border-border/60">
                {["Intentional matching", "Curated events", "Private Mode"].map((s) => (
                  <span key={s} className="text-sm text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative animate-float">
                <div className="absolute inset-6 rounded-[3rem] purple-glow opacity-30 blur-3xl" />
                <img src={phoneMockup} alt="MatchChayn app profile discovery screen" className="relative w-72 md:w-80" />
                <div className="absolute -bottom-6 -left-6 glass-card px-4 py-3">
                  <p className="eyebrow mb-1">Matched on</p>
                  <p className="font-hero text-lg">Finance · Web3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-6 overflow-hidden border-y border-border/60">
        <div className="animate-marquee flex gap-16 whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10 opacity-30">
              {industries.map((ind) => (
                <span key={ind} className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
                  {ind}
                </span>
              ))}
              <img src={logo} alt="" className="h-5 w-5" />
            </div>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[100px]">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <h2 className="font-hero text-4xl md:text-5xl leading-[1.08] tracking-[-0.02em]">
                A Dating Platform Built for Professionals.
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed lg:pt-2">
                <p>Most dating apps leave you sorting through endless profiles with no clear direction.</p>
                <p>
                  MatchChayn makes discovery easier by helping you connect with professionals based on the industries,
                  communities, and values that matter to you.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 border-t border-border/60">
        <div className="container mx-auto px-6 lg:px-[100px]">
          <ScrollReveal>
            <span className="eyebrow">How MatchChayn works</span>
            <h2 className="font-hero text-4xl md:text-5xl mt-4 mb-14 tracking-[-0.02em]">Three steps to the right person.</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden">
            {steps.map((s) => (
              <div key={s.n} className="bg-card p-8 lg:p-10 group transition-colors hover:bg-surface">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-hero text-3xl text-accent/70">{s.n}</span>
                  <s.icon className="text-muted-foreground group-hover:text-accent transition-colors" size={22} />
                </div>
                <h3 className="font-hero text-2xl mb-3 leading-snug">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[100px]">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <span className="eyebrow">Why professionals choose MatchChayn</span>
              <h2 className="font-hero text-4xl md:text-5xl mt-4 tracking-[-0.02em]">
                Built for people with intent.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <ScrollReveal key={r.title}>
                <div className="soft-card h-full">
                  <r.icon className="text-accent mb-6" size={26} />
                  <h3 className="font-hero text-2xl mb-3">{r.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MORE THAN DATING */}
      <section className="py-24 border-t border-border/60">
        <div className="container mx-auto px-6 lg:px-[100px]">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="eyebrow">More than dating</span>
                <h2 className="font-hero text-4xl md:text-5xl mt-4 mb-8 tracking-[-0.02em]">
                  MatchChayn brings together:
                </h2>
                <ul className="divide-y divide-border/60 border-y border-border/60">
                  {pillars.map((p) => (
                    <li key={p} className="flex items-center justify-between py-5 group">
                      <span className="font-hero text-2xl md:text-3xl">{p}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-lg text-muted-foreground italic">
                  Where intentional people connect, meaningful relationships begin.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-10 purple-glow opacity-20 blur-3xl" />
                <img
                  src={webappScreenshot}
                  alt="MatchChayn web experience"
                  className="relative w-full rounded-2xl border border-border"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div id="waitlist">
        <CTABanner
          eyebrow="Join the waitlist"
          headline="Ready to meet someone who matches your world?"
          sub="Join the MatchChayn waitlist and be among the first to experience a new way to connect, network, and build meaningful relationships."
        />
      </div>
    </main>
  );
};

export default Index;
