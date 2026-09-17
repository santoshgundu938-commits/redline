# 02: Upload a PDF; its text is stored and appears in the library

**What to build:** A freelancer picks a .pdf contract. Its text is extracted in the browser, only that text is stored (never the file), and the contract appears in their library.

**Blocked by:** 01

**Status:** ready-for-agent

- [ ] Ask for approval before adding a PDF parsing dependency
- [ ] The file picker offers .pdf (and .docx, handled in 03)
- [ ] Text is extracted in the browser; the original file is never sent to the server (ADR 0013)
- [ ] The stored contract text is exactly the extracted text and cannot be modified after creation (ADR 0001); covered by a contract store seam test
- [ ] The uploaded contract appears in the freelancer's library and nobody else's
- [ ] Extraction seam test: real .pdf fixtures produce the expected text
