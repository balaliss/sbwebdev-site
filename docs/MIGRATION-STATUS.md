# Migration status

**Last updated:** 2026-06-23

## Automated (done)

- [x] Standalone repo: `~/Code_Projects/apps/sbwebdev-site`
- [x] Astro site built locally (`npm run build` → `dist/`)
- [x] SFTP deploy script (`deploy.mjs`) + `.env.example`
- [x] Migration guide: [HOSTINGER-MIGRATION.md](HOSTINGER-MIGRATION.md)
- [x] Content refresh + design pass complete

## Manual (your hPanel steps)

- [ ] Disconnect **Website Builder** for sbwebdev.net (export/screenshot first)
- [ ] Attach domain to **Premium Web Hosting**
- [ ] Enable **Remote Access** (SFTP port 65002)
- [ ] Create FTP account → copy credentials to `.env`

After `.env` is filled:

```bash
cd ~/Code_Projects/apps/sbwebdev-site
npm run deploy
node scripts/verify-dns.mjs
```

Live site will switch from Builder to Astro once deploy succeeds.
