import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/data";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <Link href="#top" className="shrink-0 font-mono text-sm font-medium">
          {profile.name}
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href={profile.resumeUrl}
            download
            className={buttonVariants({ size: "sm", variant: "secondary" })}
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
