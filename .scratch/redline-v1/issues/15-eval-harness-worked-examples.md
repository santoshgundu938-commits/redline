# 15: Eval harness with worked examples

**What to build:** A deliberately-run eval that sends the worked example sentences in PRD.md through the analysis seam with the real model and reports tier results against their pass bars. It is the base the full suite in 17 extends.

**Blocked by:** 06

**Status:** ready-for-agent

- [ ] Runs on demand, not on every change
- [ ] Uses the real model through the gateway
- [ ] Includes every worked example sentence in PRD.md with its expected tier and Unclear label
- [ ] Reports PRD checks 2 (top-tier recall), 3 (lower-tier precision), 4 (tier consistency over 5 runs) and 7 (Unclear and hedging) against their bars, marking proposed bars as proposed
- [ ] The report says clearly which checks passed and which did not
