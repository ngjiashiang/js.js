import Ve, { useState as z, useEffect as dr } from "react";
var fe = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function vr() {
  if (Ie) return M;
  Ie = 1;
  var T = Ve, j = Symbol.for("react.element"), V = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, A = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(w, l, P) {
    var v, m = {}, E = null, k = null;
    P !== void 0 && (E = "" + P), l.key !== void 0 && (E = "" + l.key), l.ref !== void 0 && (k = l.ref);
    for (v in l) O.call(l, v) && !C.hasOwnProperty(v) && (m[v] = l[v]);
    if (w && w.defaultProps) for (v in l = w.defaultProps, l) m[v] === void 0 && (m[v] = l[v]);
    return { $$typeof: j, type: w, key: E, ref: k, props: m, _owner: A.current };
  }
  return M.Fragment = V, M.jsx = x, M.jsxs = x, M;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function pr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var T = Ve, j = Symbol.for("react.element"), V = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), w = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), B = Symbol.iterator, X = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[X];
      return typeof r == "function" ? r : null;
    }
    var S = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Z("error", e, t);
      }
    }
    function Z(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Q = !1, ee = !1, i = !1, R = !1, h = !1, p;
    p = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === O || e === C || h || e === A || e === P || e === v || R || e === k || Q || ee || i || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === m || e.$$typeof === x || e.$$typeof === w || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === p || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case O:
          return "Fragment";
        case V:
          return "Portal";
        case C:
          return "Profiler";
        case A:
          return "StrictMode";
        case P:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return de(r) + ".Consumer";
          case x:
            var t = e;
            return de(t._context) + ".Provider";
          case l:
            return $e(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : _(e.type) || "Memo";
          case E: {
            var s = e, u = s._payload, o = s._init;
            try {
              return _(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, $ = 0, ve, pe, he, ye, ge, me, be;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ye() {
      {
        if ($ === 0) {
          ve = console.log, pe = console.info, he = console.warn, ye = console.error, ge = console.group, me = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function Le() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: ve
            }),
            info: F({}, e, {
              value: pe
            }),
            warn: F({}, e, {
              value: he
            }),
            error: F({}, e, {
              value: ye
            }),
            group: F({}, e, {
              value: ge
            }),
            groupCollapsed: F({}, e, {
              value: me
            }),
            groupEnd: F({}, e, {
              value: be
            })
          });
        }
        $ < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = S.ReactCurrentDispatcher, ne;
    function J(e, r, t) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            ne = n && n[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ae = !1, q;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Me();
    }
    function Re(e, r) {
      if (!e || ae)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ae = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = te.current, te.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (g) {
              n = g;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), y = n.stack.split(`
`), c = a.length - 1, f = y.length - 1; c >= 1 && f >= 0 && a[c] !== y[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== y[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== y[f]) {
                    var b = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, b), b;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        ae = !1, te.current = u, Le(), Error.prepareStackTrace = s;
      }
      var W = e ? e.displayName || e.name : "", D = W ? J(W) : "";
      return typeof e == "function" && q.set(e, D), D;
    }
    function Ue(e, r, t) {
      return Re(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Ne(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case P:
          return J("Suspense");
        case v:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ue(e.render);
          case m:
            return K(e.type, r, t);
          case E: {
            var n = e, s = n._payload, u = n._init;
            try {
              return K(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, _e = {}, Te = S.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, s) {
      {
        var u = Function.call.bind(Y);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (G(s), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), G(null)), a instanceof Error && !(a.message in _e) && (_e[a.message] = !0, G(s), d("Failed %s type: %s", t, a.message), G(null));
          }
      }
    }
    var Je = Array.isArray;
    function oe(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function Se(e) {
      if (Ke(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), we(e);
    }
    var L = S.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Ce, ie;
    ie = {};
    function ze(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = _(L.current.type);
        ie[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(L.current.type), e.ref), ie[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, s, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: j,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, s) {
      {
        var u, o = {}, a = null, y = null;
        t !== void 0 && (Se(t), a = "" + t), Xe(r) && (Se(r.key), a = "" + r.key), ze(r) && (y = r.ref, He(r, s));
        for (u in r)
          Y.call(r, u) && !Ge.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            o[u] === void 0 && (o[u] = c[u]);
        }
        if (a || y) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, f), y && Qe(o, f);
        }
        return er(e, a, y, s, n, L.current, o);
      }
    }
    var se = S.ReactCurrentOwner, Pe = S.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    function je() {
      {
        if (se.current) {
          var e = _(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var xe = {};
    function nr(e) {
      {
        var r = je();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== se.current && (n = " It was passed a child from " + _(e._owner.type) + "."), I(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            le(n) && ke(n, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = H(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              le(o.value) && ke(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = _(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ue) {
          ue = !0;
          var s = _(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var De = {};
    function Ae(e, r, t, n, s, u) {
      {
        var o = re(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = tr();
          y ? a += y : a += je();
          var c;
          e === null ? c = "null" : oe(e) ? c = "array" : e !== void 0 && e.$$typeof === j ? (c = "<" + (_(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = rr(e, r, t, s, u);
        if (f == null)
          return f;
        if (o) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (oe(b)) {
                for (var W = 0; W < b.length; W++)
                  Fe(b[W], e);
                Object.freeze && Object.freeze(b);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(b, e);
        }
        if (Y.call(r, "key")) {
          var D = _(e), g = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), ce = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[D + ce]) {
            var cr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, D, cr, D), De[D + ce] = !0;
          }
        }
        return e === O ? or(f) : ar(f), f;
      }
    }
    function ir(e, r, t) {
      return Ae(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ae(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    U.Fragment = O, U.jsx = ur, U.jsxs = lr;
  }()), U;
}
process.env.NODE_ENV === "production" ? fe.exports = vr() : fe.exports = pr();
var N = fe.exports;
const yr = ({
  fields: T,
  onSubmit: j,
  submitButton: V = !1,
  submitButtonText: O = "Submit",
  submitButtonClassName: A = "",
  formSubmitLoading: C = !1,
  errorMessageClassName: x = "",
  submitLoadingButtonClassName: w = ""
}) => {
  const [l, P] = z({}), [v, m] = z({}), [E, k] = z({}), [B, X] = z(!1), H = async () => {
    const i = T.map(async (h) => {
      try {
        return await h.validation(l[h.name]), null;
      } catch (p) {
        return p.message;
      }
    }), R = await Promise.all(i);
    X(R.every((h) => h === null));
  };
  dr(() => {
    H();
  }, [T, l]);
  const S = async (i, R) => {
    const h = T.find((p) => p.name === i);
    if (h)
      try {
        await h.validation(R[i]), m((p) => ({
          ...p,
          [i]: ""
        }));
      } catch (p) {
        m((re) => ({
          ...re,
          [i]: (p == null ? void 0 : p.message) || "Validation failed"
        }));
      }
  }, d = async (i) => {
    k({
      ...E,
      [i.target.name]: !0
    });
    const R = {
      ...l,
      [i.target.name]: i.target.value
    };
    P(R), await S(i.target.name, R);
  }, Z = async (i) => {
    k({
      ...E,
      [i.target.name]: !0
    }), await S(i.target.name, l);
  }, Q = () => {
    ee();
  }, ee = async () => {
    const i = {};
    let R = !1;
    for (const h of T)
      try {
        await h.validation(l[h.name]);
      } catch (p) {
        i[h.name] = (p == null ? void 0 : p.message) || "Validation failed", R = !0;
      }
    if (R)
      m(i);
    else
      try {
        await j(l);
      } catch (h) {
        console.error("Submit error:", h);
      }
  };
  return /* @__PURE__ */ N.jsxs("div", { children: [
    T.map((i) => /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx(
        "input",
        {
          type: i.type || "text",
          name: i.name,
          className: i.className,
          style: i.style || {},
          onChange: d,
          onBlur: Z,
          value: l[i.name] || "",
          placeholder: i.placeholder || ""
        }
      ),
      E[i.name] && v[i.name] && /* @__PURE__ */ N.jsx("div", { className: x, children: v[i.name] })
    ] }, i.name)),
    V && /* @__PURE__ */ N.jsx(
      "button",
      {
        onClick: Q,
        className: C ? w : A,
        disabled: !B || C,
        children: C ? O : "Loading..."
      }
    )
  ] });
};
export {
  yr as FieldBuilderWithValidation
};
//# sourceMappingURL=index.es.js.map
