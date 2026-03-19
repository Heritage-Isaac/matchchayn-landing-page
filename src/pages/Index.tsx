import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import phoneMockup from "@/assets/phone-mockup-home.png";
import webappScreenshot from "@/assets/webapp-screenshot.png";
import phonePassword from "@/assets/phone-password.png";
import phoneCreated from "@/assets/phone-account-created.png";
import logo from "@/assets/logo.png";
import { Heart, Link2, Target, Coins, Calendar, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-8">
              <h1 className="font-hero text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                RELAX.<br />CONNECT.<br /><span className="text-accent">MATCH.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Find love on-chain with Web3 professionals. The first DateFi app on Solana.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="pill" size="lg">Download App</Button>
                <Button variant="ghost-pill" size="lg">Try Web App</Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  { label: "10K+ Downloads", icon: "📱" },
                  { label: "Built on Solana", icon: "⚡" },
                  { label: "$CHAIN Rewards", icon: "🪙" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{stat.icon}</span>
                    <span className="font-medium text-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — Phone mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative animate-float">
                <div className="absolute inset-0 rounded-3xl purple-glow opacity-40 blur-2xl" />
                <img
                  src={phoneMockup}
                  alt="MatchChayn mobile app"
                  className="relative w-72 md:w-80 drop-shadow-2xl"
                />
                {/* Floating profile card */}
                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-3 purple-glow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-lg">💜</div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Tiana, 27</p>
                      <p className="text-xs text-muted-foreground">Abuja, 4.5km</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-8 overflow-hidden border-y border-border/50">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 opacity-20">
              <img src={logo} alt="" className="h-6 w-6" />
              <span className="font-heading font-bold text-lg tracking-tight">MATCHCHAYN</span>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Dating, reimagined for Web3</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Every feature is built around intentional connection and on-chain rewards.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Heart className="text-accent" size={28} />, title: "Match and Earn", desc: "Earn $CHAIN tokens every time you match, chat, or go on a date. The more you connect, the more you earn." },
              { icon: <Link2 className="text-accent" size={28} />, title: "Web3 Native", desc: "Connect your Solana wallet, verify your identity on-chain, and show your credentials to potential matches." },
              { icon: <Target className="text-accent" size={28} />, title: "Intentional Dating", desc: "MatchChayn is built for Web3 professionals looking for real connections, not just swipes." },
            ].map((card, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card border border-border rounded-2xl p-8 card-glow h-full">
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE DEEP DIVES */}
      {[
        {
          title: "Swipe with context, not just photos",
          copy: "See who your matches really are — their Web3 credentials, wallet activity, and interests are right there on their profile. No more guessing who you are talking to.",
          highlights: ["Location-based discovery", "Interest tags (Cooking, Painting, Hiking)", "Verification badges"],
          img: phoneMockup,
          imgAlt: "Discover matches",
          reverse: false,
        },
        {
          title: "Full experience on every screen",
          copy: "MatchChayn works beautifully on desktop too. Browse matches, manage your liked profiles, and respond to match requests right from your browser.",
          highlights: ["Full web dashboard", "Matches and Likes panel side by side", "Wallet connect on desktop"],
          img: webappScreenshot,
          imgAlt: "Web app dashboard",
          reverse: true,
          isWeb: true,
        },
        {
          title: "Secure by default",
          copy: "Your account is protected from day one. Password strength indicators, on-chain identity verification, and wallet authentication work together to keep you safe.",
          highlights: ["Password strength meter", "Wallet authentication", "Privacy-first design"],
          img: phonePassword,
          imgAlt: "Secure onboarding",
          reverse: false,
        },
        {
          title: "Set up in minutes, matched in moments",
          copy: "The onboarding flow is built to get you to your first match as fast as possible. Four steps and your profile is live.",
          highlights: ["4-step onboarding", "Photo upload to boost match potential", "Profile goes live immediately"],
          img: phoneCreated,
          imgAlt: "Account created",
          reverse: true,
        },
      ].map((section, i) => (
        <section key={i} className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${section.reverse ? "lg:direction-rtl" : ""}`}>
                <div className={`${section.reverse ? "lg:order-2" : ""}`}>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">{section.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{section.copy}</p>
                  <ul className="space-y-3">
                    {section.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`flex justify-center ${section.reverse ? "lg:order-1" : ""}`}>
                  <div className="relative">
                    <div className="absolute inset-0 rounded-3xl purple-glow opacity-30 blur-2xl" />
                    <img
                      src={section.img}
                      alt={section.imgAlt}
                      className={`relative drop-shadow-2xl ${section.isWeb ? "w-full max-w-lg rounded-xl border border-border" : "w-64 md:w-72"}`}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* Earn Rewards section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Earn $CHAIN just by showing up</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Every interaction on MatchChayn has value. Match with someone, earn tokens. Send a message, earn tokens. Log a real-life date, earn even more.
                </p>
                <ul className="space-y-3">
                  {["Token rewards per action", "Leaderboard", "Redeemable rewards"].map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl purple-glow opacity-30 blur-3xl" />
                  <div className="relative bg-card border border-border rounded-3xl p-8 space-y-6 max-w-sm">
                    <div className="flex items-center gap-4">
                      <Coins className="text-accent" size={40} />
                      <div>
                        <p className="font-heading font-bold text-2xl text-foreground">$CHAIN</p>
                        <p className="text-sm text-muted-foreground">DateFi Token on Solana</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { action: "Match", reward: "+50 $CHAIN" },
                        { action: "Send message", reward: "+10 $CHAIN" },
                        { action: "Log a date", reward: "+200 $CHAIN" },
                      ].map((r) => (
                        <div key={r.action} className="flex justify-between items-center bg-muted rounded-xl px-4 py-3">
                          <span className="text-sm text-foreground">{r.action}</span>
                          <span className="text-sm font-semibold text-accent">{r.reward}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Where the community meets IRL</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">MatchChayn hosts exclusive Web3 dating events, mixers, and crypto socials. Connect digitally, meet in real life.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Unlock the Future of Finance", date: "Mar 28, 2026", location: "Lagos, Nigeria" },
              { name: "MatchChayn Mixer", date: "Apr 12, 2026", location: "Abuja, Nigeria" },
              { name: "DateFi Night", date: "Apr 25, 2026", location: "Online" },
            ].map((event, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden card-glow">
                  <div className="h-32 cta-gradient flex items-center justify-center">
                    <Calendar className="text-foreground/60" size={32} />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-heading font-bold text-foreground">{event.name}</h3>
                    <p className="text-sm text-muted-foreground">{event.date} · {event.location}</p>
                    <Button variant="pill" size="sm" className="w-full">Register</Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="ghost-pill" size="lg" asChild>
              <a href="/community">View all events <ArrowRight size={16} /></a>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default Index;
