# 0001. Every risk flag cites its source sentence

Status: Accepted
Date: 2026-09-16

## Decision

Every risk flag Redline produces cites the exact sentence from the uploaded document it came from, shown to the reader alongside the flag. The quote is checked against the stored document text before the flag is displayed. A flag whose source sentence cannot be shown is a bug, not a formatting preference.

## Alternatives

- **Let the model describe risks in its own words, quoting nothing.** Easiest to build and reads smoothly, but the reader cannot tell a real clause from a plausible invention.
- **Cite a section or page number instead of the sentence.** Lighter output, but sends the reader hunting, and a wrong reference looks just as confident as a right one.
- **Quote when available, paraphrase otherwise.** Covers more cases, but makes the unverifiable flag look the same as the verifiable one.

## Why

A reader can check every flag themselves, without trusting Redline:
- The quoted sentence is in their document, word for word.
- That sentence says what the flag claims it says.
- Nothing was flagged from text that does not exist.

The product's claim is that its analysis can be trusted. Citations turn that claim into something each reader tests on their own contract.

## Consequences

- Risks that live in what a document leaves out, such as a missing liability cap or no early-termination terms, have no sentence to quote. They need a separate, clearly labelled treatment or cannot be flagged at all.
- Risks that only emerge from several clauses together must cite each sentence involved, not a summary of them.
- OCR stays out: a citation pointing at misread text is worthless.
- Stored text must stay exactly as extracted. Cleaning or reformatting it later can break existing citations.
- Model output must return verbatim quotes, and the app must reject flags whose quote does not match the stored text rather than show them.
- The exact matching rule (whitespace, quote marks, line breaks from PDF extraction) must be defined once and tested.
- Tests assert that every flag on sample documents has a quote found in that document's text; a missing or unmatched quote fails the build.
