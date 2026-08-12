@AGENTS.md

# Project

Personal portfolio site for Achal Desai (achald.me), built with Next.js (App Router), Tailwind v4, shadcn/ui, and Base UI.

- All page content (profile, skills, projects, experience) lives in `lib/data.ts` — components under `components/sections/` just render it. Edit content there, not in the section components.
- `projects` in `lib/data.ts` is sourced from GitHub pinned repos, not the resume — don't overwrite it when syncing resume content.
- Dark mode is the default theme (`next-themes`, `components/theme-provider.tsx`); light mode is an opt-in toggle in the header (`components/theme-toggle.tsx`).
- When the resume PDF in `public/` changes, run `/sync-resume` to regenerate `profile`, `skillGroups`, and `experience` in `lib/data.ts` from it.
- Deploys via Vercel's GitHub App, connected to this repo — pushes to `main` auto-deploy.
- Do not add a `Co-Authored-By: Claude` trailer to commits in this repo — it's a public-facing portfolio and the user doesn't want AI authorship visible to recruiters.
