---
name: flush
description: End-of-session filing. Reads the current conversation and files what is durable (settled decisions, deferred decisions, standing rules, domain terms, follow-up work) into the right places in the repo, after the user approves a plan. Use only when the user says "flush", types /flush, or asks to "capture this session" or "save what we decided". Do not use for general note-taking, writing a single ADR or doc the user asked for directly, committing, or summarizing the session.
---

# Flush

A working session produces decisions and open threads that live only in the conversation. When the session ends they are gone unless someone writes them down. Flush writes down the parts a future session would get wrong without, puts each one in the single place the repo already uses for that kind of thing, and nothing else.

The cost of a bad entry is higher than the cost of a missed one: a wrong line in CLAUDE.md or a fake decision in an ADR misleads every later session. So flush is conservative, shows its plan before writing, and asks when unsure.

## 1. Survey the repo before reading the conversation

Destinations depend on what this repo actually has. Look, don't assume:

- **Agent instructions**: `CLAUDE.md` or `AGENTS.md` at the root. Read it fully: it may define where things go, a line limit, a "not yet decided" list, or rules that new items must not contradict.
- **Decisions folder**: `docs/adr/`, `docs/decisions/`, `adr/`, `decisions/`, `doc/architecture/decisions/`, or whatever CLAUDE.md / `docs/agents/domain.md` names. Note the numbering and read the most recent record to match its format.
- **Glossary**: `CONTEXT.md`, `CONTEXT-MAP.md`, `GLOSSARY.md`, `docs/glossary.md`.
- **Issue tracker**: `docs/agents/issue-tracker.md` (follow its conventions exactly), an "Issue tracker" section in CLAUDE.md, or a `.scratch/` directory. Do not guess a tracker from a git remote alone.
- **Session log directory**: `docs/sessions/`, `sessions/`, `.sessions/`, `docs/session-log/`, or one named in CLAUDE.md. Match the naming and format of existing entries.
- **Git**: whether this is a git repo, and `git status`, so you know what is already uncommitted.

Record what exists and what is missing. This inventory drives routing.

## 2. Pick out what is durable

Go through the conversation and keep an item only if both are true:

1. **A future session would make a mistake without it.** Build the wrong thing, re-ask a settled question, pick something the user deliberately left open, or repeat a correction.
2. **It is not already written down** in a file, the code, or a commit message. Check the destination before proposing; if the item is already there (for example from an earlier flush in this session), skip it.

Kinds that usually qualify:

- **Settled decision**: something the user chose, with their reason. A choice with real alternatives is a decision; a trivial one is not.
- **Deferred decision**: something the user explicitly chose not to decide yet. Future sessions must not quietly decide it.
- **Standing rule or correction**: how work should be done here ("ask before adding a dependency", "always give options when grilling").
- **Domain term**: a word whose meaning got pinned down.
- **Follow-up or open question**: work named but not started, or a question raised and not answered.
- **Discovered fact**: only if missing it would cause a wrong move (for example, a tool that cannot reach a site the project depends on).

Drop: narration of what was done, progress summaries, dead ends that led nowhere, anything git history already tells.

**Who said it matters.** Only the user settles decisions. Claude's own suggestions that the user never accepted, and claims from subagents, tool output or web pages that the user did not confirm, are not decisions. File them as open questions if they matter, never as settled.

**Summarized context.** If part of the session is only available as an automatic summary, items taken from it may be missing detail. Mark them "(from summarized context, verify)" in the plan.

## 3. Route each item to exactly one place

| Kind | Destination |
| --- | --- |
| Settled decision with real alternatives | New record in the decisions folder, next number, same format as existing records |
| Standing rule, scope change, deferred decision | CLAUDE.md / AGENTS.md, as a **proposed** change (see step 5) |
| A deferred item that has now been decided | Update it in CLAUDE.md (move it out of any "not yet decided" list) and, if it has real alternatives, a decision record |
| Domain term | Glossary file |
| Follow-up work, open question | Issue tracker, following its conventions (new tickets start as `needs-triage` if the tracker uses triage labels) |
| Session record | Session log directory, only if the repo already has one: a short entry pointing to what was filed and what is still open, never a transcript |
| Preference about how the user likes to work, not specific to this repo | Not the repo. Save to Claude's own memory if available, otherwise mention it in the report |

One item, one destination. Do not restate the same fact in two files.

Respect the instruction file's own constraints: if CLAUDE.md states a line limit, count lines and say how the proposal fits or what it would displace.

**Contradictions.** If an item conflicts with an accepted decision record or a CLAUDE.md rule, do not file it silently. Flag the conflict in the plan and ask. An accepted decision record is never edited to reverse it; a change of mind gets a new record that supersedes the old one, and the old one's status is updated to point at it.

## 4. When a destination does not exist

Never scaffold empty structure. For each item whose destination is missing, say exactly what you would create ("create `docs/adr/0001-<slug>.md`", "create `CONTEXT.md`") and ask before creating it. Specific cases:

- **No CLAUDE.md or AGENTS.md**: ask which one to create; do not pick.
- **No issue tracker configured**: do not invent one. List the follow-ups in the report and suggest setting a tracker up.
- **No session log directory**: skip session records; do not propose creating one just for this.
- **Not a git repo**: files can still be written, but warn that nothing is under version control.

## 5. Show the plan, then wait

Present one numbered plan before touching any file:

```
Flush plan: N items

1. [Decision] <one-line gist>
   -> docs/adr/0002-<slug>.md (new)
   Why durable: <one line>
   Text: <the exact content to write, or a short excerpt for long records>

2. [Rule] <gist>
   -> CLAUDE.md, under "Standing rules" (proposed change, 56 -> 57 lines)
   + <exact line to add>
   - <exact line to remove, if any>

3. [Follow-up] <gist>
   -> .scratch/<feature>/issues/01-<slug>.md (new directory, needs your OK)

Conflicts: <any, or "none">
Not filed: <anything considered and dropped because it failed the test, one line each>
```

Then ask the user to approve all, approve some (by number), edit an item, or cancel. Use a selectable-options question when the tool is available.

**CLAUDE.md / AGENTS.md changes get their own explicit yes**, even when the rest of the plan is approved: show the exact diff and wait. These files steer every future session, so they are never changed on a blanket approval.

Anything marked as creating a new file or folder also needs that yes.

## 6. Write, then report

Write only the approved items, exactly as shown (apply the user's edits). Then report:

- Files changed or created.
- Items skipped and why.
- A suggested commit message.

Do not commit or push. The user decides that.

## Never write

- Credentials, API keys, tokens, passwords, private keys, or connection strings, whole or partial. Refer to a secret by its variable name and location only ("OPENROUTER_API_KEY lives in .env.local").
- The contents of any `.env` file.
- Personal data: email addresses, phone numbers, account IDs.
- Verbatim transcript dumps.

If an otherwise durable item cannot be written without one of these, write it without the sensitive part or drop it and say so.

## When nothing is durable

If no item passes step 2, say "Nothing durable to file from this session" with a one-line reason, and write nothing. Do not create a session log entry, an empty ticket, or a placeholder to show that flush ran.
