# 0011. Severity is whether the harm is bounded and whether it can be undone

Status: Accepted
Date: 2026-09-16
Supersedes: ADR 0003

ADR 0003 ranked severity by exposure relative to the fee. That only works for monetary risk: many contracts state no fee, and clauses such as IP assignment, termination rights, exclusivity and non-competes can harm a freelancer badly without the text giving any way to express that harm against their pay. Severity is now judged, from what the contract text says, on two questions: is the harm bounded, and can it be undone.

- **Top tier**: harm that is unbounded or cannot be undone, whatever its kind. Examples: uncapped liability or indemnity; assignment of IP beyond the deliverable (such as pre-existing work or everything created during the engagement); a non-compete or exclusivity clause with no limit on scope or duration.
- **Middle tier**: bounded but significant, such as capped liability well above the fee, or a narrow, time-limited non-compete.
- **Low tier**: bounded and minor.

The fee is used only to separate monetary risks within a tier, and only when the contract states one. Redline still never shows a predicted dollar loss.

## Considered options

- **Keep the fee-relative scale for money and put rights and restrictions in a separate unranked group**: simple, but adds a fourth list and cannot say whether an unlimited non-compete or an uncapped indemnity matters more.
- **A fixed ranking by clause type**: predictable and testable, but ignores wording, so a 30-day narrow non-compete ranks like a 5-year worldwide one.

## Consequences

- There is no single measurable scale; "cannot be undone" needs judgment, so tier boundaries must be illustrated with worked examples and tested on sample contracts.
- IP assignment and non-competes can now reach the top tier, reversing ADR 0003's consequence that they rank below indemnity.
