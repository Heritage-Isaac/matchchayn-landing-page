"use client";
import { Button } from "@/components/ui/button";
import DownloadAppButton from "@/components/features/DownloadAppButton";
import { ArrowUpRight } from "lucide-react";
import { useWaitlist } from "@/components/features/WaitlistModal";
import { motion } from "framer-motion";

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
  const { open: openWaitlist } = useWaitlist();
  return (
    <section className="relative py-28 overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 cta-gradient opacity-70" />
      <div className="absolute inset-0 gradient-mesh" />
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative container mx-auto px-6 lg:px-[100px] max-w-3xl text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="font-hero text-4xl md:text-5xl mt-4 mb-6 leading-[1.08] tracking-[-0.02em]">{headline}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-9">{sub}</p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button variant="pill" size="lg" onClick={openWaitlist}>
            Join waitlist <ArrowUpRight size={16} />
          </Button>
          <DownloadAppButton />
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
