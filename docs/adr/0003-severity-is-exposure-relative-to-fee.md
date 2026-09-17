# 0003. Severity is the exposure a clause creates relative to the fee

Status: Superseded by ADR 0011
Date: 2026-09-16

A risk flag's severity reflects how much the clause can cost the freelancer compared with what they are paid, judged only from what the contract text says (is liability capped, at what amount, against what stated fee). Redline never shows a predicted dollar loss, because it makes no claim the text does not support. Uncapped indemnity and uncapped liability sit alone in the top tier: they are the research's top two clause types and the ones with dollar-figure harm ($3K job to $80K in fees, $15K contract to a $340K claim).

## Considered options

- **Deviation from market norms**: rejected; needs a benchmark corpus, and unusual is not harmful.
- **Likely enforceability**: rejected; jurisdiction-specific and amounts to legal advice.
- **IP assignment or payment terms in the top tier**: rejected for v1. IP assignment has no sourced harm story; payment terms (net-90, pay-when-paid, no kill fee) were never researched.

## Consequences

- Designers and writers may expect IP assignment to rank highest and will see it below indemnity.
- Contracts that state no fee get a rougher severity judgment.
- Unusual wording that creates no exposure is not flagged.
