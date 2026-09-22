---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Surface brief: Landing page

## Scope and mode

The public home route. Mode: Persuade.

## Audience and job

First: a freelancer holding a client's contract they can still negotiate, deciding whether to sign. Second: someone about to accept terms they cannot change (terms of service, platform terms), who gets flags but no counter-offers (ADR 0015, ADR 0010).

## Action

One action: try it on a contract. It links to the sign-in route ticket 01 builds; the page is not deployed before that route exists.

## Proof and content

The demonstration is the proof: a synthetic client contract turning into ranked flags, each showing the exact sentence it came from. Everything shown is labelled as made up. No prices, customers, testimonials, quotes, benchmarks or usage numbers exist; none may appear.

## Constraints

- No verdict on whether to sign, no legal advice, no enforceability claims.
- No scanned or photographed documents; .pdf and .docx with selectable text only.
- Document types only as PRODUCT.md serves: client contracts, plus take-it-or-leave-it terms labelled as such. No leases, employment offers or help after signing.
- Counter-offers are only promised for contracts the reader can negotiate.
- All copy goes through the humanizer skill before commit.

## Direction contract

THESIS: A contract read the way a safety engineer labels a machine: every hazardous clause gets its ANSI-style sign, pinned to the exact sentence, stating the hazard, what it can do, and how to avoid it. Refuses the category's browser-framed product screenshot beside a benefit headline.

OWN-WORLD: Hazard Label. White label stock and near-black ground; safety red, orange and yellow belong only to flags, blue NOTICE only to neutral verdicts, never decoration. Heavy black sign borders, signal-word header panels with the alert triangle, condensed bold signage caps, contract text in a Times-metric document face. Raises: colour as law (arcade); verdicts print as labels inside the document, never chrome (terminal); one document axis rules every label (dive); the source sentence travels with its flag (bazaar); severity changes a label's scale and border weight, never its place (telop); signal words at poster scale, never chips (tropicália).

STORY: The visitor sees their situation in the contract sheet, understands every flag is checkable against its sentence, believes the ranking is honest because a clean result and the limits are stated plainly, and tries it on their own contract.

FIRST VIEWPORT: Near-black ground. Left third: wordmark, headline at poster scale, one-sentence explanation, a black-and-white "Try it on a contract" button. Right two thirds: a white synthetic contract sheet at reading scale, three sentences highlighted, DANGER, WARNING and CAUTION labels pinned by leader rules to those sentences, scaled by severity; a small "made-up contract" tag on the sheet.

FORM: Hazard Label (ANSI Z535 safety signs and lockout tags), position 3 on the ordered list; seed key 7e392d9b. Signature interaction: tag-out, the labels apply in rank order as the sheet enters view, and focusing or hovering a label lights its exact sentence (and the reverse). Motion grammar: a label lands with one hard snap and its leader rule draws to the sentence; nothing floats or glows. Reduced motion shows every label in place.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Whether signal words (DANGER, WARNING, CAUTION, NOTICE) become user-facing names for the severity tiers in the product; CONTEXT.md still says top, middle, low tier.
- The no-retention statement repeats ADR 0007, which ticket 04 has not yet verified.
