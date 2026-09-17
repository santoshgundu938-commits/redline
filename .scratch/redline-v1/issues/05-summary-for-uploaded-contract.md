# 05: Summary for an uploaded contract

**What to build:** Before uploading, a freelancer is told plainly that their contract text goes only to model providers that neither retain nor train on it. After upload, they get a plain-English summary of what the contract commits them to. This slice builds the analysis seam end to end: the server-side model gateway, the analysis module with an injectable model, a stored analysis result, and the result view.

**Blocked by:** 02, 04

**Status:** ready-for-agent

- [ ] Ask for approval before adding an OpenRouter client dependency
- [ ] The no-retention statement is shown before upload, not only in terms of use (ADR 0007)
- [ ] All model calls happen server-side through one gateway using the model chosen in 04, routed only to no-retention providers
- [ ] The analysis module takes stored contract text and returns a result; the model is injected so tests can script it
- [ ] The summary states only what the contract says
- [ ] The analysis result is stored and shown for that contract
- [ ] Analysis seam test with a scripted model: summary returned and stored
