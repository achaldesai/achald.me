import { profile } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-3xl px-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
