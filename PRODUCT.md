# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js, Supabase for auth and database, deployed on Vercel. Settled in CLAUDE.md.

## Users

**Freelancers** (independent contractors) who have been sent a client's **negotiable contract** and have to decide whether to sign it. They cannot judge which clauses could hurt them or how badly. Today they pay a lawyer (around $400 flat), use a $99 review service, paste the contract into a general AI tool, or sign anyway.

Second audience, addressed on the landing page only: people about to accept terms they cannot change (terms of service, platform terms). Their uploads get the take-it-or-leave-it label, summary, risk flags and missing protections, and no counter-offers (ADR 0010, ADR 0015).

Not served in v1: renters, employees weighing an offer, anyone who has already signed (ADR 0002).

Terms in bold follow CONTEXT.md.

## Product Purpose

Before signing, a freelancer uploads the client's contract and learns what it commits them to and what to ask the client to change. v1 exists to prove the analysis can be trusted. Success is measured by the checks in PRD.md "What good looks like", run against a labelled test set.

The full v1 scope is the numbered list under "What the first version does" in PRD.md.

## Positioning

- Every **risk flag** shows its **source sentence**: the exact span of the freelancer's own stored contract text, found by a defined matching rule. A flag whose source cannot be shown is never displayed (ADR 0001, ADR 0014). The freelancer can check every claim against their own document.
- Severity is judged by whether the harm is bounded and whether it can be undone, not by guessing a dollar loss (ADR 0011).
- A **counter-offer** for each risk flag: a plain-language ask with example wording to adapt. No tool in the research drafts these (ADR 0009).
- The freelancer's own **red lines** are checked first and shown above everything else (ADR 0008).

## Operating Context

- A freelancer reviewing a specific client contract, before signing, usually with a deadline set by the client.
- Input is a .pdf or .docx file, parsed in the browser. Only extracted text is stored (ADR 0013).
- The next step after using Redline is a reply to the client, carrying counter-offers.
- Device context is undecided: the research does not show whether freelancers review contracts at a desk or on a phone. Design for both without assuming either is primary.

## Capabilities and Constraints

- Results contain: a plain-English summary; red-line matches; risk flags in top, middle and low tiers; **missing protections**; counter-offers; a question box answered only from the document; a saved library.
- Take-it-or-leave-it documents are labelled at the top and get no counter-offers; they are never rejected (ADR 0010).
- A **clean contract** says "No risk flags" plainly, with no padding and no "consult a lawyer" caveat (ADR 0012).
- Genuinely ambiguous wording is labelled **Unclear** with each reading named; no hedging language elsewhere (ADR 0006).
- Redline never tells the freelancer whether to sign, never claims a clause is enforceable, never predicts a dollar loss, and shows no confidence percentages.
- Contract text goes only to model providers that neither retain nor train on it, and the freelancer is told so before uploading (ADR 0007).
- Each freelancer sees only their own contracts and red lines.
- Not in v1: payments, billing, OCR for scanned documents, sharing between users, formats other than .pdf and .docx.
- Undecided: which model, the red-line format, whether red-line matches get counter-offers, whether question-box answers show source sentences, who labels the test set, and the pass bars PRD.md marks as proposed.

## Brand Commitments

- Name: Redline.
- Voice: confident and plain. State what a clause does; mark real ambiguity as Unclear instead of softening every sentence. Say plainly when a contract is clean.
- All copy a user reads (landing page, UI labels, error messages, empty states) goes through the humanizer skill before it is committed. Copy that reads as though a model wrote it is a defect (CLAUDE.md).
- No logo, visual identity or other brand assets exist yet.

## Evidence on Hand

- User research in research/, summarised in research/summary.md, with sourced quotes and prices.
- No customers, testimonials, case studies, usage data or press exist. Do not invent any.
- The research's dollar-figure freelancer harm stories come from a contract-tool vendor's blog; treat them as illustrative, not independent evidence.
- No first-person evidence that freelancers would pay for this specific product.

## Product Principles

1. Every claim can be checked against the freelancer's own document.
2. Say only what the contract text supports, including in answers to questions.
3. Be useful, not safe: confident statements, explicit ambiguity, and a plain verdict when nothing is wrong.
4. The freelancer decides whether to sign; Redline shows what they would be agreeing to and what to ask for.
5. Protect the freelancer's client's confidential text as carefully as the freelancer's own.

## Accessibility & Inclusion

WCAG 2.2 AA.
