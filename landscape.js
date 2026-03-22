class b {
  constructor(t, i, e, s = 1) {
    this.r = t, this.g = i, this.b = e, this.a = s;
  }
  rgb() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
  rgba() {
    return `rgb(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
  toHex() {
    return "#" + C(this.r) + C(this.g) + C(this.b) + C(this.a);
  }
}
function E(f) {
  if (String(f).charAt(0) !== "#" && (f = "#" + f), f.length !== 7)
    throw console.log(f), new Error("Parameter is not a valid hex color code!");
  const t = parseInt(f.slice(1, 3), 16), i = parseInt(f.slice(3, 5), 16), e = parseInt(f.slice(5, 7), 16);
  return new b(t, i, e);
}
function G(f = 0, t) {
  const i = (a) => Math.max(0, Math.min(255, a)), e = Math.round(f * 100), s = i(Math.floor(t.random() * 40) + Math.round(e * 0.3)), h = i(Math.floor(t.random() * 100) + e), r = i(Math.floor(t.random() * 106) + 150 + e);
  return console.log(V(s, h, r)), new b(s, h, r);
}
function D(f = 0, t) {
  const i = (d) => Math.max(0, Math.min(255, d)), e = (d, c) => Math.floor(t.random() * (c - d + 1)) + d, s = [
    "white",
    "white",
    "white",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "orange",
    "orange",
    "orange",
    "orange",
    "red",
    "red",
    "red",
    "blue",
    "green"
  ], h = s[Math.floor(t.random() * s.length)];
  let r, a, n;
  switch (h) {
    case "white":
      r = e(240, 255), a = e(240, 255), n = e(240, 255);
      break;
    case "yellow":
      r = e(220, 255), a = e(190, 220), n = e(0, 40);
      break;
    case "orange":
      r = e(220, 255), a = e(80, 140), n = e(0, 30);
      break;
    case "red":
      r = e(180, 255), a = e(20, 60), n = e(0, 20);
      break;
    case "blue":
      r = e(0, 60), a = e(80, 140), n = e(180, 255);
      break;
    case "green":
      r = e(0, 60), a = e(180, 255), n = e(40, 100);
      break;
  }
  const l = (d) => Math.round(d + (255 - d) * f);
  return new b(i(l(r)), i(l(a)), i(l(n)));
}
function C(f) {
  var t = f.toString(16);
  return t.length == 1 ? "0" + t : t;
}
function V(f, t, i) {
  return "#" + C(f) + C(t) + C(i);
}
const z = 0.1, J = 1.1, U = 1.2, Y = 1.8, Z = 3e-3;
class B {
  constructor(t, i, e, s) {
    this.canvas = t, this.random = i, this.x = e, this.y = s;
  }
  draw(t = !1, i = !1, e = !1) {
    let s = this.canvas.getContext("2d"), h = this.random.random() < Z;
    t && (h = !1);
    let r = this.random.float(z, J), a = this.random.random() * 0.7 + 0.2, n = new b(this.random.int(225, 255), this.random.int(225, 255), this.random.int(225, 255), a);
    if (s.fillStyle = n.rgba(), s.strokeStyle = n.rgba(), h) {
      console.log("isABigStar!"), r = this.random.float(U, Y), s.save();
      const l = s.createRadialGradient(this.x, this.y, 0, this.x, this.y, r * 6);
      l.addColorStop(0, `rgba(${n.r}, ${n.g}, ${n.b}, 0.55)`), l.addColorStop(1, `rgba(${n.r}, ${n.g}, ${n.b}, 0)`), s.fillStyle = l, s.beginPath(), s.arc(this.x, this.y, r * 6, 0, Math.PI * 2), s.closePath(), s.fill(), s.restore();
    }
    if (s.save(), s.beginPath(), s.arc(this.x, this.y, r, 0, Math.PI * 2), s.closePath(), s.fill(), i && this.polyStar(
      s,
      this.x,
      this.y,
      r * this.random.int(4, 8),
      this.random.int(4, 5),
      // number of sides
      this.random.float(0.7, 0.9),
      // pointyness
      this.random.random() * 360
      // rotation of the star
    ), t) {
      console.log("shooting star"), n = E("#FFFFFF"), s.fillStyle = n.rgb(), s.strokeStyle = n.rgb(), s.beginPath(), s.moveTo(this.x, this.y);
      let l = this.random.int(this.x - 50, this.x + 50), d = this.random.int(this.y - 50, this.y + 50);
      s.lineTo(l, d);
      let c = s.createLinearGradient(this.x, this.y, l, d);
      c.addColorStop(0, n.rgba()), c.addColorStop(1, `rgba(${n.r},${n.g},${n.b},0)`), s.strokeStyle = c, s.closePath(), s.stroke();
    }
    s.restore();
  }
  polyStar(t, n, l, d, g, r, c) {
    t.save();
    var n = this.x, l = this.y, d = d, c = (c || 0) / 180 * Math.PI, g = g, w = 1 - (r || 0), u = Math.PI / g;
    t.moveTo(n + Math.cos(c) * d, l + Math.sin(c) * d), t.beginPath();
    for (var m = 0; m < g; m++)
      c += u, w != 1 && t.lineTo(n + Math.cos(c) * d * w, l + Math.sin(c) * d * w), c += u, t.lineTo(n + Math.cos(c) * d, l + Math.sin(c) * d);
    t.closePath(), t.fillStyle = "rgba(255, 255, 255, 1)", t.fill(), t.restore();
  }
}
class A {
  constructor(t, i, e, s, h, r, a, n, l, d = 0, c = !0, g = 1) {
    this.random = i, this.time = this.random.random() * 99, this.currentMin = s, this.currentMax = h, this.newMin = r, this.newMax = a, this.timeInterval = n, this.lengthInterval = g, this.mLength = 0, this.canvas = t, this.ctx = t.getContext("2d"), this.baseHeight = this.canvas.height * 0.05, this.height = e - this.baseHeight, this.width = t.width, this.color = l, this.blur = d, this.fill = c;
  }
  getVertex() {
    this.time += this.timeInterval, this.mLength += this.lengthInterval;
    let t = this.random.noise(this.time), i = this.map(t, this.currentMin, this.currentMax, this.newMin, -this.height + this.newMax);
    return [this.mLength + 1, this.height - -i];
  }
  draw() {
    console.log("draw mountain"), this.ctx.save(), this.ctx.fillStyle = this.color.rgba(), this.ctx.strokeStyle = this.color.rgba(), this.ctx.filter = `blur(${this.blur}px)`;
    let t = new Path2D();
    t.moveTo(-100 * this.lengthInterval, this.height + this.baseHeight);
    for (let i = 0; i < this.width; i++) {
      let e = this.getVertex();
      t.lineTo(e[0], e[1]);
    }
    this.fill && (t.lineTo(this.width, this.height + this.baseHeight), t.closePath(), this.ctx.fill(t)), this.ctx.stroke(t), this.ctx.restore();
  }
  map(t, i, e, s, h, r) {
    const a = (t - i) / (e - i) * (h - s) + s;
    return r ? s < h ? this.constrain(a, s, h) : this.constrain(a, h, s) : a;
  }
  constrain(t, i, e) {
    return Math.max(Math.min(t, e), i);
  }
}
const p = Math.PI / 180;
class X {
  constructor(t, i, e = 0, s = 0, h = 0, r = 0, a = "#fff", n = "#000") {
    this.random = i, this.phase = 360 * e, this.lineWidth = 0, this.x = s > 0 ? s : t.width / 2, this.y = h > 0 ? h : t.height / 2, this.r = r > 0 ? r : 100, this.light = a, this.dark = n, this.offset = this.lineWidth / 2, this.canvas = t, this.ctx = t.getContext("2d"), this.glow = this.r / 2, console.log(`Moon phase: ${this.phase}`);
  }
  drawMoon() {
    this.ctx.translate(this.offset, this.offset), this.random.random() < 0.4 && this.ctx.rotate(this.random.int(0, 360) * Math.PI / 180), this.ctx.beginPath(), this.ctx.arc(this.r, this.r, this.r, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fillStyle = this.dark, this.ctx.fill();
  }
  /*
  drawMoon2() {
      this.ctx.translate(this.offset, this.offset);
      this.ctx.beginPath();
      this.ctx.arc(this.r, this.r, this.r, 0, 2 * Math.PI, true);
      this.ctx.closePath();
      this.ctx.fillStyle = this.light;
      // this.ctx.strokeStyle = this.light;
      // this.ctx.lineWidth = this.lineWidth;
      this.ctx.shadowBlur = this.glow;
      this.ctx.shadowColor = this.light;
      this.ctx.fill();
      // this.ctx.stroke();
      this.ctx.shadowBlur = 0;
      this.ctx.shadowColor = 'transparent';
  }
  */
  drawShadow(t) {
    this.ctx.fillStyle = this.light;
    const i = Math.cos(t * p);
    this.ctx.lineWidth = 1, this.ctx.beginPath();
    let e = i * this.r * Math.cos(0) + this.r, s = this.r * Math.sin(0) + this.r;
    if (this.ctx.moveTo(e, s), t <= 180)
      for (let h = 0; h <= 360; h++)
        Math.cos(h * p) > 0 ? e = i * this.r * Math.cos(h * p) + this.r : e = this.r * Math.cos(h * p) + this.r, s = this.r * Math.sin(h * p) + this.r - 1, this.ctx.lineTo(e, s + 1);
    else
      for (let h = 0; h <= 360; h++)
        Math.cos(h * p) < 0 ? e = i * this.r * Math.cos(h * p) + this.r : e = this.r * Math.cos(h * p) + this.r, s = this.r * Math.sin(h * p) + this.r - 1, this.ctx.lineTo(e, s + 1);
    this.ctx.closePath(), this.ctx.shadowBlur = this.glow, this.ctx.shadowColor = this.light, this.ctx.fill();
  }
  /*
      drawShadow2(phase) {
          // console.log(`Shadow phase: ${phase}`);
          this.ctx.beginPath();
          this.ctx.arc(this.r, this.r, this.r, -Math.PI / 2, Math.PI / 2, true);
          this.ctx.closePath();
          this.ctx.fillStyle = this.dark;
          this.ctx.fill();
  
          this.ctx.translate(this.r, this.r);
          this.ctx.scale(phase, 1);
          this.ctx.translate(-this.r, -this.r);
          this.ctx.beginPath();
          this.ctx.arc(this.r, this.r, this.r, -Math.PI / 2, Math.PI / 2, true);
          this.ctx.closePath();
          this.ctx.fillStyle = phase > 0 ? this.light : this.dark;
          this.ctx.fill();
      }
      */
  draw() {
    this.ctx.save(), this.ctx.translate(this.x, this.y), this.drawMoon(), this.drawShadow(this.phase), this.ctx.restore();
  }
  /*
  drawComplex2() {
      this.ctx.save();
      this.ctx.translate(this.x, this.y);
      if (this.phase <= 0.5) {
          this.drawMoon();
          this.drawShadow(4 * this.phase - 1);
      } else {
          this.ctx.translate(this.r + 2 * this.offset, this.r + 2 * this.offset);
          this.ctx.rotate(Math.PI);
          this.ctx.translate(-this.r, -this.r);
          this.drawMoon();
          this.drawShadow(4 * (1 - this.phase) - 1);
      }
      this.ctx.restore();
  }
  */
  /*
  drawSimple() {
      this.ctx.save();
      this.ctx.fillStyle = this.light;
      this.ctx.beginPath();
      this.ctx.ellipse(this.x, this.y, this.r, this.r, 0, 0, 2 * Math.PI);
      if (this.phase > 0.8) {
          this.ctx.shadowBlur = this.glow;
          this.ctx.shadowColor = this.light;
      }
      this.ctx.fill();
      if (this.phase <= 0.8) {
          let side = Math.random() >= 0.5 ? 1 : -1
          this.ctx.fillStyle = this.dark;
          this.ctx.beginPath();
          this.ctx.ellipse(this.x + this.phase * this.r * side, this.y, this.r, this.r, 0, 0, 2 * Math.PI);
          this.ctx.fill();
      }
      this.ctx.restore();
  }
  */
}
class j {
  constructor(t, i, e = 0, s = 0, h = 0, r = 0) {
    this.canvas = t, this.ctx = t.getContext("2d"), this.random = i, this.phase = e, this.lineWidth = 0, this.x = s > 0 ? s : t.width / 2, this.y = h > 0 ? h : t.height / 2, this.r = r > 0 ? r : 100, this.offset = this.lineWidth / 2, this.glow = this.r * 10, this.color = D(this.phase, this.random), console.log(`Sun phase: ${this.phase}`);
  }
  drawSun() {
    this.ctx.translate(this.offset, this.offset);
    const t = this.random.float(0.1, 0.9), i = this.random.int(1, 8), e = this.ctx.createRadialGradient(0, 0, 0, 0, 0, this.r * i);
    e.addColorStop(0, this.color.rgb().replace(")", `, ${t})`).replace("rgb", "rgba")), e.addColorStop(1, this.color.rgb().replace(")", ", 0)").replace("rgb", "rgba")), this.ctx.beginPath(), this.ctx.arc(0, 0, this.r * i, 0, 2 * Math.PI), this.ctx.closePath(), this.ctx.fillStyle = e, this.ctx.fill(), this.ctx.beginPath(), this.ctx.arc(0, 0, this.r, 0, 2 * Math.PI), this.ctx.closePath(), this.ctx.shadowBlur = this.glow, this.ctx.fillStyle = this.color.rgba(), this.ctx.shadowColor = this.color.rgba(), this.ctx.fill();
  }
  draw() {
    console.log("Drawing sun!!!!"), this.ctx.save(), this.ctx.translate(this.x, this.y), this.drawSun(), this.ctx.restore();
  }
}
const N = 4, L = 1 << N, F = 8, q = 1 << F, v = 4095;
let K = 4, Q = 0.5;
const R = (f) => 0.5 * (1 - Math.cos(f * Math.PI));
let y;
class tt {
  constructor(t) {
    this.seed = t, this.rnd = this.splitmix32(this.seed);
  }
  noise(t, i = 0, e = 0) {
    if (y == null) {
      y = new Array(v + 1);
      for (let S = 0; S < v + 1; S++)
        y[S] = this.rnd();
    }
    t < 0 && (t = -t), i < 0 && (i = -i), e < 0 && (e = -e);
    let s = Math.floor(t), h = Math.floor(i), r = Math.floor(e), a = t - s, n = i - h, l = e - r, d, c, g = 0, w = 0.5, u, m, M;
    for (let S = 0; S < K; S++) {
      let x = s + (h << N) + (r << F);
      d = R(a), c = R(n), u = y[x & v], u += d * (y[x + 1 & v] - u), m = y[x + L & v], m += d * (y[x + L + 1 & v] - m), u += c * (m - u), x += q, m = y[x & v], m += d * (y[x + 1 & v] - m), M = y[x + L & v], M += d * (y[x + L + 1 & v] - M), m += c * (M - m), u += R(l) * (m - u), g += u * w, w *= Q, s <<= 1, a *= 2, h <<= 1, n *= 2, r <<= 1, l *= 2, a >= 1 && (s++, a--), n >= 1 && (h++, n--), l >= 1 && (r++, l--);
    }
    return g;
  }
  float(t, i) {
    return this.rnd() * (i - t) + t;
  }
  int(t, i) {
    const e = Math.ceil(t), s = Math.floor(i);
    return Math.floor(this.rnd() * (s - e) + e);
  }
  random() {
    return this.rnd();
  }
  mulberry32(t) {
    return function() {
      t |= 0, t = t + 1831565813 | 0;
      let i = Math.imul(t ^ t >>> 15, 1 | t);
      return i = i + Math.imul(i ^ i >>> 7, 61 | i) ^ i, ((i ^ i >>> 14) >>> 0) / 4294967296;
    };
  }
  splitmix32(t) {
    return function() {
      t |= 0, t = t + 2654435769 | 0;
      var i = t ^ t >>> 16;
      return i = Math.imul(i, 569420461), i = i ^ i >>> 15, i = Math.imul(i, 1935289751), ((i = i ^ i >>> 15) >>> 0) / 4294967296;
    };
  }
}
class it {
  encode(t) {
    const e = new TextEncoder().encode(t), s = String.fromCharCode.apply(null, e);
    return btoa(s);
  }
  decode(t) {
    const i = atob(t), e = new Uint8Array(i.length);
    for (let h = 0; h < i.length; h++)
      e[h] = i.charCodeAt(h);
    return new TextDecoder().decode(e);
  }
}
let T = 3, $ = 25, _ = 3, H = 12;
class et {
  constructor({ canvas: t, seed: i = 0, randomSeed: e = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER), drawSky: s = !0, drawStars: h = !0, drawMoon: r = !0, drawSun: a = !0, drawMountains: n = !0, drawWaves: l = !0, drawGround: d = !0, drawWater: c = !0, drawBubbles: g = !0, numberOfMountains: w = 0, numberOfWaves: u = 0, dayTime: m = Math.random() < 0.5, underwater: M = !1, horizontLine: S = 0.5, skyColor1: x = null, skyColor2: k = null, groundColor1: I = null, groundColor2: W = null } = {}) {
    try {
      this.canvas = document.querySelector(t), this.ctx = t.getContext("2d");
    } catch {
      throw new Error(`Could not find a canvas element with the selector ${t}`);
    }
    if (this.codec = new it(), this.moon = null, this.sun = null, this.stars = [], this.bubbles = [], this.mountains = [], this.waves = [], typeof arguments[1] > "u" && (arguments[1] = {}), i) {
      console.log(`seed: ${i}`), console.log(this.codec.decode(i));
      let o;
      try {
        o = JSON.parse(this.codec.decode(i)), "randomSeed" in o && (e = o.randomSeed), "drawSky" in o && (s = o.drawSky), "drawStars" in o && (h = o.drawStars), "drawMoon" in o && (r = o.drawMoon), "drawSun" in o && (a = o.drawSun), "drawMountains" in o && (n = o.drawMountains), "drawWaves" in o && (l = o.drawWaves), "drawGround" in o && (d = o.drawGround), "drawWater" in o && (c = o.drawWater), "drawBubbles" in o && (g = o.drawBubbles), "numberOfMountains" in o && (w = o.numberOfMountains), "numberOfWaves" in o && (u = o.numberOfWaves), "dayTime" in o && (m = o.dayTime), "underwater" in o && (M = o.underwater), "horizontLine" in o && (S = o.horizontLine), "skyColor1" in o && (x = o.skyColor1), "skyColor2" in o && (k = o.skyColor2), "groundColor1" in o && (I = o.groundColor1), "groundColor2" in o && (W = o.groundColor2);
      } catch {
        console.error(`Invalid seed: ${i}`);
      }
    }
    "seed" in arguments[1] && delete arguments[1].seed, arguments[1].randomSeed = e, arguments[1].dayTime = m, this.randomSeed = e, this.random = new tt(this.randomSeed), console.log(`seed: ${i}`), console.log(JSON.stringify(arguments[1])), this.seed = this.codec.encode(JSON.stringify(arguments[1])), console.log(this.seed), this.numberOfMountains = w || this.random.int(T, $), this.numberOfWaves = u || this.random.int(_, H), this.drawSky = s, this.drawStars = h, this.drawMoon = r, this.drawSun = a, this.drawMountains = n, this.drawGround = d, this.drawWater = c, this.drawBubbles = g, this.dayTime = m, this.underwater = M, this.drawWaves = l, this.horizontLine = S, this.skyColor1 = x, this.skyColor2 = k, this.groundColor1 = I, this.groundColor2 = W, this.init();
  }
  init() {
    this.width = window.innerWidth, this.height = window.innerHeight, this.horizontLineHeight = this.height * this.horizontLine, this.baseLineHeight = this.height, this.underwater && (this.baseLineHeight = this.horizontLineHeight + 50), this.numberOfMountains > $ ? this.numberOfMountains = $ : this.numberOfMountains < T && (this.numberOfMountains = T), this.numberOfWaves > H ? this.numberOfWaves = H : this.numberOfWaves < _ && (this.numberOfWaves = _), console.log(`Day time: ${this.dayTime}`), this.createColorPallete(), this.underwater ? (console.log(`Under water: ${this.underwater}`), this.drawWaves && this.createWaves(), this.drawStars && this.createStars(), this.drawBubbles && this.createBubbles(), this.drawMoon && this.createMoon()) : (console.log(`Number of mountains: ${this.numberOfMountains}`), this.drawMountains && this.createMountains(), this.drawStars && this.createStars(), this.drawMoon && this.createMoon(), this.drawSun && this.createSun());
  }
  createColorPallete() {
    const t = this.random.random() < 0.25, i = this.random.random() < 0.5;
    let e = this.dayTime ? 150 : 0, s = this.dayTime ? 150 : 0, h = this.dayTime ? 150 : 0, r = this.dayTime ? 255 : 200, a = this.dayTime ? 255 : 200, n = this.dayTime ? 255 : 200, l = i ? 200 : -185, d = i ? 200 : -175, c = i ? 60 : -55;
    this.underwater && (console.log("underwater!!!!"), e = 100, s = 100, h = 100, r = 255, a = 255, n = 255);
    let g = this.random.int(e, r), w = this.random.int(s, a), u = this.random.int(h, n);
    if (t) {
      let o = this.dayTime ? this.random.random() : this.random.random() * -1;
      i && (console.log("morning!!!!"), o = 1);
      let P = G(o, this.random);
      console.log("Sky is blue!"), g = P.r, w = P.g, u = P.b;
    }
    let m = g + l, M = w + d, S = u + c;
    if (this.skyColor1)
      try {
        let o = E(this.skyColor1);
        g = o.r, w = o.g, u = o.b;
      } catch {
        console.error(`Invalid color code: ${this.skyColor1}`);
      }
    if (this.skyColor2)
      try {
        let o = E(this.skyColor2);
        m = o.r, M = o.g, S = o.b;
      } catch {
        console.error(`Invalid color code: ${this.skyColor2}`);
      }
    console.log(`Sky 1 - red: ${g}, green: ${w}, blue: ${u}`), console.log(`Sky 2 - red: ${m}, green: ${M}, blue: ${S}`);
    let x = this.underwater ? this.numberOfWaves : this.numberOfMountains;
    this.colorPallete = [];
    let k = (r - g) / x, I = (a - w) / x, W = (n - u) / x;
    for (let o = 0; o < x; o++) {
      let P = 1;
      this.colorPallete.push(new b(g + o * k, w + o * I, u + o * W, P));
    }
    this.skyColor1 || this.skyColor2 ? (this.colorPallete.push(new b(g, w, u, 1)), this.colorPallete.push(new b(m, M, S, 1))) : i ? (this.colorPallete.push(new b(m, M, S, 1)), this.colorPallete.push(new b(g, w, u, 1))) : (this.colorPallete.push(new b(g, w, u, 1)), this.colorPallete.push(new b(m, M, S, 1))), console.log(this.colorPallete);
  }
  createMountains() {
    let t = this.random.float(3e-3, 0.03), i = this.random.float(3.3, 7), e = this.random.float(0.1, 0.26);
    e = 0.324 - this.numberOfMountains / $ * 100 * 16e-4 - 0.064, console.log(`heightSeed: ${i}`), console.log(`mountainSeed: ${t}`), console.log(`heightSub: ${e}`);
    let s = i, h = t;
    for (let r = 0; r < this.numberOfMountains; r++) {
      let a = r - (this.numberOfMountains - 3);
      this.blur < 0 && (this.blur = 0), r > 0 && (s = i - e * r, h = t / r), this.mountains.push(new A(this.canvas, this.random, this.horizontLineHeight, 0, s, 0, 4, h, this.colorPallete[r], a, !0, 1));
    }
    console.log(this.mountains);
  }
  createWaves() {
    let t = this.random.float(3e-3, 0.08), i = this.random.float(3.3, 7), e = this.random.float(0.1, 0.26);
    e = 0.324 - this.numberOfMountains / $ * 100 * 16e-4 - 0.064, i = 4, t = 4e-3, e = 10, console.log(`heightSeed: ${i}`), console.log(`mountainSeed: ${t}`), console.log(`heightSub: ${e}`);
    let s = i, h = t, r = this.horizontLineHeight;
    r = r + r * 2, console.log(`horizontLineHeight: ${r}`);
    for (let a = 0; a < this.numberOfWaves; a++) {
      if (a > 0) {
        let n = e * (a * 0.1);
        this.underwater && (n = n * -1), s = i + n, r -= n;
      }
      this.waves.push(new A(this.canvas, this.random, r, 0, s, 0, 4, h, new b(255, 255, 255), 0, !1, 3));
    }
    console.log(this.waves);
  }
  createStars() {
    let t = this.random.int(this.width * 0.1, this.width);
    for (let i = 0; i < t; i++)
      this.stars.push(new B(this.canvas, this.random, this.random.int(0, this.width), this.random.int(0, this.horizontLineHeight)));
  }
  createBubbles() {
    let t = this.random.int(this.width * 0.02, this.width * 0.05);
    console.log(`Number of bubbles: ${t}`);
    for (let i = 0; i < t; i++)
      this.bubbles.push(new B(this.canvas, this.random, this.random.int(0, this.width), this.random.int(this.horizontLineHeight + this.baseLineHeight, this.height)));
  }
  createMoon() {
    let t = this.random.int(this.height / 70, this.height / 7), i = this.random.int(2 * t, this.width - 2 * t), e = parseInt(this.random.random() * this.height / 6 + t), s = ["#ffffff", "#fffefd", "#fff0f0", "#ffcdcd"], h = s[this.random.int(0, s.length - 1)], r = this.colorPallete[this.colorPallete.length - 1].rgb();
    this.moon = new X(this.canvas, this.random, this.random.random(), i, e, t, h, r);
  }
  createSun() {
    let t = this.random.int(this.height / 70, this.height / 7), i = this.random.int(2 * t, this.width - 2 * t), e = parseInt(this.random.random() * this.height / 6 + t);
    this.sun = new j(this.canvas, this.random, this.random.random(), i, e, t);
  }
  render() {
    this.underwater ? this.drawUnderWater() : this.drawLandscape();
  }
  drawUnderWater() {
    if (this._drawSky(), !this.drawWaves)
      for (let t = this.waves.length - 1; t >= 0; t--)
        this.waves[t].draw();
    if (this.drawWater) {
      let t = new b(255, 255, 255, 1), i = new b(255, 255, 255, 1);
      O(this.canvas, 0, this.horizontLineHeight, this.width, this.height - this.horizontLineHeight, i, t);
      let e = this.width / 2, s = this.width / 2, h = this.ctx.createRadialGradient(e, this.horizontLineHeight, s / 10, e, this.horizontLineHeight, s);
      h.addColorStop(0, i.rgba()), h.addColorStop(1, t.rgba()), this.ctx.fillStyle = h;
    }
    if (this.drawBubbles)
      for (let t of this.bubbles)
        t.draw(!1, !0);
  }
  _drawSky() {
    if (O(this.canvas, 0, 0, this.width, this.horizontLineHeight, this.colorPallete[this.colorPallete.length - 1], this.colorPallete[this.colorPallete.length - 2]), this.dayTime)
      this.drawSun && this.sun.draw();
    else {
      if (this.drawStars) {
        for (let i of this.stars)
          i.draw();
        for (let i = this.random.int(1, 5); i > 0; i--) {
          var t = new B(this.canvas, this.random, this.random.int(0, this.width), this.random.int(0, this.horizontLineHeight));
          t.draw(!0, !1, !1);
        }
        for (let i = this.random.int(3, 10); i > 0; i--) {
          var t = new B(this.canvas, this.random, this.random.int(0, this.width), this.random.int(0, this.horizontLineHeight));
          t.draw(!1, !0, !1);
        }
      }
      this.drawMoon && this.moon.draw();
    }
  }
  _drawGround(t = 0) {
    t === 0 && (t = this.horizontLineHeight);
    let i = ["#FFA500", "#C4A484", "#B7CCA9", "#E2D03B", "#800020", "#829FAD", "#93C572", "#4CBB17", "#32CD32", "#228B22", "#016403", "#6C8E68", "#3F9B0B", "#7CFC00", "#814f3e", "#96776e", "#c1a89a", "#a6e156", "#8d9f40", "#263525", "#301a17", "#1e281e", "#495846", "#121510", "#7f6f55", "#54534f", "#879b35", "#9c9495", "#e7e5ec", "#a47d5d", "#bfc0bd", "#ad8c89", "#d5adb3", "#9d8563", "#e3d3b8", "#435654"], e = i[this.random.int(0, i.length - 1)], s = i[this.random.int(0, i.length - 1)];
    if (this.groundColor1)
      try {
        e = this.groundColor1;
      } catch {
        console.log(`Invalid color code: ${this.groundColor1}`);
      }
    if (this.groundColor2)
      try {
        s = this.groundColor2;
      } catch {
        console.log(`Invalid color code: ${this.groundColor2}`);
      }
    let h = this.colorPallete[0];
    this.ctx.fillStyle = h, this.ctx.fillRect(0, t, this.width, this.height - t);
    let r = this.ctx.createLinearGradient(0, t, 0, this.baseLineHeight), a = 2;
    r.addColorStop(0, h.rgb()), r.addColorStop(0.2, e), r.addColorStop(1, s), this.ctx.fillStyle = r, this.ctx.filter = `blur(${a}px)`, this.ctx.fillRect(-a, t - a, this.width + a, this.baseLineHeight - t + a), this.ctx.fillRect(0, t, this.width, this.baseLineHeight - t);
    let n = this.width / 2, l = t, d = this.width / 2, c = this.canvas.getContext("2d"), g = c.createRadialGradient(n, l, d / 5, n, l, d), w = new b(255, 255, 255, 0.3), u = new b(255, 255, 255, 0);
    g.addColorStop(0, w.rgba()), g.addColorStop(1, u.rgba()), c.fillStyle = g, c.fillRect(0, l, this.width, this.height - this.baseLineHeight), c.fillRect(0, l, this.width, this.baseLineHeight - t), O(this.canvas, 0, t, this.width, t - t * 1.07, new b(255, 255, 255, 0.3), new b(255, 255, 255, 0)), O(this.canvas, 0, t, this.width, t - this.baseLineHeight, new b(255, 255, 255, 0.3), new b(255, 255, 255, 0));
  }
  drawLandscape() {
    if (this.drawSky && this._drawSky(), this.drawMountains)
      for (let t = this.mountains.length - 1; t >= 0; t--)
        this.mountains[t].draw();
    this.drawGround && this._drawGround();
  }
  resize() {
    console.log("resizing..."), console.log(this.canvas);
    const t = this.canvas.getContext("2d"), i = window.devicePixelRatio || 1, e = window.innerWidth, s = window.innerHeight;
    this.width = e, this.height = s, this.canvas.width = Math.floor(e * i), this.canvas.height = Math.floor(s * i), this.canvas.style.width = e + "px", this.canvas.style.height = s + "px", t.scale(i, i);
  }
}
function O(f, t, i, e, s, h, r, a) {
  let n = f.getContext("2d"), l = n.createLinearGradient(t, i, t, i + s);
  l.addColorStop(0, h.rgba()), l.addColorStop(1, r.rgba()), n.fillStyle = l, n.fillRect(t, i, e, s);
}
export {
  et as LandscapeJS
};
