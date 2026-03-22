import { LandscapeJS as d } from "./landscape.js";
(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const s of t.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function n(e) {
    const t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = n(e);
    fetch(e.href, t);
  }
})();
function c() {
  const o = document.getElementById("landscapejs");
  console.log(o), console.log(document.querySelector("#landscapejs"));
  const r = o.getContext("2d"), n = window.devicePixelRatio || 1, i = window.innerWidth, e = window.innerHeight;
  o.width = Math.floor(i * n), o.height = Math.floor(e * n), o.style.width = i + "px", o.style.height = e + "px", r.scale(n, n), new d({
    canvas: "#landscapejs"
  }).draw();
}
window.addEventListener("resize", c);
document.addEventListener("DOMContentLoaded", function() {
  c();
});
