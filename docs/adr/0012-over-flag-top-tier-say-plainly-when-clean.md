# 0012. Over-flag the whole top tier, and say plainly when a contract is clean

Status: Accepted
Date: 2026-09-16
Supersedes: ADR 0005

Redline leans toward flagging anything that might belong in the top severity tier of ADR 0011: harm that is unbounded or cannot be undone, such as uncapped liability or indemnity, IP assignment beyond the deliverable, or a non-compete or exclusivity clause with no limit on scope or duration. Missing one of these can cost a freelancer far more than the engagement is worth, in money or in freedom to work. Below that tier Redline flags only what the text clearly supports. When nothing qualifies, the result says so plainly ("No risk flags"), still showing the summary and the missing-protections checklist, with no padding of low-value notes and no "consult a lawyer" caveat on the verdict.

ADR 0005 limited the bias to uncapped indemnity and liability because ADR 0003 measured severity in money. With severity no longer monetary, keeping the bias on money alone would treat an irreversible non-compete as less worth catching than a capped fee dispute.

## Considered options

- **Keep the bias on uncapped indemnity and liability only**: fewer false alarms and the only risks with dollar-figure evidence, but irreversible non-monetary harm would have to clear the stricter bar.
- **Over-flag everything**: rarely misses harm, but a clean result nearly never happens.
- **Always surface a few notes on clean contracts**: feels valuable per upload, trains readers to ignore flags.

## Consequences

- More false alarms on IP and non-compete wording, which often reads broader than clients intend.
- A clean result can feel like getting nothing, which matters for any per-document pricing.
