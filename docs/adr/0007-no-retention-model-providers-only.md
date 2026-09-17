# 0007. Contract text goes only to model providers that do not retain it

Status: Accepted
Date: 2026-09-16

Client contracts often contain confidentiality clauses, and sending the extracted text to a third-party model provider can itself breach the contract Redline is reviewing. Redline cannot detect such a clause before sending, because detecting it means sending the text. So contract text is routed through OpenRouter only to providers that neither retain nor train on inputs, and the freelancer is told this plainly before upload, not in the terms of use.

## Considered options

- **Warn at upload and let the freelancer decide**: honest, but shifts the burden and loses users.
- **Disclose in the terms of use**: cheapest, and hides the product's own risk in fine print, which is what Redline exists to expose.

## Consequences

- The deferred model choice is now limited to models available from no-retention providers, possibly at higher cost.
- Whether and how OpenRouter enforces provider data policies must be verified before building.
