# 17: Full eval suite on the labelled test set

**What to build:** The eval harness from 15 extended to the labelled test set and every quality check in PRD.md "What good looks like", so anyone can tell whether the analysis is good enough.

**Blocked by:** 08, 10, 11, 12, 13, 15, 16

**Status:** ready-for-agent

- [ ] Runs the real model over every sample in the labelled test set
- [ ] Reports PRD checks 2 to 10 against the pass bars confirmed in 16
- [ ] Check 8 uses the deliberately unanswerable questions
- [ ] Check 9 fails on any sign/don't-sign or enforceability language in a counter-offer
- [ ] Check 10 reports how many client contracts were wrongly labelled take-it-or-leave-it
- [ ] Checks 1–1c remain covered by the deterministic seam tests and are listed in the report as such
