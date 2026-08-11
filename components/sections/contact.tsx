import { Todo } from "@/components/todo";
import { profile } from "@/lib/data";

const LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: profile.linkedin, href: profile.linkedin },
  { label: "GitHub", value: profile.github, href: profile.github },
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
            <Todo>{link.value}</Todo>
          </li>
        ))}
      </ul>
    </section>
  );
}
