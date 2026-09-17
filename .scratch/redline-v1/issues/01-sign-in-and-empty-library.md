# 01: Sign in and see an empty library

**What to build:** A freelancer can sign in to Redline and land on their own library, which is empty. The app runs on Next.js, deployed on Vercel, with Supabase for auth and data. Data isolation between freelancers is enforced in the database from the start.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [ ] Before adding any dependency (Next.js scaffold, Supabase client, test runner), ask for approval (CLAUDE.md)
- [ ] A freelancer can sign in and sign out with Supabase auth
- [ ] A signed-in freelancer sees an empty library page; a signed-out visitor cannot reach it
- [ ] Contract store seam test against a local Supabase: one freelancer cannot read, list or change another freelancer's rows
- [ ] Credentials live in .env.local only; no key uses a NEXT_PUBLIC_ prefix except the public Supabase anon values
