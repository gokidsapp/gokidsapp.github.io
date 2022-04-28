(function (Te, eb) {
  function od() {}
  function yb() {
    this.state = 0;
    this.Nc = 8;
    this.offset = 0;
    v.call(this);
    yb.Ca = this;
    this.R();
    this.group = new X();
    this.b = new P(null, 65536);
    this.a = new P(null, 65536);
    this.a.V(1280 * this.Nc);
    this.b.Pc(this.Nc);
    this.a.Pc(this.Nc);
    this.group.appendChild(this.b);
    this.group.appendChild(this.a);
    B.Ta(M.Pe().Ad("bg"), X).appendChild(this.group);
    this.gc();
    this.show();
    this.type = 63;
  }
  function Gc() {
    H.call(this, "PauseScreen");
    this.type = 20;
  }
  function Hc() {
    this.nb = this.loaded = !1;
    H.call(this, "LoadingScreen");
    this.type = 9;
  }
  function Ic() {
    this.Qa = 0;
    Ya.call(this);
  }
  function Za() {
    H.call(this, "HomeScreen");
    this.type = 13;
  }
  function fb(a) {
    this.rq = 0;
    this.nb = 1;
    H.call(this, a);
  }
  function Ue(a) {
    this.alpha = 1;
    this.data = [];
    this.Kk = [];
    v.call(this);
    this.source = a;
    this.type = 15;
  }
  function Ve(a) {
    v.call(this);
    this.level = a;
    this.type = 16;
  }
  function pd() {
    this.color = 1;
    this.x = this.Po = 0;
    v.call(this);
  }
  function qd(a) {
    v.call(this);
    this.Ob = new P(null, 11, "bubble" + a);
    this.Wb = new P(null, 11, "air");
    this.Wb.Db();
    this.Wb.Pa();
    this.scale = 0.1 + 0.4 * Math.random();
    var b = S.Ea.window.Rb();
    a = b.b * Math.random();
    b = b.a + this.Ob.nd();
    var c = new r();
    c.b = a;
    c.a = b;
    this.Ga = c;
    this.x = this.Ga.b;
    this.Ob.Z(2 * this.scale);
    this.Ob.M(!1);
    this.Ob.Db();
    this.Ob.Pa();
    this.Ob.fa(this.scale);
    this.Wb.fa(this.scale + 0.1);
    this.type = 18;
  }
  function rc() {
    this.nb = 1;
    H.call(this, "GameOverScreen");
    this.type = 19;
  }
  function H(a) {
    this.buttons = [];
    M.call(this);
    this.pk = a;
    this.type = 8;
  }
  function rd(a, b, c) {
    this.vc = new r();
    this.alpha = this.Mg = 0;
    this.Pk = new r();
    this.je = new r();
    this.state = 0;
    this.Wk = !1;
    v.call(this);
    this.rl = a;
    this.sl = b;
    this.y = c;
    this.Io(this.je);
    this.Io(this.Pk);
    this.o = new P(this.v().Zb(6), 5, "warning");
    this.o.Db();
    this.o.Pa();
    this.o.M(!1);
    this.type = 49;
  }
  function sd() {
    this.Vf = new L();
    v.call(this);
  }
  function td() {
    v.call(this);
    this.type = 57;
  }
  function sc(a) {
    this.aq = N.Zh();
    this.kh = this.oj = this.Rc = 0;
    this.Ll = new r();
    this.group = new X();
    v.call(this);
    this.length = a;
    a = [];
    for (var b = 0, c = this.length; b < c; )
      b++, a.push([new P(this.group, 19, "0"), new P(this.group, 18, "0")]);
    this.Qb = a;
    a = 0;
    for (b = this.length; a < b; ) {
      c = a++;
      var d = this.Qb[c][0].gi().b,
        e = this.Qb[c];
      e[0].X(d * c);
      e[1].X(d * c);
      e[1].Z(0);
      e[1].M(!1);
      e[0].Pa();
      e[1].Pa();
    }
    c = this.Qb[0][0].gi();
    a = c.b;
    b = c.a;
    c = new r();
    c.b = a;
    c.a = b;
    this.Ll = c;
    this.type = 46;
  }
  function ud() {
    this.visible = !1;
    this.alpha = this.offset = 0;
    v.call(this);
  }
  function vd() {
    this.ae = wd.ae();
    v.call(this);
  }
  function xd() {
    this.io = !1;
    v.call(this);
  }
  function yd() {
    this.Il = this.Ee = this.uj = 0;
    v.call(this);
  }
  function zd() {
    v.call(this);
  }
  function Ad() {
    this.vb = [];
    v.call(this);
  }
  function Bd() {
    this.state = 0;
    v.call(this);
  }
  function Cd() {
    this.Mk = this.ratio = this.ue = 0;
    v.call(this);
  }
  function Jc() {
    v.call(this);
    var a = this.v().Zb(5),
      b = new Kc("pause");
    b.Ph = !1;
    this.button = new Vb(a, "pause", b);
    this.button.cl(!0);
    this.N(this.button);
    this.type = 35;
  }
  function Dd() {
    v.call(this);
  }
  function Ed() {
    this.state = 0;
    v.call(this);
    this.type = 59;
  }
  function Fd() {
    this.Lk = !1;
    this.ae = wd.ae();
    v.call(this);
    Y.Ya().la(D(this, this.Kc));
    this.type = 34;
  }
  function Gd(a, b, c) {
    gb.call(this, a, b, c);
  }
  function Hd(a, b, c) {
    gb.call(this, a, b, c);
  }
  function gb(a, b, c) {
    v.call(this);
    this.B = a;
    this.aa = b;
    this.value = c;
    Wb.count++;
    this.type = 40;
  }
  function Wb() {
    v.call(this);
  }
  function Id() {
    v.call(this);
    this.type = 39;
  }
  function Jd() {
    this.state = 0;
    Xb.call(this, "speed");
    this.type = 55;
  }
  function Xb(a) {
    v.call(this);
    this.frame = a;
    this.type = 54;
  }
  function Kd() {
    this.nb = !1;
    v.call(this);
  }
  function Ld() {
    this.Lq = !1;
    this.state = 0;
    v.call(this);
    this.type = 51;
  }
  function Md() {
    this.visible = !1;
    this.ae = wd.ae();
    this.Mg = this.cm = this.alpha = 0;
    var a = new r();
    a.b = -100;
    a.a = -100;
    this.Yb = a;
    v.call(this);
  }
  function $a(a, b, c) {
    this.yA = new Ma();
    this.group = new X();
    this.pk = a;
    this.width = b;
    this.height = c;
  }
  function Nd(a, b) {
    v.call(this);
    this.$l = a;
    this.Ap = b;
    this.type = 22;
  }
  function mb(a) {
    this.state = 0;
    v.call(this);
    this.dj = a;
    this.o = new P(a.Hb(), 0, "sparkle");
    this.o.Db();
    this.o.Pa();
    this.o.Ww().add();
    this.o.M(!1);
    this.o.Z(0);
    this.offset = Ga.Id(0, 3);
    this.type = 62;
  }
  function We() {
    this.Or = this.Ye = this.mr = 0;
    for (var a = [], b = 1; 8 > b; ) b++, a.push(0);
    this.Nr = a;
  }
  function z() {}
  function Xe() {
    this.target = null;
    this.$p = !1;
    this.si = 0;
    this.If = new L();
    this.ff = new L();
    this.Ox = [];
  }
  function Lc() {
    this.gr = function (a) {
      return 1 <= a.code ? 7 >= a.code : !1;
    };
    this.xr = function (a, b) {
      return a.code != b.code || a.D.jd ? !1 : !b.D.jd;
    };
    this.$f = new L(256);
    v.call(this);
  }
  function T() {}
  function Od() {
    this.border = [];
    this.$f = new L(256);
    var a = this;
    v.call(this);
    this.Ge = new L(7, null, !0);
    this.Ge.R(7, 0);
    for (var b = 0; 6 > b; ) {
      var c = b++;
      this.Ge.c[c + 1] = 0;
    }
    this.vk = new Ye();
    this.vk.No = function (b, c, f, g) {
      return f == a.P().Kd && c < g ? !1 : !0;
    };
    this.v().la(this);
    Od.Ca = this;
    this.type = 29;
  }
  function Pd() {
    this.wj = 0;
    this.Wf = -1;
    v.call(this);
    for (var a = [], b = 0; 7 > b; ) b++, a.push(-1);
    this.nk = a;
    this.type = 28;
  }
  function Ze() {
    this.yl = this.qj = 0;
    this.Ns = this.Vn = 1;
    this.Ob = new P(null, 11);
    this.Wb = new P(null, 11);
  }
  function Ha() {
    function a(a, b) {
      a.kf("bubble" + b);
      a.Db();
      a.Pa();
      d.group.appendChild(a);
    }
    this.stop = this.rs = 0;
    for (var b = [], c = 0; 3 > c; ) ++c, b.push(new Ze());
    this.uc = b;
    this.state = 1;
    var d = this;
    v.call(this);
    this.group = new X();
    b = [];
    for (c = 1; 7 > c; ) {
      var e = c++;
      b.push(e);
    }
    c = b;
    Mc.mt(c);
    for (b = 0; 3 > b; )
      (e = b++),
        a(this.uc[e].Ob, 7),
        a(this.uc[e].Wb, c[e]),
        this.uc[e].Wb.Z(0);
    b = 1.2 * this.uc[0].Ob.J.b;
    this.uc[0].Ob.X(-b);
    this.uc[0].Wb.X(-b);
    this.uc[2].Ob.X(b);
    this.uc[2].Wb.X(b);
    this.type = 7;
  }
  function $e() {
    this.Nd = { type: "r", Gr: 0, Cr: 0, Fr: 0, zr: 0 };
  }
  function Yb(a) {
    this.bd = new Nc(a);
    this.mi = this.az();
    Yb.Wt = this.mi[this.mi.length - 1].cg;
    Yb.Xt = this.mi[this.mi.length - 1].level;
    a = [];
    for (var b = 0; 6 > b; ) {
      var c = b++;
      a.push(c + 1);
    }
    this.Fh = a;
    0.5 > this.bd.Ji() ? C.remove(this.Fh, 1) : C.remove(this.Fh, 5);
    c = this.Fh;
    a = [];
    b = 0;
    for (var d = this.Fh.length; b < d; ) b++, a.push(this.bd.Ji());
    Mc.mt(c, a);
    this.Fh.unshift(7);
    this.Gg = [];
  }
  function af() {}
  function Qd() {
    this.mc = [];
    this.$ = [];
    this.mode = this.vj = 0;
    v.call(this);
    for (var a = 0, b = 5; a < b; ) {
      var c = a++,
        d = this.$,
        e = new G();
      e.b = 0;
      e.a = 0;
      e.f = 0;
      e.d = 0;
      d[c] = e;
    }
    a = 0;
    for (b = 5; a < b; )
      (c = a++), (d = this.mc), (e = new r()), (e.b = 0), (e.a = 0), (d[c] = e);
    this.type = 33;
  }
  function bf(a, b) {
    var c = a.a,
      d = a.f,
      e = a.d,
      f = new G();
    f.b = a.b;
    f.a = c;
    f.f = d;
    f.d = e;
    this.$ = f;
    a = b.b;
    b = b.a;
    f = new r();
    f.b = a;
    f.a = b;
    this.align = f;
  }
  function Rd(a) {
    v.call(this);
    this.Ea = a;
    l.ui(17, D(this, this.R));
    this.type = 21;
  }
  function Sd(a) {
    this.qt = NaN;
    this.On = this.Pr = this.Ye = this.Cn = 0;
    this.Pm = !1;
    this.Jj = 0;
    this.jq = parseInt(sessionStorage.getItem("slevel") || 1);
    this.Zl = 0;
    this.Yl = !1;
    this.Xh = 0;
    this.Xl = !0;
    this.se = new We();
    this.level = null;
    this.state = 0;
    v.call(this);
    this.Ai = new Pd();
    this.bd = new Nc(a);
    Oc.Jz(((Fb = this.bd), D(Fb, Fb.Ji)));
    this.kA = new Lc();
    this.N(this.kA);
    this.Sj = new Yb(a);
    this.v().la(this);
    this.type = 27;
  }
  function Ca() {
    this.tb = new Na();
    nb.call(this);
    this.type = 24;
  }
  function cf() {
    var a = window.document;
    window.addEventListener("resize", D(this, this.resize));
    a.body.style.backgroundColor = "white";
    var b = this.Gb(),
      c = a.createElement("div");
    c.id = "crashdialog";
    c.style.position = "absolute";
    c.style.width = b.f - b.b + "px";
    c.style.height = b.d - b.a + "px";
    c.style.left = b.b + "px";
    c.style.top = b.a + "px";
    a.body.appendChild(c);
    a = a.createElement("p");
    a.style.fontFamily = "Arial, Helvetica, sans-serif";
    a.style.fontWeight = "bold";
    a.style.fontSize = "2em";
    a.style.textAlign = "center";
    a.style.margin = "4px";
    try {
      var d = "\ud83d\ude22<br>" + la.translate(Gb.i2);
    } catch (e) {
      d = "Aw, Snap!";
    }
    a.innerHTML = d;
    c.appendChild(a);
    a = a.cloneNode();
    a.style.fontWeight = "normal";
    a.style.textAlign = "center";
    a.style.fontSize = "1.5em";
    try {
      d = la.translate(Gb.i1);
    } catch (e) {
      d =
        "Oops, there was a problem :( This shouldn't happen. Please reload the game!";
    }
    a.innerText = d;
    c.appendChild(a);
  }
  function bg() {}
  function Kc(a) {
    this.kr = JSON.parse(l.getData(12));
    this.state = 0;
    this.scale = 1;
    this.Pb = this.y = this.frame = 0;
    this.Ph = !0;
    ob.call(this);
    this.data = O.ja(this.kr, "idle");
    this.o = new P(this.ec, 11, "air");
    this.o.Pa();
    this.icon = new P(this.ec, 10, a);
    this.icon.Pa();
    this.icon.Db();
    a = this.o.J.a / 2;
    var b = new r();
    b.b = this.o.J.b / 2;
    b.a = a;
    this.Xj = b;
    this.icon.X(this.Xj.b);
    this.icon.V(this.Xj.a);
    this.Rf = 0.75;
    this.icon.qe(this.Rf);
    this.icon.Pc(this.Rf);
    this.type = 12;
  }
  function ob() {
    this.ec = new X();
    v.call(this);
    this.type = 11;
  }
  function Vb(a, b, c) {
    this.i = 0;
    this.Xi = !1;
    this.nf = 0;
    v.call(this);
    this.name = b;
    this.Vi = c;
    this.N(c);
    a.appendChild(c.ec);
    this.i |= 8;
    Y.Ya().la(D(this, this.Kc));
    this.type = 10;
  }
  function Td() {
    v.call(this);
  }
  function Zb() {
    this.jo = !1;
    na.call(this);
  }
  function na() {
    this.us = 1;
    v.call(this);
  }
  function $b(a) {
    this.visible = !0;
    this.ub = this.vd = 0;
    this.wh = this.scale = this.alpha = 1;
    var b = new r();
    b.b = 0;
    b.a = 0;
    this.vh = b;
    b = new r();
    b.b = 0;
    b.a = 0;
    this.sc = b;
    v.call(this);
    this.ma = a;
    this.ma.client = this;
    this.ma.Dq(this.sc);
    a = this.vh;
    b = this.sc;
    a.b = b.b;
    a.a = b.a;
    this.type = 31;
  }
  function n() {
    v.call(this);
  }
  function pb() {
    this.scale = 1;
    this.hl = this.pf = 0;
    this.alpha = 1;
    this.Pj = 0.1;
    V.call(this);
  }
  function Pc() {
    A.call(this);
  }
  function Hb() {
    var a = new r();
    a.b = 0;
    a.a = 0;
    a = new r();
    a.b = 0;
    a.a = 0;
    a = new r();
    a.b = 0;
    a.a = 0;
    this.hn = a;
    this.Fl = 0;
    A.call(this);
  }
  function Ud(a) {
    v.call(this);
    this.o = new P(null, 11, "bubble" + a);
    this.type = 32;
  }
  function qb() {
    this.state = 0;
    this.Zv = N.qd(2);
    this.Yv = N.sd(0.1);
    var a = new r();
    a.b = 0;
    a.a = 0;
    a = new r();
    a.b = 0;
    a.a = 0;
    a = new r();
    a.b = 0;
    a.a = 0;
    this.hn = a;
    A.call(this);
  }
  function tc(a) {
    this.state = 0;
    A.call(this);
    this.lb = a;
  }
  function Vd() {
    this.state = 0;
    this.xp = !1;
    A.call(this);
  }
  function Wd() {
    this.state = 0;
    A.call(this);
  }
  function Xd() {
    this.state = 0;
    A.call(this);
  }
  function ac() {
    this.state = 0;
    A.call(this);
  }
  function df(a, b) {
    this.interval = 0;
    A.call(this);
    this.Jr = a;
    this.lb = b;
  }
  function ef(a) {
    this.interval = 0;
    this.Uc = N.qd(2);
    A.call(this);
    this.lb = a;
  }
  function Yd(a) {
    this.interval = 0;
    this.scale = 0.01;
    this.Uc = N.qd(2);
    A.call(this);
    this.pf = a;
  }
  function zb() {
    this.Uc = N.qd(2);
    A.call(this);
    zb.count++;
  }
  function A() {
    V.call(this);
    A.count++;
    var a = B.ld(this).__name__;
    if (Object.prototype.hasOwnProperty.call(A.fj.C, a)) var b = A.fj.C[a];
    else (b = A.iy++), (A.fj.C[a] = b), A.Ff.push(0), (A.fy.C[b] = a);
    A.Ff[b]++;
  }
  function wa(a) {
    this.state = 0;
    this.za = null;
    this.Xx = a;
  }
  function Zd() {}
  function Qc() {}
  function Sa() {
    Sa.Lh = this;
    v.call(this);
    this.Ps = new L();
    this.type = 2;
  }
  function Ya() {
    this.loaded = !1;
    this.Dk = -1;
    M.call(this);
    this.type = 5;
  }
  function M() {
    this.Wc = new Ib(null, null);
    this.Oo = this.state = 0;
    bc.call(this);
    this.name = $d.tm(this);
    this.type = 4;
  }
  function ff(a, b, c, d) {
    this.loaded = !1;
    this.nA = a;
    this.oA = b;
    this.mA = c;
    this.Sc = d;
  }
  function Ib(a, b) {
    null == b && (b = {});
    this.caller = a;
    this.Wd = b;
  }
  function gf(a) {
    this.buffer = new Jb();
    this.Av = a;
  }
  function hf() {
    function a(a) {
      a = new jf(a);
      b.entries.push(a);
      return a;
    }
    this.entries = [];
    this.Is = !0;
    this.qh = null;
    var b = this;
    a(0)
      .set(0, ca.Fs)
      .set(1, y.Ja(sa.get("SmartyBubbles2")))
      .set(2, ca.language);
    hb.cc = function (b) {
      a(1).set(3, b);
    };
    rb.cc = function (b, d) {
      a(2).set(4, d).set(5, b.url);
    };
    Ta.cc = function (b, d, e) {
      a(3).set(6, d).set(7, b).set(8, e.alt).set(9, e.control).set(10, e.shift);
    };
    Ua.cc = function (c, d, e, f) {
      (2 != e || b.Is) && a(4).set(11, c).set(12, d).set(13, e).set(14, f);
    };
    sb.cc = function (b, d) {
      a(5).set(11, b).set(12, d);
    };
  }
  function jf(a) {
    this.type = a;
    this.data = Object.create(null);
  }
  function cg() {}
  function uc(a) {
    this.json = a;
  }
  function kf(a) {
    this.Qb = [];
    this.jk = [];
    try {
      if (a instanceof oa) this.Ey(a);
      else if ("string" == typeof a)
        new Q('<\\?xml version="1.0"\\?>', "").match(a)
          ? this.Gy(a)
          : this.Fy(a);
      else throw q.G("invalid source file");
      this.He.lineHeight < this.info.size &&
        (this.He.lineHeight = this.info.size);
    } catch (b) {
      throw q.G("invalid .fnt file (" + y.Ja(q.Ep(b).Eo()) + ")");
    }
  }
  function lf() {
    this.ik = new vc(1024);
    this.Ip = new Rc(1024);
    this.padding = Array(4);
    for (var a = 0; 4 > a; ) {
      var b = a++;
      this.padding[b] = 0;
    }
  }
  function mf() {
    this.x =
      this.y =
      this.ql =
      this.C =
      this.offsetX =
      this.offsetY =
      this.np =
        0;
    this.code = -1;
  }
  function ae(a) {
    this.Vx = a;
  }
  function Sc() {}
  function be() {
    this.Bo = !1;
    var a = new r();
    a.b = 0;
    a.a = 0;
    this.rf = a;
    a = new r();
    a.b = 0;
    a.a = 0;
    this.J = a;
    this.La = new Tc();
  }
  function ce() {
    this.tf = null;
    this.frames = [];
    this.scale = 1;
  }
  function de(a, b) {
    this.id = b.id;
    this.name = b.name;
    a = a.wb;
    var c = a.J,
      d = b.La,
      e = d.b,
      f = d.a,
      g = d.f,
      h = d.d,
      k = new G();
    k.b = e;
    k.a = f;
    k.f = g;
    k.d = h;
    this.xA = d = k;
    e = d.b;
    f = d.a;
    g = d.f;
    h = d.d;
    k = new G();
    k.b = e;
    k.a = f;
    k.f = g;
    k.d = h;
    this.ut = k;
    d.b /= c.b;
    d.a /= c.a;
    d.f /= c.b;
    d.d /= c.a;
    a.Yg &&
      ((e = c.b / a.bf.b),
      (a = c.a / a.bf.a),
      (d.b *= e),
      (d.a *= a),
      (d.f *= e),
      (d.d *= a));
    (this.Co = b.Bo)
      ? ((k = b.rf),
        (e = k.b),
        (f = k.a),
        (a = k = new r()),
        (a.b = e),
        (a.a = f),
        (this.rf = a),
        (k = b.J),
        (e = k.b),
        (f = k.a))
      : ((a = k = new r()),
        (a.b = 0),
        (a.a = 0),
        (this.rf = a),
        (e = b.La.f),
        (f = b.La.d));
    a = k = new r();
    a.b = e;
    a.a = f;
    this.J = a;
  }
  function nf(a, b) {
    this.sk = new Ma();
    this.wb = a;
    this.scale = b.scale;
    this.tf = b.tf;
    this.mn = b.frames.length;
    var c = new L(this.mn);
    a = 0;
    for (var d = b.frames; a < d.length; ) {
      var e = d[a];
      ++a;
      c.add(e.id);
    }
    c.sort(function (a, b) {
      return a - b;
    }, !0);
    this.dh = !0;
    var f = c.c[0];
    a = 1;
    for (d = this.mn; a < d; ) {
      e = a++;
      if (f + 1 != c.c[e]) {
        this.dh = !1;
        break;
      }
      ++f;
    }
    this.dh && 16384 < c.c[c.g - 1] && (this.dh = !1);
    if (this.dh)
      for (
        this.bn = new L().R(c.c[c.g - 1] + 1, null), a = 0, d = b.frames;
        a < d.length;

      )
        (b = d[a]),
          ++a,
          (c = new de(this, b)),
          (this.bn.c[c.id] = c),
          (this.sk.C[b.name] = c);
    else
      for (
        a = this.mn,
          --a,
          a |= a >> 1,
          a |= a >> 2,
          a |= a >> 4,
          a |= a >> 8,
          a |= a >> 16,
          this.cn = new Rc(++a),
          a = 0,
          d = b.frames;
        a < d.length;

      )
        (b = d[a]),
          ++a,
          (c = new de(this, b)),
          this.cn.set(c.id, c),
          (this.sk.C[b.name] = c);
  }
  function Z() {}
  function of(a) {
    this.scale = 1;
    this.kj = this.Ex = !1;
    this.$g = this.cr = this.dk = !0;
    this.Yg = !1;
    this.fk = null;
    var b = new r();
    b.b = 0;
    b.a = 0;
    this.J = b;
    this.Ib = null;
    this.bf = this.J;
    if ((this.Dx = null != a)) {
      this.Ib = a.Ib;
      b = a.J;
      var c = b.b,
        d = b.a;
      b = new r();
      b.b = c;
      b.a = d;
      this.J = b;
      b = a.bf;
      c = b.b;
      d = b.a;
      b = new r();
      b.b = c;
      b.a = d;
      this.bf = b;
      this.fk = a.fk;
      this.Yg = a.Yg;
      this.$g = a.$g;
      this.cr = a.cr;
      this.dk = a.dk;
      this.kj = a.kj;
      this.scale = a.scale;
    }
  }
  function wc(a) {
    this.me = 0;
    this.o = a;
  }
  function ha() {}
  function Uc() {
    this.Bj = new L(32);
    this.Af = new L(32);
  }
  function pf() {
    this.$ = new G();
    this.overflow = !1;
    this.Hp = new L(256);
    this.Bj = new L(64);
  }
  function qf() {
    this.multiline = this.tv = !1;
    this.ik = !0;
    this.Gp = 0;
    this.rr = -1;
    this.SA = 0;
    this.align = -1;
    this.width = this.height = 100;
    this.size = 10;
    this.text = "";
  }
  function ee() {}
  function fe(a) {
    this.Yj = 0;
    Ab.call(this, a);
  }
  function Oa(a, b) {
    this.jl = this.Am = !1;
    this.Eb = !0;
    var c = new Na("SpriteText");
    c.i |= 2048;
    ia.call(this, c, 7);
    this.Yi = new Uc();
    this.Na = new qf();
    this.ed = new pf();
    null != a && a.appendChild(this);
    null != b && (this.Oc(b), (this.Na.size = this.zf.Un));
    Oa.Re++;
  }
  function ab(a) {
    this.repeat = -1;
    this.Xf = 0;
    this.controller = null;
    this.length = -1;
    this.o = a;
  }
  function Vc() {
    xc.call(this, 14);
  }
  function X(a, b, c) {
    this.Tn = -1;
    ia.call(this, new Na(a), 10);
    this.i |= 1024;
    null != b && b.appendChild(this);
    if (null != c)
      for (a = 0; a < c.length; ) (b = c[a]), ++a, this.appendChild(b);
    X.Re++;
  }
  function rf(a) {
    this.ur = a;
  }
  function P(a, b, c) {
    var d = new r();
    d.b = 0;
    d.a = 0;
    this.J = d;
    this.lf = null;
    this.Hf = -1;
    ia.call(this, (this.Bb = new Ab()), 12);
    null != a && a.appendChild(this);
    null != b && this.Oc(b);
    null != c && this.kf(c);
    P.Re++;
  }
  function ia(a, b) {
    this.Ed = this.dn = null;
    this.i = 96;
    this.oi = !0;
    this.Za = 1;
    this.zb = this.Ab = this.de = this.ee = this.Dd = 0;
    this.xa = this.Lb = 1;
    this.Aa = this.ra = 0;
    this.node = a;
    this.node.client = this;
    this.type = b;
    ia.count++;
  }
  function Kb() {
    var a = new Ia();
    a.b = 1;
    a.a = 1;
    a.f = 1;
    this.scale = a;
    a = new Ia();
    a.b = 0;
    a.a = 0;
    a.f = 0;
    this.translate = a;
    a = new Wc();
    Xc.og(a);
    this.va = a;
    this.l = 15;
    Xc.og(this.va);
    a = this.translate;
    a.b = 0;
    a.a = 0;
    a.f = 0;
    a = this.scale;
    a.b = 1;
    a.a = 1;
    a.f = 1;
    this.l |= 63;
  }
  function xa() {}
  function ge() {}
  function ja() {}
  function Ab(a, b) {
    tb.call(this, a, b);
    this.type = 1;
  }
  function tb(a, b) {
    this.re = null;
    qa.call(this, a, b);
    this.i |= 512;
    this.Xe = this.Mp(b);
    this.Ho();
    this.re = Array(4);
  }
  function sf() {
    this.data = [];
    this.count = 0;
  }
  function Na(a) {
    this.ri = 0;
    this.na = null;
    qa.call(this, a);
    this.i |= 256;
  }
  function qa(a, b) {
    this.client = null;
    this.F = new Kb();
    this.local = new Kb();
    yc.call(this);
    this.name = a;
    this.key = zc.next();
    this.ze = this.Mp(b);
    this.i = 232;
  }
  function Va() {}
  function Lb(a) {
    this.state = a;
  }
  function tf(a) {
    this.$ = new G();
    for (var b = [], c = 0; 4 > c; ) {
      ++c;
      var d = new Ia();
      d.b = 0;
      d.a = 0;
      d.f = 0;
      b.push(d);
    }
    this.Uk = b;
    b = [];
    for (c = 0; 4 > c; ) ++c, b.push(new Ia());
    this.hg = b;
    this.Th = !0;
    this.Hh = new L(1024);
    this.Sa = a;
    this.Hh.Mc = !0;
  }
  function uf(a, b, c, d, e, f, g, h) {
    null == h && (h = 0);
    null == g && (g = 0);
    null == f && (f = 0);
    null == e && (e = 0);
    null == d && (d = 1);
    null == c && (c = 1);
    null == b && (b = 1);
    null == a && (a = 1);
    this.bz = a;
    this.Yw = b;
    this.Yu = c;
    this.Ru = d;
    this.cz = e;
    this.Zw = f;
    this.Zu = g;
    this.Su = h;
  }
  function vf() {
    Pa.call(this, da.i3);
    this.yv = new uf();
  }
  function he() {
    this.$ = null;
    Pa.call(this, da.i2);
  }
  function ie() {
    ub.call(this, 1);
  }
  function wf() {
    this.rotation = this.zoom = 0;
    var a = new r();
    a.b = 0;
    a.a = 0;
    this.B = a;
    a = new r();
    a.b = 0;
    a.a = 0;
    this.size = a;
  }
  function xf(a) {
    this.Sa = null;
    this.Qm = !0;
    this.Rm = ya.xf();
    this.Ao = !0;
    this.uf = ya.xf();
    this.Sa = a;
    this.state = new wf();
    a = new G();
    a.b = 0;
    a.a = 0;
    a.f = 512;
    a.d = 512;
    this.reset(a);
  }
  function Mb() {
    var a = new G();
    a.b = a.a = Infinity;
    a.f = a.d = -Infinity;
    this.Ua = a;
    ub.call(this, 2);
  }
  function ub(a) {
    this.type = a;
    a = new Ia();
    a.b = 0;
    a.a = 0;
    a.f = 0;
    this.B = a;
    this.aa = 0;
  }
  function Yc(a) {
    null == a && (a = 1);
    Pa.call(this, da.i0);
    this.alpha = a;
  }
  function vb(a) {
    Pa.call(this, da.i1);
    this.Dl = a;
    this.td |= (1 << a.I) << 4;
    if (5 == a.I) {
      var b = a.rB;
      this.td |= (1 << a.src.I) << 12;
      this.td |= (1 << b.I) << 20;
    }
  }
  function Pa(a) {
    this.type = a;
    this.ko = a.I;
    this.td = 1 << this.ko;
  }
  function ea(a, b) {
    null == b && (b = 8);
    this.gc = !1;
    var c = new r();
    c.b = 0;
    c.a = 0;
    this.Wm = c;
    this.qk = [];
    this.oq = this.Wh = !1;
    var d = this;
    sb.call(this);
    this.fc = ea.lj;
    1 < b && this.fc > b && (this.fc = b);
    "undefined" !== typeof window.orientation &&
      0 > eb.navigator.userAgent.indexOf("Mobile") &&
      980 == window.innerWidth &&
      (this.fc = 1);
    b = window.document;
    this.Wh = !1;
    null != a &&
      ((this.canvas = b.getElementById(a)), (this.Wh = null != this.canvas));
    this.Em = !!navigator.platform && /iPad|iPhone/.test(navigator.platform);
    this.Wh ||
      ((this.canvas = b.createElement("canvas")),
      (this.canvas.id = "win" + ea.Sl++),
      this.canvas.style.setProperty("touch-action", "none"),
      this.canvas.style.setProperty("-ms-touch-action", "none"),
      this.canvas.style.setProperty("-webkit-overflow-scrolling", "auto"),
      this.canvas.style.setProperty("-webkit-overflow-scrolling", "none"),
      this.canvas.style.setProperty("user-select", "none"),
      b.body.appendChild(this.canvas),
      this.canvas.focus());
    this.$w();
    ea.ke = ((ea.ke * this.fc) / ea.lj) | 0;
    !this.Em &&
      this.Gx() &&
      this.addListener(b, "fullscreenchange", !0, function () {
        var a = d.Jl(window.document, null, ["isFullScreen", "fullScreen"]);
        null != a
          ? (d.oq = a)
          : ((a = d.Jl(window.document, "fullscreenElement")),
            (d.oq = null != a));
      });
    this.addListener(b, "visibilitychange", null, function () {
      d.ps(!window.document.hidden);
    });
    try {
      this.Em
        ? this.addListener(window, "orientationchange", !1, function () {})
        : typeof window.onorientationchange &&
          (window.onorientationchange = function () {});
    } catch (e) {}
    this.Wh
      ? ((a = this.size),
        (a.b = this.canvas.width),
        (a.a = this.canvas.height),
        this.Fd(this.Rb()))
      : this.resize(320, 240);
  }
  function je() {
    this.UA = "rgba(0,0,0,0)";
    this.el = 0;
    this.HA = ya.xf();
    this.KA = new L(32);
    this.JA = new L(32);
    this.zv = ["none", "source-over", "multiply", "lighter", "screen", null];
    this.Lg = null;
    this.li = -1;
    this.Gf = "source-over";
    this.mk = null;
    wb.call(this);
    this.ot = this.Mt = !0;
    var a = eb.navigator.userAgent;
    this.mo =
      0 < a.indexOf("MSIE ") || 0 < a.indexOf("Trident/7.0")
        ? "msImageSmoothingEnabled"
        : "imageSmoothingEnabled";
  }
  function cc(a) {
    this.frame = -1;
    this.ll = this.ml = 0;
    this.nl = this.ol = 1;
    this.La = new G();
    this.i = 0;
    bb.call(this, 11);
    if (null != a) {
      this.active = a.active;
      this.Ei = a.Ei;
      var b = this.La,
        c = a.La;
      b.b = c.b;
      b.a = c.a;
      b.f = c.f;
      b.d = c.d;
      this.frame = a.frame;
      this.i = a.i;
      this.wb = a.wb;
      this.ll = a.ll;
      this.ml = a.ml;
      this.nl = a.nl;
      this.ol = a.ol;
    }
  }
  function Ac(a) {
    this.Dj = !0;
    bb.call(this, 5);
    null != a &&
      ((this.active = a.active), (this.Ei = a.Ei), (this.color = a.color));
  }
  function bb(a) {
    this.active = this.Ei = !0;
    this.type = a;
  }
  function wb() {
    this.lo = !0;
    this.yx = ya.xf();
    this.le = ya.xf();
    this.zh = this.ot = this.Mt = !1;
    this.Sy = !0;
    this.ow = !1;
    this.Jg = null;
    this.zd = 1;
    this.Ij = null;
    this.Mr = !1;
    this.Wl = ya.xf();
    this.Pv = ya.xf();
    this.Rp = new tf(this);
    this.Df = new xf(this);
    this.Bc = 0;
    this.Bc |= 1 << da.i1.I;
    this.Bc |= 1 << da.i0.I;
    this.Bc |= 1 << da.i2.I;
    this.Bc |= 1 << da.i3.I;
  }
  function sb() {
    this.vy = function () {};
    this.sy = function () {};
    this.ps = function () {};
    this.Fd = function () {};
    Bc.call(this);
  }
  function Bc() {
    this.Mo = !1;
    var a = new r();
    a.b = 0;
    a.a = 0;
    this.size = a;
    this.Bi = new Tc();
    a = new G();
    a.b = 0;
    a.a = 0;
    a.f = 1;
    a.d = 1;
    this.viewport = a;
    a = new G();
    a.b = 1;
    a.a = 1;
    a.f = 1;
    a.d = 1;
    this.color = a;
  }
  function Zc() {
    aa.call(this, 9);
  }
  function yf() {
    this.jr = new zf();
    this.lastIndex = 0;
    aa.call(this, 8);
  }
  function zf() {
    this.alpha = 1;
    this.rotation = this.Ct = this.Dt = 0;
    this.th = this.Nc = 1;
  }
  function xc(a) {
    this.Yk = this.ih = this.ag = 0;
    aa.call(this, a);
  }
  function aa(a) {
    this.od = !1;
    this.Vb = 0;
    this.$i = 1;
    this.jc = this.Xc = this.zi = 0;
    this.type = a;
    this.repeat = za.i1;
    aa.Zo++;
  }
  function yc() {
    this.Iv = !0;
    this.controllers = null;
  }
  function Af(a, b) {
    this.value = a;
    this.lb = b;
  }
  function Bf(a, b) {
    this.name = a;
    this.frames = b;
    this.bj = 0;
    this.qg = b.length;
    a = 0;
    this.Pl = b[a++].lb;
    for (var c = b[a++].lb; a < this.qg; )
      if (b[a++].lb != c) {
        this.Pl = 0;
        break;
      }
    this.ve = Array(this.qg + 1);
    this.values = Array(this.qg);
    for (a = 0; a < this.qg; )
      (c = b[a]),
        (this.ve[a] = this.bj),
        (this.values[a] = c.value),
        (this.bj += c.lb),
        ++a;
    this.ve[a] = this.bj;
  }
  function ke() {}
  function sa() {}
  function dg() {}
  function le() {}
  function eg() {}
  function me(a) {
    this.Fa = a;
  }
  function fg() {}
  function Cf() {}
  function $d() {}
  function $c() {
    this.yj = new Jb();
    this.Dg = this.Bf = 0;
  }
  function Ga() {}
  function Nc(a) {
    null == a && (a = 1);
    this.bt(a);
  }
  function ne(a) {
    this.bt(a);
  }
  function Df() {
    this.af = NaN;
    this.gg = new r();
    this.ak = 3e38;
    this.Im = NaN;
    this.Hm = new r();
    this.Sf = new r();
    this.Tf = new r();
  }
  function Ef() {
    this.gg = new r();
    this.kx = Array(256);
    this.ak = 3e38;
    this.Qq = new G();
    this.Sf = new r();
    this.Tf = new r();
    for (var a = 0; 256 > a; ) {
      var b = a++;
      this.kx[b] = new G();
    }
  }
  function Ff() {
    var a = new r();
    a.b = 0;
    a.a = 0;
    this.Nk = a;
    this.t = Infinity;
  }
  function gg() {}
  function ad() {}
  function hg() {}
  function oe() {}
  function Gf() {}
  function Wc() {}
  function Tc() {}
  function G() {}
  function Ia() {}
  function r() {}
  function Qa() {}
  function N() {}
  function Hf(a) {
    this.Ok = a;
  }
  function Ua() {
    this.hy = 0;
    this.Fm = [];
    this.touches = {};
    this.first = null;
    this.enabled = !1;
    this.Dc = 0;
    var a = new r();
    a.b = 0;
    a.a = 0;
    this.Ga = a;
    this.xj = 0;
    a = new r();
    a.b = 1;
    a.a = 1;
    this.scale = a;
    this.fc = window.devicePixelRatio;
    this.element = null;
    this.eg = 0;
    this.maxTouchPoints = 1;
    this.passive = this.pt();
    this.xj |= 14;
    window.document.body.style.setProperty("touch-action", "none");
    window.document.body.style.setProperty("-ms-touch-action", "none");
    window.document.body.addEventListener(
      "touchmove",
      function (a) {
        a.preventDefault();
      },
      this.passive && { passive: !1 }
    );
    this.enable();
  }
  function If(a, b, c) {
    this.kk = a;
    this.code = b;
    this.Dc = c;
  }
  function Ta() {
    this.enabled = !1;
    this.order = Array(255);
    this.keys = Array(255);
    this.location = Aa.i0;
    this.bg = new Jf();
    for (var a = 0; 255 > a; ) {
      var b = a++;
      this.order[b] = 0;
    }
    a = [];
    for (b = 0; 256 > b; ) b++, a.push(0);
    var c = (this.i = a);
    for (a = 37; 41 > a; ) (b = a++), (c[b] |= 1);
    for (a = 48; 58 > a; ) (b = a++), (c[b] |= 2);
    for (a = 65; 91 > a; ) (b = a++), (c[b] |= 4);
    this.enable();
  }
  function Jf() {}
  function Y() {}
  function la() {}
  function Oc() {}
  function R() {}
  function dc() {}
  function pe() {}
  function Mc() {}
  function bd(a) {
    this.gb = a;
    this.reset();
  }
  function qe(a, b, c) {
    null == b && (b = !1);
    null == a && (a = 1);
    this.bb = null;
    this.g = 0;
    this.Mc = !1;
    this.Fc = -2;
    this.Ve = 1 > a ? 1 : a;
    this.u = a;
    this.ce = b;
    null != c &&
      ((a = this.g = c.length), (b = this.u), (this.u = a > b ? a : b));
    this.c = Array(this.u + 1);
    this.c[0] = null;
    if (null != c) {
      a = this.c;
      b = 1;
      for (var d = this.g + 1; b < d; ) {
        var e = b++;
        a[e] = c[e - 1];
      }
      this.jz();
    }
  }
  function vc(a, b) {
    null == b && (b = -1);
    this.Kb = this.g = 0;
    this.Fc = -3;
    -1 == b && (b = a);
    this.u = b;
    this.iA = a;
    this.Cd = a - 1;
    this.Hc = R.R(Array(a), -1);
    this.c = Array(3 * this.u);
    this.ac = Array(this.u);
    var c = 2;
    a = this.c;
    b = 0;
    for (var d = this.u; b < d; )
      b++, (a[c - 1] = -2147483648), (a[c] = -1), (c += 3);
    a = this.ac;
    b = 0;
    for (d = this.u - 1; b < d; ) (c = b++), (a[c] = c + 1);
    a[this.u - 1] = -1;
  }
  function Rc(a, b) {
    null == b && (b = -1);
    this.Kb = this.g = 0;
    -1 == b && (b = a);
    2 > b && (b = 2);
    this.u = b;
    this.ua = new vc(a, this.u);
    this.fh = Array(this.u);
    this.ac = Array(this.u);
    this.tk = R.R(Array(this.u), -2147483648, 0, this.u);
    a = this.ac;
    b = 0;
    for (var c = this.u - 1; b < c; ) {
      var d = b++;
      a[d] = d + 1;
    }
    a[this.u - 1] = -1;
  }
  function re() {}
  function cd() {}
  function zc() {}
  function se(a) {
    this.gb = a;
    this.rk = this.gb.qa;
  }
  function ec(a) {
    this.Ue = null;
    this.kn = 0;
    this.visible = !0;
    this.ga = a;
    this.qa = null;
    this.oa = !1;
  }
  function dd(a, b) {
    this.node = a;
    this.tf = b;
    this.Nb = this.next = null;
  }
  function te() {
    this.uk = this.ni = 16;
    this.bb = null;
    this.g = 0;
    this.oc = null;
    this.Al = !1;
    this.eh = Array(this.uk);
    this.pc = Array(this.ni);
  }
  function Bb(a, b, c) {
    null == a && (a = 16);
    this.L = 0;
    this.Fc = -2;
    this.u = this.Ve = 1 > a ? 1 : a;
    if (null != b) {
      a = this.L = b.length;
      var d = this.u;
      this.u = a > d ? a : d;
    }
    this.c = Array(this.u);
    if (null != b) {
      a = this.c;
      d = 0;
      for (var e = this.L; d < e; ) {
        var f = d++;
        a[f] = b[f];
      }
    }
    c && (this.Fc = 0);
  }
  function Kf() {}
  function ed(a, b, c) {
    null == a && (a = 16);
    this.g = this.Ia = 0;
    this.Fc = -2;
    this.u = this.Ve = 1 > a ? 1 : a;
    if (null != b) {
      a = this.g = b.length;
      var d = this.u;
      this.u = a > d ? a : d;
    }
    this.c = Array(this.u);
    if (null != b) {
      a = this.c;
      d = 0;
      for (var e = this.g; d < e; ) {
        var f = d++;
        a[f] = b[f];
      }
    }
    c && (this.Fc = 0);
  }
  function ue() {}
  function fd(a) {
    this.gb = a;
    this.c = this.gb.c;
    this.cb = this.gb.g;
    this.wa = 0;
  }
  function ib(a, b) {
    null == b && (b = 0);
    null == a && (a = 0);
    this.x = a;
    this.y = b;
  }
  function gd(a) {
    this.gb = a;
    this.c = this.gb.c;
    a = this.gb;
    this.cb = a.ca * a.ua;
    this.wa = 0;
  }
  function fc() {}
  function gc(a, b, c) {
    this.bb = null;
    this.Mc = !1;
    if (null != c) {
      this.ca = a;
      this.ua = b;
      a = this.c = Array(this.ca * this.ua);
      b = 0;
      for (var d = this.ca * this.ua; b < d; ) {
        var e = b++;
        a[e] = c[e];
      }
    } else (this.ca = a), (this.ua = b), (this.c = Array(this.ca * this.ua));
  }
  function Lf() {
    Ja.call(this, F.getContext().createStereoPanner(), 1);
  }
  function hc() {
    Ja.call(this, F.getContext().createGain(), 2);
  }
  function ve() {
    Ja.call(this, F.getContext().createBufferSource(), 0);
  }
  function we() {
    Ja.call(this, F.getContext().destination, 7);
  }
  function Ja(a, b) {
    this.inputs = [];
    this.n = a;
    this.type = b;
  }
  function ic(a, b) {
    Cb.call(this, a, b);
    this.data = b.data;
  }
  function xe() {
    ra.call(this);
  }
  function hd(a, b, c, d) {
    null == d && (d = !1);
    Cb.call(this, a, b);
    this.loop = d;
    this.Di = !0;
    this.node = b.data.cloneNode();
    null != c
      ? ((this.min = a.ve[2 * c] / 1e3),
        (this.max = a.ve[2 * c + 1] / 1e3),
        this.node.addEventListener("timeupdate", D(this, this.ms), !1),
        this.node.addEventListener("loadedmetadata", D(this, this.wn), !1))
      : ((this.min = 0),
        (this.max = b.data.duration),
        (this.node.onended = D(this, this.stop)),
        (this.node.loop = d));
    this.ij();
    this.node.play();
  }
  function id() {
    ra.call(this);
  }
  function ig() {}
  function F() {}
  function Cb(a, b) {
    this.volume = 1;
    this.offset = 0;
    this.loop = !1;
    this.ig = a;
    this.Ce = b;
  }
  function ra() {
    this.Sc = Array(4096);
    this.Md = new L();
    this.Kr = 1e4;
    this.en = this.$x = this.ay = 1;
    this.Be = this.yr = 0;
    this.cy = 16;
    this.Dr = 2;
    this.enabled = !0;
    this.BA = 0.05;
  }
  function Cc(a, b, c) {
    this.id = a;
    this.data = b;
    this.be = c;
    this.pr = 0;
  }
  function ta() {}
  function rb(a, b) {
    this.kg = 0;
    this.url = a;
    this.pl = b;
  }
  function Mf(a, b) {
    this.id = a;
    this.pq = b;
  }
  function l() {}
  function ye(a, b) {
    this.Pd = new rb(a, b.pl);
    this.Te = b;
  }
  function ze() {}
  function jc(a, b, c) {
    null == a && (a = 2);
    this.Hr = this.Er = 0;
    this.Zf = [];
    this.Hd = new qe();
    this.Qr = this.ln = 0;
    this.dy = a;
    this.wi = b;
    this.pl = c;
  }
  function Nf(a, b, c) {
    this.url = a;
    this.data = b;
    this.We = c;
  }
  function jg() {}
  function B() {}
  function jd(a) {
    this.U = new Nb();
    this.gf = a;
  }
  function Ob() {}
  function pa(a, b, c) {
    this.xml = b;
    this.message = a;
    this.position = c;
    this.lineNumber = 1;
    for (a = this.Jn = 0; a < c; ) {
      var d = a++;
      d = b.charCodeAt(d);
      10 == d ? (this.lineNumber++, (this.Jn = 0)) : 13 != d && this.Jn++;
    }
  }
  function Dc(a) {
    this.current = 0;
    this.Qh = a;
  }
  function kc() {}
  function kd() {}
  function Jb() {
    this.a = new Ae();
  }
  function Be() {}
  function lc(a, b, c) {
    null == b && (b = 0);
    null == c && (c = a.length - b);
    if (0 > b || 0 > c || b + c > a.length) throw q.G(ua.i2);
    this.a = a.a;
    this.Ga = b;
    this.yo = this.Yf = c;
  }
  function Ce() {}
  function Ae() {
    this.size = this.Ga = 0;
  }
  function Ma() {
    this.C = Object.create(null);
  }
  function Ra() {
    this.C = {};
  }
  function De(a) {
    for (var b = a.length, c = 1; b > 1 << c; ) ++c;
    if (8 < c || b != 1 << c)
      throw q.G("BaseCode : base length must be a power of two.");
    this.De = a;
    this.Ir = c;
  }
  function Db() {}
  function oa(a) {
    this.length = a.byteLength;
    this.a = new Uint8Array(a);
    this.a.jv = a;
    a.gx = this;
    a.yj = this.a;
  }
  function ld(a, b, c) {
    q.call(this, String(a), 0, c);
    this.value = a;
  }
  function Ec(a) {
    var b = this;
    this.id = setInterval(function () {
      b.Pi();
    }, a);
  }
  function q(a, b, c) {
    this.message = a;
    this.wl = null != c ? c : this;
  }
  function Of() {}
  function Pf(a, b) {
    this.ma = a;
    this.depth = b;
  }
  function Qf() {
    this.list = new L();
    this.filter = function () {
      return !0;
    };
  }
  function Rf() {
    this.zh = !1;
  }
  function Ee() {
    this.aj = new G();
    var a = new r();
    a.b = 0;
    a.a = 0;
    this.uo = a;
    V.call(this);
  }
  function Sf() {
    V.call(this);
  }
  function Pb() {
    var a = new r();
    a.b = 0;
    a.a = 0;
    this.anchor = a;
    V.call(this);
  }
  function Fe() {
    V.call(this);
  }
  function cb() {
    this.scale = 1;
    var a = new r();
    a.b = 0;
    a.a = 0;
    this.Ud = a;
    V.call(this);
  }
  function Qb() {
    V.call(this);
  }
  function kg() {}
  function V() {
    this.time = 0;
    this.enabled = !0;
    this.zi = this.xb();
  }
  function Ge(a) {
    this.zoom = 0;
    var b = new r();
    b.b = 0;
    b.a = 0;
    this.Qj = b;
    b = new r();
    b.b = 0;
    b.a = 0;
    b = new r();
    b.b = 0;
    b.a = 0;
    this.Qd = b;
    b = new G();
    b.b = 0;
    b.a = 0;
    b.f = 640;
    b.d = 480;
    this.$ = b;
    this.F = a;
    this.$k(0.5, 0.5);
  }
  function K() {}
  function mc() {}
  function He(a) {
    this.st = new Tf();
    this.tt = new Df();
    this.An = [];
    this.ph = new L();
    var b = new r();
    b.b = 0;
    b.a = 0;
    this.Ik = b;
    b = new r();
    b.b = 0;
    b.a = 0;
    this.Jk = b;
    this.fg = null;
    this.Tq = !1;
    this.Mm = !0;
    this.Rq = 1;
    this.Vg = new G();
    this.F = a;
    this.ph.Mc = !0;
  }
  function Ie(a) {
    this.ji = new Ef();
    this.Rk = new G();
    var b = new Ia();
    b.b = 0;
    b.a = 0;
    b.f = 1;
    this.IA = b;
    this.aj = new G();
    this.uo = new r();
    this.Sb = 0;
    this.F = a;
    this.result = new Je();
    this.result.$h = new L();
    this.result.Ke = null;
    this.result.Eg = new L();
    b = new r();
    b.b = 0;
    b.a = 0;
    this.result.Hn = b;
    b = new r();
    b.b = 0;
    b.a = 0;
    this.result.Fi = b;
    this.result.Gn = -1;
    this.test = new He(a);
  }
  function Je() {}
  function Ke(a) {
    this.ar = new Ff();
    this.cf = new L(4);
    this.qc = new L(4);
    this.Ou = 15;
    var b = this;
    this.F = a;
    this.qc.R(4, null);
    var c = this.qc,
      d = c.c,
      e = 0;
    for (c = c.g; e < c; ) {
      var f = e++,
        g = new Ia();
      d[f] = g;
    }
    c = this.qc;
    g = new Ia();
    e = f = new r();
    e.b = 1;
    e.a = 0;
    f = new r();
    f.b = 0;
    f.a = 0;
    g = va.jf(g, e, f);
    c.c[3] = g;
    c = this.qc;
    g = new Ia();
    e = f = new r();
    e.b = -1;
    e.a = 0;
    d = a.Uj();
    f = new r();
    f.b = d;
    f.a = 0;
    g = va.jf(g, e, f);
    c.c[1] = g;
    this.qc.Mc = !0;
    this.cf.R(4, null);
    this.cf.c[3] = function (a) {
      var b = new r(),
        c = b;
      c.b = 1;
      c.a = 0;
      b = new r();
      b.b = 0;
      b.a = 0;
      va.jf(a, c, b);
    };
    this.cf.c[1] = function (b) {
      var c = new r(),
        d = c;
      d.b = -1;
      d.a = 0;
      var e = a.Uj();
      c = new r();
      c.b = e;
      c.a = 0;
      va.jf(b, d, c);
    };
    this.cf.c[0] = function () {
      var c = a.viewport,
        d = c.$,
        e = a.vm();
      a.hk() || (e = c.wo(d.a));
      c = b.qc.c[0];
      var f = new r();
      d = f;
      d.b = 0;
      d.a = 1;
      f = new r();
      f.b = 0;
      f.a = e;
      va.jf(c, d, f);
    };
    this.cf.c[2] = function () {
      var c = a.viewport;
      c = c.wo(c.$.d);
      var d = b.qc.c[2],
        e = new r(),
        f = e;
      f.b = 0;
      f.a = -1;
      e = new r();
      e.b = 0;
      e.a = c;
      va.jf(d, f, e);
    };
  }
  function Le(a) {
    this.Ko = this.size = 0;
    this.jg = new L(32);
    this.eq = a;
    this.jg.Mc = !0;
  }
  function Uf(a) {
    this.F = a;
    this.ii = new Le(function () {
      var a = new L(32);
      a.Mc = !0;
      return a;
    });
    this.hi = new Le(function () {
      var a = new L(4);
      a.Mc = !0;
      return a;
    });
    this.set = new vc(64, 64);
  }
  function Ye() {
    this.No = null;
    this.an = new gc(64, 7);
    this.Qk = new ib();
    this.Ka = new ib();
    this.start = new ib();
    this.Uq = -1;
    this.Jm = null;
    this.kv();
  }
  function Ba(a, b, c, d) {
    null == d && (d = 1);
    null == c && (c = 1);
    this.timeStamp = 1;
    this.ba = new gc(a, b);
    this.ba.Ts(0);
    this.ng = c;
    this.cd = d;
    this.marks = new gc(a, b);
    this.marks.Ts(0);
    this.Cv();
  }
  function Vf(a, b, c) {
    this.ba = a;
    this.cols = b;
    this.list = Array(6);
    this.qz = c;
  }
  function Me(a) {
    this.map = new Ra();
    this.F = a;
  }
  function Wf(a) {
    this.fw = !1;
    this.F = a;
  }
  function Fc() {}
  function L(a, b, c) {
    null == a && (a = 2);
    this.bb = null;
    this.g = 0;
    this.Mc = !1;
    this.Fc = -2;
    this.Ve = 2 > a ? 2 : a;
    null != b && 0 < b.length
      ? ((this.g = b.length),
        (this.c = b.slice(0, b.length)),
        (this.u = this.g))
      : ((this.u = this.Ve), (this.c = Array(this.u)));
    c && (this.Fc = 0);
  }
  function Xf() {}
  function Rb() {}
  function Tf() {
    this.Lm = this.af = NaN;
    this.Km = new r();
    this.$j = new r();
    this.Sq = NaN;
    this.bk = new r();
    this.Zj = new r();
  }
  function Ne() {}
  function Oe() {
    this.Cg = this.loaded = !1;
    this.Uh = !0;
    this.tc =
      this.connected =
      this.Cm =
      this.jd =
      this.Ic =
      this.Je =
      this.fixed =
        !1;
  }
  function db(a) {
    this.pp = this.rotation = 0;
    this.aw = this.ck = 1;
    this.Tc = this.mf = this.Tg = 0;
    this.aa = this.scale = 1;
    var b = new r();
    b.b = 0;
    b.a = 0;
    this.force = b;
    b = new r();
    b.b = 0;
    b.a = 0;
    this.Ba = b;
    b = new r();
    b.b = 0;
    b.a = 0;
    this.B = b;
    this.ha = null;
    this.D = new Oe();
    this.Va = this.Ma = -1;
    this.code = 0;
    this.F = a;
    db.count++;
    this.key = zc.next();
    this.aa = 1 - K.iv / 2;
    this.gd = new L(4);
    this.gd.Mc = !0;
    this.$a(new Fe());
  }
  function nc() {}
  function Pe() {}
  function md() {
    this.Ej = !0;
    var a = new r();
    a.b = 0;
    a.a = 0;
    this.uh = a;
    this.so = new L();
    this.to = new L();
    this.da = new G();
    this.CA = 0;
    this.Iq = new Rf();
    this.Gm = new Qf();
    this.Qf = new L(1024);
    this.ta = new ed();
    this.ic = this.hc = 0;
    this.cols = -1;
    this.Fe = new L(4);
    this.dg = 0;
    this.Gd = new G();
    this.time = 0;
    a = this.da;
    a.b = 0;
    a.a = 0;
    a = this.da;
    a.f = 0;
    a.d = -1;
    this.Mb = new Ke(this);
    this.viewport = new Ge(this);
    this.Mb.te();
    this.hh = new Uf(this);
    this.ne = new Ie(this);
    this.ti = new Wf(this);
  }
  function Sb() {}
  function w(a) {
    this.nodeType = a;
    this.children = [];
    this.rj = new Ma();
  }
  function Qe() {}
  function hb() {
    null != hb.Ca && hb.Ca.stop();
    this.handle = (this.window = "undefined" !== typeof window) ? -1 : null;
    hb.Ca = this;
  }
  function E() {}
  function Wa() {}
  function Ka() {}
  function Nb() {
    this.a = "";
  }
  function y() {}
  function Yf() {
    this.Wr = function () {};
    this.Vr = function () {};
    this.Ar = 8;
    this.Cp = null;
    this.i = 0;
    var a = 0.00392156862745098 * oc.qf(0),
      b = 0.00392156862745098 * oc.qf(0),
      c = 0.00392156862745098 * oc.qf(0),
      d = new G();
    d.b = 0.00392156862745098 * oc.qf(0);
    d.a = a;
    d.f = b;
    d.d = c;
    this.color = d;
    this.tb = new Na("root");
    this.i |= 32;
  }
  function O() {}
  function wd() {}
  function bc() {
    this.C = new Ra();
    this.type = 3;
    v.call(this);
  }
  function Zf(a) {
    this.type = a;
    this.list = new L();
  }
  function nb() {
    this.fn = this.on = 0;
    this.buffer = new L();
    this.Yc = new L();
    v.call(this);
    this.type = 23;
  }
  function nd(a, b, c) {
    this.i = 0;
    this.source = a;
    this.type = b;
    this.Wd = c;
  }
  function ka() {}
  function C() {}
  function $f() {
    this.pn = {};
  }
  function jb() {}
  function Re() {}
  function ma() {}
  function J() {}
  function Eb() {}
  function lg() {}
  function Q(a, b) {
    this.r = new RegExp(a, b.split("u").join(""));
  }
  function ca() {
    var a = this;
    v.call(this);
    ca.Ca = this;
    eb.console.info(
      "SmartyBubbles2 v1.0.10 2020-11-12 14:49:56 Generated by Haxe 4.1.3 polygonal"
    );
    l.xz(ca.mz);
    l.Tz();
    this.Om(function () {
      a.Nm();
      a.px(ca.language);
      a.lx();
      a.Vq();
      a.ux();
      a.ready();
    });
    this.type = 0;
  }
  function v() {
    this.Lt = !1;
    this.jj = this.Mi = !0;
    this.time = 0;
    v.ap++;
  }
  function I() {
    return B.Kh(this, "");
  }
  function t(a, b) {
    a = Object.create(a);
    for (var c in b) a[c] = b[c];
    b.toString !== Object.prototype.toString && (a.toString = b.toString);
    return a;
  }
  function Tb(a) {
    return a instanceof Array ? new Dc(a) : a.iterator();
  }
  function D(a, b) {
    if (null == b) return null;
    null == b.ul && (b.ul = eb.Xo++);
    var c;
    null == a.Dm ? (a.Dm = {}) : (c = a.Dm[b.ul]);
    null == c && ((c = b.bind(a)), (a.Dm[b.ul] = c));
    return c;
  }
  Te.SmartyBubbles2 = Te.SmartyBubbles2 || {};
  var La = La || {},
    Fb;
  v.__name__ = "0";
  v.prototype = {
    xm: function () {
      for (var a = 0, b = this.firstChild; null != b; ) ++a, (b = b.K);
      return a;
    },
    H: function () {
      for (var a = this.firstChild, b; null != a; ) (b = a.K), a.H(), (a = b);
      this.remove();
      v.ap--;
    },
    N: function (a) {
      a.parent = this;
      if (null != this.firstChild) {
        for (var b = this.firstChild; null != b.K; ) b = b.K;
        b.K = a;
      } else this.firstChild = a;
      a.W();
    },
    removeChild: function (a) {
      if (a.parent == this) {
        if (a == this.firstChild) this.firstChild = a.K;
        else
          for (var b = this.firstChild; null != b; ) {
            if (b.K == a) {
              b.K = a.K;
              break;
            }
            b = b.K;
          }
        a.parent = a.K = null;
      }
    },
    Ec: function (a, b, c) {
      if (c) {
        c = null;
        for (var d = this.firstChild; null != d; ) {
          if (null != a) {
            if (B.wf(d, a)) {
              if (null == b) {
                c = d;
                break;
              }
              if (d.name == b) {
                c = d;
                break;
              }
            }
          } else if (d.name == b) {
            c = d;
            break;
          }
          var e = d.Ec(a, b, !0);
          if (null != e) {
            c = e;
            break;
          }
          d = d.K;
        }
        return c;
      }
      for (d = this.firstChild; null != d; ) {
        if (null != a) {
          if (B.wf(d, a)) {
            if (null == b) break;
            if (d.name == b) break;
          }
        } else if (d.name == b) break;
        d = d.K;
      }
      return d;
    },
    gm: function (a, b) {
      for (var c = this.parent; null != c; ) {
        if (null != a) {
          if (B.wf(c, a)) {
            if (null == b) break;
            if (c.name == b) break;
          }
        } else if (c.name == b) break;
        c = c.parent;
      }
      return c;
    },
    remove: function () {
      null != this.parent && this.parent.removeChild(this);
    },
    Cf: function (a, b) {
      a = new nd(this, a, b);
      for (b = this.parent; null != b; ) {
        b.handle(a);
        if (0 < a.i) break;
        b = b.parent;
      }
    },
    Cb: function (a, b) {
      this.Ds(new nd(this, a, b), !0);
    },
    update: function (a) {
      this.Lt = !0;
      this.time += a;
      for (var b = this.firstChild, c; null != b; )
        (c = b.K), b.jj && b.parent == this && b.update(a), (b = c);
    },
    pa: function (a) {
      for (var b = this.firstChild, c; null != b; )
        (c = b.K), b.Mi && b.Lt && b.parent == this && b.pa(a), (b = c);
    },
    handle: function () {},
    W: function () {},
    Ds: function (a, b) {
      if (!b && (this.handle(a), 0 < (a.i & 1))) {
        a.i &= -2;
        return;
      }
      b = this.firstChild;
      for (var c; null != b; ) {
        c = b.K;
        if (0 < (a.i & 2)) break;
        b.Ds(a, !1);
        b = c;
      }
    },
    kg: function (a) {
      return Math.min(1, this.time / a);
    },
    j: v,
  };
  Math.__name__ = "1";
  ca.__name__ = "2";
  ca.A = v;
  ca.prototype = t(v.prototype, {
    ready: function () {},
    ws: function () {
      var a = this,
        b = new jc(
          4,
          function (a) {
            l.setData(l.Ne(a.url), a.data, a.We);
          },
          "v=1.0.10"
        );
      b.tag = "preload";
      var c = l.Mw();
      if (0 == c.length) this.xn();
      else {
        var d = c.length,
          e = function () {
            if (0 == --d) {
              var b = null;
              b = function () {
                E.detach(b);
                a.xn();
              };
              E.la(b);
            }
          };
        ka.Se(c, function (a) {
          l.ui(a, e);
        });
        ka.Se(c, function (a) {
          b.load(l.Of(a));
        });
      }
    },
    Om: function (a) {
      this.Tk = new hf();
      a();
    },
    GB: function () {},
    Nm: function () {
      var a = this,
        b = null;
      b = function () {
        window.removeEventListener("error", b);
        null != a.pg && a.pg.stop();
        try {
          a.zn();
        } catch (c) {}
      };
      window.addEventListener("error", b);
    },
    ux: function () {
      E.Gh.la(D(this, this.update));
      E.sh.la(D(this, this.pa));
      this.pg = new hb();
      this.pg.start();
    },
    lx: function () {
      if (ta.dr()) {
        var a = ta.Mf();
        if (null == a) ta.enabled = !1;
        else if (
          ka.Wa(["ogg", "mp3", "aac"], function (b) {
            return b == a;
          })
        ) {
          l.wz(a);
          for (
            var b = ra.Ca(),
              c = b instanceof id,
              d = function (a, d, e) {
                d = c ? l.Of(a) : d;
                l.Cx(a)
                  ? b.Ki(
                      [
                        0, 243, 1242, 1943, 2942, 3030, 4029, 4116, 5115, 5202,
                        6201, 6289, 7288, 7375, 8374, 8462, 9461, 9548, 10547,
                        10635, 11634, 11721, 12720, 13780, 14779, 15710, 16709,
                        16850, 17849, 18516, 19515, 19871, 20870, 21182, 22181,
                        22699, 23698, 23858, 24857, 25314, 26313, 26404, 27403,
                        27504, 28503, 28562, 29561, 34812, 35811, 39288, 40287,
                        41288, 42287, 42538, 43537, 44201, 45200, 49300, 50299,
                        53300, 54299, 56940, 57939, 62190, 63189, 64125, 65124,
                        65610, 66609, 67266, 68265, 68566, 69565, 69766, 70765,
                        71066, 72065, 72316, 73315, 73466, 74465, 77466, 78465,
                        81466, 82465, 85466, 86465, 89466, 90465, 90556, 91555,
                        91712, 92711, 96040, 97039, 98883, 99882, 103076,
                        104075, 105201,
                      ],
                      d,
                      e
                    )
                  : b.rh(a, d, l.be(a), e);
              },
              e = 0,
              f = ca.sp;
            e < f.length;

          ) {
            var g = f[e];
            ++e;
            l.fz(g, d);
          }
        } else ta.enabled = !1;
      }
    },
    Vq: function () {},
    px: function (a) {
      null != ca.lr &&
        (la.co(a, "tr ru pt it fr es en de".split(" ")),
        l.co(la.lk),
        a != l.yq()
          ? eb.console.log("" + l.yq() + "(" + a + ")")
          : eb.console.log(a),
        l.ui(ca.lr, function (a) {
          la.jx(l.getData(a), ca.FB);
        }));
    },
    xn: function () {},
    zn: function () {
      eb.console.log("SmartyBubbles2 crashed \ud83d\ude2d");
      try {
        null != this.Tk && this.Tk.save();
      } catch (a) {}
    },
    j: ca,
  });
  Q.__name__ = "3";
  Q.prototype = {
    match: function (a) {
      this.r.global && (this.r.lastIndex = 0);
      this.r.Jb = this.r.exec(a);
      this.r.LB = a;
      return null != this.r.Jb;
    },
    ya: function (a) {
      if (null != this.r.Jb && 0 <= a && a < this.r.Jb.length)
        return this.r.Jb[a];
      throw q.G("EReg::matched");
    },
    replace: function (a, b) {
      return a.replace(this.r, b);
    },
    j: Q,
  };
  lg.__name__ = "4";
  lg.km = function () {
    try {
      return window.famobi.localStorage;
    } catch (a) {
      return null;
    }
  };
  Eb.__name__ = "5";
  Eb.jt = function () {
    Eb.Mh = !0;
    try {
      return window.famobi.showInterstitialAd().then(
        function () {
          Eb.Mh = !1;
        },
        function () {
          Eb.Mh = !1;
        }
      );
    } catch (a) {
      return (
        (Eb.Mh = !1),
        new Promise(function (a) {
          a(null);
        })
      );
    }
  };
  J.__name__ = "6";
  J.Qx = function (a) {
    return J.qr("quit", a);
  };
  J.qr = function (a, b) {
    null == b && (b = "");
    var c = {};
    c.levelName = b;
    c.reason = a;
    sessionStorage.setItem("slevel", b.replace(/[^\d]/g, ""));
    return J.send("EVENT_LEVELFAIL", c);
  };
  J.Tx = function (a) {
    null == a && (a = "");
    var b = {};
    b.levelName = a;
    return J.send("EVENT_LEVELSUCCESS", b);
  };
  J.Rx = function (a) {
    null == a && (a = "");
    var b = {};
    b.levelName = a;
    return J.send("EVENT_LEVELRESTART", b);
  };
  J.Sx = function (a) {
    null == a && (a = "");
    var b = {};
    b.levelName = a;
    return J.send("EVENT_LEVELSTART", b);
  };
  J.pause = function () {
    return J.send("EVENT_PAUSE");
  };
  J.resume = function () {
    return J.send("EVENT_RESUME");
  };
  J.zt = function (a) {
    var b = {};
    b.totalScore = a;
    return J.send("EVENT_TOTALSCORE", b);
  };
  J.iB = function (a) {
    var b = { bgmVolume: 0 };
    b.sfxVolume = a;
    J.send("EVENT_VOLUMECHANGE", b);
  };
  J.xc = function (a, b) {
    try {
      window.famobi_analytics.trackStats(a, b);
    } catch (c) {}
  };
  J.send = function (a, b) {
    try {
      return null != b
        ? window.famobi_analytics.trackEvent(a, b)
        : window.famobi_analytics.trackEvent(a);
    } catch (c) {
      return new Promise(function (a) {
        a(null);
      });
    }
  };
  ma.__name__ = "7";
  ma.R = function () {
    var a = window;
    a.famobi_muteAudio = function (a) {
      (ma.muted = a) ? ma.jn() : ma.Do();
    };
    a.famobi_pauseGame = function (a) {
      (ma.paused = a) ? ma.freeze() : ma.Ft();
    };
    a.famobi_onUnmuteRequested = function () {
      ma.Do();
      ma.muted = !1;
    };
    a.famobi_onMuteRequested = function () {
      ma.jn();
      ma.muted = !0;
    };
  };
  ma.jn = function () {};
  ma.Do = function () {};
  ma.freeze = function () {};
  ma.Ft = function () {};
  Re.__name__ = "8";
  Re.load = function (a) {
    try {
      var b = window.famobi.getBrandingButtonImage(!0);
    } catch (d) {
      b = "more_games_graphic.png";
    }
    var c = window.document.createElement("img");
    c.crossOrigin = "Anonymous";
    c.onload = function () {
      a(c);
    };
    c.src = b;
  };
  Re.click = function () {
    try {
      window.famobi.openBrandingLink();
    } catch (a) {}
  };
  jb.__name__ = "9";
  jb.R = function (a, b, c) {
    null == c && (c = !1);
    try {
      famobi_tracking.init(a, null, b, c);
    } catch (d) {}
  };
  jb.QA = function (a) {
    try {
      famobi_tracking.trackEvent(famobi_tracking.EVENTS.LEVEL_START, a.pn);
    } catch (b) {}
  };
  jb.At = function (a) {
    try {
      famobi_tracking.trackEvent(famobi_tracking.EVENTS.LEVEL_END, a.pn);
    } catch (b) {}
  };
  jb.Da = function () {
    return new $f();
  };
  $f.__name__ = "A";
  $f.prototype = {
    Fz: function (a) {
      return this.set("level", a);
    },
    Mz: function (a) {
      return this.set("score", a);
    },
    ct: function (a) {
      return this.set("success", a);
    },
    setData: function (a) {
      return this.set("data", a);
    },
    set: function (a, b) {
      this.pn[a] = b;
      return this;
    },
    j: $f,
  };
  C.__name__ = "B";
  C.Aj = function (a, b) {
    a = a.charCodeAt(b);
    if (a == a) return a;
  };
  C.substr = function (a, b, c) {
    if (null == c) c = a.length;
    else if (0 > c)
      if (0 == b) c = a.length + c;
      else return "";
    return a.substr(b, c);
  };
  C.remove = function (a, b) {
    b = a.indexOf(b);
    if (-1 == b) return !1;
    a.splice(b, 1);
    return !0;
  };
  C.now = function () {
    return Date.now();
  };
  ka.__name__ = "D";
  ka.Qh = function (a) {
    var b = [];
    for (a = Tb(a); a.Y(); ) {
      var c = a.next();
      b.push(c);
    }
    return b;
  };
  ka.Wa = function (a, b) {
    for (a = Tb(a); a.Y(); ) {
      var c = a.next();
      if (b(c)) return !0;
    }
    return !1;
  };
  ka.Se = function (a, b) {
    for (a = Tb(a); a.Y(); ) {
      var c = a.next();
      b(c);
    }
  };
  ka.filter = function (a, b) {
    var c = [];
    for (a = Tb(a); a.Y(); ) {
      var d = a.next();
      b(d) && c.push(d);
    }
    return c;
  };
  ka.count = function (a, b) {
    var c = 0;
    if (null == b) for (b = Tb(a); b.Y(); ) b.next(), ++c;
    else
      for (a = Tb(a); a.Y(); ) {
        var d = a.next();
        b(d) && ++c;
      }
    return c;
  };
  ka.find = function (a, b) {
    for (a = Tb(a); a.Y(); ) {
      var c = a.next();
      if (b(c)) return c;
    }
    return null;
  };
  nd.__name__ = "E";
  nd.prototype = {
    get: function (a) {
      return null != this.Wd ? fa.get(this.Wd, a) : null;
    },
    j: nd,
  };
  nb.__name__ = "F";
  nb.A = v;
  nb.prototype = t(v.prototype, {
    H: function () {
      v.prototype.H.call(this);
      this.Yc.m();
      this.Yc = null;
      this.buffer.m();
      this.buffer = null;
    },
    la: function (a, b, c) {
      if (null != b)
        for (var d = 0; d < b.length; ) (c = b[d]), ++d, this.la(a, null, c);
      else
        (c = null == c ? 0 : c + 1),
          c > this.fn && (this.fn = c),
          this.Yc.resize(this.fn + 1),
          (b = this.Yc.c[c]),
          null == b && ((b = new Zf(c)), (this.Yc.c[c] = b)),
          b.add(a) && this.on++;
    },
    detach: function (a, b) {
      b = null == b ? 0 : b + 1;
      if (0 <= b && b < this.Yc.g) {
        var c = this.Yc.c[b];
        null != c &&
          c.remove(a) &&
          (this.on--, c.list.Wg() && (c.m(), (this.Yc.c[b] = null)));
      }
    },
    ka: function (a, b) {
      this.buffer.g = 0;
      this.buffer.Lc(2 * this.on);
      var c = this.buffer.c,
        d = 0;
      if (0 < this.Yc.g) {
        var e = this.Yc.c[0];
        if (null != e) {
          var f = e.list.c;
          var g = 0;
          for (e = e.list.g; g < e; ) (c[g + d] = f[g]), ++g;
          d += e;
        }
      }
      g = null == a ? 0 : a + 1;
      if (0 <= g && g < this.Yc.g && ((e = this.Yc.c[g]), null != e)) {
        f = e.list.c;
        g = 0;
        for (e = e.list.g; g < e; ) (c[g + d] = f[g]), ++g;
        d += e;
      }
      a = new nd(this, a, b);
      g = 0;
      for (e = d; g < e; ) c[g].handle(a), ++g;
    },
    j: nb,
  });
  Zf.__name__ = "10";
  Zf.prototype = {
    add: function (a) {
      if (this.list.contains(a)) return !1;
      var b = this.list;
      b.g == b.u && b.O();
      b.c[b.g++] = a;
      return !0;
    },
    remove: function (a) {
      return this.list.remove(a);
    },
    m: function () {
      this.list.m();
      this.list = null;
    },
    j: Zf,
  };
  bc.__name__ = "11";
  bc.A = v;
  bc.prototype = t(v.prototype, {
    H: function () {
      v.prototype.H.call(this);
      for (var a = this.C.iterator(); a.Y(); ) a.next().m();
      this.C = null;
    },
    handle: function (a) {
      v.prototype.handle.call(this, a);
      var b = this.C.C[a.type];
      if (null != b)
        for (var c = b.we(), d = 0; d < c.length; ) {
          var e = c[d];
          ++d;
          e.D(a.Wd);
          e.once && b.remove(e);
        }
    },
    j: bc,
  });
  wd.__name__ = "13";
  wd.ae = function () {
    return "undefined" !== typeof window.orientation;
  };
  var fa = {
    Fb: function (a) {
      var b = {};
      if (null != a)
        if (1 == a.length) fa.set(b, a[0]);
        else
          for (var c = 0, d = a.length; c < d; )
            fa.set(b, a[c], a[c + 1]), (c += 2);
      return b;
    },
    Tu: function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    get: function (a, b) {
      return O.ja(a, b);
    },
    set: function (a, b, c) {
      a[b] = null == c ? b : c;
      return a;
    },
  };
  O.__name__ = "14";
  O.ja = function (a, b) {
    try {
      return a[b];
    } catch (c) {
      return null;
    }
  };
  Yf.__name__ = "15";
  Yf.prototype = {
    nx: function () {
      var a = this,
        b = new ea(this.Cp, this.Ar);
      b.ox(0 < (this.i & 32), !1);
      b.ex();
      this.window = b;
      this.Sa = new je();
      this.Sa.Mr = 0 < (this.i & 1);
      this.Sa.Az();
      this.window.Kz(this.Sa);
      null != this.color && (this.window.color = this.color);
      this.Sa.clear();
      this.window.ps = function (b) {
        a.Wr(b);
      };
      this.window.sy = function () {};
      this.window.vy = function () {};
      this.window.Fd = function () {
        a.It();
        a.Vr(a.window.Rb());
      };
      Y.Ya().fc = b.fc;
      null != this.Cp &&
        ((Y.Ya().element = b.canvas),
        (Y.Ya().scale.b = b.canvas.width / b.canvas.scrollWidth),
        (Y.Ya().scale.a = b.canvas.height / b.canvas.scrollHeight),
        (Y.Ya().fc = 1));
      this.It();
    },
    update: function (a) {
      ha.update(this.tb, a);
      ja.Go(this.tb, a);
    },
    pa: function () {
      ha.Xb(this.tb);
      var a = 0 == (this.i & 2);
      xa.reset();
      0 < (this.i & 4) ? this.tb.rg(!0, a) : ja.rg(this.tb, a);
      0 < (this.i & 4) ? this.tb.hj() : ja.hj(this.tb);
      null != this.Sa && (this.Sa.clear(), this.Sa.Vv(this.tb));
    },
    hb: function (a, b) {
      if (!Z.Wa(a)) {
        var c = null,
          d = null;
        null == b
          ? 65535 > a &&
            ((b = l.Gw(a)), l.Of(a), null != b && (d = Db.decode(b, !0)))
          : ((b = l.getData(b)),
            "string" == typeof b ? (c = new uc(b)) : (d = oa.Ek(b)));
        if (null != d)
          switch (
            ((c = d.a[0]),
            (b = String.fromCodePoint(c)),
            (c = d.a[1]),
            (b += String.fromCodePoint(c)),
            (c = d.a[2]),
            (b += String.fromCodePoint(c)),
            b)
          ) {
            case "BMF":
              c = new ae(d);
              break;
            case "TPJ":
              c = new uc(cg.WA(d));
              break;
            default:
              c = new uc(l.ov(d));
          }
        this.Sa.createTexture(a, l.getData(a), c);
        d = Z.get(a);
        l.bx(a) && "sd" == l.Rw() && (d.scale = 2);
      }
    },
    pw: function (a, b) {
      null == b && (b = !0);
      this.Sa.Vp(a);
      b && l.Cc(a);
    },
    It: function () {
      var a = this.window.Rb(),
        b = this.Sa.Df,
        c = a.b;
      a = a.a;
      var d = new G();
      d.b = 0;
      d.a = 0;
      d.f = c;
      d.d = a;
      b.reset(d);
    },
    j: Yf,
  };
  y.__name__ = "16";
  y.Ja = function (a) {
    return B.Kh(a, "");
  };
  y.parseInt = function (a) {
    if (null != a)
      for (var b = 0, c = a.length; b < c; ) {
        var d = b++,
          e = a.charCodeAt(d);
        if (8 >= e || (14 <= e && 32 != e && 45 != e))
          if (
            ((b = a.charCodeAt(d + 1)),
            (a = parseInt(a, 120 == b || 88 == b ? 16 : 10)),
            isNaN(a))
          )
            break;
          else return a;
      }
    return null;
  };
  Nb.__name__ = "17";
  Nb.prototype = { j: Nb };
  Ka.__name__ = "18";
  Ka.Nq = function (a, b) {
    for (var c = "", d = 0, e = a; d < e.length; ) {
      a = e;
      var f = d++,
        g = a.charCodeAt(f);
      55296 <= g &&
        56319 >= g &&
        (g = ((g - 55232) << 10) | (a.charCodeAt(f + 1) & 1023));
      a = g;
      65536 <= a && ++d;
      switch (a) {
        case 34:
          c = b ? c + "&quot;" : c + String.fromCodePoint(a);
          break;
        case 38:
          c += "&amp;";
          break;
        case 39:
          c = b ? c + "&#039;" : c + String.fromCodePoint(a);
          break;
        case 60:
          c += "&lt;";
          break;
        case 62:
          c += "&gt;";
          break;
        default:
          c += String.fromCodePoint(a);
      }
    }
    return c;
  };
  Ka.hr = function (a, b) {
    a = C.Aj(a, b);
    return 8 < a && 14 > a ? !0 : 32 == a;
  };
  Ka.tr = function (a) {
    for (var b = a.length, c = 0; c < b && Ka.hr(a, c); ) ++c;
    return 0 < c ? C.substr(a, c, b - c) : a;
  };
  Ka.rz = function (a) {
    for (var b = a.length, c = 0; c < b && Ka.hr(a, b - c - 1); ) ++c;
    return 0 < c ? C.substr(a, 0, b - c) : a;
  };
  Ka.trim = function (a) {
    return Ka.tr(Ka.rz(a));
  };
  Ka.dx = function (a) {
    for (
      var b = "";
      (b = "0123456789ABCDEF".charAt(a & 15) + b), (a >>>= 4), 0 < a;

    );
    return b;
  };
  Wa.__name__ = "19";
  Wa.prototype = {
    la: function (a) {
      if (null == this.list) return (this.list = new me(a)), !0;
      for (var b = this.list; null != b; ) {
        if (b.Fa == a) return !1;
        b = b.next;
      }
      a = new me(a);
      a.next = this.list;
      this.list = a;
      return !0;
    },
    detach: function (a) {
      if (null == a && null != this.current)
        return this.detach(this.current), !0;
      var b = this.list;
      if (null == b) return !1;
      if (b.Fa == a)
        return (
          this.next == b && (this.next = b.next),
          (b.Fa = null),
          (this.list = b.next),
          (b.next = null),
          !0
        );
      var c = b;
      for (b = b.next; null != b; ) {
        if (b.Fa == a)
          return (
            (b.Fa = null),
            (c.next = b.next),
            (b.next = null),
            this.next == b && (this.next = c.next),
            !0
          );
        c = b;
        b = b.next;
      }
      return !1;
    },
    m: function () {
      for (var a = this.list; null != a; )
        (this.next = a.next), (a.Fa = null), (a.next = null), (a = this.next);
      this.list = this.next = null;
    },
    j: Wa,
  };
  E.__name__ = "1A";
  E.la = function (a, b) {
    null == b && (b = !1);
    b ? E.sh.la(a) : E.Gh.la(a);
  };
  E.detach = function (a, b) {
    null == b && (b = !1);
    b ? E.sh.detach(a) : E.Gh.detach(a);
  };
  E.advance = function (a) {
    var b = a / 1e3;
    E.time += b;
    if (!(0 < E.Br && E.time < E.Xf + 1 / E.Br)) {
      E.Xf = E.time;
      E.time > E.or + 1 &&
        ((E.mq = Math.round(0.25 * E.nn + 0.75 * E.mq)),
        (E.or = E.time),
        (E.nn = 0));
      E.nn++;
      a = E.Rv;
      E.Ae += b * E.$i;
      0.2 < E.Ae && (E.Ae = 0.2);
      for (; E.Ae > a; ) {
        E.Ae -= a;
        b = E.Gh;
        for (var c = b.list; null != c; )
          (b.next = c.next), (b.current = c.Fa), c.Fa(a), (c = b.next);
        b.next = null;
        b.current = null;
        E.kq += a;
        E.first = !1;
      }
      if (!E.first) {
        a = E.Ae / a;
        b = E.sh;
        for (c = b.list; null != c; )
          (b.next = c.next), (b.current = c.Fa), c.Fa(a), (c = b.next);
        b.next = null;
        b.current = null;
      }
    }
  };
  hb.__name__ = "1B";
  hb.cc = function () {};
  hb.prototype = {
    start: function () {
      var a = this;
      this.stop();
      var b = null;
      this.window && "undefined" !== typeof window.requestAnimationFrame
        ? ((b = function (c) {
            a.handle = window.requestAnimationFrame(b);
            var d = c - a.now;
            d = Math.round(100 * d);
            d = Math.min(d, 65535);
            hb.cc(d);
            E.advance(d / 100);
            a.now = c;
          }),
          (this.now = 0),
          (this.handle = window.requestAnimationFrame(b)))
        : ((b = function () {
            a.handle = setTimeout(b, 16);
            var c = a.now;
            a.now = new Date();
            c = a.now - c;
            hb.cc(c);
            E.advance(c);
          }),
          (this.now = new Date()),
          (this.handle = setTimeout(b, 16)));
    },
    stop: function () {
      this.window
        ? 0 > this.handle ||
          (window.cancelAnimationFrame(this.handle), (this.handle = -1))
        : null != this.handle &&
          (clearInterval(this.handle), (this.handle = null));
    },
    j: hb,
  };
  Qe.__name__ = "1C";
  Qe.Ov = function (a) {
    return new (Function.prototype.bind.apply(a, [null].concat([])))();
  };
  Qe.ew = function (a) {
    var b = La[a.T];
    b = b[b.zc[a.I]].mj;
    if (null != b) {
      for (var c = [], d = 0; d < b.length; ) {
        var e = b[d];
        ++d;
        c.push(a[e]);
      }
      return c;
    }
    return [];
  };
  var oc = {
      qf: function (a) {
        return 0 > a ? 4294967296 + a : a + 0;
      },
    },
    U = {
      toString: function (a) {
        switch (a) {
          case 0:
            return "Element";
          case 1:
            return "PCData";
          case 2:
            return "CData";
          case 3:
            return "Comment";
          case 4:
            return "DocType";
          case 5:
            return "ProcessingInstruction";
          case 6:
            return "Document";
        }
      },
    };
  w.__name__ = "1D";
  w.parse = function (a) {
    return Ob.parse(a);
  };
  w.createElement = function (a) {
    var b = new w(w.Element);
    if (b.nodeType != w.Element)
      throw q.G(
        "Bad node type, expected Element but found " +
          (null == b.nodeType ? "null" : U.toString(b.nodeType))
      );
    b.nodeName = a;
    return b;
  };
  w.Gj = function (a) {
    var b = new w(w.Yt);
    if (b.nodeType == w.Document || b.nodeType == w.Element)
      throw q.G(
        "Bad node type, unexpected " +
          (null == b.nodeType ? "null" : U.toString(b.nodeType))
      );
    b.nodeValue = a;
    return b;
  };
  w.Lv = function (a) {
    var b = new w(w.Rt);
    if (b.nodeType == w.Document || b.nodeType == w.Element)
      throw q.G(
        "Bad node type, unexpected " +
          (null == b.nodeType ? "null" : U.toString(b.nodeType))
      );
    b.nodeValue = a;
    return b;
  };
  w.createComment = function (a) {
    var b = new w(w.Comment);
    if (b.nodeType == w.Document || b.nodeType == w.Element)
      throw q.G(
        "Bad node type, unexpected " +
          (null == b.nodeType ? "null" : U.toString(b.nodeType))
      );
    b.nodeValue = a;
    return b;
  };
  w.Mv = function (a) {
    var b = new w(w.Vt);
    if (b.nodeType == w.Document || b.nodeType == w.Element)
      throw q.G(
        "Bad node type, unexpected " +
          (null == b.nodeType ? "null" : U.toString(b.nodeType))
      );
    b.nodeValue = a;
    return b;
  };
  w.createProcessingInstruction = function (a) {
    var b = new w(w.ProcessingInstruction);
    if (b.nodeType == w.Document || b.nodeType == w.Element)
      throw q.G(
        "Bad node type, unexpected " +
          (null == b.nodeType ? "null" : U.toString(b.nodeType))
      );
    b.nodeValue = a;
    return b;
  };
  w.createDocument = function () {
    return new w(w.Document);
  };
  w.prototype = {
    get: function (a) {
      if (this.nodeType != w.Element)
        throw q.G(
          "Bad node type, expected Element but found " +
            (null == this.nodeType ? "null" : U.toString(this.nodeType))
        );
      return this.rj.C[a];
    },
    set: function (a, b) {
      if (this.nodeType != w.Element)
        throw q.G(
          "Bad node type, expected Element but found " +
            (null == this.nodeType ? "null" : U.toString(this.nodeType))
        );
      this.rj.C[a] = b;
    },
    Wa: function (a) {
      if (this.nodeType != w.Element)
        throw q.G(
          "Bad node type, expected Element but found " +
            (null == this.nodeType ? "null" : U.toString(this.nodeType))
        );
      return Object.prototype.hasOwnProperty.call(this.rj.C, a);
    },
    attributes: function () {
      if (this.nodeType != w.Element)
        throw q.G(
          "Bad node type, expected Element but found " +
            (null == this.nodeType ? "null" : U.toString(this.nodeType))
        );
      return Ma.Px(this.rj.C);
    },
    bm: function (a) {
      if (this.nodeType != w.Document && this.nodeType != w.Element)
        throw q.G(
          "Bad node type, expected Element or Document but found " +
            (null == this.nodeType ? "null" : U.toString(this.nodeType))
        );
      for (var b = [], c = 0, d = this.children; c < d.length; ) {
        var e = d[c];
        ++c;
        if (e.nodeType == w.Element) {
          if (e.nodeType != w.Element)
            throw q.G(
              "Bad node type, expected Element but found " +
                (null == e.nodeType ? "null" : U.toString(e.nodeType))
            );
          var f = e.nodeName == a;
        } else f = !1;
        f && b.push(e);
      }
      return new Dc(b);
    },
    mw: function () {
      if (this.nodeType != w.Document && this.nodeType != w.Element)
        throw q.G(
          "Bad node type, expected Element or Document but found " +
            (null == this.nodeType ? "null" : U.toString(this.nodeType))
        );
      for (var a = 0, b = this.children; a < b.length; ) {
        var c = b[a];
        ++a;
        if (c.nodeType == w.Element) return c;
      }
      return null;
    },
    N: function (a) {
      if (this.nodeType != w.Document && this.nodeType != w.Element)
        throw q.G(
          "Bad node type, expected Element or Document but found " +
            (null == this.nodeType ? "null" : U.toString(this.nodeType))
        );
      null != a.parent && a.parent.removeChild(a);
      this.children.push(a);
      a.parent = this;
    },
    removeChild: function (a) {
      if (this.nodeType != w.Document && this.nodeType != w.Element)
        throw q.G(
          "Bad node type, expected Element or Document but found " +
            (null == this.nodeType ? "null" : U.toString(this.nodeType))
        );
      return C.remove(this.children, a) ? ((a.parent = null), !0) : !1;
    },
    toString: function () {
      return jd.print(this);
    },
    j: w,
  };
  Sb.__name__ = "1E";
  Sb.__isInterface__ = !0;
  md.__name__ = "1F";
  md.__interfaces__ = [Sb];
  md.A = Wa;
  md.prototype = t(Wa.prototype, {
    update: function (a) {
      this.time += a;
      this.YA(a);
      var b = this.ob;
      a = b.c;
      var c = 0;
      for (b = b.g; c < b; ) {
        var d = c++;
        d = a[d];
        d.D.jd = !this.viewport.er(d.B, d.aa);
      }
      0 <= K.zj && Fc.vA(this);
      this.Ej && ((this.Ej = !1), this.ti.update());
      this.trim();
      this.gj();
    },
    Kp: function (a) {
      if (0 == a) return 0;
      0 > a && (a = -a);
      return 2 * a - 0.26794919249999993 * (a - 1);
    },
    Dv: function (a) {
      return a / 1.7320508075;
    },
    Yn: function (a) {
      this.viewport.NA(a);
    },
    Pt: function (a) {
      this.viewport.yt(a, a);
    },
    Nz: function (a) {
      this.viewport.Ld(a);
      this.Mb.te();
    },
    $k: function (a, b) {
      this.viewport.$k(a, b);
      this.Mb.te();
    },
    Gz: function (a) {
      var b = this;
      if (null != this.ba) {
        for (var c = 0, d = this.ob.we(); c < d.length; ) {
          var e = d[c];
          ++c;
          e.H();
        }
        this.ob.m();
        this.ba.m();
        this.hh.m();
      }
      c = a.ba;
      this.ob = new L(c.ca * c.ua);
      this.ob.Mc = !0;
      this.ng = a.ng;
      this.cd = a.cd;
      this.cols = a.ba.ca;
      this.ba = new Me(this);
      this.viewport.Ui();
      this.ab = new te();
      this.ab.El = function (a, c) {
        if (b.Qf.Wg()) return new dd(a, c);
        c = b.Qf;
        c = c.c[--c.g];
        c.node = a;
        return c;
      };
      this.ab.Oi = function (a) {
        if (1024 > b.Qf.g) {
          var c = b.Qf;
          c.g == c.u && c.O();
          c.c[c.g++] = a;
        }
      };
      this.dg = 0;
      this.Iy(a.ba);
      this.Gd = new G();
      this.gj();
      this.da.b = this.Uj() / 2;
      this.da.a = 0;
      this.da.f = 0;
      this.da.d = -1;
      this.Mb.te();
    },
    Vz: function () {
      this.gj();
      this.da.a = 0;
      var a = this.viewport.wo(this.viewport.$.a);
      a -= this.Gd.d;
      this.xh(this.da.b, -a);
    },
    hk: function (a) {
      null == a && (a = 0);
      return this.viewport.wc(this.vm()) - a >= this.viewport.$.a;
    },
    Oe: function (a) {
      null == a && (a = 0);
      if (0 == this.ta.g) return null;
      var b = this.ta;
      return b.c[(a + b.Ia) % b.u];
    },
    xB: function () {
      return this.ta.g;
    },
    sr: function (a) {
      var b = new db(this);
      b.code = a;
      b.D.Cg = !0;
      b.D.loaded = !0;
      b.D.connected = !1;
      a = b.B;
      var c = this.da,
        d = c.a;
      a.b = c.b;
      a.a = d;
      this.ob.add(b);
      b.$a(new cb());
      a = this.ta.g;
      c = this.ta;
      c.u == c.g && c.O();
      c.c[(c.g++ + c.Ia) % c.u] = b;
      for (c = this.list; null != c; )
        (this.next = c.next),
          (this.current = c.Fa),
          c.Fa.fv(b, a),
          (c = this.next);
      this.current = this.next = null;
      return b;
    },
    Fj: function (a) {
      var b = new db(this);
      b.code = a;
      this.ob.add(b);
      for (a = this.list; null != a; )
        (this.next = a.next),
          (this.current = a.Fa),
          a.Fa.Gl(b),
          (a = this.next);
      this.current = this.next = null;
      return b;
    },
    Up: function (a) {
      a.D.connected &&
        ((a.D.connected = !1),
        this.dg--,
        null != a.ha && this.ab.removeNode(a.ha),
        this.ba.Vk(a),
        (this.Ej = !0));
    },
    Vd: function (a, b, c) {
      c.b = 1;
      c.b += 2 * a;
      (b & 1) == this.cd && (c.b += 1);
      c.a = 1 + 1.7320508075 * b;
      c.a = -c.a;
    },
    Oy: function (a, b) {
      b.y = -((a.a / 1.7320508075) | 0) - (0 < a.a ? 1 : 0);
      if ((b.y & 1) == this.cd) {
        if (1 > a.b) return !1;
        b.x = ((a.b - 1) / 2) | 0;
      } else {
        if (0 > a.b) return !1;
        b.x = (a.b / 2) | 0;
      }
      return b.x >= this.cols ? !1 : !0;
    },
    pv: function () {
      if (
        0 == this.ta.g ||
        (0 > K.zj && !this.Fe.Wg()) ||
        this.time - this.CA < K.zj
      )
        return !1;
      if (0 <= K.zj) {
        var a = !1,
          b = this.ta,
          c = b.c[b.Ia];
        b = this.Fe;
        var d = b.c,
          e = 0;
        for (b = b.g; e < b; ) {
          var f = e++;
          d[f].xx(c) && (a = !0);
        }
        if (a) return !1;
      }
      return !0;
    },
    cA: function () {
      if (0 == this.ta.g) return !1;
      var a = this.ta;
      a = a.c[a.Ia];
      this.Tv();
      a.D.Cg = !0;
      a.$a(new Ee());
      this.Fe.add(a);
      return !0;
    },
    Tv: function () {
      if (0 == this.ta.g) return !1;
      var a = this.ta,
        b = a.c[a.Ia++];
      a.Ia == a.u && (a.Ia = 0);
      a.g--;
      b.D.Cg = !1;
      b.D.loaded = !1;
      b.rc(cb);
      return !0;
    },
    YA: function (a) {
      var b = 8 * this.ob.g,
        c = 7 * b,
        d = this.to,
        e = this.so;
      d.g < c && (d.R(c, null), e.R(c, null));
      c = kg.Sl;
      for (var f = 0; 7 > f; ) {
        var g = f++;
        c[g] = 0;
      }
      var h = this.ob,
        k = h.c;
      f = 0;
      for (var m = h.g; f < m; ) {
        var x = f++;
        x = k[x];
        x.jb = a;
        h = x.gd;
        for (var u = h.c, p = 0, ba = h.g; p < ba; ) {
          h = p++;
          h = u[h];
          var l = (g = h.zi);
          var n = c[l];
          c[l] = n + 1;
          l = n;
          g = g * b + l;
          e.c[g] = h;
          d.c[g] = x;
        }
      }
      for (g = 0; 7 > g; ) {
        l = c[g];
        f = b * g;
        for (k = f + l; f < k; )
          (x = d.c[f]),
            null != x.F &&
              ((h = e.c[f]), (h.time += a), h.enabled && h.update(x)),
            ++f;
        ++g;
      }
    },
    ny: function (a, b) {
      for (var c = this.list; null != c; )
        (this.next = c.next), (this.current = c.Fa), (c = this.next);
      this.current = this.next = null;
      K.Jq && this.Iq.apply(a, b);
    },
    py: function (a, b) {
      null != this.ah && this.ah.D.connected && !this.ah.D.tc && this.ah.Ah();
      this.ah = a;
      this.Fe.remove(a);
      this.dg++;
      a.D.Cg = !1;
      if (null == b) {
        var c = a.Ba;
        c.b = 0;
        c.a = 0;
        c = a.force;
        c.b = 0;
        c.a = 0;
      }
      c = a.B;
      var d = c.b,
        e = c.a;
      c = new r();
      c.b = d;
      c.a = e;
      var f = c;
      this.Hv(a, b);
      a.mf = K.ud.mf;
      a.Tc = K.ud.Tc;
      a.$a(new Pb());
      c = a.force;
      c.b = 0;
      c.a = 0;
      c = a.Ba;
      d = c.b;
      e = c.a;
      c = new r();
      c.b = d;
      c.a = e;
      d = c;
      ag.normalize(d);
      c = a.Ba;
      c.b = 0;
      c.a = 0;
      K.ud.enabled && this.Gm.Ty(a);
      for (c = this.list; null != c; )
        (this.next = c.next),
          (this.current = c.Fa),
          c.Fa.dv(a, b),
          (c = this.next);
      this.current = this.next = null;
      K.ud.enabled && this.Gm.apply(a, f, d);
    },
    oy: function (a, b) {
      var c = null;
      0 == b ? (c = K.mv) : 2 == b && (c = K.lv);
      if (null == c || "destroy" == c) this.Fe.remove(a), a.H();
      else {
        a.Ba.b = 0;
        a.Ba.a = 0;
        a.force.b = 0;
        a.force.a = 0;
        c = a.B;
        var d = this.da,
          e = d.a;
        c.b = d.b;
        c.a = e;
        a.$a(new cb());
        c = this.ta.we();
        this.ta.clear();
        d = this.ta;
        d.u == d.g && d.O();
        d.c[(d.g++ + d.Ia) % d.u] = a;
        for (e = 0; e < c.length; ) {
          var f = c[e];
          ++e;
          d = this.ta;
          d.u == d.g && d.O();
          d.c[(d.g++ + d.Ia) % d.u] = f;
        }
      }
      for (c = this.list; null != c; )
        (this.next = c.next),
          (this.current = c.Fa),
          c.Fa.cv(a, b),
          (c = this.next);
      this.current = this.next = null;
    },
    my: function (a, b) {
      for (var c = this.list; null != c; )
        (this.next = c.next),
          (this.current = c.Fa),
          c.Fa.bv(a, b),
          (c = this.next);
      this.current = this.next = null;
    },
    vm: function () {
      this.Vd(0, this.hc, this.uh);
      return this.uh.a - 1;
    },
    Uj: function () {
      return 2 * this.cols + 1 * this.ng;
    },
    Zd: function () {
      this.trim();
      this.Vd(0, this.ic, this.uh);
      return this.uh.a + 1;
    },
    Vs: function (a, b) {
      null == b && (b = !1);
      b
        ? ((b = new r()),
          (b.b = 0),
          (b.a = 0),
          this.Vd(0, this.ic - (a | 0), b),
          (b.a += 0.26794919249999993),
          this.xh(this.da.b, b.a))
        : (this.trim(), this.xh(this.da.b, this.Zd() + a));
    },
    xh: function (a, b) {
      this.da.b = a;
      this.da.a = b;
      this.Mb.te();
    },
    vw: function () {
      return 57.29577951308232 * Math.atan2(this.da.d, this.da.f) + 90;
    },
    Bt: function (a, b) {
      this.xh(this.da.b + a, this.da.a + b);
    },
    Uw: function (a) {
      var b = 0,
        c = this.ob,
        d = c.c,
        e = 0;
      for (c = c.g; e < c; ) {
        var f = e++;
        f = d[f];
        this.viewport.er(f.B, f.aa) && (a[b++] = f);
      }
      return b;
    },
    gj: function () {
      var a = this.Gd;
      a.b = a.a = Infinity;
      a.f = a.d = -Infinity;
      if (0 == this.dg)
        (a = this.Gd), (a.b = 0), (a.a = 0), (a.f = 0), (a.d = 0);
      else {
        var b = this.ob,
          c = b.c,
          d = 0;
        for (b = b.g; d < b; ) {
          a = d++;
          var e = c[a];
          if (e.D.connected) {
            a = this.Gd;
            e = e.B;
            var f = e.b;
            f < a.b ? (a.b = f) : f > a.f && (a.f = f);
            e = e.a;
            e < a.a ? (a.a = e) : e > a.d && (a.d = e);
          }
        }
        kb.offset(this.Gd, 1, 1);
      }
    },
    uw: function (a) {
      for (var b = 0, c = this.ta.g; b < c; ) {
        var d = b++,
          e = this.ta;
        if (e.c[(d + e.Ia) % e.u] == a) return d;
      }
      return -1;
    },
    mm: function () {
      for (var a = this.ic, b; a <= this.hc; ) {
        for (var c = 0, d = this.cols; c < d; )
          if (((b = c++), (b = this.ba.get(b, a)), null != b && !b.D.tc))
            return b;
        ++a;
      }
      return null;
    },
    trim: function () {
      for (var a, b = this.ic; b <= this.hc; ) {
        for (var c = 0, d = this.cols; c < d; )
          if (((a = c++), (a = this.ba.get(a, b)), null != a && !a.D.tc)) {
            this.ic = a.Ma;
            return;
          }
        ++b;
      }
    },
    As: function (a) {
      this.hc++;
      for (var b = [], c = 0, d = a.length; c < d; ) {
        var e = c++,
          f = a[e];
        if (0 != f) {
          var g = new db(this);
          g.code = f;
          b.push(g);
          g.Ma = this.hc;
          g.Va = e;
          g.Ah();
          this.ba.xl(g);
          this.ob.add(g);
          g.ha = new ec(g);
          this.ab.pj(g.ha);
          this.Ol(g);
          this.Xs(g);
          this.dg++;
        }
      }
      this.ti.update();
      for (c = 0; c < b.length; ) {
        g = b[c];
        ++c;
        for (a = this.list; null != a; )
          (this.next = a.next),
            (this.current = a.Fa),
            a.Fa.Gl(g),
            (a = this.next);
        this.current = this.next = null;
      }
      this.Mb.te();
      this.gj();
      return b;
    },
    Iy: function (a) {
      var b = this;
      this.ic = 0;
      this.hc = a.ua - 1;
      0 == (a.ua & 1) && (this.cd = (this.cd + 1) & 1);
      a.forEach(function (c, d, e) {
        if (0 == c || (0 == b.ng && (e & 1) == b.cd && d > a.ca - 1)) return c;
        b.dg++;
        var f = new db(b);
        f.code = c;
        f.Va = d;
        f.Ma = b.hc - e;
        f.Ah();
        b.ba.xl(f);
        b.ob.add(f);
        f.ha = new ec(f);
        b.ab.pj(f.ha);
        b.Xs(f);
        return c;
      });
      var c = this.ob,
        d = c.c,
        e = 0;
      for (c = c.g; e < c; ) {
        var f = e++;
        b.Ol(d[f]);
      }
      this.ti.update();
      for (d = this.ba.iterator(); d.Y(); ) {
        e = d.next();
        for (c = this.list; null != c; )
          (this.next = c.next),
            (this.current = c.Fa),
            c.Fa.Gl(e),
            (c = this.next);
        this.current = this.next = null;
      }
    },
    Ol: function (a) {
      if (null != a && 0 != a.code) {
        a.D.connected = !0;
        var b = this.Tl(a);
        for (a = a.ha; b.cursor < b.size; ) {
          var c = b.list[b.cursor++];
          null != c && 0 != c.code && ((c = c.ha), a.Ix(c) || this.ab.lp(a, c));
        }
      }
    },
    Xs: function (a) {
      a.$a(new Pb());
      a.mf = K.ud.mf;
      a.Tc = K.ud.Tc;
    },
    Oz: function (a) {
      var b = this.da,
        c = b.f,
        d = b.d,
        e = this.uh;
      e.b = a.b;
      e.a = a.a;
      this.Yn(e);
      b.f = e.b - this.da.b;
      b.d = e.a - this.da.a;
      0.25 > pg.normalize(b)
        ? ((b.f = c), (b.d = d))
        : ((a = K.ey),
          (c = 57.29577951308232 * Math.atan2(b.d, b.f)),
          (d = 1),
          K.hA
            ? 0 <= c
              ? ((d = -1),
                c < 90 - a
                  ? (c = 90 - a)
                  : c > 180 - (90 - a) && (c = 180 - (90 - a)))
              : c > -90 + a
              ? (c = -90 + a)
              : c < -90 - a && (c = -90 - a)
            : 0 > c
            ? c > -90 + a
              ? (c = -90 + a)
              : c < -90 - a && (c = -90 - a)
            : 90 > c
            ? (c = -90 + a)
            : 270 > c && (c = -90 - a),
          (b.f = Math.cos(0.0174532925199432 * c) * d),
          (b.d = Math.sin(0.0174532925199432 * c) * d));
    },
    Hy: function (a, b, c, d) {
      if (0 > a || a >= this.ta.g || 0 == this.ta.g) return !1;
      var e = this.ta;
      a = e.c[(a + e.Ia) % e.u];
      e = new r();
      e.b = b;
      e.a = c;
      this.Yn(e);
      return hg.Eh(e.b, e.a, a.B.b, a.B.a, a.aa * d);
    },
    Tl: function (a) {
      var b = new Vf(this.ba, this.cols, this.cd);
      null != a && b.R(a.Va, a.Ma);
      return b;
    },
    Hv: function (a, b) {
      a.D.connected = !0;
      if (null == b) {
        b = new ib();
        this.Oy(a.B, b);
        a.Va = b.x;
        a.Ma = b.y;
        var c = new r();
        this.Vd(b.x, b.y, c);
        if (null != this.ba.get(a.Va, a.Ma))
          if (a.B.b < c.b) {
            if (0 == a.Va) throw q.G("leftmost cell");
            a.Va--;
          } else if (a.B.b > c.b) {
            if (a.Va == this.cols - 1) throw q.G("rightmost cell");
            a.Va++;
          }
        this.Vd(a.Va, a.Ma, a.B);
      } else {
        b.Ah();
        c = b.ha.qa;
        for (var d; null != c; ) (d = c.node.ga), d.Ah(), (c = c.next);
        b = this.gq(new ib(b.Va, b.Ma), a.B);
        a.Va = b.x;
        a.Ma = b.y;
        a.Ah();
        b.y < this.ic && (this.ic = b.y);
      }
      this.ba.xl(a);
      a.ha = new ec(a);
      this.ab.pj(a.ha);
      for (b = this.Tl(a); b.cursor < b.size; )
        (c = b.list[b.cursor++]), this.ab.lp(a.ha, c.ha);
      this.Ej = !0;
    },
    gq: function (a, b) {
      var c = 20,
        d = new ib(-1, -1),
        e = new r();
      e.b = 0;
      e.a = 0;
      var f = this.Tl();
      for (f.R(a.x, a.y, !0); f.cursor < f.size; ) {
        var g = f.list[f.cursor++];
        if (0 == g.code) {
          a = g.Va;
          g = g.Ma;
          this.Vd(a, g, e);
          var h = e.b - b.b,
            k = e.a - b.a;
          h = h * h + k * k;
          h < c && ((c = h), (d.x = a), (d.y = g));
        }
      }
      return d;
    },
    m: function () {
      Wa.prototype.m.call(this);
      this.viewport.m();
      for (var a = this.ob.iterator(); a.Y(); ) a.next().m();
      this.ba.m();
      this.ab.m();
      this.ne.m();
      this.hh.m();
      this.Mb.m();
      this.Fe.m();
      for (a = this.Qf.iterator(); a.Y(); ) a.next().m();
      this.Qf.m();
      this.to.m();
      this.so.m();
      this.ti =
        this.uh =
        this.so =
        this.to =
        this.ah =
        this.da =
        this.Iq =
        this.Qf =
        this.ta =
        this.Fe =
        this.cd =
        this.ng =
        this.Mb =
        this.Gd =
        this.hh =
        this.ne =
        this.ab =
        this.ba =
        this.ob =
        this.viewport =
          null;
    },
    j: md,
  });
  Pe.__name__ = "20";
  Pe.__isInterface__ = !0;
  Pe.prototype = { j: Pe };
  nc.__name__ = "21";
  nc.__isInterface__ = !0;
  db.__name__ = "22";
  db.__interfaces__ = [Sb, nc];
  db.prototype = {
    H: function () {
      db.count--;
      if (this.D.connected) {
        for (var a = this.ha.qa; null != a; )
          this.F.ti.Gt(a.node.ga), (a = a.next);
        this.F.Up(this);
      }
      this.F.ba.Vk(this);
      this.F.ob.remove(this);
      this.gd.m();
      this.gd = null;
      null != this.client && this.client.Hl(this);
      this.client = null;
      a = this.F;
      for (var b = a.list; null != b; )
        (a.next = b.next), (a.current = b.Fa), b.Fa.Hl(this), (b = a.next);
      a.next = null;
      this.B = this.Ba = this.force = this.ha = this.F = a.current = null;
      this.D.Je = !0;
    },
    $a: function (a) {
      a.R(this);
      a.enabled = !0;
      var b = this.gd;
      b.g == b.u && b.O();
      b.c[b.g++] = a;
    },
    rc: function (a, b) {
      if (null != a) return this.rc(null, this.Le(a));
      if (null == b) return !1;
      b.enabled = !1;
      return this.gd.remove(b);
    },
    Le: function (a) {
      for (var b = this.gd.c, c = 0, d = this.gd.g; c < d; ) {
        var e = c++;
        if (B.wf(b[e], a)) return b[e];
      }
      return null;
    },
    cw: function (a) {
      for (var b = this.gd.c, c = 0, d = this.gd.g; c < d; ) {
        var e = c++;
        B.wf(b[e], a) && (b[e].enabled = !0);
      }
    },
    uq: function (a) {
      this.F.Vd(this.Va, this.Ma, a);
    },
    Ah: function () {
      this.uq(this.B);
    },
    Fp: function (a) {
      this.code = a;
      null != this.client && this.client.ev(this, a, this.code);
    },
    disconnect: function () {
      this.F.Up(this);
    },
    Dq: function (a) {
      this.F.viewport.yt(this.B, a);
    },
    xx: function (a) {
      var b = this.B,
        c = a.B,
        d = c.b - b.b;
      b = c.a - b.a;
      a = this.aa + a.aa;
      return d * d + b * b < a * a;
    },
    Ss: function (a, b, c) {
      null == c && (c = -1);
      null == b && (b = -1);
      if (null == a || a.D.Je || this.D.Je) return !1;
      b = -1 == b ? this.ck : b;
      c = -1 == c ? a.ck : c;
      var d = this.B,
        e = a.B,
        f = d.b - e.b,
        g = d.a - e.a,
        h = f * f + g * g;
      a = this.aa + a.aa;
      return h < a * a
        ? ((h = Math.sqrt(h)),
          (f /= h),
          (g /= h),
          (a = a - h + 0.01),
          (h = 1 / (b + c)),
          (d.b += f * a * b * h),
          (d.a += g * a * b * h),
          (e.b -= f * a * c * h),
          (e.a -= g * a * c * h),
          !0)
        : !1;
    },
    $n: function (a) {
      if (!this.D.Je) {
        var b = this.B;
        b = b.b * a.b + b.a * a.a - va.Sg(a);
        b <= this.aa &&
          ((b = this.aa - b + 0.01),
          (this.B.b += b * a.b),
          (this.B.a += b * a.a));
      }
    },
    m: function () {
      this.gd =
        this.qv =
        this.force =
        this.Ba =
        this.B =
        this.ha =
        this.client =
        this.F =
          null;
    },
    j: db,
  };
  Oe.__name__ = "23";
  Oe.prototype = { j: Oe };
  Ne.__name__ = "24";
  Ne.__isInterface__ = !0;
  Ne.prototype = { j: Ne };
  Tf.__name__ = "25";
  Tf.prototype = {
    test: function () {
      var a = this.$j.b - this.Zj.b,
        b = this.$j.a - this.Zj.a,
        c = this.Km.b - this.bk.b,
        d = this.Km.a - this.bk.a,
        e = this.Sq + this.Lm,
        f = a * a + b * b - e * e;
      if (0 > f) return (this.af = 0), !0;
      e = c * c + d * d;
      if (1e-6 > e) return !1;
      a = c * a + d * b;
      if (0 <= a) return !1;
      b = a * a - e * f;
      if (0 > b) return !1;
      this.af = (-a - Math.sqrt(b)) / e;
      return !0;
    },
    j: Tf,
  };
  Rb.__name__ = "26";
  Rb.__isInterface__ = !0;
  Rb.__interfaces__ = [nc];
  Xf.__name__ = "27";
  Xf.__isInterface__ = !0;
  Xf.__interfaces__ = [Rb];
  L.__name__ = "28";
  L.__interfaces__ = [Xf];
  L.prototype = {
    add: function (a) {
      this.g == this.u && this.O();
      this.c[this.g++] = a;
    },
    Js: function (a) {
      for (var b = this.c, c = b[a], d = --this.g; a < d; ) b[a++] = b[a];
      return c;
    },
    sort: function (a, b, c, d) {
      null == d && (d = -1);
      null == c && (c = 0);
      null == b && (b = !1);
      1 < this.g &&
        (-1 == d && (d = this.g - c),
        null == a
          ? b
            ? this.wx(c, d)
            : this.Qn(c, d)
          : b
          ? this.vx(a, c, d)
          : this.Pn(c, d, a));
      return this;
    },
    vx: function (a, b, c) {
      for (var d, e, f = this.c, g = b + 1, h = b + c; g < h; ) {
        d = g++;
        for (c = f[d]; d > b; )
          if (((e = f[d - 1]), 0 < a(e, c))) (f[d] = e), --d;
          else break;
        f[d] = c;
      }
      return this;
    },
    Pn: function (a, b, c) {
      var d = a + b - 1,
        e = a,
        f = d,
        g = this.c;
      if (1 < b) {
        var h = a + (b >> 1);
        b = a + b - 1;
        var k = g[a];
        var m = g[h];
        var x = g[b];
        var u = c(k, x);
        h =
          0 > u && 0 > c(k, m)
            ? 0 > c(m, x)
              ? h
              : b
            : 0 > c(m, k) && 0 > c(m, x)
            ? 0 > u
              ? a
              : b
            : 0 > c(x, k)
            ? h
            : a;
        b = g[h];
        for (g[h] = g[a]; e < f; ) {
          for (; 0 > c(b, g[f]) && e < f; ) --f;
          f != e && ((g[e] = g[f]), ++e);
          for (; 0 < c(b, g[e]) && e < f; ) ++e;
          f != e && ((g[f] = g[e]), --f);
        }
        g[e] = b;
        this.Pn(a, e - a, c);
        this.Pn(e + 1, d - e, c);
      }
    },
    Qn: function (a, b) {
      var c = this.c,
        d = a + b - 1,
        e = a,
        f = d;
      if (1 < b) {
        var g = a + (b >> 1);
        b = a + b - 1;
        var h = c[a];
        var k = c[g];
        var m = c[b];
        var x = h.compare(m);
        g =
          0 > x && 0 > h.compare(k)
            ? 0 > k.compare(m)
              ? g
              : b
            : 0 > k.compare(h) && 0 > k.compare(m)
            ? 0 > x
              ? a
              : b
            : 0 > m.compare(h)
            ? g
            : a;
        b = c[g];
        for (c[g] = c[a]; e < f; ) {
          for (; 0 > b.compare(c[f]) && e < f; ) --f;
          f != e && ((c[e] = c[f]), ++e);
          for (; 0 < b.compare(c[e]) && e < f; ) ++e;
          f != e && ((c[f] = c[e]), --f);
        }
        c[e] = b;
        this.Qn(a, e - a);
        this.Qn(e + 1, d - e);
      }
    },
    wx: function (a, b) {
      for (var c = this.c, d, e, f, g, h = a + 1, k = a + b; h < k; ) {
        d = h++;
        for (f = b = c[d]; d > a; )
          if (((g = e = c[d - 1]), 0 < f.compare(g))) (c[d] = e), --d;
          else break;
        c[d] = b;
      }
    },
    Lc: function (a) {
      a > this.u && ((this.u = a), this.oe(a));
      return this;
    },
    resize: function (a) {
      a < this.g
        ? ((this.u = this.g = a),
          this.u < this.Ve && (this.u = this.Ve),
          this.oe(this.u))
        : (this.Lc(a), (this.g = a));
      return this;
    },
    R: function (a, b) {
      this.Lc(a);
      this.g = a;
      for (var c = this.c, d = 0; d < a; ) {
        var e = d++;
        c[e] = b;
      }
      return this;
    },
    of: function (a) {
      this.g = 0;
      this.Lc(a.g);
      R.ib(a.c, 0, this.c, 0, a.g);
      this.g = a.g;
      return this;
    },
    O: function () {
      this.u = dc.Ie(this.Fc, this.u);
      this.oe(this.u);
    },
    oe: function (a) {
      a = Array(a);
      R.ib(this.c, 0, a, 0, this.g);
      this.c = a;
    },
    m: function () {
      R.ge(this.c);
      this.c = null;
      null != this.bb && (this.bb.m(), (this.bb = null));
    },
    contains: function (a) {
      for (var b = this.c, c = 0, d = this.g; c < d; ) {
        var e = c++;
        if (b[e] == a) return !0;
      }
      return !1;
    },
    remove: function (a) {
      if (this.Wg()) return !1;
      for (var b = 0, c, d, e = this.g, f = this.c; b < e; )
        if (f[b] == a) {
          for (c = b + 1; c < e; )
            if (f[c] == a) ++c;
            else break;
          d = c - b;
          e -= d;
          for (d = b; d < e; ) (f[d] = f[c++]), ++d;
        } else ++b;
      a = 0 != this.g - e;
      this.g = e;
      return a;
    },
    iterator: function () {
      if (this.Mc) {
        if (null == this.bb) this.bb = new fd(this);
        else {
          var a = this.bb;
          a.c = a.gb.c;
          a.cb = a.gb.g;
          a.wa = 0;
        }
        return this.bb;
      }
      return new fd(this);
    },
    Wg: function () {
      return 0 == this.g;
    },
    we: function () {
      return R.we(this.c, 0, this.g, []);
    },
    clone: function (a, b) {
      null == a && (a = !0);
      var c = new L(this.u);
      c.g = this.g;
      var d = this.c,
        e = c.c;
      if (a) R.ib(d, 0, e, 0, this.g);
      else if (null == b) {
        a = 0;
        for (var f = this.g; a < f; ) {
          var g = a++;
          e[g] = d[g].clone();
        }
      } else for (a = 0, f = this.g; a < f; ) (g = a++), (e[g] = b(d[g]));
      return c;
    },
    j: L,
  };
  Fc.__name__ = "29";
  Fc.vA = function (a) {
    var b = Fc.vc;
    b.g = 0;
    b = a.ob;
    for (var c = b.c, d = 0, e = b.g; d < e; )
      (a = d++),
        (a = c[a]),
        !a.D.Cg ||
          a.D.loaded ||
          a.D.tc ||
          ((b = Fc.vc), b.g == b.u && b.O(), (b.c[b.g++] = a));
    b = Fc.vc;
    a = 0;
    c = b.g;
    for (d = c - 1; a < d; ) {
      for (b = a + 1; b < c; ) ++b;
      ++a;
    }
  };
  Wf.__name__ = "2A";
  Wf.prototype = {
    update: function () {
      for (var a = this.F.ob.iterator(); a.Y(); ) {
        var b = a.next();
        b.D.connected && this.Gt(b);
      }
    },
    Gt: function (a) {
      a.D.Ic = !1;
      if (null != a.ha) {
        for (var b = 0, c = a.ha.qa; null != c; ) ++b, (c = c.next);
        if (6 == b) a.D.Ic = !0;
        else {
          c = a.Va;
          var d = a.Ma,
            e = d == this.F.hc;
          if (this.fw)
            if (e && 4 == b) a.D.Ic = !0;
            else {
              var f = 1 == this.F.cd ? 0 : 1,
                g = this.F.cols - 1;
              if (0 == this.F.ng) {
                if (0 == c || c == g - ((d + 1) & 1))
                  e
                    ? b == 2 + f && (a.D.Ic = !0)
                    : 1 == (d & 1)
                    ? b == 5 - 2 * f && (a.D.Ic = !0)
                    : b == 3 + 2 * f && (a.D.Ic = !0);
              } else
                0 == c
                  ? e
                    ? b == 2 + f && (a.D.Ic = !0)
                    : 1 == (d & 1)
                    ? b == 5 - 2 * f && (a.D.Ic = !0)
                    : b == 3 + 2 * f && (a.D.Ic = !0)
                  : c == g &&
                    (e
                      ? b == 3 - f && (a.D.Ic = !0)
                      : 1 == (d & 1)
                      ? b == 3 + 2 * f && (a.D.Ic = !0)
                      : b == 5 - 2 * f && (a.D.Ic = !0));
            }
        }
      }
    },
    j: Wf,
  };
  Me.__name__ = "2B";
  Me.prototype = {
    m: function () {
      for (var a = this.map.keys(); a.Y(); ) {
        var b = a.next();
        this.map.remove(b);
      }
      this.map = null;
    },
    Wa: function (a, b) {
      return -1 != a
        ? this.map.C.hasOwnProperty(((b + 16777215) << 6) | a)
        : !1;
    },
    get: function (a, b) {
      return this.map.C[((b + 16777215) << 6) | a];
    },
    set: function (a, b, c) {
      this.map.C[((b + 16777215) << 6) | a] = c;
    },
    xl: function (a) {
      this.set(a.Va, a.Ma, a);
    },
    Vk: function (a) {
      this.Wa(a.Va, a.Ma) &&
        this.get(a.Va, a.Ma) == a &&
        this.map.remove(((a.Ma + 16777215) << 6) | a.Va);
    },
    clone: function () {
      var a = Object.create(Me.prototype);
      try {
        (a.map = new Ra()), (a.map.C = Object.assign({}, this.map.C));
      } catch (b) {
        a.map = this.map.Ql();
      }
      a.F = this.F;
      return a;
    },
    iterator: function () {
      for (var a = [], b = this.map.keys(); b.Y(); ) {
        var c = b.next();
        a.push(this.map.C[c]);
      }
      return new Dc(a);
    },
    j: Me,
  };
  Vf.__name__ = "2C";
  Vf.prototype = {
    Y: function () {
      return this.cursor < this.size;
    },
    next: function () {
      return this.list[this.cursor++];
    },
    R: function (a, b, c) {
      null == c && (c = !1);
      this.cursor = this.size = 0;
      var d = this.cols,
        e = (b & 1) == this.qz ? 1 : 0,
        f = a + 1;
      if (0 <= f && f < d) {
        var g = this.ba.get(f, b);
        null != g
          ? (this.list[this.size++] = g)
          : c && (this.list[this.size++] = this.Ig(f, b));
      }
      f = a + e;
      var h = b + 1;
      0 <= f &&
        f < d &&
        ((g = this.ba.get(f, h)),
        null != g
          ? (this.list[this.size++] = g)
          : c && (this.list[this.size++] = this.Ig(f, h)));
      f = a - 1 + e;
      h = b + 1;
      0 <= f &&
        f < d &&
        ((g = this.ba.get(f, h)),
        null != g
          ? (this.list[this.size++] = g)
          : c && (this.list[this.size++] = this.Ig(f, h)));
      f = a - 1;
      0 <= f &&
        f < d &&
        ((g = this.ba.get(f, b)),
        null != g
          ? (this.list[this.size++] = g)
          : c && (this.list[this.size++] = this.Ig(f, b)));
      f = a - 1 + e;
      h = b - 1;
      0 <= f &&
        f < d &&
        ((g = this.ba.get(f, h)),
        null != g
          ? (this.list[this.size++] = g)
          : c && (this.list[this.size++] = this.Ig(f, h)));
      f = a + e;
      h = b - 1;
      0 <= f &&
        f < d &&
        ((g = this.ba.get(f, h)),
        null != g
          ? (this.list[this.size++] = g)
          : c && (this.list[this.size++] = this.Ig(f, h)));
      return this;
    },
    Ig: function (a, b) {
      var c = Object.create(db.prototype);
      c.code = 0;
      c.Va = a;
      c.Ma = b;
      return c;
    },
    j: Vf,
  };
  Ba.__name__ = "2D";
  Ba.prototype = {
    nm: function () {
      for (var a = this.Ff(), b = [], c = 1; c < a.length; )
        0 < a[c] && b.push(c), ++c;
      return b;
    },
    Ff: function () {
      var a = 0;
      this.ba.Se(function (b) {
        b > a && (a = b);
      });
      a += 1;
      var b = Array(a);
      Mc.R(b, 0, 0, a);
      this.ba.Se(function (a) {
        b[a]++;
      });
      return b;
    },
    Kv: function () {
      for (var a = 0, b = this.ba.iterator(); b.Y(); ) 0 < b.next() && ++a;
      return a;
    },
    Cv: function () {
      function a(a, d) {
        var g = e + a,
          m = f + d;
        0 <= g &&
          g < b &&
          0 <= m &&
          m < c &&
          ((h = (h |= (a + 1) << k) | ((d + 1) << (k + 2))), (k += 4));
      }
      var b = this.ba.ca,
        c = this.ba.ua,
        d = (this.gy = new gc(b, c)),
        e = 0,
        f = 0;
      for (f = 0; f < c; ) {
        var g = (f & 1) == this.cd ? 1 : 0;
        for (e = 0; e < b; ) {
          var h = 0;
          var k = 3;
          a(1, 0);
          a(g, 1);
          a(-1 + g, 1);
          a(-1, 0);
          a(-1 + g, -1);
          a(g, -1);
          h |= (k - 3) >> 2;
          d.c[f * d.ca + e] = h;
          e += 1;
        }
        f += 1;
      }
      return d;
    },
    jw: function (a, b, c) {
      var d = [],
        e = this.Kw(a, b, d);
      a = this.ba;
      var f = 0;
      a.Se(function (a) {
        a > f && (f = a);
      });
      f += 1;
      b = [];
      for (var g = 0, h = f; g < h; ) {
        var k = g++;
        b.push(0);
      }
      null == e && (e = -1);
      k = 0;
      for (e = -1 < e ? e : d.length; k < e; )
        b[a.c[d[k + 1] * a.ca + d[k]]]++, (k += 2);
      for (e = 0; 0 < --f; ) 0 < b[f] && (c[e++] = f);
      return e;
    },
    fm: function (a, b, c) {
      var d = this.gy;
      d = d.c[b * d.ca + a];
      var e = d & 7;
      d >>= 3;
      for (var f = 0, g = 0; f < e; )
        (c[g++] = a + ((d & 3) - 1)),
          (c[g++] = b + (((d >> 2) & 3) - 1)),
          (d >>= 4),
          ++f;
      return g;
    },
    lw: function (a, b, c) {
      var d = 0,
        e = ++this.timeStamp,
        f = this.marks;
      var g = this.ba;
      var h = g.c[b * g.ca + a],
        k = 0;
      Ba.stack[k++] = a;
      Ba.stack[k++] = b;
      for (f.c[b * f.ca + a] = e; 0 < k; )
        for (
          b = Ba.stack[--k],
            g = Ba.stack[--k],
            c[d++] = g,
            c[d++] = b,
            a = 0,
            b = this.fm(g, b, Ba.yg);
          a < b;

        ) {
          var m = Ba.yg[a++];
          var x = Ba.yg[a++];
          f.c[x * f.ca + m] != e &&
            ((f.c[x * f.ca + m] = e),
            (g = this.ba),
            g.c[x * g.ca + m] == h &&
              ((Ba.stack[k++] = m), (Ba.stack[k++] = x)));
        }
      return d;
    },
    Kw: function (a, b, c, d) {
      var e = ++this.timeStamp,
        f = this.marks,
        g = [],
        h = 0,
        k,
        m = 0;
      for (b = this.lw(a, b, g); m < b; ) {
        var x = g[m++];
        var u = g[m++];
        f.c[u * f.ca + x] = e;
      }
      for (m = 0; m < b; )
        for (x = g[m++], u = g[m++], a = 0, k = this.fm(x, u, Ba.yg); a < k; )
          (x = Ba.yg[a++]),
            (u = Ba.yg[a++]),
            f.c[u * f.ca + x] == e ||
              (null != d && !d(x, u)) ||
              ((f.c[u * f.ca + x] = e), (c[h++] = x), (c[h++] = u));
      return h;
    },
    j: Ba,
  };
  Ye.__name__ = "2E";
  Ye.prototype = {
    Yx: function (a, b) {
      this.Sz(a);
      a = 0;
      b[a++] = this.Ka.x;
      for (
        b[a++] = this.Ka.y;
        (null == this.No ||
          this.No(this.Qk.x, this.Qk.y, this.Ka.x, this.Ka.y)) &&
        this.step();

      ) {
        b[a++] = this.Ka.x;
        b[a++] = this.Ka.y;
        var c = this.Ka,
          d = this.start;
        if (c.x == d.x && c.y == d.y) break;
      }
      return a;
    },
    Sz: function (a) {
      var b = this.start;
      b.x = a.x;
      b.y = a.y;
      b = this.Ka;
      b.x = a.x;
      b.y = a.y;
      this.direction = 0;
      b = this.Qk;
      b.x = -1;
      b.y = -1;
      this.Bs = 0;
      this.td = this.getState();
    },
    step: function () {
      var a = this.an;
      this.direction = a.c[this.Bs * a.ca + this.td];
      if (63 == this.td) return !1;
      if (0 == this.direction) {
        debugger;
        return !1;
      }
      this.Bs = this.direction;
      a = this.Qk;
      var b = this.Ka;
      a.x = b.x;
      a.y = b.y;
      var c = (b = -1);
      switch (this.direction) {
        case 1:
          b = 0 == this.fi(this.Ka.y) ? this.Ka.x - 1 : this.Ka.x;
          c = this.Ka.y + 1;
          break;
        case 2:
          c = this.Ka.y + 1;
          b = this.Ka.x + this.fi(this.Ka.y);
          break;
        case 3:
          c = this.Ka.y;
          b = this.Ka.x + 1;
          break;
        case 4:
          b = this.Ka.x + this.fi(this.Ka.y);
          c = this.Ka.y - 1;
          break;
        case 5:
          b = this.Ka.x + this.fi(this.Ka.y) - 1;
          c = this.Ka.y - 1;
          break;
        case 6:
          (b = this.Ka.x - 1), (c = this.Ka.y);
      }
      if (!this.Jm.Wa(b, c)) return !1;
      a = this.Ka;
      a.x = b;
      a.y = c;
      this.td = this.getState();
      return !0;
    },
    fi: function (a) {
      return (a & 1) == this.Uq ? 1 : 0;
    },
    getState: function () {
      function a(a, c) {
        return null == b.get(a, c);
      }
      var b = this.Jm,
        c = this.Ka.x,
        d = this.Ka.y,
        e = this.fi(d),
        f = 0;
      0 == e
        ? 0 < c
          ? (a(c - 1, d + 1) && (f |= 1),
            a(c - 1, d - 1) && (f |= 8),
            a(c - 1, d) && (f |= 4))
          : (f |= 13)
        : (a(c - 1 + e, d + 1) && (f |= 1),
          a(c - 1 + e, d - 1) && (f |= 8),
          0 < c ? a(c - 1, d) && (f |= 4) : (f |= 4));
      0 == e
        ? (a(c, d + 1) && (f |= 2), a(c, d - 1) && (f |= 16))
        : (a(c + e, d + 1) && (f |= 2), a(c + e, d - 1) && (f |= 16));
      a(c + 1, d) && (f |= 32);
      return f;
    },
    kv: function () {
      function a(a, c, d) {
        var e = b.an;
        e.c[c * e.ca + a] = d;
      }
      for (var b = this, c = 0; 64 > c; )
        for (var d = c++, e = 0; 7 > e; ) {
          var f = e++;
          a(d, f, 0);
        }
      a(63, 0, 0);
      a(34, 0, 4);
      a(34, 4, 4);
      a(2, 0, 3);
      a(2, 4, 3);
      a(2, 3, 2);
      a(33, 0, 2);
      a(33, 3, 2);
      a(41, 0, 4);
      a(41, 3, 2);
      a(41, 5, 4);
      a(54, 0, 5);
      a(54, 4, 5);
      a(54, 2, 1);
      a(57, 0, 6);
      a(57, 5, 6);
      a(26, 0, 6);
      a(26, 6, 6);
      a(26, 4, 3);
      a(16, 0, 5);
      a(16, 6, 5);
      a(60, 0, 1);
      a(60, 5, 1);
      a(60, 4, 2);
      a(8, 0, 6);
      a(8, 1, 6);
      a(45, 0, 2);
      a(45, 5, 4);
      a(45, 1, 2);
      a(61, 0, 2);
      a(61, 5, 2);
      a(47, 1, 4);
      a(5, 0, 2);
      a(5, 2, 2);
      a(39, 2, 4);
      a(39, 0, 4);
      a(23, 0, 3);
      a(23, 6, 5);
      a(23, 2, 3);
      a(55, 0, 5);
      a(55, 2, 5);
      a(44, 0, 4);
      a(44, 5, 4);
      a(44, 1, 1);
      a(62, 0, 1);
      a(62, 4, 1);
      a(9, 0, 2);
      a(9, 3, 2);
      a(9, 1, 6);
      a(22, 0, 3);
      a(22, 6, 5);
      a(22, 2, 1);
      a(22, 4, 3);
      a(43, 0, 4);
      a(43, 3, 4);
      a(43, 1, 6);
      a(53, 0, 5);
      a(53, 5, 5);
      a(53, 2, 2);
      a(30, 0, 1);
      a(30, 6, 1);
      a(30, 4, 3);
      a(42, 0, 6);
      a(42, 1, 6);
      a(25, 0, 6);
      a(25, 6, 6);
      a(25, 3, 2);
      a(37, 0, 2);
      a(37, 5, 4);
      a(37, 2, 2);
      a(11, 0, 3);
      a(11, 3, 3);
      a(11, 1, 6);
      a(19, 0, 3);
      a(19, 3, 3);
      a(19, 6, 5);
      a(40, 0, 6);
      a(40, 1, 6);
      a(40, 5, 4);
      a(48, 0, 5);
      a(48, 5, 5);
      a(56, 0, 6);
      a(56, 5, 6);
      a(56, 3, 2);
      a(31, 0, 3);
      a(31, 6, 3);
      a(4, 0, 1);
      a(4, 2, 1);
      a(4, 4, 5);
      a(28, 0, 1);
      a(28, 6, 1);
      a(12, 0, 1);
      a(12, 1, 1);
      a(12, 4, 4);
      a(32, 0, 4);
      a(32, 5, 4);
      a(50, 0, 5);
      a(50, 4, 5);
      a(13, 0, 2);
      a(13, 1, 2);
      a(36, 0, 1);
      a(36, 2, 1);
      a(36, 0, 1);
      a(36, 2, 1);
      a(36, 5, 4);
      a(7, 0, 3);
      a(7, 2, 3);
      a(1, 0, 2);
      a(1, 3, 2);
      a(3, 0, 3);
      a(3, 3, 3);
      a(35, 3, 4);
      a(35, 0, 4);
      a(58, 0, 6);
      a(58, 4, 6);
      a(24, 0, 6);
      a(24, 6, 6);
      a(15, 0, 3);
      a(15, 1, 3);
      a(51, 0, 5);
      a(51, 3, 5);
      a(52, 0, 1);
      a(52, 2, 1);
      a(52, 5, 5);
      a(29, 0, 2);
      a(29, 6, 2);
      a(29, 5, 3);
      a(20, 0, 5);
      a(20, 6, 5);
      a(20, 2, 1);
      a(59, 0, 6);
      a(59, 3, 6);
      a(27, 0, 6);
      a(27, 6, 6);
      a(27, 3, 3);
      a(14, 0, 1);
      a(14, 1, 1);
      a(14, 4, 4);
      c = this.an.we().toString();
      d = /,/g;
      c = c.replace(d, "");
      d = /0{7}/g;
      c = c.replace(d, "7");
      d = /0{8}/g;
      c = c.replace(d, "8");
    },
    j: Ye,
  };
  Uf.__name__ = "2F";
  Uf.prototype = {
    m: function () {
      this.ii.m();
      this.ii = null;
      this.hi.m();
      this.F = this.hi = null;
      this.set.m();
      this.set = null;
    },
    Vh: function () {
      return this.ii.next();
    },
    Op: function () {
      return this.hi.next();
    },
    hq: function (a, b) {
      var c = new L();
      a = this.fq(a, b);
      if (a.Wg()) return c;
      for (var d = a.iterator(); d.wa < d.cb; )
        (a = d.c[d.wa++]),
          this.Fx(a) ? d.remove() : this.Hx(a) && (d.remove(), c.add(a));
      d.c = d.gb.c;
      d.cb = d.gb.g;
      for (d.wa = 0; d.wa < d.cb; ) (a = d.c[d.wa++]), this.Bx(a) && d.remove();
      var e = this.Vh();
      this.clearMarks();
      d.c = d.gb.c;
      d.cb = d.gb.g;
      for (d.wa = 0; d.wa < d.cb; )
        (a = d.c[d.wa++]),
          this.F.ab.Lj(!1, a.c[0].ha, function (a) {
            e.add(a.ga);
            return !0;
          });
      for (a = this.fq(e, b).iterator(); a.Y(); ) (b = a.next()), c.add(b);
      return c;
    },
    Fx: function (a) {
      for (a = a.iterator(); a.wa < a.cb; ) {
        var b = a.c[a.wa++];
        if (b.Ma == b.F.hc) return !0;
      }
      return !1;
    },
    Bx: function (a) {
      this.clearMarks();
      var b = !1;
      this.F.ab.Lj(!1, a.c[0].ha, function (a) {
        a = a.ga;
        return a.Ma == a.F.hc ? ((b = !0), !1) : !0;
      });
      return b;
    },
    Hx: function (a) {
      for (a = a.iterator(); a.Y(); )
        for (var b = a.next().ha.qa; null != b; ) {
          if (b.node.visible) return !1;
          b = b.next;
        }
      return !0;
    },
    wr: function (a, b, c) {
      this.clearMarks();
      this.F.ab.Lj(!0, a.ha, function (d, e) {
        if (e) return c(d.ga, a);
        b.add(d.ga);
        return !0;
      });
      return b;
    },
    fq: function (a, b) {
      var c = this.Op(),
        d = this.Vh();
      d.Lc(a.g);
      this.clearMarks();
      for (a = a.iterator(); a.wa < a.cb; ) {
        var e = [a.c[a.wa++]];
        e[0].D.connected &&
          !e[0].ha.oa &&
          ((d.g = 0),
          this.F.ab.Lj(
            !0,
            e[0].ha,
            (function (a) {
              return function (c, e) {
                c = c.ga;
                if (e) return null == b ? c.code == a[0].code : b(c, a[0]);
                d.g == d.u && d.O();
                d.c[d.g++] = c;
                return !0;
              };
            })(e)
          ),
          0 < d.g && ((e = this.Vh().of(d)), c.add(e)));
      }
      return c;
    },
    iq: function (a, b, c) {
      this.clearMarks();
      this.Zx(a);
      var d = a.iterator();
      for (a = d; a.wa < a.cb; ) {
        var e = a.c[a.wa++];
        e.ha.oa = !0;
      }
      this.set.clear();
      d.c = d.gb.c;
      d.cb = d.gb.g;
      d.wa = 0;
      for (a = d; a.wa < a.cb; )
        for (e = a.c[a.wa++], d = e.ha.qa; null != d; ) {
          e = d.node;
          if (!e.oa) {
            if (null != c ? c(e.ga) : 1) {
              var f = this.set;
              var g = e.ga.key,
                h = (73856093 * g) & f.Cd,
                k = f.c,
                m = f.Hc[h];
              if (-1 == m)
                f.g == f.u && (f.O(), (k = f.c)),
                  (m = 3 * f.Kb),
                  (f.Kb = f.ac[f.Kb]),
                  (f.Hc[h] = m),
                  (k[m] = g),
                  (k[m + 1] = 1),
                  f.g++,
                  (f = !0);
              else if (k[m] == g) f = !1;
              else {
                for (h = k[m + 2]; -1 != h; ) {
                  if (k[h] == g) {
                    m = -1;
                    break;
                  }
                  m = h;
                  h = k[m + 2];
                }
                -1 == m
                  ? (f = !1)
                  : (f.g == f.u && (f.O(), (k = f.c)),
                    (h = 3 * f.Kb),
                    (f.Kb = f.ac[f.Kb]),
                    (k[m + 2] = h),
                    (k[h] = g),
                    (k[h + 1] = 1),
                    f.g++,
                    (f = !0));
              }
            } else f = !1;
            f && b.add(e.ga);
            e.oa = !0;
          }
          d = d.next;
        }
    },
    complete: function () {
      this.ii.Hs();
      for (var a = this.ii.iterator(); a.wa < a.cb; ) {
        var b = a.c[a.wa++],
          c = !0;
        null == c && (c = !1);
        c && R.ge(b.c);
        b.g = 0;
      }
      this.hi.Hs();
      for (a = this.hi.iterator(); a.wa < a.cb; )
        (b = a.c[a.wa++]),
          (c = !0),
          null == c && (c = !1),
          c && R.ge(b.c),
          (b.g = 0);
    },
    Zx: function (a) {
      var b = a.c,
        c = 0;
      for (a = a.g; c < a; ) {
        var d = c++;
        b[d].ha.oa = !0;
      }
    },
    clearMarks: function () {
      this.F.ab.clearMarks();
    },
    j: Uf,
  };
  Le.__name__ = "30";
  Le.prototype = {
    m: function () {
      this.jg.m();
      this.eq = this.jg = null;
    },
    iterator: function () {
      return this.jg.iterator();
    },
    next: function () {
      if (this.Ko < this.size) return this.jg.c[this.Ko++];
      var a = this.eq();
      this.jg.add(a);
      return a;
    },
    Hs: function () {
      this.Ko = 0;
      this.size = this.jg.g;
    },
    j: Le,
  };
  Ke.__name__ = "31";
  Ke.__interfaces__ = [Sb];
  Ke.prototype = {
    dt: function (a, b) {
      this.cf.c[a] = b;
    },
    Cj: function (a, b, c) {
      var d = this.ar;
      this.wd = -1;
      this.Fg = null;
      for (var e = 0, f = this.qc.iterator(); f.wa < f.cb; ) {
        var g = f.c[f.wa++];
        0 != (this.Ou & (1 << e)) &&
          d.iw(a.b, a.a, a.f, b.b, b.a, g.b, g.a, va.Sg(g)) &&
          0 < d.t &&
          d.t < c &&
          ((c = d.t), (this.Fg = g), (this.wd = e));
        ++e;
      }
      return c;
    },
    te: function () {
      for (var a = 0; 4 > a; ) {
        var b = a++;
        this.cf.c[b](this.qc.c[b]);
      }
    },
    m: function () {
      this.qc.m();
      this.F = this.ar = this.cf = this.qc = this.Fg = null;
    },
    j: Ke,
  };
  Je.__name__ = "32";
  Je.__interfaces__ = [Sb];
  Je.prototype = {
    reset: function () {
      var a = this.$h;
      a.g = 0;
      a = this.Eg;
      a.g = 0;
    },
    m: function () {
      this.$h.m();
      this.Eg.m();
      this.Eg = this.Fi = this.Hn = this.Ke = this.$h = null;
    },
    j: Je,
  };
  Ie.__name__ = "33";
  Ie.__interfaces__ = [Sb];
  Ie.prototype = {
    Ii: function (a, b, c) {
      this.result.Hn = null;
      this.result.Fi = null;
      this.result.Ke = null;
      this.result.Gn = -1;
      var d = this.aj;
      d.b = a.b;
      d.a = a.a;
      d.f = a.f;
      d.d = a.d;
      var e = this.aj,
        f = this.IA;
      f.b = e.b;
      f.a = e.a;
      f.f = b;
      this.test.Vg = e;
      this.test.Rq = b;
      a = this.result.$h;
      a.g = 0;
      var g = e.b;
      a.g == a.u && a.O();
      a.c[a.g++] = g;
      g = e.a;
      a.g == a.u && a.O();
      a.c[a.g++] = g;
      var h = this.F.Mb,
        k = 0;
      if (0 < (this.Sb & 8)) {
        g = this.F.ob;
        d = g.c;
        var m = 0;
        for (g = g.g; m < g; ) {
          var x = m++;
          d[x].D.Cm = !1;
        }
      }
      d = this.Rk;
      g = this.F.Gd;
      d.b = g.b;
      d.a = g.a;
      d.f = g.f;
      d.d = g.d;
      kb.offset(this.Rk, b, b);
      for (b = 0; b++ < c + 1; ) {
        d = this.uo;
        d.b = e.f;
        d.a = e.d;
        m = h.Cj(f, d, Infinity);
        g = Infinity;
        x = this.ji.Tf;
        x.b = e.b;
        x.a = e.a;
        x = this.ji.Sf;
        x.b = d.b;
        x.a = d.a;
        this.ji.Qq = this.Rk;
        if (
          this.ji.test() &&
          ((g = this.result.Eg),
          (g.g = 0),
          this.test.reset(),
          (this.test.Mm = 0 < (this.Sb & 8) && 1 == b),
          (this.test.Tq = 0 < (this.Sb & 16)),
          this.test.Pi(),
          (g = this.test.Hk),
          this.test.Mm)
        )
          for (x = this.test.ph.iterator(); x.Y(); ) {
            var u = x.next(),
              p = this.result.Eg;
            p.g == p.u && p.O();
            p.c[p.g++] = u;
          }
        k += Math.min(m, g);
        if (m < g) {
          this.result.Gn = h.wd;
          e.b += e.f * m;
          e.a += e.d * m;
          g = e.b;
          a.g == a.u && a.O();
          a.c[a.g++] = g;
          g = e.a;
          a.g == a.u && a.O();
          a.c[a.g++] = g;
          if (2 == h.wd && 0 == (this.Sb & 2)) break;
          if (0 == h.wd && 0 == (this.Sb & 1)) break;
          g = e.a;
          f.b = e.b;
          f.a = g;
          g = h.Fg;
          m = g.a;
          x = new r();
          x.b = g.b;
          x.a = m;
          ag.ez(x, d);
          e.f = d.b;
          e.d = d.a;
        } else
          return (
            (this.result.Hn = this.test.Jk),
            (this.result.Fi = this.test.Ik),
            (this.result.Ke = this.test.fg),
            (e.b += d.b * g),
            (e.a += d.a * g),
            (c = e.b),
            a.g == a.u && a.O(),
            (a.c[a.g++] = c),
            (c = e.a),
            a.g == a.u && a.O(),
            (a.c[a.g++] = c),
            g
          );
      }
      return k;
    },
    m: function () {
      this.result.m();
      this.test.m();
      this.F =
        this.ji =
        this.Rk =
        this.aj =
        this.uo =
        this.test =
        this.result =
          null;
    },
    j: Ie,
  };
  He.__name__ = "34";
  He.__interfaces__ = [Sb];
  He.prototype = {
    reset: function () {},
    Pi: function () {
      this.Hk = this.qs = Infinity;
      this.fg = null;
      var a = this.ph;
      a.g = 0;
      var b = this.Vg.b,
        c = this.Vg.a,
        d = this.Vg.f,
        e = this.Vg.d,
        f = this.st;
      f.Zj.b = b;
      f.Zj.a = c;
      f.bk.b = d;
      f.bk.a = e;
      a = f.Km;
      a.b = 0;
      a.a = 0;
      var g = this.tt;
      g.Tf.b = b;
      g.Tf.a = c;
      g.Sf.b = d;
      g.Sf.a = e;
      g.ak = 1;
      for (var h = 0, k = this.F.Uw(this.An); h < k; ) {
        var m = h++;
        m = this.An[m];
        if (
          null != m &&
          (this.Tq || !m.D.Ic) &&
          m.D.connected &&
          m.D.Uh &&
          !m.D.tc
        ) {
          if (this.Mm && !m.D.Cm) {
            a = g.Hm;
            var x = m.B;
            a.b = x.b;
            a.a = x.a;
            g.Im = 2 * m.aa;
            g.test() &&
              ((m.D.Cm = !0),
              (a = this.ph),
              a.g == a.u && a.O(),
              (a.c[a.g++] = m));
          }
          f.Sq = this.Rq * K.hv;
          a = f.$j;
          x = m.B;
          a.b = x.b;
          a.a = x.a;
          f.Lm = m.aa;
          f.test() &&
            ((a = f.af),
            a >= this.qs ||
              ((this.qs = a),
              (this.fg = m),
              (this.Jk.b = b + d * a),
              (this.Jk.a = c + e * a)));
        }
      }
      null != this.fg &&
        ((a = f.$j),
        (x = this.fg.B),
        (a.b = x.b),
        (a.a = x.a),
        (f.Lm = this.fg.aa),
        f.test(),
        (this.Hk = f.af),
        (this.Ik.b = b + d * this.Hk),
        (this.Ik.a = c + e * this.Hk));
    },
    m: function () {
      this.ph.m();
      this.st =
        this.tt =
        this.An =
        this.F =
        this.ph =
        this.Ik =
        this.Jk =
        this.fg =
        this.Vg =
          null;
    },
    j: He,
  };
  mc.__name__ = "35";
  K.__name__ = "36";
  Ge.__name__ = "37";
  Ge.__interfaces__ = [Sb];
  Ge.prototype = {
    Gb: function () {
      var a = this.$,
        b = a.b,
        c = a.a,
        d = a.f,
        e = a.d;
      a = new G();
      a.b = b;
      a.a = c;
      a.f = d;
      a.d = e;
      return a;
    },
    Ld: function (a) {
      var b = a.a,
        c = a.f,
        d = a.d,
        e = new G();
      e.b = a.b;
      e.a = b;
      e.f = c;
      e.d = d;
      this.$ = e;
      this.Jt();
      this.Ui();
    },
    $k: function (a, b) {
      var c = this.Qj;
      c.b = a;
      c.a = b;
      this.Jt();
    },
    et: function (a) {
      this.zoom != a && ((this.zoom = a), this.F.Mb.te());
      return this.zoom;
    },
    Ui: function (a) {
      null == a && (a = this.F.cols);
      var b = this.$;
      return (this.zoom = (b.f - b.b) / (2 * (a + (1 == this.F.ng ? 0.5 : 0))));
    },
    yt: function (a, b) {
      b.b = this.Qd.b + (a.b - this.F.da.b) * this.zoom;
      b.a = this.Qd.a + (a.a - this.F.da.a) * this.zoom;
    },
    vo: function (a) {
      return this.Qd.b + (a - this.F.da.b) * this.zoom;
    },
    wc: function (a) {
      return this.Qd.a + (a - this.F.da.a) * this.zoom;
    },
    wo: function (a) {
      return (a - this.Qd.a) / this.zoom + this.F.da.a;
    },
    NA: function (a) {
      a.b = (a.b - this.Qd.b) / this.zoom + this.F.da.b;
      a.a = (a.a - this.Qd.a) / this.zoom + this.F.da.a;
    },
    er: function (a, b) {
      var c = this.vo(a.b);
      a = this.wc(a.a);
      b *= this.zoom;
      var d = this.$;
      return 0 == (c + b < d.b || c - b > d.f || a + b < d.a || a - b > d.d);
    },
    Jt: function () {
      var a = this.$;
      this.Qd.b = this.$.b + this.Qj.b * (a.f - a.b);
      a = this.$;
      this.Qd.a = this.$.a + this.Qj.a * (a.d - a.a);
    },
    m: function () {
      this.F = this.Qj = this.Qd = null;
    },
    j: Ge,
  };
  V.__name__ = "38";
  V.prototype = {
    update: function () {},
    kg: function (a) {
      return Math.min(1, this.time / a);
    },
    R: function () {},
    xb: function () {
      return 0;
    },
    j: V,
  };
  kg.__name__ = "39";
  Qb.__name__ = "3A";
  Qb.A = V;
  Qb.prototype = t(V.prototype, {
    xb: function () {
      return 1;
    },
    R: function (a) {
      V.prototype.R.call(this, a);
      a.Tg = K.Tg;
      a.Tc = 0;
    },
    update: function (a) {
      a.force.a += a.Tg;
    },
    j: Qb,
  });
  cb.__name__ = "3B";
  cb.A = V;
  cb.prototype = t(V.prototype, {
    R: function (a) {
      this.at(a);
    },
    update: function (a) {
      this.at(a);
    },
    xb: function () {
      return 2;
    },
    at: function (a) {
      var b = a.B,
        c = a.F.da,
        d = c.a;
      b.b = c.b;
      b.a = d;
      a.B.b += this.Ud.b;
      a.B.a += this.Ud.a;
      a.scale = this.scale;
    },
    j: cb,
  });
  Fe.__name__ = "3C";
  Fe.A = V;
  Fe.prototype = t(V.prototype, {
    xb: function () {
      return 4;
    },
    update: function (a) {
      var b = a.jb,
        c = a.Ba;
      c.b += a.force.b * b;
      c.a += a.force.a * b;
      0 < a.Tc && ((c.b *= 1 - a.Tc), (c.a *= 1 - a.Tc));
      a.B.b += c.b * b;
      a.B.a += c.a * b;
      c = a.force;
      c.b = 0;
      c.a = 0;
      if (!a.D.connected && a.D.fixed && ((c = a.qv), null != c)) {
        var d = a.F.da.b,
          e = a.F.da.a;
        a.B.b += d - c.b;
        a.B.a += e - c.a;
        c.b = d;
        c.a = e;
      }
      0 != a.pp && (a.rotation += a.pp * b);
    },
    j: Fe,
  });
  Pb.__name__ = "3D";
  Pb.A = V;
  Pb.prototype = t(V.prototype, {
    xb: function () {
      return 1;
    },
    R: function (a) {
      a.uq(this.anchor);
    },
    update: function (a) {
      if (0 != a.mf) {
        var b = a.B.b - this.anchor.b,
          c = a.B.a - this.anchor.a;
        1e-12 > b * b + c * c
          ? ((a.B.b = this.anchor.b), (a.B.a = this.anchor.a))
          : ((a.force.b += -a.mf * b), (a.force.a += -a.mf * c));
      }
    },
    j: Pb,
  });
  Sf.__name__ = "3E";
  Sf.A = V;
  Sf.prototype = t(V.prototype, {
    xb: function () {
      return 2;
    },
    update: function (a) {
      a.rotation = 90 + 57.29577951308232 * Math.atan2(a.Ba.a, a.Ba.b);
    },
    j: Sf,
  });
  Ee.__name__ = "3F";
  Ee.A = V;
  Ee.prototype = t(V.prototype, {
    R: function (a) {
      V.prototype.R.call(this, a);
      var b = a.F.da,
        c = b.b,
        d = b.a,
        e = b.f,
        f = b.d;
      b = a.B;
      b.b = c;
      b.a = d;
      a.Ba.b = e * K.yp;
      a.Ba.a = f * K.yp;
      b = a.force;
      b.b = 0;
      b.a = 0;
      a.D.connected = !1;
    },
    update: function (a) {
      var b = a.F,
        c = b.ne,
        d = b.Mb,
        e = a.B,
        f = a.Ba;
      if (a.D.jd)
        (b = d.qc.c[0]),
          this.ry(a, 0 > e.b * b.b + e.a * b.a - va.Sg(b) ? 0 : 2);
      else {
        var g = this.aj;
        var h = e.b;
        var k = e.a;
        g.b = h;
        g.a = k;
        g.f = f.b * a.jb;
        g.d = f.a * a.jb;
        c.Sb = 0;
        k = a.F.hk() ? K.OA : K.PA;
        "bounce" == k && (c.Sb |= 1);
        var m = K.av;
        "bounce" == m && (c.Sb |= 2);
        if (K.nv || K.Jq) c.Sb |= 8;
        a.D.Uh || (c.Sb |= 16);
        h = c.Ii(g, a.aa, 0);
        if (0 < (c.Sb & 8)) {
          var x = c.result.Eg;
          if (0 < x.g) {
            var u = x.c,
              p = 0;
            for (x = x.g; p < x; ) {
              var ba = p++;
              ba = u[ba];
              a.D.Je || null == ba || ba.D.Je || b.ny(a, ba);
            }
          }
        }
        if (-1 != c.result.Gn) {
          if (!(1 <= h)) {
            e.b += h * g.f;
            e.a += h * g.d;
            switch (d.wd) {
              case 0:
                switch (k) {
                  case "none":
                    return;
                  case "stick":
                    this.as(a, null);
                    a.jb = 0;
                    return;
                }
                break;
              case 2:
                if ("none" == m) return;
            }
            g = d.qc.c[d.wd];
            e = g.b;
            g = g.a;
            c = f.b;
            h = f.a;
            k = 2 * (c * e + h * g);
            f.b = c - k * e;
            f.a = h - k * g;
            b.my(a, d.wd);
            a.jb = 0;
          }
        } else
          a.D.Uh &&
            null != c.result.Ke &&
            ((b = c.result.Ke),
            1 > h &&
              ((e.b += h * g.f), (e.a += h * g.d), (a.jb = 0), this.as(a, b)));
      }
    },
    as: function (a, b) {
      a.rc(null, this);
      a.F.ne.result.reset();
      a.F.py(a, b);
    },
    ry: function (a, b) {
      a.rc(null, this);
      a.F.ne.result.reset();
      a.F.oy(a, b);
    },
    xb: function () {
      return 3;
    },
    j: Ee,
  });
  Rf.__name__ = "40";
  Rf.prototype = {
    apply: function (a, b) {
      this.zh ? (this.zh = !1) : a.Ss(b, 0, 1) && this.tz(b);
    },
    tz: function (a) {
      if (null != a && a.D.connected) {
        var b = a.F;
        b.ab.clearMarks();
        b.ab.vv();
        b.ab.Wp(3, !1, a.ha, D(this, this.Kn));
      }
    },
    Kn: function (a) {
      if (a.parent == a) return !0;
      var b = a.parent.ga;
      a = a.ga;
      null != b && null != a && b.Ss(a, 0, 1);
      return !0;
    },
    j: Rf,
  };
  Qf.__name__ = "41";
  Qf.prototype = {
    Ty: function (a) {
      this.list.g = 0;
      a.F.ab.clearMarks();
      a.F.ab.Wp(K.ud.aa, !1, a.ha, D(this, this.Kn), a);
    },
    apply: function (a, b, c) {
      if (this.zh) (a = this.list), (a.g = 0), (this.zh = !1);
      else {
        this.nt = K.ud.jA;
        this.nt || a.D.Je || ((a = a.B), (a.b = b.b), (a.a = b.a));
        this.direction = c;
        a = this.list;
        b = a.c;
        c = 0;
        for (a = a.g; c < a; ) {
          var d = c++,
            e = b[d];
          e.ma.D.Je ||
            (e.ma.cw(Pb),
            (d = (K.ud.aa + 1 - e.depth) * K.ud.gh),
            (e = e.ma.Ba),
            (e.b += this.direction.b * d),
            (e.a += this.direction.a * d));
        }
        a = this.list;
        a.g = 0;
      }
    },
    Kn: function (a, b, c) {
      if (
        (this.nt && a.ga == c) ||
        (null != this.filter && !this.filter(c, a.ga))
      )
        return !0;
      b = this.list;
      a = new Pf(a.ga, a.depth);
      b.g == b.u && b.O();
      b.c[b.g++] = a;
      return !0;
    },
    j: Qf,
  };
  Pf.__name__ = "42";
  Pf.prototype = { j: Pf };
  Of.__name__ = "43";
  Of.__isInterface__ = !0;
  q.__name__ = "44";
  q.Ep = function (a) {
    return a instanceof q
      ? a
      : a instanceof Error
      ? new q(a.message, 0, a)
      : new ld(a, 0, a);
  };
  q.G = function (a) {
    return a instanceof q ? a.wl : a instanceof Error ? a : new ld(a);
  };
  q.A = Error;
  q.prototype = t(Error.prototype, {
    Eo: function () {
      return this.wl;
    },
    CB: function () {
      return this.wl;
    },
    j: q,
  });
  Ec.__name__ = "45";
  Ec.$l = function (a, b) {
    var c = new Ec(b);
    c.Pi = function () {
      c.stop();
      a();
    };
    return c;
  };
  Ec.prototype = {
    stop: function () {
      null != this.id && (clearInterval(this.id), (this.id = null));
    },
    Pi: function () {},
    j: Ec,
  };
  ld.__name__ = "46";
  ld.A = q;
  ld.prototype = t(q.prototype, {
    Eo: function () {
      return this.value;
    },
    j: ld,
  });
  oa.__name__ = "47";
  oa.qn = function (a, b) {
    if (b == pc.i1) {
      for (
        var c = new Uint8Array(a.length << 1), d = 0, e = a.length;
        d < e;

      ) {
        b = d++;
        var f = a.charCodeAt(b);
        c[b << 1] = f & 255;
        c[(b << 1) | 1] = f >> 8;
      }
      return new oa(c.buffer);
    }
    c = [];
    for (b = 0; b < a.length; )
      (f = a.charCodeAt(b++)),
        55296 <= f &&
          56319 >= f &&
          (f = ((f - 55232) << 10) | (a.charCodeAt(b++) & 1023)),
        127 >= f
          ? c.push(f)
          : (2047 >= f
              ? c.push(192 | (f >> 6))
              : (65535 >= f
                  ? c.push(224 | (f >> 12))
                  : (c.push(240 | (f >> 18)), c.push(128 | ((f >> 12) & 63))),
                c.push(128 | ((f >> 6) & 63))),
            c.push(128 | (f & 63)));
    return new oa(new Uint8Array(c).buffer);
  };
  oa.Ek = function (a) {
    var b = a.gx;
    return null != b ? b : new oa(a);
  };
  oa.prototype = {
    qm: function (a, b, c) {
      if (0 > a || 0 > b || a + b > this.length) throw q.G(ua.i2);
      null == c && (c = pc.i0);
      var d = "",
        e = this.a,
        f = a;
      a += b;
      switch (c.I) {
        case 0:
          for (; f < a; ) {
            c = e[f++];
            if (128 > c) {
              if (0 == c) break;
            } else if (224 > c) c = ((c & 63) << 6) | (e[f++] & 127);
            else if (240 > c)
              (b = e[f++]),
                (c = ((c & 31) << 12) | ((b & 127) << 6) | (e[f++] & 127));
            else {
              b = e[f++];
              var g = e[f++];
              c =
                ((c & 15) << 18) |
                ((b & 127) << 12) |
                ((g & 127) << 6) |
                (e[f++] & 127);
            }
            d += String.fromCodePoint(c);
          }
          break;
        case 1:
          for (; f < a; )
            (c = e[f++] | (e[f++] << 8)), (d += String.fromCodePoint(c));
      }
      return d;
    },
    toString: function () {
      return this.qm(0, this.length);
    },
    j: oa,
  };
  var pc = (La.e0 = { Ac: !0, zc: ["i0", "i1"] });
  pc.i0 = { I: 0, T: "e0", toString: I };
  pc.i1 = { I: 1, T: "e0", toString: I };
  pc.fd = [pc.i0, pc.i1];
  Db.__name__ = "48";
  Db.encode = function (a, b) {
    null == b && (b = !0);
    var c = new De(Db.Yo).dw(a).toString();
    if (b)
      switch (a.length % 3) {
        case 1:
          c += "==";
          break;
        case 2:
          c += "=";
      }
    return c;
  };
  Db.decode = function (a, b) {
    null == b && (b = !0);
    if (b) for (; 61 == C.Aj(a, a.length - 1); ) a = C.substr(a, 0, -1);
    return new De(Db.Yo).Qv(oa.qn(a));
  };
  De.__name__ = "49";
  De.prototype = {
    dw: function (a) {
      for (
        var b = this.Ir,
          c = this.De,
          d = ((8 * a.length) / b) | 0,
          e = new oa(new ArrayBuffer(d + (0 == (8 * a.length) % b ? 0 : 1))),
          f = 0,
          g = 0,
          h = (1 << b) - 1,
          k = 0,
          m = 0;
        m < d;

      ) {
        for (; g < b; ) (g += 8), (f <<= 8), (f |= a.a[k++]);
        g -= b;
        e.a[m++] = c.a[(f >> g) & h];
      }
      0 < g && (e.a[m++] = c.a[(f << (b - g)) & h]);
      return e;
    },
    rx: function () {
      for (var a = [], b = 0; 256 > b; ) {
        var c = b++;
        a[c] = -1;
      }
      b = 0;
      for (var d = this.De.length; b < d; ) (c = b++), (a[this.De.a[c]] = c);
      this.rt = a;
    },
    Qv: function (a) {
      var b = this.Ir;
      null == this.rt && this.rx();
      for (
        var c = this.rt,
          d = (a.length * b) >> 3,
          e = new oa(new ArrayBuffer(d)),
          f = 0,
          g = 0,
          h = 0,
          k = 0;
        k < d;

      ) {
        for (; 8 > g; ) {
          g += b;
          f <<= b;
          var m = c[a.a[h++]];
          if (-1 == m) throw q.G("BaseCode : invalid encoded char");
          f |= m;
        }
        g -= 8;
        e.a[k++] = (f >> g) & 255;
      }
      return e;
    },
    j: De,
  };
  Ra.__name__ = "4A";
  Ra.__interfaces__ = [Of];
  Ra.prototype = {
    remove: function (a) {
      if (!this.C.hasOwnProperty(a)) return !1;
      delete this.C[a];
      return !0;
    },
    keys: function () {
      var a = [],
        b;
      for (b in this.C) this.C.hasOwnProperty(b) && a.push(b | 0);
      return new Dc(a);
    },
    iterator: function () {
      return {
        dz: this.C,
        ir: this.keys(),
        Y: function () {
          return this.ir.Y();
        },
        next: function () {
          var a = this.ir.next();
          return this.dz[a];
        },
      };
    },
    Ql: function () {
      for (var a = new Ra(), b = this.keys(); b.Y(); ) {
        var c = b.next();
        a.C[c] = this.C[c];
      }
      return a;
    },
    j: Ra,
  };
  Ma.__name__ = "4B";
  Ma.__interfaces__ = [Of];
  Ma.Px = function (a) {
    var b = Object.keys(a),
      c = b.length,
      d = 0;
    return {
      Y: function () {
        return d < c;
      },
      next: function () {
        d += 1;
        return b[d - 1];
      },
    };
  };
  Ma.prototype = { j: Ma };
  Ae.__name__ = "4C";
  Ae.prototype = {
    jp: function (a) {
      this.Ga == this.size && this.O(1);
      this.view.setUint8(this.Ga++, a);
    },
    Pu: function (a, b, c) {
      if (0 > b || 0 > c || b + c > a.length) throw q.G(ua.i2);
      this.Ga + c > this.size && this.O(c);
      0 != this.size &&
        ((a = new Uint8Array(a.a.buffer, a.a.byteOffset + b, c)),
        this.Et.set(a, this.Ga),
        (this.Ga += c));
    },
    O: function (a) {
      var b = this.Ga + a;
      for (a = 0 == this.size ? 16 : this.size; a < b; ) a = (3 * a) >> 1;
      b = new ArrayBuffer(a);
      var c = new Uint8Array(b);
      0 < this.size && c.set(this.Et);
      this.size = a;
      this.buffer = b;
      this.Et = c;
      this.view = new DataView(this.buffer);
    },
    Vc: function () {
      if (0 == this.size) return new oa(new ArrayBuffer(0));
      var a = new oa(this.buffer);
      a.length = this.Ga;
      return a;
    },
    j: Ae,
  };
  Ce.__name__ = "4D";
  Ce.prototype = {
    S: function () {
      throw q.G("Not implemented");
    },
    Rn: function (a, b, c) {
      var d = c,
        e = a.a;
      if (0 > b || 0 > c || b + c > a.length) throw q.G(ua.i2);
      try {
        for (; 0 < d; ) (e[b] = this.S()), ++b, --d;
      } catch (f) {
        if (!(q.Ep(f).Eo() instanceof kd)) throw f;
      }
      return c - d;
    },
    Wz: function (a) {
      return (this.yf = a);
    },
    $y: function (a, b, c) {
      for (; 0 < c; ) {
        var d = this.Rn(a, b, c);
        if (0 == d) throw q.G(ua.i0);
        b += d;
        c -= d;
      }
    },
    read: function (a) {
      for (var b = new oa(new ArrayBuffer(a)), c = 0; 0 < a; ) {
        var d = this.Rn(b, c, a);
        if (0 == d) throw q.G(ua.i0);
        c += d;
        a -= d;
      }
      return b;
    },
    Gs: function (a) {
      for (var b = new Ae(), c; ; ) {
        c = this.S();
        if (c == a) break;
        b.jp(c);
      }
      return b.Vc().toString();
    },
    Zy: function () {
      var a = this.ad(),
        b = this.ad();
      return this.yf ? kc.Oq(b, a) : kc.Oq(a, b);
    },
    sb: function () {
      var a = this.S(),
        b = this.S();
      a = this.yf ? b | (a << 8) : a | (b << 8);
      return 0 != (a & 32768) ? a - 65536 : a;
    },
    Jd: function () {
      var a = this.S(),
        b = this.S();
      return this.yf ? b | (a << 8) : a | (b << 8);
    },
    ad: function () {
      var a = this.S(),
        b = this.S(),
        c = this.S(),
        d = this.S();
      return this.yf
        ? d | (c << 8) | (b << 16) | (a << 24)
        : a | (b << 8) | (c << 16) | (d << 24);
    },
    Sk: function (a, b) {
      var c = new oa(new ArrayBuffer(a));
      this.$y(c, 0, a);
      return c.qm(0, a, b);
    },
    j: Ce,
  };
  lc.__name__ = "4E";
  lc.A = Ce;
  lc.prototype = t(Ce.prototype, {
    S: function () {
      if (0 == this.Yf) throw q.G(new kd());
      this.Yf--;
      return this.a[this.Ga++];
    },
    Rn: function (a, b, c) {
      if (0 > b || 0 > c || b + c > a.length) throw q.G(ua.i2);
      if (0 == this.Yf && 0 < c) throw q.G(new kd());
      this.Yf < c && (c = this.Yf);
      var d = this.a;
      a = a.a;
      for (var e = 0, f = c; e < f; ) {
        var g = e++;
        a[b + g] = d[this.Ga + g];
      }
      this.Ga += c;
      this.Yf -= c;
      return c;
    },
    j: lc,
  });
  Be.__name__ = "4F";
  Be.prototype = {
    Ha: function () {
      throw q.G("Not implemented");
    },
    ug: function (a, b, c) {
      if (0 > b || 0 > c || b + c > a.length) throw q.G(ua.i2);
      a = a.a;
      for (var d = c; 0 < d; ) this.Ha(a[b]), ++b, --d;
      return c;
    },
    kB: function (a, b, c) {
      for (; 0 < c; ) {
        var d = this.ug(a, b, c);
        b += d;
        c -= d;
      }
    },
    Ro: function (a) {
      if (-32768 > a || 32768 <= a) throw q.G(ua.i1);
      this.vg(a & 65535);
    },
    vg: function (a) {
      if (0 > a || 65536 <= a) throw q.G(ua.i1);
      this.yf
        ? (this.Ha(a >> 8), this.Ha(a & 255))
        : (this.Ha(a & 255), this.Ha(a >> 8));
    },
    Ih: function (a) {
      if (0 > a || 16777216 <= a) throw q.G(ua.i1);
      this.yf
        ? (this.Ha(a >> 16), this.Ha((a >> 8) & 255), this.Ha(a & 255))
        : (this.Ha(a & 255), this.Ha((a >> 8) & 255), this.Ha(a >> 16));
    },
    Qt: function (a) {
      this.yf
        ? (this.Ha(a >>> 24),
          this.Ha((a >> 16) & 255),
          this.Ha((a >> 8) & 255),
          this.Ha(a & 255))
        : (this.Ha(a & 255),
          this.Ha((a >> 8) & 255),
          this.Ha((a >> 16) & 255),
          this.Ha(a >>> 24));
    },
    vf: function (a, b) {
      a = oa.qn(a, b);
      this.kB(a, 0, a.length);
    },
    j: Be,
  };
  Jb.__name__ = "50";
  Jb.A = Be;
  Jb.prototype = t(Be.prototype, {
    Ha: function (a) {
      this.a.jp(a);
    },
    ug: function (a, b, c) {
      this.a.Pu(a, b, c);
      return c;
    },
    Vc: function () {
      return this.a.Vc();
    },
    j: Jb,
  });
  kd.__name__ = "51";
  kd.prototype = {
    toString: function () {
      return "Eof";
    },
    j: kd,
  };
  var ua = (La.e1 = { Ac: !0, zc: ["i0", "i1", "i2", "i3"] });
  ua.i0 = { I: 0, T: "e1", toString: I };
  ua.i1 = { I: 1, T: "e1", toString: I };
  ua.i2 = { I: 2, T: "e1", toString: I };
  ua.i3 =
    ((Fb = function (a) {
      var b = { I: 3, T: "e1", toString: I };
      b.e = a;
      return b;
    }),
    (Fb.mj = ["e"]),
    Fb);
  ua.fd = [ua.i0, ua.i1, ua.i2];
  kc.__name__ = "52";
  kc.Oq = function (a, b) {
    kc.Bm.setInt32(0, a, !0);
    kc.Bm.setInt32(4, b, !0);
    return kc.Bm.getFloat64(0, !0);
  };
  Dc.__name__ = "53";
  Dc.prototype = {
    Y: function () {
      return this.current < this.Qh.length;
    },
    next: function () {
      return this.Qh[this.current++];
    },
    j: Dc,
  };
  var qc = {
      resolve: function (a, b) {
        var c = a.bm(b).next();
        if (null == c) {
          if (a.nodeType == w.Document) a = "Document";
          else {
            if (a.nodeType != w.Element)
              throw q.G(
                "Bad node type, expected Element but found " +
                  (null == a.nodeType ? "null" : U.toString(a.nodeType))
              );
            a = a.nodeName;
          }
          throw q.G(a + " is missing element " + b);
        }
        if (c.nodeType != w.Document && c.nodeType != w.Element)
          throw q.G(
            "Invalid nodeType " +
              (null == c.nodeType ? "null" : U.toString(c.nodeType))
          );
        return c;
      },
    },
    Da = {
      resolve: function (a, b) {
        if (a.nodeType == w.Document)
          throw q.G("Cannot access document attribute " + b);
        var c = a.get(b);
        if (null == c) {
          if (a.nodeType != w.Element)
            throw q.G(
              "Bad node type, expected Element but found " +
                (null == a.nodeType ? "null" : U.toString(a.nodeType))
            );
          throw q.G(a.nodeName + " is missing attribute " + b);
        }
        return c;
      },
    },
    qg = {
      resolve: function (a, b) {
        return a.bm(b).Y();
      },
    },
    mg = {
      resolve: function (a, b) {
        var c = [];
        for (b = a.bm(b); b.Y(); ) {
          a = b.next();
          if (a.nodeType != w.Document && a.nodeType != w.Element)
            throw q.G(
              "Invalid nodeType " +
                (null == a.nodeType ? "null" : U.toString(a.nodeType))
            );
          c.push(a);
        }
        return c;
      },
    };
  pa.__name__ = "54";
  pa.prototype = {
    toString: function () {
      return (
        B.ld(this).__name__ +
        ": " +
        this.message +
        " at line " +
        this.lineNumber +
        " char " +
        this.Jn
      );
    },
    j: pa,
  };
  Ob.__name__ = "55";
  Ob.parse = function (a, b) {
    null == b && (b = !1);
    var c = w.createDocument();
    Ob.Xp(a, b, 0, c);
    return c;
  };
  Ob.Xp = function (a, b, c, d) {
    null == c && (c = 0);
    for (
      var e = null,
        f = 1,
        g = 1,
        h = null,
        k = 0,
        m = 0,
        x = 0,
        u = a.charCodeAt(c),
        p = new Nb(),
        ba = 1,
        l = -1;
      u == u;

    ) {
      switch (f) {
        case 0:
          switch (u) {
            case 9:
            case 10:
            case 13:
            case 32:
              break;
            default:
              f = g;
              continue;
          }
          break;
        case 1:
          if (60 == u) (f = 0), (g = 2);
          else {
            k = c;
            f = 13;
            continue;
          }
          break;
        case 2:
          switch (u) {
            case 33:
              if (91 == a.charCodeAt(c + 1)) {
                c += 2;
                if ("CDATA[" != C.substr(a, c, 6).toUpperCase())
                  throw q.G(new pa("Expected <![CDATA[", a, c));
                c += 5;
                f = 17;
              } else if (
                68 == a.charCodeAt(c + 1) ||
                100 == a.charCodeAt(c + 1)
              ) {
                if ("OCTYPE" != C.substr(a, c + 2, 6).toUpperCase())
                  throw q.G(new pa("Expected <!DOCTYPE", a, c));
                c += 8;
                f = 16;
              } else {
                if (45 != a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2))
                  throw q.G(new pa("Expected \x3c!--", a, c));
                c += 2;
                f = 15;
              }
              k = c + 1;
              break;
            case 47:
              if (null == d) throw q.G(new pa("Expected node name", a, c));
              k = c + 1;
              f = 0;
              g = 10;
              break;
            case 63:
              f = 14;
              k = c;
              break;
            default:
              f = 3;
              k = c;
              continue;
          }
          break;
        case 3:
          if (
            !(
              (97 <= u && 122 >= u) ||
              (65 <= u && 90 >= u) ||
              (48 <= u && 57 >= u) ||
              58 == u ||
              46 == u ||
              95 == u ||
              45 == u
            )
          ) {
            if (c == k) throw q.G(new pa("Expected node name", a, c));
            e = w.createElement(C.substr(a, k, c - k));
            d.N(e);
            ++m;
            f = 0;
            g = 4;
            continue;
          }
          break;
        case 4:
          switch (u) {
            case 47:
              f = 11;
              break;
            case 62:
              f = 9;
              break;
            default:
              f = 5;
              k = c;
              continue;
          }
          break;
        case 5:
          if (
            !(
              (97 <= u && 122 >= u) ||
              (65 <= u && 90 >= u) ||
              (48 <= u && 57 >= u) ||
              58 == u ||
              46 == u ||
              95 == u ||
              45 == u
            )
          ) {
            if (k == c) throw q.G(new pa("Expected attribute name", a, c));
            h = C.substr(a, k, c - k);
            if (e.Wa(h))
              throw q.G(new pa("Duplicate attribute [" + h + "]", a, c));
            f = 0;
            g = 6;
            continue;
          }
          break;
        case 6:
          if (61 == u) (f = 0), (g = 7);
          else throw q.G(new pa("Expected =", a, c));
          break;
        case 7:
          switch (u) {
            case 34:
            case 39:
              p = new Nb();
              f = 8;
              k = c + 1;
              l = u;
              break;
            default:
              throw q.G(new pa('Expected "', a, c));
          }
          break;
        case 8:
          switch (u) {
            case 38:
              ba = c - k;
              p.a += null == ba ? C.substr(a, k, null) : C.substr(a, k, ba);
              f = 18;
              ba = 8;
              k = c + 1;
              break;
            case 60:
            case 62:
              if (b)
                throw q.G(
                  new pa(
                    "Invalid unescaped " +
                      String.fromCodePoint(u) +
                      " in attribute value",
                    a,
                    c
                  )
                );
              u == l &&
                ((g = c - k),
                (p.a += null == g ? C.substr(a, k, null) : C.substr(a, k, g)),
                (g = p.a),
                (p = new Nb()),
                e.set(h, g),
                (f = 0),
                (g = 4));
              break;
            default:
              u == l &&
                ((g = c - k),
                (p.a += null == g ? C.substr(a, k, null) : C.substr(a, k, g)),
                (g = p.a),
                (p = new Nb()),
                e.set(h, g),
                (f = 0),
                (g = 4));
          }
          break;
        case 9:
          k = c = Ob.Xp(a, b, c, e);
          f = 1;
          break;
        case 10:
          if (
            !(
              (97 <= u && 122 >= u) ||
              (65 <= u && 90 >= u) ||
              (48 <= u && 57 >= u) ||
              58 == u ||
              46 == u ||
              95 == u ||
              45 == u
            )
          ) {
            if (k == c) throw q.G(new pa("Expected node name", a, c));
            g = C.substr(a, k, c - k);
            if (null == d || 0 != d.nodeType)
              throw q.G(
                new pa("Unexpected </" + g + ">, tag is not open", a, c)
              );
            if (d.nodeType != w.Element)
              throw q.G(
                "Bad node type, expected Element but found " +
                  (null == d.nodeType ? "null" : U.toString(d.nodeType))
              );
            if (g != d.nodeName) {
              if (d.nodeType != w.Element)
                throw q.G(
                  "Bad node type, expected Element but found " +
                    (null == d.nodeType ? "null" : U.toString(d.nodeType))
                );
              throw q.G(new pa("Expected </" + d.nodeName + ">", a, c));
            }
            f = 0;
            g = 12;
            continue;
          }
          break;
        case 11:
          if (62 == u) f = 1;
          else throw q.G(new pa("Expected >", a, c));
          break;
        case 12:
          if (62 == u) return 0 == m && d.N(w.Gj("")), c;
          throw q.G(new pa("Expected >", a, c));
        case 13:
          60 == u
            ? ((g = c - k),
              (p.a += null == g ? C.substr(a, k, null) : C.substr(a, k, g)),
              (g = w.Gj(p.a)),
              (p = new Nb()),
              d.N(g),
              ++m,
              (f = 0),
              (g = 2))
            : 38 == u &&
              ((ba = c - k),
              (p.a += null == ba ? C.substr(a, k, null) : C.substr(a, k, ba)),
              (f = 18),
              (ba = 13),
              (k = c + 1));
          break;
        case 14:
          63 == u &&
            62 == a.charCodeAt(c + 1) &&
            (++c,
            d.N(w.createProcessingInstruction(C.substr(a, k + 1, c - k - 2))),
            ++m,
            (f = 1));
          break;
        case 15:
          45 == u &&
            45 == a.charCodeAt(c + 1) &&
            62 == a.charCodeAt(c + 2) &&
            (d.N(w.createComment(C.substr(a, k, c - k))),
            ++m,
            (c += 2),
            (f = 1));
          break;
        case 16:
          91 == u
            ? ++x
            : 93 == u
            ? --x
            : 62 == u &&
              0 == x &&
              (d.N(w.Mv(C.substr(a, k, c - k))), ++m, (f = 1));
          break;
        case 17:
          93 == u &&
            93 == a.charCodeAt(c + 1) &&
            62 == a.charCodeAt(c + 2) &&
            ((u = w.Lv(C.substr(a, k, c - k))), d.N(u), ++m, (c += 2), (f = 1));
          break;
        case 18:
          if (59 == u) {
            k = C.substr(a, k, c - k);
            if (35 == k.charCodeAt(0))
              (k =
                120 == k.charCodeAt(1)
                  ? y.parseInt("0" + C.substr(k, 1, k.length - 1))
                  : y.parseInt(C.substr(k, 1, k.length - 1))),
                (p.a += String.fromCodePoint(k));
            else if (Object.prototype.hasOwnProperty.call(Ob.bq.C, k))
              p.a += y.Ja(Ob.bq.C[k]);
            else {
              if (b) throw q.G(new pa("Undefined entity: " + k, a, c));
              p.a += y.Ja("&" + k + ";");
            }
            k = c + 1;
            f = ba;
          } else if (
            !(
              (97 <= u && 122 >= u) ||
              (65 <= u && 90 >= u) ||
              (48 <= u && 57 >= u) ||
              58 == u ||
              46 == u ||
              95 == u ||
              45 == u
            ) &&
            35 != u
          ) {
            if (b)
              throw q.G(
                new pa(
                  "Invalid character in entity: " + String.fromCodePoint(u),
                  a,
                  c
                )
              );
            p.a += String.fromCodePoint(38);
            u = c - k;
            p.a += null == u ? C.substr(a, k, null) : C.substr(a, k, u);
            --c;
            k = c + 1;
            f = ba;
          }
      }
      u = a.charCodeAt(++c);
    }
    1 == f && ((k = c), (f = 13));
    if (13 == f) {
      if (0 == d.nodeType) {
        if (d.nodeType != w.Element)
          throw q.G(
            "Bad node type, expected Element but found " +
              (null == d.nodeType ? "null" : U.toString(d.nodeType))
          );
        throw q.G(new pa("Unclosed node <" + d.nodeName + ">", a, c));
      }
      if (c != k || 0 == m)
        (ba = c - k),
          (p.a += null == ba ? C.substr(a, k, null) : C.substr(a, k, ba)),
          d.N(w.Gj(p.a));
      return c;
    }
    if (!b && 18 == f && 13 == ba)
      return (
        (p.a += String.fromCodePoint(38)),
        (ba = c - k),
        (p.a += null == ba ? C.substr(a, k, null) : C.substr(a, k, ba)),
        d.N(w.Gj(p.a)),
        c
      );
    throw q.G(new pa("Unexpected end", a, c));
  };
  jd.__name__ = "56";
  jd.print = function (a, b) {
    null == b && (b = !1);
    b = new jd(b);
    b.So(a, "");
    return b.U.a;
  };
  jd.prototype = {
    So: function (a, b) {
      switch (a.nodeType) {
        case 0:
          this.U.a += y.Ja(b + "<");
          if (a.nodeType != w.Element)
            throw q.G(
              "Bad node type, expected Element but found " +
                (null == a.nodeType ? "null" : U.toString(a.nodeType))
            );
          this.U.a += y.Ja(a.nodeName);
          for (var c = a.attributes(); c.Y(); ) {
            var d = c.next();
            this.U.a += y.Ja(" " + d + '="');
            d = Ka.Nq(a.get(d), !0);
            this.U.a += y.Ja(d);
            this.U.a += '"';
          }
          if (this.ax(a)) {
            this.U.a += ">";
            this.gf && (this.U.a += "\n");
            if (a.nodeType != w.Document && a.nodeType != w.Element)
              throw q.G(
                "Bad node type, expected Element or Document but found " +
                  (null == a.nodeType ? "null" : U.toString(a.nodeType))
              );
            c = 0;
            for (d = a.children; c < d.length; ) {
              var e = d[c++];
              this.So(e, this.gf ? b + "\t" : b);
            }
            this.U.a += y.Ja(b + "</");
            if (a.nodeType != w.Element)
              throw q.G(
                "Bad node type, expected Element but found " +
                  (null == a.nodeType ? "null" : U.toString(a.nodeType))
              );
            this.U.a += y.Ja(a.nodeName);
            this.U.a += ">";
          } else this.U.a += "/>";
          this.gf && (this.U.a += "\n");
          break;
        case 1:
          if (a.nodeType == w.Document || a.nodeType == w.Element)
            throw q.G(
              "Bad node type, unexpected " +
                (null == a.nodeType ? "null" : U.toString(a.nodeType))
            );
          a = a.nodeValue;
          0 != a.length &&
            ((d = b + Ka.Nq(a)),
            (this.U.a += y.Ja(d)),
            this.gf && (this.U.a += "\n"));
          break;
        case 2:
          this.U.a += y.Ja(b + "<![CDATA[");
          if (a.nodeType == w.Document || a.nodeType == w.Element)
            throw q.G(
              "Bad node type, unexpected " +
                (null == a.nodeType ? "null" : U.toString(a.nodeType))
            );
          this.U.a += y.Ja(a.nodeValue);
          this.U.a += "]]\x3e";
          this.gf && (this.U.a += "\n");
          break;
        case 3:
          if (a.nodeType == w.Document || a.nodeType == w.Element)
            throw q.G(
              "Bad node type, unexpected " +
                (null == a.nodeType ? "null" : U.toString(a.nodeType))
            );
          a = a.nodeValue;
          a = a.replace(/[\n\r\t]+/g, "");
          this.U.a += null == b ? "null" : "" + b;
          d = Ka.trim("\x3c!--" + a + "--\x3e");
          this.U.a += y.Ja(d);
          this.gf && (this.U.a += "\n");
          break;
        case 4:
          if (a.nodeType == w.Document || a.nodeType == w.Element)
            throw q.G(
              "Bad node type, unexpected " +
                (null == a.nodeType ? "null" : U.toString(a.nodeType))
            );
          this.U.a += y.Ja("<!DOCTYPE " + a.nodeValue + ">");
          this.gf && (this.U.a += "\n");
          break;
        case 5:
          if (a.nodeType == w.Document || a.nodeType == w.Element)
            throw q.G(
              "Bad node type, unexpected " +
                (null == a.nodeType ? "null" : U.toString(a.nodeType))
            );
          this.U.a += y.Ja("<?" + a.nodeValue + "?>");
          this.gf && (this.U.a += "\n");
          break;
        case 6:
          if (a.nodeType != w.Document && a.nodeType != w.Element)
            throw q.G(
              "Bad node type, expected Element or Document but found " +
                (null == a.nodeType ? "null" : U.toString(a.nodeType))
            );
          c = 0;
          for (d = a.children; c < d.length; ) (e = d[c++]), this.So(e, b);
      }
    },
    ax: function (a) {
      if (a.nodeType != w.Document && a.nodeType != w.Element)
        throw q.G(
          "Bad node type, expected Element or Document but found " +
            (null == a.nodeType ? "null" : U.toString(a.nodeType))
        );
      var b = 0;
      for (a = a.children; b < a.length; ) {
        var c = a[b++];
        switch (c.nodeType) {
          case 0:
          case 1:
            return !0;
          case 2:
          case 3:
            if (c.nodeType == w.Document || c.nodeType == w.Element)
              throw q.G(
                "Bad node type, unexpected " +
                  (null == c.nodeType ? "null" : U.toString(c.nodeType))
              );
            if (0 != Ka.tr(c.nodeValue).length) return !0;
        }
      }
      return !1;
    },
    j: jd,
  };
  B.__name__ = "57";
  B.ld = function (a) {
    if (null == a) return null;
    if (a instanceof Array) return Array;
    var b = a.j;
    if (null != b) return b;
    a = B.fp(a);
    return null != a ? B.Lu(a) : null;
  };
  B.Kh = function (a, b) {
    if (null == a) return "null";
    if (5 <= b.length) return "<...>";
    var c = typeof a;
    "function" == c && (a.__name__ || a.Ac) && (c = "object");
    switch (c) {
      case "function":
        return "<function>";
      case "object":
        if (a.T) {
          var d = La[a.T];
          c = d.zc[a.I];
          var e = d[c];
          if (e.mj) {
            b += "\t";
            d = [];
            var f = 0;
            for (e = e.mj; f < e.length; ) {
              var g = e[f];
              f += 1;
              d.push(B.Kh(a[g], b));
            }
            return c + "(" + d.join(",") + ")";
          }
          return c;
        }
        if (a instanceof Array) {
          c = "[";
          b += "\t";
          d = 0;
          for (f = a.length; d < f; )
            (e = d++), (c += (0 < e ? "," : "") + B.Kh(a[e], b));
          return c + "]";
        }
        try {
          d = a.toString;
        } catch (h) {
          return "???";
        }
        if (
          null != d &&
          d != Object.toString &&
          "function" == typeof d &&
          ((c = a.toString()), "[object Object]" != c)
        )
          return c;
        c = "{\n";
        b += "\t";
        d = null != a.hasOwnProperty;
        f = null;
        for (f in a)
          (d && !a.hasOwnProperty(f)) ||
            "prototype" == f ||
            "__class__" == f ||
            "__super__" == f ||
            "__interfaces__" == f ||
            "__properties__" == f ||
            (2 != c.length && (c += ", \n"),
            (c += b + f + " : " + B.Kh(a[f], b)));
        b = b.substring(1);
        return c + ("\n" + b + "}");
      case "string":
        return a;
      default:
        return String(a);
    }
  };
  B.vl = function (a, b) {
    if (null == a) return !1;
    if (a == b) return !0;
    var c = a.__interfaces__;
    if (null != c)
      for (var d = 0, e = c.length; d < e; ) {
        var f = d++;
        f = c[f];
        if (f == b || B.vl(f, b)) return !0;
      }
    return B.vl(a.A, b);
  };
  B.wf = function (a, b) {
    if (null == b) return !1;
    switch (b) {
      case Array:
        return a instanceof Array;
      case rg:
        return "boolean" == typeof a;
      case sg:
        return null != a;
      case tg:
        return "number" == typeof a;
      case ug:
        return "number" == typeof a ? (a | 0) === a : !1;
      case String:
        return "string" == typeof a;
      default:
        if (null != a)
          if ("function" == typeof b) {
            if (B.Ju(a, b)) return !0;
          } else {
            if ("object" == typeof b && B.Ku(b) && a instanceof b) return !0;
          }
        else return !1;
        return (b == ng && null != a.__name__) || (b == vg && null != a.Ac)
          ? !0
          : null != a.T
          ? La[a.T] == b
          : !1;
    }
  };
  B.Ju = function (a, b) {
    return a instanceof b ? !0 : b.__isInterface__ ? B.vl(B.ld(a), b) : !1;
  };
  B.Ta = function (a, b) {
    if (null == a || B.wf(a, b)) return a;
    throw q.G("Cannot cast " + y.Ja(a) + " to " + y.Ja(b));
  };
  B.fp = function (a) {
    a = B.Mu.call(a).slice(8, -1);
    return "Object" == a || "Function" == a || "Math" == a || "JSON" == a
      ? null
      : a;
  };
  B.Ku = function (a) {
    return null != B.fp(a);
  };
  B.Lu = function (a) {
    return eb[a];
  };
  jg.__name__ = "58";
  jg.km = function () {
    try {
      var a = window.localStorage;
      a.getItem("");
      if (0 == a.length) {
        var b = "_hx_" + Math.random();
        a.setItem(b, b);
        a.removeItem(b);
      }
      return a;
    } catch (c) {
      return null;
    }
  };
  Nf.__name__ = "59";
  Nf.prototype = { j: Nf };
  jc.__name__ = "5A";
  jc.prototype = {
    load: function (a) {
      if (this.Vm(a) || this.ki(a) || this.ek(a)) return !1;
      this.ln++;
      a = new ye(a, this);
      a.ia = this.Hr--;
      if (this.Zf.length == this.dy) return this.Hd.enqueue(a), !0;
      this.Zf.push(a);
      a.load();
      return !0;
    },
    stop: function () {
      this.Hd.clear();
    },
    Cs: function (a) {
      if (!this.Vm(a) || this.ki(a) || this.ek(a)) return !1;
      var b = ka.find(this.Hd, function (b) {
        return -1 < b.Pd.url.indexOf(a);
      });
      if (null == b) return !1;
      this.Hd.kz(b, ++this.Er);
      return !0;
    },
    Tj: function (a) {
      if (null == this.Hd || 0 == this.ln) return 1;
      if (null == a) return this.Qr / this.ln;
      for (var b = 0, c = 0, d = 0, e = this.Zf; d < e.length; ) {
        var f = e[d];
        ++d;
        if (null == a || -1 < a.indexOf(f.Pd.url)) ++b, (c += f.Pd.kg);
      }
      for (f = this.Hd.iterator(); f.Y(); )
        if (((d = f.next()), null == a || -1 < a.indexOf(d.Pd.url)))
          ++b, (c += 0);
      for (d = 0; d < a.length; ) (f = a[d]), ++d, this.ki(f) && (++b, ++c);
      return 0 == b ? 0 : c / b;
    },
    Vm: function (a) {
      function b(b) {
        return -1 < b.Pd.url.indexOf(a);
      }
      return null == this.Hd
        ? !1
        : 0 < ka.count(this.Hd, b) + ka.count(this.Zf, b);
    },
    xy: function (a) {
      this.wi(new Nf(a.Pd.url, a.Pd.data, a.Pd.We));
      null != a.Ze && (a.Ze(a), (a.Ze = null));
      C.remove(this.Zf, a);
      this.Qr++;
      0 < this.Hd.g
        ? ((a = this.Hd.Sv()), this.Zf.push(a), a.load())
        : 0 == this.Zf.length &&
          ((this.Hr = this.Er = 0), null != this.he && this.he());
    },
    wy: function () {
      this.stop();
    },
    ki: function (a) {
      return l.zm(l.Ne(a));
    },
    ek: function (a) {
      return l.ek(l.Ne(a));
    },
    j: jc,
  };
  ze.__name__ = "5B";
  ze.__isInterface__ = !0;
  ze.prototype = { j: ze };
  ye.__name__ = "5C";
  ye.__interfaces__ = [ze];
  ye.prototype = {
    load: function () {
      var a = this;
      this.Pd.load(
        function () {
          jc.zp += 0;
          a.Te.xy(a);
          a.m();
        },
        function () {
          a.Te.wy();
          a.m();
        }
      );
    },
    m: function () {
      this.Te = null;
      this.Pd.m();
    },
    j: ye,
  };
  l.__name__ = "5D";
  l.xz = function (a) {
    l.Bl = a;
  };
  l.Rw = function () {
    return l.wt;
  };
  l.Tz = function () {
    l.wt = "hd";
  };
  l.yq = function () {
    return l.language;
  };
  l.co = function (a) {
    if (null != a && !new Q("^[a-z]{2}$", "").match(a))
      throw q.G("invalid ISO 639-1 code");
    l.language = a;
    ka.Wa("tr ru pt it fr es en de".split(" "), function (a) {
      return a == l.language;
    }) || (l.language = "en");
  };
  l.Mf = function () {
    return l.tp;
  };
  l.wz = function (a) {
    if (!new Q("^[a-z3]{3}$", "").match(a))
      throw q.G("invalid audio file format");
    l.tp = a;
  };
  l.Qw = function () {
    return l.zA.slice();
  };
  l.Aw = function () {
    return l.ix.slice();
  };
  l.Of = function (a) {
    if (l.yi.C.hasOwnProperty(a)) return l.yi.C[a];
    if (
      65535 <= a &&
      Object.prototype.hasOwnProperty.call(l.Qi.C, null == a ? "null" : "" + a)
    ) {
      var b = l.Qi.C[null == a ? "null" : "" + a];
      return (l.yi.C[a] = b);
    }
    b = l.wg[a];
    var c = new Q("{(?:language|audio|quality)}", "");
    c.match(b) &&
      ((c = new Q("{language}", "")),
      c.match(b) && (b = b.replace(c.r, y.Ja(l.language))),
      (c = new Q("{audio}", "g")),
      c.match(b) && (b = b.replace(c.r, l.tp)),
      (c = new Q("{quality}", "g")),
      c.match(b) && (b = b.replace(c.r, y.Ja(l.wt).toLowerCase())));
    l.yi.C[a] = "" + l.Bl + "/" + b;
    return l.yi.C[a];
  };
  l.Mw = function () {
    for (var a = [], b = 0, c = l.Ry; b < c.length; ) {
      var d = c[b];
      ++b;
      l.ro(d) && a.push(d);
    }
    return a;
  };
  l.Nw = function () {
    for (var a = [], b = 0, c = l.lz; b < c.length; ) {
      var d = c[b];
      ++b;
      l.ro(d) && a.push(d);
    }
    return a;
  };
  l.Ne = function (a) {
    function b(b, c) {
      b.match(a) && (a = b.replace(a, c));
    }
    if (Object.prototype.hasOwnProperty.call(l.Qi.C, a))
      return y.parseInt(l.Qi.C[a]);
    b(new Q("^(" + l.Bl + "/)(.*)", ""), "$2");
    var c = "tr ru pt it fr es en de".split(" ");
    0 < c.length &&
      b(
        new Q("([/_])(" + c.join("|") + ")(/|(\\.\\S{3,4}$))", ""),
        "$1{language}$3"
      );
    b(new Q("([/_])(sd|hd)(/|(\\.\\S{3,4}$))", ""), "$1{quality}$3");
    c = ["ogg", "mp3", "aac"];
    0 < c.length &&
      (b(new Q("(.*?)\\.(" + c.join("|") + ")$", ""), "$1.{audio}"),
      b(new Q("((" + c.join("|") + ")\\/)", ""), "{audio}/"));
    return l.wg.indexOf(a);
  };
  l.wB = function () {
    return 0;
  };
  l.ro = function (a) {
    if (l.Sm(a)) {
      var b = l.Mf();
      return (
        null != b &&
        ka.Wa(["ogg", "mp3", "aac"], function (a) {
          return a == b;
        })
      );
    }
    return !0;
  };
  l.getData = function (a) {
    return l.bh.C[a];
  };
  l.setData = function (a, b, c) {
    var d = l.bh.C.hasOwnProperty(a);
    if (!d)
      if (l.Kj.C.hasOwnProperty(a))
        (l.locked.C[a] = !0),
          (d = l.Kj.C[a]),
          l.Kj.remove(a),
          d(a, b, function (b) {
            l.locked.remove(a);
            l.setData(a, b, c);
          });
      else if ((null != c && (l.We.C[a] = c), (l.bh.C[a] = b), !d))
        for (b = l.Bp, d = b.length; -1 < --d; )
          if (b[d].id == a) {
            var e = b[d];
            b[d] = b[b.length - 1];
            b.pop();
            e.bw();
          }
  };
  l.zm = function (a) {
    return null != l.bh.C[a];
  };
  l.Gw = function (a) {
    return l.We.C[a];
  };
  l.Cc = function (a) {
    var b = l.getData(a);
    if (null != b)
      try {
        b instanceof HTMLImageElement &&
          ((l.bh.C[a] = null),
          (B.Ta(b, HTMLImageElement).src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"));
      } catch (c) {}
    return l.bh.remove(a);
  };
  l.Sm = function (a) {
    return 65535 <= a
      ? new Q("(ogg|aac|mp3)$", "").match(l.Qi.C[null == a ? "null" : "" + a])
      : new Q("{audio}", "").match(l.wg[a]);
  };
  l.be = function (a) {
    return new Q("music_", "").match(l.wg[a]);
  };
  l.Cx = function (a) {
    return new Q("sounds\\.", "g").match(l.wg[a]);
  };
  l.ek = function (a) {
    return l.locked.C.hasOwnProperty(a);
  };
  l.bx = function (a) {
    return 65535 <= a ? !1 : new Q("{quality}", "").match(l.wg[a]);
  };
  l.ui = function (a, b) {
    null != l.Of(a) && (l.zm(a) ? b(a) : l.Bp.push(new Mf(a, b)));
  };
  l.fz = function (a, b) {
    l.Kj.C[a] = b;
  };
  l.ov = function (a) {
    if (a instanceof ArrayBuffer) {
      if ("TextDecoder" in window)
        return (a = new DataView(a)), new TextDecoder("utf-8").decode(a);
      a = oa.Ek(a);
      return a.qm(0, a.length);
    }
    return y.Ja(a);
  };
  l.vB = function () {
    return "tr ru pt it fr es en de".split(" ");
  };
  l.uB = function () {
    return ["ogg", "mp3", "aac"];
  };
  l.mB = function () {
    return [14, 13];
  };
  Mf.__name__ = "5E";
  Mf.prototype = {
    bw: function () {
      this.pq(this.id);
      this.pq = null;
    },
    j: Mf,
  };
  rb.__name__ = "5F";
  rb.cc = function () {};
  rb.prototype = {
    m: function () {
      this.Ib = this.vi = this.Ze = this.data = null;
    },
    load: function (a, b) {
      function c(a) {
        return 0 < a.length
          ? new Q("(?:" + a.join("|") + ")", "i").match(e)
          : !1;
      }
      var d = this;
      this.Ze = a;
      this.vi = b;
      rb.cc(this, 0);
      var e = "";
      rb.state.C[this.url] = 1;
      a = new Q("\\.(\\w+)$", "g");
      a.match(this.url) && (e = a.ya(1));
      c(["ogg", "mp3", "aac"])
        ? this.Uo(this.url, "arraybuffer", function (a) {
            d.he(a);
          })
        : c(l.Aw())
        ? ((this.Ib = window.document.createElement("img")),
          this.Ib.addEventListener("load", D(this, this.$r)),
          this.Uo(this.url, "blob", function (a) {
            var b = new FileReader();
            b.onload = function (c) {
              new Q("\\.png$", "").match(d.url)
                ? (d.We = d.Lw(c.target.result))
                : new Q("\\.jpg$", "").match(d.url) &&
                  (d.We = d.Cw(c.target.result));
              d.Ib.src = URL.createObjectURL(a);
              b.onload = null;
            };
            b.readAsArrayBuffer(a);
          }))
        : ((a = "arraybuffer"),
          c(l.Qw()) && (a = "text"),
          this.Uo(this.url, a, function (a) {
            d.he(a);
          }));
    },
    he: function (a) {
      this.data = a;
      rb.state.C[this.url] = 2;
      rb.cc(this, 1);
      this.Ze();
      this.Ze = null;
    },
    $r: function () {
      this.Ib.removeEventListener("load", D(this, this.$r));
      var a = window.document.createElement("canvas");
      a.width = this.Ib.width;
      a.height = this.Ib.height;
      a.getContext("2d", null).drawImage(this.Ib, 0, 0);
      this.he(a);
      this.Ib = null;
    },
    Uo: function (a, b, c) {
      var d = this,
        e = new XMLHttpRequest();
      e.onerror = function () {
        null != d.vi && d.vi();
        e.onerror = e.onload = e.onprogress = null;
      };
      e.onload = function () {
        d.kg = 1;
        if (404 == e.status) null != d.vi && d.vi();
        else {
          var a = e.response;
          e.onerror = e.onload = e.onprogress = null;
          c(a);
        }
      };
      e.onprogress = function (a) {
        0 < a.total && (d.kg = a.loaded / a.total);
      };
      try {
        e.open("GET", null != this.pl ? "" + a + "?" + this.pl : a, !0),
          (e.responseType = b),
          e.send();
      } catch (f) {}
      return e;
    },
    Lw: function (a) {
      a = oa.Ek(a);
      a = new lc(a);
      a.Wz(!0);
      if (
        137 != a.S() ||
        80 != a.S() ||
        78 != a.S() ||
        71 != a.S() ||
        13 != a.S() ||
        10 != a.S() ||
        26 != a.S() ||
        10 != a.S()
      )
        return null;
      a: for (;;) {
        var b = a.ad(),
          c = a.Sk(4);
        b = a.read(b);
        a.ad();
        switch (c) {
          case "IEND":
            break a;
          case "tEXt":
            c = new lc(b);
            b = c.yo;
            var d = "",
              e = c.S();
            for (--b; 0 != e; )
              (d += String.fromCodePoint(e)), (e = c.S()), --b;
            if ("Comment" != d) c = null;
            else {
              for (d = ""; 0 < b; )
                (e = c.S()), (d += String.fromCodePoint(e)), --b;
              c = d;
            }
            if (null != c) return c;
        }
      }
      return null;
    },
    Cw: function (a) {
      a = new DataView(a);
      if (255 != a.getUint8(0) || 216 != a.getUint8(1)) return null;
      for (var b = 2, c = a.byteLength; b < c && 255 == a.getUint8(b); ) {
        if (254 == a.getUint8(b + 1)) {
          var d = b + 4,
            e = a.getUint16(b + 2) - 2;
          b = "";
          c = d;
          for (d += e; c < d; )
            (e = a.getUint8(c)), (b += String.fromCodePoint(e)), ++c;
          return b;
        }
        b += 2 + a.getUint16(b + 2);
      }
      return null;
    },
    j: rb,
  };
  ta.__name__ = "60";
  ta.dr = function () {
    return F.isSupported();
  };
  ta.Mf = function () {
    return F.Mf();
  };
  ta.Yd = function () {
    return ra.Ca();
  };
  Cc.__name__ = "61";
  Cc.prototype = { j: Cc };
  ra.__name__ = "62";
  ra.Ca = function () {
    if (null != ra.Lh) return ra.Lh;
    var a = ta.dr();
    return (ra.Lh = a ? (F.Um() ? new id() : new xe()) : new ra());
  };
  ra.prototype = {
    rh: function () {},
    Ki: function () {},
    play: function () {
      return -1;
    },
    Zg: function (a) {
      return 0 > a
        ? !1
        : 1e4 > a
        ? ka.Wa(this.Md, function (b) {
            return b.Ce.id == a;
          })
        : ka.Wa(this.Md, function (b) {
            return b.id == a;
          });
    },
    Ne: function (a) {
      var b = ka.find(this.Md, function (b) {
        return b.Ce.id == a;
      });
      return null != b ? b.id : -1;
    },
    Kx: function (a) {
      return null != this.Sc[a];
    },
    pe: function (a) {
      this.en = 0 > a ? 0 : 1 < a ? 1 : a;
      this.bB();
      this.cB();
    },
    Ls: function (a, b, c) {
      if (!this.enabled || !this.Kx(a)) return -1;
      if (b && this.Zg(a)) return this.Ne(a);
      b && (c = !0);
      if (!c && this.AA(a)) return -1;
      a = this.Iw(this.Sc[a].be, c);
      return 0 > a ? -1 : a;
    },
    ls: function (a) {
      this.Md.add(a);
      this.Md.g > this.yr && (this.yr = this.Md.g);
    },
    ks: function (a) {
      this.Be &= ~(1 << a.channel);
      this.Md.remove(a);
    },
    AA: function (a) {
      a = this.Sc[a];
      if (a.be) return !1;
      var b = E.time;
      if (b - a.pr < this.BA) return !0;
      a.pr = b;
      return !1;
    },
    Iw: function (a, b) {
      if (a) {
        for (var c = 0; c < this.Dr; ) {
          if (0 == (this.Be & (1 << c))) return (this.Be |= 1 << c), c;
          ++c;
        }
        return -1;
      }
      c = -1;
      var d = this.Dr;
      for (a = d + this.cy; d < a; ) {
        if (0 == (this.Be & (1 << d))) {
          this.Be |= 1 << d;
          c = d;
          break;
        }
        ++d;
      }
      if (b && 0 > c) {
        b = null;
        a = 0;
        for (c = this.Md.iterator(); c.Y(); )
          (d = c.next()),
            !d.Ce.be && !d.loop && d.Tj() > a && ((a = d.Tj()), (b = d));
        if (null == b) return -1;
        c = b.channel;
        b.stop();
      }
      return c;
    },
    bB: function () {
      var a = this.Md,
        b = a.c,
        c = 0;
      for (a = a.g; c < a; ) {
        var d = c++;
        d = b[d];
        d.Ce.be && d.ij();
      }
    },
    cB: function () {
      var a = this.Md,
        b = a.c,
        c = 0;
      for (a = a.g; c < a; ) {
        var d = c++;
        d = b[d];
        d.Ce.be || d.ij();
      }
    },
    j: ra,
  };
  Cb.__name__ = "64";
  Cb.prototype = {
    m: function () {
      this.he = this.ig = this.Ce = null;
      null != this.Wy && this.Wy.H();
    },
    stop: function () {},
    Tj: function () {
      return this.om() / this.Me();
    },
    om: function () {
      return NaN;
    },
    Me: function () {
      return NaN;
    },
    ij: function () {},
    j: Cb,
  };
  F.__name__ = "65";
  F.fr = function () {
    return !!window.MSInputMethodContext && !!document.documentMode;
  };
  F.Ax = function () {
    return F.active;
  };
  F.Um = function () {
    return F.Zm;
  };
  F.gk = function () {
    return null != F.tg && F.tg ? "suspended" == F.context.state : !1;
  };
  F.resume = function (a) {
    try {
      if ("running" != F.context.state) {
        F.context.resume().then(function () {
          F.active = !0;
          a();
        });
        return;
      }
    } catch (b) {}
    F.active = !0;
    a();
  };
  F.isSupported = function () {
    if (null != F.tg) return F.Zm ? !0 : F.tg;
    if (F.fr()) return (F.tg = !1), (F.Zm = !0);
    F.tg = !1;
    try {
      (F.context = (function () {
        try {
          if ("undefined" !== typeof AudioContext) return new AudioContext();
          if ("undefined" !== typeof webkitAudioContext)
            return new webkitAudioContext();
        } catch (a) {}
        return null;
      })()),
        (F.tg = null != F.context),
        (F.context.onstatechange = function () {
          F.active = !F.gk();
        }),
        (F.active = !F.gk());
    } catch (a) {}
    return F.tg;
  };
  F.Mf = function () {
    var a = F.sj;
    if ("undefined" !== typeof a) return a;
    if (F.fr()) return "aac";
    if (-1 != eb.navigator.userAgent.indexOf("EdgA/")) return (F.sj = "ogg");
    var b = null;
    try {
      b = "undefined" !== typeof Audio ? new Audio() : null;
    } catch (h) {
      return null;
    }
    if (!b || "function" !== typeof b.canPlayType) return null;
    var c = { probably: 2, maybe: 1, "": 0 },
      d = null;
    d = function (a) {
      if (a instanceof Array) {
        for (var e = 0, f = 0; f < a.length; ) {
          var g = a[f];
          ++f;
          g = d(g);
          g > e && (e = g);
        }
        return e;
      }
      return O.ja(c, b.canPlayType(a).replace(/^no$/, ""));
    };
    a = {};
    a.mp3 = d("audio/mp3;");
    a.ogg = d('audio/ogg; codecs="vorbis"');
    a.aac = d("audio/aac;");
    -1 < eb.navigator.userAgent.indexOf("OPR") && (a.aac = 0);
    for (var e = 0, f = ["aac", "ogg", "mp3"]; e < f.length; ) {
      var g = f[e];
      ++e;
      if (0 < O.ja(a, g)) return (F.sj = g);
    }
    return (F.sj = null);
  };
  F.getContext = function () {
    F.isSupported();
    return F.context;
  };
  ig.__name__ = "66";
  ig.gw = function (a, b) {
    var c = F.getContext(),
      d = a.sampleRate,
      e = [],
      f = 0,
      g = b.length;
    if (1 == a.numberOfChannels)
      for (var h = a.getChannelData(0); f < g; ) {
        var k = ((d / 1e3) * b[f++]) | 0,
          m = ((d / 1e3) * b[f++]) | 0;
        a = c.createBuffer(1, m - k, d);
        k = h.subarray(k, m);
        try {
          a.copyToChannel(k, 0);
        } catch (p) {
          a.getChannelData(0).set(k);
        }
        e.push(a);
      }
    else {
      h = a.getChannelData(0);
      for (var x = a.getChannelData(1); f < g; ) {
        k = ((d / 1e3) * b[f++]) | 0;
        m = ((d / 1e3) * b[f++]) | 0;
        a = c.createBuffer(2, m - k, d);
        var u = h.subarray(k, m);
        k = x.subarray(k, m);
        try {
          a.copyToChannel(u, 0), a.copyToChannel(k, 1);
        } catch (p) {
          a.getChannelData(0).set(u), a.getChannelData(1).set(k);
        }
        e.push(a);
      }
    }
    return e;
  };
  id.__name__ = "67";
  id.A = ra;
  id.prototype = t(ra.prototype, {
    rh: function (a, b, c, d) {
      null == c && (c = !1);
      var e = this;
      ra.prototype.rh.call(this, a, b, c, d);
      var f = !1,
        g = new Audio(),
        h = null;
      h = function () {
        g.removeEventListener("canplaythrough", h);
        f = !0;
      };
      g.addEventListener("canplaythrough", h, !1);
      g.src = b;
      g.ws = "auto";
      E.la(function () {
        f &&
          4 == g.readyState &&
          ((e.Sc[a] = new Cc(a, g, c)), d(g), E.detach());
      });
    },
    Ki: function (a, b, c) {
      var d = this;
      ra.prototype.Ki.call(this, a, b, c);
      this.ve = a;
      this.rh(1e3, b, !1, function (b) {
        for (var e = 0, g = a.length; e < g; ) {
          var h = e++;
          d.Sc[h + 1e3] = new Cc(h + 1e3, b, !1);
        }
        c(b);
      });
    },
    play: function (a, b, c, d, e) {
      null == d && (d = 0);
      null == c && (c = !1);
      null == b && (b = !1);
      c = this.Ls(a, b, c);
      if (0 > c) return -1;
      a =
        1e3 <= a
          ? new hd(this, this.Sc[1e3], a - 1e3)
          : new hd(this, this.Sc[a], null, b);
      a.id = this.Kr++;
      a.channel = c;
      a.loop = b;
      a.offset = d;
      a.he = e;
      this.ls(a);
      return a.id;
    },
    j: id,
  });
  hd.__name__ = "68";
  hd.A = Cb;
  hd.prototype = t(Cb.prototype, {
    om: function () {
      return (this.node.currentTime - this.min) % this.Me();
    },
    Me: function () {
      return this.max - this.min;
    },
    stop: function () {
      this.Di &&
        (this.node.pause(),
        this.node.removeEventListener("timeupdate", D(this, this.ms)),
        this.node.removeEventListener("loadedmetadata", D(this, this.wn)),
        (this.node = this.node.onended = null),
        this.ig.ks(this),
        (this.Di = !1));
    },
    ms: function () {
      this.node.currentTime > this.max && this.stop();
    },
    wn: function () {
      this.node.currentTime = this.min;
      this.node.removeEventListener("loadedmetadata", D(this, this.wn));
    },
    ij: function () {
      this.node.volume =
        (this.Ce.be ? this.ig.$x : this.ig.ay) * this.ig.en * this.volume;
    },
    j: hd,
  });
  xe.__name__ = "69";
  xe.A = ra;
  xe.prototype = t(ra.prototype, {
    rh: function (a, b, c, d) {
      null == c && (c = !1);
      var e = this;
      ra.prototype.rh.call(this, a, b, c, d);
      this.decode(b, function (b) {
        null == b ? d(null) : ((e.Sc[a] = new Cc(a, b, c)), d(b));
      });
    },
    Ki: function (a, b, c) {
      var d = this;
      ra.prototype.Ki.call(this, a, b, c);
      this.decode(b, function (b) {
        if (null == b) c(null);
        else
          try {
            for (var e = ig.gw(b, a), g = 0, h = a.length; g < h; ) {
              var k = g++;
              d.Sc[k + 1e3] = new Cc(k + 1e3, e[k], !1);
            }
            c(b);
          } catch (m) {}
      });
    },
    play: function (a, b, c, d, e) {
      null == d && (d = 0);
      null == c && (c = !1);
      null == b && (b = !1);
      if (!F.Ax()) return -1;
      c = this.Ls(a, b, c);
      if (0 > c) return -1;
      a = new ic(this, this.Sc[a]);
      a.id = this.Kr++;
      a.channel = c;
      a.loop = b;
      a.offset = d;
      a.he = e;
      a.play();
      this.ls(a);
      return a.id;
    },
    pe: function (a) {
      this.en = 0 > a ? 0 : 1 < a ? 1 : a;
      this.lm().Zs(a);
    },
    decode: function (a, b) {
      new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(
        2,
        1323e4,
        44100
      ).decodeAudioData(
        a,
        function (a) {
          b(a);
        },
        function () {
          b(null);
        }
      );
    },
    lm: function () {
      null == this.xk &&
        ((this.xk = new hc()), (this.xk.type = 5), this.xk.connect(new we()));
      return this.xk;
    },
    Fw: function () {
      null == this.zk &&
        ((this.zk = new hc()), (this.zk.type = 3), this.zk.connect(this.lm()));
      return this.zk;
    },
    Ew: function () {
      null == this.yk &&
        ((this.yk = new hc()), (this.yk.type = 4), this.yk.connect(this.lm()));
      return this.yk;
    },
    j: xe,
  });
  ic.__name__ = "6A";
  ic.A = Cb;
  ic.prototype = t(Cb.prototype, {
    m: function () {
      Cb.prototype.m.call(this);
      for (var a = this.hd; null != a; ) {
        var b = a.U;
        if (2 < a.type) break;
        C.remove(a.U.inputs, a);
        a.n.disconnect();
        a.m();
        a = b;
      }
      this.hd = this.data = null;
    },
    play: function () {
      if (0 < this.offset && this.offset > this.data.length - 50)
        this.onended();
      else {
        this.startTime = F.getContext().currentTime;
        if (null == this.hd) {
          this.hd = new ve();
          var a = this.ig;
          this.hd.connect(this.Ce.be ? a.Ew() : a.Fw());
        }
        this.Di = !0;
        this.hd.play(this.data, this.loop, this.offset, D(this, this.onended));
      }
    },
    stop: function (a) {
      null == a && (a = 0);
      if (this.Di && null != this.hd)
        try {
          this.hd.stop(this.startTime + a);
        } catch (b) {
          this.onended();
        }
    },
    om: function () {
      return (F.getContext().currentTime - this.startTime) % this.Me();
    },
    Me: function () {
      return this.data.duration;
    },
    ij: function () {
      if (ic.qq && null != this.hd)
        try {
          var a = this.hd.get(2);
          if (null == a) {
            a = new hc();
            var b = this.hd.get(1);
            null == b ? this.hd.append(a) : b.append(a);
          }
          a.Zs(this.volume);
        } catch (c) {
          ic.qq = !1;
        }
    },
    onended: function () {
      this.Di = !1;
      var a = this.he;
      this.ig.ks(this);
      this.m();
      null != a && a();
    },
    j: ic,
  });
  Ja.__name__ = "6B";
  Ja.prototype = {
    get: function (a) {
      for (var b = this; null != b; ) {
        if (b.type == a) return b;
        b = b.U;
      }
      return null;
    },
    m: function () {
      this.n = this.U = this.inputs = null;
    },
    connect: function (a) {
      this.U = a;
      a.inputs.push(this);
      this.n.disconnect();
      this.n.connect(a.n);
    },
    append: function (a) {
      C.remove(this.U.inputs, this);
      a.connect(this.U);
      this.connect(a);
    },
    j: Ja,
  };
  we.__name__ = "6C";
  we.A = Ja;
  we.prototype = t(Ja.prototype, { j: we });
  ve.__name__ = "6D";
  ve.A = Ja;
  ve.prototype = t(Ja.prototype, {
    m: function () {
      this.n.onended = null;
      Ja.prototype.m.call(this);
    },
    play: function (a, b, c, d) {
      var e = this.n;
      e.buffer = a;
      e.loop = b;
      e.start(0, c);
      e.onended = d;
    },
    stop: function (a) {
      null == a && (a = 0);
      this.n.stop(a);
    },
    j: ve,
  });
  hc.__name__ = "6E";
  hc.A = Ja;
  hc.prototype = t(Ja.prototype, {
    Zs: function (a) {
      this.n.gain.value = a;
    },
    j: hc,
  });
  Lf.__name__ = "6F";
  Lf.A = Ja;
  Lf.prototype = t(Ja.prototype, { j: Lf });
  gc.__name__ = "70";
  gc.__interfaces__ = [Rb];
  gc.prototype = {
    Ts: function (a) {
      for (var b = this.c, c = 0, d = this.ca * this.ua; c < d; ) {
        var e = c++;
        b[e] = a;
      }
      return this;
    },
    Pw: function (a, b) {
      a *= this.ca;
      for (var c = this.c, d = 0, e = this.ca; d < e; ) {
        var f = d++;
        b[f] = c[a + f];
      }
      return b;
    },
    forEach: function (a) {
      for (var b = this.c, c = this.ca, d = 0, e = this.ca * this.ua; d < e; ) {
        var f = d++;
        b[f] = a(b[f], f % c, (f / c) | 0);
      }
      return this;
    },
    Se: function (a) {
      for (var b = this.c, c = 0, d = this.ca * this.ua; c < d; ) {
        var e = c++;
        a(b[e]);
      }
      return this;
    },
    Uu: function (a) {
      var b = Array((this.ca + 1) * this.ua);
      R.ib(this.c, 0, b, 0, this.ca * this.ua);
      this.c = b;
      b = this.ca * this.ua + this.ua;
      for (var c = this.ua - 1, d = this.ua, e = this.ca, f = this.c; 0 < b--; )
        ++e > this.ca ? ((e = 0), --d, (f[b] = a[c--])) : (f[b] = f[b - d]);
      this.ca++;
      return this;
    },
    Uy: function (a) {
      var b = Array((this.ca + 1) * this.ua);
      R.ib(this.c, 0, b, 0, this.ca * this.ua);
      this.c = b;
      b = this.ca * this.ua + this.ua;
      for (var c = this.ua - 1, d = this.ua, e = 0, f = this.c; 0 < b--; )
        ++e > this.ca ? ((e = 0), --d, (f[b] = a[c--])) : (f[b] = f[b - d]);
      this.ca++;
      return this;
    },
    iterator: function () {
      if (this.Mc) {
        if (null == this.bb) this.bb = new gd(this);
        else {
          var a = this.bb;
          a.c = a.gb.c;
          var b = a.gb;
          a.cb = b.ca * b.ua;
          a.wa = 0;
        }
        return this.bb;
      }
      return new gd(this);
    },
    we: function () {
      return R.we(this.c, 0, this.ca * this.ua, []);
    },
    j: gc,
  };
  fc.__name__ = "71";
  fc.__isInterface__ = !0;
  fc.prototype = { j: fc };
  gd.__name__ = "72";
  gd.__interfaces__ = [fc];
  gd.prototype = {
    Y: function () {
      return this.wa < this.cb;
    },
    next: function () {
      return this.c[this.wa++];
    },
    j: gd,
  };
  ib.__name__ = "73";
  ib.prototype = { j: ib };
  fd.__name__ = "74";
  fd.__interfaces__ = [fc];
  fd.prototype = {
    m: function () {
      this.c = this.gb = null;
    },
    Y: function () {
      return this.wa < this.cb;
    },
    next: function () {
      return this.c[this.wa++];
    },
    remove: function () {
      this.gb.Js(--this.wa);
      this.cb--;
    },
    j: fd,
  };
  ue.__name__ = "75";
  ue.__isInterface__ = !0;
  ue.__interfaces__ = [Rb];
  ed.__name__ = "76";
  ed.__interfaces__ = [ue];
  ed.prototype = {
    clear: function (a) {
      null == a && (a = !1);
      a && R.ge(this.c);
      this.Ia = this.g = 0;
    },
    we: function () {
      if (0 == this.g) return [];
      for (var a = this.c, b = Array(this.g), c = 0, d = this.g; c < d; ) {
        var e = c++;
        b[e] = a[(e + this.Ia) % this.u];
      }
      return b;
    },
    O: function () {
      var a = this.u;
      this.u = dc.Ie(this.Fc, this.u);
      this.oe(a, this.u);
    },
    oe: function (a, b) {
      var c = Array(b);
      a < b
        ? this.Ia + this.g > a
          ? ((b = a - this.Ia),
            (a -= b),
            R.ib(this.c, this.Ia, c, 0, b),
            R.ib(this.c, 0, c, b, a))
          : R.ib(this.c, this.Ia, c, 0, this.g)
        : this.Ia + this.g > a
        ? ((b = a - this.Ia),
          (a = this.g - this.Ia),
          R.ib(this.c, this.Ia, c, 0, b),
          R.ib(this.c, 0, c, this.Ia, a))
        : R.ib(this.c, this.Ia, c, 0, this.g);
      this.c = c;
      this.Ia = 0;
    },
    j: ed,
  };
  Kf.__name__ = "77";
  Kf.__isInterface__ = !0;
  Kf.__interfaces__ = [Rb];
  Bb.__name__ = "78";
  Bb.__interfaces__ = [Kf];
  Bb.prototype = {
    clear: function (a) {
      null == a && (a = !1);
      a && R.ge(this.c);
      this.L = 0;
    },
    O: function () {
      this.u = dc.Ie(this.Fc, this.u);
      this.oe(this.u);
    },
    oe: function (a) {
      a = Array(a);
      R.ib(this.c, 0, a, 0, this.L);
      this.c = a;
    },
    j: Bb,
  };
  te.__name__ = "7B";
  te.__interfaces__ = [Rb];
  te.prototype = {
    pj: function (a) {
      if (null != a.Ue) return a;
      this.g++;
      a.next = this.oc;
      null != a.next && (a.next.Nb = a);
      this.oc = a;
      a.Ue = this;
      return a;
    },
    removeNode: function (a) {
      if (0 == this.g || null == a.Ue) return this;
      this.VA(a);
      null != a.Nb && (a.Nb.next = a.next);
      null != a.next && (a.next.Nb = a.Nb);
      this.oc == a && (this.oc = a.next);
      this.g--;
      a.Ue = null;
      a.next = a.Nb = null;
      return this;
    },
    lp: function (a, b) {
      for (var c = this.oc; null != c; ) {
        if (c == a) {
          a = c;
          for (c = this.oc; null != c; ) {
            if (c == b) {
              a.ip(c);
              c.ip(a);
              break;
            }
            c = c.next;
          }
          break;
        }
        c = c.next;
      }
      return this;
    },
    VA: function (a) {
      if (null == a.Ue) return a;
      for (var b = a.qa; null != b; ) {
        for (var c = b.node, d = c.qa; null != d; ) {
          var e = d.next;
          d.node == a &&
            (null != d.Nb && (d.Nb.next = e),
            null != e && (e.Nb = d.Nb),
            c.qa == d && (c.qa = e),
            d.m(),
            c.kn--,
            null != this.Oi && this.Oi(d));
          d = e;
        }
        c = b.next;
        null != b.Nb && (b.Nb.next = c);
        null != c && (c.Nb = b.Nb);
        a.qa == b && (a.qa = c);
        b.m();
        a.kn--;
        null != this.Oi && this.Oi(b);
        b = c;
      }
      a.qa = null;
      return a;
    },
    clearMarks: function () {
      for (var a = this.oc; null != a; ) (a.oa = !1), (a = a.next);
      return this;
    },
    vv: function () {
      for (var a = this.oc; null != a; ) (a.parent = null), (a = a.next);
      return this;
    },
    Lj: function (a, b, c, d, e) {
      null == e && (e = !1);
      null == a && (a = !1);
      if (0 == this.g) return this;
      this.Al && this.clearMarks();
      var f = 1;
      null == b && (b = this.oc);
      var g = this.uk,
        h = this.eh;
      h[0] = b;
      b.parent = b;
      b.depth = 0;
      if (a)
        if (null == c)
          if (e) (c = b.ga), c.yc(!0, d) && this.Nj(b, !0, d);
          else {
            b = h[0];
            c = b.ga;
            if (!c.yc(!0, d)) return this;
            for (; 0 < f; )
              if (((b = h[--f]), !b.oa && b.visible)) {
                b.oa = !0;
                c = b.ga;
                if (!c.yc(!1, d)) break;
                for (a = b.qa; null != a; )
                  a.node.visible &&
                    ((c = b.ga),
                    (a.node.parent = b),
                    (a.node.depth = b.depth + 1),
                    c.yc(!0, d) &&
                      ((e = a.node),
                      f == g && (h = this.Zk((g *= 2))),
                      (h[f++] = e))),
                    (a = a.next);
              }
          }
        else if (e) c(b, !0, d) && this.Mj(b, c, !0, d);
        else {
          b = h[0];
          if (!c(b, !0, d)) return this;
          for (; 0 < f; )
            if (((b = h[--f]), !b.oa && b.visible)) {
              b.oa = !0;
              if (!c(b, !1, d)) break;
              for (a = b.qa; null != a; )
                a.node.visible &&
                  ((a.node.parent = b),
                  (a.node.depth = b.depth + 1),
                  c(a.node, !0, d) &&
                    ((e = a.node),
                    f == g && (h = this.Zk((g *= 2))),
                    (h[f++] = e))),
                  (a = a.next);
            }
        }
      else if (null == c)
        if (e) this.Nj(b, !1, d);
        else
          for (; 0 < f; ) {
            if (((b = h[--f]), !b.oa && b.visible)) {
              b.oa = !0;
              c = b.ga;
              if (!c.yc(!1, d)) break;
              for (a = b.qa; null != a; )
                a.node.visible &&
                  ((e = a.node),
                  f == g && (h = this.Zk((g *= 2))),
                  (h[f++] = e),
                  (a.node.parent = b),
                  (a.node.depth = b.depth + 1)),
                  (a = a.next);
            }
          }
      else if (e) this.Mj(b, c, !1, d);
      else
        for (; 0 < f; )
          if (((b = h[--f]), !b.oa && b.visible)) {
            b.oa = !0;
            if (!c(b, !1, d)) break;
            for (a = b.qa; null != a; )
              a.node.visible &&
                ((e = a.node),
                f == g && (h = this.Zk((g *= 2))),
                (h[f++] = e),
                (a.node.parent = b),
                (a.node.depth = b.depth + 1)),
                (a = a.next);
          }
      return this;
    },
    Wu: function (a, b, c, d) {
      null == a && (a = !1);
      if (0 == this.g) return this;
      this.Al && this.clearMarks();
      var e = 0,
        f = 1,
        g = this.pc,
        h = this.ni;
      null == b && (b = this.oc);
      g[0] = b;
      b.oa = !0;
      b.parent = b;
      b.depth = 0;
      if (a)
        if (null == c) {
          a = g[e];
          c = a.ga;
          if (!c.yc(!0, d)) return this;
          for (; 0 < f; ) {
            a = g[e];
            c = a.ga;
            if (!c.yc(!1, d)) break;
            for (b = a.qa; null != b; ) {
              var k = b.node;
              if (
                !k.oa &&
                k.visible &&
                ((k.oa = !0),
                (k.parent = a),
                (k.depth = a.depth + 1),
                (c = k.ga),
                c.yc(!0, d))
              ) {
                var m = f++ + e;
                m == h && (this.hf((h *= 2)), (g = this.pc));
                g[m] = k;
              }
              b = b.next;
            }
            ++e;
            --f;
          }
        } else {
          a = g[e];
          if (!c(a, !0, d)) return this;
          for (; 0 < f; ) {
            a = g[e];
            if (!c(a, !1, d)) break;
            for (b = a.qa; null != b; )
              (k = b.node),
                !k.oa &&
                  k.visible &&
                  ((k.oa = !0),
                  (k.parent = a),
                  (k.depth = a.depth + 1),
                  c(k, !0, d) &&
                    ((m = f++ + e),
                    m == h && (this.hf((h *= 2)), (g = this.pc)),
                    (g[m] = k))),
                (b = b.next);
            ++e;
            --f;
          }
        }
      else if (null == c)
        for (; 0 < f; ) {
          a = g[e];
          c = a.ga;
          if (!c.yc(!1, d)) break;
          for (b = a.qa; null != b; )
            (k = b.node),
              !k.oa &&
                k.visible &&
                ((k.oa = !0),
                (k.parent = a),
                (k.depth = a.depth + 1),
                (m = f++ + e),
                m == h && (this.hf((h *= 2)), (g = this.pc)),
                (g[m] = k)),
              (b = b.next);
          ++e;
          --f;
        }
      else
        for (; 0 < f; ) {
          a = g[e];
          if (!c(a, !1, d)) break;
          for (b = a.qa; null != b; )
            (k = b.node),
              !k.oa &&
                k.visible &&
                ((k.oa = !0),
                (k.parent = a),
                (k.depth = a.depth + 1),
                (m = f++ + e),
                m == h && (this.hf((h *= 2)), (g = this.pc)),
                (g[m] = k)),
              (b = b.next);
          ++e;
          --f;
        }
      return this;
    },
    Wp: function (a, b, c, d, e) {
      null == b && (b = !1);
      if (0 == this.g) return this;
      this.Al && this.clearMarks();
      var f = 0,
        g = 1,
        h = this.pc,
        k = this.ni;
      null == c && (c = this.oc);
      for (var m = this.oc; null != m; ) (m.depth = 0), (m = m.next);
      c.oa = !0;
      c.parent = c;
      h[0] = c;
      if (b)
        if (null == d) {
          b = h[f];
          d = b.ga;
          if (!d.yc(!0, e)) return this;
          for (; 0 < g; ) {
            b = h[f];
            d = b.ga;
            if (!d.yc(!1, e)) break;
            for (c = b.qa; null != c; ) {
              m = c.node;
              if (
                !m.oa &&
                m.visible &&
                ((m.oa = !0),
                (m.parent = b),
                (m.depth = b.depth + 1),
                m.depth <= a && ((d = m.ga), d.yc(!0, e)))
              ) {
                var x = g++ + f;
                x == k && (this.hf((k *= 2)), (h = this.pc));
                h[x] = m;
              }
              c = c.next;
            }
            ++f;
            --g;
          }
        } else {
          b = h[f];
          if (!d(b, !0, e)) return this;
          for (; 0 < g; ) {
            b = h[f];
            if (!d(b, !1, e)) break;
            for (c = b.qa; null != c; )
              (m = c.node),
                !m.oa &&
                  m.visible &&
                  ((m.oa = !0),
                  (m.parent = b),
                  (m.depth = b.depth + 1),
                  m.depth <= a &&
                    d(m, !0, e) &&
                    ((x = g++ + f),
                    x == k && (this.hf((k *= 2)), (h = this.pc)),
                    (h[x] = m))),
                (c = c.next);
            ++f;
            --g;
          }
        }
      else if (null == d)
        for (; 0 < g; ) {
          b = h[f];
          d = b.ga;
          if (!d.yc(!1, e)) break;
          for (c = b.qa; null != c; )
            (m = c.node),
              !m.oa &&
                m.visible &&
                ((m.oa = !0),
                (m.depth = b.depth + 1),
                (m.parent = b),
                m.depth <= a &&
                  ((x = g++ + f),
                  x == k && (this.hf((k *= 2)), (h = this.pc)),
                  (h[x] = m))),
              (c = c.next);
          ++f;
          --g;
        }
      else
        for (; 0 < g; )
          if (((b = h[f]), b.depth > a)) --g, ++f;
          else {
            if (!d(b, !1, e)) break;
            for (c = b.qa; null != c; )
              (m = c.node),
                !m.oa &&
                  m.visible &&
                  ((m.oa = !0),
                  (m.depth = b.depth + 1),
                  (m.parent = b),
                  m.depth <= a &&
                    ((x = g++ + f),
                    x == k && (this.hf((k *= 2)), (h = this.pc)),
                    (h[x] = m))),
                (c = c.next);
            ++f;
            --g;
          }
      return this;
    },
    m: function () {
      for (var a = this.oc; null != a; ) {
        for (var b = a.next, c = a.qa; null != c; ) {
          var d = c.next;
          c.next = c.Nb = null;
          c.node = null;
          c = d;
        }
        a.m();
        a = b;
      }
      this.oc = null;
      R.ge(this.eh);
      this.eh = null;
      R.ge(this.pc);
      this.pc = null;
      null != this.bb && (this.bb.m(), (this.bb = null));
      this.Oi = this.El = null;
    },
    Nj: function (a, b, c) {
      a.oa = !0;
      var d = a.ga;
      if (!d.yc(!1, c)) return !1;
      for (var e = a.qa; null != e; ) {
        var f = e.node;
        if (!f.oa && f.visible)
          if (((e.node.parent = a), (e.node.depth = a.depth + 1), b)) {
            if (((d = f.ga), d.yc(!0, c) && !this.Nj(f, !0, c))) return !1;
          } else if (!this.Nj(f, !1, c)) return !1;
        e = e.next;
      }
      return !0;
    },
    Mj: function (a, b, c, d) {
      a.oa = !0;
      if (!b(a, !1, d)) return !1;
      for (var e = a.qa; null != e; ) {
        var f = e.node;
        if (!f.oa && f.visible)
          if (((e.node.parent = a), (e.node.depth = a.depth + 1), c)) {
            if (b(f, !0, d) && !this.Mj(f, b, !0, d)) return !1;
          } else if (!this.Mj(f, b, !1, d)) return !1;
        e = e.next;
      }
      return !0;
    },
    Zk: function (a) {
      var b = Array(a);
      R.ib(this.eh, 0, b, 0, this.uk);
      this.eh = b;
      this.uk = a;
      return this.eh;
    },
    hf: function (a) {
      var b = Array(a);
      R.ib(this.pc, 0, b, 0, this.ni);
      this.pc = b;
      this.ni = a;
    },
    j: te,
  };
  dd.__name__ = "7D";
  dd.__interfaces__ = [nc];
  dd.prototype = {
    m: function () {
      this.next = this.Nb = this.node = null;
    },
    j: dd,
  };
  ec.__name__ = "7E";
  ec.__interfaces__ = [nc];
  ec.prototype = {
    m: function () {
      this.Ue = this.qa = this.next = this.Nb = this.ga = null;
    },
    iterator: function () {
      return new se(this);
    },
    Ix: function (a) {
      return null != this.sq(a) ? null != a.sq(this) : !1;
    },
    sq: function (a) {
      for (var b = !1, c = this.qa; null != c; ) {
        if (c.node == a) {
          b = !0;
          break;
        }
        c = c.next;
      }
      return b ? c : null;
    },
    ip: function (a, b) {
      null == b && (b = 1);
      a = null != this.Ue.El ? this.Ue.El(a, b) : new dd(a, b);
      a.next = this.qa;
      null != this.qa && (this.qa.Nb = a);
      this.qa = a;
      this.kn++;
      return this;
    },
    j: ec,
  };
  se.__name__ = "7F";
  se.__interfaces__ = [fc];
  se.prototype = {
    Y: function () {
      return null != this.rk;
    },
    next: function () {
      var a = this.rk.node.ga;
      this.rk = this.rk.next;
      return a;
    },
    j: se,
  };
  zc.__name__ = "80";
  zc.next = function () {
    null == zc.gp && (zc.gp = 0);
    return zc.gp++;
  };
  cd.__name__ = "81";
  cd.__interfaces__ = [nc];
  cd.prototype = { j: cd };
  re.__name__ = "82";
  re.__isInterface__ = !0;
  re.__interfaces__ = [Rb];
  Rc.__name__ = "83";
  Rc.__interfaces__ = [re];
  Rc.prototype = {
    set: function (a, b) {
      this.g == this.u && this.O();
      var c = this.Kb,
        d = this.ua;
      d.g == d.u && d.O();
      var e = d.c,
        f = d.Hc,
        g = 3 * d.Kb;
      d.Kb = d.ac[d.Kb];
      e[g] = a;
      e[g + 1] = c;
      var h = (73856093 * a) & d.Cd,
        k = f[h];
      if (-1 == k) (f[h] = g), d.g++, (d = !0);
      else {
        f = e[k] != a;
        for (h = e[k + 2]; -1 != h; )
          e[h] == a && (f = !1), (k = h), (h = e[h + 2]);
        e[k + 2] = g;
        d.g++;
        d = f;
      }
      this.fh[c] = b;
      this.tk[c] = a;
      this.Kb = this.ac[c];
      this.g++;
      return d;
    },
    O: function () {
      var a = this.u;
      this.u = dc.Ie(this.ua.Fc, this.u);
      var b = Array(this.u);
      R.ib(this.ac, 0, b, 0, a);
      this.ac = b;
      b = Array(this.u);
      R.ib(this.tk, 0, b, 0, a);
      b = this.tk = b;
      for (var c = a, d = this.u; c < d; ) {
        var e = c++;
        b[e] = -2147483648;
      }
      b = this.ac;
      c = a - 1;
      for (d = this.u - 1; c < d; ) (e = c++), (b[e] = e + 1);
      b[this.u - 1] = -1;
      this.Kb = a;
      b = Array(this.u);
      R.ib(this.fh, 0, b, 0, a);
      this.fh = b;
    },
    j: Rc,
  };
  vc.__name__ = "84";
  vc.__interfaces__ = [re];
  vc.prototype = {
    O: function () {
      var a = this.u;
      this.u = dc.Ie(this.Fc, this.u);
      var b = Array(this.u);
      R.ib(this.ac, 0, b, 0, a);
      this.ac = b;
      b = Array(3 * this.u);
      R.ib(this.c, 0, b, 0, 3 * a);
      this.c = b;
      b = this.ac;
      for (var c = a - 1, d = this.u - 1; c < d; ) {
        var e = c++;
        b[e] = e + 1;
      }
      b[this.u - 1] = -1;
      this.Kb = a;
      e = 3 * a + 2;
      b = this.c;
      c = 0;
      for (d = this.u - a; c < d; )
        c++, (b[e - 1] = -2147483648), (b[e] = -1), (e += 3);
    },
    m: function () {
      this.ac = this.c = this.Hc = null;
      null != this.bb && (this.bb.m(), (this.bb = null));
    },
    clear: function () {
      for (var a = this.Hc, b = 0, c = this.iA; b < c; ) {
        var d = b++;
        a[d] = -1;
      }
      d = 2;
      a = this.c;
      b = 0;
      for (c = this.u; b < c; )
        b++, (a[d - 1] = -2147483648), (a[d] = -1), (d += 3);
      a = this.ac;
      b = 0;
      for (c = this.u - 1; b < c; ) (d = b++), (a[d] = d + 1);
      a[this.u - 1] = -1;
      this.g = this.Kb = 0;
    },
    j: vc,
  };
  qe.__name__ = "86";
  qe.__interfaces__ = [ue];
  qe.prototype = {
    enqueue: function (a) {
      this.g == this.u && this.O();
      this.c[++this.g] = a;
      a = a.position = this.g;
      var b = this.c,
        c = a >> 1,
        d = b[a],
        e = d.ia;
      if (this.ce)
        for (; 0 < c; ) {
          var f = b[c];
          if (0 > e - f.ia) (b[a] = f), (f.position = a), (a = c), (c >>= 1);
          else break;
        }
      else
        for (; 0 < c; )
          if (((f = b[c]), 0 < e - f.ia))
            (b[a] = f), (f.position = a), (a = c), (c >>= 1);
          else break;
      b[a] = d;
      d.position = a;
    },
    Sv: function () {
      var a = this.c,
        b = a[1];
      b.position = -1;
      a[1] = a[this.g];
      var c = 1;
      a = this.c;
      var d = c << 1,
        e = a[c],
        f = e.ia;
      if (this.ce)
        for (; d < this.g; ) {
          d < this.g - 1 && 0 < a[d].ia - a[d + 1].ia && ++d;
          var g = a[d];
          if (0 < f - g.ia)
            (a[c] = g), (g.position = c), (c = e.position = d), (d <<= 1);
          else break;
        }
      else
        for (; d < this.g; )
          if (
            (d < this.g - 1 && 0 > a[d].ia - a[d + 1].ia && ++d,
            (g = a[d]),
            0 > f - g.ia)
          )
            (a[c] = g), (g.position = c), (c = e.position = d), (d <<= 1);
          else break;
      a[c] = e;
      e.position = c;
      this.g--;
      return b;
    },
    kz: function (a, b) {
      var c = a.ia;
      if (c == b) return this;
      a.ia = b;
      a = a.position;
      if (this.ce)
        if (b < c) {
          b = a;
          c = this.c;
          var d = b >> 1;
          a = c[b];
          var e = a.ia;
          if (this.ce)
            for (; 0 < d; ) {
              var f = c[d];
              if (0 > e - f.ia)
                (c[b] = f), (f.position = b), (b = d), (d >>= 1);
              else break;
            }
          else
            for (; 0 < d; )
              if (((f = c[d]), 0 < e - f.ia))
                (c[b] = f), (f.position = b), (b = d), (d >>= 1);
              else break;
        } else {
          b = a;
          c = this.c;
          d = b << 1;
          a = c[b];
          e = a.ia;
          if (this.ce)
            for (; d < this.g; )
              if (
                (d < this.g - 1 && 0 < c[d].ia - c[d + 1].ia && ++d,
                (f = c[d]),
                0 < e - f.ia)
              )
                (c[b] = f), (f.position = b), (b = a.position = d), (d <<= 1);
              else break;
          else
            for (; d < this.g; )
              if (
                (d < this.g - 1 && 0 > c[d].ia - c[d + 1].ia && ++d,
                (f = c[d]),
                0 > e - f.ia)
              )
                (c[b] = f), (f.position = b), (b = a.position = d), (d <<= 1);
              else break;
          c[b] = a;
          a.position = b;
          b = this.g;
          c = this.c;
          d = b >> 1;
          a = c[b];
          e = a.ia;
          if (this.ce)
            for (; 0 < d; )
              if (((f = c[d]), 0 > e - f.ia))
                (c[b] = f), (f.position = b), (b = d), (d >>= 1);
              else break;
          else
            for (; 0 < d; )
              if (((f = c[d]), 0 < e - f.ia))
                (c[b] = f), (f.position = b), (b = d), (d >>= 1);
              else break;
        }
      else {
        if (b > c) b = a;
        else {
          b = a;
          c = this.c;
          d = b << 1;
          a = c[b];
          e = a.ia;
          if (this.ce)
            for (; d < this.g; )
              if (
                (d < this.g - 1 && 0 < c[d].ia - c[d + 1].ia && ++d,
                (f = c[d]),
                0 < e - f.ia)
              )
                (c[b] = f), (f.position = b), (b = a.position = d), (d <<= 1);
              else break;
          else
            for (; d < this.g; )
              if (
                (d < this.g - 1 && 0 > c[d].ia - c[d + 1].ia && ++d,
                (f = c[d]),
                0 > e - f.ia)
              )
                (c[b] = f), (f.position = b), (b = a.position = d), (d <<= 1);
              else break;
          c[b] = a;
          a.position = b;
          b = this.g;
        }
        c = this.c;
        d = b >> 1;
        a = c[b];
        e = a.ia;
        if (this.ce)
          for (; 0 < d; )
            if (((f = c[d]), 0 > e - f.ia))
              (c[b] = f), (f.position = b), (b = d), (d >>= 1);
            else break;
        else
          for (; 0 < d; )
            if (((f = c[d]), 0 < e - f.ia))
              (c[b] = f), (f.position = b), (b = d), (d >>= 1);
            else break;
      }
      c[b] = a;
      a.position = b;
      return this;
    },
    clear: function (a) {
      null == a && (a = !1);
      a && R.ge(this.c);
      this.g = 0;
    },
    iterator: function () {
      if (this.Mc) {
        if (null == this.bb) return new bd(this);
        this.bb.reset();
        return this.bb;
      }
      return new bd(this);
    },
    jz: function () {
      for (var a = this.g >> 1; 1 <= a; ) this.Kq(a, this.g), --a;
    },
    Kq: function (a, b) {
      var c = this.c,
        d = a << 1,
        e = d + 1,
        f = a;
      this.ce
        ? (d <= b && 0 > c[d].ia - c[f].ia && (f = d),
          d + 1 <= b && 0 > c[d + 1].ia - c[f].ia && (f = e))
        : (d <= b && 0 < c[d].ia - c[f].ia && (f = d),
          d + 1 <= b && 0 < c[d + 1].ia - c[f].ia && (f = e));
      f != a &&
        ((d = c[f]),
        (e = c[a]),
        (c[f] = e),
        (c[a] = d),
        (a = d.position),
        (d.position = e.position),
        (e.position = a),
        this.Kq(f, b));
    },
    O: function () {
      this.u = dc.Ie(this.Fc, this.u);
      this.oe(this.u);
    },
    oe: function (a) {
      a = Array(a + 1);
      R.ib(this.c, 0, a, 0, this.g + 1);
      this.c = a;
    },
    j: qe,
  };
  bd.__name__ = "87";
  bd.__interfaces__ = [fc];
  bd.prototype = {
    reset: function () {
      this.wa = 0;
      this.cb = this.gb.g;
      this.c = Array(this.cb);
      R.ib(this.gb.c, 1, this.c, 0, this.cb);
      return this;
    },
    Y: function () {
      return this.wa < this.cb;
    },
    next: function () {
      return this.c[this.wa++];
    },
    j: bd,
  };
  Mc.__name__ = "89";
  Mc.R = function (a, b, c, d) {
    null == d && (d = 0);
    null == c && (c = 0);
    for (d = 0 >= d ? a.length : c + d; c < d; ) a[c++] = b;
    return a;
  };
  Mc.mt = function (a, b) {
    var c = a.length;
    if (null == b)
      for (; 1 < --c; ) {
        var d = (Oc.hp() * c) | 0,
          e = a[c];
        a[c] = a[d];
        a[d] = e;
      }
    else
      for (var f = 0; 1 < --c; )
        (d = (b[f++] * c) | 0), (e = a[c]), (a[c] = a[d]), (a[d] = e);
  };
  pe.__name__ = "8A";
  pe.By = function (a) {
    a -= (a >> 1) & 1431655765;
    a = ((a >> 2) & 858993459) + (a & 858993459);
    a = ((a >> 4) + a) & 252645135;
    a += a >> 8;
    return (a + (a >> 16)) & 63;
  };
  pe.jy = function (a) {
    if (0 > a) return 0;
    a |= a >> 1;
    a |= a >> 2;
    a |= a >> 4;
    a |= a >> 8;
    return 32 - pe.By(a | (a >> 16));
  };
  dc.__name__ = "8B";
  dc.Ie = function (a, b) {
    if (0 < a) b += a;
    else
      switch (a) {
        case -3:
          b <<= 1;
          break;
        case -2:
          b = ((3 * b) >> 1) + 1;
          break;
        case -1:
          a = b + 1;
          b = (a >> 3) + (9 > a ? 3 : 6) + a;
          break;
        case 0:
          throw q.G("out of space");
      }
    return b;
  };
  R.__name__ = "8C";
  R.we = function (a, b, c) {
    if (0 == c) return [];
    var d = Array(c);
    if (0 == b)
      for (var e = 0; e < c; ) {
        var f = e++;
        d[f] = a[f];
      }
    else for (e = b, c = b + c; e < c; ) (f = e++), (d[f - b] = a[f]);
    return d;
  };
  R.ib = function (a, b, c, d, e) {
    if (0 < e)
      if (a == c)
        if (b < d) {
          var f = b + e;
          b = d + e;
          for (var g = 0; g < e; ) g++, --f, --b, (a[b] = a[f]);
        } else {
          if (b > d)
            for (f = b, b = d, g = 0; g < e; ) g++, (a[b] = a[f]), ++f, ++b;
        }
      else if (0 == b && 0 == d) for (g = 0; g < e; ) (f = g++), (c[f] = a[f]);
      else if (0 == b) for (g = 0; g < e; ) (f = g++), (c[d + f] = a[f]);
      else if (0 == d) for (g = 0; g < e; ) (f = g++), (c[f] = a[b + f]);
      else for (g = 0; g < e; ) (f = g++), (c[d + f] = a[b + f]);
  };
  R.R = function (a, b, c, d) {
    null == d && (d = 0);
    null == c && (c = 0);
    for (d = 0 >= d ? a.length : c + d; c < d; ) a[c++] = b;
    return a;
  };
  R.ge = function (a) {
    var b, c;
    null == c && (c = 0);
    null == b && (b = 0);
    for (c = 0 >= c ? a.length : b + c; b < c; ) a[b++] = null;
  };
  R.Xu = function (a, b, c) {
    for (var d = 0, e, f = c + 1; d < f; )
      (e = d + ((f - d) >> 1)), a[e] < b ? (d = e + 1) : (f = e);
    return d <= c && a[d] == b ? d : ~d;
  };
  Oc.__name__ = "8D";
  Oc.hp = function () {
    return Math.random();
  };
  Oc.Jz = function (a) {
    Oc.hp = a;
  };
  var Gb = (La.e2 = { Ac: !0, zc: ["i0", "i1", "i2"] });
  Gb.i0 = { I: 0, T: "e2", toString: I };
  Gb.i1 = { I: 1, T: "e2", toString: I };
  Gb.i2 = { I: 2, T: "e2", toString: I };
  Gb.fd = [Gb.i0, Gb.i1, Gb.i2];
  la.__name__ = "8E";
  la.co = function (a, b) {
    var c = new Q("^([a-z]{2})-([a-z]{2})$", "i");
    c.match(a) && (a = c.ya(1).toLowerCase());
    la.lk = a;
    (new Q("^[a-z][a-z]$", "").match(a) && null != a) || (la.lk = la.Uv());
    ka.Wa(b, function (a) {
      return a == la.lk;
    }) || (la.lk = "en");
  };
  la.jx = function (a, b) {
    var c = a.split("\n");
    a = c.length;
    var d = Array(a);
    la.fl = d;
    d = Array(a);
    la.Da = d;
    d = 0;
    for (var e = a; d < e; ) {
      a = d++;
      var f = c[a];
      f = f.replace(/\\n/g, "\n");
      la.fl[a] = f;
      la.Da[a] = new Q("::(\\w+)::", "").match(c[a]);
    }
    if (null != b) {
      c = Object.create(null);
      d = [];
      for (a = 0; a < b.length; )
        (f = b[a++]), (e = b[a++]), (c[f] = e), d.push(f);
      b = new Q(d.join("|"), "");
      d = 0;
      for (e = la.fl.length; d < e; )
        for (a = d++, f = la.fl[a]; b.match(f); )
          (a = c[b.ya(0)]), (f = f.replace(b.r, a));
    }
  };
  la.translate = function (a) {
    var b = a.I,
      c = la.fl[b];
    if (!la.Da[b]) return c;
    a = Qe.ew(a);
    if (0 == a.length) return c;
    for (b = 0; b < a.length; ) {
      var d = a[b];
      ++b;
      c = c.replace(/::(\w+)::/, y.Ja(d));
    }
    return c;
  };
  la.Uv = function () {
    var a = null;
    try {
      var b = new Q("lang=(\\w\\w(?:-\\w\\w)?)", "");
      b.match(window.location.href) && (a = b.ya(1));
    } catch (c) {}
    null == a && (a = "en");
    return a;
  };
  Y.__name__ = "8F";
  Y.Ya = function () {
    return Ua.Ca();
  };
  Y.wm = function () {
    return Ta.Ca();
  };
  var Aa = (La.e3 = { Ac: !0, zc: ["i0", "i1", "i2", "i3"] });
  Aa.i0 = { I: 0, T: "e3", toString: I };
  Aa.i1 = { I: 1, T: "e3", toString: I };
  Aa.i2 = { I: 2, T: "e3", toString: I };
  Aa.i3 = { I: 3, T: "e3", toString: I };
  Aa.fd = [Aa.i0, Aa.i1, Aa.i2, Aa.i3];
  Jf.__name__ = "90";
  Jf.prototype = { j: Jf };
  Ta.__name__ = "91";
  Ta.Ca = function () {
    null == Ta.kk && (Ta.kk = new Ta());
    return Ta.kk;
  };
  Ta.cc = function () {};
  Ta.A = Wa;
  Ta.prototype = t(Wa.prototype, {
    m: function () {
      Wa.prototype.m.call(this);
      this.disable();
      Ta.kk = null;
    },
    enable: function () {
      this.enabled ||
        ((this.enabled = !0),
        window.addEventListener("keydown", D(this, this.bs), !0),
        window.addEventListener("keyup", D(this, this.cs), !0));
    },
    disable: function () {
      this.enabled &&
        ((this.enabled = !1),
        window.removeEventListener("keydown", D(this, this.bs), !0),
        window.removeEventListener("keyup", D(this, this.cs), !0));
    },
    Jc: function (a, b) {
      Ta.cc(a, b, this.bg);
      a = new If(this, b, a);
      for (b = this.list; null != b; )
        (this.next = b.next),
          (b = this.current = b.Fa),
          (a.D = b),
          b(a),
          (b = this.next);
      this.current = this.next = null;
    },
    bs: function (a) {
      var b = a.keyCode;
      if (!this.keys[b]) {
        this.keys[b] = !0;
        this.order[b] += 1;
        this.bg.shift = a.shiftKey;
        this.bg.control = a.ctrlKey;
        this.bg.alt = a.altKey;
        switch (a.location) {
          case 1:
            var c = Aa.i1;
            break;
          case 2:
            c = Aa.i2;
            break;
          case 3:
            c = Aa.i3;
            break;
          default:
            c = Aa.i0;
        }
        this.location = c;
        this.event = a;
        this.enabled && this.Jc(!0, b);
        this.event = null;
      }
    },
    cs: function (a) {
      var b = a.keyCode;
      this.keys[b] = !1;
      this.bg.shift = a.shiftKey;
      this.bg.control = a.ctrlKey;
      this.bg.alt = a.altKey;
      switch (a.location) {
        case 1:
          a = Aa.i1;
          break;
        case 2:
          a = Aa.i2;
          break;
        case 3:
          a = Aa.i3;
          break;
        default:
          a = Aa.i0;
      }
      this.location = a;
      this.enabled && this.Jc(!1, b);
    },
    j: Ta,
  });
  If.__name__ = "92";
  If.prototype = { j: If };
  Ua.__name__ = "93";
  Ua.Ca = function () {
    null == Ua.Ok && (Ua.Ok = new Ua());
    return Ua.Ok;
  };
  Ua.cc = function () {};
  Ua.A = Wa;
  Ua.prototype = t(Wa.prototype, {
    Vj: function () {
      var a = this.Ga,
        b = a.b,
        c = a.a;
      a = new r();
      a.b = b;
      a.a = c;
      return a;
    },
    m: function () {
      Wa.prototype.m.call(this);
      this.disable();
      this.element = null;
      Ua.Ok = null;
    },
    enable: function () {
      if (!this.enabled) {
        this.enabled = !0;
        var a = this.pt() && { passive: !1 },
          b = window;
        b.addEventListener("mousedown", D(this, this.ds));
        b.addEventListener("mouseup", D(this, this.fs));
        b.addEventListener("mousemove", D(this, this.es));
        b.addEventListener("touchstart", D(this, this.os), a);
        b.addEventListener("touchend", D(this, this.Gk));
        b.addEventListener("touchcancel", D(this, this.Gk));
        b.addEventListener("touchmove", D(this, this.ns));
        b.addEventListener("mousewheel", D(this, this.Fk), a);
        b.addEventListener("DOMMouseScroll", D(this, this.Fk), a);
      }
    },
    disable: function () {
      if (this.enabled) {
        this.enabled = !1;
        var a = window;
        a.removeEventListener("mousedown", D(this, this.ds));
        a.removeEventListener("mouseup", D(this, this.fs));
        a.removeEventListener("mousemove", D(this, this.es));
        a.removeEventListener("touchstart", D(this, this.os));
        a.removeEventListener("touchend", D(this, this.Gk));
        a.removeEventListener("touchcancel", D(this, this.Gk));
        a.removeEventListener("touchmove", D(this, this.ns));
        a.removeEventListener("mousewheel", D(this, this.Fk));
        a.removeEventListener("DOMMouseScroll", D(this, this.Fk));
      }
    },
    ds: function (a) {
      var b = a.which;
      this.Dc = (this.Dc & ~(1 << b)) | (1 << b);
      0 != (this.xj & (1 << a.which)) &&
        this.Jc(a.clientX, a.clientY, 0, a.which);
    },
    fs: function (a) {
      var b = a.which;
      this.Dc = (this.Dc & ~(1 << b)) | (0 << b);
      0 != (this.xj & (1 << a.which)) &&
        this.Jc(a.clientX, a.clientY, 1, a.which);
    },
    es: function (a) {
      0 < this.eg || this.Jc(a.clientX, a.clientY, 2, 0);
    },
    os: function (a) {
      this.cancel(a);
      a = a.changedTouches;
      if (1 == this.maxTouchPoints) {
        if (!(null != this.first || 1 < a.length)) {
          this.first = a[0];
          var b = 1;
          this.Dc = (this.Dc & ~(1 << b)) | (1 << b);
          this.eg = 1;
          this.Jc(this.first.clientX, this.first.clientY, 0, 4);
        }
      } else
        for (var c = this.touches, d = 0; d < a.length; ) {
          b = a[d];
          ++d;
          var e = this.eg < this.maxTouchPoints,
            f = e ? (0 < this.Fm.length ? this.Fm.pop() : this.hy++) : null;
          c["" + b.identifier] = f;
          e && (this.Jc(b.clientX, b.clientY, 0, 4 + f), this.eg++);
        }
    },
    Gk: function (a) {
      "touchend" == a.type && this.cancel(a);
      a = a.changedTouches;
      if (1 == this.maxTouchPoints) {
        if (null != this.first)
          for (var b = 0; b < a.length; ) {
            var c = a[b];
            ++b;
            if (c.identifier == this.first.identifier) {
              this.eg = 0;
              this.Dc = (this.Dc & -3) | 0;
              this.first = null;
              this.Jc(c.clientX, c.clientY, 1, 4);
              break;
            }
          }
      } else {
        var d = this.touches;
        for (b = 0; b < a.length; ) {
          c = a[b];
          ++b;
          var e = "" + c.identifier,
            f = d[e];
          delete d[e];
          null != f &&
            (this.eg--,
            this.Fm.push(f),
            this.Jc(c.clientX, c.clientY, 1, 4 + f));
        }
      }
    },
    ns: function (a) {
      this.cancel(a);
      a = a.changedTouches;
      if (1 == this.maxTouchPoints) {
        if (null != this.first)
          for (var b = 0; b < a.length; ) {
            var c = a[b];
            ++b;
            if (c.identifier == this.first.identifier) {
              this.Jc(c.clientX, c.clientY, 2, 4);
              break;
            }
          }
      } else {
        var d = this.touches;
        for (b = 0; b < a.length; ) {
          c = a[b];
          ++b;
          var e = d["" + c.identifier];
          null != e && this.Jc(c.clientX, c.clientY, 2, 4 + e);
        }
      }
    },
    Fk: function (a) {
      this.Jc(Math.max(-1, Math.min(1, a.wheelDelta || -a.detail)), 0, 3, -1);
    },
    Jc: function (a, b, c, d) {
      Ua.cc(a, b, c, d);
      if (3 != c) {
        if (null != this.element) {
          var e = this.element.getBoundingClientRect();
          a < e.left && (a = e.left);
          a > e.right && (a = e.right);
          a -= e.left;
          b < e.top && (b = e.top);
          b > e.bottom && (b = e.bottom);
          b -= e.top;
        } else 0 > a && (a = 0), 0 > b && (b = 0);
        a = (a * this.fc * this.scale.b) | 0;
        b = (b * this.fc * this.scale.a) | 0;
      }
      e = this.Ga;
      e.b = a;
      e.a = b;
      e = new Hf(this);
      e.x = this.Ga.b;
      e.y = this.Ga.a;
      e.type = c;
      e.id = d;
      if (this.tB || null == this.buffer) {
        for (a = this.list; null != a; )
          (this.next = a.next),
            (a = this.current = a.Fa),
            (e.D = a),
            a(e),
            (a = this.next);
        this.current = this.next = null;
      } else
        (e = this.buffer),
          e.Lc(e.g + 5),
          (e.c[e.g++] = a | 0),
          (e.c[e.g++] = b | 0),
          (e.c[e.g++] = c),
          (e.c[e.g++] = d);
    },
    cancel: function (a) {
      a.preventDefault();
    },
    pt: function () {
      var a = !1;
      try {
        var b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
        window.addEventListener("test", null, b);
        window.removeEventListener("test", null, b);
      } catch (c) {}
      return a;
    },
    j: Ua,
  });
  Hf.__name__ = "94";
  Hf.prototype = { j: Hf };
  var kb = {
      ly: function (a, b, c, d) {
        var e = new G();
        e.b = a;
        e.a = b;
        e.f = a + c;
        e.d = b + d;
        return e;
      },
      offset: function (a, b, c) {
        a.b -= b;
        a.a -= c;
        a.f += b;
        a.d += c;
      },
      th: function (a, b, c) {
        if (c) {
          c = (a.f - a.b) / 2;
          var d = a.b + c;
          a.b = d - c * b;
          a.f = d + c * b;
        } else (a.b *= b), (a.f *= b);
      },
      Nc: function (a, b, c) {
        if (c) {
          c = (a.d - a.a) / 2;
          var d = a.a + c;
          a.a = d - c * b;
          a.d = d + c * b;
        } else (a.a *= b), (a.d *= b);
      },
    },
    og = {
      xt: function (a) {
        return (
          "rgba(" +
          (Math.round(255 * a.b) & 255) +
          "," +
          (Math.round(255 * a.a) & 255) +
          "," +
          (Math.round(255 * a.f) & 255) +
          "," +
          +a.d.toFixed(2) +
          ")"
        );
      },
    };
  N.__name__ = "95";
  N.Ux = function () {
    return function (a) {
      return a;
    };
  };
  N.lq = function (a) {
    var b = (-100 > a ? -100 : 100 < a ? 100 : a) / 100;
    return function (a) {
      return 0 == b
        ? a
        : 0 > b
        ? a * (a * -b + 1 + b)
        : a * ((2 - a) * b + (1 - b));
    };
  };
  N.Hi = function (a) {
    return function (b) {
      return Math.pow(b, a);
    };
  };
  N.Py = function () {
    return function (a) {
      return 1 > (a *= 2)
        ? 0.5 * Math.pow(a, 2)
        : 1 - 0.5 * Math.abs(Math.pow(2 - a, 2));
    };
  };
  N.qd = function (a) {
    return function (b) {
      return 1 - Math.pow(1 - b, a);
    };
  };
  N.sd = function (a) {
    null == a && (a = 0.1);
    var b = 17.0158 * a;
    return function (a) {
      --a;
      return a * a * ((b + 1) * a + b) + 1;
    };
  };
  N.Zh = function (a, b) {
    null == b && (b = 0.3);
    null == a && (a = 0);
    if (1 > a) {
      var c = 1;
      var d = 0.25 * b;
    } else (c = a), (d = (b / 6.283185307179586) * Math.asin(1 / c));
    return function (a) {
      return (
        c * Math.pow(2, -10 * a) * Math.sin((6.283185307179586 * (a - d)) / b) +
        1
      );
    };
  };
  Qa.__name__ = "96";
  Qa.map = function (a, b, c, d, e) {
    return d + ((a - b) / (c - b)) * (e - d);
  };
  var Xc = {
      tj: function (a, b) {
        a.b = b.b;
        a.a = b.a;
        a.f = b.f;
        a.d = b.d;
        a.e = b.e;
        a.D = b.D;
        a.Xa = b.Xa;
        a.C = b.C;
        a.Qa = b.Qa;
        return a;
      },
      og: function (a) {
        a.b = 1;
        a.a = 0;
        a.f = 0;
        a.d = 0;
        a.e = 1;
        a.D = 0;
        a.Xa = 0;
        a.C = 0;
        a.Qa = 1;
        return a;
      },
    },
    ya = {
      xf: function () {
        var a = new Gf();
        ya.og(a);
        return a;
      },
      tj: function (a, b) {
        a.b = b.b;
        a.a = b.a;
        a.f = b.f;
        a.d = b.d;
        a.e = b.e;
        a.D = b.D;
        a.Xa = b.Xa;
        a.C = b.C;
        a.Qa = b.Qa;
        a.yb = b.yb;
        a.k = b.k;
        a.Ra = b.Ra;
        a.Jb = b.Jb;
        a.n = b.n;
        a.eb = b.eb;
        a.p = b.p;
        return a;
      },
      og: function (a) {
        a.b = 1;
        a.a = 0;
        a.f = 0;
        a.d = 0;
        a.e = 0;
        a.D = 1;
        a.Xa = 0;
        a.C = 0;
        a.Qa = 0;
        a.yb = 0;
        a.k = 1;
        a.Ra = 0;
        a.Jb = 0;
        a.n = 0;
        a.eb = 0;
        a.p = 1;
        return a;
      },
      Us: function (a, b, c, d) {
        a.b = 1;
        a.a = 0;
        a.f = 0;
        a.d = b;
        a.e = 0;
        a.D = 1;
        a.Xa = 0;
        a.C = c;
        a.Qa = 0;
        a.yb = 0;
        a.k = 1;
        a.Ra = d;
        a.Jb = 0;
        a.n = 0;
        a.eb = 0;
        a.p = 1;
        return a;
      },
      sv: function (a, b) {
        var c = Math.sin(b);
        b = Math.cos(b);
        var d = a.b,
          e = a.e;
        a.b = b * d - c * e;
        a.e = c * d + b * e;
        d = a.a;
        e = a.D;
        a.a = b * d - c * e;
        a.D = c * d + b * e;
        d = a.f;
        e = a.Xa;
        a.f = b * d - c * e;
        a.Xa = c * d + b * e;
        d = a.d;
        e = a.C;
        a.d = b * d - c * e;
        a.C = c * d + b * e;
      },
      Dp: function (a, b, c, d) {
        a.b *= b;
        a.a *= b;
        a.f *= b;
        a.d *= b;
        a.e *= c;
        a.D *= c;
        a.Xa *= c;
        a.C *= c;
        a.Qa *= d;
        a.yb *= d;
        a.k *= d;
        a.Ra *= d;
      },
      DA: function (a, b) {
        var c = b.b,
          d = b.a,
          e = b.f,
          f = b.d,
          g = b.e,
          h = b.D,
          k = b.Xa,
          m = b.C,
          x = b.Qa,
          u = b.yb,
          p = b.k,
          ba = b.Ra,
          l = b.Jb,
          n = b.n,
          v = b.eb;
        b = b.p;
        var t = a.b,
          q = a.a,
          r = a.f,
          w = a.d;
        a.b = t * c + q * g + r * x + w * l;
        a.a = t * d + q * h + r * u + w * n;
        a.f = t * e + q * k + r * p + w * v;
        a.d = t * f + q * m + r * ba + w * b;
        t = a.e;
        q = a.D;
        r = a.Xa;
        w = a.C;
        a.e = t * c + q * g + r * x + w * l;
        a.D = t * d + q * h + r * u + w * n;
        a.Xa = t * e + q * k + r * p + w * v;
        a.C = t * f + q * m + r * ba + w * b;
        t = a.Qa;
        q = a.yb;
        r = a.k;
        w = a.Ra;
        a.Qa = t * c + q * g + r * x + w * l;
        a.yb = t * d + q * h + r * u + w * n;
        a.k = t * e + q * k + r * p + w * v;
        a.Ra = t * f + q * m + r * ba + w * b;
        t = a.Jb;
        q = a.n;
        r = a.eb;
        w = a.p;
        a.Jb = t * c + q * g + r * x + w * l;
        a.n = t * d + q * h + r * u + w * n;
        a.eb = t * e + q * k + r * p + w * v;
        a.p = t * f + q * m + r * ba + w * b;
      },
      br: function (a, b) {
        var c = a.b * a.D - a.a * a.e,
          d = a.b * a.Xa - a.f * a.e,
          e = a.b * a.C - a.d * a.e,
          f = a.a * a.Xa - a.f * a.D,
          g = a.a * a.C - a.d * a.D,
          h = a.f * a.C - a.d * a.Xa,
          k = a.Qa * a.n - a.yb * a.Jb,
          m = a.Qa * a.eb - a.k * a.Jb,
          x = a.Qa * a.p - a.Ra * a.Jb,
          u = a.yb * a.eb - a.k * a.n,
          p = a.yb * a.p - a.Ra * a.n,
          l = a.k * a.p - a.Ra * a.eb,
          n = 1 / (c * l - d * p + e * u + f * x - g * m + h * k);
        b.b = (a.D * l - a.Xa * p + a.C * u) * n;
        b.e = (-a.e * l + a.Xa * x - a.C * m) * n;
        b.Qa = (a.e * p - a.D * x + a.C * k) * n;
        b.Jb = (-a.e * u + a.D * m - a.Xa * k) * n;
        b.a = (-a.a * l + a.f * p - a.d * u) * n;
        b.D = (a.b * l - a.f * x + a.d * m) * n;
        b.yb = (-a.b * p + a.a * x - a.d * k) * n;
        b.n = (a.b * u - a.a * m + a.f * k) * n;
        b.f = (a.n * h - a.eb * g + a.p * f) * n;
        b.Xa = (-a.Jb * h + a.eb * e - a.p * d) * n;
        b.k = (a.Jb * g - a.n * e + a.p * c) * n;
        b.eb = (-a.Jb * f + a.n * d - a.eb * c) * n;
        b.d = (-a.yb * h + a.k * g - a.Ra * f) * n;
        b.C = (a.Qa * h - a.k * e + a.Ra * d) * n;
        b.Ra = (-a.Qa * g + a.yb * e - a.Ra * c) * n;
        b.p = (a.Qa * f - a.yb * d + a.k * c) * n;
        return b;
      },
    },
    va = {
      Sg: function (a) {
        return a.f;
      },
      Yz: function (a, b) {
        return (a.f = b);
      },
      jf: function (a, b, c) {
        a.b = b.b;
        a.a = b.a;
        a.f = b.b * c.b + b.a * c.a;
        return a;
      },
      al: function (a, b, c) {
        var d = c.b - b.b;
        c = c.a - b.a;
        var e = Math.sqrt(d * d + c * c);
        a.b = -(c / e);
        a.a = d / e;
        va.Yz(a, a.b * b.b + a.a * b.a);
        return a;
      },
    },
    pg = {
      normalize: function (a) {
        var b = a.f * a.f + a.d * a.d;
        0 < b && ((b = Math.sqrt(b)), (a.f /= b), (a.d /= b));
        return b;
      },
    };
  r.__name__ = "97";
  r.prototype = { j: r };
  Ia.__name__ = "98";
  Ia.prototype = { j: Ia };
  G.__name__ = "99";
  G.prototype = { j: G };
  Tc.__name__ = "9A";
  Tc.prototype = { j: Tc };
  Wc.__name__ = "9B";
  Wc.prototype = { j: Wc };
  Gf.__name__ = "9C";
  Gf.prototype = { j: Gf };
  var ag = {
      ez: function (a, b) {
        var c = b.b,
          d = b.a,
          e = 2 * (c * a.b + d * a.a);
        b.b = c - e * a.b;
        b.a = d - e * a.a;
      },
      MA: function (a) {
        var b = a.b,
          c = a.a;
        a = new Ia();
        a.b = b;
        a.a = c;
        a.f = 0;
        return a;
      },
      Xw: function (a) {
        return Math.sqrt(a.b * a.b + a.a * a.a);
      },
      normalize: function (a) {
        var b = a.b * a.b + a.a * a.a;
        0 < b && ((b = Math.sqrt(b)), (a.b /= b), (a.a /= b));
        return b;
      },
    },
    Ub = {
      xe: function (a) {
        var b = a.b,
          c = a.a;
        a = new r();
        a.b = b;
        a.a = c;
        return a;
      },
    };
  oe.__name__ = "9D";
  oe.tA = function (a, b) {
    return a.b > b.b && a.b < b.f && a.a > b.a ? a.a < b.d : !1;
  };
  oe.uA = function (a, b) {
    return 0 < a && 1 > a && 0 < b ? 1 > b : !1;
  };
  hg.__name__ = "9E";
  hg.Eh = function (a, b, c, d, e) {
    a -= c;
    b -= d;
    return a * a + b * b < e * e;
  };
  ad.__name__ = "9F";
  ad.Eh = function (a, b, c, d, e) {
    return 0 > a * c + b * d - e;
  };
  gg.__name__ = "A0";
  gg.hw = function (a, b, c, d, e) {
    return a * c + b * d - e;
  };
  Ff.__name__ = "A1";
  Ff.prototype = {
    iw: function (a, b, c, d, e, f, g, h) {
      h = f * a + g * b - h;
      if ((0 > h ? -h : h) <= c)
        return (
          (this.Nk.b = a - f * h), (this.Nk.a = b - g * h), (this.t = 0), !0
        );
      var k = f * d + g * e;
      if (0 <= k * h) return (this.t = -1), !1;
      c = 0 < h ? c : -c;
      this.t = (c - h) / k;
      this.Nk.b = a + this.t * d - c * f;
      this.Nk.a = b + this.t * e - c * g;
      return !0;
    },
    j: Ff,
  };
  Ef.__name__ = "A2";
  Ef.prototype = {
    test: function () {
      var a = 0,
        b = this.ak,
        c = this.Qq,
        d = this.Tf,
        e = this.Sf;
      if (1e-6 > Math.abs(e.b)) {
        if (d.b < c.b || d.b > c.f) return !1;
      } else {
        var f = (c.b - d.b) / e.b;
        var g = (c.f - d.b) / e.b;
        if (f > g) {
          var h = f;
          f = g;
          g = h;
        }
        f > a && (a = f);
        g < b && (b = g);
        if (a > b) return !1;
      }
      if (1e-6 > Math.abs(e.a)) {
        if (d.a < c.a || d.a > c.d) return !1;
      } else if (
        ((f = (c.a - d.a) / e.a),
        (g = (c.d - d.a) / e.a),
        f > g && ((h = f), (f = g), (g = h)),
        f > a && (a = f),
        g < b && (b = g),
        a > b)
      )
        return !1;
      this.af = a;
      this.gg.b = d.b + e.b * a;
      this.gg.a = d.a + e.a * a;
      return !0;
    },
    j: Ef,
  };
  Df.__name__ = "A3";
  Df.prototype = {
    test: function () {
      var a = this.Tf.b,
        b = this.Tf.a,
        c = this.Sf.b,
        d = this.Sf.a,
        e = a - this.Hm.b,
        f = b - this.Hm.a,
        g = e * c + f * d;
      e = e * e + f * f - this.Im * this.Im;
      if (0 < e && 0 < g) return !1;
      e = g * g - e;
      if (0 > e) return !1;
      g = -g - Math.sqrt(e);
      if (g > this.ak) return !1;
      0 > g
        ? ((this.gg.b = a), (this.gg.a = b), (this.af = 0))
        : ((this.gg.b = a + g * c), (this.gg.a = b + g * d), (this.af = g));
      return !0;
    },
    j: Df,
  };
  ne.__name__ = "A4";
  ne.prototype = {
    bt: function (a) {
      this.Rs = a;
    },
    Ji: function () {
      throw q.G("override for implementation");
    },
    Id: function (a, b) {
      a -= 0.4999;
      return Math.round(a + (b + 0.4999 - a) * this.Ji());
    },
    j: ne,
  };
  Nc.__name__ = "A5";
  Nc.A = ne;
  Nc.prototype = t(ne.prototype, {
    Ji: function () {
      return (this.Rs = (16807 * this.Rs) % 2147483647) / 2147483647;
    },
    j: Nc,
  });
  Ga.__name__ = "A6";
  Ga.Id = function (a, b) {
    a -= 0.4999;
    return Math.round(a + (b + 0.4999 - a) * Math.random());
  };
  Ga.Xd = function (a, b) {
    return a + (b - a) * Math.random();
  };
  Ga.nq = function (a) {
    return Ga.Xd(-a, a);
  };
  $c.__name__ = "A7";
  $c.prototype = {
    Vc: function () {
      0 != this.Bf && this.yj.Ha(this.Dg);
      this.Bf = this.Dg = 0;
      return this.yj.Vc();
    },
    fb: function (a, b) {
      32 < b && (b = 32);
      for (var c = 0, d = 0; d < b; ) {
        var e = (a >> d) & 1;
        8 == this.Bf &&
          (0 != this.Bf && this.yj.Ha(this.Dg), (this.Bf = this.Dg = 0));
        this.Dg |= e << this.Bf;
        this.Bf++;
        ++c;
        ++d;
      }
      return c;
    },
    j: $c,
  };
  $d.__name__ = "A8";
  $d.tm = function (a) {
    return B.wf(a, ng)
      ? ((a = a.__name__), C.substr(a, a.lastIndexOf(".") + 1, null))
      : null != B.ld(a)
      ? $d.tm(B.ld(a))
      : null;
  };
  Cf.__name__ = "A9";
  Cf.encode = function (a, b) {
    null == b && (b = a);
    for (var c = 0, d = 0, e = a.length; d < e; ) {
      var f = a[d];
      b[d] = f - c;
      c = f;
      ++d;
    }
  };
  fg.__name__ = "AA";
  fg.Ug = function (a, b) {
    null == b && (b = ".");
    var c = a + "";
    if (1e6 > a) {
      if (1e3 > a) return c;
      if (1e4 > a) return C.substr(c, 0, 1) + b + C.substr(c, 1, null);
      if (1e5 > a) return C.substr(c, 0, 2) + b + C.substr(c, 2, null);
      if (1e6 > a) return C.substr(c, 0, 3) + b + C.substr(c, 3, null);
    } else {
      if (1e7 > a)
        return (
          C.substr(c, 0, 1) + b + C.substr(c, 1, 3) + b + C.substr(c, 4, null)
        );
      if (1e8 > a)
        return (
          C.substr(c, 0, 2) + b + C.substr(c, 2, 3) + b + C.substr(c, 5, null)
        );
      if (1e9 > a)
        return (
          C.substr(c, 0, 3) + b + C.substr(c, 3, 3) + b + C.substr(c, 6, null)
        );
    }
    return 1e10 > a
      ? C.substr(c, 0, 1) +
          b +
          C.substr(c, 1, 3) +
          b +
          C.substr(c, 4, 3) +
          b +
          C.substr(c, 7, null)
      : null;
  };
  me.__name__ = "AB";
  me.prototype = { j: me };
  eg.__name__ = "AC";
  eg.__isInterface__ = !0;
  le.__name__ = "AD";
  le.Nx = function (a) {
    return !new Q("\\S", "").match(a);
  };
  le.hB = function (a) {
    for (var b = 0, c, d = 0, e = a.length; d < e; ) {
      c = d++;
      c = C.Aj(a, c);
      if (127 >= c) c = 1;
      else if (2047 >= c) c = 2;
      else if (65535 >= c) c = 3;
      else if (1114111 >= c) c = 4;
      else throw q.G("Invalid Unicode character : 0x" + Ka.dx(c));
      b += c;
    }
    return b;
  };
  dg.__name__ = "AE";
  dg.repeat = function (a, b) {
    for (var c = "", d = 0; d < b; ) d++, (c += null == a ? "null" : "" + a);
    return c;
  };
  sa.__name__ = "AF";
  sa.wq = function () {
    return null;
  };
  sa.get = function (a) {
    return sa.Eq().getItem(a);
  };
  sa.set = function (a, b) {
    sa.Eq().setItem(a, b);
  };
  sa.Eq = function () {
    if (null != sa.Dh) return sa.Dh;
    sa.Dh = sa.wq();
    if (null != sa.Dh) return sa.Dh;
    sa.Dh = jg.km();
    return sa.Dh;
  };
  ke.__name__ = "B0";
  ke.__isInterface__ = !0;
  Bf.__name__ = "B1";
  Bf.prototype = { j: Bf };
  Af.__name__ = "B2";
  Af.prototype = { j: Af };
  yc.__name__ = "B3";
  yc.prototype = {
    m: function () {
      for (var a = this.controllers, b; null != a; )
        (b = a.next), a.m(), (a = b);
    },
    la: function (a) {
      null != this.controllers && (a.next = this.controllers);
      this.controllers = a;
      a.object = this;
    },
    detach: function (a) {
      if (this.controllers == a) this.controllers = this.controllers.next;
      else {
        for (var b = this.controllers; b.next != a; ) b = b.next;
        b.next = a.next;
      }
      a.next = null;
      a.object = null;
    },
    kw: function (a) {
      for (var b = this.controllers; null != b; ) {
        if (b.type == a) return b;
        b = b.next;
      }
      return null;
    },
    Go: function (a) {
      if (null == this.controllers || !this.Iv) return !1;
      for (var b = !1, c = this.controllers, d; null != c; )
        (d = c.next), c.update(a) && (b = !0), (c = d);
      return b;
    },
    j: yc,
  };
  var za = (La.e4 = { Ac: !0, zc: ["i0", "i1", "i2"] });
  za.i0 = { I: 0, T: "e4", toString: I };
  za.i1 = { I: 1, T: "e4", toString: I };
  za.i2 = { I: 2, T: "e4", toString: I };
  za.fd = [za.i0, za.i1, za.i2];
  aa.__name__ = "B4";
  aa.__interfaces__ = [ke];
  aa.prototype = {
    m: function () {
      null != this.object && (this.object.detach(this), (this.object = null));
      this.repeat = null;
      this.type = -1;
      aa.Zo--;
    },
    wk: function () {
      this.Cc = !0;
      0 != this.od && aa.Jh--;
      this.od = !1;
      this.Vb = 0;
      this.Xc = aa.$o;
    },
    update: function (a) {
      return this.od
        ? ((this.Vb += a * this.$i),
          null == this.object ? !1 : this.oh(this.Vb))
        : this.Cc
        ? ((this.Vb += a), this.Vb > aa.$o && this.m(), !0)
        : !1;
    },
    oh: function () {
      throw q.G("override for implementation");
    },
    im: function () {
      var a = this.Vb + this.zi;
      if (this.repeat == za.i0) {
        var b = this.jc,
          c = this.Xc;
        return a < b ? b : a > c ? c : a;
      }
      b = this.Xc - this.jc;
      return 0 < b
        ? ((c = (a - this.jc) / b),
          (a = Math.floor(c)),
          (c -= a),
          this.repeat == za.i1
            ? this.jc + c * b
            : 0 == (a & 1)
            ? this.jc + c * b
            : this.Xc - c * b)
        : this.jc;
    },
    Hg: function (a) {
      var b = this.od;
      a.od != b && (b ? aa.Jh++ : aa.Jh--);
      a.od = b;
      a.repeat = this.repeat;
      a.jc = this.jc;
      a.Xc = this.Xc;
      a.zi = this.zi;
      a.$i = this.$i;
      a.Vb = this.Vb;
      a.Cc = this.Cc;
    },
    j: aa,
  };
  xc.__name__ = "B5";
  xc.A = aa;
  xc.prototype = t(aa.prototype, {
    m: function () {
      this.nh = this.mh = this.Pb = null;
      aa.prototype.m.call(this);
    },
    play: function (a, b, c, d) {
      null == d && (d = 0);
      null == c && (c = -1);
      null == b && (b = 0);
      this.Pb = a;
      this.ih = b;
      this.ag = 0 > c ? a.frames.length - 1 : c;
      this.jc = this.Pb.ve[b];
      this.Xc = this.Pb.ve[this.ag + 1];
      this.Vb = this.jc;
      this.Vb += d;
      1 != this.od && aa.Jh++;
      this.od = !0;
      this.Cc = !1;
      this.index = -1;
      this.lastIndex = b;
      this.oh(this.Vb);
    },
    oh: function () {
      var a = this.im(),
        b = this.Pb.qg;
      if (1 == b) var c = (this.lastIndex = 0);
      else if (a >= this.Pb.bj) c = this.lastIndex = b - 1;
      else {
        if (0 < this.Pb.Pl) c = (a / this.Pb.Pl) | 0;
        else {
          c = 0;
          var d = this.Pb.ve,
            e = d[this.lastIndex + 1];
          if (a >= d[this.lastIndex] && a <= e) c = this.lastIndex;
          else if (16 > b)
            for (e = 0; e <= b; ) {
              if (d[e] >= a) {
                c = e - 1;
                break;
              }
              ++e;
            }
          else (c = R.Xu(d, a, b - 1)), 0 > c && ((c = ~c), --c);
        }
        this.lastIndex = c;
      }
      c < this.ih ? (c = this.ih) : c > this.ag && (c = this.ag);
      c != this.index &&
        ((this.index = c),
        this.nh(this.Pb.values[c], c, a),
        c >= this.ag &&
          (this.mh(),
          this.repeat == za.i0 &&
            (0 < this.Yk--
              ? ((this.Vb = this.jc),
                (this.index = -1),
                (this.lastIndex = this.ih),
                this.oh(this.Vb))
              : (this.wk(), (this.Pb = null)))));
      return !0;
    },
    Hg: function (a) {
      aa.prototype.Hg.call(this, a);
      a.index = this.index;
      a.lastIndex = this.lastIndex;
      a.Pb = this.Pb;
      a.ih = this.ih;
      a.ag = this.ag;
    },
    j: xc,
  });
  var W = (La.e5 = { Ac: !0, zc: "i0 i1 i2 i3 i4 i5".split(" ") });
  W.i0 = { I: 0, T: "e5", toString: I };
  W.i1 = { I: 1, T: "e5", toString: I };
  W.i2 = { I: 2, T: "e5", toString: I };
  W.i3 = { I: 3, T: "e5", toString: I };
  W.i4 = { I: 4, T: "e5", toString: I };
  W.i5 = { I: 5, T: "e5", toString: I };
  W.fd = [W.i0, W.i1, W.i2, W.i3, W.i4, W.i5];
  zf.__name__ = "B7";
  zf.prototype = { j: zf };
  yf.__name__ = "B8";
  yf.A = aa;
  yf.prototype = t(aa.prototype, {
    m: function () {
      this.un = null;
      aa.prototype.m.call(this);
    },
    oh: function (a) {
      var b = this.im(),
        c = this.data.ve,
        d;
      if (b <= c[0]) var e = (d = this.lastIndex = b = 0);
      else if (b >= c[this.data.qg - 1])
        (b = 0), (e = d = this.lastIndex = this.data.qg - 1);
      else if (b > c[this.lastIndex]) {
        for (d = this.lastIndex + 1; b >= c[d]; ) (this.lastIndex = d), ++d;
        e = this.lastIndex;
        b = (b - c[e]) / (c[d] - c[e]);
      } else if (b < c[this.lastIndex]) {
        for (d = this.lastIndex - 1; b <= c[d]; ) (this.lastIndex = d), --d;
        e = d;
        d = this.lastIndex;
        b = (b - c[e]) / (c[d] - c[e]);
      } else (b = 0), (e = d = this.lastIndex);
      this.Dz(e, d, b);
      this.KB(this.jr);
      return a > this.Xc && this.repeat == za.i0
        ? (null != this.un && (this.un(), (this.un = null)), this.wk(), !1)
        : !0;
    },
    Dz: function (a, b, c) {
      var d = this.data.parameters,
        e = this.jr;
      if (a != b) {
        c = this.data.Uc[a](c);
        var f = this.data.qB[a];
        null == f && (f = 0);
        if (0 != (f & (1 << W.i0.I))) {
          var g = W.i0.I,
            h = d[6 * a + g];
          e.th = h + (d[6 * b + g] - h) * c;
        }
        0 != (f & (1 << W.i1.I)) &&
          ((g = W.i1.I),
          (h = d[6 * a + g]),
          (e.Nc = h + (d[6 * b + g] - h) * c));
        0 != (f & (1 << W.i2.I)) &&
          ((g = W.i2.I),
          (h = d[6 * a + g]),
          (e.rotation = h + (d[6 * b + g] - h) * c));
        0 != (f & (1 << W.i3.I)) &&
          ((g = W.i3.I),
          (h = d[6 * a + g]),
          (e.Ct = h + (d[6 * b + g] - h) * c));
        0 != (f & (1 << W.i4.I)) &&
          ((g = W.i4.I),
          (h = d[6 * a + g]),
          (e.Dt = h + (d[6 * b + g] - h) * c));
        0 != (f & (1 << W.i5.I)) &&
          ((g = W.i5.I),
          (h = d[6 * a + g]),
          (e.alpha = h + (d[6 * b + g] - h) * c));
      } else
        (e.th = d[6 * b + W.i0.I]),
          (e.Nc = d[6 * b + W.i1.I]),
          (e.rotation = d[6 * b + W.i2.I]),
          (e.Ct = d[6 * b + W.i3.I]),
          (e.Dt = d[6 * b + W.i4.I]),
          (e.alpha = d[6 * b + W.i5.I]);
    },
    j: yf,
  });
  Zc.__name__ = "BA";
  Zc.A = aa;
  Zc.prototype = t(aa.prototype, {
    m: function () {
      this.pd = this.$c = this.Uc = null;
      aa.prototype.m.call(this);
    },
    ej: function (a, b, c, d, e) {
      this.key = a;
      this.oo = b;
      this.Oj = c;
      this.Uc = e;
      this.jc = this.Vb = 0;
      this.Xc = d;
      1 != this.od && aa.Jh++;
      this.od = !0;
      this.Cc = !1;
    },
    stop: function () {
      this.$c = this.pd = null;
      this.wk();
    },
    oh: function (a) {
      if (a >= this.Xc && this.repeat == za.i0)
        return this.wk(), this.$c(this.key, this.Oj), this.pd(this.key), !1;
      a = this.oo;
      a += (this.Oj - a) * this.Uc((this.im() - this.jc) / (this.Xc - this.jc));
      this.$c(this.key, a);
      return !0;
    },
    Hg: function (a) {
      aa.prototype.Hg.call(this, a);
      a.key = this.key;
      a.oo = this.oo;
      a.Oj = this.Oj;
      a.Uc = this.Uc;
    },
    j: Zc,
  });
  Bc.__name__ = "BB";
  Bc.prototype = {
    Cc: function () {
      this.Sa = null;
    },
    getContext: function () {
      throw q.G("override for implementation");
    },
    Kz: function (a) {
      this.Sa = a;
      a.yy(this);
      var b = this.getContext();
      null != b && a.xi(b);
    },
    Rb: function () {
      var a = this.size,
        b = a.b,
        c = a.a;
      a = new r();
      a.b = b;
      a.a = c;
      return a;
    },
    cx: function () {
      var a = this.viewport;
      return 0 < a.b || 0 < a.a || 1 > a.f ? !0 : 1 > a.d;
    },
    Bq: function () {
      this.Mo ||
        ((this.Mo = !0),
        (this.Bi.b = (this.size.b * this.viewport.b + 0.5) | 0),
        (this.Bi.a = (this.size.a * this.viewport.a + 0.5) | 0),
        (this.Bi.f = (this.size.b * this.viewport.f) | 0),
        (this.Bi.d = (this.size.a * this.viewport.d) | 0));
      var a = this.Bi,
        b = a.b,
        c = a.a,
        d = a.f,
        e = a.d;
      a = new Tc();
      a.b = b;
      a.a = c;
      a.f = d;
      a.d = e;
      return a;
    },
    resize: function (a, b) {
      var c = this.size;
      c.b = a;
      c.a = b;
      this.Mo = !1;
      this.Lp();
    },
    Lp: function () {
      throw q.G("override for implementation");
    },
    xi: function () {
      null != this.Sa && this.Sa.xi(this.getContext());
    },
    j: Bc,
  };
  sb.__name__ = "BC";
  sb.cc = function () {};
  sb.A = Bc;
  sb.prototype = t(Bc.prototype, {
    up: function () {},
    resize: function (a, b) {
      Bc.prototype.resize.call(this, a, b);
      this.Fd(this.Rb());
    },
    j: sb,
  });
  wb.__name__ = "BD";
  wb.prototype = {
    Az: function () {
      wb.current = this;
    },
    Vv: function (a) {
      if (!this.zh) {
        var b = this.Xk;
        null != b &&
          null != b.getContext() &&
          0 != b.Rb().b &&
          (this.fB(),
          (this.zd = 1),
          this.ao((this.Ij = vb.bp.Dl)),
          this.sn(),
          (a = this.Rp.Gv(a, this.Mr)),
          this.Wv(a),
          null != this.Jg && this.Ri(null),
          this.tn());
      }
    },
    clear: function () {},
    fB: function () {
      this.le = this.Cq();
      ya.br(this.le, this.yx);
      ya.tj(this.Wl, this.le);
      null != this.Df && ya.DA(this.Wl, this.Df.Tw());
    },
    Wv: function (a) {
      var b = a.c,
        c = 0;
      for (a = a.g; c < a; ) {
        var d = c++;
        this.Xv(b[d]);
      }
    },
    Xv: function (a) {
      var b = a.za;
      b.active && ((this.Sp = a), this.Si(a), 0 != this.zd && b.am(this));
    },
    Cq: function () {
      throw q.G("override for implementation");
    },
    createTexture: function (a, b, c) {
      var d = new of();
      d.dk = this.Sy;
      d.kj = this.Mt;
      d.Cz(b, !this.ot || this.ow);
      null != c && d.vz(c.tq());
      -1 != a && Z.hz(a, d);
      return d;
    },
    Vp: function (a) {
      Z.Wa(a) && (Z.get(a).m(), Z.XA(a));
    },
    sn: function () {},
    tn: function () {},
    Yp: function () {},
    Zp: function () {},
    xi: function () {},
    yy: function (a) {
      this.Xk = a;
    },
    qy: function () {
      this.Rp.Th = !0;
    },
    Si: function (a) {
      if (0 != this.Bc) {
        if (0 != (this.Bc & (1 << da.i0.I))) {
          var b = a.re[da.i0.I];
          b = null != b ? b.alpha : 1;
          b != this.zd && (this.zd = b);
        }
        0 != (this.Bc & (1 << da.i1.I)) &&
          ((b = a.re[da.i1.I]),
          (b = null != b ? b.Dl : vb.bp.Dl),
          b != this.Ij && ((this.Ij = b), this.ao(this.Ij)));
        0 != (this.Bc & (1 << da.i2.I)) &&
          ((b = a.re[da.i2.I]),
          null != b
            ? null != b.Lo && b.Lo != this.Jg && this.Ri(b.Lo, null != b.$)
            : null != this.Jg && this.Ri(null));
        0 != (this.Bc & (1 << da.i3.I)) &&
          ((b = a.re[da.i3.I]),
          null != b ? this.Ws(b.yv) : null != this.Vl && this.Ws(null));
      }
    },
    ao: function () {},
    Ri: function (a) {
      this.Jg = a;
    },
    Ws: function (a) {
      this.Vl = a;
    },
    j: wb,
  };
  bb.__name__ = "BE";
  bb.__interfaces__ = [ke];
  bb.A = cd;
  bb.prototype = t(cd.prototype, {
    m: function () {},
    am: function () {
      throw q.G("override for implementation");
    },
    j: bb,
  });
  Ac.__name__ = "BF";
  Ac.A = bb;
  Ac.prototype = t(bb.prototype, {
    ci: function () {
      this.Dj = !0;
      return this.color;
    },
    bo: function (a) {
      this.Dj = !0;
      this.color = a;
    },
    m: function () {
      bb.prototype.m.call(this);
      this.tf = null;
    },
    am: function (a) {
      a.Yp(this);
      this.Dj = !1;
    },
    j: Ac,
  });
  cc.__name__ = "C0";
  cc.A = bb;
  cc.prototype = t(bb.prototype, {
    Ys: function (a) {
      if (this.frame != a) {
        this.frame = a;
        var b = this.wb.Td;
        if (b.dh) var c = b.bn.c[a];
        else {
          c = b.cn;
          b = c.ua;
          var d = b.Hc[(73856093 * a) & b.Cd];
          if (-1 == d) a = -2147483648;
          else if (((b = b.c), b[d] == a)) a = b[d + 1];
          else {
            var e = -2147483648;
            for (d = b[d + 2]; -1 != d; ) {
              if (b[d] == a) {
                e = b[d + 1];
                break;
              }
              d = b[d + 2];
            }
            a = e;
          }
          c = -2147483648 == a ? null : c.fh[a];
        }
        c = this.wb.kj ? c.ut : c.xA;
        a = this.La;
        a.b = c.b;
        a.a = c.a;
        a.f = c.f;
        a.d = c.d;
      }
    },
    Oc: function (a) {
      this.wb = a;
      this.La.b = 0;
      this.La.a = 0;
      this.La.f = a.J.b;
      this.La.d = a.J.a;
      a.kj || ((this.La.f /= a.bf.b), (this.La.d /= a.bf.a));
      this.frame = -1;
      this.i = 0;
      this.Ei = a.dk;
      return this;
    },
    m: function () {
      bb.prototype.m.call(this);
      this.wb = this.La = null;
    },
    am: function (a) {
      this.wb.$g && a.Zp(this);
    },
    j: cc,
  });
  je.__name__ = "C1";
  je.A = wb;
  je.prototype = t(wb.prototype, {
    clear: function () {
      var a = this.Xk;
      if (null != a && null != this.context) {
        var b = a.Rb();
        this.Ms();
        var c = this.context;
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.li = -1;
        var d = this.lo;
        d != this.Lg && ((this.Lg = d), (c[this.mo] = d));
        c.clearRect(0, 0, b.b, b.a);
        0 < a.color.d &&
          ((c.fillStyle = og.xt(a.color)), c.fillRect(0, 0, b.b, b.a));
      }
    },
    sn: function () {
      wb.prototype.sn.call(this);
      this.Es();
      var a = this.Xk;
      if (a.cx()) {
        a = a.Bq();
        var b = new Path2D();
        b.rect(a.b, a.a, a.f, a.d);
        this.context.clip(b);
      }
    },
    tn: function () {
      for (wb.prototype.tn.call(this); 0 < this.el; ) this.In();
    },
    Yp: function (a) {
      a.Dj && (a.tf = og.xt(a.ci()));
      var b = this.context,
        c = this.lo;
      c != this.Lg && ((this.Lg = c), (b[this.mo] = c));
      this.Gf != this.mk &&
        ((this.mk = this.Gf), (b.globalCompositeOperation = this.Gf));
      this.zd != this.li && ((this.li = this.zd), (b.globalAlpha = this.zd));
      c = this.Sp.F;
      this.setTransform(c, b);
      c = c.scale;
      b.fillStyle = a.tf;
      b.fillRect(0, 0, c.b, c.a);
    },
    Zp: function (a) {
      var b = this.context,
        c = this.lo;
      c != this.Lg && ((this.Lg = c), (b[this.mo] = c));
      this.Gf != this.mk &&
        ((this.mk = this.Gf), (b.globalCompositeOperation = this.Gf));
      this.zd != this.li && ((this.li = this.zd), (b.globalAlpha = this.zd));
      c = a.wb.Ib;
      var d = a.La,
        e = this.Sp.F;
      this.setTransform(e, b);
      var f = e.scale,
        g = f.b;
      f = f.a;
      e = d.b;
      var h = d.a,
        k = d.f,
        m = d.d;
      null != this.Vl && ((c = this.Vu(a)), (h = e = 0));
      var x = a.i;
      if (0 == (x & 12))
        0 > g || 0 > f
          ? (b.scale(0 > g ? -1 : 1, 0 > f ? -1 : 1),
            b.drawImage(c, e, h, k, m, 0, 0, 0 > g ? -g : g, 0 > f ? -f : f))
          : b.drawImage(c, e, h, k, m, 0, 0, g, f);
      else if (((b = D(b, b.drawImage)), 4 == (x & 12))) {
        d = a.ll % 1;
        x = a.ml % 1;
        0 > d && (d = 1 + d);
        0 > x && (x = 1 + x);
        var u = 0;
        0 != d && (u |= 1);
        0 != x && (u |= 2);
        switch (u) {
          case 0:
            b(c, e, h, k, m, 0, 0, g, f);
            break;
          case 1:
            b(c, e + d * k, h, k, m, 0, 0, g, f);
            b(c, e, h, k * d, m, g * (1 - d), 0, g * d, f);
            break;
          case 2:
            b(c, e, h + x * m, k, m, 0, 0, g, f);
            b(c, e, h, k, m * x, 0, f * (1 - x), g, f * x);
            break;
          case 3:
            b(c, e + d * k, h + x * m, k, m, 0, 0, g, f),
              b(
                c,
                e,
                h + m * x,
                k * d,
                m * (1 - x),
                g * (1 - d),
                0,
                g * d,
                f * (1 - x)
              ),
              b(
                c,
                e + d * k,
                h,
                k * (1 - d),
                m * x,
                0,
                f * (1 - x),
                g * (1 - d),
                f * x
              ),
              b(c, e, h, k * d, m * x, g * (1 - d), f * (1 - x), g * d, f * x);
        }
      } else if (8 == (x & 12)) {
        x = a.nl;
        u = a.ol;
        var p = g / x,
          l = f / u,
          n = x | 0,
          t = u | 0,
          q,
          v = 0;
        a = 0;
        for (var r = t; a < r; ) {
          a++;
          for (var w = (q = 0), z = n; w < z; )
            w++, b(c, e, h, k, m, q, v, p, l), (q += p);
          v += l;
        }
        q = m = k = 0;
        if (0 < x % 1)
          for (++q, e = g - n * p, k = (g / x) * n, a = m = 0, r = t; a < r; )
            a++,
              b(c, d.b, d.a, (e / p) * d.f, d.d, k, m, e, f / u),
              (m += f / u);
        if (0 < u % 1)
          for (
            ++q, h = f - t * l, k = 0, m = (f / u) * t, a = 0, r = n;
            a < r;

          )
            a++,
              b(c, d.b, d.a, d.f, (h / l) * d.d, k, m, g / x, h),
              (k += g / x);
        2 == q &&
          ((e = g - n * p),
          (h = f - t * l),
          b(c, d.b, d.a, (e / p) * d.f, (h / l) * d.d, k, m, e, h));
      } else if (12 == (x & 12)) {
        x = 1 / a.nl;
        u = 1 / a.ol;
        w = (1 / x) | 0;
        q = (1 / u) | 0;
        z = 1 - w * x;
        v = 1 - q * u;
        p = this.JA;
        p.Lc(3 * w + 12);
        p.g = 0;
        l = this.KA;
        l.Lc(18 * q + 6);
        t = n = l.g = 0;
        r = a.ll % 1;
        0 > r && (r = 1 + r);
        var y = r;
        for (d = 0; d < w; ) {
          r = y;
          var A = y + x;
          1 < A
            ? ((p.c[p.g++] = r),
              (p.c[p.g++] = 1 - r),
              (p.c[p.g++] = 1),
              (p.c[p.g++] = 0),
              (p.c[p.g++] = A - 1),
              (p.c[p.g++] = 0),
              (n += 6))
            : ((p.c[p.g++] = r), (p.c[p.g++] = x), (p.c[p.g++] = 0), (n += 3));
          ++d;
          y += x;
          y %= 1;
        }
        0 < z &&
          ((r = y),
          (A = y + z),
          1 < A
            ? ((p.c[p.g++] = r),
              (p.c[p.g++] = 1 - r),
              (p.c[p.g++] = 1),
              (p.c[p.g++] = 0),
              (p.c[p.g++] = A - 1),
              (p.c[p.g++] = 0),
              (n += 6))
            : ((p.c[p.g++] = r), (p.c[p.g++] = z), (p.c[p.g++] = 0), (n += 3)));
        a = a.ml % 1;
        0 > a && (a = 1 + a);
        y = a;
        for (d = 0; d < q; )
          (r = y),
            (A = y + u),
            1 < A
              ? ((l.c[l.g++] = r),
                (l.c[l.g++] = 1 - r),
                (l.c[l.g++] = 1),
                (l.c[l.g++] = 0),
                (l.c[l.g++] = A - 1),
                (l.c[l.g++] = 0),
                (t += 6))
              : ((l.c[l.g++] = r),
                (l.c[l.g++] = u),
                (l.c[l.g++] = 0),
                (t += 3)),
            ++d,
            (y += u),
            (y %= 1);
        0 < v &&
          ((r = y),
          (A = y + v),
          1 < A
            ? ((l.c[l.g++] = r),
              (l.c[l.g++] = 1 - r),
              (l.c[l.g++] = 1),
              (l.c[l.g++] = 0),
              (l.c[l.g++] = A - 1),
              (l.c[l.g++] = 0),
              (t += 6))
            : ((l.c[l.g++] = r), (l.c[l.g++] = v), (l.c[l.g++] = 0), (t += 3)));
        d = a = 0;
        for (var C; d < t; ) {
          y = l.c[d++];
          var B = l.c[d++];
          var E = l.c[d++];
          v = B / u;
          for (C = r = 0; C < n; )
            (w = p.c[C++]),
              (z = p.c[C++]),
              (A = p.c[C++]),
              (q = z / x),
              b(c, e + r, h + a, k * q, m * v, g * w, f * y, g * z, f * B),
              (r = k * q * A);
          a = m * v * E;
        }
      }
    },
    Cq: function () {
      var a = this.Df;
      if (null == a) return ya.og(this.le), this.le;
      ya.Us(this.le, a.state.size.b / 2, a.state.size.a / 2, 0);
      var b = this.Xk.Bq();
      ya.Dp(this.le, b.f / a.state.size.b, b.d / a.state.size.a, 1);
      a = this.le;
      a.d += b.b;
      a.C += b.a;
      a.Ra = a.Ra;
      return this.le;
    },
    xi: function (a) {
      this.context = a;
    },
    ao: function (a) {
      this.Gf = this.zv[a.I];
    },
    Ri: function (a, b) {
      null == b && (b = !1);
      var c = this.Jg;
      wb.prototype.Ri.call(this, a);
      var d = this.context;
      if (null == a) 0 != this.el && this.In();
      else {
        a != c && null != c && this.In();
        this.Es();
        this.Ms();
        a = this.Jg;
        if (b)
          try {
            var e = new Path2D();
            e.rect(a[0].b, a[0].a, a[2].b - a[1].b, a[2].a - a[3].a);
            d.clip(e);
            return;
          } catch (f) {}
        d.strokeStyle = this.UA;
        d.lineWidth = 0;
        d.beginPath();
        d.moveTo(a[0].b, a[0].a);
        b = a.length;
        for (e = 0; ++e < b; ) d.lineTo(a[e].b, a[e].a);
        d.stroke();
        d.clip();
      }
    },
    setTransform: function (a, b) {
      var c = a.va;
      a = a.translate;
      if (null == this.Df) b.setTransform(c.b, c.d, c.a, c.e, a.b, a.a);
      else {
        var d = this.HA;
        d.b = c.b;
        d.e = c.d;
        d.a = c.a;
        d.D = c.e;
        d.d = a.b;
        d.C = a.a;
        c = this.Pv;
        a = this.Wl;
        var e = d.b,
          f = d.a,
          g = d.d,
          h = d.e,
          k = d.D;
        d = d.C;
        var m = a.b,
          l = a.a;
        c.b = m * e + l * h;
        c.a = m * f + l * k;
        c.d = m * g + l * d + a.d;
        m = a.e;
        l = a.D;
        c.e = m * e + l * h;
        c.D = m * f + l * k;
        c.C = m * g + l * d + a.C;
        b.setTransform(c.b, c.e, c.a, c.D, c.d, c.C);
      }
    },
    Vu: function (a) {
      var b = a.La,
        c = b.b | 0,
        d = b.a | 0,
        e = b.f | 0,
        f = b.d | 0;
      b = this.EA;
      null == b && (b = this.EA = window.document.createElement("canvas"));
      if (b.width < e || b.height < f) (b.width = e), (b.height = f);
      var g = b.getContext("2d", null);
      g.drawImage(Se.LA(a.wb.Ib), c, d, e, f, 0, 0, e, f);
      a = g.getImageData(0, 0, e, f);
      c = a.data;
      d = c.length;
      e = 0;
      var h = this.Vl;
      f = h.bz;
      var k = h.Yw,
        m = h.Yu,
        l = h.Ru,
        u = h.cz,
        p = h.Zw,
        n = h.Zu;
      h = h.Su;
      if (1 != l && 0 != h)
        for (; e < d; )
          (c[e] = c[e] * f + u),
            (c[e + 1] = c[e + 1] * k + p),
            (c[e + 2] = c[e + 2] * m + n),
            (c[e + 3] = c[e + 3] * l + h),
            (e += 4);
      else
        for (; e < d; )
          (c[e] = c[e] * f + u),
            (c[e + 1] = c[e + 1] * k + p),
            (c[e + 2] = c[e + 2] * m + n),
            (e += 4);
      g.putImageData(a, 0, 0);
      return b;
    },
    Ms: function () {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
    },
    Es: function () {
      this.context.save();
      this.el++;
    },
    In: function () {
      this.context.restore();
      this.el--;
    },
    j: je,
  });
  ea.__name__ = "C2";
  ea.Hz = function (a) {
    a.style.setProperty("image-rendering", "pixelated");
    a.style.setProperty("image-rendering", "-moz-crisp-edges");
    a.style.setProperty("image-rendering", "-o-crisp-edges");
    a.style.setProperty("-ms-interpolation-mode", "nearest-neighbor");
  };
  ea.A = sb;
  ea.prototype = t(sb.prototype, {
    up: function () {
      this.gc = !0;
      this.ss();
      window.clearInterval(this.ts);
      this.ts = window.setInterval(D(this, this.ss), 100);
    },
    yB: function () {
      if (this.Em) return 0 == window.orientation ? "Portrait" : "Landscape";
      try {
        switch (window.screen.orientation.type) {
          case "landscape-primary":
          case "landscape-secondary":
            return "Landscape";
          case "portrait-primary":
          case "portrait-secondary":
            return "Portrait";
          default:
            return null;
        }
      } catch (a) {
        return null;
      }
    },
    ox: function (a, b) {
      null == b && (b = !1);
      null == a && (a = !0);
      this.context = this.canvas.getContext("2d", { alpha: a });
      b && ea.Hz(this.canvas);
      this.xi();
    },
    po: function (a) {
      null == a && (a = 0.9);
      try {
        return this.canvas.toDataURL("image/jpeg", a);
      } catch (b) {
        return null;
      }
    },
    Cc: function () {
      sb.prototype.Cc.call(this);
      this.canvas.remove();
      for (var a = 0, b = this.qk; a < b.length; ) {
        var c = b[a];
        ++a;
        c.target.removeEventListener(c.type, c.listener);
      }
      this.qk = null;
      window.clearInterval(this.ts);
      window.clearTimeout(this.sB);
    },
    getContext: function () {
      return this.context;
    },
    ex: function () {
      window.oncontextmenu = function () {
        return !1;
      };
    },
    Gx: function () {
      return (
        1 ==
        this.Jl(window.document, null, [
          "fullscreenEnabled",
          "fullScreenEnabled",
        ])
      );
    },
    Lp: function () {
      if (!this.Wh)
        if (this.gc) {
          var a = window.innerHeight;
          this.canvas.width = (window.innerWidth * this.fc) | 0;
          this.canvas.height = (a * this.fc) | 0;
          c = this.canvas.style;
          c.left = "0px";
          c.top = "0px";
          c.width = "100%";
          c.height = "100%";
          c.position = "absolute";
          this.getContext() instanceof WebGLRenderingContext &&
            this.getContext().viewport(
              0,
              0,
              this.canvas.width,
              this.canvas.height
            );
          window.scrollTo(0, 1);
        } else {
          a = this.size.b | 0;
          var b = this.size.a | 0;
          this.canvas.width = a;
          this.canvas.height = b;
          var c = this.canvas.style;
          c.width = "" + a + "px";
          c.height = "" + b + "px";
          c.position = "absolute";
        }
    },
    ss: function () {
      var a = (window.innerWidth * this.fc) | 0,
        b = (window.innerHeight * this.fc) | 0;
      if (this.Wm.b != a || this.Wm.a != b) {
        var c = this.Wm;
        c.b = a;
        c.a = b;
        sb.cc(window.innerWidth | 0, window.innerHeight | 0);
        this.resize(a, b);
      }
    },
    Jl: function (a, b, c) {
      b = [b];
      null != c && (b = c);
      for (c = 0; c < b.length; ) {
        var d = b[c];
        ++c;
        for (var e = 0, f = ["webkit", "moz", "ms", "o", ""]; e < f.length; ) {
          var g = f[e];
          ++e;
          var h = d;
          "" != g &&
            (h = C.substr(d, 0, 1).toUpperCase() + C.substr(d, 1, null));
          h = g + h;
          if ("undefined" !== typeof a[h])
            return "function" === typeof a[h] ? a[h]() : a[h];
        }
      }
      return null;
    },
    addListener: function (a, b, c, d) {
      null == c && (c = !1);
      if (c) {
        c = 0;
        for (var e = ["webkit", "moz", "ms", "o", ""]; c < e.length; ) {
          var f = e[c];
          ++c;
          this.qk.push({ target: a, type: f + b, listener: d });
          a.addEventListener(f + b, d);
        }
      } else
        this.qk.push({ target: a, type: b, listener: d }),
          a.addEventListener(b, d);
    },
    $w: function () {
      var a = window.document,
        b = window,
        c = a.createElement("div");
      c.id = "ppi";
      c.style.height = "1in";
      c.style.width = "1in";
      a.body.appendChild(c);
      ea.ke = (a.getElementById("ppi").offsetWidth * ea.lj) | 0;
      a.body.removeChild(c);
      a = b.screen.width;
      c = b.screen.height;
      if (3400 < a * ea.lj) ea.ke = (1.5 * ea.ke) | 0;
      else if (!(192 >= ea.ke && 1280 <= a && null == b.orientation)) {
        b = [
          375, 812, 3, 458, 288, 414, 736, 3, 401, 288, 375, 667, 2, 326, 192,
          320, 568, 2, 326, 192, 320, 480, 2, 326, 192, 320, 480, 1, 163, 96,
          360, 640, 4, 538, 384, 384, 640, 2, 318, 192, 360, 740, 4, 529, 384,
          360, 740, 4, 568, 384, 360, 640, 4, 534, 384, 360, 640, 4, 577, 384,
          360, 640, 3, 441, 288, 360, 640, 1.5, 256, 144, 360, 640, 2, 306, 192,
          320, 533, 1.5, 233, 144, 320, 533, 1.5, 217, 144, 360, 600, 2, 316,
          192, 360, 740, 4, 521, 384, 360, 640, 4, 515, 384, 360, 640, 3, 386,
          288, 360, 640, 2, 267, 192, 400, 640, 2, 285, 192, 360, 640, 3, 445,
          288, 384, 640, 2, 320, 192, 432, 768, 2.5, 367, 240, 320, 480, 2.4,
          332, 220, 320, 480, 1.5, 217, 144, 320, 480, 2, 294, 192, 320, 480,
          1.5, 252, 144, 412, 690, 3.5, 493, 336, 360, 640, 3, 468, 288, 320,
          480, 3, 341, 288, 360, 598, 3, 424, 288, 360, 640, 3, 443, 288, 360,
          640, 2, 342, 192, 360, 640, 1.5, 275, 144, 393, 786, 2.75, 403, 264,
          360, 640, 3, 401, 288, 360, 640, 3, 373, 288, 390, 695, 2, 294, 177,
          504, 504, 3, 453, 274, 390, 390, 1.8, 294, 177, 346, 346, 2, 328, 192,
          360, 640, 2, 295, 192, 384, 640, 2, 355, 192, 360, 480, 1, 187, 96,
          320, 480, 1.5, 165, 144, 1024, 1366, 2, 265, 192, 768, 1024, 2, 264,
          192, 768, 1024, 1, 132, 96, 768, 1024, 2, 326, 192, 768, 1024, 1, 163,
          96, 800, 1280, 1, 149, 96, 800, 1280, 1, 170, 96, 600, 1024, 1, 170,
          96, 800, 1280, 2, 300, 192, 1024, 2, 281, 192, 600, 960, 2, 323, 192,
          604, 966, 1.325, 216, 127, 600, 960, 2, 273, 192, 800, 1280, 1.5, 254,
          144, 480, 800, 1.5, 216, 144, 600, 1024, 1, 167, 96, 1024, 1440,
          1.0714285714285714, 216, 144, 720, 1280, 1.5, 207, 144, 768, 1366, 1,
          148, 96, 600, 1024, 1, 169, 96,
        ];
        for (var d = 0, e = b.length; d < e; ) {
          var f = b[d++],
            g = b[d++],
            h = b[d++],
            k = b[d++],
            m = b[d++];
          if (f == a && g == c && h == ea.lj && m == ea.ke) {
            ea.ke = k;
            break;
          }
        }
      }
    },
    j: ea,
  });
  var Xa = (La.e6 = { Ac: !0, zc: "i0 i1 i2 i3 i4 i5".split(" ") });
  Xa.i0 = { I: 0, T: "e6", toString: I };
  Xa.i1 = { I: 1, T: "e6", toString: I };
  Xa.i2 = { I: 2, T: "e6", toString: I };
  Xa.i3 = { I: 3, T: "e6", toString: I };
  Xa.i4 = { I: 4, T: "e6", toString: I };
  Xa.i5 =
    ((Fb = function (a, b) {
      var c = { I: 5, T: "e6", toString: I };
      c.src = a;
      c.dst = b;
      return c;
    }),
    (Fb.mj = ["src", "dst"]),
    Fb);
  Xa.fd = [Xa.i0, Xa.i1, Xa.i2, Xa.i3, Xa.i4];
  var Ea = (La.e7 = { Ac: !0, zc: "i0 i1 i2 i3 i4 i5 i6 i7".split(" ") });
  Ea.i0 = { I: 0, T: "e7", toString: I };
  Ea.i1 = { I: 1, T: "e7", toString: I };
  Ea.i2 = { I: 2, T: "e7", toString: I };
  Ea.i3 = { I: 3, T: "e7", toString: I };
  Ea.i4 = { I: 4, T: "e7", toString: I };
  Ea.i5 = { I: 5, T: "e7", toString: I };
  Ea.i6 = { I: 6, T: "e7", toString: I };
  Ea.i7 = { I: 7, T: "e7", toString: I };
  Ea.fd = [Ea.i0, Ea.i1, Ea.i2, Ea.i3, Ea.i4, Ea.i5, Ea.i6, Ea.i7];
  var Fa = (La.e8 = { Ac: !0, zc: "i0 i1 i2 i3 i4 i5 i6 i7".split(" ") });
  Fa.i0 = { I: 0, T: "e8", toString: I };
  Fa.i1 = { I: 1, T: "e8", toString: I };
  Fa.i2 = { I: 2, T: "e8", toString: I };
  Fa.i3 = { I: 3, T: "e8", toString: I };
  Fa.i4 = { I: 4, T: "e8", toString: I };
  Fa.i5 = { I: 5, T: "e8", toString: I };
  Fa.i6 = { I: 6, T: "e8", toString: I };
  Fa.i7 = { I: 7, T: "e8", toString: I };
  Fa.fd = [Fa.i0, Fa.i1, Fa.i2, Fa.i3, Fa.i4, Fa.i5, Fa.i6, Fa.i7];
  Pa.__name__ = "C3";
  Pa.prototype = {
    collapse: function () {
      throw q.G("override for implementation");
    },
    j: Pa,
  };
  var da = (La.e9 = { Ac: !0, zc: ["i0", "i1", "i2", "i3"] });
  da.i0 = { I: 0, T: "e9", toString: I };
  da.i1 = { I: 1, T: "e9", toString: I };
  da.i2 = { I: 2, T: "e9", toString: I };
  da.i3 = { I: 3, T: "e9", toString: I };
  da.fd = [da.i0, da.i1, da.i2, da.i3];
  vb.__name__ = "C4";
  vb.A = Pa;
  vb.prototype = t(Pa.prototype, {
    collapse: function () {
      return this;
    },
    j: vb,
  });
  Yc.__name__ = "C5";
  Yc.A = Pa;
  Yc.prototype = t(Pa.prototype, {
    collapse: function (a) {
      for (var b = 1, c, d = 0, e = a.L; d < e; )
        (c = d++), (c = a.c[c]), (b *= c.alpha);
      null == this.Ml && (this.Ml = new Yc(this.alpha));
      this.Ml.alpha = b;
      return this.Ml;
    },
    j: Yc,
  });
  ub.__name__ = "C6";
  ub.prototype = {
    m: function () {
      this.B = null;
    },
    contains: function () {
      throw q.G("override for implementation");
    },
    ym: function () {},
    from: function () {},
    Qo: function () {
      throw q.G("override for implementation");
    },
    zo: function (a, b) {
      var c = Ub.xe(this.B);
      a.Oa(c, c);
      var d = b.B;
      c = ag.MA(c);
      d.b = c.b;
      d.a = c.a;
      d.f = c.f;
      b.aa = a.Jw() * this.aa;
    },
    j: ub,
  };
  Mb.__name__ = "C7";
  Mb.A = ub;
  Mb.prototype = t(ub.prototype, {
    m: function () {
      this.Ua = null;
      ub.prototype.m.call(this);
    },
    contains: function (a) {
      return oe.tA(a, this.Ua);
    },
    ym: function (a) {
      switch (a.type) {
        case 1:
          var b = a.B;
          a = a.aa;
          var c = this.Ua,
            d = b.b - a,
            e = b.a - a;
          d < c.b ? (c.b = d) : d > c.f && (c.f = d);
          e < c.a ? (c.a = e) : e > c.d && (c.d = e);
          c = this.Ua;
          d = b.b + a;
          e = b.a + a;
          d < c.b ? (c.b = d) : d > c.f && (c.f = d);
          e < c.a ? (c.a = e) : e > c.d && (c.d = e);
          break;
        case 2:
          (c = this.Ua),
            (b = B.Ta(a, Mb).Ua),
            b.b < c.b && (c.b = b.b),
            b.f > c.f && (c.f = b.f),
            b.a < c.a && (c.a = b.a),
            b.d > c.d && (c.d = b.d);
      }
      c = this.Ua;
      b = 0.5 * (c.f - c.b);
      c = this.Ua;
      c = 0.5 * (c.d - c.a);
      this.B.b = this.Ua.b + b;
      this.B.a = this.Ua.a + c;
      this.aa = Math.sqrt(b * b + c * c);
    },
    from: function (a) {
      var b = a.B,
        c = a.aa;
      switch (a.type) {
        case 1:
          this.Ua.b = b.b - c;
          this.Ua.a = b.a - c;
          this.Ua.f = b.b + c;
          this.Ua.d = b.a + c;
          break;
        case 2:
          var d = this.Ua;
          a = B.Ta(a, Mb).Ua;
          d.b = a.b;
          d.a = a.a;
          d.f = a.f;
          d.d = a.d;
      }
      d = this.B;
      d.b = b.b;
      d.a = b.a;
      d.f = b.f;
      this.aa = c;
    },
    Qo: function (a) {
      var b = a.b,
        c = a.a;
      a = va.Sg(a);
      var d = this.Ua.b,
        e = this.Ua.a,
        f = this.Ua.f,
        g = this.Ua.d;
      if (1 == b) return f < a ? -1 : d > a ? 1 : 0;
      if (-1 == b) return d > -a ? -1 : f < -a ? 1 : 0;
      if (1 == c) return g < a ? -1 : e > a ? 1 : 0;
      if (-1 == b) return e > -a ? -1 : g < -a ? 1 : 0;
      var h = 0 | ad.Eh(d, e, b, c, a);
      h |= ad.Eh(f, e, b, c, a) << 1;
      h |= ad.Eh(d, g, b, c, a) << 2;
      h |= ad.Eh(f, g, b, c, a) << 3;
      return 15 == h ? -1 : 0 == h ? 1 : 0;
    },
    zo: function (a, b) {
      ub.prototype.zo.call(this, a, b);
      b = B.Ta(b, Mb).Ua;
      var c = new r(),
        d = c;
      c = this.Ua;
      d.b = c.b + 0.5 * (c.f - c.b);
      c = this.Ua;
      d.a = c.a + 0.5 * (c.d - c.a);
      a.Oa(d, d);
      b.b = d.b;
      b.a = d.a;
      b.f = d.b;
      b.d = d.a;
      if (0 < (a.l & 2))
        (d = a.va),
          (c = a.scale),
          (a = 0.5 * c.b),
          (c = 0.5 * c.a),
          0 < d.b
            ? ((b.b -= d.b * a), (b.f += d.b * a))
            : ((b.b += d.b * a), (b.f -= d.b * a)),
          0 < d.a
            ? ((b.b -= d.a * c), (b.f += d.a * c))
            : ((b.b += d.a * c), (b.f -= d.a * c)),
          0 < d.d
            ? ((b.a -= d.d * a), (b.d += d.d * a))
            : ((b.a += d.d * a), (b.d -= d.d * a)),
          0 < d.e
            ? ((b.a -= d.e * c), (b.d += d.e * c))
            : ((b.a += d.e * c), (b.d -= d.e * c));
      else {
        d = a.va;
        var e = d.b,
          f = d.a;
        a = Math.sqrt(e * e + f * f);
        d = (e * d.e - f * d.d) / a;
        a *= 0.5;
        c = 0.5 * d;
        e = Math.atan2(f, e);
        d = Math.cos(e);
        e = Math.sin(e);
        0 < d
          ? ((b.b -= d * a), (b.f += d * a))
          : ((b.b += d * a), (b.f -= d * a));
        0 < e
          ? ((b.b -= e * c), (b.f += e * c))
          : ((b.b += e * c), (b.f -= e * c));
        0 < -e
          ? ((b.a -= -e * a), (b.d += -e * a))
          : ((b.a += -e * a), (b.d -= -e * a));
        0 < d
          ? ((b.a -= d * c), (b.d += d * c))
          : ((b.a += d * c), (b.d -= d * c));
      }
    },
    j: Mb,
  });
  xf.__name__ = "C8";
  xf.prototype = {
    reset: function (a) {
      this.state.B.b = a.b + a.f / 2;
      this.state.B.a = a.a + a.d / 2;
      this.state.size.b = a.f;
      this.state.size.a = a.d;
      this.state.rotation = 0;
      this.state.zoom = 1;
      this.yz();
    },
    Tw: function () {
      if (!this.Ao) return this.uf;
      this.Ao = !1;
      var a = this.state.B.b,
        b = this.state.B.a;
      ya.Us(this.uf, -a, -b, 0);
      ya.Dp(this.uf, this.state.zoom, this.state.zoom, 1);
      ya.sv(this.uf, 0.0174532925199432 * this.state.rotation);
      var c = this.uf;
      c.d += a;
      c.C += b;
      c.Ra = c.Ra;
      c = this.uf;
      c.d += -a;
      c.C += -b;
      c.Ra = c.Ra;
      return this.uf;
    },
    Bw: function () {
      if (!this.Qm) return this.Rm;
      this.Qm = !1;
      ya.br(this.uf, this.Rm);
      return this.Rm;
    },
    yz: function () {
      this.Qm = this.Ao = !0;
      this.Sa.qy();
    },
    j: xf,
  };
  wf.__name__ = "C9";
  wf.prototype = { j: wf };
  ie.__name__ = "CA";
  ie.A = ub;
  ie.prototype = t(ub.prototype, {
    contains: function (a) {
      var b = a.b - this.B.b;
      a = a.a - this.B.a;
      return b * b + a * a <= this.aa * this.aa;
    },
    ym: function (a) {
      var b = a.B.b - this.B.b,
        c = a.B.a - this.B.a,
        d = a.aa - this.aa,
        e = b * b + c * c;
      d * d >= e
        ? 0 <= d && this.from(a)
        : ((d = Math.sqrt(e)),
          (e = (d + a.aa - this.aa) / (2 * d)),
          (this.B.b += e * b),
          (this.B.a += e * c),
          (this.aa = (d + this.aa + a.aa) / 2));
    },
    from: function (a) {
      this.B.b = a.B.b;
      this.B.a = a.B.a;
      this.aa = a.aa;
    },
    Qo: function (a) {
      a = gg.hw(this.B.b, this.B.a, a.b, a.a, va.Sg(a));
      return a <= -this.aa ? -1 : a >= this.aa ? 1 : 0;
    },
    j: ie,
  });
  he.__name__ = "CB";
  he.A = Pa;
  he.prototype = t(Pa.prototype, {
    Ld: function (a) {
      var b = a.a,
        c = a.f,
        d = a.d,
        e = new G();
      e.b = a.b;
      e.a = b;
      e.f = c;
      e.d = d;
      this.$ = e;
      b = a.b;
      c = a.a;
      d = e = new r();
      d.b = b;
      d.a = c;
      b = a.b;
      c = a.d;
      var f = (e = new r());
      f.b = b;
      f.a = c;
      b = a.f;
      c = a.d;
      var g = (e = new r());
      g.b = b;
      g.a = c;
      b = a.f;
      c = a.a;
      a = e = new r();
      a.b = b;
      a.a = c;
      this.Lo = [d, f, g, a];
    },
    collapse: function () {
      return this;
    },
    j: he,
  });
  vf.__name__ = "CC";
  vf.A = Pa;
  vf.prototype = t(Pa.prototype, {
    collapse: function () {
      return this;
    },
    j: vf,
  });
  uf.__name__ = "CD";
  uf.prototype = { j: uf };
  tf.__name__ = "CE";
  tf.prototype = {
    Gv: function (a, b) {
      this.Hh.g = 0;
      xa.Ot = ja.Jv(a);
      xa.Qp = 0;
      b || null == this.Sa.Df
        ? ja.Vw(a, this.Hh)
        : ((this.Ci = (1 << this.hg.length) - 1),
          this.Th && (this.$A(), (this.Th = !1)),
          a.Zr(this, !1));
      xa.Nt = this.Hh.g;
      xa.Qp = 1 - xa.Nt / xa.Ot;
      return this.Hh;
    },
    Mx: function (a) {
      if (!isFinite(a.aa)) return !0;
      for (var b = 0, c = this.hg.length; b < c; ) {
        var d = b++,
          e = 1 << d;
        if (0 != (this.Ci & e)) {
          d = a.Qo(this.hg[d]);
          if (0 > d) return !1;
          0 < d && (this.Ci &= ~e);
        }
      }
      return !0;
    },
    $A: function () {
      var a = this.Sa.Df;
      if (null != a && this.Th) {
        this.Th = !1;
        var b = a.state.size.b / 2,
          c = a.state.size.a / 2,
          d = this.Uk[0],
          e = this.Uk[1],
          f = this.Uk[2],
          g = this.Uk[3];
        d.b = -b;
        d.a = -c;
        e.b = b;
        e.a = -c;
        f.b = -b;
        f.a = c;
        g.b = b;
        g.a = c;
        a = a.Bw();
        b = d.b;
        c = d.a;
        var h = d.f,
          k = 1;
        d.b = a.b * b + a.a * c + a.f * h + a.d * k;
        d.a = a.e * b + a.D * c + a.Xa * h + a.C * k;
        d.f = a.Qa * b + a.yb * c + a.k * h + a.Ra * k;
        b = e.b;
        c = e.a;
        h = e.f;
        k = 1;
        e.b = a.b * b + a.a * c + a.f * h + a.d * k;
        e.a = a.e * b + a.D * c + a.Xa * h + a.C * k;
        e.f = a.Qa * b + a.yb * c + a.k * h + a.Ra * k;
        b = f.b;
        c = f.a;
        h = f.f;
        k = 1;
        f.b = a.b * b + a.a * c + a.f * h + a.d * k;
        f.a = a.e * b + a.D * c + a.Xa * h + a.C * k;
        f.f = a.Qa * b + a.yb * c + a.k * h + a.Ra * k;
        b = g.b;
        c = g.a;
        h = g.f;
        k = 1;
        g.b = a.b * b + a.a * c + a.f * h + a.d * k;
        g.a = a.e * b + a.D * c + a.Xa * h + a.C * k;
        g.f = a.Qa * b + a.yb * c + a.k * h + a.Ra * k;
        va.al(this.hg[0], Ub.xe(d), Ub.xe(e));
        va.al(this.hg[1], Ub.xe(g), Ub.xe(f));
        va.al(this.hg[2], Ub.xe(f), Ub.xe(d));
        va.al(this.hg[3], Ub.xe(e), Ub.xe(g));
        this.$.b = d.b;
        this.$.a = d.a;
        this.$.f = g.b;
        this.$.d = g.a;
      }
    },
    j: tf,
  };
  var xb = (La.eA = { Ac: !0, zc: ["i0", "i1", "i2"] });
  xb.i0 = { I: 0, T: "eA", toString: I };
  xb.i1 = { I: 1, T: "eA", toString: I };
  xb.i2 = { I: 2, T: "eA", toString: I };
  xb.fd = [xb.i0, xb.i1, xb.i2];
  Lb.__name__ = "CF";
  Lb.Ql = function (a) {
    var b = new Lb(a.state),
      c = b;
    for (a = a.next; null != a; ) (c = c.next = new Lb(a.state)), (a = a.next);
    return b;
  };
  Lb.prototype = { j: Lb };
  Va.__name__ = "D0";
  Va.xv = function () {
    for (var a = 0; 4 > a; ) {
      var b = a++;
      Va.nj.c[b].clear();
    }
  };
  Va.Vy = function (a) {
    null == Va.nj && Va.qx();
    var b = Va.nj,
      c = Va.Nu,
      d = a;
    for (c.clear(); null != d.parent; ) {
      var e = d.parent;
      c.L == c.u && c.O();
      c.c[c.L++] = e;
      d = d.parent;
    }
    d = 0;
    for (e = c.L; d < e; ) d++, c.c[--c.L].Nn(b);
    a.Nn(b);
    c.clear(!0);
    return b;
  };
  Va.qx = function () {
    Va.nj = new L(4);
    for (var a = 0; 4 > a; ) {
      a++;
      var b = Va.nj,
        c = new Bb();
      b.g == b.u && b.O();
      b.c[b.g++] = c;
    }
    Va.Nu = new Bb(16);
  };
  qa.__name__ = "D1";
  qa.__interfaces__ = [nc];
  qa.A = yc;
  qa.prototype = t(yc.prototype, {
    m: function () {
      yc.prototype.m.call(this);
      null != this.parent && this.parent.removeChild(this);
      this.K = this.parent = null;
      this.local.m();
      this.local = null;
      this.F.m();
      this.ze = this.F = null;
      this.iz();
      null != this.za && this.za.m();
      this.client = this.za = null;
      this.i = 1024;
    },
    fo: function (a) {
      switch (a.I) {
        case 0:
          this.i &= -4;
          break;
        case 1:
          this.i &= -3;
          this.i |= 1;
          break;
        case 2:
          (this.i |= 2), (this.i &= -2);
      }
      return a;
    },
    Zr: function (a, b) {
      if (!(0 < (this.i & 1))) {
        0 < (this.i & 2) && (b = !0);
        var c = a.Ci;
        (b || a.Mx(this.ze)) && this.um(a, b);
        a.Ci = c;
      }
    },
    um: function () {
      throw q.G("override for implementation");
    },
    bc: function () {
      throw q.G("override for implementation");
    },
    Og: function () {
      throw q.G("override for implementation");
    },
    Pe: function () {
      for (var a = this; null != a.parent; ) a = a.parent;
      return a;
    },
    rg: function (a, b) {
      null == b && (b = !0);
      null == a && (a = !0);
      this.Jo(b);
      b && (this.sf(), a && this.Ln());
    },
    Ht: function (a, b) {
      null == b && (b = !0);
      null == a && (a = !0);
      if (a && 0 < (this.i & 256))
        for (var c = this.na; null != c; ) c.Ht(a, !1), (c = c.K);
      this.sf();
      b && this.Ln();
    },
    Jo: function () {
      0 < (this.i & 4) ||
        (xa.Tr++,
        (this.i &= -9),
        (this.i |= 32),
        null != this.parent
          ? this.F.Iz(this.parent.F, this.local)
          : this.F.from(this.local));
    },
    sf: function () {
      null != this.parent && (this.parent.i |= 32);
      xa.Sr++;
    },
    Ln: function () {
      null != this.parent && (this.parent.sf(), this.parent.Ln());
    },
    hj: function (a) {
      var b = null == a;
      b ? (a = Va.Vy(this)) : this.Nn(a);
      this.Mn(a);
      b ? Va.xv() : this.My(a);
      this.i &= -129;
    },
    xq: function (a) {
      for (var b = this.nc; null != b; ) {
        if (b.state.type == a) return b.state;
        b = b.next;
      }
      return null;
    },
    Si: function (a) {
      this.i |= 128;
      if (null == this.nc) this.nc = new Lb(a);
      else {
        for (var b = this.nc, c = a.type; null != b; ) {
          if (b.state.type == c) {
            b.state = a;
            return;
          }
          b = b.next;
        }
        b = new Lb(a);
        b.next = this.nc;
        this.nc = b;
      }
    },
    Ks: function (a) {
      this.i |= 128;
      for (var b = this.nc, c = null; null != b; ) {
        if (b.state.type == a) {
          null != c ? (c.next = b.next) : (this.nc = b.next);
          b.next = null;
          break;
        }
        c = b;
        b = b.next;
      }
    },
    iz: function () {
      this.i |= 128;
      for (var a = this.nc, b; null != a; )
        (b = a.next), (a.next = null), (a = b);
      this.nc = null;
    },
    Mn: function () {
      throw q.G("override for implementation");
    },
    Nn: function (a) {
      for (var b = this.nc, c; null != b; ) {
        c = b.state;
        var d = a.c[c.ko];
        d.L == d.u && d.O();
        d.c[d.L++] = c;
        b = b.next;
      }
    },
    My: function (a) {
      for (var b = this.nc; null != b; ) --a.c[b.state.ko].L, (b = b.next);
    },
    Mp: function (a) {
      null == a && (a = this.Nf());
      switch (a) {
        case 1:
          return new ie();
        case 2:
          return new Mb();
      }
    },
    Nf: function () {
      return qa.Tt;
    },
    j: qa,
  });
  Na.__name__ = "D2";
  Na.A = qa;
  Na.prototype = t(qa.prototype, {
    m: function () {
      qa.prototype.m.call(this);
      this.na = null;
    },
    um: function (a, b) {
      for (var c = this.na; null != c; ) c.Zr(a, b), (c = c.K);
    },
    Og: function (a, b) {
      return ja.Og(this, a, b);
    },
    bc: function (a, b) {
      var c = 0;
      if (this.ze.contains(a))
        for (var d = this.na; null != d; ) (c += d.bc(a, b)), (d = d.K);
      return c;
    },
    appendChild: function (a) {
      if (null == this.na) (this.na = a), (a.K = null);
      else {
        for (var b = this.na; null != b.K; ) b = b.K;
        b.K = a;
      }
      a.parent = this;
      this.ri++;
      return this;
    },
    kp: function (a, b) {
      if (0 == b) (a.K = this.na), (this.na = a);
      else {
        var c = this.na,
          d = 0;
        for (--b; d < b; ) d++, (c = c.K);
        a.K = c.K;
        c.K = a;
      }
      a.parent = this;
      this.ri++;
      return this;
    },
    removeChild: function (a) {
      if (this.na == a) this.na = a.K;
      else {
        for (var b = this.na; b.K != a; ) b = b.K;
        b.K = a.K;
      }
      a.K = null;
      a.parent = null;
      this.ri--;
      return this;
    },
    bi: function (a) {
      for (var b = this.na, c = 0; c <= a; ) {
        if (c == a) return b;
        b = b.K;
        ++c;
      }
      return null;
    },
    zz: function (a, b) {
      this.removeChild(a);
      this.kp(a, b);
      return this;
    },
    Ad: function (a) {
      for (var b = this.na; null != b; ) {
        if (b.name == a) return b;
        b = b.K;
      }
      return null;
    },
    $s: function (a) {
      if (null == a.K) return this;
      var b = this.na;
      if (b == a) {
        for (; null != b.K; ) b = b.K;
        b.K = a;
        this.na = a.K;
      } else {
        for (; b.K != a; ) b = b.K;
        for (b = b.K = a.K; null != b.K; ) b = b.K;
        b.K = a;
      }
      a.K = null;
      return this;
    },
    Jo: function (a, b) {
      null == b && (b = !0);
      qa.prototype.Jo.call(this, a);
      if (b) for (b = this.na; null != b; ) b.rg(!1, a), (b = b.K);
    },
    sf: function () {
      if (!(0 < (this.i & 16)) && null != this.na) {
        var a = this.na;
        this.ze.from(a.ze);
        for (a = a.K; null != a; )
          (0 < (a.i & 256) && 0 == B.Ta(a, Na).ri) || this.ze.ym(a.ze),
            (a = a.K);
        this.i &= -33;
        qa.prototype.sf.call(this);
      }
    },
    Mn: function (a) {
      for (var b = this.na; null != b; ) b.hj(a), (b = b.K);
    },
    Nf: function () {
      return null != Na.yw ? Na.yw() : qa.prototype.Nf.call(this);
    },
    j: Na,
  });
  sf.__name__ = "D3";
  sf.prototype = { j: sf };
  tb.__name__ = "D4";
  tb.A = qa;
  tb.prototype = t(qa.prototype, {
    m: function () {
      this.Xe.m();
      this.Xe = null;
      R.ge(this.re);
      this.re = null;
      qa.prototype.m.call(this);
    },
    Ho: function () {
      this.i |= 64;
    },
    bc: function () {
      throw q.G("override for implementation");
    },
    sf: function () {
      0 < (this.i & 16) ||
        0 == (this.i & 96) ||
        (this.Xe.zo(this.F, this.ze),
        (this.i &= -97),
        qa.prototype.sf.call(this));
    },
    um: function (a) {
      null != this.za && ((a = a.Hh), a.g == a.u && a.O(), (a.c[a.g++] = this));
    },
    Mn: function (a) {
      for (var b, c = 0, d = a.g; c < d; ) {
        var e = c++;
        b = a.c[e];
        0 == b.L
          ? (this.re[e] = null)
          : ((b = b.c[b.L - 1].collapse(b)), (this.re[e] = b));
      }
    },
    Nf: function () {
      return null != tb.hm ? tb.hm() : qa.prototype.Nf.call(this);
    },
    j: tb,
  });
  Ab.__name__ = "D5";
  Ab.A = tb;
  Ab.prototype = t(tb.prototype, {
    bc: function (a, b) {
      if (!this.ze.contains(a)) return 0;
      var c = a.b,
        d = a.a;
      this.F.Sd(a, a);
      var e = oe.uA(a.b, a.a);
      e && null != b && (b.data[b.count++] = this);
      a.b = c;
      a.a = d;
      return e ? 1 : 0;
    },
    Og: function (a, b) {
      var c = new r(),
        d = 3e38,
        e = 3e38,
        f = -3e38,
        g = -3e38;
      if (a == this) (e = d = 0), (g = f = 1);
      else {
        if (a == this.parent) {
          var h = this.local;
          c.b = 0;
          c.a = 0;
          h.Oa(c, c);
          c.b < d && (d = c.b);
          c.b > f && (f = c.b);
          c.a < e && (e = c.a);
          c.a > g && (g = c.a);
          c.b = 1;
          c.a = 0;
          h.Oa(c, c);
          c.b < d && (d = c.b);
          c.b > f && (f = c.b);
          c.a < e && (e = c.a);
          c.a > g && (g = c.a);
          c.b = 1;
          c.a = 1;
          h.Oa(c, c);
          c.b < d && (d = c.b);
          c.b > f && (f = c.b);
          c.a < e && (e = c.a);
          c.a > g && (g = c.a);
          c.b = 0;
          c.a = 1;
          h.Oa(c, c);
        } else
          null == a.parent
            ? ((h = this.F),
              (c.b = 0),
              (c.a = 0),
              h.Oa(c, c),
              c.b < d && (d = c.b),
              c.b > f && (f = c.b),
              c.a < e && (e = c.a),
              c.a > g && (g = c.a),
              (c.b = 1),
              (c.a = 0),
              h.Oa(c, c),
              c.b < d && (d = c.b),
              c.b > f && (f = c.b),
              c.a < e && (e = c.a),
              c.a > g && (g = c.a),
              (c.b = 1),
              (c.a = 1),
              h.Oa(c, c),
              c.b < d && (d = c.b),
              c.b > f && (f = c.b),
              c.a < e && (e = c.a),
              c.a > g && (g = c.a),
              (c.b = 0),
              (c.a = 1),
              h.Oa(c, c))
            : ((h = this.F),
              (a = a.F),
              (c.b = 0),
              (c.a = 0),
              h.Oa(c, c),
              a.Sd(c, c),
              c.b < d && (d = c.b),
              c.b > f && (f = c.b),
              c.a < e && (e = c.a),
              c.a > g && (g = c.a),
              (c.b = 1),
              (c.a = 0),
              h.Oa(c, c),
              a.Sd(c, c),
              c.b < d && (d = c.b),
              c.b > f && (f = c.b),
              c.a < e && (e = c.a),
              c.a > g && (g = c.a),
              (c.b = 1),
              (c.a = 1),
              h.Oa(c, c),
              a.Sd(c, c),
              c.b < d && (d = c.b),
              c.b > f && (f = c.b),
              c.a < e && (e = c.a),
              c.a > g && (g = c.a),
              (c.b = 0),
              (c.a = 1),
              h.Oa(c, c),
              a.Sd(c, c));
        c.b < d && (d = c.b);
        c.b > f && (f = c.b);
        c.a < e && (e = c.a);
        c.a > g && (g = c.a);
      }
      b.b = d;
      b.a = e;
      b.f = f;
      b.d = g;
      return b;
    },
    Ho: function () {
      tb.prototype.Ho.call(this);
      this.Xe.B.b = 0.5;
      this.Xe.B.a = 0.5;
      this.Xe.aa = Math.sqrt(0.5);
      switch (this.Xe.type) {
        case 2:
          var a = B.Ta(this.Xe, Mb).Ua;
          a.b = 0;
          a.a = 0;
          a.f = 1;
          a.d = 1;
      }
    },
    Nf: function () {
      return null != Ab.hm ? Ab.hm() : tb.prototype.Nf.call(this);
    },
    j: Ab,
  });
  ja.__name__ = "D6";
  ja.Jv = function (a) {
    var b = 0,
      c = ja.Ch;
    c.clear();
    c.L == c.u && c.O();
    for (c.c[c.L++] = a; 0 < c.L; )
      if (((a = c.c[--c.L]), 0 < (a.i & 512))) ++b;
      else if (0 < (a.i & 256))
        for (a = a.na; null != a; )
          c.L == c.u && c.O(), (c.c[c.L++] = a), (a = a.K);
    return b;
  };
  ja.rg = function (a, b) {
    null == b && (b = !0);
    var c = ja.Ch;
    c.clear();
    c.L == c.u && c.O();
    c.c[c.L++] = a;
    a = 8;
    for (b && (a |= 32); 0 < c.L; ) {
      var d = c.c[--c.L];
      if (0 < (d.i & a)) d.rg(!0, b);
      else if (0 < (d.i & 256))
        for (d = d.na; null != d; )
          c.L == c.u && c.O(), (c.c[c.L++] = d), (d = d.K);
    }
  };
  ja.hj = function (a) {
    var b = ja.Ch;
    b.clear();
    b.L == b.u && b.O();
    for (b.c[b.L++] = a; 0 < b.L; )
      if (((a = b.c[--b.L]), 0 < (a.i & 128))) a.hj();
      else if (0 < (a.i & 256))
        for (a = a.na; null != a; )
          b.L == b.u && b.O(), (b.c[b.L++] = a), (a = a.K);
  };
  ja.Go = function (a, b) {
    var c = ja.Ch;
    c.clear();
    c.L == c.u && c.O();
    for (c.c[c.L++] = a; 0 < c.L; )
      if (((a = c.c[--c.L]), null != a.controllers && a.Go(b), 0 < (a.i & 256)))
        for (a = a.na; null != a; )
          c.L == c.u && c.O(), (c.c[c.L++] = a), (a = a.K);
  };
  ja.Vw = function (a, b) {
    var c = ja.Ch,
      d = ja.lA;
    c.clear();
    c.L == c.u && c.O();
    for (c.c[c.L++] = a; 0 < c.L; )
      if (((a = c.c[--c.L]), !(0 < (a.i & 1))))
        if (0 < (a.i & 512))
          null != a.za && (d.L == d.u && d.O(), (d.c[d.L++] = a));
        else if (0 < (a.i & 256))
          for (a = a.na; null != a; )
            c.L == c.u && c.O(), (c.c[c.L++] = a), (a = a.K);
    b.g = 0;
    b.Lc(d.L);
    c = 0;
    for (a = d.L; c < a; ) {
      c++;
      var e = d.c[--d.L];
      b.c[b.g++] = e;
    }
  };
  ja.Og = function (a, b, c) {
    var d = 3e38,
      e = 3e38,
      f = -3e38,
      g = -3e38,
      h = ja.Ch;
    h.clear();
    h.L == h.u && h.O();
    for (h.c[h.L++] = a; 0 < h.L; )
      if (((a = h.c[--h.L]), 0 < (a.i & 512)))
        a.Og(b, c),
          c.b < d && (d = c.b),
          c.a < e && (e = c.a),
          c.f > f && (f = c.f),
          c.d > g && (g = c.d);
      else if (0 < (a.i & 256))
        for (a = a.na; null != a; )
          h.L == h.u && h.O(), (h.c[h.L++] = a), (a = a.K);
    c.b = d;
    c.a = e;
    c.f = f;
    c.d = g;
    return c;
  };
  ja.TA = function (a, b, c) {
    if (null == e) {
      var d = new G();
      var e = d;
    }
    var f = c.b,
      g = c.a,
      h = c.f,
      k = c.d,
      m = 3e38,
      l = 3e38,
      u = -3e38,
      p = -3e38;
    d = new r();
    b == a
      ? ((m = c.b), (l = c.a), (u = c.f), (p = c.d))
      : (b == a.parent
          ? ((a = a.local),
            (d.b = f),
            (d.a = g),
            a.Oa(d, d),
            d.b < m && (m = d.b),
            d.b > u && (u = d.b),
            d.a < l && (l = d.a),
            d.a > p && (p = d.a),
            (d.b = h),
            (d.a = g),
            a.Oa(d, d),
            d.b < m && (m = d.b),
            d.b > u && (u = d.b),
            d.a < l && (l = d.a),
            d.a > p && (p = d.a),
            (d.b = h),
            (d.a = k),
            a.Oa(d, d),
            d.b < m && (m = d.b),
            d.b > u && (u = d.b),
            d.a < l && (l = d.a),
            d.a > p && (p = d.a),
            (d.b = f),
            (d.a = k),
            a.Oa(d, d))
          : null == b.parent
          ? ((a = a.F),
            (d.b = f),
            (d.a = g),
            a.Oa(d, d),
            d.b < m && (m = d.b),
            d.b > u && (u = d.b),
            d.a < l && (l = d.a),
            d.a > p && (p = d.a),
            (d.b = h),
            (d.a = g),
            a.Oa(d, d),
            d.b < m && (m = d.b),
            d.b > u && (u = d.b),
            d.a < l && (l = d.a),
            d.a > p && (p = d.a),
            (d.b = h),
            (d.a = k),
            a.Oa(d, d),
            d.b < m && (m = d.b),
            d.b > u && (u = d.b),
            d.a < l && (l = d.a),
            d.a > p && (p = d.a),
            (d.b = f),
            (d.a = k),
            a.Oa(d, d))
          : ((a = a.F),
            (b = b.F),
            (d.b = f),
            (d.a = g),
            a.Oa(d, d),
            b.Sd(d, d),
            d.b < m && (m = d.b),
            d.b > u && (u = d.b),
            d.a < l && (l = d.a),
            d.a > p && (p = d.a),
            (d.b = h),
            (d.a = g),
            a.Oa(d, d),
            b.Sd(d, d),
            d.b < m && (m = d.b),
            d.b > u && (u = d.b),
            d.a < l && (l = d.a),
            d.a > p && (p = d.a),
            (d.b = h),
            (d.a = k),
            a.Oa(d, d),
            b.Sd(d, d),
            d.b < m && (m = d.b),
            d.b > u && (u = d.b),
            d.a < l && (l = d.a),
            d.a > p && (p = d.a),
            (d.b = f),
            (d.a = k),
            a.Oa(d, d),
            b.Sd(d, d)),
        d.b < m && (m = d.b),
        d.b > u && (u = d.b),
        d.a < l && (l = d.a),
        d.a > p && (p = d.a));
    e.b = m;
    e.a = l;
    e.f = u;
    e.d = p;
    return e;
  };
  ge.__name__ = "D7";
  ge.__isInterface__ = !0;
  ge.prototype = { j: ge };
  xa.__name__ = "D8";
  xa.reset = function () {
    xa.Tr = 0;
    xa.Sr = 0;
  };
  Kb.__name__ = "D9";
  Kb.prototype = {
    m: function () {
      this.va = this.translate = this.scale = null;
    },
    bl: function (a) {
      this.va != a && Xc.tj(this.va, a);
      this.l &= -18;
      this.l |= 34;
    },
    from: function (a) {
      var b = this.translate,
        c = a.translate;
      b.b = c.b;
      b.a = c.a;
      b.f = c.f;
      b = this.scale;
      c = a.scale;
      b.b = c.b;
      b.a = c.a;
      b.f = c.f;
      Xc.tj(this.va, a.va);
      this.l = a.l | 32;
      return this;
    },
    Iz: function (a, b) {
      if (0 < (a.l & 1)) {
        this.translate.b = b.translate.b;
        this.translate.a = b.translate.a;
        this.scale.b = b.scale.b;
        this.scale.a = b.scale.a;
        var c = this.va,
          d = b.va;
        c.b = d.b;
        c.a = d.a;
        c.d = d.d;
        c.e = d.e;
        this.l = b.l | 32;
        return this;
      }
      if (0 < (b.l & 1))
        return (
          (this.translate.b = a.translate.b),
          (this.translate.a = a.translate.a),
          (this.scale.b = a.scale.b),
          (this.scale.a = a.scale.a),
          (c = this.va),
          (d = a.va),
          (c.b = d.b),
          (c.a = d.a),
          (c.d = d.d),
          (c.e = d.e),
          (this.l = a.l | 32),
          this
        );
      this.l = 43;
      if (0 < (a.l & 2) && 0 < (b.l & 2) && 0 < (a.l & 8)) {
        c = this.va;
        if (0 < (a.l & 16)) {
          var e = b.va;
          c.b = e.b;
          c.a = e.a;
          c.d = e.d;
          c.e = e.e;
          0 < (b.l & 16) && (this.l |= 16);
        } else {
          if (0 < (b.l & 16))
            (d = a.va), (c.b = d.b), (c.a = d.a), (c.d = d.d), (c.e = d.e);
          else {
            d = a.va;
            e = b.va;
            var f = e.b;
            var g = e.a;
            var h = e.d;
            var k = e.e;
            e = d.b;
            var m = d.a;
            c.b = e * f + m * h;
            c.a = e * g + m * k;
            e = d.d;
            m = d.e;
            c.d = e * f + m * h;
            c.e = e * g + m * k;
          }
          this.bl(c);
        }
        h = this.translate;
        d = a.translate;
        0 < (a.l & 16)
          ? ((h.b = b.translate.b), (h.a = b.translate.a))
          : ((f = b.translate.b),
            (g = b.translate.a),
            (c = a.va),
            (h.b = c.b * f + c.a * g),
            (h.a = c.d * f + c.e * g));
        a = a.scale.b;
        h.b = h.b * a + d.b;
        h.a = h.a * a + d.a;
        0 < (b.l & 8)
          ? ((this.scale.b = this.scale.a = a * b.scale.b),
            (this.l &= -6),
            (this.l |= 40))
          : ((b = b.scale),
            (this.scale.b = a * b.b),
            (this.scale.a = a * b.a),
            (this.l &= -14),
            (this.l |= 32));
        return this;
      }
      d = a.va;
      0 < (a.l & 2) &&
        ((d = Kb.FA),
        (f = a.scale.b),
        (g = a.scale.a),
        (c = a.va),
        (d.b = c.b * f),
        (d.a = c.a * g),
        (d.d = c.d * f),
        (d.e = c.e * g));
      e = b.va;
      0 < (b.l & 2) &&
        ((d = Kb.GA),
        (f = b.scale.b),
        (g = b.scale.a),
        (c = b.va),
        (e.b = c.b * f),
        (e.a = c.a * g),
        (e.d = c.d * f),
        (e.e = c.e * g));
      c = this.va;
      f = e.b;
      g = e.a;
      h = e.d;
      k = e.e;
      e = d.b;
      m = d.a;
      c.b = e * f + m * h;
      c.a = e * g + m * k;
      e = d.d;
      m = d.e;
      c.d = e * f + m * h;
      c.e = e * g + m * k;
      h = this.translate;
      f = b.translate.b;
      g = b.translate.a;
      h.b = d.b * f + d.a * g;
      h.a = d.d * f + d.e * g;
      d = a.translate;
      h.b += d.b;
      h.a += d.a;
      this.l &= -12;
      this.l |= 32;
      return this;
    },
    Oa: function (a, b) {
      if (0 < (this.l & 1)) (b.b = a.b), (b.a = a.a);
      else {
        if (0 < (this.l & 2)) {
          var c = a.b * this.scale.b;
          a = a.a * this.scale.a;
          if (0 >= (this.l & 16)) {
            var d = c,
              e = this.va;
            c = e.b * c + e.a * a;
            a = e.d * d + e.e * a;
          }
        } else
          (c = a.b),
            (a = a.a),
            (d = c),
            (e = this.va),
            (c = e.b * c + e.a * a),
            (a = e.d * d + e.e * a);
        b.b = c + this.translate.b;
        b.a = a + this.translate.a;
      }
      return b;
    },
    Sd: function (a, b) {
      if (0 < (this.l & 1)) (b.b = a.b), (b.a = a.a);
      else {
        var c = a.b - this.translate.b;
        a = a.a - this.translate.a;
        if (0 < (this.l & 2)) {
          if (0 >= (this.l & 16)) {
            var d = c,
              e = this.va;
            c = c * e.b + a * e.d;
            a = d * e.a + a * e.e;
          }
          b.b = c / this.scale.b;
          b.a = a / this.scale.a;
        } else
          (e = this.va),
            (d = 1 / (e.b * e.e - e.a * e.d)),
            (b.b = e.e * d * c - e.a * d * a),
            (b.a = -(e.d * d) * c + e.b * d * a);
      }
      return b;
    },
    Jw: function () {
      var a = Math;
      return 0 < (this.l & 2)
        ? Math.max(a.abs(this.scale.b), a.abs(this.scale.a))
        : Math.max(
            a.abs(this.va.b) + a.abs(this.va.a),
            a.abs(this.va.d) + a.abs(this.va.e)
          );
    },
    j: Kb,
  };
  ia.__name__ = "DA";
  ia.__interfaces__ = [ke, ge];
  ia.prototype = {
    m: function () {
      this.remove();
      null != this.Ed && (this.Ed.m(), (this.Ed = null));
      null != this.dn && (this.dn.m(), (this.dn = null));
      this.node = null;
      ia.count--;
    },
    remove: function () {
      null != this.node.parent && this.node.parent.removeChild(this.node);
    },
    Hb: function () {
      var a = this.node.parent;
      return null != a && ((a = a.client), null != a && 10 == a.type)
        ? a
        : null;
    },
    Z: function (a) {
      this.Za != a && ((this.Za = 0 > a ? 0 : 1 < a ? 1 : a), (this.i |= 2));
      return this.Za;
    },
    M: function (a) {
      this.oi != a && ((this.oi = a), (this.i |= 4));
      return a;
    },
    X: function (a) {
      this.Aa != a && ((this.Aa = a), (this.i |= 1));
      return a;
    },
    V: function (a) {
      this.ra != a && ((this.ra = a), (this.i |= 1));
      return a;
    },
    dl: function (a) {
      this.Dd != a && ((this.Dd = a), (this.i |= 9));
      return a;
    },
    fa: function (a) {
      if (this.xa != a || this.Lb != a)
        (this.xa = this.Lb = a), (this.i |= 49), (this.i &= -65);
      return a;
    },
    qe: function (a) {
      this.xa != a && ((this.xa = a), (this.i &= -97), (this.i |= 17));
      return a;
    },
    Pc: function (a) {
      this.Lb != a && ((this.Lb = a), (this.i &= -97), (this.i |= 17));
      return a;
    },
    Bd: function () {
      throw q.G("override for implementation");
    },
    nd: function () {
      throw q.G("override for implementation");
    },
    $z: function (a) {
      this.zb != a && ((this.zb = a), (this.i |= 1));
      return a;
    },
    ft: function (a) {
      this.Ab != a && ((this.Ab = a), (this.i |= 1));
      return a;
    },
    ht: function (a) {
      this.de != a && ((this.de = a), (this.i |= 1));
      return a;
    },
    ho: function (a) {
      this.ee != a && ((this.ee = a), (this.i |= 1));
      return a;
    },
    Gb: function () {
      throw q.G("override for implementation");
    },
    Oh: function (a, b, c) {
      this.Xb();
      var d = this.Gb(this.Hb()),
        e = this.Aa - d.b,
        f = this.ra - d.a;
      switch (b) {
        case -1:
          this.X(a.b + e);
          break;
        case 0:
          this.X(a.b + 0.5 * (a.f - a.b) + e - (d.f - d.b) / 2);
          break;
        case 1:
          this.X(a.f + e - (d.f - d.b));
      }
      switch (c) {
        case -1:
          this.V(a.a + f);
          break;
        case 0:
          this.V(a.a + 0.5 * (a.d - a.a) + f - (d.d - d.a) / 2);
          break;
        case 1:
          this.V(a.d + f - (d.d - d.a));
      }
    },
    nw: function (a, b, c, d) {
      null == d && (d = 0);
      null == c && (c = 0);
      null == b && (b = lb.i0);
      this.fa(1);
      var e = (a.f - a.b) / this.Bd(),
        f = (a.d - a.a) / this.nd();
      b == lb.i2
        ? (this.qe(e), this.Pc(f))
        : b == lb.i0
        ? this.fa(Math.min(e, f))
        : this.fa(Math.max(e, f));
      this.X(a.b);
      this.V(a.a);
      f = this.Gb(this.Hb());
      e = a.b - f.b;
      f = a.a - f.a;
      if (b != lb.i2) {
        switch (c) {
          case -1:
            this.X(a.b);
            break;
          case 0:
            this.X(a.b + (a.f - a.b - this.Bd()) / 2);
            break;
          case 1:
            this.X(a.f - this.Bd());
        }
        switch (d) {
          case -1:
            this.V(a.a);
            break;
          case 0:
            this.V(a.a + (a.d - a.a - this.nd()) / 2);
            break;
          case 1:
            this.V(a.d - this.nd());
        }
      }
      a = this;
      a.X(a.Aa + e);
      a = this;
      a.V(a.ra + f);
    },
    update: function () {},
    Pf: function () {
      null == this.Ed && (this.Ed = new wc(this));
      return this.Ed;
    },
    Ww: function () {
      return new rf(this);
    },
    Xz: function (a) {
      var b = this.node.xq(da.i2);
      if (null == b) {
        if (null == a) return a;
        b = new he();
        this.node.Si(b);
      }
      if (null == a) return this.node.Ks(da.i2), a;
      b.Ld(a);
      return a;
    },
    Xb: function () {
      if (0 == (this.i & 7)) return this;
      0 < (this.i & 1) && this.Kt();
      0 < (this.i & 4) &&
        (this.node.fo(this.oi ? xb.i0 : xb.i1), (this.i &= -5));
      if (0 < (this.i & 2)) {
        if (1 > this.Za) {
          var a = this.node.xq(da.i0);
          null == a ? this.node.Si(new Yc(this.Za)) : (a.alpha = this.Za);
        } else this.node.Ks(da.i0);
        this.i &= -3;
        this.node.i |= 128;
      }
      return this;
    },
    Kt: function () {
      this.i &= -2;
      this.node.i |= 8;
      var a = this.node.local,
        b = this.de,
        c = this.ee,
        d = this.i & 120;
      if (0 < (d & 8)) {
        var e = this.Dd;
        e %= 360;
        0 > e && (e += 360);
        var f = 0.0174532925199432 * e,
          g = Math.sin(f);
        f = Math.cos(f);
        e = a.va;
        e.b = f;
        e.a = -g;
        e.d = g;
        e.e = f;
        a.bl(e);
        if (0 < (d & 64))
          (a.translate.b = -(b * f) + c * g + b + this.Aa - this.zb),
            (a.translate.a = -(b * g) - c * f + c + this.ra - this.Ab);
        else {
          if (0 < (d & 32)) {
            e = this.xa;
            var h = 0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e;
            d = h * b;
            e = h * c;
            a.scale.b = a.scale.a = h;
            a.l &= -6;
            a.l |= 40;
          } else {
            e = this.xa;
            h = 0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e;
            e = this.Lb;
            var k = 0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e;
            d = h * b;
            e = k * c;
            a.scale.b = h;
            a.scale.a = k;
            a.l &= -14;
            a.l |= 32;
          }
          a.translate.b = -(d * f) + e * g + b + this.Aa - this.zb;
          a.translate.a = -(d * g) - e * f + c + this.ra - this.Ab;
        }
      } else
        0 < (d & 64)
          ? ((a.translate.b = this.Aa - this.zb),
            (a.translate.a = this.ra - this.Ab))
          : 0 < (d & 32)
          ? ((e = this.xa),
            (h = 0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e),
            (a.scale.b = a.scale.a = h),
            (a.l &= -6),
            (a.l |= 40),
            (a.translate.b = -(h * b) + b + this.Aa - this.zb),
            (a.translate.a = -(h * c) + c + this.ra - this.Ab))
          : ((e = this.xa),
            (h = 0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e),
            (e = this.Lb),
            (k = 0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e),
            (a.scale.b = h),
            (a.scale.a = k),
            (a.l &= -14),
            (a.l |= 32),
            (a.translate.b = -(h * b) + b + this.Aa - this.zb),
            (a.translate.a = -(k * c) + c + this.ra - this.Ab));
      a.l &= -2;
      a.l |= 32;
    },
    j: ia,
  };
  P.__name__ = "DB";
  P.A = ia;
  P.prototype = t(ia.prototype, {
    m: function () {
      null != this.node &&
        (ia.prototype.m.call(this),
        null != this.lf && (this.lf.m(), (this.lf = null)),
        this.Bb.m(),
        (this.ea = this.Bb = null),
        (this.Hf = -1),
        (this.Kg = null),
        P.Re--);
    },
    Bd: function () {
      var a = Math;
      if (0 == (this.i & 8)) return this.J.b * a.abs(this.xa);
      var b = this.J.b * a.abs(this.xa) * 0.5,
        c = this.J.a * a.abs(this.Lb) * 0.5,
        d = this.Dd;
      d %= 360;
      0 > d && (d += 360);
      var e = 0.0174532925199432 * d;
      d = -a.sin(e);
      a = a.cos(e);
      var f = (e = 0);
      0 < a ? ((e -= a * b), (f += a * b)) : ((e += a * b), (f -= a * b));
      0 < d ? ((e -= d * c), (f += d * c)) : ((e += d * c), (f -= d * c));
      return f - e;
    },
    aA: function (a) {
      this.xa = a / this.J.b;
      this.i &= -97;
      this.i |= 17;
      return a;
    },
    nd: function () {
      var a = Math;
      if (0 == (this.i & 8)) return this.J.a * a.abs(this.Lb);
      var b = (this.J.b * a.abs(this.xa)) / 2,
        c = (this.J.a * a.abs(this.Lb)) / 2,
        d = this.Dd;
      d %= 360;
      0 > d && (d += 360);
      var e = 0.0174532925199432 * d;
      d = a.sin(e);
      a = a.cos(e);
      var f = (e = 0);
      0 < d ? ((e -= d * b), (f += d * b)) : ((e += d * b), (f -= d * b));
      0 < a ? ((e -= a * c), (f += a * c)) : ((e += a * c), (f -= a * c));
      return f - e;
    },
    Zz: function (a) {
      this.Lb = a / this.J.a;
      this.i &= -97;
      this.i |= 17;
      return a;
    },
    gi: function () {
      var a = this.J.a,
        b = new r();
      b.b = this.J.b;
      b.a = a;
      return b;
    },
    EB: function () {
      return this.J.b;
    },
    DB: function () {
      return this.J.a;
    },
    Db: function () {
      this.$z(this.J.b / 2);
      this.ft(this.J.a / 2);
      this.i |= 1;
    },
    Pa: function () {
      this.de = this.J.b / 2;
      this.ee = this.J.a / 2;
      this.i |= 1;
    },
    Oc: function (a, b) {
      if (this.Hf == a) return null != b && this.kf(b), this;
      this.Hf = a;
      this.Kg = null;
      if (null == this.Bb.za) {
        var c = new cc();
        this.Bb.za = c;
      } else
        11 == this.Bb.za.type
          ? (c = this.Bb.za)
          : (this.Bb.za.m(), (c = new cc()), (this.Bb.za = c));
      a = Z.get(a);
      c.Oc(a, a.Td);
      this.J.b = c.wb.J.b;
      this.J.a = c.wb.J.a;
      null == b && ((c = this.J), (a = a.scale), (c.b *= a), (c.a *= a));
      this.i = this.J.b == this.J.a ? this.i | 256 : this.i & -257;
      this.i &= -513;
      this.i |= 129;
      null != b && this.kf(b);
      return this;
    },
    kf: function (a) {
      if (this.Kg == a) return a;
      this.Kg = a;
      this.Rz(this.Bb.za.wb.Td.sk.C[a].id);
      return a;
    },
    Wj: function () {
      null == this.lf && (this.lf = new ab(this));
      return this.lf;
    },
    bo: function (a, b, c) {
      this.J.b = b;
      this.J.a = c;
      this.i = this.J.b == this.J.a ? this.i | 256 : this.i & -257;
      this.i &= -513;
      this.i |= 129;
      0 > this.Hf
        ? null == this.Bb.za && (this.Bb.za = new Ac())
        : ((this.Hf = -1),
          (this.Kg = null),
          this.Bb.za.m(),
          (this.Bb.za = new Ac()));
      this.Bb.za.bo(a);
      return this;
    },
    bc: function (a) {
      ha.sg(this);
      0 < (this.node.i & 32) && this.node.sf();
      return 1 == this.Bb.bc(a, null);
    },
    Gb: function (a) {
      var b = new G();
      if (a == this) {
        a = this.J.b;
        var c = this.J.a;
        b.b = 0;
        b.a = 0;
        b.f = a;
        b.d = c;
        return b;
      }
      if (0 == (this.i & 128))
        return (b.b = 0), (b.a = 0), (b.f = 0), (b.d = 0), b;
      if ((c = 512 == (this.i & 8704))) (this.i &= -513), (this.i |= 1);
      0 == (this.i & 16384) &&
        (ha.sg(this), null == a || ha.Tm(this, a) || ha.sg(a));
      this.node.Og(null == a ? this.node.Pe() : a.node, b);
      c && (this.i |= 513);
      this.i &= -24577;
      return b;
    },
    Xb: function () {
      return 0 == (this.i & 128) ? this : ia.prototype.Xb.call(this);
    },
    clone: function () {
      var a = new P(this.Hb()),
        b = this.Bb.za;
      if (null != b)
        switch (b.type) {
          case 5:
            a.Bb.za = new Ac(b);
            break;
          case 11:
            if (
              ((a.Bb.za = new cc(b)),
              (a.Hf = this.Hf),
              (a.Kg = this.Kg),
              null != this.ea)
            ) {
              b = this.ea;
              var c = b.b,
                d = b.a,
                e = b.f,
                f = b.d;
              b = new G();
              b.b = c;
              b.a = d;
              b.f = e;
              b.d = f;
              a.ea = b;
            }
        }
      null != this.node.name && (a.node.name = this.node.name + "_clone");
      a.Aa = this.Aa;
      a.ra = this.ra;
      a.xa = this.xa;
      a.Lb = this.Lb;
      a.zb = this.zb;
      a.Ab = this.Ab;
      a.de = this.de;
      a.ee = this.ee;
      a.Dd = this.Dd;
      a.Za = this.Za;
      a.oi = this.oi;
      b = a.J;
      c = this.J;
      b.b = c.b;
      b.a = c.a;
      a.i = this.i;
      a.node.i = a.node.i;
      a.node.local.from(this.node.local);
      a.node.F.from(this.node.F);
      null != a.node.nc && (a.node.nc = Lb.Ql(this.node.nc));
      wc.clone(this, a);
      ab.clone(this, a);
      return a;
    },
    Kt: function () {
      this.i &= -2;
      this.node.i |= 8;
      var a = this.node.local;
      if (0 < (this.i & 512)) {
        var b = this.de - this.ea.b,
          c = this.ee - this.ea.a,
          d = this.i & 376;
        if (0 < (d & 8)) {
          var e = this.Dd;
          e %= 360;
          0 > e && (e += 360);
          var f = 0.0174532925199432 * e,
            g = Math.sin(f);
          f = Math.cos(f);
          e = a.va;
          e.b = f;
          e.a = -g;
          e.d = g;
          e.e = f;
          a.bl(e);
          if (0 < (d & 64))
            0 < (d & 256)
              ? ((a.scale.b = a.scale.a = this.ea.f), (a.l &= -6), (a.l |= 40))
              : ((a.scale.b = this.ea.f),
                (a.scale.a = this.ea.d),
                (a.l &= -14),
                (a.l |= 32)),
              (a.translate.b =
                -(b * f) + c * g + b + this.Aa - this.zb + this.ea.b),
              (a.translate.a =
                -(b * g) - c * f + c + this.ra - this.Ab + this.ea.a);
          else {
            if (0 < (d & 32)) {
              e = this.xa;
              var h = 0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e;
              e = h * b;
              var k = h * c;
              0 < (d & 256)
                ? ((a.scale.b = a.scale.a = this.ea.f * h),
                  (a.l &= -6),
                  (a.l |= 40))
                : ((a.scale.b = this.ea.f * h),
                  (a.scale.a = this.ea.d * h),
                  (a.l &= -14),
                  (a.l |= 32));
            } else
              (e = this.xa),
                (d = 0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e),
                (e = this.Lb),
                (h = 0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e),
                (e = d * b),
                (k = h * c),
                (a.scale.b = this.ea.f * d),
                (a.scale.a = this.ea.d * h),
                (a.l &= -14),
                (a.l |= 32);
            a.translate.b =
              -(e * f) + k * g + b + this.Aa - this.zb + this.ea.b;
            a.translate.a =
              -(e * g) - k * f + c + this.ra - this.Ab + this.ea.a;
          }
        } else
          0 < (d & 64)
            ? (0 < (d & 256)
                ? ((a.scale.b = a.scale.a = this.ea.f),
                  (a.l &= -6),
                  (a.l |= 40))
                : ((a.scale.b = this.ea.f),
                  (a.scale.a = this.ea.d),
                  (a.l &= -14),
                  (a.l |= 32)),
              (a.translate.b = this.Aa - this.zb + this.ea.b),
              (a.translate.a = this.ra - this.Ab + this.ea.a))
            : (0 < (d & 32)
                ? ((e = this.xa),
                  (h =
                    0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e),
                  0 < (d & 256)
                    ? ((a.scale.b = a.scale.a = this.ea.f * h),
                      (a.l &= -6),
                      (a.l |= 40))
                    : ((a.scale.b = this.ea.f * h),
                      (a.scale.a = this.ea.d * h),
                      (a.l &= -14),
                      (a.l |= 32)),
                  (a.translate.b =
                    -(h * b) + b + this.Aa - this.zb + this.ea.b))
                : ((e = this.xa),
                  (d =
                    0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e),
                  (e = this.Lb),
                  (h =
                    0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e),
                  (a.scale.b = this.ea.f * d),
                  (a.scale.a = this.ea.d * h),
                  (a.l &= -14),
                  (a.l |= 32),
                  (a.translate.b =
                    -(d * b) + b + this.Aa - this.zb + this.ea.b)),
              (a.translate.a = -(h * c) + c + this.ra - this.Ab + this.ea.a));
      } else
        (b = this.de),
          (c = this.ee),
          (d = this.i & 376),
          0 < (d & 8)
            ? ((e = this.Dd),
              (e %= 360),
              0 > e && (e += 360),
              (f = 0.0174532925199432 * e),
              (g = Math.sin(f)),
              (f = Math.cos(f)),
              (e = a.va),
              (e.b = f),
              (e.a = -g),
              (e.d = g),
              (e.e = f),
              a.bl(e),
              0 < (d & 64)
                ? (0 < (d & 256)
                    ? ((a.scale.b = a.scale.a = this.J.b),
                      (a.l &= -6),
                      (a.l |= 40))
                    : ((a.scale.b = this.J.b),
                      (a.scale.a = this.J.a),
                      (a.l &= -14),
                      (a.l |= 32)),
                  (a.translate.b = -(b * f) + c * g + b + this.Aa - this.zb),
                  (a.translate.a = -(b * g) - c * f + c + this.ra - this.Ab))
                : (0 < (d & 32)
                    ? ((e = this.xa),
                      (h =
                        0 > e
                          ? -0.001 < e
                            ? -0.001
                            : e
                          : 0.001 > e
                          ? 0.001
                          : e),
                      (e = h * b),
                      (k = h * c),
                      0 < (d & 256)
                        ? ((a.scale.b = a.scale.a = this.J.b * h),
                          (a.l &= -6),
                          (a.l |= 40))
                        : ((a.scale.b = this.J.b * h),
                          (a.scale.a = this.J.a * h),
                          (a.l &= -14),
                          (a.l |= 32)))
                    : ((e = this.xa),
                      (d =
                        0 > e
                          ? -0.001 < e
                            ? -0.001
                            : e
                          : 0.001 > e
                          ? 0.001
                          : e),
                      (e = this.Lb),
                      (h =
                        0 > e
                          ? -0.001 < e
                            ? -0.001
                            : e
                          : 0.001 > e
                          ? 0.001
                          : e),
                      (e = d * b),
                      (k = h * c),
                      (a.scale.b = this.J.b * d),
                      (a.scale.a = this.J.a * h),
                      (a.l &= -14),
                      (a.l |= 32)),
                  (a.translate.b = -(e * f) + k * g + b + this.Aa - this.zb),
                  (a.translate.a = -(e * g) - k * f + c + this.ra - this.Ab)))
            : 0 < (d & 64)
            ? (0 < (d & 256)
                ? ((a.scale.b = a.scale.a = this.J.b), (a.l &= -6), (a.l |= 40))
                : ((a.scale.b = this.J.b),
                  (a.scale.a = this.J.a),
                  (a.l &= -14),
                  (a.l |= 32)),
              (a.translate.b = this.Aa - this.zb),
              (a.translate.a = this.ra - this.Ab))
            : (0 < (d & 32)
                ? ((e = this.xa),
                  (h =
                    0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e),
                  0 < (d & 256)
                    ? ((a.scale.b = a.scale.a = this.J.b * h),
                      (a.l &= -6),
                      (a.l |= 40))
                    : ((a.scale.b = this.J.b * h),
                      (a.scale.a = this.J.a * h),
                      (a.l &= -14),
                      (a.l |= 32)),
                  (a.translate.b = -(h * b) + b + this.Aa - this.zb))
                : ((e = this.xa),
                  (d =
                    0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e),
                  (e = this.Lb),
                  (h =
                    0 > e ? (-0.001 < e ? -0.001 : e) : 0.001 > e ? 0.001 : e),
                  (a.scale.b = this.J.b * d),
                  (a.scale.a = this.J.a * h),
                  (a.l &= -14),
                  (a.l |= 32),
                  (a.translate.b = -(d * b) + b + this.Aa - this.zb)),
              (a.translate.a = -(h * c) + c + this.ra - this.Ab));
      a.l &= -2;
      a.l |= 32;
    },
    Rz: function (a) {
      var b = this.Bb.za;
      b.Ys(a);
      b = b.wb.Td;
      if (b.dh) a = b.bn.c[a];
      else {
        var c = b.cn,
          d = c.ua,
          e = d.Hc[(73856093 * a) & d.Cd];
        if (-1 == e) a = -2147483648;
        else if (((d = d.c), d[e] == a)) a = d[e + 1];
        else {
          var f = -2147483648;
          for (e = d[e + 2]; -1 != e; ) {
            if (d[e] == a) {
              f = d[e + 1];
              break;
            }
            e = d[e + 2];
          }
          a = f;
        }
        a = -2147483648 == a ? null : c.fh[a];
      }
      c = this.J;
      e = a.J;
      c.b = e.b;
      c.a = e.a;
      if (a.Co) {
        this.i |= 512;
        c = a.rf;
        e = a.ut;
        if (null == this.ea) {
          d = c.b;
          f = c.a;
          var g = e.f,
            h = e.d;
          c = new G();
          c.b = d;
          c.a = f;
          c.f = g;
          c.d = h;
          this.ea = c;
        } else
          (this.ea.b = c.b),
            (this.ea.a = c.a),
            (this.ea.f = e.f),
            (this.ea.d = e.d);
        this.i = e.f == e.d ? this.i | 256 : this.i & -257;
      } else
        (this.i &= -513),
          (this.i = this.J.b == this.J.a ? this.i | 256 : this.i & -257);
      1 != b.scale &&
        ((b = 1 / b.scale),
        (c = this.J),
        (c.b *= b),
        (c.a *= b),
        a.Co &&
          ((this.ea.b *= b),
          (this.ea.a *= b),
          (this.ea.f *= b),
          (this.ea.d *= b)));
      this.i |= 1;
    },
    j: P,
  });
  var lb = (La.eB = { Ac: !0, zc: ["i0", "i1", "i2"] });
  lb.i0 = { I: 0, T: "eB", toString: I };
  lb.i1 = { I: 1, T: "eB", toString: I };
  lb.i2 = { I: 2, T: "eB", toString: I };
  lb.fd = [lb.i0, lb.i1, lb.i2];
  rf.__name__ = "DC";
  rf.prototype = {
    add: function () {
      this.ur.node.Si(vb.Zt);
      return this.ur;
    },
    j: rf,
  };
  X.__name__ = "DD";
  X.A = ia;
  X.prototype = t(ia.prototype, {
    Xb: function () {
      ia.prototype.Xb.call(this);
      for (var a = this.node.na, b; null != a; ) {
        if (null != a.client)
          switch (a.client.type) {
            case 7:
            case 10:
            case 12:
              (b = a.client), b.Xb();
          }
        a = a.K;
      }
      return this;
    },
    m: function () {
      null != this.node &&
        (ha.dm(this),
        -1 != this.Tn && (wb.current.Vp(this.Tn), (this.Tn = -1)),
        ia.prototype.m.call(this),
        X.Re--);
    },
    appendChild: function (a) {
      this.node.appendChild(a.node);
      return this;
    },
    bi: function (a) {
      return this.node.bi(a).client;
    },
    Ad: function (a) {
      a = this.node.Ad(a);
      return null == a ? null : a.client;
    },
    sz: function (a) {
      if (null == a)
        return null != this.Hb() && this.node.parent.$s(this.node), this;
      this.node.$s(a.node);
      return this;
    },
    bc: function (a, b) {
      0 < (this.i & 1) && this.Xb();
      var c = this.node.i;
      0 < (c & 8) ? this.node.rg(!1, !0) : 0 < (c & 32) && this.node.Ht(!0, !1);
      null == this.result && (this.result = new sf());
      this.result.count = 0;
      a = this.node.bc(a, this.result);
      if (null != b)
        for (c = 0; c < a; ) {
          var d = c++;
          b[d] = this.result.data[d].client;
        }
      return a;
    },
    update: function (a) {
      ia.prototype.update.call(this, a);
      var b = this.node;
      if (null != b && 0 != (this.i & 1024))
        for (var c = b.na; null != c; )
          (b = c.K), (c = c.client), null != c && c.update(a), (c = b);
    },
    Gb: function (a) {
      var b = new G();
      b.b = b.a = Infinity;
      b.f = b.d = -Infinity;
      if (0 == this.node.ri) return b;
      var c = new L(32),
        d = new Bb(32),
        e = this.node;
      d.L == d.u && d.O();
      d.c[d.L++] = e;
      for (var f; 0 < d.L; ) {
        e = d.c[--d.L];
        if (256 == (e.i & 2304))
          for (f = e, f = f.na; null != f; )
            d.L == d.u && d.O(), (d.c[d.L++] = f), (f = f.K);
        if (null != e.client)
          switch (e.client.type) {
            case 7:
              e = e.client;
              c.g == c.u && c.O();
              c.c[c.g++] = e;
              break;
            case 12:
              (e = e.client),
                c.g == c.u && c.O(),
                (c.c[c.g++] = e),
                0 < (e.i & 512) && ((e.i &= -513), (e.i |= 1), (e.i |= 2048));
          }
      }
      ha.sg(this);
      null == a || ha.Tm(this, a) || ha.sg(a);
      b.b = 3e38;
      b.a = 3e38;
      b.f = -3e38;
      b.d = -3e38;
      d = c.c;
      e = 0;
      for (f = c.g; e < f; ) {
        var g = e++;
        g = d[g];
        g.i |= 24576;
        g = g.Gb(a);
        g.b < b.b && (b.b = g.b);
        g.a < b.a && (b.a = g.a);
        g.f > b.f && (b.f = g.f);
        g.d > b.d && (b.d = g.d);
      }
      d = c.c;
      e = 0;
      for (f = c.g; e < f; )
        (g = e++),
          (g = d[g]),
          0 < (g.i & 2048) && ((B.Ta(g, P).i |= 513), (g.i &= -2049));
      return b;
    },
    Bd: function () {
      var a = this.Gb(this.Hb());
      return a.f - a.b;
    },
    nd: function () {
      var a = this.Gb(this.Hb());
      return a.d - a.a;
    },
    qe: function (a) {
      return a;
    },
    Pc: function (a) {
      return a;
    },
    Pa: function () {
      var a = this.Gb(this);
      this.de = (a.f - a.b) / 2;
      this.ee = (a.d - a.a) / 2;
      this.i |= 1;
    },
    j: X,
  });
  Vc.__name__ = "DF";
  Vc.A = xc;
  Vc.prototype = t(xc.prototype, { j: Vc });
  ab.__name__ = "E0";
  ab.Pp = function (a, b) {
    function c(b) {
      d.push(a + (10 > b ? "000" : 100 > b ? "00" : "0") + b);
    }
    var d = [],
      e = 1;
    if (1 > b) for (; e >= b; ) c(e--);
    else for (; e <= b; ) c(e++);
    return d;
  };
  ab.Tp = function (a, b) {
    for (var c = [], d = 0, e = b.length; d < e; ) {
      var f = d++;
      c.push(new Af(b[f], 0.03333333333333333));
    }
    return new Bf(a, c);
  };
  ab.clone = function (a, b) {
    var c = a.lf;
    if (null != c && 0 != c.Zg) {
      var d = (b.lf = new ab(b));
      d.length = c.length;
      d.Zg = c.Zg;
      d.Xf = c.Xf;
      d.repeat = c.repeat;
      for (a = a.node.controllers; null != a; )
        14 == a.type &&
          ((c = new Vc()),
          a.Hg(c),
          (c.mh = D(d, d.mh)),
          (c.nh = D(d, d.nh)),
          b.node.la(c),
          (d.controller = c)),
          (a = a.next);
    }
  };
  ab.prototype = {
    m: function () {
      null != this.controller &&
        (this.controller.m(), (this.controller = null));
      this.o = this.vn = null;
    },
    play: function (a, b, c, d) {
      null == b && (b = !0);
      null != c && this.Lz(c);
      return this.Jy(a, 0, -1, b, d);
    },
    Jy: function (a, b, c, d, e) {
      null == d && (d = !0);
      this.Zg = !0;
      var f = this.xw();
      -2 == this.repeat
        ? ((f.repeat = za.i2), (f.Yk = -1))
        : -1 == this.repeat
        ? ((f.repeat = za.i1), (f.Yk = -1))
        : ((f.repeat = za.i0), (f.Yk = this.repeat));
      f.play(a, b, c, d ? 0 : this.Xf);
      this.length = f.Xc - f.jc;
      this.vn = e;
      return this;
    },
    Lz: function (a) {
      this.repeat = a;
      return this;
    },
    xw: function () {
      if (null == this.controller || 0 > this.controller.type) {
        var a = this.o.node,
          b = a.kw(14);
        null == b && ((b = new Vc()), a.la(b));
        b.nh = D(this, this.nh);
        b.mh = D(this, this.mh);
        this.controller = b;
      }
      return this.controller;
    },
    nh: function (a, b, c) {
      this.Xf = c;
      this.o.kf(a);
    },
    mh: function () {
      null != this.vn && this.vn();
      null != this.controller &&
        this.controller.repeat != za.i1 &&
        ((this.Zg = !1), (this.length = -1));
    },
    j: ab,
  };
  Oa.__name__ = "E1";
  Oa.A = ia;
  Oa.prototype = t(ia.prototype, {
    m: function () {
      if (null != this.node) {
        for (var a = B.Ta(this.node, Na).na; null != a; ) {
          var b = a.K;
          a.m();
          a = b;
        }
        ia.prototype.m.call(this);
        this.ed = this.Na = this.zf = this.wb = null;
        Oa.Re--;
      }
    },
    Oc: function (a) {
      this.wb = Z.get(a);
      this.zf = this.wb.Td.tf;
      this.jl = !0;
    },
    dc: function (a) {
      this.Eb = this.Eb || this.Na.text != a;
      this.Na.text = a;
      return this;
    },
    AB: function () {
      return this.Na.size;
    },
    Ti: function (a) {
      this.Eb = this.Eb || this.Na.size != a;
      this.Na.size = a;
      return this;
    },
    yh: function (a, b) {
      this.Eb =
        (this.Eb = this.Eb || this.Na.width != a) || this.Na.height != b;
      this.Na.width = a;
      this.Na.height = b;
      return this;
    },
    uz: function (a) {
      this.Eb = this.Eb || this.Na.align != a;
      this.Na.align = a;
      return this;
    },
    Pz: function () {
      this.Eb = this.Eb || this.Na.multiline;
      this.Na.multiline = !1;
      this.Eb && (this.Yi = new Uc());
      return this;
    },
    Qz: function () {
      var a = this.zf.Un;
      this.Eb = this.Eb || this.Na.size != a;
      this.Na.size = a;
      return this;
    },
    kt: function (a) {
      null == a && (a = 4);
      this.Yi.rb(this.zf, this.Na, this.ed);
      if (this.ed.overflow) {
        var b = this.Na.size;
        b < a ||
          ((this.Na.size = this.gv(a, b - 1)),
          (this.Eb = !0),
          this.Yi.rb(this.zf, this.Na, this.ed));
      }
    },
    Gb: function (a) {
      this.Xb();
      var b = this.ed.$,
        c = b.b,
        d = b.a,
        e = b.f,
        f = b.d;
      b = new G();
      b.b = c;
      b.a = d;
      b.f = e;
      b.d = f;
      if (b.b > b.f || b.a > b.d)
        return (b.b = 0), (b.a = 0), (b.f = 0), (b.d = 0), b;
      if (a == this) return b;
      0 == (this.i & 16384) &&
        (ha.sg(this), null != a && 0 == ha.Tm(this, a) && ha.sg(a));
      a = null == a ? this.node.Pe() : a.node;
      return ja.TA(this.node, a, b);
    },
    Oh: function (a, b, c) {
      this.Xb();
      if (!this.ed.overflow) {
        var d = this.ed.$;
        d.b > d.f || d.a > d.d || ia.prototype.Oh.call(this, a, b, c);
      }
    },
    update: function (a) {
      ia.prototype.update.call(this, a);
      if (this.Am) {
        for (var b = 0, c = B.Ta(this.node, Na), d = c.na, e; null != d; ) {
          if (0 < (d.i & 1))
            if (((e = d), (e.Yj += a), 10 < e.Yj)) {
              e = d.K;
              c.removeChild(d);
              d.m();
              d = e;
              continue;
            } else ++b;
          d = d.K;
        }
        this.Am = 0 < b;
      }
    },
    Xb: function () {
      ia.prototype.Xb.call(this);
      if (null == this.wb || null == this.Na.text || (!this.Eb && !this.jl))
        return this;
      this.Eb = !1;
      var a = B.Ta(this.node, Na);
      if (this.jl) {
        this.jl = !1;
        for (var b = a.na, c; null != b; )
          (c = b.K), a.removeChild(b), b.m(), (b = c);
      }
      this.Yi.rb(this.zf, this.Na, this.ed);
      c = this.ed.Bj;
      for (
        var d = this.ed.Hp, e = a.na, f = 0, g, h, k, m, l, u, p = 0, n = c.g;
        p < n;

      )
        (m = p++),
          (b = c.c[m]),
          (g = m << 2),
          (h = d.c[g]),
          (k = d.c[g + 1]),
          (m = d.c[g + 2]),
          (l = d.c[g + 3]),
          (u = String.fromCodePoint(b)),
          null != e
            ? ((g = e), (g.name = u), g.fo(xb.i0), a.zz(g, f++), (e = e.K))
            : ((g = new fe(u)),
              (u = new cc().Oc(this.wb, this.wb.Td)),
              (g.za = u),
              a.kp(g, f++)),
          (u = g.local),
          (u.translate.b = h),
          (u.translate.a = k),
          (u.l &= -2),
          (u.l |= 32),
          (h = g.local),
          (h.scale.b = m),
          (h.scale.a = l),
          (h.l &= -14),
          (h.l |= 32),
          (u = g.za),
          u.Ys(b);
      a.i |= 8;
      for (b = 0; null != e; )
        100 > b++
          ? ((this.Am = !0), (g = e), (g.Yj = 0), e.fo(xb.i1), (e = e.K))
          : ((c = e.K), a.removeChild(e), e.m(), (e = c));
      return this;
    },
    Pa: function () {
      var a = this.Gb(this);
      a.b > a.f || a.a > a.d
        ? this.ht(this.ho(0))
        : (this.ht(a.b + 0.5 * (a.f - a.b)), this.ho(a.a + 0.5 * (a.d - a.a)));
    },
    Bd: function () {
      var a = this.Gb(this.Hb());
      return a.f - a.b;
    },
    nd: function () {
      var a = this.Gb(this.Hb());
      return a.d - a.a;
    },
    qe: function () {
      throw q.G("unsupported operation");
    },
    Pc: function () {
      throw q.G("unsupported operation");
    },
    gv: function (a, b) {
      for (
        var c = a, d = -1, e = c + ((b - c) >> 1);
        (this.Na.size = e),
          this.Yi.rb(this.zf, this.Na, this.ed),
          this.ed.overflow ? (b = e) : (c = d = e),
          (e = c + ((b - c) >> 1)),
          e != c;

      );
      return 0 > d ? a : d;
    },
    j: Oa,
  });
  fe.__name__ = "E2";
  fe.A = Ab;
  fe.prototype = t(Ab.prototype, { j: fe });
  ee.__name__ = "E3";
  ee.__isInterface__ = !0;
  ee.prototype = { j: ee };
  qf.__name__ = "E4";
  qf.prototype = { j: qf };
  pf.__name__ = "E5";
  pf.prototype = { j: pf };
  Uc.__name__ = "E6";
  Uc.__interfaces__ = [ee];
  Uc.prototype = {
    rb: function (a, b, c) {
      c.overflow = !1;
      var d = c.$;
      d.b = d.a = Infinity;
      d.f = d.d = -Infinity;
      var e = b.text,
        f = e.length;
      if (0 != f) {
        var g = c.Bj;
        g.Lc(f);
        g.g = 0;
        var h = c.Hp;
        h.Lc(f);
        h.g = 0;
        var k = a.Ip,
          m = this.Bj;
        m.g = 0;
        m.Lc(f);
        for (var l = 0, u = f; l < u; ) {
          f = l++;
          var p = C.Aj(e, f);
          m.c[m.g++] = p;
        }
        if (-1 < b.rr && ((l = Oa.JB.C[b.rr]), null != l)) {
          f = 0;
          e = m.g - 1;
          for (var n; f < e; ) {
            u = m.c[f];
            n = m.c[f + 1];
            var r = (n << 16) | u;
            p = l.Hc[(73856093 * r) & l.Cd];
            if (-1 == p) p = !1;
            else {
              var q = l.c;
              if (q[p] == r) p = !0;
              else {
                var t = !1;
                for (p = q[p + 2]; -1 != p; ) {
                  if (q[p] == r) {
                    t = !0;
                    break;
                  }
                  p = q[p + 2];
                }
                p = t;
              }
            }
            if (p) {
              u |= n << 16;
              p = l.Hc[(73856093 * u) & l.Cd];
              if (-1 == p) p = -2147483648;
              else if (((n = l.c), n[p] == u)) p = n[p + 1];
              else {
                t = -2147483648;
                for (p = n[p + 2]; -1 != p; ) {
                  if (n[p] == u) {
                    t = n[p + 1];
                    break;
                  }
                  p = n[p + 2];
                }
                p = t;
              }
              m.c[f] = p;
              m.Js(f + 1);
              --e;
            }
            ++f;
          }
        }
        f = this.Af;
        f.g = 0;
        this.Af.Lc(m.g);
        l = 0;
        for (u = m.g; l < u; ) {
          f = l++;
          e = m.c[f];
          f = k.ua;
          p = f.Hc[(73856093 * e) & f.Cd];
          if (-1 == p) p = !1;
          else if (((q = f.c), q[p] == e)) p = !0;
          else {
            t = !1;
            for (p = q[p + 2]; -1 != p; ) {
              if (q[p] == e) {
                t = !0;
                break;
              }
              p = q[p + 2];
            }
            p = t;
          }
          if (p) {
            f = this.Af;
            t = k.ua;
            p = t.Hc[(73856093 * e) & t.Cd];
            if (-1 == p) e = -2147483648;
            else if (((n = t.c), n[p] == e)) e = n[p + 1];
            else {
              t = -2147483648;
              for (p = n[p + 2]; -1 != p; ) {
                if (n[p] == e) {
                  t = n[p + 1];
                  break;
                }
                p = n[p + 2];
              }
              e = t;
            }
            p = -2147483648 == e ? null : k.fh[e];
            f.c[f.g++] = p;
          }
        }
        if (!this.Af.Wg()) {
          m = b.width;
          l = b.ik;
          k = b.align;
          u = a.ik;
          n = b.size / a.Un;
          var v = b.SA * n;
          if (1 > b.height / (a.lineHeight * n)) c.overflow = !0;
          else {
            var w = this.Af.c[0],
              y = -(w.offsetX * n);
            e = a.padding;
            a = e[0] * n;
            var z = e[1] * n,
              A = e[2] * n,
              D = e[3] * n;
            f = 0;
            e = this.Af.g;
            p = 0;
            for (t = 0; f < e; ) {
              w = this.Af.c[f++];
              var B = y + w.offsetX * n;
              var E = w.offsetY * n;
              var F = w.ql * n;
              var G = w.C * n;
              var H = B + F - z;
              if (l) {
                r = (w.code << 16) | p;
                p = u.Hc[(73856093 * r) & u.Cd];
                if (-1 == p) t = -2147483648;
                else if (((q = u.c), q[p] == r)) t = q[p + 1];
                else
                  for (t = -2147483648, p = q[p + 2]; -1 != p; ) {
                    if (q[p] == r) {
                      t = q[p + 1];
                      break;
                    }
                    p = q[p + 2];
                  }
                -2147483648 == t && (t = 0);
                t *= n;
                p = w.code;
                H += t;
              }
              if (H > m) {
                c.overflow = !0;
                return;
              }
              B += t;
              g.c[g.g++] = w.code;
              h.c[h.g++] = B;
              h.c[h.g++] = E;
              h.c[h.g++] = F;
              h.c[h.g++] = G;
              32 < w.code &&
                ((q = E + a),
                (r = B + D),
                r < d.b ? (d.b = r) : r > d.f && (d.f = r),
                q < d.a ? (d.a = q) : q > d.d && (d.d = q),
                (q = E + G - A),
                (r = B + F - z),
                r < d.b ? (d.b = r) : r > d.f && (d.f = r),
                q < d.a ? (d.a = q) : q > d.d && (d.d = q));
              q = w.np;
              0 < b.Gp && (q = b.Gp);
              y += q * n + t + v;
            }
            if (-1 != k) {
              c = m - d.f;
              0 == k && (c /= 2);
              l = 0;
              for (u = e; l < u; ) (f = l++), (g = f << 2), (h.c[g] += c);
              c = d.b + c;
              E = d.f - d.b;
              d.b = c;
              d.f = c + E;
            }
            if (b.tv)
              for (l = 0, u = e; l < u; )
                (f = l++), (g = f << 2), (h.c[g + 1] /= 2);
          }
        }
      }
    },
    j: Uc,
  };
  ha.__name__ = "E7";
  ha.update = function (a, b) {
    var c = ha.no;
    c.clear();
    c.L == c.u && c.O();
    for (c.c[c.L++] = a; 0 < c.L; )
      if (((a = c.c[--c.L]), null == a.client)) {
        if (0 == (a.i & 1024))
          for (a = a.na; null != a; )
            c.L == c.u && c.O(), (c.c[c.L++] = a), (a = a.K);
      } else
        switch (a.client.type) {
          case 10:
            var d = a.client;
            var e = d.i & 1024;
            d.i &= -1025;
            d.update(b);
            d.i |= e;
            if (0 < (d.i & 1024))
              for (a = a.na; null != a; )
                c.L == c.u && c.O(), (c.c[c.L++] = a), (a = a.K);
            break;
          case 7:
          case 12:
            (d = a.client), d.update(b);
        }
  };
  ha.Xb = function (a) {
    var b = ha.no,
      c = null,
      d = null;
    b.clear();
    b.L == b.u && b.O();
    for (b.c[b.L++] = a; 0 < b.L; ) {
      a = b.c[--b.L];
      0 < (a.i & 256) && ((c = a), (d = c.na));
      var e = a.client;
      if (null != e)
        switch (e.type) {
          case 10:
            c.na = null;
            e.Xb();
            c.na = d;
            break;
          case 7:
          case 12:
            e.Xb();
        }
      if (0 < (a.i & 256))
        for (; null != d; ) b.L == b.u && b.O(), (b.c[b.L++] = d), (d = d.K);
    }
  };
  ha.dm = function (a, b) {
    null == b && (b = !1);
    if (10 == a.type)
      for (var c = B.Ta(a, X).node.na, d; null != c; )
        (d = c.K), ha.dm(c.client, !0), (c = d);
    b && a.m();
  };
  ha.Tm = function (a, b) {
    for (a = a.Hb(); null != a; ) {
      if (a == b) return !0;
      a = a.Hb();
    }
    return !1;
  };
  ha.sg = function (a) {
    var b = a.node,
      c = ha.no,
      d = a.node;
    for (c.clear(); null != d; ) {
      0 < (d.i & 8) && (b = d);
      if (null != d.client) {
        var e = d.client;
        0 < (e.i & 1) && (e.Xb(), (b = d));
      }
      c.L == c.u && c.O();
      c.c[c.L++] = d;
      d = d.parent;
    }
    a.Xb();
    b.rg(!0, !1);
  };
  wc.__name__ = "E8";
  wc.clone = function (a, b) {
    if (null != a.Ed && 0 != a.Ed.me) {
      var c = (b.Ed = new wc(b));
      c.me = a.Ed.me;
      for (a = a.node.controllers; null != a; ) {
        if (9 == a.type) {
          var d = new Zc();
          a.Hg(d);
          d.$c = D(c, c.$c);
          d.pd = D(c, c.pd);
          b.node.la(d);
        }
        a = a.next;
      }
    }
  };
  wc.prototype = {
    m: function () {
      this.rA();
      this.Ng = this.o = null;
    },
    y: function (a, b, c, d, e) {
      this.ej(1, a, b, c, d, e);
      return this;
    },
    kl: function (a, b, c, d, e) {
      this.ej(4, a, b, c, d, e);
      return this;
    },
    alpha: function (a, b, c, d, e) {
      this.ej(6, a, b, c, d, e);
      return this;
    },
    rA: function () {
      for (var a = this.o.node.controllers; null != a; ) {
        var b = a.next;
        9 == a.type && a.stop();
        a = b;
      }
      this.me = 0;
    },
    ej: function (a, b, c, d, e, f) {
      switch (a) {
        case 0:
          var g = this.o.Aa;
          break;
        case 1:
          g = this.o.ra;
          break;
        case 2:
          g = this.o.xa;
          break;
        case 3:
          g = this.o.Lb;
          break;
        case 4:
          g = this.o.xa;
          break;
        case 5:
          g = this.o.Dd;
          break;
        case 6:
          g = this.o.Za;
      }
      var h = this.Sw(a, c);
      h.ej(a, g, b, c, null == d ? N.Ux() : d);
      h.repeat = null == e ? za.i0 : e;
      null == this.Ng && (this.Ng = []);
      this.Ng[a] = f;
      this.me |= 1 << a;
      return h;
    },
    Sw: function (a) {
      var b = this.o.node.controllers;
      if (null != b)
        if (0 < (this.me & (1 << a)))
          for (; null != b; ) {
            if (9 == b.type) {
              var c = b;
              if (c.key == a)
                return (c.pd = D(this, this.pd)), (c.$c = D(this, this.$c)), c;
            }
            b = b.next;
          }
        else
          for (; null != b; ) {
            if (9 == b.type && !b.od)
              return (
                (c = b), (c.pd = D(this, this.pd)), (c.$c = D(this, this.$c)), c
              );
            b = b.next;
          }
      c = new Zc();
      c.pd = D(this, this.pd);
      c.$c = D(this, this.$c);
      this.o.node.la(c);
      return c;
    },
    $c: function (a, b) {
      var c = this.o;
      switch (a) {
        case 0:
          c.X(b);
          break;
        case 1:
          c.V(b);
          break;
        case 2:
          c.qe(b);
          break;
        case 3:
          c.Pc(b);
          break;
        case 4:
          c.fa(b);
          break;
        case 5:
          c.dl(b);
          break;
        case 6:
          c.Z(b);
      }
    },
    pd: function (a) {
      this.me &= ~(1 << a);
      if (null != this.Ng[a]) {
        var b = this.Ng[a];
        this.Ng[a] = null;
        b();
      }
    },
    j: wc,
  };
  var Se = {
    LA: function (a) {
      return a;
    },
    rv: function (a, b) {
      var c = window.document.createElement("img");
      c.src = a.toDataURL("image/png");
      c.onload = function () {
        c.onload = null;
        Se.hx(c, b);
      };
    },
    hx: function (a, b) {
      if (null == window.Nv) b(a);
      else
        try {
          window.Nv(a).then(
            function (a) {
              b(a);
            },
            function () {
              b(a);
            }
          );
        } catch (c) {
          b(a);
        }
    },
    Dy: function (a, b, c, d) {
      var e = window.document.createElement("canvas");
      e.width = b;
      e.height = c;
      e.getContext("2d", null).drawImage(a, 0, 0);
      Se.rv(e, d);
    },
    Cc: function (a) {
      a instanceof ImageBitmap
        ? a.close()
        : a instanceof HTMLImageElement &&
          (a.src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
    },
  };
  of.__name__ = "E9";
  of.prototype = {
    Cz: function (a, b) {
      var c = this;
      this.Ib = a;
      var d = a.width | 0;
      a = a.height | 0;
      var e = this.J;
      e.b = d;
      e.a = a;
      this.fk = 0 != d && 0 == (d & (d - 1)) && 0 != a && 0 == (a & (a - 1));
      this.$g = !0;
      !b ||
        this.fk ||
        this.Yg ||
        ((b = d),
        --b,
        (b |= b >> 1),
        (b |= b >> 2),
        (b |= b >> 4),
        (b |= b >> 8),
        (b |= b >> 16),
        ++b,
        (d = b),
        (b = a),
        --b,
        (b |= b >> 1),
        (b |= b >> 2),
        (b |= b >> 4),
        (b |= b >> 8),
        (b |= b >> 16),
        ++b,
        (a = b),
        (b = e = new r()),
        (b.b = d),
        (b.a = a),
        (this.bf = b),
        (this.Yg = !0),
        (this.$g = !1),
        Se.Dy(this.Ib, d, a, function (a) {
          c.Ib = a;
          c.$g = !0;
        }));
    },
    vz: function (a) {
      this.Td = new nf(this, a);
      return this;
    },
    m: function () {
      if (!this.Dx && this.Yg && !this.Ex)
        try {
          Se.Cc(this.Ib);
        } catch (a) {}
      this.Td = this.bf = this.J = this.Ib = null;
    },
    j: of,
  };
  Z.__name__ = "EA";
  Z.get = function (a) {
    return Z.Zi.C[a];
  };
  Z.Rb = function (a, b) {
    a = Z.Zi.C[a];
    if (null == a || (null == a.Td && null != b)) return null;
    if (null != b) {
      b = a.Td.sk.C[b];
      if (null == b) return null;
      var c = b.J;
    } else c = a.J;
    b = c.b;
    a = c.a;
    c = new r();
    c.b = b;
    c.a = a;
    return c;
  };
  Z.Wa = function (a) {
    return Z.Zi.C.hasOwnProperty(a);
  };
  Z.hz = function (a, b) {
    Z.Zi.C[a] = b;
    b.id = a;
    Z.vt++;
  };
  Z.XA = function (a) {
    var b = Z.get(a);
    null != b && (Z.Zi.remove(a), b.m(), Z.vt--);
  };
  nf.__name__ = "EB";
  nf.prototype = { j: nf };
  de.__name__ = "EC";
  de.prototype = { j: de };
  ce.__name__ = "ED";
  ce.prototype = { j: ce };
  be.__name__ = "EE";
  be.prototype = { j: be };
  Sc.__name__ = "EF";
  Sc.__isInterface__ = !0;
  Sc.prototype = { j: Sc };
  ae.__name__ = "F0";
  ae.__interfaces__ = [Sc];
  ae.prototype = {
    tq: function () {
      var a = new ce(),
        b = new kf(this.Vx),
        c = new lf();
      c.Un = b.info.size;
      c.lineHeight = b.He.lineHeight;
      c.De = b.He.De;
      c.NB = b.He.Xn;
      c.MB = b.He.Wn;
      c.padding[0] = b.info.padding.Fo;
      c.padding[1] = b.info.padding.right;
      c.padding[2] = b.info.padding.Dc;
      c.padding[3] = b.info.padding.left;
      a.tf = c;
      for (var d = 0, e = b.Qb; d < e.length; ) {
        var f = e[d];
        ++d;
        var g = f.id,
          h = new mf();
        h.code = g;
        h.x = f.x;
        h.y = f.y;
        h.offsetX = f.Vo;
        h.offsetY = f.Wo;
        h.np = f.To;
        h.ql = f.width;
        h.C = f.height;
        c.Ip.set(h.code, h);
        -1 != g &&
          ((f = new be()),
          a.frames.push(f),
          (f.id = g),
          (f.name = String.fromCodePoint(g)),
          (f.La.b = h.x),
          (f.La.a = h.y),
          (f.La.f = h.ql),
          (f.La.d = h.C),
          (f.J.b = h.ql),
          (f.J.a = h.C));
      }
      d = 0;
      for (e = b.jk; d < e.length; ) {
        g = e[d];
        ++d;
        b = c.ik;
        var k = (g.Zn << 16) | g.first,
          m = g.zl;
        b.g == b.u && b.O();
        g = b.c;
        f = b.Hc;
        h = 3 * b.Kb;
        b.Kb = b.ac[b.Kb];
        g[h] = k;
        g[h + 1] = m;
        m = (73856093 * k) & b.Cd;
        k = f[m];
        if (-1 == k) f[m] = h;
        else {
          for (f = g[k + 2]; -1 != f; ) (k = f), (f = g[f + 2]);
          g[k + 2] = h;
        }
        b.g++;
      }
      return a;
    },
    j: ae,
  };
  mf.__name__ = "F1";
  mf.prototype = { j: mf };
  lf.__name__ = "F2";
  lf.prototype = { j: lf };
  kf.__name__ = "F3";
  kf.prototype = {
    Ey: function (a) {
      a = new lc(a);
      var b = a.S(),
        c = a.S(),
        d = a.S();
      if (66 != b || 77 != c || 70 != d) throw q.G("not a BMF file");
      if (3 != a.S()) throw q.G("invalid version (must be 3)");
      a.S();
      c = a.ad();
      b = a.sb();
      a.S();
      a.S();
      a.Jd();
      a.S();
      d = a.S();
      var e = a.S(),
        f = a.S(),
        g = a.S();
      a.S();
      a.S();
      a.S();
      a.Sk(c - 14);
      this.info = {
        size: 0 > b ? -b : b,
        padding: { Fo: d, right: e, Dc: f, left: g },
      };
      a.S();
      a.ad();
      b = a.Jd();
      c = a.Jd();
      d = a.Jd();
      e = a.Jd();
      a.Jd();
      a.S();
      a.S();
      a.S();
      a.S();
      a.S();
      this.He = { lineHeight: b, De: c, Xn: d, Wn: e };
      a.S();
      c = a.ad();
      d = a.Ga;
      a.Gs(0);
      b = a.Ga;
      b -= d;
      for (c -= b; 0 < c; ) a.Gs(0), (c -= b);
      a.S();
      c = a.ad();
      b = 0;
      for (c = (c / 20) | 0; b < c; ) {
        b++;
        d = a.ad();
        e = a.Jd();
        f = a.Jd();
        g = a.Jd();
        var h = a.Jd(),
          k = a.sb(),
          m = a.sb(),
          l = a.sb();
        a.S();
        a.S();
        this.Qb.push({
          id: d,
          x: e,
          y: f,
          width: g,
          height: h,
          Vo: k,
          Wo: m,
          To: l,
        });
      }
      if (a.Ga != a.yo)
        for (a.S(), a.ad(); a.Ga < a.yo; )
          (b = a.ad()),
            (c = a.ad()),
            (d = a.sb()),
            this.jk.push({ first: b, Zn: c, zl: d });
    },
    Gy: function (a) {
      var b = w.parse(a).mw();
      if (b.nodeType != w.Document && b.nodeType != w.Element)
        throw q.G(
          "Invalid nodeType " +
            (null == b.nodeType ? "null" : U.toString(b.nodeType))
        );
      a = b;
      var c = [];
      for (
        b = Tb(Da.resolve(qc.resolve(a, "info"), "padding").split(","));
        b.Y();

      ) {
        var d = b.next();
        c.push(y.parseInt(d));
      }
      c = ka.Qh(c);
      b = y.parseInt(Da.resolve(qc.resolve(a, "info"), "size"));
      this.info = {
        size: 0 > b ? -b : b,
        padding: { Fo: c[0], right: c[1], Dc: c[2], left: c[3] },
      };
      this.He = {
        lineHeight: y.parseInt(
          Da.resolve(qc.resolve(a, "common"), "lineHeight")
        ),
        De: y.parseInt(Da.resolve(qc.resolve(a, "common"), "base")),
        Xn: y.parseInt(Da.resolve(qc.resolve(a, "common"), "scaleW")),
        Wn: y.parseInt(Da.resolve(qc.resolve(a, "common"), "scaleH")),
      };
      c = 0;
      for (b = mg.resolve(qc.resolve(a, "chars"), "char"); c < b.length; )
        (d = b[c]),
          ++c,
          this.Qb.push({
            id: y.parseInt(Da.resolve(d, "id")),
            x: y.parseInt(Da.resolve(d, "x")),
            y: y.parseInt(Da.resolve(d, "y")),
            width: y.parseInt(Da.resolve(d, "width")),
            height: y.parseInt(Da.resolve(d, "height")),
            Vo: y.parseInt(Da.resolve(d, "xoffset")),
            Wo: y.parseInt(Da.resolve(d, "yoffset")),
            To: y.parseInt(Da.resolve(d, "xadvance")),
          });
      if (qg.resolve(a, "kernings"))
        for (
          c = 0, b = mg.resolve(qc.resolve(a, "kernings"), "kerning");
          c < b.length;

        )
          (d = b[c]),
            ++c,
            this.jk.push({
              first: y.parseInt(Da.resolve(d, "first")),
              Zn: y.parseInt(Da.resolve(d, "second")),
              zl: y.parseInt(Da.resolve(d, "amount")),
            });
    },
    Fy: function (a) {
      a = new Q("\r\n", "g").match(a) ? a.split("\r\n") : a.split("\n");
      var b = 0,
        c = new Q(
          '^info face=".*?" size=(-?\\d+).*?padding="(\\d+,\\d+,\\d+,\\d+)"',
          ""
        );
      c.match(a[b++]);
      for (var d = [], e = Tb(c.ya(2).split(",")); e.Y(); ) {
        var f = e.next();
        d.push(y.parseInt(f));
      }
      d = ka.Qh(d);
      e = y.parseInt(c.ya(1));
      this.info = {
        size: 0 > e ? -e : e,
        padding: { Fo: d[0], right: d[1], Dc: d[2], left: d[3] },
      };
      c = new Q(
        "^common lineHeight=(\\d+) base=(\\d+) scaleW=(\\d+) scaleH=(\\d+)",
        ""
      );
      c.match(a[b++]);
      this.He = {
        lineHeight: y.parseInt(c.ya(1)),
        De: y.parseInt(c.ya(2)),
        Xn: y.parseInt(c.ya(3)),
        Wn: y.parseInt(c.ya(4)),
      };
      c = new Q("chars count=(\\d+)", "");
      e = new Q(
        "^char id=(\\d+)\\s+x=(\\d+)\\s+y=(\\d+)\\s+width=(\\d+)\\s+height=(\\d+)\\s+xoffset=(-?\\d+)\\s+yoffset=(-?\\d+)\\s+xadvance=(\\d+)",
        ""
      );
      d = new Q("kernings count=(\\d+)", "");
      f = new Q("kerning first=(\\d+)\\s+second=(\\d+)\\s+amount=(-?\\d+)", "");
      for (var g = 0, h = 0, k = 0, m = 0; b < a.length; ) {
        var l = a[b++];
        0 == h
          ? c.match(l) && (h = y.parseInt(c.ya(1)))
          : g < h
          ? (e.match(l),
            this.Qb.push({
              id: y.parseInt(e.ya(1)),
              x: y.parseInt(e.ya(2)),
              y: y.parseInt(e.ya(3)),
              width: y.parseInt(e.ya(4)),
              height: y.parseInt(e.ya(5)),
              Vo: y.parseInt(e.ya(6)),
              Wo: y.parseInt(e.ya(7)),
              To: y.parseInt(e.ya(8)),
            }),
            ++g)
          : 0 == m
          ? d.match(l) && (m = y.parseInt(d.ya(1)))
          : k < m &&
            (f.match(l),
            this.jk.push({
              first: y.parseInt(f.ya(1)),
              Zn: y.parseInt(f.ya(2)),
              zl: y.parseInt(f.ya(3)),
            }),
            ++k);
      }
    },
    j: kf,
  };
  uc.__name__ = "F4";
  uc.__interfaces__ = [Sc];
  uc.prototype = {
    tq: function () {
      var a = new ce(),
        b = JSON.parse(this.json),
        c = O.ja(b, "meta");
      null != c && (a.scale = O.ja(c, "scale"));
      c = 0;
      b = O.ja(b, "frames");
      for (var d = 0; d < b.length; ) {
        var e = b[d];
        ++d;
        var f = new be();
        a.frames.push(f);
        f.id = c++;
        f.name = O.ja(e, "filename");
        var g = O.ja(e, "frame");
        f.La.b = O.ja(g, "x");
        f.La.a = O.ja(g, "y");
        f.La.f = O.ja(g, "w");
        f.La.d = O.ja(g, "h");
        Object.prototype.hasOwnProperty.call(e, "trimmed")
          ? (f.Bo = O.ja(e, "trimmed"))
          : (f.Bo = !1);
        Object.prototype.hasOwnProperty.call(e, "sourceSize")
          ? ((g = O.ja(e, "sourceSize")),
            (f.J.b = O.ja(g, "w")),
            (f.J.a = O.ja(g, "h")))
          : ((f.J.b = f.La.f), (f.J.a = f.La.d));
        Object.prototype.hasOwnProperty.call(e, "spriteSourceSize")
          ? ((g = O.ja(e, "spriteSourceSize")),
            (f.rf.b = O.ja(g, "x")),
            (f.rf.a = O.ja(g, "y")))
          : ((f.rf.b = 0), (f.rf.a = 0));
      }
      return a;
    },
    j: uc,
  };
  cg.__name__ = "F5";
  cg.WA = function (a) {
    function b() {
      var a = c.S(),
        b = {},
        d = {};
      b.frame = d;
      d.x = 0 < (a & 1) ? c.S() : c.sb();
      d.y = 0 < (a & 2) ? c.S() : c.sb();
      d.w = 0 < (a & 4) ? c.S() : c.sb();
      d.h = 0 < (a & 8) ? c.S() : c.sb();
      d = {};
      b.sourceSize = d;
      d.w = 0 < (a & 16) ? c.S() : c.sb();
      d.h = 0 < (a & 32) ? c.S() : c.sb();
      d = {};
      b.spriteSourceSize = d;
      d.x = 0 < (a & 64) ? c.S() : c.sb();
      d.y = 0 < (a & 128) ? c.S() : c.sb();
      b.trimmed = 1 == c.S();
      return b;
    }
    var c = new lc(a);
    a = c.S();
    var d = c.S(),
      e = c.S();
    if (
      "TPJ" !=
      String.fromCodePoint(a) +
        String.fromCodePoint(d) +
        String.fromCodePoint(e)
    )
      throw q.G("invalid tp json array file");
    a = [];
    e = {};
    d = {};
    e.size = d;
    d.w = c.sb();
    d.h = c.sb();
    e.scale = c.Zy();
    d = {};
    d.frames = a;
    d.meta = e;
    var f = c.sb();
    for (e = 0; e < f; ) {
      e++;
      var g = c.Sk(c.sb()),
        h = b();
      h.filename = g;
      a.push(h);
    }
    f = c.sb();
    for (e = 0; e < f; ) {
      e++;
      h = c.sb();
      g = c.Sk(c.sb());
      for (var k, m = 0, l = h; m < l; ) {
        var u = m++;
        h = b();
        k = "" + u;
        1e3 > u && (k = "0" + k);
        100 > u && (k = "0" + k);
        10 > u && (k = "0" + k);
        h.filename = g + "/" + k;
        a.push(h);
      }
    }
    return JSON.stringify(d);
  };
  jf.__name__ = "F6";
  jf.prototype = {
    get: function (a) {
      return this.data[a];
    },
    set: function (a, b) {
      this.data[a] = b;
      return this;
    },
    j: jf,
  };
  hf.__name__ = "F7";
  hf.prototype = {
    save: function () {
      if (null != this.qh) return this.qh;
      var a = new gf(!0).write(this.entries);
      if (void 0 !== window.pako)
        try {
          var b = new window.pako.Deflate({ level: 9 });
          b.push(a.a.jv, !0);
          a = oa.Ek(O.ja(b, "result"));
        } catch (c) {}
      this.qh = Db.encode(a, !0);
      this.qh = "rec:" + this.qh;
      new hb();
      return this.qh;
    },
    j: hf,
  };
  gf.__name__ = "F8";
  gf.prototype = {
    write: function (a) {
      return this.Av ? this.jB(a) : this.lB(a);
    },
    lB: function (a) {
      for (var b = new Jb(), c = 0; c < a.length; ) {
        var d = a[c];
        ++c;
        var e = d.type;
        b.Ha(e);
        switch (e) {
          case 0:
            b.Qt(d.get(0));
            this.vf(d.get(1), b);
            this.vf(d.get(2), b);
            break;
          case 1:
            b.vg(d.get(3));
            break;
          case 2:
            b.Ha(d.get(4));
            this.vf(d.get(5), b);
            break;
          case 3:
            b.Ro(d.get(6));
            e = 0;
            d.get(7) && (e |= 1);
            d.get(8) && (e |= 2);
            d.get(9) && (e |= 4);
            d.get(10) && (e |= 8);
            b.Ha(e);
            break;
          case 4:
            b.Ro(d.get(11));
            b.Ro(d.get(12));
            b.Ha(d.get(13));
            b.Ha(d.get(14));
            break;
          case 5:
            b.vg(d.get(11)), b.vg(d.get(12));
        }
      }
      return b.Vc();
    },
    jB: function (a) {
      for (var b = Array(a.length), c = [], d = 0; 6 > d; ) {
        var e = d++;
        c.push([]);
      }
      var f = c;
      c = 0;
      for (d = a.length; c < d; ) {
        e = c++;
        var g = a[e];
        b[e] = g.type;
        f[g.type].push(g);
      }
      e = new $c();
      for (c = 0; c < b.length; ) (d = b[c]), ++c, (g = d), e.fb(g, 3);
      a = new Jb();
      a.Ih(b.length);
      b = e.Vc();
      a.Ih(b.length);
      a.ug(b, 0, b.length);
      a = a.Vc();
      g = a.length;
      this.buffer.Ih(g);
      this.buffer.ug(a, 0, g);
      for (c = 0; 6 > c; ) {
        d = c++;
        a = new Jb();
        b = [f[d]];
        e = [
          (function (a) {
            return function (b) {
              for (var c = [], d = 0; d < a[0].length; ) {
                var e = a[0][d];
                ++d;
                c.push(e.get(b));
              }
              return c;
            };
          })(b),
        ];
        g = b[0].length;
        switch (d) {
          case 0:
            g = b[0][0];
            a.Qt(g.get(0));
            this.vf(g.get(1), a);
            this.vf(g.get(2), a);
            break;
          case 1:
            b = e[0](3);
            Cf.encode(b);
            e = new $c();
            for (d = 0; d < b.length; )
              (g = b[d]),
                ++d,
                e.fb(0 > g ? 1 : 0, 1),
                0 > g && (g = -g),
                32 > g ? (e.fb(1, 1), e.fb(g, 5)) : (e.fb(0, 1), e.fb(g, 16));
            b = e.Vc();
            a.Ih(b.length);
            a.ug(b, 0, b.length);
            break;
          case 2:
            for (d = 0; d < b[0].length; )
              (e = b[0][d]), ++d, a.Ha(e.get(4)), this.vf(e.get(5), a);
            break;
          case 3:
            for (d = 0; d < b[0].length; )
              (e = b[0][d]),
                ++d,
                a.Ha(e.get(6) & 255),
                (g = 0),
                e.get(7) && (g |= 1),
                e.get(8) && (g |= 2),
                e.get(9) && (g |= 4),
                e.get(10) && (g |= 8),
                a.Ha(g);
            break;
          case 4:
            d = [new $c()];
            g = (function (a, b) {
              return function (c) {
                c = b[0](c);
                Cf.encode(c);
                for (var d = 0, e = 0, f = 0, g = 0, h = 0; h < c.length; ) {
                  var k = c[h];
                  ++h;
                  a[0].fb(0 > k ? 1 : 0, 1);
                  0 > k && (k = -k);
                  4 > k
                    ? (a[0].fb(0, 2), a[0].fb(k, 2), ++d)
                    : 16 > k
                    ? (a[0].fb(1, 2), a[0].fb(k, 4), ++e)
                    : 32 > k
                    ? (a[0].fb(2, 2), a[0].fb(k, 5), ++f)
                    : (a[0].fb(3, 2), a[0].fb(k & 65535, 16), ++g);
                }
              };
            })(d, e);
            g(11);
            g(12);
            for (g = 0; g < b[0].length; ) {
              var h = b[0][g];
              ++g;
              d[0].fb(h.get(13), 2);
            }
            b = this.pz(e[0](14));
            h = b.length >> 1;
            d[0].fb(h, 16);
            for (g = e = 0; g < h; ) {
              g++;
              var k = b[e++],
                m = b[e++],
                l = 32 - pe.jy(k);
              l = 1 > l ? 1 : l;
              d[0].fb(l, 5);
              d[0].fb(k, l);
              4 > m
                ? (d[0].fb(0, 1), d[0].fb(m, 2))
                : (d[0].fb(1, 1), d[0].fb(m, 8));
            }
            b = d[0].Vc();
            a.Ih(b.length);
            a.ug(b, 0, b.length);
            break;
          case 5:
            for (d = 0; d < b[0].length; )
              (e = b[0][d]), ++d, a.vg(e.get(11)), a.vg(e.get(12));
        }
        a = a.Vc();
        b = a.length;
        this.buffer.Ih(b);
        this.buffer.ug(a, 0, b);
      }
      return this.buffer.Vc();
    },
    vf: function (a, b) {
      b.vg(le.hB(a));
      b.vf(a, pc.i0);
    },
    pz: function (a) {
      var b = a.length;
      if (0 == b) return [];
      for (var c = [], d = a[0], e = 0, f = 0; f < b; ) {
        var g = a[f++];
        g != d ? (c.push(e), c.push(d), (e = 1), (d = g)) : ++e;
      }
      c.push(e);
      c.push(d);
      return c;
    },
    j: gf,
  };
  Ib.__name__ = "F9";
  Ib.prototype = {
    get: function (a) {
      return fa.get(this.Wd, a);
    },
    Wa: function (a) {
      return fa.Tu(this.Wd, a);
    },
    j: Ib,
  };
  ff.__name__ = "FA";
  ff.prototype = { j: ff };
  M.__name__ = "FB";
  M.Pe = function () {
    null == M.root &&
      ((M.root = new X("scene")), new X("bg", M.root), new X("fg", M.root));
    return M.root;
  };
  M.Ow = function (a) {
    var b = Object.create(a.prototype);
    b.Wc = new Ib(null, null);
    a = [];
    var c = 0;
    for (b = b.md(); c < b.length; ) {
      var d = b[c];
      ++c;
      l.ro(d) && a.push(d);
    }
    return a;
  };
  M.A = bc;
  M.prototype = t(bc.prototype, {
    H: function () {
      bc.prototype.H.call(this);
      0 != this.state &&
        (this.pb(7),
        null != this.canvas &&
          (ha.dm(this.canvas, !0),
          (this.canvas = this.content = this.Rh = this.Rj = null)),
        (this.Wc = null));
      this.remove();
    },
    rd: function (a, b, c) {
      this.pA(a, c, b) || Sa.Ca().rd(this, a, b, c);
    },
    finish: function (a) {
      Sa.Ca().finish(this, a);
    },
    Ub: function () {
      this.pb(1);
      this.canvas = new X(this.name);
      this.Rh = new X("bg", this.canvas);
      this.Rh.M(!1);
      this.content = new X("content", this.canvas);
      this.content.M(!1);
      this.Rj = new X("fg", this.canvas);
      this.Rj.M(!1);
    },
    $e: function () {
      this.pb(2);
      this.show();
      this.Oo = 0;
    },
    yn: function () {
      this.pb(4);
      this.show();
    },
    mb: function () {
      this.pb(3);
      this.Ni = !1;
      if (this.Wc.Wa("loaderInfo")) {
        this.Ni = !0;
        var a = this.Wc.get("loaderInfo");
        a.loaded && this.rd(a.nA, a.mA, a.oA);
      }
    },
    Zc: function () {
      this.pb(5);
    },
    ie: function () {
      this.pb(6);
      this.Gc();
    },
    pb: function (a) {
      this.state = a;
    },
    show: function () {
      null == this.canvas.Hb() &&
        (this.parent == Sa.Ca()
          ? B.Ta(M.Pe().Ad("fg"), X).appendChild(this.canvas)
          : B.Ta(this.parent, M).canvas.appendChild(this.canvas));
      this.content.M(this.Rh.M(this.Rj.M(!0)));
    },
    Gc: function () {
      var a = this.Dw();
      null != a && a.Xg()
        ? this.content.M(this.Rh.M(this.Rj.M(!1)))
        : this.canvas.remove();
    },
    md: function () {
      return [];
    },
    di: function () {
      if (null != M.Te) return M.Te;
      M.Te = new jc(
        4,
        function (a) {
          var b = l.Ne(a.url);
          0 > b || l.setData(b, a.data, a.We);
        },
        "v=1.0.10"
      );
      M.Te.tag = "scene";
      return M.Te;
    },
    pA: function (a, b, c) {
      var d = Object.create(a.prototype);
      d.Wc = new Ib(this, b);
      var e = d.Hw();
      d.Wc = null;
      return 0 < e.length
        ? (this.rd(d.zq(), !0, fa.Fb(["loaderInfo", new ff(a, b, c, e)])), !0)
        : !1;
    },
    Hw: function () {
      for (var a = [], b = 0, c = this.md(); b < c.length; ) {
        var d = c[b];
        ++b;
        (l.Sm(d) && null == l.Mf()) || l.zm(d) || a.push(d);
      }
      return a;
    },
    Xg: function () {
      return !0;
    },
    IB: function () {
      return !1;
    },
    HB: function () {
      return !1;
    },
    zq: function () {
      return Ya;
    },
    Dw: function () {
      for (var a = [this], b = null; 0 < a.length; )
        for (var c = a.pop().firstChild; null != c; ) {
          if (c instanceof M) {
            b = c;
            a.push(b);
            break;
          }
          c = c.K;
        }
      return b;
    },
    j: M,
  });
  Ya.__name__ = "FC";
  Ya.A = M;
  Ya.prototype = t(M.prototype, {
    md: function () {
      return [];
    },
    mb: function () {
      var a = this;
      M.prototype.mb.call(this);
      this.loaded = !1;
      this.$m = fa.get(this.Wc.Wd, "loaderInfo");
      this.Dk = 0;
      for (var b = this.di(), c = 0, d = this.$m.Sc; c < d.length; ) {
        var e = d[c];
        ++c;
        if (!l.Sm(e) || null != l.Mf()) {
          var f = l.Of(e);
          if (b.Vm(f) || b.load(f))
            b.Cs(f),
              this.Dk++,
              l.ui(e, function () {
                a.Dk--;
                a.wi();
              });
        }
      }
    },
    update: function (a) {
      M.prototype.update.call(this, a);
      !this.loaded &&
        (this.loaded = this.ki()) &&
        ((this.$m.loaded = !0), this.finish(fa.set({}, "loaderInfo", this.$m)));
    },
    ki: function () {
      return 0 == this.Dk;
    },
    wi: function () {},
    j: Ya,
  });
  Sa.__name__ = "FD";
  Sa.__interfaces__ = [eg];
  Sa.Ca = function () {
    null == Sa.Lh && new Sa();
    return Sa.Lh;
  };
  Sa.A = v;
  Sa.prototype = t(v.prototype, {
    qA: function (a, b) {
      $d.tm(a);
      this.rd(null, a, !1, b);
    },
    H: function () {
      for (var a = 0, b = this.vs(this.firstChild); a < b.length; ) {
        var c = b[a];
        ++a;
        switch (c.state) {
          case 3:
            c.Zc();
            c.ie();
            break;
          case 5:
            c.ie();
        }
      }
      v.prototype.H.call(this);
      this.$b = this.root = null;
      this.Ps.m();
    },
    vs: function (a, b) {
      null == b && (b = []);
      for (var c = a.firstChild; null != c; )
        c instanceof M && this.vs(c, b), (c = c.K);
      b.push(a);
      return b;
    },
    rd: function (a, b, c, d) {
      var e = !1,
        f = ka.filter(this.Ps, function (a) {
          return B.ld(a) == b;
        })[0];
      null == f && ((f = Qe.Ov(b)), (e = !0));
      f.Wc = new Ib(a, d);
      if (!e && null != f.parent && f.parent instanceof M)
        (e = f.Ec()), (this.$b = f), this.pop(e, f);
      else if (c) {
        var g = this.$b;
        g.Zc();
        g.N(f);
        e && f.Ub();
        this.$b = f;
        var h = D(this, this.push);
        c = f;
        f.uy = function () {
          h(g, c);
        };
        f.uy();
      } else if (null != this.$b) {
        for (a = this.$b; a != this; )
          (d = B.Ta(a, M)), 3 == d.state && d.Zc(), (a = a.parent);
        a = this.$b;
        this.$b = f;
        this.N(f);
        e && f.Ub();
        this.Kl(a, f);
      } else
        (this.$b = this.root = f), this.N(f), e && f.Ub(), this.push(null, f);
    },
    push: function (a, b) {
      b.$e();
      this.Ul().push(a, b);
    },
    pop: function (a, b) {
      this.Ul().pop(a, b);
    },
    Kl: function (a, b) {
      this.Ul().Kl(a, b);
    },
    Ay: function (a, b, c) {
      switch (c) {
        case 0:
          if (b.Xg() && null != a)
            for (; a != this; )
              (c = a.parent), (a = B.Ta(a, M)), 5 == a.state && a.ie(), (a = c);
          b.mb();
          break;
        case 1:
          c = 0;
          for (a = this.zw(a); c < a.length; ) {
            var d = a[c];
            ++c;
            d.ie();
            d.remove();
            d.H();
          }
          switch (b.state) {
            case 2:
            case 4:
            case 5:
              b.mb();
              break;
            case 6:
              b.yn(), b.mb();
          }
          break;
        case 2:
          for (; a != this; )
            (c = a.parent),
              (a = B.Ta(a, M)),
              5 == a.state && a.ie(),
              a.remove(),
              a.H(),
              (a = c);
          b.mb();
      }
    },
    finish: function (a, b) {
      if (1 == a.state) a.H();
      else if ((3 == a.state && a.Zc(), null != a.parent && a.parent != this)) {
        this.$b = a.parent;
        this.$b.Wc = new Ib(a, b);
        if (6 == this.$b.state && (this.$b.yn(), !this.$b.Xg())) {
          var c = this.$b.parent;
          for (B.ld(c); ; ) {
            c.Wc = new Ib(a, b);
            c.yn();
            c.mb();
            c.Zc();
            if (c.Xg()) break;
            c = c.parent;
            if (c.parent == this) break;
          }
        }
        this.pop(a, this.$b);
      } else (this.root = this.$b = null), a.Zc(), this.pop(a, null);
    },
    Ul: function () {
      return new wa(this);
    },
    zw: function (a) {
      for (var b = [], c = a; null != c; ) {
        b.push(c);
        a = null;
        for (c = c.firstChild; null != c; ) {
          if (c instanceof M) {
            a = c;
            break;
          }
          c = c.K;
        }
        if (null == a) break;
        c = a;
      }
      b.reverse();
      return b;
    },
    j: Sa,
  });
  Qc.__name__ = "FE";
  Qc.__isInterface__ = !0;
  Qc.prototype = { j: Qc };
  Zd.__name__ = "FF";
  Zd.__interfaces__ = [Qc];
  Zd.prototype = {
    Me: function () {
      return 0;
    },
    rn: function () {},
    hs: function () {},
    Yr: function () {},
    j: Zd,
  };
  wa.__name__ = "100";
  wa.mg = function (a, b, c) {
    wa.Sn.C[
      "" + (null == a ? "*" : a.__name__) + "-" + (null == b ? "*" : b.__name__)
    ] = c;
  };
  wa.gz = function (a) {
    wa.mg(a, null, null);
    wa.mg(null, a, null);
  };
  wa.prototype = {
    push: function (a, b) {
      this.Cl(a, b, 0);
    },
    pop: function (a, b) {
      this.Cl(a, b, 1);
    },
    Kl: function (a, b) {
      b.$e();
      this.Cl(a, b, 2);
    },
    Bz: function (a, b) {
      function c(a, b) {
        a =
          (null == a ? "null" : "*" == a ? "*" : B.ld(a).__name__) +
          "-" +
          (null == b ? "null" : "*" == b ? "*" : B.ld(b).__name__);
        return Object.prototype.hasOwnProperty.call(wa.Sn.C, a)
          ? ((d.za = wa.Sn.C[a]), !0)
          : !1;
      }
      var d = this;
      this.za = null;
      c(a, b) || c("*", b) || c(a, "*") || c("*", "*");
      null == this.za && (this.za = new Zd());
    },
    Cl: function (a, b, c) {
      this.b = a;
      this.a = b;
      this.type = c;
      E.Gh.la(D(this, this.update));
      E.sh.la(D(this, this.pa));
      this.Bz(a, b);
      this.elapsedTime = 0;
      this.duration = this.za.Me(a, b, c);
      0 < b.Oo
        ? (b.canvas.M(!1), (this.state = 1))
        : (this.za.rn(a, b, c), (this.state = 2));
    },
    end: function (a, b, c) {
      this.Xx.Ay(a, b, c);
      this.state = 0;
      E.Gh.detach(D(this, this.update));
      E.sh.detach(D(this, this.pa));
    },
    update: function (a) {
      switch (this.state) {
        case 1:
          if (0 < this.a.Oo) break;
          this.a.canvas.M(!0);
          this.za.rn(this.b, this.a, this.type);
          this.state = 2;
          break;
        case 3:
          this.elapsedTime += a;
          a = Math.min(this.elapsedTime / this.duration, 1);
          this.za.hs(this.b, this.a, this.type, a);
          1 == a && (this.za.Yr(this.b, this.a, this.type), (this.state = 4));
          break;
        case 5:
          a = this.b;
          var b = this.a;
          this.a = this.b = null;
          this.state = 0;
          this.end(a, b, this.type);
      }
    },
    pa: function () {
      switch (this.state) {
        case 2:
          this.state = 3;
          break;
        case 4:
          this.state = 5;
      }
    },
    j: wa,
  };
  A.__name__ = "101";
  A.A = V;
  A.prototype = t(V.prototype, {
    R: function (a) {
      V.prototype.R.call(this, a);
      this.ma = a;
    },
    H: function () {
      var a = B.ld(this).__name__;
      A.Ff[A.fj.C[a]]--;
      A.count--;
      this.ma.H();
      this.ma = null;
    },
    remove: function () {
      var a = B.ld(this).__name__;
      A.Ff[A.fj.C[a]]--;
      A.count--;
      this.ma.rc(null, this);
      this.ma = null;
    },
    j: A,
  });
  zb.__name__ = "102";
  zb.A = A;
  zb.prototype = t(A.prototype, {
    xb: function () {
      return 5;
    },
    R: function (a) {
      A.prototype.R.call(this, a);
      var b = a.Le(cb),
        c = b.Ud,
        d = c.b,
        e = c.a;
      c = new r();
      c.b = d;
      c.a = e;
      this.offset = c;
      this.scale = b.scale;
      this.align = a.client.v().rb.vj;
    },
    update: function (a) {
      var b = this.time / 0.2;
      b = this.Uc(b);
      1 > b || (b = 1);
      var c = 0,
        d = 0,
        e = 0.3;
      switch (a.F.uw(a)) {
        case 0:
          0 == this.align ? (d = -this.offset.a) : (c = -this.offset.b);
          e = 1;
          break;
        case 1:
          e = 0.5;
          c = -1.25;
          break;
        default:
          c = -1.25;
      }
      a = a.Le(cb);
      a.Ud.b = Qa.map(b, 0, 1, this.offset.b, this.offset.b + c);
      a.Ud.a = Qa.map(b, 0, 1, this.offset.a, this.offset.a + d);
      a.scale = Qa.map(b, 0, 1, this.scale, e);
      1 == b && (this.remove(), zb.count--);
    },
    j: zb,
  });
  Yd.__name__ = "103";
  Yd.A = A;
  Yd.prototype = t(A.prototype, {
    xb: function () {
      return 5;
    },
    R: function (a) {
      A.prototype.R.call(this, a);
      var b = a.Le(cb);
      b.scale = this.scale;
      b.update(a);
    },
    update: function (a) {
      this.interval += a.jb;
      var b = this.interval / 0.2;
      b = this.Uc(1 < b ? 1 : b);
      a.Le(cb).scale = Qa.map(b, 0, 1, 0, this.pf);
      1 == b && this.remove();
    },
    j: Yd,
  });
  ef.__name__ = "104";
  ef.A = A;
  ef.prototype = t(A.prototype, {
    xb: function () {
      return 2;
    },
    R: function (a) {
      A.prototype.R.call(this, a);
      a.scale = 0;
    },
    update: function (a) {
      this.lb -= a.jb;
      if (!(0 < this.lb)) {
        this.interval += a.jb;
        var b = this.interval / 0.2;
        b = 1 < b ? 1 : b;
        a.scale = Qa.map(this.Uc(b), 0, 1, 0, 1);
        1 == b && this.remove();
      }
    },
    j: ef,
  });
  df.__name__ = "105";
  df.A = A;
  df.prototype = t(A.prototype, {
    xb: function () {
      return 2;
    },
    R: function (a) {
      A.prototype.R.call(this, a);
      this.Bn = new Ud(this.Jr);
      a.client.N(this.Bn);
    },
    update: function (a) {
      this.lb -= a.jb;
      if (!(0 < this.lb)) {
        var b = a.client,
          c = (this.interval += a.jb);
        c = 1 < c ? 1 : c;
        this.Bn.o.Z(c);
        b.scale = 0.5 + 0.5 * N.Zh()(c);
        1 == c && (a.Fp(this.Jr), this.Bn.H(), this.remove());
      }
    },
    j: df,
  });
  ac.__name__ = "106";
  ac.A = A;
  ac.prototype = t(A.prototype, {
    R: function (a) {
      A.prototype.R.call(this, a);
      ac.count++;
      this.eb = a.client;
      a.rc(pb);
      this.alpha = this.eb.alpha;
      this.scale = this.eb.scale;
    },
    update: function (a) {
      var b = a.client;
      switch (this.state) {
        case 0:
          if (this.time < b.ub) break;
          b.P().xg(b.P().ai(b.vd));
          b.Cb(54);
          b.v().ka(24, fa.Fb(["bubble", a]));
          this.state = 1;
          this.time = 0;
          break;
        case 1:
        case 2:
          if (0.2 < this.time && 1 == this.state) {
            var c = b.vd;
            b.ma.D.Cg && (c = -1);
            b.v().ka(5, fa.Fb(["bubble", a, "burstIndex", c]));
            this.state = 2;
          }
          c = this.time / 0.25;
          1 < c && (c = 1);
          b.scale = this.scale * (1 - c);
          b.alpha = this.alpha * (1 - c);
          if (1 == c && 2 == this.state) {
            ac.count--;
            if (100 == a.code) {
              b = b.P().level.data.nm();
              var d = [];
              for (c = 0; c < b.length; ) {
                var e = b[c];
                ++c;
                1 <= e && 7 > e && d.push(e);
              }
              b = d;
              for (c = 0; 6 > c; ) {
                e = c++;
                var f = Ga.Xd(5, 8);
                d = Math.sin(1.0471975511965976 * e) * f;
                f *= Math.cos(1.0471975511965976 * e);
                e = a.F.Fj(b[e % b.length]);
                e.scale = Ga.Xd(0.25, 0.5);
                var g = e.B,
                  h = a.B;
                g.b = h.b;
                g.a = h.a;
                e.Ba.b = d;
                e.Ba.a = f;
                e.$a(new Hb());
              }
            } else
              0.25 > Math.random() &&
                200 != a.code &&
                ((e = a.F.Fj(300)),
                (e.Tc = 0),
                (e.scale = Ga.Xd(0.15, 0.5)),
                (g = e.B),
                (h = a.B),
                (g.b = h.b),
                (g.a = h.a),
                (e.Ba.b = 0),
                (e.Ba.a = -10 * (1 + (0.4 - e.scale))),
                e.$a(new Qb()),
                e.$a(new Pc()),
                (e.Tg = -2),
                (e.D.Uh = !1));
            this.H();
          }
      }
    },
    xb: function () {
      return 5;
    },
    j: ac,
  });
  Xd.__name__ = "107";
  Xd.A = A;
  Xd.prototype = t(A.prototype, {
    R: function (a) {
      A.prototype.R.call(this, a);
      this.eb = a.client;
      a.rc(pb);
      this.eb.Cb(54);
      this.eb.v().ka(24, fa.Fb(["bubble", a]));
      this.eb.v().ka(5, fa.Fb(["bubble", a, "burstIndex", -1]));
    },
    update: function () {
      this.H();
    },
    xb: function () {
      return 5;
    },
    j: Xd,
  });
  Wd.__name__ = "108";
  Wd.A = A;
  Wd.prototype = t(A.prototype, {
    R: function (a) {
      A.prototype.R.call(this, a);
      this.eb = a.client;
      a.rc(pb);
      this.alpha = this.eb.alpha;
      this.scale = this.eb.scale;
    },
    update: function (a) {
      var b = a.client;
      switch (this.state) {
        case 0:
          b.P().xg(b.P().ai(b.vd));
          b.Cb(54);
          b.v().ka(24, fa.Fb(["bubble", a]));
          this.state = 1;
          this.time = 0;
          break;
        case 1:
          var c = this.time / 0.2;
          b.scale = 1 + 0.3 * N.Hi(2)(c);
          if (!(1 > c)) {
            b.v().ka(5, fa.Fb(["bubble", a]));
            b = b.P().level.data.nm();
            var d = [];
            for (c = 0; c < b.length; ) {
              var e = b[c];
              ++c;
              1 <= e && 7 > e && d.push(e);
            }
            b = d;
            for (c = 0; 6 > c; ) {
              e = c++;
              var f = Ga.Xd(5, 8);
              d = Math.sin(1.0471975511965976 * e) * f;
              f *= Math.cos(1.0471975511965976 * e);
              e = a.F.Fj(b[e % b.length]);
              e.scale = Ga.Xd(0.25, 0.5);
              var g = e.B,
                h = a.B;
              g.b = h.b;
              g.a = h.a;
              e.Ba.b = d;
              e.Ba.a = f;
              e.$a(new Hb());
            }
            this.H();
          }
      }
    },
    xb: function () {
      return 5;
    },
    j: Wd,
  });
  Vd.__name__ = "109";
  Vd.A = A;
  Vd.prototype = t(A.prototype, {
    R: function (a) {
      A.prototype.R.call(this, a);
      this.object = a.client;
      a.rc(pb);
      a.D.jd && (this.object.ub = 0);
      this.object.v().ka(29);
      a.rc(Pb);
      a.$a(new Qb());
      this.state = 1;
      this.object.ub = 0;
      a.Ba.b = this.object.s().cols / 2 - a.Va;
    },
    update: function (a) {
      switch (this.state) {
        case 1:
          this.object.alpha = 1;
          this.object.scale = 1;
          var b = a.Ba,
            c = new r(),
            d = c;
          d.b = b.b * a.jb;
          d.a = b.a * a.jb;
          b = a.client;
          var e = a.B.b,
            f = a.B.a,
            g = a.aa;
          c = new Ia();
          c.b = e;
          c.a = f;
          c.f = g;
          e = a.F.Mb;
          c = e.Cj(c, d, Infinity);
          if (0 >= c || 1 < c) break;
          2 == e.wd && ((this.xp = !0), b.v().ka(30));
          a.B.b += c * d.b;
          a.B.a += c * d.a;
          a.jb = 0;
          d = e.Fg;
          e = d.b;
          f = d.a;
          c = new r();
          c.b = e;
          c.a = f;
          b.Nl(c, 0.7);
          a.$n(d);
          this.xp && this.state++;
          break;
        case 2:
          0 <= a.Ba.a && (this.state = 3);
          break;
        case 3:
          if (((this.object.ub -= a.jb), !(0 < this.object.ub))) {
            this.object.Cb(55);
            this.object.v().ka(25);
            this.state = 4;
            for (d = this.time = 0; 5 > d; )
              d++,
                (b = a.F.Fj(300)),
                (b.Tc = 0),
                (b.scale = Ga.Xd(0.15, 0.5)),
                (c = b.B),
                (e = a.B),
                (c.b = e.b),
                (c.a = e.a),
                (b.Ba.b = 0),
                (b.Ba.a = -10 * (1 + (0.4 - b.scale))),
                b.$a(new Qb()),
                b.$a(new Pc()),
                (b.Tg = -2),
                (b.D.Uh = !1);
            this.H();
          }
      }
    },
    xb: function () {
      return 3;
    },
    j: Vd,
  });
  tc.__name__ = "10A";
  tc.A = A;
  tc.prototype = t(A.prototype, {
    R: function (a) {
      A.prototype.R.call(this, a);
      tc.count++;
    },
    update: function (a) {
      a = a.client;
      switch (this.state) {
        case 0:
          if (this.time < this.lb) break;
          a.visible = !0;
          a.alpha = 1;
          this.state++;
          break;
        case 1:
          (a.alpha -= 0.05), 0 > a.alpha && (tc.count--, this.H());
      }
    },
    xb: function () {
      return 5;
    },
    j: tc,
  });
  qb.__name__ = "10B";
  qb.A = A;
  qb.prototype = t(A.prototype, {
    R: function (a) {
      A.prototype.R.call(this, a);
      this.object = a.client;
      a.rc(pb);
      qb.count++;
      qb.vc.push(this);
    },
    H: function () {
      A.prototype.H.call(this);
      qb.count--;
      C.remove(qb.vc, this);
    },
    update: function (a) {
      switch (this.state) {
        case 0:
          if (this.time < this.object.ub) break;
          a.rc(Pb);
          a.$a(new Qb());
          a.Ba.b = Ga.nq(3);
          this.object.v().ka(29);
          this.object.P().xg(this.object.P().ai(this.object.vd));
          this.state = 1;
          this.time = 0;
          break;
        case 1:
          var b = this.time / 0.5;
          a.scale = Qa.map(this.Yv(1 < b ? 1 : b), 0, 1, 1, 0.5);
          var c = a.Ba;
          b = this.hn;
          b.b = c.b * a.jb;
          b.a = c.a * a.jb;
          c = a.F.Mb;
          var d = a.B.b,
            e = a.B.a,
            f = a.aa,
            g = new Ia();
          g.b = d;
          g.a = e;
          g.f = f;
          f = g;
          d = c.Cj(f, b, Infinity);
          if (this.object.s().viewport.wc(f.a + f.f) > this.object.v().ye.a) {
            this.H();
            break;
          }
          if (0 >= d || 1 < d) break;
          f = c.Fg;
          c = c.wd;
          if (0 == c) break;
          2 == c && ((this.state = 2), (this.time = 0), this.object.v().ka(30));
          a.B.b += d * b.b;
          a.B.a += d * b.a;
          a.jb = 0;
          b = this.object;
          d = f.b;
          e = f.a;
          g = new r();
          g.b = d;
          g.a = e;
          b.Nl(g, 0.7);
          a.$n(f);
          break;
        case 2:
          (b = this.time),
            (b = this.Zv(1 < b ? 1 : b)),
            (this.object.alpha = 1 - b),
            (this.object.scale = 0.001 + this.object.alpha),
            0.01 > this.object.alpha && this.H();
      }
    },
    xb: function () {
      return 3;
    },
    j: qb,
  });
  Ud.__name__ = "10C";
  Ud.A = v;
  Ud.prototype = t(v.prototype, {
    W: function () {
      v.prototype.W.call(this);
      this.parent.v().Zb(3).appendChild(this.o);
      this.o.Db();
      this.o.Pa();
      this.o.Z(0);
    },
    H: function () {
      v.prototype.H.call(this);
      this.o.m();
      this.o = null;
    },
    update: function (a) {
      v.prototype.update.call(this, a);
      this.o.update(a);
    },
    pa: function (a) {
      v.prototype.pa.call(this, a);
      var b = this.parent;
      this.o.X(b.sc.b * a + b.vh.b * (1 - a));
      this.o.V(b.sc.a * a + b.vh.a * (1 - a));
      this.o.fa(((2 * b.wh) / this.o.J.b) * 0.95 * b.scale * b.ma.scale);
    },
    j: Ud,
  });
  Hb.__name__ = "10D";
  Hb.A = A;
  Hb.prototype = t(A.prototype, {
    R: function (a) {
      A.prototype.R.call(this, a);
      a.$a(new Qb());
      Hb.count++;
    },
    update: function (a) {
      var b = a.B,
        c = a.Ba,
        d = this.hn;
      d.b = c.b * a.jb;
      d.a = c.a * a.jb;
      var e = a.F.Mb;
      c = a.client;
      if (b.a - 2 * a.aa > -va.Sg(e.qc.c[2])) Hb.count--, this.H();
      else if (1 != this.Fl) {
        var f = a.B.b,
          g = a.B.a;
        b = a.aa;
        var h = new Ia();
        h.b = f;
        h.a = g;
        h.f = b;
        f = e.Cj(h, d, Infinity);
        if (!(0 >= f || 1 < f) && ((b = e.Fg), (e = e.wd), 0 != e)) {
          if (2 == e && (this.Fl++, 1 < this.Fl)) return;
          a.B.b += f * d.b;
          a.B.a += f * d.a;
          a.jb = 0;
          f = b.b;
          g = b.a;
          h = new r();
          h.b = f;
          h.a = g;
          c.Nl(h, 0.7);
          a.$n(b);
        }
      }
    },
    xb: function () {
      return 3;
    },
    j: Hb,
  });
  Pc.__name__ = "10E";
  Pc.A = A;
  Pc.prototype = t(A.prototype, {
    R: function (a) {
      A.prototype.R.call(this, a);
      this.x = a.B.b;
      this.time = Math.random();
    },
    update: function (a) {
      A.prototype.update.call(this, a);
      a.B.b = this.x + 0.5 * Math.sin(5 * this.time);
      a.D.jd && this.H();
    },
    j: Pc,
  });
  pb.__name__ = "10F";
  pb.A = V;
  pb.prototype = t(V.prototype, {
    xb: function () {
      return 6;
    },
    R: function (a) {
      V.prototype.R.call(this, a);
      this.Uc = N.qd(2);
    },
    update: function (a) {
      var b = a.client,
        c = a.F.viewport;
      if (a.F.hk(10)) {
        if (200 > a.code) {
          b.alpha = 1;
          return;
        }
        a = (a.F.hc - a.Ma + 1) / 3;
        0 > a ? (a = 0) : 1 < a && (a = 1);
        this.Pj = 0.1;
        this.hl = a;
      } else
        (a = Qa.map(
          c.wc(a.B.a),
          0,
          (0.4 >= b.v().rb.rp ? 3 : 1) * c.zoom * 2,
          0,
          1
        )),
          0 > a ? (a = 0) : 1 < a && (a = 1),
          (c = this.hl),
          (this.hl = c > a ? c : a),
          (c = this.pf),
          (this.pf = c > a ? c : a),
          (this.Pj = 0.9);
      this.alpha += (this.hl - this.alpha) * this.Pj;
      this.scale += (this.pf - this.scale) * this.Pj;
      b.alpha = N.Hi(3)(this.alpha);
      b.scale = N.qd(3)(this.alpha);
    },
    j: pb,
  });
  n.__name__ = "110";
  n.A = v;
  n.prototype = t(v.prototype, {
    v: function () {
      return Ca.Ca;
    },
    s: function () {
      return this.v().F;
    },
    P: function () {
      return this.v().Tb;
    },
    H: function () {
      this.v().detach(this);
      v.prototype.H.call(this);
    },
    kg: function (a) {
      a = this.time / a;
      return 1 < a ? 1 : a;
    },
    j: n,
  });
  $b.__name__ = "111";
  $b.__interfaces__ = [Ne];
  $b.A = n;
  $b.prototype = t(n.prototype, {
    BB: function () {
      return this.ma.code;
    },
    H: function () {
      n.prototype.H.call(this);
      this.ma = null;
    },
    pop: function () {
      100 == this.ma.code
        ? this.P().Hj
          ? this.ma.$a(new Vd())
          : this.ma.$a(new Wd())
        : this.ma.$a(new ac());
    },
    Ly: function () {
      this.ma.$a(new Xd());
    },
    Yh: function () {
      this.ma.$a(new qb());
    },
    Hl: function () {
      this.H();
    },
    ev: function () {
      this.Cb(53);
    },
    Nl: function (a, b, c) {
      null == c && (c = 0);
      null == b && (b = 1);
      var d = Math.min(this.ma.aw, b);
      b = this.ma.Ba;
      var e = b.b * a.b + b.a * a.a;
      b = -(1 + d) * e * a.b * this.ma.ck;
      a = -(1 + d) * e * a.a * this.ma.ck;
      0 < c &&
        ((d = Math.sqrt(b * b + a * a)),
        d < c && ((b = (b / d) * c), (a = (a / d) * c)));
      this.ma.Ba.b += b;
      this.ma.Ba.a += a;
    },
    W: function () {
      n.prototype.W.call(this);
    },
    update: function (a) {
      var b = this.vh,
        c = this.sc;
      b.b = c.b;
      b.a = c.a;
      this.ma.Dq(this.sc);
      this.wh = this.ma.aa * this.ma.F.viewport.zoom;
      this.visible = !this.ma.D.jd;
      n.prototype.update.call(this, a);
    },
    j: $b,
  });
  na.__name__ = "112";
  na.A = v;
  na.prototype = t(v.prototype, {
    W: function () {
      v.prototype.W.call(this);
      var a = this.parent,
        b = a.v(),
        c = 3;
      300 == a.ma.code && (c = 0);
      this.o = new P(b.Zb(c));
      this.o.M(!1);
      this.o.Oc(11, this.jm());
      this.o.Db();
      this.o.Pa();
      if (null == na.Gi)
        for (na.Gi = [], a = 1; 7 >= a; )
          (b = ab.Pp("" + a + "/", 20)), (na.Gi[a] = ab.Tp("pop_" + a, b)), ++a;
      na.count++;
    },
    H: function () {
      v.prototype.H.call(this);
      this.o.m();
      this.o = null;
      na.count--;
    },
    handle: function (a) {
      var b = this;
      v.prototype.handle.call(this, a);
      switch (a.type) {
        case 53:
          this.o.kf(this.jm());
          break;
        case 54:
          a = this.parent;
          if (7 < a.ma.code) break;
          var c = a.sc,
            d = c.b,
            e = c.a;
          c = new r();
          c.b = d;
          c.a = e;
          this.df = c;
          a = a.ma.code;
          this.pop = new P(this.o.Hb(), 4, "" + a + "/0001");
          this.pop.Db();
          this.pop.Pa();
          this.pop.Wj().play(na.Gi[a], !0, 0, function () {
            b.pop.m();
            b.pop = null;
          });
          a = this.pop.dl(360 * Math.random());
          this.pop.X(this.df.b);
          this.pop.V(this.df.a);
          this.ef = c = new r();
          this.ef.b = 10 * Math.sin(0.0174532925199432 * a);
          this.ef.a = 10 * Math.cos(0.0174532925199432 * a);
          this.time = 0;
          break;
        case 55:
          (a = this.parent),
            (c = a.sc),
            (d = c.b),
            (e = c.a),
            (c = new r()),
            (c.b = d),
            (c.a = e),
            (this.df = c),
            (this.pop = new P(this.o.Hb(), 4, "0/0001")),
            this.pop.Db(),
            this.pop.Pa(),
            this.pop.Wj().play(na.Gi[0], !0, 0, function () {
              b.pop.m();
              b.pop = null;
            }),
            this.pop.X(this.df.b),
            this.pop.V(this.df.a),
            (c = new r()),
            (c.b = 0),
            (c.a = 0),
            (this.ef = c),
            (this.time = 0);
      }
    },
    update: function (a) {
      v.prototype.update.call(this, a);
      this.o.update(a);
      null != this.pop && ((this.ef.a += 100 * a), (this.us = this.kg(0.5)));
    },
    pa: function (a) {
      v.prototype.pa.call(this, a);
      var b = this.parent;
      this.o.X(b.sc.b * a + b.vh.b * (1 - a));
      this.o.V(b.sc.a * a + b.vh.a * (1 - a));
      this.o.fa(((2 * b.wh) / this.o.J.b) * 0.9 * b.scale * b.ma.scale);
      this.o.M(b.visible);
      this.o.Z(b.alpha);
      null != this.pop &&
        (this.pop.X(this.o.Aa + this.ef.b),
        this.pop.V(this.o.ra + this.ef.a),
        this.pop.Z(1 - this.us),
        this.pop.fa((2 * b.wh) / this.o.J.b));
    },
    jm: function () {
      var a = this.parent.ma.code;
      if (0 < a && 10 > a) return "bubble" + a;
      switch (a) {
        case 200:
          return "clear";
        case 300:
          return "air";
        default:
          throw q.G("unknown");
      }
    },
    j: na,
  });
  Zb.__name__ = "113";
  Zb.A = na;
  Zb.prototype = t(na.prototype, {
    W: function () {
      na.prototype.W.call(this);
      if (null == Zb.it) {
        var a = ab.Pp("", 28);
        Zb.it = ab.Tp("shiny", a);
      }
      this.dd = new P(this.o.Hb(), 3, "0001");
      this.dd.Db();
      this.dd.Pa();
      this.dd.M(!1);
      this.Lr = 4;
    },
    H: function () {
      this.dd.m();
      na.prototype.H.call(this);
    },
    handle: function (a) {
      var b = this;
      if (55 == a.type) {
        var c = this.parent.sc;
        a = c.b;
        var d = c.a;
        c = new r();
        c.b = a;
        c.a = d;
        this.df = c;
        this.pop = new P(this.o.Hb(), 4, "7/0001");
        this.pop.Db();
        this.pop.Pa();
        this.pop.Wj().play(na.Gi[7], !0, 0, function () {
          b.pop.m();
          b.pop = null;
        });
        this.pop.X(this.df.b);
        this.pop.V(this.df.a);
        c = new r();
        c.b = 0;
        c.a = 0;
        this.ef = c;
        this.time = 0;
      }
    },
    update: function (a) {
      na.prototype.update.call(this, a);
      null == this.pop &&
        this.time > this.Lr &&
        (this.dd.Wj().play(Zb.it, !0, null, D(this, this.zy)),
        this.dd.M(!0),
        (this.time = 0),
        (this.Lr = Ga.Xd(2, 5)),
        (this.jo = !0));
    },
    pa: function (a) {
      na.prototype.pa.call(this, a);
      this.jo &&
        ((a = this.parent),
        this.dd.X(this.o.Aa),
        this.dd.V(this.o.ra),
        this.dd.fa(this.o.xa),
        this.dd.M(a.visible),
        this.dd.Z(a.alpha));
    },
    jm: function () {
      return "bubble_target";
    },
    zy: function () {
      this.jo = !1;
      this.dd.M(!1);
    },
    j: Zb,
  });
  Td.__name__ = "114";
  Td.A = v;
  Td.prototype = t(v.prototype, {
    handle: function (a) {
      v.prototype.handle.call(this, a);
      a.i |= 1;
    },
    j: Td,
  });
  Vb.__name__ = "115";
  Vb.A = v;
  Vb.prototype = t(v.prototype, {
    H: function () {
      Y.Ya().detach(D(this, this.Kc));
      this.Vi.H();
      this.js = this.gs = null;
      v.prototype.H.call(this);
    },
    Uz: function (a) {
      var b = 5;
      this.i = (this.i & ~(1 << b)) | (1 << b);
      b = 6;
      this.i = (this.i & ~(1 << b)) | ((a ? 1 : 0) << b);
      this.Xi = !1;
      this.Cb(a ? 51 : 52);
    },
    Jx: function () {
      return 0 != (this.i & 64);
    },
    bc: function (a) {
      return 0 < this.Vi.ec.bc(a);
    },
    Ld: function (a) {
      this.Vi.Ld(a);
    },
    M: function (a) {
      this.Vi.ec.M(a);
      this.i = (this.i & -9) | ((a ? 1 : 0) << 3);
      return a;
    },
    cl: function (a) {
      this.i = a ? this.i | 1 : this.i & -8;
      return a;
    },
    Kc: function (a) {
      if (0 != (this.i & 1) && 0 != (this.i & 8) && 0 == (this.i & 20)) {
        this.Xi = !0;
        switch (a.type) {
          case 0:
            if (0 != (this.i & 6)) return;
            var b = a.x;
            a = a.y;
            var c = new r();
            c.b = b;
            c.a = a;
            if (!this.bc(c)) return;
            this.i |= 2;
            this.Cb(49);
            null != this.gs && this.gs();
            break;
          case 1:
            if (0 == (this.i & 2) || 0 != (this.i & 4)) return;
            b = a.x;
            a = a.y;
            c = new r();
            c.b = b;
            c.a = a;
            if (!this.bc(c)) {
              this.Cb(50);
              this.i &= -3;
              return;
            }
            if (0 != (this.i & 32)) {
              this.i ^= 64;
              (b = 0 != (this.i & 64))
                ? (this.Cf(47), this.Cf(48), this.Cb(b ? 51 : 52))
                : (this.Cb(b ? 51 : 52), this.Cf(47), this.Cf(48));
              return;
            }
            this.Cb(48);
            this.Cf(47);
            this.i |= 4;
            this.i &= -3;
            this.em = this.time = 0;
            this.i = (this.i & -17) | 16;
            0 == this.nf && this.Xr();
        }
        this.Xi = !1;
      }
    },
    update: function (a) {
      v.prototype.update.call(this, a);
      if (0 < this.nf && 0 != (this.i & 4)) {
        if (this.time < this.nf) return;
        this.i = (this.i & -5) | 0;
        this.Xr();
      }
      0 != (this.i & 16) &&
        ((this.em += a), this.em > this.nf && (this.i &= -21));
    },
    Xr: function () {
      null != this.js && this.js();
      this.Cf(48, fa.Fb(["name", this.name]));
    },
    j: Vb,
  });
  ob.__name__ = "116";
  ob.A = v;
  ob.prototype = t(v.prototype, {
    Ld: function (a) {
      var b = a.a,
        c = a.f,
        d = a.d,
        e = new G();
      e.b = a.b;
      e.a = b;
      e.f = c;
      e.d = d;
      this.$ = e;
      this.ec.X(a.b);
      this.ec.V(a.a);
      this.ec.nw(a, lb.i0, 0, 0);
      this.ec.Pa();
    },
    reset: function () {},
    j: ob,
  });
  Kc.__name__ = "117";
  Kc.A = ob;
  Kc.prototype = t(ob.prototype, {
    Ld: function (a) {
      ob.prototype.Ld.call(this, a);
      this.scale = this.ec.xa;
    },
    handle: function (a) {
      ob.prototype.handle.call(this, a);
      switch (a.type) {
        case 48:
          if (!this.Ph) {
            z.play(z.cp);
            this.o.M(!1);
            this.state = 2;
            break;
          }
          z.play(z.gu, !1, !0);
          this.frame = 0;
          this.state = 1;
          this.data = O.ja(this.kr, "pop");
          this.time = 0;
          break;
        case 49:
          this.ec.Pf().kl(this.scale + 0.2, 0.5, N.sd(0.2));
          break;
        case 50:
          this.ec.Pf().kl(this.scale, 0.5, N.Zh(0, 0.25));
          break;
        case 51:
          this.icon.Z(1);
          B.Ta(this.parent, Vb).Xi &&
            (z.play(z.cp), this.ec.Pf().kl(this.scale, 1, N.Zh(0, 0.25)));
          break;
        case 52:
          this.icon.Z(0.25),
            B.Ta(this.parent, Vb).Xi &&
              (z.play(z.ku),
              this.ec.Pf().kl(this.scale - 0.2, 1, N.Zh(0, 0.25)));
      }
    },
    update: function (a) {
      ob.prototype.update.call(this, a);
      switch (this.state) {
        case 0:
          this.Ph && this.frame++;
          55 == this.frame && (this.time = this.Pb = this.frame = 0);
          switch (this.Pb) {
            case 0:
              var b = this.time / 0.45;
              a = N.lq(20)(1 > b ? b : 1);
              this.y = (this.Ph ? -10 : -2) * a;
              if (1 > a) return;
              this.Pb = 1;
              this.time = 0;
              break;
            case 1:
              (b = this.time / 0.45),
                (a = N.lq(-20)(1 > b ? b : 1)),
                (b = this.Ph ? -10 : -2),
                (this.y = b + (0 - b) * a),
                1 > a || (this.time = this.Pb = 0);
          }
          break;
        case 1:
          (b = this.time / 1),
            (a = 1 > b ? b : 1),
            this.o.Z(1 - N.Hi(2)(a)),
            this.icon.fa((0.75 + 0.3500000000000001 * N.sd(2)(a)) * this.Rf),
            (a = this.icon),
            a.Z(0.8 * a.Za),
            this.frame++,
            70 == this.frame && (this.state = 2);
      }
    },
    pa: function (a) {
      ob.prototype.pa.call(this, a);
      switch (this.state) {
        case 0:
          this.setTransform(this.o);
          this.setTransform(this.icon);
          a = this.icon;
          a.X(a.Aa + this.Xj.b);
          a = this.icon;
          a.V(a.ra + this.Xj.a);
          a = this.icon;
          a.qe(a.xa * this.Rf);
          a = this.icon;
          a.Pc(a.Lb * this.Rf);
          break;
        case 1:
          this.setTransform(this.o);
      }
    },
    reset: function () {
      this.ec.fa(this.scale);
      this.o.M(!0);
      this.state = 0;
    },
    setTransform: function (a) {
      var b = this.frame << 2;
      a.X(this.data[b]);
      a.V(this.data[b + 1] + this.y);
      a.qe(this.data[b + 2]);
      a.Pc(this.data[b + 3]);
    },
    j: Kc,
  });
  bg.__name__ = "118";
  cf.__name__ = "119";
  cf.prototype = {
    resize: function () {
      var a = window.document.getElementById("crashdialog"),
        b = this.Gb();
      a.style.width = b.f - b.b + "px";
      a.style.height = b.d - b.a + "px";
      a.style.left = b.b + "px";
      a.style.top = b.a + "px";
    },
    Gb: function () {
      var a = window.innerWidth,
        b = window.innerHeight;
      var c = (0.8 * a) | 0;
      var d = (0.5 * b) | 0;
      var e = c / 0.6,
        f = d / 1,
        g = new G();
      e <= f
        ? ((g.b = 0), (g.a = 0), (g.f = g.b + c), (g.d = g.a + ((1 * e) | 0)))
        : ((c = g.f - g.b),
          (g.b = 0),
          (g.f = c),
          (c = g.d - g.a),
          (g.a = 0),
          (g.d = c),
          (g.f = g.b + ((0.6 * f) | 0)),
          (g.d = g.a + d));
      a = ((a - (g.f - g.b)) / 2) | 0;
      c = g.f - g.b;
      g.b = a;
      g.f = a + c;
      a = (0.3 * b) | 0;
      c = g.d - g.a;
      g.a = a;
      g.d = a + c;
      return g;
    },
    j: cf,
  };
  Ca.__name__ = "11A";
  Ca.__interfaces__ = [Pe];
  Ca.A = nb;
  Ca.prototype = t(nb.prototype, {
    H: function () {
      nb.prototype.H.call(this);
      this.tb.m();
      Ca.Ca = null;
    },
    W: function () {
      nb.prototype.W.call(this);
      this.ye = this.Rg();
      this.Xm = [];
      for (var a = 0; 7 > a; ) {
        var b = a++;
        this.Xm[b] = new X("layer_" + b);
        this.tb.appendChild(this.Xm[b].node);
      }
      this.N((this.bubbles = new Td()));
      this.N(new v());
      this.N((this.qb = new v()));
      a = ca.Fs;
      Ca.Ca = this;
      this.F = new md();
      this.F.la(this);
      this.F.Gm.filter = function () {
        return !0;
      };
      this.N((this.rb = new Qd()));
      this.Tb = new Sd(a);
      this.N(this.Tb);
      this.qb.N(new Fd());
      this.qb.N(new yd());
      this.qb.N(new Md());
      this.qb.N(new vd());
      this.qb.N(new Id());
      this.qb.N(new Wb());
      this.qb.N(new ud());
      this.qb.N(new Dd());
      this.qb.N(new zd());
      this.qb.N(new Cd());
      this.qb.N(new sd());
      this.qb.N(new Ld());
      this.qb.N(new Ad());
      this.qb.N(new xd());
      this.qb.N(new Kd());
      this.qb.N(new td());
      this.qb.N(new Jc());
      this.qb.N(new Bd());
      this.qb.N(new Ed());
      this.rb.resize();
      this.Tb.R();
      this.rb.resize();
    },
    handle: function (a) {
      nb.prototype.handle.call(this, a);
      43 == a.type && (this.ye = this.Rg());
    },
    update: function (a) {
      this.F.update(a);
      nb.prototype.update.call(this, a);
    },
    Fn: function () {
      var a = this.qb.Ec(Jc);
      return null == a ? !1 : a.bc(Y.Ya().Vj());
    },
    pause: function () {
      this.Tb.paused = !0;
      this.Mi = this.jj = !1;
    },
    resume: function () {
      this.Tb.paused &&
        ((this.Tb.paused = !1), (this.Mi = this.jj = !0), this.Cb(3));
    },
    Zb: function (a) {
      return this.Xm[a];
    },
    Gl: function (a) {
      var b = new $b(a);
      200 == a.code && (a.Tc = 0.1);
      a.$a(new pb());
      100 == a.code ? b.N(new Zb()) : b.N(new na());
      this.bubbles.N(b);
    },
    Hl: function () {},
    fv: function (a, b) {
      var c = new $b(a);
      c.N(new na());
      this.bubbles.N(c);
      if (0 < b) {
        c = a.Le(cb);
        var d = 1.25 * (b - 1),
          e = 0;
        0 == this.rb.vj ? (e = 2) : (d += 2);
        c.Ud.b = d;
        c.Ud.a = e;
        b = c.scale = 1 == b ? 0.5 : 0.3;
        c.update(a);
        c = new Yd(b);
        a.$a(c);
      }
    },
    pB: function () {},
    dv: function (a, b) {
      a = fa.Fb(["bubble", a, "bubbleHit", b]);
      null != b && 200 == b.code && this.ka(4, a);
      this.ka(8, a);
    },
    bv: function () {
      this.ka(11);
    },
    cv: function () {
      this.ka(31);
    },
    Rg: function () {
      return S.Ea.window.Rb();
    },
    j: Ca,
  });
  Sd.__name__ = "11B";
  Sd.A = n;
  Sd.prototype = t(n.prototype, {
    R: function () {
      this.Wq();
      this.pb(1);
    },
    zB: function () {
      return this.kc;
    },
    xg: function (a) {
      this.Pq ||
        this.Hj ||
        0 == a ||
        ((this.kc += a),
        9999999 < this.kc && (this.kc = 9999999),
        this.v().ka(10));
    },
    gB: function () {
      this.qo = this.s().viewport.Ui(
        null == this.level ? this.Sj.ei(1).cg : this.level.Da.cg
      );
      this.s().Mb.te();
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      this.dB(a);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 8:
          var b = a.get("bubble");
          a = a.get("bubbleHit");
          b.client.mp = !0;
          this.Sh[b.code]++;
          b = this.Wi(b);
          this.aB();
          200 != a.code &&
            (0 == b.si
              ? (this.On++, (this.speed -= (5 * this.level.Da.speed) / this.On))
              : (this.On = 0));
          null != b.target &&
            ((a = b.target.client.sc.a / this.v().ye.a),
            0 < a && ((a = N.qd(2)(a)), (this.speed -= 20 * a)));
          this.v().ka(21, fa.Fb(["result", b]));
          this.pb(5);
          break;
        case 17:
          this.Lx() && this.bA();
          break;
        case 31:
          this.pb(3);
          break;
        case 35:
          this.vp = !0;
      }
    },
    Gq: function () {
      return this.P().sw() * this.P().pm();
    },
    sw: function () {
      return 100 * this.level.Da.level;
    },
    pm: function () {
      var a = (this.xo - this.kd) | 0;
      return 0 > a ? 0 : a;
    },
    Aq: function () {
      return 5e3 + 1e3 * (this.level.Da.level - 1);
    },
    Qg: function () {
      return this.Ye / this.Pr;
    },
    ai: function (a) {
      var b = bg.Ky;
      a = a < b.length ? b[a] : b[b.length - 1];
      return a + (this.level.Da.level - 1) * a;
    },
    vq: function () {
      return 100 * (this.Ef - 1);
    },
    ww: function () {
      return 1e3 * (this.level.Da.level + 1);
    },
    Fv: function () {
      for (var a = 0, b = 1; b <= Yb.Xt; ) {
        var c = this.Sj.ei(b);
        a += c.Jf + 2 * this.s().Kp(c.Rr) + 2;
        ++b;
      }
      return a;
    },
    Wq: function () {
      var a = this,
        b = null == this.level,
        c = b ? this.jq : this.level.Da.level + 1;
      jb.QA(jb.Da().Fz(c));
      this.level = this.Sj.Wx(c);
      var d = this.level.data;
      this.Dn = this.level.data.nm();
      this.Sh = this.level.data.Ff();
      var e = this.level.Da.cg,
        f = c == this.jq;
      f = d.ba;
      b && (this.kc = this.cj = 0);
      this.speed = 0;
      this.il = !1;
      this.Ye = 0;
      this.Pr = d.Kv();
      this.ky = f.ua;
      this.Bk = 0;
      this.nr = -1;
      this.by = this.level.Da.Jf + 2 * this.s().Kp(this.ky) + 2;
      this.Pq = !1;
      this.kd = 0;
      this.xo = this.by / this.level.Da.speed;
      this.Xl = !0;
      this.Ef = 0;
      this.Kd = (Yb.Wt - e) >> 1;
      c = this.bd.Id(0, e - 1);
      var g = f.c[0 * f.ca + c];
      f.c[0 * f.ca + c] = 100;
      this.Sh[g]--;
      for (var h = [], k = 0, m = f.ua; k < m; ) (g = k++), h.push(0);
      c = h;
      h = 0;
      for (k = this.Kd; h < k; ) (g = h++), f.Uy(c);
      h = 0;
      for (k = this.Kd; h < k; ) (g = h++), f.Uu(c);
      h = [];
      k = 0;
      for (m = e; k < m; ) (g = k++), h.push(200);
      this.Ee = h;
      h = 0;
      for (k = this.Kd; h < k; ) (g = h++), this.Ee.unshift(0);
      h = 0;
      for (k = this.Kd; h < k; ) (g = h++), this.Ee.push(0);
      this.s().Mb.dt(3, function (b) {
        var c = new r();
        c.b = 2 * a.Kd;
        c.a = 0;
        var d = c;
        c = new r();
        c.b = 1;
        c.a = 0;
        va.jf(b, c, d);
      });
      this.s().Mb.dt(1, function (b) {
        var c = new r();
        c.b = a.s().Uj() - 2 * (a.Kd + (e & 1));
        c.a = 0;
        var d = c;
        c = new r();
        c.b = -1;
        c.a = 0;
        va.jf(b, c, d);
      });
      c = !0;
      if (b) {
        this.s().Gz(d);
        if (null != this.lg && this.lg.Os(!1)) {
          h = [];
          k = 0;
          for (m = 2; k < m; ) (g = k++), h.push(this.lg.ci(g + 1));
          this.ta = h;
          h = 0;
          for (k = 2; h < k; )
            (g = h++), 0 == this.ta[g] && (this.ta[g] = this.Ai.next());
        } else {
          h = [];
          k = 0;
          for (m = 2; k < m; ) (g = k++), h.push(this.Ai.next());
          this.ta = h;
        }
        h = 0;
        for (k = 2; h < k; ) (g = h++), this.s().sr(this.ta[g]);
        this.zoom = this.qo = this.s().viewport.Ui(e);
        this.s().Vs(this.level.Da.Jf);
        f = this.s().viewport.wc(this.s().Zd());
        b = this.s().viewport.$;
        this.Uf = (f / (b.d - b.a)) * 3;
        1 > this.Uf && (this.Uf = 1);
        this.zs();
        this.s().update(0);
      } else {
        b = 0;
        for (g = this.s().ba.iterator(); g.Y(); ) g.next(), ++b;
        f = this.level.data.ba;
        for (b = f.ua; -1 < --b; ) this.s().As(f.Pw(b, []));
        this.zoom = this.s().viewport.zoom;
        this.qo = this.s().viewport.Ui(e);
        this.s().Vs(this.level.Da.Jf);
        1.5 >
          this.s().viewport.wc(this.s().Zd()) / (2 * this.s().viewport.zoom) &&
          (c = !1);
        f = this.s().viewport.wc(this.s().Zd());
        b = this.s().viewport.$;
        this.Uf = (f / (b.d - b.a)) * 3;
        1 > this.Uf && (this.Uf = 1);
        this.zs();
        this.s().viewport.et(this.zoom);
      }
      this.s().Vz();
      this.s().Mb.te();
      this.Ak = this.s().ic;
      this.Yq = this.s().da.a;
      this.Xq = this.s().Zd() + this.v().Tb.level.Da.Jf;
      c || (this.Xq = this.Yq);
      f = this.s();
      d = this.s().Gd.b;
      b = this.s().Gd;
      d += (b.f - b.b) / 2;
      b = this.s().da;
      f.xh(d, b.a);
      this.v().ka(32, fa.Fb(["tease", c]));
    },
    wv: function () {
      for (
        var a = 0.25,
          b = a / (this.s().hc - this.s().ic + 1),
          c = 0,
          d = this.s().ic,
          e = this.s().hc;
        d <= e;

      ) {
        this.v().ka(23);
        for (var f = 0, g = this.s().cols; f < g; ) {
          var h = f++;
          h = this.s().ba.get(h, d);
          null != h &&
            (200 != h.code
              ? ((h = h.client), h.ma.disconnect(), h.Yh())
              : h.D.jd
              ? h.H()
              : (h.rc(pb),
                (h = h.client),
                h.ma.disconnect(),
                (h.ub = c),
                h.pop()));
        }
        c += a;
        a -= b;
        0.01 > a && (a = 0.01);
        ++d;
      }
    },
    Rl: function () {
      if (this.il) return 0;
      for (var a = 0, b = 0, c = this.Sh; b < c.length; ) {
        var d = c[b];
        ++b;
        a += d;
      }
      return a;
    },
    Lx: function () {
      return 3 == this.state && 0 < this.s().dg ? this.s().pv() : !1;
    },
    bA: function () {
      this.s().cA();
      this.se.Or++;
      J.xc("total_bubbles_shot", this.se.Or);
      this.pb(4);
      this.v().ka(18);
      null != this.lg && this.lg.Os(!0);
      this.reload();
    },
    reload: function () {
      for (var a = 0, b = this.s().ta.g; a < b; ) {
        var c = a++;
        this.s().Oe(c).$a(new zb());
      }
      this.ta.shift();
      null != this.lg
        ? ((b = this.v().F.Oe(0).code),
          (a = this.lg.ci(1)),
          b == a && (a = this.lg.ci(2)),
          0 == a && (a = this.Ai.next()))
        : (a = this.Ai.next());
      this.ta.push(a);
      this.v().F.sr(this.ta[this.ta.length - 1]);
    },
    clearColor: function (a) {
      0 == --this.Sh[a] &&
        ((this.nr = a), this.Dn.splice(this.Dn.indexOf(a), 1));
      this.se.Nr[a]++;
    },
    Wi: function (a) {
      var b = new Lc().Wi(a);
      if (b.$p) {
        this.clearColor(a.code);
        var c = a.client;
        c.Ly();
        return b;
      }
      if (this.s().ic > this.Ak)
        for (a = 0; this.Ak < this.s().ic; )
          this.v().ka(19, fa.Fb(["r", this.Ak, "t", a])), this.Ak++, (a += 0.1);
      a = b.ff.g + b.If.g;
      this.Ye += b.si;
      this.se.Ye += a;
      J.xc("total_bubbles_cleared", this.se.Ye);
      a > this.se.mr && ((this.se.mr = a), J.xc("largest_group", a));
      for (var d = b.ff.iterator(); d.Y(); )
        (c = d.next()), this.clearColor(c.code), (c = c.client), c.pop();
      for (d = b.If.iterator(); d.Y(); )
        (c = d.next()), this.clearColor(c.code), (c = c.client), c.Yh();
      0 < a
        ? 1 < ++this.Ef &&
          (this.xg(this.vq()),
          this.v().ka(22, fa.Fb(["combo", this.Ef, "total", a])))
        : (this.Ef = 0);
      null != b.target &&
        (this.v().ka(26), b.target.client.pop(), (this.il = !0));
      if (0 < this.Rl())
        for (a = 0, d = this.ta.length; a < d; )
          if (((c = a++), 0 == this.Sh[this.ta[c]])) {
            var e = (this.ta[c] = this.Ai.next());
            this.v().F.Oe(c).Fp(e);
          }
      return b;
    },
    zs: function () {
      var a = this.s().vm();
      a = this.s().viewport.wc(a);
      if (!(0 >= a)) {
        var b = Math.ceil(this.s().Dv(a / this.s().viewport.zoom));
        10 < b && (b = 10);
        this.Bk = b;
        for (a = 0; a < b; ) {
          var c = a++;
          this.xs(c);
        }
      }
    },
    ys: function () {
      if (!(10 <= this.Bk))
        for (; this.s().hk() && 10 > this.Bk; ) this.xs(this.Bk++);
    },
    xs: function (a) {
      var b = this.level.Da.cg,
        c = this.Ee;
      if (0 < a && 10 <= b) {
        c = this.Ee.slice();
        for (var d = 0, e = c.length; d < e; ) {
          var f = d++;
          (f & 1) == (a & 1) && (c[f] = 0);
        }
        c[this.Kd] = 0;
        c[this.Kd + b - 1] = 0;
      }
      this.s().As(c);
    },
    $v: function () {
      if (0 == this.Uf) return 1;
      var a = this.time / this.Uf;
      1 < a && (a = 1);
      var b = this.zoom;
      b += (this.qo - b) * N.qd(2)(a);
      this.s().viewport.et(b);
      b = this.Yq;
      b += (this.Xq - b) * N.sd(0.025)(a);
      this.s().xh(this.s().da.b, b);
      return a;
    },
    dB: function (a) {
      var b = this;
      switch (this.state) {
        case 1:
          switch (this.Od) {
            case 0:
              this.Od = 1;
              a = this.level.Da.level;
              J.Sx("level" + a).then(
                function () {
                  b.Od++;
                },
                function () {
                  b.Od++;
                }
              );
              break;
            case 2:
              1 <= this.$v() && (this.v().ka(27), this.pb(2));
          }
          break;
        case 2:
          1 < this.time && (this.v().ka(28), this.pb(3));
          break;
        case 3:
          this.kd += a;
          this.gn(a);
          this.ys();
          if (this.il && 0 == this.Rl()) {
            this.cj += this.kd;
            jb.At(
              jb
                .Da()
                .ct(!0)
                .setData(
                  '{"percentCleared": ' + Math.round(100 * this.Qg()) + "}"
                )
            );
            J.xc("level_pass", this.level);
            J.xc("danger_zone_survival_time", Math.round(this.Zl));
            1 == this.Qg() && J.xc("perfect", !0);
            a = this.pm();
            0 < a && J.xc("speed_bonus", a);
            a = this.se.Nr;
            J.xc("total_bubbles_cleared_blue", a[1]);
            J.xc("total_bubbles_cleared_green", a[2]);
            J.xc("total_bubbles_cleared_yellow", a[3]);
            J.xc("total_bubbles_cleared_turquoise", a[4]);
            J.xc("total_bubbles_cleared_purple", a[5]);
            J.xc("total_bubbles_cleared_red", a[6]);
            J.xc("total_bubbles_cleared_white", a[7]);
            this.v().ka(20);
            this.pb(6);
            break;
          }
          this.v().F.Zd() > this.v().F.da.a &&
            ((this.cj += this.kd),
            (this.Hj = !0),
            jb.At(
              jb
                .Da()
                .ct(!1)
                .Mz(this.kc)
                .setData('{"duration": ' + (this.cj | 0) + "}")
            ),
            this.v().ka(6),
            this.pb(8));
          break;
        case 4:
          this.kd += a;
          this.gn(a);
          this.ys();
          break;
        case 5:
          this.kd += a;
          this.gn(a);
          if (null != this.v().F.Oe(0).Le(zb)) break;
          this.pb(3);
          break;
        case 6:
          var c = (this.speed *= 0.95);
          if (0 < c ? 0.01 > c : 0.01 > -c) this.speed = 0;
          this.s().Bt(0, -this.speed * a);
          this.Xh = 0;
          switch (this.Od) {
            case 0:
              0 == A.count && (this.Od = 1);
              break;
            case 1:
              this.vp = !1;
              this.v().ka(34);
              this.Od = 2;
              break;
            case 2:
              if (!this.vp) return;
              this.Od++;
              this.Pq = !0;
              this.wv();
              break;
            case 3:
              if (0 == A.count) {
                this.pb(7);
                a = this.level.Da.level;
                a = J.Tx("level" + a);
                c = J.zt(this.kc);
                var d = Eb.jt();
                Promise.all([a, c, d]).then(D(this, this.$q), D(this, this.$q));
              }
          }
          break;
        case 8:
          switch (this.Od) {
            case 0:
              this.uv();
              this.Od++;
              break;
            case 1:
              0 == A.count && (this.pb(0), this.v().ka(7), this.v().Cf(7));
          }
      }
    },
    $q: function () {
      this.Wq();
      this.pb(1);
    },
    pb: function (a) {
      this.state = a;
      this.Od = this.time = 0;
    },
    uv: function () {
      for (
        var a = !0, b = 0.1, c = this.s().ic, d = null, e;
        c <= this.s().hc;

      ) {
        var f = [],
          g = 0;
        for (e = this.s().cols; g < e; ) {
          var h = g++;
          f.push(this.s().ba.get(h, c));
        }
        (a = !a) && f.reverse();
        for (g = 0; g < f.length; )
          (h = f[g]),
            ++g,
            null != h &&
              ((e = h.client),
              h.D.jd && 100 != h.code
                ? h.H()
                : ((e.ub = b),
                  200 == h.code ? e.pop() : 100 == h.code ? (d = h) : e.Yh(),
                  (b += 0.01)));
        ++c;
      }
      a = this.v().F.ta.g;
      f = 0;
      for (g = a; f < g; )
        (h = f++),
          (e = this.v().F.Oe(h).client),
          (e.ub = b),
          e.pop(),
          (b += 0.1);
      e = d.client;
      e.ub = 1 + b;
      e.pop();
    },
    gn: function (a) {
      this.ZA(a);
      this.s().Bt(0, -(this.speed * a));
    },
    aB: function () {
      this.fe = this.s().da.a - (this.s().mm().B.a + 1);
      var a = this.fe / 6;
      this.Xh = 1 - (1 < a ? 1 : a);
    },
    ZA: function (a) {
      this.fe = this.s().da.a - (this.s().mm().B.a + 1);
      var b = this.v().Tb.level.Da.Jf,
        c = this.level.Da.speed;
      this.Cn = this.qt = (this.fe - b) / b;
      this.Pm
        ? ((this.Zl += a),
          (b = this.fe / 6),
          (this.Xh = 1 - (1 < b ? 1 : b)),
          (c *= 0.5),
          6 < this.fe &&
            ((this.Jj += a),
            0.1 < this.Jj && ((this.Pm = !1), this.v().ka(13))),
          this.Yl
            ? 2 < this.fe && ((this.Yl = !1), this.v().ka(16))
            : 2 >= this.fe && ((this.Yl = !0), this.v().ka(15)))
        : 6 > this.fe &&
          ((this.Jj = this.Xh = 0),
          (this.Pm = !0),
          this.v().ka(12),
          (this.Xl = !1));
      0 < this.Cn && (c *= 1 + this.Cn);
      this.speed += 0.1 * (c - this.speed);
    },
    j: Sd,
  });
  Rd.__name__ = "11C";
  Rd.A = v;
  Rd.prototype = t(v.prototype, {
    H: function () {
      v.prototype.H.call(this);
      this.node.m();
      this.Ea.pw(17);
    },
    update: function (a) {
      v.prototype.update.call(this, a);
      if (null != this.node) {
        this.text = "1.0.10";
        var b = S.Ea.window;
        a = b.Rb();
        b = b.fc;
        this.o.V((a.a - this.o.Na.size * b) | 0);
        this.o.fa(b);
        this.o.dc(this.text);
      }
    },
    R: function () {
      this.Ea.hb(17);
      var a = this.Ea.window.Rb();
      this.o = new Oa(null, 17);
      this.o.Qz();
      this.o.yh(a.b, 2 * this.o.Na.size);
      this.o.Pz();
      this.node = new Na("info");
      this.node.appendChild(this.o.node);
      this.Ea.tb.appendChild(this.node);
      this.N(new Nd(10, D(this, this.H)));
    },
    j: Rd,
  });
  bf.__name__ = "11D";
  bf.prototype = { j: bf };
  Qd.__name__ = "11E";
  Qd.A = n;
  Qd.prototype = t(n.prototype, {
    Pg: function (a) {
      return new bf(this.$[a], this.mc[a]);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      43 == a.type && this.resize();
    },
    resize: function () {
      var a = this.v().ye,
        b = a.b,
        c = a.a,
        d = new G(),
        e = d;
      e.b = 0;
      e.a = 0;
      e.f = b;
      e.d = c;
      e = d = this.lc = e;
      c = this.rp = (d.f - d.b) / (e.d - e.a);
      if (0.7 < c) {
        c = 0.7;
        e = d = this.lc;
        e = 0.7 * (e.d - e.a);
        d.f = d.b + e;
        d = this.lc;
        e = a.b / 2;
        var f = 0.5 * (d.f - d.b);
        d.b = e - f;
        d.f = e + f;
      }
      this.s().Nz(this.lc);
      d =
        0.4 > c
          ? Qa.map(c, 0.1, 0.4, 0.6, 0.82)
          : 0.5 > c
          ? Qa.map(c, 0.4, 0.5, 0.82, 0.87)
          : 0.92;
      this.s().$k(0.5, d);
      this.P().gB();
      if (1 > this.rp) {
        this.mode = 0;
        d = this.lc;
        var g = 0.1 * (d.f - d.b);
        e = 0.25 * g;
        d = Qa.map(c, 0.1, 0.7, 0.75 * g, 0);
        e += 0 > d ? 0 : d;
        0 > e && (e = 0);
        b = e;
        var h = a.b,
          k = e + g;
        d = this.lc;
        g = 0.05 * (d.f - d.b);
        e = d = new G();
        e.b = 0;
        e.a = b;
        e.f = h;
        e.d = k;
        d = e;
        kb.Nc(d, 0.75, !0);
        var m = (this.$[0] = d);
        this.mc[0].b = 0;
        this.mc[0].a = -1;
        e = d = new G();
        e.b = 0;
        e.a = b;
        e.f = h;
        e.d = k;
        d = e;
        kb.th(d, 0.25, !1);
        kb.Nc(d, 0.6, !0);
        e = this.lc.b + g;
        f = d.f - d.b;
        d.b = e;
        d.f = e + f;
        this.$[1] = d;
        this.mc[1].b = -1;
        this.mc[1].a = -1;
        e = d = new G();
        e.b = 0;
        e.a = b;
        e.f = h;
        e.d = k;
        d = e;
        kb.th(d, 0.25, !1);
        kb.Nc(d, 0.6, !0);
        e = h - g;
        f = d.f - d.b;
        d.f = e;
        d.b = e - f;
        this.$[2] = d;
        this.mc[2].b = 1;
        this.mc[2].a = -1;
        e = d = new G();
        e.b = 0;
        e.a = b;
        e.f = h;
        e.d = k;
        d = e;
        d.a = 0;
        e = m.a - 2;
        g = (m.d - m.a) / 4;
        d.d = e < g ? e : g;
        this.$[4] = d;
      } else
        (this.mode = 2),
          (d = this.lc),
          (g = 0.05 * (d.d - d.a)),
          (b = this.lc.b),
          (e = d = new G()),
          (e.b = 0),
          (e.a = g),
          (e.f = b),
          (e.d = 2 * g),
          (d = e),
          kb.offset(d, -g / 4, 0),
          (h = this.$[1] = d),
          (this.mc[1].b = 1),
          (this.mc[1].a = -1),
          (e = d = new G()),
          (e.b = 0),
          (e.a = 0),
          (e.f = b),
          (e.d = g),
          (d = e),
          kb.offset(d, -g / 4, 0),
          (e = h.d + g),
          (f = d.d - d.a),
          (d.a = e),
          (d.d = e + f),
          (this.$[0] = d),
          (this.mc[0].b = 1),
          (this.mc[0].a = -1),
          (h = this.lc.f),
          (b = this.lc.f + b),
          (e = d = new G()),
          (e.b = h),
          (e.a = g),
          (e.f = b),
          (e.d = 2 * g),
          (d = e),
          kb.offset(d, -g / 4, 0),
          (this.$[2] = d),
          (this.mc[2].b = -1),
          (this.mc[2].a = -1),
          (d = this.lc),
          (g = 0.01 * (d.d - d.a)),
          (b = a.b),
          (e = d = new G()),
          (e.b = 0),
          (e.a = 0),
          (e.f = b),
          (e.d = g),
          (this.$[4] = e);
      this.vj = 0.5 > c ? 0 : 1;
      b = this.lc.f;
      c = ea.ke / 2.54;
      e = 0.9 * c;
      d = 1.5 * this.s().viewport.zoom;
      g = e > d ? e : d;
      e = d = new G();
      e.b = 0;
      e.a = 0;
      e.f = g;
      e.d = g;
      d = e;
      g = 0.2 * c;
      2 == this.mode
        ? ((e = b + g), (f = d.f - d.b), (d.b = e), (d.f = e + f))
        : ((e = b - g), (f = d.f - d.b), (d.f = e), (d.b = e - f));
      e = a.a - g;
      f = d.d - d.a;
      d.d = e;
      d.a = e - f;
      this.$[3] = d;
      this.v().Cb(1);
      this.v().Cb(2);
    },
    j: Qd,
  });
  af.__name__ = "11F";
  af.prototype = { j: af };
  Yb.__name__ = "120";
  Yb.prototype = {
    ei: function (a) {
      return this.mi[a];
    },
    Wx: function (a) {
      for (var b = this.ei(a); this.Gg.length < b.Ck; )
        this.Gg.push(this.Fh.pop());
      var c = new af();
      c.data = this.Ny(a, b.Nd);
      c.Ge = this.Gg.slice();
      c.Da = b;
      return c;
    },
    Ny: function (a, b) {
      a = this.ei(a);
      var c = new Ba(a.cg, a.Rr);
      switch (b.type) {
        case "p":
          this.qw(c, a);
          break;
        case "r":
          this.rw(c, a);
      }
      return c;
    },
    rw: function (a, b) {
      function c() {
        return d.Gg[d.bd.Id(0, b.Ck - 1)];
      }
      var d = this,
        e = 0,
        f = 0,
        g = 0,
        h = b.Nd.Fr,
        k = b.Nd.zr;
      a.ba.forEach(function () {
        var a = c();
        if (0 == g) {
          if (a == e) {
            if ((f += 1) == k) {
              for (var b = 0, d = c(); a == d && 100 > b++; ) d = c();
              a = d;
              f = 0;
            }
          } else f = 0;
          e = a;
          0 < h && (g += 1);
        } else g < h && ((g += 1), (a = e));
        g == h && (g = 0);
        return a;
      });
    },
    qw: function (a, b) {
      for (
        var c = new ib(),
          d = a.ba,
          e = d.c,
          f = e.length,
          g = 0,
          h = [],
          k = [],
          m = f;
        0 < m;

      ) {
        for (var l = !1; g < f; ) {
          if (0 == e[g]) {
            c.y = (g / d.ca) | 0;
            c.x = g % d.ca;
            l = !0;
            break;
          }
          ++g;
        }
        if (!l) break;
        l = this.bd.Id(b.Nd.Gr, b.Nd.Cr);
        l = this.Yy(a, c, l, 65535, h);
        var n = this.Gg[this.bd.Id(0, b.Ck - 1)],
          p = a.jw(c.x, c.y, k);
        if (0 < p)
          for (var q, r = 0; ; ) {
            q = !1;
            for (var t = 0, v = p; t < v; ) {
              var w = t++;
              if (k[w] == n) {
                n = this.Gg[this.bd.Id(0, b.Ck - 1)];
                q = !0;
                break;
              }
            }
            if (!(q && 100 > r++)) break;
          }
        q = l;
        null == q && (q = -1);
        p = 0;
        for (q = -1 < q ? q : h.length; p < q; )
          (d.c[h[p + 1] * d.ca + h[p]] = n), (p += 2);
        m -= l >> 1;
      }
    },
    Xy: function (a, b, c) {
      for (var d = 0, e = b; d < e; ) {
        var f = d++;
        c[f] = f;
      }
      d = 0;
      for (e = b; d < e; ) {
        f = d++;
        var g = a.Id(f, b - 1),
          h = c[g];
        c[g] = c[f];
        c[f] = h;
      }
      return c;
    },
    Yy: function (a, b, c, d, e) {
      var f = a.ba,
        g = b.x;
      b = b.y;
      var h = [],
        k = [],
        m = 0;
      e[m++] = g;
      e[m++] = b;
      for (f.c[b * f.ca + g] = d; m >> 1 < c; ) {
        var l = a.fm(g, b, h);
        var n = l >> 1;
        this.Xy(this.bd, n, k);
        l = !1;
        for (var p = 0; p < n; ) {
          var q = p++;
          var r = k[q];
          q = h[r << 1];
          r = h[(r << 1) + 1];
          if (!(0 < f.c[r * f.ca + q])) {
            g = q;
            b = r;
            e[m++] = g;
            e[m++] = b;
            f.c[b * f.ca + g] = d;
            l = !0;
            break;
          }
        }
        if (!l) break;
      }
      return m;
    },
    az: function () {
      var a = [],
        b = l.getData(7);
      b = -1 != b.indexOf("\r\n") ? b.split("\r\n") : b.split("\n");
      var c = b.shift(),
        d = new Q("version\\s*,\\s*(\\d+)", "g");
      d.match(c);
      y.parseInt(d.ya(1));
      for (b.shift(); le.Nx(b[b.length - 1]); ) b.pop();
      d = new Q(
        "(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*([\\d\\.]+)\\s*,\\s*(\\d+)\\s*,\\s*([rp]:?([?:\\d-]+)?)",
        ""
      );
      for (c = 0; c < b.length; ) {
        var e = b[c];
        ++c;
        d.match(e);
        var f = y.parseInt(d.ya(1));
        e = new $e();
        e.level = f;
        e.Ck = y.parseInt(d.ya(2));
        e.Rr = y.parseInt(d.ya(3));
        e.cg = y.parseInt(d.ya(4));
        e.speed = parseFloat(d.ya(5));
        e.Jf = y.parseInt(d.ya(6));
        f = d.ya(7).split(":");
        e.Nd.type = f[0];
        var g = new Q("(\\d)-(\\d)", "");
        if (g.match(f[1])) {
          var h = y.parseInt(g.ya(1));
          g = y.parseInt(g.ya(2));
          "r" == f[0]
            ? ((e.Nd.Fr = h), (e.Nd.zr = g))
            : "p" == f[0] && ((e.Nd.Gr = h), (e.Nd.Cr = g));
        }
        a[e.level] = e;
      }
      c = 2;
      for (b = a.length - 1; c < b; ) c++;
      return a;
    },
    j: Yb,
  };
  $e.__name__ = "121";
  $e.prototype = { j: $e };
  Ha.__name__ = "122";
  Ha.A = v;
  Ha.prototype = t(v.prototype, {
    Gc: function () {
      this.stop = 1;
    },
    H: function () {
      v.prototype.H.call(this);
      this.group.m();
    },
    update: function (a) {
      v.prototype.update.call(this, a);
      switch (this.state) {
        case 0:
          for (var b = 0, c = 0; 3 > c; ) {
            var d = c++;
            var e = this.uc[d];
            if (0 > e.time) ++b;
            else if (((e.lb -= a), !(0 < e.lb))) {
              e.time += a;
              d = e.time / Ha.Hu;
              var f;
              if (2 == this.stop) {
                var g = (f = N.Hi(2)(1 - d));
                1 < d && ((e.time = -1), (f = g = 0));
              } else
                1 < d
                  ? ((e.time = -1), (f = 1))
                  : (f = 1 + Math.sin(N.Py()(d) * Math.PI) * Ha.$t),
                  (g = Math.sin(d * Math.PI));
              e.Ns = e.Vn;
              e.Vn = f;
              e.yl = e.qj;
              e.qj = g;
            }
          }
          3 == b && (this.rs++, (this.state = 2 == this.stop ? 3 : 1));
          break;
        case 1:
          for (c = 0; 3 > c; )
            (d = c++), (e = this.uc[d]), (e.lb = d * Ha.Ut), (e.time = 0);
          this.state = 2;
          this.time = 0;
          break;
        case 2:
          if (
            this.time > Ha.Iu &&
            ((this.state = 0), 1 == this.stop && 0 < this.rs)
          ) {
            for (c = 0; 3 > c; )
              for (d = c++, this.uc[d].Wb.M(!1), a = 0; 3 > a; )
                (e = a++), (this.uc[e].yl = 1), (this.uc[e].qj = 1);
            this.stop = 2;
          }
      }
    },
    pa: function (a) {
      v.prototype.pa.call(this, a);
      for (var b = 0; 3 > b; ) {
        var c = b++;
        c = this.uc[c];
        var d = c.Ns;
        d += (c.Vn - d) * a;
        c.Ob.fa(c.Wb.fa(d));
        d = c.yl;
        d += (c.qj - d) * a;
        2 == this.stop ? c.Ob.Z(d) : c.Wb.Z(d);
      }
      3 == this.state && this.H();
    },
    j: Ha,
  });
  Ze.__name__ = "123";
  Ze.prototype = { j: Ze };
  Pd.__name__ = "124";
  Pd.A = n;
  Pd.prototype = t(n.prototype, {
    next: function () {
      var a = this.P().Dn,
        b = a.length;
      if (0 == b) return this.P().nr;
      if (1 == b) return a[0];
      for (var c = 1, d, e = a.length; 6 >= c; ) {
        d = 0;
        for (var f = !1; d < e; )
          if (a[d++] == c) {
            f = !0;
            break;
          }
        f && this.nk[c]++;
        ++c;
      }
      e = a.length;
      e = 1 == e ? a[0] : a[this.P().bd.Id(0, e - 1)];
      if (0 > this.Wf) return (this.Wf = e), (this.wj = 0), (this.nk[e] = 0), e;
      d = null;
      f = !1;
      for (c = 0; c < b; ) {
        var g = this.nk[a[c]];
        10 <= g &&
          ((e = a[c]),
          null == d && (d = []),
          0 < g && (d.push(a[c]), (f = !0)));
        ++c;
      }
      f && (e = d.pop());
      e == this.Wf && this.wj++;
      if (2 == this.wj) {
        for (b = !1; !b && f && 0 < d.length; )
          (e = d.pop()), e != this.Wf && (b = !0);
        for (c = 0; !b && 100 > c; )
          (e = a.length),
            (e = 1 == e ? a[0] : a[this.P().bd.Id(0, e - 1)]),
            e != this.Wf && (b = !0);
      }
      e != this.Wf && (this.wj = 0);
      this.Wf = e;
      this.nk[e] = 0;
      return e;
    },
    j: Pd,
  });
  Od.__name__ = "125";
  Od.A = n;
  Od.prototype = t(n.prototype, {
    ci: function (a) {
      for (var b = this.Ge.clone(), c = 0; 0 < a; ) {
        --a;
        for (var d = 0, e = -1, f = b.c, g = 0, h = b.g; g < h; ) {
          var k = g++,
            l = f[k];
          l > d && ((d = l), (e = k));
          f[k] = l;
        }
        if (0 > e) break;
        c = e;
        d = b.c;
        d[e] = d[--b.g];
      }
      return c;
    },
    Os: function (a) {
      function b(a, b) {
        n[f >> 1] = !0;
        a = e.get(a, b).code;
        d.Ge.c[a] += 1;
        q |= 1 << a;
      }
      function c() {
        var a = e.get(k, l);
        return 0 < a.code ? 6 >= a.code : !1;
      }
      var d = this,
        e = this.s().ba;
      a && (e = this.Qy());
      this.$u = this.tw(this.border, e);
      var f = 0;
      a = this.$u - 2;
      f += 1;
      var g = this.border[f - 1];
      f += 1;
      var h = this.border[f - 1],
        k = g,
        l = h,
        n = [],
        q = 0,
        p = this.Ge,
        r = p.c,
        t = 0;
      for (p = p.g; t < p; ) {
        var v = t++;
        r[v] = 0;
      }
      for (c() && b(g, h); f < a; )
        (g = k),
          (f += 1),
          (k = this.border[f - 1]),
          (h = l),
          (f += 1),
          (l = this.border[f - 1]),
          c() && b(k, l);
      for (f = 0; f < a; )
        (f += 1),
          (k = this.border[f - 1]),
          (f += 1),
          (l = this.border[f - 1]),
          c() && !n[f >> 1] && e.get(k, l);
      g = a = 0;
      for (h = 1; 6 >= h; )
        (r = this.Ge.c[h]),
          0 < (q & (1 << h)) ? r > a && (a = r) : r > g && (g = r),
          ++h;
      return !0;
    },
    Qy: function () {
      if (null == this.s().Oe(0)) return this.s().ba;
      var a = this.Ii(),
        b = Object.create(db.prototype);
      b.D = new Oe();
      b.ha = new ec(b);
      b.code = this.s().Fe.c[0].code;
      b.Va = a.x;
      b.Ma = a.y;
      this.s().ab.pj(b.ha);
      this.s().Ol(b);
      a = this.Wi(b);
      this.s().ab.removeNode(b.ha);
      return a;
    },
    Ii: function () {
      var a = this.s().ne;
      a.Sb = 0;
      a.Ii(a.F.da, a.F.Oe().aa, 1);
      a = a.result;
      if (null == a.Ke || null == a.Fi) return null;
      var b = a.Fi,
        c = b.b,
        d = b.a;
      b = new r();
      b.b = c;
      b.a = d;
      a = new ib(a.Ke.Va, a.Ke.Ma);
      return (a = this.s().gq(a, b));
    },
    Wi: function (a) {
      function b(a, b) {
        return a.code != b.code || a.D.jd ? !1 : !b.D.jd;
      }
      for (var c = a.ha.qa; null != c; ) {
        if (100 == c.node.ga.code) return this.s().ba;
        c = c.next;
      }
      c = this.s().hh;
      var d = c.Vh();
      c.wr(a, d, b);
      if (3 > d.g) return this.s().ba;
      a = this.s().ba.clone();
      c.iq(d, this.$f, function (a) {
        return 200 != a.code;
      });
      for (var e = d.iterator(); e.Y(); ) {
        var f = e.next();
        f.ha.visible = !1;
        a.Vk(f);
      }
      for (var g = c.hq(this.$f, b).iterator(); g.Y(); )
        for (e = g.next().iterator(); e.Y(); ) (f = e.next()), a.Vk(f);
      for (e = d.iterator(); e.Y(); ) (f = e.next()), (f.ha.visible = !0);
      c.complete();
      return a;
    },
    tw: function (a, b) {
      for (
        var c = null, d = this.s().cols - this.P().Kd, e;
        null == c && -1 < --d;

      )
        for (e = this.s().ic; e <= this.s().hc; ) {
          if (b.Wa(d, e)) {
            c = b.get(d, e);
            break;
          }
          ++e;
        }
      if (null == c) return 0;
      this.vk.Uq = this.s().cd;
      this.vk.Jm = b;
      return this.vk.Yx(new ib(c.Va, c.Ma), a);
    },
    j: Od,
  });
  T.__name__ = "126";
  T.load = function () {
    var a = sa.get("SmartyBubbles2");
    if (null == a) T.save();
    else
      try {
        var b = O.ja,
          c = JSON.parse(a),
          d = b(c, "version");
        null == d
          ? T.save()
          : ((T.Bh = b(c, "sound")),
            (T.$d = b(c, "highscore")),
            Object.prototype.hasOwnProperty.call(c, "level") &&
              (T.level = b(c, "level")),
            1 > d && T.save());
      } catch (e) {
        T.save();
      }
  };
  T.save = function () {
    var a = { version: 1 };
    a.sound = T.Bh;
    a.highscore = T.$d;
    a.level = T.level;
    sa.set("SmartyBubbles2", JSON.stringify(a));
  };
  var S = (Te.SmartyBubbles2 = function () {
    this.Qs = null;
    ca.call(this);
  });
  S.__name__ = "127";
  S.R = Te.SmartyBubbles2.init = function (a) {
    sa.wq = lg.km;
    ca.language = a;
    ca.lr = 9;
    ca.sp = [20];
    new S();
  };
  S.A = ca;
  S.prototype = t(ca.prototype, {
    ready: function () {
      var a = this;
      jb.R("smarty-bubbles-2", 1, !1, !0);
      ma.R();
      ma.jn = function () {
        ta.Yd().pe(0);
      };
      ma.Do = function () {
        ta.Yd().pe(1);
      };
      ma.freeze = function () {
        a.pg.stop();
        Y.Ya().disable();
        Y.wm().disable();
      };
      ma.Ft = function () {
        a.pg.start();
        Y.Ya().enable();
        Y.wm().enable();
      };
      wa.gz(Ic);
      wa.mg(null, Hc, null);
      var b = new od();
      wa.mg(Za, fb, b);
      wa.mg(fb, rc, b);
      wa.mg(rc, Za, b);
      wa.mg(Gc, Za, b);
      S.Ea.tb.appendChild(M.Pe().node);
      this.N(new Rd(S.Ea));
      T.load();
      this.ws();
    },
    update: function (a) {
      ca.prototype.update.call(this, a);
      S.Ea.update(a);
    },
    pa: function (a) {
      ca.prototype.pa.call(this, a);
      S.Ea.pa();
    },
    Om: function (a) {
      var b = this;
      ca.prototype.Om.call(this, function () {
        null != b.Tk && (b.Tk.Is = !1);
        a();
      });
    },
    Nm: function () {
      ca.prototype.Nm.call(this);
    },
    Vq: function () {
      var a = this;
      S.Ea = new Yf();
      S.Ea.Ar = 1;
      S.Ea.i = 3;
      var b = 0.00392156862745098 * oc.qf(0),
        c = 0.00392156862745098 * oc.qf(150),
        d = 0.00392156862745098 * oc.qf(255),
        e = new G();
      e.b = 0.00392156862745098 * oc.qf(87);
      e.a = b;
      e.f = c;
      e.d = d;
      S.Ea.color = e;
      S.Ea.Vr = function (b) {
        a.Cb(43, fa.Fb(["bounds", kb.ly(0, 0, b.b, b.a)]));
      };
      S.Ea.Wr = function (b) {
        b
          ? (a.Cb(44),
            ma.paused || (a.pg.start(), Y.Ya().enable()),
            ma.muted || Eb.Mh || ta.Yd().pe(1))
          : (a.Cb(45), a.pg.stop(), ta.Yd().pe(0), Y.Ya().disable());
      };
      S.Ea.nx();
      S.Ea.window.up();
    },
    zn: function () {
      ca.prototype.zn.call(this);
      this.po();
      Y.Ya().m();
      Y.wm().m();
      S.Ea.window.Cc();
      new cf();
    },
    xn: function () {
      var a = Sa.Ca();
      this.N(a);
      $a.vr("RobotoSlab-Black@#FFFFFF", 15);
      $a.vr("RobotoSlab-Black@#FFED38", 13);
      this.N(new yb());
      a.qA(Hc);
    },
    po: function () {
      null == this.Qs &&
        S.Ea.window instanceof ea &&
        (this.Qs = B.Ta(S.Ea.window, ea).po(0.1));
    },
    j: S,
  });
  Lc.__name__ = "128";
  Lc.A = n;
  Lc.prototype = t(n.prototype, {
    Wi: function (a) {
      this.result = new Xe();
      var b = this.s().hh,
        c = this.$f;
      c.g = 0;
      if (99 == a.code) return this.result.If.add(a), this.result;
      var d = this.wA(a),
        e = null;
      if (null != d) {
        e = [];
        for (c = d.ha.iterator(); c.Y(); ) {
          var f = c.next();
          this.gr(f) && (this.$f.add(f), e.push(f));
        }
        d.disconnect();
        this.result.si++;
      } else if (1 == this.P().Rl()) return (this.result.$p = !0), this.result;
      f = b.Vh();
      b.wr(a, f, this.xr);
      if (3 <= f.g) {
        c = b.Op();
        c.add(f);
        for (f = c.iterator(); f.Y(); )
          (d = f.next()), b.iq(d, this.$f, this.gr);
        this.pop(a, c);
      } else
        null != d &&
          (a.disconnect(),
          (a.D.tc = !0),
          (c = this.result.If),
          c.g == c.u && c.O(),
          (c.c[c.g++] = a));
      if (null != e)
        for (a = 0; a < e.length; )
          (f = e[a]),
            ++a,
            f.D.tc ||
              ((f.D.tc = !0),
              (f.client.ub = 0),
              (c = this.result.ff),
              c.g == c.u && c.O(),
              (c.c[c.g++] = f));
      this.Yh(this.$f);
      b.complete();
      this.s().trim();
      this.s().gj();
      b = 1;
      e = this.result.ff.g + this.result.If.g;
      5 < e && ((b = Qa.map(e, 5, 40, 1, 0.5)), 0.5 > b && (b = 0.5));
      for (c = this.result.ff.iterator(); c.Y(); )
        (f = c.next()),
          (e = f.client),
          (e.ub *= b),
          e.mp || this.result.si++,
          f.disconnect();
      for (c = this.result.If.iterator(); c.Y(); )
        (f = c.next()),
          (e = f.client),
          (e.ub *= b),
          e.mp || this.result.si++,
          f.disconnect();
      return this.result;
    },
    Yh: function (a) {
      var b = [];
      for (a = this.s().hh.hq(a, this.xr).iterator(); a.Y(); ) {
        for (
          var c = a.next(), d = [], e = 0, f = 0, g = c.iterator();
          g.Y();

        ) {
          var h = g.next();
          if (!h.D.tc) {
            var k = h.client;
            k.ub > f && (f = k.ub);
            h.depth > e && (e = h.depth);
          }
        }
        for (c = c.iterator(); c.Y(); )
          (e = c.next()),
            e.D.tc ||
              (this.eo(e, e.client.vd, f),
              (g = this.result.If),
              g.g == g.u && g.O(),
              (g.c[g.g++] = e),
              d.push(e));
        b.push(d);
      }
      this.result.Ox = b;
    },
    pop: function (a, b) {
      function c(b) {
        for (var c = null, d = 0, e = b.g; d < e; ) {
          var f = d++;
          f = b.c[f];
          f.ha.oa = !1;
          for (f = f.ha.qa; null != f; )
            (f.node.oa = !1),
              null == c && f.node.ga == a && (c = f.node.ga),
              (f = f.next);
        }
        return c;
      }
      for (var d = this, e = this.s().ab, f = b.iterator(); f.Y(); ) {
        var g = f.next();
        for (g = g.iterator(); g.Y(); ) {
          var h = g.next();
          h.D.tc = !0;
        }
      }
      this.nz();
      for (f = b.iterator(); f.Y(); ) {
        g = f.next();
        var k = c(g);
        var l = 1;
        e.Wu(
          !0,
          k.ha,
          (function (a, b) {
            return function (c, e) {
              c = c.ga;
              if (e) return c.D.tc;
              l += 1;
              d.eo(c, l - 1, b[0]);
              a[0] *= 0.9;
              b[0] += a[0];
              return !0;
            };
          })([0.1], [0])
        );
      }
      k = new ed();
      e.clearMarks();
      for (f = b.iterator(); f.Y(); )
        for (g = f.next(), g = g.iterator(); g.Y(); )
          (h = g.next()),
            h.D.tc &&
              (k.u == k.g && k.O(),
              (k.c[(k.g++ + k.Ia) % k.u] = h),
              (h.ha.oa = !0),
              (h.depth = 0));
      for (f = 0; 0 < k.g; ) {
        if (1e4 < f++) throw q.G("bail out");
        g = k.c[k.Ia++];
        k.Ia == k.u && (k.Ia = 0);
        k.g--;
        e = B.Ta(g.client, $b);
        for (h = g.ha.qa; null != h; ) {
          if (
            !h.node.ga.D.tc &&
            200 != h.node.ga.code &&
            h.node.ga.client.vd < e.vd
          ) {
            this.eo(h.node.ga, e.vd, e.ub);
            0 == h.node.ga.depth && (h.node.ga.depth = g.depth + 1);
            var n = h.node.ga;
            k.u == k.g && k.O();
            k.c[(k.g++ + k.Ia) % k.u] = n;
          }
          h = h.next;
        }
      }
      k = this.result.ff;
      k.g = 0;
      for (f = b.iterator(); f.Y(); )
        for (g = f.next(), g = g.iterator(); g.Y(); )
          (h = g.next()),
            (h.ha.visible = !1),
            (k = this.result.ff),
            k.g == k.u && k.O(),
            (k.c[k.g++] = h);
    },
    wA: function (a) {
      for (a = a.ha.qa; null != a; ) {
        var b = a.node.ga;
        if (100 == b.code) return (this.result.target = b);
        a = a.next;
      }
      return null;
    },
    eo: function (a, b, c) {
      a = a.client;
      a.vd = b;
      a.ub = c;
    },
    nz: function () {
      var a = this.s().ob,
        b = a.c,
        c = 0;
      for (a = a.g; c < a; ) {
        var d = c++;
        d = b[d];
        d.client.vd = 0;
        d.depth = 0;
      }
    },
    j: Lc,
  });
  Xe.__name__ = "129";
  Xe.prototype = { j: Xe };
  z.__name__ = "12A";
  z.play = function (a, b, c, d) {
    null == d && (d = 0);
    null == c && (c = !1);
    null == b && (b = !1);
    return T.Bh ? ta.Yd().play(a, b, c, d) : -1;
  };
  z.oB = function () {
    return [1040, 1041, 1042, 1043];
  };
  z.nB = function () {
    return [1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010];
  };
  We.__name__ = "12B";
  We.prototype = { j: We };
  mb.__name__ = "12C";
  mb.A = v;
  mb.prototype = t(v.prototype, {
    H: function () {
      v.prototype.H.call(this);
      this.o.m();
      this.dj = null;
    },
    update: function (a) {
      v.prototype.update.call(this, a);
      switch (this.state) {
        case 0:
          this.offset++;
          4 == this.offset && (this.offset = 0);
          this.pf = 0.2 + 0.5 * Math.random();
          this.sA = 60 + 100 * Math.random() * (1 - this.pf);
          this.duration = 1 + Math.random();
          this.nb = 1 + 2 * Math.random();
          this.time = 0;
          this.o.M(!0);
          this.state = 1;
          break;
        case 1:
          this.nb -= a;
          if (0 < this.nb) return;
          this.time = 0;
          this.state = 2;
          break;
        case 2:
          (a = this.time / this.duration),
            (a = 1 > a ? a : 1),
            this.o.fa(Math.sin(a * Math.PI) * this.pf),
            this.o.dl(a * this.sA),
            this.o.Z(Math.sin(a * Math.PI)),
            1 == a && ((this.state = 0), this.o.M(!1));
      }
      this.o.X(this.dj.Aa + mb.Ur[this.offset << 1] * this.dj.xa);
      this.o.V(this.dj.ra + mb.Ur[(this.offset << 1) + 1] * this.dj.xa);
    },
    j: mb,
  });
  Nd.__name__ = "12D";
  Nd.A = v;
  Nd.prototype = t(v.prototype, {
    update: function (a) {
      v.prototype.update.call(this, a);
      this.time >= this.$l && ((a = this.Ap), (this.Ap = null), this.H(), a());
    },
    j: Nd,
  });
  $a.__name__ = "12E";
  $a.vr = function (a, b) {
    $a.cq.C[a] = b;
  };
  $a.prototype = {
    xd: function () {},
    create: function () {
      function a(a, b) {
        Object.prototype.hasOwnProperty.call(a, "s")
          ? b.fa(O.ja(a, "s"))
          : (Object.prototype.hasOwnProperty.call(a, "sx") &&
              b.qe(O.ja(a, "sx")),
            Object.prototype.hasOwnProperty.call(a, "sy") &&
              b.Pc(O.ja(a, "sy")));
      }
      function b(a, b) {
        b.X(Object.prototype.hasOwnProperty.call(a, "x") ? O.ja(a, "x") : 0);
        b.V(Object.prototype.hasOwnProperty.call(a, "y") ? O.ja(a, "y") : 0);
      }
      null == $a.json && ($a.json = JSON.parse(l.getData(8)));
      for (var c = 0, d = O.ja($a.json, this.pk); c < d.length; ) {
        var e = d[c];
        ++c;
        var f = O.ja(e, "texture");
        if (null != f) {
          if ("placeholder" == f) {
            f = new X(null, this.group);
            f.node.name = O.ja(e, "frame");
            b(e, f);
            a(e, f);
            continue;
          }
          var g = f + ".png";
          g = l.Ne(g);
          0 > g && ((g = f + ".jpg"), (g = l.Ne(f + ".png")));
          f = O.ja(e, "frame");
          if (null != f && null == Z.Rb(g, f)) continue;
          f = new P(this.group, g, f);
          b(e, f);
          a(e, f);
          g = O.ja(e, "id");
          if (null != g) {
            var h = new Q("(\\w+)_button$", "");
            h.match(g) ? this.xd(h.ya(1), f) : (f.node.name = g);
          }
        }
        null != O.ja(e, "text") &&
          ((f =
            $a.cq.C[y.Ja(O.ja(e, "face")) + "@" + y.Ja(O.ja(e, "fillColor"))]),
          (f = new Oa(this.group, f)),
          (f.node.name = O.ja(e, "id")),
          b(e, f),
          f.yh(O.ja(e, "w"), O.ja(e, "h")),
          f.Ti(O.ja(e, "size")),
          f.dc(f.node.name),
          f.uz(
            Object.prototype.hasOwnProperty.call(e, "align")
              ? O.ja(e, "align")
              : -1
          ));
      }
      return this.group;
    },
    Ec: function (a) {
      return this.group.Ad(a);
    },
    Qe: function (a) {
      return B.Ta(this.group.Ad(a), Oa);
    },
    dc: function (a, b) {
      var c = this.group.Ad(a);
      null != c && (c.dc(y.Ja(b)), c.kt(), (this.yA.C[a] = c));
      return c;
    },
    j: $a,
  };
  Md.__name__ = "12F";
  Md.A = n;
  Md.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.yd = new P(this.v().Zb(4), 5, "crosshair");
      this.yd.Z(0);
      Y.Ya().la(D(this, this.Kc));
      this.v().la(this);
    },
    H: function () {
      Y.Ya().detach(D(this, this.Kc));
      n.prototype.H.call(this);
    },
    handle: function (a) {
      7 == a.type && this.H();
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      this.alpha += this.cm / 20;
      1 < this.alpha && (this.alpha = 1);
      0 > this.alpha && (this.alpha = 0);
      switch (this.v().Tb.state) {
        case 0:
        case 1:
        case 2:
        case 6:
        case 8:
          this.visible = !1;
          break;
        default:
          this.visible = !0;
      }
      this.Mg *= 0.9;
      this.s().ne.Sb = 0;
      var b = this.s().ne;
      a = this.s().da;
      var c = new G();
      c.b = a.b;
      c.a = a.a;
      c.f = a.f;
      c.d = a.d;
      b.Ii(c, 1, 1);
      a = this.s().ne.result.$h;
      b = 0 < Y.Ya().eg ? 1 : 0;
      c = a.c[2] - a.c[0];
      var d = a.c[3] - a.c[1];
      a = Math.sqrt(c * c + d * d);
      0 < a && ((c /= a), (d /= a));
      a = this.Yb;
      var e = Y.Ya().Vj();
      a.b = e.b;
      a.a = e.a;
      this.s().Yn(this.Yb);
      this.Yb.b += 2 * c * b;
      this.Yb.a += 2 * d * b;
      this.Yb.b = this.s().viewport.vo(this.Yb.b);
      this.Yb.a = this.s().viewport.wc(this.Yb.a);
      a = this.s().viewport.$;
      this.Yb.b = Math.max(a.b, this.Yb.b);
      this.Yb.b = Math.min(a.f, this.Yb.b);
    },
    pa: function (a) {
      n.prototype.pa.call(this, a);
      if (this.P().paused) this.yd.Z(0);
      else if (this.P().Nh || !this.ae)
        this.yd.X(this.Yb.b),
          this.yd.V(this.Yb.a),
          this.yd.Z(this.alpha),
          this.yd.fa(this.Ev()),
          this.yd.Pa(),
          this.yd.Db(),
          this.yd.M(this.visible);
    },
    Kc: function (a) {
      if (!this.P().paused)
        switch (a.type) {
          case 0:
            if (this.v().Fn()) break;
            this.Mg = this.cm = 1;
            break;
          case 1:
            this.cm = -1;
        }
    },
    Ev: function () {
      var a = (2 * this.s().viewport.zoom) / this.yd.J.b,
        b = this.P().level.Da.cg;
      10 > b && ((b = Qa.map(10 - b, 4, 1, 0.6, 0.9)), (a *= b));
      return (a += this.Mg);
    },
    j: Md,
  });
  Ld.__name__ = "130";
  Ld.A = n;
  Ld.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.v().la(this);
      this.text = new Oa(this.v().Zb(6), 18);
      this.text.M(!1);
    },
    H: function () {
      n.prototype.H.call(this);
      this.text.m();
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 27:
          this.dA(y.Ja(this.P().level.Da.level));
          break;
        case 28:
          this.Gc();
          break;
        case 33:
          this.Gc();
      }
    },
    dA: function (a) {
      this.text.M(!0);
      var b = this.v().ye,
        c = this.s().viewport.zoom;
      this.text.Ti((3 * c) | 0);
      this.text.yh(0.8 * b.b, 4 * c);
      this.text.dc(a);
      this.text.kt();
      this.text.X(b.b / 2 - this.text.Bd() / 2);
      this.text.Z(0);
      this.time = 0;
      this.state = 1;
    },
    Gc: function () {
      this.state = 2;
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      this.Lq && ((this.lb -= a), 0 >= this.lb && (this.Gc(), (this.Lq = !1)));
      switch (this.state) {
        case 1:
          this.text.V(this.s().viewport.wc(this.s().Zd()));
          a = this.text;
          a.Z(a.Za + 0.1);
          break;
        case 2:
          this.text.V(this.s().viewport.wc(this.s().Zd())),
            (a = this.text),
            a.Z(0.85 * a.Za),
            0.01 > this.text.Za && (this.text.M(!1), (this.state = 0));
      }
    },
    j: Ld,
  });
  Kd.__name__ = "131";
  Kd.A = n;
  Kd.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.v().la(this);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      34 == a.type && (0 < this.P().pm() && this.N(new Jd()), (this.nb = !0));
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      !this.nb || 0 < this.xm() || (this.v().ka(35), (this.nb = !1));
    },
    j: Kd,
  });
  Xb.__name__ = "132";
  Xb.A = n;
  Xb.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.group = new X(null, this.v().Zb(6));
      this.group.M(!1);
      var a = this.s().viewport,
        b = a.zoom;
      a = a.Gb();
      kb.th(a, 0.5, !0);
      a.d = a.a + 3 * b;
      b = this.v().rb.Pg(0).$.d;
      var c = a.d - a.a;
      a.a = b;
      a.d = b + c;
      this.icon = new P(this.group, 5, this.frame);
      this.icon.Pa();
      this.icon.Db();
      this.icon.X(a.b + 0.5 * (a.f - a.b) - (a.f - a.b) / 4);
      this.icon.V(a.a + 0.5 * (a.d - a.a));
      this.icon.fa((a.d - a.a) / this.icon.J.a / 2);
      this.Rf = this.icon.xa;
      b = "" + this.P().Gq();
      this.text = new Oa(this.group, 18);
      this.text.yh((a.f - a.b) / 2, (a.d - a.a) / 2);
      this.text.dc(b);
      this.text.Ti(((a.d - a.a) / 2) | 0);
      b = a.a;
      c = a.f;
      var d = a.d,
        e = new G();
      e.b = a.b;
      e.a = b;
      e.f = c;
      e.d = d;
      e.b = a.b + 0.5 * (a.f - a.b);
      this.text.Oh(e, 0, 0);
    },
    H: function () {
      n.prototype.H.call(this);
      this.group.m();
    },
    j: Xb,
  });
  Jd.__name__ = "133";
  Jd.A = Xb;
  Jd.prototype = t(Xb.prototype, {
    update: function (a) {
      Xb.prototype.update.call(this, a);
      switch (this.state) {
        case 0:
          if (this != this.parent.firstChild) break;
          this.group.M(!0);
          this.time = 0;
          this.kc = this.P().kc;
          this.state++;
          this.v().ka(37);
          break;
        case 1:
          var b = this.time / 1.4;
          a = 1 > b ? b : 1;
          this.v().ka(38, fa.Fb(["t", a]));
          var c = this.icon,
            d = N.sd(0.1);
          b = this.time / 0.4;
          c.fa(d(1 > b ? b : 1) * this.Rf);
          b = this.P().Gq();
          this.text.dc("" + Math.round(b - a * b));
          c = this.kc;
          d = Math.round(a * b);
          this.P().kc = c + d;
          this.v().ka(10);
          1 == a &&
            (this.state++,
            (this.time = 0),
            (this.P().kc = this.kc),
            this.P().xg(b),
            this.v().ka(39));
          break;
        case 2:
          if (0.5 > this.time) break;
          this.state++;
          this.time = 0;
          break;
        case 3:
          (b = this.time / 0.2),
            (a = 1 > b ? b : 1),
            this.group.Z(1 - N.qd(2)(a)),
            1 == a && this.H();
      }
    },
    j: Jd,
  });
  Id.__name__ = "134";
  Id.A = n;
  Id.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.v().la(this);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      1 == a.type && this.Qu();
    },
    update: function (a) {
      n.prototype.update.call(this, a);
    },
    Qu: function () {
      for (var a = this.v().rb.vj, b = 1, c = this.s().ta.g; b < c; ) {
        var d = b++,
          e = this.s().Oe(d),
          f = e.Le(cb);
        if (0 == a) {
          d = 1.25 * (d - 1);
          var g = 2;
        } else (d = 2 + 1.25 * (d - 1)), (g = 0);
        f.Ud.b = d;
        f.Ud.a = g;
        e.rc(zb);
      }
    },
    j: Id,
  });
  Wb.__name__ = "135";
  Wb.A = n;
  Wb.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.v().la(this);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 5:
          var b = a.get("bubble"),
            c = b.client,
            d = c.sc;
          c = c.wh;
          if (200 == b.code) break;
          if (100 == b.code) {
            this.N(new Hd(d, c, this.P().ww()));
            break;
          }
          a = a.get("burstIndex");
          a = this.P().ai(a);
          0 < a && this.N(new gb(d, c, a));
          break;
        case 22:
          (a = this.P().vq()),
            (c = this.s().ah.client),
            (d = c.sc),
            (c = c.wh),
            this.N(new Gd(d, c, a));
      }
    },
    j: Wb,
  });
  gb.__name__ = "136";
  gb.A = n;
  gb.prototype = t(n.prototype, {
    H: function () {
      this.o.m();
      n.prototype.H.call(this);
      Wb.count--;
    },
    W: function () {
      n.prototype.W.call(this);
      40 > this.aa && (this.aa = 40);
      var a = this.B.b - this.aa,
        b = this.B.a - this.aa,
        c = this.B.b + this.aa,
        d = this.B.a + this.aa;
      this.o = new Oa(this.v().Zb(6), this.sm());
      var e = (1.5 * this.aa * this.rm()) | 0;
      this.o.yh(2 * e, e);
      this.o.dc("" + this.value);
      this.o.Ti(e >> 1);
      e = this.o;
      var f = new G();
      f.b = a;
      f.a = b;
      f.f = c;
      f.d = d;
      e.Oh(f, 0, 0);
      a = 0.25 * this.s().viewport.zoom;
      0 > this.o.Aa
        ? this.o.X(a)
        : ((b = this.o.Bd()),
          (c = this.v().ye.b),
          this.o.Aa + b > c && this.o.X(c - b - a));
      this.tl = this.Rd = this.o.ra;
      this.alpha = 1;
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      this.tl = this.Rd;
      this.Rd -= 0.5;
      this.time > (1e3 > this.value ? 0.5 : 1) &&
        ((this.alpha -= 0.1), 0.005 >= this.alpha && this.H());
    },
    pa: function (a) {
      n.prototype.pa.call(this, a);
      this.o.V(this.Rd * a + this.tl * (1 - a));
      this.o.Z(this.alpha);
    },
    sm: function () {
      return 1e3 <= this.value ? 18 : 19;
    },
    rm: function () {
      return 1;
    },
    j: gb,
  });
  Hd.__name__ = "137";
  Hd.A = gb;
  Hd.prototype = t(gb.prototype, {
    update: function (a) {
      this.time += a;
      this.tl = this.Rd;
      this.Rd -= 0.25;
      2 < this.time && ((this.alpha -= 0.1), 0.005 >= this.alpha && this.H());
    },
    sm: function () {
      return 18;
    },
    rm: function () {
      return 2;
    },
    j: Hd,
  });
  Gd.__name__ = "138";
  Gd.A = gb;
  Gd.prototype = t(gb.prototype, {
    W: function () {
      gb.prototype.W.call(this);
      this.o.Pa();
      this.Ef = this.P().Ef;
    },
    update: function (a) {
      this.time += a;
      a = this.time / 0.25;
      this.o.fa(N.sd(0.1 + 0.02 * this.Ef)(1 > a ? a : 1));
      this.tl = this.Rd;
      this.Rd -= 0.25;
      1 < this.time && ((this.alpha -= 0.1), 0.005 >= this.alpha && this.H());
    },
    sm: function () {
      return 18;
    },
    rm: function () {
      return 2;
    },
    j: Gd,
  });
  Fd.__name__ = "139";
  Fd.A = n;
  Fd.prototype = t(n.prototype, {
    H: function () {
      n.prototype.H.call(this);
      Y.Ya().detach(D(this, this.Kc));
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      (!this.P().Nh && this.ae) || this.s().Oz(Y.Ya().Vj());
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      3 == a.type && ((this.Lk = !1), (this.P().Nh = !0));
    },
    Kc: function (a) {
      if (2 != a.type && !this.P().paused && !this.P().Hj && 3 != a.id)
        switch (a.type) {
          case 0:
            if (this.v().Fn()) {
              this.Lk = !0;
              this.P().Nh = !1;
              break;
            }
            this.P().Nh = !0;
            break;
          case 1:
            if (this.Lk || this.v().Fn()) this.Lk = this.P().Nh = !1;
            else {
              var b = a.x | 0;
              a = a.y;
              (2 <= this.P().fe && this.s().Hy(0, b, a | 0, 2)) ||
                this.v().ka(17);
            }
        }
    },
    j: Fd,
  });
  Ed.__name__ = "13A";
  Ed.A = n;
  Ed.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      if (!Z.Wa(65537)) {
        for (
          var a = window.document.createElement("canvas"),
            b = (a.width = 256),
            c = (a.height = 1024),
            d = a.getContext("2d", null),
            e = ["#ffffff", "#0099a3", "#0078ff", "#01409e", "#570096"],
            f = d.createLinearGradient(0, 0, 0, c),
            g = 0,
            h = e.length;
          g < h;

        ) {
          var k = g++;
          f.addColorStop(k / (e.length - 1), e[k]);
        }
        d.fillStyle = f;
        d.fillRect(0, 0, b, c);
        d.fill();
        S.Ea.Sa.createTexture(65537, a);
      }
      a = B.Ta(M.Pe().Ad("bg"), X);
      this.group = new X(null, a);
      this.o = new P(this.group, 65537);
      this.v().la(this);
      this.o.Z(0);
      this.state = 1;
    },
    H: function () {
      n.prototype.H.call(this);
      this.group.m();
      this.o = this.group = null;
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 1:
          this.resize();
          this.move();
          break;
        case 7:
          this.state = 2;
      }
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      switch (this.state) {
        case 0:
          this.move();
          break;
        case 1:
          a = this.o;
          a.Z(a.Za + 0.05);
          1 == this.o.Za && (this.state = 0);
          break;
        case 2:
          (a = this.o), a.Z(a.Za - 0.05), 0 == this.o.Za && (this.state = 0);
      }
    },
    move: function () {
      var a = -(this.s().da.a - this.mx) / this.maxDistance;
      this.o.V(-this.o.nd());
      var b = this.o;
      b.V(b.ra + 2 * this.v().ye.a);
      a *= this.o.nd();
      b = this.o;
      b.V(b.ra + a);
    },
    resize: function () {
      this.mx = this.P().Sj.ei(1).Jf;
      this.maxDistance = this.P().Fv();
      this.o.Pc((this.maxDistance / 1024) * this.s().viewport.zoom);
      this.o.qe(this.v().ye.b / this.o.J.b);
    },
    j: Ed,
  });
  Dd.__name__ = "13B";
  Dd.A = n;
  Dd.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.sx(2);
      this.text.set("1");
      this.v().la(this);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 1:
          a = this.v().rb.Pg(1);
          this.text.gc(a);
          break;
        case 7:
          this.v().detach(this);
          break;
        case 27:
          (a = y.Ja(this.v().Tb.level.Da.level)),
            this.text.set(a),
            this.text.pop();
      }
    },
    sx: function (a) {
      null != this.text && this.text.H();
      this.text = new sc(a);
      this.v().Zb(5).appendChild(this.text.group);
      this.N(this.text);
    },
    j: Dd,
  });
  Jc.__name__ = "13C";
  Jc.A = n;
  Jc.prototype = t(n.prototype, {
    bc: function (a) {
      return this.button.bc(a);
    },
    H: function () {
      this.button.H();
      n.prototype.H.call(this);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 1:
          this.button.Ld(this.v().rb.Pg(3).$);
          break;
        case 3:
          this.button.Vi.reset();
          this.button.cl(!0);
          break;
        case 7:
          this.button.cl(!1);
          this.button.M(!1);
          break;
        case 48:
          this.v().pause();
      }
    },
    j: Jc,
  });
  Cd.__name__ = "13D";
  Cd.A = n;
  Cd.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.text = new sc(3);
      this.text.set("0%");
      this.v().Zb(5).appendChild(this.text.group);
      this.N(this.text);
      this.v().la(this);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 1:
          a = this.v().rb.Pg(2);
          this.text.gc(a);
          break;
        case 7:
          this.v().detach(this);
          break;
        case 10:
          this.ue = this.v().Tb.Qg();
          break;
        case 20:
          1 == this.P().Qg() && this.text.wp();
          break;
        case 32:
          this.text.set("0%"), (this.Mk = this.ratio = this.ue = 0);
      }
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      this.ratio += 0.1 * (this.ue - this.ratio);
      a = Math.round(100 * this.ratio);
      if (a != this.Mk) {
        var b = !1;
        10 <= a && 10 > this.Mk && (b = !0);
        this.Mk = a;
        var c = (null == a ? "null" : "" + a) + "%";
        100 == a && (c = "100");
        this.text.set(c);
        b && this.text.align();
      }
    },
    j: Cd,
  });
  Bd.__name__ = "13E";
  Bd.A = n;
  Bd.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.v().la(this);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      20 == a.type && 1 == this.P().Qg() && (this.state = 1);
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      a = this.s().viewport;
      if (null != this.icon) {
        var b = this.icon;
        b.V(b.ra - 0.01 * this.s().viewport.zoom);
      }
      null != this.text &&
        ((b = this.text), b.V(b.ra - 0.01 * this.s().viewport.zoom));
      switch (this.state) {
        case 1:
          this.icon = new P(this.v().Zb(6), 5, "perfect");
          b = a.$;
          this.icon.X(b.b + 0.5 * (b.f - b.b));
          this.icon.V(a.wc(this.s().Zd() + 2));
          this.icon.fa(0.1);
          this.icon.Z(0);
          this.icon.Db();
          this.icon.Pa();
          this.state++;
          this.time = 0;
          break;
        case 2:
          a = this.time / 0.5;
          a = 1 > a ? a : 1;
          this.icon.fa(N.sd(0.2)(a) * this.Fq());
          this.icon.Z(N.qd(2)(a));
          1 == a && (this.state++, (this.time = 0));
          break;
        case 3:
          if (1 > this.time) break;
          this.state++;
          this.time = 0;
          this.gA();
          this.P().xg(this.P().Aq());
          this.v().ka(36);
          break;
        case 4:
          a = this.time / 0.5;
          a = 1 > a ? a : 1;
          this.icon.fa((1 - N.qd(2)(a)) * this.Fq());
          this.icon.Z(1 - a);
          this.text.fa(N.sd(0.2)(a));
          1 == a && (this.icon.m(), this.state++);
          break;
        case 5:
          if (0.5 > this.time) break;
          this.state++;
          this.time = 0;
          break;
        case 6:
          (a = this.time / 1),
            (a = 1 > a ? a : 1),
            this.text.Z(1 - a),
            1 == a && (this.text.m(), (this.state = 0));
      }
    },
    gA: function () {
      this.text = new Oa(this.icon.Hb(), 18);
      var a = this.s().viewport.zoom;
      this.text.yh(8 * a, 4 * a);
      this.text.dc(y.Ja(this.P().Aq()));
      this.text.Ti((2 * a) | 0);
      var b = this.text,
        c = this.icon.ra - a,
        d = this.icon.Aa + a,
        e = this.icon.ra + a,
        f = new G();
      f.b = this.icon.Aa - a;
      f.a = c;
      f.f = d;
      f.d = e;
      b.Oh(f, 0, 0);
      this.text.Pa();
      this.text.fa(0.1);
    },
    Fq: function () {
      return ((2 * this.s().viewport.zoom) / this.icon.J.b) * 1.25;
    },
    j: Bd,
  });
  Ad.__name__ = "13F";
  Ad.A = n;
  Ad.prototype = t(n.prototype, {
    H: function () {
      for (var a = 0, b = this.vb; a < b.length; ) {
        var c = b[a];
        ++a;
        c.m();
      }
      n.prototype.H.call(this);
    },
    W: function () {
      n.prototype.W.call(this);
      this.vb = [];
      Z.Wa(65538) || this.tx();
      var a = this.v().Zb(0);
      this.vb.push(new P(a, 65538));
      this.vb.push(new P(a, 65538));
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      if (1 == a.type) {
        a = this.v().F.viewport.$;
        var b = 10 < a.b,
          c = this.v().ye.a;
        this.vb[0].X(a.b);
        this.vb[0].Pc(c / 100);
        this.vb[0].M(b);
        this.vb[1].Pc(c / 100);
        this.vb[1].X(a.f);
        this.vb[1].M(b);
      }
    },
    tx: function () {
      var a = window.document.createElement("canvas"),
        b = a.getContext("2d", null);
      b.lineWidth = 1;
      b.strokeStyle = "rgba(255,255,255,0.5)";
      b.beginPath();
      b.moveTo(1, 0);
      b.lineTo(1, 128);
      b.closePath();
      b.stroke();
      S.Ea.Sa.createTexture(65538, a);
    },
    j: Ad,
  });
  zd.__name__ = "140";
  zd.A = n;
  zd.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      var a = this.v().Zb(5);
      this.text = new sc(7);
      this.text.set(dg.repeat("0", 7));
      this.N(this.text);
      a.appendChild(this.text.group);
      this.v().la(this);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 1:
          a = this.v().rb.Pg(0);
          this.text.gc(a);
          break;
        case 2:
          (2 != this.v().rb.mode && 1 != this.v().rb.mode) ||
            this.v().Cb(57, fa.Fb(["scale", this.text.group.xa]));
          break;
        case 7:
          this.v().detach(this);
          break;
        case 10:
          a = y.Ja(this.v().Tb.kc);
          for (var b = 7 - a.length; 0 < b--; ) a = "0" + a;
          this.text.set(a);
          break;
        case 22:
        case 36:
        case 39:
          this.text.wp();
      }
    },
    j: zd,
  });
  yd.__name__ = "141";
  yd.A = n;
  yd.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.v().la(this);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 4:
          this.play(z.bu);
          break;
        case 5:
          var b = a.get("burstIndex");
          if (-1 == b) break;
          a = a.get("bubble");
          if (100 == a.code) {
            this.play(z.Eu, !0);
            break;
          }
          1e3 <= this.P().ai(b) && 0 == this.Il
            ? (this.play(z.cu), this.Il++)
            : this.play(z.du);
          break;
        case 6:
          this.play(z.su);
          break;
        case 8:
          this.play(z.iu, !0);
          break;
        case 11:
          this.play(z.hu, !0);
          break;
        case 12:
          this.P().Xl && this.play(z.mu);
          break;
        case 14:
          this.play(z.au);
          break;
        case 18:
          this.play(z.ju, !0);
          this.Il = 0;
          break;
        case 20:
          1 == this.P().Qg() ? this.play(z.ru, !0) : this.play(z.qu, !0);
          break;
        case 21:
          8 <= a.get("result").ff.g && this.play(z.uu, !0);
          break;
        case 22:
          b = a.get("combo");
          b -= 2;
          3 < b && (b = 3);
          this.play([1040, 1041, 1042, 1043][b], !0);
          break;
        case 24:
          a = a.get("bubble");
          if (200 == a.code)
            (b = a.Ma),
              b > this.Ee &&
                ((this.Ee = b),
                8 < this.uj
                  ? this.play(z.ep)
                  : this.play(
                      [1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010][
                        this.uj
                      ]
                    ),
                this.uj++);
          else
            switch (a.code) {
              case 1:
                this.play(z.vu);
                break;
              case 2:
                this.play(z.wu);
                break;
              case 3:
                this.play(z.xu);
                break;
              case 4:
                this.play(z.yu);
                break;
              case 5:
                this.play(z.zu);
                break;
              case 6:
                this.play(z.Au);
            }
          break;
        case 25:
          this.play(z.pu);
          break;
        case 26:
          this.play(z.ep, !0);
          break;
        case 27:
          this.play(z.nu);
          this.play(z.Gu);
          break;
        case 29:
          0.25 < Math.random() ? this.play(z.Bu) : this.play(z.Cu);
          break;
        case 30:
          this.play(z.eu);
          break;
        case 31:
          this.play(z.ou);
          break;
        case 32:
          a.get("tease") && this.play(z.Du, !0);
          this.uj = this.Ee = 0;
          break;
        case 36:
          this.play(z.tu);
          break;
        case 37:
          this.play(z.Fu);
      }
    },
    play: function (a, b) {
      null == b && (b = !1);
      return z.play(a, !1, b);
    },
    j: yd,
  });
  xd.__name__ = "142";
  xd.A = n;
  xd.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.v().la(this);
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      if (this.io)
        if (((this.gh *= 0.97), 0.5 > this.gh))
          (a = this.v().tb.local),
            (a.translate.b = 0),
            (a.translate.a = 0),
            (a.l &= -2),
            (a.l |= 32),
            (this.v().tb.i |= 8),
            (this.io = !1);
        else {
          var b = Math.sin(40 * this.time) * this.gh;
          a = this.v().tb.local;
          a.translate.b = 0;
          a.translate.a = b;
          a.l &= -2;
          a.l |= 32;
          this.v().tb.i |= 8;
        }
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 5:
          100 == a.get("bubble").code && this.qp();
          break;
        case 25:
          this.qp();
      }
    },
    qp: function () {
      this.io = !0;
      this.gh = 4 + this.P().level.Da.level / 10;
      this.time = 0;
    },
    j: xd,
  });
  vd.__name__ = "143";
  vd.A = n;
  vd.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.o = new P(null, 5, "shooting_arm");
      this.v().Zb(2).appendChild(this.o);
      this.o.Db();
      this.o.Pa();
      this.o.ft(this.o.J.a);
      this.o.ho(this.o.J.a);
      this.v().la(this);
    },
    H: function () {
      n.prototype.H.call(this);
      this.o.m();
    },
    pa: function (a) {
      n.prototype.pa.call(this, a);
      switch (this.v().Tb.state) {
        case 0:
        case 1:
        case 2:
        case 6:
        case 8:
          this.o.M(!1);
          break;
        default:
          this.o.M(!0);
      }
      var b = this.s().da,
        c = b.b,
        d = b.a;
      b = new r();
      b.b = c;
      b.a = d;
      a = b;
      this.s().Pt(a);
      var e = Y.Ya().Vj();
      c = e.b - a.b;
      d = e.a - a.a;
      b = new r();
      b.b = c;
      b.a = d;
      c = b;
      this.o.dl(this.s().vw());
      b = this.s().da;
      d = b.b;
      var f = b.a;
      b = new r();
      b.b = d;
      b.a = f;
      this.s().Pt(b);
      this.o.X(b.b);
      this.o.V(b.a);
      b = this.s().viewport.zoom;
      d = (2 * b) / this.o.J.b;
      1 < d && (d = 1);
      c = ag.Xw(c);
      this.ae && (c /= 2);
      c /= this.o.J.a;
      c > d && (c = d);
      0.25 > c && (c = 0.25);
      this.o.fa(c);
      c = 1;
      0 == this.v().rb.mode &&
        ((a = e.a - a.a), a > b && ((c = 1 - (a - b) / b), 0 > c && (c = 0)));
      this.o.Z(c);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      7 == a.type && this.H();
    },
    j: vd,
  });
  ud.__name__ = "144";
  ud.A = n;
  ud.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.Qc = new X(null, this.v().Zb(1));
      this.b = new P(this.Qc, 2);
      this.a = new P(this.Qc, 2);
      this.a.X(this.b.gi().b);
      this.gl = this.a.gi();
      this.Qc.Z(0);
      this.Qc.M(!1);
      this.v().la(this);
    },
    H: function () {
      n.prototype.H.call(this);
      this.Qc.m();
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 7:
          this.H();
          break;
        case 12:
          this.visible = !0;
          break;
        case 13:
          this.visible = !1;
          break;
        case 15:
          this.b.Oc(1);
          this.a.Oc(1);
          break;
        case 16:
          this.b.Oc(2);
          this.a.Oc(2);
          break;
        case 20:
          (this.visible = !1), this.b.Oc(2), this.a.Oc(2);
      }
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      this.visible
        ? ((this.alpha += 0.05),
          1 < this.alpha && (this.alpha = 1),
          (this.offset -= 3),
          -this.offset > this.gl.b &&
            ((a = this.b),
            a.X(a.Aa - this.offset),
            (a = this.b),
            (this.b = this.a),
            (this.a = a),
            (this.offset = 0)))
        : 0 != this.alpha &&
          ((a = this.alpha *= 0.9), 0 < a ? 0.01 > a : 0.01 > -a) &&
          (this.alpha = 0);
    },
    pa: function (a) {
      n.prototype.pa.call(this, a);
      if (this.visible) {
        this.b.X(this.offset);
        this.a.X(this.gl.b + this.offset);
        this.Qc.Z(this.alpha);
        this.Qc.M(!0);
        var b = this.s().viewport.$;
        a = (b.f - b.b) / this.gl.b;
        this.Qc.fa(a);
        a *= this.gl.a;
        this.Qc.X(b.b);
        var c = this.v().F.da,
          d = c.a - 1;
        d = this.s().viewport.wc(d);
        d -= a;
        this.Qc.V(d);
        var e = this.Qc,
          f = b.b;
        b = b.f;
        c = new G();
        c.b = f;
        c.a = d;
        c.f = b;
        c.d = d + a;
        e.Xz(c);
      } else this.Qc.Z(this.alpha), 0 == this.alpha && this.Qc.M(!1);
    },
    j: ud,
  });
  sc.__name__ = "145";
  sc.A = n;
  sc.prototype = t(n.prototype, {
    gc: function (a) {
      if (null != this.text) {
        this.info = a;
        a = a.$;
        this.group.fa(1);
        var b = this.Hq();
        b = (a.f - a.b) / b;
        a = (a.d - a.a) / this.Ll.a;
        b < a ? this.group.fa(b) : this.group.fa(a);
        this.align();
      }
    },
    set: function (a) {
      this.text = a;
      this.kh = a.length;
      for (var b = 0; b < this.kh; ) {
        var c = this.Qb[b],
          d = a.charAt(b);
        c[0].kf(d);
        c[0].Z(1);
        c[0].M(!0);
        c[1].kf(d);
        c[1].Z(1);
        c[1].M(!0);
        ++b;
      }
      for (; b < this.length; ) (c = this.Qb[b]), c[0].M(!1), c[1].M(!1), ++b;
    },
    wp: function () {
      1 != this.Rc && ((this.oj = 0), (this.Rc = 1));
    },
    pop: function () {
      if (2 != this.Rc) {
        this.oj = 0;
        this.Rc = 2;
        for (var a = (this.time = 0), b = this.kh; a < b; ) {
          var c = a++;
          this.Qb[c][0].fa(0.5);
          this.Qb[c][1].fa(0.5);
        }
      }
    },
    H: function () {
      n.prototype.H.call(this);
      this.group.m();
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      a = 0;
      for (var b = this.kh; a < b; ) {
        var c = a++,
          d = (c = this.Qb[c][1]);
        d.Z(0.97 * d.Za);
        0.01 > c.Za && c.M(!1);
      }
      switch (this.Rc) {
        case 1:
          0.05 < this.time &&
            ((this.time = 0),
            (b = this.Qb[this.oj++]),
            (a = b[0]),
            a.V(a.ra - 20),
            b[0].Pf().y(0, 1, this.aq),
            (a = b[1]),
            a.V(a.ra - 20),
            b[1].Pf().y(0, 1, this.aq),
            this.oj == this.kh && (this.Rc = 0));
          break;
        case 2:
          a = this.time / 0.5;
          d = 1 > a ? a : 1;
          var e = N.sd(0.5)(d) / 2;
          a = 0;
          for (b = this.kh; a < b; )
            (c = a++), this.Qb[c][0].fa(0.5 + e), this.Qb[c][1].fa(0.5 + e);
          1 == d && (this.Rc = 0);
      }
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      57 == a.type &&
        null != this.text &&
        (this.group.fa(a.get("scale")), this.align());
    },
    align: function () {
      var a = this.Hq(),
        b = this.Ll.b,
        c = this.info.$,
        d = this.info.align,
        e = this.group.xa;
      0 > d.b
        ? this.group.X(c.b)
        : 0 == d.b
        ? this.group.X(c.b + 0.5 * (c.f - c.b) - (a * e) / 2)
        : 0 < d.b && this.group.X(c.f - a * e);
      0 > d.a
        ? this.group.V(c.a)
        : 0 == d.a
        ? this.group.V(c.a + 0.5 * (c.d - c.a) - (b * e) / 2)
        : 0 < d.a && this.group.V(c.d - b * e);
    },
    Hq: function () {
      for (var a = 0, b = 0, c = this.text.length; b < c; ) {
        var d = b++;
        a += this.Qb[d][0].gi().b;
      }
      return a;
    },
    j: sc,
  });
  td.__name__ = "146";
  td.A = n;
  td.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.Bg = new P(this.v().Zb(5));
      this.v().la(this);
      this.ratio = 0;
      var a = new G();
      a.b = 1;
      a.a = 1;
      a.f = 1;
      a.d = 1;
      this.color = a;
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 1:
          this.$ = this.v().rb.Pg(4).$;
          break;
        case 32:
          this.ue = 1;
          this.state = 0;
          this.Bg.M(!0);
          break;
        case 37:
          this.state = 1;
          break;
        case 38:
          if (2 == this.state) break;
          a = a.get("t");
          this.ue = 1 - this.P().kd / this.P().xo;
          this.ue *= 1 - a;
          break;
        case 39:
          this.state = 2;
      }
    },
    pa: function (a) {
      n.prototype.pa.call(this, a);
      0 == this.state && (this.ue = 1 - this.P().kd / this.P().xo);
      this.ratio += 0.3 * (this.ue - this.ratio);
      var b = this.$;
      a = ((b.f - b.b) * this.ratio) | 0;
      1 > a
        ? this.Bg.M(!1)
        : ((this.color.b = 1),
          (this.color.a = 1),
          (this.color.f = 1),
          (this.color.d = 0.75),
          0 < this.state &&
            ((this.color.a = 0.9294117647058824),
            (this.color.f = 0.2196078431372549),
            (this.color.d = 1)),
          0.1 > this.ratio && (this.color.d = Qa.map(this.ratio, 0, 0.1, 0, 1)),
          this.Bg.M(!0),
          (b = this.$),
          (b = (2 * (b.d - b.a)) | 0),
          this.Bg.X(this.$.b),
          this.Bg.V(this.$.a - (b >> 1)),
          this.Bg.bo(this.color, a, b));
    },
    j: td,
  });
  sd.__name__ = "147";
  sd.A = n;
  sd.prototype = t(n.prototype, {
    W: function () {
      n.prototype.W.call(this);
      this.v().la(this);
    },
    handle: function (a) {
      n.prototype.handle.call(this, a);
      switch (a.type) {
        case 6:
        case 20:
          this.Mq();
      }
    },
    Mq: function () {
      for (var a = this.firstChild; null != a; ) {
        var b = a;
        b.Wk || b.Gc();
        a = a.K;
      }
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      if (!this.P().il && !this.P().Hj)
        if (0.25 > this.P().Xh) this.Mq(), (this.time = 0);
        else if (!(1 > this.time)) {
          var b = this.s().mm();
          if (null != b && !(1 > this.s().da.a - 1 - b.B.a)) {
            this.Bv(b);
            for (var c = this.firstChild; null != c; )
              (a = c), (b.Ma != a.y || a.zx()) && a.Gc(), (c = c.K);
            for (var d = !1, e = 0, f = this.Vf.g; e < f; ) {
              var g = this.Vf.c[e++],
                h = this.Vf.c[e++],
                k = !1;
              for (c = this.firstChild; null != c; )
                (a = c),
                  !a.Wk && a.Cy(g, h) && ((a.rl = g), (a.sl = h), (k = !0)),
                  (c = c.K);
              k ||
                ((a = new rd(g, h, b.Ma)), (a.y = b.Ma), this.N(a), (d = !0));
            }
            d && this.v().ka(14);
          }
        }
    },
    Bv: function (a) {
      var b = this.Vf,
        c = (b.g = 0);
      a = a.Ma;
      var d = this.s().cols;
      for (b = !0; c < d; )
        this.s().ba.Wa(c, a)
          ? b &&
            ((b = this.Vf), b.g == b.u && b.O(), (b.c[b.g++] = c), (b = !1))
          : b ||
            ((b = this.Vf),
            b.g == b.u && b.O(),
            (b.c[b.g++] = c - 1),
            (b = !0)),
          ++c;
      b || ((b = this.Vf), b.g == b.u && b.O(), (b.c[b.g++] = d - 1));
    },
    j: sd,
  });
  rd.__name__ = "148";
  rd.A = n;
  rd.prototype = t(n.prototype, {
    zx: function () {
      for (var a = this.rl; a <= this.sl; ) {
        if (this.s().ba.Wa(a, this.y)) return !1;
        ++a;
      }
      return !0;
    },
    Cy: function (a, b) {
      return a <= this.sl ? this.rl <= b : !1;
    },
    Gc: function () {
      this.Wk ||
        ((this.time = 0), (this.state = 2), (this.alpha = 1), (this.Wk = !0));
    },
    H: function () {
      n.prototype.H.call(this);
      this.o.m();
    },
    update: function (a) {
      n.prototype.update.call(this, a);
      this.Io(this.Pk);
      this.je.b += 0.7 * (this.Pk.b - this.je.b);
      this.je.a += 0.7 * (this.Pk.a - this.je.a);
      this.scale = (1.5 * this.s().viewport.zoom) / this.o.J.b;
      0 == this.state
        ? ((a = this.time / 0.5),
          (a = 1 < a ? 1 : a),
          (this.scale *= N.sd(0.2)(a)),
          (this.alpha = a),
          1 == a && (this.state = 1))
        : 2 == this.state &&
          ((a = this.time / 0.25),
          (a = 1 < a ? 1 : a),
          (this.alpha = 1 - a),
          1 == a && this.H());
    },
    pa: function (a) {
      n.prototype.pa.call(this, a);
      this.o.X(this.je.b);
      this.o.V(this.je.a);
      this.o.fa(this.scale + this.Mg);
      this.o.Z(this.alpha);
      this.o.M(!0);
    },
    Io: function (a) {
      this.s().Vd(this.rl, this.y, this.vc);
      var b = this.vc.b;
      this.s().Vd(this.sl, this.y, this.vc);
      var c = this.s().viewport;
      a.b = c.vo(b + (this.vc.b - b) / 2);
      a.a = c.wc(this.vc.a + 1);
    },
    j: rd,
  });
  H.__name__ = "149";
  H.A = M;
  H.prototype = t(M.prototype, {
    kb: function () {
      return S.Ea;
    },
    handle: function (a) {
      M.prototype.handle.call(this, a);
      switch (a.type) {
        case 43:
          this.gc();
          this.Fd();
          break;
        case 47:
          this.Lf(!1);
          a.i |= 3;
          break;
        case 48:
          this.lh(a.source.name, a.source), (a.i |= 3);
      }
    },
    Ub: function () {
      M.prototype.Ub.call(this);
      this.zg();
      this.Ez();
      this.gc();
      this.Fd();
    },
    Zc: function () {
      M.prototype.Zc.call(this);
      this.Lf(!1);
    },
    mb: function () {
      M.prototype.mb.call(this);
      this.Ni || this.Lf(!0);
    },
    ie: function () {
      M.prototype.ie.call(this);
    },
    md: function () {
      var a = [8, 12, 10, 15, 16, 13, 14];
      a.push(20);
      return a;
    },
    Rg: function () {
      return this.kb().window.Rb();
    },
    zq: function () {
      return Ic;
    },
    Lf: function (a) {
      for (var b = 0, c = this.buttons; b < c.length; ) {
        var d = c[b];
        ++b;
        d.cl(a);
      }
    },
    lh: function () {},
    Fd: function () {},
    zg: function () {
      this.kb().hb(10);
      this.kb().hb(15, 16);
      this.kb().hb(13, 14);
    },
    Ez: function () {
      null != this.pk &&
        ((this.sa = new $a(this.pk, 720, 1280)),
        (this.sa.xd = D(this, this.xd)),
        this.sa.create(),
        this.content.appendChild(this.sa.group));
    },
    Ie: function () {
      var a = this.Rg(),
        b = a.b,
        c = a.a,
        d = b - 0,
        e = c - 0,
        f = d / 0.5625,
        g = e / 1,
        h = new G();
      a = h;
      a.b = 0;
      a.a = 0;
      if (f <= g)
        return (
          (a.f = a.b + d),
          (a.d = a.a + f),
          (h = 0 + (e - (a.d - a.a)) / 2),
          (d = a.d - a.a),
          (a.a = h),
          (a.d = h + d),
          (d = a.b),
          (e = a.a),
          (f = a.f),
          (g = a.d),
          (h = new G()),
          (h.b = d),
          (h.a = e),
          (h.f = f),
          (h.d = g),
          (b = h),
          (b.a = 0),
          (b.d = a.a),
          (d = a.b),
          (e = a.a),
          (f = a.f),
          (g = a.d),
          (h = new G()),
          (h.b = d),
          (h.a = e),
          (h.f = f),
          (h.d = g),
          (h.a = a.d),
          (h.d = c),
          [b, a, h]
        );
      a.f = a.b + 0.5625 * g;
      a.d = a.a + e;
      h = 0 + (d - (a.f - a.b)) / 2;
      d = a.f - a.b;
      a.b = h;
      a.f = h + d;
      d = a.b;
      e = a.a;
      f = a.f;
      g = a.d;
      h = new G();
      h.b = d;
      h.a = e;
      h.f = f;
      h.d = g;
      c = h;
      c.b = 0;
      d = c.f = a.b;
      e = a.a;
      f = a.f;
      g = a.d;
      h = new G();
      h.b = d;
      h.a = e;
      h.f = f;
      h.d = g;
      h.b = a.f;
      h.f = b;
      return [c, a, h];
    },
    gc: function () {
      this.Ym = this.Ie();
      var a = this.Ym[1];
      null != this.sa &&
        (this.sa.group.X(a.b),
        this.sa.group.V(a.a),
        this.sa.group.fa((a.d - a.a) / 1280));
    },
    xd: function (a, b) {
      var c = new Kc(a);
      a = new Vb(this.sa.group, a, c);
      a.nf = 0.25;
      c = b.Gb(b.Hb());
      a.Ld(c);
      b.remove();
      this.N(a);
      this.buttons.push(a);
      return a;
    },
    Ug: function (a) {
      return fg.Ug(a, " ");
    },
    j: H,
  });
  rc.__name__ = "14A";
  rc.A = H;
  rc.prototype = t(H.prototype, {
    Ub: function () {
      this.kb().hb(11);
      this.kb().hb(0);
      H.prototype.Ub.call(this);
      var a = fa.get(this.Wc.Wd, "score"),
        b = fa.get(this.Wc.Wd, "level");
      this.pi = 0 < a && (0 == T.$d || a > T.$d);
      b > T.level && (T.level = b);
      this.pi && (T.$d = a);
      T.save();
      this.sa.dc("level", b);
      b = this.sa.Ec("trophy1");
      var c = this.sa.Ec("trophy2");
      b.M(this.pi);
      c.M(this.pi);
      this.pi
        ? (this.sa.Qe("highscore").M(!1),
          this.sa.Qe("score1").M(!1),
          this.sa.dc("score2", this.Ug(a)),
          this.sa.Ec("trophy3").M(!1),
          this.N(new mb(b)),
          this.N(new mb(c)),
          this.N(new pd()))
        : (this.sa.dc("score1", this.Ug(a)),
          this.sa.Qe("score2").M(!1),
          this.sa.dc("highscore", this.Ug(T.$d)),
          this.sa.Qe("level").M(!1),
          0 == T.$d &&
            (this.sa.Ec("highscore").M(!1), this.sa.Ec("trophy3").M(!1)));
    },
    $e: function () {
      H.prototype.$e.call(this);
      yb.Ca.show();
    },
    mb: function () {
      H.prototype.mb.call(this);
    },
    update: function (a) {
      H.prototype.update.call(this, a);
      -1 != this.nb &&
        ((this.nb -= a),
        0 < this.nb || ((this.nb = -1), this.pi && z.play(z.lu)));
    },
    md: function () {
      var a = H.prototype.md.call(this);
      a.push(11);
      a.push(0);
      return a;
    },
    xd: function (a, b) {
      b = H.prototype.xd.call(this, a, b);
      "next" == a && (b.nf = 1);
      return b;
    },
    lh: function (a) {
      "next" == a && ((this.nb = -1), this.rd(Za, !1));
    },
    j: rc,
  });
  qd.__name__ = "14B";
  qd.A = v;
  qd.prototype = t(v.prototype, {
    W: function () {
      v.prototype.W.call(this);
      var a = this.gm(H).Rh;
      a.appendChild(this.Ob);
      a.appendChild(this.Wb);
    },
    H: function () {
      v.prototype.H.call(this);
      this.Ob.m();
      this.Wb.m();
    },
    update: function (a) {
      v.prototype.update.call(this, a);
      this.Ga.b =
        this.x + this.parent.x + Math.sin(10 * this.time) * this.scale * 2;
      (this.Ga.a += 10 * -this.scale) < -this.Wb.nd() && this.H();
    },
    pa: function (a) {
      v.prototype.pa.call(this, a);
      this.Ob.X(this.Ga.b);
      this.Ob.V(this.Ga.a);
      this.Ob.M(!0);
      this.Wb.X(this.Ga.b);
      this.Wb.V(this.Ga.a);
      this.Wb.M(!0);
    },
    j: qd,
  });
  pd.__name__ = "14C";
  pd.A = v;
  pd.prototype = t(v.prototype, {
    update: function (a) {
      S.Ea.window.Rb();
      this.x = 20 * Math.sin(this.Po);
      this.Po += a;
      v.prototype.update.call(this, a);
      0.25 < this.time &&
        30 > this.xm() &&
        ((this.time = 0),
        this.N(new qd(this.color)),
        this.color++,
        8 == this.color && (this.color = 1));
    },
    j: pd,
  });
  Ve.__name__ = "14D";
  Ve.A = v;
  Ve.prototype = t(v.prototype, {
    H: function () {
      v.prototype.H.call(this);
      for (var a = 0, b = this.vb; a < b.length; ) {
        var c = b[a];
        ++a;
        c.m();
      }
    },
    W: function () {
      v.prototype.W.call(this);
      var a = this.gm(H).sa.group;
      this.data = [];
      this.vb = [];
      var b = 1 / this.level;
      0.1 < b && (b = 0.1);
      for (var c = 0, d = this.level; c < d; ) {
        var e = c++,
          f = new P(a, 11, "bubble_target");
        f.Db();
        f.Pa();
        this.vb.push(f);
        f.fa(0.3);
        this.data.push(e * b);
        this.data.push(0);
        this.data.push(0);
      }
    },
    update: function (a) {
      v.prototype.update.call(this, a);
      a = 0;
      for (var b = this.vb.length; a < b; ) {
        var c = 3 * a++,
          d = this.data[c];
        this.data[c] += 0.01 / this.level;
        this.data[c + 1] = 360 + 100 * Math.cos(d * Math.PI * 2);
        this.data[c + 2] = 280 + 100 * Math.sin(d * Math.PI * 2);
      }
    },
    pa: function (a) {
      v.prototype.pa.call(this, a);
      a = 0;
      for (var b = this.vb.length; a < b; ) {
        var c = a++,
          d = this.vb[c];
        c *= 3;
        d.X(this.data[c + 1]);
        d.V(this.data[c + 2]);
      }
    },
    j: Ve,
  });
  Ue.__name__ = "14E";
  Ue.A = v;
  Ue.prototype = t(v.prototype, {
    W: function () {
      v.prototype.W.call(this);
      for (var a = 0; 3 > a; ) {
        a++;
        var b = 10 * Ga.nq(1),
          c = -Ga.Xd(1, 5),
          d = this.source.clone(),
          e = d;
        e.fa(0.3 * e.xa);
        this.Kk.push(d);
        this.data.push(d.Aa);
        this.data.push(d.ra);
        this.data.push(b);
        this.data.push(c);
      }
    },
    update: function (a) {
      v.prototype.update.call(this, a);
      a = 0;
      for (var b = this.Kk.length; a < b; ) {
        var c = 4 * a;
        this.data[c + 3] += 0.25;
        this.data[c] += this.data[c + 2];
        this.data[c + 1] += this.data[c + 3];
        ++a;
      }
      this.alpha *= 0.97;
    },
    pa: function (a) {
      v.prototype.pa.call(this, a);
      a = 0;
      for (var b = this.Kk.length; a < b; ) {
        var c = this.Kk[a],
          d = 4 * a;
        c.X(this.data[d]);
        c.V(this.data[d + 1]);
        c.Z(this.alpha);
        ++a;
      }
    },
    j: Ue,
  });
  fb.__name__ = "14F";
  fb.A = H;
  fb.prototype = t(H.prototype, {
    oz: function () {
      Ca.Ca.H();
      this.Np();
    },
    Ub: function () {
      H.prototype.Ub.call(this);
      fb.Ag || Y.Ya().la(D(this, this.Kc));
    },
    lh: function (a) {
      "pause" == a && (Ca.Ca.pause(), this.rd(Gc, !0));
    },
    update: function (a) {
      H.prototype.update.call(this, a);
      switch (this.rq) {
        case 0:
          (this.nb -= a), 0 > this.nb && ((this.rq = 1), this.Np());
      }
    },
    $e: function () {
      H.prototype.$e.call(this);
      yb.Ca.Gc();
    },
    ie: function () {
      H.prototype.ie.call(this);
    },
    mb: function () {
      H.prototype.mb.call(this);
      this.Ni || (null != Ca.Ca && Ca.Ca.resume());
    },
    handle: function (a) {
      H.prototype.handle.call(this, a);
      7 == a.type && this.ty();
    },
    zg: function () {
      H.prototype.zg.call(this);
      this.kb().hb(11);
      this.kb().hb(5);
      this.kb().hb(4);
      this.kb().hb(3);
      this.kb().hb(2);
      this.kb().hb(1);
      this.kb().hb(13, 14);
      this.kb().hb(19);
      this.kb().hb(18);
    },
    md: function () {
      var a = [11, 5, 7, 2, 1, 19, 18, 4, 3];
      a = a.concat([14, 13]);
      a.push(20);
      return H.prototype.md.call(this).concat(a);
    },
    ty: function () {
      function a() {
        ta.Yd().pe(1);
        b.rd(rc, !1, e);
      }
      var b = this,
        c = Ca.Ca,
        d = c.Tb.kc;
      c = c.Tb.level.Da.level;
      var e = fa.Fb(["score", d, "level", c]);
      T.save();
      ta.Yd().pe(0);
      c = J.qr("dead", "level" + c);
      d = J.zt(d);
      var f = Eb.jt();
      Promise.all([c, d, f]).then(a, a);
    },
    Np: function () {
      var a = new Ca();
      this.content.node.appendChild(a.tb);
      this.N(a);
    },
    Kc: function (a) {
      1 != a.type ||
        fb.Ag ||
        ((fb.Ag = !0), (F.gk() || F.Um()) && F.resume(function () {}));
    },
    j: fb,
  });
  Za.__name__ = "150";
  Za.A = H;
  Za.prototype = t(H.prototype, {
    Ub: function () {
      var a = this;
      H.prototype.Ub.call(this);
      var b = 0 < T.$d,
        c = this.sa.Ec("trophy1");
      c.M(b);
      var d = this.sa.Ec("trophy2");
      d.M(b);
      this.sa.Qe("highscore_value").M(b);
      b
        ? (this.N(new mb(c)),
          this.N(new mb(d)),
          this.sa.dc("highscore_value", this.Ug(T.$d)),
          this.sa.dc("level_value", T.level))
        : (this.sa.Qe("highscore_value").M(!1),
          this.sa.Qe("level_value").M(!1));
      Z.Wa(65535)
        ? this.Zq()
        : Re.load(function (b) {
            a.kb().Sa.createTexture(65535, b);
            a.Zq();
          });
      yb.Ca.show();
    },
    mb: function () {
      H.prototype.mb.call(this);
      this.Ni || Y.Ya().la(D(this, this.Kc));
    },
    Zc: function () {
      H.prototype.Zc.call(this);
      Y.Ya().detach(D(this, this.Kc));
    },
    lh: function (a) {
      "play" == a && (this.Lf(!1), this.rd(fb, !1));
    },
    Fd: function () {
      H.prototype.Fd.call(this);
      this.op();
    },
    Kc: function (a) {
      if (
        1 == a.type &&
        (Za.Ag ||
          ((F.gk() || F.Um()) && F.resume(function () {}), (Za.Ag = !0)),
        null != this.jh)
      ) {
        var b = this.jh.bi(0),
          c = a.y,
          d = new r();
        d.b = a.x;
        d.a = c;
        b.bc(d) && Re.click();
      }
    },
    Zq: function () {
      this.jh = this.sa.group.Ad("more_games_graphic");
      this.jh.appendChild(new P(null, 65535));
      this.op();
    },
    op: function () {
      if (null != this.jh && (this.jh.bi(0).V(0), 0 < this.Ym[2].a)) {
        var a = this.Ym[2];
        this.jh.bi(0).V((a.d - a.a) / this.sa.group.xa / 2);
      }
    },
    xd: function (a, b) {
      b = H.prototype.xd.call(this, a, b);
      "play" == a && (b.nf = 1);
      return b;
    },
    zg: function () {
      H.prototype.zg.call(this);
      this.kb().hb(6);
      this.kb().hb(0);
      this.kb().hb(11);
    },
    md: function () {
      return H.prototype.md.call(this).concat([6, 0]);
    },
    j: Za,
  });
  Ic.__name__ = "151";
  Ic.A = Ya;
  Ic.prototype = t(Ya.prototype, {
    Xg: function () {
      return !1;
    },
    Ub: function () {
      Ya.prototype.Ub.call(this);
      this.Rc = new Ha();
      this.N(this.Rc);
      this.content.appendChild(this.Rc.group);
      this.gc();
    },
    mb: function () {
      Ya.prototype.mb.call(this);
    },
    finish: function (a) {
      this.Rc.Gc();
      this.Qa = 1;
      this.vc = a;
    },
    update: function (a) {
      Ya.prototype.update.call(this, a);
      1 == this.Qa &&
        0 == this.xm() &&
        ((this.Qa = 2), Ya.prototype.finish.call(this, this.vc));
    },
    handle: function (a) {
      Ya.prototype.handle.call(this, a);
      43 == a.type && this.gc();
    },
    Rg: function () {
      return S.Ea.window.Rb();
    },
    gc: function () {
      var a = this.Rc.group,
        b = this.Rg();
      a.X(b.b / 2);
      b = (b.b / a.Bd()) * 0.2;
      a.fa(b);
      a.V(1.5 * a.nd());
    },
    j: Ic,
  });
  Hc.__name__ = "152";
  Hc.A = H;
  Hc.prototype = t(H.prototype, {
    md: function () {
      return [];
    },
    zg: function () {
      this.kb().hb(15, 16);
      this.kb().hb(11);
    },
    Ub: function () {
      var a = this;
      H.prototype.Ub.call(this);
      this.Jp = Za;
      var b = M.Ow(this.Jp);
      this.Li = b.length;
      for (var c = 0; c < b.length; ) {
        var d = b[c];
        ++c;
        l.ui(d, D(this, this.wi));
      }
      var e = Array(b.length);
      c = 0;
      for (var f = b.length; c < f; ) (d = c++), (e[d] = l.Of(b[d]));
      this.En = e;
      ka.Se(this.En, function (b) {
        a.di().load(b);
      });
      ka.Se(this.En, function (b) {
        a.di().Cs(b);
      });
      this.fA();
    },
    mb: function () {
      var a = this;
      H.prototype.mb.call(this);
      var b = new Ec(33);
      b.Pi = function () {
        a.sa.dc("info", "" + Math.round(100 * a.di().Tj(a.En)) + "%");
        3 == a.state &&
          0 == a.Li &&
          1 < a.time &&
          ((a.nb = !0),
          a.fx(),
          a.sa.Qe("info").Pf().alpha(0, 0.25),
          b.stop(),
          (a.time = 0));
      };
    },
    update: function (a) {
      H.prototype.update.call(this, a);
      3 != this.state ||
        0 < this.Li ||
        -1 == this.Li ||
        !this.nb ||
        null != this.Ec(Ha) ||
        this.Ze();
    },
    wi: function () {
      this.Li--;
    },
    Ze: function () {
      if (!this.loaded) {
        this.loaded = !0;
        this.Li = -1;
        for (
          var a = l.Nw(), b = Array(a.length), c = 0, d = a.length;
          c < d;

        ) {
          var e = c++;
          b[e] = this.di().load(l.Of(a[e]));
        }
        this.next();
      }
    },
    next: function () {
      this.rd(this.Jp, !1);
    },
    fA: function () {
      var a = new Ha();
      this.N(a);
      this.sa.group.appendChild(a.group);
      a.group.X(this.sa.width / 2);
      a.group.V(this.sa.height / 2 + 50);
      var b = (this.sa.width / a.group.Bd()) * 0.3;
      a.group.fa(b);
    },
    fx: function () {
      this.Ec(Ha).Gc();
    },
    j: Hc,
  });
  Gc.__name__ = "153";
  Gc.A = H;
  Gc.prototype = t(H.prototype, {
    Ub: function () {
      H.prototype.Ub.call(this);
    },
    $e: function () {
      H.prototype.$e.call(this);
      this.parent.content.Z(0.25);
    },
    mb: function () {
      var a = this;
      H.prototype.mb.call(this);
      if (!this.Ni) {
        ta.Yd().pe(0.25);
        this.Lf(!1);
        var b = function () {
          a.Lf(!0);
        };
        J.pause().then(b, b);
      }
    },
    Zc: function () {
      H.prototype.Zc.call(this);
      this.parent.content.Z(1);
    },
    H: function () {
      H.prototype.H.call(this);
      ta.Yd().pe(1);
    },
    lh: function (a, b) {
      var c = this;
      H.prototype.lh.call(this, a, b);
      switch (a) {
        case "home":
          a = function () {
            Ca.Ca.H();
            c.rd(Za, !1);
          };
          b = Ca.Ca.Tb.level.Da.level;
          J.Qx("level" + b).then(a, a);
          break;
        case "play":
          a = function () {
            c.finish();
          };
          J.resume().then(a);
          break;
        case "restart":
          a = function () {
            c.gm(fb).oz();
            c.finish(fa.Fb(["restart", !0]));
          };
          b = Ca.Ca.Tb.level.Da.level;
          J.Rx("level" + b).then(a, a);
          break;
        case "resume":
          a = function () {
            c.finish();
          };
          J.resume().then(a);
          break;
        case "sound":
          (T.Bh = b.Jx()), T.save(), this.RA();
      }
    },
    Fd: function () {
      H.prototype.Fd.call(this);
    },
    Xg: function () {
      return !1;
    },
    update: function (a) {
      H.prototype.update.call(this, a);
    },
    xd: function (a, b) {
      b = H.prototype.xd.call(this, a, b);
      switch (a) {
        case "home":
        case "play":
        case "resume":
          b.nf = 1;
          break;
        case "sound":
          b.Uz(T.Bh);
      }
      return b;
    },
    RA: function () {
      var a = D(this, this.Lf);
      Ec.$l(function () {
        a(!0);
      }, 250);
      J.iB(T.Bh ? 1 : 0);
    },
    j: Gc,
  });
  yb.__name__ = "154";
  yb.A = v;
  yb.prototype = t(v.prototype, {
    show: function () {
      3 != this.state &&
        ((this.state = 1),
        this.group.M((this.jj = this.Mi = !0)),
        this.group.Z(0),
        this.group.sz());
    },
    Gc: function () {
      0 != this.state && ((this.state = 2), this.group.Z(1));
    },
    H: function () {
      v.prototype.H.call(this);
      this.group.m();
      yb.Ca = null;
    },
    update: function (a) {
      v.prototype.update.call(this, a);
      switch (this.state) {
        case 1:
          a = this.group;
          a.Z(a.Za + 0.05);
          1 <= this.group.Za && (this.group.Z(1), (this.state = 3));
          break;
        case 2:
          a = this.group;
          a.Z(a.Za - 0.05);
          0 == this.group.Za &&
            (this.group.M((this.jj = this.Mi = !1)), (this.state = 0));
          break;
        case 3:
          (this.offset -= 5),
            -this.offset > 1280 * this.Nc &&
              ((a = this.b),
              a.V(a.ra - this.offset),
              (a = this.b),
              (this.b = this.a),
              (this.a = a),
              (this.offset = 0));
      }
    },
    pa: function (a) {
      v.prototype.pa.call(this, a);
      a = 1280 * this.Nc;
      this.b.V(this.offset);
      this.a.V(a + this.offset);
    },
    handle: function (a) {
      v.prototype.handle.call(this, a);
      43 == a.type && this.gc();
    },
    R: function () {
      if (!Z.Wa(65536)) {
        for (
          var a = window.document.createElement("canvas"),
            b = (a.width = 720),
            c = (a.height = 1280),
            d = a.getContext("2d", null),
            e = ["#20BDFF", "#5433FF", "#A5FECB"],
            f = e.slice(),
            g = e.length - 2;
          -1 < g;

        )
          f.push(e[g--]);
        e = d.createLinearGradient(0, 0, 0, c);
        for (var h = 0, k = f.length; h < k; )
          (g = h++), e.addColorStop(g / (f.length - 1), f[g]);
        d.fillStyle = e;
        d.fillRect(0, 0, b, c);
        d.fill();
        S.Ea.Sa.createTexture(65536, a);
        this.offset = 1280 * -Math.random() * this.Nc;
      }
    },
    gc: function () {
      var a = S.Ea.window.Rb();
      this.group.fa(a.b / this.b.J.b);
    },
    j: yb,
  });
  od.__name__ = "155";
  od.__interfaces__ = [Qc];
  od.prototype = {
    Me: function () {
      return 1;
    },
    rn: function (a, b) {
      if (!Z.Wa(65539)) {
        a = window.document.createElement("canvas");
        a.width = 128;
        a.height = 128;
        var c = a.getContext("2d", null),
          d = c.createLinearGradient(0, 0, 0, 128);
        d.addColorStop(0, "#570096");
        d.addColorStop(1, "#FFFFFF");
        c.fillStyle = d;
        c.fillRect(0, 0, 128, 128);
        c.fill();
        S.Ea.Sa.createTexture(65539, a);
      }
      this.vb = [];
      this.data = [];
      a = B.Ta(M.Pe().Ad("fg"), X);
      this.group = new X(null, a);
      this.size = S.Ea.window.Rb();
      S.Ea.hb(11);
      this.Kf = new P(this.group, 65539);
      this.Kf.aA(this.size.b);
      this.Kf.Zz(this.size.a);
      this.Kf.Z(0);
      b.canvas.Z(0);
      z.play(z.fu);
      for (b = 0; 40 > b; )
        b++,
          (a = new P(this.group, 11, "air")),
          a.Db(),
          a.Pa(),
          a.X(Math.random() * this.size.b),
          a.V(this.size.a + Math.random() * this.size.a),
          this.vb.push(a),
          (c = Math.min(this.size.b, this.size.a) / a.J.b / 4),
          (d = Math.random()),
          0.33 > d ? (c *= 0.33) : 0.66 > d && (c *= 0.66),
          this.data.push(a.Aa),
          this.data.push(a.ra),
          a.fa(c),
          this.data.push(Math.random());
    },
    hs: function (a, b, c, d) {
      0.5 > d ? this.Kf.Z(2 * d) : this.Kf.Z(1 - 2 * (d - 0.5));
      c = this.Kf;
      c.Z(0.5 * c.Za);
      a.canvas.Z(N.Hi(2)(1 - d));
      b.canvas.Z(d);
      a = 0;
      for (b = this.vb.length; a < b; ) {
        c = this.vb[a];
        var e = 3 * a;
        c.X(this.data[e] + 10 * Math.sin(this.data[e + 2]));
        c.V(this.data[e + 1] - this.size.a * d * 2.5);
        this.data[e + 2] += 0.2;
        ++a;
      }
    },
    Yr: function () {
      this.group.m();
      this.group = this.Kf = null;
    },
    j: od,
  };
  eb.Xo |= 0;
  "undefined" != typeof performance &&
    "function" == typeof performance.now &&
    (C.now = performance.now.bind(performance));
  null == String.fromCodePoint &&
    (String.fromCodePoint = function (a) {
      return 65536 > a
        ? String.fromCharCode(a)
        : String.fromCharCode((a >> 10) + 55232) +
            String.fromCharCode((a & 1023) + 56320);
    });
  String.prototype.j = String;
  String.__name__ = "156";
  Array.__name__ = "157";
  Date.prototype.j = Date;
  Date.__name__ = "158";
  var ug = {},
    sg = {},
    tg = Number,
    rg = Boolean,
    ng = {},
    vg = {};
  B.Mu = {}.toString;
  v.ap = 0;
  ca.language = "en";
  ca.mz = "res";
  ca.sp = [];
  ca.Fs = (16777215 * Math.random()) | 0;
  Eb.Mh = !1;
  E.Gh = new Wa();
  E.sh = new Wa();
  E.time = 0;
  E.kq = 0;
  E.mq = 60;
  E.Br = -1;
  E.Rv = 0.016666666666666666;
  E.$i = 1;
  E.nn = 0;
  E.or = 0;
  E.Xf = 0;
  E.Ae = 0;
  E.first = !0;
  w.Element = 0;
  w.Yt = 1;
  w.Rt = 2;
  w.Comment = 3;
  w.Vt = 4;
  w.ProcessingInstruction = 5;
  w.Document = 6;
  db.count = 0;
  Fc.vc = new L();
  Ba.yg = Array(12);
  Ba.stack = Array(65536);
  mc.Tc = 0.2;
  mc.jA = !1;
  mc.mf = 500;
  mc.gh = 3;
  mc.enabled = !0;
  mc.aa = 3;
  K.PA = "none";
  K.ud = mc;
  K.iv = 0;
  K.hA = !1;
  K.nv = !0;
  K.ey = 80;
  K.zj = -1;
  K.Tg = 33;
  K.mv = "destroy";
  K.yp = 80;
  K.Jq = !1;
  K.hv = 0.35;
  K.OA = "stick";
  K.lv = "reload";
  K.av = "none";
  kg.Sl = Array(7);
  Db.St = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  Db.Yo = oa.qn(Db.St);
  kc.Bm = new DataView(new ArrayBuffer(8));
  Ob.bq = (function () {
    var a = new Ma();
    a.C.lt = "<";
    a.C.gt = ">";
    a.C.amp = "&";
    a.C.quot = '"';
    a.C.apos = "'";
    return a;
  })(this);
  jc.zp = 0;
  l.Bl = "res";
  l.bh = new Ra();
  l.We = new Ra();
  l.Bp = [];
  l.yi = new Ra();
  l.zA = "txt csv xml json yaml properties js".split(" ");
  l.ix = ["png", "jpg"];
  l.Qi = new Ma();
  l.Kj = new Ra();
  l.locked = new Ra();
  l.wg =
    "trophy.png tape2.png tape1.png shiny.png pop.png misc.png logo.png level.csv layout.json lang/strings_{language}.txt buttons.png bubbles.png bubble.json bmf/text_2.png bmf/text_2.fnt bmf/text_1.png bmf/text_1.fnt bmf/profont.png bmf/digits_b.png bmf/digits_a.png audio/{audio}/sounds.{audio}".split(
      " "
    );
  l.Ry = [8, 9, 11, 15, 16, 17];
  l.lz = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  rb.state = new Ma();
  ta.enabled = !0;
  F.sj = void 0;
  F.active = !1;
  F.Zm = !1;
  ic.qq = !0;
  aa.Zo = 0;
  aa.Jh = 0;
  aa.$o = 10;
  ea.lj = window.devicePixelRatio;
  ea.ke = 96;
  ea.Sl = 0;
  vb.bp = new vb(Xa.i1);
  vb.Zt = new vb(Xa.i3);
  qa.Tt = 1;
  ja.Ch = new Bb();
  ja.lA = new Bb();
  xa.Ot = 0;
  xa.Nt = 0;
  xa.Qp = 0;
  xa.Tr = 0;
  xa.Sr = 0;
  Kb.FA = (function () {
    var a = new Wc();
    Xc.og(a);
    return a;
  })(this);
  Kb.GA = (function () {
    var a = new Wc();
    Xc.og(a);
    return a;
  })(this);
  ia.count = 0;
  P.Re = 0;
  X.Re = 0;
  Oa.Re = 0;
  ha.no = new Bb();
  Z.vt = 0;
  Z.Zi = new Ra();
  wa.Sn = new Ma();
  A.count = 0;
  A.iy = 0;
  A.fj = new Ma();
  A.fy = new Ra();
  A.Ff = [];
  zb.count = 0;
  ac.count = 0;
  tc.count = 0;
  qb.count = 0;
  qb.vc = [];
  Hb.count = 0;
  na.count = 0;
  bg.Ky = [0, 10, 10, 25, 50, 100, 250, 500, 1e3];
  Ha.Hu = 0.3;
  Ha.Ut = 0.1;
  Ha.$t = 0.2;
  Ha.Iu = 0.2;
  T.Bh = !0;
  T.$d = 0;
  T.level = 0;
  S.TYPE = 1;
  z.au = 1e3;
  z.bu = 1001;
  z.cu = 1011;
  z.du = 1012;
  z.eu = 1013;
  z.fu = 1014;
  z.gu = 1015;
  z.hu = 1016;
  z.iu = 1017;
  z.ju = 1018;
  z.ku = 1020;
  z.cp = 1021;
  z.lu = 1023;
  z.mu = 1024;
  z.nu = 1025;
  z.ou = 1026;
  z.pu = 1027;
  z.qu = 1028;
  z.ru = 1029;
  z.su = 1030;
  z.tu = 1031;
  z.ep = 1032;
  z.uu = 1033;
  z.vu = 1034;
  z.wu = 1035;
  z.xu = 1036;
  z.yu = 1037;
  z.zu = 1038;
  z.Au = 1039;
  z.Bu = 1044;
  z.Cu = 1045;
  z.Du = 1046;
  z.Eu = 1047;
  z.Fu = 1048;
  z.Gu = 1049;
  mb.Ur = [20, 20, 112, 125, 112, 81, 140, 36];
  $a.cq = new Ma();
  Wb.count = 0;
  fb.Ag = !1;
  Za.Ag = !1;
})(
  "undefined" != typeof exports
    ? exports
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof self
    ? self
    : this,
  "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : this
);
//# sourceMappingURL=smartybubbles2-min.js.map
