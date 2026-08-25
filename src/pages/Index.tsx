import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import DownloadAppButton from "@/components/DownloadAppButton";
import phoneMockup from "@/assets/phone-mockup-home.png";
import coupleIntro from "@/assets/couple-intro.png.asset.json";
import coupleCafe from "@/assets/couple-cafe.jpg";
import coupleEvent from "@/assets/couple-event.jpg";
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
import { motion } from "framer-motion";
import { useWaitlist } from "@/components/WaitlistModal";

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

const Index = () => {
  const { open: openWaitlist } = useWaitlist();
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 hairline-grid opacity-[0.35]" />
        <div className="relative container mx-auto px-6 lg:px-[100px]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            <motion.div className="space-y-8" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
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
                <Button variant="pill" size="lg" onClick={openWaitlist}>
                  Join waitlist <ArrowUpRight size={16} />
                </Button>
                <DownloadAppButton />
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 border-t border-border/60">
                {["Intentional matching", "Curated events", "Private Mode"].map((s) => (
                  <span key={s} className="text-sm text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative flex justify-center lg:justify-end" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              <div className="relative animate-float">
                <div className="absolute inset-6 rounded-[3rem] purple-glow opacity-30 blur-3xl" />
                <img src={phoneMockup} alt="MatchChayn app profile discovery screen" className="relative w-72 md:w-80" />
                <div className="absolute -bottom-6 -left-6 glass-card px-4 py-3">
                  <p className="eyebrow mb-1">Matched on</p>
                  <p className="font-hero text-lg">Finance · Web3</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-6 overflow-hidden border-y border-border/60">
        <div className="animate-marquee flex gap-14 whitespace-nowrap">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 opacity-30 shrink-0">
              <img src={logo} alt="" className="h-6 w-6" />
              <span className="font-hero text-lg tracking-tight text-muted-foreground">MatchChayn</span>
            </div>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[100px]">
          <ScrollReveal>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30">
                  <img
                    src={coupleIntro.url}
                    alt="A happy black couple embracing and smiling together"
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="relative w-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <span className="eyebrow">Made for real connection</span>
                <h2 className="font-hero text-4xl md:text-5xl leading-[1.08] tracking-[-0.02em]">
                  A Dating Platform Built for Professionals.
                </h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>Most dating apps leave you sorting through endless profiles with no clear direction.</p>
                  <p>
                    MatchChayn makes discovery easier by helping you connect with professionals based on the industries,
                    communities, and values that matter to you.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LOVE BAND */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-[100px]">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src={coupleCafe}
                alt="A black couple holding hands across a cafe table, smiling in love"
                loading="lazy"
                width={1280}
                height={736}
                className="w-full h-[320px] md:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 p-8 lg:p-12 max-w-xl">
                <span className="eyebrow">Real stories</span>
                <p className="font-hero text-3xl md:text-4xl mt-3 leading-[1.1] tracking-[-0.02em]">
                  Love that starts with something in common.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 border-t border-border/60 scroll-mt-24">
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
      <section id="why" className="py-24 scroll-mt-24">
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
      <section id="more-than-dating" className="py-24 border-t border-border/60 scroll-mt-24">
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
                  src={coupleEvent}
                  alt="A black couple hugging and laughing together at an elegant event"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="relative w-full rounded-2xl border border-border object-cover aspect-[4/3]"
                />
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      <div id="waitlist" className="scroll-mt-24">
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
