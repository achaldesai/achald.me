import { Separator } from "@/components/ui/separator";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-16">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted-foreground">
        Experience
      </h2>
      <div className="mt-6 flex flex-col gap-6">
        {experience.map((entry, i) => (
          <div key={i}>
            {i > 0 && <Separator className="mb-6" />}
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium">{entry.company}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {entry.start} — {entry.end}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{entry.title}</p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm">
              {entry.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
