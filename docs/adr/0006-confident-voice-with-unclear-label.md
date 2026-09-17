# 0006. State readings confidently and label genuine ambiguity "Unclear"

Status: Accepted
Date: 2026-09-16

Redline states what a clause does in plain, confident sentences ("This makes you cover the client's legal costs with no limit"). Where the wording genuinely supports more than one reading, it says so with an explicit "Unclear" label and names the readings, instead of softening every sentence with "may" or "could potentially". Hedged language is safe and tells the freelancer nothing they can act on; the quoted source sentence beside each flag (ADR 0001) is what lets a reader catch a wrong reading.

## Considered options

- **Hedged language throughout**: safe, not actionable.
- **A confidence percentage per flag**: looks rigorous, but model confidence is not calibrated and readers over-trust numbers.

## Consequences

- Some readings will be stated confidently and be wrong; the source sentence is the only safeguard.
