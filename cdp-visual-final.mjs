import fs from "fs";
const port = 9244;
const base = "http://localhost:3010";
async function connect(url, width, height, mobile) {
  const res = await fetch("http://localhost:" + port + "/json/new?" + encodeURIComponent(url), { method: "PUT" });
  const target = await res.json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  function send(method, params = {}) {
    const msgId = ++id;
    ws.send(JSON.stringify({ id: msgId, method, params }));
    return new Promise((resolve) => pending.set(msgId, resolve));
  }
  ws.addEventListener("message", (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg.result); pending.delete(msg.id); }
  });
  await new Promise((resolve) => ws.addEventListener("open", resolve));
  await send("Runtime.enable");
  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: !!mobile });
  return { ws, send, targetId: target.id };
}
async function evalScript(send, script) {
  const result = await send("Runtime.evaluate", { expression: script, awaitPromise: true, returnByValue: true });
  return result.result?.value;
}
async function close(ws, targetId) {
  ws.close();
  await fetch("http://localhost:" + port + "/json/close/" + targetId);
}

async function shotAt(width, mobile, fname) {
  const { ws, send, targetId } = await connect("about:blank", width, 1200, mobile);
  await send("Page.navigate", { url: base + "/careers" });
  await new Promise((r) => setTimeout(r, 2800));
  await evalScript(send, `[...document.querySelectorAll('section')].find(s => s.querySelector('h2')?.textContent.includes('Life at LIOZIO')).scrollIntoView({block:'start'})`);
  await new Promise((r) => setTimeout(r, 400));
  const shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(fname, Buffer.from(shot.data, "base64"));
  const overflow = await evalScript(send, "document.documentElement.scrollWidth > document.documentElement.clientWidth");
  console.log(fname, "overflow:", overflow);
  await close(ws, targetId);
}

await shotAt(767, false, "final-767.png");
await shotAt(600, false, "final-600.png");
await shotAt(375, true, "final-375.png");
await shotAt(1280, false, "final-1280.png");
process.exit(0);
