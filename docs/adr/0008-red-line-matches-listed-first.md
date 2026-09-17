# 0008. Red-line matches are listed first, apart from severity

Status: Accepted
Date: 2026-09-16

A freelancer's own red lines can disagree with Redline's severity judgment (ADR 0011): a 30-day payment term might be someone's deal-breaker while being bounded and minor. So clauses that match a red line appear in their own section at the top of the results, above the severity-ranked risk flags, and severity keeps meaning how bounded and reversible the harm is. Each match quotes its source sentence (ADR 0001). A red line about something the contract should contain, such as a kill fee, is reported in the missing-protections list (ADR 0004).

## Considered options

- **Raise red-line matches to the top severity tier**: one list, but severity would stop meaning Redline's own judgment of harm.
- **Let red lines add flags without changing their rank**: a deal-breaker could show as low severity.

## Consequences

- The reader sees up to three groups: red-line matches, severity-ranked flags, missing protections.
- A personal red line can appear above an uncapped indemnity flag.
