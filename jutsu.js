/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = c.slice
      , e = c.concat
      , f = c.push
      , g = c.indexOf
      , h = {}
      , i = h.toString
      , j = h.hasOwnProperty
      , k = {}
      , l = "1.11.3"
      , m = function(a, b) {
        return new m.fn.init(a,b)
    }
      , n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , o = /^-ms-/
      , p = /-([\da-z])/gi
      , q = function(a, b) {
        return b.toUpperCase()
    };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    },
    m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || m.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1,
                    f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {},
                    g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
                return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a)
                    return j.call(a, b);
            for (b in a)
                ;
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g)
                    return g.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length
              , d = 0
              , e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c),
                    null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c),
                    null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b],
            b = a,
            a = f),
            m.isFunction(a) ? (c = d.call(arguments, 2),
            e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }
            ,
            e.guid = a.guid = a.guid || m.guid++,
            e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }),
    m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = "length"in a && a.length
          , c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+","g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), da = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, ea = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            d = d || [],
            k = b.nodeType,
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)
                return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j),
                            !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h),
                                d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h),
                            d
                    } else {
                        if (f[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((j = f[3]) && c.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(j)),
                            d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u,
                    w = b,
                    x = 1 !== k && a,
                    1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a),
                        (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s),
                        s = "[id='" + s + "'] ",
                        l = o.length;
                        while (l--)
                            o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b,
                        x = o.join(",")
                    }
                    if (x)
                        try {
                            return H.apply(d, w.querySelectorAll(x)),
                            d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ia(a) {
            return a[u] = !0,
            a
        }
        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ka(a, b) {
            var c = a.split("|")
              , e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function la(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function oa(a) {
            return ia(function(b) {
                return b = +b,
                ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {},
        f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = g.documentElement,
            e = g.defaultView,
            e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)),
            p = !f(g),
            c.attributes = ja(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = $.test(g.getElementsByClassName),
            c.getById = ja(function(a) {
                return o.appendChild(a).id = u,
                !g.getElementsByName || !g.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", P)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = $.test(o.compareDocumentPosition),
            t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)
                    return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return la(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }
            ,
            g) : n
        }
        ,
        ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }
        ,
        ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(U, "='$1']"),
            !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }
        ,
        ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                k = q[u] || (q[u] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                m = j[0] === w && j[2],
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                    l === b))
                                        break;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a),
                    a = a.replace(ca, da).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function() {
                    return [0]
                }),
                last: oa(function(a, b) {
                    return [b - 1]
                }),
                eq: oa(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = na(b);
        function qa() {}
        qa.prototype = d.filters = d.pseudos,
        d.setFilters = new qa,
        g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = T.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        }
        ;
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function sa(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                ga(a, b[d], c);
            return c
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)),
            e && !e[u] && (e = wa(e, f)),
            ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = va(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = va(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                return a === b
            }, h, !0), l = sa(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                }
            return ta(m)
        }
        function ya(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--,
                    f && r.push(l))
                }
                if (p += q,
                c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s),
                    k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v,
                j = t),
                r
            };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = xa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && ra(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ja(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        ga
    }(a);
    m.find = s,
    m.expr = s.selectors,
    m.expr[":"] = m.expr.pseudos,
    m.unique = s.uniqueSort,
    m.text = s.getText,
    m.isXMLDoc = s.isXML,
    m.contains = s.contains;
    var t = m.expr.match.needsContext
      , u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b))
            return m.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return m.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (v.test(b))
                return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    m.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(m(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (m.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b,
                m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)),
                u.test(c[1]) && m.isPlainObject(b))
                    for (c in b)
                        m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]),
            d && d.parentNode) {
                if (d.id !== c[2])
                    return x.find(a);
                this.length = 1,
                this[0] = d
            }
            return this.context = y,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        m.makeArray(a, this))
    }
    ;
    A.prototype = m.fn,
    x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/
      , C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, c) {
            var d = []
              , e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))
                1 === e.nodeType && d.push(e),
                e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    m.fn.extend({
        has: function(a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = m.filter(d, e)),
            this.length > 1 && (C[a] || (e = m.unique(e)),
            B.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var E = /\S+/g
      , F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l,
            d = !0,
            f = g || 0,
            g = 0,
            e = h.length,
            b = !0; h && e > f; f++)
                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1,
            h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {
            add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments),
                    b ? e = h.length : c && (g = d,
                    j(c))
                }
                return this
            },
            remove: function() {
                return h && m.each(arguments, function(a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1)
                        h.splice(d, 1),
                        b && (e >= d && e--,
                        f >= d && f--)
                }),
                this
            },
            has: function(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            },
            empty: function() {
                return h = [],
                e = 0,
                this
            },
            disable: function() {
                return h = i = c = void 0,
                this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0,
                c || k.disable(),
                this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, c) {
                return !h || d && !i || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                b ? i.push(c) : j(c)),
                this
            },
            fire: function() {
                return k.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return k
    }
    ,
    m.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return m.Deferred(function(c) {
                        m.each(b, function(b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? m.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            m.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? d.call(arguments) : e,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)
                for (i = new Array(e),
                j = new Array(e),
                k = new Array(e); e > b; b++)
                    c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a),
        this
    }
    ,
    m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body)
                    return setTimeout(m.ready);
                m.isReady = !0,
                a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]),
                m.fn.triggerHandler && (m(y).triggerHandler("ready"),
                m(y).off("ready")))
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1),
        a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J),
        a.detachEvent("onload", J))
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(),
        m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(),
            "complete" === y.readyState)
                setTimeout(m.ready);
            else if (y.addEventListener)
                y.addEventListener("DOMContentLoaded", J, !1),
                a.addEventListener("load", J, !1);
            else {
                y.attachEvent("onreadystatechange", J),
                a.attachEvent("onload", J);
                var c = !1;
                try {
                    c = null == a.frameElement && y.documentElement
                } catch (d) {}
                c && c.doScroll && !function e() {
                    if (!m.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        I(),
                        m.ready()
                    }
                }()
            }
        return H.promise(b)
    }
    ;
    var K = "undefined", L;
    for (L in m(k))
        break;
    k.ownLast = "0" !== L,
    k.inlineBlockNeedsLayout = !1,
    m(function() {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0],
        c && c.style && (b = y.createElement("div"),
        d = y.createElement("div"),
        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(d).appendChild(b),
        typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
        a && (c.style.zoom = 1)),
        c.removeChild(d))
    }),
    function() {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null
    }(),
    m.acceptData = function(a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }
    ;
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h),
                j[k] || (j[k] = i ? {} : {
                    toJSON: m.noop
                }),
                ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)),
                g = j[k],
                e || (g.data || (g.data = {}),
                g = g.data),
                void 0 !== d && (g[m.camelCase(b)] = d),
                "string" == typeof b ? (f = g[b],
                null == f && (f = g[m.camelCase(b)])) : f = g,
                f
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando],
            !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }),
    m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f),
                1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)),
                        O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }),
    m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = m._data(a, b),
            c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = m._queueHooks(a, b)
              , g = function() {
                m.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"),
                    m._removeData(a, c)
                })
            })
        }
    }),
    m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = m._data(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , T = ["Top", "Right", "Bottom", "Left"]
      , U = function(a, b) {
        return a = b || a,
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }
      , V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)
                m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        m.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(m(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input")
          , b = y.createElement("div")
          , c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        k.leadingWhitespace = 3 === b.firstChild.nodeType,
        k.tbody = !b.getElementsByTagName("tbody").length,
        k.htmlSerialize = !!b.getElementsByTagName("link").length,
        k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML,
        a.type = "checkbox",
        a.checked = !0,
        c.appendChild(a),
        k.appendChecked = a.checked,
        b.innerHTML = "<textarea>x</textarea>",
        k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
        c.appendChild(b),
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        k.noCloneEvent = !0,
        b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent = !1
        }),
        b.cloneNode(!0).click()),
        null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
            k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i
      , Y = /^key/
      , Z = /^(?:mouse|pointer|contextmenu)|click/
      , $ = /^(?:focusinfocus|focusoutblur)$/
      , _ = /^([^.]*)(?:\.(.+)|)$/;
    function aa() {
        return !0
    }
    function ba() {
        return !1
    }
    function ca() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = m.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                   // return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(E) || [""],
                h = b.length;
                while (h--)
                    f = _.exec(b[h]) || [],
                    o = q = f[1],
                    p = (f[2] || "").split(".").sort(),
                    o && (j = m.event.special[o] || {},
                    o = (e ? j.delegateType : j.bindType) || o,
                    j = m.event.special[o] || {},
                    l = m.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && m.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i),
                    (n = g[o]) || (n = g[o] = [],
                    n.delegateCount = 0,
                    j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? n.splice(n.delegateCount++, 0, l) : n.push(l),
                    m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""],
                j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = m.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        n = k[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = n.length;
                        while (f--)
                            g = n[f],
                            !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1),
                            g.selector && n.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle),
                        delete k[o])
                    } else
                        for (o in k)
                            m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle,
                m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y,
            3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."),
            p = q.shift(),
            q.sort()),
            g = p.indexOf(":") < 0 && "on" + p,
            b = b[m.expando] ? b : new m.Event(p,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = q.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = d),
            c = null == c ? [b] : m.makeArray(c, [b]),
            k = m.event.special[p] || {},
            e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p,
                    $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h),
                        l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())
                    b.type = n > 1 ? i : k.bindType || p,
                    f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"),
                    f && f.apply(h, c),
                    f = g && h[g],
                    f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = p,
                !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g],
                    l && (d[g] = null),
                    m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0,
                    l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e,
                        a.data = e.data,
                        c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i),
                        void 0 !== c && (a.result = c) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [],
                        f = 0; h > f; f++)
                            d = b[f],
                            c = d.selector + " ",
                            void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length),
                            e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[m.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new m.Event(f),
            b = d.length;
            while (b--)
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = f.srcElement || y),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y,
                e = d.documentElement,
                c = d.body,
                a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ca() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ca() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null),
        a.detachEvent(d, c))
    }
    ,
    m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a,
        b && m.extend(this, b),
        this.timeStamp = a && a.timeStamp || m.now(),
        void (this[m.expando] = !0)) : new m.Event(a,b)
    }
    ,
    m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = aa,
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }),
    k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }),
            m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                m.event.simulate("change", this, a, !0)
            })),
            !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }),
                m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"),
            !X.test(this.nodeName)
        }
    }),
    k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = m._data(d, b);
                e || d.addEventListener(a, c, !0),
                m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0),
                m._removeData(d, b))
            }
        }
    }),
    m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (f in a)
                    this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b,
            c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = ba;
            else if (!d)
                return this;
            return 1 === e && (g = d,
            d = function(a) {
                return m().off(a),
                g.apply(this, arguments)
            }
            ,
            d.guid = g.guid || (g.guid = m.guid++)),
            this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = ba),
            this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });
    function da(a) {
        var b = ea.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , fa = / jQuery\d+="(?:null|\d+)"/g
      , ga = new RegExp("<(?:" + ea + ")[\\s/>]","i")
      , ha = /^\s+/
      , ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , ja = /<([\w:]+)/
      , ka = /<tbody/i
      , la = /<|&#?\w+;/
      , ma = /<(?:script|style|link)/i
      , na = /checked\s*(?:[^=]|=\s*.checked.)/i
      , oa = /^$|\/(?:java|ecma)script/i
      , pa = /^true\/(.*)/
      , qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , ra = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , sa = da(y)
      , ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option,
    ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead,
    ra.th = ra.td;
    function ua(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null != (d = c[e]); e++)
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }
    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }
    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }
    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }
    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)
                    m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text,
            ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML,
            ta.removeChild(f = ta.firstChild)),
            !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ua(f),
                h = ua(a),
                g = 0; null != (e = h[g]); ++g)
                    d[g] && Ba(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ua(a),
                    d = d || ua(f),
                    g = 0; null != (e = h[g]); g++)
                        Aa(e, d[g]);
                else
                    Aa(a, f);
            return d = ua(f, "script"),
            d.length > 0 && za(d, !i && ua(a, "script")),
            d = h = e = null,
            f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)
                if (f = a[q],
                f || 0 === f)
                    if ("object" === m.type(f))
                        m.merge(p, f.nodeType ? [f] : f);
                    else if (la.test(f)) {
                        h = h || o.appendChild(b.createElement("div")),
                        i = (ja.exec(f) || ["", ""])[1].toLowerCase(),
                        l = ra[i] || ra._default,
                        h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2],
                        e = l[0];
                        while (e--)
                            h = h.lastChild;
                        if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])),
                        !k.tbody) {
                            f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild,
                            e = f && f.childNodes.length;
                            while (e--)
                                m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                        }
                        m.merge(p, h.childNodes),
                        h.textContent = "";
                        while (h.firstChild)
                            h.removeChild(h.firstChild);
                        h = o.lastChild
                    } else
                        p.push(b.createTextNode(f));
            h && o.removeChild(h),
            k.appendChecked || m.grep(ua(p, "input"), va),
            q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f),
                h = ua(o.appendChild(f), "script"),
                g && za(h),
                c)) {
                    e = 0;
                    while (f = h[e++])
                        oa.test(f.type || "") && c.push(f)
                }
            return h = null,
            o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i],
                g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f],
                    l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null,
                    c.push(f))
                }
        }
    }),
    m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || m.cleanData(ua(c)),
                c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (m.cleanData(ua(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                m.cleanData(ua(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p))
                return this.each(function(c) {
                    var d = n.eq(c);
                    q && (a[0] = p.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this),
            c = i.firstChild,
            1 === i.childNodes.length && (i = c),
            c)) {
                for (g = m.map(ua(i, "script"), xa),
                f = g.length; l > j; j++)
                    d = i,
                    j !== o && (d = m.clone(d, !0, !0),
                    f && m.merge(g, ua(d, "script"))),
                    b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument,
                    m.map(g, ya),
                    j = 0; f > j; j++)
                        d = g[j],
                        oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null
            }
            return this
        }
    }),
    m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0),
                m(g[d])[b](c),
                f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ca, Da = {};
    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(),
        f
    }
    function Fa(a) {
        var b = y
          , c = Da[a];
        return c || (c = Ea(a, b),
        "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = (Ca[0].contentWindow || Ca[0].contentDocument).document,
        b.write(),
        b.close(),
        c = Ea(a, b),
        Ca.detach()),
        Da[a] = c),
        c
    }
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0],
            c && c.style ? (b = y.createElement("div"),
            d = y.createElement("div"),
            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            b.appendChild(y.createElement("div")).style.width = "5px",
            a = 3 !== b.offsetWidth),
            c.removeChild(d),
            a) : void 0
        }
    }();
    var Ga = /^margin/, Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$","i"), Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }
    ,
    Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)),
        Ha.test(g) && Ga.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 === g ? g : g + ""
    }
    ) : y.documentElement.currentStyle && (Ia = function(a) {
        return a.currentStyle
    }
    ,
    Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        Ha.test(g) && !Ka.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    );
    function La(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    !function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = d && d.style) {
            c.cssText = "float:left;opacity:.5",
            k.opacity = "0.5" === c.opacity,
            k.cssFloat = !!c.cssFloat,
            b.style.backgroundClip = "content-box",
            b.cloneNode(!0).style.backgroundClip = "",
            k.clearCloneStyle = "content-box" === b.style.backgroundClip,
            k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing,
            m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(),
                    g
                },
                boxSizingReliable: function() {
                    return null == f && i(),
                    f
                },
                pixelPosition: function() {
                    return null == e && i(),
                    e
                },
                reliableMarginRight: function() {
                    return null == h && i(),
                    h
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0],
                c && c.style && (b = y.createElement("div"),
                d = y.createElement("div"),
                d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                c.appendChild(d).appendChild(b),
                b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                e = f = !1,
                h = !0,
                a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top,
                f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width,
                i = b.appendChild(y.createElement("div")),
                i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                i.style.marginRight = i.style.width = "0",
                b.style.width = "1px",
                h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight),
                b.removeChild(i)),
                b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                i = b.getElementsByTagName("td"),
                i[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                g = 0 === i[0].offsetHeight,
                g && (i[0].style.display = "",
                i[1].style.display = "none",
                g = 0 === i[0].offsetHeight),
                c.removeChild(d))
            }
        }
    }(),
    m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var Ma = /alpha\([^)]*\)/i
      , Na = /opacity\s*=\s*([^)]*)/
      , Oa = /^(none|table(?!-c[ea]).+)/
      , Pa = new RegExp("^(" + S + ")(.*)$","i")
      , Qa = new RegExp("^([+-])=(" + S + ")","i")
      , Ra = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Sa = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ta = ["Webkit", "O", "Moz", "ms"];
    function Ua(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1)
          , d = b
          , e = Ta.length;
        while (e--)
            if (b = Ta[e] + c,
            b in a)
                return b;
        return d
    }
    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = m._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d),
            (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += m.css(a, c + T[f], !0, e)),
            d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)),
            "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e),
            "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }
    function Ya(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ia(a)
          , g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Ha.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)),
                g = m.cssHooks[b] || m.cssHooks[h],
                void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)),
                f = "number"),
                null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"),
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)),
            g = m.cssHooks[b] || m.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Ja(a, b, d)),
            "normal" === f && b in Sa && (f = Sa[b]),
            "" === c || c ? (e = parseFloat(f),
            c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }),
    m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function() {
                    return Ya(a, b, d)
                }) : Ya(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
        }
    }),
    m.cssHooks.marginRight = La(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Ja, [a, "marginRight"]) : void 0
    }),
    m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Ga.test(a) || (m.cssHooks[a + b].set = Wa)
    }),
    m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Va(this, !0)
        },
        hide: function() {
            return Va(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a,b,c,d,e)
    }
    m.Tween = Za,
    Za.prototype = {
        constructor: Za,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Za.propHooks._default.set(this),
            this
        }
    },
    Za.prototype.init.prototype = Za.prototype,
    Za.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    m.fx = Za.prototype.init,
    m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$","i"), cb = /queueHooks$/, db = [ib], eb = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = bb.exec(b)
              , f = e && e[3] || (m.cssNumber[a] ? "" : "px")
              , g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    m.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    function fb() {
        return setTimeout(function() {
            $a = void 0
        }),
        $a = m.now()
    }
    function gb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = T[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        n.always(function() {
            n.always(function() {
                h.unqueued--,
                m.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
        j = m.css(a, "display"),
        l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j,
        "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden",
        k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0],
            p.overflowX = c.overflow[1],
            p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            ab.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else
                j = void 0;
        if (m.isEmptyObject(o))
            "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden"in r && (q = r.hidden) : r = m._data(a, "fxshow", {}),
            f && (r.hidden = !q),
            q ? m(a).show() : n.done(function() {
                m(a).hide()
            }),
            n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o)
                    m.style(a, b, o[b])
            });
            for (d in o)
                g = hb(q ? r[d] : 0, d, n),
                d in r || (r[d] = g.start,
                q && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c),
            e = b[d],
            f = a[c],
            m.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = m.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function kb(a, b, c) {
        var d, e, f = 0, g = db.length, h = m.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $a || fb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++)
            if (d = db[f].call(j, a, k, j.opts))
                return d;
        return m.map(k, hb, j),
        m.isFunction(j.opts.start) && j.opts.start.call(a, j),
        m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kb, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                eb[c] = eb[c] || [],
                eb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? db.unshift(a) : db.push(a)
        }
    }),
    m.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            m.isFunction(d.old) && d.old.call(this),
            d.queue && m.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    m.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a)
              , f = m.speed(b, c, d)
              , g = function() {
                var b = kb(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = m.timers
                  , g = m._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && cb.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && m.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                m.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    m.each(["toggle", "show", "hide"], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
        }
    }),
    m.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    m.timers = [],
    m.fx.tick = function() {
        var a, b = m.timers, c = 0;
        for ($a = m.now(); c < b.length; c++)
            a = b[c],
            a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(),
        $a = void 0
    }
    ,
    m.fx.timer = function(a) {
        m.timers.push(a),
        a() ? m.fx.start() : m.timers.pop()
    }
    ,
    m.fx.interval = 13,
    m.fx.start = function() {
        _a || (_a = setInterval(m.fx.tick, m.fx.interval))
    }
    ,
    m.fx.stop = function() {
        clearInterval(_a),
        _a = null
    }
    ,
    m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a, b, c, d, e;
        b = y.createElement("div"),
        b.setAttribute("className", "t"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = y.createElement("select"),
        e = c.appendChild(y.createElement("option")),
        a = b.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px",
        k.getSetAttribute = "t" !== b.className,
        k.style = /top/.test(d.getAttribute("style")),
        k.hrefNormalized = "/a" === d.getAttribute("href"),
        k.checkOn = !!a.value,
        k.optSelected = e.selected,
        k.enctype = !!y.createElement("form").enctype,
        c.disabled = !0,
        k.optDisabled = !e.disabled,
        a = y.createElement("input"),
        a.setAttribute("value", ""),
        k.input = "" === a.getAttribute("value"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        k.radioValue = "t" === a.value
    }();
    var lb = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = m.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
            }
        }
    }),
    m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g],
                        m.inArray(m.valHooks.option.get(d), f) >= 0)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        },
        k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var mb, nb, ob = m.expr.attrHandle, pb = /^(?:checked|selected)$/i, qb = k.getSetAttribute, rb = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }),
    m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(),
                d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)),
                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b),
                null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = m.propFix[c] || c,
                    m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""),
                    a.removeAttribute(qb ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    nb = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = ob[b],
            ob[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            ob[b] = f),
            e
        }
        : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    rb && qb || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mb && mb.set(a, b, c)
        }
    }),
    qb || (mb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    ob.id = ob.name = ob.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }
    ,
    m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mb.set
    },
    m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mb.set(a, "" === b ? !1 : b, c)
        }
    },
    m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    })),
    k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i
      , tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            })
        }
    }),
    m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !m.isXMLDoc(a),
                f && (b = m.propFix[b] || b,
                e = m.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }),
    m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }),
    k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).addClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).removeClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            : function() {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    }),
    m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vb = m.now()
      , wb = /\?/
      , xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }
    ,
    m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b),
        c
    }
    ;
    var yb, zb, Ab = /#.*$/, Bb = /([?&])_=[^&]*/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/, Fb = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, Ib = {}, Jb = "*/".concat("*");
    try {
        zb = location.href
    } catch (Kb) {
        zb = y.createElement("a"),
        zb.href = "",
        zb = zb.href
    }
    yb = Gb.exec(zb.toLowerCase()) || [];
    function Lb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Mb(a, b, c, d) {
        var e = {}
          , f = a === Ib;
        function g(h) {
            var i;
            return e[h] = !0,
            m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c),
        a
    }
    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function(a, b) {
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cb.exec(f))
                                j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b),
                    x(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"),
            k.type = b.method || b.type || k.method || k.type,
            k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""],
            null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()),
            k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))),
            k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)),
            Mb(Hb, k, b, v),
            2 === t)
                return v;
            h = m.event && k.global,
            h && 0 === m.active++ && m.event.trigger("ajaxStart"),
            k.type = k.type.toUpperCase(),
            k.hasContent = !Eb.test(k.type),
            e = k.url,
            k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data,
            delete k.data),
            k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)),
            k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]),
            m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),
            (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)
                v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1,
                h && n.trigger("ajaxSend", [v, k]),
                k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1,
                    i.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w)
                }
            } else
                x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2,
                g && clearTimeout(g),
                i = void 0,
                f = d || "",
                v.readyState = a > 0 ? 4 : 0,
                j = a >= 200 && 300 > a || 304 === a,
                c && (u = Ob(k, v, c)),
                u = Pb(k, u, v, j),
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                w && (m.lastModified[e] = w),
                w = v.getResponseHeader("etag"),
                w && (m.etag[e] = w)),
                204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                r = u.data,
                s = u.error,
                j = !s)) : (s = x,
                (a || !x) && (x = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || x) + "",
                j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                v.statusCode(q),
                q = void 0,
                h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                p.fireWith(l, [v, x]),
                h && (n.trigger("ajaxComplete", [v, k]),
                --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }),
    m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            }
            : function() {
                var b = m(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }
    ,
    m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    }
    ;
    var Qb = /%20/g
      , Rb = /\[\]$/
      , Sb = /\r?\n/g
      , Tb = /^(?:submit|button|image|reset|file)$/i
      , Ub = /^(?:input|select|textarea|keygen)/i;
    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b))
            m.each(b, function(b, e) {
                c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== m.type(b))
            d(a, b);
        else
            for (e in b)
                Vb(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
        m.isArray(a) || a.jquery && !m.isPlainObject(a))
            m.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+")
    }
    ,
    m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sb, "\r\n")
                }
            }).get()
        }
    }),
    m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
    }
    : Zb;
    var Wb = 0
      , Xb = {}
      , Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Xb)
            Xb[a](void 0, !0)
    }),
    k.cors = !!Yb && "withCredentials"in Yb,
    Yb = k.ajax = !!Yb,
    Yb && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null),
                    b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xb[g],
                            b = void 0,
                            f.onreadystatechange = m.noop,
                            e)
                                4 !== f.readyState && f.abort();
                            else {
                                j = {},
                                h = f.status,
                                "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }
                    ,
                    a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    function Zb() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a),
                a
            }
        }
    }),
    m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null,
                        c || e(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _b = []
      , ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0,
            a
        }
    }),
    m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || m.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            _b.push(e)),
            g && m.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || y;
        var d = u.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e),
        e && e.length && m(e).remove(),
        m.merge([], d.childNodes))
    }
    ;
    var bc = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bc)
            return bc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)),
        a = a.slice(0, h)),
        m.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (f = "POST"),
        g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments,
            g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var cc = a.document.documentElement;
    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = m.css(a, "top"),
            i = m.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            m.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (n.top = b.top - h.top + g),
            null != b.left && (n.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, n) : l.css(n)
        }
    },
    m.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    m.offset.setOffset(this, a, b)
                });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement,
                m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()),
                c = dc(f),
                {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                m.nodeName(a[0], "html") || (c = a.offset()),
                c.top += m.css(a[0], "borderTopWidth", !0),
                c.left += m.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))
                    a = a.offsetParent;
                return a || cc
            })
        }
    }),
    m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }),
    m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function(a, c) {
            return c ? (c = Ja(a, b),
            Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }),
    m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    m.fn.size = function() {
        return this.length
    }
    ,
    m.fn.andSelf = m.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ec = a.jQuery
      , fc = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fc),
        b && a.jQuery === m && (a.jQuery = ec),
        m
    }
    ,
    typeof b === K && (a.jQuery = a.$ = m),
    m
});
;/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.core.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode,
        i = r.name,
        !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0],
        !!o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
    }
    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var n = 0
      , r = /^ui-id-\d+$/;
    e.ui = e.ui || {};
    if (e.ui.version)
        return;
    e.extend(e.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    e.fn.extend({
        _focus: e.fn.focus,
        focus: function(t, n) {
            return typeof t == "number" ? this.each(function() {
                var r = this;
                setTimeout(function() {
                    e(r).focus(),
                    n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : t = this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t)
                return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]), i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0)
                            return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                r.test(this.id) && e(this).removeAttr("id")
            })
        }
    }),
    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, r) {
            return !!e.data(t, r[3])
        }
        ,
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex")
              , r = isNaN(n);
            return (r || n >= 0) && i(t, !r)
        }
    }),
    e(function() {
        var t = document.body
          , n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight,
        e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }),
        e.support.minHeight = n.offsetHeight === 100,
        e.support.selectstart = "onselectstart"in n,
        t.removeChild(n).style.display = "none"
    }),
    e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
        function u(t, n, r, s) {
            return e.each(i, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0,
                r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }),
            n
        }
        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
          , s = r.toLowerCase()
          , o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + r] = function(n) {
            return n === t ? o["inner" + r].call(this) : this.each(function() {
                e(this).css(s, u(this, n) + "px")
            })
        }
        ,
        e.fn["outer" + r] = function(t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)),
    function() {
        var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        e.ui.ie = t.length ? !0 : !1,
        e.ui.ie6 = parseFloat(t[1], 10) === 6
    }(),
    e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    e.extend(e.ui, {
        plugin: {
            add: function(t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r)
                    s.plugins[i] = s.plugins[i] || [],
                    s.plugins[i].push([n, r[i]])
            },
            call: function(e, t, n) {
                var r, i = e.plugins[t];
                if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)
                    return;
                for (r = 0; r < i.length; r++)
                    e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        contains: e.contains,
        hasScroll: function(t, n) {
            if (e(t).css("overflow") === "hidden")
                return !1;
            var r = n && n === "left" ? "scrollLeft" : "scrollTop"
              , i = !1;
            return t[r] > 0 ? !0 : (t[r] = 1,
            i = t[r] > 0,
            t[r] = 0,
            i)
        },
        isOverAxis: function(e, t, n) {
            return e > t && e < t + n
        },
        isOver: function(t, n, r, i, s, o) {
            return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
        }
    })
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    var n = 0
      , r = Array.prototype.slice
      , i = e.cleanData;
    e.cleanData = function(t) {
        for (var n = 0, r; (r = t[n]) != null; n++)
            try {
                e(r).triggerHandler("remove")
            } catch (s) {}
        i(t)
    }
    ,
    e.widget = function(t, n, r) {
        var i, s, o, u, a = t.split(".")[0];
        t = t.split(".")[1],
        i = a + "-" + t,
        r || (r = n,
        n = e.Widget),
        e.expr[":"][i.toLowerCase()] = function(t) {
            return !!e.data(t, i)
        }
        ,
        e[a] = e[a] || {},
        s = e[a][t],
        o = e[a][t] = function(e, t) {
            if (!this._createWidget)
                return new o(e,t);
            arguments.length && this._createWidget(e, t)
        }
        ,
        e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }),
        u = new n,
        u.options = e.widget.extend({}, u.options),
        e.each(r, function(t, i) {
            e.isFunction(i) && (r[t] = function() {
                var e = function() {
                    return n.prototype[t].apply(this, arguments)
                }
                  , r = function(e) {
                    return n.prototype[t].apply(this, e)
                };
                return function() {
                    var t = this._super, n = this._superApply, s;
                    return this._super = e,
                    this._superApply = r,
                    s = i.apply(this, arguments),
                    this._super = t,
                    this._superApply = n,
                    s
                }
            }())
        }),
        o.prototype = e.widget.extend(u, {
            widgetEventPrefix: s ? u.widgetEventPrefix : t
        }, r, {
            constructor: o,
            namespace: a,
            widgetName: t,
            widgetBaseClass: i,
            widgetFullName: i
        }),
        s ? (e.each(s._childConstructors, function(t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }),
        delete s._childConstructors) : n._childConstructors.push(o),
        e.widget.bridge(t, o)
    }
    ,
    e.widget.extend = function(n) {
        var i = r.call(arguments, 1), s = 0, o = i.length, u, a;
        for (; s < o; s++)
            for (u in i[s])
                a = i[s][u],
                i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }
    ,
    e.widget.bridge = function(n, i) {
        var s = i.prototype.widgetFullName || n;
        e.fn[n] = function(o) {
            var u = typeof o == "string"
              , a = r.call(arguments, 1)
              , f = this;
            return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o,
            u ? this.each(function() {
                var r, i = e.data(this, s);
                if (!i)
                    return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_")
                    return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t)
                    return f = r && r.jquery ? f.pushStack(r.get()) : r,
                    !1
            }) : this.each(function() {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o,this))
            }),
            f
        }
    }
    ,
    e.Widget = function() {}
    ,
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, r) {
            r = e(r || this.defaultElement || this)[0],
            this.element = e(r),
            this.uuid = n++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t),
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            r !== this && (e.data(r, this.widgetName, this),
            e.data(r, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(e) {
                    e.target === r && this.destroy()
                }
            }),
            this.document = e(r.style ? r.ownerDocument : r.document || r),
            this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, r) {
            var i = n, s, o, u;
            if (arguments.length === 0)
                return e.widget.extend({}, this.options);
            if (typeof n == "string") {
                i = {},
                s = n.split("."),
                n = s.shift();
                if (s.length) {
                    o = i[n] = e.widget.extend({}, this.options[n]);
                    for (u = 0; u < s.length - 1; u++)
                        o[s[u]] = o[s[u]] || {},
                        o = o[s[u]];
                    n = s.pop();
                    if (r === t)
                        return o[n] === t ? null : o[n];
                    o[n] = r
                } else {
                    if (r === t)
                        return this.options[n] === t ? null : this.options[n];
                    i[n] = r
                }
            }
            return this._setOptions(i),
            this
        },
        _setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t,
            e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, n, r) {
            var i, s = this;
            typeof t != "boolean" && (r = n,
            n = t,
            t = !1),
            r ? (n = i = e(n),
            this.bindings = this.bindings.add(n)) : (r = n,
            n = this.element,
            i = this.widget()),
            e.each(r, function(r, o) {
                function u() {
                    if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled")))
                        return;
                    return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                }
                typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^(\w+)\s*(.*)$/)
                  , f = a[1] + s.eventNamespace
                  , l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, r) {
            var i, s, o = this.options[t];
            r = r || {},
            n = e.Event(n),
            n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            n.target = this.element[0],
            s = n.originalEvent;
            if (s)
                for (i in s)
                    i in n || (n[i] = s[i]);
            return this.element.trigger(n, r),
            !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(r, i, s) {
            typeof i == "string" && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {},
            typeof i == "number" && (i = {
                duration: i
            }),
            o = !e.isEmptyObject(i),
            i.complete = s,
            i.delay && r.delay(i.delay),
            o && e.effects && (e.effects.effect[u] || e.uiBackCompat !== !1 && e.effects[u]) ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                e(this)[t](),
                s && s.call(r[0]),
                n()
            })
        }
    }),
    e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    }
    )
}
)(jQuery);
(function(e, t) {
    var n = !1;
    e(document).mouseup(function(e) {
        n = !1
    }),
    e.widget("ui.mouse", {
        version: "1.9.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent"))
                    return e.removeData(n.target, t.widgetName + ".preventClickEvent"),
                    n.stopImmediatePropagation(),
                    !1
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (n)
                return;
            this._mouseStarted && this._mouseUp(t),
            this._mouseDownEvent = t;
            var r = this
              , i = t.which === 1
              , s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
            if (!i || s || !this._mouseCapture(t))
                return !0;
            this.mouseDelayMet = !this.options.delay,
            this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                r.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t) !== !1;
                if (!this._mouseStarted)
                    return t.preventDefault(),
                    !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"),
            this._mouseMoveDelegate = function(e) {
                return r._mouseMove(e)
            }
            ,
            this._mouseUpDelegate = function(e) {
                return r._mouseUp(e)
            }
            ,
            e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
            t.preventDefault(),
            n = !0,
            !0
        },
        _mouseMove: function(t) {
            return !e.ui.ie || document.documentMode >= 9 || !!t.button ? this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function(e) {
            return this.mouseDelayMet
        },
        _mouseStart: function(e) {},
        _mouseDrag: function(e) {},
        _mouseStop: function(e) {},
        _mouseCapture: function(e) {
            return !0
        }
    })
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.position.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    function h(e, t, n) {
        return [parseInt(e[0], 10) * (l.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (l.test(e[1]) ? n / 100 : 1)]
    }
    function p(t, n) {
        return parseInt(e.css(t, n), 10) || 0
    }
    e.ui = e.ui || {};
    var n, r = Math.max, i = Math.abs, s = Math.round, o = /left|center|right/, u = /top|center|bottom/, a = /[\+\-]\d+%?/, f = /^\w+/, l = /%$/, c = e.fn.position;
    e.position = {
        scrollbarWidth: function() {
            if (n !== t)
                return n;
            var r, i, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0];
            return e("body").append(s),
            r = o.offsetWidth,
            s.css("overflow", "scroll"),
            i = o.offsetWidth,
            r === i && (i = s[0].clientWidth),
            s.remove(),
            n = r - i
        },
        getScrollInfo: function(t) {
            var n = t.isWindow ? "" : t.element.css("overflow-x")
              , r = t.isWindow ? "" : t.element.css("overflow-y")
              , i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth
              , s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
            return {
                width: i ? e.position.scrollbarWidth() : 0,
                height: s ? e.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(t) {
            var n = e(t || window)
              , r = e.isWindow(n[0]);
            return {
                element: n,
                isWindow: r,
                offset: n.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: n.scrollLeft(),
                scrollTop: n.scrollTop(),
                width: r ? n.width() : n.outerWidth(),
                height: r ? n.height() : n.outerHeight()
            }
        }
    },
    e.fn.position = function(t) {
        if (!t || !t.of)
            return c.apply(this, arguments);
        t = e.extend({}, t);
        var n, l, d, v, m, g = e(t.of), y = e.position.getWithinInfo(t.within), b = e.position.getScrollInfo(y), w = g[0], E = (t.collision || "flip").split(" "), S = {};
        return w.nodeType === 9 ? (l = g.width(),
        d = g.height(),
        v = {
            top: 0,
            left: 0
        }) : e.isWindow(w) ? (l = g.width(),
        d = g.height(),
        v = {
            top: g.scrollTop(),
            left: g.scrollLeft()
        }) : w.preventDefault ? (t.at = "left top",
        l = d = 0,
        v = {
            top: w.pageY,
            left: w.pageX
        }) : (l = g.outerWidth(),
        d = g.outerHeight(),
        v = g.offset()),
        m = e.extend({}, v),
        e.each(["my", "at"], function() {
            var e = (t[this] || "").split(" "), n, r;
            e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]),
            e[0] = o.test(e[0]) ? e[0] : "center",
            e[1] = u.test(e[1]) ? e[1] : "center",
            n = a.exec(e[0]),
            r = a.exec(e[1]),
            S[this] = [n ? n[0] : 0, r ? r[0] : 0],
            t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
        }),
        E.length === 1 && (E[1] = E[0]),
        t.at[0] === "right" ? m.left += l : t.at[0] === "center" && (m.left += l / 2),
        t.at[1] === "bottom" ? m.top += d : t.at[1] === "center" && (m.top += d / 2),
        n = h(S.at, l, d),
        m.left += n[0],
        m.top += n[1],
        this.each(function() {
            var o, u, a = e(this), f = a.outerWidth(), c = a.outerHeight(), w = p(this, "marginLeft"), x = p(this, "marginTop"), T = f + w + p(this, "marginRight") + b.width, N = c + x + p(this, "marginBottom") + b.height, C = e.extend({}, m), k = h(S.my, a.outerWidth(), a.outerHeight());
            t.my[0] === "right" ? C.left -= f : t.my[0] === "center" && (C.left -= f / 2),
            t.my[1] === "bottom" ? C.top -= c : t.my[1] === "center" && (C.top -= c / 2),
            C.left += k[0],
            C.top += k[1],
            e.support.offsetFractions || (C.left = s(C.left),
            C.top = s(C.top)),
            o = {
                marginLeft: w,
                marginTop: x
            },
            e.each(["left", "top"], function(r, i) {
                e.ui.position[E[r]] && e.ui.position[E[r]][i](C, {
                    targetWidth: l,
                    targetHeight: d,
                    elemWidth: f,
                    elemHeight: c,
                    collisionPosition: o,
                    collisionWidth: T,
                    collisionHeight: N,
                    offset: [n[0] + k[0], n[1] + k[1]],
                    my: t.my,
                    at: t.at,
                    within: y,
                    elem: a
                })
            }),
            e.fn.bgiframe && a.bgiframe(),
            t.using && (u = function(e) {
                var n = v.left - C.left
                  , s = n + l - f
                  , o = v.top - C.top
                  , u = o + d - c
                  , h = {
                    target: {
                        element: g,
                        left: v.left,
                        top: v.top,
                        width: l,
                        height: d
                    },
                    element: {
                        element: a,
                        left: C.left,
                        top: C.top,
                        width: f,
                        height: c
                    },
                    horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                    vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle"
                };
                l < f && i(n + s) < l && (h.horizontal = "center"),
                d < c && i(o + u) < d && (h.vertical = "middle"),
                r(i(n), i(s)) > r(i(o), i(u)) ? h.important = "horizontal" : h.important = "vertical",
                t.using.call(this, e, h)
            }
            ),
            a.offset(e.extend(C, {
                using: u
            }))
        })
    }
    ,
    e.ui.position = {
        fit: {
            left: function(e, t) {
                var n = t.within, i = n.isWindow ? n.scrollLeft : n.offset.left, s = n.width, o = e.left - t.collisionPosition.marginLeft, u = i - o, a = o + t.collisionWidth - s - i, f;
                t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i,
                e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
            },
            top: function(e, t) {
                var n = t.within, i = n.isWindow ? n.scrollTop : n.offset.top, s = t.within.height, o = e.top - t.collisionPosition.marginTop, u = i - o, a = o + t.collisionHeight - s - i, f;
                t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i,
                e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
            }
        },
        flip: {
            left: function(e, t) {
                var n = t.within, r = n.offset.left + n.scrollLeft, s = n.width, o = n.isWindow ? n.scrollLeft : n.offset.left, u = e.left - t.collisionPosition.marginLeft, a = u - o, f = u + t.collisionWidth - s - o, l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0, c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0, h = -2 * t.offset[0], p, d;
                if (a < 0) {
                    p = e.left + l + c + h + t.collisionWidth - s - r;
                    if (p < 0 || p < i(a))
                        e.left += l + c + h
                } else if (f > 0) {
                    d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
                    if (d > 0 || i(d) < f)
                        e.left += l + c + h
                }
            },
            top: function(e, t) {
                var n = t.within, r = n.offset.top + n.scrollTop, s = n.height, o = n.isWindow ? n.scrollTop : n.offset.top, u = e.top - t.collisionPosition.marginTop, a = u - o, f = u + t.collisionHeight - s - o, l = t.my[1] === "top", c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0, h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0, p = -2 * t.offset[1], d, v;
                a < 0 ? (v = e.top + c + h + p + t.collisionHeight - s - r,
                e.top + c + h + p > a && (v < 0 || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o,
                e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
            }
        },
        flipfit: {
            left: function() {
                e.ui.position.flip.left.apply(this, arguments),
                e.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                e.ui.position.flip.top.apply(this, arguments),
                e.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function() {
        var t, n, r, i, s, o = document.getElementsByTagName("body")[0], u = document.createElement("div");
        t = document.createElement(o ? "div" : "body"),
        r = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        },
        o && e.extend(r, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (s in r)
            t.style[s] = r[s];
        t.appendChild(u),
        n = o || document.documentElement,
        n.insertBefore(t, n.firstChild),
        u.style.cssText = "position: absolute; left: 10.7432222px;",
        i = e(u).offset().left,
        e.support.offsetFractions = i > 10 && i < 11,
        t.innerHTML = "",
        n.removeChild(t)
    }(),
    e.uiBackCompat !== !1 && function(e) {
        var n = e.fn.position;
        e.fn.position = function(r) {
            if (!r || !r.offset)
                return n.call(this, r);
            var i = r.offset.split(" ")
              , s = r.at.split(" ");
            return i.length === 1 && (i[1] = i[0]),
            /^\d/.test(i[0]) && (i[0] = "+" + i[0]),
            /^\d/.test(i[1]) && (i[1] = "+" + i[1]),
            s.length === 1 && (/left|center|right/.test(s[0]) ? s[1] = "center" : (s[1] = s[0],
            s[0] = "center")),
            n.call(this, e.extend(r, {
                at: s[0] + i[0] + " " + s[1] + i[1],
                offset: t
            }))
        }
    }(jQuery)
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.draggable.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t),
            this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }),
            !0) : !1)
        },
        _mouseStart: function(t) {
            var n = this.options;
            return this.helper = this._createHelper(t),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            e.ui.ddmanager && (e.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt),
            n.containment && this._setContainment(),
            this._trigger("start", t) === !1 ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _mouseDrag: function(t, n) {
            this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1)
                    return this._mouseUp({}),
                    !1;
                this.position = r.position
            }
            if (!this.options.axis || this.options.axis != "y")
                this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x")
                this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var n = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)),
            this.dropped && (n = this.dropped,
            this.dropped = !1);
            var r = this.element[0]
              , i = !1;
            while (r && (r = r.parentNode))
                r == document && (i = !0);
            if (!i && this.options.helper === "original")
                return !1;
            if (this.options.revert == "invalid" && !n || this.options.revert == "valid" && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                var s = this;
                e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    s._trigger("stop", t) !== !1 && s._clear()
                })
            } else
                this._trigger("stop", t) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
            e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(t) {
            var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
            return e(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == t.target && (n = !0)
            }),
            n
        },
        _createHelper: function(t) {
            var n = this.options
              , r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            return r.parents("body").length || r.appendTo(n.appendTo == "parent" ? this.element[0].parentNode : n.appendTo),
            r[0] != this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"),
            r
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.ui.ie)
                t = {
                    top: 0,
                    left: 0
                };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window")
                this.containment = [t.containment == "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t.containment == "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (t.containment == "document" ? 0 : e(window).scrollLeft()) + e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (t.containment == "document" ? 0 : e(window).scrollTop()) + (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment) && t.containment.constructor != Array) {
                var n = e(t.containment)
                  , r = n[0];
                if (!r)
                    return;
                var i = n.offset()
                  , s = e(r).css("overflow") != "hidden";
                this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (s ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                this.relative_container = n
            } else
                t.containment.constructor == Array && (this.containment = t.containment)
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var r = t == "absolute" ? 1 : -1
              , i = this.options
              , s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , o = /(html|body)/i.test(s[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var n = this.options
              , r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , i = /(html|body)/i.test(r[0].tagName)
              , s = t.pageX
              , o = t.pageY;
            if (this.originalPosition) {
                var u;
                if (this.containment) {
                    if (this.relative_container) {
                        var a = this.relative_container.offset();
                        u = [this.containment[0] + a.left, this.containment[1] + a.top, this.containment[2] + a.left, this.containment[3] + a.top]
                    } else
                        u = this.containment;
                    t.pageX - this.offset.click.left < u[0] && (s = u[0] + this.offset.click.left),
                    t.pageY - this.offset.click.top < u[1] && (o = u[1] + this.offset.click.top),
                    t.pageX - this.offset.click.left > u[2] && (s = u[2] + this.offset.click.left),
                    t.pageY - this.offset.click.top > u[3] && (o = u[3] + this.offset.click.top)
                }
                if (n.grid) {
                    var f = n.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
                    o = u ? f - this.offset.click.top < u[1] || f - this.offset.click.top > u[3] ? f - this.offset.click.top < u[1] ? f + n.grid[1] : f - n.grid[1] : f : f;
                    var l = n.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
                    s = u ? l - this.offset.click.left < u[0] || l - this.offset.click.left > u[2] ? l - this.offset.click.left < u[0] ? l + n.grid[0] : l - n.grid[0] : l : l
                }
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, n, r) {
            return r = r || this._uiHash(),
            e.ui.plugin.call(this, t, [n, r]),
            t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")),
            e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function(e) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, n) {
            var r = e(this).data("draggable")
              , i = r.options
              , s = e.extend({}, n, {
                item: r.element
            });
            r.sortables = [],
            e(i.connectToSortable).each(function() {
                var n = e.data(this, "sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }),
                n.refreshPositions(),
                n._trigger("activate", t, s))
            })
        },
        stop: function(t, n) {
            var r = e(this).data("draggable")
              , i = e.extend({}, n, {
                item: r.element
            });
            e.each(r.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0,
                r.cancelHelperRemoval = !0,
                this.instance.cancelHelperRemoval = !1,
                this.shouldRevert && (this.instance.options.revert = !0),
                this.instance._mouseStop(t),
                this.instance.options.helper = this.instance.options._helper,
                r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1,
                this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function(t, n) {
            var r = e(this).data("draggable")
              , i = this
              , s = function(t) {
                var n = this.offset.click.top
                  , r = this.offset.click.left
                  , i = this.positionAbs.top
                  , s = this.positionAbs.left
                  , o = t.height
                  , u = t.width
                  , a = t.top
                  , f = t.left;
                return e.ui.isOver(i + n, s + r, a, f, o, u)
            };
            e.each(r.sortables, function(s) {
                var o = !1
                  , u = this;
                this.instance.positionAbs = r.positionAbs,
                this.instance.helperProportions = r.helperProportions,
                this.instance.offset.click = r.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) && (o = !0,
                e.each(r.sortables, function() {
                    return this.instance.positionAbs = r.positionAbs,
                    this.instance.helperProportions = r.helperProportions,
                    this.instance.offset.click = r.offset.click,
                    this != u && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(u.instance.element[0], this.instance.element[0]) && (o = !1),
                    o
                })),
                o ? (this.instance.isOver || (this.instance.isOver = 1,
                this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0),
                this.instance.options._helper = this.instance.options.helper,
                this.instance.options.helper = function() {
                    return n.helper[0]
                }
                ,
                t.target = this.instance.currentItem[0],
                this.instance._mouseCapture(t, !0),
                this.instance._mouseStart(t, !0, !0),
                this.instance.offset.click.top = r.offset.click.top,
                this.instance.offset.click.left = r.offset.click.left,
                this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left,
                this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top,
                r._trigger("toSortable", t),
                r.dropped = this.instance.element,
                r.currentItem = r.element,
                this.instance.fromOutside = r),
                this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0,
                this.instance.cancelHelperRemoval = !0,
                this.instance.options.revert = !1,
                this.instance._trigger("out", t, this.instance._uiHash(this.instance)),
                this.instance._mouseStop(t, !0),
                this.instance.options.helper = this.instance.options._helper,
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                r._trigger("fromSortable", t),
                r.dropped = !1)
            })
        }
    }),
    e.ui.plugin.add("draggable", "cursor", {
        start: function(t, n) {
            var r = e("body")
              , i = e(this).data("draggable").options;
            r.css("cursor") && (i._cursor = r.css("cursor")),
            r.css("cursor", i.cursor)
        },
        stop: function(t, n) {
            var r = e(this).data("draggable").options;
            r._cursor && e("body").css("cursor", r._cursor)
        }
    }),
    e.ui.plugin.add("draggable", "opacity", {
        start: function(t, n) {
            var r = e(n.helper)
              , i = e(this).data("draggable").options;
            r.css("opacity") && (i._opacity = r.css("opacity")),
            r.css("opacity", i.opacity)
        },
        stop: function(t, n) {
            var r = e(this).data("draggable").options;
            r._opacity && e(n.helper).css("opacity", r._opacity)
        }
    }),
    e.ui.plugin.add("draggable", "scroll", {
        start: function(t, n) {
            var r = e(this).data("draggable");
            r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" && (r.overflowOffset = r.scrollParent.offset())
        },
        drag: function(t, n) {
            var r = e(this).data("draggable")
              , i = r.options
              , s = !1;
            if (r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML") {
                if (!i.axis || i.axis != "x")
                    r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop - i.scrollSpeed);
                if (!i.axis || i.axis != "y")
                    r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft - i.scrollSpeed)
            } else {
                if (!i.axis || i.axis != "x")
                    t.pageY - e(document).scrollTop() < i.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed));
                if (!i.axis || i.axis != "y")
                    t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))
            }
            s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t)
        }
    }),
    e.ui.plugin.add("draggable", "snap", {
        start: function(t, n) {
            var r = e(this).data("draggable")
              , i = r.options;
            r.snapElements = [],
            e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
                var t = e(this)
                  , n = t.offset();
                this != r.element[0] && r.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function(t, n) {
            var r = e(this).data("draggable")
              , i = r.options
              , s = i.snapTolerance
              , o = n.offset.left
              , u = o + r.helperProportions.width
              , a = n.offset.top
              , f = a + r.helperProportions.height;
            for (var l = r.snapElements.length - 1; l >= 0; l--) {
                var c = r.snapElements[l].left
                  , h = c + r.snapElements[l].width
                  , p = r.snapElements[l].top
                  , d = p + r.snapElements[l].height;
                if (!(c - s < o && o < h + s && p - s < a && a < d + s || c - s < o && o < h + s && p - s < f && f < d + s || c - s < u && u < h + s && p - s < a && a < d + s || c - s < u && u < h + s && p - s < f && f < d + s)) {
                    r.snapElements[l].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                        snapItem: r.snapElements[l].item
                    })),
                    r.snapElements[l].snapping = !1;
                    continue
                }
                if (i.snapMode != "inner") {
                    var v = Math.abs(p - f) <= s
                      , m = Math.abs(d - a) <= s
                      , g = Math.abs(c - u) <= s
                      , y = Math.abs(h - o) <= s;
                    v && (n.position.top = r._convertPositionTo("relative", {
                        top: p - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top),
                    m && (n.position.top = r._convertPositionTo("relative", {
                        top: d,
                        left: 0
                    }).top - r.margins.top),
                    g && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c - r.helperProportions.width
                    }).left - r.margins.left),
                    y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h
                    }).left - r.margins.left)
                }
                var b = v || m || g || y;
                if (i.snapMode != "outer") {
                    var v = Math.abs(p - a) <= s
                      , m = Math.abs(d - f) <= s
                      , g = Math.abs(c - o) <= s
                      , y = Math.abs(h - u) <= s;
                    v && (n.position.top = r._convertPositionTo("relative", {
                        top: p,
                        left: 0
                    }).top - r.margins.top),
                    m && (n.position.top = r._convertPositionTo("relative", {
                        top: d - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top),
                    g && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c
                    }).left - r.margins.left),
                    y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h - r.helperProportions.width
                    }).left - r.margins.left)
                }
                !r.snapElements[l].snapping && (v || m || g || y || b) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                    snapItem: r.snapElements[l].item
                })),
                r.snapElements[l].snapping = v || m || g || y || b
            }
        }
    }),
    e.ui.plugin.add("draggable", "stack", {
        start: function(t, n) {
            var r = e(this).data("draggable").options
              , i = e.makeArray(e(r.stack)).sort(function(t, n) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
            });
            if (!i.length)
                return;
            var s = parseInt(i[0].style.zIndex) || 0;
            e(i).each(function(e) {
                this.style.zIndex = s + e
            }),
            this[0].style.zIndex = s + i.length
        }
    }),
    e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, n) {
            var r = e(n.helper)
              , i = e(this).data("draggable").options;
            r.css("zIndex") && (i._zIndex = r.css("zIndex")),
            r.css("zIndex", i.zIndex)
        },
        stop: function(t, n) {
            var r = e(this).data("draggable").options;
            r._zIndex && e(n.helper).css("zIndex", r._zIndex)
        }
    })
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.button.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    var n, r, i, s, o = "ui-button ui-widget ui-state-default ui-corner-all", u = "ui-state-hover ui-state-active ", a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", f = function() {
        var t = e(this).find(":ui-button");
        setTimeout(function() {
            t.button("refresh")
        }, 1)
    }, l = function(t) {
        var n = t.name
          , r = t.form
          , i = e([]);
        return n && (r ? i = e(r).find("[name='" + n + "']") : i = e("[name='" + n + "']", t.ownerDocument).filter(function() {
            return !this.form
        })),
        i
    };
    e.widget("ui.button", {
        version: "1.9.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f),
            typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
            this._determineButtonType(),
            this.hasTitle = !!this.buttonElement.attr("title");
            var t = this
              , u = this.options
              , a = this.type === "checkbox" || this.type === "radio"
              , c = a ? "" : "ui-state-active"
              , h = "ui-state-focus";
            u.label === null && (u.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()),
            this._hoverable(this.buttonElement),
            this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                if (u.disabled)
                    return;
                this === n && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                if (u.disabled)
                    return;
                e(this).removeClass(c)
            }).bind("click" + this.eventNamespace, function(e) {
                u.disabled && (e.preventDefault(),
                e.stopImmediatePropagation())
            }),
            this.element.bind("focus" + this.eventNamespace, function() {
                t.buttonElement.addClass(h)
            }).bind("blur" + this.eventNamespace, function() {
                t.buttonElement.removeClass(h)
            }),
            a && (this.element.bind("change" + this.eventNamespace, function() {
                if (s)
                    return;
                t.refresh()
            }),
            this.buttonElement.bind("mousedown" + this.eventNamespace, function(e) {
                if (u.disabled)
                    return;
                s = !1,
                r = e.pageX,
                i = e.pageY
            }).bind("mouseup" + this.eventNamespace, function(e) {
                if (u.disabled)
                    return;
                if (r !== e.pageX || i !== e.pageY)
                    s = !0
            })),
            this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (u.disabled || s)
                    return !1;
                e(this).toggleClass("ui-state-active"),
                t.buttonElement.attr("aria-pressed", t.element[0].checked)
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (u.disabled || s)
                    return !1;
                e(this).addClass("ui-state-active"),
                t.buttonElement.attr("aria-pressed", "true");
                var n = t.element[0];
                l(n).not(n).map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                if (u.disabled)
                    return !1;
                e(this).addClass("ui-state-active"),
                n = this,
                t.document.one("mouseup", function() {
                    n = null
                })
            }).bind("mouseup" + this.eventNamespace, function() {
                if (u.disabled)
                    return !1;
                e(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(t) {
                if (u.disabled)
                    return !1;
                (t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace, function() {
                e(this).removeClass("ui-state-active")
            }),
            this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })),
            this._setOption("disabled", u.disabled),
            this._resetButton()
        },
        _determineButtonType: function() {
            var e, t, n;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button",
            this.type === "checkbox" || this.type === "radio" ? (e = this.element.parents().last(),
            t = "label[for='" + this.element.attr("id") + "']",
            this.buttonElement = e.find(t),
            this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(),
            this.buttonElement = e.filter(t),
            this.buttonElement.length || (this.buttonElement = e.find(t))),
            this.element.addClass("ui-helper-hidden-accessible"),
            n = this.element.is(":checked"),
            n && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"),
            this.buttonElement.removeClass(o + " " + u + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(e, t) {
            this._super(e, t);
            if (e === "disabled") {
                t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t),
            this.type === "radio" ? l(this.element[0]).each(function() {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var t = this.buttonElement.removeClass(a)
              , n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text()
              , r = this.options.icons
              , i = r.primary && r.secondary
              , s = [];
            r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")),
            r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"),
            r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"),
            this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"),
            this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"),
            t.addClass(s.join(" "))
        }
    }),
    e.widget("ui.buttonset", {
        version: "1.9.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(e, t) {
            e === "disabled" && this.buttons.button("option", e, t),
            this._super(e, t)
        },
        refresh: function() {
            var t = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"),
            this.buttons.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.dialog.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    var n = "ui-dialog ui-widget ui-widget-content ui-corner-all "
      , r = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }
      , i = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    };
    e.widget("ui.dialog", {
        version: "1.9.2",
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var n = e(this).css(t).offset().top;
                    n < 0 && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function() {
            this.originalTitle = this.element.attr("title"),
            typeof this.originalTitle != "string" && (this.originalTitle = ""),
            this.oldPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            },
            this.options.title = this.options.title || this.originalTitle;
            var t = this, r = this.options, i = r.title || "&#160;", s, o, u, a, f;
            s = (this.uiDialog = e("<div>")).addClass(n + r.dialogClass).css({
                display: "none",
                outline: 0,
                zIndex: r.zIndex
            }).attr("tabIndex", -1).keydown(function(n) {
                r.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n),
                n.preventDefault())
            }).mousedown(function(e) {
                t.moveToTop(!1, e)
            }).appendTo("body"),
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s),
            o = (this.uiDialogTitlebar = e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function() {
                s.focus()
            }).prependTo(s),
            u = e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(e) {
                e.preventDefault(),
                t.close(e)
            }).appendTo(o),
            (this.uiDialogTitlebarCloseText = e("<span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(u),
            a = e("<span>").uniqueId().addClass("ui-dialog-title").html(i).prependTo(o),
            f = (this.uiDialogButtonPane = e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
            (this.uiButtonSet = e("<div>")).addClass("ui-dialog-buttonset").appendTo(f),
            s.attr({
                role: "dialog",
                "aria-labelledby": a.attr("id")
            }),
            o.find("*").add(o).disableSelection(),
            this._hoverable(u),
            this._focusable(u),
            r.draggable && e.fn.draggable && this._makeDraggable(),
            r.resizable && e.fn.resizable && this._makeResizable(),
            this._createButtons(r.buttons),
            this._isOpen = !1,
            e.fn.bgiframe && s.bgiframe(),
            this._on(s, {
                keydown: function(t) {
                    if (!r.modal || t.keyCode !== e.ui.keyCode.TAB)
                        return;
                    var n = e(":tabbable", s)
                      , i = n.filter(":first")
                      , o = n.filter(":last");
                    if (t.target === o[0] && !t.shiftKey)
                        return i.focus(1),
                        !1;
                    if (t.target === i[0] && t.shiftKey)
                        return o.focus(1),
                        !1
                }
            })
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _destroy: function() {
            var e, t = this.oldPosition;
            this.overlay && this.overlay.destroy(),
            this.uiDialog.hide(),
            this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),
            this.uiDialog.remove(),
            this.originalTitle && this.element.attr("title", this.originalTitle),
            e = t.parent.children().eq(t.index),
            e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        close: function(t) {
            var n = this, r, i;
            if (!this._isOpen)
                return;
            if (!1 === this._trigger("beforeClose", t))
                return;
            return this._isOpen = !1,
            this.overlay && this.overlay.destroy(),
            this.options.hide ? this._hide(this.uiDialog, this.options.hide, function() {
                n._trigger("close", t)
            }) : (this.uiDialog.hide(),
            this._trigger("close", t)),
            e.ui.dialog.overlay.resize(),
            this.options.modal && (r = 0,
            e(".ui-dialog").each(function() {
                this !== n.uiDialog[0] && (i = e(this).css("z-index"),
                isNaN(i) || (r = Math.max(r, i)))
            }),
            e.ui.dialog.maxZ = r),
            this
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(t, n) {
            var r = this.options, i;
            return r.modal && !t || !r.stack && !r.modal ? this._trigger("focus", n) : (r.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = r.zIndex),
            this.overlay && (e.ui.dialog.maxZ += 1,
            e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ,
            this.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ)),
            i = {
                scrollTop: this.element.scrollTop(),
                scrollLeft: this.element.scrollLeft()
            },
            e.ui.dialog.maxZ += 1,
            this.uiDialog.css("z-index", e.ui.dialog.maxZ),
            this.element.attr(i),
            this._trigger("focus", n),
            this)
        },
        open: function() {
            if (this._isOpen)
                return;
            var t, n = this.options, r = this.uiDialog;
            return this._size(),
            this._position(n.position),
            r.show(n.show),
            this.overlay = n.modal ? new e.ui.dialog.overlay(this) : null,
            this.moveToTop(!0),
            t = this.element.find(":tabbable"),
            t.length || (t = this.uiDialogButtonPane.find(":tabbable"),
            t.length || (t = r)),
            t.eq(0).focus(),
            this._isOpen = !0,
            this._trigger("open"),
            this
        },
        _createButtons: function(t) {
            var n = this
              , r = !1;
            this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            typeof t == "object" && t !== null && e.each(t, function() {
                return !(r = !0)
            }),
            r ? (e.each(t, function(t, r) {
                var i, s;
                r = e.isFunction(r) ? {
                    click: r,
                    text: t
                } : r,
                r = e.extend({
                    type: "button"
                }, r),
                s = r.click,
                r.click = function() {
                    s.apply(n.element[0], arguments)
                }
                ,
                i = e("<button></button>", r).appendTo(n.uiButtonSet),
                e.fn.button && i.button()
            }),
            this.uiDialog.addClass("ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
        },
        _makeDraggable: function() {
            function r(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var t = this
              , n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, i) {
                    e(this).addClass("ui-dialog-dragging"),
                    t._trigger("dragStart", n, r(i))
                },
                drag: function(e, n) {
                    t._trigger("drag", e, r(n))
                },
                stop: function(i, s) {
                    n.position = [s.position.left - t.document.scrollLeft(), s.position.top - t.document.scrollTop()],
                    e(this).removeClass("ui-dialog-dragging"),
                    t._trigger("dragStop", i, r(s)),
                    e.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(n) {
            function u(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            n = n === t ? this.options.resizable : n;
            var r = this
              , i = this.options
              , s = this.uiDialog.css("position")
              , o = typeof n == "string" ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function(t, n) {
                    e(this).addClass("ui-dialog-resizing"),
                    r._trigger("resizeStart", t, u(n))
                },
                resize: function(e, t) {
                    r._trigger("resize", e, u(t))
                },
                stop: function(t, n) {
                    e(this).removeClass("ui-dialog-resizing"),
                    i.height = e(this).height(),
                    i.width = e(this).width(),
                    r._trigger("resizeStop", t, u(n)),
                    e.ui.dialog.overlay.resize()
                }
            }).css("position", s).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
            var e = this.options;
            return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function(t) {
            var n = [], r = [0, 0], i;
            if (t) {
                if (typeof t == "string" || typeof t == "object" && "0"in t)
                    n = t.split ? t.split(" ") : [t[0], t[1]],
                    n.length === 1 && (n[1] = n[0]),
                    e.each(["left", "top"], function(e, t) {
                        +n[e] === n[e] && (r[e] = n[e],
                        n[e] = t)
                    }),
                    t = {
                        my: n[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + n[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
                        at: n.join(" ")
                    };
                t = e.extend({}, e.ui.dialog.prototype.options.position, t)
            } else
                t = e.ui.dialog.prototype.options.position;
            i = this.uiDialog.is(":visible"),
            i || this.uiDialog.show(),
            this.uiDialog.position(t),
            i || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var n = this
              , s = {}
              , o = !1;
            e.each(t, function(e, t) {
                n._setOption(e, t),
                e in r && (o = !0),
                e in i && (s[e] = t)
            }),
            o && this._size(),
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function(t, r) {
            var i, s, o = this.uiDialog;
            switch (t) {
            case "buttons":
                this._createButtons(r);
                break;
            case "closeText":
                this.uiDialogTitlebarCloseText.text("" + r);
                break;
            case "dialogClass":
                o.removeClass(this.options.dialogClass).addClass(n + r);
                break;
            case "disabled":
                r ? o.addClass("ui-dialog-disabled") : o.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                i = o.is(":data(draggable)"),
                i && !r && o.draggable("destroy"),
                !i && r && this._makeDraggable();
                break;
            case "position":
                this._position(r);
                break;
            case "resizable":
                s = o.is(":data(resizable)"),
                s && !r && o.resizable("destroy"),
                s && typeof r == "string" && o.resizable("option", "handles", r),
                !s && r !== !1 && this._makeResizable(r);
                break;
            case "title":
                e(".ui-dialog-title", this.uiDialogTitlebar).html("" + (r || "&#160;"))
            }
            this._super(t, r)
        },
        _size: function() {
            var t, n, r, i = this.options, s = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }),
            i.minWidth > i.width && (i.width = i.minWidth),
            t = this.uiDialog.css({
                height: "auto",
                width: i.width
            }).outerHeight(),
            n = Math.max(0, i.minHeight - t),
            i.height === "auto" ? e.support.minHeight ? this.element.css({
                minHeight: n,
                height: "auto"
            }) : (this.uiDialog.show(),
            r = this.element.css("height", "auto").height(),
            s || this.uiDialog.hide(),
            this.element.height(Math.max(r, n))) : this.element.height(Math.max(i.height - t, 0)),
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }),
    e.extend(e.ui.dialog, {
        uuid: 0,
        maxZ: 0,
        getTitleId: function(e) {
            var t = e.attr("id");
            return t || (this.uuid += 1,
            t = this.uuid),
            "ui-dialog-title-" + t
        },
        overlay: function(t) {
            this.$el = e.ui.dialog.overlay.create(t)
        }
    }),
    e.extend(e.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(e) {
            return e + ".dialog-overlay"
        }).join(" "),
        create: function(t) {
            this.instances.length === 0 && (setTimeout(function() {
                e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function(t) {
                    if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ)
                        return !1
                })
            }, 1),
            e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
            var n = this.oldInstances.pop() || e("<div>").addClass("ui-widget-overlay");
            return e(document).bind("keydown.dialog-overlay", function(r) {
                var i = e.ui.dialog.overlay.instances;
                i.length !== 0 && i[i.length - 1] === n && t.options.closeOnEscape && !r.isDefaultPrevented() && r.keyCode && r.keyCode === e.ui.keyCode.ESCAPE && (t.close(r),
                r.preventDefault())
            }),
            n.appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            }),
            e.fn.bgiframe && n.bgiframe(),
            this.instances.push(n),
            n
        },
        destroy: function(t) {
            var n = e.inArray(t, this.instances)
              , r = 0;
            n !== -1 && this.oldInstances.push(this.instances.splice(n, 1)[0]),
            this.instances.length === 0 && e([document, window]).unbind(".dialog-overlay"),
            t.height(0).width(0).remove(),
            e.each(this.instances, function() {
                r = Math.max(r, this.css("z-index"))
            }),
            this.maxZ = r
        },
        height: function() {
            var t, n;
            return e.ui.ie ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
            n = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight),
            t < n ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
        },
        width: function() {
            var t, n;
            return e.ui.ie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
            n = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth),
            t < n ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
        },
        resize: function() {
            var t = e([]);
            e.each(e.ui.dialog.overlay.instances, function() {
                t = t.add(this)
            }),
            t.css({
                width: 0,
                height: 0
            }).css({
                width: e.ui.dialog.overlay.width(),
                height: e.ui.dialog.overlay.height()
            })
        }
    }),
    e.extend(e.ui.dialog.overlay.prototype, {
        destroy: function() {
            e.ui.dialog.overlay.destroy(this.$el)
        }
    })
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.progressbar.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    e.widget("ui.progressbar", {
        version: "1.9.2",
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }),
            this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
            this.oldValue = this._value(),
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.valueDiv.remove()
        },
        value: function(e) {
            return e === t ? this._value() : (this._setOption("value", e),
            this)
        },
        _setOption: function(e, t) {
            e === "value" && (this.options.value = t,
            this._refreshValue(),
            this._value() === this.options.max && this._trigger("complete")),
            this._super(e, t)
        },
        _value: function() {
            var e = this.options.value;
            return typeof e != "number" && (e = 0),
            Math.min(this.options.max, Math.max(this.min, e))
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function() {
            var e = this.value()
              , t = this._percentage();
            this.oldValue !== e && (this.oldValue = e,
            this._trigger("change")),
            this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"),
            this.element.attr("aria-valuenow", e)
        }
    })
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
jQuery.effects || function(e, t) {
    var n = e.uiBackCompat !== !1
      , r = "ui-effects-";
    e.effects = {
        effect: {}
    },
    function(t, n) {
        function p(e, t, n) {
            var r = a[t.type] || {};
            return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e),
            isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
        }
        function d(e) {
            var n = o()
              , r = n._rgba = [];
            return e = e.toLowerCase(),
            h(s, function(t, i) {
                var s, o = i.re.exec(e), a = o && i.parse(o), f = i.space || "rgba";
                if (a)
                    return s = n[f](a),
                    n[u[f].cache] = s[u[f].cache],
                    r = n._rgba = s._rgba,
                    !1
            }),
            r.length ? (r.join() === "0,0,0,0" && t.extend(r, c.transparent),
            n) : c[e]
        }
        function v(e, t, n) {
            return n = (n + 1) % 1,
            n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), i = /^([\-+])=\s*(\d+\.?\d*)/, s = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }], o = t.Color = function(e, n, r, i) {
            return new t.Color.fn.parse(e,n,r,i)
        }
        , u = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, a = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, f = o.support = {}, l = t("<p>")[0], c, h = t.each;
        l.style.cssText = "background-color:rgba(1,1,1,.5)",
        f.rgba = l.style.backgroundColor.indexOf("rgba") > -1,
        h(u, function(e, t) {
            t.cache = "_" + e,
            t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        o.fn = t.extend(o.prototype, {
            parse: function(r, i, s, a) {
                if (r === n)
                    return this._rgba = [null, null, null, null],
                    this;
                if (r.jquery || r.nodeType)
                    r = t(r).css(i),
                    i = n;
                var f = this
                  , l = t.type(r)
                  , v = this._rgba = [];
                i !== n && (r = [r, i, s, a],
                l = "array");
                if (l === "string")
                    return this.parse(d(r) || c._default);
                if (l === "array")
                    return h(u.rgba.props, function(e, t) {
                        v[t.idx] = p(r[t.idx], t)
                    }),
                    this;
                if (l === "object")
                    return r instanceof o ? h(u, function(e, t) {
                        r[t.cache] && (f[t.cache] = r[t.cache].slice())
                    }) : h(u, function(t, n) {
                        var i = n.cache;
                        h(n.props, function(e, t) {
                            if (!f[i] && n.to) {
                                if (e === "alpha" || r[e] == null)
                                    return;
                                f[i] = n.to(f._rgba)
                            }
                            f[i][t.idx] = p(r[e], t, !0)
                        }),
                        f[i] && e.inArray(null, f[i].slice(0, 3)) < 0 && (f[i][3] = 1,
                        n.from && (f._rgba = n.from(f[i])))
                    }),
                    this
            },
            is: function(e) {
                var t = o(e)
                  , n = !0
                  , r = this;
                return h(u, function(e, i) {
                    var s, o = t[i.cache];
                    return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [],
                    h(i.props, function(e, t) {
                        if (o[t.idx] != null)
                            return n = o[t.idx] === s[t.idx],
                            n
                    })),
                    n
                }),
                n
            },
            _space: function() {
                var e = []
                  , t = this;
                return h(u, function(n, r) {
                    t[r.cache] && e.push(n)
                }),
                e.pop()
            },
            transition: function(e, t) {
                var n = o(e)
                  , r = n._space()
                  , i = u[r]
                  , s = this.alpha() === 0 ? o("transparent") : this
                  , f = s[i.cache] || i.to(s._rgba)
                  , l = f.slice();
                return n = n[i.cache],
                h(i.props, function(e, r) {
                    var i = r.idx
                      , s = f[i]
                      , o = n[i]
                      , u = a[r.type] || {};
                    if (o === null)
                        return;
                    s === null ? l[i] = o : (u.mod && (o - s > u.mod / 2 ? s += u.mod : s - o > u.mod / 2 && (s -= u.mod)),
                    l[i] = p((o - s) * t + s, r))
                }),
                this[r](l)
            },
            blend: function(e) {
                if (this._rgba[3] === 1)
                    return this;
                var n = this._rgba.slice()
                  , r = n.pop()
                  , i = o(e)._rgba;
                return o(t.map(n, function(e, t) {
                    return (1 - r) * i[t] + r * e
                }))
            },
            toRgbaString: function() {
                var e = "rgba("
                  , n = t.map(this._rgba, function(e, t) {
                    return e == null ? t > 2 ? 1 : 0 : e
                });
                return n[3] === 1 && (n.pop(),
                e = "rgb("),
                e + n.join() + ")"
            },
            toHslaString: function() {
                var e = "hsla("
                  , n = t.map(this.hsla(), function(e, t) {
                    return e == null && (e = t > 2 ? 1 : 0),
                    t && t < 3 && (e = Math.round(e * 100) + "%"),
                    e
                });
                return n[3] === 1 && (n.pop(),
                e = "hsl("),
                e + n.join() + ")"
            },
            toHexString: function(e) {
                var n = this._rgba.slice()
                  , r = n.pop();
                return e && n.push(~~(r * 255)),
                "#" + t.map(n, function(e) {
                    return e = (e || 0).toString(16),
                    e.length === 1 ? "0" + e : e
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        }),
        o.fn.parse.prototype = o.fn,
        u.hsla.to = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null)
                return [null, null, null, e[3]];
            var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = e[3], s = Math.max(t, n, r), o = Math.min(t, n, r), u = s - o, a = s + o, f = a * .5, l, c;
            return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240,
            f === 0 || f === 1 ? c = f : f <= .5 ? c = u / a : c = u / (2 - a),
            [Math.round(l) % 360, c, f, i == null ? 1 : i]
        }
        ,
        u.hsla.from = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null)
                return [null, null, null, e[3]];
            var t = e[0] / 360
              , n = e[1]
              , r = e[2]
              , i = e[3]
              , s = r <= .5 ? r * (1 + n) : r + n - r * n
              , o = 2 * r - s;
            return [Math.round(v(o, s, t + 1 / 3) * 255), Math.round(v(o, s, t) * 255), Math.round(v(o, s, t - 1 / 3) * 255), i]
        }
        ,
        h(u, function(e, r) {
            var s = r.props
              , u = r.cache
              , a = r.to
              , f = r.from;
            o.fn[e] = function(e) {
                a && !this[u] && (this[u] = a(this._rgba));
                if (e === n)
                    return this[u].slice();
                var r, i = t.type(e), l = i === "array" || i === "object" ? e : arguments, c = this[u].slice();
                return h(s, function(e, t) {
                    var n = l[i === "object" ? e : t.idx];
                    n == null && (n = c[t.idx]),
                    c[t.idx] = p(n, t)
                }),
                f ? (r = o(f(c)),
                r[u] = c,
                r) : o(c)
            }
            ,
            h(s, function(n, r) {
                if (o.fn[n])
                    return;
                o.fn[n] = function(s) {
                    var o = t.type(s), u = n === "alpha" ? this._hsla ? "hsla" : "rgba" : e, a = this[u](), f = a[r.idx], l;
                    return o === "undefined" ? f : (o === "function" && (s = s.call(this, f),
                    o = t.type(s)),
                    s == null && r.empty ? this : (o === "string" && (l = i.exec(s),
                    l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))),
                    a[r.idx] = s,
                    this[u](a)))
                }
            })
        }),
        h(r, function(e, n) {
            t.cssHooks[n] = {
                set: function(e, r) {
                    var i, s, u = "";
                    if (t.type(r) !== "string" || (i = d(r))) {
                        r = o(i || r);
                        if (!f.rgba && r._rgba[3] !== 1) {
                            s = n === "backgroundColor" ? e.parentNode : e;
                            while ((u === "" || u === "transparent") && s && s.style)
                                try {
                                    u = t.css(s, "backgroundColor"),
                                    s = s.parentNode
                                } catch (a) {}
                            r = r.blend(u && u !== "transparent" ? u : "_default")
                        }
                        r = r.toRgbaString()
                    }
                    try {
                        e.style[n] = r
                    } catch (l) {}
                }
            },
            t.fx.step[n] = function(e) {
                e.colorInit || (e.start = o(e.elem, n),
                e.end = o(e.end),
                e.colorInit = !0),
                t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
            }
        }),
        t.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                return h(["Top", "Right", "Bottom", "Left"], function(n, r) {
                    t["border" + r + "Color"] = e
                }),
                t
            }
        },
        c = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function() {
        function i() {
            var t = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle, n = {}, r, i;
            if (t && t.length && t[0] && t[t[0]]) {
                i = t.length;
                while (i--)
                    r = t[i],
                    typeof t[r] == "string" && (n[e.camelCase(r)] = t[r])
            } else
                for (r in t)
                    typeof t[r] == "string" && (n[r] = t[r]);
            return n
        }
        function s(t, n) {
            var i = {}, s, o;
            for (s in n)
                o = n[s],
                t[s] !== o && !r[s] && (e.fx.step[s] || !isNaN(parseFloat(o))) && (i[s] = o);
            return i
        }
        var n = ["add", "remove", "toggle"]
          , r = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
            e.fx.step[n] = function(e) {
                if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr)
                    jQuery.style(e.elem, n, e.end),
                    e.setAttr = !0
            }
        }),
        e.effects.animateClass = function(t, r, o, u) {
            var a = e.speed(r, o, u);
            return this.queue(function() {
                var r = e(this), o = r.attr("class") || "", u, f = a.children ? r.find("*").andSelf() : r;
                f = f.map(function() {
                    var t = e(this);
                    return {
                        el: t,
                        start: i.call(this)
                    }
                }),
                u = function() {
                    e.each(n, function(e, n) {
                        t[n] && r[n + "Class"](t[n])
                    })
                }
                ,
                u(),
                f = f.map(function() {
                    return this.end = i.call(this.el[0]),
                    this.diff = s(this.start, this.end),
                    this
                }),
                r.attr("class", o),
                f = f.map(function() {
                    var t = this
                      , n = e.Deferred()
                      , r = jQuery.extend({}, a, {
                        queue: !1,
                        complete: function() {
                            n.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, r),
                    n.promise()
                }),
                e.when.apply(e, f.get()).done(function() {
                    u(),
                    e.each(arguments, function() {
                        var t = this.el;
                        e.each(this.diff, function(e) {
                            t.css(e, "")
                        })
                    }),
                    a.complete.call(r[0])
                })
            })
        }
        ,
        e.fn.extend({
            _addClass: e.fn.addClass,
            addClass: function(t, n, r, i) {
                return n ? e.effects.animateClass.call(this, {
                    add: t
                }, n, r, i) : this._addClass(t)
            },
            _removeClass: e.fn.removeClass,
            removeClass: function(t, n, r, i) {
                return n ? e.effects.animateClass.call(this, {
                    remove: t
                }, n, r, i) : this._removeClass(t)
            },
            _toggleClass: e.fn.toggleClass,
            toggleClass: function(n, r, i, s, o) {
                return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.call(this, r ? {
                    add: n
                } : {
                    remove: n
                }, i, s, o) : this._toggleClass(n, r) : e.effects.animateClass.call(this, {
                    toggle: n
                }, r, i, s)
            },
            switchClass: function(t, n, r, i, s) {
                return e.effects.animateClass.call(this, {
                    add: n,
                    remove: t
                }, r, i, s)
            }
        })
    }(),
    function() {
        function i(t, n, r, i) {
            e.isPlainObject(t) && (n = t,
            t = t.effect),
            t = {
                effect: t
            },
            n == null && (n = {}),
            e.isFunction(n) && (i = n,
            r = null,
            n = {});
            if (typeof n == "number" || e.fx.speeds[n])
                i = r,
                r = n,
                n = {};
            return e.isFunction(r) && (i = r,
            r = null),
            n && e.extend(t, n),
            r = r || n.duration,
            t.duration = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default,
            t.complete = i || n.complete,
            t
        }
        function s(t) {
            return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects.effect[t] ? n && e.effects[t] ? !1 : !0 : !1
        }
        e.extend(e.effects, {
            version: "1.9.2",
            save: function(e, t) {
                for (var n = 0; n < t.length; n++)
                    t[n] !== null && e.data(r + t[n], e[0].style[t[n]])
            },
            restore: function(e, n) {
                var i, s;
                for (s = 0; s < n.length; s++)
                    n[s] !== null && (i = e.data(r + n[s]),
                    i === t && (i = ""),
                    e.css(n[s], i))
            },
            setMode: function(e, t) {
                return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"),
                t
            },
            getBaseline: function(e, t) {
                var n, r;
                switch (e[0]) {
                case "top":
                    n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
                }
                switch (e[1]) {
                case "left":
                    r = 0;
                    break;
                case "center":
                    r = .5;
                    break;
                case "right":
                    r = 1;
                    break;
                default:
                    r = e[1] / t.width
                }
                return {
                    x: r,
                    y: n
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper"))
                    return t.parent();
                var n = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    "float": t.css("float")
                }
                  , r = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , i = {
                    width: t.width(),
                    height: t.height()
                }
                  , s = document.activeElement;
                try {
                    s.id
                } catch (o) {
                    s = document.body
                }
                return t.wrap(r),
                (t[0] === s || e.contains(t[0], s)) && e(s).focus(),
                r = t.parent(),
                t.css("position") === "static" ? (r.css({
                    position: "relative"
                }),
                t.css({
                    position: "relative"
                })) : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }),
                e.each(["top", "left", "bottom", "right"], function(e, r) {
                    n[r] = t.css(r),
                    isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                }),
                t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                t.css(i),
                r.css(n).show()
            },
            removeWrapper: function(t) {
                var n = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
                (t[0] === n || e.contains(t[0], n)) && e(n).focus()),
                t
            },
            setTransition: function(t, n, r, i) {
                return i = i || {},
                e.each(n, function(e, n) {
                    var s = t.cssUnit(n);
                    s[0] > 0 && (i[n] = s[0] * r + s[1])
                }),
                i
            }
        }),
        e.fn.extend({
            effect: function() {
                function a(n) {
                    function u() {
                        e.isFunction(i) && i.call(r[0]),
                        e.isFunction(n) && n()
                    }
                    var r = e(this)
                      , i = t.complete
                      , s = t.mode;
                    (r.is(":hidden") ? s === "hide" : s === "show") ? u() : o.call(r[0], t, u)
                }
                var t = i.apply(this, arguments)
                  , r = t.mode
                  , s = t.queue
                  , o = e.effects.effect[t.effect]
                  , u = !o && n && e.effects[t.effect];
                return e.fx.off || !o && !u ? r ? this[r](t.duration, t.complete) : this.each(function() {
                    t.complete && t.complete.call(this)
                }) : o ? s === !1 ? this.each(a) : this.queue(s || "fx", a) : u.call(this, {
                    options: t,
                    duration: t.duration,
                    callback: t.complete,
                    mode: t.mode
                })
            },
            _show: e.fn.show,
            show: function(e) {
                if (s(e))
                    return this._show.apply(this, arguments);
                var t = i.apply(this, arguments);
                return t.mode = "show",
                this.effect.call(this, t)
            },
            _hide: e.fn.hide,
            hide: function(e) {
                if (s(e))
                    return this._hide.apply(this, arguments);
                var t = i.apply(this, arguments);
                return t.mode = "hide",
                this.effect.call(this, t)
            },
            __toggle: e.fn.toggle,
            toggle: function(t) {
                if (s(t) || typeof t == "boolean" || e.isFunction(t))
                    return this.__toggle.apply(this, arguments);
                var n = i.apply(this, arguments);
                return n.mode = "toggle",
                this.effect.call(this, n)
            },
            cssUnit: function(t) {
                var n = this.css(t)
                  , r = [];
                return e.each(["em", "px", "%", "pt"], function(e, t) {
                    n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                }),
                r
            }
        })
    }(),
    function() {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
            t[n] = function(t) {
                return Math.pow(t, e + 2)
            }
        }),
        e.extend(t, {
            Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function(e) {
                return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function(e) {
                var t, n = 4;
                while (e < ((t = Math.pow(2, --n)) - 1) / 11)
                    ;
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
            }
        }),
        e.each(t, function(t, n) {
            e.easing["easeIn" + t] = n,
            e.easing["easeOut" + t] = function(e) {
                return 1 - n(1 - e)
            }
            ,
            e.easing["easeInOut" + t] = function(e) {
                return e < .5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2
            }
        })
    }()
}(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.effect-slide.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    e.effects.effect.slide = function(t, n) {
        var r = e(this), i = ["position", "top", "bottom", "left", "right", "width", "height"], s = e.effects.setMode(r, t.mode || "show"), o = s === "show", u = t.direction || "left", a = u === "up" || u === "down" ? "top" : "left", f = u === "up" || u === "left", l, c = {};
        e.effects.save(r, i),
        r.show(),
        l = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0),
        e.effects.createWrapper(r).css({
            overflow: "hidden"
        }),
        o && r.css(a, f ? isNaN(l) ? "-" + l : -l : l),
        c[a] = (o ? f ? "+=" : "-=" : f ? "-=" : "+=") + l,
        r.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                s === "hide" && r.hide(),
                e.effects.restore(r, i),
                e.effects.removeWrapper(r),
                n()
            }
        })
    }
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.effect-blind.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    var n = /up|down|vertical/
      , r = /up|left|vertical|horizontal/;
    e.effects.effect.blind = function(t, i) {
        var s = e(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], u = e.effects.setMode(s, t.mode || "hide"), a = t.direction || "up", f = n.test(a), l = f ? "height" : "width", c = f ? "top" : "left", h = r.test(a), p = {}, d = u === "show", v, m, g;
        s.parent().is(".ui-effects-wrapper") ? e.effects.save(s.parent(), o) : e.effects.save(s, o),
        s.show(),
        v = e.effects.createWrapper(s).css({
            overflow: "hidden"
        }),
        m = v[l](),
        g = parseFloat(v.css(c)) || 0,
        p[l] = d ? m : 0,
        h || (s.css(f ? "bottom" : "right", 0).css(f ? "top" : "left", "auto").css({
            position: "absolute"
        }),
        p[c] = d ? g : m + g),
        d && (v.css(l, 0),
        h || v.css(c, g + m)),
        v.animate(p, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function() {
                u === "hide" && s.hide(),
                e.effects.restore(s, o),
                e.effects.removeWrapper(s),
                i()
            }
        })
    }
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.effect-fade.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    e.effects.effect.fade = function(t, n) {
        var r = e(this)
          , i = e.effects.setMode(r, t.mode || "toggle");
        r.animate({
            opacity: i
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: n
        })
    }
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.effect-highlight.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    e.effects.effect.highlight = function(t, n) {
        var r = e(this)
          , i = ["backgroundImage", "backgroundColor", "opacity"]
          , s = e.effects.setMode(r, t.mode || "show")
          , o = {
            backgroundColor: r.css("backgroundColor")
        };
        s === "hide" && (o.opacity = 0),
        e.effects.save(r, i),
        r.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                s === "hide" && r.hide(),
                e.effects.restore(r, i),
                n()
            }
        })
    }
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.effect-pulsate.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    e.effects.effect.pulsate = function(t, n) {
        var r = e(this), i = e.effects.setMode(r, t.mode || "show"), s = i === "show", o = i === "hide", u = s || i === "hide", a = (t.times || 5) * 2 + (u ? 1 : 0), f = t.duration / a, l = 0, c = r.queue(), h = c.length, p;
        if (s || !r.is(":visible"))
            r.css("opacity", 0).show(),
            l = 1;
        for (p = 1; p < a; p++)
            r.animate({
                opacity: l
            }, f, t.easing),
            l = 1 - l;
        r.animate({
            opacity: l
        }, f, t.easing),
        r.queue(function() {
            o && r.hide(),
            n()
        }),
        h > 1 && c.splice.apply(c, [1, 0].concat(c.splice(h, a + 1))),
        r.dequeue()
    }
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.autocomplete.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    var n = 0;
    e.widget("ui.autocomplete", {
        version: "1.9.2",
        defaultElement: "<input>",
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var t, n, r;
            this.isMultiLine = this._isMultiLine(),
            this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"],
            this.isNewMenu = !0,
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(i) {
                    if (this.element.prop("readOnly")) {
                        t = !0,
                        r = !0,
                        n = !0;
                        return
                    }
                    t = !1,
                    r = !1,
                    n = !1;
                    var s = e.ui.keyCode;
                    switch (i.keyCode) {
                    case s.PAGE_UP:
                        t = !0,
                        this._move("previousPage", i);
                        break;
                    case s.PAGE_DOWN:
                        t = !0,
                        this._move("nextPage", i);
                        break;
                    case s.UP:
                        t = !0,
                        this._keyEvent("previous", i);
                        break;
                    case s.DOWN:
                        t = !0,
                        this._keyEvent("next", i);
                        break;
                    case s.ENTER:
                    case s.NUMPAD_ENTER:
                        this.menu.active && (t = !0,
                        i.preventDefault(),
                        this.menu.select(i));
                        break;
                    case s.TAB:
                        this.menu.active && this.menu.select(i);
                        break;
                    case s.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term),
                        this.close(i),
                        i.preventDefault());
                        break;
                    default:
                        n = !0,
                        this._searchTimeout(i)
                    }
                },
                keypress: function(r) {
                    if (t) {
                        t = !1,
                        r.preventDefault();
                        return
                    }
                    if (n)
                        return;
                    var i = e.ui.keyCode;
                    switch (r.keyCode) {
                    case i.PAGE_UP:
                        this._move("previousPage", r);
                        break;
                    case i.PAGE_DOWN:
                        this._move("nextPage", r);
                        break;
                    case i.UP:
                        this._keyEvent("previous", r);
                        break;
                    case i.DOWN:
                        this._keyEvent("next", r)
                    }
                },
                input: function(e) {
                    if (r) {
                        r = !1,
                        e.preventDefault();
                        return
                    }
                    this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(e) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching),
                    this.close(e),
                    this._change(e)
                }
            }),
            this._initSource(),
            this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                input: e(),
                role: null
            }).zIndex(this.element.zIndex() + 1).hide().data("menu"),
            this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var n = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(r) {
                            r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target) && t.close()
                        })
                    })
                },
                menufocus: function(t, n) {
                    if (this.isNewMenu) {
                        this.isNewMenu = !1;
                        if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
                            this.menu.blur(),
                            this.document.one("mousemove", function() {
                                e(t.target).trigger(t.originalEvent)
                            });
                            return
                        }
                    }
                    var r = n.item.data("ui-autocomplete-item") || n.item.data("item.autocomplete");
                    !1 !== this._trigger("focus", t, {
                        item: r
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                },
                menuselect: function(e, t) {
                    var n = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete")
                      , r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(),
                    this.previous = r,
                    this._delay(function() {
                        this.previous = r,
                        this.selectedItem = n
                    })),
                    !1 !== this._trigger("select", e, {
                        item: n
                    }) && this._value(n.value),
                    this.term = this._value(),
                    this.close(e),
                    this.selectedItem = n
                }
            }),
            this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element),
            e.fn.bgiframe && this.menu.element.bgiframe(),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t),
            e === "source" && this._initSource(),
            e === "appendTo" && this.menu.element.appendTo(this.document.find(t || "body")[0]),
            e === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _isMultiLine: function() {
            return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
        },
        _initSource: function() {
            var t, n, r = this;
            e.isArray(this.options.source) ? (t = this.options.source,
            this.source = function(n, r) {
                r(e.ui.autocomplete.filter(t, n.term))
            }
            ) : typeof this.options.source == "string" ? (n = this.options.source,
            this.source = function(t, i) {
                r.xhr && r.xhr.abort(),
                r.xhr = e.ajax({
                    url: n,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        i(e)
                    },
                    error: function() {
                        i([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null,
                this.search(null, e))
            }, this.options.delay)
        },
        search: function(e, t) {
            e = e != null ? e : this._value(),
            this.term = this._value();
            if (e.length < this.options.minLength)
                return this.close(t);
            if (this._trigger("search", t) === !1)
                return;
            return this._search(e)
        },
        _search: function(e) {
            this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var e = this
              , t = ++n;
            return function(r) {
                t === n && e.__response(r),
                e.pending--,
                e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(e) {
            e && (e = this._normalize(e)),
            this._trigger("response", null, {
                content: e
            }),
            !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e),
            this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0,
            this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(n, t),
            this.menu.refresh(),
            n.show(),
            this._resizeMenu(),
            n.position(e.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, n) {
            var r = this;
            e.each(n, function(e, n) {
                r._renderItemData(t, n)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, n) {
            return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
        },
        _move: function(e, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
                this._value(this.term),
                this.menu.blur();
                return
            }
            this.menu[e](t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            if (!this.isMultiLine || this.menu.element.is(":visible"))
                this._move(e, t),
                t.preventDefault()
        }
    }),
    e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, n) {
            var r = new RegExp(e.ui.autocomplete.escapeRegex(n),"i");
            return e.grep(t, function(e) {
                return r.test(e.label || e.value || e)
            })
        }
    }),
    e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch)
                return;
            e && e.length ? t = this.options.messages.results(e.length) : t = this.options.messages.noResults,
            this.liveRegion.text(t)
        }
    })
}
)(jQuery);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.menu.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    var n = !1;
    e.widget("ui.menu", {
        version: "1.9.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, e.proxy(function(e) {
                this.options.disabled && e.preventDefault()
            }, this)),
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
            this._on({
                "mousedown .ui-menu-item > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-state-disabled > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(t) {
                    var r = e(t.target).closest(".ui-menu-item");
                    !n && r.not(".ui-state-disabled").length && (n = !0,
                    this.select(t),
                    r.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]),
                    this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    var n = e(t.currentTarget);
                    n.siblings().children(".ui-state-active").removeClass("ui-state-active"),
                    this.focus(t, n)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var n = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(e, n)
                },
                blur: function(t) {
                    this._delay(function() {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(t) {
                    e(t.target).closest(".ui-menu").length || this.collapseAll(t),
                    n = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }),
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(t) {
            function a(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var n, r, i, s, o, u = !0;
            switch (t.keyCode) {
            case e.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case e.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case e.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case e.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case e.ui.keyCode.UP:
                this.previous(t);
                break;
            case e.ui.keyCode.DOWN:
                this.next(t);
                break;
            case e.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case e.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case e.ui.keyCode.ENTER:
            case e.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case e.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                u = !1,
                r = this.previousFilter || "",
                i = String.fromCharCode(t.keyCode),
                s = !1,
                clearTimeout(this.filterTimer),
                i === r ? s = !0 : i = r + i,
                o = new RegExp("^" + a(i),"i"),
                n = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return o.test(e(this).children("a").text())
                }),
                n = s && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n,
                n.length || (i = String.fromCharCode(t.keyCode),
                o = new RegExp("^" + a(i),"i"),
                n = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return o.test(e(this).children("a").text())
                })),
                n.length ? (this.focus(t, n),
                n.length > 1 ? (this.previousFilter = i,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            u && t.preventDefault()
        },
        _activate: function(e) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var t, n = this.options.icons.submenu, r = this.element.find(this.options.menus);
            r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = e(this)
                  , r = t.prev("a")
                  , i = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                r.attr("aria-haspopup", "true").prepend(i),
                t.attr("aria-labelledby", r.attr("id"))
            }),
            t = r.add(this.element),
            t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            t.children(":not(.ui-menu-item)").each(function() {
                var t = e(this);
                /[^\-—–\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
            }),
            t.children(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        focus: function(e, t) {
            var n, r;
            this.blur(e, e && e.type === "focus"),
            this._scrollIntoView(t),
            this.active = t.first(),
            r = this.active.children("a").addClass("ui-state-focus"),
            this.options.role && this.element.attr("aria-activedescendant", r.attr("id")),
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),
            e && e.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay),
            n = t.children(".ui-menu"),
            n.length && /^mouse/.test(e.type) && this._startOpening(n),
            this.activeMenu = t.parent(),
            this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var n, r, i, s, o, u;
            this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0,
            r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0,
            i = t.offset().top - this.activeMenu.offset().top - n - r,
            s = this.activeMenu.scrollTop(),
            o = this.activeMenu.height(),
            u = t.height(),
            i < 0 ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer);
            if (!this.active)
                return;
            this.active.children("a").removeClass("ui-state-focus"),
            this.active = null,
            this._trigger("blur", e, {
                item: this.active
            })
        },
        _startOpening: function(e) {
            clearTimeout(this.timer);
            if (e.attr("aria-hidden") !== "true")
                return;
            this.timer = this._delay(function() {
                this._close(),
                this._open(e)
            }, this.delay)
        },
        _open: function(t) {
            var n = e.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
        },
        collapseAll: function(t, n) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element),
                this._close(r),
                this.blur(t),
                this.activeMenu = r
            }, this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element),
            e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(),
            this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()),
            this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, n) {
            var r;
            this.active && (e === "first" || e === "last" ? r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : r = this.active[e + "All"](".ui-menu-item").eq(0));
            if (!r || !r.length || !this.active)
                r = this.activeMenu.children(".ui-menu-item")[t]();
            this.focus(n, r)
        },
        nextPage: function(t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isLastItem())
                return;
            this._hasScroll() ? (r = this.active.offset().top,
            i = this.element.height(),
            this.active.nextAll(".ui-menu-item").each(function() {
                return n = e(this),
                n.offset().top - r - i < 0
            }),
            this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())
        },
        previousPage: function(t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isFirstItem())
                return;
            this._hasScroll() ? (r = this.active.offset().top,
            i = this.element.height(),
            this.active.prevAll(".ui-menu-item").each(function() {
                return n = e(this),
                n.offset().top - r + i > 0
            }),
            this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var n = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0),
            this._trigger("select", t, n)
        }
    })
}
)(jQuery);
;var c_cache = []
  , dle_poll_voted = [];
function doPoll(a, b) {
    var c = document.getElementById("dlepollform_" + b)
      , d = c.status.value
      , e = "";
    if (1 != dle_poll_voted[b]) {
        if ("results" != a && 1 != d) {
            for (var g = 0; g < c.elements.length; g++) {
                var f = c.elements[g];
                if ("radio" == f.type && 1 == f.checked) {
                    e = f.value;
                    break
                }
                "checkbox" == f.type && 1 == f.checked && (e = e + f.value + " ")
            }
            if ("vote" == a && "" == e)
                return;
            dle_poll_voted[b] = 1
        } else
            d = 1,
            c.status.value = 1;
        1 == d && "vote" == a && (d = 0,
        c.status.value = 0,
        a = "list");
        ShowLoading("");
        $.post(dle_root + "engine/ajax/poll.php", {
            news_id: b,
            action: a,
            answer: e,
            vote_skin: dle_skin
        }, function(a) {
            HideLoading("");
            $("#dle-poll-list-" + b).fadeOut(500, function() {
                $(this).html(a);
                $(this).fadeIn(500)
            })
        })
    }
}
function IPMenu(a, b, c, d) {
    var e = [];
    e[0] = '<a href="https://www.nic.ru/whois/?ip=' + a + '" target="_blank">' + b + "</a>";
    e[1] = '<a href="' + dle_root + dle_admin + "?mod=iptools&ip=" + a + '" target="_blank">' + c + "</a>";
    e[2] = '<a href="' + dle_root + dle_admin + "?mod=blockip&ip=" + a + '" target="_blank">' + d + "</a>";
    return e
}
function ajax_save_for_edit(a, b) {
    var c = {};
    "1" == quick_wysiwyg && submit_all_data();
    "2" == quick_wysiwyg && tinyMCE.triggerSave();
    $.each($("#ajaxnews" + a).serializeArray(), function(a, b) {
        -1 != b.name.indexOf("xfield") && (c[b.name] = b.value)
    });
    document.getElementById("allow_br_" + a).checked && (c.allow_br = 1);
    document.getElementById("approve_" + a).checked && (c.approve = 1);
    c.news_txt = $("#dleeditnews" + a).val();
    c.full_txt = $("#dleeditfullnews" + a).val();
    c.title = $("#edit-title-" + a).val();
    c.reason = $("#edit-reason-" + a).val();
    c.id = a;
    c.field = b;
    c.action = "save";
    ShowLoading("");
    $.post(dle_root + "engine/ajax/editnews.php", c, function(a) {
        HideLoading("");
        "ok" != a ? DLEalert(a, dle_info) : ($("#dlepopup-news-edit").dialog("close"),
        DLEconfirm(dle_save_ok, dle_confirm, function() {
            location.reload(!0)
        }))
    });
    return !1
}
function ajax_prep_for_edit(a, b) {
    for (var c = 0, d = c_cache.length; c < d; c++)
        c in c_cache && (c_cache[c] || "" != c_cache[c]) && ajax_cancel_comm_edit(c);
    ShowLoading("");
    $.get(dle_root + "engine/ajax/editnews.php", {
        id: a,
        field: b,
        action: "edit"
    }, function(c) {
        HideLoading("");
        var d = "none";
        $("#modal-overlay").remove();
        $("body").prepend('<div id="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #666666; opacity: .40;filter:Alpha(Opacity=40); z-index: 999; display:none;"></div>');
        $("#modal-overlay").css({
            filter: "alpha(opacity=40)"
        }).fadeIn();
        var f = {};
        f[dle_act_lang[3]] = function() {
            $(this).dialog("close")
        }
        ;
        f[dle_act_lang[4]] = function() {
            ajax_save_for_edit(a, b)
        }
        ;
        $("#dlepopup-news-edit").remove();
        $("body").prepend("<div id='dlepopup-news-edit' class='dlepopupnewsedit' title='" + menu_short + "' style='display:none'></div>");
        $(".dlepopupnewsedit").html("");
        $("#dlepopup-news-edit").dialog({
            autoOpen: !0,
            width: "800",
            height: 500,
            buttons: f,
            resizable: !1,
            dialogClass: "modalfixed",
            dragStart: function(a, c) {
                d = $(".modalfixed").css("box-shadow");
                $(".modalfixed").css("box-shadow", "none")
            },
            dragStop: function(a, c) {
                $(".modalfixed").css("box-shadow", d)
            },
            close: function(a, c) {
                $(this).dialog("destroy");
                $("#modal-overlay").fadeOut(function() {
                    $("#modal-overlay").remove()
                })
            }
        });
        830 < $(window).width() && 530 < $(window).height() && ($(".modalfixed.ui-dialog").css({
            position: "fixed"
        }),
        $("#dlepopup-news-edit").dialog("option", "position", ["0", "0"]));
        $("#dlepopup-news-edit").html(c)
    }, "html");
    return !1
}
function ajax_comm_edit(a, b) {
    for (var c = 0, d = c_cache.length; c < d; c++)
        c in c_cache && "" != c_cache[c] && ajax_cancel_comm_edit(c);
    c_cache[a] && "" != c_cache[a] || (c_cache[a] = $("#comm-id-" + a).html());
    ShowLoading("");
    $.get(dle_root + "engine/ajax/editcomments.php", {
        id: a,
        area: b,
        action: "edit"
    }, function(c) {
        HideLoading("");
        $("#comm-id-" + a).html(c);
        setTimeout(function() {
            $("html,body").stop().animate({
                scrollTop: $("#comm-id-" + a).offset().top - 70
            }, 700)
        }, 100)
    }, "html");
    return !1
}
function ajax_cancel_comm_edit(a) {
    "" != c_cache[a] && $("#comm-id-" + a).html(c_cache[a]);
    c_cache[a] = "";
    return !1
}
function ajax_save_comm_edit(a, b) {
    "1" == dle_wysiwyg && submit_all_data();
    "2" == dle_wysiwyg && tinyMCE.triggerSave();
    var c = $("#dleeditcomments" + a).val();
    ShowLoading("");
    $.post(dle_root + "engine/ajax/editcomments.php", {
        id: a,
        comm_txt: c,
        area: b,
        action: "save"
    }, function(c) {
        HideLoading("");
        c_cache[a] = "";
        $("#comm-id-" + a).html(c)
    });
    return !1
}
function DeleteComments(a, b) {
    DLEconfirm(dle_del_agree, dle_confirm, function() {
        ShowLoading("");
        $.get(dle_root + "engine/ajax/deletecomments.php", {
            id: a,
            dle_allow_hash: b
        }, function(a) {
            HideLoading("");
            a = parseInt(a);
            if (!isNaN(a)) {
                var b = "1" == dle_tree_comm ? $("#comments-tree-item-" + a) : $("#comment-id-" + a);
                $("html,body").stop().animate({
                    scrollTop: b.offset().top - 70
                }, 700);
                setTimeout(function() {
                    b.hide("blind", {}, 1400)
                }, 700)
            }
        })
    })
}
function MarkSpam(a, b) {
    DLEconfirm(dle_spam_agree, dle_confirm, function() {
        ShowLoading("");
        $.get(dle_root + "engine/ajax/adminfunction.php", {
            id: a,
            action: "commentsspam",
            user_hash: b
        }, function(a) {
            HideLoading("");
            "error" != a && DLEconfirm(a, dle_confirm, function() {
                location.reload(!0)
            })
        })
    })
}
function doFavorites(a, b, c) {
    ShowLoading("");
    $.get(dle_root + "engine/ajax/favorites.php", {
        fav_id: a,
        action: b,
        skin: dle_skin,
        alert: c
    }, function(b) {
        HideLoading("");
        c ? DLEalert(b, dle_info) : $("#fav-id-" + a).html(b)
    });
    return !1
}
function CheckLogin() {
    var a = document.getElementById("name").value;
    ShowLoading("");
    $.post(dle_root + "engine/ajax/registration.php", {
        name: a
    }, function(a) {
        HideLoading("");
        $("#result-registration").html(a)
    });
    return !1
}
function doCalendar(a, b, c) {
    ShowLoading("");
    $.get(dle_root + "engine/ajax/calendar.php", {
        month: a,
        year: b
    }, function(a) {
        HideLoading("");
        "left" == c ? $("#calendar-layer").hide("slide", {
            direction: "left"
        }, 500, function() {
            $("#calendar-layer").html(a).show("slide", {
                direction: "right"
            }, 500)
        }) : $("#calendar-layer").hide("slide", {
            direction: "right"
        }, 500, function() {
            $("#calendar-layer").html(a).show("slide", {
                direction: "left"
            }, 500)
        })
    })
}
function doRate(a, b) {
    ShowLoading("");
    $.get(dle_root + "engine/ajax/rating.php", {
        go_rate: a,
        news_id: b,
        skin: dle_skin
    }, function(a) {
        HideLoading("");
        if (a.success) {
            var d = a.rating
              , d = d.replace(/&lt;/g, "<")
              , d = d.replace(/&gt;/g, ">")
              , d = d.replace(/&amp;/g, "&");
            $("#ratig-layer-" + b).html(d);
            $("#vote-num-id-" + b).html(a.votenum)
        }
    }, "json")
}
function doCommentsRate(a, b) {
    ShowLoading("");
    $.get(dle_root + "engine/ajax/ratingcomments.php", {
        go_rate: a,
        c_id: b,
        skin: dle_skin
    }, function(a) {
        HideLoading("");
        if (a.success) {
            var d = a.rating
              , d = d.replace(/&lt;/g, "<")
              , d = d.replace(/&gt;/g, ">")
              , d = d.replace(/&amp;/g, "&");
            $("#comments-ratig-layer-" + b).html(d);
            $("#comments-vote-num-id-" + b).html(a.votenum)
        }
    }, "json")
}
function ajax_cancel_reply() {
    $("#dlefastreplycomments").hide("blind", {}, 1400)
}
function ajax_fast_reply(a, b) {
    var c = $("#comments" + a).val()
      , d = $("#name" + a).val()
      , e = $("#question_answer" + a).val()
      , g = $("#sec_code" + a).val()
      , f = $("#recaptcha" + a).val()
      , h = $("#subscribe" + a + ":checked").val()
      , k = $("#postid" + a).val();
    if ("" == d || "" == c)
        return DLEalert(dle_req_field, dle_info),
        !1;
    f = f ? grecaptcha.getResponse(recaptcha_widget) : "";
    h || (h = 0);
    g || (g = "");
    e || (e = "");
    ShowLoading("");
    $.post(dle_root + "engine/ajax/addcomments.php", {
        post_id: k,
        parent: a,
        indent: b,
        comments: c,
        name: d,
        mail: "",
        editor_mode: "",
        skin: dle_skin,
        sec_code: g,
        question_answer: e,
        g_recaptcha_response: f,
        allow_subscribe: h
    }, function(b) {
        HideLoading("");
        $("#blind-animation" + a).remove();
        $("#dlefastreplyesponse").html(b);
        "error" != b && document.getElementById("blind-animation" + a) && ($("html,body").stop().animate({
            scrollTop: $("#dlefastreplyesponse").offset().top - 70
        }, 1100),
        setTimeout(function() {
            $("#blind-animation" + a).show("blind", {}, 1500);
            $("#dlefastreplycomments").hide("blind", {}, 1500)
        }, 1100))
    }, "html");
    return !1
}
function dle_reply(a, b, c) {
    var d = {};
    $("#dlereplypopup").remove();
    "1" == c && ($("#dlefastreplycomments").remove(),
    $("#dlefastreplyesponse").remove());
    d[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }
    ;
    d[dle_p_send] = function() {
        if ("1" == dle_wysiwyg || "2" == dle_wysiwyg) {
            "1" == dle_wysiwyg ? submit_all_data() : tinyMCE.triggerSave();
            var c = "wysiwyg"
        } else
            c = "";
        var d = $("#comments" + a).val()
          , f = $("#name" + a).val()
          , h = $("#mail" + a).val()
          , k = $("#question_answer" + a).val()
          , l = $("#sec_code" + a).val()
          , m = $("#recaptcha" + a).val()
          , n = $("#subscribe" + a + ":checked").val()
          , p = $("#postid" + a).val();
        if ("" == f || "" == d)
            return DLEalert(dle_req_field, dle_info),
            !1;
        m = m ? grecaptcha.getResponse(recaptcha_widget) : "";
        n || (n = 0);
        l || (l = "");
        k || (k = "");
        ShowLoading("");
        $.post(dle_root + "engine/ajax/addcomments.php", {
            post_id: p,
            parent: a,
            indent: b,
            comments: d,
            name: f,
            mail: h,
            editor_mode: c,
            skin: dle_skin,
            sec_code: l,
            question_answer: k,
            g_recaptcha_response: m,
            allow_subscribe: n
        }, function(b) {
            HideLoading("");
            $("#blind-animation" + a).remove();
            $("#comments-tree-item-" + a).append(b);
            "error" != b && document.getElementById("blind-animation" + a) && ($("#dlereplypopup").remove(),
            $("html,body").stop().animate({
                scrollTop: $("#comments-tree-item-" + a).offset().top + $("#comments-tree-item-" + a).height() - 70
            }, 1100),
            setTimeout(function() {
                $("#blind-animation" + a).show("blind", {}, 1500)
            }, 1100))
        }, "html");
        return !1
    }
    ;
    ShowLoading("");
    $.get(dle_root + "engine/ajax/replycomments.php", {
        id: a,
        indent: b,
        skin: dle_skin
    }, function(b) {
        HideLoading("");
        "1" == c ? ($("#comment-id-" + a).append("<div id='dlefastreplyesponse'></div><div id='dlefastreplycomments' style='display:none'></div>"),
        $("#dlefastreplycomments").html(b),
        $("html,body").stop().animate({
            scrollTop: $("#comment-id-" + a).offset().top + $("#comment-id-" + a).height() - 70
        }, 1100),
        setTimeout(function() {
            $("#dlefastreplycomments").show("blind", {}, 1500)
        }, 1100)) : ($("body").append("<div id='dlereplypopup' title='" + dle_reply_title + "' style='display:none'></div>"),
        $("#dlereplypopup").html(b),
        $("#dlereplypopup").dialog({
            autoOpen: !0,
            width: 600,
            resizable: !1,
            dialogClass: "modalfixed",
            buttons: d
        }),
        $(".modalfixed.ui-dialog").css({
            position: "fixed"
        }),
        $("#dlereplypopup").dialog("option", "position", ["0", "0"]))
    }, "html");
    return !1
}
function doAddComments() {
    var a = document.getElementById("dle-comments-form");
    if ("1" == dle_wysiwyg || "2" == dle_wysiwyg) {
        "1" == dle_wysiwyg ? submit_all_data() : tinyMCE.triggerSave();
        var b = "wysiwyg"
    } else
        b = "";
    if ("" == a.comments.value || "" == a.name.value)
        return DLEalert(dle_req_field, dle_info),
        !1;
    var c = a.question_answer ? a.question_answer.value : ""
      , d = a.sec_code ? a.sec_code.value : ""
      , e = "undefined" != typeof grecaptcha ? grecaptcha.getResponse() : ""
      , g = a.allow_subscribe ? 1 == a.allow_subscribe.checked ? "1" : "0" : "0"
      , f = a.mail ? a.mail.value : "";
    ShowLoading("");
    $.post(dle_root + "engine/ajax/addcomments.php", {
        post_id: a.post_id.value,
        comments: a.comments.value,
        name: a.name.value,
        mail: f,
        editor_mode: b,
        skin: dle_skin,
        sec_code: d,
        question_answer: c,
        g_recaptcha_response: e,
        allow_subscribe: g
    }, function(b) {
        a.sec_code && (a.sec_code.value = "",
        reload());
        HideLoading("");
        $("#dle-ajax-comments").html(b);
        "error" != b && document.getElementById("blind-animation") && ($("html,body").stop().animate({
            scrollTop: $("#dle-ajax-comments").offset().top - 70
        }, 1100),
        setTimeout(function() {
            $("#blind-animation").show("blind", {}, 1500)
        }, 1100))
    }, "html");
    return !1
}
function isHistoryApiAvailable() {
    return !(!window.history || !history.pushState)
}
function CommentsPage(a, b, c) {
    ShowLoading("");
    $.get(dle_root + "engine/ajax/comments.php", {
        cstart: a,
        news_id: b,
        skin: dle_skin
    }, function(d) {
        HideLoading("");
        isNaN(a) || isNaN(b) || ($("#dle-comm-link").unbind("click"),
        $("#dle-comm-link").bind("click", function() {
            CommentsPage(a, b);
            return !1
        }));
        scroll(0, $("#dle-comments-list").offset().top - 70);
        $("#dle-comments-list").html(d.comments);
        $(".dle-comments-navigation").html(d.navigation);
        isHistoryApiAvailable() && window.history.pushState(null, null, c)
    }, "json");
    return !1
}
function dle_copy_quote(a) {
    dle_txt = "";
    window.getSelection ? dle_txt = window.getSelection() : document.selection && (dle_txt = document.selection.createRange().text);
    "" != dle_txt && (dle_txt = "[quote=" + a + "]" + dle_txt + "[/quote]")
}
function dle_fastreply(a) {
    if (!document.getElementById("dle-comments-form"))
        return !1;
    var b = document.getElementById("dle-comments-form").comments
      , c = "";
    "0" == dle_wysiwyg || "-1" == dle_wysiwyg ? (b.value = "0" == dle_wysiwyg ? b.value + ("[b]" + a + "[/b],\n") : b.value + (a + ",\n"),
    b.focus()) : (c = "<b>" + a + "</b>,<br />",
    "1" == dle_wysiwyg ? (oUtil.obj.focus(),
    oUtil.obj.insertHTML(c)) : tinyMCE.execCommand("mceInsertContent", !1, c));
    setTimeout(function() {
        $("html,body").stop().animate({
            scrollTop: $("#dle-comments-form").offset().top - 70
        }, 700)
    }, 100);
    return !1
}
function dle_ins(a) {
    if (!document.getElementById("dle-comments-form"))
        return !1;
    var b = document.getElementById("dle-comments-form").comments
      , c = "";
    "" != dle_txt ? ("0" == dle_wysiwyg || "-1" == dle_wysiwyg ? (b.value += dle_txt + "\n",
    b.focus()) : (c = dle_txt + "<br />",
    "1" == dle_wysiwyg ? (oUtil.obj.focus(),
    oUtil.obj.insertHTML(c)) : tinyMCE.execCommand("mceInsertContent", !1, c)),
    setTimeout(function() {
        $("html,body").stop().animate({
            scrollTop: $("#dle-comments-form").offset().top - 70
        }, 700)
    }, 100)) : (ShowLoading(""),
    $.get(dle_root + "engine/ajax/quote.php", {
        id: a
    }, function(a) {
        HideLoading("");
        "0" == dle_wysiwyg || "-1" == dle_wysiwyg ? (b.value += a + "\n",
        b.focus()) : (c = a + "<br />",
        "1" == dle_wysiwyg ? (oUtil.obj.focus(),
        oUtil.obj.insertHTML(c)) : tinyMCE.execCommand("mceInsertContent", !1, c));
        setTimeout(function() {
            $("html,body").stop().animate({
                scrollTop: $("#dle-comments-form").offset().top - 70
            }, 700)
        }, 100)
    }));
    return !1
}
function ShowOrHide(a) {
    var b = $("#" + a);
    a = document.getElementById("image-" + a) ? document.getElementById("image-" + a) : null;
    var c = b.height() / 200 * 1E3;
    3E3 < c && (c = 3E3);
    250 > c && (c = 250);
    "none" == b.css("display") ? (b.show("blind", {}, c),
    a && (a.src = dle_root + "templates/" + dle_skin + "/dleimages/spoiler-minus.gif")) : (2E3 < c && (c = 2E3),
    b.hide("blind", {}, c),
    a && (a.src = dle_root + "templates/" + dle_skin + "/dleimages/spoiler-plus.gif"))
}
function ckeck_uncheck_all() {
    for (var a = document.pmlist, b = 0; b < a.elements.length; b++) {
        var c = a.elements[b];
        "checkbox" == c.type && (c.checked = 1 == a.master_box.checked ? !1 : !0)
    }
    a.master_box.checked = 1 == a.master_box.checked ? !1 : !0
}
function confirmDelete(a) {
    DLEconfirm(dle_del_agree, dle_confirm, function() {
        document.location = a
    })
}
function setNewField(a, b) {
    a != selField && (fombj = b,
    selField = a)
}
function dle_news_delete(a) {
    var b = {};
    b[dle_act_lang[1]] = function() {
        $(this).dialog("close")
    }
    ;
    allow_dle_delete_news && (b[dle_del_msg] = function() {
        $(this).dialog("close");
        var b = {};
        b[dle_act_lang[3]] = function() {
            $(this).dialog("close")
        }
        ;
        b[dle_p_send] = function() {
            if (1 > $("#dle-promt-text").val().length)
                $("#dle-promt-text").addClass("ui-state-error");
            else {
                var b = $("#dle-promt-text").val();
                $(this).dialog("close");
                $("#dlepopup").remove();
                $.post(dle_root + "engine/ajax/message.php", {
                    id: a,
                    text: b
                }, function(b) {
                    "ok" == b ? document.location = dle_root + "index.php?do=deletenews&id=" + a + "&hash=" + dle_login_hash : DLEalert("Send Error", dle_info)
                })
            }
        }
        ;
        $("#dlepopup").remove();
        $("body").append("<div id='dlepopup' class='dle-promt' title='" + dle_notice + "' style='display:none'>" + dle_p_text + "<br /><br /><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:100px; padding: .4em;'></textarea></div>");
        $("#dlepopup").dialog({
            autoOpen: !0,
            width: 500,
            resizable: !1,
            dialogClass: "modalfixed",
            buttons: b
        });
        $(".modalfixed.ui-dialog").css({
            position: "fixed"
        });
        $("#dlepopup").dialog("option", "position", ["0", "0"])
    }
    );
    b[dle_act_lang[0]] = function() {
        $(this).dialog("close");
        document.location = dle_root + "index.php?do=deletenews&id=" + a + "&hash=" + dle_login_hash
    }
    ;
    $("#dlepopup").remove();
    $("body").append("<div id='dlepopup' class='dle-promt' title='" + dle_confirm + "' style='display:none'><div id='dlepopupmessage'>" + dle_del_agree + "</div></div>");
    $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed",
        buttons: b
    });
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    });
    $("#dlepopup").dialog("option", "position", ["0", "0"])
}
function MenuNewsBuild(a, b) {
    var c = [];
    c[0] = "<a onclick=\"ajax_prep_for_edit('" + a + "', '" + b + '\'); return false;" href="#" style=\"display: none; \">' + menu_short + "</a>";
    "" != dle_admin && (c[1] = '<a href="' + dle_root + dle_admin + "?mod=editnews&action=editnews&id=" + a + '" target="_blank">' + menu_full + "</a>");
    allow_dle_delete_news && (c[2] = "<a onclick=\"sendNotice ('" + a + '\'); return false;" href="#">' + dle_notice + "</a>",
    c[3] = "<a onclick=\"dle_news_delete ('" + a + '\'); return false;" href="#">' + dle_del_news + "</a>");
    return c
}
function sendNotice(a) {
    var b = {};
    b[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }
    ;
    b[dle_p_send] = function() {
        if (1 > $("#dle-promt-text").val().length)
            $("#dle-promt-text").addClass("ui-state-error");
        else {
            var b = $("#dle-promt-text").val();
            $(this).dialog("close");
            $("#dlepopup").remove();
            $.post(dle_root + "engine/ajax/message.php", {
                id: a,
                text: b,
                allowdelete: "no"
            }, function(a) {
                "ok" == a && DLEalert(dle_p_send_ok, dle_info)
            })
        }
    }
    ;
    $("#dlepopup").remove();
    $("body").append("<div id='dlepopup' title='" + dle_notice + "' style='display:none'><br />" + dle_p_text + "<br /><br /><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:100px; padding: .4em;'></textarea></div>");
    $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed",
        buttons: b
    });
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    });
    $("#dlepopup").dialog("option", "position", ["0", "0"])
}
function AddComplaint(a, b) {
    var c = {};
    c[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }
    ;
    c[dle_p_send] = function() {
        if (1 > $("#dle-promt-text").val().length)
            $("#dle-promt-text").addClass("ui-state-error");
        else {
            var c = $("#dle-promt-text").val();
            $(this).dialog("close");
            $("#dlepopup").remove();
            $.post(dle_root + "engine/ajax/complaint.php", {
                id: a,
                text: c,
                action: b
            }, function(a) {
                "ok" == a ? DLEalert(dle_p_send_ok, dle_info) : DLEalert(a, dle_info)
            })
        }
    }
    ;
    $("#dlepopup").remove();
    $("body").append("<div id='dlepopup' title='" + dle_complaint + "' style='display:none'><br /><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:100px; padding: .4em;'></textarea></div>");
    $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed",
        buttons: c
    });
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    });
    $("#dlepopup").dialog("option", "position", ["0", "0"])
}
function DLEalert(a, b) {
    $("#dlepopup").remove();
    $("body").append("<div id='dlepopup' class='dle-alert' title='" + b + "' style='display:none'>" + a + "</div>");
    $("#dlepopup").dialog({
        autoOpen: !0,
        width: 470,
        resizable: !1,
        dialogClass: "modalfixed",
        buttons: {
            Ok: function() {
                $(this).dialog("close");
                $("#dlepopup").remove()
            }
        }
    });
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    });
    $("#dlepopup").dialog("option", "position", ["0", "0"])
}
function DLEconfirm(a, b, c) {
    var d = {};
    d[dle_act_lang[1]] = function() {
        $(this).dialog("close");
        $("#dlepopup").remove()
    }
    ;
    d[dle_act_lang[0]] = function() {
        $(this).dialog("close");
        $("#dlepopup").remove();
        c && c()
    }
    ;
    $("#dlepopup").remove();
    $("body").append("<div id='dlepopup' class='dle-confirm' title='" + b + "' style='display:none'>" + a + "</div>");
    $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed",
        buttons: d
    });
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    });
    $("#dlepopup").dialog("option", "position", ["0", "0"])
}
function DLEprompt(a, b, c, d, e) {
    var g = {};
    g[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }
    ;
    g[dle_act_lang[2]] = function() {
        if (!e && 1 > $("#dle-promt-text").val().length)
            $("#dle-promt-text").addClass("ui-state-error");
        else {
            var a = $("#dle-promt-text").val();
            $(this).dialog("close");
            $("#dlepopup").remove();
            d && d(a)
        }
    }
    ;
    $("#dlepopup").remove();
    $("body").append("<div id='dlepopup' class='dle-promt' title='" + c + "' style='display:none'>" + a + "<br /><br /><input type='text' name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%; padding: .4em;' value='" + b + "'/></div>");
    $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed",
        buttons: g
    });
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    });
    $("#dlepopup").dialog("option", "position", ["0", "0"]);
    0 < b.length ? $("#dle-promt-text").select().focus() : $("#dle-promt-text").focus()
}
var dle_user_profile = ""
  , dle_user_profile_link = "";
function ShowPopupProfile(a, b) {
    var c = {};
    c[menu_profile] = function() {
        document.location = dle_user_profile_link
    }
    ;
    5 != dle_group && (c[menu_send] = function() {
        document.location = dle_root + "index.php?do=pm&doaction=newpm&username=" + dle_user_profile
    }
    );
    1 == b && (c[menu_uedit] = function() {
        $(this).dialog("close");
        var a = {};
        $("body").append('<div id="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #666666; opacity: .40;filter:Alpha(Opacity=40); z-index: 999; display:none;"></div>');
        $("#modal-overlay").css({
            filter: "alpha(opacity=40)"
        }).fadeIn("slow");
        $("#dleuserpopup").remove();
        $("body").append("<div id='dleuserpopup' title='" + menu_uedit + "' style='display:none'></div>");
        a[dle_act_lang[3]] = function() {
            $(this).dialog("close");
            $("#dleuserpopup").remove()
        }
        ;
        a[dle_act_lang[5]] = function() {
            window.frames.edituserframe.confirmDelete(dle_login_hash)
        }
        ;
        a[dle_act_lang[4]] = function() {
            document.getElementById("edituserframe").contentWindow.document.getElementById("saveuserform").submit()
        }
        ;
        $("#dleuserpopup").dialog({
            autoOpen: !0,
            show: "fade",
            width: 560,
            resizable: !1,
            dialogClass: "modalfixed",
            buttons: a,
            open: function(a, b) {
                $("#dleuserpopup").html("<iframe name='edituserframe' id='edituserframe' width='100%' height='400' src='" + dle_root + dle_admin + "?mod=editusers&action=edituser&user=" + dle_user_profile + "&skin=" + dle_skin + "' frameborder='0' marginwidth='0' marginheight='0' allowtransparency='true'></iframe>")
            },
            beforeClose: function(a, b) {
                $("#dleuserpopup").html("")
            },
            close: function(a, b) {
                $("#modal-overlay").fadeOut("slow", function() {
                    $("#modal-overlay").remove()
                })
            }
        });
        830 < $(window).width() && 530 < $(window).height() && ($(".modalfixed.ui-dialog").css({
            position: "fixed"
        }),
        $("#dleuserpopup").dialog("option", "position", ["0", "0"]))
    }
    );
    $("#dleprofilepopup").remove();
    $("body").append(a);
    $("#dleprofilepopup").dialog({
        autoOpen: !0,
        show: "fade",
        hide: "fade",
        resizable: !1,
        buttons: c,
        width: 500
    });
    return !1
}
function ShowProfile(a, b, c) {
    if (dle_user_profile == a && document.getElementById("dleprofilepopup"))
        return $("#dleprofilepopup").dialog("open"),
        !1;
    dle_user_profile = a;
    dle_user_profile_link = b;
    ShowLoading("");
    $.get(dle_root + "engine/ajax/profile.php", {
        name: a,
        skin: dle_skin
    }, function(a) {
        HideLoading("");
        ShowPopupProfile(a, c)
    });
    return !1
}
function FastSearch() {
    $("#story").attr("autocomplete", "off");
    $("#story").blur(function() {
        $("#searchsuggestions").fadeOut()
    });
    $("#story").keyup(function() {
        var a = $(this).val();
        0 == a.length ? $("#searchsuggestions").fadeOut() : dle_search_value != a && 3 < a.length && (clearInterval(dle_search_delay),
        dle_search_delay = setInterval(function() {
            dle_do_search(a)
        }, 600))
    })
}
function dle_do_search(a) {
    clearInterval(dle_search_delay);
    $("#searchsuggestions").remove();
    $("body").append("<div id='searchsuggestions' style='display:none'></div>");
    $.post(dle_root + "engine/ajax/search.php", {
        query: "" + a + ""
    }, function(a) {
        $("#searchsuggestions").html(a).fadeIn().css({
            position: "absolute",
            top: 0,
            left: 0
        }).position({
            my: "left top",
            at: "left bottom",
            of: "#story",
            collision: "fit flip"
        })
    });
    dle_search_value = a
}
function ShowLoading(a) {
    $("#loading-layer").remove();
    $("body").append("<div id='loading-layer' style='display:none'></div>");
    a ? $("#loading-layer").html(a) : $("#loading-layer").html(dle_act_lang[6]);
    a = ($(window).width() - $("#loading-layer").width()) / 2;
    var b = ($(window).height() - $("#loading-layer").height()) / 2;
    $("#loading-layer").css({
        left: a + "px",
        top: b + "px",
        position: "fixed",
        zIndex: "99"
    });
    $("#loading-layer").fadeTo("slow", .6)
}
function HideLoading(a) {
    $("#loading-layer").fadeOut("slow", function() {
        $("#loading-layer").remove()
    })
}
function ShowAllVotes() {
    if (document.getElementById("dlevotespopup"))
        return $("#dlevotespopup").dialog("open"),
        !1;
    $.ajaxSetup({
        cache: !1
    });
    ShowLoading("");
    $.get(dle_root + "engine/ajax/allvotes.php?dle_skin=" + dle_skin, function(a) {
        HideLoading("");
        $("#dlevotespopup").remove();
        $("body").append(a);
        $(".dlevotebutton").button();
        $("#dlevotespopup").dialog({
            autoOpen: !0,
            show: "fade",
            hide: "fade",
            resizable: !1,
            width: 600,
            height: 150
        });
        400 < $("#dlevotespopupcontent").height() && $("#dlevotespopupcontent").height(400);
        $("#dlevotespopup").dialog("option", "height", $("#dlevotespopupcontent").height() + 60);
        $("#dlevotespopup").dialog("option", "position", "center")
    });
    return !1
}
function fast_vote(a) {
    var b = $("#vote_" + a + " input:radio[name=vote_check]:checked").val();
    ShowLoading("");
    $.get(dle_root + "engine/ajax/vote.php", {
        vote_id: a,
        vote_action: "vote",
        vote_mode: "fast_vote",
        vote_check: b,
        vote_skin: dle_skin
    }, function(b) {
        HideLoading("");
        $("#dle-vote_list-" + a).fadeOut(500, function() {
            $(this).html(b);
            $(this).fadeIn(500)
        })
    });
    return !1
}
function AddIgnorePM(a, b) {
    DLEconfirm(b, dle_confirm, function() {
        ShowLoading("");
        $.get(dle_root + "engine/ajax/pm.php", {
            id: a,
            action: "add_ignore",
            skin: dle_skin
        }, function(a) {
            HideLoading("");
            DLEalert(a, dle_info);
            return !1
        })
    })
}
function DelIgnorePM(a, b) {
    DLEconfirm(b, dle_confirm, function() {
        ShowLoading("");
        $.get(dle_root + "engine/ajax/pm.php", {
            id: a,
            action: "del_ignore",
            skin: dle_skin
        }, function(b) {
            HideLoading("");
            $("#dle-ignore-list-" + a).html("");
            DLEalert(b, dle_info);
            return !1
        })
    })
}
function media_upload(a, b, c, d) {
    var e = (new Date).getTime()
      , g = "none";
    $("#mediaupload").remove();
    $("body").append("<div id='mediaupload' title='" + text_upload + "' style='display:none'></div>");
    $("#mediaupload").dialog({
        autoOpen: !0,
        width: 710,
        resizable: !1,
        dialogClass: "modalfixed",
        open: function(f, g) {
            $("#mediaupload").html("<iframe name='mediauploadframe' id='mediauploadframe' width='100%' height='550' src='" + dle_root + "engine/ajax/upload.php?area=" + a + "&author=" + b + "&news_id=" + c + "&wysiwyg=" + d + "&skin=" + dle_skin + "&rndval=" + e + "' frameborder='0' marginwidth='0' marginheight='0' allowtransparency='true'></iframe>");
            $(".ui-dialog").draggable("option", "containment", "")
        },
        dragStart: function(a, b) {
            g = $(".modalfixed").css("box-shadow");
            $(".modalfixed").fadeTo(0, .6).css("box-shadow", "none");
            $("#mediaupload").css("visibility", "hidden")
        },
        dragStop: function(a, b) {
            $(".modalfixed").fadeTo(0, 1).css("box-shadow", g);
            $("#mediaupload").css("visibility", "visible")
        },
        beforeClose: function(a, b) {
            $("#mediaupload").html("")
        }
    });
    830 < $(window).width() && 530 < $(window).height() && ($(".modalfixed.ui-dialog").css({
        position: "fixed"
    }),
    $("#mediaupload").dialog("option", "position", ["0", "0"]));
    return !1
}
function dropdownmenu(a, b, c, d) {
    window.event ? event.cancelBubble = !0 : b.stopPropagation && b.stopPropagation();
    b = $("#dropmenudiv");
    if (b.is(":visible"))
        return clearhidemenu(),
        b.fadeOut("fast"),
        !1;
    b.remove();
    $("body").append('<div id="dropmenudiv" style="display:none;position:absolute;z-index:100;width:165px;"></div>');
    b = $("#dropmenudiv");
    b.html(c.join(""));
    d && b.width(d);
    c = $(document).width() - 30;
    d = $(a).offset();
    c - d.left < b.width() && (d.left -= b.width() - $(a).width());
    b.css({
        left: d.left + "px",
        top: d.top + $(a).height() + "px"
    });
    b.fadeTo("fast", .9);
    b.mouseenter(function() {
        clearhidemenu()
    }).mouseleave(function() {
        delayhidemenu()
    });
    $(document).one("click", function() {
        hidemenu()
    });
    return !1
}
function hidemenu(a) {
    $("#dropmenudiv").fadeOut("fast")
}
function delayhidemenu() {
    delayhide = setTimeout("hidemenu()", 1E3)
}
function clearhidemenu() {
    "undefined" != typeof delayhide && clearTimeout(delayhide)
}
jQuery(function(a) {
    a(document).keydown(function(b) {
        if (13 == b.which && b.ctrlKey) {
            if (window.getSelection)
                var c = window.getSelection();
            else
                document.getSelection ? c = document.getSelection() : document.selection && (c = document.selection.createRange().text);
            if ("" == c)
                return !1;
            if (255 < c.toString().length)
                return DLEalert(dle_big_text, dle_info),
                !1;
            b = {};
            b[dle_act_lang[3]] = function() {
                a(this).dialog("close")
            }
            ;
            b[dle_p_send] = function() {
                if (1 > a("#dle-promt-text").val().length)
                    a("#dle-promt-text").addClass("ui-state-error");
                else {
                    var b = a("#dle-promt-text").val()
                      , c = a("#orfom").text();
                    a(this).dialog("close");
                    a("#dlepopup").remove();
                    a.post(dle_root + "engine/ajax/complaint.php", {
                        seltext: c,
                        text: b,
                        action: "orfo",
                        url: window.location.href
                    }, function(a) {
                        "ok" == a ? DLEalert(dle_p_send_ok, dle_info) : DLEalert(a, dle_info)
                    })
                }
            }
            ;
            a("#dlepopup").remove();
            a("body").append("<div id='dlepopup' class='dle-promt' title='" + dle_orfo_title + "' style='display:none'><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:80px; padding: .4em;'></textarea><div id='orfom' style='display:none'>" + c + "</div></div>");
            a("#dlepopup").dialog({
                autoOpen: !0,
                width: 600,
                resizable: !1,
                dialogClass: "modalfixed",
                buttons: b
            });
            a(".modalfixed.ui-dialog").css({
                position: "fixed"
            });
            a("#dlepopup").dialog("option", "position", ["0", "0"])
        }
    })
});
function doFriends(friend, event, type, fr_hash) {
    if (event == "delete") {
        var b = {};
        b['Отмена'] = function() {
            $(this).dialog('close');
        }
        ;
        b['Удалить из друзей'] = function() {
            ShowLoading('');
            var td_is_here = this;
            $.get(dle_root + "engine/ajax/friends.php", {
                friend_id: friend,
                action: event,
                skin: dle_skin,
                type: type,
                hash: dle_login_hash,
                fr_hash: fr_hash
            }, function(data) {
                HideLoading('');
                if (type == "list") {
                    $("#friend-list-" + friend).html(data);
                } else if (type == "pop") {
                    $("#dofriend-" + friend).replaceWith(data);
                } else {
                    $("#dofriend").replaceWith(data);
                }
                $(td_is_here).dialog('close');
                $('#dlepopup').remove();
            });
        }
        ;
        $('#dlepopup').remove();
        $('body').append("<div id='dlepopup' title='Удалить пользователя из списка друзей?' style='display:none'><br />Вы действительно хотите удалить пользователя из списка друзей?<br /><br /></div>");
        $('#dlepopup').dialog({
            autoOpen: true,
            width: 400,
            buttons: b
        });
    } else {
        ShowLoading('');
        $.get(dle_root + "engine/ajax/friends.php", {
            friend_id: friend,
            action: event,
            skin: dle_skin,
            type: type,
            hash: dle_login_hash,
            fr_hash: fr_hash
        }, function(data) {
            HideLoading('');
            if (data && data.substr(0, 8) == "fr_error") {
                ShowSomeError(data.substr(8), 4000);
            } else {
                if (event == "activate" || event == "delete_req") {
                    $("#friend-list-" + friend).html(data);
                } else if (type == "pop") {
                    $("#dofriend-" + friend).replaceWith(data);
                } else if (type == "list") {
                    $("#friend-list-" + friend).html(data);
                } else {
                    $("#dofriend").replaceWith(data);
                }
            }
        });
    }
}
;function ShowPopupRepa(r) {
    $("#popup_repa").remove();
    $("body").append(r);
    $('#popup_repa').dialog({
        autoOpen: true,
        show: 'fade',
        hide: 'fade',
        width: 520
    });
    return false;
}
;function repa_global(action, dorepa, user_id, post_id, repa_hash) {
    ShowLoading('');
    var description = '';
    if (action == 'plus' || action == 'minus') {
        description = $("#dleeditcomments" + user_id).val();
    }
    $.post(dle_root + "engine/ajax/repa.php", {
        action: action,
        user_id: user_id,
        dorepa: dorepa,
        post_id: post_id,
        act: "0",
        skin: dle_skin,
        description: description,
        repa_hash: repa_hash
    }, function(data) {
        HideLoading('');
        $('#repa-' + user_id + '-' + post_id).html(data);
        ShowPopupRepa(data);
    });
}
;function ShowOrHide_simple(id) {
    var item = $("#" + id);
    if (item.css("display") == "none") {
        document.getElementById(id).style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'none';
    }
}
;function close_top_notice(id, is_go_link) {
    the_ya_goal("close-top-notice");
    if (is_go_link != 'yes') {
        $(".notice_top2").fadeOut(400);
        $(".notice_additional_id").fadeOut(400);
    }
    if (typeof (dle_group) != "undefined") {
        if (dle_group == 5) {
            Cookies.set('jcon[nclid]', id, {
                expires: 365,
                domain: this_cookie_domain
            });
        } else {
            $.post(dle_root + "engine/ajax/site_notice.php", {
                action: "close",
                notice_id: id,
                the_login_hash: the_login_hash
            }, function(data) {
                if (is_go_link == 'yes') {
                    document.location = data;
                }
            });
        }
    }
}
;var notice_is_showen = "no";
var notice_was_showen = "no";
function show_top_notice(id) {
    if (notice_is_showen == "no") {
        notice_is_showen = "yes";
        $(".notice_arrow").attr('title', 'Скрыть прошлые уведомления');
        if (notice_was_showen == 'no') {
            the_ya_goal("show-top-notice");
            notice_was_showen = "yes";
            ShowLoading('');
            $.post(dle_root + "engine/ajax/site_notice.php", {
                action: "show",
                notice_id: id
            }, function(data) {
                HideLoading('');
                $(".notice_additional_id").html(data);
                if (typeof (is_touch_event_here) == "undefined") {
                    $(".notice_additional_id").mCustomScrollbar({
                        theme: "my-scroll",
                    });
                }
                $(".notice_additional_id").show(400, function() {});
            });
        } else {
            $(".notice_additional_id").show(400, function() {});
        }
    } else {
        notice_is_showen = "no";
        $(".notice_arrow").attr('title', 'Показать прошлые уведомления');
        $(".notice_additional_id").hide(400, function() {});
    }
}
function ShowSomeError(error, time) {
    $("#erroring-layer").remove();
    $("body").append("<div id='erroring-layer' style='display:none'></div>");
    $("#erroring-layer").html(error);
    var a = ($(window).width() - $("#erroring-layer").width()) / 2;
    var b = ($(window).height() - $("#erroring-layer").height()) / 2;
    $("#erroring-layer").css({
        left: a + "px",
        top: b + "px",
        position: "fixed",
        zIndex: "101"
    });
    $("#erroring-layer").fadeTo("slow", .6);
    setTimeout(function() {
        $("#erroring-layer").fadeOut("slow", function() {
            $("#erroring-layer").remove()
        });
    }, time);
}
function ShowSomeSuccess(success, time) {
    $("#successing-layer").remove();
    $("body").append("<div id='successing-layer' style='display:none'></div>");
    $("#successing-layer").html(success);
    var a = ($(window).width() - $("#successing-layer").width()) / 2;
    var b = ($(window).height() - $("#successing-layer").height()) / 2;
    $("#successing-layer").css({
        left: a + "px",
        top: b + "px",
        position: "fixed",
        zIndex: "100"
    });
    $("#successing-layer").fadeTo("slow", .6);
    setTimeout(function() {
        $("#successing-layer").fadeOut("slow", function() {
            $("#successing-layer").remove()
        });
    }, time);
}
function ShowOrHide_time(id, max_time) {
    var item = $("#" + id);
    if (document.getElementById('image-' + id)) {
        var image = document.getElementById('image-' + id);
    } else {
        var image = null;
    }
    var scrolltime = (item.height() / 200) * 1000;
    if (scrolltime > max_time) {
        scrolltime = max_time;
    }
    if (scrolltime < 250) {
        scrolltime = 250;
    }
    if (item.css("display") == "none") {
        item.show('blind', {}, scrolltime);
        if (image) {
            image.src = dle_root + 'templates/' + dle_skin + '/dleimages/spoiler-minus.gif';
        }
    } else {
        if (scrolltime > 2000) {
            scrolltime = 2000;
        }
        item.hide('blind', {}, scrolltime);
        if (image) {
            image.src = dle_root + 'templates/' + dle_skin + '/dleimages/spoiler-plus.gif';
        }
    }
}
;function edit_user_this(dle_user_profile) {
    var b1 = {};
    $('body').append('<div id="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #666666; opacity: .40;filter:Alpha(Opacity=40); z-index: 999; display:none;"></div>');
    $('#modal-overlay').css({
        'filter': 'alpha(opacity=40)'
    }).fadeIn('slow');
    $("#dleuserpopup").remove();
    $("body").append("<div id='dleuserpopup' title='" + menu_uedit + "' style='display:none'></div>");
    b1[dle_act_lang[3]] = function() {
        $(this).dialog("close");
        $("#dleuserpopup").remove();
    }
    ;
    b1[dle_act_lang[5]] = function() {
        window.frames.edituserframe.confirmDelete(dle_login_hash);
    }
    ;
    b1[dle_act_lang[4]] = function() {
        document.getElementById('edituserframe').contentWindow.document.getElementById('saveuserform').submit();
    }
    ;
    $('#dleuserpopup').dialog({
        autoOpen: true,
        show: 'fade',
        width: 560,
        resizable: false,
        dialogClass: "modalfixed",
        buttons: b1,
        open: function(event, ui) {
            $("#dleuserpopup").html("<iframe name='edituserframe' id='edituserframe' width='100%' height='400' src='" + dle_root + dle_admin + "?mod=editusers&action=edituser&user=" + dle_user_profile + "&skin=" + dle_skin + "' frameborder='0' marginwidth='0' marginheight='0' allowtransparency='true'></iframe>");
        },
        beforeClose: function(event, ui) {
            $("#dleuserpopup").html("");
        },
        close: function(event, ui) {
            $('#modal-overlay').fadeOut('slow', function() {
                $('#modal-overlay').remove();
            });
        }
    });
    if ($(window).width() > 830 && $(window).height() > 530) {
        $('.modalfixed.ui-dialog').css({
            position: "fixed"
        });
        $('#dleuserpopup').dialog("option", "position", ['0', '0']);
    }
}
;function show_prof_stat_info(type) {
    var b1 = {};
    $('body').append('<div id="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #666666; opacity: .40;filter:Alpha(Opacity=40); z-index: 999; display:none;"></div>');
    $('#modal-overlay').css({
        'filter': 'alpha(opacity=40)'
    }).fadeIn('slow');
    $("#dleuserpopup").remove();
    $("body").append("<div id='dleuserpopup' title='Информация' style='display:none'></div>");
    b1[dle_act_lang[3]] = function() {
        $(this).dialog("close");
        $("#dleuserpopup").remove();
    }
    ;
    $('#dleuserpopup').dialog({
        autoOpen: true,
        show: 'fade',
        width: 560,
        resizable: false,
        dialogClass: "modalfixed",
        buttons: b1,
        open: function(event, ui) {
            $("#dleuserpopup").html("<iframe name='edituserframe' id='edituserframe' width='100%' height='400' src='" + dle_root + "engine/ajax/show_prof_stat_info.php?type=" + type + "' frameborder='0' marginwidth='0' marginheight='0' allowtransparency='true'></iframe>");
        },
        beforeClose: function(event, ui) {
            $("#dleuserpopup").html("");
        },
        close: function(event, ui) {
            $('#modal-overlay').fadeOut('slow', function() {
                $('#modal-overlay').remove();
            });
        }
    });
    if ($(window).width() > 830 && $(window).height() > 530) {
        $('.modalfixed.ui-dialog').css({
            position: "fixed"
        });
        $('#dleuserpopup').dialog("option", "position", ['0', '0']);
    }
}
;;function ucfirst_php(str) {
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1, str.length - 1);
}
function preload_images_array(the_images) {
    var preload_images = [];
    for (var i = 0; i < the_images.length; i++) {
        preload_images[i] = new Image();
        preload_images[i].src = the_images[i];
    }
}
function replace_no_lt_js(str) {
    str = str.replace(/</gi, '');
    str = str.replace(/>/gi, '');
    str = str.replace(/javascript/gi, '');
    str = str.replace(/&/gi, '');
    return str;
}
function round_php(number, decimals) {
    decimals = parseInt(decimals, 10);
    var dec = Math.pow(10, decimals);
    number = "" + Math.round(parseFloat(number) * dec + .0000000000001);
    return parseFloat(number.slice(0, -1 * decimals) + "." + number.slice(-1 * decimals));
}
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(global) : typeof define === 'function' && define.amd ? define(factory) : factory(global)
}((typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this), function(global) {
    'use strict';
    var _Base64 = global.Base64;
    var version = "2.4.9";
    var buffer;
    if (typeof module !== 'undefined' && module.exports) {
        try {
            buffer = eval("require('buffer').Buffer");
        } catch (err) {
            buffer = undefined;
        }
    }
    var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++)
            t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6)) + fromCharCode(0x80 | (cc & 0x3f))) : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) + fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) + fromCharCode(0x80 | (cc & 0x3f)));
        } else {
            var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07)) + fromCharCode(0x80 | ((cc >>> 12) & 0x3f)) + fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) + fromCharCode(0x80 | (cc & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3]
          , ord = ccc.charCodeAt(0) << 16 | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8) | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0))
          , chars = [b64chars.charAt(ord >>> 18), b64chars.charAt((ord >>> 12) & 63), padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    }
    : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    }
    ;
    var _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(u) {
        return (u.constructor === buffer.constructor ? u : buffer.from(u)).toString('base64')
    }
    : function(u) {
        return (u.constructor === buffer.constructor ? u : new buffer(u)).toString('base64')
    }
    : function(u) {
        return btoa(utob(u))
    }
    ;
    var encode = function(u, urisafe) {
        return !urisafe ? _encode(String(u)) : _encode(String(u)).replace(/[+\/]/g, function(m0) {
            return m0 == '+' ? '-' : '_';
        }).replace(/=/g, '');
    };
    var encodeURI = function(u) {
        return encode(u, true)
    };
    var re_btou = new RegExp(['[\xC0-\xDF][\x80-\xBF]', '[\xE0-\xEF][\x80-\xBF]{2}', '[\xF0-\xF7][\x80-\xBF]{3}'].join('|'),'g');
    var cb_btou = function(cccc) {
        switch (cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18) | ((0x3f & cccc.charCodeAt(1)) << 12) | ((0x3f & cccc.charCodeAt(2)) << 6) | (0x3f & cccc.charCodeAt(3))
              , offset = cp - 0x10000;
            return (fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(((0x0f & cccc.charCodeAt(0)) << 12) | ((0x3f & cccc.charCodeAt(1)) << 6) | (0x3f & cccc.charCodeAt(2)));
        default:
            return fromCharCode(((0x1f & cccc.charCodeAt(0)) << 6) | (0x3f & cccc.charCodeAt(1)));
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length
          , padlen = len % 4
          , n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0)
          , chars = [fromCharCode(n >>> 16), fromCharCode((n >>> 8) & 0xff), fromCharCode(n & 0xff)];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var atob = global.atob ? function(a) {
        return global.atob(a);
    }
    : function(a) {
        return a.replace(/[\s\S]{1,4}/g, cb_decode);
    }
    ;
    var _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(a) {
        return (a.constructor === buffer.constructor ? a : buffer.from(a, 'base64')).toString();
    }
    : function(a) {
        return (a.constructor === buffer.constructor ? a : new buffer(a,'base64')).toString();
    }
    : function(a) {
        return btou(atob(a))
    }
    ;
    var decode = function(a) {
        return _decode(String(a).replace(/[-_]/g, function(m0) {
            return m0 == '-' ? '+' : '/'
        }).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    };
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v) {
            return {
                value: v,
                enumerable: false,
                writable: true,
                configurable: true
            };
        };
        global.Base64.extendString = function() {
            Object.defineProperty(String.prototype, 'fromBase64', noEnum(function() {
                return decode(this)
            }));
            Object.defineProperty(String.prototype, 'toBase64', noEnum(function(urisafe) {
                return encode(this, urisafe)
            }));
            Object.defineProperty(String.prototype, 'toBase64URI', noEnum(function() {
                return encode(this, true)
            }));
        }
        ;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.Base64 = global.Base64;
    } else if (typeof define === 'function' && define.amd) {
        define([], function() {
            return global.Base64
        });
    }
    return {
        Base64: global.Base64
    }
}));
