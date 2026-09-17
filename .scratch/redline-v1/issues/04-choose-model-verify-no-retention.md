# 04: Choose the OpenRouter model and verify no-retention routing

**What to build:** A human decision and a verification, not code. Choose which model Redline calls, and confirm OpenRouter can restrict routing to providers that neither retain nor train on inputs (ADR 0007). Record the outcome in CLAUDE.md and, if the verification changes ADR 0007, a new decision record.

**Blocked by:** None (can start immediately)

**Status:** ready-for-human

- [ ] Confirmed whether and how OpenRouter enforces provider data policies (no retention, no training)
- [ ] Model chosen from models available through those providers
- [ ] CLAUDE.md "Not yet decided" updated to reflect the choice
- [ ] If no-retention routing cannot be guaranteed, ADR 0007 is revisited before ticket 05 starts
