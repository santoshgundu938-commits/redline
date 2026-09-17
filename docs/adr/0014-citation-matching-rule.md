# 0014. How a quoted source sentence is matched and shown

Status: Accepted
Date: 2026-09-16

ADR 0001 requires every source sentence to be checked against the stored contract text, but PDF and .docx extraction introduces line breaks, hyphenated line ends, ligatures, curly quotes and odd dashes, and a model quoting the text tends to tidy these up. A strict character match would reject true quotes.

For comparison only, both the model's quote and the stored text are normalized:

1. Unicode NFKC normalization (turns ligatures such as `ﬁ` into `fi` and non-breaking spaces into spaces).
2. Remove zero-width characters.
3. Straighten curly quotes (`“ ” ‘ ’` to `" '`).
4. Lowercase.
5. Remove all whitespace and all hyphen and dash characters (joins words hyphenated across lines, such as `indemni-\nfy`).

The whole normalized quote must appear in the normalized stored text; a partial quote or one shortened with an ellipsis does not match. Once it matches, the product shows the corresponding span of the stored text as extracted, not the model's string, so what the freelancer reads is always from their own document.

## Considered options

- **Collapse whitespace, straighten quotes and dashes, lowercase, without the PDF-specific steps**: rejects true quotes broken by line-end hyphenation, ligatures or invisible characters.
- **Show the model's quote**: cleaner-looking, but the displayed sentence could differ from the document.

## Consequences

- The shown source sentence may contain extraction artifacts such as odd spacing.
- Removing all whitespace and dashes makes an accidental match across unrelated text theoretically possible; for sentence-length quotes it is negligible.
