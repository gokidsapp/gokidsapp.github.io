var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "Select Player",
        Win: "You win!",
        Lose: "You lose!",
        Score: "Score",
        Time: "Time"
    },
    Results: {
        Title: "High score"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !0
        },
        Logo: {
            Enabled: !0,
            Link: "http://marketjs.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !1
    }
};
var MobileAdInGamePreroll = {/*
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
            var c = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
                b = c.MobileAdInGamePreroll,
                d =
                b + c.MobileAdInGamePreroll2,
                c = d + c.MobileAdInGamePreroll3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= b ? this.selectedOverlayName = "MobileAdInGamePreroll" : f <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : f <= c && (this.selectedOverlayName = "MobileAdInGamePreroll3");
            console.log("Ad rotating preroll enabled")
        } else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
            this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(c) {
        var b = c,
            d = setInterval(function() {
                MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + b + "...");
                MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
                b--;
                0 > b && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
                    MobileAdInGamePreroll.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }*/
};
var MobileAdInGameHeader = {/*
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
            var c = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
                b = c.MobileAdInGameHeader,
                d = b + c.MobileAdInGameHeader2,
                c = d + c.MobileAdInGameHeader3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= b ? this.selectedOverlayName = "MobileAdInGameHeader" : f <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" :
                f <= c && (this.selectedOverlayName = "MobileAdInGameHeader3");
            console.log("Ad rotating header enabled")
        } else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", 0);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(c) {
        var b = setInterval(function() {
            c--;
            0 > c && (MobileAdInGameHeader.div.hide(), clearInterval(b))
        }, 1E3)
    }*/
};
var MobileAdInGameFooter = {/*
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var c = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                b = c.MobileAdInGameFooter,
                d = b + c.MobileAdInGameFooter2,
                c = d + c.MobileAdInGameFooter3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= b ? this.selectedOverlayName = "MobileAdInGameFooter" : f <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" :
                f <= c && (this.selectedOverlayName = "MobileAdInGameFooter3");
            console.log("Ad rotating footer enabled")
        } else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", this.game.height() - this.div.height() - 5);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(c) {
        var b = setInterval(function() {
            c--;
            0 > c && (MobileAdInGameFooter.div.hide(), clearInterval(b))
        }, 1E3)
    }*/
};
var MobileAdInGameEnd = {/*
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
            var c = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
                b = c.MobileAdInGameEnd,
                d = b + c.MobileAdInGameEnd2,
                c = d + c.MobileAdInGameEnd3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= b ? this.selectedOverlayName = "MobileAdInGameEnd" : f <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : f <= c && (this.selectedOverlayName = "MobileAdInGameEnd3");
            console.log("Ad rotating end enabled")
        } else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(c) {
        var b = c,
            d = setInterval(function() {
                MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + b + "...");
                MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
                b--;
                0 > b && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }*/
};
(function(c, b) {
    function d(c, n, g) {
        if (g === b && 1 === c.nodeType)
            if (g = "data-" + n.replace(sc, "-$1").toLowerCase(), g = c.getAttribute(g), "string" == typeof g) {
                try {
                    g = "true" === g ? !0 : "false" === g ? !1 : "null" === g ? null : +g + "" === g ? +g : tc.test(g) ? e.parseJSON(g) : g
                } catch (z) {}
                e.data(c, n, g)
            } else g = b;
        return g
    }

    function f(b) {
        for (var c in b)
            if (!("data" === c && e.isEmptyObject(b[c])) && "toJSON" !== c) return !1;
        return !0
    }

    function j() {
        return !1
    }

    function p() {
        return !0
    }

    function y(b) {
        return !b || !b.parentNode || 11 === b.parentNode.nodeType
    }

    function s(b,
        c) {
        do b = b[c]; while (b && 1 !== b.nodeType);
        return b
    }

    function t(b, c, g) {
        c = c || 0;
        if (e.isFunction(c)) return e.grep(b, function(b, v) {
            return !!c.call(b, v, b) === g
        });
        if (c.nodeType) return e.grep(b, function(b) {
            return b === c === g
        });
        if ("string" == typeof c) {
            var z = e.grep(b, function(b) {
                return 1 === b.nodeType
            });
            if (uc.test(c)) return e.filter(c, z, !g);
            c = e.filter(c, z)
        }
        return e.grep(b, function(b) {
            return 0 <= e.inArray(b, c) === g
        })
    }

    function A(b) {
        var c = wb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; c.length;) b.createElement(c.pop());
        return b
    }

    function B(b, c) {
        if (1 === c.nodeType && e.hasData(b)) {
            var g, z, d;
            z = e._data(b);
            var r = e._data(c, z),
                m = z.events;
            if (m)
                for (g in delete r.handle, r.events = {}, m) {
                    z = 0;
                    for (d = m[g].length; z < d; z++) e.event.add(c, g, m[g][z])
                }
            r.data && (r.data = e.extend({}, r.data))
        }
    }

    function l(b, c) {
        var g;
        1 === c.nodeType && (c.clearAttributes && c.clearAttributes(), c.mergeAttributes && c.mergeAttributes(b), g = c.nodeName.toLowerCase(), "object" === g ? (c.parentNode && (c.outerHTML = b.outerHTML), e.support.html5Clone && b.innerHTML && !e.trim(c.innerHTML) &&
            (c.innerHTML = b.innerHTML)) : "input" === g && xb.test(b.type) ? (c.defaultChecked = c.checked = b.checked, c.value !== b.value && (c.value = b.value)) : "option" === g ? c.selected = b.defaultSelected : "input" === g || "textarea" === g ? c.defaultValue = b.defaultValue : "script" === g && c.text !== b.text && (c.text = b.text), c.removeAttribute(e.expando))
    }

    function q(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }

    function u(b) {
        xb.test(b.type) && (b.defaultChecked =
            b.checked)
    }

    function D(b, c) {
        if (c in b) return c;
        for (var g = c.charAt(0).toUpperCase() + c.slice(1), e = c, d = yb.length; d--;)
            if (c = yb[d] + g, c in b) return c;
        return e
    }

    function K(b, c) {
        return b = c || b, "none" === e.css(b, "display") || !e.contains(b.ownerDocument, b)
    }

    function M(b, c) {
        for (var g, z, d = [], r = 0, m = b.length; r < m; r++) g = b[r], g.style && (d[r] = e._data(g, "olddisplay"), c ? (!d[r] && "none" === g.style.display && (g.style.display = ""), "" === g.style.display && K(g) && (d[r] = e._data(g, "olddisplay", O(g.nodeName)))) : (z = Q(g, "display"), !d[r] && "none" !==
            z && e._data(g, "olddisplay", z)));
        for (r = 0; r < m; r++)
            if (g = b[r], g.style && (!c || "none" === g.style.display || "" === g.style.display)) g.style.display = c ? d[r] || "" : "none";
        return b
    }

    function E(b, c, g) {
        return (b = vc.exec(c)) ? Math.max(0, b[1] - (g || 0)) + (b[2] || "px") : c
    }

    function Xa(b, c, g, z) {
        c = g === (z ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
        for (var d = 0; 4 > c; c += 2) "margin" === g && (d += e.css(b, g + ea[c], !0)), z ? ("content" === g && (d -= parseFloat(Q(b, "padding" + ea[c])) || 0), "margin" !== g && (d -= parseFloat(Q(b, "border" + ea[c] + "Width")) || 0)) : (d += parseFloat(Q(b,
            "padding" + ea[c])) || 0, "padding" !== g && (d += parseFloat(Q(b, "border" + ea[c] + "Width")) || 0));
        return d
    }

    function I(b, c, g) {
        var z = "width" === c ? b.offsetWidth : b.offsetHeight,
            d = !0,
            r = e.support.boxSizing && "border-box" === e.css(b, "boxSizing");
        if (0 >= z || null == z) {
            z = Q(b, c);
            if (0 > z || null == z) z = b.style[c];
            if (ya.test(z)) return z;
            d = r && (e.support.boxSizingReliable || z === b.style[c]);
            z = parseFloat(z) || 0
        }
        return z + Xa(b, c, g || (r ? "border" : "content"), d) + "px"
    }

    function O(b) {
        if (Ya[b]) return Ya[b];
        var c = e("<" + b + ">").appendTo(C.body),
            g = c.css("display");
        c.remove();
        if ("none" === g || "" === g) {
            la = C.body.appendChild(la || e.extend(C.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!ma || !la.createElement) ma = (la.contentWindow || la.contentDocument).document, ma.write("<!doctype html><html><body>"), ma.close();
            c = ma.body.appendChild(ma.createElement(b));
            g = Q(c, "display");
            C.body.removeChild(la)
        }
        return Ya[b] = g, g
    }

    function J(b, c, g, z) {
        var d;
        if (e.isArray(c)) e.each(c, function(c, n) {
            g || wc.test(b) ? z(b, n) : J(b + "[" + ("object" == typeof n ? c : "") + "]", n, g, z)
        });
        else if (!g &&
            "object" === e.type(c))
            for (d in c) J(b + "[" + d + "]", c[d], g, z);
        else z(b, c)
    }

    function za(b) {
        return function(c, g) {
            "string" != typeof c && (g = c, c = "*");
            var z, d, r = c.toLowerCase().split(fa),
                m = 0,
                l = r.length;
            if (e.isFunction(g))
                for (; m < l; m++) z = r[m], (d = /^\+/.test(z)) && (z = z.substr(1) || "*"), z = b[z] = b[z] || [], z[d ? "unshift" : "push"](g)
        }
    }

    function na(c, n, g, e, d, r) {
        d = d || n.dataTypes[0];
        r = r || {};
        r[d] = !0;
        var m;
        d = c[d];
        for (var l = 0, f = d ? d.length : 0, j = c === Za; l < f && (j || !m); l++) m = d[l](n, g, e), "string" == typeof m && (!j || r[m] ? m = b : (n.dataTypes.unshift(m),
            m = na(c, n, g, e, m, r)));
        return (j || !m) && !r["*"] && (m = na(c, n, g, e, "*", r)), m
    }

    function sa(c, n) {
        var g, z, d = e.ajaxSettings.flatOptions || {};
        for (g in n) n[g] !== b && ((d[g] ? c : z || (z = {}))[g] = n[g]);
        z && e.extend(!0, c, z)
    }

    function zb() {
        try {
            return new c.XMLHttpRequest
        } catch (b) {}
    }

    function Ab() {
        return setTimeout(function() {
            Aa = b
        }, 0), Aa = e.now()
    }

    function Bb(b, c, g) {
        var z, d = 0,
            r = Ba.length,
            m = e.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                for (var c = Aa || Ab(), c = Math.max(0, f.startTime + f.duration - c), n = 1 - (c / f.duration || 0), g =
                    0, e = f.tweens.length; g < e; g++) f.tweens[g].run(n);
                return m.notifyWith(b, [f, n, c]), 1 > n && e ? c : (m.resolveWith(b, [f]), !1)
            },
            f = m.promise({
                elem: b,
                props: e.extend({}, c),
                opts: e.extend(!0, {
                    specialEasing: {}
                }, g),
                originalProperties: c,
                originalOptions: g,
                startTime: Aa || Ab(),
                duration: g.duration,
                tweens: [],
                createTween: function(c, n) {
                    var g = e.Tween(b, f.opts, c, n, f.opts.specialEasing[c] || f.opts.easing);
                    return f.tweens.push(g), g
                },
                stop: function(c) {
                    for (var n = 0, g = c ? f.tweens.length : 0; n < g; n++) f.tweens[n].run(1);
                    return c ? m.resolveWith(b, [f, c]) : m.rejectWith(b, [f, c]), this
                }
            });
        c = f.props;
        g = f.opts.specialEasing;
        var j, q, u, s;
        for (z in c)
            if (j = e.camelCase(z), q = g[j], u = c[z], e.isArray(u) && (q = u[1], u = c[z] = u[0]), z !== j && (c[j] = u, delete c[z]), (s = e.cssHooks[j]) && "expand" in s)
                for (z in u = s.expand(u), delete c[j], u) z in c || (c[z] = u[z], g[z] = q);
            else g[j] = q;
        for (; d < r; d++)
            if (z = Ba[d].call(f, b, c, f.opts)) return z;
        var p = f;
        e.each(c, function(b, c) {
            for (var v = (ta[b] || []).concat(ta["*"]), n = 0, g = v.length; n < g && !v[n].call(p, b, c); n++);
        });
        return e.isFunction(f.opts.start) && f.opts.start.call(b,
            f), e.fx.timer(e.extend(l, {
            anim: f,
            queue: f.opts.queue,
            elem: b
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function S(b, c, g, e, d) {
        return new S.prototype.init(b, c, g, e, d)
    }

    function Ca(b, c) {
        var g, e = {
                height: b
            },
            d = 0;
        for (c = c ? 1 : 0; 4 > d; d += 2 - c) g = ea[d], e["margin" + g] = e["padding" + g] = b;
        return c && (e.opacity = e.width = b), e
    }

    function Cb(b) {
        return e.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var Db, Da, C = c.document,
        yc = c.location,
        zc = c.navigator,
        Ac =
        c.jQuery,
        Bc = c.$,
        Eb = Array.prototype.push,
        Z = Array.prototype.slice,
        Fb = Array.prototype.indexOf,
        Cc = Object.prototype.toString,
        $a = Object.prototype.hasOwnProperty,
        ab = String.prototype.trim,
        e = function(b, c) {
            return new e.fn.init(b, c, Db)
        },
        Ea = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Dc = /\S/,
        fa = /\s+/,
        Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Gc = /^[\],:{}\s]*$/,
        Hc = /(?:^|:|,)(?:\s*\[)+/g,
        Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Kc = /^-ms-/,
        Lc = /-([\da-z])/gi,
        Mc = function(b, c) {
            return (c + "").toUpperCase()
        },
        Fa = function() {
            C.addEventListener ? (C.removeEventListener("DOMContentLoaded", Fa, !1), e.ready()) : "complete" === C.readyState && (C.detachEvent("onreadystatechange", Fa), e.ready())
        },
        Hb = {};
    e.fn = e.prototype = {
        constructor: e,
        init: function(c, n, g) {
            var z, d;
            if (!c) return this;
            if (c.nodeType) return this.context = this[0] = c, this.length = 1, this;
            if ("string" == typeof c) {
                "<" === c.charAt(0) && ">" === c.charAt(c.length - 1) && 3 <= c.length ? z = [null, c, null] : z = Fc.exec(c);
                if (z && (z[1] || !n)) {
                    if (z[1]) return n = n instanceof e ? n[0] : n, d = n && n.nodeType ? n.ownerDocument || n : C, c = e.parseHTML(z[1], d, !0), Gb.test(z[1]) && e.isPlainObject(n) && this.attr.call(c, n, !0), e.merge(this, c);
                    if ((n = C.getElementById(z[2])) && n.parentNode) {
                        if (n.id !== z[2]) return g.find(c);
                        this.length = 1;
                        this[0] = n
                    }
                    return this.context = C, this.selector = c, this
                }
                return !n || n.jquery ? (n || g).find(c) : this.constructor(n).find(c)
            }
            return e.isFunction(c) ? g.ready(c) : (c.selector !== b && (this.selector = c.selector, this.context = c.context), e.makeArray(c,
                this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return Z.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, c, g) {
            b = e.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === c ? b.selector = this.selector + (this.selector ? " " : "") + g : c && (b.selector = this.selector + "." + c + "(" + g + ")"), b
        },
        each: function(b, c) {
            return e.each(this, b, c)
        },
        ready: function(b) {
            return e.ready.promise().done(b),
                this
        },
        eq: function(b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments), "slice", Z.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(e.map(this, function(c, g) {
                return b.call(c, g, c)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Eb,
        sort: [].sort,
        splice: [].splice
    };
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function() {
        var c, n,
            g, z, d, r, m = arguments[0] || {},
            f = 1,
            l = arguments.length,
            j = !1;
        "boolean" == typeof m && (j = m, m = arguments[1] || {}, f = 2);
        "object" != typeof m && !e.isFunction(m) && (m = {});
        for (l === f && (m = this, --f); f < l; f++)
            if (null != (c = arguments[f]))
                for (n in c) g = m[n], z = c[n], m !== z && (j && z && (e.isPlainObject(z) || (d = e.isArray(z))) ? (d ? (d = !1, r = g && e.isArray(g) ? g : []) : r = g && e.isPlainObject(g) ? g : {}, m[n] = e.extend(j, r, z)) : z !== b && (m[n] = z));
        return m
    };
    e.extend({
        noConflict: function(b) {
            return c.$ === e && (c.$ = Bc), b && c.jQuery === e && (c.jQuery = Ac), e
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? e.readyWait++ : e.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b ? --e.readyWait : e.isReady)) {
                if (!C.body) return setTimeout(e.ready, 1);
                e.isReady = !0;
                !0 !== b && 0 < --e.readyWait || (Da.resolveWith(C, [e]), e.fn.trigger && e(C).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === e.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === e.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return null ==
                b ? String(b) : Hb[Cc.call(b)] || "object"
        },
        isPlainObject: function(c) {
            if (!c || "object" !== e.type(c) || c.nodeType || e.isWindow(c)) return !1;
            try {
                if (c.constructor && !$a.call(c, "constructor") && !$a.call(c.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            for (var g in c);
            return g === b || $a.call(c, g)
        },
        isEmptyObject: function(b) {
            for (var c in b) return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, c, g) {
            var z;
            return !b || "string" != typeof b ? null : ("boolean" == typeof c && (g = c, c = 0), c = c || C, (z =
                Gb.exec(b)) ? [c.createElement(z[1])] : (z = e.buildFragment([b], c, g ? null : []), e.merge([], (z.cacheable ? e.clone(z.fragment) : z.fragment).childNodes)))
        },
        parseJSON: function(b) {
            if (!b || "string" != typeof b) return null;
            b = e.trim(b);
            if (c.JSON && c.JSON.parse) return c.JSON.parse(b);
            if (Gc.test(b.replace(Ic, "@").replace(Jc, "]").replace(Hc, ""))) return (new Function("return " + b))();
            e.error("Invalid JSON: " + b)
        },
        parseXML: function(v) {
            var n, g;
            if (!v || "string" != typeof v) return null;
            try {
                c.DOMParser ? (g = new DOMParser, n = g.parseFromString(v,
                    "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(v))
            } catch (z) {
                n = b
            }
            return (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + v), n
        },
        noop: function() {},
        globalEval: function(b) {
            b && Dc.test(b) && (c.execScript || function(b) {
                c.eval.call(c, b)
            })(b)
        },
        camelCase: function(b) {
            return b.replace(Kc, "ms-").replace(Lc, Mc)
        },
        nodeName: function(b, c) {
            return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
        },
        each: function(c, n, g) {
            var z, d = 0,
                r = c.length,
                m = r === b || e.isFunction(c);
            if (g)
                if (m)
                    for (z in c) {
                        if (!1 === n.apply(c[z], g)) break
                    } else
                        for (; d < r && !1 !== n.apply(c[d++], g););
                else if (m)
                for (z in c) {
                    if (!1 === n.call(c[z], z, c[z])) break
                } else
                    for (; d < r && !1 !== n.call(c[d], d, c[d++]););
            return c
        },
        trim: ab && !ab.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : ab.call(b)
        } : function(b) {
            return null == b ? "" : (b + "").replace(Ec, "")
        },
        makeArray: function(b, c) {
            var g, z = c || [];
            return null != b && (g = e.type(b), null == b.length || "string" === g || "function" === g || "regexp" === g || e.isWindow(b) ? Eb.call(z,
                b) : e.merge(z, b)), z
        },
        inArray: function(b, c, g) {
            var e;
            if (c) {
                if (Fb) return Fb.call(c, b, g);
                e = c.length;
                for (g = g ? 0 > g ? Math.max(0, e + g) : g : 0; g < e; g++)
                    if (g in c && c[g] === b) return g
            }
            return -1
        },
        merge: function(c, n) {
            var g = n.length,
                e = c.length,
                d = 0;
            if ("number" == typeof g)
                for (; d < g; d++) c[e++] = n[d];
            else
                for (; n[d] !== b;) c[e++] = n[d++];
            return c.length = e, c
        },
        grep: function(b, c, g) {
            var e, d = [],
                r = 0,
                m = b.length;
            for (g = !!g; r < m; r++) e = !!c(b[r], r), g !== e && d.push(b[r]);
            return d
        },
        map: function(c, n, g) {
            var z, d, r = [],
                m = 0,
                f = c.length;
            if (c instanceof e ||
                f !== b && "number" == typeof f && (0 < f && c[0] && c[f - 1] || 0 === f || e.isArray(c)))
                for (; m < f; m++) z = n(c[m], m, g), null != z && (r[r.length] = z);
            else
                for (d in c) z = n(c[d], d, g), null != z && (r[r.length] = z);
            return r.concat.apply([], r)
        },
        guid: 1,
        proxy: function(c, n) {
            var g, d, x;
            return "string" == typeof n && (g = c[n], n = c, c = g), e.isFunction(c) ? (d = Z.call(arguments, 2), x = function() {
                return c.apply(n, d.concat(Z.call(arguments)))
            }, x.guid = c.guid = c.guid || e.guid++, x) : b
        },
        access: function(c, n, g, d, x, r, m) {
            var f, l = null == g,
                j = 0,
                q = c.length;
            if (g && "object" == typeof g) {
                for (j in g) e.access(c,
                    n, j, g[j], 1, r, d);
                x = 1
            } else if (d !== b) {
                f = m === b && e.isFunction(d);
                l && (f ? (f = n, n = function(b, c, v) {
                    return f.call(e(b), v)
                }) : (n.call(c, d), n = null));
                if (n)
                    for (; j < q; j++) n(c[j], g, f ? d.call(c[j], j, n(c[j], g)) : d, m);
                x = 1
            }
            return x ? c : l ? n.call(c) : q ? n(c[0], g) : r
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    e.ready.promise = function(b) {
        if (!Da)
            if (Da = e.Deferred(), "complete" === C.readyState) setTimeout(e.ready, 1);
            else if (C.addEventListener) C.addEventListener("DOMContentLoaded", Fa, !1), c.addEventListener("load", e.ready, !1);
        else {
            C.attachEvent("onreadystatechange",
                Fa);
            c.attachEvent("onload", e.ready);
            var n = !1;
            try {
                n = null == c.frameElement && C.documentElement
            } catch (g) {}
            n && n.doScroll && function x() {
                if (!e.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (b) {
                        return setTimeout(x, 50)
                    }
                    e.ready()
                }
            }()
        }
        return Da.promise(b)
    };
    e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, c) {
        Hb["[object " + c + "]"] = c.toLowerCase()
    });
    Db = e(C);
    var Ib = {};
    e.Callbacks = function(c) {
        var n;
        if ("string" == typeof c) {
            if (!(n = Ib[c])) {
                n = c;
                var g = Ib[n] = {};
                n = (e.each(n.split(fa), function(b,
                    c) {
                    g[c] = !0
                }), g)
            }
        } else n = e.extend({}, c);
        c = n;
        var d, x, r, m, f, l, j = [],
            q = !c.once && [],
            u = function(b) {
                d = c.memory && b;
                x = !0;
                l = m || 0;
                m = 0;
                f = j.length;
                for (r = !0; j && l < f; l++)
                    if (!1 === j[l].apply(b[0], b[1]) && c.stopOnFalse) {
                        d = !1;
                        break
                    }
                r = !1;
                j && (q ? q.length && u(q.shift()) : d ? j = [] : s.disable())
            },
            s = {
                add: function() {
                    if (j) {
                        var b = j.length;
                        (function xc(b) {
                            e.each(b, function(b, n) {
                                var g = e.type(n);
                                "function" === g && (!c.unique || !s.has(n)) ? j.push(n) : n && n.length && "string" !== g && xc(n)
                            })
                        })(arguments);
                        r ? f = j.length : d && (m = b, u(d))
                    }
                    return this
                },
                remove: function() {
                    return j &&
                        e.each(arguments, function(b, c) {
                            for (var v; - 1 < (v = e.inArray(c, j, v));) j.splice(v, 1), r && (v <= f && f--, v <= l && l--)
                        }), this
                },
                has: function(b) {
                    return -1 < e.inArray(b, j)
                },
                empty: function() {
                    return j = [], this
                },
                disable: function() {
                    return j = q = d = b, this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return q = b, d || s.disable(), this
                },
                locked: function() {
                    return !q
                },
                fireWith: function(b, c) {
                    return c = c || [], c = [b, c.slice ? c.slice() : c], j && (!x || q) && (r ? q.push(c) : u(c)), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!x
                }
            };
        return s
    };
    e.extend({
        Deferred: function(b) {
            var c = [
                    ["resolve", "done", e.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", e.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", e.Callbacks("memory")]
                ],
                g = "pending",
                d = {
                    state: function() {
                        return g
                    },
                    always: function() {
                        return x.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return e.Deferred(function(v) {
                            e.each(c, function(c, n) {
                                var g = n[0],
                                    d = b[c];
                                x[n[1]](e.isFunction(d) ? function() {
                                    var b = d.apply(this, arguments);
                                    b && e.isFunction(b.promise) ?
                                        b.promise().done(v.resolve).fail(v.reject).progress(v.notify) : v[g + "With"](this === x ? v : this, [b])
                                } : v[g])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? e.extend(b, d) : d
                    }
                },
                x = {};
            return d.pipe = d.then, e.each(c, function(b, v) {
                var e = v[2],
                    f = v[3];
                d[v[1]] = e.add;
                f && e.add(function() {
                    g = f
                }, c[b ^ 1][2].disable, c[2][2].lock);
                x[v[0]] = e.fire;
                x[v[0] + "With"] = e.fireWith
            }), d.promise(x), b && b.call(x, x), x
        },
        when: function(b) {
            var c = 0,
                g = Z.call(arguments),
                d = g.length,
                x = 1 !== d || b && e.isFunction(b.promise) ? d : 0,
                r = 1 === x ? b : e.Deferred(),
                m = function(b, c, v) {
                    return function(n) {
                        c[b] = this;
                        v[b] = 1 < arguments.length ? Z.call(arguments) : n;
                        v === f ? r.notifyWith(c, v) : --x || r.resolveWith(c, v)
                    }
                },
                f, l, j;
            if (1 < d) {
                f = Array(d);
                l = Array(d);
                for (j = Array(d); c < d; c++) g[c] && e.isFunction(g[c].promise) ? g[c].promise().done(m(c, j, g)).fail(r.reject).progress(m(c, l, f)) : --x
            }
            return x || r.resolveWith(j, g), r.promise()
        }
    });
    var Nc = e,
        bb, P, Ga, ga, Ha, Ia, T, ha, Ja, cb, ua, Jb, F = C.createElement("div");
    F.setAttribute("className", "t");
    F.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ga = F.getElementsByTagName("*");
    ga = F.getElementsByTagName("a")[0];
    ga.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ga || !Ga.length) bb = {};
    else {
        Ha = C.createElement("select");
        Ia = Ha.appendChild(C.createElement("option"));
        T = F.getElementsByTagName("input")[0];
        P = {
            leadingWhitespace: 3 === F.firstChild.nodeType,
            tbody: !F.getElementsByTagName("tbody").length,
            htmlSerialize: !!F.getElementsByTagName("link").length,
            style: /top/.test(ga.getAttribute("style")),
            hrefNormalized: "/a" === ga.getAttribute("href"),
            opacity: /^0.5/.test(ga.style.opacity),
            cssFloat: !!ga.style.cssFloat,
            checkOn: "on" === T.value,
            optSelected: Ia.selected,
            getSetAttribute: "t" !== F.className,
            enctype: !!C.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === C.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        T.checked = !0;
        P.noCloneChecked = T.cloneNode(!0).checked;
        Ha.disabled = !0;
        P.optDisabled = !Ia.disabled;
        try {
            delete F.test
        } catch (Pd) {
            P.deleteExpando = !1
        }!F.addEventListener && F.attachEvent && F.fireEvent && (F.attachEvent("onclick", Jb = function() {
            P.noCloneEvent = !1
        }), F.cloneNode(!0).fireEvent("onclick"), F.detachEvent("onclick", Jb));
        T = C.createElement("input");
        T.value = "t";
        T.setAttribute("type", "radio");
        P.radioValue = "t" === T.value;
        T.setAttribute("checked", "checked");
        T.setAttribute("name", "t");
        F.appendChild(T);
        ha = C.createDocumentFragment();
        ha.appendChild(F.lastChild);
        P.checkClone =
            ha.cloneNode(!0).cloneNode(!0).lastChild.checked;
        P.appendChecked = T.checked;
        ha.removeChild(T);
        ha.appendChild(F);
        if (F.attachEvent)
            for (cb in {
                submit: !0,
                change: !0,
                focusin: !0
            }) Ja = "on" + cb, (ua = Ja in F) || (F.setAttribute(Ja, "return;"), ua = "function" == typeof F[Ja]), P[cb + "Bubbles"] = ua;
        bb = (e(function() {
            var b, n, g, e, d = C.getElementsByTagName("body")[0];
            d && (b = C.createElement("div"), b.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", d.insertBefore(b, d.firstChild), n = C.createElement("div"),
                b.appendChild(n), n.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", g = n.getElementsByTagName("td"), g[0].style.cssText = "padding:0;margin:0;border:0;display:none", ua = 0 === g[0].offsetHeight, g[0].style.display = "", g[1].style.display = "none", P.reliableHiddenOffsets = ua && 0 === g[0].offsetHeight, n.innerHTML = "", n.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", P.boxSizing =
                4 === n.offsetWidth, P.doesNotIncludeMarginInBodyOffset = 1 !== d.offsetTop, c.getComputedStyle && (P.pixelPosition = "1%" !== (c.getComputedStyle(n, null) || {}).top, P.boxSizingReliable = "4px" === (c.getComputedStyle(n, null) || {
                    width: "4px"
                }).width, e = C.createElement("div"), e.style.cssText = n.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", e.style.marginRight = e.style.width = "0", n.style.width = "1px", n.appendChild(e), P.reliableMarginRight = !parseFloat((c.getComputedStyle(e, null) || {}).marginRight)),
                "undefined" != typeof n.style.zoom && (n.innerHTML = "", n.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", P.inlineBlockNeedsLayout = 3 === n.offsetWidth, n.style.display = "block", n.style.overflow = "visible", n.innerHTML = "<div></div>", n.firstChild.style.width = "5px", P.shrinkWrapBlocks = 3 !== n.offsetWidth, b.style.zoom = 1), d.removeChild(b))
        }), ha.removeChild(F), Ga = ga = Ha = Ia = T = ha = F = null, P)
    }
    Nc.support = bb;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        sc = /([A-Z])/g;
    e.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? e.cache[b[e.expando]] : b[e.expando], !!b && !f(b)
        },
        data: function(c, n, g, d) {
            if (e.acceptData(c)) {
                var x, r, m = e.expando,
                    f = "string" == typeof n,
                    l = c.nodeType,
                    j = l ? e.cache : c,
                    q = l ? c[m] : c[m] && m;
                if (q && j[q] && (d || j[q].data) || !(f && g === b)) {
                    q || (l ? c[m] = q = e.deletedIds.pop() || e.guid++ : q = m);
                    j[q] || (j[q] = {},
                        l || (j[q].toJSON = e.noop));
                    if ("object" == typeof n || "function" == typeof n) d ? j[q] = e.extend(j[q], n) : j[q].data = e.extend(j[q].data, n);
                    return x = j[q], d || (x.data || (x.data = {}), x = x.data), g !== b && (x[e.camelCase(n)] = g), f ? (r = x[n], null == r && (r = x[e.camelCase(n)])) : r = x, r
                }
            }
        },
        removeData: function(b, c, g) {
            if (e.acceptData(b)) {
                var d, x, r, m = b.nodeType,
                    l = m ? e.cache : b,
                    j = m ? b[e.expando] : e.expando;
                if (l[j]) {
                    if (c && (d = g ? l[j] : l[j].data)) {
                        e.isArray(c) || (c in d ? c = [c] : (c = e.camelCase(c), c in d ? c = [c] : c = c.split(" ")));
                        x = 0;
                        for (r = c.length; x < r; x++) delete d[c[x]];
                        if (!(g ? f : e.isEmptyObject)(d)) return
                    }
                    if (g || !(delete l[j].data, !f(l[j]))) m ? e.cleanData([b], !0) : e.support.deleteExpando || l != l.window ? delete l[j] : l[j] = null
                }
            }
        },
        _data: function(b, c, g) {
            return e.data(b, c, g, !0)
        },
        acceptData: function(b) {
            var c = b.nodeName && e.noData[b.nodeName.toLowerCase()];
            return !c || !0 !== c && b.getAttribute("classid") === c
        }
    });
    e.fn.extend({
        data: function(c, n) {
            var g, z, x, r, m, f = this[0],
                l = 0,
                j = null;
            if (c === b) {
                if (this.length && (j = e.data(f), 1 === f.nodeType && !e._data(f, "parsedAttrs"))) {
                    x = f.attributes;
                    for (m = x.length; l <
                        m; l++) r = x[l].name, r.indexOf("data-") || (r = e.camelCase(r.substring(5)), d(f, r, j[r]));
                    e._data(f, "parsedAttrs", !0)
                }
                return j
            }
            return "object" == typeof c ? this.each(function() {
                e.data(this, c)
            }) : (g = c.split(".", 2), g[1] = g[1] ? "." + g[1] : "", z = g[1] + "!", e.access(this, function(n) {
                if (n === b) return j = this.triggerHandler("getData" + z, [g[0]]), j === b && f && (j = e.data(f, c), j = d(f, c, j)), j === b && g[1] ? this.data(g[0]) : j;
                g[1] = n;
                this.each(function() {
                    var b = e(this);
                    b.triggerHandler("setData" + z, g);
                    e.data(this, c, n);
                    b.triggerHandler("changeData" +
                        z, g)
                })
            }, null, n, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                e.removeData(this, b)
            })
        }
    });
    e.extend({
        queue: function(b, c, g) {
            var d;
            if (b) return c = (c || "fx") + "queue", d = e._data(b, c), g && (!d || e.isArray(g) ? d = e._data(b, c, e.makeArray(g)) : d.push(g)), d || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var g = e.queue(b, c),
                d = g.length,
                x = g.shift(),
                r = e._queueHooks(b, c),
                m = function() {
                    e.dequeue(b, c)
                };
            "inprogress" === x && (x = g.shift(), d--);
            x && ("fx" === c && g.unshift("inprogress"), delete r.stop, x.call(b, m, r));
            !d && r && r.empty.fire()
        },
        _queueHooks: function(b, c) {
            var g = c + "queueHooks";
            return e._data(b, g) || e._data(b, g, {
                empty: e.Callbacks("once memory").add(function() {
                    e.removeData(b, c + "queue", !0);
                    e.removeData(b, g, !0)
                })
            })
        }
    });
    e.fn.extend({
        queue: function(c, n) {
            var g = 2;
            return "string" != typeof c && (n = c, c = "fx", g--), arguments.length < g ? e.queue(this[0], c) : n === b ? this : this.each(function() {
                var b = e.queue(this, c, n);
                e._queueHooks(this, c);
                "fx" === c && "inprogress" !== b[0] && e.dequeue(this, c)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                e.dequeue(this,
                    b)
            })
        },
        delay: function(b, c) {
            return b = e.fx ? e.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, n) {
                var e = setTimeout(c, b);
                n.stop = function() {
                    clearTimeout(e)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(c, n) {
            var g, d = 1,
                x = e.Deferred(),
                r = this,
                m = this.length,
                f = function() {
                    --d || x.resolveWith(r, [r])
                };
            "string" != typeof c && (n = c, c = b);
            for (c = c || "fx"; m--;)(g = e._data(r[m], c + "queueHooks")) && g.empty && (d++, g.empty.add(f));
            return f(), x.promise(n)
        }
    });
    var ba, Kb, Lb, Mb = /[\t\r\n]/g,
        Oc = /\r/g,
        Pc = /^(?:button|input)$/i,
        Qc = /^(?:button|input|object|select|textarea)$/i,
        Rc = /^a(?:rea|)$/i,
        Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ob = e.support.getSetAttribute;
    e.fn.extend({
        attr: function(b, c) {
            return e.access(this, e.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                e.removeAttr(this, b)
            })
        },
        prop: function(b, c) {
            return e.access(this, e.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(c) {
            return c = e.propFix[c] ||
                c, this.each(function() {
                    try {
                        this[c] = b, delete this[c]
                    } catch (n) {}
                })
        },
        addClass: function(b) {
            var c, g, d, x, r, m, f;
            if (e.isFunction(b)) return this.each(function(c) {
                e(this).addClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b) {
                c = b.split(fa);
                g = 0;
                for (d = this.length; g < d; g++)
                    if (x = this[g], 1 === x.nodeType)
                        if (!x.className && 1 === c.length) x.className = b;
                        else {
                            r = " " + x.className + " ";
                            m = 0;
                            for (f = c.length; m < f; m++) 0 > r.indexOf(" " + c[m] + " ") && (r += c[m] + " ");
                            x.className = e.trim(r)
                        }
            }
            return this
        },
        removeClass: function(c) {
            var n,
                g, d, x, r, m, f;
            if (e.isFunction(c)) return this.each(function(b) {
                e(this).removeClass(c.call(this, b, this.className))
            });
            if (c && "string" == typeof c || c === b) {
                n = (c || "").split(fa);
                m = 0;
                for (f = this.length; m < f; m++)
                    if (d = this[m], 1 === d.nodeType && d.className) {
                        g = (" " + d.className + " ").replace(Mb, " ");
                        x = 0;
                        for (r = n.length; x < r; x++)
                            for (; 0 <= g.indexOf(" " + n[x] + " ");) g = g.replace(" " + n[x] + " ", " ");
                        d.className = c ? e.trim(g) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var g = typeof b,
                d = "boolean" == typeof c;
            return e.isFunction(b) ? this.each(function(g) {
                e(this).toggleClass(b.call(this,
                    g, this.className, c), c)
            }) : this.each(function() {
                if ("string" === g)
                    for (var x, r = 0, m = e(this), f = c, l = b.split(fa); x = l[r++];) f = d ? f : !m.hasClass(x), m[f ? "addClass" : "removeClass"](x);
                else if ("undefined" === g || "boolean" === g) this.className && e._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : e._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, g = this.length; c < g; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Mb, " ").indexOf(b)) return !0;
            return !1
        },
        val: function(c) {
            var n, g, d, x = this[0];
            if (arguments.length) return d = e.isFunction(c), this.each(function(g) {
                var m, x = e(this);
                if (1 === this.nodeType && (d ? m = c.call(this, g, x.val()) : m = c, null == m ? m = "" : "number" == typeof m ? m += "" : e.isArray(m) && (m = e.map(m, function(b) {
                    return null == b ? "" : b + ""
                })), n = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], !n || !("set" in n) || n.set(this, m, "value") === b)) this.value = m
            });
            if (x) return n = e.valHooks[x.type] || e.valHooks[x.nodeName.toLowerCase()], n && "get" in n && (g = n.get(x,
                "value")) !== b ? g : (g = x.value, "string" == typeof g ? g.replace(Oc, "") : null == g ? "" : g)
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = b.attributes.value;
                    return !c || c.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var c, g, d = b.selectedIndex,
                        x = [],
                        r = b.options,
                        m = "select-one" === b.type;
                    if (0 > d) return null;
                    b = m ? d : 0;
                    for (g = m ? d + 1 : r.length; b < g; b++)
                        if (c = r[b], c.selected && (e.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !e.nodeName(c.parentNode, "optgroup"))) {
                            c = e(c).val();
                            if (m) return c;
                            x.push(c)
                        }
                    return m && !x.length && r.length ? e(r[d]).val() : x
                },
                set: function(b, c) {
                    var g = e.makeArray(c);
                    return e(b).find("option").each(function() {
                        this.selected = 0 <= e.inArray(e(this).val(), g)
                    }), g.length || (b.selectedIndex = -1), g
                }
            }
        },
        attrFn: {},
        attr: function(c, n, g, d) {
            var x, r, m = c.nodeType;
            if (c && !(3 === m || 8 === m || 2 === m)) {
                if (d && e.isFunction(e.fn[n])) return e(c)[n](g);
                if ("undefined" == typeof c.getAttribute) return e.prop(c, n, g);
                (d = 1 !== m || !e.isXMLDoc(c)) && (n = n.toLowerCase(), r = e.attrHooks[n] || (Nb.test(n) ? Kb :
                    ba));
                if (g !== b) {
                    if (null === g) {
                        e.removeAttr(c, n);
                        return
                    }
                    return r && "set" in r && d && (x = r.set(c, g, n)) !== b ? x : (c.setAttribute(n, g + ""), g)
                }
                return r && "get" in r && d && null !== (x = r.get(c, n)) ? x : (x = c.getAttribute(n), null === x ? b : x)
            }
        },
        removeAttr: function(b, c) {
            var g, d, x, r, m = 0;
            if (c && 1 === b.nodeType)
                for (d = c.split(fa); m < d.length; m++)(x = d[m]) && (g = e.propFix[x] || x, r = Nb.test(x), r || e.attr(b, x, ""), b.removeAttribute(Ob ? x : g), r && g in b && (b[g] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (Pc.test(b.nodeName) && b.parentNode) e.error("type property can't be changed");
                    else if (!e.support.radioValue && "radio" === c && e.nodeName(b, "input")) {
                        var g = b.value;
                        return b.setAttribute("type", c), g && (b.value = g), c
                    }
                }
            },
            value: {
                get: function(b, c) {
                    return ba && e.nodeName(b, "button") ? ba.get(b, c) : c in b ? b.value : null
                },
                set: function(b, c, g) {
                    if (ba && e.nodeName(b, "button")) return ba.set(b, c, g);
                    b.value = c
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(c, n, g) {
            var d, x, r, m = c.nodeType;
            if (c && !(3 === m || 8 === m || 2 === m)) return r = 1 !== m || !e.isXMLDoc(c), r && (n = e.propFix[n] || n, x = e.propHooks[n]), g !== b ? x && "set" in x && (d = x.set(c, g, n)) !== b ? d : c[n] = g : x && "get" in x && null !== (d = x.get(c, n)) ? d : c[n]
        },
        propHooks: {
            tabIndex: {
                get: function(c) {
                    var n = c.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Qc.test(c.nodeName) || Rc.test(c.nodeName) && c.href ? 0 : b
                }
            }
        }
    });
    Kb = {
        get: function(c,
            n) {
            var g, d = e.prop(c, n);
            return !0 === d || "boolean" != typeof d && (g = c.getAttributeNode(n)) && !1 !== g.nodeValue ? n.toLowerCase() : b
        },
        set: function(b, c, g) {
            var d;
            return !1 === c ? e.removeAttr(b, g) : (d = e.propFix[g] || g, d in b && (b[d] = !0), b.setAttribute(g, g.toLowerCase())), g
        }
    };
    Ob || (Lb = {
        name: !0,
        id: !0,
        coords: !0
    }, ba = e.valHooks.button = {
        get: function(c, n) {
            var g;
            return g = c.getAttributeNode(n), g && (Lb[n] ? "" !== g.value : g.specified) ? g.value : b
        },
        set: function(b, c, g) {
            var e = b.getAttributeNode(g);
            return e || (e = C.createAttribute(g), b.setAttributeNode(e)),
                e.value = c + ""
        }
    }, e.each(["width", "height"], function(b, c) {
        e.attrHooks[c] = e.extend(e.attrHooks[c], {
            set: function(b, v) {
                if ("" === v) return b.setAttribute(c, "auto"), v
            }
        })
    }), e.attrHooks.contenteditable = {
        get: ba.get,
        set: function(b, c, g) {
            "" === c && (c = "false");
            ba.set(b, c, g)
        }
    });
    e.support.hrefNormalized || e.each(["href", "src", "width", "height"], function(c, n) {
        e.attrHooks[n] = e.extend(e.attrHooks[n], {
            get: function(c) {
                c = c.getAttribute(n, 2);
                return null === c ? b : c
            }
        })
    });
    e.support.style || (e.attrHooks.style = {
        get: function(c) {
            return c.style.cssText.toLowerCase() ||
                b
        },
        set: function(b, c) {
            return b.style.cssText = c + ""
        }
    });
    e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    e.support.enctype || (e.propFix.enctype = "encoding");
    e.support.checkOn || e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = e.extend(e.valHooks[this], {
            set: function(b, c) {
                if (e.isArray(c)) return b.checked = 0 <= e.inArray(e(b).val(), c)
            }
        })
    });
    var db = /^(?:textarea|input|select)$/i,
        Pb = /^([^\.]*|)(?:\.(.+)|)$/,
        Sc = /(?:^|\s)hover(\.\S+|)\b/,
        Tc = /^key/,
        Uc = /^(?:mouse|contextmenu)|click/,
        Qb = /^(?:focusinfocus|focusoutblur)$/,
        Rb = function(b) {
            return e.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
        };
    e.event = {
        add: function(c, n, g, d, x) {
            var r, m, f, l, j, q, u, s, p;
            if (!(3 === c.nodeType || 8 === c.nodeType || !n || !g || !(r = e._data(c)))) {
                g.handler && (u = g, g = u.handler, x = u.selector);
                g.guid || (g.guid = e.guid++);
                (f = r.events) || (r.events = f = {});
                (m = r.handle) || (r.handle = m = function(c) {
                    return "undefined" != typeof e && (!c || e.event.triggered !== c.type) ? e.event.dispatch.apply(m.elem, arguments) : b
                }, m.elem = c);
                n = e.trim(Rb(n)).split(" ");
                for (r = 0; r < n.length; r++) {
                    l = Pb.exec(n[r]) || [];
                    j = l[1];
                    q = (l[2] || "").split(".").sort();
                    p = e.event.special[j] || {};
                    j = (x ? p.delegateType : p.bindType) || j;
                    p = e.event.special[j] || {};
                    l = e.extend({
                        type: j,
                        origType: l[1],
                        data: d,
                        handler: g,
                        guid: g.guid,
                        selector: x,
                        needsContext: x && e.expr.match.needsContext.test(x),
                        namespace: q.join(".")
                    }, u);
                    s = f[j];
                    if (!s && (s = f[j] = [], s.delegateCount = 0, !p.setup || !1 === p.setup.call(c, d, q, m))) c.addEventListener ? c.addEventListener(j, m, !1) : c.attachEvent && c.attachEvent("on" + j, m);
                    p.add && (p.add.call(c, l), l.handler.guid || (l.handler.guid = g.guid));
                    x ? s.splice(s.delegateCount++, 0, l) : s.push(l);
                    e.event.global[j] = !0
                }
                c = null
            }
        },
        global: {},
        remove: function(b, c, g, d, x) {
            var r, m, f, l, j, q, u, s, p, t, A = e.hasData(b) && e._data(b);
            if (A && (u = A.events)) {
                c = e.trim(Rb(c || "")).split(" ");
                for (r = 0; r < c.length; r++)
                    if (m = Pb.exec(c[r]) || [], f = l = m[1], m = m[2], f) {
                        s = e.event.special[f] || {};
                        f = (d ? s.delegateType : s.bindType) || f;
                        p = u[f] || [];
                        j = p.length;
                        m = m ? RegExp("(^|\\.)" + m.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (q = 0; q < p.length; q++) t = p[q], (x || l === t.origType) && (!g || g.guid === t.guid) && (!m || m.test(t.namespace)) && (!d || d === t.selector || "**" === d && t.selector) && (p.splice(q--, 1), t.selector && p.delegateCount--, s.remove && s.remove.call(b, t));
                        0 === p.length && j !== p.length && ((!s.teardown || !1 === s.teardown.call(b, m, A.handle)) && e.removeEvent(b,
                            f, A.handle), delete u[f])
                    } else
                        for (f in u) e.event.remove(b, f + c[r], g, d, !0);
                e.isEmptyObject(u) && (delete A.handle, e.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(v, n, g, d) {
            if (!g || 3 !== g.nodeType && 8 !== g.nodeType) {
                var x, f, m, l, j, q, u, s = v.type || v;
                l = [];
                if (!Qb.test(s + e.event.triggered) && (0 <= s.indexOf("!") && (s = s.slice(0, -1), x = !0), 0 <= s.indexOf(".") && (l = s.split("."), s = l.shift(), l.sort()), g && !e.event.customEvent[s] || e.event.global[s]))
                    if (v = "object" == typeof v ? v[e.expando] ?
                        v : new e.Event(s, v) : new e.Event(s), v.type = s, v.isTrigger = !0, v.exclusive = x, v.namespace = l.join("."), v.namespace_re = v.namespace ? RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = 0 > s.indexOf(":") ? "on" + s : "", g) {
                        if (v.result = b, v.target || (v.target = g), n = null != n ? e.makeArray(n) : [], n.unshift(v), j = e.event.special[s] || {}, !(j.trigger && !1 === j.trigger.apply(g, n))) {
                            u = [
                                [g, j.bindType || s]
                            ];
                            if (!d && !j.noBubble && !e.isWindow(g)) {
                                f = j.delegateType || s;
                                x = Qb.test(f + s) ? g : g.parentNode;
                                for (m = g; x; x = x.parentNode) u.push([x, f]),
                                    m = x;
                                m === (g.ownerDocument || C) && u.push([m.defaultView || m.parentWindow || c, f])
                            }
                            for (f = 0; f < u.length && !v.isPropagationStopped(); f++) x = u[f][0], v.type = u[f][1], (q = (e._data(x, "events") || {})[v.type] && e._data(x, "handle")) && q.apply(x, n), (q = l && x[l]) && e.acceptData(x) && q.apply && !1 === q.apply(x, n) && v.preventDefault();
                            return v.type = s, !d && !v.isDefaultPrevented() && (!j._default || !1 === j._default.apply(g.ownerDocument, n)) && ("click" !== s || !e.nodeName(g, "a")) && e.acceptData(g) && l && g[s] && ("focus" !== s && "blur" !== s || 0 !== v.target.offsetWidth) &&
                                !e.isWindow(g) && (m = g[l], m && (g[l] = null), e.event.triggered = s, g[s](), e.event.triggered = b, m && (g[l] = m)), v.result
                        }
                    } else
                        for (f in g = e.cache, g) g[f].events && g[f].events[s] && e.event.trigger(v, n, g[f].handle.elem, !0)
            }
        },
        dispatch: function(v) {
            v = e.event.fix(v || c.event);
            var n, g, d, f, r, m, l = (e._data(this, "events") || {})[v.type] || [],
                j = l.delegateCount,
                q = Z.call(arguments),
                s = !v.exclusive && !v.namespace,
                u = e.event.special[v.type] || {},
                p = [];
            q[0] = v;
            v.delegateTarget = this;
            if (!(u.preDispatch && !1 === u.preDispatch.call(this, v))) {
                if (j &&
                    (!v.button || "click" !== v.type))
                    for (g = v.target; g != this; g = g.parentNode || this)
                        if (!0 !== g.disabled || "click" !== v.type) {
                            f = {};
                            r = [];
                            for (n = 0; n < j; n++) d = l[n], m = d.selector, f[m] === b && (f[m] = d.needsContext ? 0 <= e(m, this).index(g) : e.find(m, this, null, [g]).length), f[m] && r.push(d);
                            r.length && p.push({
                                elem: g,
                                matches: r
                            })
                        }
                l.length > j && p.push({
                    elem: this,
                    matches: l.slice(j)
                });
                for (n = 0; n < p.length && !v.isPropagationStopped(); n++) {
                    f = p[n];
                    v.currentTarget = f.elem;
                    for (g = 0; g < f.matches.length && !v.isImmediatePropagationStopped(); g++)
                        if (d = f.matches[g],
                            s || !v.namespace && !d.namespace || v.namespace_re && v.namespace_re.test(d.namespace)) v.data = d.data, v.handleObj = d, d = ((e.event.special[d.origType] || {}).handle || d.handler).apply(f.elem, q), d !== b && (v.result = d, !1 === d && (v.preventDefault(), v.stopPropagation()))
                }
                return u.postDispatch && u.postDispatch.call(this, v), v.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(c, n) {
                var g, e, d, f = n.button,
                    m = n.fromElement;
                return null == c.pageX && null != n.clientX && (g = c.target.ownerDocument || C, e = g.documentElement, d = g.body, c.pageX = n.clientX + (e && e.scrollLeft || d && d.scrollLeft || 0) - (e && e.clientLeft ||
                    d && d.clientLeft || 0), c.pageY = n.clientY + (e && e.scrollTop || d && d.scrollTop || 0) - (e && e.clientTop || d && d.clientTop || 0)), !c.relatedTarget && m && (c.relatedTarget = m === c.target ? n.toElement : m), !c.which && f !== b && (c.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), c
            }
        },
        fix: function(b) {
            if (b[e.expando]) return b;
            var c, g, d = b,
                f = e.event.fixHooks[b.type] || {},
                r = f.props ? this.props.concat(f.props) : this.props;
            b = e.Event(d);
            for (c = r.length; c;) g = r[--c], b[g] = d[g];
            return b.target || (b.target = d.srcElement || C), 3 === b.target.nodeType && (b.target = b.target.parentNode),
                b.metaKey = !!b.metaKey, f.filter ? f.filter(b, d) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, c, g) {
                    e.isWindow(this) && (this.onbeforeunload = g)
                },
                teardown: function(b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, c, g, d) {
            b = e.extend(new e.Event, g, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? e.event.trigger(b, null, c) : e.event.dispatch.call(c, b);
            b.isDefaultPrevented() && g.preventDefault()
        }
    };
    e.event.handle =
        e.event.dispatch;
    e.removeEvent = C.removeEventListener ? function(b, c, g) {
        b.removeEventListener && b.removeEventListener(c, g, !1)
    } : function(b, c, g) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, g))
    };
    e.Event = function(b, c) {
        if (this instanceof e.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? p : j) : this.type = b, c && e.extend(this, c), this.timeStamp = b && b.timeStamp || e.now(),
            this[e.expando] = !0;
        else return new e.Event(b, c)
    };
    e.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = p;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = p;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = p;
            this.stopPropagation()
        },
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, c) {
        e.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var v, d = b.relatedTarget,
                    f = b.handleObj;
                if (!d || d !== this && !e.contains(this, d)) b.type = f.origType, v = f.handler.apply(this, arguments), b.type = c;
                return v
            }
        }
    });
    e.support.submitBubbles || (e.event.special.submit = {
        setup: function() {
            if (e.nodeName(this, "form")) return !1;
            e.event.add(this, "click._submit keypress._submit", function(c) {
                c = c.target;
                (c = e.nodeName(c, "input") || e.nodeName(c, "button") ?
                    c.form : b) && !e._data(c, "_submit_attached") && (e.event.add(c, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }), e._data(c, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && e.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (e.nodeName(this, "form")) return !1;
            e.event.remove(this, "._submit")
        }
    });
    e.support.changeBubbles || (e.event.special.change = {
        setup: function() {
            if (db.test(this.nodeName)) {
                if ("checkbox" === this.type ||
                    "radio" === this.type) e.event.add(this, "propertychange._change", function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), e.event.add(this, "click._change", function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    e.event.simulate("change", this, b, !0)
                });
                return !1
            }
            e.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                db.test(b.nodeName) && !e._data(b, "_change_attached") && (e.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger &&
                        e.event.simulate("change", this.parentNode, b, !0)
                }), e._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return e.event.remove(this, "._change"), !db.test(this.nodeName)
        }
    });
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var g = 0,
            d = function(b) {
                e.event.simulate(c, b.target, e.event.fix(b), !0)
            };
        e.event.special[c] = {
            setup: function() {
                0 === g++ && C.addEventListener(b, d, !0)
            },
            teardown: function() {
                0 === --g && C.removeEventListener(b, d, !0)
            }
        }
    });
    e.fn.extend({
        on: function(c, n, g, d, f) {
            var l, m;
            if ("object" == typeof c) {
                "string" != typeof n && (g = g || n, n = b);
                for (m in c) this.on(m, n, g, c[m], f);
                return this
            }
            null == g && null == d ? (d = n, g = n = b) : null == d && ("string" == typeof n ? (d = g, g = b) : (d = g, g = n, n = b));
            if (!1 === d) d = j;
            else if (!d) return this;
            return 1 === f && (l = d, d = function(b) {
                return e().off(b), l.apply(this, arguments)
            }, d.guid = l.guid || (l.guid = e.guid++)), this.each(function() {
                e.event.add(this,
                    c, d, g, n)
            })
        },
        one: function(b, c, g, e) {
            return this.on(b, c, g, e, 1)
        },
        off: function(c, n, g) {
            var d, f;
            if (c && c.preventDefault && c.handleObj) return d = c.handleObj, e(c.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof c) {
                for (f in c) this.off(f, n, c[f]);
                return this
            }
            if (!1 === n || "function" == typeof n) g = n, n = b;
            return !1 === g && (g = j), this.each(function() {
                e.event.remove(this, c, g, n)
            })
        },
        bind: function(b, c, g) {
            return this.on(b, null, c, g)
        },
        unbind: function(b, c) {
            return this.off(b,
                null, c)
        },
        live: function(b, c, g) {
            return e(this.context).on(b, this.selector, c, g), this
        },
        die: function(b, c) {
            return e(this.context).off(b, this.selector || "**", c), this
        },
        delegate: function(b, c, g, d) {
            return this.on(c, b, g, d)
        },
        undelegate: function(b, c, g) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", g)
        },
        trigger: function(b, c) {
            return this.each(function() {
                e.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            if (this[0]) return e.event.trigger(b, c, this[0], !0)
        },
        toggle: function(b) {
            var c = arguments,
                g =
                b.guid || e.guid++,
                d = 0,
                f = function(g) {
                    var f = (e._data(this, "lastToggle" + b.guid) || 0) % d;
                    return e._data(this, "lastToggle" + b.guid, f + 1), g.preventDefault(), c[f].apply(this, arguments) || !1
                };
            for (f.guid = g; d < c.length;) c[d++].guid = g;
            return this.click(f)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(b, c) {
            e.fn[c] = function(b, v) {
                return null == v && (v = b, b = null), 0 < arguments.length ? this.on(c, null, b, v) : this.trigger(c)
            };
            Tc.test(c) && (e.event.fixHooks[c] = e.event.keyHooks);
            Uc.test(c) && (e.event.fixHooks[c] = e.event.mouseHooks)
        });
    var Vc = c,
        G = function(b, c, g, d) {
            g = g || [];
            c = c || W;
            var e, f, m, l, j = c.nodeType;
            if (!b || "string" != typeof b) return g;
            if (1 !== j && 9 !== j) return [];
            m = Ka(c);
            if (!m && !d && (e = Wc.exec(b)))
                if (l = e[1])
                    if (9 === j) {
                        f = c.getElementById(l);
                        if (!f || !f.parentNode) return g;
                        if (f.id === l) return g.push(f), g
                    } else {
                        if (c.ownerDocument &&
                            (f = c.ownerDocument.getElementById(l)) && Sb(c, f) && f.id === l) return g.push(f), g
                    } else {
                if (e[2]) return oa.apply(g, pa.call(c.getElementsByTagName(b), 0)), g;
                if ((l = e[3]) && Tb && c.getElementsByClassName) return oa.apply(g, pa.call(c.getElementsByClassName(l), 0)), g
            }
            return eb(b.replace(La, "$1"), c, g, d, m)
        },
        va = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Ub = function(b) {
            return function(c) {
                var g = c.nodeName.toLowerCase();
                return ("input" === g || "button" === g) && c.type === b
            }
        },
        ia = function(b) {
            return X(function(c) {
                return c = +c, X(function(g, d) {
                    for (var e, f = b([], g.length, c), m = f.length; m--;) g[e = f[m]] && (g[e] = !(d[e] = g[e]))
                })
            })
        },
        Ma = function(b, c, g) {
            if (b === c) return g;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        },
        Oa = function(b, c) {
            var g, d, e, f, m, l, j;
            if (m = Vb[N][b]) return c ? 0 : m.slice(0);
            m = b;
            l = [];
            for (j = L.preFilter; m;) {
                if (!g || (d = Xc.exec(m))) d && (m = m.slice(d[0].length)), l.push(e = []);
                g = !1;
                if (d = Yc.exec(m)) e.push(g = new Wb(d.shift())), m = m.slice(g.length), g.type = d[0].replace(La, " ");
                for (f in L.filter)(d = Na[f].exec(m)) &&
                    (!j[f] || (d = j[f](d, W, !0))) && (e.push(g = new Wb(d.shift())), m = m.slice(g.length), g.type = f, g.matches = d);
                if (!g) break
            }
            return c ? m.length : m ? G.error(b) : Vb(b, l).slice(0)
        },
        gb = function(b, c, g) {
            var d = c.dir,
                e = g && "parentNode" === c.dir,
                f = Zc++;
            return c.first ? function(c, g, n) {
                for (; c = c[d];)
                    if (e || 1 === c.nodeType) return b(c, g, n)
            } : function(c, g, n) {
                if (n)
                    for (; c = c[d];) {
                        if ((e || 1 === c.nodeType) && b(c, g, n)) return c
                    } else
                        for (var l, j = wa + " " + f + " ", q = j + fb; c = c[d];)
                            if (e || 1 === c.nodeType) {
                                if ((l = c[N]) === q) return c.sizset;
                                if ("string" == typeof l &&
                                    0 === l.indexOf(j)) {
                                    if (c.sizset) return c
                                } else {
                                    c[N] = q;
                                    if (b(c, g, n)) return c.sizset = !0, c;
                                    c.sizset = !1
                                }
                            }
            }
        },
        hb = function(b) {
            return 1 < b.length ? function(c, g, d) {
                for (var e = b.length; e--;)
                    if (!b[e](c, g, d)) return !1;
                return !0
            } : b[0]
        },
        Pa = function(b, c, g, d, e) {
            for (var f, m = [], l = 0, j = b.length, q = null != c; l < j; l++)
                if (f = b[l])
                    if (!g || g(f, d, e)) m.push(f), q && c.push(l);
            return m
        },
        ib = function(b, c, g, d, e, f) {
            return d && !d[N] && (d = ib(d)), e && !e[N] && (e = ib(e, f)), X(function(f, l, r, j) {
                if (!f || !e) {
                    var q, u, s = [],
                        p = [],
                        t = l.length;
                    if (!(u = f)) {
                        u = c || "*";
                        var A =
                            r.nodeType ? [r] : r,
                            D = [];
                        q = 0;
                        for (var B = A.length; q < B; q++) G(u, A[q], D, f);
                        u = D
                    }
                    A = b && (f || !c) ? Pa(u, s, b, r, j) : u;
                    D = g ? e || (f ? b : t || d) ? [] : l : A;
                    g && g(A, D, r, j);
                    if (d) {
                        u = Pa(D, p);
                        d(u, [], r, j);
                        for (r = u.length; r--;)
                            if (q = u[r]) D[p[r]] = !(A[p[r]] = q)
                    }
                    if (f)
                        for (r = b && D.length; r--;) {
                            if (q = D[r]) f[s[r]] = !(l[s[r]] = q)
                        } else D = Pa(D === l ? D.splice(t, D.length) : D), e ? e(null, l, D, j) : oa.apply(l, D)
                }
            })
        },
        jb = function(b) {
            var c, g, d, e = b.length,
                f = L.relative[b[0].type];
            g = f || L.relative[" "];
            for (var l = f ? 1 : 0, j = gb(function(b) {
                return b === c
            }, g, !0), q = gb(function(b) {
                return -1 <
                    Xb.call(c, b)
            }, g, !0), u = [
                function(b, v, g) {
                    return !f && (g || v !== Qa) || ((c = v).nodeType ? j(b, v, g) : q(b, v, g))
                }
            ]; l < e; l++)
                if (g = L.relative[b[l].type]) u = [gb(hb(u), g)];
                else {
                    g = L.filter[b[l].type].apply(null, b[l].matches);
                    if (g[N]) {
                        for (d = ++l; d < e && !L.relative[b[d].type]; d++);
                        return ib(1 < l && hb(u), 1 < l && b.slice(0, l - 1).join("").replace(La, "$1"), g, l < d && jb(b.slice(l, d)), d < e && jb(b = b.slice(d)), d < e && b.join(""))
                    }
                    u.push(g)
                }
            return hb(u)
        },
        eb = function(b, c, g, d, e) {
            var f, l, j, q, u = Oa(b);
            if (!d && 1 === u.length) {
                l = u[0] = u[0].slice(0);
                if (2 < l.length &&
                    "ID" === (j = l[0]).type && 9 === c.nodeType && !e && L.relative[l[1].type]) {
                    c = L.find.ID(j.matches[0].replace(ja, ""), c, e)[0];
                    if (!c) return g;
                    b = b.slice(l.shift().length)
                }
                for (f = Na.POS.test(b) ? -1 : l.length - 1; 0 <= f; f--) {
                    j = l[f];
                    if (L.relative[q = j.type]) break;
                    if (q = L.find[q])
                        if (d = q(j.matches[0].replace(ja, ""), kb.test(l[0].type) && c.parentNode || c, e)) {
                            l.splice(f, 1);
                            b = d.length && l.join("");
                            if (!b) return oa.apply(g, pa.call(d, 0)), g;
                            break
                        }
                }
            }
            return lb(b, u)(d, c, e, g, kb.test(b)), g
        },
        Yb = function() {},
        fb, mb, L, Ra, Ka, Sb, lb, nb, xa, Qa, Zb = !0,
        N = ("sizcache" + Math.random()).replace(".", ""),
        Wb = String,
        W = Vc.document,
        V = W.documentElement,
        wa = 0,
        Zc = 0,
        $c = [].pop,
        oa = [].push,
        pa = [].slice,
        Xb = [].indexOf || function(b) {
            for (var c = 0, g = this.length; c < g; c++)
                if (this[c] === b) return c;
            return -1
        },
        X = function(b, c) {
            return b[N] = null == c || c, b
        },
        ob = function() {
            var b = {},
                c = [];
            return X(function(g, d) {
                return c.push(g) > L.cacheLength && delete b[c.shift()], b[g] = d
            }, b)
        },
        $b = ob(),
        Vb = ob(),
        ac = ob(),
        bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        pb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)",
        La = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        ad = RegExp(pb),
        Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        kb = /[\x20\t\r\n\f]*[+~]/,
        bd = /h\d/i,
        cd = /input|select|textarea|button/i,
        ja = /\\(?!\\)/g,
        Na = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + bc),
            PSEUDO: RegExp("^" + pb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        ca = function(b) {
            var c = W.createElement("div");
            try {
                return b(c)
            } catch (g) {
                return !1
            } finally {}
        },
        dd = ca(function(b) {
            return b.appendChild(W.createComment("")), !b.getElementsByTagName("*").length
        }),
        ed = ca(function(b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        fd = ca(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Tb = ca(function(b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        gd = ca(function(b) {
            b.id = N + 0;
            b.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>";
            V.insertBefore(b, V.firstChild);
            var c = W.getElementsByName &&
                W.getElementsByName(N).length === 2 + W.getElementsByName(N + 0).length;
            return mb = !W.getElementById(N), V.removeChild(b), c
        });
    try {
        pa.call(V.childNodes, 0)[0].nodeType
    } catch (Qd) {
        pa = function(b) {
            for (var c, g = []; c = this[b]; b++) g.push(c);
            return g
        }
    }
    G.matches = function(b, c) {
        return G(b, null, null, c)
    };
    G.matchesSelector = function(b, c) {
        return 0 < G(c, null, null, [b]).length
    };
    Ra = G.getText = function(b) {
        var c, g = "",
            d = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b =
                    b.nextSibling) g += Ra(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            } else
            for (; c = b[d]; d++) g += Ra(c);
        return g
    };
    Ka = G.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Sb = G.contains = V.contains ? function(b, c) {
        var g = 9 === b.nodeType ? b.documentElement : b,
            d = c && c.parentNode;
        return b === d || !(!d || !(1 === d.nodeType && g.contains && g.contains(d)))
    } : V.compareDocumentPosition ? function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b) return !0;
        return !1
    };
    G.attr = function(b, c) {
        var g, d = Ka(b);
        return d || (c = c.toLowerCase()), (g = L.attrHandle[c]) ? g(b) : d || fd ? b.getAttribute(c) : (g = b.getAttributeNode(c), g ? "boolean" == typeof b[c] ? b[c] ? c : null : g.specified ? g.value : null : null)
    };
    L = G.selectors = {
        cacheLength: 50,
        createPseudo: X,
        match: Na,
        attrHandle: ed ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: mb ? function(b, c, g) {
                if ("undefined" !== typeof c.getElementById && !g) return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            } : function(b, c, g) {
                if ("undefined" !== typeof c.getElementById && !g) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: dd ? function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            } : function(b, c) {
                var g = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var d, e = [], f = 0; d = g[f]; f++) 1 === d.nodeType && e.push(d);
                    return e
                }
                return g
            },
            NAME: gd && function(b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Tb && function(b, c, g) {
                if ("undefined" !== typeof c.getElementsByClassName && !g) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ja, ""), b[3] = (b[4] || b[5] || "").replace(ja, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || G.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) :
                    2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && G.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, g;
                if (Na.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) ad.test(c) && (g = Oa(c, !0)) && (g = c.indexOf(")", c.length - g) - c.length) && (c = c.slice(0, g), b[0] = b[0].slice(0, g)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: mb ? function(b) {
                return b = b.replace(ja, ""),
                    function(c) {
                        return c.getAttribute("id") === b
                    }
            } : function(b) {
                return b = b.replace(ja, ""),
                    function(c) {
                        return (c = "undefined" !== typeof c.getAttributeNode &&
                            c.getAttributeNode("id")) && c.value === b
                    }
            },
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                } : (b = b.replace(ja, "").toLowerCase(), function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var c = $b[N][b];
                return c || (c = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(b) {
                        return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                    }
            },
            ATTR: function(b, c, g) {
                return function(d) {
                    d = G.attr(d, b);
                    return null == d ? "!=" === c : c ? (d += "", "=" ===
                        c ? d === g : "!=" === c ? d !== g : "^=" === c ? g && 0 === d.indexOf(g) : "*=" === c ? g && -1 < d.indexOf(g) : "$=" === c ? g && d.substr(d.length - g.length) === g : "~=" === c ? -1 < (" " + d + " ").indexOf(g) : "|=" === c ? d === g || d.substr(0, g.length + 1) === g + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, d, e) {
                return "nth" === b ? function(b) {
                    var c, v;
                    c = b.parentNode;
                    if (1 === d && 0 === e) return !0;
                    if (c) {
                        v = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (v++, b === c)); c = c.nextSibling);
                    }
                    return v -= e, v === d || 0 === v % d && 0 <= v / d
                } : function(c) {
                    var d = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; d = d.previousSibling;)
                                if (1 ===
                                    d.nodeType) return !1;
                            if ("first" === b) return !0;
                            d = c;
                        case "last":
                            for (; d = d.nextSibling;)
                                if (1 === d.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, e = L.pseudos[b] || L.setFilters[b.toLowerCase()] || G.error("unsupported pseudo: " + b);
                return e[N] ? e(c) : 1 < e.length ? (d = [b, b, "", c], L.setFilters.hasOwnProperty(b.toLowerCase()) ? X(function(b, d) {
                    for (var g, v = e(b, c), f = v.length; f--;) g = Xb.call(b, v[f]), b[g] = !(d[g] = v[f])
                }) : function(b) {
                    return e(b, 0, d)
                }) : e
            }
        },
        pseudos: {
            not: X(function(b) {
                var c = [],
                    d = [],
                    e = lb(b.replace(La, "$1"));
                return e[N] ? X(function(b, c, d, g) {
                    g = e(b, null, g, []);
                    for (var v = b.length; v--;)
                        if (d = g[v]) b[v] = !(c[v] = d)
                }) : function(b, v, f) {
                    return c[0] = b, e(c, null, f, d), !d.pop()
                }
            }),
            has: X(function(b) {
                return function(c) {
                    return 0 < G(b, c).length
                }
            }),
            contains: X(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Ra(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" ===
                    c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function(b) {
                return !L.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return bd.test(b.nodeName)
            },
            text: function(b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: va("radio"),
            checkbox: va("checkbox"),
            file: va("file"),
            password: va("password"),
            image: va("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return cd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ia(function() {
                return [0]
            }),
            last: ia(function(b, c) {
                return [c - 1]
            }),
            eq: ia(function(b,
                c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ia(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: ia(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: ia(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ia(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    nb = V.compareDocumentPosition ? function(b, c) {
        return b === c ? (xa = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function(b, c) {
        if (b === c) return xa = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, e, f = [],
            l = [];
        d = b.parentNode;
        e = c.parentNode;
        var m = d;
        if (d === e) return Ma(b, c);
        if (!d) return -1;
        if (!e) return 1;
        for (; m;) f.unshift(m), m = m.parentNode;
        for (m = e; m;) l.unshift(m), m = m.parentNode;
        d = f.length;
        e = l.length;
        for (m = 0; m < d && m < e; m++)
            if (f[m] !== l[m]) return Ma(f[m], l[m]);
        return m === d ? Ma(b, l[m], -1) : Ma(f[m], c, 1)
    };
    [0, 0].sort(nb);
    Zb = !xa;
    G.uniqueSort = function(b) {
        var c, d = 1;
        xa = Zb;
        b.sort(nb);
        if (xa)
            for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    G.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    lb = G.compile = function(b, c) {
        var d, e = [],
            f = [],
            l = ac[N][b];
        if (!l) {
            c || (c = Oa(b));
            for (d = c.length; d--;) l = jb(c[d]), l[N] ? e.push(l) : f.push(l);
            var m = 0 < e.length,
                j = 0 < f.length,
                q = function(b, c, d, g, v) {
                    var n, l, r = [],
                        u = 0,
                        s = "0",
                        p = b && [],
                        t = null != v,
                        D = Qa,
                        A = b || j && L.find.TAG("*", v && c.parentNode || c),
                        B = wa += null == D ? 1 : Math.E;
                    for (t && (Qa = c !== W && c, fb = q.el); null != (v = A[s]); s++) {
                        if (j && v) {
                            for (n = 0; l = f[n]; n++)
                                if (l(v, c, d)) {
                                    g.push(v);
                                    break
                                }
                            t && (wa = B, fb =
                                ++q.el)
                        }
                        m && ((v = !l && v) && u--, b && p.push(v))
                    }
                    u += s;
                    if (m && s !== u) {
                        for (n = 0; l = e[n]; n++) l(p, r, c, d);
                        if (b) {
                            if (0 < u)
                                for (; s--;)!p[s] && !r[s] && (r[s] = $c.call(g));
                            r = Pa(r)
                        }
                        oa.apply(g, r);
                        t && !b && 0 < r.length && 1 < u + e.length && G.uniqueSort(g)
                    }
                    return t && (wa = B, Qa = D), p
                };
            d = (q.el = 0, m ? X(q) : q);
            l = ac(b, d)
        }
        return l
    };
    if (W.querySelectorAll) {
        var cc, hd = eb,
            id = /'|\\/g,
            jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            Y = [":focus"],
            Sa = [":active", ":focus"],
            Ta = V.matchesSelector || V.mozMatchesSelector || V.webkitMatchesSelector || V.oMatchesSelector ||
            V.msMatchesSelector;
        ca(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Y.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Y.push(":checked")
        });
        ca(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Y.push(":enabled",
                ":disabled")
        });
        Y = RegExp(Y.join("|"));
        eb = function(b, c, d, e, f) {
            if (!e && !f && (!Y || !Y.test(b))) {
                var l, m, j = !0,
                    q = N;
                m = c;
                l = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    l = Oa(b);
                    (j = c.getAttribute("id")) ? q = j.replace(id, "\\$&"): c.setAttribute("id", q);
                    q = "[id='" + q + "'] ";
                    for (m = l.length; m--;) l[m] = q + l[m].join("");
                    m = kb.test(b) && c.parentNode || c;
                    l = l.join(",")
                }
                if (l) try {
                    return oa.apply(d, pa.call(m.querySelectorAll(l), 0)), d
                } catch (u) {} finally {
                    j || c.removeAttribute("id")
                }
            }
            return hd(b, c, d, e, f)
        };
        Ta &&
            (ca(function(b) {
                cc = Ta.call(b, "div");
                try {
                    Ta.call(b, "[test!='']:sizzle"), Sa.push("!=", pb)
                } catch (c) {}
            }), Sa = RegExp(Sa.join("|")), G.matchesSelector = function(b, c) {
                c = c.replace(jd, "='$1']");
                if (!Ka(b) && !Sa.test(c) && (!Y || !Y.test(c))) try {
                    var d = Ta.call(b, c);
                    if (d || cc || b.document && 11 !== b.document.nodeType) return d
                } catch (e) {}
                return 0 < G(c, null, null, [b]).length
            })
    }
    L.pseudos.nth = L.pseudos.eq;
    L.filters = Yb.prototype = L.pseudos;
    L.setFilters = new Yb;
    G.attr = e.attr;
    e.find = G;
    e.expr = G.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.unique =
        G.uniqueSort;
    e.text = G.getText;
    e.isXMLDoc = G.isXML;
    e.contains = G.contains;
    var kd = /Until$/,
        ld = /^(?:parents|prev(?:Until|All))/,
        uc = /^.[^:#\[\.,]*$/,
        dc = e.expr.match.needsContext,
        md = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    e.fn.extend({
        find: function(b) {
            var c, d, f, l, j, m, q = this;
            if ("string" != typeof b) return e(b).filter(function() {
                c = 0;
                for (d = q.length; c < d; c++)
                    if (e.contains(q[c], this)) return !0
            });
            m = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (f = m.length, e.find(b, this[c], m), 0 < c)
                    for (l = f; l < m.length; l++)
                        for (j =
                            0; j < f; j++)
                            if (m[j] === m[l]) {
                                m.splice(l--, 1);
                                break
                            }
            return m
        },
        has: function(b) {
            var c, d = e(b, this),
                f = d.length;
            return this.filter(function() {
                for (c = 0; c < f; c++)
                    if (e.contains(this, d[c])) return !0
            })
        },
        not: function(b) {
            return this.pushStack(t(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(t(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? dc.test(b) ? 0 <= e(b, this.context).index(this[0]) : 0 < e.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, f = 0, l = this.length,
                j = [], m = dc.test(b) || "string" != typeof b ? e(b, c || this.context) : 0; f < l; f++)
                for (d = this[f]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (m ? -1 < m.index(d) : e.find.matchesSelector(d, b)) {
                        j.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return j = 1 < j.length ? e.unique(j) : j, this.pushStack(j, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? e.inArray(this[0], e(b)) : e.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? e(b, c) : e.makeArray(b && b.nodeType ? [b] : b),
                f = e.merge(this.get(), d);
            return this.pushStack(y(d[0]) || y(f[0]) ? f : e.unique(f))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    e.fn.andSelf = e.fn.addBack;
    e.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return e.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return e.dir(b, "parentNode", d)
        },
        next: function(b) {
            return s(b, "nextSibling")
        },
        prev: function(b) {
            return s(b, "previousSibling")
        },
        nextAll: function(b) {
            return e.dir(b,
                "nextSibling")
        },
        prevAll: function(b) {
            return e.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return e.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return e.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return e.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return e.sibling(b.firstChild)
        },
        contents: function(b) {
            return e.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : e.merge([], b.childNodes)
        }
    }, function(b, c) {
        e.fn[b] = function(d, f) {
            var l = e.map(this, c, d);
            return kd.test(b) ||
                (f = d), f && "string" == typeof f && (l = e.filter(f, l)), l = 1 < this.length && !md[b] ? e.unique(l) : l, 1 < this.length && ld.test(b) && (l = l.reverse()), this.pushStack(l, b, Z.call(arguments).join(","))
        }
    });
    e.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? e.find.matchesSelector(c[0], b) ? [c[0]] : [] : e.find.matches(b, c)
        },
        dir: function(c, d, g) {
            var f = [];
            for (c = c[d]; c && 9 !== c.nodeType && (g === b || 1 !== c.nodeType || !e(c).is(g));) 1 === c.nodeType && f.push(c), c = c[d];
            return f
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 ===
                b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var wb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        nd = / jQuery\d+="(?:null|\d+)"/g,
        qb = /^\s+/,
        ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        fc = /<([\w:]+)/,
        od = /<tbody/i,
        pd = /<|&#?\w+;/,
        qd = /<(?:script|style|link)/i,
        rd = /<(?:script|object|embed|option|style)/i,
        rb = RegExp("<(?:" + wb + ")[\\s/>]", "i"),
        xb = /^(?:checkbox|radio)$/,
        gc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        sd = /\/(java|ecma)script/i,
        td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        U = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        hc = A(C),
        sb = hc.appendChild(C.createElement("div"));
    U.optgroup =
        U.option;
    U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
    U.th = U.td;
    e.support.htmlSerialize || (U._default = [1, "X<div>", "</div>"]);
    e.fn.extend({
        text: function(c) {
            return e.access(this, function(c) {
                return c === b ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(c))
            }, null, c, arguments.length)
        },
        wrapAll: function(b) {
            if (e.isFunction(b)) return this.each(function(c) {
                e(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = e(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return e.isFunction(b) ? this.each(function(c) {
                e(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = e(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = e.isFunction(b);
            return this.each(function(d) {
                e(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                e.nodeName(this, "body") ||
                    e(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!y(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(b,
                    this), "before", this.selector)
            }
        },
        after: function() {
            if (!y(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, f = 0; null != (d = this[f]); f++)
                if (!b || e.filter(b, [d]).length)!c && 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), e.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b,
                c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && e.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
                return e.clone(this, b, c)
            })
        },
        html: function(c) {
            return e.access(this, function(c) {
                var d = this[0] || {},
                    f = 0,
                    v = this.length;
                if (c === b) return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : b;
                if ("string" == typeof c && !qd.test(c) && (e.support.htmlSerialize || !rb.test(c)) && (e.support.leadingWhitespace || !qb.test(c)) &&
                    !U[(fc.exec(c) || ["", ""])[1].toLowerCase()]) {
                    c = c.replace(ec, "<$1></$2>");
                    try {
                        for (; f < v; f++) d = this[f] || {}, 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), d.innerHTML = c);
                        d = 0
                    } catch (l) {}
                }
                d && this.empty().append(c)
            }, null, c, arguments.length)
        },
        replaceWith: function(b) {
            return y(this[0]) ? this.length ? this.pushStack(e(e.isFunction(b) ? b() : b), "replaceWith", b) : this : e.isFunction(b) ? this.each(function(c) {
                var d = e(this),
                    f = d.html();
                d.replaceWith(b.call(this, c, f))
            }) : ("string" != typeof b && (b = e(b).detach()), this.each(function() {
                var c =
                    this.nextSibling,
                    d = this.parentNode;
                e(this).remove();
                c ? e(c).before(b) : e(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(c, d, g) {
            c = [].concat.apply([], c);
            var f, l, j, m = 0,
                q = c[0],
                u = [],
                s = this.length;
            if (!e.support.checkClone && 1 < s && "string" == typeof q && gc.test(q)) return this.each(function() {
                e(this).domManip(c, d, g)
            });
            if (e.isFunction(q)) return this.each(function(f) {
                var l = e(this);
                c[0] = q.call(this, f, d ? l.html() : b);
                l.domManip(c, d, g)
            });
            if (this[0]) {
                f = e.buildFragment(c, this, u);
                j = f.fragment;
                l = j.firstChild;
                1 === j.childNodes.length && (j = l);
                if (l) {
                    d = d && e.nodeName(l, "tr");
                    for (f = f.cacheable || s - 1; m < s; m++) g.call(d && e.nodeName(this[m], "table") ? this[m].getElementsByTagName("tbody")[0] || this[m].appendChild(this[m].ownerDocument.createElement("tbody")) : this[m], m === f ? j : e.clone(j, !0, !0))
                }
                j = l = null;
                u.length && e.each(u, function(b, c) {
                    c.src ? e.ajax ? e.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : e.error("no ajax") : e.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td,
                        ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    e.buildFragment = function(c, d, g) {
        var f, l, j, m = c[0];
        return d = d || C, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === c.length && "string" == typeof m && 512 > m.length && d === C && "<" === m.charAt(0) && !rd.test(m) && (e.support.checkClone || !gc.test(m)) && (e.support.html5Clone || !rb.test(m)) && (l = !0, f = e.fragments[m], j = f !== b), f || (f = d.createDocumentFragment(), e.clean(c, d, f, g), l && (e.fragments[m] = j && f)), {
            fragment: f,
            cacheable: l
        }
    };
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        e.fn[b] = function(d) {
            var f, l = 0,
                j = [];
            d = e(d);
            var m = d.length;
            f = 1 === this.length && this[0].parentNode;
            if ((null == f || f && 11 === f.nodeType && 1 === f.childNodes.length) && 1 === m) return d[c](this[0]), this;
            for (; l < m; l++) f = (0 < l ? this.clone(!0) : this).get(), e(d[l])[c](f), j = j.concat(f);
            return this.pushStack(j, b, d.selector)
        }
    });
    e.extend({
        clone: function(b, c, d) {
            var f, j, r, m;
            e.support.html5Clone || e.isXMLDoc(b) || !rb.test("<" + b.nodeName +
                ">") ? m = b.cloneNode(!0) : (sb.innerHTML = b.outerHTML, sb.removeChild(m = sb.firstChild));
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !e.isXMLDoc(b)) {
                l(b, m);
                f = q(b);
                j = q(m);
                for (r = 0; f[r]; ++r) j[r] && l(f[r], j[r])
            }
            if (c && (B(b, m), d)) {
                f = q(b);
                j = q(m);
                for (r = 0; f[r]; ++r) B(f[r], j[r])
            }
            return m
        },
        clean: function(b, c, d, f) {
            var l, j, m, q, s, p, t, D = c === C && hc,
                B = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = C;
            for (l = 0; null != (m = b[l]); l++)
                if ("number" == typeof m && (m += ""), m) {
                    if ("string" ==
                        typeof m)
                        if (pd.test(m)) {
                            D = D || A(c);
                            p = c.createElement("div");
                            D.appendChild(p);
                            m = m.replace(ec, "<$1></$2>");
                            j = (fc.exec(m) || ["", ""])[1].toLowerCase();
                            q = U[j] || U._default;
                            s = q[0];
                            for (p.innerHTML = q[1] + m + q[2]; s--;) p = p.lastChild;
                            if (!e.support.tbody) {
                                s = od.test(m);
                                q = "table" === j && !s ? p.firstChild && p.firstChild.childNodes : "<table>" === q[1] && !s ? p.childNodes : [];
                                for (j = q.length - 1; 0 <= j; --j) e.nodeName(q[j], "tbody") && !q[j].childNodes.length && q[j].parentNode.removeChild(q[j])
                            }!e.support.leadingWhitespace && qb.test(m) && p.insertBefore(c.createTextNode(qb.exec(m)[0]),
                                p.firstChild);
                            m = p.childNodes;
                            p.parentNode.removeChild(p)
                        } else m = c.createTextNode(m);
                    m.nodeType ? B.push(m) : e.merge(B, m)
                }
            p && (m = p = D = null);
            if (!e.support.appendChecked)
                for (l = 0; null != (m = B[l]); l++) e.nodeName(m, "input") ? u(m) : "undefined" != typeof m.getElementsByTagName && e.grep(m.getElementsByTagName("input"), u);
            if (d) {
                b = function(b) {
                    if (!b.type || sd.test(b.type)) return f ? f.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (l = 0; null != (m = B[l]); l++)
                    if (!e.nodeName(m, "script") || !b(m)) d.appendChild(m),
                        "undefined" != typeof m.getElementsByTagName && (t = e.grep(e.merge([], m.getElementsByTagName("script")), b), B.splice.apply(B, [l + 1, 0].concat(t)), l += t.length)
            }
            return B
        },
        cleanData: function(b, c) {
            for (var d, f, l, j, m = 0, q = e.expando, u = e.cache, s = e.support.deleteExpando, p = e.event.special; null != (l = b[m]); m++)
                if (c || e.acceptData(l))
                    if (d = (f = l[q]) && u[f]) {
                        if (d.events)
                            for (j in d.events) p[j] ? e.event.remove(l, j) : e.removeEvent(l, j, d.handle);
                        u[f] && (delete u[f], s ? delete l[q] : l.removeAttribute ? l.removeAttribute(q) : l[q] = null, e.deletedIds.push(f))
                    }
        }
    });
    var Ua, da;
    e.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Ua = e.uaMatch(zc.userAgent);
    da = {};
    Ua.browser && (da[Ua.browser] = !0, da.version = Ua.version);
    da.chrome ? da.webkit = !0 : da.webkit && (da.safari = !0);
    e.browser = da;
    e.sub = function() {
        function b(c, d) {
            return new b.fn.init(c,
                d)
        }
        e.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, f) {
            return f && f instanceof e && !(f instanceof b) && (f = b(f)), e.fn.init.call(this, d, f, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(C);
        return b
    };
    var Q, la, ma, tb = /alpha\([^)]*\)/i,
        ud = /opacity=([^)]*)/,
        vd = /^(top|right|bottom|left)$/,
        wd = /^(none|table(?!-c[ea]).+)/,
        ic = /^margin/,
        vc = RegExp("^(" + Ea + ")(.*)$", "i"),
        ya = RegExp("^(" + Ea + ")(?!px)[a-z%]+$", "i"),
        xd = RegExp("^([-+])=(" + Ea + ")", "i"),
        Ya = {},
        yd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        jc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ea = ["Top", "Right", "Bottom", "Left"],
        yb = ["Webkit", "O", "Moz", "ms"],
        zd = e.fn.toggle;
    e.fn.extend({
        css: function(c, d) {
            return e.access(this, function(c, d, f) {
                return f !== b ? e.style(c, d, f) : e.css(c, d)
            }, c, d, 1 < arguments.length)
        },
        show: function() {
            return M(this, !0)
        },
        hide: function() {
            return M(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return e.isFunction(b) && e.isFunction(c) ? zd.apply(this, arguments) : this.each(function() {
                (d ? b : K(this)) ? e(this).show():
                    e(this).hide()
            })
        }
    });
    e.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = Q(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": e.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(c, d, g, f) {
            if (c && !(3 === c.nodeType || 8 === c.nodeType || !c.style)) {
                var l, j, m, q = e.camelCase(d),
                    u = c.style;
                d = e.cssProps[q] || (e.cssProps[q] = D(u, q));
                m = e.cssHooks[d] || e.cssHooks[q];
                if (g === b) return m && "get" in m && (l = m.get(c, !1, f)) !== b ? l : u[d];
                j = typeof g;
                "string" === j && (l = xd.exec(g)) && (g = (l[1] + 1) * l[2] + parseFloat(e.css(c, d)), j = "number");
                if (!(null == g || "number" === j && isNaN(g)))
                    if ("number" === j && !e.cssNumber[q] && (g += "px"), !m || !("set" in m) || (g = m.set(c, g, f)) !== b) try {
                        u[d] = g
                    } catch (s) {}
            }
        },
        css: function(c, d, g, f) {
            var l, j, m, q = e.camelCase(d);
            return d = e.cssProps[q] || (e.cssProps[q] = D(c.style, q)), m = e.cssHooks[d] || e.cssHooks[q], m && "get" in m && (l = m.get(c, !0, f)), l === b && (l = Q(c, d)), "normal" === l && d in jc && (l = jc[d]), g || f !== b ? (j = parseFloat(l), g ||
                e.isNumeric(j) ? j || 0 : l) : l
        },
        swap: function(b, c, d) {
            var e, f = {};
            for (e in c) f[e] = b.style[e], b.style[e] = c[e];
            d = d.call(b);
            for (e in c) b.style[e] = f[e];
            return d
        }
    });
    c.getComputedStyle ? Q = function(b, d) {
        var g, f, l, j, m = c.getComputedStyle(b, null),
            q = b.style;
        return m && (g = m[d], "" === g && !e.contains(b.ownerDocument, b) && (g = e.style(b, d)), ya.test(g) && ic.test(d) && (f = q.width, l = q.minWidth, j = q.maxWidth, q.minWidth = q.maxWidth = q.width = g, g = m.width, q.width = f, q.minWidth = l, q.maxWidth = j)), g
    } : C.documentElement.currentStyle && (Q = function(b,
        c) {
        var d, e, f = b.currentStyle && b.currentStyle[c],
            l = b.style;
        return null == f && l && l[c] && (f = l[c]), ya.test(f) && !vd.test(c) && (d = l.left, e = b.runtimeStyle && b.runtimeStyle.left, e && (b.runtimeStyle.left = b.currentStyle.left), l.left = "fontSize" === c ? "1em" : f, f = l.pixelLeft + "px", l.left = d, e && (b.runtimeStyle.left = e)), "" === f ? "auto" : f
    });
    e.each(["height", "width"], function(b, c) {
        e.cssHooks[c] = {
            get: function(b, d, f) {
                if (d) return 0 === b.offsetWidth && wd.test(Q(b, "display")) ? e.swap(b, yd, function() {
                    return I(b, c, f)
                }) : I(b, c, f)
            },
            set: function(b,
                d, f) {
                return E(b, d, f ? Xa(b, c, f, e.support.boxSizing && "border-box" === e.css(b, "boxSizing")) : 0)
            }
        }
    });
    e.support.opacity || (e.cssHooks.opacity = {
        get: function(b, c) {
            return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style,
                f = b.currentStyle,
                l = e.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                j = f && f.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === e.trim(j.replace(tb, "")) && d.removeAttribute && (d.removeAttribute("filter"), f && !f.filter))) d.filter =
                tb.test(j) ? j.replace(tb, l) : j + " " + l
        }
    });
    e(function() {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function(b, c) {
                return e.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c) return Q(b, "marginRight")
                })
            }
        });
        !e.support.pixelPosition && e.fn.position && e.each(["top", "left"], function(b, c) {
            e.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var f = Q(b, c);
                        return ya.test(f) ? e(b).position()[c] + "px" : f
                    }
                }
            }
        })
    });
    e.expr && e.expr.filters && (e.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !e.support.reliableHiddenOffsets &&
            "none" === (b.style && b.style.display || Q(b, "display"))
    }, e.expr.filters.visible = function(b) {
        return !e.expr.filters.hidden(b)
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        e.cssHooks[b + c] = {
            expand: function(d) {
                var e = "string" == typeof d ? d.split(" ") : [d],
                    f = {};
                for (d = 0; 4 > d; d++) f[b + ea[d] + c] = e[d] || e[d - 2] || e[0];
                return f
            }
        };
        ic.test(b) || (e.cssHooks[b + c].set = E)
    });
    var Ad = /%20/g,
        wc = /\[\]$/,
        kc = /\r?\n/g,
        Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Cd = /^(?:select|textarea)/i;
    e.fn.extend({
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
            }).map(function(b, c) {
                var d = e(this).val();
                return null == d ? null : e.isArray(d) ? e.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(kc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(kc, "\r\n")
                }
            }).get()
        }
    });
    e.param = function(c, d) {
        var g, f = [],
            l = function(b, c) {
                c = e.isFunction(c) ? c() : null == c ? "" : c;
                f[f.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === b && (d = e.ajaxSettings && e.ajaxSettings.traditional);
        if (e.isArray(c) || c.jquery && !e.isPlainObject(c)) e.each(c, function() {
            l(this.name, this.value)
        });
        else
            for (g in c) J(g, c[g], d, l);
        return f.join("&").replace(Ad, "+")
    };
    var qa, ka, Dd = /#.*$/,
        Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Fd = /^(?:GET|HEAD)$/,
        Gd = /^\/\//,
        lc = /\?/,
        Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Id = /([?&])_=[^&]*/,
        mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        nc = e.fn.load,
        Za = {},
        oc = {},
        pc = ["*/"] + ["*"];
    try {
        ka = yc.href
    } catch (Rd) {
        ka = C.createElement("a"), ka.href = "", ka = ka.href
    }
    qa = mc.exec(ka.toLowerCase()) || [];
    e.fn.load = function(c, d, g) {
        if ("string" != typeof c && nc) return nc.apply(this, arguments);
        if (!this.length) return this;
        var f, l, j, m = this,
            q = c.indexOf(" ");
        return 0 <= q && (f = c.slice(q, c.length), c = c.slice(0, q)), e.isFunction(d) ? (g = d, d = b) : d && "object" == typeof d && (l = "POST"), e.ajax({
            url: c,
            type: l,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                g && m.each(g, j || [b.responseText, c, b])
            }
        }).done(function(b) {
            j = arguments;
            m.html(f ? e("<div>").append(b.replace(Hd, "")).find(f) : b)
        }), this
    };
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        e.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    e.each(["get", "post"], function(c, d) {
        e[d] = function(c, f, l, j) {
            return e.isFunction(f) && (j = j || l, l = f, f = b), e.ajax({
                type: d,
                url: c,
                data: f,
                success: l,
                dataType: j
            })
        }
    });
    e.extend({
        getScript: function(c, d) {
            return e.get(c,
                b, d, "script")
        },
        getJSON: function(b, c, d) {
            return e.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? sa(b, e.ajaxSettings) : (c = b, b = e.ajaxSettings), sa(b, c), b
        },
        ajaxSettings: {
            url: ka,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(qa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": c.String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: za(Za),
        ajaxTransport: za(oc),
        ajax: function(c, d) {
            function g(c, d, g, j) {
                var n, v, u, r, p, C = d;
                if (2 !== M) {
                    M = 2;
                    q && clearTimeout(q);
                    m = b;
                    l = j || "";
                    H.readyState = 0 < c ? 4 : 0;
                    if (g) {
                        r = t;
                        j = H;
                        var E, R, aa, G, I = r.contents,
                            F = r.dataTypes,
                            L = r.responseFields;
                        for (R in L) R in g && (j[L[R]] = g[R]);
                        for (;
                            "*" === F[0];) F.shift(),
                            E === b && (E = r.mimeType || j.getResponseHeader("content-type"));
                        if (E)
                            for (R in I)
                                if (I[R] && I[R].test(E)) {
                                    F.unshift(R);
                                    break
                                }
                        if (F[0] in g) aa = F[0];
                        else {
                            for (R in g) {
                                if (!F[0] || r.converters[R + " " + F[0]]) {
                                    aa = R;
                                    break
                                }
                                G || (G = R)
                            }
                            aa = aa || G
                        }
                        r = g = aa ? (aa !== F[0] && F.unshift(aa), g[aa]) : void 0
                    }
                    if (200 <= c && 300 > c || 304 === c)
                        if (t.ifModified && (p = H.getResponseHeader("Last-Modified"), p && (e.lastModified[f] = p), p = H.getResponseHeader("Etag"), p && (e.etag[f] = p)), 304 === c) C = "notmodified", n = !0;
                        else {
                            var J;
                            a: {
                                n = t;
                                v = r;
                                var O, C = n.dataTypes.slice();
                                g = C[0];
                                E = {};
                                R = 0;
                                n.dataFilter && (v = n.dataFilter(v, n.dataType));
                                if (C[1])
                                    for (J in n.converters) E[J.toLowerCase()] = n.converters[J];
                                for (; u = C[++R];)
                                    if ("*" !== u) {
                                        if ("*" !== g && g !== u) {
                                            J = E[g + " " + u] || E["* " + u];
                                            if (!J)
                                                for (O in E)
                                                    if (p = O.split(" "), p[1] === u && (J = E[g + " " + p[0]] || E["* " + p[0]])) {
                                                        !0 === J ? J = E[O] : !0 !== E[O] && (u = p[0], C.splice(R--, 0, u));
                                                        break
                                                    }
                                            if (!0 !== J)
                                                if (J && n["throws"]) v = J(v);
                                                else try {
                                                    v = J(v)
                                                } catch (N) {
                                                    J = {
                                                        state: "parsererror",
                                                        error: J ? N : "No conversion from " + g + " to " + u
                                                    };
                                                    break a
                                                }
                                        }
                                        g = u
                                    }
                                J = {
                                    state: "success",
                                    data: v
                                }
                            }
                            n =
                                J;
                            C = n.state;
                            v = n.data;
                            u = n.error;
                            n = !u
                        } else if (u = C, !C || c) C = "error", 0 > c && (c = 0);
                    H.status = c;
                    H.statusText = (d || C) + "";
                    n ? B.resolveWith(D, [v, C, H]) : B.rejectWith(D, [H, C, u]);
                    H.statusCode(K);
                    K = b;
                    s && A.trigger("ajax" + (n ? "Success" : "Error"), [H, t, n ? v : u]);
                    y.fireWith(D, [H, C]);
                    s && (A.trigger("ajaxComplete", [H, t]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof c && (d = c, c = b);
            d = d || {};
            var f, l, j, m, q, u, s, p, t = e.ajaxSetup({}, d),
                D = t.context || t,
                A = D !== t && (D.nodeType || D instanceof e) ? e(D) : e.event,
                B = e.Deferred(),
                y = e.Callbacks("once memory"),
                K = t.statusCode || {},
                C = {},
                E = {},
                M = 0,
                G = "canceled",
                H = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!M) {
                            var d = b.toLowerCase();
                            b = E[d] = E[d] || b;
                            C[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === M ? l : null
                    },
                    getResponseHeader: function(c) {
                        var d;
                        if (2 === M) {
                            if (!j)
                                for (j = {}; d = Ed.exec(l);) j[d[1].toLowerCase()] = d[2];
                            d = j[c.toLowerCase()]
                        }
                        return d === b ? null : d
                    },
                    overrideMimeType: function(b) {
                        return M || (t.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || G, m && m.abort(b), g(0, b), this
                    }
                };
            B.promise(H);
            H.success = H.done;
            H.error = H.fail;
            H.complete = y.add;
            H.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > M)
                        for (c in b) K[c] = [K[c], b[c]];
                    else c = b[H.status], H.always(c)
                }
                return this
            };
            t.url = ((c || t.url) + "").replace(Dd, "").replace(Gd, qa[1] + "//");
            t.dataTypes = e.trim(t.dataType || "*").toLowerCase().split(fa);
            null == t.crossDomain && (u = mc.exec(t.url.toLowerCase()) || !1, t.crossDomain = u && u.join(":") + (u[3] ? "" : "http:" === u[1] ? 80 : 443) !== qa.join(":") + (qa[3] ? "" : "http:" === qa[1] ? 80 : 443));
            t.data && t.processData && "string" != typeof t.data && (t.data = e.param(t.data,
                t.traditional));
            na(Za, t, d, H);
            if (2 === M) return H;
            s = t.global;
            t.type = t.type.toUpperCase();
            t.hasContent = !Fd.test(t.type);
            s && 0 === e.active++ && e.event.trigger("ajaxStart");
            if (!t.hasContent && (t.data && (t.url += (lc.test(t.url) ? "&" : "?") + t.data, delete t.data), f = t.url, !1 === t.cache)) {
                u = e.now();
                var I = t.url.replace(Id, "$1_=" + u);
                t.url = I + (I === t.url ? (lc.test(t.url) ? "&" : "?") + "_=" + u : "")
            }(t.data && t.hasContent && !1 !== t.contentType || d.contentType) && H.setRequestHeader("Content-Type", t.contentType);
            t.ifModified && (f = f || t.url,
                e.lastModified[f] && H.setRequestHeader("If-Modified-Since", e.lastModified[f]), e.etag[f] && H.setRequestHeader("If-None-Match", e.etag[f]));
            H.setRequestHeader("Accept", t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : t.accepts["*"]);
            for (p in t.headers) H.setRequestHeader(p, t.headers[p]);
            if (!t.beforeSend || !1 !== t.beforeSend.call(D, H, t) && 2 !== M) {
                G = "abort";
                for (p in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) H[p](t[p]);
                if (m = na(oc, t, d, H)) {
                    H.readyState = 1;
                    s && A.trigger("ajaxSend", [H, t]);
                    t.async && 0 < t.timeout && (q = setTimeout(function() {
                        H.abort("timeout")
                    }, t.timeout));
                    try {
                        M = 1, m.send(C, g)
                    } catch (F) {
                        if (2 > M) g(-1, F);
                        else throw F;
                    }
                } else g(-1, "No Transport");
                return H
            }
            return H.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qc = [],
        Jd = /\?/,
        Va = /(=)\?(?=&|$)|\?\?/,
        Kd = e.now();
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = qc.pop() || e.expando + "_" + Kd++;
            return this[b] = !0, b
        }
    });
    e.ajaxPrefilter("json jsonp", function(d, f, g) {
        var l, j, q, m = d.data,
            u = d.url,
            s = !1 !== d.jsonp,
            p = s && Va.test(u),
            t = s && !p && "string" == typeof m && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Va.test(m);
        if ("jsonp" === d.dataTypes[0] || p || t) return l = d.jsonpCallback = e.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, j = c[l], p ? d.url = u.replace(Va, "$1" + l) : t ? d.data = m.replace(Va, "$1" + l) : s && (d.url += (Jd.test(u) ? "&" : "?") + d.jsonp + "=" + l), d.converters["script json"] = function() {
            return q || e.error(l + " was not called"), q[0]
        }, d.dataTypes[0] = "json", c[l] = function() {
            q = arguments
        }, g.always(function() {
            c[l] =
                j;
            d[l] && (d.jsonpCallback = f.jsonpCallback, qc.push(l));
            q && e.isFunction(j) && j(q[0]);
            q = j = b
        }), "script"
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return e.globalEval(b), b
            }
        }
    });
    e.ajaxPrefilter("script", function(c) {
        c.cache === b && (c.cache = !1);
        c.crossDomain && (c.type = "GET", c.global = !1)
    });
    e.ajaxTransport("script", function(c) {
        if (c.crossDomain) {
            var d, e =
                C.head || C.getElementsByTagName("head")[0] || C.documentElement;
            return {
                send: function(f, l) {
                    d = C.createElement("script");
                    d.async = "async";
                    c.scriptCharset && (d.charset = c.scriptCharset);
                    d.src = c.url;
                    d.onload = d.onreadystatechange = function(c, f) {
                        if (f || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, f || l(200, "success")
                    };
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ra, ub = c.ActiveXObject ? function() {
            for (var b in ra) ra[b](0,
                1)
        } : !1,
        Ld = 0;
    e.ajaxSettings.xhr = c.ActiveXObject ? function() {
        var b;
        if (!(b = !this.isLocal && zb())) a: {
            try {
                b = new c.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {}
            b = void 0
        }
        return b
    } : zb;
    var vb = e.ajaxSettings.xhr();
    e.extend(e.support, {
        ajax: !!vb,
        cors: !!vb && "withCredentials" in vb
    });
    e.support.ajax && e.ajaxTransport(function(d) {
        if (!d.crossDomain || e.support.cors) {
            var f;
            return {
                send: function(g, l) {
                    var j, q, m = d.xhr();
                    d.username ? m.open(d.type, d.url, d.async, d.username, d.password) : m.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (q in d.xhrFields) m[q] =
                            d.xhrFields[q];
                    d.mimeType && m.overrideMimeType && m.overrideMimeType(d.mimeType);
                    !d.crossDomain && !g["X-Requested-With"] && (g["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (q in g) m.setRequestHeader(q, g[q])
                    } catch (u) {}
                    m.send(d.hasContent && d.data || null);
                    f = function(c, g) {
                        var q, u, s, r, p;
                        try {
                            if (f && (g || 4 === m.readyState))
                                if (f = b, j && (m.onreadystatechange = e.noop, ub && delete ra[j]), g) 4 !== m.readyState && m.abort();
                                else {
                                    q = m.status;
                                    s = m.getAllResponseHeaders();
                                    r = {};
                                    (p = m.responseXML) && p.documentElement && (r.xml = p);
                                    try {
                                        r.text =
                                            m.responseText
                                    } catch (t) {}
                                    try {
                                        u = m.statusText
                                    } catch (D) {
                                        u = ""
                                    }!q && d.isLocal && !d.crossDomain ? q = r.text ? 200 : 404 : 1223 === q && (q = 204)
                                }
                        } catch (A) {
                            g || l(-1, A)
                        }
                        r && l(q, u, r, s)
                    };
                    d.async ? 4 === m.readyState ? setTimeout(f, 0) : (j = ++Ld, ub && (ra || (ra = {}, e(c).unload(ub)), ra[j] = f), m.onreadystatechange = f) : f()
                },
                abort: function() {
                    f && f(0, 1)
                }
            }
        }
    });
    var Aa, Wa, Md = /^(?:toggle|show|hide)$/,
        Nd = RegExp("^(?:([-+])=|)(" + Ea + ")([a-z%]*)$", "i"),
        Od = /queueHooks$/,
        Ba = [
            function(b, c, d) {
                var f, l, j, q, u, s, p = this,
                    t = b.style,
                    D = {},
                    A = [],
                    B = b.nodeType && K(b);
                d.queue ||
                    (u = e._queueHooks(b, "fx"), null == u.unqueued && (u.unqueued = 0, s = u.empty.fire, u.empty.fire = function() {
                        u.unqueued || s()
                    }), u.unqueued++, p.always(function() {
                        p.always(function() {
                            u.unqueued--;
                            e.queue(b, "fx").length || u.empty.fire()
                        })
                    }));
                1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [t.overflow, t.overflowX, t.overflowY], "inline" === e.css(b, "display") && "none" === e.css(b, "float") && (!e.support.inlineBlockNeedsLayout || "inline" === O(b.nodeName) ? t.display = "inline-block" : t.zoom = 1));
                d.overflow && (t.overflow = "hidden",
                    e.support.shrinkWrapBlocks || p.done(function() {
                        t.overflow = d.overflow[0];
                        t.overflowX = d.overflow[1];
                        t.overflowY = d.overflow[2]
                    }));
                for (f in c) l = c[f], Md.exec(l) && (delete c[f], l !== (B ? "hide" : "show") && A.push(f));
                if (l = A.length) {
                    j = e._data(b, "fxshow") || e._data(b, "fxshow", {});
                    B ? e(b).show() : p.done(function() {
                        e(b).hide()
                    });
                    p.done(function() {
                        var c;
                        e.removeData(b, "fxshow", !0);
                        for (c in D) e.style(b, c, D[c])
                    });
                    for (f = 0; f < l; f++) c = A[f], q = p.createTween(c, B ? j[c] : 0), D[c] = j[c] || e.style(b, c), c in j || (j[c] = q.start, B && (q.end = q.start,
                        q.start = "width" === c || "height" === c ? 1 : 0))
                }
            }
        ],
        ta = {
            "*": [
                function(b, c) {
                    var d, f, l = this.createTween(b, c),
                        j = Nd.exec(c),
                        q = l.cur(),
                        u = +q || 0,
                        s = 1,
                        p = 20;
                    if (j) {
                        d = +j[2];
                        f = j[3] || (e.cssNumber[b] ? "" : "px");
                        if ("px" !== f && u) {
                            u = e.css(l.elem, b, !0) || d || 1;
                            do s = s || ".5", u /= s, e.style(l.elem, b, u + f); while (s !== (s = l.cur() / q) && 1 !== s && --p)
                        }
                        l.unit = f;
                        l.start = u;
                        l.end = j[1] ? u + (j[1] + 1) * d : d
                    }
                    return l
                }
            ]
        };
    e.Animation = e.extend(Bb, {
        tweener: function(b, c) {
            e.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, f = 0, l = b.length; f < l; f++) d = b[f], ta[d] = ta[d] || [], ta[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? Ba.unshift(b) : Ba.push(b)
        }
    });
    e.Tween = S;
    S.prototype = {
        constructor: S,
        init: function(b, c, d, f, l, j) {
            this.elem = b;
            this.prop = d;
            this.easing = l || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = f;
            this.unit = j || (e.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = S.propHooks[this.prop];
            return b && b.get ? b.get(this) : S.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = S.propHooks[this.prop];
            return this.options.duration ? this.pos = c = e.easing[this.easing](b, this.options.duration *
                b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : S.propHooks._default.set(this), this
        }
    };
    S.prototype.init.prototype = S.prototype;
    S.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = e.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                e.fx.step[b.prop] ? e.fx.step[b.prop](b) : b.elem.style &&
                    (null != b.elem.style[e.cssProps[b.prop]] || e.cssHooks[b.prop]) ? e.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    e.each(["toggle", "show", "hide"], function(b, c) {
        var d = e.fn[c];
        e.fn[c] = function(f, l, j) {
            return null == f || "boolean" == typeof f || !b && e.isFunction(f) && e.isFunction(l) ? d.apply(this, arguments) : this.animate(Ca(c, !0), f, l, j)
        }
    });
    e.fn.extend({
        fadeTo: function(b, c, d, e) {
            return this.filter(K).css("opacity",
                0).show().end().animate({
                opacity: c
            }, b, d, e)
        },
        animate: function(b, c, d, f) {
            var l = e.isEmptyObject(b),
                j = e.speed(c, d, f);
            c = function() {
                var c = Bb(this, e.extend({}, b), j);
                l && c.stop(!0)
            };
            return l || !1 === j.queue ? this.each(c) : this.queue(j.queue, c)
        },
        stop: function(c, d, f) {
            var l = function(b) {
                var c = b.stop;
                delete b.stop;
                c(f)
            };
            return "string" != typeof c && (f = d, d = c, c = b), d && !1 !== c && this.queue(c || "fx", []), this.each(function() {
                var b = !0,
                    d = null != c && c + "queueHooks",
                    j = e.timers,
                    q = e._data(this);
                if (d) q[d] && q[d].stop && l(q[d]);
                else
                    for (d in q) q[d] &&
                        q[d].stop && Od.test(d) && l(q[d]);
                for (d = j.length; d--;) j[d].elem === this && (null == c || j[d].queue === c) && (j[d].anim.stop(f), b = !1, j.splice(d, 1));
                (b || !f) && e.dequeue(this, c)
            })
        }
    });
    e.each({
        slideDown: Ca("show"),
        slideUp: Ca("hide"),
        slideToggle: Ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        e.fn[b] = function(b, d, e) {
            return this.animate(c, b, d, e)
        }
    });
    e.speed = function(b, c, d) {
        var f = b && "object" == typeof b ? e.extend({}, b) : {
            complete: d || !d && c || e.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !e.isFunction(c) && c
        };
        f.duration = e.fx.off ? 0 : "number" == typeof f.duration ? f.duration : f.duration in e.fx.speeds ? e.fx.speeds[f.duration] : e.fx.speeds._default;
        if (null == f.queue || !0 === f.queue) f.queue = "fx";
        return f.old = f.complete, f.complete = function() {
            e.isFunction(f.old) && f.old.call(this);
            f.queue && e.dequeue(this, f.queue)
        }, f
    };
    e.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    e.timers = [];
    e.fx = S.prototype.init;
    e.fx.tick = function() {
        for (var b, c = e.timers,
            d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || e.fx.stop()
    };
    e.fx.timer = function(b) {
        b() && e.timers.push(b) && !Wa && (Wa = setInterval(e.fx.tick, e.fx.interval))
    };
    e.fx.interval = 13;
    e.fx.stop = function() {
        clearInterval(Wa);
        Wa = null
    };
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fx.step = {};
    e.expr && e.expr.filters && (e.expr.filters.animated = function(b) {
        return e.grep(e.timers, function(c) {
            return b === c.elem
        }).length
    });
    var rc = /^(?:body|html)$/i;
    e.fn.offset = function(c) {
        if (arguments.length) return c ===
            b ? this : this.each(function(b) {
                e.offset.setOffset(this, c, b)
            });
        var d, f, l, j, q, m, u, s = {
                top: 0,
                left: 0
            },
            p = this[0],
            t = p && p.ownerDocument;
        if (t) return (f = t.body) === p ? e.offset.bodyOffset(p) : (d = t.documentElement, e.contains(d, p) ? ("undefined" != typeof p.getBoundingClientRect && (s = p.getBoundingClientRect()), l = Cb(t), j = d.clientTop || f.clientTop || 0, q = d.clientLeft || f.clientLeft || 0, m = l.pageYOffset || d.scrollTop, u = l.pageXOffset || d.scrollLeft, {
            top: s.top + m - j,
            left: s.left + u - q
        }) : s)
    };
    e.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return e.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(e.css(b, "marginTop")) || 0, d += parseFloat(e.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var f = e.css(b, "position");
            "static" === f && (b.style.position = "relative");
            var l = e(b),
                j = l.offset(),
                q = e.css(b, "top"),
                u = e.css(b, "left"),
                s = {},
                p = {},
                t, D;
            ("absolute" === f || "fixed" === f) && -1 < e.inArray("auto", [q, u]) ? (p = l.position(), t = p.top, D = p.left) : (t = parseFloat(q) || 0, D = parseFloat(u) || 0);
            e.isFunction(c) && (c = c.call(b, d, j));
            null !=
                c.top && (s.top = c.top - j.top + t);
            null != c.left && (s.left = c.left - j.left + D);
            "using" in c ? c.using.call(b, s) : l.css(s)
        }
    };
    e.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    f = rc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(e.css(b, "marginTop")) || 0, d.left -= parseFloat(e.css(b, "marginLeft")) || 0, f.top += parseFloat(e.css(c[0], "borderTopWidth")) || 0, f.left += parseFloat(e.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - f.top,
                    left: d.left - f.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b =
                    this.offsetParent || C.body; b && !rc.test(b.nodeName) && "static" === e.css(b, "position");) b = b.offsetParent;
                return b || C.body
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(c, d) {
        var f = /Y/.test(d);
        e.fn[c] = function(l) {
            return e.access(this, function(c, l, j) {
                var q = Cb(c);
                if (j === b) return q ? d in q ? q[d] : q.document.documentElement[l] : c[l];
                q ? q.scrollTo(f ? e(q).scrollLeft() : j, f ? j : e(q).scrollTop()) : c[l] = j
            }, c, l, arguments.length, null)
        }
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function(c, d) {
        e.each({
            padding: "inner" +
                c,
            content: d,
            "": "outer" + c
        }, function(f, l) {
            e.fn[l] = function(l, j) {
                var q = arguments.length && (f || "boolean" != typeof l),
                    u = f || (!0 === l || !0 === j ? "margin" : "border");
                return e.access(this, function(d, f, l) {
                    var g;
                    return e.isWindow(d) ? d.document.documentElement["client" + c] : 9 === d.nodeType ? (g = d.documentElement, Math.max(d.body["scroll" + c], g["scroll" + c], d.body["offset" + c], g["offset" + c], g["client" + c])) : l === b ? e.css(d, f, l, u) : e.style(d, f, l, u)
                }, d, q ? l : b, q, null)
            }
        })
    });
    c.jQuery = c.$ = e;
    "function" == typeof define && define.amd && define.amd.jQuery &&
        define("jquery", [], function() {
            return e
        })
})(window);
var portraitMode = !1,
    mobilePortraitWidth = 480,
    mobilePortraitHeight = 640,
    mobileLandscapeWidth = 640,
    mobileLandscapeHeight = 480,
    mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
    mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight,
    desktopWidth = 640,
    desktopHeight = 480,
    w, h, multiplier, destW, destH, dynamicClickableEntityDivs = {},
    coreDivsToResize = ["game", "play", "orientate"],
    advancedDivsToResize = {/*
        MobileAdInGamePreroll: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height +
                20
        },
        MobileAdInGameEnd: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll2: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd2: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll3: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd3: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width +
                2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        }*/
    };

function adjustLayers(c) {
    for (i = 0; i < coreDivsToResize.length; i++) ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", c ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize) try {
        $("#" + key).width(w), $("#" + key).height(h), $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2), $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) /
            2)
    } catch (b) {
        console.log(b)
    }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}
var minHeight = 99999999;

function sizeHandler() {
    if ($("#game")) {
        w = window.innerWidth;
        h = window.innerHeight;
        ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier);
        widthRatio = window.innerWidth / mobileWidth;
        heightRatio = window.innerHeight / mobileHeight;
        adjustLayers();
        window.scrollTo(0, 1);
        for (var c = navigator.userAgent.split(" "), b = 0; b < c.length; b++) c[b].substr(0,
            8);
        navigator.userAgent.indexOf("wv");
        navigator.userAgent.indexOf("SamsungBrowser")
    }
}

function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
    sizeHandler()
}

function fixSamsungHandler() {
    ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(c) {
        c.preventDefault();
        return !1
    }, !1), document.addEventListener("touchmove", function(c) {
        c.preventDefault();
        return !1
    }, !1), document.addEventListener("touchend",
        function(c) {
            c.preventDefault();
            return !1
        }, !1))
}
window.addEventListener("resize", function() {
    orientationHandler()
}, !1);
window.addEventListener("orientationchange", function() {
    orientationHandler()
}, !1);
document.ontouchmove = function(c) {
    window.scrollTo(0, 1);
    c.preventDefault()
};

function getInternetExplorerVersion() {
    var c = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (c = parseFloat(RegExp.$1));
    return c
}
var ie = getInternetExplorerVersion();

function getQueryVariable(c) {
    for (var b = window.location.search.substring(1).split("&"), d = 0; d < b.length; d++) {
        var f = b[d].split("=");
        if (decodeURIComponent(f[0]) == c) return decodeURIComponent(f[1])
    }
}
this.jukebox = {};
jukebox.Player = function(c, b) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = b || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(c))
        for (var f in c) this.settings[f] = c[f];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) :
        this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var c = this,
            b = this.settings,
            d = {},
            f;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var j = function(b) {
                    c.__addToManager(b)
                };
                this.context.addEventListener("canplaythrough", j, !0);
                window.setTimeout(function() {
                    c.context.removeEventListener("canplaythrough", j, !0);
                    j("timeout")
                }, b.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (f in this.HTML5API) this[f] = this.HTML5API[f];
            1 < d.channels ? !0 === b.autoplay ? this.context.autoplay = !0 : void 0 !== b.spritemap[b.autoplay] && this.play(b.autoplay) : 1 === d.channels && void 0 !== b.spritemap[b.autoplay] && (this.backgroundMusic = b.spritemap[b.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(b.autoplay));
            1 == d.channels && !0 !== b.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== c.isPlaying && (c.pause(), c.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                c.__wasAutoPaused && (c.resume(), delete c._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (f in this.FLASHAPI) this[f] = this.FLASHAPI[f];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + b.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === b.autoplay ? this.play(0) : b.spritemap[b.autoplay] && this.play(b.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(c) {
        var b, d = this.settings.flashMediaElement,
            f, j = {
                flashvars: c.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            b = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(b);
            var p = document.createElement("object");
            p.id = "jukebox-flashstream-" + this.id;
            p.setAttribute("type", "application/x-shockwave-flash");
            p.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            p.setAttribute("width", "0");
            p.setAttribute("height", "0");
            j.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            j.flashvars = c.join("&amp;");
            for (f in j) c = document.createElement("param"), c.setAttribute("name", f), c.setAttribute("value", j[f]), p.appendChild(c);
            b.outerHTML = p.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            b =
                document.createElement("embed");
            b.id = "jukebox-flashstream-" + this.id;
            b.setAttribute("type", "application/x-shockwave-flash");
            b.setAttribute("width", "100");
            b.setAttribute("height", "100");
            j.play = !1;
            j.loop = !1;
            j.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (f in j) b.setAttribute(f, j[f]);
            document.getElementsByTagName("body")[0].appendChild(b);
            this.context = b
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var c = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                c, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (c - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(c, b) {
        if (null !== this.isPlaying && !0 !== b) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(c, this.id);
        else {
            var d = this.settings.spritemap,
                f;
            if (void 0 !== d[c]) f = d[c].start;
            else if ("number" === typeof c) {
                f = c;
                for (var j in d)
                    if (f >= d[j].start && f <=
                        d[j].end) {
                        c = j;
                        break
                    }
            }
            void 0 !== f && "[object Object]" === Object.prototype.toString.call(d[c]) && (this.isPlaying = this.settings.spritemap[c], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(f))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(c) {
        c = "number" ===
            typeof c ? c : this.__lastPosition;
        if (null !== c) return this.play(c), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(c) {
            this.context.volume = c;
            return 1E-4 > Math.abs(this.context.volume - c) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(c) {
            try {
                return this.context.currentTime = c, !0
            } catch (b) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        },
        setVolume: function(c) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(c), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(c) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(c) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(c) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var b in this.defaults) this.settings[b] = this.defaults[b];
    if ("[object Object]" === Object.prototype.toString.call(c))
        for (var d in c) this.settings[d] = c[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var c = window.Audio && new Audio;
        if (c && c.canPlayType && !1 === this.settings.useFlash) {
            for (var b = [{
                    e: "3gp",
                    m: ["audio/3gpp", "audio/amr"]
                }, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {
                    e: "amr",
                    m: ["audio/amr", "audio/3gpp"]
                }, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                }, {
                    e: "mp3",
                    m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                }, {
                    e: "mpga",
                    m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                }, {
                    e: "mp4",
                    m: ["audio/mp4", "video/mp4"]
                }, {
                    e: "ogg",
                    m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                }, {
                    e: "wav",
                    m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                }, {
                    e: "webm",
                    m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                }],
                d, f, j = 0, p = b.length; j < p; j++)
                if (f = b[j].e, b[j].m.length && "object" === typeof b[j].m)
                    for (var y = 0, s = b[j].m.length; y < s; y++)
                        if (d = b[j].m[y], "" !== c.canPlayType(d)) {
                            this.codecs[f] = d;
                            break
                        } else this.codecs[f] || (this.codecs[f] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            c.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(c.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (t) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(c) {
        return this.__players && void 0 !== this.__players[c] ? this.__players[c] : null
    },
    __getClone: function(c, b) {
        for (var d in this.__clones) {
            var f = this.__clones[d];
            if (null === f.isPlaying && f.origin === c) return f
        }
        if ("[object Object]" === Object.prototype.toString.call(b)) {
            d = {};
            for (var j in b) d[j] = b[j];
            d.autoplay = !1;
            j = new jukebox.Player(d, c);
            j.isClone = !0;
            j.wasReady = !1;
            return this.__clones[j.id] = j
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length &&
                this.__playersLength < this.features.channels) {
                var c = this.__queue[0],
                    b = this.__getPlayerById(c.origin);
                if (null !== b) {
                    var d = this.__getClone(c.origin, b.settings);
                    null !== d && (!0 === this.features.volume && (b = this.__players[c.origin]) && d.setVolume(b.getVolume()), this.add(d), d.play(c.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (c = this.__queue[0], b = this.__getPlayerById(c.origin), null !== b && b.play(c.pointer, !0), this.__queue.splice(0, 1)), this.__players) c = this.__players[d],
                    b = c.getCurrentTime() || 0, c.isPlaying && !1 === c.wasReady ? c.wasReady = c.setCurrentTime(c.isPlaying.start) : c.isPlaying && !0 === c.wasReady ? b > c.isPlaying.end && (!0 === c.isPlaying.loop ? c.play(c.isPlaying.start, !0) : c.stop()) : c.isClone && null === c.isPlaying ? this.remove(c) : void 0 !== c.backgroundMusic && null === c.isPlaying && b > c.backgroundMusic.end && c.backgroundHackForiOS()
    },
    getPlayableResource: function(c) {
        "[object Array]" !== Object.prototype.toString.call(c) && (c = [c]);
        for (var b = 0, d = c.length; b < d; b++) {
            var f = c[b],
                j = f.match(/\.([^\.]*)$/)[1];
            if (j && this.codecs[j]) return f
        }
        return null
    },
    add: function(c) {
        return c instanceof jukebox.Player && void 0 === this.__players[c.id] ? (this.__playersLength++, this.__players[c.id] = c, !0) : !1
    },
    remove: function(c) {
        return c instanceof jukebox.Player && void 0 !== this.__players[c.id] ? (this.__playersLength--, delete this.__players[c.id], !0) : !1
    },
    addToQueue: function(c, b) {
        return ("string" === typeof c || "number" === typeof c) && void 0 !== this.__players[b] ? (this.__queue.push({
            pointer: c,
            origin: b
        }), !0) : !1
    }
};
(function() {
    var c = {},
        b = null,
        d = !0,
        f = !1;
    if ("undefined" !== typeof AudioContext) b = new AudioContext;
    else if ("undefined" !== typeof webkitAudioContext) b = new webkitAudioContext;
    else if ("undefined" !== typeof Audio) {
        d = !1;
        try {
            new Audio
        } catch (j) {
            f = !0
        }
    } else d = !1, f = !0; if (d) {
        var p = "undefined" === typeof b.createGain ? b.createGainNode() : b.createGain();
        p.gain.value = 1;
        p.connect(b.destination)
    }
    var y = function() {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.noAudio = f;
        this._howls = []
    };
    y.prototype = {
        volume: function(b) {
            b =
                parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (p.gain.value = b);
                for (var c in this._howls)
                    if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                        for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? p.gain.value : this._volume
        },
        mute: function() {
            this._setMuted(!0);
            return this
        },
        unmute: function() {
            this._setMuted(!1);
            return this
        },
        _setMuted: function(b) {
            this._muted = b;
            d && (p.gain.value = b ? 0 : this._volume);
            for (var c in this._howls)
                if (this._howls.hasOwnProperty(c) &&
                    !1 === this._howls[c]._webAudio)
                    for (var f = 0; f < this._howls[c]._audioNode.length; f++) this._howls[c]._audioNode[f].muted = b
        }
    };
    var s = new y,
        y = null;
    if (!f) var y = new Audio,
        t = {
            mp3: !!y.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            opus: !!y.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!y.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!y.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            m4a: !!(y.canPlayType("audio/x-m4a;") || y.canPlayType("audio/aac;")).replace(/^no$/,
                ""),
            mp4: !!(y.canPlayType("audio/x-mp4;") || y.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !!y.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
        };
    var A = function(b) {
        this._autoplay = b.autoplay || !1;
        this._buffer = b.buffer || !1;
        this._duration = b.duration || 0;
        this._format = b.format || null;
        this._loop = b.loop || !1;
        this._loaded = !1;
        this._sprite = b.sprite || {};
        this._src = b.src || "";
        this._pos3d = b.pos3d || [0, 0, -0.5];
        this._volume = void 0 !== b.volume ? b.volume : 1;
        this._urls = b.urls || [];
        this._rate = b.rate || 1;
        this._onload = [b.onload || function() {}];
        this._onloaderror = [b.onloaderror || function() {}];
        this._onend = [b.onend || function() {}];
        this._onpause = [b.onpause || function() {}];
        this._onplay = [b.onplay || function() {}];
        this._onendTimer = [];
        this._webAudio = d && !this._buffer;
        this._audioNode = [];
        this._webAudio && this._setupAudioNode();
        s._howls.push(this);
        this.load()
    };
    A.prototype = {
        load: function() {
            var d = this,
                j = null;
            if (!f) {
                for (var u = 0; u < d._urls.length; u++) {
                    var p, A;
                    if (d._format) p = d._format;
                    else if (A = d._urls[u].toLowerCase().split("?")[0], p =
                        (p = A.match(/.+\.([^?]+)(\?|$)/)) && 2 <= p.length ? p : A.match(/data\:audio\/([^?]+);/)) p = p[1];
                    else {
                        d.on("loaderror");
                        return
                    } if (t[p]) {
                        j = d._urls[u];
                        break
                    }
                }
                if (j) {
                    d._src = j;
                    if (d._webAudio) {
                        var y = j;
                        if (y in c) d._duration = c[y].duration, B(d);
                        else {
                            var E = new XMLHttpRequest;
                            E.open("GET", y, !0);
                            E.responseType = "arraybuffer";
                            E.onload = function() {
                                b.decodeAudioData(E.response, function(b) {
                                    b && (c[y] = b, B(d, b))
                                }, function() {
                                    d.on("loaderror")
                                })
                            };
                            E.onerror = function() {
                                d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode,
                                    d.load())
                            };
                            try {
                                E.send()
                            } catch (Xa) {
                                E.onerror()
                            }
                        }
                    } else {
                        var I = new Audio;
                        d._audioNode.push(I);
                        I.src = j;
                        I._pos = 0;
                        I.preload = "auto";
                        I.volume = s._muted ? 0 : d._volume * s.volume();
                        c[j] = d;
                        var O = function() {
                            d._duration = Math.ceil(10 * I.duration) / 10;
                            0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = {
                                _default: [0, 1E3 * d._duration]
                            });
                            d._loaded || (d._loaded = !0, d.on("load"));
                            d._autoplay && d.play();
                            I.removeEventListener("canplaythrough", O, !1)
                        };
                        I.addEventListener("canplaythrough", O, !1);
                        I.load()
                    }
                    return d
                }
            }
            d.on("loaderror")
        },
        urls: function(b) {
            return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(d, f) {
            var j = this;
            "function" === typeof d && (f = d);
            if (!d || "function" === typeof d) d = "_default";
            if (!j._loaded) return j.on("load", function() {
                j.play(d, f)
            }), j;
            if (!j._sprite[d]) return "function" === typeof f && f(), j;
            j._inactiveNode(function(p) {
                p._sprite = d;
                var t = 0 < p._pos ? p._pos : j._sprite[d][0] / 1E3,
                    A = j._sprite[d][1] / 1E3 - p._pos,
                    B = !(!j._loop && !j._sprite[d][2]),
                    y = "string" === typeof f ? f :
                    Math.round(Date.now() * Math.random()) + "",
                    I, O = {
                        id: y,
                        sprite: d,
                        loop: B
                    };
                I = setTimeout(function() {
                    !j._webAudio && B && j.stop(O.id, O.timer).play(d, O.id);
                    j._webAudio && !B && (j._nodeById(O.id).paused = !0, j._nodeById(O.id)._pos = 0);
                    !j._webAudio && !B && j.stop(O.id, O.timer);
                    j.on("end", y)
                }, 1E3 * A);
                j._onendTimer.push(I);
                O.timer = j._onendTimer[j._onendTimer.length - 1];
                if (j._webAudio) {
                    I = j._sprite[d][0] / 1E3;
                    var J = j._sprite[d][1] / 1E3;
                    p.id = y;
                    p.paused = !1;
                    I = [B, I, J];
                    J = j._nodeById(y);
                    J.bufferSource = b.createBufferSource();
                    J.bufferSource.buffer =
                        c[j._src];
                    J.bufferSource.connect(J.panner);
                    J.bufferSource.loop = I[0];
                    I[0] && (J.bufferSource.loopStart = I[1], J.bufferSource.loopEnd = I[1] + I[2]);
                    J.bufferSource.playbackRate.value = j._rate;
                    j._playStart = b.currentTime;
                    p.gain.value = j._volume;
                    "undefined" === typeof p.bufferSource.start ? p.bufferSource.noteGrainOn(0, t, A) : p.bufferSource.start(0, t, A)
                } else if (4 === p.readyState) p.id = y, p.currentTime = t, p.muted = s._muted, p.volume = j._volume * s.volume(), setTimeout(function() {
                    p.play()
                }, 0);
                else {
                    j._clearEndTimer(I);
                    var za = d,
                        na =
                        f,
                        sa = function() {
                            j.play(za, na);
                            p.removeEventListener("canplaythrough", sa, !1)
                        };
                    p.addEventListener("canplaythrough", sa, !1);
                    return j
                }
                j.on("play");
                "function" === typeof f && f(y);
                return j
            });
            return j
        },
        pause: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() {
                d.pause(b)
            }), d;
            d._clearEndTimer(c || 0);
            var f = b ? d._nodeById(b) : d._activeNode();
            if (f)
                if (f._pos = d.pos(null, b), d._webAudio) {
                    if (!f.bufferSource || f.paused) return d;
                    f.paused = !0;
                    "undefined" === typeof f.bufferSource.stop ? f.bufferSource.noteOff(0) :
                        f.bufferSource.stop(0)
                } else f.pause();
            d.on("pause");
            return d
        },
        stop: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() {
                d.stop(b)
            }), d;
            d._clearEndTimer(c || 0);
            var f = b ? d._nodeById(b) : d._activeNode();
            if (f)
                if (f._pos = 0, d._webAudio) {
                    if (!f.bufferSource || f.paused) return d;
                    f.paused = !0;
                    "undefined" === typeof f.bufferSource.stop ? f.bufferSource.noteOff(0) : f.bufferSource.stop(0)
                } else f.pause(), f.currentTime = 0;
            return d
        },
        mute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                    c.mute(b)
                }),
                c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.volume = 0);
            return c
        },
        unmute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.unmute(b)
            }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume : d.volume = c._volume);
            return c
        },
        volume: function(b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded) return d.on("play", function() {
                    d.volume(b, c)
                }), d;
                var f = c ? d._nodeById(c) : d._activeNode();
                f && (d._webAudio ? f.gain.value = b : f.volume =
                    b * s.volume());
                return d
            }
            return d._volume
        },
        loop: function(b) {
            return "boolean" === typeof b ? (this._loop = b, this) : this._loop
        },
        sprite: function(b) {
            return "object" === typeof b ? (this._sprite = b, this) : this._sprite
        },
        pos: function(c, d) {
            var f = this;
            if (!f._loaded) return f.on("load", function() {
                f.pos(c)
            }), "number" === typeof c ? f : f._pos || 0;
            c = parseFloat(c);
            var j = d ? f._nodeById(d) : f._activeNode();
            if (j) return 0 <= c ? (f.pause(d), j._pos = c, f.play(j._sprite, d), f) : f._webAudio ? j._pos + (b.currentTime - f._playStart) : j.currentTime;
            if (0 <= c) return f;
            for (j = 0; j < f._audioNode.length; j++)
                if (f._audioNode[j].paused && 4 === f._audioNode[j].readyState) return f._webAudio ? f._audioNode[j]._pos : f._audioNode[j].currentTime
        },
        pos3d: function(b, c, d, f) {
            var j = this;
            c = "undefined" === typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!j._loaded) return j.on("play", function() {
                j.pos3d(b, c, d, f)
            }), j;
            if (0 <= b || 0 > b) {
                if (j._webAudio) {
                    var s = f ? j._nodeById(f) : j._activeNode();
                    s && (j._pos3d = [b, c, d], s.panner.setPosition(b, c, d))
                }
            } else return j._pos3d;
            return j
        },
        fade: function(b, c, d,
            f, j) {
            var s = this,
                p = Math.abs(b - c),
                t = b > c ? "down" : "up",
                p = p / 0.01,
                A = d / p;
            if (!s._loaded) return s.on("load", function() {
                s.fade(b, c, d, f, j)
            }), s;
            s.volume(b, j);
            for (var B = 1; B <= p; B++)(function() {
                var b = Math.round(1E3 * (s._volume + ("up" === t ? 0.01 : -0.01) * B)) / 1E3;
                setTimeout(function() {
                    s.volume(b, j);
                    b === c && f && f()
                }, A * B)
            })()
        },
        fadeIn: function(b, c, d) {
            return this.volume(0).play().fade(0, b, c, d)
        },
        fadeOut: function(b, c, d, f) {
            var j = this;
            return j.fade(j._volume, b, c, function() {
                d && d();
                j.pause(f);
                j.on("end")
            }, f)
        },
        _nodeById: function(b) {
            for (var c =
                this._audioNode[0], d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].id === b) {
                    c = this._audioNode[d];
                    break
                }
            return c
        },
        _activeNode: function() {
            for (var b = null, c = 0; c < this._audioNode.length; c++)
                if (!this._audioNode[c].paused) {
                    b = this._audioNode[c];
                    break
                }
            this._drainPool();
            return b
        },
        _inactiveNode: function(b) {
            for (var c = null, d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                    b(this._audioNode[d]);
                    c = !0;
                    break
                }
            this._drainPool();
            if (!c) {
                var f;
                this._webAudio ? (f = this._setupAudioNode(),
                    b(f)) : (this.load(), f = this._audioNode[this._audioNode.length - 1], f.addEventListener("loadedmetadata", function() {
                    b(f)
                }))
            }
        },
        _drainPool: function() {
            var b = 0,
                c;
            for (c = 0; c < this._audioNode.length; c++) this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--) this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        },
        _clearEndTimer: function(b) {
            b = this._onendTimer.indexOf(b);
            b = 0 <= b ? b : 0;
            this._onendTimer[b] && (clearTimeout(this._onendTimer[b]),
                this._onendTimer.splice(b, 1))
        },
        _setupAudioNode: function() {
            var c = this._audioNode,
                d = this._audioNode.length;
            c[d] = "undefined" === typeof b.createGain ? b.createGainNode() : b.createGain();
            c[d].gain.value = this._volume;
            c[d].paused = !0;
            c[d]._pos = 0;
            c[d].readyState = 4;
            c[d].connect(p);
            c[d].panner = b.createPanner();
            c[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            c[d].panner.connect(c[d]);
            return c[d]
        },
        on: function(b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c) d.push(c);
            else
                for (var f = 0; f < d.length; f++) c ?
                    d[f].call(this, c) : d[f].call(this);
            return this
        },
        off: function(b, c) {
            for (var d = this["_on" + b], f = c.toString(), j = 0; j < d.length; j++)
                if (f === d[j].toString()) {
                    d.splice(j, 1);
                    break
                }
            return this
        },
        unload: function() {
            for (var b = this._audioNode, d = 0; d < this._audioNode.length; d++) b[d].paused || this.stop(b[d].id), this._webAudio ? b[d].disconnect(0) : b[d].src = "";
            b = s._howls.indexOf(this);
            null !== b && 0 <= b && s._howls.splice(b, 1);
            delete c[this._src]
        }
    };
    if (d) var B = function(b, c) {
        b._duration = c ? c.duration : b._duration;
        0 === Object.getOwnPropertyNames(b._sprite).length &&
            (b._sprite = {
                _default: [0, 1E3 * b._duration]
            });
        b._loaded || (b._loaded = !0, b.on("load"));
        b._autoplay && b.play()
    };
    "function" === typeof define && define.amd && define(function() {
        return {
            Howler: s,
            Howl: A
        }
    });
    "undefined" !== typeof exports && (exports.Howler = s, exports.Howl = A);
    window.Howler = s;
    window.Howl = A
})();
(function(c) {
    Number.prototype.map = function(b, c, d, f) {
        return d + (f - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            f = function() {},
            j = function() {
                return d.apply(this instanceof f && b ?
                    this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        f.prototype = this.prototype;
        j.prototype = new f;
        return j
    };
    c.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: c,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: c.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b ||
                b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, f = b.length; d < f; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var f = c[d];
                if ("object" != typeof f || f instanceof HTMLElement || f instanceof ig.Class || null === f) b[d] = f;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = f instanceof Array ? [] : {};
                    ig.merge(b[d], f)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                f;
            for (f in b) c.push(f);
            c.sort();
            for (f = 0; f < c.length; f++) d.push(b[c[f]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var f = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + f] = b["moz" + f] = b["o" + f] = d : b["ms" + f] = b["moz" + f] = b["webkit" + f] = b["o" + f] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b,
            c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, f, j) {
            var q = ig.$new("canvas");
            q.width = b.width;
            q.height = b.height;
            var p = q.getContext("2d");
            ig.System.SCALE.CRISP(q, p);
            var y = ig.getVendorAttribute(p, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(p, "getImageDataHD");
            var K = b.width / y,
                M = b.height / y;
            q.width = Math.ceil(K);
            q.height = Math.ceil(M);
            p.drawImage(b, 0, 0, K, M);
            return 1 === y ? p.getImageData(c, d, f, j) : p.getImageDataHD(c, d, f, j)
        },
        module: function(b) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                f = ig.$new("script");
            f.type = "text/javascript";
            f.src = d;
            f.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            f.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(f)
        },
        _execModules: function() {
            for (var b = !1, c =
                0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], f = !0, j = 0; j < d.requires.length; j++) {
                    var q = d.requires[j];
                    ig.modules[q] ? ig.modules[q].loaded || (f = !1) : (f = !1, ig._loadScript(q, d.name))
                }
                f && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    f = [];
                    q = ig._loadQueue[c].requires;
                    for (j = 0; j < q.length; j++) d = ig.modules[q[j]], (!d || !d.loaded) && f.push(q[j]);
                    b.push(ig._loadQueue[c].name +
                        " (requires: " + f.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio =
                c.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: c.innerWidth,
                height: c.innerHeight
            };
            ig.ua.screen = {
                width: c.screen.availWidth * ig.ua.pixelRatio,
                height: c.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                c || c.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), c.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(c, "requestAnimationFrame");
    if (c.requestAnimationFrame) {
        var b = 1,
            d = {};
        c.ig.setAnimation = function(f, j) {
            var p = b++;
            d[p] = !0;
            var y = function() {
                d[p] && (c.requestAnimationFrame(y, j), f())
            };
            c.requestAnimationFrame(y, j);
            return p
        };
        c.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else c.ig.setAnimation = function(b) {
        return c.setInterval(b, 1E3 / 60)
    }, c.ig.clearAnimation = function(b) {
        c.clearInterval(b)
    };
    var f = !1,
        j = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        p = 0;
    c.ig.Class = function() {};
    var y = function(b) {
        var c = this.prototype,
            d = {},
            f;
        for (f in b) "function" ==
            typeof b[f] && "function" == typeof c[f] && j.test(b[f]) ? (d[f] = c[f], c[f] = function(b, c) {
                return function() {
                    var f = this.parent;
                    this.parent = d[b];
                    var j = c.apply(this, arguments);
                    this.parent = f;
                    return j
                }
            }(f, b[f])) : c[f] = b[f]
    };
    c.ig.Class.extend = function(b) {
        function d() {
            if (!f) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var A = this.prototype;
        f = !0;
        var B = new this;
        f = !1;
        for (var l in b) B[l] = "function" == typeof b[l] && "function" == typeof A[l] && j.test(b[l]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = A[b];
                var f = c.apply(this, arguments);
                this.parent = d;
                return f
            }
        }(l, b[l]) : b[l];
        d.prototype = B;
        d.prototype.constructor = d;
        d.extend = c.ig.Class.extend;
        d.inject = y;
        d.classId = B.classId = ++p;
        return d
    };
    c.ImpactMixin && ig.merge(ig, c.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(c) {
            return ig.Image.cache[c] || null
        },
        init: function(c) {
            this.path = c;
            this.load()
        },
        load: function(c) {
            this.loaded ? c && c(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = c || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(c) {
            var b = ig.getImagePixels(this.data, 0, 0, this.width,
                    this.height),
                d = this.width * c,
                f = this.height * c,
                j = ig.$new("canvas");
            j.width = d;
            j.height = f;
            for (var p = j.getContext("2d"), y = p.getImageData(0, 0, d, f), s = 0; s < f; s++)
                for (var t = 0; t < d; t++) {
                    var A = 4 * (Math.floor(s / c) * this.width + Math.floor(t / c)),
                        B = 4 * (s * d + t);
                    y.data[B] = b.data[A];
                    y.data[B + 1] = b.data[A + 1];
                    y.data[B + 2] = b.data[A + 2];
                    y.data[B + 3] = b.data[A + 3]
                }
            p.putImageData(y, 0, 0);
            this.data = j
        },
        draw: function(c, b, d, f, j, p) {
            if (this.loaded) {
                var y = ig.system.scale;
                j = (j ? j : this.width) * y;
                p = (p ? p : this.height) * y;
                ig.system.context.drawImage(this.data,
                    d ? d * y : 0, f ? f * y : 0, j, p, ig.system.getDrawPos(c), ig.system.getDrawPos(b), j, p);
                ig.Image.drawCount++
            }
        },
        drawTile: function(c, b, d, f, j, p, y) {
            j = j ? j : f;
            if (this.loaded && !(f > this.width || j > this.height)) {
                var s = ig.system.scale,
                    t = Math.floor(f * s),
                    A = Math.floor(j * s),
                    B = p ? -1 : 1,
                    l = y ? -1 : 1;
                if (p || y) ig.system.context.save(), ig.system.context.scale(B, l);
                ig.system.context.drawImage(this.data, Math.floor(d * f) % this.width * s, Math.floor(d * f / this.width) * j * s, t, A, ig.system.getDrawPos(c) * B - (p ? t : 0), ig.system.getDrawPos(b) * l - (y ? A : 0), t, A);
                (p ||
                    y) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var c in ig.Image.cache) ig.Image.cache[c].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(c) {
            this._loadMetrics(this.data);
            this.parent(c)
        },
        widthForString: function(c) {
            if (-1 !== c.indexOf("\n")) {
                c = c.split("\n");
                for (var b = 0, d = 0; d < c.length; d++) b = Math.max(b, this._widthForLine(c[d]));
                return b
            }
            return this._widthForLine(c)
        },
        _widthForLine: function(c) {
            for (var b = 0, d = 0; d < c.length; d++) b += this.widthMap[c.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return b
        },
        heightForString: function(c) {
            return c.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(c, b, d, f) {
            "string" != typeof c && (c = c.toString());
            if (-1 !== c.indexOf("\n")) {
                c = c.split("\n");
                for (var j = this.height + this.lineSpacing, p = 0; p < c.length; p++) this.draw(c[p], b, d + p * j, f)
            } else {
                if (f == ig.Font.ALIGN.RIGHT || f == ig.Font.ALIGN.CENTER) p = this._widthForLine(c), b -= f == ig.Font.ALIGN.CENTER ? p / 2 : p;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (p = 0; p < c.length; p++) f = c.charCodeAt(p),
                    b += this._drawChar(f - this.firstChar, b, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += c.length
            }
        },
        _drawChar: function(c, b, d) {
            if (!this.loaded || 0 > c || c >= this.indices.length) return 0;
            var f = ig.system.scale,
                j = this.widthMap[c] * f,
                p = (this.height - 2) * f;
            ig.system.context.drawImage(this.data, this.indices[c] * f, 0, j, p, ig.system.getDrawPos(b), ig.system.getDrawPos(d), j, p);
            return this.widthMap[c] + this.letterSpacing
        },
        _loadMetrics: function(c) {
            this.height = c.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var b = ig.getImagePixels(c, 0, c.height - 1, c.width, 1), d = 0, f = 0, j = 0; j < c.width; j++) {
                var p = 4 * j + 3;
                127 < b.data[p] ? f++ : 128 > b.data[p] && f && (this.widthMap.push(f), this.indices.push(j - f), d++, f = 0)
            }
            this.widthMap.push(f);
            this.indices.push(j - f)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var c = new Audio, b = 0; b < ig.Sound.use.length; b++) {
                    var d = ig.Sound.use[b];
                    if (c.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(c, b, d) {
            var f = ig.prefix + c.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[c]) {
                if (b && this.clips[c].length < ig.Sound.channels)
                    for (b = this.clips[c].length; b <
                        ig.Sound.channels; b++) {
                        var j = new Audio(f);
                        j.load();
                        this.clips[c].push(j)
                    }
                return this.clips[c][0]
            }
            var p = new Audio(f);
            d && (p.addEventListener("canplaythrough", function s(b) {
                p.removeEventListener("canplaythrough", s, !1);
                d(c, !0, b)
            }, !1), p.addEventListener("error", function(b) {
                d(c, !1, b)
            }, !1));
            p.preload = "auto";
            p.load();
            this.clips[c] = [p];
            if (b)
                for (b = 1; b < ig.Sound.channels; b++) j = new Audio(f), j.load(), this.clips[c].push(j);
            return p
        },
        get: function(c) {
            c = this.clips[c];
            for (var b = 0, d; d = c[b++];)
                if (d.paused || d.ended) return d.ended &&
                    (d.currentTime = 0), d;
            c[0].pause();
            c[0].currentTime = 0;
            return c[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                    get: this.getVolume.bind(this),
                    set: this.setVolume.bind(this)
                }), Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) :
                this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(c, b) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(c instanceof ig.Sound ? c.path : c, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                b && (this.namedTracks[b] = d);
                this.currentTrack ||
                    (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(c) {
            if (c && this.namedTracks[c]) c = this.namedTracks[c], c != this.currentTrack && (this.stop(),
                this.currentTrack = c);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(c) {
            this._loop = c;
            for (var b in this.tracks) this.tracks[b].loop = c
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(c) {
            this._volume = c.limit(0, 1);
            for (var b in this.tracks) this.tracks[b].volume = this._volume
        },
        fadeOut: function(c) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(c), this._fadeInterval = setInterval(this._fadeStep.bind(this),
                50))
        },
        _fadeStep: function() {
            var c = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= c ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = c
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(c, b) {
            this.path = c;
            this.multiChannel = !1 !== b;
            this.load()
        },
        load: function(c) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
                this.multiChannel, c) : ig.addResource(this) : c && c(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(c, b) {
            this.gameClass = c;
            this.resources = b;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var c =
                    0; c < this.resources.length; c++) this.loadResource(this.resources[c]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(c) {
            c.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(c, b) {
            if (b) this._unloaded.erase(c);
            else throw "Failed to load resource: " + c;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(c) {
            this.last = this.base = ig.Timer.time;
            this.target = c || 0
        },
        set: function(c) {
            this.target = c || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var c = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : c
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt =
                ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var c = Date.now();
        ig.Timer.time += Math.min((c - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = c
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(c, b, d, f, j) {
            this.fps = b;
            this.clock = new ig.Timer;
            this.canvas = ig.$(c);
            this.resize(d, f, j);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(c, b, d) {
            this.width = c;
            this.height = b;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(c) {
            this.running ? this.newGameClass = c : this.setGameNow(c)
        },
        setGameNow: function(c) {
            ig.game = new c;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(c) {
            if ("function" == typeof c.run) this.delegate = c, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(c) {
            this.context.fillStyle = c;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(c) {
            return Math.round(c) * this.scale
        },
        SMOOTH: function(c) {
            return Math.round(c * this.scale)
        },
        SUBPIXEL: function(c) {
            return c * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(c, b) {
            ig.setVendorAttribute(b, "imageSmoothingEnabled", !1);
            c.style.imageRendering = "-moz-crisp-edges";
            c.style.imageRendering = "-o-crisp-edges";
            c.style.imageRendering = "-webkit-optimize-contrast";
            c.style.imageRendering = "crisp-edges";
            c.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(c, b) {
            ig.setVendorAttribute(b, "imageSmoothingEnabled", !0);
            c.style.imageRendering = "";
            c.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var c = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", c, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", c, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
                    this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(c) {
            var b = this.bindings[0 < (c.wheelDelta ? c.wheelDelta : -1 * c.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            b && (this.actions[b] = !0, this.presses[b] = !0, this.delayedKeyup[b] = !0, c.stopPropagation(), c.preventDefault())
        },
        mousemove: function(c) {
            var b =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (b = ig.system.realWidth);
            var b = ig.system.scale * (b / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            c = c.touches ? c.touches[0] : c;
            this.mouse.x = (c.clientX - d.left) / b;
            this.mouse.y = (c.clientY - d.top) / b
        },
        contextmenu: function(c) {
            this.bindings[ig.KEY.MOUSE2] && (c.stopPropagation(), c.preventDefault())
        },
        keydown: function(c) {
            var b = c.target.tagName;
            if (!("INPUT" == b || "TEXTAREA" ==
                b))
                if (b = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, 0 > b && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), b = this.bindings[b]) this.actions[b] = !0, this.locks[b] || (this.presses[b] = !0, this.locks[b] = !0), c.stopPropagation(), c.preventDefault()
        },
        keyup: function(c) {
            var b = c.target.tagName;
            if (!("INPUT" == b || "TEXTAREA" == b))
                if (b = this.bindings["keyup" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[b] = !0, c.stopPropagation(), c.preventDefault()
        },
        devicemotion: function(c) {
            this.accel = c.accelerationIncludingGravity
        },
        bind: function(c, b) {
            0 > c ? this.initMouse() : 0 < c && this.initKeyboard();
            this.bindings[c] = b
        },
        bindTouch: function(c, b) {
            var d = ig.$(c),
                f = this;
            d.addEventListener("touchstart", function(c) {
                f.touchStart(c, b)
            }, !1);
            d.addEventListener("touchend", function(c) {
                f.touchEnd(c, b)
            }, !1);
            d.addEventListener("MSPointerDown", function(c) {
                f.touchStart(c, b)
            }, !1);
            d.addEventListener("MSPointerUp", function(c) {
                f.touchEnd(c, b)
            }, !1)
        },
        unbind: function(c) {
            this.delayedKeyup[this.bindings[c]] = !0;
            this.bindings[c] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(c) {
            return this.actions[c]
        },
        pressed: function(c) {
            return this.presses[c]
        },
        released: function(c) {
            return !!this.delayedKeyup[c]
        },
        clearPressed: function() {
            for (var c in this.delayedKeyup) this.actions[c] = !1, this.locks[c] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(c, b) {
            this.actions[b] = !0;
            this.presses[b] = !0;
            c.stopPropagation();
            c.preventDefault();
            return !1
        },
        touchEnd: function(c, b) {
            this.delayedKeyup[b] = !0;
            c.stopPropagation();
            c.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.sound-handler").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        formats: {
            ogg: ".ogg",
            mp3: ".mp3"
        },
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMutedBgm: !1,
        forceMutedSfx: !1,
        muted: !1,
        bgmStarted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{
            name: "staticSound",
            path: "media/audio/play/static"
        }, {
            name: "openingSound",
            path: "media/audio/opening/opening"
        }, {
            name: "kittyopeningSound",
            path: "media/audio/opening/kittyopening"
        }, {
            name: "click",
            path: "media/audio/sfx/click"
        }, {
            name: "win",
            path: "media/audio/sfx/win"
        }, {
            name: "swipe",
            path: "media/audio/sfx/swipe"
        }],
        debug: !1,
        init: function() {
            ig.ua.mobile ? (this.initSfx(), this.setupJukebox()) : (this.initSfx(), this.setupDesktopMusic());
            this.setupWindowHandler()
        },
        allVoSoundLoaded: function() {
            if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
                this.debug && console.log("Vo ready");
                for (index = 0; index < this.voSoundLoaded.length; index++) this.voSoundLoaded[index].on("end",
                    function(c) {
                        c.isPlaying = !1;
                        this.soundBuffer.pop()
                    }.bind(this, this.voSoundLoaded[index])), this.voSoundLoaded[index].on("play", function(c) {
                    c.isPlaying = !0
                }.bind(this, this.voSoundLoaded[index]));
                return !0
            }
            return !1
        },
        allSfxSoundLoaded: function() {
            return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
        },
        stopBackgroundMusic: function() {
            ig.ua.mobile ? this.pausePosition = this.jukebox.player.pause() : ig.music.pause();
            this.bgmPlaying = !1
        },
        playBackgroundMusic: function() {
            this.bgmPlaying || (this.bgmStarted = !0, ig.ua.mobile ? this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0) : ig.music.play(), this._unMuteBackgroundMusic(), this.bgmPlaying = !0)
        },
        playSound: function(c) {
            if ((c = this[c]) && (!this.forceMuted || !this.muted) && !c.isPlaying) this.soundBuffer.push(c), c.play()
        },
        stopAllAndPlaySound: function(c) {
            this.stopAllSounds();
            this.playSound(c)
        },
        stopAllSounds: function() {
            for (index = 0; index < this.soundBuffer.length; index++) this.soundBuffer[index].isPlaying = !1, this.soundBuffer.splice(0, 1)[0].stop()
        },
        addSound: function(c, b, d) {
            var f = b + this.formats.ogg;
            b += this.formats.mp3;
            this.SOUNDID[c] = c;
            this[c] = d ? new Howl({
                urls: [f, b],
                onload: d
            }) : new Howl({
                urls: [f, b]
            })
        },
        _muteSounds: function() {
            for (i = 0; i < ig.resources.length; i++) ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute();
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function() {
            Howler.unmute();
            ig.Sound.enabled = !0;
            this.debug && console.log("Sounds can play")
        },
        _muteBackgroundMusic: function() {
            ig.ua.mobile ?
                (this.stopBackgroundMusic(), this.jukebox.player.setVolume(0)) : ig.music.volume = 0;
            this.debug && console.log("BGM muted");
            this.bgmPlaying = !1
        },
        _unMuteBackgroundMusic: function() {
            this.bgmStarted && (ig.ua.mobile ? (this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.jukebox.player.setVolume(1)) : ig.music.volume = 0.5, this.debug && console.log("BGM can play"), this.bgmPlaying = !0)
        },
        focusBlurMute: function() {
            this.forceMutedBgm ||
                this._muteBackgroundMusic();
            this.forceMutedSfx || this._muteSounds()
        },
        focusBlurUnmute: function() {
            this.forceMutedBgm || this._unMuteBackgroundMusic();
            this.forceMutedSfx || this._unMuteSounds()
        },
        setForceMuted: function(c) {
            this.forceMuted = c
        },
        setForceMutedBgm: function(c) {
            this.forceMutedBgm = c
        },
        setForceMutedSfx: function(c) {
            this.forceMutedSfx = c
        },
        mute: function() {
            this.muted || (this._muteSounds(), this._muteBackgroundMusic(), this.muted = !0)
        },
        unmute: function() {
            this.muted && (this._unMuteSounds(), this._unMuteBackgroundMusic(),
                this.muted = !1)
        },
        setupWindowHandler: function() {
            "true" === getQueryVariable("webview") ? ($(window).focus(function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })) : (window.onfocus = function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }, window.onblur = function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })
        },
        initSfx: function() {
            for (index =
                0; index < this.sfxSoundsToLoad.length; index++) {
                var c = function(b) {
                    this.sfxSoundLoaded.push(this[b])
                }.bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, c)
            }
        },
        initVoSfx: function() {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var c = function(b) {
                    this.voSoundLoaded.push(this[b])
                }.bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path, c)
            }
        },
        setupDesktopMusic: function() {
            ig.music.add("media/audio/background.*",
                "background")
        },
        setupJukebox: function() {
            ig.ua.mobile && (this.jukebox = new ig.Jukebox, this.pausePosition = this.jukebox.player.settings.spritemap.music.start)
        },
        forceLoopBGM: function() {
            if (ig.ua.winPhone && !this.forceMutedBgm && this.bgmPlaying && this.jukebox && this.jukebox.player && this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop) {
                if (0 <= this.prevTime)
                    if (this.jukebox.player.getCurrentTime() === this.prevTime) {
                        if (this.silentCounter || (this.silentCounter = 0), this.silentCounter++,
                            this.jukebox.player.getCurrentTime() >= this.jukebox.player.settings.spritemap.music.end || this.silentCounter > 0.0010 * ig.soundHandler.jukebox.player.settings.timeout * ig.system.fps) this.jukebox.player.pause(), this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.silentCounter = null
                    } else this.silentCounter = null;
                this.prevTime = this.jukebox.player.getCurrentTime()
            }
        }
    })
});

function getHiddenProp() {
    var c = ["webkit", "moz", "ms", "o"];
    if ("hidden" in document) return "hidden";
    for (var b = 0; b < c.length; b++)
        if (c[b] + "Hidden" in document) return c[b] + "Hidden";
    return null
}

function isHidden() {
    var c = getHiddenProp();
    return !c ? !1 : document[c]
}
var visProp = getHiddenProp();
if (visProp) {
    var evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
    document.addEventListener(evtname, visChange)
}
window.addEventListener("pagehide", function() {
    ig.soundHandler && ig.soundHandler.focusBlurMute()
}, !1);
window.addEventListener("pageshow", function() {
    ig.ua.mobile && ig.game && ig.game.resumeGame();
    ig.soundHandler && ig.soundHandler.focusBlurUnmute()
}, !1);

function visChange() {
    isHidden() ? ig.soundHandler && ig.soundHandler.focusBlurMute() : (ig.ua.mobile && ig.game && ig.game.resumeGame(), ig.soundHandler && ig.soundHandler.focusBlurUnmute())
}
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function() {
    ig.main = function(c, b, d, f, j, p, y) {
        ig.system = new ig.System(c, d, f, j, p || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        ig.soundHandler = new ig.SoundHandler;
        (new(y || ig.Loader)(b, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(c, b, d) {
            this.width = b;
            this.height = d;
            this.image = new ig.Image(c)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(c, b, d, f) {
            this.sheet = c;
            this.pivot = {
                x: c.width / 2,
                y: c.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = b;
            this.sequence = d;
            this.stop = !!f;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(c) {
            this.timer.set(this.frameTime * -c - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var c = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(c / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : c % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(c, b) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            c > ig.system.width || b > ig.system.height || (0 > c + d || 0 > b + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(c, b, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(c + this.pivot.x), ig.system.getDrawPos(b + this.pivot.y)), ig.system.context.rotate(this.angle),
                this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(c,
            b, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = c;
            this.pos.y = this.last.y = b;
            ig.merge(this, d)
        },
        reset: function(c, b, d) {
            var f = this.constructor.prototype;
            this.pos.x = c;
            this.pos.y = b;
            this.last.x = c;
            this.last.y = b;
            this.vel.x = f.vel.x;
            this.vel.y = f.vel.y;
            this.accel.x = f.accel.x;
            this.accel.y = f.accel.y;
            this.health = f.health;
            this._killed = f._killed;
            this.standing = f.standing;
            this.type = f.type;
            this.checkAgainst = f.checkAgainst;
            this.collides = f.collides;
            ig.merge(this, d)
        },
        addAnim: function(c, b, d, f) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                c + " to.";
            b = new ig.Animation(this.animSheet, b, d, f);
            this.anims[c] = b;
            this.currentAnim || (this.currentAnim = b);
            return b
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var c = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y *
                ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(c);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(c, b, d, f) {
            return b ? (c + b * ig.system.tick).limit(-f, f) : d ? (b = d * ig.system.tick, 0 < c - b ? c - b : 0 > c + b ? c + b : 0) : c.limit(-f, f)
        },
        handleMovementTrace: function(c) {
            this.standing = !1;
            c.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            c.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) >
                this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (c.collision.slope) {
                var b = c.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * b.nx + this.vel.y * b.ny;
                    this.vel.x = (this.vel.x - 2 * b.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * b.ny * d) * this.bounciness
                } else d = (this.vel.x * b.x + this.vel.y * b.y) / (b.x * b.x + b.y * b.y), this.vel.x = b.x * d, this.vel.y = b.y * d, b = Math.atan2(b.x, b.y), b > this.slopeStanding.min && b < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = c.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(c) {
            this.health -= c;
            0 >= this.health && this.kill()
        },
        touches: function(c) {
            return !(this.pos.x >= c.pos.x + c.size.x || this.pos.x + this.size.x <= c.pos.x || this.pos.y >= c.pos.y + c.size.y || this.pos.y + this.size.y <= c.pos.y)
        },
        distanceTo: function(c) {
            var b = this.pos.x + this.size.x / 2 - (c.pos.x + c.size.x / 2);
            c = this.pos.y + this.size.y / 2 - (c.pos.y + c.size.y / 2);
            return Math.sqrt(b * b + c * c)
        },
        angleTo: function(c) {
            return Math.atan2(c.pos.y +
                c.size.y / 2 - (this.pos.y + this.size.y / 2), c.pos.x + c.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(c, b) {
        c.checkAgainst & b.type && c.check(b);
        b.checkAgainst & c.type && b.check(c);
        c.collides && b.collides && c.collides + b.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(c, b)
    };
    ig.Entity.solveCollision =
        function(c, b) {
            var d = null;
            if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
            else if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
            c.last.x + c.size.x > b.last.x && c.last.x < b.last.x + b.size.x ? (c.last.y < b.last.y ? ig.Entity.seperateOnYAxis(c, b, d) : ig.Entity.seperateOnYAxis(b, c, d), c.collideWith(b, "y"), b.collideWith(c, "y")) : c.last.y + c.size.y > b.last.y && c.last.y < b.last.y + b.size.y && (c.last.x < b.last.x ? ig.Entity.seperateOnXAxis(c, b, d) : ig.Entity.seperateOnXAxis(b,
                c, d), c.collideWith(b, "x"), b.collideWith(c, "x"))
        };
    ig.Entity.seperateOnXAxis = function(c, b, d) {
        var f = c.pos.x + c.size.x - b.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (c === d ? b : c).vel.x, b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == c ? -f : f, 0, d.size.x, d.size.y), d.pos.x = b.pos.x) : (d = (c.vel.x - b.vel.x) / 2, c.vel.x = -d, b.vel.x = d, d = ig.game.collisionMap.trace(c.pos.x, c.pos.y, -f / 2, 0, c.size.x, c.size.y), c.pos.x = Math.floor(d.pos.x), c = ig.game.collisionMap.trace(b.pos.x, b.pos.y, f / 2, 0, b.size.x, b.size.y), b.pos.x = Math.ceil(c.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(c, b, d) {
        var f = c.pos.y + c.size.y - b.pos.y;
        if (d) {
            b = c === d ? b : c;
            d.vel.y = -d.vel.y * d.bounciness + b.vel.y;
            var j = 0;
            d == c && Math.abs(d.vel.y - b.vel.y) < d.minBounceVelocity && (d.standing = !0, j = b.vel.x * ig.system.tick);
            c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, j, d == c ? -f : f, d.size.x, d.size.y);
            d.pos.y = c.pos.y;
            d.pos.x = c.pos.x
        } else ig.game.gravity && (b.standing || 0 < c.vel.y) ? (d = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, -(c.pos.y + c.size.y - b.pos.y), c.size.x, c.size.y), c.pos.y = d.pos.y, 0 < c.bounciness &&
            c.vel.y > c.minBounceVelocity ? c.vel.y *= -c.bounciness : (c.standing = !0, c.vel.y = 0)) : (d = (c.vel.y - b.vel.y) / 2, c.vel.y = -d, b.vel.y = d, j = b.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(c.pos.x, c.pos.y, j, -f / 2, c.size.x, c.size.y), c.pos.y = d.pos.y, c = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, f / 2, b.size.x, b.size.y), b.pos.y = c.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(c, b) {
            this.tilesize = c;
            this.data = b;
            this.height = b.length;
            this.width = b[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(c, b) {
            var d = Math.floor(c / this.tilesize),
                f = Math.floor(b / this.tilesize);
            return 0 <= d && d < this.width && 0 <= f && f < this.height ? this.data[f][d] : 0
        },
        setTile: function(c, b, d) {
            c = Math.floor(c / this.tilesize);
            b = Math.floor(b /
                this.tilesize);
            0 <= c && c < this.width && 0 <= b && b < this.height && (this.data[b][c] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, j) {
            this.parent(b, c);
            this.tiledef = j || ig.CollisionMap.defaultTileDef;
            for (var p in this.tiledef) p | 0 > this.lastSlope && (this.lastSlope = p | 0)
        },
        trace: function(b, c, j, p, y, s) {
            var t = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                A = Math.ceil(Math.max(Math.abs(j), Math.abs(p)) / this.tilesize);
            if (1 < A)
                for (var B = j / A, l = p / A, q = 0; q < A && (B || l) && !(this._traceStep(t,
                    b, c, B, l, y, s, j, p, q), b = t.pos.x, c = t.pos.y, t.collision.x && (j = B = 0), t.collision.y && (p = l = 0), t.collision.slope); q++);
            else this._traceStep(t, b, c, j, p, y, s, j, p, 0);
            return t
        },
        _traceStep: function(b, c, j, p, y, s, t, A, B, l) {
            b.pos.x += p;
            b.pos.y += y;
            var q = 0;
            if (p) {
                var u = 0 < p ? s : 0,
                    D = 0 > p ? this.tilesize : 0,
                    q = Math.max(Math.floor(j / this.tilesize), 0),
                    K = Math.min(Math.ceil((j + t) / this.tilesize), this.height);
                p = Math.floor((b.pos.x + u) / this.tilesize);
                var M = Math.floor((c + u) / this.tilesize);
                if (0 < l || p == M || 0 > M || M >= this.width) M = -1;
                if (0 <= p && p < this.width)
                    for (var E =
                        q; E < K && !(-1 != M && (q = this.data[E][M], 1 < q && q <= this.lastSlope && this._checkTileDef(b, q, c, j, A, B, s, t, M, E))); E++)
                        if (q = this.data[E][p], 1 == q || q > this.lastSlope || 1 < q && this._checkTileDef(b, q, c, j, A, B, s, t, p, E)) {
                            if (1 < q && q <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = q;
                            c = b.pos.x = p * this.tilesize - u + D;
                            A = 0;
                            break
                        }
            }
            if (y) {
                u = 0 < y ? t : 0;
                y = 0 > y ? this.tilesize : 0;
                q = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                D = Math.min(Math.ceil((b.pos.x + s) / this.tilesize), this.width);
                E = Math.floor((b.pos.y + u) / this.tilesize);
                K = Math.floor((j + u) / this.tilesize);
                if (0 < l || E == K || 0 > K || K >= this.height) K = -1;
                if (0 <= E && E < this.height)
                    for (p = q; p < D && !(-1 != K && (q = this.data[K][p], 1 < q && q <= this.lastSlope && this._checkTileDef(b, q, c, j, A, B, s, t, p, K))); p++)
                        if (q = this.data[E][p], 1 == q || q > this.lastSlope || 1 < q && this._checkTileDef(b, q, c, j, A, B, s, t, p, E)) {
                            if (1 < q && q <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = q;
                            b.pos.y = E * this.tilesize - u + y;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, j, p, y, s, t, A, B, l) {
            var q = this.tiledef[c];
            if (!q) return !1;
            c = (q[2] -
                q[0]) * this.tilesize;
            var u = (q[3] - q[1]) * this.tilesize,
                D = q[4];
            t = j + y + (0 > u ? t : 0) - (B + q[0]) * this.tilesize;
            A = p + s + (0 < c ? A : 0) - (l + q[1]) * this.tilesize;
            if (0 < c * A - u * t) {
                if (0 > y * -u + s * c) return D;
                B = Math.sqrt(c * c + u * u);
                l = u / B;
                B = -c / B;
                var K = t * l + A * B,
                    q = l * K,
                    K = B * K;
                if (q * q + K * K >= y * y + s * s) return D || 0.5 > c * (A - s) - u * (t - y);
                b.pos.x = j + y - q;
                b.pos.y = p + s - K;
                b.collision.slope = {
                    x: c,
                    y: u,
                    nx: l,
                    ny: B
                };
                return !0
            }
            return !1
        }
    });
    var c = 1 / 3,
        b = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, b, !0],
        6: [0, b, 1, c, !0],
        7: [0, c, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0,
            1, 1, 0, !0
        ],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [b, 1, 1, 0, !0],
        43: [c, 1, b, 0, !0],
        54: [0, 1, c, 0, !0],
        27: [0, 0, 1, c, !0],
        28: [0, c, 1, b, !0],
        29: [0, b, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, c, 1, !0],
        44: [c, 0, b, 1, !0],
        55: [b, 0, 1, 1, !0],
        16: [1, c, 0, 0, !0],
        17: [1, b, 0, c, !0],
        18: [1, 1, 0, b, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [c, 1, 0, 0, !0],
        41: [b, 1, c, 0, !0],
        52: [1, 1, b, 0, !0],
        38: [1, b, 0, 1, !0],
        39: [1, c, 0, b, !0],
        40: [1, 0,
            0, c, !0
        ],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, b, 1, !0],
        42: [b, 0, c, 1, !0],
        53: [c, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, j, p) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + j,
                    y: c + p
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(c, b, d) {
            this.parent(c, b);
            this.setTileset(d)
        },
        setTileset: function(c) {
            this.tilesetName = c instanceof ig.Image ? c.path : c;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(c,
            b) {
            this.scroll.x = c / this.distance;
            this.scroll.y = b / this.distance
        },
        preRenderMapToChunks: function() {
            var c = this.width * this.tilesize * ig.system.scale,
                b = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(c, b), this.chunkSize);
            var d = Math.ceil(c / this.chunkSize),
                f = Math.ceil(b / this.chunkSize);
            this.preRenderedChunks = [];
            for (var j = 0; j < f; j++) {
                this.preRenderedChunks[j] = [];
                for (var p = 0; p < d; p++) this.preRenderedChunks[j][p] = this.preRenderChunk(p, j, p == d - 1 ? c - p * this.chunkSize : this.chunkSize, j == f - 1 ?
                    b - j * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(c, b, d, f) {
            var j = d / this.tilesize / ig.system.scale + 1,
                p = f / this.tilesize / ig.system.scale + 1,
                y = c * this.chunkSize / ig.system.scale % this.tilesize,
                s = b * this.chunkSize / ig.system.scale % this.tilesize;
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            var t = ig.$new("canvas");
            t.width = d;
            t.height = f;
            t.retinaResolutionEnabled = !1;
            f = t.getContext("2d");
            ig.System.scaleMode(t, f);
            d = ig.system.context;
            ig.system.context = f;
            for (f = 0; f < j; f++)
                for (var A = 0; A < p; A++)
                    if (f + c < this.width && A + b < this.height) {
                        var B = this.data[A + b][f + c];
                        B && this.tiles.drawTile(f * this.tilesize - y, A * this.tilesize - s, B - 1, this.tilesize)
                    }
            ig.system.context = d;
            return t
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var c = ig.system.getDrawPos(this.scroll.x),
                b = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d =
                this.width * this.tilesize * ig.system.scale,
                c = (c % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                b = (b % d + d) % d;
            var d = Math.max(Math.floor(c / this.chunkSize), 0),
                f = Math.max(Math.floor(b / this.chunkSize), 0),
                j = Math.ceil((c + ig.system.realWidth) / this.chunkSize),
                p = Math.ceil((b + ig.system.realHeight) / this.chunkSize),
                y = this.preRenderedChunks[0].length,
                s = this.preRenderedChunks.length;
            this.repeat || (j = Math.min(j, y), p = Math.min(p, s));
            for (var t = 0; f < p; f++) {
                for (var A = 0, B = d; B < j; B++) {
                    var l = this.preRenderedChunks[f % s][B % y],
                        q = -c + B * this.chunkSize - A,
                        u = -b + f * this.chunkSize - t;
                    ig.system.context.drawImage(l, q, u);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(q, u, this.chunkSize, this.chunkSize));
                    this.repeat && l.width < this.chunkSize && q + l.width < ig.system.realWidth && (A += this.chunkSize - l.width, j++)
                }
                this.repeat && l.height < this.chunkSize && u + l.height < ig.system.realHeight && (t += this.chunkSize - l.height, p++)
            }
        },
        drawTiled: function() {
            for (var c = 0, b = null, d = (this.scroll.x / this.tilesize).toInt(),
                f = (this.scroll.y / this.tilesize).toInt(), j = this.scroll.x % this.tilesize, p = this.scroll.y % this.tilesize, y = -j - this.tilesize, j = ig.system.width + this.tilesize - j, s = ig.system.height + this.tilesize - p, t = -1, p = -p - this.tilesize; p < s; t++, p += this.tilesize) {
                var A = t + f;
                if (A >= this.height || 0 > A) {
                    if (!this.repeat) continue;
                    A = (A % this.height + this.height) % this.height
                }
                for (var B = -1, l = y; l < j; B++, l += this.tilesize) {
                    c = B + d;
                    if (c >= this.width || 0 > c) {
                        if (!this.repeat) continue;
                        c = (c % this.width + this.width) % this.width
                    }
                    if (c = this.data[A][c])(b = this.anims[c -
                        1]) ? b.draw(l, p) : this.tiles.drawTile(l, p, c - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(c) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var b = 0; b < c.entities.length; b++) {
                var d = c.entities[b];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (b = 0; b < c.layer.length; b++)
                if (d = c.layer[b], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var f = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    f.anims = this.backgroundAnims[d.tilesetName] || {};
                    f.repeat = d.repeat;
                    f.distance = d.distance;
                    f.foreground = !!d.foreground;
                    f.preRender = !!d.preRender;
                    f.name = d.name;
                    this.backgroundMaps.push(f)
                }
            for (b = 0; b < this.entities.length; b++) this.entities[b].ready()
        },
        loadLevelDeferred: function(c) {
            this._levelToLoad = c
        },
        getMapByName: function(c) {
            if ("collision" == c) return this.collisionMap;
            for (var b = 0; b < this.backgroundMaps.length; b++)
                if (this.backgroundMaps[b].name == c) return this.backgroundMaps[b];
            return null
        },
        getEntityByName: function(c) {
            return this.namedEntities[c]
        },
        getEntitiesByType: function(c) {
            c =
                "string" === typeof c ? ig.global[c] : c;
            for (var b = [], d = 0; d < this.entities.length; d++) {
                var f = this.entities[d];
                f instanceof c && !f._killed && b.push(f)
            }
            return b
        },
        spawnEntity: function(c, b, d, f) {
            var j = "string" === typeof c ? ig.global[c] : c;
            if (!j) throw "Can't spawn entity of type " + c;
            c = new j(b, d, f || {});
            this.entities.push(c);
            c.name && (this.namedEntities[c.name] = c);
            return c
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(c) {
            c.name &&
                delete this.namedEntities[c.name];
            c._killed = !0;
            c.type = ig.Entity.TYPE.NONE;
            c.checkAgainst = ig.Entity.TYPE.NONE;
            c.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(c)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var c = 0; c < this._deferredKill.length; c++) this._deferredKill[c].erase(), this.entities.erase(this._deferredKill[c]);
            this._deferredKill = [];
            if (this._doSortEntities ||
                this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var b in this.backgroundAnims) {
                var c = this.backgroundAnims[b],
                    d;
                for (d in c) c[d].update()
            }
        },
        updateEntities: function() {
            for (var c = 0; c < this.entities.length; c++) {
                var b = this.entities[c];
                b._killed || b.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var c;
            for (c = 0; c < this.backgroundMaps.length; c++) {
                var b =
                    this.backgroundMaps[c];
                if (b.foreground) break;
                b.setScreenPos(this.screen.x, this.screen.y);
                b.draw()
            }
            this.drawEntities();
            for (c; c < this.backgroundMaps.length; c++) b = this.backgroundMaps[c], b.setScreenPos(this.screen.x, this.screen.y), b.draw()
        },
        drawEntities: function() {
            for (var c = 0; c < this.entities.length; c++) this.entities[c].draw()
        },
        checkEntities: function() {
            for (var c = {}, b = 0; b < this.entities.length; b++) {
                var d = this.entities[b];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var f = {}, j = Math.floor(d.pos.y / this.cellSize), p = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, y = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, s = Math.floor(d.pos.x / this.cellSize); s < p; s++)
                        for (var t = j; t < y; t++)
                            if (c[s])
                                if (c[s][t]) {
                                    for (var A = c[s][t], B = 0; B < A.length; B++) d.touches(A[B]) && !f[A[B].id] && (f[A[B].id] = !0, ig.Entity.checkPair(d, A[B]));
                                    A.push(d)
                                } else c[s][t] = [d];
                else c[s] = {}, c[s][t] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(c, b) {
            return c.zIndex - b.zIndex
        },
        POS_X: function(c, b) {
            return c.pos.x + c.size.x - (b.pos.x +
                b.size.x)
        },
        POS_Y: function(c, b) {
            return c.pos.y + c.size.y - (b.pos.y + b.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        splashDesktop: new ig.Image("media/graphics/splash/desktop/cover.jpg"),
        splashMobile: new ig.Image("media/graphics/splash/mobile/cover.jpg"),
        barFrame: new ig.Image("media/graphics/game/bar_loading.png"),
        barFill: new ig.Image("media/graphics/game/loading.png"),
        init: function(c, b) {
            this.parent(c, b);
            ig.ua.mobile && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
        },
        end: function() {
            this.parent();
            var c = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", c)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame =
                0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.ua.mobile ? this.splashMobile.draw(0, 0) : this.splashDesktop.draw(0, 0);
            ig.system.context.font = "30pt passiononebold";
            ig.system.context.textAlign = "center";
            ig.system.context.fillStyle = "#000000";
            var c = Math.floor(100 * this._drawStatus);
            ig.system.context.fillText(c + "%", 325, 290);
            ig.system.context.fillStyle =
                "#FFFFFF";
            ig.system.context.fillText(c + "%", 323, 289);
            this.barFrame.draw(199, 300);
            c = 253 * this._drawStatus;
            0 < c && this.barFill.draw(207, 307, 0, 0, c, 24)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(c) {
        for (var b = 0; b < this.length; ++b)
            if (this[b] === c) return b;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var c = [], b = 0; b < this.tweens.length; b++) this.tweens[b].update(), this.tweens[b].complete || c.push(this.tweens[b]);
            this.tweens =
                c
        }
    };
    ig.Entity.prototype.tween = function(c, b, d) {
        c = new ig.Tween(this, c, b, d);
        this.tweens.push(c);
        return c
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].resume()
    };
    ig.Entity.prototype.stopTweens = function(c) {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].stop(c)
    };
    ig.Tween = function(c, b, d, f) {
        var j = {},
            p = {},
            y = {},
            s = 0,
            t = !1,
            A = !1,
            B = !1;
        this.duration = d;
        this.paused =
            this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, f);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            B = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, f) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (f[b] = d[b]);
            else
                for (subprop in d[b]) f[b] || (f[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
                    c[b], d[b], f[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            s = 0; - 1 == c.tweens.indexOf(this) && c.tweens.push(this);
            A = !0;
            t = new ig.Timer;
            for (var d in b) this.initEnd(d, b, p);
            for (d in p) this.initStart(d, p, c, j), this.initDelta(d, y, c, p)
        };
        this.initDelta = function(b, c, d, f) {
            if ("object" !== typeof f[b]) c[b] = f[b] - d[b];
            else
                for (subprop in f[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], f[b])
        };
        this.propUpdate = function(b, c, d, f, j) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
                d[b] + f[b] * j : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], f[b], j)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!A) return !1;
            if (this.delay) {
                if (t.delta() < this.delay) return;
                this.delay = 0;
                t.reset()
            }
            if (this.paused || this.complete) return !1;
            var b = (t.delta() + s) / this.duration,
                b = 1 < b ? 1 : b,
                d = this.easing(b);
            for (property in y) this.propUpdate(property, c, j, y, d);
            if (1 <= b) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    B && B.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in j) this.propSet(property, j, c);
                    s = 0;
                    t.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    b = {};
                    d = {};
                    ig.merge(b, p);
                    ig.merge(d, j);
                    ig.merge(j, b);
                    ig.merge(p, d);
                    for (property in p) this.initDelta(property, y, c, p);
                    s = 0;
                    t.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            s += t.delta()
        };
        this.resume = function() {
            this.paused = !1;
            t.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, s += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(c) {
        return c
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(c) {
        return c * c
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(c) {
        return -c * (c - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut =
        function(c) {
            return 1 > (c *= 2) ? 0.5 * c * c : -0.5 * (--c * (c - 2) - 1)
        };
    ig.Tween.Easing.Cubic.EaseIn = function(c) {
        return c * c * c
    };
    ig.Tween.Easing.Cubic.EaseOut = function(c) {
        return --c * c * c + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(c) {
        return 1 > (c *= 2) ? 0.5 * c * c * c : 0.5 * ((c -= 2) * c * c + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(c) {
        return c * c * c * c
    };
    ig.Tween.Easing.Quartic.EaseOut = function(c) {
        return -(--c * c * c * c - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(c) {
        return 1 > (c *= 2) ? 0.5 * c * c * c * c : -0.5 * ((c -= 2) * c * c * c - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn =
        function(c) {
            return c * c * c * c * c
        };
    ig.Tween.Easing.Quintic.EaseOut = function(c) {
        return (c -= 1) * c * c * c * c + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(c) {
        return 1 > (c *= 2) ? 0.5 * c * c * c * c * c : 0.5 * ((c -= 2) * c * c * c * c + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(c) {
        return -Math.cos(c * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(c) {
        return Math.sin(c * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(c) {
        return -0.5 * (Math.cos(Math.PI * c) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(c) {
        return 0 == c ? 0 : Math.pow(2,
            10 * (c - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(c) {
        return 1 == c ? 1 : -Math.pow(2, -10 * c) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(c) {
        return 0 == c ? 0 : 1 == c ? 1 : 1 > (c *= 2) ? 0.5 * Math.pow(2, 10 * (c - 1)) : 0.5 * (-Math.pow(2, -10 * (c - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(c) {
        return -(Math.sqrt(1 - c * c) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(c) {
        return Math.sqrt(1 - --c * c)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(c) {
        return 1 > (c /= 0.5) ? -0.5 * (Math.sqrt(1 - c * c) - 1) : 0.5 * (Math.sqrt(1 - (c -= 2) * c) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn =
        function(c) {
            var b, d = 0.1,
                f = 0.4;
            if (0 == c) return 0;
            if (1 == c) return 1;
            f || (f = 0.3);
            !d || 1 > d ? (d = 1, b = f / 4) : b = f / (2 * Math.PI) * Math.asin(1 / d);
            return -(d * Math.pow(2, 10 * (c -= 1)) * Math.sin(2 * (c - b) * Math.PI / f))
        };
    ig.Tween.Easing.Elastic.EaseOut = function(c) {
        var b, d = 0.1,
            f = 0.4;
        if (0 == c) return 0;
        if (1 == c) return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, b = f / 4) : b = f / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * c) * Math.sin(2 * (c - b) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(c) {
        var b, d = 0.1,
            f = 0.4;
        if (0 == c) return 0;
        if (1 == c) return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, b = f / 4) : b = f / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (c *= 2) ? -0.5 * d * Math.pow(2, 10 * (c -= 1)) * Math.sin(2 * (c - b) * Math.PI / f) : 0.5 * d * Math.pow(2, -10 * (c -= 1)) * Math.sin(2 * (c - b) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(c) {
        return c * c * (2.70158 * c - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(c) {
        return (c -= 1) * c * (2.70158 * c + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(c) {
        return 1 > (c *= 2) ? 0.5 * c * c * (3.5949095 * c - 2.5949095) : 0.5 * ((c -= 2) * c * (3.5949095 * c + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn =
        function(c) {
            return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - c)
        };
    ig.Tween.Easing.Bounce.EaseOut = function(c) {
        return (c /= 1) < 1 / 2.75 ? 7.5625 * c * c : c < 2 / 2.75 ? 7.5625 * (c -= 1.5 / 2.75) * c + 0.75 : c < 2.5 / 2.75 ? 7.5625 * (c -= 2.25 / 2.75) * c + 0.9375 : 7.5625 * (c -= 2.625 / 2.75) * c + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(c) {
        return 0.5 > c ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * c) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * c - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var c = getQueryVariable("webview");
            if (c) switch (c) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (c = getQueryVariable("debug")) switch (c) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function() {
    ig.Jukebox = ig.Class.extend({
        init: function() {
            this.player = new jukebox.Player({
                resources: ["media/audio/background.mp3", "media/audio/background.ogg"],
                autoplay: !1,
                spritemap: {
                    music: {
                        start: 0,
                        end: 9.033,
                        loop: !0
                    }
                },
                timeout: 0
            })
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(c, b) {
            this.game = c;
            this.levels = [];
            this.currentLevel = 0;
            this.append(b)
        },
        loadLevel: function(c) {
            for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
            this.currentLevel = c;
            this.game.loadLevel(this.levels[c]);
            return !0
        },
        loadLevelWithoutEntities: function(c) {
            this.currentLevel = c;
            this.game.loadLevelWithoutEntities(this.levels[c]);
            return !0
        },
        append: function(c) {
            newLevels = [];
            return "object" ===
                typeof c ? (c.constructor === [].constructor ? newLevels = c : newLevels[0] = c, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(c) {
            var b = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == c && (b = i);
            return 0 <= b ? this.loadLevel(b) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length -
                1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(c) {
            return null !== this.get(c)
        },
        initUnset: function(c, b) {
            null === this.get(c) && this.set(c, b)
        },
        get: function(c) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(c))
            } catch (b) {
                return window.localStorage.getItem(c)
            }
        },
        getInt: function(c) {
            return ~~this.get(c)
        },
        getFloat: function(c) {
            return parseFloat(this.get(c))
        },
        getBool: function(c) {
            return !!this.get(c)
        },
        key: function(c) {
            return this.isCapable() ? window.localStorage.key(c) : null
        },
        set: function(c, b) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(c, JSON.stringify(b))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(c, b) {
            b > this.getFloat(c) && this.set(c, b)
        },
        remove: function(c) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(c)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function() {
    ig.Entity.inject({
        scale: {
            x: 1,
            y: 1
        },
        _offset: {
            x: 0,
            y: 0
        },
        _scale: {
            x: 1,
            y: 1
        },
        _size: {
            x: 0,
            y: 0
        },
        init: function(c, b, d) {
            this.parent(c, b, d);
            this._offset.x = this.offset.x;
            this._offset.y = this.offset.y;
            this._size.x = this.size.x;
            this._size.y = this.size.y;
            this.setScale(this.scale.x, this.scale.y)
        },
        draw: function() {
            var c = ig.system.context;
            c.save();
            c.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() -
                this.offset.y - ig.game.screen.y));
            c.scale(this._scale.x, this._scale.y);
            this.currentAnim && this.currentAnim.draw(0, 0);
            c.restore()
        },
        setScale: function(c, b) {
            var d = this.size.x,
                f = this.size.y;
            this.scale.x = c || this.scale.x;
            this.scale.y = b || this.scale.y;
            this._scale.x = this.scale.x / ig.system.scale;
            this._scale.y = this.scale.y / ig.system.scale;
            this.offset.x = this._offset.x * this._scale.x;
            this.offset.y = this._offset.y * this._scale.y;
            this.size.x = this._size.x * this._scale.x;
            this.size.y = this._size.y * this._scale.y;
            this.pos.x +=
                (d - this.size.x) / 2;
            this.pos.y += (f - this.size.y) / 2
        }
    })
});
ig.baked = !0;
ig.module("plugins.animation-scaling").requires("impact.animation").defines(function() {
    ig.Animation.inject({
        scale: {
            x: 1,
            y: 1
        },
        draw: function(c, b) {
            var d = ig.system.scale;
            ig.system.context.save();
            var f = c + this.sheet.width / 2,
                j = b + this.sheet.height / 2;
            ig.system.context.translate(f * d, j * d);
            ig.system.context.scale(this.scale.x, this.scale.y);
            ig.system.context.translate(-f * d, -j * d);
            this.parent(c, b);
            ig.system.context.restore()
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image("branding/splash1.png"),
        init: function(c, b, d) {
            this.parent(c, b, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            c = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            b = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            c.chain(b);
            c.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(c) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    c) return !0;
            return !1
        },
        checkClickableLayer: function(c, b, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(c) ? (ig.game.showOverlay([c]), $("#" + c).find("[href]").attr("href", b)) : this.createClickableOutboundLayer(c, b, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(c, b, d, f) {
            var j = ig.$new("div");
            j.id = c;
            document.body.appendChild(j);
            $("#" + j.id).css("float", "left");
            $("#" + j.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var p = window.innerHeight / mobileHeight,
                    y = window.innerWidth /
                    mobileWidth;
                $("#" + j.id).css("left", this.pos.x * y);
                $("#" + j.id).css("top", this.pos.y * p);
                $("#" + j.id).css("width", this.size.x * y);
                $("#" + j.id).css("height", this.size.y * p)
            } else p = w / 2 - destW / 2, y = h / 2 - destH / 2, console.log(p, y), $("#" + j.id).css("left", p + this.pos.x * multiplier), $("#" + j.id).css("top", y + this.pos.y * multiplier), $("#" + j.id).css("width", this.size.x * multiplier), $("#" + j.id).css("height", this.size.y * multiplier);
            f ? $("#" + j.id).html("<a target='_blank' href='" + b + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + j.id).html("<a href='" + b + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[c] = {};
            dynamicClickableEntityDivs[c].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[c].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[c].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[c].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle =
                "#000";
            ig.system.context.font = "12px Arial";
            320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(c, b, d) {
            this.parent(c, b, d);
            if (d) switch (console.log("settings found ... using that div layer name"), c = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else c = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: c,
                        centralize: centralize
                    })
                } catch (f) {
                    console.log(f)
                }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 32,
            y: 32
        },
        zIndex: 10001,
        init: function(c, b, d) {
            this.parent(c, b, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, d && d.centralize && (this.pos.x = ig.system.width /
                2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            d ? (console.log("branding settings found ... using that div layer name"), c = d.div_layer_name) : c = "branding-logo";
            _SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"), this.checkClickableLayer(c, _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow));
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function(c) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    c) return !0;
            return !1
        },
        checkClickableLayer: function(c, b, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(c) ? (ig.game.showOverlay([c]), $("#" + c).find("[href]").attr("href", b)) : this.createClickableOutboundLayer(c, b, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(c, b, d, f) {
            var j = ig.$new("div");
            j.id = c;
            document.body.appendChild(j);
            $("#" + j.id).css("float", "left");
            $("#" + j.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var p = window.innerHeight / mobileHeight,
                    y = window.innerWidth /
                    mobileWidth;
                $("#" + j.id).css("left", this.pos.x * y);
                $("#" + j.id).css("top", this.pos.y * p);
                $("#" + j.id).css("width", this.size.x * y);
                $("#" + j.id).css("height", this.size.y * p)
            } else p = w / 2 - destW / 2, y = h / 2 - destH / 2, console.log(p, y), $("#" + j.id).css("left", p + this.pos.x * multiplier), $("#" + j.id).css("top", y + this.pos.y * multiplier), $("#" + j.id).css("width", this.size.x * multiplier), $("#" + j.id).css("height", this.size.y * multiplier);
            f ? $("#" + j.id).html("<a target='_blank' href='" + b + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + j.id).html("<a href='" + b + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[c] = {};
            dynamicClickableEntityDivs[c].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[c].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[c].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[c].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function() {
    EntityButtonMoreGames = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/game/button-more-games.png", 142, 70),
        size: {
            x: 142,
            y: 70
        },
        zIndex: 1E3,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.pos.x = ig.system.width / 2 - this.size.x / 2;
            "undefined" == typeof wm && (_SETTINGS.MoreGames.Enabled ? (d.div_layer_name ? (console.log("settings found ... using that div layer name"), c = d.div_layer_name) : c = "more-games",
                console.log("div_layer_name:", c), this.checkClickableLayer(c, _SETTINGS.MoreGames.Link, _SETTINGS.MoreGames.NewWindow)) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle
        },
        doesClickableLayerExist: function(c) {
            for (k in dynamicClickableEntityDivs)
                if (k == c) return console.log("clickable layer already exists ..."), !0;
            console.log("doesnt exist yet ...");
            return !1
        },
        checkClickableLayer: function(c, b, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(c) ? (ig.game.showOverlay([c]),
                $("#" + c).find("[href]").attr("href", b)) : this.createClickableOutboundLayer(c, b, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(c, b, d, f) {
            var j = ig.$new("div");
            j.id = c;
            document.body.appendChild(j);
            $("#" + j.id).css("float", "left");
            $("#" + j.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var p = window.innerHeight / mobileHeight,
                    y = window.innerWidth / mobileWidth;
                $("#" + j.id).css("left", this.pos.x * y);
                $("#" + j.id).css("top", this.pos.y * p);
                $("#" + j.id).css("width", this.size.x * y);
                $("#" + j.id).css("height",
                    this.size.y * p)
            } else p = document.getElementById("game").offsetLeft, y = document.getElementById("game").offsetTop, $("#" + j.id).css("left", p + this.pos.x * multiplier), $("#" + j.id).css("top", y + this.pos.y * multiplier), $("#" + j.id).css("width", this.size.x * multiplier), $("#" + j.id).css("height", this.size.y * multiplier);
            f ? $("#" + j.id).html("<a target='_blank' href='" + b + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + j.id).html("<a href='" + b + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[c] = {};
            dynamicClickableEntityDivs[c].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[c].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[c].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[c].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(c, b, d) {
            this.parent(c, b, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (c) {
                        console.log(c)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() &&
                (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
                null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var c = ig.system.context;
                c.save();
                var b = ig.system.width / 2,
                    d = ig.system.height / 2;
                c.translate(b, d);
                c.rotate(this.move * Math.PI / 180);
                c.beginPath();
                c.moveTo(0, 0);
                for (var f = 0, j = 1; 48 >= j; j += 1) c.lineTo(0 + 800 * Math.cos(2 * j * Math.PI / 48), 0 + 800 * Math.sin(2 * j * Math.PI / 48)), f++, 2 == f && (f = 0, c.lineTo(0, 0));
                c.translate(-b, -d);
                b = c.createRadialGradient(b, d, 100, b, d, 250);
                b.addColorStop(0, "rgba(255,255,255,0.1)");
                b.addColorStop(1, "rgba(0,0,0,0)");
                c.fillStyle = b;
                c.fill();
                c.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        init: function(c, b, d) {
            this.parent(c, b, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.kittyopeningSound)
                    } catch (c) {
                        console.log(c)
                    }
                } else ig.game.director.nextLevel(),
                    ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
                (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var c = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            c.addColorStop(0, "#ffed94");
            c.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = c;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function(c) {
            this.objectArray.push(c)
        },
        clickObject: function(c) {
            this.isClicking && !this.firstClick && "function" == typeof c.clicked && (c.clicked(), this.firstClick = !0);
            this.firstClick && !this.isReleased && "function" == typeof c.clicking &&
                c.clicking();
            this.firstClick && this.isReleased && "function" == typeof c.released && (c.released(), this.firstClick = !1)
        },
        update: function() {
            if (ig.ua.mobile) {
                var c = window.innerHeight / mobileHeight;
                this.pos.x = ig.input.mouse.x / (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x;
                this.pos.y = ig.input.mouse.y / c - this.size.y / 2
            } else this.pos.x = ig.input.mouse.x - this.size.x / 2, this.pos.y = ig.input.mouse.y - this.size.y / 2;
            var c = null,
                b = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > b && (b = this.objectArray[a].zIndex,
                c = this.objectArray[a]);
            null != c ? ("close" == c.name && console.log(c), null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && this.hoveringItem != c && this.hoveringItem.idle(), this.hoveringItem = c, this.clickObject(c), this.objectArray = []) : (null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && (this.hoveringItem.idle(), this.hoveringItem = null), this.firstClick && this.isReleased && (console.log("released"), this.firstClick = !1));
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function(c, b, d) {
            this.parent(c, b, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(c) {
            for (k in dynamicClickableEntityDivs)
                if (k == c) return !0;
            return !1
        },
        checkClickableLayer: function(c,
            b, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(c) ? (ig.game.showOverlay([c]), $("#" + c).find("[href]").attr("href", b)) : this.createClickableOutboundLayer(c, b, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(c, b, d, f) {
            var j = ig.$new("div");
            j.id = c;
            document.body.appendChild(j);
            $("#" + j.id).css("float", "left");
            $("#" + j.id).css("width", this.size.x * multiplier);
            $("#" + j.id).css("height", this.size.y * multiplier);
            $("#" + j.id).css("position", "absolute");
            var p = w / 2 - destW / 2,
                y = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + j.id).css("left", this.pos.x), $("#" + j.id).css("top", this.pos.y)) : ($("#" + j.id).css("left", p + this.pos.x * multiplier), $("#" + j.id).css("top", y + this.pos.y * multiplier));
            f ? $("#" + j.id).html("<a target='_blank' href='" + b + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + j.id).html("<a href='" + b + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[c] = {};
            dynamicClickableEntityDivs[c].width = $("#" + j.id).width();
            dynamicClickableEntityDivs[c].height =
                $("#" + j.id).height();
            dynamicClickableEntityDivs[c].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[c].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var c = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < c.length; i++) c[i] != this && (c[i].isHovering = !1)
        },
        deselectOthers: function() {
            var c = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < c.length; i++) c[i] != this && (c[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 <
                this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.levels.test-desktop").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.button-more-games", "game.entities.pointer").defines(function() {
    LevelTestDesktop = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 296,
            y: 396,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        }, {
            type: "EntityButtonMoreGames",
            x: 432,
            y: 284,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }, {
            type: "EntityPointer",
            x: 608,
            y: 120
        }],
        layer: [{
            name: "background",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/desktop/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
                    117, 118, 119, 120
                ],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
                [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
                [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
                [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320],
                [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
                [361, 362, 363, 364,
                    365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400
                ],
                [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440],
                [441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487, 488,
                    489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520
                ],
                [521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560],
                [561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612,
                    613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640
                ],
                [641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680],
                [681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736,
                    737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760
                ],
                [761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800],
                [801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860,
                    861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880
                ],
                [881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920],
                [921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984,
                    985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3
                ],
                [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040],
                [1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087,
                    1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120
                ],
                [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160],
                [1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187,
                    1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200
                ]
            ]
        }]
    };
    LevelTestDesktopResources = [new ig.Image("media/graphics/backgrounds/desktop/background.jpg")]
});
ig.baked = !0;
ig.module("game.levels.test-mobile").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.button-more-games", "game.entities.pointer").defines(function() {
    LevelTestMobile = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 216,
            y: 548,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        }, {
            type: "EntityButtonMoreGames",
            x: 204,
            y: 372,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }, {
            type: "EntityPointer",
            x: 444,
            y: 192
        }],
        layer: [{
            name: "background",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/mobile/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
                [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
                    117, 118, 119, 120
                ],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150],
                [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180],
                [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210],
                [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270],
                [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300],
                [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330],
                [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
                [361, 362, 363,
                    364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390
                ],
                [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420],
                [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450],
                [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487,
                    488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510
                ],
                [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540],
                [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570],
                [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611,
                    612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630
                ],
                [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660],
                [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690],
                [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735,
                    736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750
                ],
                [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780],
                [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810],
                [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859,
                    860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870
                ],
                [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900],
                [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930],
                [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983,
                    984, 985, 986, 987, 988, 989, 990
                ],
                [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020],
                [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050],
                [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080],
                [1081, 1082, 1083, 1084, 1085,
                    1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110
                ],
                [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140],
                [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170],
                [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184,
                    1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200
                ]
            ]
        }]
    };
    LevelTestMobileResources = [new ig.Image("media/graphics/backgrounds/mobile/background.jpg")]
});
ig.baked = !0;
ig.module("game.entities.field").requires("impact.entity").defines(function() {
    EntityField = ig.Entity.extend({
        bg: new ig.Image("media/graphics/game/bg_title.png"),
        zIndex: 1E3,
        init: function() {
            this.parent()
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            this.bg.draw(ig.system.width / 2 - this.bg.width / 2, ig.system.height - this.bg.height)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.fade-screen").requires("impact.entity").defines(function() {
    EntityFadeScreen = ig.Entity.extend({
        size: {
            x: 0,
            y: 0
        },
        zIndex: 1200,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.alpha = 0;
            this.name = "fade"
        },
        update: function() {
            this.parent();
            this.fade && (this.alpha += 0.05, 1 <= this.alpha && (this.fade = !1, this.alpha = 0, ig.game.animPlay = !1, ig.game.director.loadLevel(this.levelLoad)))
        },
        callFade: function(c) {
            this.levelLoad = c;
            this.alpha = 0.01;
            this.fade = !0;
            ig.game.animPlay = !0
        },
        draw: function() {
            this.parent();
            ig.system.clear("rgba(0, 0, 0, " + this.alpha + ")")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.title").requires("impact.entity").defines(function() {
    EntityTitle = ig.Entity.extend({
        size: {
            x: 502,
            y: 248
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/logo.png", 502, 248),
        zIndex: 1001,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.pos.x = ig.system.width / 2 - this.size.x / 2;
            this.pos.y = 10;
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-level-select").requires("impact.entity").defines(function() {
    EntityButtonLevelSelect = ig.Entity.extend({
        size: {
            x: 32,
            y: 32
        },
        offset: {
            x: 7,
            y: 7
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/button-level.png", 47, 46),
        zIndex: 1003,
        levelSelector: 0,
        type: ig.Entity.TYPE.B,
        rowLevel: 0,
        big: !1,
        small: !1,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("open", 1, [0]);
            this.addAnim("lock", 1, [1]);
            this.addAnim("thstar", 1, [2]);
            this.addAnim("twstar", 1, [3]);
            this.addAnim("ostar", 1, [4]);
            this.currentAnim = this.anims.open;
            this.levelSelector = d.levelSelector;
            this.name = "btnLvl" + this.levelSelector
        },
        ready: function() {
            this.fade = ig.game.getEntityByName("fade")
        },
        checkStar: function() {
            var c = this.levelSelector + 12 * this.rowLevel,
                b = ig.game.idealMove[c],
                d = ig.game.movementCount[c];
            this.currentAnim = 0 != d && d <= b ? this.anims.thstar : 0 != d && d <= b + 3 ? this.anims.twstar : 0 != d ? this.anims.ostar : 0 == d && 1 == ig.game.lockLevel[c] ? this.anims.open : this.anims.lock
        },
        clicked: function() {
            this.small = !0;
            ig.game.hintActive = !1;
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click)
        },
        released: function() {},
        update: function() {
            this.parent();
            if (this.small && 0.8 < this.scale.x) {
                var c = this.scale.x,
                    c = c - 0.03;
                this.setScale(c, c);
                0.9 >= c && (this.small = !1, this.big = !0)
            } else this.big && 1.2 > this.scale.x && (c = this.scale.x, c += 0.03, this.setScale(c, c), 1 <= c && (this.big = this.small = !1, console.log("call klik Level " + (this.levelSelector + 1 + 12 * this.rowLevel)), this.currentAnim != this.anims.lock && (ig.game.popupOpen = "", ig.game.levelSelected = this.levelSelector + 1 + 12 * this.rowLevel, "function" == typeof this.fade.callFade &&
                this.fade.callFade(2))))
        },
        draw: function() {
            this.parent();
            this.currentAnim != this.anims.lock && (this.context = ig.system.context, this.context.font = "20pt passiononebold", this.context.textAlign = "center", this.context.fillStyle = "#000000", this.context.fillText(this.levelSelector + 1 + 12 * this.rowLevel, this.pos.x + 16, this.pos.y + 20), this.context.fillStyle = "#FFFFFF", this.context.fillText(this.levelSelector + 1 + 12 * this.rowLevel, this.pos.x + 14, this.pos.y + 18))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-close").requires("impact.entity").defines(function() {
    EntityButtonClose = ig.Entity.extend({
        size: {
            x: 47,
            y: 47
        },
        zIndex: 1004,
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/button-exit.png", 47, 47),
        closeFor: "",
        timeChange: 0,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.name = "closebtn";
            this.closeFor = d.createBy;
            this.timer = new ig.Timer
        },
        update: function() {
            this.parent()
        },
        clicked: function() {
            if ("option" ==
                this.closeFor) {
                console.log("close option");
                var c = ig.game.getEntityByName("popupoption");
                "function" == typeof c.closeOption && c.closeOption()
            } else console.log("close select"), c = ig.game.getEntityByName("levelselector"), "function" == typeof c.closeSelect && c.closeSelect();
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click)
        },
        released: function() {},
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-level-row").requires("impact.entity").defines(function() {
    EntityButtonLevelRow = ig.Entity.extend({
        size: {
            x: 16,
            y: 16
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/level-row.png", 16, 16),
        type: ig.Entity.TYPE.B,
        zIndex: 1004,
        levelrow: 0,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.addAnim("select", 1, [1]);
            this.currentAnim = this.anims.idle;
            this.levelrow = d.levelrow
        },
        ready: function() {
            this.popSelect = ig.game.getEntityByName("levelselector")
        },
        update: function() {
            this.currentAnim =
                this.levelrow == this.popSelect.levelRowSelect ? this.anims.select : this.anims.idle
        },
        clicked: function() {
            "function" == typeof this.popSelect.changeLeveRow && this.popSelect.changeLeveRow(this.levelrow);
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click)
        },
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.popup-select-level").requires("impact.entity", "game.entities.button-level-select", "game.entities.button-close", "game.entities.button-level-row").defines(function() {
    EntityPopupSelectLevel = ig.Entity.extend({
        zIndex: 1002,
        size: {
            x: 180,
            y: 80
        },
        offset: {
            x: 58,
            y: 0
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/select-level.png", 304, 291),
        levelBtn: [],
        levelRowBtn: [],
        levelRowSelect: 0,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.name = "levelselector";
            this.addAnim("idle", 1, [0]);
            this.currentAnim =
                this.anims.idle;
            for (b = c = 0; 3 > b; b++)
                for (d = 0; 4 > d; d++) this.levelBtn.push(ig.game.spawnEntity(EntityButtonLevelSelect, this.pos.x - 12 + 57 * b, this.pos.y + 91 + 56 * d, {
                    levelSelector: c
                })), c++;
            for (b = 0; 2 > b; b++) this.levelRowBtn.push(ig.game.spawnEntity(EntityButtonLevelRow, this.pos.x - 12 + 84, this.pos.y + 250, {
                levelrow: b
            }))
        },
        update: function() {
            this.parent();
            for (var c = 0, b = 0; 3 > b; b++)
                for (var d = 0; 4 > d; d++) {
                    var f = this.levelBtn[c];
                    f.pos.x = this.pos.x - 12 + 57 * d;
                    f.pos.y = this.pos.y + 91 + 56 * b;
                    c++
                }
            b = ig.game.getEntityByName("closebtn");
            "select" ==
            b.closeFor && (b.pos.x = this.pos.x + 220, b.pos.y = this.pos.y - 20);
            for (b = 0; b < this.levelRowBtn.length; b++) c = this.levelRowBtn[b], c.pos.x = this.pos.x + 68 + 28 * b, c.pos.y = this.pos.y + 253
        },
        posChange: function() {
            ig.game.getEntityByName("closebtn").closeFor = "select";
            ig.game.popupOpen = "selectLevel";
            this.tween({
                pos: {
                    x: 230,
                    y: 110
                }
            }, 0.4, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start();
            this.changeLeveRow(0)
        },
        closeSelect: function() {
            for (var c = 0, b = 0; 3 > b; b++)
                for (var d = 0; 4 > d; d++) {
                    var f = this.levelBtn[c];
                    f.pos.x = this.pos.x - 12 + 57 *
                        d;
                    f.pos.y = this.pos.y + 91 + 56 * b;
                    c++
                }
            ig.game.getEntityByName("closebtn");
            ig.game.popupOpen = "";
            this.tween({
                pos: {
                    x: 230,
                    y: 600
                }
            }, 0.4, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        changeLeveRow: function(c) {
            this.levelRowSelect = c;
            1 == this.levelRowSelect ? (this.levelRowBtn[1].selected = !0, this.levelRowBtn[0].selected = !1) : (this.levelRowBtn[0].selected = !0, this.levelRowBtn[1].selected = !1);
            for (var b = 0; 12 > b; b++) {
                var d = this.levelBtn[b];
                d.rowLevel = c;
                "function" == typeof d.checkStar && d.checkStar()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-start").requires("impact.entity", "game.entities.popup-select-level").defines(function() {
    EntityButtonStart = ig.Entity.extend({
        size: {
            x: 142,
            y: 70
        },
        zIndex: 1001,
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/button_start.png", 142, 70),
        small: !1,
        big: !1,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.pos.x = ig.system.width / 2 - this.size.x / 2
        },
        clicked: function() {
            console.log(ig.game.popupOpen);
            "" ==
            ig.game.popupOpen && (this.small = !0, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click))
        },
        bigAgain: function() {},
        endUp: function() {
            var c = ig.game.getEntityByName("levelselector");
            "function" == typeof c.posChange && "" == ig.game.popupOpen && c.posChange()
        },
        released: function() {},
        update: function() {
            this.parent();
            if (this.small && 0.8 < this.scale.x) {
                var c = this.scale.x,
                    c = c - 0.03;
                this.setScale(c, c);
                0.9 >= c && (this.small = !1, this.big = !0)
            } else this.big && 1.2 > this.scale.x && (c = this.scale.x, c += 0.03, this.setScale(c, c), 1 <= c &&
                (this.big = this.small = !1, c = ig.game.getEntityByName("levelselector"), "function" == typeof c.posChange && "" == ig.game.popupOpen && c.posChange()))
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-option").requires("impact.entity").defines(function() {
    EntityButtonOption = ig.Entity.extend({
        zIndex: 1001,
        type: ig.Entity.TYPE.B,
        size: {
            x: 142,
            y: 70
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/button_options.png", 142, 70),
        small: !1,
        big: !1,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.pos.x = ig.system.width / 2 - this.size.x / 2
        },
        clicked: function() {
            "" == ig.game.popupOpen && (this.small = !0, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click))
        },
        released: function() {},
        update: function() {
            this.parent();
            if (this.small && 0.8 < this.scale.x) {
                var c = this.scale.x,
                    c = c - 0.03;
                this.setScale(c, c);
                0.9 >= c && (this.small = !1, this.big = !0)
            } else this.big && 1.2 > this.scale.x && (c = this.scale.x, c += 0.03, this.setScale(c, c), 1 <= c && (this.big = this.small = !1, c = ig.game.getEntityByName("popupoption"), "function" == typeof c.callOption && "" == ig.game.popupOpen && c.callOption()))
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-control").requires("impact.entity").defines(function() {
    EntityButtonControl = ig.Entity.extend({
        zIndex: 1005,
        size: {
            x: 150,
            y: 33
        },
        offset: {
            x: -50,
            y: 0
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/btn-control.png", 55, 30),
        type: ig.Entity.TYPE.B,
        useFor: "",
        firstPosX: 0,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.useFor = d.useFor;
            this.firstPosX = c
        },
        checkImageSound: function() {
            this.pos.x = "music" == this.useFor ? ig.game.music ?
                this.firstPosX + 54 : this.firstPosX : ig.game.sound ? this.firstPosX + 54 : this.firstPosX
        },
        checkMusicSound: function() {
            "music" == this.useFor ? ig.game.music ? (this.pos.x = this.firstPosX + 54, console.log("music play"), ig.soundHandler.setForceMutedBgm(!1), ig.soundHandler._unMuteBackgroundMusic(), ig.soundHandler.playBackgroundMusic()) : (this.pos.x = this.firstPosX, ig.soundHandler.setForceMutedBgm(!0), ig.soundHandler._muteBackgroundMusic()) : ig.game.sound ? (this.pos.x = this.firstPosX + 54, ig.soundHandler.setForceMutedSfx(!1),
                ig.soundHandler._unMuteSounds()) : (this.pos.x = this.firstPosX, ig.soundHandler.setForceMutedSfx(!0), ig.soundHandler._muteSounds())
        },
        clicked: function() {
            console.log("anim is" + ig.game.animPlay);
            ig.game.animPlay || ("music" == this.useFor && "option" == ig.game.popupOpen ? ig.game.music = !ig.game.music : "sound" == this.useFor && "option" == ig.game.popupOpen && (ig.game.sound = !ig.game.sound), this.checkMusicSound(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click), ig.game.savePlayerSetting())
        },
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.button-pink").requires("impact.entity").defines(function() {
    EntityButtonPink = ig.Entity.extend({
        size: {
            x: 100,
            y: 45
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/button-pink.png", 100, 45),
        zIndex: 1004,
        type: ig.Entity.TYPE.B,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.name = d.nameBtn
        },
        update: function() {
            this.parent();
            if (this.small && 0.8 < this.scale.x) {
                var c = this.scale.x,
                    c = c - 0.05;
                this.setScale(c, c);
                0.9 >= c && (this.small = !1, this.big = !0)
            } else this.big && 1.2 > this.scale.x && (c = this.scale.x, c += 0.05, this.setScale(c, c), 1 <= c && (this.big = this.small = !1, console.log("finish"), "ok" == this.name ? (c = ig.game.getEntityByName("popupoption"), "function" == typeof c.closeOption && c.closeOption()) : "home" == this.name ? (c = ig.game.getEntityByName("fade"), "function" == typeof c.callFade && (ig.game.popupOpen = "", c.callFade(1))) : (c = ig.game.getEntityByName("popupcomplete"), "function" == typeof c.closePopup && c.closePopup(1))))
        },
        clicked: function() {
            ig.game.animPlay ||
                (this.small = !0, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click))
        },
        draw: function() {
            this.parent();
            this.context = ig.system.context;
            var c = this.name.toUpperCase();
            this.context.font = "18pt passiononebold";
            this.context.textAlign = "center";
            this.context.fillStyle = "#5b0f1f";
            this.context.fillText(c, this.pos.x + 50, this.pos.y + 30);
            this.context.fillStyle = "#ffffd8";
            this.context.fillText(c, this.pos.x + 48, this.pos.y + 28)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-ok").requires("impact.entity").defines(function() {
    EntityButtonOk = ig.Entity.extend({
        size: {
            x: 100,
            y: 45
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/button-ok.png", 100, 45),
        zIndex: 1005,
        type: ig.Entity.TYPE.B,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.name = d.nameOk
        },
        update: function() {
            this.parent();
            if (this.small && 0.8 < this.scale.x) {
                var c = this.scale.x,
                    c = c - 0.05;
                this.setScale(c, c);
                0.9 >= c && (this.small = !1, this.big = !0)
            } else this.big && 1.2 > this.scale.x && (c = this.scale.x, c += 0.05, this.setScale(c, c), 1 <= c && (this.big = this.small = !1, console.log("finish"), "okOption" == this.name ? (c = ig.game.getEntityByName("popupoption"), "function" == typeof c.closeOption && c.closeOption()) : (c = ig.game.getEntityByName("popupcomplete"), "function" == typeof c.closePopup && c.closePopup(1))))
        },
        clicked: function() {
            this.small = !0;
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click)
        },
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.popup-option").requires("impact.entity", "game.entities.button-control", "game.entities.button-pink", "game.entities.button-ok").defines(function() {
    EntityPopupOption = ig.Entity.extend({
        zIndex: 1002,
        size: {
            x: 180,
            y: 80
        },
        offset: {
            x: 58,
            y: 0
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/popup-options.png", 304, 291),
        buttonControl: [],
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.name = "popupoption";
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            ig.game.spawnEntity(EntityButtonClose,
                this.pos.x + 200, this.pos.y + 24, {
                    createBy: "option"
                });
            this.buttonControl.push(ig.game.spawnEntity(EntityButtonControl, this.pos.x + 29, this.pos.y + (67 * i + 27), {
                useFor: "music"
            }));
            this.buttonControl.push(ig.game.spawnEntity(EntityButtonControl, this.pos.x + 29, this.pos.y + (67 * i + 117), {
                useFor: "sound"
            }));
            ig.game.spawnEntity(EntityButtonPink, this.pos.x + 200, this.pos.y + 24, {
                nameBtn: "ok"
            });
            ig.game.spawnEntity(EntityButtonPink, this.pos.x + 200, this.pos.y + 24, {
                nameBtn: "home"
            })
        },
        update: function() {
            this.parent();
            for (var c = 0; c < this.buttonControl.length; c++) this.buttonControl[c].pos.y =
                this.pos.y + 86 + 50 * c;
            var c = ig.game.getEntityByName("ok"),
                b = ig.game.getEntityByName("home");
            2 == ig.game.director.currentLevel ? (b.pos.x = this.pos.x - 20, b.pos.y = this.pos.y + 190, c.pos.x = this.pos.x + 100) : c.pos.x = this.pos.x + 50;
            c.pos.y = this.pos.y + 190
        },
        endTween: function() {
            ig.game.animPlay = !1
        },
        closeOption: function() {
            ig.game.popupOpen = "";
            this.tween({
                pos: {
                    x: 230,
                    y: 550
                }
            }, 0.4, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function() {
                    this.endTween()
                }.bind(this)
            }).start();
            ig.game.animPlay = !0
        },
        callOption: function() {
            var c =
                ig.game.getEntityByName("closebtn");
            null != c && (c.pos.y = this.pos.y + 24, c.closeFor = "option", ig.game.popupOpen = "option");
            this.tween({
                pos: {
                    x: 230,
                    y: 110
                }
            }, 0.4, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function() {
                    this.endTween()
                }.bind(this)
            }).start();
            for (c = 0; c < this.buttonControl.length; c++) {
                var b = this.buttonControl[c];
                "function" == typeof b.checkImageSound && b.checkImageSound()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.central").requires("impact.entity", "game.entities.pointer", "game.entities.field", "game.entities.fade-screen", "game.entities.title", "game.entities.button-start", "game.entities.button-option", "game.entities.popup-select-level", "game.entities.popup-option", "game.entities.button-more-games").defines(function() {
    EntityCentral = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        init: function(c, b, d) {
            this.parent(c, b, d);
            ig.game.spawnEntity(EntityField, 0, 0);
            ig.game.spawnEntity(EntityTitle, 0, 0);
            ig.game.spawnEntity(EntityButtonStart,
                0, 240);
            ig.game.spawnEntity(EntityButtonOption, 0, 315);
            ig.game.spawnEntity(EntityButtonMoreGames, 0, 390);
            ig.game.spawnEntity(EntityPopupSelectLevel, 230, 1E3);
            ig.game.spawnEntity(EntityPopupOption, 230, 1E3);
            ig.game.spawnEntity(EntityFadeScreen, 0, 0)
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            null == this.pointer && ig.game.spawnEntity(EntityPointer, 0, 0)
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.gameplay").requires("impact.image", "game.entities.central").defines(function() {
    LevelGameplay = {
        entities: [{
            type: "EntityCentral",
            x: 104,
            y: 80
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.background").requires("impact.entity").defines(function() {
    EntityBackground = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/bg-game1.png", 640, 480),
        zIndex: 10,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle
        }
    })
});
ig.baked = !0;
ig.module("game.entities.blok-main").requires("impact.entity", "game.entities.pointer").defines(function() {
    EntityBlokMain = ig.Entity.extend({
        size: {
            x: 128,
            y: 64
        },
        type: ig.Entity.TYPE.B,
        zIndex: 150,
        firstThisX: 0,
        movementPosX: 0,
        limitMove: {
            left: 220,
            right: 640
        },
        gridPos: {
            before: 0,
            after: 0
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/blok-main.png", 128, 64),
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("orange", 1, [0]);
            this.addAnim("blue", 1, [1]);
            this.currentAnim = 0.5 > Math.random() ? this.anims.orange : this.anims.blue;
            this.name = "mainblok"
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.board = ig.game.getEntityByName("boardcandy")
        },
        update: function() {
            this.parent();
            if (ig.input.state("click") && ig.game.blockCatch == this) this.pos.x = this.firstThisX + (this.pointer.pos.x - this.movementPosX), this.pos.x < this.limitMove.left ? this.pos.x = this.limitMove.left : this.pos.x > this.limitMove.right ? this.pos.x = this.limitMove.right : 220 > this.pos.x && (this.pos.x = 220);
            else if (!ig.input.state("click") && ig.game.blockCatch ==
                this) {
                ig.game.blockCatch = null;
                var c = ig.game.getEntityByName("boardcandy");
                "function" == typeof c.checkEveryBoardArray && c.checkEveryBoardArray();
                this.gridPos.before != this.gridPos.after && (this.board.movement++, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.swipe))
            }
        },
        checkBlokPos: function() {
            for (var c = this.pos.x - 220, b = 0; 64 < c;) b++, c -= 64;
            32 < c && b++;
            this.gridPos.after = b;
            this.tween({
                pos: {
                    x: 220 + 64 * b
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function() {
                    this.endTween()
                }.bind(this)
            }).start();
            this.tweenActive = !0;
            4 <= b && (b = 4, ig.game.winLevel = !0);
            return {
                posX: b,
                posY: 2,
                width: 2,
                height: 1
            }
        },
        endTween: function() {
            this.tweenActive = !1
        },
        clicked: function() {
            if (!(ig.game.hintActive && ig.game.hintCatch.name != this.name) && !this.tweenActive) {
                this.firstThisX = this.pos.x;
                this.gridPos.before = (this.pos.x - 220) / 64;
                this.movementPosX = this.pointer.pos.x;
                null == ig.game.blockCatch && (ig.game.blockCatch = this);
                for (var c = this.pos.x - 220, b = 0; 64 <= c;) b++, c -= 64;
                this.limitMove.left = 220;
                this.limitMove.right = 640;
                for (var c = ig.game.getEntityByName("boardcandy"),
                    d = b - 1; - 1 < d;) {
                    var f = c.arrayBoard[d][2];
                    if (1 == f) {
                        this.limitMove.left = 64 * (d + 1) + 220;
                        break
                    }
                    d--
                }
                for (b += 2; 6 > b;) {
                    f = c.arrayBoard[b][2];
                    if (1 == f) {
                        this.limitMove.right = 64 * (b - 2) + 220;
                        break
                    }
                    b++
                }
            }
        },
        completeMoveMain: function() {
            var c = ig.game.getEntityByName("popupcomplete");
            "function" == typeof c.callPopup && c.callPopup()
        },
        goingOutSide: function() {
            this.tween({
                pos: {
                    x: 660,
                    y: 176
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function() {
                    this.completeMoveMain()
                }.bind(this)
            }).start()
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.blok-vertical").requires("impact.entity").defines(function() {
    EntityBlokVertical = ig.Entity.extend({
        size: {
            x: 64,
            y: 128
        },
        zIndex: 150,
        type: ig.Entity.TYPE.B,
        firstThisY: 0,
        movementPosY: 0,
        limitMove: {
            up: 48,
            down: 432
        },
        gridPos: {
            x: 0,
            y: 0
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/blok-v.png", 64, 128),
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.limitMove.down = 304;
            this.name = d.nameblok
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        update: function() {
            this.parent();
            if (ig.input.state("click") && ig.game.blockCatch == this) this.pos.y = this.firstThisY + (this.pointer.pos.y - this.movementPosY), this.pos.y < this.limitMove.up && (this.pos.y = this.limitMove.up), this.pos.y > this.limitMove.down && (this.pos.y = this.limitMove.down);
            else if (!ig.input.state("click") && ig.game.blockCatch == this) {
                ig.game.blockCatch = null;
                var c = ig.game.getEntityByName("boardcandy");
                "function" == typeof c.checkEveryBoardArray && c.checkEveryBoardArray();
                this.gridPos.before != this.gridPos.after &&
                    (c.movement++, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.swipe))
            }
        },
        checkBlokPos: function() {
            for (var c = this.pos.x - 220, b = this.pos.y - 48, d = 0, f = 0; 64 < c;) d++, c -= 64;
            for (32 < c && d++; 64 < b;) f++, b -= 64;
            32 < b && f++;
            this.gridPos.after = f;
            this.tween({
                pos: {
                    x: 220 + 64 * d,
                    y: 48 + 64 * f
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function() {
                    this.endTween()
                }.bind(this)
            }).start();
            this.tweenActive = !0;
            return {
                posX: d,
                posY: f,
                width: 1,
                height: 2
            }
        },
        endTween: function() {
            this.tweenActive = !1
        },
        clicked: function() {
            if (!(ig.game.hintActive &&
                ig.game.hintCatch.name != this.name) && !(this.tweenActive || "" != ig.game.popupOpen)) {
                this.firstThisY = this.pos.y;
                this.gridPos.before = (this.pos.y - 48) / 64;
                this.movementPosY = this.pointer.pos.y;
                null == ig.game.blockCatch && (ig.game.blockCatch = this);
                for (var c = this.pos.x - 220, b = this.pos.y - 48, d = 0, f = 0; 64 <= c;) d++, c -= 64;
                for (; 64 <= b;) f++, b -= 64;
                this.limitMove.up = 48;
                this.limitMove.down = 304;
                for (var c = ig.game.getEntityByName("boardcandy"), j = f - 1; - 1 < j;) {
                    b = c.arrayBoard[d][j];
                    if (1 == b) {
                        this.limitMove.up = 64 * (j + 1) + 48;
                        break
                    }
                    j--
                }
                for (f +=
                    2; 6 > f;) {
                    b = c.arrayBoard[d][f];
                    if (1 == b) {
                        this.limitMove.down = 64 * (f - 2) + 48;
                        break
                    }
                    f++
                }
            }
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.blok-vertical-long").requires("impact.entity").defines(function() {
    EntityBlokVerticalLong = ig.Entity.extend({
        size: {
            x: 64,
            y: 192
        },
        zIndex: 150,
        type: ig.Entity.TYPE.B,
        movementPosY: 0,
        firstThisY: 0,
        limitMove: {
            up: 48,
            down: 432
        },
        gridPos: {
            before: 0,
            after: 0
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/blok-v-l.png", 64, 192),
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.limitMove.down = 240;
            this.name = d.nameblok
        },
        ready: function() {
            this.pointer =
                ig.game.getEntitiesByType(EntityPointer)[0]
        },
        update: function() {
            this.parent();
            if (ig.input.state("click") && ig.game.blockCatch == this) this.pos.y = this.firstThisY + (this.pointer.pos.y - this.movementPosY), this.pos.y < this.limitMove.up && (this.pos.y = this.limitMove.up), this.pos.y > this.limitMove.down && (this.pos.y = this.limitMove.down);
            else if (!ig.input.state("click") && ig.game.blockCatch == this) {
                ig.game.blockCatch = null;
                var c = ig.game.getEntityByName("boardcandy");
                "function" == typeof c.checkEveryBoardArray && c.checkEveryBoardArray();
                this.gridPos.before != this.gridPos.after && (c.movement++, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.swipe))
            }
        },
        checkBlokPos: function() {
            for (var c = this.pos.x - 220, b = this.pos.y - 48, d = 0, f = 0; 64 < c;) d++, c -= 64;
            for (32 < c && d++; 64 < b;) f++, b -= 64;
            32 < b && f++;
            this.gridPos.after = f;
            this.tween({
                pos: {
                    x: 220 + 64 * d,
                    y: 48 + 64 * f
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function() {
                    this.endTween()
                }.bind(this)
            }).start();
            this.tweenActive = !0;
            return {
                posX: d,
                posY: f,
                width: 1,
                height: 3
            }
        },
        endTween: function() {
            this.tweenActive = !1
        },
        clicked: function() {
            if (!(ig.game.hintActive && ig.game.hintCatch.name != this.name) && !(this.tweenActive || "" != ig.game.popupOpen)) {
                this.firstThisY = this.pos.y;
                this.gridPos.before = (this.pos.y - 48) / 64;
                this.movementPosY = this.pointer.pos.y;
                null == ig.game.blockCatch && (ig.game.blockCatch = this);
                for (var c = this.pos.x - 220, b = this.pos.y - 48, d = 0, f = 0; 64 <= c;) d++, c -= 64;
                for (; 64 <= b;) f++, b -= 64;
                this.limitMove.up = 48;
                this.limitMove.down = 240;
                for (var c = ig.game.getEntityByName("boardcandy"), j = f - 1; - 1 < j;) {
                    b = c.arrayBoard[d][j];
                    if (1 ==
                        b) {
                        this.limitMove.up = 64 * (j + 1) + 48;
                        break
                    }
                    j--
                }
                for (f += 3; 6 > f;) {
                    b = c.arrayBoard[d][f];
                    if (1 == b) {
                        this.limitMove.down = 64 * (f - 3) + 48;
                        break
                    }
                    f++
                }
            }
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.blok-horizontal").requires("impact.entity", "game.entities.pointer").defines(function() {
    EntityBlokHorizontal = ig.Entity.extend({
        size: {
            x: 128,
            y: 64
        },
        zIndex: 150,
        type: ig.Entity.TYPE.B,
        movementPosX: 0,
        firstThisX: 0,
        limitMove: {
            left: 220,
            right: 604
        },
        gridPos: {
            before: 0,
            after: 0
        },
        tweenActive: !1,
        animSheet: new ig.AnimationSheet("media/graphics/game/blok-h.png", 128, 64),
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.limitMove.right = 476;
            this.name = d.nameblok
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.board = ig.game.getEntityByName("boardcandy")
        },
        update: function() {
            this.parent();
            if (ig.input.state("click") && ig.game.blockCatch == this) this.pos.x = this.firstThisX + (this.pointer.pos.x - this.movementPosX), this.pos.x < this.limitMove.left ? this.pos.x = this.limitMove.left : this.pos.x > this.limitMove.right ? this.pos.x = this.limitMove.right : 220 > this.pos.x && (this.pos.x = 220);
            else if (!ig.input.state("click") && ig.game.blockCatch ==
                this) {
                ig.game.blockCatch = null;
                var c = ig.game.getEntityByName("boardcandy");
                "function" == typeof c.checkEveryBoardArray && c.checkEveryBoardArray();
                this.gridPos.before != this.gridPos.after && (this.board.movement++, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.swipe))
            }
        },
        checkBlokPos: function() {
            for (var c = this.pos.x - 220, b = this.pos.y - 48, d = 0, f = 0; 64 < c;) d++, c -= 64;
            for (32 < c && d++; 64 < b;) f++, b -= 64;
            32 < b && f++;
            this.gridPos.after = d;
            this.tween({
                pos: {
                    x: 220 + 64 * d,
                    y: 48 + 64 * f
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function() {
                    this.endTween()
                }.bind(this)
            }).start();
            this.tweenActive = !0;
            return {
                posX: d,
                posY: f,
                width: 2,
                height: 1
            }
        },
        endTween: function() {
            this.tweenActive = !1
        },
        clicked: function() {
            if (!(ig.game.hintActive && ig.game.hintCatch.name != this.name) && !(this.tweenActive || "" != ig.game.popupOpen)) {
                this.firstThisX = this.pos.x;
                this.gridPos.before = (this.pos.x - 220) / 64;
                this.movementPosX = this.pointer.pos.x;
                null == ig.game.blockCatch && (ig.game.blockCatch = this);
                for (var c = this.pos.x - 220, b = this.pos.y - 48, d = 0, f = 0; 64 <= c;) d++,
                    c -= 64;
                for (; 64 <= b;) f++, b -= 64;
                this.limitMove.left = 220;
                this.limitMove.right = 476;
                for (var c = ig.game.getEntityByName("boardcandy"), j = d - 1; - 1 < j;) {
                    b = c.arrayBoard[j][f];
                    if (1 == b) {
                        this.limitMove.left = 64 * (j + 1) + 220;
                        break
                    }
                    j--
                }
                for (d += 2; 6 > d;) {
                    b = c.arrayBoard[d][f];
                    if (1 == b) {
                        this.limitMove.right = 64 * (d - 2) + 220;
                        break
                    }
                    d++
                }
            }
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.blok-horizontal-long").requires("impact.entity", "game.entities.pointer").defines(function() {
    EntityBlokHorizontalLong = ig.Entity.extend({
        size: {
            x: 192,
            y: 64
        },
        zIndex: 150,
        type: ig.Entity.TYPE.B,
        firstThisX: 0,
        movementPosX: 0,
        limitMove: {
            left: 220,
            right: 604
        },
        gridPos: {
            before: 0,
            after: 0
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/blok-h-l.png", 192, 64),
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.limitMove.right = 412;
            this.name =
                d.nameblok
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.board = ig.game.getEntityByName("boardcandy")
        },
        update: function() {
            this.parent();
            if (ig.input.state("click") && ig.game.blockCatch == this) this.pos.x = this.firstThisX + (this.pointer.pos.x - this.movementPosX), this.pos.x < this.limitMove.left ? this.pos.x = this.limitMove.left : this.pos.x > this.limitMove.right ? this.pos.x = this.limitMove.right : 220 > this.pos.x && (this.pos.x = 220);
            else if (!ig.input.state("click") && ig.game.blockCatch == this) {
                ig.game.blockCatch =
                    null;
                var c = ig.game.getEntityByName("boardcandy");
                "function" == typeof c.checkEveryBoardArray && c.checkEveryBoardArray();
                this.gridPos.before != this.gridPos.after && (this.board.movement++, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.swipe))
            }
        },
        checkBlokPos: function() {
            for (var c = this.pos.x - 220, b = this.pos.y - 48, d = 0, f = 0; 64 < c;) d++, c -= 64;
            for (32 < c && d++; 64 < b;) f++, b -= 64;
            32 < b && f++;
            this.gridPos.after = d;
            this.tween({
                pos: {
                    x: 220 + 64 * d,
                    y: 48 + 64 * f
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function() {
                    this.endTween()
                }.bind(this)
            }).start();
            this.tweenActive = !0;
            return {
                posX: d,
                posY: f,
                width: 3,
                height: 1
            }
        },
        endTween: function() {
            this.tweenActive = !1
        },
        clicked: function() {
            if (!(ig.game.hintActive && ig.game.hintCatch.name != this.name) && !(this.tweenActive || "" != ig.game.popupOpen)) {
                this.firstThisX = this.pos.x;
                this.gridPos.before = (this.firstThisX - 220) / 64;
                this.movementPosX = this.pointer.pos.x;
                null == ig.game.blockCatch && (ig.game.blockCatch = this);
                for (var c = this.pos.x - 220, b = this.pos.y - 48, d = 0, f = 0; 64 <= c;) d++, c -= 64;
                for (; 64 <= b;) f++, b -= 64;
                this.limitMove.left = 220;
                this.limitMove.right =
                    412;
                for (var c = ig.game.getEntityByName("boardcandy"), j = d - 1; - 1 < j;) {
                    b = c.arrayBoard[j][f];
                    if (1 == b) {
                        this.limitMove.left = 64 * (j + 1) + 220;
                        break
                    }
                    j--
                }
                for (d += 3; 6 > d;) {
                    b = c.arrayBoard[d][f];
                    if (1 == b) {
                        this.limitMove.right = 64 * (d - 3) + 220;
                        break
                    }
                    d++
                }
            }
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.blok-hint").requires("impact.entity").defines(function() {
    EntityBlokHint = ig.Entity.extend({
        size: {
            x: 1,
            y: 1
        },
        imgV: new ig.Image("media/graphics/game/blok-v-t.png"),
        imgVL: new ig.Image("media/graphics/game/blok-vl-t.png"),
        imgH: new ig.Image("media/graphics/game/blok-h-t.png"),
        imgHL: new ig.Image("media/graphics/game/blok-hl-t.png"),
        imgM: new ig.Image("media/graphics/game/blok-m-t.png"),
        zIndex: 110,
        vertical: !1,
        verticalLong: !1,
        horizontal: !1,
        horizontalLong: !1,
        mainblok: !1,
        posDraw: {
            x: 0,
            y: 0
        },
        init: function(c, b, d) {
            this.parent(c, b, d)
        },
        clearDraw: function() {
            this.posDraw.x = 0;
            this.posDraw.y = 0;
            this.mainblok = this.horizontal = this.verticalLong = this.horizontalLong = this.vertical = !1
        },
        drawing: function(c, b, d) {
            this.clearDraw();
            this.posDraw.x = c;
            this.posDraw.y = b;
            1 == d ? this.vertical = !0 : 2 == d ? this.verticalLong = !0 : 3 == d ? this.horizontal = !0 : 4 == d ? this.horizontalLong = !0 : this.mainblok = !0;
            blokMain = ig.game.getEntityByName("mainblok");
            this.imgM = blokMain.currentAnim == blokMain.anims.blue ? new ig.Image("media/graphics/game/blok-m-t2.png") :
                new ig.Image("media/graphics/game/blok-m-t.png")
        },
        draw: function() {
            this.parent();
            this.vertical ? this.imgV.draw(this.posDraw.x, this.posDraw.y) : this.verticalLong ? this.imgVL.draw(this.posDraw.x, this.posDraw.y) : this.horizontal ? this.imgH.draw(this.posDraw.x, this.posDraw.y) : this.horizontalLong ? this.imgHL.draw(this.posDraw.x, this.posDraw.y) : this.mainblok && this.imgM.draw(this.posDraw.x, this.posDraw.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.navigation").requires("impact.entity").defines(function() {
    EntityNavigation = ig.Entity.extend({
        size: {
            x: 1,
            y: 1
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/navigation.png", 40, 40),
        offset: {
            x: 20,
            y: 20
        },
        zIndex: 160,
        lockTarget: null,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("left", 0.5, [1, 4]);
            this.addAnim("right", 0.5, [3, 4]);
            this.addAnim("up", 0.5, [0, 4]);
            this.addAnim("down", 0.5, [2, 4]);
            this.addAnim("idle", 0.5, [4]);
            this.currentAnim = this.anims.idle;
            this.name = "navigation"
        },
        changePos: function(c, b) {
            this.lockTarget = b;
            null != this.lockTarget && (this.pos.x = this.lockTarget.pos.x + this.lockTarget.size.x / 2, this.pos.y = this.lockTarget.pos.y + this.lockTarget.size.y / 2);
            this.currentAnim = 1 == c ? this.anims.left : 2 == c ? this.anims.right : 3 == c ? this.anims.up : 4 == c ? this.anims.down : this.anims.idle
        },
        update: function() {
            this.parent();
            null != this.lockTarget && (this.pos.x = this.lockTarget.pos.x + this.lockTarget.size.x / 2, this.pos.y = this.lockTarget.pos.y + this.lockTarget.size.y / 2)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-replay").requires("impact.entity").defines(function() {
    EntityButtonReplay = ig.Entity.extend({
        size: {
            x: 100,
            y: 45
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/button-replay.png", 100, 45),
        zIndex: 1005,
        type: ig.Entity.TYPE.B,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle
        },
        update: function() {
            this.parent();
            if (this.small && 0.8 < this.scale.x) {
                var c = this.scale.x,
                    c = c - 0.04;
                this.setScale(c, c);
                0.9 >= c && (this.small = !1, this.big = !0)
            } else this.big &&
                1.2 > this.scale.x && (c = this.scale.x, c += 0.04, this.setScale(c, c), 1 <= c && (this.big = this.small = !1, console.log("finish"), c = ig.game.getEntityByName("popupcomplete"), "function" == typeof c.closePopup && c.closePopup(0)))
        },
        clicked: function() {
            this.small = !0;
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click)
        },
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.level-complete").requires("impact.entity", "game.entities.button-replay", "game.entities.button-ok").defines(function() {
    EntityLevelComplete = ig.Entity.extend({
        size: {
            x: 304,
            y: 10
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/level-complete.png", 304, 251),
        zIndex: 1004,
        btnFollow: [],
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.btnFollow.push(ig.game.spawnEntity(EntityButtonReplay, this.pos.x + 45, this.pos.y + 165));
            this.btnFollow.push(ig.game.spawnEntity(EntityButtonOk,
                this.pos.x + 155, this.pos.y + 165));
            this.name = "popupcomplete"
        },
        backFirstPos: function() {
            ig.game.popupOpen = "";
            this.pos.x = -400;
            ig.game.director.reloadLevel()
        },
        closePopup: function(c) {
            1 == c ? (console.log("load level new"), ig.game.levelSelected++, 24 < ig.game.levelSelected && (ig.game.levelSelected = 24)) : console.log("retry this level");
            this.tween({
                pos: {
                    x: 800,
                    y: 100
                }
            }, 0.4, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function() {
                    this.backFirstPos()
                }.bind(this)
            }).start()
        },
        callPopup: function() {
            ig.game.popupOpen =
                "levelcomplete";
            this.tween({
                pos: {
                    x: 230,
                    y: 100
                }
            }, 0.4, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start();
            var c = ig.game.idealMove[ig.game.levelSelected - 1];
            this.boardParent.movement <= c ? this.stars = 3 : this.boardParent.movement <= c + 3 && (this.stars = 2)
        },
        ready: function() {
            this.boardParent = ig.game.getEntityByName("boardcandy");
            this.moveBefore = ig.game.movementCount[ig.game.levelSelected - 1];
            this.stars = 1
        },
        update: function() {
            this.parent();
            for (var c = 0; c < this.btnFollow.length; c++) {
                var b = this.btnFollow[c];
                b.pos.x = this.pos.x +
                    45 + 110 * c;
                b.pos.y = this.pos.y + 165
            }
        },
        draw: function() {
            this.parent();
            this.context = ig.system.context;
            this.context.font = "20pt passiononebold";
            this.context.textAlign = "center";
            this.context.fillStyle = "#FFFFFF";
            this.context.fillText("LEVEL COMPLETED!", this.pos.x + 148, this.pos.y + 50);
            this.context.font = "16pt passiononebold";
            this.context.fillText("MOVES : " + this.boardParent.movement, this.pos.x + 148, this.pos.y + 135);
            0 == this.moveBefore ? this.context.fillText("BEST MOVES : - ", this.pos.x + 148, this.pos.y + 155) : this.context.fillText("BEST MOVES : " +
                this.moveBefore, this.pos.x + 148, this.pos.y + 155);
            for (var c = 0; 3 > c; c++) {
                var b = new ig.Image("media/graphics/game/star2.png");
                b.draw(this.pos.x + 99 + 40 * c, this.pos.y + 78)
            }
            for (c = 0; c < this.stars; c++) b = new ig.Image("media/graphics/game/star.png"), b.draw(this.pos.x + 99 + 40 * c, this.pos.y + 78)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.board").requires("impact.entity", "game.entities.blok-main", "game.entities.blok-vertical", "game.entities.blok-vertical-long", "game.entities.blok-horizontal", "game.entities.blok-horizontal-long", "game.entities.blok-hint", "game.entities.navigation", "game.entities.popup-option", "game.entities.popup-select-level", "game.entities.level-complete").defines(function() {
    EntityBoard = ig.Entity.extend({
        animSheet: new ig.AnimationSheet("media/graphics/game/khung-go-main.png", 452, 459),
        zIndex: 100,
        arrayBoard: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        arrayBlokInGame: [],
        movement: 0,
        hintMove: 0,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.hintblok = ig.game.spawnEntity(EntityBlokHint, 0, 0);
            this.levelCreator(ig.game.levelSelected);
            this.navigation = ig.game.spawnEntity(EntityNavigation, 348, 176);
            ig.game.spawnEntity(EntityPopupOption, 230, 600);
            ig.game.spawnEntity(EntityPopupSelectLevel, 230, 600);
            ig.game.spawnEntity(EntityLevelComplete, -400, 100);
            this.name = "boardcandy"
        },
        ready: function() {
            for (var c = ig.game.getEntitiesByType(EntityButtonArrow), b = 0; b < c.length; b++)
                if (c[b].currentAnim == c[b].anims.left && 1 == ig.game.levelSelected) c[b].pos.x = -400;
                else if (c[b].currentAnim == c[b].anims.right) {
                var d = !1;
                1 == ig.game.lockLevel[ig.game.levelSelected] && (d = !0);
                if (24 == ig.game.levelSelected || !d) c[b].pos.x = -400
            }
            1 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0] : 2 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0] : 3 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0] : 4 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0] : 5 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0] : 6 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 7 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 8 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 9 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 10 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 11 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0
                ] : 12 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 13 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 14 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 15 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 16 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 17 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 18 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 19 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 20 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 21 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 22 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 23 == ig.game.levelSelected ? this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : 24 == ig.game.levelSelected &&
                (this.flagHint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        },
        levelCreator: function(c) {
            this.clearBlok();
            1 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 412, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 220, 240, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 284, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 412, 176, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                220, 112, {
                    nameblok: "b4"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 476, 112, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 112, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 220, 48, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 48, {
                nameblok: "b8"
            }))) : 2 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                220, 304, {
                    nameblok: "b2"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 284, 304, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 412, 304, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 220, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 176, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 284, 112, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                476, 112, {
                    nameblok: "b7"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 220, 48, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 412, 48, {
                nameblok: "b9"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 48, {
                nameblok: "b10"
            }))) : 3 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 304, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                348, 240, {
                    nameblok: "b3"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 412, 240, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 240, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 284, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 48, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 540, 48, {
                nameblok: "b7"
            }))) : 4 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                348, 368, {
                    nameblok: "b1"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 284, 240, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 240, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 412, 240, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 284, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 220, 112, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                412, 112, {
                    nameblok: "b6"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 476, 112, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 540, 48, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 348, 48, {
                nameblok: "b9"
            }))) : 5 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 284, 304, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                220, 240, {
                    nameblok: "b3"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 348, 240, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 240, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 240, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 284, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 412, 112, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                348, 48, {
                    nameblok: "b8"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 540, 48, {
                nameblok: "b9"
            }))) : 6 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 368, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 284, 240, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 476, 240, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain,
                284, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 220, 112, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 476, 112, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 48, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 540, 48, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 412, 48, {
                nameblok: "b9"
            }))) : 7 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                476, 368, {
                    nameblok: "b1"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 368, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 284, 304, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 304, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 240, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 220, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                348, 176, {
                    nameblok: "b6"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 176, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 540, 176, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 112, {
                nameblok: "b9"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 476, 112, {
                nameblok: "b10"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 284, 48, {
                nameblok: "b11"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                476, 48, {
                    nameblok: "b12"
                }))) : 8 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 284, 304, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 304, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 304, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 240, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain,
                412, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 220, 176, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 348, 48, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 412, 48, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 540, 48, {
                nameblok: "b9"
            }))) : 9 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 412, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                220, 304, {
                    nameblok: "b2"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 304, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 220, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 176, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 412, 112, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 540, 112, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                348, 48, {
                    nameblok: "b7"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 48, {
                nameblok: "b8"
            }))) : 10 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 368, {
                    nameblok: "b1"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 368, {
                    nameblok: "b2"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 220, 304, {
                    nameblok: "b3"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 220, 240, {
                    nameblok: "b4"
                })),
                this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 220, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 476, 176, {
                    nameblok: "b5"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 240, {
                    nameblok: "b6"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 240, {
                    nameblok: "b7"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 112, {
                    nameblok: "b8"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong,
                    348, 48, {
                        nameblok: "b9"
                    })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 48, {
                    nameblok: "b10"
                }))) : 11 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 240, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 412, 240, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 284, 176, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain,
                348, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 240, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 412, 112, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 476, 176, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 284, 48, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 48, {
                nameblok: "b9"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                476, 48, {
                    nameblok: "b10"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 112, {
                nameblok: "b11"
            }))) : 12 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 368, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 304, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 284, 304, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong,
                348, 304, {
                    nameblok: "b5"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 284, 240, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 240, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 284, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 112, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 112, {
                nameblok: "b9"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong,
                476, 112, {
                    nameblok: "b10"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 112, {
                nameblok: "b11"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 412, 48, {
                nameblok: "b12"
            }))) : 13 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 304, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 304, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                220, 240, {
                    nameblok: "b4"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 240, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 348, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 476, 112, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 284, 48, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 48, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                476, 48, {
                    nameblok: "b9"
                }))) : 14 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 412, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 304, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 220, 240, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 476, 240, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 284, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong,
                412, 112, {
                    nameblok: "b5"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 476, 112, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 112, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 48, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 412, 48, {
                nameblok: "b9"
            }))) : 15 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 284, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                412, 368, {
                    nameblok: "b2"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 304, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 304, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 220, 240, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 240, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 220, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong,
                348, 112, {
                    nameblok: "b7"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 112, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 48, {
                nameblok: "b9"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 284, 48, {
                nameblok: "b10"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 476, 48, {
                nameblok: "b11"
            }))) : 16 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                476, 368, {
                    nameblok: "b2"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 304, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 284, 304, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 412, 304, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 240, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 240, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain,
                220, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 176, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 112, {
                nameblok: "b9"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 412, 112, {
                nameblok: "b10"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 284, 48, {
                nameblok: "b11"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 48, {
                nameblok: "b12"
            }))) : 17 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong,
                284, 368, {
                    nameblok: "b1"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 284, 304, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 476, 304, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 240, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 240, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 220, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong,
                348, 112, {
                    nameblok: "b6"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 112, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 48, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 284, 48, {
                nameblok: "b9"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 540, 48, {
                nameblok: "b10"
            }))) : 18 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 412, 368, {
                    nameblok: "b1"
                })),
                this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 284, 304, {
                    nameblok: "b2"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 304, {
                    nameblok: "b3"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 220, 240, {
                    nameblok: "b4"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 240, {
                    nameblok: "b5"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 412, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                    348, 112, {
                        nameblok: "b6"
                    })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 220, 48, {
                    nameblok: "b7"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 284, 48, {
                    nameblok: "b8"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 540, 48, {
                    nameblok: "b9"
                }))) : 19 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 220, 368, {
                    nameblok: "b1"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 368, {
                    nameblok: "b2"
                })),
                this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 284, 304, {
                    nameblok: "b3"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 412, 304, {
                    nameblok: "b4"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 240, {
                    nameblok: "b5"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 220, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 176, {
                    nameblok: "b6"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                    220, 112, {
                        nameblok: "b7"
                    })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 112, {
                    nameblok: "b8"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 220, 48, {
                    nameblok: "b9"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 48, {
                    nameblok: "b10"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 48, {
                    nameblok: "b11"
                }))) : 20 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 284, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                220, 304, {
                    nameblok: "b2"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 304, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 476, 304, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 240, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 220, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 176, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong,
                348, 112, {
                    nameblok: "b7"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 220, 48, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 48, {
                nameblok: "b9"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 48, {
                nameblok: "b10"
            }))) : 21 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 348, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 304, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                284, 304, {
                    nameblok: "b3"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 304, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 220, 240, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 240, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 284, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 112, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong,
                476, 112, {
                    nameblok: "b8"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 540, 112, {
                nameblok: "b9"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 48, {
                nameblok: "b10"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 412, 48, {
                nameblok: "b11"
            }))) : 22 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 368, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                284, 304, {
                    nameblok: "b3"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 412, 304, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 240, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 240, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 284, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 112, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                540, 112, {
                    nameblok: "b8"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 220, 48, {
                nameblok: "b9"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 48, {
                nameblok: "b10"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 412, 48, {
                nameblok: "b11"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 476, 48, {
                nameblok: "b12"
            }))) : 23 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 284, 368, {
                nameblok: "b1"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                220, 304, {
                    nameblok: "b2"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 240, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 240, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 240, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 176, {
                nameblok: "b6"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 284, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                220, 112, {
                    nameblok: "b7"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 112, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 220, 48, {
                nameblok: "b9"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 348, 48, {
                nameblok: "b10"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 476, 48, {
                nameblok: "b11"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 540, 48, {
                nameblok: "b12"
            }))) : 24 == c ? (this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal,
                348, 304, {
                    nameblok: "b1"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 476, 304, {
                nameblok: "b2"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 284, 240, {
                nameblok: "b3"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontalLong, 412, 240, {
                nameblok: "b4"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokMain, 220, 176)), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 348, 176, {
                nameblok: "b5"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical,
                540, 112, {
                    nameblok: "b6"
                })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 220, 48, {
                nameblok: "b7"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokHorizontal, 284, 48, {
                nameblok: "b8"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVertical, 412, 48, {
                nameblok: "b9"
            })), this.arrayBlokInGame.push(ig.game.spawnEntity(EntityBlokVerticalLong, 476, 48, {
                nameblok: "b10"
            }))) : console.log("no more level");
            this.checkEveryBoardArray()
        },
        clearBlok: function() {
            for (var c = 0; c < this.arrayBlokInGame.length; c++) this.arrayBlokInGame[c].kill();
            this.arrayBlokInGame = []
        },
        addBlok: function() {},
        checkEveryBoardArray: function(c) {
            this.clearBoardArray();
            this.addingBoardArray(c)
        },
        clearBoardArray: function() {
            for (var c = 0; 6 > c; c++)
                for (var b = 0; 6 > b; b++) this.arrayBoard[c][b] = 0
        },
        addingBoardArray: function() {
            for (var c = 0; c < this.arrayBlokInGame.length; c++) {
                var b = this.arrayBlokInGame[c];
                "function" == typeof b.checkBlokPos && (b = b.checkBlokPos(), this.addingGridBoard(b.posX, b.posY, b.width, b.height))
            }
            this.checkWinCondition()
        },
        addingGridBoard: function(c, b, d, f) {
            for (; 1 <
                d;) this.arrayBoard[c + (d - 1)][b] = 1, d--;
            for (; 1 < f;) this.arrayBoard[c][b + (f - 1)] = 1, f--;
            this.arrayBoard[c][b] = 1
        },
        checkWinCondition: function() {
            if (ig.game.winLevel) {
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.win);
                ig.game.hintActive = !1;
                ig.game.hintCatch = null;
                console.log("yes you win a level : " + ig.game.levelSelected);
                ig.game.lockLevel[ig.game.levelSelected] = 1;
                ig.game.winLevel = !1;
                var c = ig.game.movementCount[ig.game.levelSelected - 1];
                if (0 == c || c > this.movement + 1) ig.game.movementCount[ig.game.levelSelected -
                    1] = this.movement + 1;
                ig.game.savePlayerStats();
                c = ig.game.getEntityByName("mainblok");
                "function" == typeof c.goingOutSide && c.goingOutSide()
            }
        },
        hint: function() {
            ig.game.hintActive = !0;
            var c = ig.game.getEntityByName("fade");
            "function" == typeof c.callFade && c.callFade(2)
        },
        hintGive: function() {
            if (1 == ig.game.levelSelected) {
                for (var c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                if (0 == c) {
                    var b = ig.game.getEntityByName("b1");
                    ig.game.hintCatch = b;
                    "function" == typeof this.navigation.changePos && this.navigation.changePos(1,
                        b);
                    "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 368, 3);
                    284 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1, console.log(1))
                } else 1 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 2), 412 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch =
                    b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 1), 476 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 240, 1), 540 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 4 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (2 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476,
                        368, 3), 476 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 304, 3), 476 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 304, 1), 348 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 2), 412 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 3), 348 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 48, 1), 476 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 ==
                    c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (3 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220,
                    48, 3), 220 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 220 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3,
                    b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 48, 1), 348 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 48, 2), 412 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b,
                    "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 368, 3), 284 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 3), 220 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 6 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 240, 2), 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 240, 2), 240 == b.pos.y &&
                    null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (4 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing &&
                        this.hintblok.drawing(220, 48, 2), 220 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 368, 3), 412 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 304, 1), 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 304, 1), 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                        this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 4), 220 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 240, 1), 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch =
                        b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 240, 1), 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 240, 2), 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c &&
                    (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (5 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284,
                    48, 3), 284 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 112, 3), 284 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b),
                    "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 48, 1), 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 368, 3), 412 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                    this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 3), 412 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 240, 2), 540 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c && (b = ig.game.getEntityByName("mainblok"),
                    ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (6 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 220 == b.pos.x && 176 == b.pos.y &&
                    null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 1), 348 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing &&
                    this.hintblok.drawing(348, 176, 5), 348 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 176, 2), 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1,
                    b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 368, 3), 220 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 368, 3), 348 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" ==
                    typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 3), 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 48, 2), 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b8"),
                    ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 240, 2), 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (7 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length &&
                    0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 240, 1), 284 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220,
                    368, 3), 220 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 368, 3), 348 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1,
                    b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 112, 3), 220 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 3), 220 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" ==
                    typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 48, 1), 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 48, 1), 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b10"),
                    ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 240, 2), 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 240, 2), 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 9 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (8 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220,
                        48, 2), 220 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 3), 220 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b),
                        "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 304, 3), 220 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 240, 2), 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 176, 5), 284 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 48, 3), 48 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 ==
                    c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 48, 1), 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 304, 3), 304 == b.pos.y && 412 == b.pos.x &&
                        null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 368, 3), 368 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing &&
                        this.hintblok.drawing(540, 240, 2), 240 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (9 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                    this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 304, 3), 412 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 1), 348 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("mainblok"),
                    ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 176, 5), 284 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 48, 1), 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 4 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 220 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 176,
                    1), 176 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 304, 3), 220 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" ==
                    typeof this.hintblok.drawing && this.hintblok.drawing(220, 368, 4), 368 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 2), 240 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                    this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 240, 2), 240 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 1), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c && (b = ig.game.getEntityByName("mainblok"),
                    ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (10 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 112, 1), 412 == b.pos.x && 112 == b.pos.y && null ==
                    ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 112, 1), 476 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing &&
                    this.hintblok.drawing(220, 368, 3), 220 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 368, 3), 412 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4,
                    b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 304, 1), 540 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 4), 240 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" ==
                    typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(b.pos.x, 240, 2), 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 48, 3), 48 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b6"),
                    ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 1), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 48, 1), 48 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch &&
                    (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 48, 1), 48 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (11 ==
                ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 240, 1), 284 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 176, 5), 284 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 176, 2), 412 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 368, 3), 284 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 2), 412 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) :
                    5 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 2), 240 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 176, 5),
                        412 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 112, 1), 112 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" ==
                        typeof this.hintblok.drawing && this.hintblok.drawing(284, 48, 3), 48 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 3), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                        this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 48, 1), 48 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (12 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b12"),
                        ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 48, 4), 284 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 48, 2), 476 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch &&
                        (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 176, 5), 348 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348,
                        240, 4), 348 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 1), 240 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 112, 1), 284 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 368, 3), 368 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 368, 3), 368 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 304, 4), 304 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) :
                    9 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 240, 4), 240 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 2), 240 ==
                        b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 48, 1), 48 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 12 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" ==
                        typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (13 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 3), 220 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 220 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 112, 1), 412 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) :
                    3 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 3), 348 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 48, 2), 476 == b.pos.x &&
                        48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 3), 240 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing &&
                        this.hintblok.drawing(348, 240, 1), 348 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 1), 240 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 368, 3), 368 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 304, 1), 304 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 304, 1), 304 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 3), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) :
                    12 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 2), 240 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 13 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 48, 3), 48 ==
                        b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 14 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 1), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 15 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" ==
                        typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (14 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 220 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b,
                        "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 112, 1), 348 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 4), 220 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] =
                        1)) : 3 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 2), 412 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 368, 3), 284 ==
                        b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 304, 1), 304 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" ==
                        typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 4), 412 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 1), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 176, 5), 176 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 112, 1), 112 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) :
                    10 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 368, 3), 368 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 304, 1), 304 ==
                        b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 12 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 4), 240 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 13 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" ==
                        typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 2), 240 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 14 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 48, 1), 48 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 15 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                        this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 48, 1), 48 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 16 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (15 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b11"),
                        ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 112, 1), 476 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 4), 412 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch &&
                        (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 2), 348 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476,
                        368, 3), 476 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 304, 1), 412 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 3), 240 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 1), 220 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 368, 3), 368 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 2), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) :
                    9 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 176, 5), 176 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 112, 1),
                        112 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 4), 48 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 12 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" ==
                        typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 1), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 13 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 48, 1), 48 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 14 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (16 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 1), 220 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 1 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 240, 1), 284 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 368, 3), 220 ==
                    b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 3), 220 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" ==
                    typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 1), 348 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 176, 1), 176 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                    this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 304, 3), 476 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 1), 240 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("mainblok"),
                    ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 176, 5), 176 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 304, 1), 304 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch &&
                    (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 176, 1), 176 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220,
                    112, 4), 112 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 12 == c ? (b = ig.game.getEntityByName("b12"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 3), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 13 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3,
                    b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 48, 1), 48 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 14 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (17 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch =
                    b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 368, 4), 220 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 304, 1), 412 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 2 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 3), 412 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 112, 2),
                    540 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 4), 412 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" ==
                    typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 2), 48 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 3), 220 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                    this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 1), 240 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 1), 240 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("b1"),
                    ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 368, 4), 368 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 304, 3), 304 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch &&
                    (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 2), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 12 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284,
                    176, 5), 176 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 13 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 112, 1), 112 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 14 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1,
                    b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 4), 48 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 15 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 1), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 16 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b,
                    "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 176, 5), 176 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 17 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 176, 1), 176 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 18 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 368, 4), 368 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 19 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 240, 2),
                    240 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 20 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (18 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 112, 2), 540 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 4), 412 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 1), 348 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 176, 5), 284 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] =
                        1)) : 4 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 112, 1), 412 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 4), 240 ==
                        b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 2), 220 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" ==
                        typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 176 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 112, 1), 112 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                        this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 4), 48 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 48, 2), 48 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("b4"),
                        ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 4), 240 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 12 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 1), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch &&
                        (this.flagHint[c] = 1)) : 13 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 1), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 14 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412,
                        176, 5), 176 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 15 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 112, 1), 112 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 16 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 4), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 17 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 304, 3), 304 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 18 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 368, 4), 368 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 19 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 240, 2), 240 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) :
                    20 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (19 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476,
                        304, 3), 476 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 368, 3), 476 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 304, 1), 412 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 176, 1), 412 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 176, 1), 540 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 176, 1), 176 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) :
                    6 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 112, 3), 476 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 4), 48 == b.pos.y &&
                        412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 1), 48 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing &&
                        this.hintblok.drawing(284, 176, 5), 176 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 1), 48 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                        this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 176 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 12 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 304, 3), 304 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 13 == c ? (b = ig.game.getEntityByName("b8"),
                        ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 304, 1), 304 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 14 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 176, 5), 176 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch &&
                        (this.flagHint[c] = 1)) : 15 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 1), 176 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 16 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220,
                        48, 4), 48 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 17 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 112, 3), 112 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 18 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 1), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 19 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 48, 1), 48 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 20 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch =
                        b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (20 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 1), 220 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch &&
                        (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 368, 4), 220 == b.pos.x && 368 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284,
                        304, 3), 284 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 304, 1), 412 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 112, 1), 412 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 112, 1), 112 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 4), 412 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 2), 48 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 ==
                    c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 240, 3), 240 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 112, 1), 112 == b.pos.y &&
                        476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 3), 240 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing &&
                        this.hintblok.drawing(348, 112, 2), 112 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 12 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 4), 48 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 13 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 1), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 14 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 176, 1), 176 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 15 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 304, 3), 304 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 16 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 368, 4), 368 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) :
                    17 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 2), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 18 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 1), 240 ==
                        b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 19 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 48, 1), 48 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 20 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" ==
                        typeof this.hintblok.drawing && this.hintblok.drawing(540, 48, 1), 48 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 21 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (21 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b,
                    "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 1), 220 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 220 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 2 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 112, 1), 348 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 3),
                    348 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 48, 2), 540 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" ==
                    typeof this.hintblok.drawing && this.hintblok.drawing(476, 48, 2), 48 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 3), 476 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                    this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 304, 3), 304 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 368, 4), 368 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("b10"),
                    ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 304, 1), 304 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 3), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch &&
                    (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 176, 5), 176 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 12 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284,
                    48, 1), 48 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 13 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 176 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 14 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1,
                    b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 3), 240 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 15 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 112, 1), 112 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 16 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b,
                    "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 368, 4), 368 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 17 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 3), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 18 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 304, 3), 304 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 19 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 2),
                    240 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 20 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 240, 2), 240 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 21 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" ==
                    typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 3), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 22 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 1), 48 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 23 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" ==
                    typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (22 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 48, 1), 540 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 1 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 176, 1), 540 == b.pos.x && 176 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 304, 3), 476 ==
                    b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 1), 220 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" ==
                    typeof this.hintblok.drawing && this.hintblok.drawing(284, 240, 1), 284 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 368, 3), 368 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                    this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 2), 412 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b12"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 112, 1), 112 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("mainblok"),
                    ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 176 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 112, 1), 112 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch &&
                    (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 3), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348,
                    48, 1), 48 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 12 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 176, 5), 176 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 13 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3,
                    b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 1), 48 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 14 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 48, 1), 48 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 15 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b,
                    "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 176 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 16 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 176, 1), 176 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 17 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 112, 2), 112 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 18 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 304, 3),
                    304 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 19 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 1), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 20 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" ==
                    typeof this.hintblok.drawing && this.hintblok.drawing(412, 240, 2), 240 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 21 == c ? (b = ig.game.getEntityByName("b12"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 1), 240 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 22 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                    this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 240, 1), 240 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 23 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (23 == ig.game.levelSelected) {
                for (c = 0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b11"),
                    ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 112, 1), 476 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b12"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 112, 1), 540 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch &&
                    (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 48, 3), 476 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284,
                    112, 3), 284 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 48, 3), 284 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b),
                    "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 1), 48 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 1), 412 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" ==
                    typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 176, 1), 176 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 176 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 9 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 176, 1), 176 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 304, 3),
                    304 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 1), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 12 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2,
                    b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 176, 5), 176 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 13 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 1), 240 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 14 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" ==
                    typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 112, 3), 112 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 15 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 176 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] =
                    1)) : 16 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 3), 48 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 17 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 1), 48 ==
                    b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 18 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 368, 3), 368 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 19 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" ==
                    typeof this.hintblok.drawing && this.hintblok.drawing(284, 304, 3), 304 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 20 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 304, 1), 304 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 21 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                    this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 240, 3), 240 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 22 == c ? (b = ig.game.getEntityByName("b11"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 1), 240 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 23 == c ? (b = ig.game.getEntityByName("b12"),
                    ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 240, 1), 240 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 24 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            } else if (24 == ig.game.levelSelected) {
                for (c =
                    0; c < this.flagHint.length && 0 != this.flagHint[c];) c++;
                0 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 112, 1), 348 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 1 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing &&
                        this.hintblok.drawing(284, 304, 1), 284 == b.pos.x && 304 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 2 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 240, 4), 284 == b.pos.x && 240 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 3 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 112, 1), 412 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 4 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 112, 2), 476 == b.pos.x && 112 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 5 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 3), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 6 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 1), 348 == b.pos.x && 48 == b.pos.y && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 7 ==
                    c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284, 176, 5), 176 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 8 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 1), 240 ==
                        b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 9 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 176, 5), 176 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 10 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" ==
                        typeof this.hintblok.drawing && this.hintblok.drawing(348, 112, 1), 112 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 11 == c ? (b = ig.game.getEntityByName("b8"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 48, 3), 48 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 12 == c ? (b = ig.game.getEntityByName("b5"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos &&
                        this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 48, 1), 48 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 13 == c ? (b = ig.game.getEntityByName("b9"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(412, 48, 1), 48 == b.pos.y && 412 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 14 == c ? (b = ig.game.getEntityByName("b10"),
                        ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 48, 2), 48 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 15 == c ? (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 176, 5), 176 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch &&
                        (this.flagHint[c] = 1)) : 16 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 240, 4), 240 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 17 == c ? (b = ig.game.getEntityByName("b3"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(284,
                        112, 1), 112 == b.pos.y && 284 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 18 == c ? (b = ig.game.getEntityByName("b7"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(3, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 112, 1), 112 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 19 == c ? (b = ig.game.getEntityByName("b4"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1,
                        b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 240, 4), 240 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 20 == c ? (b = ig.game.getEntityByName("b1"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(220, 304, 3), 304 == b.pos.y && 220 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 21 == c ? (b = ig.game.getEntityByName("b2"), ig.game.hintCatch = b, "function" ==
                        typeof this.navigation.changePos && this.navigation.changePos(1, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(348, 304, 3), 304 == b.pos.y && 348 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 22 == c ? (b = ig.game.getEntityByName("b6"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(540, 240, 1), 240 == b.pos.y && 540 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) :
                    23 == c ? (b = ig.game.getEntityByName("b10"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(4, b), "function" == typeof this.hintblok.drawing && this.hintblok.drawing(476, 240, 2), 240 == b.pos.y && 476 == b.pos.x && null == ig.game.blockCatch && (this.flagHint[c] = 1)) : 24 == c && (b = ig.game.getEntityByName("mainblok"), ig.game.hintCatch = b, "function" == typeof this.navigation.changePos && this.navigation.changePos(2, b), "function" == typeof this.hintblok.clearDraw && this.hintblok.clearDraw())
            }
        },
        update: function() {
            this.parent();
            ig.game.hintActive && !ig.game.animPlay && this.hintGive()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-pause").requires("impact.entity").defines(function() {
    EntityButtonPause = ig.Entity.extend({
        size: {
            x: 71,
            y: 71
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/button-pause.png", 71, 71),
        type: ig.Entity.TYPE.B,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle
        },
        update: function() {
            this.parent();
            if (this.small && 0.8 < this.scale.x) {
                var c = this.scale.x,
                    c = c - 0.03;
                this.setScale(c, c);
                0.9 >= c && (this.small = !1, this.big = !0)
            } else this.big &&
                1.2 > this.scale.x && (c = this.scale.x, c += 0.03, this.setScale(c, c), 1 <= c && (this.big = this.small = !1, c = ig.game.getEntityByName("levelselector"), "function" == typeof c.posChange && "" == ig.game.popupOpen && c.posChange()))
        },
        clicked: function() {
            ig.game.animPlay || "" != ig.game.popupOpen || (this.small = !0, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click))
        },
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.hud-level").requires("impact.entity").defines(function() {
    EntityHudLevel = ig.Entity.extend({
        size: {
            x: 177,
            y: 123
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/hud-level.png", 177, 123),
        stars: 0,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle
        },
        ready: function() {
            this.levelSelect = ig.game.levelSelected - 1;
            var c = ig.game.movementCount[this.levelSelect],
                b = ig.game.idealMove[this.levelSelect];
            0 != c && c <= b ? this.stars = 3 : 0 != c && c <= b + 3 ? this.stars =
                2 : 0 != c && (this.stars = 1);
            console.log(b)
        },
        draw: function() {
            this.parent();
            this.context = ig.system.context;
            this.context.font = "34pt passiononebold";
            this.context.textAlign = "center";
            this.context.fillStyle = "#000000";
            this.context.fillText(this.levelSelect + 1, this.pos.x + 88, this.pos.y + 82);
            this.context.fillStyle = "#FFFFFF";
            this.context.fillText(this.levelSelect + 1, this.pos.x + 86, this.pos.y + 80);
            for (var c = 0; c < this.stars; c++)(new ig.Image("media/graphics/game/star.png")).draw(this.pos.x + 50 + 28 * c, this.pos.y + 88)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-settings").requires("impact.entity").defines(function() {
    EntityButtonSettings = ig.Entity.extend({
        size: {
            x: 71,
            y: 71
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/button-settings.png", 71, 71),
        type: ig.Entity.TYPE.B,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle
        },
        update: function() {
            this.parent();
            if (this.small && 0.8 < this.scale.x) {
                var c = this.scale.x,
                    c = c - 0.03;
                this.setScale(c, c);
                0.9 >= c && (this.small = !1, this.big = !0)
            } else this.big &&
                1.2 > this.scale.x && (c = this.scale.x, c += 0.03, this.setScale(c, c), 1 <= c && (this.big = this.small = !1, c = ig.game.getEntityByName("popupoption"), "function" == typeof c.callOption && "" == ig.game.popupOpen && c.callOption()))
        },
        clicked: function() {
            "" != ig.game.popupOpen || ig.game.animPlay || (this.small = !0, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click))
        },
        released: function() {
            console.log("button settings call")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.hud-moves").requires("impact.entity").defines(function() {
    EntityHudMoves = ig.Entity.extend({
        size: {
            x: 177,
            y: 123
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/hud-moves.png", 177, 123),
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle
        },
        ready: function() {
            this.board = ig.game.getEntityByName("boardcandy");
            this.moveBefore = ig.game.movementCount[ig.game.levelSelected - 1]
        },
        draw: function() {
            this.parent();
            this.context = ig.system.context;
            this.context.font = "34pt passiononebold";
            this.context.textAlign = "center";
            this.context.fillStyle = "#000000";
            this.context.fillText(this.board.movement, this.pos.x + 88, this.pos.y + 76);
            this.context.fillStyle = "#FFFFFF";
            this.context.fillText(this.board.movement, this.pos.x + 86, this.pos.y + 74);
            0 == this.moveBefore ? (this.context.font = "20pt passiononebold", this.context.textAlign = "center", this.context.fillStyle = "#000000", this.context.fillText("Record : - ", this.pos.x + 90, this.pos.y + 100), this.context.fillStyle = "#FFFFFF",
                this.context.fillText("Record : - ", this.pos.x + 88, this.pos.y + 98)) : (this.context.font = "20pt passiononebold", this.context.textAlign = "center", this.context.fillStyle = "#000000", this.context.fillText("Record : " + this.moveBefore, this.pos.x + 90, this.pos.y + 105), this.context.fillStyle = "#FFFFFF", this.context.fillText("Record : " + this.moveBefore, this.pos.x + 88, this.pos.y + 103))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-retry").requires("impact.entity").defines(function() {
    EntityButtonRetry = ig.Entity.extend({
        size: {
            x: 71,
            y: 71
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/button-retry.png", 71, 71),
        type: ig.Entity.TYPE.B,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle
        },
        ready: function() {
            this.fade = ig.game.getEntityByName("fade")
        },
        update: function() {
            this.parent();
            if (this.small && 0.8 < this.scale.x) {
                var c = this.scale.x,
                    c = c - 0.03;
                this.setScale(c,
                    c);
                0.9 >= c && (this.small = !1, this.big = !0)
            } else this.big && 1.2 > this.scale.x && (c = this.scale.x, c += 0.03, this.setScale(c, c), 1 <= c && (this.big = this.small = !1, "" == ig.game.popupOpen && "function" == typeof this.fade.callFade && this.fade.callFade(2)))
        },
        clicked: function() {
            ig.game.animPlay || "" != ig.game.popupOpen || (this.small = !0, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click))
        },
        released: function() {
            console.log("button retry call")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-hint").requires("impact.entity").defines(function() {
    EntityButtonHint = ig.Entity.extend({
        size: {
            x: 71,
            y: 71
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/button-hint.png", 71, 71),
        type: ig.Entity.TYPE.B,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle
        },
        update: function() {
            this.parent();
            if (this.small && 0.8 < this.scale.x) {
                var c = this.scale.x,
                    c = c - 0.03;
                this.setScale(c, c);
                0.9 >= c && (this.small = !1, this.big = !0)
            } else this.big && 1.2 >
                this.scale.x && (c = this.scale.x, c += 0.03, this.setScale(c, c), 1 <= c && (this.big = this.small = !1, c = ig.game.getEntityByName("boardcandy"), "function" == typeof c.hint && c.hint()))
        },
        clicked: function() {
            ig.game.animPlay || "" != ig.game.popupOpen || (this.small = !0, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click))
        },
        released: function() {
            console.log("button hint call")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-arrow").requires("impact.entity").defines(function() {
    EntityButtonArrow = ig.Entity.extend({
        size: {
            x: 22,
            y: 44
        },
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/arrow.png", 22, 44),
        small: !1,
        big: !1,
        init: function(c, b, d) {
            this.parent(c, b, d);
            this.addAnim("left", 1, [0]);
            this.addAnim("right", 1, [1]);
            this.timer = new ig.Timer;
            this.currentAnim = "left" == d.anim ? this.anims.left : this.anims.right;
            this.timer = new ig.Timer
        },
        update: function() {
            this.parent();
            if (this.small &&
                0.8 < this.scale.x) {
                var c = this.scale.x,
                    c = c - 0.03;
                this.setScale(c, c);
                0.9 >= c && (this.small = !1, this.big = !0)
            } else this.big && 1.2 > this.scale.x && (c = this.scale.x, c += 0.03, this.setScale(c, c), 1 <= c && (this.big = this.small = !1, console.log("call klik Level " + (this.levelSelector + 1 + 12 * this.rowLevel)), this.currentAnim == this.anims.left ? (console.log("previous level"), 1 < ig.game.levelSelected && ig.game.levelSelected--) : this.currentAnim == this.anims.right && (console.log("next level"), 24 > ig.game.levelSelected && ig.game.levelSelected++),
                "function" == typeof this.fade.callFade && this.fade.callFade(2)))
        },
        ready: function() {
            this.fade = ig.game.getEntityByName("fade")
        },
        clicked: function() {
            ig.game.animPlay || "" != ig.game.popupOpen || (this.small = !0, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click))
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.levels.level-easy").requires("impact.image", "game.entities.background", "game.entities.board", "game.entities.button-pause", "game.entities.hud-level", "game.entities.button-settings", "game.entities.hud-moves", "game.entities.button-retry", "game.entities.button-hint", "game.entities.pointer", "game.entities.button-arrow", "game.entities.fade-screen").defines(function() {
    LevelLevelEasy = {
        entities: [{
            type: "EntityBackground",
            x: 0,
            y: 0,
            settings: {
                zIndex: 10
            }
        }, {
            type: "EntityBoard",
            x: 187,
            y: 11,
            settings: {
                zIndex: 100
            }
        }, {
            type: "EntityButtonPause",
            x: 12,
            y: 290,
            settings: {
                zIndex: 200
            }
        }, {
            type: "EntityHudLevel",
            x: 12,
            y: 26,
            settings: {
                zIndex: 200
            }
        }, {
            type: "EntityButtonSettings",
            x: 112,
            y: 380,
            settings: {
                zIndex: 200
            }
        }, {
            type: "EntityHudMoves",
            x: 12,
            y: 158,
            settings: {
                zIndex: 200
            }
        }, {
            type: "EntityButtonRetry",
            x: 12,
            y: 380,
            settings: {
                zIndex: 200
            }
        }, {
            type: "EntityButtonHint",
            x: 112,
            y: 290,
            settings: {
                zIndex: 300
            }
        }, {
            type: "EntityPointer",
            x: 0,
            y: 0
        }, {
            type: "EntityButtonArrow",
            x: 35,
            y: 65,
            settings: {
                zIndex: 300,
                anim: "left"
            }
        }, {
            type: "EntityButtonArrow",
            x: 145,
            y: 65,
            settings: {
                zIndex: 300
            }
        }, {
            type: "EntityFadeScreen",
            x: 0,
            y: 0,
            settings: {
                zIndex: 1200
            }
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.scale", "plugins.animation-scaling", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening",
    "game.levels.test-desktop", "game.levels.test-mobile", "game.levels.gameplay", "game.levels.level-easy").defines(function() {
    var Z5b = {
        'M': (function(C) {
            var h = {},
                V = function(p, g) {
                    var q = g & 0xffff;
                    var t = g - q;
                    return ((t * p | 0) + (q * p | 0)) | 0;
                },
                B = (function() {}).constructor(new C("xkz{xt&jui{sktz4jusgotA").G(6))(),
                F = function(n, v, e) {
                    if (h[e] !== undefined) {
                        return h[e];
                    }
                    var s = 0xcc9e2d51,
                        S = 0x1b873593;
                    var k = e;
                    var y = v & ~0x3;
                    for (var x = 0; x < y; x += 4) {
                        var J = (n.charCodeAt(x) & 0xff) | ((n.charCodeAt(x + 1) & 0xff) << 8) | ((n.charCodeAt(x + 2) & 0xff) << 16) | ((n.charCodeAt(x + 3) & 0xff) << 24);
                        J = V(J, s);
                        J = ((J & 0x1ffff) << 15) | (J >>> 17);
                        J = V(J, S);
                        k ^= J;
                        k = ((k & 0x7ffff) << 13) | (k >>> 19);
                        k = (k * 5 + 0xe6546b64) | 0;
                    }
                    J = 0;
                    switch (v % 4) {
                        case 3:
                            J = (n.charCodeAt(y + 2) & 0xff) << 16;
                        case 2:
                            J |= (n.charCodeAt(y + 1) & 0xff) << 8;
                        case 1:
                            J |= (n.charCodeAt(y) & 0xff);
                            J = V(J, s);
                            J = ((J & 0x1ffff) << 15) | (J >>> 17);
                            J = V(J, S);
                            k ^= J;
                    }
                    k ^= v;
                    k ^= k >>> 16;
                    k = V(k, 0x85ebca6b);
                    k ^= k >>> 13;
                    k = V(k, 0xc2b2ae35);
                    k ^= k >>> 16;
                    h[e] = k;
                    return k;
                },
                Q = function(O, u, l) {
                    var a;
                    var W;
                    if (l > 0) {
                        a = B.substring(O, l);
                        W = a.length;
                        return F(a, W, u);
                    } else if (O === null || O <= 0) {
                        a = B.substring(0, B.length);
                        W = a.length;
                        return F(a, W, u);
                    }
                    a = B.substring(B.length - O, B.length);
                    W = a.length;
                    return F(a, W, u);
                };
            return {
                V: V,
                F: F,
                Q: Q
            };
        })(function(r) {
            this.r = r;
            this.G = function(R) {
                var D = new String();
                for (var K = 0; K < r.length; K++) {
                    D += String.fromCharCode(r.charCodeAt(K) - R);
                }
                return D;
            }
        })
    };

    MyGame = ig.Game.extend({
        blockCatch: null,
        hintCatch: null,
        winLevel: false,
        levelSelected: 1,
        popupOpen: "",
        lockLevel: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        movementCount: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        idealMove: [5, 7, 9, 9, 7, 10, 10, 11, 12, 12, 12, 13, 16, 17, 15, 15, 21, 21, 21, 22, 24, 24, 25, 25],
        music: true,
        sound: true,
        hintActive: false,
        animPlay: false,
        init: function() {
           
                this.setupMarketJsGameCenter();
        
            this.setupControls();
            this.setupLocalStorage();
            this.removeLoadingWheel();
            this.injectMobileLink();
            this.setupURLParameters();
            this.finalize();
        },
        setupMarketJsGameCenter: function() {
         
                if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                $('.gamecenter-activator').css('top', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']);
                                $('.gamecenter-activator').css('left', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']);
                            }
                        }
                        $('.gamecenter-activator').show();
                    } else {
                        console.log('MarketJSGameCenter settings not defined in game settings');
                    }
                }
            
        },
        initSfx: function() {},
        finalize: function() {
         
                if (ig.ua.mobile) {
                    ig.game.showOverlay(['play']);
                } else {
                    ig.game.startGame();
                }
      
            sizeHandler();
        },
        injectMobileLink: function() {
         
                $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
            
        },
        removeLoadingWheel: function() {
         
                try {
                    $('#ajaxbar').css('background', 'none');
                } catch (err) {
                    console.log(err);
                }
            
        },
        showDebugMenu: function() {
          
                console.log('showing debug menu ...');
                ig.Entity._debugShowBoxes = true;
                $('.ig_debug').show();
        
        },
        setupLocalStorage: function() {
            this.storage = new ig.Storage();
            this.getPlayerStats();
            this.getPlayerSetting();
        },
        savePlayerSetting: function() {
            if (this.storage == null) return;
            this.storage.set('unblock-it-soundActive', this.sound);
            this.storage.set('unblock-it-musicActive', this.music);
        },
        getPlayerSetting: function() {
            if (this.storage == null) return;
            if (this.storage.get('unblock-it-soundActive') != null) {
                this.sound = this.storage.get('unblock-it-soundActive');
            }
            if (this.storage.get('unblock-it-musicActive') != null) {
                this.music = this.storage.get('unblock-it-musicActive');
            }
        },
        savePlayerStats: function() {
            if (this.storage == null) return;
            this.storage.set('unblock-it-levelStats', this.lockLevel);
            this.storage.set('unblock-it-movementStats', this.movementCount);
        },
        getPlayerStats: function() {
            if (this.storage == null) return;
            var lockTheLevel = this.storage.get('unblock-it-levelStats');
            if (lockTheLevel != null) this.lockLevel = lockTheLevel;
            var cekMovement = this.storage.get('unblock-it-movementStats');
            if (cekMovement != null) this.movementCount = cekMovement;
        },
        startGame: function() {
       
                this.resetPlayerStats();
                if (ig.ua.mobile) {
                    this.director = new ig.Director(this, [LevelOpening, LevelGameplay, LevelLevelEasy]);
                } else {
                    this.director = new ig.Director(this, [LevelOpening, LevelGameplay, LevelLevelEasy]);
                }
            
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }
            this.spawnEntity(EntityPointer, 50, 50);
            if (ig.ua.mobile) {
                if (this.music) {
                    ig.soundHandler.playBackgroundMusic();
                } else {
                    ig.soundHandler.playBackgroundMusic();
                    ig.soundHandler.setForceMutedBgm(true);
                    ig.soundHandler._muteBackgroundMusic();
                }
                if (this.sound) {
                    ig.soundHandler.setForceMutedSfx(false);
                    ig.soundHandler._unMuteSounds();
                } else {
                    ig.soundHandler.setForceMutedSfx(true);
                    ig.soundHandler._muteSounds();
                }
            } else {
                if (this.music) {
                    ig.soundHandler.playBackgroundMusic();
                } else {
                    ig.soundHandler.setForceMutedBgm(true);
                    ig.soundHandler._muteBackgroundMusic();
                }
                if (this.sound) {
                    ig.soundHandler.setForceMutedSfx(false);
                    ig.soundHandler._unMuteSounds();
                } else {
                    ig.soundHandler.setForceMutedSfx(true);
                    ig.soundHandler._muteSounds();
                }
            }
        },
        fpsCount: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
      
                console.log('End game');
                ig.soundHandler.stopBackgroundMusic();
            
        
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null,
            };
        },
        setupControls: function() {
            ig.input.unbindAll();
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, 'click');
        },
        setupURLParameters: function() {
            this.setupURLParameters = new ig.UrlParameters();
        },
        pressPlay: function() {
            this.hideOverlay(['play']);
            this.startGame();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled']) MobileAdInGameFooter.Initialize();
            }
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Header']['Enabled']) MobileAdInGameHeader.Initialize();
            }
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        update: function() {
            if (this.paused) {
                for (var i = 0; i < this.entities.length; i++) {
                    if (this.entities[i].ignorePause) {
                        this.entities[i].update();
                    }
                }
            } else {
                this.parent();
                if (ig.ua.mobile && ig.soundHandler) {
                    ig.soundHandler.forceLoopBGM();
                }
            }
        },
        draw: function() {
          
                this.parent();
            
        },
        drawDebug: function() {
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) {
        
                if (!this.debug) {
                    this.debug = [];
                    this.debugLine = 1;
                    this.debug.push(consoleLog);
                } else {
                    if (this.debug.length < 50) {
                        this.debug.push(consoleLog);
                    } else {
                        this.debug.splice(0, 1);
                        this.debug.push(consoleLog);
                    }
                    this.debugLine++;
                }
                console.log(consoleLog);
            
        },
        debugEnable: function() {
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        },
    });
    var device = getQueryVariable("device");
    if (device) {
        switch (device) {
            case 'mobile':
                console.log('serving mobile version ...');
                ig.ua.mobile = true;
                break;
            case 'desktop':
                console.log('serving desktop version ...');
                ig.ua.mobile = false;
                break;
            default:
                console.log('serving universal version ...');
                break;
        }
    } else {
        console.log('serving universal version ...');
    }
    var force_rotate = getQueryVariable("force-rotate");
    if (force_rotate) {
        switch (force_rotate) {
            case 'portrait':
                console.log('force rotate to portrait');
                window.orientation = 0;
                break;
            case 'landscape':
                console.log('force rotate to horizontal');
                window.orientation = 90;
                break;
            default:
                alert('wrong command/type in param force-rotate. Defaulting value to portrait');
                window.orientation = 0;
        }
    }
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
    } else {
        ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    }
    if (ig.ua.mobile) {
        orientationHandler();
    }
    sizeHandler();
    fixSamsungHandler();
    Array
});