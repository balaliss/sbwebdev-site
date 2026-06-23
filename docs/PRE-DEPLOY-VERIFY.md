# Pre-deploy verification (2026-06-23)

Local build passed. Production deploy pending hPanel migration + `.env`.

## Build output

| Route | dist file |
|-------|-----------|
| `/` | `dist/index.html` |
| `/writing` | `dist/writing/index.html` |
| `/work/transcarent` | `dist/work/transcarent/index.html` |
| `/work/persevere` | `dist/work/persevere/index.html` |
| `/work/network-funnel` | `dist/work/network-funnel/index.html` |
| `/resume.pdf` | `public/resume.pdf` (copied to dist on build) |

## Live site (current)

Still **Hostinger Website Builder** until:

1. hPanel migration (see MIGRATION-STATUS.md)
2. `.env` with SFTP credentials
3. `npm run deploy`

## After deploy, verify

```bash
npm run status
node scripts/verify-dns.mjs
curl -sI https://sbwebdev.net/work/transcarent | head -3
```

Expect Astro static HTML (not `HostingerWebsiteBuilder` header).
