# 11: Take-it-or-leave-it label

**What to build:** When an upload looks like terms of service or platform terms, the result says so at the top and gives no counter-offers, while still showing the summary, risk flags and missing protections. The upload is never rejected (ADR 0010).

**Blocked by:** 08

**Status:** ready-for-agent

- [ ] The label appears at the top of the result when the document looks like take-it-or-leave-it terms
- [ ] With the label present, no counter-offers appear anywhere
- [ ] Summary, risk flags and missing protections are still shown
- [ ] No upload is rejected for this reason
- [ ] Analysis seam test with a scripted model: label present removes all counter-offers and nothing else
