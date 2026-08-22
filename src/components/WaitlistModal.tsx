import { createContext, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const GENDERS = ["Female", "Male", "Non-binary", "Prefer not to say"];

interface WaitlistCtx {
  open: () => void;
}

const Ctx = createContext<WaitlistCtx>({ open: () => {} });

export const useWaitlist = () => useContext(Ctx);

export const WaitlistProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const reset = () => {
    setName("");
    setGender("");
    setEmail("");
    setError(null);
    setDone(false);
    setLoading(false);
  };

  const open = () => {
    reset();
    setIsOpen(true);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2) return setError("Please enter your full name.");
    if (!gender) return setError("Please select a gender.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return setError("Please enter a valid email address.");

    setLoading(true);
    const { data, error: fnError } = await supabase.functions.invoke("waitlist-signup", {
      body: { name, gender, email },
    });
    setLoading(false);

    if (fnError || (data && (data as { error?: string }).error)) {
      setError((data as { error?: string })?.error ?? "Something went wrong. Please try again.");
      return;
    }
    setDone(true);
  };

  const inputClass =
    "w-full h-12 rounded-full bg-muted border border-border px-5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          {done ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-4"
            >
              <CheckCircle2 className="mx-auto text-accent" size={44} />
              <h3 className="font-hero text-3xl">You're on the list.</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Thanks {name.trim().split(" ")[0]} — we'll email you at {email.trim()} the moment MatchChayn opens up.
              </p>
              <Button variant="pill" size="sm" onClick={() => setIsOpen(false)}>
                Done
              </Button>
            </motion.div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="font-hero text-3xl tracking-[-0.02em]">Join the waitlist</DialogTitle>
                <DialogDescription>
                  Be among the first professionals to experience MatchChayn.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={submit} className="space-y-4 pt-2">
                <input
                  className={inputClass}
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={120}
                />
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger className="w-full h-12 rounded-full bg-muted border-border px-5 text-sm">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    {GENDERS.map((g) => (
                      <SelectItem key={g} value={g}>
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input
                  className={inputClass}
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={200}
                />
                {error && <p className="text-sm text-destructive px-1">{error}</p>}
                <div className="flex gap-3 pt-2">
                  <Button type="submit" variant="pill" className="flex-1" disabled={loading}>
                    {loading ? <Loader2 className="animate-spin" size={16} /> : "Join waitlist"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full flex-1"
                    onClick={() => setIsOpen(false)}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
};
