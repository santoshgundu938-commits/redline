# 03: .docx uploads and rejections

**What to build:** A freelancer can upload .docx contracts as well as .pdf. Any other file is turned away clearly: a .doc gets a short screen asking them to save it as .docx and upload again, and a scanned PDF with no text layer is reported as not analysable (ADR 0013).

**Blocked by:** 02

**Status:** ready-for-agent

- [ ] Ask for approval before adding a .docx parsing dependency
- [ ] .docx files are extracted in the browser and stored like .pdf
- [ ] The app checks the file itself, not only the picker filter, so drag and drop and "All files" cannot bypass it
- [ ] A .doc file shows a short, unpadded screen telling the freelancer to save it as .docx and re-upload
- [ ] Any other file type is rejected
- [ ] A PDF with no text layer is reported as not analysable; nothing is stored
- [ ] Extraction seam tests cover .docx fixtures, .doc rejection, another rejected type, drag and drop, and a scanned PDF (PRD check 1c)
