import { Todo } from "@/components/todo";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 py-20">
      <p className="font-mono text-sm text-muted-foreground">
        {profile.location}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <h2 className="mt-2 text-xl text-muted-foreground">
        {profile.roleTarget}
      </h2>
      <p className="mt-6 max-w-xl text-lg">
        <Todo>{profile.positioning}</Todo>
      </p>
    </section>
  );
}
