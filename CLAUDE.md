# Redline

Web app for freelancers: before signing, they upload a client's contract and learn what it commits them to and what to ask the client to change.

## Read first
- research/summary.md holds the user research. Read it before deciding what the product should do.
- PRD.md is the brief. Read it before building.
- docs/adr/ holds accepted decisions and CONTEXT.md the agreed vocabulary. Where any other wording disagrees with an accepted ADR, the ADR wins.

## Scope: build these and stop
The numbered list under "What the first version does" in PRD.md is the whole of v1.
If something looks like the obvious next step and is not on that list, ask before building it.

Excluded on purpose, do not add: payments, billing, OCR for scanned documents, sharing a document between users.
This version exists to prove the analysis can be trusted. OCR would undermine that: a citation is worthless when the text it points at was misread.
Not served in v1: renters, terms of service and platform terms, anyone who has already signed (ADR 0002). Take-it-or-leave-it uploads are labelled and get no counter-offers, never rejected (ADR 0010).

## Settled decisions (not open for reinterpretation)
- Next.js, Supabase for auth and database, deployed on Vercel.
- Uploads are .pdf and .docx only, parsed in the browser. Only extracted text is stored; never upload or store the original file (ADR 0013).
- The product calls its model through OpenRouter, routed only to providers that neither retain nor train on inputs (ADR 0007).
- Every risk flag cites the exact sentence it came from. A flag whose source cannot be shown is a bug: match the quote with the rule in ADR 0014 and show the stored text span, not the model's string (ADR 0001).

## Not yet decided: ask, do not choose
- Which OpenRouter model to use, among no-retention providers.
- What to do when blocked on a question while unattended.
- Anything PRD.md marks as not decided or *(proposed)*.

## Standing rules
- Keep credentials in .env.local, which is gitignored. Never commit a secret: a key is public the moment it is pushed and has to be rotated.
- The OpenRouter key and Supabase service-role key stay server-side. Never give them a NEXT_PUBLIC_ prefix.
- State only what the document says. Where the text does not support a claim, the product does not make it, including in Q&A answers.
- Never tell the freelancer whether to sign, and never claim a clause is enforceable (ADR 0009).
- A freelancer can read only their own documents and red lines.
- Ask before adding a dependency.
- All copy a user reads in this product, meaning the landing page, UI labels, error messages and empty states, has to be run through the humanizer skill before it is committed. Copy that reads as though a model wrote it is a defect, not a matter of taste.

## Git
- Commit locally in small steps. Never push; the user reviews and pushes.

## Agent skills

### Issue tracker

Issues and specs live as local markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

### Grilling

When running the grilling skill, ask every question with selectable options (recommended answer first), never as free text alone.
