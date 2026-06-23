---
name: site-deploy
description: Build and deploy sbwebdev.net to Cloudflare Pages. Use when the user asks to push, deploy, or update the live portfolio site.
---

# Deploy sbwebdev.net (Cloudflare Pages)

## Workflow

1. Edit files in `src/` (pages, data, styles).
2. Preview: `npm run dev` → http://localhost:4321
3. Deploy (pick one):
   ```bash
   git push origin main    # auto-deploy via GitHub Actions
   npm run deploy        # CLI via wrangler
   ```
4. Verify: `npm run status` and https://sbwebdev.net

## Prerequisites

- Cloudflare Pages project `sbwebdev` connected to `balaliss/sbwebdev-site`
- GitHub secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- Local CLI: `.env` from `.env.example`

Full setup: [docs/DEPLOY-CLOUDFLARE.md](../../docs/DEPLOY-CLOUDFLARE.md)

## Resume updates

If cv changed in career-ops:
```bash
node scripts/sync-from-career-ops.mjs
cp ../Code_Projects/apps/career-ops/site/public/resume.pdf public/resume.pdf
npm run deploy
```

## Do not

- Commit `.env`
- Use Hostinger SFTP for site deploy (deprecated)
- Cancel Hostinger hosting before verifying Cloudflare cutover
