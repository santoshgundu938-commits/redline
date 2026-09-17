# 0002. v1 serves freelancers reviewing negotiable contracts before signing

Status: Accepted
Date: 2026-09-16

v1 is for freelancers reviewing a client's contract before they sign it. It is designed for negotiable contracts (ADR 0010 covers other uploads), because the drafted counter-offer is useless when the other side will not change the terms. The research gives freelancers the strongest evidence of harm (uncapped indemnity and liability) and of willingness to pay (a ~$400 lawyer benchmark, a live $99 competitor).

## Not serving in v1

- **Renters.** The largest audience in the research, but no willingness-to-pay evidence, leases are rarely negotiable, and LeaseLogic already covers them.
- **Take-it-or-leave-it documents**: terms of service and gig-platform terms. The research's starkest case (an Uber driver's arbitration clause) is here, but Redline could only tell that reader they are stuck, and ToS;DR is free.
- **People who have already signed.** Most research evidence came from them, but a counter-offer cannot help after signing, and advising on signed contracts moves toward the overclaiming the FTC acted on with DoNotPay.

## Considered options

- Small business owners (vendor and SaaS contracts): bigger budgets, but a fight with Rocket Lawyer and ContractSafe for the business buyer.
- Employees and job seekers (offers, non-competes): strong regulatory signal, no willingness-to-pay evidence, infrequent use.
