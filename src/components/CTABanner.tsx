import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface CTABannerProps {
  eyebrow?: string;
  headline?: string;
  sub?: string;
}

const CTABanner = ({
  eyebrow = "Join the waitlist",
  headline = "Ready to meet someone who matches your world?",
  sub = "Join the MatchChayn waitlist and be among the first to experience a new way to connect, network, and build meaningful relationships.",
}: CTABannerProps) => {
  return (
    <section className="relative py-28 overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 cta-gradient opacity-70" />
      <div className="absolute inset-0 gradient-mesh" />
      <div className="relative container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="font-hero text-4xl md:text-5xl mt-4 mb-6 leading-[1.08] tracking-[-0.02em]">{headline}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-9">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="pill" size="xl" asChild>
            <a href="#waitlist">
              Join waitlist <ArrowUpRight size={16} />
            </a>
          </Button>
          <Button variant="ghost-pill" size="lg" disabled>
            Download app — coming soon
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
