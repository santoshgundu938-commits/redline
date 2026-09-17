# Redline

Redline tells a freelancer what a client's contract commits them to before they sign, and what to ask the client to change.

## Language

### People

**Freelancer**:
The person Redline serves: an independent contractor reviewing a client's contract before signing it.
_Avoid_: user, customer, consumer, signer

**Client**:
The party offering the contract to the freelancer and the one a counter-offer is sent to.
_Avoid_: counterparty, other side, customer

### Documents

**Negotiable contract**:
A contract whose terms the freelancer can realistically ask the client to change before signing. The kind of document Redline v1 is designed for.
_Avoid_: agreement, document (when the negotiable kind is meant)

**Take-it-or-leave-it document**:
Terms the freelancer cannot change, such as terms of service or gig-platform terms. Out of scope for v1.
_Avoid_: contract of adhesion, ToS (as a general term)

### Analysis

**Risk flag**:
A clause Redline marks as able to hurt the freelancer, shown with its source sentence.
_Avoid_: issue, warning, red flag

**Source sentence**:
The exact sentence from the stored contract text that a risk flag quotes.
_Avoid_: citation, excerpt, reference

**Severity**:
How badly a clause can hurt the freelancer, judged from the contract text by whether the harm is bounded and whether it can be undone.
_Avoid_: risk level, priority, danger score

**Missing protection**:
A protection from the fixed checklist that the contract does not contain, such as a liability cap. Listed apart from risk flags and quotes nothing.
_Avoid_: missing clause, gap, omission flag

**Unclear**:
The label on a risk flag whose source sentence genuinely supports more than one reading; the flag names each reading.
_Avoid_: low confidence, uncertain, possibly

**Clean contract**:
A contract that produces no risk flags. Says nothing about whether it is legally sound.
_Avoid_: safe, approved, fine, passed

**Red line**:
A term the freelancer has said they will not accept, kept in their own editable list.
_Avoid_: deal-breaker, preference, rule

**Counter-offer**:
A plain-language ask for a flagged clause, with example wording the freelancer can adapt and propose to the client.
_Avoid_: redline, suggested edit, rewrite, replacement clause
