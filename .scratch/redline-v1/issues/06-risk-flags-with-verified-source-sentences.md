# 06: Risk flags with verified source sentences

**What to build:** A freelancer sees clauses that could hurt them, grouped into top, middle and low severity tiers, each showing the exact sentence from their stored contract. A flag whose quote cannot be found is never shown.

**Blocked by:** 05

**Status:** ready-for-agent

- [ ] Tiers follow ADR 0011 and the tier tables and worked examples in PRD.md "My red lines"
- [ ] Top-tier clauses are over-flagged; lower tiers need clear textual support (ADR 0012)
- [ ] Each quote is matched with the ADR 0014 rule (NFKC, remove zero-width characters, straighten quotes, lowercase, remove all whitespace and hyphen/dash characters; whole quote required)
- [ ] The shown source sentence is the matched span of the stored text, never the model's string
- [ ] A flag whose quote does not match is dropped
- [ ] A risk spanning several clauses shows every sentence involved
- [ ] Genuinely ambiguous wording is labelled "Unclear" with each reading named; no hedging words elsewhere (ADR 0006)
- [ ] No predicted dollar losses or confidence percentages
- [ ] Analysis seam tests with a scripted model: matching fixtures for line breaks, line-end hyphenation, ligatures, curly quotes, en/em dashes, non-breaking and zero-width spaces, case (PRD 1a); partial, "..."-shortened and one-word-changed quotes rejected (PRD 1b); unmatched flags dropped
