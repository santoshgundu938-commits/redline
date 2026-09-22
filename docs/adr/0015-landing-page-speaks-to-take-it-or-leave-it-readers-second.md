# 0015. The landing page speaks to take-it-or-leave-it readers too, after freelancers

Status: Accepted
Date: 2026-09-17
Amends: ADR 0002

ADR 0002 made freelancers reviewing a negotiable client contract the only audience for v1 and listed take-it-or-leave-it documents as not served. The landing page now addresses both: freelancers first, and second, people about to accept terms they cannot change (terms of service, platform terms). Product behaviour does not change. A take-it-or-leave-it upload still gets the label, the summary, risk flags and missing protections, and no counter-offers (ADR 0010); the landing page promises those readers nothing more.

## Considered options

- **Freelancers only**: keeps ADR 0002 intact, but ignores readers who already reach the product through ADR 0010.
- **Take-it-or-leave-it readers as the primary audience**: would rewrite the core promise, since counter-offers do not apply to them.

## Consequences

- Landing copy must keep counter-offers tied to contracts the reader can negotiate.
- Leases, employment offers and help after signing remain out of scope.
