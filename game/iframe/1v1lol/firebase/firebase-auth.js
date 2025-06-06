! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = t || self).firebase)
}(this, function(fl) {
    "use strict";
    try {
        (function() {
            fl = fl && fl.hasOwnProperty("default") ? fl.default : fl,
                function() {
                    var t, o = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
                            t != Array.prototype && t != Object.prototype && (t[e] = n.value)
                        },
                        a = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

                    function c(t) {
                        var e = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
                        return e ? e.call(t) : {
                            next: function(t) {
                                var e = 0;
                                return function() {
                                    return e < t.length ? {
                                        done: !1,
                                        value: t[e++]
                                    } : {
                                        done: !0
                                    }
                                }
                            }(t)
                        }
                    }! function(t, e) {
                        if (e) {
                            var n = a;
                            t = t.split(".");
                            for (var i = 0; i < t.length - 1; i++) {
                                var r = t[i];
                                r in n || (n[r] = {}), n = n[r]
                            }(e = e(i = n[t = t[t.length - 1]])) != i && null != e && o(n, t, {
                                configurable: !0,
                                writable: !0,
                                value: e
                            })
                        }
                    }("Promise", function(t) {
                        function s(t) {
                            this.b = 0, this.c = void 0, this.a = [];
                            var e = this.f();
                            try {
                                t(e.resolve, e.reject)
                            } catch (t) {
                                e.reject(t)
                            }
                        }

                        function e() {
                            this.a = null
                        }

                        function u(e) {
                            return e instanceof s ? e : new s(function(t) {
                                t(e)
                            })
                        }
                        if (t) return t;
                        e.prototype.b = function(t) {
                            if (null == this.a) {
                                this.a = [];
                                var e = this;
                                this.c(function() {
                                    e.g()
                                })
                            }
                            this.a.push(t)
                        };
                        var n = a.setTimeout;
                        e.prototype.c = function(t) {
                            n(t, 0)
                        }, e.prototype.g = function() {
                            for (; this.a && this.a.length;) {
                                var t = this.a;
                                this.a = [];
                                for (var e = 0; e < t.length; ++e) {
                                    var n = t[e];
                                    t[e] = null;
                                    try {
                                        n()
                                    } catch (t) {
                                        this.f(t)
                                    }
                                }
                            }
                            this.a = null
                        }, e.prototype.f = function(t) {
                            this.c(function() {
                                throw t
                            })
                        }, s.prototype.f = function() {
                            function t(e) {
                                return function(t) {
                                    i || (i = !0, e.call(n, t))
                                }
                            }
                            var n = this,
                                i = !1;
                            return {
                                resolve: t(this.m),
                                reject: t(this.g)
                            }
                        }, s.prototype.m = function(t) {
                            if (t === this) this.g(new TypeError("A Promise cannot resolve to itself"));
                            else if (t instanceof s) this.o(t);
                            else {
                                t: switch (typeof t) {
                                    case "object":
                                        var e = null != t;
                                        break t;
                                    case "function":
                                        e = !0;
                                        break t;
                                    default:
                                        e = !1
                                }
                                e ? this.u(t) : this.h(t)
                            }
                        }, s.prototype.u = function(t) {
                            var e = void 0;
                            try {
                                e = t.then
                            } catch (t) {
                                return void this.g(t)
                            }
                            "function" == typeof e ? this.v(e, t) : this.h(t)
                        }, s.prototype.g = function(t) {
                            this.i(2, t)
                        }, s.prototype.h = function(t) {
                            this.i(1, t)
                        }, s.prototype.i = function(t, e) {
                            if (0 != this.b) throw Error("Cannot settle(" + t + ", " + e + "): Promise already settled in state" + this.b);
                            this.b = t, this.c = e, this.l()
                        }, s.prototype.l = function() {
                            if (null != this.a) {
                                for (var t = 0; t < this.a.length; ++t) r.b(this.a[t]);
                                this.a = null
                            }
                        };
                        var r = new e;
                        return s.prototype.o = function(t) {
                            var e = this.f();
                            t.Ja(e.resolve, e.reject)
                        }, s.prototype.v = function(t, e) {
                            var n = this.f();
                            try {
                                t.call(e, n.resolve, n.reject)
                            } catch (t) {
                                n.reject(t)
                            }
                        }, s.prototype.then = function(t, e) {
                            function n(e, t) {
                                return "function" == typeof e ? function(t) {
                                    try {
                                        i(e(t))
                                    } catch (t) {
                                        r(t)
                                    }
                                } : t
                            }
                            var i, r, o = new s(function(t, e) {
                                i = t, r = e
                            });
                            return this.Ja(n(t, i), n(e, r)), o
                        }, s.prototype.catch = function(t) {
                            return this.then(void 0, t)
                        }, s.prototype.Ja = function(t, e) {
                            function n() {
                                switch (i.b) {
                                    case 1:
                                        t(i.c);
                                        break;
                                    case 2:
                                        e(i.c);
                                        break;
                                    default:
                                        throw Error("Unexpected state: " + i.b)
                                }
                            }
                            var i = this;
                            null == this.a ? r.b(n) : this.a.push(n)
                        }, s.resolve = u, s.reject = function(n) {
                            return new s(function(t, e) {
                                e(n)
                            })
                        }, s.race = function(r) {
                            return new s(function(t, e) {
                                for (var n = c(r), i = n.next(); !i.done; i = n.next()) u(i.value).Ja(t, e)
                            })
                        }, s.all = function(t) {
                            var o = c(t),
                                a = o.next();
                            return a.done ? u([]) : new s(function(n, t) {
                                function e(e) {
                                    return function(t) {
                                        i[e] = t, 0 == --r && n(i)
                                    }
                                }
                                for (var i = [], r = 0; i.push(void 0), r++, u(a.value).Ja(e(i.length - 1), t), !(a = o.next()).done;);
                            })
                        }, s
                    });
                    var u = u || {},
                        l = this || self;

                    function h(t) {
                        return "string" == typeof t
                    }

                    function n(t) {
                        return "boolean" == typeof t
                    }
                    var s = /^[\w+/_-]+[=]{0,2}$/,
                        f = null;

                    function d() {}

                    function i(t) {
                        var e = typeof t;
                        if ("object" == e) {
                            if (!t) return "null";
                            if (t instanceof Array) return "array";
                            if (t instanceof Object) return e;
                            var n = Object.prototype.toString.call(t);
                            if ("[object Window]" == n) return "object";
                            if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
                            if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
                        } else if ("function" == e && void 0 === t.call) return "object";
                        return e
                    }

                    function r(t) {
                        return null === t
                    }

                    function p(t) {
                        return "array" == i(t)
                    }

                    function v(t) {
                        var e = i(t);
                        return "array" == e || "object" == e && "number" == typeof t.length
                    }

                    function m(t) {
                        return "function" == i(t)
                    }

                    function g(t) {
                        var e = typeof t;
                        return "object" == e && null != t || "function" == e
                    }
                    var e = "closure_uid_" + (1e9 * Math.random() >>> 0),
                        b = 0;

                    function y(t, e, n) {
                        return t.call.apply(t.bind, arguments)
                    }

                    function w(e, n, t) {
                        if (!e) throw Error();
                        if (2 < arguments.length) {
                            var i = Array.prototype.slice.call(arguments, 2);
                            return function() {
                                var t = Array.prototype.slice.call(arguments);
                                return Array.prototype.unshift.apply(t, i), e.apply(n, t)
                            }
                        }
                        return function() {
                            return e.apply(n, arguments)
                        }
                    }

                    function I(t, e, n) {
                        return (I = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? y : w).apply(null, arguments)
                    }

                    function T(e, t) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            var t = n.slice();
                            return t.push.apply(t, arguments), e.apply(this, t)
                        }
                    }
                    var E = Date.now || function() {
                        return +new Date
                    };

                    function k(t, o) {
                        function e() {}
                        e.prototype = o.prototype, t.qb = o.prototype, t.prototype = new e, (t.prototype.constructor = t).fd = function(t, e, n) {
                            for (var i = Array(arguments.length - 2), r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
                            return o.prototype[e].apply(t, i)
                        }
                    }

                    function A(t) {
                        if (!t) return !1;
                        try {
                            return !!t.$goog_Thenable
                        } catch (t) {
                            return !1
                        }
                    }

                    function S(t) {
                        if (Error.captureStackTrace) Error.captureStackTrace(this, S);
                        else {
                            var e = Error().stack;
                            e && (this.stack = e)
                        }
                        t && (this.message = String(t))
                    }

                    function N(t, e) {
                        for (var n = "", i = (t = t.split("%s")).length - 1, r = 0; r < i; r++) n += t[r] + (r < e.length ? e[r] : "%s");
                        S.call(this, n + t[i])
                    }

                    function O(t, e) {
                        throw new N("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1))
                    }

                    function _(t, e) {
                        this.c = t, this.f = e, this.b = 0, this.a = null
                    }

                    function P(t, e) {
                        t.f(e), t.b < 100 && (t.b++, e.next = t.a, t.a = e)
                    }

                    function R() {
                        this.b = this.a = null
                    }
                    k(S, Error), S.prototype.name = "CustomError", k(N, S), N.prototype.name = "AssertionError", _.prototype.get = function() {
                        if (0 < this.b) {
                            this.b--;
                            var t = this.a;
                            this.a = t.next, t.next = null
                        } else t = this.c();
                        return t
                    };
                    var D = new _(function() {
                        return new C
                    }, function(t) {
                        t.reset()
                    });

                    function C() {
                        this.next = this.b = this.a = null
                    }

                    function L(t, e) {
                        t: {
                            try {
                                var n = t && t.ownerDocument,
                                    i = n && (n.defaultView || n.parentWindow);
                                if ((i = i || l).Element && i.Location) {
                                    var r = i;
                                    break t
                                }
                            } catch (t) {}
                            r = null
                        }
                        if (r && void 0 !== r[e] && (!t || !(t instanceof r[e]) && (t instanceof r.Location || t instanceof r.Element))) {
                            if (g(t)) try {
                                var o = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t)
                            } catch (t) {
                                o = "<object could not be stringified>"
                            } else o = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
                            O("Argument is not a %s (or a non-Element, non-Location mock); got: %s", e, o)
                        }
                    }
                    R.prototype.add = function(t, e) {
                        var n = D.get();
                        n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
                    }, C.prototype.set = function(t, e) {
                        this.a = t, this.b = e, this.next = null
                    }, C.prototype.reset = function() {
                        this.next = this.b = this.a = null
                    };
                    var x = Array.prototype.indexOf ? function(t, e) {
                            return Array.prototype.indexOf.call(t, e, void 0)
                        } : function(t, e) {
                            if (h(t)) return h(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
                            for (var n = 0; n < t.length; n++)
                                if (n in t && t[n] === e) return n;
                            return -1
                        },
                        M = Array.prototype.forEach ? function(t, e, n) {
                            Array.prototype.forEach.call(t, e, n)
                        } : function(t, e, n) {
                            for (var i = t.length, r = h(t) ? t.split("") : t, o = 0; o < i; o++) o in r && e.call(n, r[o], o, t)
                        };
                    var j = Array.prototype.map ? function(t, e) {
                            return Array.prototype.map.call(t, e, void 0)
                        } : function(t, e) {
                            for (var n = t.length, i = Array(n), r = h(t) ? t.split("") : t, o = 0; o < n; o++) o in r && (i[o] = e.call(void 0, r[o], o, t));
                            return i
                        },
                        U = Array.prototype.some ? function(t, e) {
                            return Array.prototype.some.call(t, e, void 0)
                        } : function(t, e) {
                            for (var n = t.length, i = h(t) ? t.split("") : t, r = 0; r < n; r++)
                                if (r in i && e.call(void 0, i[r], r, t)) return !0;
                            return !1
                        };

                    function V(t, e) {
                        return 0 <= x(t, e)
                    }

                    function F(t, e) {
                        var n;
                        return (n = 0 <= (e = x(t, e))) && Array.prototype.splice.call(t, e, 1), n
                    }

                    function K(n, i) {
                        ! function(t, e) {
                            for (var n = h(t) ? t.split("") : t, i = t.length - 1; 0 <= i; --i) i in n && e.call(void 0, n[i], i, t)
                        }(n, function(t, e) {
                            i.call(void 0, t, e, n) && 1 == Array.prototype.splice.call(n, e, 1).length && 0
                        })
                    }

                    function q(t) {
                        return Array.prototype.concat.apply([], arguments)
                    }

                    function H(t) {
                        var e = t.length;
                        if (0 < e) {
                            for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i];
                            return n
                        }
                        return []
                    }

                    function B(t, e) {
                        for (var n in t) e.call(void 0, t[n], n, t)
                    }

                    function G(t) {
                        for (var e in t) return !1;
                        return !0
                    }

                    function W(t) {
                        var e, n = {};
                        for (e in t) n[e] = t[e];
                        return n
                    }
                    var X = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

                    function J(t, e) {
                        for (var n, i, r = 1; r < arguments.length; r++) {
                            for (n in i = arguments[r]) t[n] = i[n];
                            for (var o = 0; o < X.length; o++) n = X[o], Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                        }
                    }

                    function Y(t, e) {
                        this.a = t === Z && e || "", this.b = $
                    }

                    function z(t) {
                        return t instanceof Y && t.constructor === Y && t.b === $ ? t.a : (O("expected object of type Const, got '" + t + "'"), "type_error:Const")
                    }
                    Y.prototype.qa = !0, Y.prototype.pa = function() {
                        return this.a
                    }, Y.prototype.toString = function() {
                        return "Const{" + this.a + "}"
                    };
                    var $ = {},
                        Z = {},
                        Q = new Y(Z, "");

                    function tt() {
                        this.a = "", this.b = ot
                    }

                    function et(t) {
                        return t instanceof tt && t.constructor === tt && t.b === ot ? t.a : (O("expected object of type TrustedResourceUrl, got '" + t + "' of type " + i(t)), "type_error:TrustedResourceUrl")
                    }

                    function nt(t, n) {
                        var i = z(t);
                        if (!rt.test(i)) throw Error("Invalid TrustedResourceUrl format: " + i);
                        return at(t = i.replace(it, function(t, e) {
                            if (!Object.prototype.hasOwnProperty.call(n, e)) throw Error('Found marker, "' + e + '", in format string, "' + i + '", but no valid label mapping found in args: ' + JSON.stringify(n));
                            return (t = n[e]) instanceof Y ? z(t) : encodeURIComponent(String(t))
                        }))
                    }
                    tt.prototype.qa = !0, tt.prototype.pa = function() {
                        return this.a.toString()
                    }, tt.prototype.toString = function() {
                        return "TrustedResourceUrl{" + this.a + "}"
                    };
                    var it = /%{(\w+)}/g,
                        rt = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
                        ot = {};

                    function at(t) {
                        var e = new tt;
                        return e.a = t, e
                    }
                    var st = String.prototype.trim ? function(t) {
                            return t.trim()
                        } : function(t) {
                            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
                        },
                        ut = /&/g,
                        ct = /</g,
                        ht = />/g,
                        lt = /"/g,
                        ft = /'/g,
                        dt = /\x00/g,
                        pt = /[\x00&<>"']/;

                    function vt(t, e) {
                        return -1 != t.indexOf(e)
                    }

                    function mt(t, e) {
                        return t < e ? -1 : e < t ? 1 : 0
                    }

                    function gt() {
                        this.a = "", this.b = Tt
                    }

                    function bt(t) {
                        return t instanceof gt && t.constructor === gt && t.b === Tt ? t.a : (O("expected object of type SafeUrl, got '" + t + "' of type " + i(t)), "type_error:SafeUrl")
                    }
                    gt.prototype.qa = !0, gt.prototype.pa = function() {
                        return this.a.toString()
                    }, gt.prototype.toString = function() {
                        return "SafeUrl{" + this.a + "}"
                    };
                    var yt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

                    function wt(t) {
                        return t instanceof gt ? t : (t = "object" == typeof t && t.qa ? t.pa() : String(t), yt.test(t) || (t = "about:invalid#zClosurez"), Et(t))
                    }
                    var It, Tt = {};

                    function Et(t) {
                        var e = new gt;
                        return e.a = t, e
                    }
                    Et("about:blank");
                    t: {
                        var kt = l.navigator;
                        if (kt) {
                            var At = kt.userAgent;
                            if (At) {
                                It = At;
                                break t
                            }
                        }
                        It = ""
                    }

                    function St(t) {
                        return vt(It, t)
                    }

                    function Nt() {
                        this.a = "", this.b = _t
                    }

                    function Ot(t) {
                        return t instanceof Nt && t.constructor === Nt && t.b === _t ? t.a : (O("expected object of type SafeHtml, got '" + t + "' of type " + i(t)), "type_error:SafeHtml")
                    }
                    Nt.prototype.qa = !0, Nt.prototype.pa = function() {
                        return this.a.toString()
                    }, Nt.prototype.toString = function() {
                        return "SafeHtml{" + this.a + "}"
                    };
                    var _t = {};

                    function Pt(t) {
                        var e = new Nt;
                        return e.a = t, e
                    }
                    Pt("<!DOCTYPE html>");
                    var Rt, Dt, Ct = Pt("");

                    function Lt(t, e) {
                        for (var n = t.split("%s"), i = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < n.length;) i += n.shift() + r.shift();
                        return i + n.join("%s")
                    }

                    function xt(t) {
                        return pt.test(t) && (-1 != t.indexOf("&") && (t = t.replace(ut, "&amp;")), -1 != t.indexOf("<") && (t = t.replace(ct, "&lt;")), -1 != t.indexOf(">") && (t = t.replace(ht, "&gt;")), -1 != t.indexOf('"') && (t = t.replace(lt, "&quot;")), -1 != t.indexOf("'") && (t = t.replace(ft, "&#39;")), -1 != t.indexOf("\0") && (t = t.replace(dt, "&#0;"))), t
                    }

                    function Mt(t) {
                        l.setTimeout(function() {
                            throw t
                        }, 0)
                    }

                    function jt() {
                        var t = l.MessageChannel;
                        if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !St("Presto") && (t = function() {
                                var t = document.createElement("IFRAME");
                                t.style.display = "none",
                                    function(t) {
                                        var e = at(z(Q));
                                        L(t, "HTMLIFrameElement"), t.src = et(e).toString()
                                    }(t), document.documentElement.appendChild(t);
                                var e = t.contentWindow;
                                (t = e.document).open(), t.write(Ot(Ct)), t.close();
                                var n = "callImmediate" + Math.random(),
                                    i = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
                                t = I(function(t) {
                                    "*" != i && t.origin != i || t.data != n || this.port1.onmessage()
                                }, this), e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = {
                                    postMessage: function() {
                                        e.postMessage(n, i)
                                    }
                                }
                            }), void 0 === t || St("Trident") || St("MSIE")) return "undefined" != typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(t) {
                            var e = document.createElement("SCRIPT");
                            e.onreadystatechange = function() {
                                e.onreadystatechange = null, e.parentNode.removeChild(e), e = null, t(), t = null
                            }, document.documentElement.appendChild(e)
                        } : function(t) {
                            l.setTimeout(t, 0)
                        };
                        var e = new t,
                            n = {},
                            i = n;
                        return e.port1.onmessage = function() {
                                if (void 0 !== n.next) {
                                    var t = (n = n.next).yb;
                                    n.yb = null, t()
                                }
                            },
                            function(t) {
                                i.next = {
                                    yb: t
                                }, i = i.next, e.port2.postMessage(0)
                            }
                    }

                    function Ut(t, e) {
                        Dt || function() {
                            if (l.Promise && l.Promise.resolve) {
                                var t = l.Promise.resolve(void 0);
                                Dt = function() {
                                    t.then(Kt)
                                }
                            } else Dt = function() {
                                var t = Kt;
                                !m(l.setImmediate) || l.Window && l.Window.prototype && !St("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Rt = Rt || jt())(t) : l.setImmediate(t)
                            }
                        }(), Vt || (Dt(), Vt = !0), Ft.add(t, e)
                    }
                    Pt("<br>");
                    var Vt = !1,
                        Ft = new R;

                    function Kt() {
                        for (var t; n = e = void 0, n = null, (e = Ft).a && (n = e.a, e.a = e.a.next, e.a || (e.b = null), n.next = null), t = n;) {
                            try {
                                t.a.call(t.b)
                            } catch (t) {
                                Mt(t)
                            }
                            P(D, t)
                        }
                        var e, n;
                        Vt = !1
                    }

                    function qt(t, e) {
                        if (this.a = Ht, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != d) try {
                            var n = this;
                            t.call(e, function(t) {
                                ee(n, Bt, t)
                            }, function(t) {
                                if (!(t instanceof ue)) try {
                                    if (t instanceof Error) throw t;
                                    throw Error("Promise rejected.")
                                } catch (t) {}
                                ee(n, Gt, t)
                            })
                        } catch (t) {
                            ee(this, Gt, t)
                        }
                    }
                    var Ht = 0,
                        Bt = 2,
                        Gt = 3;

                    function Wt() {
                        this.next = this.f = this.b = this.g = this.a = null, this.c = !1
                    }
                    Wt.prototype.reset = function() {
                        this.f = this.b = this.g = this.a = null, this.c = !1
                    };
                    var Xt = new _(function() {
                        return new Wt
                    }, function(t) {
                        t.reset()
                    });

                    function Jt(t, e, n) {
                        var i = Xt.get();
                        return i.g = t, i.b = e, i.f = n, i
                    }

                    function Yt(t) {
                        if (t instanceof qt) return t;
                        var e = new qt(d);
                        return ee(e, Bt, t), e
                    }

                    function zt(n) {
                        return new qt(function(t, e) {
                            e(n)
                        })
                    }

                    function $t(t, e, n) {
                        ne(t, e, n, null) || Ut(T(e, t))
                    }

                    function Zt(n) {
                        return new qt(function(i) {
                            var r = n.length,
                                o = [];
                            if (r)
                                for (var t = function(t, e, n) {
                                        r--, o[t] = e ? {
                                            Gb: !0,
                                            value: n
                                        } : {
                                            Gb: !1,
                                            reason: n
                                        }, 0 == r && i(o)
                                    }, e = 0; e < n.length; e++) $t(n[e], T(t, e, !0), T(t, e, !1));
                            else i(o)
                        })
                    }

                    function Qt(t, e) {
                        t.b || t.a != Bt && t.a != Gt || ie(t), t.f ? t.f.next = e : t.b = e, t.f = e
                    }

                    function te(t, r, o, a) {
                        var e = Jt(null, null, null);
                        return e.a = new qt(function(n, i) {
                            e.g = r ? function(t) {
                                try {
                                    var e = r.call(a, t);
                                    n(e)
                                } catch (t) {
                                    i(t)
                                }
                            } : n, e.b = o ? function(t) {
                                try {
                                    var e = o.call(a, t);
                                    void 0 === e && t instanceof ue ? i(t) : n(e)
                                } catch (t) {
                                    i(t)
                                }
                            } : i
                        }), Qt(e.a.c = t, e), e.a
                    }

                    function ee(t, e, n) {
                        t.a == Ht && (t === n && (e = Gt, n = new TypeError("Promise cannot resolve to itself")), t.a = 1, ne(n, t.Oc, t.Pc, t) || (t.i = n, t.a = e, t.c = null, ie(t), e != Gt || n instanceof ue || function(t, e) {
                            t.g = !0, Ut(function() {
                                t.g && se.call(null, e)
                            })
                        }(t, n)))
                    }

                    function ne(t, e, n, i) {
                        if (t instanceof qt) return Qt(t, Jt(e || d, n || null, i)), !0;
                        if (A(t)) return t.then(e, n, i), !0;
                        if (g(t)) try {
                            var r = t.then;
                            if (m(r)) return function(t, e, n, i, r) {
                                function o(t) {
                                    a || (a = !0, i.call(r, t))
                                }
                                var a = !1;
                                try {
                                    e.call(t, function(t) {
                                        a || (a = !0, n.call(r, t))
                                    }, o)
                                } catch (t) {
                                    o(t)
                                }
                            }(t, r, e, n, i), !0
                        } catch (t) {
                            return n.call(i, t), !0
                        }
                        return !1
                    }

                    function ie(t) {
                        t.h || (t.h = !0, Ut(t.Zb, t))
                    }

                    function re(t) {
                        var e = null;
                        return t.b && (e = t.b, t.b = e.next, e.next = null), t.b || (t.f = null), e
                    }

                    function oe(t, e, n, i) {
                        if (n == Gt && e.b && !e.c)
                            for (; t && t.g; t = t.c) t.g = !1;
                        if (e.a) e.a.c = null, ae(e, n, i);
                        else try {
                            e.c ? e.g.call(e.f) : ae(e, n, i)
                        } catch (t) {
                            se.call(null, t)
                        }
                        P(Xt, e)
                    }

                    function ae(t, e, n) {
                        e == Bt ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n)
                    }
                    qt.prototype.then = function(t, e, n) {
                        return te(this, m(t) ? t : null, m(e) ? e : null, n)
                    }, qt.prototype.$goog_Thenable = !0, (t = qt.prototype).ka = function(t, e) {
                        return (t = Jt(t, t, e)).c = !0, Qt(this, t), this
                    }, t.s = function(t, e) {
                        return te(this, null, t, e)
                    }, t.cancel = function(t) {
                        this.a == Ht && Ut(function() {
                            ! function t(e, n) {
                                if (e.a == Ht)
                                    if (e.c) {
                                        var i = e.c;
                                        if (i.b) {
                                            for (var r = 0, o = null, a = null, s = i.b; s && (s.c || (r++, s.a == e && (o = s), !(o && 1 < r))); s = s.next) o || (a = s);
                                            o && (i.a == Ht && 1 == r ? t(i, n) : (a ? ((r = a).next == i.f && (i.f = r), r.next = r.next.next) : re(i), oe(i, o, Gt, n)))
                                        }
                                        e.c = null
                                    } else ee(e, Gt, n)
                            }(this, new ue(t))
                        }, this)
                    }, t.Oc = function(t) {
                        this.a = Ht, ee(this, Bt, t)
                    }, t.Pc = function(t) {
                        this.a = Ht, ee(this, Gt, t)
                    }, t.Zb = function() {
                        for (var t; t = re(this);) oe(this, t, this.a, this.i);
                        this.h = !1
                    };
                    var se = Mt;

                    function ue(t) {
                        S.call(this, t)
                    }

                    function ce() {
                        this.ta = this.ta, this.la = this.la
                    }
                    k(ue, S);
                    var he = 0;

                    function le(t) {
                        if (!t.ta && (t.ta = !0, t.xa(), 0 != he)) t[e] || (t[e] = ++b)
                    }

                    function fe(t) {
                        return fe[" "](t), t
                    }
                    ce.prototype.ta = !(ue.prototype.name = "cancel"), ce.prototype.xa = function() {
                        if (this.la)
                            for (; this.la.length;) this.la.shift()()
                    }, fe[" "] = d;
                    var de, pe, ve = St("Opera"),
                        me = St("Trident") || St("MSIE"),
                        ge = St("Edge"),
                        be = ge || me,
                        ye = St("Gecko") && !(vt(It.toLowerCase(), "webkit") && !St("Edge")) && !(St("Trident") || St("MSIE")) && !St("Edge"),
                        we = vt(It.toLowerCase(), "webkit") && !St("Edge");

                    function Ie() {
                        var t = l.document;
                        return t ? t.documentMode : void 0
                    }
                    t: {
                        var Te = "",
                            Ee = (pe = It, ye ? /rv:([^\);]+)(\)|;)/.exec(pe) : ge ? /Edge\/([\d\.]+)/.exec(pe) : me ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(pe) : we ? /WebKit\/(\S+)/.exec(pe) : ve ? /(?:Version)[ \/]?(\S+)/.exec(pe) : void 0);
                        if (Ee && (Te = Ee ? Ee[1] : ""), me) {
                            var ke = Ie();
                            if (null != ke && ke > parseFloat(Te)) {
                                de = String(ke);
                                break t
                            }
                        }
                        de = Te
                    }
                    var Ae, Se = {};

                    function Ne(s) {
                        return function(t, e) {
                            var n = Se;
                            return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t)
                        }(s, function() {
                            for (var t = 0, e = st(String(de)).split("."), n = st(String(s)).split("."), i = Math.max(e.length, n.length), r = 0; 0 == t && r < i; r++) {
                                var o = e[r] || "",
                                    a = n[r] || "";
                                do {
                                    if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], 0 == o[0].length && 0 == a[0].length) break;
                                    t = mt(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || mt(0 == o[2].length, 0 == a[2].length) || mt(o[2], a[2]), o = o[3], a = a[3]
                                } while (0 == t)
                            }
                            return 0 <= t
                        })
                    }
                    Ae = l.document && me ? Ie() : void 0;
                    var Oe = Object.freeze || function(t) {
                            return t
                        },
                        _e = !me || 9 <= Number(Ae),
                        Pe = me && !Ne("9"),
                        Re = function() {
                            if (!l.addEventListener || !Object.defineProperty) return !1;
                            var t = !1,
                                e = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        t = !0
                                    }
                                });
                            try {
                                l.addEventListener("test", d, e), l.removeEventListener("test", d, e)
                            } catch (t) {}
                            return t
                        }();

                    function De(t, e) {
                        this.type = t, this.b = this.target = e, this.Mb = !0
                    }

                    function Ce(t, e) {
                        if (De.call(this, t ? t.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, t) {
                            var n = this.type = t.type,
                                i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                            if (this.target = t.target || t.srcElement, this.b = e, e = t.relatedTarget) {
                                if (ye) {
                                    t: {
                                        try {
                                            fe(e.nodeName);
                                            var r = !0;
                                            break t
                                        } catch (t) {}
                                        r = !1
                                    }
                                    r || (e = null)
                                }
                            } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                            this.relatedTarget = e, i ? (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX, this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY, this.screenX = i.screenX || 0, this.screenY = i.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = h(t.pointerType) ? t.pointerType : Le[t.pointerType] || "", (this.a = t).defaultPrevented && this.preventDefault()
                        }
                    }
                    De.prototype.preventDefault = function() {
                        this.Mb = !1
                    }, k(Ce, De);
                    var Le = Oe({
                        2: "touch",
                        3: "pen",
                        4: "mouse"
                    });
                    Ce.prototype.preventDefault = function() {
                        Ce.qb.preventDefault.call(this);
                        var t = this.a;
                        if (t.preventDefault) t.preventDefault();
                        else if (t.returnValue = !1, Pe) try {
                            (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1)
                        } catch (t) {}
                    }, Ce.prototype.f = function() {
                        return this.a
                    };
                    var xe = "closure_listenable_" + (1e6 * Math.random() | 0),
                        Me = 0;

                    function je(t, e, n, i, r) {
                        this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!i, this.Na = r, this.key = ++Me, this.ra = this.Ia = !1
                    }

                    function Ue(t) {
                        t.ra = !0, t.listener = null, t.proxy = null, t.src = null, t.Na = null
                    }

                    function Ve(t) {
                        this.src = t, this.a = {}, this.b = 0
                    }

                    function Fe(t, e) {
                        var n = e.type;
                        n in t.a && F(t.a[n], e) && (Ue(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
                    }

                    function Ke(t, e, n, i) {
                        for (var r = 0; r < t.length; ++r) {
                            var o = t[r];
                            if (!o.ra && o.listener == e && o.capture == !!n && o.Na == i) return r
                        }
                        return -1
                    }
                    Ve.prototype.add = function(t, e, n, i, r) {
                        var o = t.toString();
                        (t = this.a[o]) || (t = this.a[o] = [], this.b++);
                        var a = Ke(t, e, i, r);
                        return -1 < a ? (e = t[a], n || (e.Ia = !1)) : ((e = new je(e, this.src, o, !!i, r)).Ia = n, t.push(e)), e
                    };
                    var qe = "closure_lm_" + (1e6 * Math.random() | 0),
                        He = {};

                    function Be(t, e, n, i, r) {
                        if (i && i.once) We(t, e, n, i, r);
                        else if (p(e))
                            for (var o = 0; o < e.length; o++) Be(t, e[o], n, i, r);
                        else n = en(n), t && t[xe] ? rn(t, e, n, g(i) ? !!i.capture : !!i, r) : Ge(t, e, n, !1, i, r)
                    }

                    function Ge(t, e, n, i, r, o) {
                        if (!e) throw Error("Invalid event type");
                        var a = g(r) ? !!r.capture : !!r,
                            s = Qe(t);
                        if (s || (t[qe] = s = new Ve(t)), !(n = s.add(e, n, i, a, o)).proxy)
                            if (i = function() {
                                    var e = Ze,
                                        n = _e ? function(t) {
                                            return e.call(n.src, n.listener, t)
                                        } : function(t) {
                                            if (!(t = e.call(n.src, n.listener, t))) return t
                                        };
                                    return n
                                }(), (n.proxy = i).src = t, i.listener = n, t.addEventListener) Re || (r = a), void 0 === r && (r = !1), t.addEventListener(e.toString(), i, r);
                            else if (t.attachEvent) t.attachEvent(Ye(e.toString()), i);
                        else {
                            if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                            t.addListener(i)
                        }
                    }

                    function We(t, e, n, i, r) {
                        if (p(e))
                            for (var o = 0; o < e.length; o++) We(t, e[o], n, i, r);
                        else n = en(n), t && t[xe] ? on(t, e, n, g(i) ? !!i.capture : !!i, r) : Ge(t, e, n, !0, i, r)
                    }

                    function Xe(t, e, n, i, r) {
                        if (p(e))
                            for (var o = 0; o < e.length; o++) Xe(t, e[o], n, i, r);
                        else i = g(i) ? !!i.capture : !!i, n = en(n), t && t[xe] ? (t = t.u, (e = String(e).toString()) in t.a && (-1 < (n = Ke(o = t.a[e], n, i, r)) && (Ue(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))) : (t = t && Qe(t)) && (e = t.a[e.toString()], t = -1, e && (t = Ke(e, n, i, r)), (n = -1 < t ? e[t] : null) && Je(n))
                    }

                    function Je(t) {
                        if ("number" != typeof t && t && !t.ra) {
                            var e = t.src;
                            if (e && e[xe]) Fe(e.u, t);
                            else {
                                var n = t.type,
                                    i = t.proxy;
                                e.removeEventListener ? e.removeEventListener(n, i, t.capture) : e.detachEvent ? e.detachEvent(Ye(n), i) : e.addListener && e.removeListener && e.removeListener(i), (n = Qe(e)) ? (Fe(n, t), 0 == n.b && (n.src = null, e[qe] = null)) : Ue(t)
                            }
                        }
                    }

                    function Ye(t) {
                        return t in He ? He[t] : He[t] = "on" + t
                    }

                    function ze(t, e, n, i) {
                        var r = !0;
                        if ((t = Qe(t)) && (e = t.a[e.toString()]))
                            for (e = e.concat(), t = 0; t < e.length; t++) {
                                var o = e[t];
                                o && o.capture == n && !o.ra && (o = $e(o, i), r = r && !1 !== o)
                            }
                        return r
                    }

                    function $e(t, e) {
                        var n = t.listener,
                            i = t.Na || t.src;
                        return t.Ia && Je(t), n.call(i, e)
                    }

                    function Ze(t, e) {
                        if (t.ra) return !0;
                        if (_e) return $e(t, new Ce(e, this));
                        if (!e) t: {
                            e = ["window", "event"];
                            for (var n = l, i = 0; i < e.length; i++)
                                if (null == (n = n[e[i]])) {
                                    e = null;
                                    break t
                                }
                            e = n
                        }
                        if (e = new Ce(i = e, this), n = !0, !(i.keyCode < 0 || null != i.returnValue)) {
                            t: {
                                var r = !1;
                                if (0 == i.keyCode) try {
                                    i.keyCode = -1;
                                    break t
                                } catch (t) {
                                    r = !0
                                }!r && null != i.returnValue || (i.returnValue = !0)
                            }
                            for (i = [], r = e.b; r; r = r.parentNode) i.push(r);
                            for (t = t.type, r = i.length - 1; 0 <= r; r--) {
                                e.b = i[r];
                                var o = ze(i[r], t, !0, e);
                                n = n && o
                            }
                            for (r = 0; r < i.length; r++) e.b = i[r],
                            o = ze(i[r], t, !1, e),
                            n = n && o
                        }
                        return n
                    }

                    function Qe(t) {
                        return (t = t[qe]) instanceof Ve ? t : null
                    }
                    var tn = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

                    function en(e) {
                        return m(e) ? e : (e[tn] || (e[tn] = function(t) {
                            return e.handleEvent(t)
                        }), e[tn])
                    }

                    function nn() {
                        ce.call(this), this.u = new Ve(this), (this.Sb = this).Wa = null
                    }

                    function rn(t, e, n, i, r) {
                        t.u.add(String(e), n, !1, i, r)
                    }

                    function on(t, e, n, i, r) {
                        t.u.add(String(e), n, !0, i, r)
                    }

                    function an(t, e, n, i) {
                        if (!(e = t.u.a[String(e)])) return !0;
                        e = e.concat();
                        for (var r = !0, o = 0; o < e.length; ++o) {
                            var a = e[o];
                            if (a && !a.ra && a.capture == n) {
                                var s = a.listener,
                                    u = a.Na || a.src;
                                a.Ia && Fe(t.u, a), r = !1 !== s.call(u, i) && r
                            }
                        }
                        return r && 0 != i.Mb
                    }

                    function sn(t, e, n) {
                        if (m(t)) n && (t = I(t, n));
                        else {
                            if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                            t = I(t.handleEvent, t)
                        }
                        return 2147483647 < Number(e) ? -1 : l.setTimeout(t, e || 0)
                    }

                    function un(n) {
                        var i = null;
                        return new qt(function(t, e) {
                            -1 == (i = sn(function() {
                                t(void 0)
                            }, n)) && e(Error("Failed to schedule timer."))
                        }).s(function(t) {
                            throw l.clearTimeout(i), t
                        })
                    }

                    function cn(t) {
                        if (t.U && "function" == typeof t.U) return t.U();
                        if (h(t)) return t.split("");
                        if (v(t)) {
                            for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
                            return e
                        }
                        for (i in e = [], n = 0, t) e[n++] = t[i];
                        return e
                    }

                    function hn(t) {
                        if (t.X && "function" == typeof t.X) return t.X();
                        if (!t.U || "function" != typeof t.U) {
                            if (v(t) || h(t)) {
                                var e = [];
                                t = t.length;
                                for (var n = 0; n < t; n++) e.push(n);
                                return e
                            }
                            for (var i in e = [], n = 0, t) e[n++] = i;
                            return e
                        }
                    }

                    function ln(t, e) {
                        this.b = {}, this.a = [], this.c = 0;
                        var n = arguments.length;
                        if (1 < n) {
                            if (n % 2) throw Error("Uneven number of arguments");
                            for (var i = 0; i < n; i += 2) this.set(arguments[i], arguments[i + 1])
                        } else if (t)
                            if (t instanceof ln)
                                for (n = t.X(), i = 0; i < n.length; i++) this.set(n[i], t.get(n[i]));
                            else
                                for (i in t) this.set(i, t[i])
                    }

                    function fn(t) {
                        if (t.c != t.a.length) {
                            for (var e = 0, n = 0; e < t.a.length;) {
                                var i = t.a[e];
                                dn(t.b, i) && (t.a[n++] = i), e++
                            }
                            t.a.length = n
                        }
                        if (t.c != t.a.length) {
                            var r = {};
                            for (n = e = 0; e < t.a.length;) dn(r, i = t.a[e]) || (r[t.a[n++] = i] = 1), e++;
                            t.a.length = n
                        }
                    }

                    function dn(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }
                    k(nn, ce), nn.prototype[xe] = !0, nn.prototype.addEventListener = function(t, e, n, i) {
                        Be(this, t, e, n, i)
                    }, nn.prototype.removeEventListener = function(t, e, n, i) {
                        Xe(this, t, e, n, i)
                    }, nn.prototype.dispatchEvent = function(t) {
                        var e, n = this.Wa;
                        if (n)
                            for (e = []; n; n = n.Wa) e.push(n);
                        n = this.Sb;
                        var i = t.type || t;
                        if (h(t)) t = new De(t, n);
                        else if (t instanceof De) t.target = t.target || n;
                        else {
                            var r = t;
                            J(t = new De(i, n), r)
                        }
                        if (r = !0, e)
                            for (var o = e.length - 1; 0 <= o; o--) {
                                var a = t.b = e[o];
                                r = an(a, i, !0, t) && r
                            }
                        if (r = an(a = t.b = n, i, !0, t) && r, r = an(a, i, !1, t) && r, e)
                            for (o = 0; o < e.length; o++) r = an(a = t.b = e[o], i, !1, t) && r;
                        return r
                    }, nn.prototype.xa = function() {
                        if (nn.qb.xa.call(this), this.u) {
                            var t, e = this.u;
                            for (t in e.a) {
                                for (var n = e.a[t], i = 0; i < n.length; i++) Ue(n[i]);
                                delete e.a[t], e.b--
                            }
                        }
                        this.Wa = null
                    }, (t = ln.prototype).U = function() {
                        fn(this);
                        for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
                        return t
                    }, t.X = function() {
                        return fn(this), this.a.concat()
                    }, t.clear = function() {
                        this.b = {}, this.c = this.a.length = 0
                    }, t.get = function(t, e) {
                        return dn(this.b, t) ? this.b[t] : e
                    }, t.set = function(t, e) {
                        dn(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e
                    }, t.forEach = function(t, e) {
                        for (var n = this.X(), i = 0; i < n.length; i++) {
                            var r = n[i],
                                o = this.get(r);
                            t.call(e, o, r, this)
                        }
                    };
                    var pn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

                    function vn(t, e) {
                        var n;
                        this.b = this.i = this.f = "", this.l = null, this.g = this.c = "", this.h = !1, t instanceof vn ? (this.h = void 0 !== e ? e : t.h, mn(this, t.f), this.i = t.i, this.b = t.b, gn(this, t.l), this.c = t.c, bn(this, jn(t.a)), this.g = t.g) : t && (n = String(t).match(pn)) ? (this.h = !!e, mn(this, n[1] || "", !0), this.i = En(n[2] || ""), this.b = En(n[3] || "", !0), gn(this, n[4]), this.c = En(n[5] || "", !0), bn(this, n[6] || "", !0), this.g = En(n[7] || "")) : (this.h = !!e, this.a = new Rn(null, this.h))
                    }

                    function mn(t, e, n) {
                        t.f = n ? En(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, ""))
                    }

                    function gn(t, e) {
                        if (e) {
                            if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
                            t.l = e
                        } else t.l = null
                    }

                    function bn(t, e, n) {
                        e instanceof Rn ? (t.a = e, function(t, e) {
                            e && !t.f && (Dn(t), t.c = null, t.a.forEach(function(t, e) {
                                var n = e.toLowerCase();
                                e != n && (Ln(this, e), Mn(this, n, t))
                            }, t)), t.f = e
                        }(t.a, t.h)) : (n || (e = kn(e, _n)), t.a = new Rn(e, t.h))
                    }

                    function yn(t, e, n) {
                        t.a.set(e, n)
                    }

                    function wn(t, e) {
                        return t.a.get(e)
                    }

                    function In(t) {
                        return t instanceof vn ? new vn(t) : new vn(t, void 0)
                    }

                    function Tn(t, e) {
                        var n = new vn(null, void 0);
                        return mn(n, "https"), t && (n.b = t), e && (n.c = e), n
                    }

                    function En(t, e) {
                        return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
                    }

                    function kn(t, e, n) {
                        return h(t) ? (t = encodeURI(t).replace(e, An), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
                    }

                    function An(t) {
                        return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
                    }
                    vn.prototype.toString = function() {
                        var t = [],
                            e = this.f;
                        e && t.push(kn(e, Sn, !0), ":");
                        var n = this.b;
                        return !n && "file" != e || (t.push("//"), (e = this.i) && t.push(kn(e, Sn, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.l) && t.push(":", String(n))), (n = this.c) && (this.b && "/" != n.charAt(0) && t.push("/"), t.push(kn(n, "/" == n.charAt(0) ? On : Nn, !0))), (n = this.a.toString()) && t.push("?", n), (n = this.g) && t.push("#", kn(n, Pn)), t.join("")
                    }, vn.prototype.resolve = function(t) {
                        var e = new vn(this),
                            n = !!t.f;
                        n ? mn(e, t.f) : n = !!t.i, n ? e.i = t.i : n = !!t.b, n ? e.b = t.b : n = null != t.l;
                        var i = t.c;
                        if (n) gn(e, t.l);
                        else if (n = !!t.c) {
                            if ("/" != i.charAt(0))
                                if (this.b && !this.c) i = "/" + i;
                                else {
                                    var r = e.c.lastIndexOf("/"); - 1 != r && (i = e.c.substr(0, r + 1) + i)
                                }
                            if (".." == (r = i) || "." == r) i = "";
                            else if (vt(r, "./") || vt(r, "/.")) {
                                i = 0 == r.lastIndexOf("/", 0), r = r.split("/");
                                for (var o = [], a = 0; a < r.length;) {
                                    var s = r[a++];
                                    "." == s ? i && a == r.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), i && a == r.length && o.push("")) : (o.push(s), i = !0)
                                }
                                i = o.join("/")
                            } else i = r
                        }
                        return n ? e.c = i : n = "" !== t.a.toString(), n ? bn(e, jn(t.a)) : n = !!t.g, n && (e.g = t.g), e
                    };
                    var Sn = /[#\/\?@]/g,
                        Nn = /[#\?:]/g,
                        On = /[#\?]/g,
                        _n = /[#\?@]/g,
                        Pn = /#/g;

                    function Rn(t, e) {
                        this.b = this.a = null, this.c = t || null, this.f = !!e
                    }

                    function Dn(n) {
                        n.a || (n.a = new ln, n.b = 0, n.c && function(t, e) {
                            if (t) {
                                t = t.split("&");
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n].indexOf("="),
                                        r = null;
                                    if (0 <= i) {
                                        var o = t[n].substring(0, i);
                                        r = t[n].substring(i + 1)
                                    } else o = t[n];
                                    e(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "")
                                }
                            }
                        }(n.c, function(t, e) {
                            n.add(decodeURIComponent(t.replace(/\+/g, " ")), e)
                        }))
                    }

                    function Cn(t) {
                        var e = hn(t);
                        if (void 0 === e) throw Error("Keys are undefined");
                        var n = new Rn(null, void 0);
                        t = cn(t);
                        for (var i = 0; i < e.length; i++) {
                            var r = e[i],
                                o = t[i];
                            p(o) ? Mn(n, r, o) : n.add(r, o)
                        }
                        return n
                    }

                    function Ln(t, e) {
                        Dn(t), e = Un(t, e), dn(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, dn((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && fn(t)))
                    }

                    function xn(t, e) {
                        return Dn(t), e = Un(t, e), dn(t.a.b, e)
                    }

                    function Mn(t, e, n) {
                        Ln(t, e), 0 < n.length && (t.c = null, t.a.set(Un(t, e), H(n)), t.b += n.length)
                    }

                    function jn(t) {
                        var e = new Rn;
                        return e.c = t.c, t.a && (e.a = new ln(t.a), e.b = t.b), e
                    }

                    function Un(t, e) {
                        return e = String(e), t.f && (e = e.toLowerCase()), e
                    }(t = Rn.prototype).add = function(t, e) {
                        Dn(this), this.c = null, t = Un(this, t);
                        var n = this.a.get(t);
                        return n || this.a.set(t, n = []), n.push(e), this.b += 1, this
                    }, t.clear = function() {
                        this.a = this.c = null, this.b = 0
                    }, t.forEach = function(n, i) {
                        Dn(this), this.a.forEach(function(t, e) {
                            M(t, function(t) {
                                n.call(i, t, e, this)
                            }, this)
                        }, this)
                    }, t.X = function() {
                        Dn(this);
                        for (var t = this.a.U(), e = this.a.X(), n = [], i = 0; i < e.length; i++)
                            for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i]);
                        return n
                    }, t.U = function(t) {
                        Dn(this);
                        var e = [];
                        if (h(t)) xn(this, t) && (e = q(e, this.a.get(Un(this, t))));
                        else {
                            t = this.a.U();
                            for (var n = 0; n < t.length; n++) e = q(e, t[n])
                        }
                        return e
                    }, t.set = function(t, e) {
                        return Dn(this), this.c = null, xn(this, t = Un(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this
                    }, t.get = function(t, e) {
                        return t && 0 < (t = this.U(t)).length ? String(t[0]) : e
                    }, t.toString = function() {
                        if (this.c) return this.c;
                        if (!this.a) return "";
                        for (var t = [], e = this.a.X(), n = 0; n < e.length; n++) {
                            var i = e[n],
                                r = encodeURIComponent(String(i));
                            i = this.U(i);
                            for (var o = 0; o < i.length; o++) {
                                var a = r;
                                "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))), t.push(a)
                            }
                        }
                        return this.c = t.join("&")
                    };
                    var Vn = !me || 9 <= Number(Ae);

                    function Fn(t) {
                        var e = document;
                        return h(t) ? e.getElementById(t) : t
                    }

                    function Kn(n, t) {
                        B(t, function(t, e) {
                            t && "object" == typeof t && t.qa && (t = t.pa()), "style" == e ? n.style.cssText = t : "class" == e ? n.className = t : "for" == e ? n.htmlFor = t : qn.hasOwnProperty(e) ? n.setAttribute(qn[e], t) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? n.setAttribute(e, t) : n[e] = t
                        })
                    }
                    var qn = {
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
                    };

                    function Hn(t, e, n) {
                        var i = arguments,
                            r = document,
                            o = String(i[0]),
                            a = i[1];
                        if (!Vn && a && (a.name || a.type)) {
                            if (o = ["<", o], a.name && o.push(' name="', xt(a.name), '"'), a.type) {
                                o.push(' type="', xt(a.type), '"');
                                var s = {};
                                J(s, a), delete s.type, a = s
                            }
                            o.push(">"), o = o.join("")
                        }
                        return o = r.createElement(o), a && (h(a) ? o.className = a : p(a) ? o.className = a.join(" ") : Kn(o, a)), 2 < i.length && function(e, n, t) {
                            function i(t) {
                                t && n.appendChild(h(t) ? e.createTextNode(t) : t)
                            }
                            for (var r = 2; r < t.length; r++) {
                                var o = t[r];
                                !v(o) || g(o) && 0 < o.nodeType ? i(o) : M(Bn(o) ? H(o) : o, i)
                            }
                        }(r, o, i), o
                    }

                    function Bn(t) {
                        if (t && "number" == typeof t.length) {
                            if (g(t)) return "function" == typeof t.item || "string" == typeof t.item;
                            if (m(t)) return "function" == typeof t.item
                        }
                        return !1
                    }

                    function Gn(t) {
                        var e = [];
                        return function t(e, n, i) {
                            if (null == n) i.push("null");
                            else {
                                if ("object" == typeof n) {
                                    if (p(n)) {
                                        var r = n;
                                        n = r.length, i.push("[");
                                        for (var o = "", a = 0; a < n; a++) i.push(o), t(e, r[a], i), o = ",";
                                        return void i.push("]")
                                    }
                                    if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) {
                                        for (r in i.push("{"), o = "", n) Object.prototype.hasOwnProperty.call(n, r) && ("function" != typeof(a = n[r]) && (i.push(o), Yn(r, i), i.push(":"), t(e, a, i), o = ","));
                                        return void i.push("}")
                                    }
                                    n = n.valueOf()
                                }
                                switch (typeof n) {
                                    case "string":
                                        Yn(n, i);
                                        break;
                                    case "number":
                                        i.push(isFinite(n) && !isNaN(n) ? String(n) : "null");
                                        break;
                                    case "boolean":
                                        i.push(String(n));
                                        break;
                                    case "function":
                                        i.push("null");
                                        break;
                                    default:
                                        throw Error("Unknown type: " + typeof n)
                                }
                            }
                        }(new Wn, t, e), e.join("")
                    }

                    function Wn() {}
                    var Xn = {
                            '"': '\\"',
                            "\\": "\\\\",
                            "/": "\\/",
                            "\b": "\\b",
                            "\f": "\\f",
                            "\n": "\\n",
                            "\r": "\\r",
                            "\t": "\\t",
                            "\v": "\\u000b"
                        },
                        Jn = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

                    function Yn(t, e) {
                        e.push('"', t.replace(Jn, function(t) {
                            var e = Xn[t];
                            return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), Xn[t] = e), e
                        }), '"')
                    }

                    function zn() {
                        var t = vi();
                        return me && !!Ae && 11 == Ae || /Edge\/\d+/.test(t)
                    }

                    function $n() {
                        return l.window && l.window.location.href || self && self.location && self.location.href || ""
                    }

                    function Zn(t, e) {
                        e = e || l.window;
                        var n = "about:blank";
                        t && (n = bt(wt(t)).toString()), e.location.href = n
                    }

                    function Qn(t) {
                        return !!((t = (t || vi()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/))
                    }

                    function ti(t) {
                        t = t || l.window;
                        try {
                            t.close()
                        } catch (t) {}
                    }

                    function ei(t, e, n) {
                        var i = Math.floor(1e9 * Math.random()).toString();
                        e = e || 500, n = n || 600;
                        var r = (window.screen.availHeight - n) / 2,
                            o = (window.screen.availWidth - e) / 2;
                        for (a in e = {
                                width: e,
                                height: n,
                                top: 0 < r ? r : 0,
                                left: 0 < o ? o : 0,
                                location: !0,
                                resizable: !0,
                                statusbar: !0,
                                toolbar: !1
                            }, n = vi().toLowerCase(), i && (e.target = i, vt(n, "crios/") && (e.target = "_blank")), fi(vi()) == hi && (t = t || "http://localhost", e.scrollbars = !0), n = t || "", (t = e) || (t = {}), i = window, e = n instanceof gt ? n : wt(void 0 !== n.href ? n.href : String(n)), n = t.target || n.target, r = [], t) switch (a) {
                            case "width":
                            case "height":
                            case "top":
                            case "left":
                                r.push(a + "=" + t[a]);
                                break;
                            case "target":
                            case "noopener":
                            case "noreferrer":
                                break;
                            default:
                                r.push(a + "=" + (t[a] ? 1 : 0))
                        }
                        var a = r.join(",");
                        if ((St("iPhone") && !St("iPod") && !St("iPad") || St("iPad") || St("iPod")) && i.navigator && i.navigator.standalone && n && "_self" != n ? (L(a = i.document.createElement("A"), "HTMLAnchorElement"), e instanceof gt || e instanceof gt || (e = "object" == typeof e && e.qa ? e.pa() : String(e), yt.test(e) || (e = "about:invalid#zClosurez"), e = Et(e)), a.href = bt(e), a.setAttribute("target", n), t.noreferrer && a.setAttribute("rel", "noreferrer"), (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, i, 1), a.dispatchEvent(t), a = {}) : t.noreferrer ? (a = i.open("", n, a), t = bt(e).toString(), a && (be && vt(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), a.opener = null, t = Pt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + xt(t) + '">'), a.document.write(Ot(t)), a.document.close())) : (a = i.open(bt(e).toString(), n, a)) && t.noopener && (a.opener = null), a) try {
                            a.focus()
                        } catch (t) {}
                        return a
                    }
                    var ni = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                        ii = /^[^@]+@[^@]+$/;

                    function ri() {
                        var e = null;
                        return new qt(function(t) {
                            "complete" == l.document.readyState ? t() : (e = function() {
                                t()
                            }, We(window, "load", e))
                        }).s(function(t) {
                            throw Xe(window, "load", e), t
                        })
                    }

                    function oi(t) {
                        return t = t || vi(), !("file:" !== wi() || !t.toLowerCase().match(/iphone|ipad|ipod|android/))
                    }

                    function ai() {
                        var t = l.window;
                        try {
                            return !(!t || t == t.top)
                        } catch (t) {
                            return !1
                        }
                    }

                    function si() {
                        return void 0 !== l.WorkerGlobalScope && "function" == typeof l.importScripts
                    }

                    function ui() {
                        return fl.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : fl.INTERNAL.hasOwnProperty("node") ? "Node" : si() ? "Worker" : "Browser"
                    }

                    function ci() {
                        var t = ui();
                        return "ReactNative" === t || "Node" === t
                    }
                    var hi = "Firefox",
                        li = "Chrome";

                    function fi(t) {
                        var e = t.toLowerCase();
                        return vt(e, "opera/") || vt(e, "opr/") || vt(e, "opios/") ? "Opera" : vt(e, "iemobile") ? "IEMobile" : vt(e, "msie") || vt(e, "trident/") ? "IE" : vt(e, "edge/") ? "Edge" : vt(e, "firefox/") ? hi : vt(e, "silk/") ? "Silk" : vt(e, "blackberry") ? "Blackberry" : vt(e, "webos") ? "Webos" : !vt(e, "safari/") || vt(e, "chrome/") || vt(e, "crios/") || vt(e, "android") ? !vt(e, "chrome/") && !vt(e, "crios/") || vt(e, "edge/") ? vt(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : li : "Safari"
                    }
                    var di = {
                        Vc: "FirebaseCore-web",
                        Xc: "FirebaseUI-web"
                    };

                    function pi(t, e) {
                        e = e || [];
                        var n, i = [],
                            r = {};
                        for (n in di) r[di[n]] = !0;
                        for (n = 0; n < e.length; n++) void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]));
                        return i.sort(), (e = i).length || (e = ["FirebaseCore-web"]), "Browser" === (i = ui()) ? i = fi(r = vi()) : "Worker" === i && (i = fi(r = vi()) + "-" + i), i + "/JsCore/" + t + "/" + e.join(",")
                    }

                    function vi() {
                        return l.navigator && l.navigator.userAgent || ""
                    }

                    function mi(t, e) {
                        t = t.split("."), e = e || l;
                        for (var n = 0; n < t.length && "object" == typeof e && null != e; n++) e = e[t[n]];
                        return n != t.length && (e = void 0), e
                    }

                    function gi() {
                        try {
                            var t = l.localStorage,
                                e = Ai();
                            if (t) return t.setItem(e, "1"), t.removeItem(e), !zn() || !!l.indexedDB
                        } catch (t) {
                            return si() && !!l.indexedDB
                        }
                        return !1
                    }

                    function bi() {
                        return (yi() || "chrome-extension:" === wi() || oi()) && !ci() && gi() && !si()
                    }

                    function yi() {
                        return "http:" === wi() || "https:" === wi()
                    }

                    function wi() {
                        return l.location && l.location.protocol || null
                    }

                    function Ii(t) {
                        return !Qn(t = t || vi()) && fi(t) != hi
                    }

                    function Ti(t) {
                        return void 0 === t ? null : Gn(t)
                    }

                    function Ei(t) {
                        var e, n = {};
                        for (e in t) t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]);
                        return n
                    }

                    function ki(t) {
                        if (null !== t) return JSON.parse(t)
                    }

                    function Ai(t) {
                        return t || Math.floor(1e9 * Math.random()).toString()
                    }

                    function Si(t) {
                        return "Safari" != fi(t = t || vi()) && !t.toLowerCase().match(/iphone|ipad|ipod/)
                    }

                    function Ni() {
                        var t = l.___jsl;
                        if (t && t.H)
                            for (var e in t.H)
                                if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = t.H[e].L.concat(), t.CP)
                                    for (var n = 0; n < t.CP.length; n++) t.CP[n] = null
                    }

                    function Oi(t, e) {
                        if (e < t) throw Error("Short delay should be less than long delay!");
                        this.a = t, this.c = e, t = vi(), e = ui(), this.b = Qn(t) || "ReactNative" === e
                    }

                    function _i() {
                        var t = l.document;
                        return !t || void 0 === t.visibilityState || "visible" == t.visibilityState
                    }

                    function Pi(t) {
                        try {
                            var e = new Date(parseInt(t, 10));
                            if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString()
                        } catch (t) {}
                        return null
                    }

                    function Ri() {
                        return !(!mi("fireauth.oauthhelper", l) && !mi("fireauth.iframe", l))
                    }
                    Oi.prototype.get = function() {
                        var t = l.navigator;
                        return !t || "boolean" != typeof t.onLine || !yi() && "chrome-extension:" !== wi() && void 0 === t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a)
                    };
                    var Di, Ci = {};

                    function Li(t) {
                        Ci[t] || (Ci[t] = !0, "undefined" != typeof console && "function" == typeof console.warn && console.warn(t))
                    }
                    try {
                        var xi = {};
                        Object.defineProperty(xi, "abcd", {
                            configurable: !0,
                            enumerable: !0,
                            value: 1
                        }), Object.defineProperty(xi, "abcd", {
                            configurable: !0,
                            enumerable: !0,
                            value: 2
                        }), Di = 2 == xi.abcd
                    } catch (t) {
                        Di = !1
                    }

                    function Mi(t, e, n) {
                        Di ? Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: n
                        }) : t[e] = n
                    }

                    function ji(t, e) {
                        if (e)
                            for (var n in e) e.hasOwnProperty(n) && Mi(t, n, e[n])
                    }

                    function Ui(t) {
                        var e = {};
                        return ji(e, t), e
                    }

                    function Vi(t) {
                        var e = t;
                        if ("object" == typeof t && null != t)
                            for (var n in e = "length" in t ? [] : {}, t) Mi(e, n, Vi(t[n]));
                        return e
                    }

                    function Fi(t) {
                        var e = {},
                            n = t[qi],
                            i = t[Hi];
                        if (!(t = t[Bi]) || t != Ki && !n) throw Error("Invalid provider user info!");
                        e[Wi] = i || null, e[Gi] = n || null, Mi(this, Ji, t), Mi(this, Xi, Vi(e))
                    }
                    var Ki = "EMAIL_SIGNIN",
                        qi = "email",
                        Hi = "newEmail",
                        Bi = "requestType",
                        Gi = "email",
                        Wi = "fromEmail",
                        Xi = "data",
                        Ji = "operation";

                    function Yi(t, e) {
                        this.code = $i + t, this.message = e || Zi[t] || ""
                    }

                    function zi(t) {
                        var e = t && t.code;
                        return e ? new Yi(e.substring($i.length), t.message) : null
                    }
                    k(Yi, Error), Yi.prototype.A = function() {
                        return {
                            code: this.code,
                            message: this.message
                        }
                    }, Yi.prototype.toJSON = function() {
                        return this.A()
                    };
                    var $i = "auth/",
                        Zi = {
                            "admin-restricted-operation": "This operation is restricted to administrators only.",
                            "argument-error": "",
                            "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                            "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                            "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                            "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                            "cordova-not-ready": "Cordova framework is not ready.",
                            "cors-unsupported": "This browser is not supported.",
                            "credential-already-in-use": "This credential is already associated with a different user account.",
                            "custom-token-mismatch": "The custom token corresponds to a different audience.",
                            "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                            "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                            "email-already-in-use": "The email address is already in use by another account.",
                            "expired-action-code": "The action code has expired. ",
                            "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                            "internal-error": "An internal error has occurred.",
                            "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                            "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                            "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                            "invalid-auth-event": "An internal error has occurred.",
                            "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
                            "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                            "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                            "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                            "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
                            "invalid-email": "The email address is badly formatted.",
                            "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                            "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                            "invalid-credential": "The supplied auth credential is malformed or has expired.",
                            "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                            "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                            "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                            "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                            "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                            "wrong-password": "The password is invalid or the user does not have a password.",
                            "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                            "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                            "invalid-provider-id": "The specified provider ID is invalid.",
                            "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                            "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                            "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                            "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                            "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                            "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                            "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                            "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                            "missing-continue-uri": "A continue URL must be provided in the request.",
                            "missing-iframe-start": "An internal error has occurred.",
                            "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                            "missing-or-invalid-nonce": "The OIDC ID token requires a valid unhashed nonce.",
                            "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                            "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                            "app-deleted": "This instance of FirebaseApp has been deleted.",
                            "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                            "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
                            "no-auth-event": "An internal error has occurred.",
                            "no-such-provider": "User was not linked to an account with the given provider.",
                            "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
                            "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                            "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                            "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                            "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                            "provider-already-linked": "User can only be linked to one identity for the given provider.",
                            "quota-exceeded": "The project's quota for this operation has been exceeded.",
                            "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                            "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                            "rejected-credential": "The request contains malformed or mismatching credentials.",
                            "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
                            timeout: "The operation has timed out.",
                            "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                            "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                            "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                            "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                            "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
                            "user-cancelled": "User did not grant your application the permissions it requested.",
                            "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                            "user-disabled": "The user account has been disabled by an administrator.",
                            "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                            "user-signed-out": "",
                            "weak-password": "The password must be 6 characters long or more.",
                            "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
                        };

                    function Qi(t) {
                        var e = wn(t = In(t), tr) || null,
                            n = wn(t, er) || null,
                            i = wn(t, rr) || null;
                        if (i = i && ar[i] || null, !e || !n || !i) throw new Yi("argument-error", tr + ", " + er + "and " + rr + " are required in a valid action code URL.");
                        ji(this, {
                            apiKey: e,
                            operation: i,
                            code: n,
                            continueUrl: wn(t, nr) || null,
                            languageCode: wn(t, ir) || null,
                            tenantId: wn(t, or) || null
                        })
                    }
                    var tr = "apiKey",
                        er = "oobCode",
                        nr = "continueUrl",
                        ir = "languageCode",
                        rr = "mode",
                        or = "tenantId",
                        ar = {
                            recoverEmail: "RECOVER_EMAIL",
                            resetPassword: "PASSWORD_RESET",
                            signIn: Ki,
                            verifyEmail: "VERIFY_EMAIL"
                        };

                    function sr(t) {
                        try {
                            return new Qi(t)
                        } catch (t) {
                            return null
                        }
                    }

                    function ur(t) {
                        var e = t[dr];
                        if (void 0 === e) throw new Yi("missing-continue-uri");
                        if ("string" != typeof e || "string" == typeof e && !e.length) throw new Yi("invalid-continue-uri");
                        this.h = e, this.b = this.a = null, this.g = !1;
                        var n = t[cr];
                        if (n && "object" == typeof n) {
                            e = n[mr];
                            var i = n[pr];
                            if (n = n[vr], "string" == typeof e && e.length) {
                                if (this.a = e, void 0 !== i && "boolean" != typeof i) throw new Yi("argument-error", pr + " property must be a boolean when specified.");
                                if (this.g = !!i, void 0 !== n && ("string" != typeof n || "string" == typeof n && !n.length)) throw new Yi("argument-error", vr + " property must be a non empty string when specified.");
                                this.b = n || null
                            } else {
                                if (void 0 !== e) throw new Yi("argument-error", mr + " property must be a non empty string when specified.");
                                if (void 0 !== i || void 0 !== n) throw new Yi("missing-android-pkg-name")
                            }
                        } else if (void 0 !== n) throw new Yi("argument-error", cr + " property must be a non null object when specified.");
                        if (this.f = null, (e = t[fr]) && "object" == typeof e) {
                            if ("string" == typeof(e = e[gr]) && e.length) this.f = e;
                            else if (void 0 !== e) throw new Yi("argument-error", gr + " property must be a non empty string when specified.")
                        } else if (void 0 !== e) throw new Yi("argument-error", fr + " property must be a non null object when specified.");
                        if (void 0 !== (e = t[lr]) && "boolean" != typeof e) throw new Yi("argument-error", lr + " property must be a boolean when specified.");
                        if (this.c = !!e, void 0 !== (t = t[hr]) && ("string" != typeof t || "string" == typeof t && !t.length)) throw new Yi("argument-error", hr + " property must be a non empty string when specified.");
                        this.i = t || null
                    }
                    var cr = "android",
                        hr = "dynamicLinkDomain",
                        lr = "handleCodeInApp",
                        fr = "iOS",
                        dr = "url",
                        pr = "installApp",
                        vr = "minimumVersion",
                        mr = "packageName",
                        gr = "bundleId";

                    function br(t) {
                        var e = {};
                        for (var n in e.continueUrl = t.h, e.canHandleCodeInApp = t.c, (e.androidPackageName = t.a) && (e.androidMinimumVersion = t.b, e.androidInstallApp = t.g), e.iOSBundleId = t.f, e.dynamicLinkDomain = t.i, e) null === e[n] && delete e[n];
                        return e
                    }
                    var yr = null,
                        wr = null;

                    function Ir(t) {
                        var e = "";
                        return function(i, t) {
                            function e(t) {
                                for (; r < i.length;) {
                                    var e = i.charAt(r++),
                                        n = wr[e];
                                    if (null != n) return n;
                                    if (!/^[\s\xa0]*$/.test(e)) throw Error("Unknown base64 encoding at char: " + e)
                                }
                                return t
                            }! function() {
                                if (!yr) {
                                    yr = {}, wr = {};
                                    for (var t = 0; t < 65; t++) yr[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t), 62 <= (wr[yr[t]] = t) && (wr["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)] = t)
                                }
                            }();
                            for (var r = 0;;) {
                                var n = e(-1),
                                    o = e(0),
                                    a = e(64),
                                    s = e(64);
                                if (64 === s && -1 === n) break;
                                t(n << 2 | o >> 4), 64 != a && (t(o << 4 & 240 | a >> 2), 64 != s && t(a << 6 & 192 | s))
                            }
                        }(t, function(t) {
                            e += String.fromCharCode(t)
                        }), e
                    }

                    function Tr(t) {
                        this.f = t.sub, this.a = t.provider_id || t.firebase && t.firebase.sign_in_provider || null, this.c = t.firebase && t.firebase.tenant || null, this.b = !!t.is_anonymous || "anonymous" == this.a
                    }

                    function Er(t) {
                        return (t = kr(t)) && t.sub && t.iss && t.aud && t.exp ? new Tr(t) : null
                    }

                    function kr(t) {
                        if (!t) return null;
                        if (3 != (t = t.split(".")).length) return null;
                        for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++) t += ".";
                        try {
                            return JSON.parse(Ir(t))
                        } catch (t) {}
                        return null
                    }
                    Tr.prototype.R = function() {
                        return this.c
                    }, Tr.prototype.g = function() {
                        return this.b
                    };
                    var Ar, Sr = {
                        ad: {
                            bb: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                            ib: "https://securetoken.googleapis.com/v1/token",
                            id: "p"
                        },
                        cd: {
                            bb: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                            ib: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                            id: "s"
                        },
                        dd: {
                            bb: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                            ib: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                            id: "t"
                        }
                    };

                    function Nr(t) {
                        for (var e in Sr)
                            if (Sr[e].id === t) return {
                                firebaseEndpoint: (t = Sr[e]).bb,
                                secureTokenEndpoint: t.ib
                            };
                        return null
                    }
                    Ar = Nr("__EID__") ? "__EID__" : void 0;
                    var Or = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
                        _r = ["client_id", "response_type", "scope", "redirect_uri", "state"],
                        Pr = {
                            Wc: {
                                Oa: "locale",
                                Da: 500,
                                Ca: 600,
                                Pa: "facebook.com",
                                hb: _r
                            },
                            Yc: {
                                Oa: null,
                                Da: 500,
                                Ca: 620,
                                Pa: "github.com",
                                hb: _r
                            },
                            Zc: {
                                Oa: "hl",
                                Da: 515,
                                Ca: 680,
                                Pa: "google.com",
                                hb: _r
                            },
                            ed: {
                                Oa: "lang",
                                Da: 485,
                                Ca: 705,
                                Pa: "twitter.com",
                                hb: Or
                            }
                        };

                    function Rr(t) {
                        for (var e in Pr)
                            if (Pr[e].Pa == t) return Pr[e];
                        return null
                    }

                    function Dr(t) {
                        var e = {};
                        e["facebook.com"] = jr, e["google.com"] = Vr, e["github.com"] = Ur, e["twitter.com"] = Fr;
                        var n = t && t[Lr];
                        try {
                            if (n) return e[n] ? new e[n](t) : new Mr(t);
                            if (void 0 !== t[Cr]) return new xr(t)
                        } catch (t) {}
                        return null
                    }
                    var Cr = "idToken",
                        Lr = "providerId";

                    function xr(t) {
                        var e = t[Lr];
                        if (!e && t[Cr]) {
                            var n = Er(t[Cr]);
                            n && n.a && (e = n.a)
                        }
                        if (!e) throw Error("Invalid additional user info!");
                        "anonymous" != e && "custom" != e || (e = null), n = !1, void 0 !== t.isNewUser ? n = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (n = !0), Mi(this, "providerId", e), Mi(this, "isNewUser", n)
                    }

                    function Mr(t) {
                        xr.call(this, t), Mi(this, "profile", Vi((t = ki(t.rawUserInfo || "{}")) || {}))
                    }

                    function jr(t) {
                        if (Mr.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!")
                    }

                    function Ur(t) {
                        if (Mr.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");
                        Mi(this, "username", this.profile && this.profile.login || null)
                    }

                    function Vr(t) {
                        if (Mr.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!")
                    }

                    function Fr(t) {
                        if (Mr.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
                        Mi(this, "username", t.screenName || null)
                    }

                    function Kr(t) {
                        var e = In(t),
                            n = wn(e, "link"),
                            i = wn(In(n), "link");
                        return wn(In(e = wn(e, "deep_link_id")), "link") || e || i || n || t
                    }

                    function qr() {}

                    function Hr(t, n) {
                        return t.then(function(t) {
                            if (t[Da]) {
                                var e = Er(t[Da]);
                                if (!e || n != e.f) throw new Yi("user-mismatch");
                                return t
                            }
                            throw new Yi("user-mismatch")
                        }).s(function(t) {
                            throw t && t.code && t.code == $i + "user-not-found" ? new Yi("user-mismatch") : t
                        })
                    }

                    function Br(t, e) {
                        if (!e) throw new Yi("internal-error", "failed to construct a credential");
                        this.a = e, Mi(this, "providerId", t), Mi(this, "signInMethod", t)
                    }

                    function Gr(t) {
                        return {
                            pendingToken: t.a,
                            requestUri: "http://localhost"
                        }
                    }

                    function Wr(t) {
                        if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf("saml.") && t.pendingToken) try {
                            return new Br(t.providerId, t.pendingToken)
                        } catch (t) {}
                        return null
                    }

                    function Xr(t, e, n) {
                        if (this.a = null, e.idToken || e.accessToken) e.idToken && Mi(this, "idToken", e.idToken), e.accessToken && Mi(this, "accessToken", e.accessToken), e.nonce && !e.pendingToken && Mi(this, "nonce", e.nonce), e.pendingToken && (this.a = e.pendingToken);
                        else {
                            if (!e.oauthToken || !e.oauthTokenSecret) throw new Yi("internal-error", "failed to construct a credential");
                            Mi(this, "accessToken", e.oauthToken), Mi(this, "secret", e.oauthTokenSecret)
                        }
                        Mi(this, "providerId", t), Mi(this, "signInMethod", n)
                    }

                    function Jr(t) {
                        var e = {};
                        return t.idToken && (e.id_token = t.idToken), t.accessToken && (e.access_token = t.accessToken), t.secret && (e.oauth_token_secret = t.secret), e.providerId = t.providerId, t.nonce && !t.a && (e.nonce = t.nonce), e = {
                            postBody: Cn(e).toString(),
                            requestUri: "http://localhost"
                        }, t.a && (delete e.postBody, e.pendingToken = t.a), e
                    }

                    function Yr(t) {
                        if (t && t.providerId && t.signInMethod) {
                            var e = {
                                idToken: t.oauthIdToken,
                                accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
                                oauthTokenSecret: t.oauthTokenSecret,
                                oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
                                nonce: t.nonce,
                                pendingToken: t.pendingToken
                            };
                            try {
                                return new Xr(t.providerId, e, t.signInMethod)
                            } catch (t) {}
                        }
                        return null
                    }

                    function zr(t, e) {
                        this.Fc = e || [], ji(this, {
                            providerId: t,
                            isOAuthProvider: !0
                        }), this.zb = {}, this.cb = (Rr(t) || {}).Oa || null, this.ab = null
                    }

                    function $r(t) {
                        if ("string" != typeof t || 0 != t.indexOf("saml.")) throw new Yi("argument-error", 'SAML provider IDs must be prefixed with "saml."');
                        zr.call(this, t, [])
                    }

                    function Zr(t) {
                        zr.call(this, t, _r), this.a = []
                    }

                    function Qr() {
                        Zr.call(this, "facebook.com")
                    }

                    function to(t) {
                        if (!t) throw new Yi("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
                        var e = t;
                        return g(t) && (e = t.accessToken), (new Qr).credential({
                            accessToken: e
                        })
                    }

                    function eo() {
                        Zr.call(this, "github.com")
                    }

                    function no(t) {
                        if (!t) throw new Yi("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
                        var e = t;
                        return g(t) && (e = t.accessToken), (new eo).credential({
                            accessToken: e
                        })
                    }

                    function io() {
                        Zr.call(this, "google.com"), this.wa("profile")
                    }

                    function ro(t, e) {
                        var n = t;
                        return g(t) && (n = t.idToken, e = t.accessToken), (new io).credential({
                            idToken: n,
                            accessToken: e
                        })
                    }

                    function oo() {
                        zr.call(this, "twitter.com", Or)
                    }

                    function ao(t, e) {
                        var n = t;
                        if (g(n) || (n = {
                                oauthToken: t,
                                oauthTokenSecret: e
                            }), !n.oauthToken || !n.oauthTokenSecret) throw new Yi("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
                        return new Xr("twitter.com", n, "twitter.com")
                    }

                    function so(t, e, n) {
                        this.a = t, this.c = e, Mi(this, "providerId", "password"), Mi(this, "signInMethod", n === co.EMAIL_LINK_SIGN_IN_METHOD ? co.EMAIL_LINK_SIGN_IN_METHOD : co.EMAIL_PASSWORD_SIGN_IN_METHOD)
                    }

                    function uo(t) {
                        return t && t.email && t.password ? new so(t.email, t.password, t.signInMethod) : null
                    }

                    function co() {
                        ji(this, {
                            providerId: "password",
                            isOAuthProvider: !1
                        })
                    }

                    function ho(t, e) {
                        if (!(e = lo(e))) throw new Yi("argument-error", "Invalid email link!");
                        return new so(t, e.code, co.EMAIL_LINK_SIGN_IN_METHOD)
                    }

                    function lo(t) {
                        return (t = sr(t = Kr(t))) && t.operation === Ki ? t : null
                    }

                    function fo(t) {
                        if (!(t.Ua && t.Ta || t.Fa && t.ba)) throw new Yi("internal-error");
                        this.a = t, Mi(this, "providerId", "phone"), Mi(this, "signInMethod", "phone")
                    }

                    function po(e) {
                        if (e && "phone" === e.providerId && (e.verificationId && e.verificationCode || e.temporaryProof && e.phoneNumber)) {
                            var n = {};
                            return M(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function(t) {
                                e[t] && (n[t] = e[t])
                            }), new fo(n)
                        }
                        return null
                    }

                    function vo(t) {
                        return t.a.Fa && t.a.ba ? {
                            temporaryProof: t.a.Fa,
                            phoneNumber: t.a.ba
                        } : {
                            sessionInfo: t.a.Ua,
                            code: t.a.Ta
                        }
                    }

                    function mo(t) {
                        try {
                            this.a = t || fl.auth()
                        } catch (t) {
                            throw new Yi("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")
                        }
                        ji(this, {
                            providerId: "phone",
                            isOAuthProvider: !1
                        })
                    }

                    function go(t, e) {
                        if (!t) throw new Yi("missing-verification-id");
                        if (!e) throw new Yi("missing-verification-code");
                        return new fo({
                            Ua: t,
                            Ta: e
                        })
                    }

                    function bo(t) {
                        if (t.temporaryProof && t.phoneNumber) return new fo({
                            Fa: t.temporaryProof,
                            ba: t.phoneNumber
                        });
                        var e = t && t.providerId;
                        if (!e || "password" === e) return null;
                        var n = t && t.oauthAccessToken,
                            i = t && t.oauthTokenSecret,
                            r = t && t.nonce,
                            o = t && t.oauthIdToken,
                            a = t && t.pendingToken;
                        try {
                            switch (e) {
                                case "google.com":
                                    return ro(o, n);
                                case "facebook.com":
                                    return to(n);
                                case "github.com":
                                    return no(n);
                                case "twitter.com":
                                    return ao(n, i);
                                default:
                                    return n || i || o || a ? a ? 0 == e.indexOf("saml.") ? new Br(e, a) : new Xr(e, {
                                        pendingToken: a,
                                        idToken: t.oauthIdToken,
                                        accessToken: t.oauthAccessToken
                                    }, e) : new Zr(e).credential({
                                        idToken: o,
                                        accessToken: n,
                                        rawNonce: r
                                    }) : null
                            }
                        } catch (t) {
                            return null
                        }
                    }

                    function yo(t) {
                        if (!t.isOAuthProvider) throw new Yi("invalid-oauth-provider")
                    }

                    function wo(t, e, n, i, r, o, a) {
                        if (this.c = t, this.b = e || null, this.g = n || null, this.f = i || null, this.i = o || null, this.h = a || null, this.a = r || null, !this.g && !this.a) throw new Yi("invalid-auth-event");
                        if (this.g && this.a) throw new Yi("invalid-auth-event");
                        if (this.g && !this.f) throw new Yi("invalid-auth-event")
                    }

                    function Io(t) {
                        return (t = t || {}).type ? new wo(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && zi(t.error), t.postBody, t.tenantId) : null
                    }

                    function To() {
                        this.b = null, this.a = []
                    }
                    k(Mr, xr), k(jr, Mr), k(Ur, Mr), k(Vr, Mr), k(Fr, Mr), Br.prototype.na = function(t) {
                        return za(t, Gr(this))
                    }, Br.prototype.b = function(t, e) {
                        var n = Gr(this);
                        return n.idToken = e, $a(t, n)
                    }, Br.prototype.f = function(t, e) {
                        return Hr(Za(t, Gr(this)), e)
                    }, Br.prototype.A = function() {
                        return {
                            providerId: this.providerId,
                            signInMethod: this.signInMethod,
                            pendingToken: this.a
                        }
                    }, Xr.prototype.na = function(t) {
                        return za(t, Jr(this))
                    }, Xr.prototype.b = function(t, e) {
                        var n = Jr(this);
                        return n.idToken = e, $a(t, n)
                    }, Xr.prototype.f = function(t, e) {
                        return Hr(Za(t, Jr(this)), e)
                    }, Xr.prototype.A = function() {
                        var t = {
                            providerId: this.providerId,
                            signInMethod: this.signInMethod
                        };
                        return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), this.nonce && (t.nonce = this.nonce), this.a && (t.pendingToken = this.a), t
                    }, zr.prototype.Ea = function(t) {
                        return this.zb = W(t), this
                    }, k($r, zr), k(Zr, zr), Zr.prototype.wa = function(t) {
                        return V(this.a, t) || this.a.push(t), this
                    }, Zr.prototype.Hb = function() {
                        return H(this.a)
                    }, Zr.prototype.credential = function(t, e) {
                        var n;
                        if (!(n = g(t) ? {
                                idToken: t.idToken || null,
                                accessToken: t.accessToken || null,
                                nonce: t.rawNonce || null
                            } : {
                                idToken: t || null,
                                accessToken: e || null
                            }).idToken && !n.accessToken) throw new Yi("argument-error", "credential failed: must provide the ID token and/or the access token.");
                        return new Xr(this.providerId, n, this.providerId)
                    }, k(Qr, Zr), Mi(Qr, "PROVIDER_ID", "facebook.com"), Mi(Qr, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"), k(eo, Zr), Mi(eo, "PROVIDER_ID", "github.com"), Mi(eo, "GITHUB_SIGN_IN_METHOD", "github.com"), k(io, Zr), Mi(io, "PROVIDER_ID", "google.com"), Mi(io, "GOOGLE_SIGN_IN_METHOD", "google.com"), k(oo, zr), Mi(oo, "PROVIDER_ID", "twitter.com"), Mi(oo, "TWITTER_SIGN_IN_METHOD", "twitter.com"), so.prototype.na = function(t) {
                        return this.signInMethod == co.EMAIL_LINK_SIGN_IN_METHOD ? Ns(t, as, {
                            email: this.a,
                            oobCode: this.c
                        }) : Ns(t, Es, {
                            email: this.a,
                            password: this.c
                        })
                    }, so.prototype.b = function(t, e) {
                        return this.signInMethod == co.EMAIL_LINK_SIGN_IN_METHOD ? Ns(t, ss, {
                            idToken: e,
                            email: this.a,
                            oobCode: this.c
                        }) : Ns(t, gs, {
                            idToken: e,
                            email: this.a,
                            password: this.c
                        })
                    }, so.prototype.f = function(t, e) {
                        return Hr(this.na(t), e)
                    }, so.prototype.A = function() {
                        return {
                            email: this.a,
                            password: this.c,
                            signInMethod: this.signInMethod
                        }
                    }, ji(co, {
                        PROVIDER_ID: "password"
                    }), ji(co, {
                        EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
                    }), ji(co, {
                        EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
                    }), fo.prototype.na = function(t) {
                        return t.Va(vo(this))
                    }, fo.prototype.b = function(t, e) {
                        var n = vo(this);
                        return n.idToken = e, Ns(t, As, n)
                    }, fo.prototype.f = function(t, e) {
                        var n = vo(this);
                        return n.operation = "REAUTH", Hr(t = Ns(t, Ss, n), e)
                    }, fo.prototype.A = function() {
                        var t = {
                            providerId: "phone"
                        };
                        return this.a.Ua && (t.verificationId = this.a.Ua), this.a.Ta && (t.verificationCode = this.a.Ta), this.a.Fa && (t.temporaryProof = this.a.Fa), this.a.ba && (t.phoneNumber = this.a.ba), t
                    }, mo.prototype.Va = function(e, n) {
                        var i = this.a.b;
                        return Yt(n.verify()).then(function(t) {
                            if (!h(t)) throw new Yi("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                            switch (n.type) {
                                case "recaptcha":
                                    return function(t, e) {
                                        return Ns(t, vs, e)
                                    }(i, {
                                        phoneNumber: e,
                                        recaptchaToken: t
                                    }).then(function(t) {
                                        return "function" == typeof n.reset && n.reset(), t
                                    }, function(t) {
                                        throw "function" == typeof n.reset && n.reset(), t
                                    });
                                default:
                                    throw new Yi("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
                            }
                        })
                    }, ji(mo, {
                        PROVIDER_ID: "phone"
                    }), ji(mo, {
                        PHONE_SIGN_IN_METHOD: "phone"
                    }), wo.prototype.getUid = function() {
                        var t = [];
                        return t.push(this.c), this.b && t.push(this.b), this.f && t.push(this.f), this.h && t.push(this.h), t.join("-")
                    }, wo.prototype.R = function() {
                        return this.h
                    }, wo.prototype.A = function() {
                        return {
                            type: this.c,
                            eventId: this.b,
                            urlResponse: this.g,
                            sessionId: this.f,
                            postBody: this.i,
                            tenantId: this.h,
                            error: this.a && this.a.A()
                        }
                    };
                    var Eo, ko = null;

                    function Ao(t) {
                        var e = "unauthorized-domain",
                            n = void 0,
                            i = In(t);
                        t = i.b, "chrome-extension" == (i = i.f) ? n = Lt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? n = Lt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : e = "operation-not-supported-in-this-environment", Yi.call(this, e, n)
                    }

                    function So(t, e, n) {
                        Yi.call(this, t, n), (t = e || {}).Ab && Mi(this, "email", t.Ab), t.ba && Mi(this, "phoneNumber", t.ba), t.credential && Mi(this, "credential", t.credential), t.Qb && Mi(this, "tenantId", t.Qb)
                    }

                    function No(t) {
                        if (t.code) {
                            var e = t.code || "";
                            0 == e.indexOf($i) && (e = e.substring($i.length));
                            var n = {
                                credential: bo(t),
                                Qb: t.tenantId
                            };
                            if (t.email) n.Ab = t.email;
                            else if (t.phoneNumber) n.ba = t.phoneNumber;
                            else if (!n.credential) return new Yi(e, t.message || void 0);
                            return new So(e, n, t.message)
                        }
                        return null
                    }

                    function Oo() {}

                    function _o(t) {
                        return t.c || (t.c = t.b())
                    }

                    function Po() {}

                    function Ro(t) {
                        if (t.f || "undefined" != typeof XMLHttpRequest || "undefined" == typeof ActiveXObject) return t.f;
                        for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) {
                            var i = e[n];
                            try {
                                return new ActiveXObject(i), t.f = i
                            } catch (t) {}
                        }
                        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
                    }

                    function Do() {}

                    function Co() {
                        this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseType = this.responseText = this.response = "", this.status = -1, this.statusText = "", this.a.onload = I(this.fc, this), this.a.onerror = I(this.Ib, this), this.a.onprogress = I(this.gc, this), this.a.ontimeout = I(this.kc, this)
                    }

                    function Lo(t, e) {
                        t.readyState = e, t.onreadystatechange && t.onreadystatechange()
                    }

                    function xo(t, e, n) {
                        this.reset(t, e, n, void 0, void 0)
                    }

                    function Mo(t) {
                        this.f = t, this.b = this.c = this.a = null
                    }

                    function jo(t, e) {
                        this.name = t, this.value = e
                    }
                    k(Ao, Yi), k(So, Yi), So.prototype.A = function() {
                        var t = {
                            code: this.code,
                            message: this.message
                        };
                        this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber), this.tenantId && (t.tenantId = this.tenantId);
                        var e = this.credential && this.credential.A();
                        return e && J(t, e), t
                    }, So.prototype.toJSON = function() {
                        return this.A()
                    }, Oo.prototype.c = null, k(Po, Oo), Po.prototype.a = function() {
                        var t = Ro(this);
                        return t ? new ActiveXObject(t) : new XMLHttpRequest
                    }, Po.prototype.b = function() {
                        var t = {};
                        return Ro(this) && (t[0] = !0, t[1] = !0), t
                    }, Eo = new Po, k(Do, Oo), Do.prototype.a = function() {
                        var t = new XMLHttpRequest;
                        if ("withCredentials" in t) return t;
                        if ("undefined" != typeof XDomainRequest) return new Co;
                        throw Error("Unsupported browser")
                    }, Do.prototype.b = function() {
                        return {}
                    }, (t = Co.prototype).open = function(t, e, n) {
                        if (null != n && !n) throw Error("Only async requests are supported.");
                        this.a.open(t, e)
                    }, t.send = function(t) {
                        if (t) {
                            if ("string" != typeof t) throw Error("Only string data is supported");
                            this.a.send(t)
                        } else this.a.send()
                    }, t.abort = function() {
                        this.a.abort()
                    }, t.setRequestHeader = function() {}, t.getResponseHeader = function(t) {
                        return "content-type" == t.toLowerCase() ? this.a.contentType : ""
                    }, t.fc = function() {
                        this.status = 200, this.response = this.responseText = this.a.responseText, Lo(this, 4)
                    }, t.Ib = function() {
                        this.status = 500, this.response = this.responseText = "", Lo(this, 4)
                    }, t.kc = function() {
                        this.Ib()
                    }, t.gc = function() {
                        this.status = 200, Lo(this, 1)
                    }, t.getAllResponseHeaders = function() {
                        return "content-type: " + this.a.contentType
                    }, xo.prototype.a = null, xo.prototype.reset = function(t, e, n, i, r) {
                        delete this.a
                    }, jo.prototype.toString = function() {
                        return this.name
                    };
                    var Uo = new jo("SEVERE", 1e3),
                        Vo = new jo("WARNING", 900),
                        Fo = new jo("CONFIG", 700),
                        Ko = new jo("FINE", 500);
                    Mo.prototype.log = function(t, e, n) {
                        if (t.value >= function t(e) {
                                return e.c ? e.c : e.a ? t(e.a) : (O("Root logger has no level set."), null)
                            }(this).value)
                            for (m(e) && (e = e()), t = new xo(t, String(e), this.f), n && (t.a = n), n = this; n;) n = n.a
                    };
                    var qo, Ho = {},
                        Bo = null;

                    function Go(t) {
                        var e;
                        if (Bo || (Bo = new Mo(""), (Ho[""] = Bo).c = Fo), !(e = Ho[t])) {
                            e = new Mo(t);
                            var n = t.lastIndexOf("."),
                                i = t.substr(n + 1);
                            (n = Go(t.substr(0, n))).b || (n.b = {}), (n.b[i] = e).a = n, Ho[t] = e
                        }
                        return e
                    }

                    function Wo(t, e) {
                        t && t.log(Ko, e, void 0)
                    }

                    function Xo(t) {
                        this.f = t
                    }

                    function Jo(t) {
                        nn.call(this), this.o = t, this.readyState = Yo, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.i = new Headers, this.b = null, this.m = "GET", this.g = "", this.a = !1, this.h = Go("goog.net.FetchXmlHttp"), this.l = this.c = this.f = null
                    }
                    k(Xo, Oo), Xo.prototype.a = function() {
                        return new Jo(this.f)
                    }, Xo.prototype.b = (qo = {}, function() {
                        return qo
                    }), k(Jo, nn);
                    var Yo = 0;

                    function zo(t) {
                        t.c.read().then(t.ec.bind(t)).catch(t.Ma.bind(t))
                    }

                    function $o(t, e) {
                        e && t.f && (t.status = t.f.status, t.statusText = t.f.statusText), t.readyState = 4, t.f = null, t.c = null, t.l = null, Zo(t)
                    }

                    function Zo(t) {
                        t.onreadystatechange && t.onreadystatechange.call(t)
                    }

                    function Qo(t) {
                        nn.call(this), this.headers = new ln, this.B = t || null, this.c = !1, this.w = this.a = null, this.h = this.O = this.l = "", this.f = this.J = this.i = this.I = !1, this.g = 0, this.o = null, this.m = ta, this.v = this.P = !1
                    }(t = Jo.prototype).open = function(t, e) {
                        if (this.readyState != Yo) throw this.abort(), Error("Error reopening a connection");
                        this.m = t, this.g = e, this.readyState = 1, Zo(this)
                    }, t.send = function(t) {
                        if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
                        this.a = !0;
                        var e = {
                            headers: this.i,
                            method: this.m,
                            credentials: void 0,
                            cache: void 0
                        };
                        t && (e.body = t), this.o.fetch(new Request(this.g, e)).then(this.jc.bind(this), this.Ma.bind(this))
                    }, t.abort = function() {
                        this.response = this.responseText = "", this.i = new Headers, this.status = 0, this.c && this.c.cancel("Request was aborted."), 1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, $o(this, !1)), this.readyState = Yo
                    }, t.jc = function(t) {
                        this.a && (this.f = t, this.b || (this.b = t.headers, this.readyState = 2, Zo(this)), this.a && (this.readyState = 3, Zo(this), this.a && ("arraybuffer" === this.responseType ? t.arrayBuffer().then(this.hc.bind(this), this.Ma.bind(this)) : void 0 !== l.ReadableStream && "body" in t ? (this.response = this.responseText = "", this.c = t.body.getReader(), this.l = new TextDecoder, zo(this)) : t.text().then(this.ic.bind(this), this.Ma.bind(this)))))
                    }, t.ec = function(t) {
                        if (this.a) {
                            var e = this.l.decode(t.value ? t.value : new Uint8Array(0), {
                                stream: !t.done
                            });
                            e && (this.response = this.responseText += e), t.done ? $o(this, !0) : Zo(this), 3 == this.readyState && zo(this)
                        }
                    }, t.ic = function(t) {
                        this.a && (this.response = this.responseText = t, $o(this, !0))
                    }, t.hc = function(t) {
                        this.a && (this.response = t, $o(this, !0))
                    }, t.Ma = function(t) {
                        var e = this.h;
                        e && e.log(Vo, "Failed to fetch url " + this.g, t instanceof Error ? t : Error(t)), this.a && $o(this, !0)
                    }, t.setRequestHeader = function(t, e) {
                        this.i.append(t, e)
                    }, t.getResponseHeader = function(t) {
                        return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.h) && t.log(Vo, "Attempting to get response header but no headers have been received for url: " + this.g, void 0), "")
                    }, t.getAllResponseHeaders = function() {
                        if (!this.b) {
                            var t = this.h;
                            return t && t.log(Vo, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0), ""
                        }
                        t = [];
                        for (var e = this.b.entries(), n = e.next(); !n.done;) n = n.value, t.push(n[0] + ": " + n[1]), n = e.next();
                        return t.join("\r\n")
                    }, k(Qo, nn);
                    var ta = "";
                    Qo.prototype.b = Go("goog.net.XhrIo");
                    var ea = /^https?$/i,
                        na = ["POST", "PUT"];

                    function ia(e, t, n, i, r) {
                        if (e.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + e.l + "; newUri=" + t);
                        n = n ? n.toUpperCase() : "GET", e.l = t, e.h = "", e.O = n, e.I = !1, e.c = !0, e.a = e.B ? e.B.a() : Eo.a(), e.w = e.B ? _o(e.B) : _o(Eo), e.a.onreadystatechange = I(e.Lb, e);
                        try {
                            Wo(e.b, fa(e, "Opening Xhr")), e.J = !0, e.a.open(n, String(t), !0), e.J = !1
                        } catch (t) {
                            return Wo(e.b, fa(e, "Error opening Xhr: " + t.message)), void oa(e, t)
                        }
                        t = i || "";
                        var o = new ln(e.headers);
                        r && function(t, e) {
                            if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                            else if (v(t) || h(t)) M(t, e, void 0);
                            else
                                for (var n = hn(t), i = cn(t), r = i.length, o = 0; o < r; o++) e.call(void 0, i[o], n && n[o], t)
                        }(r, function(t, e) {
                            o.set(e, t)
                        }), r = function(t) {
                            t: {
                                for (var e = ra, n = t.length, i = h(t) ? t.split("") : t, r = 0; r < n; r++)
                                    if (r in i && e.call(void 0, i[r], r, t)) {
                                        e = r;
                                        break t
                                    }
                                e = -1
                            }
                            return e < 0 ? null : h(t) ? t.charAt(e) : t[e]
                        }(o.X()), i = l.FormData && t instanceof l.FormData, !V(na, n) || r || i || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach(function(t, e) {
                            this.a.setRequestHeader(e, t)
                        }, e), e.m && (e.a.responseType = e.m), "withCredentials" in e.a && e.a.withCredentials !== e.P && (e.a.withCredentials = e.P);
                        try {
                            ca(e), 0 < e.g && (e.v = function(t) {
                                return me && Ne(9) && "number" == typeof t.timeout && void 0 !== t.ontimeout
                            }(e.a), Wo(e.b, fa(e, "Will abort after " + e.g + "ms if incomplete, xhr2 " + e.v)), e.v ? (e.a.timeout = e.g, e.a.ontimeout = I(e.Ga, e)) : e.o = sn(e.Ga, e.g, e)), Wo(e.b, fa(e, "Sending request")), e.i = !0, e.a.send(t), e.i = !1
                        } catch (t) {
                            Wo(e.b, fa(e, "Send error: " + t.message)), oa(e, t)
                        }
                    }

                    function ra(t) {
                        return "content-type" == t.toLowerCase()
                    }

                    function oa(t, e) {
                        t.c = !1, t.a && (t.f = !0, t.a.abort(), t.f = !1), t.h = e, aa(t), ua(t)
                    }

                    function aa(t) {
                        t.I || (t.I = !0, t.dispatchEvent("complete"), t.dispatchEvent("error"))
                    }

                    function sa(e) {
                        if (e.c && void 0 !== u)
                            if (e.w[1] && 4 == ha(e) && 2 == la(e)) Wo(e.b, fa(e, "Local request error detected and ignored"));
                            else if (e.i && 4 == ha(e)) sn(e.Lb, 0, e);
                        else if (e.dispatchEvent("readystatechange"), 4 == ha(e)) {
                            Wo(e.b, fa(e, "Request complete")), e.c = !1;
                            try {
                                var t, n = la(e);
                                t: switch (n) {
                                    case 200:
                                    case 201:
                                    case 202:
                                    case 204:
                                    case 206:
                                    case 304:
                                    case 1223:
                                        var i = !0;
                                        break t;
                                    default:
                                        i = !1
                                }
                                if (!(t = i)) {
                                    var r;
                                    if (r = 0 === n) {
                                        var o = String(e.l).match(pn)[1] || null;
                                        if (!o && l.self && l.self.location) {
                                            var a = l.self.location.protocol;
                                            o = a.substr(0, a.length - 1)
                                        }
                                        r = !ea.test(o ? o.toLowerCase() : "")
                                    }
                                    t = r
                                }
                                if (t) e.dispatchEvent("complete"), e.dispatchEvent("success");
                                else {
                                    try {
                                        var s = 2 < ha(e) ? e.a.statusText : ""
                                    } catch (t) {
                                        Wo(e.b, "Can not get status: " + t.message), s = ""
                                    }
                                    e.h = s + " [" + la(e) + "]", aa(e)
                                }
                            } finally {
                                ua(e)
                            }
                        }
                    }

                    function ua(e, t) {
                        if (e.a) {
                            ca(e);
                            var n = e.a,
                                i = e.w[0] ? d : null;
                            e.a = null, e.w = null, t || e.dispatchEvent("ready");
                            try {
                                n.onreadystatechange = i
                            } catch (t) {
                                (e = e.b) && e.log(Uo, "Problem encountered resetting onreadystatechange: " + t.message, void 0)
                            }
                        }
                    }

                    function ca(t) {
                        t.a && t.v && (t.a.ontimeout = null), t.o && (l.clearTimeout(t.o), t.o = null)
                    }

                    function ha(t) {
                        return t.a ? t.a.readyState : 0
                    }

                    function la(t) {
                        try {
                            return 2 < ha(t) ? t.a.status : -1
                        } catch (t) {
                            return -1
                        }
                    }

                    function fa(t, e) {
                        return e + " [" + t.O + " " + t.l + " " + la(t) + "]"
                    }

                    function da(t) {
                        var e = ka;
                        this.g = [], this.v = e, this.o = t || null, this.f = this.a = !1, this.c = void 0, this.u = this.w = this.i = !1, this.h = 0, this.b = null, this.l = 0
                    }

                    function pa(t, e, n) {
                        t.a = !0, t.c = n, t.f = !e, ba(t)
                    }

                    function va(t) {
                        if (t.a) {
                            if (!t.u) throw new ya(t);
                            t.u = !1
                        }
                    }

                    function ma(t, e, n, i) {
                        t.g.push([e, n, i]), t.a && ba(t)
                    }

                    function ga(t) {
                        return U(t.g, function(t) {
                            return m(t[1])
                        })
                    }

                    function ba(e) {
                        if (e.h && e.a && ga(e)) {
                            var n = e.h,
                                i = Ta[n];
                            i && (l.clearTimeout(i.a), delete Ta[n]), e.h = 0
                        }
                        e.b && (e.b.l--, delete e.b), n = e.c;
                        for (var t = i = !1; e.g.length && !e.i;) {
                            var r = e.g.shift(),
                                o = r[0],
                                a = r[1];
                            if (r = r[2], o = e.f ? a : o) try {
                                var s = o.call(r || e.o, n);
                                void 0 !== s && (e.f = e.f && (s == n || s instanceof Error), e.c = n = s), (A(n) || "function" == typeof l.Promise && n instanceof l.Promise) && (t = !0, e.i = !0)
                            } catch (t) {
                                n = t, e.f = !0, ga(e) || (i = !0)
                            }
                        }
                        e.c = n, t && (s = I(e.m, e, !0), t = I(e.m, e, !1), n instanceof da ? (ma(n, s, t), n.w = !0) : n.then(s, t)), i && (n = new Ia(n), Ta[n.a] = n, e.h = n.a)
                    }

                    function ya() {
                        S.call(this)
                    }

                    function wa() {
                        S.call(this)
                    }

                    function Ia(t) {
                        this.a = l.setTimeout(I(this.c, this), 0), this.b = t
                    }(t = Qo.prototype).Ga = function() {
                        void 0 !== u && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", Wo(this.b, fa(this, this.h)), this.dispatchEvent("timeout"), this.abort(8))
                    }, t.abort = function() {
                        this.a && this.c && (Wo(this.b, fa(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ua(this))
                    }, t.xa = function() {
                        this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), ua(this, !0)), Qo.qb.xa.call(this)
                    }, t.Lb = function() {
                        this.ta || (this.J || this.i || this.f ? sa(this) : this.yc())
                    }, t.yc = function() {
                        sa(this)
                    }, t.getResponse = function() {
                        try {
                            if (!this.a) return null;
                            if ("response" in this.a) return this.a.response;
                            switch (this.m) {
                                case ta:
                                case "text":
                                    return this.a.responseText;
                                case "arraybuffer":
                                    if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer
                            }
                            var t = this.b;
                            return t && t.log(Uo, "Response type " + this.m + " is not supported on this browser", void 0), null
                        } catch (t) {
                            return Wo(this.b, "Can not get response: " + t.message), null
                        }
                    }, da.prototype.cancel = function(t) {
                        if (this.a) this.c instanceof da && this.c.cancel();
                        else {
                            if (this.b) {
                                var e = this.b;
                                delete this.b, t ? e.cancel(t) : (e.l--, e.l <= 0 && e.cancel())
                            }
                            this.v ? this.v.call(this.o, this) : this.u = !0, this.a || (t = new wa(this), va(this), pa(this, !1, t))
                        }
                    }, da.prototype.m = function(t, e) {
                        this.i = !1, pa(this, t, e)
                    }, da.prototype.then = function(t, e, n) {
                        var i, r, o = new qt(function(t, e) {
                            i = t, r = e
                        });
                        return ma(this, i, function(t) {
                            t instanceof wa ? o.cancel() : r(t)
                        }), o.then(t, e, n)
                    }, da.prototype.$goog_Thenable = !0, k(ya, S), ya.prototype.message = "Deferred has already fired", ya.prototype.name = "AlreadyCalledError", k(wa, S), wa.prototype.message = "Deferred was canceled", wa.prototype.name = "CanceledError", Ia.prototype.c = function() {
                        throw delete Ta[this.a], this.b
                    };
                    var Ta = {};

                    function Ea(t) {
                        var e, n = document,
                            i = et(t).toString(),
                            r = document.createElement("SCRIPT"),
                            o = {
                                Nb: r,
                                Ga: void 0
                            },
                            a = new da(o);
                        return e = window.setTimeout(function() {
                                Aa(r, !0);
                                var t = new Oa(Na, "Timeout reached for loading script " + i);
                                va(a), pa(a, !1, t)
                            }, 5e3), o.Ga = e, r.onload = r.onreadystatechange = function() {
                                r.readyState && "loaded" != r.readyState && "complete" != r.readyState || (Aa(r, !1, e), va(a), pa(a, !0, null))
                            }, r.onerror = function() {
                                Aa(r, !0, e);
                                var t = new Oa(Sa, "Error while loading script " + i);
                                va(a), pa(a, !1, t)
                            }, J(o = {}, {
                                type: "text/javascript",
                                charset: "UTF-8"
                            }), Kn(r, o),
                            function(t, e) {
                                L(t, "HTMLScriptElement"), t.src = et(e), null === f && (f = (e = (e = l.document).querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && s.test(e) ? e : ""), (e = f) && t.setAttribute("nonce", e)
                            }(r, t),
                            function(t) {
                                var e;
                                return (e = (t || document).getElementsByTagName("HEAD")) && 0 != e.length ? e[0] : t.documentElement
                            }(n).appendChild(r), a
                    }

                    function ka() {
                        if (this && this.Nb) {
                            var t = this.Nb;
                            t && "SCRIPT" == t.tagName && Aa(t, !0, this.Ga)
                        }
                    }

                    function Aa(t, e, n) {
                        null != n && l.clearTimeout(n), t.onload = d, t.onerror = d, t.onreadystatechange = d, e && window.setTimeout(function() {
                            t && t.parentNode && t.parentNode.removeChild(t)
                        }, 0)
                    }
                    var Sa = 0,
                        Na = 1;

                    function Oa(t, e) {
                        var n = "Jsloader error (code #" + t + ")";
                        e && (n += ": " + e), S.call(this, n), this.code = t
                    }

                    function _a(t) {
                        this.f = t
                    }

                    function Pa(t, e, n) {
                        if (this.c = t, t = e || {}, this.l = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.u = t.secureTokenTimeout || Ca, this.g = W(t.secureTokenHeaders || La), this.h = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.i = t.firebaseTimeout || xa, this.a = W(t.firebaseHeaders || Ma), n && (this.a["X-Client-Version"] = n, this.g["X-Client-Version"] = n), n = "Node" == ui(), !(n = l.XMLHttpRequest || n && fl.INTERNAL.node && fl.INTERNAL.node.XMLHttpRequest) && !si()) throw new Yi("internal-error", "The XMLHttpRequest compatibility library was not found.");
                        this.f = void 0, si() ? this.f = new Xo(self) : ci() ? this.f = new _a(n) : this.f = new Do, this.b = null
                    }
                    k(Oa, S), k(_a, Oo), _a.prototype.a = function() {
                        return new this.f
                    }, _a.prototype.b = function() {
                        return {}
                    };
                    var Ra, Da = "idToken",
                        Ca = new Oi(3e4, 6e4),
                        La = {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        xa = new Oi(3e4, 6e4),
                        Ma = {
                            "Content-Type": "application/json"
                        };

                    function ja(t, e) {
                        e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"]
                    }

                    function Ua(t, e) {
                        e ? (t.a["X-Client-Version"] = e, t.g["X-Client-Version"] = e) : (delete t.a["X-Client-Version"], delete t.g["X-Client-Version"])
                    }

                    function Va(t, e, n, i, r, o, a) {
                        (t = function() {
                            var t = vi();
                            return !((t = fi(t) != li ? null : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length ? parseInt(t[1], 10) : null) && t < 30) && (!me || !Ae || 9 < Ae)
                        }() || si() ? I(t.o, t) : (Ra = Ra || new qt(function(t, e) {
                            ! function(t, e) {
                                if (((window.gapi || {}).client || {}).request) t();
                                else {
                                    l[Ka] = function() {
                                            ((window.gapi || {}).client || {}).request ? t() : e(Error("CORS_UNSUPPORTED"))
                                        },
                                        function(t, e) {
                                            ma(t, null, e, void 0)
                                        }(Ea(nt(Fa, {
                                            onload: Ka
                                        })), function() {
                                            e(Error("CORS_UNSUPPORTED"))
                                        })
                                }
                            }(t, e)
                        }), I(t.m, t)))(e, n, i, r, o, a)
                    }
                    Pa.prototype.R = function() {
                        return this.b
                    }, Pa.prototype.o = function(t, n, e, i, r, o) {
                        if (si() && (void 0 === l.fetch || void 0 === l.Headers || void 0 === l.Request)) throw new Yi("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
                        var a = new Qo(this.f);
                        if (o) {
                            a.g = Math.max(0, o);
                            var s = setTimeout(function() {
                                a.dispatchEvent("timeout")
                            }, o)
                        }
                        rn(a, "complete", function() {
                            s && clearTimeout(s);
                            var e = null;
                            try {
                                e = JSON.parse(function(e) {
                                    try {
                                        return e.a ? e.a.responseText : ""
                                    } catch (t) {
                                        return Wo(e.b, "Can not get responseText: " + t.message), ""
                                    }
                                }(this)) || null
                            } catch (t) {
                                e = null
                            }
                            n && n(e)
                        }), on(a, "ready", function() {
                            s && clearTimeout(s), le(this)
                        }), on(a, "timeout", function() {
                            s && clearTimeout(s), le(this), n && n(null)
                        }), ia(a, t, e, i, r)
                    };
                    var Fa = new Y(Z, "https://apis.google.com/js/client.js?onload=%{onload}"),
                        Ka = "__fcb" + Math.floor(1e6 * Math.random()).toString();

                    function qa(t) {
                        if (!h(t = t.email) || !ii.test(t)) throw new Yi("invalid-email")
                    }

                    function Ha(t) {
                        "email" in t && qa(t)
                    }

                    function Ba(t) {
                        if (!t[Da]) throw new Yi("internal-error")
                    }

                    function Ga(t) {
                        if (t.phoneNumber || t.temporaryProof) {
                            if (!t.phoneNumber || !t.temporaryProof) throw new Yi("internal-error")
                        } else {
                            if (!t.sessionInfo) throw new Yi("missing-verification-id");
                            if (!t.code) throw new Yi("missing-verification-code")
                        }
                    }
                    Pa.prototype.m = function(t, n, i, r, o) {
                        var a = this;
                        Ra.then(function() {
                            window.gapi.client.setApiKey(a.c);
                            var e = window.gapi.auth.getToken();
                            window.gapi.auth.setToken(null), window.gapi.client.request({
                                path: t,
                                method: i,
                                body: r,
                                headers: o,
                                authType: "none",
                                callback: function(t) {
                                    window.gapi.auth.setToken(e), n && n(t)
                                }
                            })
                        }).s(function(t) {
                            n && n({
                                error: {
                                    message: t && t.message || "CORS_UNSUPPORTED"
                                }
                            })
                        })
                    }, Pa.prototype.ob = function() {
                        return Ns(this, bs, {})
                    }, Pa.prototype.rb = function(t, e) {
                        return Ns(this, ms, {
                            idToken: t,
                            email: e
                        })
                    }, Pa.prototype.sb = function(t, e) {
                        return Ns(this, gs, {
                            idToken: t,
                            password: e
                        })
                    };
                    var Wa = {
                        displayName: "DISPLAY_NAME",
                        photoUrl: "PHOTO_URL"
                    };

                    function Xa(t) {
                        if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken) throw new Yi("internal-error")
                    }

                    function Ja(t, e) {
                        return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf("oidc.") && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId : t.postBody && (xn(t = new Rn(t.postBody), "nonce") && (e.nonce = t.get("nonce")))), e
                    }

                    function Ya(t) {
                        var e = null;
                        if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", e = No(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use", e = No(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use", e = No(t)) : t.errorMessage && (e = Os(t.errorMessage)), e) throw e;
                        if (!t[Da]) throw new Yi("internal-error")
                    }

                    function za(t, e) {
                        return e.returnIdpCredential = !0, Ns(t, ys, e)
                    }

                    function $a(t, e) {
                        return e.returnIdpCredential = !0, Ns(t, Is, e)
                    }

                    function Za(t, e) {
                        return e.returnIdpCredential = !0, e.autoCreate = !1, Ns(t, ws, e)
                    }

                    function Qa(t) {
                        if (!t.oobCode) throw new Yi("invalid-action-code")
                    }(t = Pa.prototype).tb = function(t, i) {
                        var r = {
                                idToken: t
                            },
                            o = [];
                        return B(Wa, function(t, e) {
                            var n = i[e];
                            null === n ? o.push(t) : e in i && (r[e] = n)
                        }), o.length && (r.deleteAttribute = o), Ns(this, ms, r)
                    }, t.kb = function(t, e) {
                        return J(t = {
                            requestType: "PASSWORD_RESET",
                            email: t
                        }, e), Ns(this, ls, t)
                    }, t.lb = function(t, e) {
                        return J(t = {
                            requestType: "EMAIL_SIGNIN",
                            email: t
                        }, e), Ns(this, cs, t)
                    }, t.jb = function(t, e) {
                        return J(t = {
                            requestType: "VERIFY_EMAIL",
                            idToken: t
                        }, e), Ns(this, hs, t)
                    }, t.Va = function(t) {
                        return Ns(this, ks, t)
                    }, t.$a = function(t, e) {
                        return Ns(this, ps, {
                            oobCode: t,
                            newPassword: e
                        })
                    }, t.Ka = function(t) {
                        return Ns(this, es, {
                            oobCode: t
                        })
                    }, t.Xa = function(t) {
                        return Ns(this, ts, {
                            oobCode: t
                        })
                    };
                    var ts = {
                            endpoint: "setAccountInfo",
                            D: Qa,
                            fa: "email",
                            F: !0
                        },
                        es = {
                            endpoint: "resetPassword",
                            D: Qa,
                            K: function(t) {
                                var e = t.requestType;
                                if (!e || !t.email && "EMAIL_SIGNIN" != e) throw new Yi("internal-error")
                            },
                            F: !0
                        },
                        ns = {
                            endpoint: "signupNewUser",
                            D: function(t) {
                                if (qa(t), !t.password) throw new Yi("weak-password")
                            },
                            K: Ba,
                            T: !0,
                            F: !0
                        },
                        is = {
                            endpoint: "createAuthUri",
                            F: !0
                        },
                        rs = {
                            endpoint: "deleteAccount",
                            V: ["idToken"]
                        },
                        os = {
                            endpoint: "setAccountInfo",
                            V: ["idToken", "deleteProvider"],
                            D: function(t) {
                                if (!p(t.deleteProvider)) throw new Yi("internal-error")
                            }
                        },
                        as = {
                            endpoint: "emailLinkSignin",
                            V: ["email", "oobCode"],
                            D: qa,
                            K: Ba,
                            T: !0,
                            F: !0
                        },
                        ss = {
                            endpoint: "emailLinkSignin",
                            V: ["idToken", "email", "oobCode"],
                            D: qa,
                            K: Ba,
                            T: !0
                        },
                        us = {
                            endpoint: "getAccountInfo"
                        },
                        cs = {
                            endpoint: "getOobConfirmationCode",
                            V: ["requestType"],
                            D: function(t) {
                                if ("EMAIL_SIGNIN" != t.requestType) throw new Yi("internal-error");
                                qa(t)
                            },
                            fa: "email",
                            F: !0
                        },
                        hs = {
                            endpoint: "getOobConfirmationCode",
                            V: ["idToken", "requestType"],
                            D: function(t) {
                                if ("VERIFY_EMAIL" != t.requestType) throw new Yi("internal-error")
                            },
                            fa: "email",
                            F: !0
                        },
                        ls = {
                            endpoint: "getOobConfirmationCode",
                            V: ["requestType"],
                            D: function(t) {
                                if ("PASSWORD_RESET" != t.requestType) throw new Yi("internal-error");
                                qa(t)
                            },
                            fa: "email",
                            F: !0
                        },
                        fs = {
                            wb: !0,
                            endpoint: "getProjectConfig",
                            Kb: "GET"
                        },
                        ds = {
                            wb: !0,
                            endpoint: "getRecaptchaParam",
                            Kb: "GET",
                            K: function(t) {
                                if (!t.recaptchaSiteKey) throw new Yi("internal-error")
                            }
                        },
                        ps = {
                            endpoint: "resetPassword",
                            D: Qa,
                            fa: "email",
                            F: !0
                        },
                        vs = {
                            endpoint: "sendVerificationCode",
                            V: ["phoneNumber", "recaptchaToken"],
                            fa: "sessionInfo",
                            F: !0
                        },
                        ms = {
                            endpoint: "setAccountInfo",
                            V: ["idToken"],
                            D: Ha,
                            T: !0
                        },
                        gs = {
                            endpoint: "setAccountInfo",
                            V: ["idToken"],
                            D: function(t) {
                                if (Ha(t), !t.password) throw new Yi("weak-password")
                            },
                            K: Ba,
                            T: !0
                        },
                        bs = {
                            endpoint: "signupNewUser",
                            K: Ba,
                            T: !0,
                            F: !0
                        },
                        ys = {
                            endpoint: "verifyAssertion",
                            D: Xa,
                            Qa: Ja,
                            K: Ya,
                            T: !0,
                            F: !0
                        },
                        ws = {
                            endpoint: "verifyAssertion",
                            D: Xa,
                            Qa: Ja,
                            K: function(t) {
                                if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new Yi("user-not-found");
                                if (t.errorMessage) throw Os(t.errorMessage);
                                if (!t[Da]) throw new Yi("internal-error")
                            },
                            T: !0,
                            F: !0
                        },
                        Is = {
                            endpoint: "verifyAssertion",
                            D: function(t) {
                                if (Xa(t), !t.idToken) throw new Yi("internal-error")
                            },
                            Qa: Ja,
                            K: Ya,
                            T: !0
                        },
                        Ts = {
                            endpoint: "verifyCustomToken",
                            D: function(t) {
                                if (!t.token) throw new Yi("invalid-custom-token")
                            },
                            K: Ba,
                            T: !0,
                            F: !0
                        },
                        Es = {
                            endpoint: "verifyPassword",
                            D: function(t) {
                                if (qa(t), !t.password) throw new Yi("wrong-password")
                            },
                            K: Ba,
                            T: !0,
                            F: !0
                        },
                        ks = {
                            endpoint: "verifyPhoneNumber",
                            D: Ga,
                            K: Ba,
                            F: !0
                        },
                        As = {
                            endpoint: "verifyPhoneNumber",
                            D: function(t) {
                                if (!t.idToken) throw new Yi("internal-error");
                                Ga(t)
                            },
                            K: function(t) {
                                if (t.temporaryProof) throw t.code = "credential-already-in-use", No(t);
                                Ba(t)
                            }
                        },
                        Ss = {
                            Yb: {
                                USER_NOT_FOUND: "user-not-found"
                            },
                            endpoint: "verifyPhoneNumber",
                            D: Ga,
                            K: Ba,
                            F: !0
                        };

                    function Ns(t, e, n) {
                        if (! function(t, e) {
                                if (!e || !e.length) return !0;
                                if (!t) return !1;
                                for (var n = 0; n < e.length; n++) {
                                    var i = t[e[n]];
                                    if (null == i || "" === i) return !1
                                }
                                return !0
                            }(n, e.V)) return zt(new Yi("internal-error"));
                        var i, r = e.Kb || "POST";
                        return Yt(n).then(e.D).then(function() {
                            return e.T && (n.returnSecureToken = !0), e.F && t.b && void 0 === n.tenantId && (n.tenantId = t.b),
                                function(t, e, i, r, o, n) {
                                    var a = In(t.h + e);
                                    yn(a, "key", t.c), n && yn(a, "cb", E().toString());
                                    var s = "GET" == i;
                                    if (s)
                                        for (var u in r) r.hasOwnProperty(u) && yn(a, u, r[u]);
                                    return new qt(function(e, n) {
                                        Va(t, a.toString(), function(t) {
                                            t ? t.error ? n(_s(t, o || {})) : e(t) : n(new Yi("network-request-failed"))
                                        }, i, s ? void 0 : Gn(Ei(r)), t.a, t.i.get())
                                    })
                                }(t, e.endpoint, r, n, e.Yb, e.wb || !1)
                        }).then(function(t) {
                            return i = t, e.Qa ? e.Qa(n, i) : i
                        }).then(e.K).then(function() {
                            if (!e.fa) return i;
                            if (!(e.fa in i)) throw new Yi("internal-error");
                            return i[e.fa]
                        })
                    }

                    function Os(t) {
                        return _s({
                            error: {
                                errors: [{
                                    message: t
                                }],
                                code: 400,
                                message: t
                            }
                        })
                    }

                    function _s(t, e) {
                        var n = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
                            i = {
                                keyInvalid: "invalid-api-key",
                                ipRefererBlocked: "app-not-authorized"
                            };
                        if (n = i[n] ? new Yi(i[n]) : null) return n;
                        for (var r in n = t.error && t.error.message || "", J(i = {
                                INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                                CREDENTIAL_MISMATCH: "custom-token-mismatch",
                                MISSING_CUSTOM_TOKEN: "internal-error",
                                INVALID_IDENTIFIER: "invalid-email",
                                MISSING_CONTINUE_URI: "internal-error",
                                INVALID_EMAIL: "invalid-email",
                                INVALID_PASSWORD: "wrong-password",
                                USER_DISABLED: "user-disabled",
                                MISSING_PASSWORD: "internal-error",
                                EMAIL_EXISTS: "email-already-in-use",
                                PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                                INVALID_IDP_RESPONSE: "invalid-credential",
                                INVALID_PENDING_TOKEN: "invalid-credential",
                                FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                                MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
                                INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                                INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                                INVALID_SENDER: "invalid-sender",
                                EMAIL_NOT_FOUND: "user-not-found",
                                RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                                EXPIRED_OOB_CODE: "expired-action-code",
                                INVALID_OOB_CODE: "invalid-action-code",
                                MISSING_OOB_CODE: "internal-error",
                                INVALID_PROVIDER_ID: "invalid-provider-id",
                                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                                INVALID_ID_TOKEN: "invalid-user-token",
                                TOKEN_EXPIRED: "user-token-expired",
                                USER_NOT_FOUND: "user-token-expired",
                                CORS_UNSUPPORTED: "cors-unsupported",
                                DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                                INVALID_APP_ID: "invalid-app-id",
                                TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                                WEAK_PASSWORD: "weak-password",
                                OPERATION_NOT_ALLOWED: "operation-not-allowed",
                                USER_CANCELLED: "user-cancelled",
                                CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                                INVALID_APP_CREDENTIAL: "invalid-app-credential",
                                INVALID_CODE: "invalid-verification-code",
                                INVALID_PHONE_NUMBER: "invalid-phone-number",
                                INVALID_SESSION_INFO: "invalid-verification-id",
                                INVALID_TEMPORARY_PROOF: "invalid-credential",
                                MISSING_APP_CREDENTIAL: "missing-app-credential",
                                MISSING_CODE: "missing-verification-code",
                                MISSING_PHONE_NUMBER: "missing-phone-number",
                                MISSING_SESSION_INFO: "missing-verification-id",
                                QUOTA_EXCEEDED: "quota-exceeded",
                                SESSION_EXPIRED: "code-expired",
                                REJECTED_CREDENTIAL: "rejected-credential",
                                INVALID_CONTINUE_URI: "invalid-continue-uri",
                                MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                                MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                                UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                                INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
                                INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                                INVALID_CERT_HASH: "invalid-cert-hash",
                                UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
                                INVALID_TENANT_ID: "invalid-tenant-id",
                                ADMIN_ONLY_OPERATION: "admin-restricted-operation"
                            }, e || {}), e = (e = n.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < e.length ? e[1] : void 0, i)
                            if (0 === n.indexOf(r)) return new Yi(i[r], e);
                        return !e && t && (e = Ti(t)), new Yi("internal-error", e)
                    }

                    function Ps(t) {
                        this.b = t, this.a = null, this.fb = function(o) {
                            return (Ls = Ls || new qt(function(t, e) {
                                function n() {
                                    Ni(), mi("gapi.load")("gapi.iframes", {
                                        callback: t,
                                        ontimeout: function() {
                                            Ni(), e(Error("Network Error"))
                                        },
                                        timeout: Ds.get()
                                    })
                                }
                                if (mi("gapi.iframes.Iframe")) t();
                                else if (mi("gapi.load")) n();
                                else {
                                    var i = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
                                    l[i] = function() {
                                        mi("gapi.load") ? n() : e(Error("Network Error"))
                                    }, Yt(Ea(i = nt(Rs, {
                                        onload: i
                                    }))).s(function() {
                                        e(Error("Network Error"))
                                    })
                                }
                            }).s(function(t) {
                                throw Ls = null, t
                            })).then(function() {
                                return new qt(function(i, r) {
                                    mi("gapi.iframes.getContext")().open({
                                        where: document.body,
                                        url: o.b,
                                        messageHandlersFilter: mi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                                        attributes: {
                                            style: {
                                                position: "absolute",
                                                top: "-100px",
                                                width: "1px",
                                                height: "1px"
                                            }
                                        },
                                        dontclear: !0
                                    }, function(t) {
                                        function e() {
                                            clearTimeout(n), i()
                                        }
                                        o.a = t, o.a.restyle({
                                            setHideOnLeave: !1
                                        });
                                        var n = setTimeout(function() {
                                            r(Error("Network Error"))
                                        }, Cs.get());
                                        t.ping(e).then(e, function() {
                                            r(Error("Network Error"))
                                        })
                                    })
                                })
                            })
                        }(this)
                    }
                    var Rs = new Y(Z, "https://apis.google.com/js/api.js?onload=%{onload}"),
                        Ds = new Oi(3e4, 6e4),
                        Cs = new Oi(5e3, 15e3),
                        Ls = null;

                    function xs(t, e, n) {
                        this.i = t, this.g = e, this.h = n, this.f = null, this.a = Tn(this.i, "/__/auth/iframe"), yn(this.a, "apiKey", this.g), yn(this.a, "appName", this.h), this.b = null, this.c = []
                    }

                    function Ms(t, e, n, i, r) {
                        this.o = t, this.m = e, this.c = n, this.u = i, this.i = this.g = this.l = null, this.a = r, this.h = this.f = null
                    }

                    function js(t) {
                        try {
                            return fl.app(t).auth().Aa()
                        } catch (t) {
                            return []
                        }
                    }

                    function Us(t, e, n, i, r) {
                        this.u = t, this.f = e, this.b = n, this.c = i || null, this.h = r || null, this.m = this.o = this.v = null, this.g = [], this.l = this.a = null
                    }

                    function Vs(t) {
                        var s = $n();
                        return function(t) {
                            return Ns(t, fs, {}).then(function(t) {
                                return t.authorizedDomains || []
                            })
                        }(t).then(function(t) {
                            t: {
                                var e = In(s),
                                    n = e.f;e = e.b;
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i],
                                        o = e,
                                        a = n;
                                    if (o = 0 == r.indexOf("chrome-extension://") ? In(r).b == o && "chrome-extension" == a : ("http" == a || "https" == a) && (ni.test(r) ? o == r : (r = r.split(".").join("\\."), new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(o)))) {
                                        t = !0;
                                        break t
                                    }
                                }
                                t = !1
                            }
                            if (!t) throw new Ao($n())
                        })
                    }

                    function Fs(r) {
                        return r.l || (r.l = ri().then(function() {
                            if (!r.o) {
                                var t = r.c,
                                    e = r.h,
                                    n = js(r.b),
                                    i = new xs(r.u, r.f, r.b);
                                i.f = t, i.b = e, i.c = H(n || []), r.o = i.toString()
                            }
                            r.i = new Ps(r.o),
                                function(i) {
                                    if (!i.i) throw Error("IfcHandler must be initialized!");
                                    ! function(t, e) {
                                        t.fb.then(function() {
                                            t.a.register("authEvent", e, mi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                        })
                                    }(i.i, function(t) {
                                        var e = {};
                                        if (t && t.authEvent) {
                                            var n = !1;
                                            for (t = Io(t.authEvent), e = 0; e < i.g.length; e++) n = i.g[e](t) || n;
                                            return (e = {}).status = n ? "ACK" : "ERROR", Yt(e)
                                        }
                                        return e.status = "ERROR", Yt(e)
                                    })
                                }(r)
                        })), r.l
                    }

                    function Ks(t) {
                        return t.m || (t.v = t.c ? pi(t.c, js(t.b)) : null, t.m = new Pa(t.f, Nr(t.h), t.v)), t.m
                    }

                    function qs(t, e, n, i, r, o, a, s, u, c, h) {
                        return (t = new Ms(t, e, n, i, r)).l = o, t.g = a, t.i = s, t.b = W(u || null), t.f = c, t.nb(h).toString()
                    }

                    function Hs(t) {
                        if (this.a = t || fl.INTERNAL.reactNative && fl.INTERNAL.reactNative.AsyncStorage, !this.a) throw new Yi("internal-error", "The React Native compatibility library was not found.");
                        this.type = "asyncStorage"
                    }

                    function Bs(t) {
                        this.b = t, this.a = {}, this.f = I(this.c, this)
                    }
                    xs.prototype.toString = function() {
                        return this.f ? yn(this.a, "v", this.f) : Ln(this.a.a, "v"), this.b ? yn(this.a, "eid", this.b) : Ln(this.a.a, "eid"), this.c.length ? yn(this.a, "fw", this.c.join(",")) : Ln(this.a.a, "fw"), this.a.toString()
                    }, Ms.prototype.nb = function(t) {
                        return this.h = t, this
                    }, Ms.prototype.toString = function() {
                        var t = Tn(this.o, "/__/auth/handler");
                        if (yn(t, "apiKey", this.m), yn(t, "appName", this.c), yn(t, "authType", this.u), this.a.isOAuthProvider) {
                            var e = this.a;
                            try {
                                var n = fl.app(this.c).auth().ha()
                            } catch (t) {
                                n = null
                            }
                            for (var i in e.ab = n, yn(t, "providerId", this.a.providerId), n = Ei((e = this.a).zb)) n[i] = n[i].toString();
                            i = e.Fc, n = W(n);
                            for (var r = 0; r < i.length; r++) {
                                var o = i[r];
                                o in n && delete n[o]
                            }
                            e.cb && e.ab && !n[e.cb] && (n[e.cb] = e.ab), G(n) || yn(t, "customParameters", Ti(n))
                        }
                        if ("function" == typeof this.a.Hb && ((e = this.a.Hb()).length && yn(t, "scopes", e.join(","))), this.l ? yn(t, "redirectUrl", this.l) : Ln(t.a, "redirectUrl"), this.g ? yn(t, "eventId", this.g) : Ln(t.a, "eventId"), this.i ? yn(t, "v", this.i) : Ln(t.a, "v"), this.b)
                            for (var a in this.b) this.b.hasOwnProperty(a) && !wn(t, a) && yn(t, a, this.b[a]);
                        return this.h ? yn(t, "tid", this.h) : Ln(t.a, "tid"), this.f ? yn(t, "eid", this.f) : Ln(t.a, "eid"), (a = js(this.c)).length && yn(t, "fw", a.join(",")), t.toString()
                    }, (t = Us.prototype).Fb = function(e, n, t) {
                        var i = new Yi("popup-closed-by-user"),
                            r = new Yi("web-storage-unsupported"),
                            o = this,
                            a = !1;
                        return this.ia().then(function() {
                            (function(t) {
                                var e = {
                                    type: "webStorageSupport"
                                };
                                return Fs(t).then(function() {
                                    return function(e, n) {
                                        return e.fb.then(function() {
                                            return new qt(function(t) {
                                                e.a.send(n.type, n, t, mi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                            })
                                        })
                                    }(t.i, e)
                                }).then(function(t) {
                                    if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport;
                                    throw Error()
                                })
                            })(o).then(function(t) {
                                t || (e && ti(e), n(r), a = !0)
                            })
                        }).s(function() {}).then(function() {
                            if (!a) return function(n) {
                                return new qt(function(e) {
                                    return function t() {
                                        un(2e3).then(function() {
                                            if (n && !n.closed) return t();
                                            e()
                                        })
                                    }()
                                })
                            }(e)
                        }).then(function() {
                            if (!a) return un(t).then(function() {
                                n(i)
                            })
                        })
                    }, t.Ob = function() {
                        var t = vi();
                        return !Ii(t) && !Si(t)
                    }, t.Jb = function() {
                        return !1
                    }, t.Db = function(e, t, n, i, r, o, a, s) {
                        if (!e) return zt(new Yi("popup-blocked"));
                        if (a && !Ii()) return this.ia().s(function(t) {
                            ti(e), r(t)
                        }), i(), Yt();
                        this.a || (this.a = Vs(Ks(this)));
                        var u = this;
                        return this.a.then(function() {
                            var t = u.ia().s(function(t) {
                                throw ti(e), r(t), t
                            });
                            return i(), t
                        }).then(function() {
                            yo(n), a || Zn(qs(u.u, u.f, u.b, t, n, null, o, u.c, void 0, u.h, s), e)
                        }).s(function(t) {
                            throw "auth/network-request-failed" == t.code && (u.a = null), t
                        })
                    }, t.Eb = function(t, e, n, i) {
                        this.a || (this.a = Vs(Ks(this)));
                        var r = this;
                        return this.a.then(function() {
                            yo(e), Zn(qs(r.u, r.f, r.b, t, e, $n(), n, r.c, void 0, r.h, i))
                        }).s(function(t) {
                            throw "auth/network-request-failed" == t.code && (r.a = null), t
                        })
                    }, t.ia = function() {
                        var t = this;
                        return Fs(this).then(function() {
                            return t.i.fb
                        }).s(function() {
                            throw t.a = null, new Yi("network-request-failed")
                        })
                    }, t.Rb = function() {
                        return !0
                    }, t.ya = function(t) {
                        this.g.push(t)
                    }, t.La = function(e) {
                        K(this.g, function(t) {
                            return t == e
                        })
                    }, (t = Hs.prototype).get = function(t) {
                        return Yt(this.a.getItem(t)).then(function(t) {
                            return t && ki(t)
                        })
                    }, t.set = function(t, e) {
                        return Yt(this.a.setItem(t, Ti(e)))
                    }, t.S = function(t) {
                        return Yt(this.a.removeItem(t))
                    }, t.$ = function() {}, t.ea = function() {};
                    var Gs, Ws = [];

                    function Xs(t, e, n) {
                        G(t.a) && t.b.addEventListener("message", t.f), void 0 === t.a[e] && (t.a[e] = []), t.a[e].push(n)
                    }

                    function Js(t) {
                        this.a = t
                    }

                    function Ys(t) {
                        this.c = t, this.b = !1, this.a = []
                    }

                    function zs(i, t, e, n) {
                        var r, o, a, s, u = e || {},
                            c = null;
                        if (i.b) return zt(Error("connection_unavailable"));
                        var h = n ? 800 : 50,
                            l = "undefined" != typeof MessageChannel ? new MessageChannel : null;
                        return new qt(function(e, n) {
                            l ? (r = Math.floor(Math.random() * Math.pow(10, 20)).toString(), l.port1.start(), a = setTimeout(function() {
                                n(Error("unsupported_event"))
                            }, h), c = {
                                messageChannel: l,
                                onMessage: o = function(t) {
                                    t.data.eventId === r && ("ack" === t.data.status ? (clearTimeout(a), s = setTimeout(function() {
                                        n(Error("timeout"))
                                    }, 3e3)) : "done" === t.data.status ? (clearTimeout(s), void 0 !== t.data.response ? e(t.data.response) : n(Error("unknown_error"))) : (clearTimeout(a), clearTimeout(s), n(Error("invalid_response"))))
                                }
                            }, i.a.push(c), l.port1.addEventListener("message", o), i.c.postMessage({
                                eventType: t,
                                eventId: r,
                                data: u
                            }, [l.port2])) : n(Error("connection_unavailable"))
                        }).then(function(t) {
                            return $s(i, c), t
                        }).s(function(t) {
                            throw $s(i, c), t
                        })
                    }

                    function $s(t, e) {
                        if (e) {
                            var n = e.messageChannel,
                                i = e.onMessage;
                            n && (n.port1.removeEventListener("message", i), n.port1.close()), K(t.a, function(t) {
                                return t == e
                            })
                        }
                    }

                    function Zs() {
                        if (!eu()) throw new Yi("web-storage-unsupported");
                        this.c = {}, this.a = [], this.b = 0, this.u = l.indexedDB, this.type = "indexedDB", this.g = this.l = this.f = this.i = null, this.o = !1, this.h = null;
                        var i = this;
                        si() && self ? (this.l = function() {
                            var e = si() ? self : null;
                            if (M(Ws, function(t) {
                                    t.b == e && (n = t)
                                }), !n) {
                                var n = new Bs(e);
                                Ws.push(n)
                            }
                            return n
                        }(), Xs(this.l, "keyChanged", function(t, n) {
                            return au(i).then(function(e) {
                                return 0 < e.length && M(i.a, function(t) {
                                    t(e)
                                }), {
                                    keyProcessed: V(e, n.key)
                                }
                            })
                        }), Xs(this.l, "ping", function() {
                            return Yt(["keyChanged"])
                        })) : function() {
                            var t = l.navigator;
                            return t && t.serviceWorker ? Yt().then(function() {
                                return t.serviceWorker.ready
                            }).then(function(t) {
                                return t.active || null
                            }).s(function() {
                                return null
                            }) : Yt(null)
                        }().then(function(t) {
                            (i.h = t) && (i.g = new Ys(new Js(t)), zs(i.g, "ping", null, !0).then(function(t) {
                                t[0].fulfilled && V(t[0].value, "keyChanged") && (i.o = !0)
                            }).s(function() {}))
                        })
                    }

                    function Qs(i) {
                        return new qt(function(e, n) {
                            var t = i.u.open("firebaseLocalStorageDb", 1);
                            t.onerror = function(t) {
                                try {
                                    t.preventDefault()
                                } catch (t) {}
                                n(Error(t.target.error))
                            }, t.onupgradeneeded = function(t) {
                                t = t.target.result;
                                try {
                                    t.createObjectStore("firebaseLocalStorage", {
                                        keyPath: "fbase_key"
                                    })
                                } catch (t) {
                                    n(t)
                                }
                            }, t.onsuccess = function(t) {
                                (t = t.target.result).objectStoreNames.contains("firebaseLocalStorage") ? e(t) : function(i) {
                                    return new qt(function(t, e) {
                                        var n = i.u.deleteDatabase("firebaseLocalStorageDb");
                                        n.onsuccess = function() {
                                            t()
                                        }, n.onerror = function(t) {
                                            e(Error(t.target.error))
                                        }
                                    })
                                }(i).then(function() {
                                    return Qs(i)
                                }).then(function(t) {
                                    e(t)
                                }).s(function(t) {
                                    n(t)
                                })
                            }
                        })
                    }

                    function tu(t) {
                        return t.m || (t.m = Qs(t)), t.m
                    }

                    function eu() {
                        try {
                            return !!l.indexedDB
                        } catch (t) {
                            return !1
                        }
                    }

                    function nu(t) {
                        return t.objectStore("firebaseLocalStorage")
                    }

                    function iu(t, e) {
                        return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly")
                    }

                    function ru(t) {
                        return new qt(function(e, n) {
                            t.onsuccess = function(t) {
                                t && t.target ? e(t.target.result) : e()
                            }, t.onerror = function(t) {
                                n(t.target.error)
                            }
                        })
                    }

                    function ou(t, e) {
                        return t.g && t.h && function() {
                            var t = l.navigator;
                            return t && t.serviceWorker && t.serviceWorker.controller || null
                        }() === t.h ? zs(t.g, "keyChanged", {
                            key: e
                        }, t.o).then(function() {}).s(function() {}) : Yt()
                    }

                    function au(i) {
                        return tu(i).then(function(t) {
                            var r = nu(iu(t, !1));
                            return r.getAll ? ru(r.getAll()) : new qt(function(e, n) {
                                var i = [],
                                    t = r.openCursor();
                                t.onsuccess = function(t) {
                                    (t = t.target.result) ? (i.push(t.value), t.continue()) : e(i)
                                }, t.onerror = function(t) {
                                    n(t.target.error)
                                }
                            })
                        }).then(function(t) {
                            var e = {},
                                n = [];
                            if (0 == i.b) {
                                for (n = 0; n < t.length; n++) e[t[n].fbase_key] = t[n].value;
                                n = function t(e, n) {
                                    var i, r = [];
                                    for (i in e) i in n ? typeof e[i] != typeof n[i] ? r.push(i) : "object" == typeof e[i] && null != e[i] && null != n[i] ? 0 < t(e[i], n[i]).length && r.push(i) : e[i] !== n[i] && r.push(i) : r.push(i);
                                    for (i in n) i in e || r.push(i);
                                    return r
                                }(i.c, e), i.c = e
                            }
                            return n
                        })
                    }

                    function su(t) {
                        t.i && t.i.cancel("STOP_EVENT"), t.f && (clearTimeout(t.f), t.f = null)
                    }

                    function uu(t) {
                        var i = this,
                            r = null;
                        this.a = [], this.type = "indexedDB", this.c = t, this.b = Yt().then(function() {
                            if (eu()) {
                                var e = Ai(),
                                    n = "__sak" + e;
                                return Gs = Gs || new Zs, (r = Gs).set(n, e).then(function() {
                                    return r.get(n)
                                }).then(function(t) {
                                    if (t !== e) throw Error("indexedDB not supported!");
                                    return r.S(n)
                                }).then(function() {
                                    return r
                                }).s(function() {
                                    return i.c
                                })
                            }
                            return i.c
                        }).then(function(t) {
                            return i.type = t.type, t.$(function(e) {
                                M(i.a, function(t) {
                                    t(e)
                                })
                            }), t
                        })
                    }

                    function cu() {
                        this.a = {}, this.type = "inMemory"
                    }

                    function hu() {
                        if (! function() {
                                var t = "Node" == ui();
                                if (!(t = lu() || t && fl.INTERNAL.node && fl.INTERNAL.node.localStorage)) return !1;
                                try {
                                    return t.setItem("__sak", "1"), t.removeItem("__sak"), !0
                                } catch (t) {
                                    return !1
                                }
                            }()) {
                            if ("Node" == ui()) throw new Yi("internal-error", "The LocalStorage compatibility library was not found.");
                            throw new Yi("web-storage-unsupported")
                        }
                        this.a = lu() || fl.INTERNAL.node.localStorage, this.type = "localStorage"
                    }

                    function lu() {
                        try {
                            var t = l.localStorage,
                                e = Ai();
                            return t && (t.setItem(e, "1"), t.removeItem(e)), t
                        } catch (t) {
                            return null
                        }
                    }

                    function fu() {
                        this.type = "nullStorage"
                    }

                    function du() {
                        if (! function() {
                                var t = "Node" == ui();
                                if (!(t = pu() || t && fl.INTERNAL.node && fl.INTERNAL.node.sessionStorage)) return !1;
                                try {
                                    return t.setItem("__sak", "1"), t.removeItem("__sak"), !0
                                } catch (t) {
                                    return !1
                                }
                            }()) {
                            if ("Node" == ui()) throw new Yi("internal-error", "The SessionStorage compatibility library was not found.");
                            throw new Yi("web-storage-unsupported")
                        }
                        this.a = pu() || fl.INTERNAL.node.sessionStorage, this.type = "sessionStorage"
                    }

                    function pu() {
                        try {
                            var t = l.sessionStorage,
                                e = Ai();
                            return t && (t.setItem(e, "1"), t.removeItem(e)), t
                        } catch (t) {
                            return null
                        }
                    }

                    function vu() {
                        var t = {};
                        t.Browser = bu, t.Node = yu, t.ReactNative = wu, t.Worker = Iu, this.a = t[ui()]
                    }
                    Bs.prototype.c = function(n) {
                        var i = n.data.eventType,
                            r = n.data.eventId,
                            t = this.a[i];
                        if (t && 0 < t.length) {
                            n.ports[0].postMessage({
                                status: "ack",
                                eventId: r,
                                eventType: i,
                                response: null
                            });
                            var e = [];
                            M(t, function(t) {
                                e.push(Yt().then(function() {
                                    return t(n.origin, n.data.data)
                                }))
                            }), Zt(e).then(function(t) {
                                var e = [];
                                M(t, function(t) {
                                    e.push({
                                        fulfilled: t.Gb,
                                        value: t.value,
                                        reason: t.reason ? t.reason.message : void 0
                                    })
                                }), M(e, function(t) {
                                    for (var e in t) void 0 === t[e] && delete t[e]
                                }), n.ports[0].postMessage({
                                    status: "done",
                                    eventId: r,
                                    eventType: i,
                                    response: e
                                })
                            })
                        }
                    }, Js.prototype.postMessage = function(t, e) {
                        this.a.postMessage(t, e)
                    }, Ys.prototype.close = function() {
                        for (; 0 < this.a.length;) $s(this, this.a[0]);
                        this.b = !0
                    }, (t = Zs.prototype).set = function(n, i) {
                        var r, o = !1,
                            a = this;
                        return tu(this).then(function(t) {
                            return ru((t = nu(iu(r = t, !0))).get(n))
                        }).then(function(t) {
                            var e = nu(iu(r, !0));
                            return t ? (t.value = i, ru(e.put(t))) : (a.b++, o = !0, (t = {}).fbase_key = n, t.value = i, ru(e.add(t)))
                        }).then(function() {
                            return a.c[n] = i, ou(a, n)
                        }).ka(function() {
                            o && a.b--
                        })
                    }, t.get = function(e) {
                        return tu(this).then(function(t) {
                            return ru(nu(iu(t, !1)).get(e))
                        }).then(function(t) {
                            return t && t.value
                        })
                    }, t.S = function(e) {
                        var n = !1,
                            i = this;
                        return tu(this).then(function(t) {
                            return n = !0, i.b++, ru(nu(iu(t, !0)).delete(e))
                        }).then(function() {
                            return delete i.c[e], ou(i, e)
                        }).ka(function() {
                            n && i.b--
                        })
                    }, t.$ = function(t) {
                        0 == this.a.length && function(t) {
                            su(t),
                                function e() {
                                    t.f = setTimeout(function() {
                                        t.i = au(t).then(function(e) {
                                            0 < e.length && M(t.a, function(t) {
                                                t(e)
                                            })
                                        }).then(function() {
                                            e()
                                        }).s(function(t) {
                                            "STOP_EVENT" != t.message && e()
                                        })
                                    }, 800)
                                }()
                        }(this), this.a.push(t)
                    }, t.ea = function(e) {
                        K(this.a, function(t) {
                            return t == e
                        }), 0 == this.a.length && su(this)
                    }, (t = uu.prototype).get = function(e) {
                        return this.b.then(function(t) {
                            return t.get(e)
                        })
                    }, t.set = function(e, n) {
                        return this.b.then(function(t) {
                            return t.set(e, n)
                        })
                    }, t.S = function(e) {
                        return this.b.then(function(t) {
                            return t.S(e)
                        })
                    }, t.$ = function(t) {
                        this.a.push(t)
                    }, t.ea = function(e) {
                        K(this.a, function(t) {
                            return t == e
                        })
                    }, (t = cu.prototype).get = function(t) {
                        return Yt(this.a[t])
                    }, t.set = function(t, e) {
                        return this.a[t] = e, Yt()
                    }, t.S = function(t) {
                        return delete this.a[t], Yt()
                    }, t.$ = function() {}, t.ea = function() {}, (t = hu.prototype).get = function(t) {
                        var e = this;
                        return Yt().then(function() {
                            return ki(e.a.getItem(t))
                        })
                    }, t.set = function(e, n) {
                        var i = this;
                        return Yt().then(function() {
                            var t = Ti(n);
                            null === t ? i.S(e) : i.a.setItem(e, t)
                        })
                    }, t.S = function(t) {
                        var e = this;
                        return Yt().then(function() {
                            e.a.removeItem(t)
                        })
                    }, t.$ = function(t) {
                        l.window && Be(l.window, "storage", t)
                    }, t.ea = function(t) {
                        l.window && Xe(l.window, "storage", t)
                    }, (t = fu.prototype).get = function() {
                        return Yt(null)
                    }, t.set = function() {
                        return Yt()
                    }, t.S = function() {
                        return Yt()
                    }, t.$ = function() {}, t.ea = function() {}, (t = du.prototype).get = function(t) {
                        var e = this;
                        return Yt().then(function() {
                            return ki(e.a.getItem(t))
                        })
                    }, t.set = function(e, n) {
                        var i = this;
                        return Yt().then(function() {
                            var t = Ti(n);
                            null === t ? i.S(e) : i.a.setItem(e, t)
                        })
                    }, t.S = function(t) {
                        var e = this;
                        return Yt().then(function() {
                            e.a.removeItem(t)
                        })
                    }, t.$ = function() {}, t.ea = function() {};
                    var mu, gu, bu = {
                            C: hu,
                            Sa: du
                        },
                        yu = {
                            C: hu,
                            Sa: du
                        },
                        wu = {
                            C: Hs,
                            Sa: fu
                        },
                        Iu = {
                            C: hu,
                            Sa: fu
                        },
                        Tu = {
                            $c: "local",
                            NONE: "none",
                            bd: "session"
                        };

                    function Eu() {
                        var t = !(Si(vi()) || !ai()),
                            e = Ii(),
                            n = gi();
                        this.m = t, this.h = e, this.l = n, this.a = {}, t = mu = mu || new vu;
                        try {
                            this.g = !zn() && Ri() || !l.indexedDB ? new t.a.C : new uu(si() ? new cu : new t.a.C)
                        } catch (t) {
                            this.g = new cu, this.h = !0
                        }
                        try {
                            this.i = new t.a.Sa
                        } catch (t) {
                            this.i = new cu
                        }
                        this.u = new cu, this.f = I(this.Pb, this), this.b = {}
                    }

                    function ku() {
                        return gu = gu || new Eu
                    }

                    function Au(t, e) {
                        switch (e) {
                            case "session":
                                return t.i;
                            case "none":
                                return t.u;
                            default:
                                return t.g
                        }
                    }

                    function Su(t, e) {
                        return "firebase:" + t.name + (e ? ":" + e : "")
                    }

                    function Nu(t, e, n) {
                        return n = Su(e, n), "local" == e.C && (t.b[n] = null), Au(t, e.C).S(n)
                    }

                    function Ou(t) {
                        t.c && (clearInterval(t.c), t.c = null)
                    }

                    function _u(t) {
                        this.a = t, this.b = ku()
                    }(t = Eu.prototype).get = function(t, e) {
                        return Au(this, t.C).get(Su(t, e))
                    }, t.set = function(e, t, n) {
                        var i = Su(e, n),
                            r = this,
                            o = Au(this, e.C);
                        return o.set(i, t).then(function() {
                            return o.get(i)
                        }).then(function(t) {
                            "local" == e.C && (r.b[i] = t)
                        })
                    }, t.addListener = function(t, e, n) {
                        t = Su(t, e), this.l && (this.b[t] = l.localStorage.getItem(t)), G(this.a) && (Au(this, "local").$(this.f), this.h || (zn() || !Ri()) && l.indexedDB || !this.l || function(i) {
                            Ou(i), i.c = setInterval(function() {
                                for (var t in i.a) {
                                    var e = l.localStorage.getItem(t),
                                        n = i.b[t];
                                    e != n && (i.b[t] = e, e = new Ce({
                                        type: "storage",
                                        key: t,
                                        target: window,
                                        oldValue: n,
                                        newValue: e,
                                        a: !0
                                    }), i.Pb(e))
                                }
                            }, 1e3)
                        }(this)), this.a[t] || (this.a[t] = []), this.a[t].push(n)
                    }, t.removeListener = function(t, e, n) {
                        t = Su(t, e), this.a[t] && (K(this.a[t], function(t) {
                            return t == n
                        }), 0 == this.a[t].length && delete this.a[t]), G(this.a) && (Au(this, "local").ea(this.f), Ou(this))
                    }, t.Pb = function(t) {
                        if (t && t.f) {
                            var e = t.a.key;
                            if (null == e)
                                for (var n in this.a) {
                                    var i = this.b[n];
                                    void 0 === i && (i = null);
                                    var r = l.localStorage.getItem(n);
                                    r !== i && (this.b[n] = r, this.Za(n))
                                } else if (0 == e.indexOf("firebase:") && this.a[e]) {
                                    if (void 0 !== t.a.a ? Au(this, "local").ea(this.f) : Ou(this), this.m)
                                        if (n = l.localStorage.getItem(e), (i = t.a.newValue) !== n) null !== i ? l.localStorage.setItem(e, i) : l.localStorage.removeItem(e);
                                        else if (this.b[e] === i && void 0 === t.a.a) return;
                                    var o = this;
                                    n = function() {
                                        void 0 === t.a.a && o.b[e] === l.localStorage.getItem(e) || (o.b[e] = l.localStorage.getItem(e), o.Za(e))
                                    }, me && Ae && 10 == Ae && l.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n()
                                }
                        } else M(t, I(this.Za, this))
                    }, t.Za = function(t) {
                        this.a[t] && M(this.a[t], function(t) {
                            t()
                        })
                    };
                    var Pu, Ru = {
                        name: "authEvent",
                        C: "local"
                    };

                    function Du() {
                        this.a = ku()
                    }

                    function Cu(t, e) {
                        this.b = Lu, this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = e, this.l = l.Int32Array ? new Int32Array(64) : Array(64), void 0 !== Pu || (Pu = l.Int32Array ? new Int32Array(Ku) : Ku), this.reset()
                    }
                    k(Cu, function() {
                        this.b = -1
                    });
                    for (var Lu = 64, xu = Lu - 1, Mu = [], ju = 0; ju < xu; ju++) Mu[ju] = 0;
                    var Uu = q(128, Mu);

                    function Vu(t) {
                        for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length;) n[i++] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3], r = 4 * i;
                        for (e = 16; e < 64; e++) {
                            r = 0 | n[e - 15], i = 0 | n[e - 2];
                            var o = (0 | n[e - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0,
                                a = (0 | n[e - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
                            n[e] = o + a | 0
                        }
                        i = 0 | t.a[0], r = 0 | t.a[1];
                        var s = 0 | t.a[2],
                            u = 0 | t.a[3],
                            c = 0 | t.a[4],
                            h = 0 | t.a[5],
                            l = 0 | t.a[6];
                        for (o = 0 | t.a[7], e = 0; e < 64; e++) {
                            var f = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
                            a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & h ^ ~c & l) + (0 | Pu[e]) | 0) + (0 | n[e]) | 0) | 0, o = l, l = h, h = c, c = u + a | 0, u = s, s = r, r = i, i = a + f | 0
                        }
                        t.a[0] = t.a[0] + i | 0, t.a[1] = t.a[1] + r | 0, t.a[2] = t.a[2] + s | 0, t.a[3] = t.a[3] + u | 0, t.a[4] = t.a[4] + c | 0, t.a[5] = t.a[5] + h | 0, t.a[6] = t.a[6] + l | 0, t.a[7] = t.a[7] + o | 0
                    }

                    function Fu(t, e, n) {
                        void 0 === n && (n = e.length);
                        var i = 0,
                            r = t.c;
                        if (h(e))
                            for (; i < n;) t.f[r++] = e.charCodeAt(i++), r == t.b && (Vu(t), r = 0);
                        else {
                            if (!v(e)) throw Error("message must be string or array");
                            for (; i < n;) {
                                var o = e[i++];
                                if (!("number" == typeof o && 0 <= o && o <= 255 && o == (0 | o))) throw Error("message must be a byte array");
                                t.f[r++] = o, r == t.b && (Vu(t), r = 0)
                            }
                        }
                        t.c = r, t.g += n
                    }
                    Cu.prototype.reset = function() {
                        this.g = this.c = 0, this.a = l.Int32Array ? new Int32Array(this.h) : H(this.h)
                    };
                    var Ku = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

                    function qu() {
                        Cu.call(this, 8, Hu)
                    }
                    k(qu, Cu);
                    var Hu = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

                    function Bu(t, e, n, i, r) {
                        this.u = t, this.i = e, this.l = n, this.m = i || null, this.o = r || null, this.h = e + ":" + n, this.v = new Du, this.g = new _u(this.h), this.f = null, this.b = [], this.a = this.c = null
                    }

                    function Gu(t) {
                        return new Yi("invalid-cordova-configuration", t)
                    }

                    function Wu(t) {
                        var e = new qu;
                        Fu(e, t), t = [];
                        var n = 8 * e.g;
                        e.c < 56 ? Fu(e, Uu, 56 - e.c) : Fu(e, Uu, e.b - (e.c - 56));
                        for (var i = 63; 56 <= i; i--) e.f[i] = 255 & n, n /= 256;
                        for (Vu(e), i = n = 0; i < e.i; i++)
                            for (var r = 24; 0 <= r; r -= 8) t[n++] = e.a[i] >> r & 255;
                        return function(t) {
                            return j(t, function(t) {
                                return 1 < (t = t.toString(16)).length ? t : "0" + t
                            }).join("")
                        }(t)
                    }

                    function Xu(t, e) {
                        for (var n = 0; n < t.b.length; n++) try {
                            t.b[n](e)
                        } catch (t) {}
                    }

                    function Ju(i) {
                        return i.f || (i.f = i.ia().then(function() {
                            return new qt(function(n) {
                                i.ya(function t(e) {
                                        return n(e), i.La(t), !1
                                    }),
                                    function(r) {
                                        function e(i) {
                                            t = !0, n && n.cancel(), Yu(r).then(function(t) {
                                                var e = o;
                                                if (t && i && i.url) {
                                                    var n = null; - 1 != (e = Kr(i.url)).indexOf("/__/auth/callback") && (n = (n = "object" == typeof(n = ki(wn(n = In(e), "firebaseError") || null)) ? zi(n) : null) ? new wo(t.c, t.b, null, null, n, null, t.R()) : new wo(t.c, t.b, e, t.f, null, null, t.R())), e = n || o
                                                }
                                                Xu(r, e)
                                            })
                                        }
                                        var o = new wo("unknown", null, null, null, new Yi("no-auth-event")),
                                            t = !1,
                                            n = un(500).then(function() {
                                                return Yu(r).then(function() {
                                                    t || Xu(r, o)
                                                })
                                            }),
                                            i = l.handleOpenURL;
                                        l.handleOpenURL = function(t) {
                                                if (0 == t.toLowerCase().indexOf(mi("BuildInfo.packageName", l).toLowerCase() + "://") && e({
                                                        url: t
                                                    }), "function" == typeof i) try {
                                                    i(t)
                                                } catch (t) {
                                                    console.error(t)
                                                }
                                            }, ko = ko || new To,
                                            function(t) {
                                                var n = ko;
                                                n.a.push(t), n.b || (n.b = function(t) {
                                                    for (var e = 0; e < n.a.length; e++) n.a[e](t)
                                                }, "function" == typeof(t = mi("universalLinks.subscribe", l)) && t(null, n.b))
                                            }(e)
                                    }(i)
                            })
                        })), i.f
                    }

                    function Yu(e) {
                        var n = null;
                        return function(t) {
                            return t.b.get(Ru, t.a).then(function(t) {
                                return Io(t)
                            })
                        }(e.g).then(function(t) {
                            return n = t, Nu((t = e.g).b, Ru, t.a)
                        }).then(function() {
                            return n
                        })
                    }

                    function zu(t) {
                        this.a = t, this.b = ku()
                    }(t = Bu.prototype).ia = function() {
                        return this.Ba ? this.Ba : this.Ba = (oi(void 0) ? ri().then(function() {
                            return new qt(function(t, e) {
                                var n = l.document,
                                    i = setTimeout(function() {
                                        e(Error("Cordova framework is not ready."))
                                    }, 1e3);
                                n.addEventListener("deviceready", function() {
                                    clearTimeout(i), t()
                                }, !1)
                            })
                        }) : zt(Error("Cordova must run in an Android or iOS file scheme."))).then(function() {
                            if ("function" != typeof mi("universalLinks.subscribe", l)) throw Gu("cordova-universal-links-plugin-fix is not installed");
                            if (void 0 === mi("BuildInfo.packageName", l)) throw Gu("cordova-plugin-buildinfo is not installed");
                            if ("function" != typeof mi("cordova.plugins.browsertab.openUrl", l)) throw Gu("cordova-plugin-browsertab is not installed");
                            if ("function" != typeof mi("cordova.InAppBrowser.open", l)) throw Gu("cordova-plugin-inappbrowser is not installed")
                        }, function() {
                            throw new Yi("cordova-not-ready")
                        })
                    }, t.Fb = function(t, e) {
                        return e(new Yi("operation-not-supported-in-this-environment")), Yt()
                    }, t.Db = function() {
                        return zt(new Yi("operation-not-supported-in-this-environment"))
                    }, t.Rb = function() {
                        return !1
                    }, t.Ob = function() {
                        return !0
                    }, t.Jb = function() {
                        return !0
                    }, t.Eb = function(t, e, n, i) {
                        if (this.c) return zt(new Yi("redirect-operation-pending"));
                        var r = this,
                            o = l.document,
                            a = null,
                            s = null,
                            u = null,
                            c = null;
                        return this.c = Yt().then(function() {
                            return yo(e), Ju(r)
                        }).then(function() {
                            return function(n, t, e, i, r) {
                                var o = function() {
                                        for (var t = 20, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--;
                                        return e.join("")
                                    }(),
                                    a = new wo(t, i, null, o, new Yi("no-auth-event"), null, r),
                                    s = mi("BuildInfo.packageName", l);
                                if ("string" != typeof s) throw new Yi("invalid-cordova-configuration");
                                var u = mi("BuildInfo.displayName", l),
                                    c = {};
                                if (vi().toLowerCase().match(/iphone|ipad|ipod/)) c.ibi = s;
                                else {
                                    if (!vi().toLowerCase().match(/android/)) return zt(new Yi("operation-not-supported-in-this-environment"));
                                    c.apn = s
                                }
                                u && (c.appDisplayName = u), o = Wu(o), c.sessionId = o;
                                var h = qs(n.u, n.i, n.l, t, e, null, i, n.m, c, n.o, r);
                                return n.ia().then(function() {
                                    var t = n.h;
                                    return n.v.a.set(Ru, a.A(), t)
                                }).then(function() {
                                    var t = mi("cordova.plugins.browsertab.isAvailable", l);
                                    if ("function" != typeof t) throw new Yi("invalid-cordova-configuration");
                                    var e = null;
                                    t(function(t) {
                                        if (t) {
                                            if ("function" != typeof(e = mi("cordova.plugins.browsertab.openUrl", l))) throw new Yi("invalid-cordova-configuration");
                                            e(h)
                                        } else {
                                            if ("function" != typeof(e = mi("cordova.InAppBrowser.open", l))) throw new Yi("invalid-cordova-configuration");
                                            t = vi(), n.a = e(h, t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || t.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes")
                                        }
                                    })
                                })
                            }(r, t, e, n, i)
                        }).then(function() {
                            return new qt(function(e, t) {
                                s = function() {
                                    var t = mi("cordova.plugins.browsertab.close", l);
                                    return e(), "function" == typeof t && t(), r.a && "function" == typeof r.a.close && (r.a.close(), r.a = null), !1
                                }, r.ya(s), u = function() {
                                    a = a || un(2e3).then(function() {
                                        t(new Yi("redirect-cancelled-by-user"))
                                    })
                                }, c = function() {
                                    _i() && u()
                                }, o.addEventListener("resume", u, !1), vi().toLowerCase().match(/android/) || o.addEventListener("visibilitychange", c, !1)
                            }).s(function(t) {
                                return Yu(r).then(function() {
                                    throw t
                                })
                            })
                        }).ka(function() {
                            u && o.removeEventListener("resume", u, !1), c && o.removeEventListener("visibilitychange", c, !1), a && a.cancel(), s && r.La(s), r.c = null
                        })
                    }, t.ya = function(e) {
                        this.b.push(e), Ju(this).s(function(t) {
                            "auth/invalid-cordova-configuration" === t.code && (t = new wo("unknown", null, null, null, new Yi("no-auth-event")), e(t))
                        })
                    }, t.La = function(e) {
                        K(this.b, function(t) {
                            return t == e
                        })
                    };
                    var $u = {
                        name: "pendingRedirect",
                        C: "session"
                    };

                    function Zu(t) {
                        return Nu(t.b, $u, t.a)
                    }

                    function Qu(t, e, n) {
                        this.i = {}, this.v = 0, this.B = t, this.u = e, this.m = n, this.h = [], this.f = !1, this.l = I(this.o, this), this.b = new dc, this.w = new bc, this.g = new zu(this.u + ":" + this.m), this.c = {}, this.c.unknown = this.b, this.c.signInViaRedirect = this.b, this.c.linkViaRedirect = this.b, this.c.reauthViaRedirect = this.b, this.c.signInViaPopup = this.w, this.c.linkViaPopup = this.w, this.c.reauthViaPopup = this.w, this.a = tc(this.B, this.u, this.m, Ar)
                    }

                    function tc(t, e, n, i) {
                        var r = fl.SDK_VERSION || null;
                        return oi() ? new Bu(t, e, n, r, i) : new Us(t, e, n, r, i)
                    }

                    function ec(e) {
                        e.f || (e.f = !0, e.a.ya(e.l));
                        var n = e.a;
                        return e.a.ia().s(function(t) {
                            throw e.a == n && e.reset(), t
                        })
                    }

                    function nc(n) {
                        n.a.Ob() && ec(n).s(function(t) {
                            var e = new wo("unknown", null, null, null, new Yi("operation-not-supported-in-this-environment"));
                            uc(t) && n.o(e)
                        }), n.a.Jb() || pc(n.b)
                    }

                    function ic(n, t) {
                        V(n.h, t) || n.h.push(t), n.f || function(t) {
                            return t.b.get($u, t.a).then(function(t) {
                                return "pending" == t
                            })
                        }(n.g).then(function(t) {
                            t ? Zu(n.g).then(function() {
                                ec(n).s(function(t) {
                                    var e = new wo("unknown", null, null, null, new Yi("operation-not-supported-in-this-environment"));
                                    uc(t) && n.o(e)
                                })
                            }) : nc(n)
                        }).s(function() {
                            nc(n)
                        })
                    }

                    function rc(t, e) {
                        K(t.h, function(t) {
                            return t == e
                        })
                    }
                    Qu.prototype.reset = function() {
                        this.f = !1, this.a.La(this.l), this.a = tc(this.B, this.u, this.m), this.i = {}
                    }, Qu.prototype.o = function(t) {
                        if (!t) throw new Yi("invalid-auth-event");
                        if (6e5 <= E() - this.v && (this.i = {}, this.v = 0), t && t.getUid() && this.i.hasOwnProperty(t.getUid())) return !1;
                        for (var e = !1, n = 0; n < this.h.length; n++) {
                            var i = this.h[n];
                            if (i.xb(t.c, t.b)) {
                                (e = this.c[t.c]) && (e.h(t, i), t && (t.f || t.b) && (this.i[t.getUid()] = !0, this.v = E())), e = !0;
                                break
                            }
                        }
                        return pc(this.b), e
                    };
                    var oc = new Oi(2e3, 1e4),
                        ac = new Oi(3e4, 6e4);

                    function sc(t, e, n, i, r, o, a) {
                        return t.a.Db(e, n, i, function() {
                            t.f || (t.f = !0, t.a.ya(t.l))
                        }, function() {
                            t.reset()
                        }, r, o, a)
                    }

                    function uc(t) {
                        return !(!t || "auth/cordova-not-ready" != t.code)
                    }

                    function cc(e, t, n, i, r) {
                        var o;
                        return function(t) {
                            return t.b.set($u, "pending", t.a)
                        }(e.g).then(function() {
                            return e.a.Eb(t, n, i, r).s(function(t) {
                                if (uc(t)) throw new Yi("operation-not-supported-in-this-environment");
                                return o = t, Zu(e.g).then(function() {
                                    throw o
                                })
                            }).then(function() {
                                return e.a.Rb() ? new qt(function() {}) : Zu(e.g).then(function() {
                                    return e.oa()
                                }).then(function() {}).s(function() {})
                            })
                        })
                    }

                    function hc(t, e, n, i, r) {
                        return t.a.Fb(i, function(t) {
                            e.ja(n, null, t, r)
                        }, oc.get())
                    }
                    Qu.prototype.oa = function() {
                        return this.b.oa()
                    };
                    var lc = {};

                    function fc(t, e, n) {
                        var i = e + ":" + n;
                        return lc[i] || (lc[i] = new Qu(t, e, n)), lc[i]
                    }

                    function dc() {
                        this.b = null, this.f = [], this.c = [], this.a = null, this.i = this.g = !1
                    }

                    function pc(t) {
                        t.g || (t.g = !0, gc(t, !1, null, null))
                    }

                    function vc(t) {
                        t.g && !t.i && gc(t, !1, null, null)
                    }

                    function mc(t, e) {
                        if (t.b = function() {
                                return Yt(e)
                            }, t.f.length)
                            for (var n = 0; n < t.f.length; n++) t.f[n](e)
                    }

                    function gc(t, e, n, i) {
                        e ? i ? function(t, e) {
                            if (t.b = function() {
                                    return zt(e)
                                }, t.c.length)
                                for (var n = 0; n < t.c.length; n++) t.c[n](e)
                        }(t, i) : mc(t, n) : mc(t, {
                            user: null
                        }), t.f = [], t.c = []
                    }

                    function bc() {}

                    function yc() {
                        this.vb = !1, Object.defineProperty(this, "appVerificationDisabled", {
                            get: function() {
                                return this.vb
                            },
                            set: function(t) {
                                this.vb = t
                            },
                            enumerable: !1
                        })
                    }

                    function wc(t, e) {
                        this.a = e, Mi(this, "verificationId", t)
                    }

                    function Ic(t, e, n, i) {
                        return new mo(t).Va(e, n).then(function(t) {
                            return new wc(t, i)
                        })
                    }

                    function Tc(t) {
                        var e = kr(t);
                        if (!(e && e.exp && e.auth_time && e.iat)) throw new Yi("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
                        ji(this, {
                            token: t,
                            expirationTime: Pi(1e3 * e.exp),
                            authTime: Pi(1e3 * e.auth_time),
                            issuedAtTime: Pi(1e3 * e.iat),
                            signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null,
                            claims: e
                        })
                    }

                    function Ec(t, e, n) {
                        if (this.h = t, this.i = e, this.g = n, this.c = 3e4, this.f = 96e4, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!")
                    }

                    function kc(t, e) {
                        return e ? (t.a = t.c, t.g()) : (e = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), e)
                    }

                    function Ac(t) {
                        this.f = t, this.b = this.a = null, this.c = 0
                    }

                    function Sc(t, e) {
                        var n = e[Da],
                            i = e.refreshToken;
                        e = Nc(e.expiresIn), t.b = n, t.c = e, t.a = i
                    }

                    function Nc(t) {
                        return E() + 1e3 * parseInt(t, 10)
                    }

                    function Oc(e, t) {
                        return function(t, i) {
                            return new qt(function(e, n) {
                                "refresh_token" == i.grant_type && i.refresh_token || "authorization_code" == i.grant_type && i.code ? Va(t, t.l + "?key=" + encodeURIComponent(t.c), function(t) {
                                    t ? t.error ? n(_s(t)) : t.access_token && t.refresh_token ? e(t) : n(new Yi("internal-error")) : n(new Yi("network-request-failed"))
                                }, "POST", Cn(i).toString(), t.g, t.u.get()) : n(new Yi("internal-error"))
                            })
                        }(e.f, t).then(function(t) {
                            return e.b = t.access_token, e.c = Nc(t.expires_in), e.a = t.refresh_token, {
                                accessToken: e.b,
                                expirationTime: e.c,
                                refreshToken: e.a
                            }
                        }).s(function(t) {
                            throw "auth/user-token-expired" == t.code && (e.a = null), t
                        })
                    }

                    function _c(t, e) {
                        this.a = t || null, this.b = e || null, ji(this, {
                            lastSignInTime: Pi(e || null),
                            creationTime: Pi(t || null)
                        })
                    }

                    function Pc(t, e, n, i, r, o) {
                        ji(this, {
                            uid: t,
                            displayName: i || null,
                            photoURL: r || null,
                            email: n || null,
                            phoneNumber: o || null,
                            providerId: e
                        })
                    }

                    function Rc(t, e) {
                        for (var n in De.call(this, t), e) this[n] = e[n]
                    }

                    function Dc(t, e, n) {
                        this.I = [], this.l = t.apiKey, this.m = t.appName, this.o = t.authDomain || null, t = fl.SDK_VERSION ? pi(fl.SDK_VERSION) : null, this.a = new Pa(this.l, Nr(Ar), t), this.b = new Ac(this.a), Vc(this, e[Da]), Sc(this.b, e), Mi(this, "refreshToken", this.b.a), qc(this, n || {}), nn.call(this), this.J = !1, this.o && bi() && (this.i = fc(this.o, this.l, this.m)), this.O = [], this.h = null, this.w = function(e) {
                            return new Ec(function() {
                                return e.G(!0)
                            }, function(t) {
                                return !(!t || "auth/network-request-failed" != t.code)
                            }, function() {
                                var t = e.b.c - E() - 3e5;
                                return 0 < t ? t : 0
                            })
                        }(this), this.W = I(this.Ha, this);
                        var i = this;
                        this.ga = null, this.va = function(t) {
                            i.sa(t.g)
                        }, this.Z = null, this.P = [], this.ua = function(t) {
                            Lc(i, t.c)
                        }, this.Y = null
                    }

                    function Cc(t, e) {
                        t.Z && Xe(t.Z, "languageCodeChanged", t.va), (t.Z = e) && Be(e, "languageCodeChanged", t.va)
                    }

                    function Lc(t, e) {
                        t.P = e, Ua(t.a, fl.SDK_VERSION ? pi(fl.SDK_VERSION, t.P) : null)
                    }

                    function xc(t, e) {
                        t.Y && Xe(t.Y, "frameworkChanged", t.ua), (t.Y = e) && Be(e, "frameworkChanged", t.ua)
                    }

                    function Mc(e) {
                        try {
                            return fl.app(e.m).auth()
                        } catch (t) {
                            throw new Yi("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + e.m + "'!")
                        }
                    }

                    function jc(t) {
                        t.B || t.w.b || (t.w.start(), Xe(t, "tokenChanged", t.W), Be(t, "tokenChanged", t.W))
                    }

                    function Uc(t) {
                        Xe(t, "tokenChanged", t.W), t.w.stop()
                    }

                    function Vc(t, e) {
                        t.ma = e, Mi(t, "_lat", e)
                    }

                    function Fc(t) {
                        for (var e = [], n = 0; n < t.O.length; n++) e.push(t.O[n](t));
                        return Zt(e).then(function() {
                            return t
                        })
                    }

                    function Kc(t) {
                        t.i && !t.J && (t.J = !0, ic(t.i, t))
                    }

                    function qc(t, e) {
                        ji(t, {
                            uid: e.uid,
                            displayName: e.displayName || null,
                            photoURL: e.photoURL || null,
                            email: e.email || null,
                            emailVerified: e.emailVerified || !1,
                            phoneNumber: e.phoneNumber || null,
                            isAnonymous: e.isAnonymous || !1,
                            tenantId: e.tenantId || null,
                            metadata: new _c(e.createdAt, e.lastLoginAt),
                            providerData: []
                        }), t.a.b = t.tenantId
                    }

                    function Hc() {}

                    function Bc(t) {
                        return Yt().then(function() {
                            if (t.B) throw new Yi("app-deleted")
                        })
                    }

                    function Gc(t) {
                        return j(t.providerData, function(t) {
                            return t.providerId
                        })
                    }

                    function Wc(t, e) {
                        e && (Xc(t, e.providerId), t.providerData.push(e))
                    }

                    function Xc(t, e) {
                        K(t.providerData, function(t) {
                            return t.providerId == e
                        })
                    }

                    function Jc(t, e, n) {
                        ("uid" != e || n) && t.hasOwnProperty(e) && Mi(t, e, n)
                    }

                    function Yc(e, t) {
                        e != t && (ji(e, {
                            uid: t.uid,
                            displayName: t.displayName,
                            photoURL: t.photoURL,
                            email: t.email,
                            emailVerified: t.emailVerified,
                            phoneNumber: t.phoneNumber,
                            isAnonymous: t.isAnonymous,
                            tenantId: t.tenantId,
                            providerData: []
                        }), t.metadata ? Mi(e, "metadata", function(t) {
                            return new _c(t.a, t.b)
                        }(t.metadata)) : Mi(e, "metadata", new _c), M(t.providerData, function(t) {
                            Wc(e, t)
                        }), function(t, e) {
                            t.b = e.b, t.a = e.a, t.c = e.c
                        }(e.b, t.b), Mi(e, "refreshToken", e.b.a))
                    }

                    function zc(n) {
                        return n.G().then(function(t) {
                            var e = n.isAnonymous;
                            return function(t, e) {
                                return Ns(t.a, us, {
                                    idToken: e
                                }).then(I(t.zc, t))
                            }(n, t).then(function() {
                                return e || Jc(n, "isAnonymous", !1), t
                            })
                        })
                    }

                    function $c(t, e) {
                        e[Da] && t.ma != e[Da] && (Sc(t.b, e), t.dispatchEvent(new Rc("tokenChanged")), Vc(t, e[Da]), Jc(t, "refreshToken", t.b.a))
                    }

                    function Zc(t, e) {
                        return zc(t).then(function() {
                            if (V(Gc(t), e)) return Fc(t).then(function() {
                                throw new Yi("provider-already-linked")
                            })
                        })
                    }

                    function Qc(t, e, n) {
                        return Ui({
                            user: t,
                            credential: bo(e),
                            additionalUserInfo: e = Dr(e),
                            operationType: n
                        })
                    }

                    function th(t, e) {
                        return $c(t, e), t.reload().then(function() {
                            return t
                        })
                    }

                    function eh(n, i, t, e, r) {
                        if (!bi()) return zt(new Yi("operation-not-supported-in-this-environment"));
                        if (n.h && !r) return zt(n.h);
                        var o = Rr(t.providerId),
                            a = Ai(n.uid + ":::"),
                            s = null;
                        (!Ii() || ai()) && n.o && t.isOAuthProvider && (s = qs(n.o, n.l, n.m, i, t, null, a, fl.SDK_VERSION || null, null, null, n.tenantId));
                        var u = ei(s, o && o.Da, o && o.Ca);
                        return e = e().then(function() {
                            if (ih(n), !r) return n.G().then(function() {})
                        }).then(function() {
                            return sc(n.i, u, i, t, a, !!s, n.tenantId)
                        }).then(function() {
                            return new qt(function(t, e) {
                                n.ja(i, null, new Yi("cancelled-popup-request"), n.g || null), n.f = t, n.v = e, n.g = a, n.c = hc(n.i, n, i, u, a)
                            })
                        }).then(function(t) {
                            return u && ti(u), t ? Ui(t) : null
                        }).s(function(t) {
                            throw u && ti(u), t
                        }), rh(n, e, r)
                    }

                    function nh(e, t, n, i, r) {
                        if (!bi()) return zt(new Yi("operation-not-supported-in-this-environment"));
                        if (e.h && !r) return zt(e.h);
                        var o = null,
                            a = Ai(e.uid + ":::");
                        return i = i().then(function() {
                            if (ih(e), !r) return e.G().then(function() {})
                        }).then(function() {
                            return e.ca = a, Fc(e)
                        }).then(function(t) {
                            return e.da && (t = (t = e.da).b.set(sh, e.A(), t.a)), t
                        }).then(function() {
                            return cc(e.i, t, n, a, e.tenantId)
                        }).s(function(t) {
                            if (o = t, e.da) return uh(e.da);
                            throw o
                        }).then(function() {
                            if (o) throw o
                        }), rh(e, i, r)
                    }

                    function ih(t) {
                        if (!t.i || !t.J) {
                            if (t.i && !t.J) throw new Yi("internal-error");
                            throw new Yi("auth-domain-config-required")
                        }
                    }

                    function rh(t, e, n) {
                        var i = function(e, t, n) {
                            return e.h && !n ? (t.cancel(), zt(e.h)) : t.s(function(t) {
                                throw !t || "auth/user-disabled" != t.code && "auth/user-token-expired" != t.code || (e.h || e.dispatchEvent(new Rc("userInvalidated")), e.h = t), t
                            })
                        }(t, e, n);
                        return t.I.push(i), i.ka(function() {
                            F(t.I, i)
                        }), i
                    }

                    function oh(t) {
                        if (!t.apiKey) return null;
                        var e = {
                                apiKey: t.apiKey,
                                authDomain: t.authDomain,
                                appName: t.appName
                            },
                            n = {};
                        if (!(t.stsTokenManager && t.stsTokenManager.accessToken && t.stsTokenManager.expirationTime)) return null;
                        n[Da] = t.stsTokenManager.accessToken, n.refreshToken = t.stsTokenManager.refreshToken || null, n.expiresIn = (t.stsTokenManager.expirationTime - E()) / 1e3;
                        var i = new Dc(e, n, t);
                        return t.providerData && M(t.providerData, function(t) {
                            t && Wc(i, Ui(t))
                        }), t.redirectEventId && (i.ca = t.redirectEventId), i
                    }

                    function ah(t) {
                        this.a = t, this.b = ku()
                    }
                    dc.prototype.reset = function() {
                        this.b = null, this.a && (this.a.cancel(), this.a = null)
                    }, dc.prototype.h = function(t, e) {
                        if (t) {
                            this.reset(), this.g = !0;
                            var n = t.c,
                                i = t.b,
                                r = t.a && "auth/web-storage-unsupported" == t.a.code,
                                o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code;
                            this.i = !(!r && !o), "unknown" != n || r || o ? t.a ? (gc(this, !0, null, t.a), Yt()) : e.za(n, i) ? function(e, t, n) {
                                n = n.za(t.c, t.b);
                                var i = t.g,
                                    r = t.f,
                                    o = t.i,
                                    a = t.R(),
                                    s = !!t.c.match(/Redirect$/);
                                n(i, r, a, o).then(function(t) {
                                    gc(e, s, t, null)
                                }).s(function(t) {
                                    gc(e, s, null, t)
                                })
                            }(this, t, e) : zt(new Yi("invalid-auth-event")) : (gc(this, !1, null, null), Yt())
                        } else zt(new Yi("invalid-auth-event"))
                    }, dc.prototype.oa = function() {
                        var n = this;
                        return new qt(function(t, e) {
                            n.b ? n.b().then(t, e) : (n.f.push(t), n.c.push(e), function(t) {
                                var e = new Yi("timeout");
                                t.a && t.a.cancel(), t.a = un(ac.get()).then(function() {
                                    t.b || (t.g = !0, gc(t, !0, null, e))
                                })
                            }(n))
                        })
                    }, bc.prototype.h = function(t, e) {
                        if (t) {
                            var n = t.c,
                                i = t.b;
                            t.a ? (e.ja(t.c, null, t.a, t.b), Yt()) : e.za(n, i) ? function(t, e) {
                                var n = t.b,
                                    i = t.c;
                                e.za(i, n)(t.g, t.f, t.R(), t.i).then(function(t) {
                                    e.ja(i, t, null, n)
                                }).s(function(t) {
                                    e.ja(i, null, t, n)
                                })
                            }(t, e) : zt(new Yi("invalid-auth-event"))
                        } else zt(new Yi("invalid-auth-event"))
                    }, wc.prototype.confirm = function(t) {
                        return t = go(this.verificationId, t), this.a(t)
                    }, Ec.prototype.start = function() {
                        this.a = this.c,
                            function e(n, t) {
                                n.stop();
                                n.b = un(kc(n, t)).then(function() {
                                    return e = l.document, n = null, _i() || !e ? Yt() : new qt(function(t) {
                                        n = function() {
                                            _i() && (e.removeEventListener("visibilitychange", n, !1), t())
                                        }, e.addEventListener("visibilitychange", n, !1)
                                    }).s(function(t) {
                                        throw e.removeEventListener("visibilitychange", n, !1), t
                                    });
                                    var e, n
                                }).then(function() {
                                    return n.h()
                                }).then(function() {
                                    e(n, !0)
                                }).s(function(t) {
                                    n.i(t) && e(n, !1)
                                })
                            }(this, !0)
                    }, Ec.prototype.stop = function() {
                        this.b && (this.b.cancel(), this.b = null)
                    }, Ac.prototype.A = function() {
                        return {
                            apiKey: this.f.c,
                            refreshToken: this.a,
                            accessToken: this.b,
                            expirationTime: this.c
                        }
                    }, Ac.prototype.getToken = function(t) {
                        return t = !!t, this.b && !this.a ? zt(new Yi("user-token-expired")) : t || !this.b || E() > this.c - 3e4 ? this.a ? Oc(this, {
                            grant_type: "refresh_token",
                            refresh_token: this.a
                        }) : Yt(null) : Yt({
                            accessToken: this.b,
                            expirationTime: this.c,
                            refreshToken: this.a
                        })
                    }, _c.prototype.A = function() {
                        return {
                            lastLoginAt: this.b,
                            createdAt: this.a
                        }
                    }, k(Rc, De), k(Dc, nn), Dc.prototype.sa = function(t) {
                        this.ga = t, ja(this.a, t)
                    }, Dc.prototype.ha = function() {
                        return this.ga
                    }, Dc.prototype.Aa = function() {
                        return H(this.P)
                    }, Dc.prototype.Ha = function() {
                        this.w.b && (this.w.stop(), this.w.start())
                    }, Mi(Dc.prototype, "providerId", "firebase"), (t = Dc.prototype).reload = function() {
                        var t = this;
                        return rh(this, Bc(this).then(function() {
                            return zc(t).then(function() {
                                return Fc(t)
                            }).then(Hc)
                        }))
                    }, t.dc = function(t) {
                        return this.G(t).then(function(t) {
                            return new Tc(t)
                        })
                    }, t.G = function(t) {
                        var e = this;
                        return rh(this, Bc(this).then(function() {
                            return e.b.getToken(t)
                        }).then(function(t) {
                            if (!t) throw new Yi("internal-error");
                            return t.accessToken != e.ma && (Vc(e, t.accessToken), e.dispatchEvent(new Rc("tokenChanged"))), Jc(e, "refreshToken", t.refreshToken), t.accessToken
                        }))
                    }, t.zc = function(t) {
                        if (!(t = t.users) || !t.length) throw new Yi("internal-error");
                        qc(this, {
                            uid: (t = t[0]).localId,
                            displayName: t.displayName,
                            photoURL: t.photoUrl,
                            email: t.email,
                            emailVerified: !!t.emailVerified,
                            phoneNumber: t.phoneNumber,
                            lastLoginAt: t.lastLoginAt,
                            createdAt: t.createdAt,
                            tenantId: t.tenantId
                        });
                        for (var e = function(t) {
                                return (t = t.providerUserInfo) && t.length ? j(t, function(t) {
                                    return new Pc(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber)
                                }) : []
                            }(t), n = 0; n < e.length; n++) Wc(this, e[n]);
                        Jc(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length))
                    }, t.Ac = function(t) {
                        return Li("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."), this.gb(t)
                    }, t.gb = function(t) {
                        var e = this,
                            n = null;
                        return rh(this, t.f(this.a, this.uid).then(function(t) {
                            return $c(e, t), n = Qc(e, t, "reauthenticate"), e.h = null, e.reload()
                        }).then(function() {
                            return n
                        }), !0)
                    }, t.rc = function(t) {
                        return Li("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."), this.eb(t)
                    }, t.eb = function(e) {
                        var n = this,
                            i = null;
                        return rh(this, Zc(this, e.providerId).then(function() {
                            return n.G()
                        }).then(function(t) {
                            return e.b(n.a, t)
                        }).then(function(t) {
                            return i = Qc(n, t, "link"), th(n, t)
                        }).then(function() {
                            return i
                        }))
                    }, t.sc = function(t, e) {
                        var n = this;
                        return rh(this, Zc(this, "phone").then(function() {
                            return Ic(Mc(n), t, e, I(n.eb, n))
                        }))
                    }, t.Bc = function(t, e) {
                        var n = this;
                        return rh(this, Yt().then(function() {
                            return Ic(Mc(n), t, e, I(n.gb, n))
                        }), !0)
                    }, t.rb = function(e) {
                        var n = this;
                        return rh(this, this.G().then(function(t) {
                            return n.a.rb(t, e)
                        }).then(function(t) {
                            return $c(n, t), n.reload()
                        }))
                    }, t.Sc = function(e) {
                        var n = this;
                        return rh(this, this.G().then(function(t) {
                            return e.b(n.a, t)
                        }).then(function(t) {
                            return $c(n, t), n.reload()
                        }))
                    }, t.sb = function(e) {
                        var n = this;
                        return rh(this, this.G().then(function(t) {
                            return n.a.sb(t, e)
                        }).then(function(t) {
                            return $c(n, t), n.reload()
                        }))
                    }, t.tb = function(e) {
                        if (void 0 === e.displayName && void 0 === e.photoURL) return Bc(this);
                        var n = this;
                        return rh(this, this.G().then(function(t) {
                            return n.a.tb(t, {
                                displayName: e.displayName,
                                photoUrl: e.photoURL
                            })
                        }).then(function(t) {
                            return $c(n, t), Jc(n, "displayName", t.displayName || null), Jc(n, "photoURL", t.photoUrl || null), M(n.providerData, function(t) {
                                "password" === t.providerId && (Mi(t, "displayName", n.displayName), Mi(t, "photoURL", n.photoURL))
                            }), Fc(n)
                        }).then(Hc))
                    }, t.Qc = function(e) {
                        var n = this;
                        return rh(this, zc(this).then(function(t) {
                            return V(Gc(n), e) ? function(t, e, n) {
                                return Ns(t, os, {
                                    idToken: e,
                                    deleteProvider: n
                                })
                            }(n.a, t, [e]).then(function(t) {
                                var e = {};
                                return M(t.providerUserInfo || [], function(t) {
                                    e[t.providerId] = !0
                                }), M(Gc(n), function(t) {
                                    e[t] || Xc(n, t)
                                }), e[mo.PROVIDER_ID] || Mi(n, "phoneNumber", null), Fc(n)
                            }) : Fc(n).then(function() {
                                throw new Yi("no-such-provider")
                            })
                        }))
                    }, t.delete = function() {
                        var e = this;
                        return rh(this, this.G().then(function(t) {
                            return Ns(e.a, rs, {
                                idToken: t
                            })
                        }).then(function() {
                            e.dispatchEvent(new Rc("userDeleted"))
                        })).then(function() {
                            for (var t = 0; t < e.I.length; t++) e.I[t].cancel("app-deleted");
                            Cc(e, null), xc(e, null), e.I = [], e.B = !0, Uc(e), Mi(e, "refreshToken", null), e.i && rc(e.i, e)
                        })
                    }, t.xb = function(t, e) {
                        return !!("linkViaPopup" == t && (this.g || null) == e && this.f || "reauthViaPopup" == t && (this.g || null) == e && this.f || "linkViaRedirect" == t && (this.ca || null) == e || "reauthViaRedirect" == t && (this.ca || null) == e)
                    }, t.ja = function(t, e, n, i) {
                        "linkViaPopup" != t && "reauthViaPopup" != t || i != (this.g || null) || (n && this.v ? this.v(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.v)
                    }, t.za = function(t, e) {
                        return "linkViaPopup" == t && e == (this.g || null) ? I(this.Bb, this) : "reauthViaPopup" == t && e == (this.g || null) ? I(this.Cb, this) : "linkViaRedirect" == t && (this.ca || null) == e ? I(this.Bb, this) : "reauthViaRedirect" == t && (this.ca || null) == e ? I(this.Cb, this) : null
                    }, t.tc = function(t) {
                        var e = this;
                        return eh(this, "linkViaPopup", t, function() {
                            return Zc(e, t.providerId).then(function() {
                                return Fc(e)
                            })
                        }, !1)
                    }, t.Cc = function(t) {
                        return eh(this, "reauthViaPopup", t, function() {
                            return Yt()
                        }, !0)
                    }, t.uc = function(t) {
                        var e = this;
                        return nh(this, "linkViaRedirect", t, function() {
                            return Zc(e, t.providerId)
                        }, !1)
                    }, t.Dc = function(t) {
                        return nh(this, "reauthViaRedirect", t, function() {
                            return Yt()
                        }, !0)
                    }, t.Bb = function(e, n, t, i) {
                        var r = this;
                        this.c && (this.c.cancel(), this.c = null);
                        var o = null;
                        return t = this.G().then(function(t) {
                            return $a(r.a, {
                                requestUri: e,
                                postBody: i,
                                sessionId: n,
                                idToken: t
                            })
                        }).then(function(t) {
                            return o = Qc(r, t, "link"), th(r, t)
                        }).then(function() {
                            return o
                        }), rh(this, t)
                    }, t.Cb = function(t, e, n, i) {
                        var r = this;
                        this.c && (this.c.cancel(), this.c = null);
                        var o = null;
                        return rh(this, Yt().then(function() {
                            return Hr(Za(r.a, {
                                requestUri: t,
                                sessionId: e,
                                postBody: i,
                                tenantId: n
                            }), r.uid)
                        }).then(function(t) {
                            return o = Qc(r, t, "reauthenticate"), $c(r, t), r.h = null, r.reload()
                        }).then(function() {
                            return o
                        }), !0)
                    }, t.jb = function(e) {
                        var n = this,
                            i = null;
                        return rh(this, this.G().then(function(t) {
                            return i = t, void 0 === e || G(e) ? {} : br(new ur(e))
                        }).then(function(t) {
                            return n.a.jb(i, t)
                        }).then(function(t) {
                            if (n.email != t) return n.reload()
                        }).then(function() {}))
                    }, t.toJSON = function() {
                        return this.A()
                    }, t.A = function() {
                        var e = {
                            uid: this.uid,
                            displayName: this.displayName,
                            photoURL: this.photoURL,
                            email: this.email,
                            emailVerified: this.emailVerified,
                            phoneNumber: this.phoneNumber,
                            isAnonymous: this.isAnonymous,
                            tenantId: this.tenantId,
                            providerData: [],
                            apiKey: this.l,
                            appName: this.m,
                            authDomain: this.o,
                            stsTokenManager: this.b.A(),
                            redirectEventId: this.ca || null
                        };
                        return this.metadata && J(e, this.metadata.A()), M(this.providerData, function(t) {
                            e.providerData.push(function(t) {
                                var e, n = {};
                                for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                                return n
                            }(t))
                        }), e
                    };
                    var sh = {
                        name: "redirectUser",
                        C: "session"
                    };

                    function uh(t) {
                        return Nu(t.b, sh, t.a)
                    }

                    function ch(t) {
                        this.a = t, this.b = ku(), this.c = null, this.f = function(e) {
                            var n = fh("local"),
                                i = fh("session"),
                                r = fh("none");
                            return function(n, i, r) {
                                var o = Su(i, r),
                                    a = Au(n, i.C);
                                return n.get(i, r).then(function(t) {
                                    var e = null;
                                    try {
                                        e = ki(l.localStorage.getItem(o))
                                    } catch (t) {}
                                    if (e && !t) return l.localStorage.removeItem(o), n.set(i, e, r);
                                    e && t && "localStorage" != a.type && l.localStorage.removeItem(o)
                                })
                            }(e.b, n, e.a).then(function() {
                                return e.b.get(i, e.a)
                            }).then(function(t) {
                                return t ? i : e.b.get(r, e.a).then(function(t) {
                                    return t ? r : e.b.get(n, e.a).then(function(t) {
                                        return t ? n : e.b.get(lh, e.a).then(function(t) {
                                            return t ? fh(t) : n
                                        })
                                    })
                                })
                            }).then(function(t) {
                                return e.c = t, hh(e, t.C)
                            }).s(function() {
                                e.c || (e.c = n)
                            })
                        }(this), this.b.addListener(fh("local"), this.a, I(this.g, this))
                    }

                    function hh(t, e) {
                        var n, i = [];
                        for (n in Tu) Tu[n] !== e && i.push(Nu(t.b, fh(Tu[n]), t.a));
                        return i.push(Nu(t.b, lh, t.a)),
                            function(s) {
                                return new qt(function(n, e) {
                                    var i = s.length,
                                        r = [];
                                    if (i)
                                        for (var t = function(t, e) {
                                                i--, r[t] = e, 0 == i && n(r)
                                            }, o = function(t) {
                                                e(t)
                                            }, a = 0; a < s.length; a++) $t(s[a], T(t, a), o);
                                    else n(r)
                                })
                            }(i)
                    }
                    ch.prototype.g = function() {
                        var e = this,
                            n = fh("local");
                        mh(this, function() {
                            return Yt().then(function() {
                                return e.c && "local" != e.c.C ? e.b.get(n, e.a) : null
                            }).then(function(t) {
                                if (t) return hh(e, "local").then(function() {
                                    e.c = n
                                })
                            })
                        })
                    };
                    var lh = {
                        name: "persistence",
                        C: "session"
                    };

                    function fh(t) {
                        return {
                            name: "authUser",
                            C: t
                        }
                    }

                    function dh(t, e) {
                        return mh(t, function() {
                            return t.b.set(t.c, e.A(), t.a)
                        })
                    }

                    function ph(t) {
                        return mh(t, function() {
                            return Nu(t.b, t.c, t.a)
                        })
                    }

                    function vh(t, e) {
                        return mh(t, function() {
                            return t.b.get(t.c, t.a).then(function(t) {
                                return t && e && (t.authDomain = e), oh(t || {})
                            })
                        })
                    }

                    function mh(t, e) {
                        return t.f = t.f.then(e, e), t.f
                    }

                    function gh(t) {
                        if (this.l = !1, Mi(this, "settings", new yc), Mi(this, "app", t), !Ah(this).options || !Ah(this).options.apiKey) throw new Yi("invalid-api-key");
                        t = fl.SDK_VERSION ? pi(fl.SDK_VERSION) : null, this.b = new Pa(Ah(this).options && Ah(this).options.apiKey, Nr(Ar), t), this.O = [], this.m = [], this.J = [], this.Ub = fl.INTERNAL.createSubscribe(I(this.oc, this)), this.W = void 0, this.Vb = fl.INTERNAL.createSubscribe(I(this.pc, this)), Eh(this, null), this.h = new ch(Ah(this).options.apiKey + ":" + Ah(this).name), this.w = new ah(Ah(this).options.apiKey + ":" + Ah(this).name), this.Y = _h(this, function(n) {
                                var t = Ah(n).options.authDomain,
                                    e = function(e) {
                                        var t = function(t, e) {
                                            return t.b.get(sh, t.a).then(function(t) {
                                                return t && e && (t.authDomain = e), oh(t || {})
                                            })
                                        }(e.w, Ah(e).options.authDomain).then(function(t) {
                                            return (e.B = t) && (t.da = e.w), uh(e.w)
                                        });
                                        return _h(e, t)
                                    }(n).then(function() {
                                        return vh(n.h, t)
                                    }).then(function(e) {
                                        return e ? (e.da = n.w, n.B && (n.B.ca || null) == (e.ca || null) ? e : e.reload().then(function() {
                                            return dh(n.h, e).then(function() {
                                                return e
                                            })
                                        }).s(function(t) {
                                            return "auth/network-request-failed" == t.code ? e : ph(n.h)
                                        })) : null
                                    }).then(function(t) {
                                        Eh(n, t || null)
                                    });
                                return _h(n, e)
                            }(this)), this.i = _h(this, function(e) {
                                return e.Y.then(function() {
                                    return Ih(e)
                                }).s(function() {}).then(function() {
                                    if (!e.l) return e.ma()
                                }).s(function() {}).then(function() {
                                    if (!e.l) {
                                        e.ga = !0;
                                        var t = e.h;
                                        t.b.addListener(fh("local"), t.a, e.ma)
                                    }
                                })
                            }(this)), this.ga = !1, this.ma = I(this.Nc, this), this.ub = I(this.aa, this), this.ua = I(this.bc, this), this.va = I(this.mc, this), this.Ha = I(this.nc, this), this.a = null,
                            function(e) {
                                var n = Ah(e).options.authDomain,
                                    i = Ah(e).options.apiKey;
                                n && bi() && (e.Tb = e.Y.then(function() {
                                    if (!e.l) {
                                        if (e.a = fc(n, i, Ah(e).name), ic(e.a, e), Sh(e) && Kc(Sh(e)), e.B) {
                                            Kc(e.B);
                                            var t = e.B;
                                            t.sa(e.ha()), Cc(t, e), Lc(t = e.B, e.I), xc(t, e), e.B = null
                                        }
                                        return e.a
                                    }
                                }))
                            }(this), this.INTERNAL = {}, this.INTERNAL.delete = I(this.delete, this), this.INTERNAL.logFramework = I(this.vc, this), this.o = 0, nn.call(this),
                            function(t) {
                                Object.defineProperty(t, "lc", {
                                    get: function() {
                                        return this.ha()
                                    },
                                    set: function(t) {
                                        this.sa(t)
                                    },
                                    enumerable: !1
                                }), t.Z = null, Object.defineProperty(t, "ti", {
                                    get: function() {
                                        return this.R()
                                    },
                                    set: function(t) {
                                        this.nb(t)
                                    },
                                    enumerable: !1
                                }), t.P = null
                            }(this), this.I = []
                    }

                    function bh(t) {
                        De.call(this, "languageCodeChanged"), this.g = t
                    }

                    function yh(t) {
                        De.call(this, "frameworkChanged"), this.c = t
                    }

                    function wh(t) {
                        return t.Tb || zt(new Yi("auth-domain-config-required"))
                    }

                    function Ih(t) {
                        if (!bi()) return zt(new Yi("operation-not-supported-in-this-environment"));
                        var e = wh(t).then(function() {
                            return t.a.oa()
                        }).then(function(t) {
                            return t ? Ui(t) : null
                        });
                        return _h(t, e)
                    }

                    function Th(e, t) {
                        var n = {};
                        return n.apiKey = Ah(e).options.apiKey, n.authDomain = Ah(e).options.authDomain, n.appName = Ah(e).name, e.Y.then(function() {
                            return function(t, e, n, i) {
                                var r = new Dc(t, e);
                                return n && (r.da = n), i && Lc(r, i), r.reload().then(function() {
                                    return r
                                })
                            }(n, t, e.w, e.Aa())
                        }).then(function(t) {
                            return Sh(e) && t.uid == Sh(e).uid ? Yc(Sh(e), t) : (Eh(e, t), Kc(t)), e.aa(t)
                        }).then(function() {
                            Oh(e)
                        })
                    }

                    function Eh(t, e) {
                        Sh(t) && (function(t, e) {
                            K(t.O, function(t) {
                                return t == e
                            })
                        }(Sh(t), t.ub), Xe(Sh(t), "tokenChanged", t.ua), Xe(Sh(t), "userDeleted", t.va), Xe(Sh(t), "userInvalidated", t.Ha), Uc(Sh(t))), e && (e.O.push(t.ub), Be(e, "tokenChanged", t.ua), Be(e, "userDeleted", t.va), Be(e, "userInvalidated", t.Ha), 0 < t.o && jc(e)), Mi(t, "currentUser", e), e && (e.sa(t.ha()), Cc(e, t), Lc(e, t.I), xc(e, t))
                    }

                    function kh(e, t) {
                        var n = null,
                            i = null;
                        return _h(e, t.then(function(t) {
                            return n = bo(t), i = Dr(t), Th(e, t)
                        }).then(function() {
                            return Ui({
                                user: Sh(e),
                                credential: n,
                                additionalUserInfo: i,
                                operationType: "signIn"
                            })
                        }))
                    }

                    function Ah(t) {
                        return t.app
                    }

                    function Sh(t) {
                        return t.currentUser
                    }

                    function Nh(t) {
                        return Sh(t) && Sh(t)._lat || null
                    }

                    function Oh(t) {
                        if (t.ga) {
                            for (var e = 0; e < t.m.length; e++) t.m[e] && t.m[e](Nh(t));
                            if (t.W !== t.getUid() && t.J.length)
                                for (t.W = t.getUid(), e = 0; e < t.J.length; e++) t.J[e] && t.J[e](Nh(t))
                        }
                    }

                    function _h(t, e) {
                        return t.O.push(e), e.ka(function() {
                            F(t.O, e)
                        }), e
                    }

                    function Ph() {}

                    function Rh() {
                        this.a = {}, this.b = 1e12
                    }
                    ch.prototype.mb = function(e) {
                        var n = null,
                            i = this;
                        return function(t) {
                            var e = new Yi("invalid-persistence-type"),
                                n = new Yi("unsupported-persistence-type");
                            t: {
                                for (i in Tu)
                                    if (Tu[i] == t) {
                                        var i = !0;
                                        break t
                                    }
                                i = !1
                            }
                            if (!i || "string" != typeof t) throw e;
                            switch (ui()) {
                                case "ReactNative":
                                    if ("session" === t) throw n;
                                    break;
                                case "Node":
                                    if ("none" !== t) throw n;
                                    break;
                                default:
                                    if (!gi() && "none" !== t) throw n
                            }
                        }(e), mh(this, function() {
                            return e != i.c.C ? i.b.get(i.c, i.a).then(function(t) {
                                return n = t, hh(i, e)
                            }).then(function() {
                                if (i.c = fh(e), n) return i.b.set(i.c, n, i.a)
                            }) : Yt()
                        })
                    }, k(gh, nn), k(bh, De), k(yh, De), (t = gh.prototype).mb = function(t) {
                        return t = this.h.mb(t), _h(this, t)
                    }, t.sa = function(t) {
                        this.Z === t || this.l || (this.Z = t, ja(this.b, this.Z), this.dispatchEvent(new bh(this.ha())))
                    }, t.ha = function() {
                        return this.Z
                    }, t.Tc = function() {
                        var t = l.navigator;
                        this.sa(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null)
                    }, t.vc = function(t) {
                        this.I.push(t), Ua(this.b, fl.SDK_VERSION ? pi(fl.SDK_VERSION, this.I) : null), this.dispatchEvent(new yh(this.I))
                    }, t.Aa = function() {
                        return H(this.I)
                    }, t.nb = function(t) {
                        this.P === t || this.l || (this.P = t, this.b.b = this.P)
                    }, t.R = function() {
                        return this.P
                    }, t.toJSON = function() {
                        return {
                            apiKey: Ah(this).options.apiKey,
                            authDomain: Ah(this).options.authDomain,
                            appName: Ah(this).name,
                            currentUser: Sh(this) && Sh(this).A()
                        }
                    }, t.xb = function(t, e) {
                        switch (t) {
                            case "unknown":
                            case "signInViaRedirect":
                                return !0;
                            case "signInViaPopup":
                                return this.g == e && !!this.f;
                            default:
                                return !1
                        }
                    }, t.ja = function(t, e, n, i) {
                        "signInViaPopup" == t && this.g == i && (n && this.v ? this.v(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.v)
                    }, t.za = function(t, e) {
                        return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == e && this.f ? I(this.ac, this) : null
                    }, t.ac = function(t, e, n, i) {
                        var r = this;
                        t = {
                            requestUri: t,
                            postBody: i,
                            sessionId: e,
                            tenantId: n
                        }, this.c && (this.c.cancel(), this.c = null);
                        var o = null,
                            a = null,
                            s = za(r.b, t).then(function(t) {
                                return o = bo(t), a = Dr(t), t
                            });
                        return _h(this, t = r.Y.then(function() {
                            return s
                        }).then(function(t) {
                            return Th(r, t)
                        }).then(function() {
                            return Ui({
                                user: Sh(r),
                                credential: o,
                                additionalUserInfo: a,
                                operationType: "signIn"
                            })
                        }))
                    }, t.Lc = function(e) {
                        if (!bi()) return zt(new Yi("operation-not-supported-in-this-environment"));
                        var n = this,
                            t = Rr(e.providerId),
                            i = Ai(),
                            r = null;
                        (!Ii() || ai()) && Ah(this).options.authDomain && e.isOAuthProvider && (r = qs(Ah(this).options.authDomain, Ah(this).options.apiKey, Ah(this).name, "signInViaPopup", e, null, i, fl.SDK_VERSION || null, null, null, this.R()));
                        var o = ei(r, t && t.Da, t && t.Ca);
                        return _h(this, t = wh(this).then(function(t) {
                            return sc(t, o, "signInViaPopup", e, i, !!r, n.R())
                        }).then(function() {
                            return new qt(function(t, e) {
                                n.ja("signInViaPopup", null, new Yi("cancelled-popup-request"), n.g), n.f = t, n.v = e, n.g = i, n.c = hc(n.a, n, "signInViaPopup", o, i)
                            })
                        }).then(function(t) {
                            return o && ti(o), t ? Ui(t) : null
                        }).s(function(t) {
                            throw o && ti(o), t
                        }))
                    }, t.Mc = function(t) {
                        if (!bi()) return zt(new Yi("operation-not-supported-in-this-environment"));
                        var e = this;
                        return _h(this, wh(this).then(function() {
                            return function(t) {
                                return mh(t, function() {
                                    return t.b.set(lh, t.c.C, t.a)
                                })
                            }(e.h)
                        }).then(function() {
                            return cc(e.a, "signInViaRedirect", t, void 0, e.R())
                        }))
                    }, t.oa = function() {
                        var e = this;
                        return Ih(this).then(function(t) {
                            return e.a && vc(e.a.b), t
                        }).s(function(t) {
                            throw e.a && vc(e.a.b), t
                        })
                    }, t.Rc = function(t) {
                        if (!t) return zt(new Yi("null-user"));
                        if (this.P != t.tenantId) return zt(new Yi("tenant-id-mismatch"));
                        var e = this,
                            n = {};
                        n.apiKey = Ah(this).options.apiKey, n.authDomain = Ah(this).options.authDomain, n.appName = Ah(this).name;
                        var i = function(t, e, n, i) {
                            e = e || {
                                apiKey: t.l,
                                authDomain: t.o,
                                appName: t.m
                            };
                            var r = t.b,
                                o = {};
                            return o[Da] = r.b, o.refreshToken = r.a, o.expiresIn = (r.c - E()) / 1e3, e = new Dc(e, o), n && (e.da = n), i && Lc(e, i), Yc(e, t), e
                        }(t, n, e.w, e.Aa());
                        return _h(this, this.i.then(function() {
                            if (Ah(e).options.apiKey != t.l) return i.reload()
                        }).then(function() {
                            return Sh(e) && t.uid == Sh(e).uid ? (Yc(Sh(e), t), e.aa(t)) : (Eh(e, i), Kc(i), e.aa(i))
                        }).then(function() {
                            Oh(e)
                        }))
                    }, t.pb = function() {
                        var t = this,
                            e = this.i.then(function() {
                                return t.a && vc(t.a.b), Sh(t) ? (Eh(t, null), ph(t.h).then(function() {
                                    Oh(t)
                                })) : Yt()
                            });
                        return _h(this, e)
                    }, t.Nc = function() {
                        var i = this;
                        return vh(this.h, Ah(this).options.authDomain).then(function(t) {
                            if (!i.l) {
                                var e;
                                if (e = Sh(i) && t) {
                                    e = Sh(i).uid;
                                    var n = t.uid;
                                    e = null != e && "" !== e && null != n && "" !== n && e == n
                                }
                                if (e) return Yc(Sh(i), t), Sh(i).G();
                                (Sh(i) || t) && (Eh(i, t), t && (Kc(t), t.da = i.w), i.a && ic(i.a, i), Oh(i))
                            }
                        })
                    }, t.aa = function(t) {
                        return dh(this.h, t)
                    }, t.bc = function() {
                        Oh(this), this.aa(Sh(this))
                    }, t.mc = function() {
                        this.pb()
                    }, t.nc = function() {
                        this.pb()
                    }, t.oc = function(t) {
                        var e = this;
                        this.addAuthTokenListener(function() {
                            t.next(Sh(e))
                        })
                    }, t.pc = function(t) {
                        var e = this;
                        ! function(t, e) {
                            t.J.push(e), _h(t, t.i.then(function() {
                                !t.l && V(t.J, e) && t.W !== t.getUid() && (t.W = t.getUid(), e(Nh(t)))
                            }))
                        }(this, function() {
                            t.next(Sh(e))
                        })
                    }, t.xc = function(t, e, n) {
                        var i = this;
                        return this.ga && Promise.resolve().then(function() {
                            m(t) ? t(Sh(i)) : m(t.next) && t.next(Sh(i))
                        }), this.Ub(t, e, n)
                    }, t.wc = function(t, e, n) {
                        var i = this;
                        return this.ga && Promise.resolve().then(function() {
                            i.W = i.getUid(), m(t) ? t(Sh(i)) : m(t.next) && t.next(Sh(i))
                        }), this.Vb(t, e, n)
                    }, t.cc = function(t) {
                        var e = this,
                            n = this.i.then(function() {
                                return Sh(e) ? Sh(e).G(t).then(function(t) {
                                    return {
                                        accessToken: t
                                    }
                                }) : null
                            });
                        return _h(this, n)
                    }, t.Hc = function(t) {
                        var n = this;
                        return this.i.then(function() {
                            return kh(n, Ns(n.b, Ts, {
                                token: t
                            }))
                        }).then(function(t) {
                            var e = t.user;
                            return Jc(e, "isAnonymous", !1), n.aa(e), t
                        })
                    }, t.Ic = function(t, e) {
                        var n = this;
                        return this.i.then(function() {
                            return kh(n, Ns(n.b, Es, {
                                email: t,
                                password: e
                            }))
                        })
                    }, t.Xb = function(t, e) {
                        var n = this;
                        return this.i.then(function() {
                            return kh(n, Ns(n.b, ns, {
                                email: t,
                                password: e
                            }))
                        })
                    }, t.Ra = function(t) {
                        var e = this;
                        return this.i.then(function() {
                            return kh(e, t.na(e.b))
                        })
                    }, t.Gc = function(t) {
                        return Li("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."), this.Ra(t)
                    }, t.ob = function() {
                        var n = this;
                        return this.i.then(function() {
                            var t = Sh(n);
                            return t && t.isAnonymous ? Ui({
                                user: t,
                                credential: null,
                                additionalUserInfo: Ui({
                                    providerId: null,
                                    isNewUser: !1
                                }),
                                operationType: "signIn"
                            }) : kh(n, n.b.ob()).then(function(t) {
                                var e = t.user;
                                return Jc(e, "isAnonymous", !0), n.aa(e), t
                            })
                        })
                    }, t.getUid = function() {
                        return Sh(this) && Sh(this).uid || null
                    }, t.Wb = function(t) {
                        this.addAuthTokenListener(t), this.o++, 0 < this.o && Sh(this) && jc(Sh(this))
                    }, t.Ec = function(e) {
                        var n = this;
                        M(this.m, function(t) {
                            t == e && n.o--
                        }), this.o < 0 && (this.o = 0), 0 == this.o && Sh(this) && Uc(Sh(this)), this.removeAuthTokenListener(e)
                    }, t.addAuthTokenListener = function(t) {
                        var e = this;
                        this.m.push(t), _h(this, this.i.then(function() {
                            e.l || V(e.m, t) && t(Nh(e))
                        }))
                    }, t.removeAuthTokenListener = function(e) {
                        K(this.m, function(t) {
                            return t == e
                        })
                    }, t.delete = function() {
                        this.l = !0;
                        for (var t = 0; t < this.O.length; t++) this.O[t].cancel("app-deleted");
                        return this.O = [], this.h && (t = this.h).b.removeListener(fh("local"), t.a, this.ma), this.a && (rc(this.a, this), vc(this.a.b)), Promise.resolve()
                    }, t.$b = function(t) {
                        return _h(this, function(t, e) {
                            return Ns(t, is, {
                                identifier: e,
                                continueUri: yi() ? $n() : "http://localhost"
                            }).then(function(t) {
                                return t.signinMethods || []
                            })
                        }(this.b, t))
                    }, t.qc = function(t) {
                        return !!lo(t)
                    }, t.lb = function(e, n) {
                        var i = this;
                        return _h(this, Yt().then(function() {
                            var t = new ur(n);
                            if (!t.c) throw new Yi("argument-error", lr + " must be true when sending sign in link to email");
                            return br(t)
                        }).then(function(t) {
                            return i.b.lb(e, t)
                        }).then(function() {}))
                    }, t.Uc = function(t) {
                        return this.Ka(t).then(function(t) {
                            return t.data.email
                        })
                    }, t.$a = function(t, e) {
                        return _h(this, this.b.$a(t, e).then(function() {}))
                    }, t.Ka = function(t) {
                        return _h(this, this.b.Ka(t).then(function(t) {
                            return new Fi(t)
                        }))
                    }, t.Xa = function(t) {
                        return _h(this, this.b.Xa(t).then(function() {}))
                    }, t.kb = function(e, t) {
                        var n = this;
                        return _h(this, Yt().then(function() {
                            return void 0 === t || G(t) ? {} : br(new ur(t))
                        }).then(function(t) {
                            return n.b.kb(e, t)
                        }).then(function() {}))
                    }, t.Kc = function(t, e) {
                        return _h(this, Ic(this, t, e, I(this.Ra, this)))
                    }, t.Jc = function(n, i) {
                        var r = this;
                        return _h(this, Yt().then(function() {
                            var t = i || $n(),
                                e = ho(n, t);
                            if (!(t = lo(t))) throw new Yi("argument-error", "Invalid email link!");
                            if (t.tenantId !== r.R()) throw new Yi("tenant-id-mismatch");
                            return r.Ra(e)
                        }))
                    }, Ph.prototype.render = function() {}, Ph.prototype.reset = function() {}, Ph.prototype.getResponse = function() {}, Ph.prototype.execute = function() {};
                    var Dh = null;

                    function Ch(t, e) {
                        return (e = Lh(e)) && t.a[e] || null
                    }

                    function Lh(t) {
                        return (t = void 0 === t ? 1e12 : t) ? t.toString() : null
                    }

                    function xh(t, e) {
                        this.g = !1, this.c = e, this.a = this.b = null, this.h = "invisible" !== this.c.size, this.f = Fn(t);
                        var n = this;
                        this.i = function() {
                            n.execute()
                        }, this.h ? this.execute() : Be(this.f, "click", this.i)
                    }

                    function Mh(t) {
                        if (t.g) throw Error("reCAPTCHA mock was already deleted!")
                    }

                    function jh() {}
                    Rh.prototype.render = function(t, e) {
                        return this.a[this.b.toString()] = new xh(t, e), this.b++
                    }, Rh.prototype.reset = function(t) {
                        var e = Ch(this, t);
                        t = Lh(t), e && t && (e.delete(), delete this.a[t])
                    }, Rh.prototype.getResponse = function(t) {
                        return (t = Ch(this, t)) ? t.getResponse() : null
                    }, Rh.prototype.execute = function(t) {
                        (t = Ch(this, t)) && t.execute()
                    }, xh.prototype.getResponse = function() {
                        return Mh(this), this.b
                    }, xh.prototype.execute = function() {
                        Mh(this);
                        var n = this;
                        this.a || (this.a = setTimeout(function() {
                            n.b = function() {
                                for (var t = 50, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--;
                                return e.join("")
                            }();
                            var t = n.c.callback,
                                e = n.c["expired-callback"];
                            if (t) try {
                                t(n.b)
                            } catch (t) {}
                            n.a = setTimeout(function() {
                                if (n.a = null, n.b = null, e) try {
                                    e()
                                } catch (t) {}
                                n.h && n.execute()
                            }, 6e4)
                        }, 500))
                    }, xh.prototype.delete = function() {
                        Mh(this), this.g = !0, clearTimeout(this.a), this.a = null, Xe(this.f, "click", this.i)
                    }, jh.prototype.g = function() {
                        return Yt(Dh = Dh || new Rh)
                    }, jh.prototype.c = function() {};
                    var Uh = null;

                    function Vh() {
                        this.b = l.grecaptcha ? 1 / 0 : 0, this.f = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString()
                    }
                    var Fh = new Y(Z, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
                        Kh = new Oi(3e4, 6e4);
                    Vh.prototype.g = function(r) {
                        var o = this;
                        return new qt(function(t, e) {
                            var i = setTimeout(function() {
                                e(new Yi("network-request-failed"))
                            }, Kh.get());
                            !l.grecaptcha || r !== o.f && !o.b ? (l[o.a] = function() {
                                if (l.grecaptcha) {
                                    o.f = r;
                                    var n = l.grecaptcha.render;
                                    l.grecaptcha.render = function(t, e) {
                                        return t = n(t, e), o.b++, t
                                    }, clearTimeout(i), t(l.grecaptcha)
                                } else clearTimeout(i), e(new Yi("internal-error"));
                                delete l[o.a]
                            }, Yt(Ea(nt(Fh, {
                                onload: o.a,
                                hl: r || ""
                            }))).s(function() {
                                clearTimeout(i), e(new Yi("internal-error", "Unable to load external reCAPTCHA dependencies!"))
                            })) : (clearTimeout(i), t(l.grecaptcha))
                        })
                    }, Vh.prototype.c = function() {
                        this.b--
                    };
                    var qh = null;

                    function Hh(t, e, n, i, r, o, a) {
                        if (Mi(this, "type", "recaptcha"), this.c = this.f = null, this.B = !1, this.u = e, this.g = null, a = a ? Uh = Uh || new jh : qh = qh || new Vh, this.m = a, this.a = n || {
                                theme: "light",
                                type: "image"
                            }, this.h = [], this.a[Wh]) throw new Yi("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
                        if (this.i = "invisible" === this.a[Xh], !l.document) throw new Yi("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
                        if (!Fn(e) || !this.i && Fn(e).hasChildNodes()) throw new Yi("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
                        this.o = new Pa(t, o || null, r || null), this.v = i || function() {
                            return null
                        };
                        var s = this;
                        this.l = [];
                        var u = this.a[Bh];
                        this.a[Bh] = function(t) {
                            if (Jh(s, t), "function" == typeof u) u(t);
                            else if ("string" == typeof u) {
                                var e = mi(u, l);
                                "function" == typeof e && e(t)
                            }
                        };
                        var c = this.a[Gh];
                        this.a[Gh] = function() {
                            if (Jh(s, null), "function" == typeof c) c();
                            else if ("string" == typeof c) {
                                var t = mi(c, l);
                                "function" == typeof t && t()
                            }
                        }
                    }
                    var Bh = "callback",
                        Gh = "expired-callback",
                        Wh = "sitekey",
                        Xh = "size";

                    function Jh(t, e) {
                        for (var n = 0; n < t.l.length; n++) try {
                            t.l[n](e)
                        } catch (t) {}
                    }

                    function Yh(t, e) {
                        return t.h.push(e), e.ka(function() {
                            F(t.h, e)
                        }), e
                    }

                    function zh(t) {
                        if (t.B) throw new Yi("internal-error", "RecaptchaVerifier instance has been destroyed.")
                    }

                    function $h(t, e, n) {
                        var i = !1;
                        try {
                            this.b = n || fl.app()
                        } catch (t) {
                            throw new Yi("argument-error", "No firebase.app.App instance is currently initialized.")
                        }
                        if (!this.b.options || !this.b.options.apiKey) throw new Yi("invalid-api-key");
                        n = this.b.options.apiKey;
                        var r = this,
                            o = null;
                        try {
                            o = this.b.auth().Aa()
                        } catch (t) {}
                        try {
                            i = this.b.auth().settings.appVerificationDisabledForTesting
                        } catch (t) {}
                        o = fl.SDK_VERSION ? pi(fl.SDK_VERSION, o) : null, Hh.call(this, n, t, e, function() {
                            try {
                                var e = r.b.auth().ha()
                            } catch (t) {
                                e = null
                            }
                            return e
                        }, o, Nr(Ar), i)
                    }

                    function Zh(t, e, n, i) {
                        t: {
                            n = Array.prototype.slice.call(n);
                            for (var r = 0, o = !1, a = 0; a < e.length; a++)
                                if (e[a].optional) o = !0;
                                else {
                                    if (o) throw new Yi("internal-error", "Argument validator encountered a required argument after an optional argument.");
                                    r++
                                }
                            if (o = e.length, n.length < r || o < n.length) i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o + " arguments") + " but got " + n.length + ".";
                            else {
                                for (r = 0; r < n.length; r++)
                                    if (o = e[r].optional && void 0 === n[r], !e[r].N(n[r]) && !o) {
                                        if (e = e[r], r < 0 || r >= Qh.length) throw new Yi("internal-error", "Argument validator received an unsupported number of arguments.");
                                        n = Qh[r], i = (i ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.M + ".";
                                        break t
                                    }
                                i = null
                            }
                        }
                        if (i) throw new Yi("argument-error", t + " failed: " + i)
                    }(t = Hh.prototype).Ba = function() {
                        var e = this;
                        return this.f ? this.f : this.f = Yh(this, Yt().then(function() {
                            if (yi() && !si()) return ri();
                            throw new Yi("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")
                        }).then(function() {
                            return e.m.g(e.v())
                        }).then(function(t) {
                            return e.g = t, Ns(e.o, ds, {})
                        }).then(function(t) {
                            e.a[Wh] = t.recaptchaSiteKey
                        }).s(function(t) {
                            throw e.f = null, t
                        }))
                    }, t.render = function() {
                        zh(this);
                        var n = this;
                        return Yh(this, this.Ba().then(function() {
                            if (null === n.c) {
                                var t = n.u;
                                if (!n.i) {
                                    var e = Fn(t);
                                    t = Hn("DIV"), e.appendChild(t)
                                }
                                n.c = n.g.render(t, n.a)
                            }
                            return n.c
                        }))
                    }, t.verify = function() {
                        zh(this);
                        var r = this;
                        return Yh(this, this.render().then(function(i) {
                            return new qt(function(e) {
                                var t = r.g.getResponse(i);
                                if (t) e(t);
                                else {
                                    var n = function(t) {
                                        t && (function(t, e) {
                                            K(t.l, function(t) {
                                                return t == e
                                            })
                                        }(r, n), e(t))
                                    };
                                    r.l.push(n), r.i && r.g.execute(r.c)
                                }
                            })
                        }))
                    }, t.reset = function() {
                        zh(this), null !== this.c && this.g.reset(this.c)
                    }, t.clear = function() {
                        zh(this), this.B = !0, this.m.c();
                        for (var t = 0; t < this.h.length; t++) this.h[t].cancel("RecaptchaVerifier instance has been destroyed.");
                        if (!this.i) {
                            t = Fn(this.u);
                            for (var e; e = t.firstChild;) t.removeChild(e)
                        }
                    }, k($h, Hh);
                    var Qh = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

                    function tl(t, e) {
                        return {
                            name: t || "",
                            M: "a valid string",
                            optional: !!e,
                            N: h
                        }
                    }

                    function el(t, e) {
                        return {
                            name: t || "",
                            M: "a boolean",
                            optional: !!e,
                            N: n
                        }
                    }

                    function nl(t, e) {
                        return {
                            name: t || "",
                            M: "a valid object",
                            optional: !!e,
                            N: g
                        }
                    }

                    function il(t, e) {
                        return {
                            name: t || "",
                            M: "a function",
                            optional: !!e,
                            N: m
                        }
                    }

                    function rl(t, e) {
                        return {
                            name: t || "",
                            M: "null",
                            optional: !!e,
                            N: r
                        }
                    }

                    function ol(n) {
                        return {
                            name: n ? n + "Credential" : "credential",
                            M: n ? "a valid " + n + " credential" : "a valid credential",
                            optional: !1,
                            N: function(t) {
                                if (!t) return !1;
                                var e = !n || t.providerId === n;
                                return !(!t.na || !e)
                            }
                        }
                    }

                    function al() {
                        return {
                            name: "applicationVerifier",
                            M: "an implementation of firebase.auth.ApplicationVerifier",
                            optional: !1,
                            N: function(t) {
                                return !!(t && h(t.type) && m(t.verify))
                            }
                        }
                    }

                    function sl(e, n, t, i) {
                        return {
                            name: t || "",
                            M: e.M + " or " + n.M,
                            optional: !!i,
                            N: function(t) {
                                return e.N(t) || n.N(t)
                            }
                        }
                    }

                    function ul(t, e) {
                        for (var n in e) {
                            var i = e[n].name;
                            t[i] = ll(i, t[n], e[n].j)
                        }
                    }

                    function cl(t, e) {
                        for (var n in e) {
                            var i = e[n].name;
                            i !== n && Object.defineProperty(t, i, {
                                get: T(function(t) {
                                    return this[t]
                                }, n),
                                set: T(function(t, e, n, i) {
                                    Zh(t, [n], [i], !0), this[e] = i
                                }, i, n, e[n].Ya),
                                enumerable: !0
                            })
                        }
                    }

                    function hl(t, e, n, i) {
                        t[e] = ll(e, n, i)
                    }

                    function ll(t, e, n) {
                        function i() {
                            var t = Array.prototype.slice.call(arguments);
                            return Zh(o, n, t), e.apply(this, t)
                        }
                        if (!n) return e;
                        var r, o = function(t) {
                            return (t = t.split("."))[t.length - 1]
                        }(t);
                        for (r in e) i[r] = e[r];
                        for (r in e.prototype) i.prototype[r] = e.prototype[r];
                        return i
                    }
                    ul(gh.prototype, {
                            Xa: {
                                name: "applyActionCode",
                                j: [tl("code")]
                            },
                            Ka: {
                                name: "checkActionCode",
                                j: [tl("code")]
                            },
                            $a: {
                                name: "confirmPasswordReset",
                                j: [tl("code"), tl("newPassword")]
                            },
                            Xb: {
                                name: "createUserWithEmailAndPassword",
                                j: [tl("email"), tl("password")]
                            },
                            $b: {
                                name: "fetchSignInMethodsForEmail",
                                j: [tl("email")]
                            },
                            oa: {
                                name: "getRedirectResult",
                                j: []
                            },
                            qc: {
                                name: "isSignInWithEmailLink",
                                j: [tl("emailLink")]
                            },
                            wc: {
                                name: "onAuthStateChanged",
                                j: [sl(nl(), il(), "nextOrObserver"), il("opt_error", !0), il("opt_completed", !0)]
                            },
                            xc: {
                                name: "onIdTokenChanged",
                                j: [sl(nl(), il(), "nextOrObserver"), il("opt_error", !0), il("opt_completed", !0)]
                            },
                            kb: {
                                name: "sendPasswordResetEmail",
                                j: [tl("email"), sl(nl("opt_actionCodeSettings", !0), rl(null, !0), "opt_actionCodeSettings", !0)]
                            },
                            lb: {
                                name: "sendSignInLinkToEmail",
                                j: [tl("email"), nl("actionCodeSettings")]
                            },
                            mb: {
                                name: "setPersistence",
                                j: [tl("persistence")]
                            },
                            Gc: {
                                name: "signInAndRetrieveDataWithCredential",
                                j: [ol()]
                            },
                            ob: {
                                name: "signInAnonymously",
                                j: []
                            },
                            Ra: {
                                name: "signInWithCredential",
                                j: [ol()]
                            },
                            Hc: {
                                name: "signInWithCustomToken",
                                j: [tl("token")]
                            },
                            Ic: {
                                name: "signInWithEmailAndPassword",
                                j: [tl("email"), tl("password")]
                            },
                            Jc: {
                                name: "signInWithEmailLink",
                                j: [tl("email"), tl("emailLink", !0)]
                            },
                            Kc: {
                                name: "signInWithPhoneNumber",
                                j: [tl("phoneNumber"), al()]
                            },
                            Lc: {
                                name: "signInWithPopup",
                                j: [{
                                    name: "authProvider",
                                    M: "a valid Auth provider",
                                    optional: !1,
                                    N: function(t) {
                                        return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                                    }
                                }]
                            },
                            Mc: {
                                name: "signInWithRedirect",
                                j: [{
                                    name: "authProvider",
                                    M: "a valid Auth provider",
                                    optional: !1,
                                    N: function(t) {
                                        return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                                    }
                                }]
                            },
                            Rc: {
                                name: "updateCurrentUser",
                                j: [sl({
                                    name: "user",
                                    M: "an instance of Firebase User",
                                    optional: !1,
                                    N: function(t) {
                                        return !!(t && t instanceof Dc)
                                    }
                                }, rl(), "user")]
                            },
                            pb: {
                                name: "signOut",
                                j: []
                            },
                            toJSON: {
                                name: "toJSON",
                                j: [tl(null, !0)]
                            },
                            Tc: {
                                name: "useDeviceLanguage",
                                j: []
                            },
                            Uc: {
                                name: "verifyPasswordResetCode",
                                j: [tl("code")]
                            }
                        }), cl(gh.prototype, {
                            lc: {
                                name: "languageCode",
                                Ya: sl(tl(), rl(), "languageCode")
                            },
                            ti: {
                                name: "tenantId",
                                Ya: sl(tl(), rl(), "tenantId")
                            }
                        }), (gh.Persistence = Tu).LOCAL = "local", gh.Persistence.SESSION = "session", gh.Persistence.NONE = "none", ul(Dc.prototype, {
                            delete: {
                                name: "delete",
                                j: []
                            },
                            dc: {
                                name: "getIdTokenResult",
                                j: [el("opt_forceRefresh", !0)]
                            },
                            G: {
                                name: "getIdToken",
                                j: [el("opt_forceRefresh", !0)]
                            },
                            rc: {
                                name: "linkAndRetrieveDataWithCredential",
                                j: [ol()]
                            },
                            eb: {
                                name: "linkWithCredential",
                                j: [ol()]
                            },
                            sc: {
                                name: "linkWithPhoneNumber",
                                j: [tl("phoneNumber"), al()]
                            },
                            tc: {
                                name: "linkWithPopup",
                                j: [{
                                    name: "authProvider",
                                    M: "a valid Auth provider",
                                    optional: !1,
                                    N: function(t) {
                                        return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                                    }
                                }]
                            },
                            uc: {
                                name: "linkWithRedirect",
                                j: [{
                                    name: "authProvider",
                                    M: "a valid Auth provider",
                                    optional: !1,
                                    N: function(t) {
                                        return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                                    }
                                }]
                            },
                            Ac: {
                                name: "reauthenticateAndRetrieveDataWithCredential",
                                j: [ol()]
                            },
                            gb: {
                                name: "reauthenticateWithCredential",
                                j: [ol()]
                            },
                            Bc: {
                                name: "reauthenticateWithPhoneNumber",
                                j: [tl("phoneNumber"), al()]
                            },
                            Cc: {
                                name: "reauthenticateWithPopup",
                                j: [{
                                    name: "authProvider",
                                    M: "a valid Auth provider",
                                    optional: !1,
                                    N: function(t) {
                                        return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                                    }
                                }]
                            },
                            Dc: {
                                name: "reauthenticateWithRedirect",
                                j: [{
                                    name: "authProvider",
                                    M: "a valid Auth provider",
                                    optional: !1,
                                    N: function(t) {
                                        return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                                    }
                                }]
                            },
                            reload: {
                                name: "reload",
                                j: []
                            },
                            jb: {
                                name: "sendEmailVerification",
                                j: [sl(nl("opt_actionCodeSettings", !0), rl(null, !0), "opt_actionCodeSettings", !0)]
                            },
                            toJSON: {
                                name: "toJSON",
                                j: [tl(null, !0)]
                            },
                            Qc: {
                                name: "unlink",
                                j: [tl("provider")]
                            },
                            rb: {
                                name: "updateEmail",
                                j: [tl("email")]
                            },
                            sb: {
                                name: "updatePassword",
                                j: [tl("password")]
                            },
                            Sc: {
                                name: "updatePhoneNumber",
                                j: [ol("phone")]
                            },
                            tb: {
                                name: "updateProfile",
                                j: [nl("profile")]
                            }
                        }), ul(Rh.prototype, {
                            execute: {
                                name: "execute"
                            },
                            render: {
                                name: "render"
                            },
                            reset: {
                                name: "reset"
                            },
                            getResponse: {
                                name: "getResponse"
                            }
                        }), ul(Ph.prototype, {
                            execute: {
                                name: "execute"
                            },
                            render: {
                                name: "render"
                            },
                            reset: {
                                name: "reset"
                            },
                            getResponse: {
                                name: "getResponse"
                            }
                        }), ul(qt.prototype, {
                            ka: {
                                name: "finally"
                            },
                            s: {
                                name: "catch"
                            },
                            then: {
                                name: "then"
                            }
                        }), cl(yc.prototype, {
                            appVerificationDisabled: {
                                name: "appVerificationDisabledForTesting",
                                Ya: el("appVerificationDisabledForTesting")
                            }
                        }), ul(wc.prototype, {
                            confirm: {
                                name: "confirm",
                                j: [tl("verificationCode")]
                            }
                        }), hl(qr, "fromJSON", function(t) {
                            t = h(t) ? JSON.parse(t) : t;
                            for (var e, n = [Yr, uo, po, Wr], i = 0; i < n.length; i++)
                                if (e = n[i](t)) return e;
                            return null
                        }, [sl(tl(), nl(), "json")]), hl(co, "credential", function(t, e) {
                            return new so(t, e)
                        }, [tl("email"), tl("password")]), ul(so.prototype, {
                            A: {
                                name: "toJSON",
                                j: [tl(null, !0)]
                            }
                        }), ul(Qr.prototype, {
                            wa: {
                                name: "addScope",
                                j: [tl("scope")]
                            },
                            Ea: {
                                name: "setCustomParameters",
                                j: [nl("customOAuthParameters")]
                            }
                        }), hl(Qr, "credential", to, [sl(tl(), nl(), "token")]), hl(co, "credentialWithLink", ho, [tl("email"), tl("emailLink")]), ul(eo.prototype, {
                            wa: {
                                name: "addScope",
                                j: [tl("scope")]
                            },
                            Ea: {
                                name: "setCustomParameters",
                                j: [nl("customOAuthParameters")]
                            }
                        }), hl(eo, "credential", no, [sl(tl(), nl(), "token")]), ul(io.prototype, {
                            wa: {
                                name: "addScope",
                                j: [tl("scope")]
                            },
                            Ea: {
                                name: "setCustomParameters",
                                j: [nl("customOAuthParameters")]
                            }
                        }), hl(io, "credential", ro, [sl(tl(), sl(nl(), rl()), "idToken"), sl(tl(), rl(), "accessToken", !0)]), ul(oo.prototype, {
                            Ea: {
                                name: "setCustomParameters",
                                j: [nl("customOAuthParameters")]
                            }
                        }), hl(oo, "credential", ao, [sl(tl(), nl(), "token"), tl("secret", !0)]), ul(Zr.prototype, {
                            wa: {
                                name: "addScope",
                                j: [tl("scope")]
                            },
                            credential: {
                                name: "credential",
                                j: [sl(tl(), sl(nl(), rl()), "optionsOrIdToken"), sl(tl(), rl(), "accessToken", !0)]
                            },
                            Ea: {
                                name: "setCustomParameters",
                                j: [nl("customOAuthParameters")]
                            }
                        }), ul(Xr.prototype, {
                            A: {
                                name: "toJSON",
                                j: [tl(null, !0)]
                            }
                        }), ul(Br.prototype, {
                            A: {
                                name: "toJSON",
                                j: [tl(null, !0)]
                            }
                        }), hl(mo, "credential", go, [tl("verificationId"), tl("verificationCode")]), ul(mo.prototype, {
                            Va: {
                                name: "verifyPhoneNumber",
                                j: [tl("phoneNumber"), al()]
                            }
                        }), ul(fo.prototype, {
                            A: {
                                name: "toJSON",
                                j: [tl(null, !0)]
                            }
                        }), ul(Yi.prototype, {
                            toJSON: {
                                name: "toJSON",
                                j: [tl(null, !0)]
                            }
                        }), ul(So.prototype, {
                            toJSON: {
                                name: "toJSON",
                                j: [tl(null, !0)]
                            }
                        }), ul(Ao.prototype, {
                            toJSON: {
                                name: "toJSON",
                                j: [tl(null, !0)]
                            }
                        }), ul($h.prototype, {
                            clear: {
                                name: "clear",
                                j: []
                            },
                            render: {
                                name: "render",
                                j: []
                            },
                            verify: {
                                name: "verify",
                                j: []
                            }
                        }), hl(Qi, "parseLink", sr, [tl("link")]),
                        function() {
                            if (void 0 === fl || !fl.INTERNAL || !fl.INTERNAL.registerService) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
                            var t = {
                                ActionCodeInfo: {
                                    Operation: {
                                        EMAIL_SIGNIN: Ki,
                                        PASSWORD_RESET: "PASSWORD_RESET",
                                        RECOVER_EMAIL: "RECOVER_EMAIL",
                                        VERIFY_EMAIL: "VERIFY_EMAIL"
                                    }
                                },
                                Auth: gh,
                                AuthCredential: qr,
                                Error: Yi
                            };
                            hl(t, "EmailAuthProvider", co, []), hl(t, "FacebookAuthProvider", Qr, []), hl(t, "GithubAuthProvider", eo, []), hl(t, "GoogleAuthProvider", io, []), hl(t, "TwitterAuthProvider", oo, []), hl(t, "OAuthProvider", Zr, [tl("providerId")]), hl(t, "SAMLAuthProvider", $r, [tl("providerId")]), hl(t, "PhoneAuthProvider", mo, [{
                                name: "auth",
                                M: "an instance of Firebase Auth",
                                optional: !0,
                                N: function(t) {
                                    return !!(t && t instanceof gh)
                                }
                            }]), hl(t, "RecaptchaVerifier", $h, [sl(tl(), {
                                name: "",
                                M: "an HTML element",
                                optional: !1,
                                N: function(t) {
                                    return !!(t && t instanceof Element)
                                }
                            }, "recaptchaContainer"), nl("recaptchaParameters", !0), {
                                name: "app",
                                M: "an instance of Firebase App",
                                optional: !0,
                                N: function(t) {
                                    return !!(t && t instanceof fl.app.App)
                                }
                            }]), hl(t, "ActionCodeURL", Qi, []), fl.INTERNAL.registerService("auth", function(t, e) {
                                return e({
                                    INTERNAL: {
                                        getUid: I((t = new gh(t)).getUid, t),
                                        getToken: I(t.cc, t),
                                        addAuthTokenListener: I(t.Wb, t),
                                        removeAuthTokenListener: I(t.Ec, t)
                                    }
                                }), t
                            }, t, function(t, e) {
                                if ("create" === t) try {
                                    e.auth()
                                } catch (t) {}
                            }), fl.INTERNAL.extendNamespace({
                                User: Dc
                            })
                        }()
                }.apply("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }).apply(this, arguments)
    } catch (t) {
        throw console.error(t), new Error("Cannot instantiate firebase-auth - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-auth.js.map