---
description: Regenerate lib/data.ts (profile, skills, experience) from the resume PDF in public/
---

You are syncing this portfolio site's content with the resume PDF. Follow these steps:

1. Find the resume PDF in `public/` (glob `public/*.pdf`). If there is more than one, ask which to use. If `$ARGUMENTS` names a specific file, use that instead.
2. Read the PDF with the Read tool and read the current `lib/data.ts`.
3. Update **only** these exports in `lib/data.ts` to match the resume, preserving the existing TypeScript types and object shapes exactly:
   - `profile` (name, roleTarget, location, positioning, email, linkedin, github, resumeUrl — update `resumeUrl` too if the PDF filename changed)
   - `skillGroups`
   - `experience`
4. Do **not** touch `projects` — that array is sourced from GitHub pinned repos, not the resume.
5. Keep prose style consistent with the existing bullets (concise, metric-driven, same voice) rather than pasting raw resume text verbatim if the resume phrasing is choppy.
6. If a field in the resume conflicts with something already in `lib/data.ts` that isn't obviously wrong (e.g. a deliberately shortened bullet), prefer the resume's content but flag the change in your summary.
7. After editing, print a short summary of what changed (new roles, removed bullets, updated skills, etc.) and remind the user to review with `git diff lib/data.ts` before committing. Do not run `git commit` yourself.
