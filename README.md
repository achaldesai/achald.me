# achald.me

Personal portfolio site for Achal Desai — hero, skills, experience, and projects, built with [Next.js](https://nextjs.org) (App Router), Tailwind v4, [shadcn/ui](https://ui.shadcn.com), and [Base UI](https://base-ui.com).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it.

## Content

All page content — profile, skills, projects, experience — lives in a single file: [`lib/data.ts`](./lib/data.ts). Section components under `components/sections/` just render it; edit content there rather than in the components.

`projects` is sourced from GitHub pinned repos, not the resume.

## Updating the resume

1. Drop the new PDF into `public/`.
2. Run `/sync-resume` in Claude Code to regenerate `profile`, `skillGroups`, and `experience` in `lib/data.ts` from it (see `.claude/commands/sync-resume.md`).
3. Review the diff (`git diff lib/data.ts`) and commit.

## Theming

Dark mode is the default (via [`next-themes`](https://github.com/pacocoursey/next-themes)); light mode is a toggle in the header.

## Deployment

Deployed on [Vercel](https://vercel.com), connected via the Vercel GitHub App scoped to this repo. Pushes to `main` deploy automatically.
