# 0005. Over-flag only the top tier, and say plainly when a contract is clean

Status: Superseded by ADR 0012
Date: 2026-09-16

Redline leans toward flagging anything that might be uncapped indemnity or uncapped liability (the top severity tier in ADR 0003), because missing one can cost a freelancer many times their fee. Below that tier it flags only what the text clearly supports. When nothing qualifies, the result says so plainly ("No risk flags"), still showing the summary and the missing-protections checklist, with no padding of low-value notes and no "consult a lawyer" caveat on the verdict.

These are one decision: over-flagging everywhere would mean almost no contract is ever called clean, and a tool that always finds problems stops being believed.

## Considered options

- **Over-flag everything**: rarely misses harm, but a clean result nearly never happens.
- **Flag only what is clearly harmful**: keeps trust, but eventually misses the costly indemnity clause.
- **Always surface a few notes on clean contracts**: feels valuable per upload, trains readers to ignore flags.

## Consequences

- The most prominent flags will sometimes be false alarms.
- A clean result can feel like getting nothing, which matters for any per-document pricing.
