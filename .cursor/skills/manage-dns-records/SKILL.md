---
name: manage-dns-records
description: Read, create, update, and delete DNS records on a Hostinger-managed domain via the Hostinger MCP server. Use for any DNS change, lookup, or troubleshooting on sbwebdev.net.
when-to-use: User wants to add/update/delete an A, AAAA, CNAME, MX, TXT, NS, or SRV record on sbwebdev.net; or asks "what are my DNS records for sbwebdev.net?".
---

# Manage Hostinger DNS records (sbwebdev.net)

Symlinked from Hostinger Cursor plugin. See plugin skill for full workflow.

## When to use

- Point sbwebdev.net at Hostinger hosting after Website Builder migration
- Add TXT for domain verification, SPF, DKIM
- Troubleshoot DNS propagation

## Steps

1. Read current state: `list_dns_records` for `sbwebdev.net`
2. **Snapshot before changing:** `create_dns_snapshot`
3. Show diff and wait for explicit user confirmation
4. Apply via `create_dns_record`, `update_dns_record`, or `delete_dns_record`
5. Re-read records to confirm

## Confirm before

- Deleting any record
- Replacing MX records
- Changing NS or apex A/AAAA records
