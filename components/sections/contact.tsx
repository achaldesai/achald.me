import { profile } from "@/lib/data";

const LINKS = [
  { label: "Email", display: profile.email, href: `mailto:${profile.email}` },
  {
    label: "LinkedIn",
    display: profile.linkedin.replace(/^https?:\/\//, "").replace(/\/$/, ""),
    href: profile.linkedin,
  },
  {
    label: "GitHub",
    display: profile.github.replace(/^https?:\/\//, ""),
    href: profile.github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted-foreground">
        Contact
      </h2>
      <ul className="mt-6 flex flex-col gap-2">
        {LINKS.map((link) => (
          <li key={link.label} className="flex gap-3 text-sm">
            <span className="w-16 shrink-0 text-muted-foreground">
              {link.label}
            </span>
            <a
              href={link.href}
              className="underline underline-offset-4 hover:text-muted-foreground"
            >
              {link.display}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
