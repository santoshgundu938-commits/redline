# 0004. Missing protections are listed separately and cite nothing

Status: Accepted
Date: 2026-09-16

Some of the worst harm in the research came from what a contract left out, such as the missing liability cap behind a $340K claim on a $15K job. ADR 0001 requires every risk flag to quote its source sentence, and an absence has no sentence. So missing protections appear in their own clearly labelled list, unranked and quoting nothing, and are checked against a short fixed checklist the product owner maintains (for example liability cap, payment terms, termination notice) rather than decided by the model.

## Considered options

- **Do not report absences**: keeps ADR 0001 simple but misses the second-ranked harm in the research.
- **Quote the nearest related sentence**: looks uniform, but the quote would not support the claim, which breaks ADR 0001.

## Consequences

- The checklist is always incomplete; anything not on it goes unreported.
- The reader sees two lists, not one ranked list.
