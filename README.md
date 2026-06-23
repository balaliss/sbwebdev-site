# sbwebdev.net

Personal portfolio site for [sbwebdev.net](https://sbwebdev.net). Built with **Astro**, deployed to **Cloudflare Pages** ($0/mo).

**Workspace:** `~/Desktop/sbwebdev.net`

## Quick start

```bash
npm install
npm run dev          # http://localhost:4321
npm run build
npm run deploy       # Cloudflare Pages (needs .env)
npm run status       # local build + live HTTP check
```

## First-time setup

1. See [docs/DEPLOY-CLOUDFLARE.md](docs/DEPLOY-CLOUDFLARE.md) — Cloudflare Pages + GitHub Actions + custom domain
2. Copy `.env.example` → `.env` for CLI deploys
3. Add GitHub secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`

## Project layout

```
src/pages/       Astro routes (home, case studies, writing)
src/data/site.ts Site copy and case study cards
public/          resume.pdf, favicon, robots.txt
deploy.mjs       Build + Cloudflare Pages deploy CLI
site.config.yml  Name, links, domain
.github/         Auto-deploy on push to main
```

## Sync from career-ops

When `cv.md` changes:

```bash
node scripts/sync-from-career-ops.mjs
cp ../Code_Projects/apps/career-ops/site/public/resume.pdf public/resume.pdf
npm run deploy
```

## Related

- Job search pipeline: [career-ops](https://github.com/balaliss/career-ops)
