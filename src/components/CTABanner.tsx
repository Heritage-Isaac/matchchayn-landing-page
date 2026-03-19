import { Button } from "@/components/ui/button";

const CTABanner = ({ headline = "Find your match on-chain.", sub = "Available on iOS, Android and Web" }) => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 cta-gradient" />
      <div className="absolute inset-0 gradient-mesh" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">{headline}</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="pill" size="xl">Download MatchChayn</Button>
          <Button variant="ghost-pill" size="lg">Try Web App</Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{sub}</p>
      </div>
    </section>
  );
};

export default CTABanner;
