---
version: 1
slug: "src-app-app-layout-tsx"
primary_target: "src/app/(app)/layout.tsx"
related_targets: []
---

# Surface brief: App shell

## Scope and mode

The signed-in frame of the product and the screens it holds. Mode: Operate. Brief only; nothing is built until its tickets (01, 02, 05 onward) run.

## Audience and task

A signed-in freelancer checking one client contract against a deadline, occasionally returning to past contracts. Take-it-or-leave-it readers use the same frame and see no counter-offers.

## What the frame holds

- Upload: a .pdf or .docx with selectable text, the no-retention statement shown before upload, the .doc save-as-.docx screen, and rejections for other files and scans (ADR 0013). No paste.
- Result for one contract, in this order: take-it-or-leave-it label when it applies; red-line matches; risk flags by tier, each with its source sentence and counter-offer; missing protections; summary placement still open.
- Clean contract: "No risk flags" said plainly with summary and missing protections, nothing added (ADR 0012).
- Question box scoped to the open contract, answering only from it.
- Red lines: the freelancer's own editable list.
- Library: past contracts, reopened without re-uploading.

## States that must exist

Empty library; uploading and extracting; rejected file; analysing; result; clean result; take-it-or-leave-it result; a flag marked Unclear with its readings; question answered; question the document doesn't answer; no red lines yet; red line matched.

## World

Hazard Label, inherited from the landing page's direction contract (seed 7e392d9b). In Operate mode the task and state lead: flags are label sheets pinned to their sentences, severity colours stay reserved for flags, red lines read as the freelancer's own lockout tags, a clean result is a blue NOTICE panel, never green (green would read as "safe to sign"). Scanability and keyboard use outrank expression; the signage lives in precise details.

## Constraints

- Every flag and red-line match shows its stored source sentence (ADR 0001, ADR 0014).
- No sign/don't-sign advice, enforceability claims, dollar predictions or confidence percentages.
- WCAG 2.2 AA. Device context undecided: design for desk and phone equally.
- All copy goes through the humanizer skill before commit.

## Unresolved

- Screen structure and navigation between result, question box, red lines and library: needs a surface-scope round when the first shell ticket starts.
- Red-line format, counter-offers on red-line matches, and whether answers show source sentences (ticket 09).
- Whether signal words become the tier names users see.
