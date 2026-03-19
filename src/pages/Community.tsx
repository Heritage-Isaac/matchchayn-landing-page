import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import { Calendar, Mic, ShoppingBag, MessageSquare, ArrowRight } from "lucide-react";

const upcomingSpaces = [
  { title: "Dating in Web3 — Finding real connections in a trustless world", date: "Mar 25, 2026 · 7PM WAT", host: "MatchChayn", tags: ["Web3", "Dating"] },
  { title: "The future of DateFi — How on-chain rewards change relationships", date: "Apr 3, 2026 · 7PM WAT", host: "MatchChayn", tags: ["DateFi", "Rewards"] },
  { title: "Web3 Love Stories — Community members share their matches", date: "Apr 15, 2026 · 7PM WAT", host: "MatchChayn", tags: ["Community", "Stories"] },
];

const pastSpaces = [
  { title: "Introduction to MatchChayn — What is DateFi?", date: "Feb 10, 2026", host: "MatchChayn", tags: ["Intro", "DateFi"] },
  { title: "Building trust on-chain — Identity and dating", date: "Jan 22, 2026", host: "MatchChayn", tags: ["Identity", "Trust"] },
  { title: "Solana x Dating — Why we chose Solana", date: "Jan 8, 2026", host: "MatchChayn", tags: ["Solana", "Tech"] },
];

const events = [
  { name: "Unlock the Future of Finance", date: "Mar 28, 2026", location: "Lagos, Nigeria", tag: "Crypto Social" },
  { name: "MatchChayn Mixer — Web3 Professionals", date: "Apr 12, 2026", location: "Abuja, Nigeria", tag: "Mixer" },
  { name: "DateFi Night", date: "Apr 25, 2026", location: "Online", tag: "Virtual Event" },
];

const merch = [
  { name: "MatchChayn Logo Tee", price: "₦15,000" },
  { name: '"Relax. Connect. Match." Hoodie', price: "₦25,000" },
  { name: "MatchChayn Cap", price: "₦10,000" },
  { name: "Limited Edition Web3 Dating Tote", price: "₦8,000" },
];

const testimonials = [
  { name: "Tunde A.", handle: "@tunde_web3", quote: "MatchChayn changed how I think about dating in the Web3 space. Finally, a platform that values real connections." },
  { name: "Amara N.", handle: "@amara_sol", quote: "Earning $CHAIN while finding meaningful connections? This is the future of dating. Love this community!" },
  { name: "Emeka O.", handle: "@emeka_defi", quote: "Met my partner at a MatchChayn mixer. The community is incredible and the app experience is premium." },
];

const Community = () => {
  const [spacesTab, setSpacesTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <main className="relative pt-24">
      {/* HERO */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                The MatchChayn Community
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connect beyond the app. Join spaces, attend events, rep the brand, and be part of Web3's most intentional dating community.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-full border-2 border-primary/30 bg-card flex items-center justify-center text-lg"
                >
                  {["💜", "🔗", "⚡", "🎯", "🪙", "🎉", "✨", "🚀"][i]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TWITTER SPACES */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Tune in. Join the conversation.</h2>
              <p className="text-lg text-muted-foreground">We host regular Twitter Spaces covering Web3, dating, relationships, and the future of DateFi.</p>
            </div>
          </ScrollReveal>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            <Button
              variant={spacesTab === "upcoming" ? "pill" : "ghost-pill"}
              size="sm"
              onClick={() => setSpacesTab("upcoming")}
            >
              Upcoming
            </Button>
            <Button
              variant={spacesTab === "past" ? "pill" : "ghost-pill"}
              size="sm"
              onClick={() => setSpacesTab("past")}
            >
              Past
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(spacesTab === "upcoming" ? upcomingSpaces : pastSpaces).map((space, i) => (
              <ScrollReveal key={`${spacesTab}-${i}`}>
                <div className="bg-card border border-border rounded-2xl p-6 card-glow h-full flex flex-col">
                  <Mic className="text-accent mb-4" size={24} />
                  <h3 className="font-heading font-bold text-foreground mb-2 flex-1">{space.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{space.date}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {space.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">Hosted by {space.host}</p>
                  <Button variant="pill" size="sm" className="w-full">
                    {spacesTab === "upcoming" ? "Set Reminder" : "Listen back →"}
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="ghost-pill" size="lg">
              Follow us on 𝕏 for live Space notifications <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">IRL events for the MatchChayn community</h2>
              <p className="text-lg text-muted-foreground">We bring Web3 professionals together in real life. Mixers, speed dating nights, crypto socials, and more.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden card-glow">
                  <div className="h-36 cta-gradient flex items-center justify-center p-4">
                    <p className="font-heading font-bold text-foreground text-center text-lg">{event.name}</p>
                  </div>
                  <div className="p-6 space-y-3">
                    <p className="text-sm text-muted-foreground">{event.date} · {event.location}</p>
                    <span className="inline-block text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">{event.tag}</span>
                    <Button variant="pill" size="sm" className="w-full mt-2">Register</Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-muted-foreground">
            Host an event with MatchChayn → <a href="#" className="text-accent hover:underline">Get in touch</a>
          </p>
        </div>
      </section>

      {/* MERCH */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Rep the chain</h2>
              <p className="text-lg text-muted-foreground">MatchChayn merch for the community. Wear the brand, start the conversation.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {merch.map((product, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden card-glow">
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <ShoppingBag className="text-muted-foreground" size={40} />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-heading font-semibold text-sm text-foreground">{product.name}</h3>
                    <p className="text-accent font-bold">{product.price}</p>
                    <Button variant="pill" size="sm" className="w-full">Shop now</Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="ghost-pill" size="lg">View full shop <ArrowRight size={16} /></Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">What the community is saying</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card border border-border rounded-2xl p-6 card-glow">
                  <MessageSquare className="text-accent mb-4" size={24} />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-foreground">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.handle}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN COMMUNITY */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">Ready to be part of something real?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { platform: "Twitter / X", count: "12K+", icon: "𝕏" },
                { platform: "Discord", count: "5K+", icon: "💬" },
                { platform: "Telegram", count: "8K+", icon: "✈️" },
                { platform: "Instagram", count: "15K+", icon: "📸" },
              ].map((social) => (
                <a
                  key={social.platform}
                  href="#"
                  className="bg-card border border-border rounded-2xl px-8 py-6 card-glow text-center min-w-[140px]"
                >
                  <p className="text-3xl mb-2">{social.icon}</p>
                  <p className="font-heading font-bold text-foreground text-sm">{social.platform}</p>
                  <p className="text-xs text-muted-foreground mt-1">{social.count} members</p>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default Community;
