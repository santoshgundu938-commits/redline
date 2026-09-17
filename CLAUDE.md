# Redline

Web app: a user uploads a contract, lease, freelance agreement or terms of service and learns what they are actually signing.

## Read first
- research/summary.md holds the user research. Read it before deciding what the product should do.
- PRD.md will hold the brief once it exists. Read it before building.

## Scope: build these and stop
1. Plain-English summary of the document.
2. Clauses that could hurt the user, ranked by severity, each showing its exact source sentence.
3. A drafted counter-offer for each flagged clause.
4. A question box that answers only from the document.
5. An editable list of the user's own red lines that drives the analysis.
6. A saved library of the user's past documents.

If something looks like the obvious next step and is not on this list, ask before building it.

Excluded on purpose, do not add: payments, billing, OCR for scanned documents, sharing a document between users.
This version exists to prove the analysis can be trusted. OCR would undermine that: a citation is worthless when the text it points at was misread.

## Settled decisions (not open for reinterpretation)
- Next.js, Supabase for auth and database, deployed on Vercel.
- The uploaded file is parsed in the browser. Only extracted text is stored; never upload or store the original file.
- The product calls its model through OpenRouter.
- Every risk flag cites the exact sentence it came from. A flag whose source cannot be shown is a bug: verify the cited sentence appears verbatim in the stored text before showing the flag.

## Not yet decided: ask, do not choose
- Which OpenRouter model to use.
- Which upload file types to accept.
- What to do when blocked on a question while unattended.

## Standing rules
- Keep credentials in .env.local, which is gitignored. Never commit a secret: a key is public the moment it is pushed and has to be rotated.
- The OpenRouter key and Supabase service-role key stay server-side. Never give them a NEXT_PUBLIC_ prefix.
- State only what the document says. Where the text does not support a claim, the product does not make it, including in Q&A answers.
- A user can read only their own documents and red lines.
- Ask before adding a dependency.

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
