# Redline: Product Brief (v1)

Status: Draft, 2026-09-16
Terms in bold are defined in [CONTEXT.md](./CONTEXT.md). Decisions are recorded in [docs/adr/](./docs/adr/).

---

## Who this is for

**Freelancers**, meaning independent contractors, reviewing a **client**'s **negotiable contract** before they sign it (ADR 0002).

Not renters, not people accepting terms of service, not employees weighing an offer, and not anyone who has already signed.

### What they do today instead

- **Pay a lawyer.** The average flat fee for a lawyer to review a freelance contract is about $400 ([ContractsCounsel](https://www.contractscounsel.com/b/freelance-contract-cost), via willingness-to-pay.md). Lawyers quote $150–350 for a review limited to specific issues, "the most budget-friendly option" ([bizcounsel.com](https://bizcounsel.com/How-Much-Does%20It-Cost-for-a-lawyer-to-review-a-contract)).
- **Pay a cheaper flat-fee service.** QwickContractReview.com charges $99 per contract with a 24–48 hour turnaround, aimed at "small businesses and freelancers" ([press release](https://markets.financialcontent.com/clarkebroadcasting.mymotherlode/article/247pressrelease-2025-10-2-qwickcontractreviewcom-delivers-99-contract-reviews-in-48-hours-empowering-small-businesses-and-freelancers-nationwide)).
- **Sign anyway.** "Sadly, many of them I saw but ignored because I was desperate for work and then regretted every decision I'd ever made for the entire time I worked with them." (freelance writer Alice Rowan, [No Bullshit Freelancing](https://nobullshitfreelancing.substack.com/p/10-red-flags-to-look-out-for-in-potential))
- **Paste it into a general AI document tool.** Reviewers of Humata say it "struggled with legal document challenges with less accurate findings" ([wpcrafter](https://www.wpcrafter.com/review/humata-ai/)).

The research does not show how many freelancers do each of these. Asking strangers on forums also shows up in the research, but only from an employee and a renter, not a freelancer.

---

## The problem

Freelancers sign client contracts whose worst clauses they cannot evaluate, and the cost of a bad clause can dwarf the fee.

- A copywriter on a $3,000 project personally covered over $80,000 in attorney fees after the client's indemnification clause was triggered. A developer on a $15,000 contract with no liability cap faced a $340,000 claim ([ClauseShield](https://clauseshield.app/blog/liability-caps-unlimited-liability)). **Caveat:** ClauseShield sells a contract tool, and these stories come from its blog, not an independent report.
- Forbes's freelance contract required contributors to "indemnify Forbes and hold [it] harmless against any liability, cost or expense... incurred as a result of" their work. When contributor Dolia Estevez was sued for defamation, she had to find her own pro bono counsel. A journalist quoted in the same piece: "to require a journalist to pony up at the first threat, no matter how baseless, is not only unethical for the publication but completely impractical." ([Poynter](https://www.poynter.org/reporting-editing/2015/indemnity-clauses-leave-freelancers-open-to-lawsuits/))
- A small-business litigation firm names indemnity, non-compete and termination clauses as the three that generate the most litigation ([Aikens Law Firm](https://www.aikenslawfirm.com/the-contract-clauses-that-create-the-most-litigation-for-small-businesses/)).

No tool surveyed drafts a **counter-offer**. The professional AI tools get "still needs a human to check it" as their top complaint, even from lawyers (research/existing-tools.md).

---

## What the first version does

1. **Upload.** The freelancer uploads a .pdf or .docx contract. The file is parsed in the browser, only the extracted text is stored, and the original file is never uploaded. Any other file is rejected. A legacy .doc gets a short, plain screen asking the freelancer to save it as .docx and upload again (ADR 0013). Before upload, the freelancer is told the text goes only to model providers that don't retain it (ADR 0007). Scanned PDFs with no text layer cannot be analysed.
2. **Plain-English summary** of what the contract commits the freelancer to.
3. **Risk flags, ranked by severity tier** (top, middle, low; ADR 0011). Each shows its **source sentence**: the model's quote is matched against the stored text using the normalization rule in ADR 0014, and the product shows the matched span of the stored text, never the model's string (ADR 0001). A reading the text genuinely supports more than one way is labelled **Unclear** and names each reading (ADR 0006). There are no predicted dollar losses and no confidence percentages.
4. **Missing protections**: a separate, unranked list of checklist protections the contract lacks, quoting nothing (ADR 0004).
5. **Red-line matches**, shown first, above the risk flags. These are clauses matching the freelancer's own **red lines**, each with its source sentence. A red line about something the contract should contain is reported under missing protections (ADR 0008).
6. **An editable red-lines list** per freelancer.
7. **A counter-offer for each risk flag**: a plain-language ask plus example wording labelled as a starting point. Redline never says whether to sign and never claims a clause or its replacement is enforceable (ADR 0009). Whether red-line matches also get counter-offers is not yet decided.
8. **Take-it-or-leave-it handling.** If a document looks like terms of service or platform terms, the result says so at the top and omits counter-offers, while still showing the summary, flags and missing protections. It is never rejected (ADR 0010).
9. **Clean contract result.** When nothing qualifies, the result says "No risk flags" plainly, with the summary and missing-protections checklist still shown and no padding (ADR 0012).
10. **A question box** that answers only from the document. When the document doesn't say, it says so.
11. **A saved library** of the freelancer's past documents. A freelancer can read only their own documents and red lines.

---

## What good looks like

The analysis is judged against a **labelled test set**: sample freelancer contracts where a person has marked every clause that should be flagged, its tier, every missing protection, and any genuine ambiguity. **Not decided:** who labels the set. A lawyer is the credible choice, and without one the answer key is only as good as whoever writes it.

Pass bars marked *(proposed)* were suggested while drafting this brief and are not settled. Confirm or change them before building.

| # | Check | Pass bar |
| --- | --- | --- |
| 1 | Every displayed source sentence is a span of the stored text, found by the ADR 0014 matching rule | 100%; any miss fails the build (ADR 0001) |
| 1a | True quotes with PDF artifacts still match: line breaks, words hyphenated across lines, ligatures, curly quotes, en and em dashes, non-breaking and zero-width spaces, different case | 100% on a fixture set covering each artifact |
| 1b | Quotes that are partial, shortened with "...", or change a word do not match | 100% rejected |
| 1c | A .doc upload shows the save-as-.docx screen; any other non-.pdf/.docx file is rejected, including via drag and drop | 100% |
| 2 | Every top-tier clause in the answer key is flagged | 100% on the test set (ADR 0012 leans toward over-flagging here) |
| 3 | Middle- and low-tier flags match the answer key | *(proposed)* at least 80% of such flags are in the answer key |
| 4 | Tier consistency: the same contract analysed 5 times puts each clause in the same tier | *(proposed)* identical tiers in all 5 runs for every top-tier clause |
| 5 | Contracts labelled clean produce "No risk flags" and no other notes | 100% |
| 6 | Every checklist protection absent from a sample is reported; present ones are not | 100% |
| 7 | "Unclear" appears only on clauses the answer key marks ambiguous; outside it, no hedging ("may", "could potentially") | *(proposed)* no hedging words outside Unclear flags; Unclear used on at least 80% of marked-ambiguous clauses |
| 8 | Questions whose answer isn't in the document get "the document doesn't say", not an answer | 100% on a set of deliberately unanswerable questions |
| 9 | No counter-offer says whether to sign or claims enforceability | 100%; a lawyer reviews the counter-offer framing before launch (ADR 0009) |
| 10 | Terms-of-service samples get the take-it-or-leave-it label and no counter-offers; client contracts don't | *(proposed)* at most 1 in 20 client contracts wrongly labelled |
| 11 | No contract text reaches a model provider that retains inputs | Verified in configuration before launch (ADR 0007) |

---

## My red lines

These are the risks Redline flags by default, which the brief calls "my red lines". In the product, **red line** means something else: a freelancer's own list (CONTEXT.md), whose matches appear above these flags.

Severity is not measured in money. It asks two questions of the contract text: is the harm bounded, and can it be undone (ADR 0011). The fee only separates money risks within a tier, and only when the contract states one.

### Top tier: harm with no limit, or harm that can't be undone

Redline leans toward flagging these (ADR 0012).

| Clause | Why it matters | Research support |
| --- | --- | --- |
| Uncapped liability | Exposure with no ceiling, unrelated to what the freelancer is paid | $15K contract, $340K claim (vendor blog, see caveat above); ranked #2 in research |
| Uncapped indemnity / hold-harmless | Makes the freelancer pay the client's losses and legal costs, often for claims they didn't cause | $3K job, $80K in fees (vendor blog); Forbes/Estevez (Poynter); top-ranked litigation driver (Aikens); ranked #1 in research |
| IP assignment beyond the deliverable (existing work, or everything created during the engagement) | Gives away work the freelancer can never get back, including what they earn from later | **No sourced harm story.** The research found only advice articles. |
| Non-compete or exclusivity with no limit on scope or duration | Removes the freelancer's ability to take other work, with no end | Non-compete evidence is from **employees**, not freelancers (FTC 2024 rule, CBS News case studies). **Exclusivity was not researched.** |

### Middle tier: bounded but significant

| Clause | Why it matters | Research support |
| --- | --- | --- |
| Liability or indemnity capped well above the fee | Bounded, but can still exceed what the engagement is worth | As for uncapped liability above |
| Non-compete or exclusivity limited in scope and time | Restricts work for a known period and field | Employee evidence only |
| Pay-if-paid: the client pays only if its own customer pays it | The freelancer can lose the entire fee on an event they don't control. It is middle, not top, because the loss is bounded by the fee (ADR 0011) | **Never researched** |
| Pay-when-paid with no outer deadline | No date by which payment must arrive, so it works like pay-if-paid | **Never researched** |
| Client may terminate at any time without paying for work already done | Loss is limited to work done so far, but it can arrive without warning mid-project | Aikens ranks termination clauses among the top three litigation drivers; no freelancer harm story |
| Arbitration clause or class-action waiver | Moves disputes out of court into private arbitration, whose cost can exceed a small unpaid invoice | Uber v Heller: arbitration would have cost ~US$14,500 to start, but that was a platform contract, not a freelancer's. No freelancer evidence |

### Low tier: bounded and minor

| Clause | Why it matters | Research support |
| --- | --- | --- |
| Pay-when-paid with a stated outer deadline | Delays payment, but only to a known date | **Never researched** |
| Auto-renewal | For a freelancer this often means continued work, but it can lock in an outdated rate | Research evidence is from consumer and SaaS subscriptions, not freelancers |

### Worked examples for the test set

These sentences are written for testing, not taken from real contracts. ADR 0011 requires worked examples like these so tiers stay consistent between runs.

| Sample source sentence | Expected result |
| --- | --- |
| "Contractor agrees that Client's receipt of payment from its customer is an absolute condition precedent to Client's obligation to pay Contractor." | Middle tier, as pay-if-paid |
| "Client may terminate this Agreement immediately at any time for convenience without further financial obligation to Contractor." | Middle tier, labelled **Unclear**: "without further financial obligation" can mean nothing more is owed, including for work already done, or nothing beyond it |
| "Any dispute arising out of this contract shall be settled by binding arbitration, and Contractor waives all rights to participate in a class-action lawsuit." | Middle tier |
| "This Agreement shall automatically renew for successive 12-month terms unless either party gives 60 days written notice." | Low tier |

### Missing protections checklist (starting list)

Liability cap, payment terms, termination notice (ADR 0004). This list is always incomplete, and anything not on it goes unreported.

---

## The calls I made and what I gave up

Each call below took the recommended option during the review. The only one challenged afterwards was the severity rule, which is why ADR 0011 and ADR 0012 replace ADR 0003 and ADR 0005. The rest have not yet been argued against.

| Call | Chose against | Who is worse off |
| --- | --- | --- |
| Serve freelancers (ADR 0002) | Renters, small business owners, employees | Renters, the largest audience in the research; small businesses signing vendor and SaaS contracts; employees facing non-competes |
| Negotiable contracts only (ADR 0002) | Also serving terms of service and platform terms | Gig workers like the Uber Eats driver whose arbitration clause cost ~$14,500 to challenge; anyone reading terms of service |
| Before signing (ADR 0002) | Helping after signing | People already hurt, who produced most of the research evidence |
| Every flag quotes its source sentence (ADR 0001) | Letting the model describe risk in its own words | Freelancers with scanned contracts (no OCR); risks that span several clauses need every sentence quoted |
| Missing protections in a separate list (ADR 0004) | Not reporting absences; quoting the nearest sentence | Freelancers whose missing protection isn't on the checklist; everyone reads two lists instead of one |
| Severity = bounded and reversible (ADR 0011) | Money measured against the fee; a fixed ranking by clause type | Anyone needing a consistent, measurable scale: tiers rest on judgment and can wobble between runs |
| Over-flag the top tier (ADR 0012) | Flagging only what's clearly harmful | Freelancers who push back on a false alarm and look uninformed to the client, especially on broad-sounding IP and non-compete wording |
| Say "No risk flags" plainly (ADR 0012) | Padding with notes; "consult a lawyer" | Any per-document pricing: a clean result can feel like paying for nothing |
| Confident voice plus an "Unclear" label (ADR 0006) | Hedged language; confidence percentages | Freelancers who act on a reading that is stated confidently and wrong |
| No-retention model providers only (ADR 0007) | Warning at upload; disclosing in the terms of use | The model choice, which is narrower and possibly more expensive |
| Red-line matches listed first (ADR 0008) | Raising matches to the top tier; adding flags without changing rank | Readers wanting one ranked list; a personal red line can sit above an uncapped indemnity flag |
| Counter-offers are asks with example wording (ADR 0009) | Paste-ready replacement clauses; asks with no wording | Freelancers who want clause text they can send as-is |
| Label take-it-or-leave-it documents, never reject them (ADR 0010) | No detection; rejecting the upload | A freelancer whose real client contract is misjudged and loses its counter-offers |
| Accept only .pdf and .docx (ADR 0013) | Accepting .doc, .rtf, .pages or pasted text | Freelancers whose client sends a legacy or non-Word format; they must convert first |
| Normalize before matching, and show the stored text span (ADR 0014) | A strict character match; showing the model's quote | Readers who see extraction artifacts such as odd spacing in the source sentence |
| Pay-if-paid is middle tier | Widening the top tier to include total loss of the fee | A freelancer whose whole fee depends on the client's customer paying: the clause is not in the over-flagged tier |

---

## What we are not building

| Not building | Why |
| --- | --- |
| Payments and billing | v1 exists to prove the analysis can be trusted; charging doesn't make it more trustworthy |
| OCR for scanned documents | A citation pointing at misread text is worthless (ADR 0001) |
| Sharing a document between users | Doesn't make the analysis more trustworthy; each freelancer sees only their own documents |
| Lease review, terms-of-service review, help after signing | Outside the segment and the moment (ADR 0002). Take-it-or-leave-it uploads are labelled, not served (ADR 0010) |
| Predicted dollar losses | No contract states them; Redline makes no claim the text doesn't support |
| "Sign / don't sign" advice or enforceability claims | Legal-advice exposure; the FTC acted against DoNotPay for overclaiming in this space (ADR 0009) |
| Confidence percentages | Model confidence isn't calibrated, and readers over-trust numbers (ADR 0006) |
| Comparison with market-standard terms | Needs a benchmark set of contracts we don't have, and unusual doesn't mean harmful |
| Jurisdiction-specific legal analysis | Varies by jurisdiction, and amounts to legal advice |

---

## What the research could not tell us

- **Whether freelancers would pay for this specifically.** Every price found is a lawyer benchmark or an adjacent product. Nobody was found saying they'd pay $X for a tool like Redline.
- **Anything from Reddit.** It was unreachable for all four research agents. A capped pass through freelancer subreddits is planned before this brief is treated as final, and it may contradict the segment choice.
- **Whether the headline freelancer harm stories are representative.** The two dollar-figure cases come from a contract-tool vendor's blog, and the court and press cases are severe enough to be unusual. Everyday, lower-stakes freelancer pain is the part the research could least reach.
- **Freelancer evidence for IP assignment, non-competes, exclusivity, termination, payment terms, arbitration and auto-renewal.** Their tiers rest on reasoning, not evidence. IP assignment only turned up as advice articles. Non-compete evidence is from employees. Exclusivity and payment terms were never researched.
- **How much leverage freelancers actually have to negotiate,** and whether clients accept counter-offers at all. Not researched. Counter-offers depend on it.
- **Where drafting counter-offer wording becomes legal advice.** Not researched. It varies by state, and a lawyer review is required before launch.
- **Whether OpenRouter can guarantee providers that don't retain inputs.** Not verified (ADR 0007).
- **How reliable the sources are.** Research agents gathered them. Quotes were checked against the research notes, not the source pages. Several G2 complaints came from search snippets because the pages blocked fetching.
- **Pricing evidence for renters, gig workers and employees.** None found. They are out of scope, but that absence was part of why.
