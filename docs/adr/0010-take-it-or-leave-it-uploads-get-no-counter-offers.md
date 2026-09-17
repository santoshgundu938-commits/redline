# 0010. Take-it-or-leave-it uploads are named as such and get no counter-offers

Status: Accepted
Date: 2026-09-16

v1 is designed for negotiable contracts (ADR 0002), but nothing stops a freelancer uploading terms of service or platform terms. When a document looks like take-it-or-leave-it terms, the result says so at the top and omits counter-offers, while still showing the summary, risk flags and missing protections. Uploads are not rejected: negotiability cannot be read reliably from the text (a client's standard contract can be non-negotiable in practice, and only the freelancer knows their leverage), and a wrong rejection would turn away the exact user v1 is for.

## Considered options

- **No detection**: simplest, but take-it-or-leave-it uploads get counter-offers nobody can send.
- **Reject the upload**: clear scope, but a misclassified client contract blocks a freelancer.

## Consequences

- The classification is a model judgment and will sometimes be wrong; when it is, a freelancer loses the counter-offers on a real client contract.
- Redline does not judge the freelancer's actual leverage.
