# 10: Red-lines editor and red-line matches

**What to build:** A freelancer keeps an editable list of their own red lines. Clauses matching a red line appear first, above the risk flags, each with its source sentence; a red line about something the contract should contain is reported under missing protections when absent (ADR 0008).

**Blocked by:** 06, 07, 09

**Status:** ready-for-agent

- [ ] A freelancer can add, edit and remove red lines in the format decided in 09; only they can read them
- [ ] Red-line matches are shown above risk flags, each with a source sentence verified by the ADR 0014 rule
- [ ] A match appears even if the clause would rank low or not be flagged at all
- [ ] A missing required term appears under missing protections
- [ ] Counter-offers on red-line matches follow the decision in 09
- [ ] Analysis seam tests with a scripted model: ordering, verified spans, required-term routing
- [ ] Contract store seam test: red lines are isolated between freelancers
