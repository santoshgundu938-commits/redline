import { writeFileSync } from "node:fs";

const [, , url, out, widthArg, heightArg, mobileArg] = process.argv;
const width = Number(widthArg);
const height = Number(heightArg);
const mobile = mobileArg === "mobile";

const targets = await fetch("http://127.0.0.1:9222/json/new?about:blank", { method: "PUT" }).then((r) => r.json());
const ws = new WebSocket(targets.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
const events = [];

ws.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
  } else if (msg.method) {
    events.push(msg.method);
  }
});

await new Promise((resolve) => ws.addEventListener("open", resolve));

const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const msgId = ++id;
    pending.set(msgId, { resolve, reject });
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width,
  height,
  deviceScaleFactor: 1,
  mobile,
  screenWidth: width,
  screenHeight: height,
});
await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
await send("Page.navigate", { url });

await new Promise((resolve) => setTimeout(resolve, 4000));

const metrics = await send("Page.getLayoutMetrics");
const contentWidth = Math.ceil(metrics.cssContentSize.width);
const contentHeight = Math.ceil(metrics.cssContentSize.height);

const overflow = await send("Runtime.evaluate", {
  expression: `JSON.stringify({ viewport: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth, offenders: [...document.querySelectorAll('*')].map(el => ({ el, r: el.getBoundingClientRect() })).filter(({ r }) => r.width > 0 && Math.round(r.right) > document.documentElement.clientWidth + 1).slice(0, 8).map(({ el, r }) => (el.tagName.toLowerCase() + '.' + (el.className.baseVal ?? el.className ?? '').toString().slice(0,40) + ' right=' + Math.round(r.right))) })`,
  returnByValue: true,
});

const shot = await send("Page.captureScreenshot", {
  format: "png",
  captureBeyondViewport: true,
  clip: { x: 0, y: 0, width: contentWidth, height: contentHeight, scale: 1 },
});

writeFileSync(out, Buffer.from(shot.data, "base64"));
console.log(JSON.stringify({ out, contentWidth, contentHeight, overflow: JSON.parse(overflow.result.value) }, null, 2));
ws.close();
process.exit(0);
