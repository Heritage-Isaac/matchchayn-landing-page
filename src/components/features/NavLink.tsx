"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ to, children, className, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === to || pathname.startsWith(to + "/");

  return (
    <Link
      href={to}
      onClick={onClick}
      className={cn(
        "relative text-sm font-medium transition-colors hover:text-accent",
        isActive ? "text-accent" : "text-muted-foreground",
        className
      )}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-accent" />
      )}
    </Link>
  );
};

NavLink.displayName = "NavLink";

export { NavLink };
