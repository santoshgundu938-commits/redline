# 0013. Uploads are .pdf and .docx only; .doc is rejected with a plain message

Status: Accepted
Date: 2026-09-16

The file picker offers only .pdf and .docx. A picker filter is a hint the browser can bypass (an "All files" choice, drag and drop), so the app also checks each file itself and rejects anything else. A legacy .doc file gets its own short rejection screen, with no padding, asking the freelancer to save it as .docx and upload it again. Both formats are parsed in the browser, as before; scanned PDFs with no text layer still cannot be analysed (ADR 0001).

## Consequences

- Parsing .docx in the browser needs a library, which requires approval as a new dependency.
- Freelancers holding .doc, .rtf, .pages or plain-text contracts must convert them first.
