# Spec: Redline v1

Status: ready-for-agent

Source: PRD.md, CONTEXT.md, docs/adr/0001–0014 (0003 and 0005 are superseded). Terms follow CONTEXT.md.

## Problem Statement

A freelancer has been sent a client's contract and has to decide whether to sign it. They cannot tell which clauses could hurt them or how badly. The worst ones, such as uncapped indemnity or liability, can cost far more than the fee. A lawyer's review costs around $400 and takes time the engagement may not allow. So most freelancers either sign without understanding, ask strangers online, or paste the contract into a general AI tool that struggles with legal text and gives answers they cannot check. They also rarely know what to ask the client to change.

## Solution

The freelancer uploads the client's contract (.pdf or .docx) before signing. Redline shows:

- A plain-English summary of what the contract commits them to.
- Clauses that match their own red lines, listed first.
- Risk flags ranked by severity tier, each showing the exact source sentence from their document.
- Missing protections from a fixed checklist.
- A counter-offer for each risk flag: a plain-language ask with example wording to adapt.

When nothing qualifies, it says "No risk flags" plainly. When the document looks like take-it-or-leave-it terms, it says so and gives no counter-offers. The freelancer can ask questions answered only from the document, keep an editable list of red lines, and return to past contracts in their library. Every claim can be checked against the freelancer's own document, and nothing is claimed that the text does not support.

## User Stories

### Account and privacy

1. As a freelancer, I want to sign in, so that my contracts and red lines are kept for me.
2. As a freelancer, I want to be certain no other freelancer can see my contracts, analyses or red lines, so that I can upload client documents safely.
3. As a freelancer, I want to be told plainly before uploading that my contract text goes only to model providers that do not keep or train on it, so that I can judge whether uploading could breach my client's confidentiality clause.
4. As a freelancer, I want that statement shown before upload rather than buried in terms of use, so that I actually see it.

### Upload

5. As a freelancer, I want the file picker to offer only .pdf and .docx files, so that I don't pick a file Redline cannot read.
6. As a freelancer, I want a short, plain message when I upload a .doc file, telling me to save it as .docx and upload again, so that I know exactly how to fix it.
7. As a freelancer, I want any other file type rejected even if I drag it in or bypass the picker filter, so that I never get a broken analysis.
8. As a freelancer, I want my file read in my browser and only its text stored, so that the original document never leaves my machine.
9. As a freelancer uploading a scanned PDF with no text layer, I want to be told it cannot be analysed, so that I don't receive an empty or invented result.
10. As a freelancer, I want to see that my upload is being analysed, so that I know to wait.

### Summary

11. As a freelancer, I want a plain-English summary of what the contract commits me to, so that I understand the deal without legal training.
12. As a freelancer, I want the summary to state only what the contract says, so that I am not misled by assumptions.

### Risk flags

13. As a freelancer, I want clauses that could hurt me flagged, so that I know where to look before signing.
14. As a freelancer, I want each risk flag to show the exact sentence from my contract it came from, so that I can check the flag myself.
15. As a freelancer, I want the source sentence shown exactly as it appears in my stored contract text, so that I know it was not reworded.
16. As a freelancer, I want never to see a flag whose source sentence cannot be found in my contract, so that I can trust every flag points at real text.
17. As a freelancer, I want flags grouped into top, middle and low severity tiers, so that I know what to push back on first.
18. As a freelancer, I want uncapped liability and uncapped indemnity flagged as top tier, so that I never miss exposure with no ceiling.
19. As a freelancer, I want IP assignment beyond the deliverable flagged as top tier, so that I don't give away existing work or everything I create during the engagement.
20. As a freelancer, I want a non-compete or exclusivity clause with no limit on scope or duration flagged as top tier, so that I don't lose the ability to take other work indefinitely.
21. As a freelancer, I want Redline to lean toward flagging anything that might be top tier, so that the costliest clauses are not missed even at the price of some false alarms.
22. As a freelancer, I want capped liability or indemnity well above my fee, and limited non-competes or exclusivity, flagged as middle tier, so that I see bounded but significant risks.
23. As a freelancer, I want pay-if-paid clauses, and pay-when-paid clauses with no outer deadline, flagged as middle tier, so that I know when my fee depends on the client's customer paying.
24. As a freelancer, I want a clause letting the client terminate at any time without paying for work already done flagged as middle tier, so that I see the risk of being dropped mid-project unpaid.
25. As a freelancer, I want arbitration clauses and class-action waivers flagged as middle tier, so that I know disputes would leave the courts.
26. As a freelancer, I want pay-when-paid clauses with a stated outer deadline, and auto-renewal clauses, flagged as low tier, so that I see minor risks without mistaking them for serious ones.
27. As a freelancer, I want only clearly supported flags below the top tier, so that minor noise does not bury what matters.
28. As a freelancer, I want each flag to say plainly and confidently what the clause does, so that I can act on it.
29. As a freelancer, I want a clause that genuinely supports more than one reading labelled "Unclear" with each reading named, so that I know where the wording itself is the problem.
30. As a freelancer, I want no hedging language such as "may" or "could potentially" outside Unclear flags, so that the output tells me something.
31. As a freelancer, I want no predicted dollar losses and no confidence percentages, so that I am not given numbers the contract does not support.
32. As a freelancer, I want a risk that arises from several clauses together to show every sentence involved, so that I can check the whole chain.

### Missing protections

33. As a freelancer, I want a separate list of protections my contract lacks, such as a liability cap, payment terms or termination notice, so that I see risks created by what is left out.
34. As a freelancer, I want missing protections kept apart from risk flags and not ranked, so that I don't confuse an absence with a quoted clause.
35. As a freelancer, I want a protection that is present not reported as missing, so that the list stays accurate.

### Red lines

36. As a freelancer, I want to keep an editable list of my own red lines, so that Redline checks every contract against what I will not accept.
37. As a freelancer, I want to add, change and remove red lines at any time, so that the list reflects my current terms.
38. As a freelancer, I want clauses that match my red lines shown first, above the risk flags, so that my own deal-breakers are never buried.
39. As a freelancer, I want each red-line match to show its source sentence, so that I can check it like any other flag.
40. As a freelancer, I want a red-line match to appear even when Redline would rank the clause low or not flag it at all, so that my own priorities are respected.
41. As a freelancer whose red line is something a contract should contain (for example a kill fee), I want its absence reported under missing protections, so that it is not lost.

### Counter-offers

42. As a freelancer, I want a counter-offer for each risk flag, so that I know what to ask the client to change.
43. As a freelancer, I want each counter-offer to be a plain-language ask, so that I understand what I am asking for.
44. As a freelancer, I want example wording with each ask, labelled as a starting point, so that I have something to adapt when I reply to the client.
45. As a freelancer, I want Redline never to tell me whether to sign, so that the decision stays mine.
46. As a freelancer, I want Redline never to claim a clause or its replacement is enforceable, so that I am not given legal assurances it cannot make.

### Take-it-or-leave-it documents

47. As a freelancer who uploads terms of service or platform terms, I want the result to say at the top that the document looks like take-it-or-leave-it terms, so that I understand why there are no counter-offers.
48. As that freelancer, I want the summary, risk flags and missing protections still shown, so that I still learn what I am agreeing to.
49. As that freelancer, I want my upload never rejected for looking like take-it-or-leave-it terms, so that a misjudged client contract is still analysed.

### Clean contracts

50. As a freelancer whose contract has nothing that qualifies, I want the result to say "No risk flags" plainly, so that I can trust the tool is not inventing problems.
51. As that freelancer, I want the summary and missing-protections checklist still shown, so that I still see what the contract says and lacks.
52. As that freelancer, I want no padding notes and no "consult a lawyer" caveat on the verdict, so that a clean result means something.

### Questions

53. As a freelancer, I want to ask questions about my contract, so that I can check specific concerns.
54. As a freelancer, I want answers drawn only from my contract, so that I am not told things it does not say.
55. As a freelancer, I want to be told plainly when my contract does not answer a question, so that I don't mistake a guess for the contract's terms.

### Library

56. As a freelancer, I want every contract I upload saved to my library, so that I can come back to it.
57. As a freelancer, I want to reopen a past contract and see its analysis, so that I don't have to upload it again.
58. As a freelancer, I want to ask questions about a past contract from my library, so that I can check something before a later conversation with the client.
59. As a freelancer, I want the stored text of my contract never altered after upload, so that its source sentences keep pointing at the same text.

## Implementation Decisions

### Modules

- **Text extraction (browser).** Turns a chosen file into contract text or a rejection. It accepts .pdf and .docx, checking the file itself and not only the picker filter. It rejects .doc with a dedicated reason that drives the save-as-.docx screen, rejects other types, and reports a PDF with no text layer as not analysable. It never uploads the file. Its output is the stored contract text, kept exactly as extracted (ADR 0001, ADR 0013).
- **Contract store.** Stores each freelancer's contract text, analysis results and red lines in Supabase. Isolation is enforced at the database level, so a freelancer can read only their own rows. Contract text is written once and never modified. Auth is Supabase.
- **Model gateway (server-side only).** The only path to a model. Calls OpenRouter with the key held on the server, routed only to providers that neither retain nor train on inputs (ADR 0007). The model is configuration, since the choice is still undecided.
- **Analysis module (server-side).** The main module and the primary test seam. It has a small interface:
  - **Analyse:** takes stored contract text and the freelancer's red lines; returns an analysis.
  - **Ask:** takes stored contract text and a question; returns an answer or "the document doesn't say".
  - The model gateway is injected, so tests can supply a scripted model.
  - Internally it owns: the prompt carrying the tier definitions and worked examples from PRD.md; the missing-protections checklist (liability cap, payment terms, termination notice, owned as product data); take-it-or-leave-it classification; and the citation matcher.
- **Citation matcher (inside the analysis module).** Implements ADR 0014:
  - For comparison only, normalize both quote and stored text: Unicode NFKC, remove zero-width characters, straighten curly quotes, lowercase, remove all whitespace and all hyphen and dash characters.
  - Require the whole normalized quote to appear, so partial quotes or quotes shortened with an ellipsis never match.
  - Map the match back to the original span of the stored text, which is what gets shown.
  - A risk flag or red-line match whose quote does not match is dropped, never shown.
- **Result view, red-lines editor, library view (client).** Present what the analysis module returns; they do not decide content.

### Analysis result (shape in prose)

- **Take-it-or-leave-it label:** present or absent. When present, counter-offers are omitted everywhere.
- **Summary:** plain-English text.
- **Red-line matches:** each with the red line matched and one or more source spans.
- **Risk flags:** each with a tier (top, middle, low), a plain statement of what the clause does, an Unclear label with the named readings when applicable, one or more source spans, and a counter-offer (a plain-language ask plus example wording marked as a starting point) unless the take-it-or-leave-it label is present.
- **Missing protections:** checklist items the contract lacks, plus red lines about required content that are absent. No source spans.
- **"No risk flags" state:** when there are no red-line matches and no risk flags.
- **Ordering in the view:** take-it-or-leave-it label at the top, then red-line matches above risk flags ordered by tier, then missing protections. Where the summary sits relative to these is a presentation choice not fixed by the brief.

### Rules the analysis module enforces

- No predicted dollar losses, confidence percentages, "sign / don't sign" advice or enforceability claims appear in any output (ADR 0006, ADR 0009).
- No hedging words outside Unclear flags (ADR 0006).
- Leaning toward over-flagging applies only to the top tier; lower tiers require clear textual support (ADR 0012).
- Answers to questions use only the contract text.

### Constraints

- All model calls and secrets stay server-side; no key has a NEXT_PUBLIC_ prefix.
- Every new dependency needs approval first. That includes the Next.js scaffold, Supabase client, PDF and .docx parsers, test runner and OpenRouter client.
- Stack: Next.js on Vercel, Supabase for auth and database.

## Testing Decisions

A good test exercises behaviour through a seam and asserts on what a freelancer would see or what the stored data allows, never on prompt text, internal helpers or call order.

Three seams, confirmed:

1. **Analysis seam (analyse and ask).**
   - **With a scripted model (deterministic, runs on every change):**
     - Matching-rule fixtures. True quotes still match despite line breaks, words hyphenated across lines, ligatures, curly quotes, en and em dashes, non-breaking and zero-width spaces, and different case. Partial, ellipsis-shortened and one-word-changed quotes do not match.
     - The shown span is the stored text.
     - Flags with unmatched quotes are dropped.
     - The "No risk flags" state appears with summary and missing protections, and nothing else.
     - Missing protections are reported only when absent.
     - The take-it-or-leave-it label removes all counter-offers but keeps everything else.
     - Red-line matches come first, and a red line about required content goes to missing protections.
   - **With the real model against the labelled test set (the eval suite, run deliberately, not on every change):** PRD.md "What good looks like" checks 2 to 10. These are: top-tier recall, lower-tier precision, tier consistency over 5 runs, clean-contract results, missing protections, Unclear and hedging, unanswerable questions, no sign or enforceability language, and take-it-or-leave-it classification. It includes the worked example sentences in PRD.md. The suite reports each check against its pass bar.
2. **Extraction seam.** Real .pdf and .docx fixture files produce the expected text. A .doc file produces the save-as-.docx rejection, other types are rejected, and a PDF with no text layer is reported as not analysable. This also covers files arriving by drag and drop.
3. **Contract store seam.** Against a local Supabase: a freelancer cannot read, list or change another freelancer's contracts, analyses or red lines, and stored contract text cannot be modified after creation.

No browser end-to-end tests in v1; they would duplicate the analysis seam slowly and with a non-deterministic model.

Prior art: none. The repo contains no code or tests yet.

## Out of Scope

- Payments and billing.
- OCR for scanned documents.
- Sharing a document between freelancers.
- Lease review, terms-of-service review as a served use, and help after signing (ADR 0002). Take-it-or-leave-it uploads are labelled, not served (ADR 0010).
- Upload formats other than .pdf and .docx, including pasted text.
- Predicted dollar losses and confidence percentages.
- "Sign / don't sign" advice and enforceability claims.
- Comparison with market-standard terms.
- Jurisdiction-specific legal analysis.
- Browser end-to-end tests.

## Further Notes

**Undecided. Ask; do not choose:**

- Which OpenRouter model to use, among no-retention providers.
- Whether red-line matches also get counter-offers.
- Who labels the test set (a lawyer is the credible choice).
- The pass bars PRD.md marks *(proposed)*: checks 3, 4, 7 and 10.
- How a freelancer writes a red line (free text or structured) and how the analysis tells a "clause to avoid" red line from a "protection required" one.
- Whether answers from the question box show source sentences.
- What to do when blocked on a question while running unattended.

**Must be verified before launch:**

- That OpenRouter can restrict routing to providers that neither retain nor train on inputs (ADR 0007).
- A lawyer's review of the counter-offer framing (ADR 0009).

**Evidence limits to keep in mind when tuning:** the top-tier dollar stories come from a contract-tool vendor's blog. IP assignment, exclusivity, payment terms, termination, arbitration and auto-renewal have no freelancer evidence, so their tiers rest on reasoning. A Reddit research pass on freelancer communities is still planned and may change who v1 is for.
