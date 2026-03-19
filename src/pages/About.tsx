import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import { Check, Clock, ArrowRight } from "lucide-react";

const phases = [
  {
    label: "Phase 1 — Foundation",
    date: "Q3 2025",
    status: "Completed",
    items: ["Brand identity and design system", "Mobile app design (iOS and Android)", "Web app design", "Landing page"],
  },
  {
    label: "Phase 2 — Launch",
    date: "Q1 2026",
    status: "In Progress",
    items: ["Mobile app development", "Web app development", "Wallet connect integration", "$CHAIN token design"],
  },
  {
    label: "Phase 3 — Growth",
    date: "Q3 2026",
    status: "Coming Soon",
    items: ["Public beta launch", "Events platform", "Token rewards live"],
  },
  {
    label: "Phase 4 — Scale",
    date: "2027",
    status: "Future",
    items: ["$CHAIN token launch on Solana", "DateFi protocol open to developers", "Global expansion"],
  },
];

const team = [
  { name: "Alex Ojo", role: "CEO & Founder" },
  { name: "Chioma Eze", role: "CTO" },
  { name: "David Nwosu", role: "Head of Design" },
  { name: "Fatima Bello", role: "Head of Community" },
  { name: "Samuel Adeyemi", role: "Lead Engineer" },
  { name: "Grace Okafor", role: "Marketing Lead" },
];

const About = () => {
  return (
    <main className="relative pt-24">
      {/* HERO */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Building the future of connection, on-chain.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MatchChayn exists because Web3 professionals deserve more than swipes. We are building the first dating protocol where real connections are rewarded.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <blockquote className="font-heading text-3xl md:text-4xl font-bold text-foreground italic leading-snug border-l-4 border-primary pl-8">
                "The next generation of meaningful relationships will be built on-chain."
              </blockquote>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>Traditional dating apps are broken. They optimize for engagement, not connection. Endless swipes, superficial profiles, and zero accountability have left millions feeling frustrated and disconnected.</p>
                <p>MatchChayn is for Web3 professionals — builders, creators, investors, and enthusiasts who value transparency, identity, and intentional relationships.</p>
                <p>We are pioneering DateFi — a new category where dating meets decentralized finance. Every meaningful interaction earns rewards, creating a virtuous cycle of real connections and real value.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BUILT ON SOLANA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-5xl mb-6">⚡</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Why Solana?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Fast, low-cost, and built for scale. Solana lets MatchChayn reward users in real time without gas fees killing the experience.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "400ms", label: "Transaction Speed" },
              { stat: "~$0.00025", label: "Average Fee" },
              { stat: "11.5M+", label: "Active Wallets" },
            ].map((s, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card border border-border rounded-2xl p-8 card-glow text-center">
                  <p className="font-heading text-4xl font-bold text-accent mb-2">{s.stat}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Where we are going</h2>
              <p className="text-lg text-muted-foreground">MatchChayn is building in public. Here is what we have shipped and what is coming next.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card border border-border rounded-2xl p-6 card-glow h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    {phase.status === "Completed" ? (
                      <Check size={16} className="text-green-400" />
                    ) : phase.status === "In Progress" ? (
                      <Clock size={16} className="text-accent" />
                    ) : (
                      <ArrowRight size={16} className="text-muted-foreground" />
                    )}
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      phase.status === "Completed" ? "bg-green-400/10 text-green-400" :
                      phase.status === "In Progress" ? "bg-accent/10 text-accent" :
                      "bg-muted text-muted-foreground"
                    }`}>{phase.status}</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground mt-3 mb-1">{phase.label}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{phase.date}</p>
                  <ul className="space-y-2 mt-auto">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">The people building MatchChayn</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card border border-border rounded-2xl p-6 card-glow text-center">
                  <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center text-2xl">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                  <div className="flex justify-center gap-3 mt-4">
                    <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">𝕏</a>
                    <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">in</a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTORS MARQUEE */}
      <section className="py-16 border-t border-border overflow-hidden">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl font-bold text-foreground">Backed by the best</h2>
          </div>
        </ScrollReveal>
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="w-32 h-12 rounded-lg border border-border bg-card flex items-center justify-center text-xs text-muted-foreground flex-shrink-0">
              Partner {(i % 5) + 1}
            </div>
          ))}
        </div>
      </section>

      <CTABanner headline="Ready to find your match?" />
    </main>
  );
};

export default About;
