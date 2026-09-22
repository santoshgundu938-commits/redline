const fs = require('fs');
const path = require('path');
const os = require('os');

let raw = '';
process.stdin.on('data', (c) => (raw += c));
process.stdin.on('end', () => {
  let d = {};
  try {
    d = JSON.parse(raw);
    fs.writeFileSync(path.join(os.homedir(), '.claude', 'statusline-input.json'), raw);
  } catch {}

  const R = '\x1b[0m', DIM = '\x1b[2m', CYAN = '\x1b[36m', MAG = '\x1b[35m';
  const SEP = ` ${DIM}|${R} `;

  const color = (p) => (p >= 90 ? '\x1b[31m' : p >= 70 ? '\x1b[33m' : '\x1b[32m');
  const bar = (p, w = 10) => {
    const f = Math.round((Math.min(Math.max(p, 0), 100) / 100) * w);
    return '█'.repeat(f) + DIM + '░'.repeat(w - f) + R;
  };
  const resetIn = (t) => {
    if (!t) return '';
    const ms = (typeof t === 'number' ? (t < 1e12 ? t * 1000 : t) : Date.parse(t)) - Date.now();
    if (!(ms > 0)) return '';
    const h = Math.floor(ms / 3.6e6), m = Math.floor((ms % 3.6e6) / 6e4);
    return ` ${DIM}resets ${h >= 24 ? `${Math.floor(h / 24)}d${h % 24}h` : `${h}h${m}m`}${R}`;
  };
  const limit = (label, l) => {
    const p = l && Number(l.used_percentage ?? l.utilization);
    if (!Number.isFinite(p)) return null;
    return `${label} ${color(p)}${bar(p)} ${Math.round(p)}%${R}${resetIn(l.resets_at)}`;
  };

  const parts = [`${CYAN}${d.model?.display_name ?? 'Claude'}${R}`];
  const rl = d.rate_limits || {};
  const five = limit('5h', rl.five_hour);
  const week = limit('week', rl.seven_day);
  if (five || week) parts.push(...[five, week].filter(Boolean));
  else parts.push(`${DIM}usage limits n/a${R}`);

  const ctx = Number(d.context_window?.used_percentage);
  if (Number.isFinite(ctx)) parts.push(`${MAG}ctx ${Math.round(ctx)}%${R}`);

  process.stdout.write(parts.join(SEP));
});
