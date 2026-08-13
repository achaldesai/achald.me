import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="about" className="scroll-mt-20 py-16">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted-foreground">
        Stack
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-medium">{group.label}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {group.items.map((item) =>
                item.core ? (
                  <Badge
                    key={item.name}
                    variant="secondary"
                    className="px-3 py-1 text-sm font-semibold"
                  >
                    {item.name}
                  </Badge>
                ) : (
                  <Badge
                    key={item.name}
                    variant="outline"
                    className="border-border/60 text-xs font-normal text-muted-foreground"
                  >
                    {item.name}
                  </Badge>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
