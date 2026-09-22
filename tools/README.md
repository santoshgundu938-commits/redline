# Restoring the setup on a new machine

These files are not part of the Redline app. They are the Claude Code setup and helper scripts this project was built with, kept here so a wiped machine can be rebuilt. Files under `claude-user/` belong outside the repo, in your user Claude directory.

## 1. The project itself

```bash
git clone https://github.com/santoshgundu938-commits/redline.git
cd redline
npm install
npm run dev
```

Node 24 and npm 11 were used. The app needs no environment variables yet; when it does, they go in `.env.local`, which is gitignored.

## 2. User-level Claude files

Copy each into place (`~/.claude` is `C:\Users\<you>\.claude` on Windows):

| From here | Goes to | What it is |
| --- | --- | --- |
| `claude-user/CLAUDE.global.md` | `~/.claude/CLAUDE.md` | Global instructions for every project, including the README blueprint |
| `claude-user/statusline.js` | `~/.claude/statusline.js` | Status line showing model, 5-hour and weekly usage against your limits, and context use |
| `claude-user/skills/flush/` | `~/.claude/skills/flush/` | The `flush` skill: end-of-session filing, with its test cases |
| `claude-user/memory/` | `~/.claude/projects/<project-dir-key>/memory/` | Project memory. The directory key is the working directory with separators replaced, e.g. `C--Users-ClaudeCode-Projects-Redline` |

Then point the status line at the script by adding this to `~/.claude/settings.json`:

```json
{
  "statusLine": { "type": "command", "command": "node \"C:/Users/<you>/.claude/statusline.js\"" }
}
```

`claude-user/settings.reference.json` is a copy of the settings this machine used. Read it rather than copying it wholesale: the paths contain a username, and it may hold machine-specific choices. It contains no secrets.

## 3. Plugins

```
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem@thedotmack
/plugin install skill-creator@claude-plugins-official
/plugin install mattpocock-skills@claude-plugins-official
/plugin marketplace add pbakaus/impeccable
/plugin install impeccable@impeccable
/plugin marketplace add blader/humanizer
/plugin install humanizer@humanizer
```

Run them one at a time in Claude Code, then `/reload-plugins`. `skill-creator` and `mattpocock-skills` come from the official marketplace, which is already present.

The Matt Pocock skills read this repo's `docs/agents/` for where issues and decisions live, so they need no setup here.

## 4. GitHub

```bash
gh auth login
```

## 5. shot.mjs

`scripts/shot.mjs` screenshots a running page at a true viewport width through Chrome's remote debugging protocol. Chrome on Windows refuses windows narrower than about 500px, so `--window-size=390` silently gives you a 500px render cropped to 390: mobile screenshots taken that way are invalid evidence.

```bash
# start Chrome with debugging on, once
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu \
  --remote-debugging-port=9222 --user-data-dir="$TEMP/chrome-cdp" about:blank &

# then, per capture: url, output, width, height, mobile|desktop
node tools/scripts/shot.mjs http://localhost:3210/ shot.png 390 844 mobile
```

It forces `prefers-reduced-motion`, so entrance animations are settled rather than caught mid-flight, captures the full page height, and prints any element wider than the viewport.

## What is deliberately not saved here

- `node_modules` and `.next`: rebuilt by `npm install`.
- Plugin caches under `~/.claude/plugins/`: restored by the install commands above.
- The flush test workspace (three practice repos and graded results, 544 KB) and this session's 12 MB transcript. The decisions from that session are in `docs/adr/`, `PRD.md` and `CONTEXT.md` instead.
