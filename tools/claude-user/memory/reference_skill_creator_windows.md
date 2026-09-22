---
name: skill-creator-windows-limits
description: "skill-creator's trigger-tuning loop and eval viewer don't work out of the box on this Windows machine; ask before attempting tuning"
metadata: 
  node_type: memory
  type: reference
  originSessionId: e60741c6-c4a9-4fc1-9ca0-cd27ea1e1ad6
  modified: 2026-09-16T22:53:58.254Z
---

skill-creator's description-tuning loop (run_loop / run_eval) fails on this Windows machine: it launches "claude" (only claude.cmd exists) and reads output with select() on pipes, which Windows doesn't support. The eval viewer (generate_review.py) needs PYTHONUTF8=1 to start.

**Why:** a full tuning pass is up to ~300 Opus runs against the user's usage limits, and it silently scores 0% when every launch fails. The user chose to skip tuning for the flush skill on 2026-09-16.

**How to apply:** ask before attempting trigger tuning; don't retry it without the user choosing to port the scripts. See [[flush-skill]] if one gets written.
