(() => {
    var __webpack_modules__ = {
        363: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                A: () => __WEBPACK_DEFAULT_EXPORT__
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
            var _functions_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(212);
            function _typeof(o) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                    return typeof o;
                } : function(o) {
                    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
                }, _typeof(o);
            }
            function ownKeys(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    r && (o = o.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable;
                    }))), t.push.apply(t, o);
                }
                return t;
            }
            function _objectSpread(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? ownKeys(Object(t), !0).forEach((function(r) {
                        _defineProperty(e, r, t[r]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                    }));
                }
                return e;
            }
            function _defineProperty(e, r, t) {
                return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t, e;
            }
            function _toPropertyKey(t) {
                var i = _toPrimitive(t, "string");
                return "symbol" == _typeof(i) ? i : i + "";
            }
            function _toPrimitive(t, r) {
                if ("object" != _typeof(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var i = e.call(t, r || "default");
                    if ("object" != _typeof(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === r ? String : Number)(t);
            }
            function _slicedToArray(r, e) {
                return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
            }
            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function _unsupportedIterableToArray(r, a) {
                if (r) {
                    if ("string" == typeof r) return _arrayLikeToArray(r, a);
                    var t = {}.toString.call(r).slice(8, -1);
                    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
                }
            }
            function _arrayLikeToArray(r, a) {
                (null == a || a > r.length) && (a = r.length);
                for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
                return n;
            }
            function _iterableToArrayLimit(r, l) {
                var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                if (null != t) {
                    var e, n, i, u, a = [], f = !0, o = !1;
                    try {
                        if (i = (t = t.call(r)).next, 0 === l) {
                            if (Object(t) !== t) return;
                            f = !1;
                        } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                    } catch (r) {
                        o = !0, n = r;
                    } finally {
                        try {
                            if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                        } finally {
                            if (o) throw n;
                        }
                    }
                    return a;
                }
            }
            function _arrayWithHoles(r) {
                if (Array.isArray(r)) return r;
            }
            var NumberInput = function NumberInput(_ref) {
                var className = _ref.className, initValue = _ref.initValue, username = _ref.username, token = _ref.token, setToken = _ref.setToken, updateBalance = _ref.updateBalance, orders = _ref.orders, today = _ref.today;
                var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(initValue), _useState2 = _slicedToArray(_useState, 2), value = _useState2[0], setValue = _useState2[1];
                var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value), _useState4 = _slicedToArray(_useState3, 2), inputValue = _useState4[0], setInputValue = _useState4[1];
                var inputRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
                var _useFetch = (0, _functions_useFetch__WEBPACK_IMPORTED_MODULE_1__.A)(token, setToken), fetchData = _useFetch.fetchData;
                (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function() {
                    fetchData("/balance", "PUT", {
                        body: {
                            new_balance: value,
                            username
                        }
                    });
                    updateBalance(orders.map((function(order) {
                        if (today === order.date) if (username === order.user.username) return _objectSpread(_objectSpread({}, order), {}, {
                            user: _objectSpread(_objectSpread({}, order.user), {}, {
                                balance: value
                            })
                        });
                        return order;
                    })));
                }), [ value ]);
                (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function() {
                    setValue(initValue);
                    setInputValue(initValue);
                }), [ initValue ]);
                var handleInputChange = function handleInputChange(e) {
                    setInputValue(e.target.value);
                };
                var handleKeyPress = function handleKeyPress(e) {
                    if (e.key === "Enter") {
                        inputRef.current.blur();
                        if (inputValue.trim() === "") setInputValue(value); else try {
                            var calculatedValue = eval(inputValue.replace(",", "."));
                            setValue(calculatedValue.toFixed(2).toString());
                            setInputValue(calculatedValue.toFixed(2).toString());
                        } catch (error) {
                            console.error("Invalid expression");
                        }
                    }
                };
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                    className: "".concat(className, "__input input ").concat(value < 0 ? "negative-value" : ""),
                    type: "text",
                    value: inputValue,
                    onChange: handleInputChange,
                    onKeyDown: handleKeyPress,
                    ref: inputRef
                });
            };
            const __WEBPACK_DEFAULT_EXPORT__ = NumberInput;
        },
        212: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                A: () => __WEBPACK_DEFAULT_EXPORT__
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
            function _slicedToArray(r, e) {
                return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
            }
            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function _unsupportedIterableToArray(r, a) {
                if (r) {
                    if ("string" == typeof r) return _arrayLikeToArray(r, a);
                    var t = {}.toString.call(r).slice(8, -1);
                    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
                }
            }
            function _arrayLikeToArray(r, a) {
                (null == a || a > r.length) && (a = r.length);
                for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
                return n;
            }
            function _iterableToArrayLimit(r, l) {
                var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                if (null != t) {
                    var e, n, i, u, a = [], f = !0, o = !1;
                    try {
                        if (i = (t = t.call(r)).next, 0 === l) {
                            if (Object(t) !== t) return;
                            f = !1;
                        } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                    } catch (r) {
                        o = !0, n = r;
                    } finally {
                        try {
                            if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                        } finally {
                            if (o) throw n;
                        }
                    }
                    return a;
                }
            }
            function _arrayWithHoles(r) {
                if (Array.isArray(r)) return r;
            }
            var useFetch = function useFetch() {
                var token = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var setToken = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), _useState2 = _slicedToArray(_useState, 2), data = _useState2[0], setData = _useState2[1];
                var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), _useState4 = _slicedToArray(_useState3, 2), isPending = _useState4[0], setIsPending = _useState4[1];
                var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), _useState6 = _slicedToArray(_useState5, 2), error = _useState6[0], setError = _useState6[1];
                var fetchData = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(endOfUrl, method) {
                    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                    var _options$body = options.body, body = _options$body === void 0 ? null : _options$body, _options$doOnSuccess = options.doOnSuccess, doOnSuccess = _options$doOnSuccess === void 0 ? function() {} : _options$doOnSuccess, _options$doOnError = options.doOnError, doOnError = _options$doOnError === void 0 ? function() {} : _options$doOnError;
                    var abortCont = new AbortController;
                    setIsPending(true);
                    setError(null);
                    fetch("http://192.168.10.38/api" + endOfUrl, {
                        method,
                        headers: {
                            Authorization: token ? "Bearer ".concat(token) : null,
                            "Content-Type": "application/json"
                        },
                        body: body ? JSON.stringify(body) : null
                    }).then((function(res) {
                        return res.json().then((function(data) {
                            if (!res.ok) {
                                if (res.status === 401) {
                                    alert(data.error);
                                    var buttonLogout = document.getElementById("logout");
                                    buttonLogout.click();
                                }
                                throw Error(data.error);
                            }
                            var newToken = res.headers.get("New-Access-Token");
                            newToken && setToken(newToken);
                            return data;
                        }));
                    })).then((function(data) {
                        setData(data);
                        setIsPending(false);
                        doOnSuccess(data);
                    }))["catch"]((function(err) {
                        if (err.name === "AbortError") console.log("fetch aborted"); else {
                            setError(err.message);
                            doOnError();
                            setIsPending(false);
                        }
                    }));
                    return function() {
                        return abortCont.abort();
                    };
                }), [ token, setToken ]);
                return {
                    data,
                    isPending,
                    error,
                    fetchData
                };
            };
            const __WEBPACK_DEFAULT_EXPORT__ = useFetch;
        },
        232: (__unused_webpack_module, exports) => {
            "use strict";
            0;
            0;
            0;
            const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
            const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
            const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
            const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
            const __toString = Object.prototype.toString;
            const NullObject = (() => {
                const C = function() {};
                C.prototype = Object.create(null);
                return C;
            })();
            function parse(str, options) {
                const obj = new NullObject;
                const len = str.length;
                if (len < 2) return obj;
                const dec = options?.decode || decode;
                let index = 0;
                do {
                    const eqIdx = str.indexOf("=", index);
                    if (eqIdx === -1) break;
                    const colonIdx = str.indexOf(";", index);
                    const endIdx = colonIdx === -1 ? len : colonIdx;
                    if (eqIdx > endIdx) {
                        index = str.lastIndexOf(";", eqIdx - 1) + 1;
                        continue;
                    }
                    const keyStartIdx = startIndex(str, index, eqIdx);
                    const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
                    const key = str.slice(keyStartIdx, keyEndIdx);
                    if (obj[key] === void 0) {
                        let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
                        let valEndIdx = endIndex(str, endIdx, valStartIdx);
                        const value = dec(str.slice(valStartIdx, valEndIdx));
                        obj[key] = value;
                    }
                    index = endIdx + 1;
                } while (index < len);
                return obj;
            }
            function startIndex(str, index, max) {
                do {
                    const code = str.charCodeAt(index);
                    if (code !== 32 && code !== 9) return index;
                } while (++index < max);
                return max;
            }
            function endIndex(str, index, min) {
                while (index > min) {
                    const code = str.charCodeAt(--index);
                    if (code !== 32 && code !== 9) return index + 1;
                }
                return min;
            }
            function serialize(name, val, options) {
                const enc = options?.encode || encodeURIComponent;
                if (!cookieNameRegExp.test(name)) throw new TypeError(`argument name is invalid: ${name}`);
                const value = enc(val);
                if (!cookieValueRegExp.test(value)) throw new TypeError(`argument val is invalid: ${val}`);
                let str = name + "=" + value;
                if (!options) return str;
                if (options.maxAge !== void 0) {
                    if (!Number.isInteger(options.maxAge)) throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
                    str += "; Max-Age=" + options.maxAge;
                }
                if (options.domain) {
                    if (!domainValueRegExp.test(options.domain)) throw new TypeError(`option domain is invalid: ${options.domain}`);
                    str += "; Domain=" + options.domain;
                }
                if (options.path) {
                    if (!pathValueRegExp.test(options.path)) throw new TypeError(`option path is invalid: ${options.path}`);
                    str += "; Path=" + options.path;
                }
                if (options.expires) {
                    if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) throw new TypeError(`option expires is invalid: ${options.expires}`);
                    str += "; Expires=" + options.expires.toUTCString();
                }
                if (options.httpOnly) str += "; HttpOnly";
                if (options.secure) str += "; Secure";
                if (options.partitioned) str += "; Partitioned";
                if (options.priority) {
                    const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
                    switch (priority) {
                      case "low":
                        str += "; Priority=Low";
                        break;

                      case "medium":
                        str += "; Priority=Medium";
                        break;

                      case "high":
                        str += "; Priority=High";
                        break;

                      default:
                        throw new TypeError(`option priority is invalid: ${options.priority}`);
                    }
                }
                if (options.sameSite) {
                    const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
                    switch (sameSite) {
                      case true:
                      case "strict":
                        str += "; SameSite=Strict";
                        break;

                      case "lax":
                        str += "; SameSite=Lax";
                        break;

                      case "none":
                        str += "; SameSite=None";
                        break;

                      default:
                        throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
                    }
                }
                return str;
            }
            function decode(str) {
                if (str.indexOf("%") === -1) return str;
                try {
                    return decodeURIComponent(str);
                } catch (e) {
                    return str;
                }
            }
            function isDate(val) {
                return __toString.call(val) === "[object Date]";
            }
        },
        614: function(module, __unused_webpack_exports, __webpack_require__) {
            !function(e, t) {
                if (true) module.exports = t(__webpack_require__(540)); else ;
            }(0, (function(e) {
                return function(e) {
                    var t = {};
                    function n(r) {
                        if (t[r]) return t[r].exports;
                        var o = t[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
                    }
                    return n.m = e, n.c = t, n.d = function(e, t, r) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: r
                        });
                    }, n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                    }, n.t = function(e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var r = Object.create(null);
                        if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function(t) {
                            return e[t];
                        }.bind(null, o));
                        return r;
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default;
                        } : function() {
                            return e;
                        };
                        return n.d(t, "a", t), t;
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }, n.p = "", n(n.s = 4);
                }([ function(e, t, n) {
                    e.exports = n(2)();
                }, function(t, n) {
                    t.exports = e;
                }, function(e, t, n) {
                    "use strict";
                    var r = n(3);
                    function o() {}
                    function i() {}
                    i.resetWarningCache = o, e.exports = function() {
                        function e(e, t, n, o, i, s) {
                            if (s !== r) {
                                var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                throw a.name = "Invariant Violation", a;
                            }
                        }
                        function t() {
                            return e;
                        }
                        e.isRequired = e;
                        var n = {
                            array: e,
                            bigint: e,
                            bool: e,
                            func: e,
                            number: e,
                            object: e,
                            string: e,
                            symbol: e,
                            any: e,
                            arrayOf: t,
                            element: e,
                            elementType: e,
                            instanceOf: t,
                            node: e,
                            objectOf: t,
                            oneOf: t,
                            oneOfType: t,
                            shape: t,
                            exact: t,
                            checkPropTypes: i,
                            resetWarningCache: o
                        };
                        return n.PropTypes = n, n;
                    };
                }, function(e, t, n) {
                    "use strict";
                    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
                }, function(e, t, n) {
                    "use strict";
                    n.r(t);
                    var r = n(1), o = n.n(r), i = n(0), s = n.n(i), a = function(e) {
                        return 0 !== e;
                    };
                    function l() {
                        return (l = Object.assign ? Object.assign.bind() : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }).apply(this, arguments);
                    }
                    function c(e) {
                        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        })(e);
                    }
                    function p(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                            Object.defineProperty(e, r.key, r);
                        }
                    }
                    function u(e, t) {
                        return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                            return e.__proto__ = t, e;
                        })(e, t);
                    }
                    function g(e) {
                        var t = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                !0;
                            } catch (e) {
                                return !1;
                            }
                        }();
                        return function() {
                            var n, r = d(e);
                            if (t) {
                                var o = d(this).constructor;
                                n = Reflect.construct(r, arguments, o);
                            } else n = r.apply(this, arguments);
                            return f(this, n);
                        };
                    }
                    function f(e, t) {
                        if (t && ("object" === c(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return h(e);
                    }
                    function h(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }
                    function d(e) {
                        return (d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e);
                        })(e);
                    }
                    function b(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e;
                    }
                    var m = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && u(e, t);
                        }(s, e);
                        var t, n, r, i = g(s);
                        function s(e) {
                            var t;
                            return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, s), b(h(t = i.call(this, e)), "continueOpenCollapsible", (function() {
                                var e = h(t).innerRef;
                                t.setState({
                                    height: e.scrollHeight,
                                    transition: "height ".concat(t.props.transitionTime, "ms ").concat(t.props.easing),
                                    isClosed: !1,
                                    hasBeenOpened: !0,
                                    inTransition: a(e.scrollHeight),
                                    shouldOpenOnNextCycle: !1
                                });
                            })), b(h(t), "handleTriggerClick", (function(e) {
                                t.props.triggerDisabled || t.state.inTransition || (e.preventDefault(), t.props.handleTriggerClick ? t.props.handleTriggerClick(t.props.accordionPosition) : !0 === t.state.isClosed ? (t.openCollapsible(), 
                                t.props.onOpening(), t.props.onTriggerOpening()) : (t.closeCollapsible(), t.props.onClosing(), 
                                t.props.onTriggerClosing()));
                            })), b(h(t), "handleTransitionEnd", (function(e) {
                                e.target === t.innerRef && (t.state.isClosed ? (t.setState({
                                    inTransition: !1
                                }), t.props.onClose()) : (t.setState({
                                    height: "auto",
                                    overflow: t.props.overflowWhenOpen,
                                    inTransition: !1
                                }), t.props.onOpen()));
                            })), b(h(t), "setInnerRef", (function(e) {
                                return t.innerRef = e;
                            })), t.timeout = void 0, t.contentId = e.contentElementId || "collapsible-content-".concat(Date.now()), 
                            t.triggerId = e.triggerElementProps.id || "collapsible-trigger-".concat(Date.now()), 
                            e.open ? t.state = {
                                isClosed: !1,
                                shouldSwitchAutoOnNextCycle: !1,
                                height: "auto",
                                transition: "none",
                                hasBeenOpened: !0,
                                overflow: e.overflowWhenOpen,
                                inTransition: !1
                            } : t.state = {
                                isClosed: !0,
                                shouldSwitchAutoOnNextCycle: !1,
                                height: 0,
                                transition: "height ".concat(e.transitionTime, "ms ").concat(e.easing),
                                hasBeenOpened: !1,
                                overflow: "hidden",
                                inTransition: !1
                            }, t;
                        }
                        return t = s, (n = [ {
                            key: "componentDidUpdate",
                            value: function(e, t) {
                                var n = this;
                                this.state.shouldOpenOnNextCycle && this.continueOpenCollapsible(), "auto" !== t.height && 0 !== t.height || !0 !== this.state.shouldSwitchAutoOnNextCycle || (window.clearTimeout(this.timeout), 
                                this.timeout = window.setTimeout((function() {
                                    n.setState({
                                        height: 0,
                                        overflow: "hidden",
                                        isClosed: !0,
                                        shouldSwitchAutoOnNextCycle: !1
                                    });
                                }), 50)), e.open !== this.props.open && (!0 === this.props.open ? (this.openCollapsible(), 
                                this.props.onOpening()) : (this.closeCollapsible(), this.props.onClosing()));
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                window.clearTimeout(this.timeout);
                            }
                        }, {
                            key: "closeCollapsible",
                            value: function() {
                                var e = this.innerRef;
                                this.setState({
                                    shouldSwitchAutoOnNextCycle: !0,
                                    height: e.scrollHeight,
                                    transition: "height ".concat(this.props.transitionCloseTime ? this.props.transitionCloseTime : this.props.transitionTime, "ms ").concat(this.props.easing),
                                    inTransition: a(e.scrollHeight)
                                });
                            }
                        }, {
                            key: "openCollapsible",
                            value: function() {
                                this.setState({
                                    inTransition: a(this.innerRef.scrollHeight),
                                    shouldOpenOnNextCycle: !0
                                });
                            }
                        }, {
                            key: "renderNonClickableTriggerElement",
                            value: function() {
                                var e = this.props, t = e.triggerSibling, n = e.classParentString;
                                if (!t) return null;
                                switch (c(t)) {
                                  case "string":
                                    return o.a.createElement("span", {
                                        className: "".concat(n, "__trigger-sibling")
                                    }, t);

                                  case "function":
                                    return t();

                                  case "object":
                                    return t;

                                  default:
                                    return null;
                                }
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this, t = {
                                    height: this.state.height,
                                    WebkitTransition: this.state.transition,
                                    msTransition: this.state.transition,
                                    transition: this.state.transition,
                                    overflow: this.state.overflow
                                }, n = this.state.isClosed ? "is-closed" : "is-open", r = this.props.triggerDisabled ? "is-disabled" : "", i = !1 === this.state.isClosed && void 0 !== this.props.triggerWhenOpen ? this.props.triggerWhenOpen : this.props.trigger, s = this.props.contentContainerTagName, a = this.props.triggerTagName, c = this.props.lazyRender && !this.state.hasBeenOpened && this.state.isClosed && !this.state.inTransition ? null : this.props.children, p = this.props, u = p.classParentString, g = p.contentOuterClassName, f = p.contentInnerClassName, h = "".concat(u, "__trigger ").concat(n, " ").concat(r, " ").concat(this.state.isClosed ? this.props.triggerClassName : this.props.triggerOpenedClassName), d = "".concat(u, " ").concat(this.state.isClosed ? this.props.className : this.props.openedClassName), b = "".concat(u, "__contentOuter ").concat(g), m = "".concat(u, "__contentInner ").concat(f);
                                return o.a.createElement(s, l({
                                    className: d.trim()
                                }, this.props.containerElementProps), o.a.createElement(a, l({
                                    id: this.triggerId,
                                    className: h.trim(),
                                    onClick: this.handleTriggerClick,
                                    style: this.props.triggerStyle && this.props.triggerStyle,
                                    onKeyPress: function(t) {
                                        var n = t.key;
                                        (" " === n && "button" !== e.props.triggerTagName.toLowerCase() || "Enter" === n) && e.handleTriggerClick(t);
                                    },
                                    tabIndex: this.props.tabIndex && this.props.tabIndex,
                                    "aria-expanded": !this.state.isClosed,
                                    "aria-disabled": this.props.triggerDisabled,
                                    "aria-controls": this.contentId,
                                    role: "button"
                                }, this.props.triggerElementProps), i), this.renderNonClickableTriggerElement(), o.a.createElement("div", {
                                    id: this.contentId,
                                    className: b.trim(),
                                    style: t,
                                    onTransitionEnd: this.handleTransitionEnd,
                                    ref: this.setInnerRef,
                                    hidden: this.props.contentHiddenWhenClosed && this.state.isClosed && !this.state.inTransition,
                                    role: "region",
                                    "aria-labelledby": this.triggerId
                                }, o.a.createElement("div", {
                                    className: m.trim()
                                }, c)));
                            }
                        } ]) && p(t.prototype, n), r && p(t, r), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), s;
                    }(r.Component);
                    m.propTypes = {
                        transitionTime: s.a.number,
                        transitionCloseTime: s.a.number,
                        triggerTagName: s.a.string,
                        easing: s.a.string,
                        open: s.a.bool,
                        containerElementProps: s.a.object,
                        triggerElementProps: s.a.object,
                        contentElementId: s.a.string,
                        classParentString: s.a.string,
                        className: s.a.string,
                        openedClassName: s.a.string,
                        triggerStyle: s.a.object,
                        triggerClassName: s.a.string,
                        triggerOpenedClassName: s.a.string,
                        contentOuterClassName: s.a.string,
                        contentInnerClassName: s.a.string,
                        accordionPosition: s.a.oneOfType([ s.a.string, s.a.number ]),
                        handleTriggerClick: s.a.func,
                        onOpen: s.a.func,
                        onClose: s.a.func,
                        onOpening: s.a.func,
                        onClosing: s.a.func,
                        onTriggerOpening: s.a.func,
                        onTriggerClosing: s.a.func,
                        trigger: s.a.oneOfType([ s.a.string, s.a.element ]),
                        triggerWhenOpen: s.a.oneOfType([ s.a.string, s.a.element ]),
                        triggerDisabled: s.a.bool,
                        lazyRender: s.a.bool,
                        overflowWhenOpen: s.a.oneOf([ "hidden", "visible", "auto", "scroll", "inherit", "initial", "unset" ]),
                        contentHiddenWhenClosed: s.a.bool,
                        triggerSibling: s.a.oneOfType([ s.a.string, s.a.element, s.a.func ]),
                        tabIndex: s.a.number,
                        contentContainerTagName: s.a.string,
                        children: s.a.oneOfType([ s.a.string, s.a.element ])
                    }, m.defaultProps = {
                        transitionTime: 400,
                        transitionCloseTime: null,
                        triggerTagName: "span",
                        easing: "linear",
                        open: !1,
                        classParentString: "Collapsible",
                        triggerDisabled: !1,
                        lazyRender: !1,
                        overflowWhenOpen: "hidden",
                        contentHiddenWhenClosed: !1,
                        openedClassName: "",
                        triggerStyle: null,
                        triggerClassName: "",
                        triggerOpenedClassName: "",
                        contentOuterClassName: "",
                        contentInnerClassName: "",
                        className: "",
                        triggerSibling: null,
                        onOpen: function() {},
                        onClose: function() {},
                        onOpening: function() {},
                        onClosing: function() {},
                        onTriggerOpening: function() {},
                        onTriggerClosing: function() {},
                        tabIndex: null,
                        contentContainerTagName: "div",
                        triggerElementProps: {}
                    };
                    t.default = m;
                } ]);
            }));
        },
        551: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */            var aa = __webpack_require__(540), ca = __webpack_require__(982);
            function p(a) {
                for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
                return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            var da = new Set, ea = {};
            function fa(a, b) {
                ha(a, b);
                ha(a + "Capture", b);
            }
            function ha(a, b) {
                ea[a] = b;
                for (a = 0; a < b.length; a++) da.add(b[a]);
            }
            var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
            function oa(a) {
                if (ja.call(ma, a)) return !0;
                if (ja.call(la, a)) return !1;
                if (ka.test(a)) return ma[a] = !0;
                la[a] = !0;
                return !1;
            }
            function pa(a, b, c, d) {
                if (null !== c && 0 === c.type) return !1;
                switch (typeof b) {
                  case "function":
                  case "symbol":
                    return !0;

                  case "boolean":
                    if (d) return !1;
                    if (null !== c) return !c.acceptsBooleans;
                    a = a.toLowerCase().slice(0, 5);
                    return "data-" !== a && "aria-" !== a;

                  default:
                    return !1;
                }
            }
            function qa(a, b, c, d) {
                if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
                if (d) return !1;
                if (null !== c) switch (c.type) {
                  case 3:
                    return !b;

                  case 4:
                    return !1 === b;

                  case 5:
                    return isNaN(b);

                  case 6:
                    return isNaN(b) || 1 > b;
                }
                return !1;
            }
            function v(a, b, c, d, e, f, g) {
                this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
                this.attributeName = d;
                this.attributeNamespace = e;
                this.mustUseProperty = c;
                this.propertyName = a;
                this.type = b;
                this.sanitizeURL = f;
                this.removeEmptyString = g;
            }
            var z = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(a) {
                z[a] = new v(a, 0, !1, a, null, !1, !1);
            }));
            [ [ "acceptCharset", "accept-charset" ], [ "className", "class" ], [ "htmlFor", "for" ], [ "httpEquiv", "http-equiv" ] ].forEach((function(a) {
                var b = a[0];
                z[b] = new v(b, 1, !1, a[1], null, !1, !1);
            }));
            [ "contentEditable", "draggable", "spellCheck", "value" ].forEach((function(a) {
                z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
            }));
            [ "autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha" ].forEach((function(a) {
                z[a] = new v(a, 2, !1, a, null, !1, !1);
            }));
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(a) {
                z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
            }));
            [ "checked", "multiple", "muted", "selected" ].forEach((function(a) {
                z[a] = new v(a, 3, !0, a, null, !1, !1);
            }));
            [ "capture", "download" ].forEach((function(a) {
                z[a] = new v(a, 4, !1, a, null, !1, !1);
            }));
            [ "cols", "rows", "size", "span" ].forEach((function(a) {
                z[a] = new v(a, 6, !1, a, null, !1, !1);
            }));
            [ "rowSpan", "start" ].forEach((function(a) {
                z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
            }));
            var ra = /[\-:]([a-z])/g;
            function sa(a) {
                return a[1].toUpperCase();
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(a) {
                var b = a.replace(ra, sa);
                z[b] = new v(b, 1, !1, a, null, !1, !1);
            }));
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(a) {
                var b = a.replace(ra, sa);
                z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
            }));
            [ "xml:base", "xml:lang", "xml:space" ].forEach((function(a) {
                var b = a.replace(ra, sa);
                z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
            }));
            [ "tabIndex", "crossOrigin" ].forEach((function(a) {
                z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
            }));
            z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
            [ "src", "href", "action", "formAction" ].forEach((function(a) {
                z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
            }));
            function ta(a, b, c, d) {
                var e = z.hasOwnProperty(b) ? z[b] : null;
                if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), 
                d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, 
                d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, 
                d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
            }
            var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
            Symbol.for("react.scope");
            Symbol.for("react.debug_trace_mode");
            var Ia = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden");
            Symbol.for("react.cache");
            Symbol.for("react.tracing_marker");
            var Ja = Symbol.iterator;
            function Ka(a) {
                if (null === a || "object" !== typeof a) return null;
                a = Ja && a[Ja] || a["@@iterator"];
                return "function" === typeof a ? a : null;
            }
            var La, A = Object.assign;
            function Ma(a) {
                if (void 0 === La) try {
                    throw Error();
                } catch (c) {
                    var b = c.stack.trim().match(/\n( *(at )?)/);
                    La = b && b[1] || "";
                }
                return "\n" + La + a;
            }
            var Na = !1;
            function Oa(a, b) {
                if (!a || Na) return "";
                Na = !0;
                var c = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (b) if (b = function() {
                        throw Error();
                    }, Object.defineProperty(b.prototype, "props", {
                        set: function() {
                            throw Error();
                        }
                    }), "object" === typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(b, []);
                        } catch (l) {
                            var d = l;
                        }
                        Reflect.construct(a, [], b);
                    } else {
                        try {
                            b.call();
                        } catch (l) {
                            d = l;
                        }
                        a.call(b.prototype);
                    } else {
                        try {
                            throw Error();
                        } catch (l) {
                            d = l;
                        }
                        a();
                    }
                } catch (l) {
                    if (l && d && "string" === typeof l.stack) {
                        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
                        for (;1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
                            if (1 !== g || 1 !== h) do {
                                if (g--, h--, 0 > h || e[g] !== f[h]) {
                                    var k = "\n" + e[g].replace(" at new ", " at ");
                                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                                    return k;
                                }
                            } while (1 <= g && 0 <= h);
                            break;
                        }
                    }
                } finally {
                    Na = !1, Error.prepareStackTrace = c;
                }
                return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
            }
            function Pa(a) {
                switch (a.tag) {
                  case 5:
                    return Ma(a.type);

                  case 16:
                    return Ma("Lazy");

                  case 13:
                    return Ma("Suspense");

                  case 19:
                    return Ma("SuspenseList");

                  case 0:
                  case 2:
                  case 15:
                    return a = Oa(a.type, !1), a;

                  case 11:
                    return a = Oa(a.type.render, !1), a;

                  case 1:
                    return a = Oa(a.type, !0), a;

                  default:
                    return "";
                }
            }
            function Qa(a) {
                if (null == a) return null;
                if ("function" === typeof a) return a.displayName || a.name || null;
                if ("string" === typeof a) return a;
                switch (a) {
                  case ya:
                    return "Fragment";

                  case wa:
                    return "Portal";

                  case Aa:
                    return "Profiler";

                  case za:
                    return "StrictMode";

                  case Ea:
                    return "Suspense";

                  case Fa:
                    return "SuspenseList";
                }
                if ("object" === typeof a) switch (a.$$typeof) {
                  case Ca:
                    return (a.displayName || "Context") + ".Consumer";

                  case Ba:
                    return (a._context.displayName || "Context") + ".Provider";

                  case Da:
                    var b = a.render;
                    a = a.displayName;
                    a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
                    return a;

                  case Ga:
                    return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";

                  case Ha:
                    b = a._payload;
                    a = a._init;
                    try {
                        return Qa(a(b));
                    } catch (c) {}
                }
                return null;
            }
            function Ra(a) {
                var b = a.type;
                switch (a.tag) {
                  case 24:
                    return "Cache";

                  case 9:
                    return (b.displayName || "Context") + ".Consumer";

                  case 10:
                    return (b._context.displayName || "Context") + ".Provider";

                  case 18:
                    return "DehydratedFragment";

                  case 11:
                    return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");

                  case 7:
                    return "Fragment";

                  case 5:
                    return b;

                  case 4:
                    return "Portal";

                  case 3:
                    return "Root";

                  case 6:
                    return "Text";

                  case 16:
                    return Qa(b);

                  case 8:
                    return b === za ? "StrictMode" : "Mode";

                  case 22:
                    return "Offscreen";

                  case 12:
                    return "Profiler";

                  case 21:
                    return "Scope";

                  case 13:
                    return "Suspense";

                  case 19:
                    return "SuspenseList";

                  case 25:
                    return "TracingMarker";

                  case 1:
                  case 0:
                  case 17:
                  case 2:
                  case 14:
                  case 15:
                    if ("function" === typeof b) return b.displayName || b.name || null;
                    if ("string" === typeof b) return b;
                }
                return null;
            }
            function Sa(a) {
                switch (typeof a) {
                  case "boolean":
                  case "number":
                  case "string":
                  case "undefined":
                    return a;

                  case "object":
                    return a;

                  default:
                    return "";
                }
            }
            function Ta(a) {
                var b = a.type;
                return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
            }
            function Ua(a) {
                var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
                if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
                    var e = c.get, f = c.set;
                    Object.defineProperty(a, b, {
                        configurable: !0,
                        get: function() {
                            return e.call(this);
                        },
                        set: function(a) {
                            d = "" + a;
                            f.call(this, a);
                        }
                    });
                    Object.defineProperty(a, b, {
                        enumerable: c.enumerable
                    });
                    return {
                        getValue: function() {
                            return d;
                        },
                        setValue: function(a) {
                            d = "" + a;
                        },
                        stopTracking: function() {
                            a._valueTracker = null;
                            delete a[b];
                        }
                    };
                }
            }
            function Va(a) {
                a._valueTracker || (a._valueTracker = Ua(a));
            }
            function Wa(a) {
                if (!a) return !1;
                var b = a._valueTracker;
                if (!b) return !0;
                var c = b.getValue();
                var d = "";
                a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
                a = d;
                return a !== c ? (b.setValue(a), !0) : !1;
            }
            function Xa(a) {
                a = a || ("undefined" !== typeof document ? document : void 0);
                if ("undefined" === typeof a) return null;
                try {
                    return a.activeElement || a.body;
                } catch (b) {
                    return a.body;
                }
            }
            function Ya(a, b) {
                var c = b.checked;
                return A({}, b, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != c ? c : a._wrapperState.initialChecked
                });
            }
            function Za(a, b) {
                var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
                c = Sa(null != b.value ? b.value : c);
                a._wrapperState = {
                    initialChecked: d,
                    initialValue: c,
                    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
                };
            }
            function ab(a, b) {
                b = b.checked;
                null != b && ta(a, "checked", b, !1);
            }
            function bb(a, b) {
                ab(a, b);
                var c = Sa(b.value), d = b.type;
                if (null != c) if ("number" === d) {
                    if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
                } else a.value !== "" + c && (a.value = "" + c); else if ("submit" === d || "reset" === d) {
                    a.removeAttribute("value");
                    return;
                }
                b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
                null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
            }
            function db(a, b, c) {
                if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
                    var d = b.type;
                    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
                    b = "" + a._wrapperState.initialValue;
                    c || b === a.value || (a.value = b);
                    a.defaultValue = b;
                }
                c = a.name;
                "" !== c && (a.name = "");
                a.defaultChecked = !!a._wrapperState.initialChecked;
                "" !== c && (a.name = c);
            }
            function cb(a, b, c) {
                if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
            }
            var eb = Array.isArray;
            function fb(a, b, c, d) {
                a = a.options;
                if (b) {
                    b = {};
                    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
                    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), 
                    e && d && (a[c].defaultSelected = !0);
                } else {
                    c = "" + Sa(c);
                    b = null;
                    for (e = 0; e < a.length; e++) {
                        if (a[e].value === c) {
                            a[e].selected = !0;
                            d && (a[e].defaultSelected = !0);
                            return;
                        }
                        null !== b || a[e].disabled || (b = a[e]);
                    }
                    null !== b && (b.selected = !0);
                }
            }
            function gb(a, b) {
                if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
                return A({}, b, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + a._wrapperState.initialValue
                });
            }
            function hb(a, b) {
                var c = b.value;
                if (null == c) {
                    c = b.children;
                    b = b.defaultValue;
                    if (null != c) {
                        if (null != b) throw Error(p(92));
                        if (eb(c)) {
                            if (1 < c.length) throw Error(p(93));
                            c = c[0];
                        }
                        b = c;
                    }
                    null == b && (b = "");
                    c = b;
                }
                a._wrapperState = {
                    initialValue: Sa(c)
                };
            }
            function ib(a, b) {
                var c = Sa(b.value), d = Sa(b.defaultValue);
                null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
                null != d && (a.defaultValue = "" + d);
            }
            function jb(a) {
                var b = a.textContent;
                b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
            }
            function kb(a) {
                switch (a) {
                  case "svg":
                    return "http://www.w3.org/2000/svg";

                  case "math":
                    return "http://www.w3.org/1998/Math/MathML";

                  default:
                    return "http://www.w3.org/1999/xhtml";
                }
            }
            function lb(a, b) {
                return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
            }
            var mb, nb = function(a) {
                return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return a(b, c, d, e);
                    }));
                } : a;
            }((function(a, b) {
                if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b; else {
                    mb = mb || document.createElement("div");
                    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
                    for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
                    for (;b.firstChild; ) a.appendChild(b.firstChild);
                }
            }));
            function ob(a, b) {
                if (b) {
                    var c = a.firstChild;
                    if (c && c === a.lastChild && 3 === c.nodeType) {
                        c.nodeValue = b;
                        return;
                    }
                }
                a.textContent = b;
            }
            var pb = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }, qb = [ "Webkit", "ms", "Moz", "O" ];
            Object.keys(pb).forEach((function(a) {
                qb.forEach((function(b) {
                    b = b + a.charAt(0).toUpperCase() + a.substring(1);
                    pb[b] = pb[a];
                }));
            }));
            function rb(a, b, c) {
                return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
            }
            function sb(a, b) {
                a = a.style;
                for (var c in b) if (b.hasOwnProperty(c)) {
                    var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
                    "float" === c && (c = "cssFloat");
                    d ? a.setProperty(c, e) : a[c] = e;
                }
            }
            var tb = A({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function ub(a, b) {
                if (b) {
                    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
                    if (null != b.dangerouslySetInnerHTML) {
                        if (null != b.children) throw Error(p(60));
                        if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
                    }
                    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
                }
            }
            function vb(a, b) {
                if (-1 === a.indexOf("-")) return "string" === typeof b.is;
                switch (a) {
                  case "annotation-xml":
                  case "color-profile":
                  case "font-face":
                  case "font-face-src":
                  case "font-face-uri":
                  case "font-face-format":
                  case "font-face-name":
                  case "missing-glyph":
                    return !1;

                  default:
                    return !0;
                }
            }
            var wb = null;
            function xb(a) {
                a = a.target || a.srcElement || window;
                a.correspondingUseElement && (a = a.correspondingUseElement);
                return 3 === a.nodeType ? a.parentNode : a;
            }
            var yb = null, zb = null, Ab = null;
            function Bb(a) {
                if (a = Cb(a)) {
                    if ("function" !== typeof yb) throw Error(p(280));
                    var b = a.stateNode;
                    b && (b = Db(b), yb(a.stateNode, a.type, b));
                }
            }
            function Eb(a) {
                zb ? Ab ? Ab.push(a) : Ab = [ a ] : zb = a;
            }
            function Fb() {
                if (zb) {
                    var a = zb, b = Ab;
                    Ab = zb = null;
                    Bb(a);
                    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
                }
            }
            function Gb(a, b) {
                return a(b);
            }
            function Hb() {}
            var Ib = !1;
            function Jb(a, b, c) {
                if (Ib) return a(b, c);
                Ib = !0;
                try {
                    return Gb(a, b, c);
                } finally {
                    if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
                }
            }
            function Kb(a, b) {
                var c = a.stateNode;
                if (null === c) return null;
                var d = Db(c);
                if (null === d) return null;
                c = d[b];
                a: switch (b) {
                  case "onClick":
                  case "onClickCapture":
                  case "onDoubleClick":
                  case "onDoubleClickCapture":
                  case "onMouseDown":
                  case "onMouseDownCapture":
                  case "onMouseMove":
                  case "onMouseMoveCapture":
                  case "onMouseUp":
                  case "onMouseUpCapture":
                  case "onMouseEnter":
                    (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
                    a = !d;
                    break a;

                  default:
                    a = !1;
                }
                if (a) return null;
                if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
                return c;
            }
            var Lb = !1;
            if (ia) try {
                var Mb = {};
                Object.defineProperty(Mb, "passive", {
                    get: function() {
                        Lb = !0;
                    }
                });
                window.addEventListener("test", Mb, Mb);
                window.removeEventListener("test", Mb, Mb);
            } catch (a) {
                Lb = !1;
            }
            function Nb(a, b, c, d, e, f, g, h, k) {
                var l = Array.prototype.slice.call(arguments, 3);
                try {
                    b.apply(c, l);
                } catch (m) {
                    this.onError(m);
                }
            }
            var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = {
                onError: function(a) {
                    Ob = !0;
                    Pb = a;
                }
            };
            function Tb(a, b, c, d, e, f, g, h, k) {
                Ob = !1;
                Pb = null;
                Nb.apply(Sb, arguments);
            }
            function Ub(a, b, c, d, e, f, g, h, k) {
                Tb.apply(this, arguments);
                if (Ob) {
                    if (Ob) {
                        var l = Pb;
                        Ob = !1;
                        Pb = null;
                    } else throw Error(p(198));
                    Qb || (Qb = !0, Rb = l);
                }
            }
            function Vb(a) {
                var b = a, c = a;
                if (a.alternate) for (;b.return; ) b = b.return; else {
                    a = b;
                    do {
                        b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
                    } while (a);
                }
                return 3 === b.tag ? c : null;
            }
            function Wb(a) {
                if (13 === a.tag) {
                    var b = a.memoizedState;
                    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
                    if (null !== b) return b.dehydrated;
                }
                return null;
            }
            function Xb(a) {
                if (Vb(a) !== a) throw Error(p(188));
            }
            function Yb(a) {
                var b = a.alternate;
                if (!b) {
                    b = Vb(a);
                    if (null === b) throw Error(p(188));
                    return b !== a ? null : a;
                }
                for (var c = a, d = b; ;) {
                    var e = c.return;
                    if (null === e) break;
                    var f = e.alternate;
                    if (null === f) {
                        d = e.return;
                        if (null !== d) {
                            c = d;
                            continue;
                        }
                        break;
                    }
                    if (e.child === f.child) {
                        for (f = e.child; f; ) {
                            if (f === c) return Xb(e), a;
                            if (f === d) return Xb(e), b;
                            f = f.sibling;
                        }
                        throw Error(p(188));
                    }
                    if (c.return !== d.return) c = e, d = f; else {
                        for (var g = !1, h = e.child; h; ) {
                            if (h === c) {
                                g = !0;
                                c = e;
                                d = f;
                                break;
                            }
                            if (h === d) {
                                g = !0;
                                d = e;
                                c = f;
                                break;
                            }
                            h = h.sibling;
                        }
                        if (!g) {
                            for (h = f.child; h; ) {
                                if (h === c) {
                                    g = !0;
                                    c = f;
                                    d = e;
                                    break;
                                }
                                if (h === d) {
                                    g = !0;
                                    d = f;
                                    c = e;
                                    break;
                                }
                                h = h.sibling;
                            }
                            if (!g) throw Error(p(189));
                        }
                    }
                    if (c.alternate !== d) throw Error(p(190));
                }
                if (3 !== c.tag) throw Error(p(188));
                return c.stateNode.current === c ? a : b;
            }
            function Zb(a) {
                a = Yb(a);
                return null !== a ? $b(a) : null;
            }
            function $b(a) {
                if (5 === a.tag || 6 === a.tag) return a;
                for (a = a.child; null !== a; ) {
                    var b = $b(a);
                    if (null !== b) return b;
                    a = a.sibling;
                }
                return null;
            }
            var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
            function mc(a) {
                if (lc && "function" === typeof lc.onCommitFiberRoot) try {
                    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
                } catch (b) {}
            }
            var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
            function nc(a) {
                a >>>= 0;
                return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
            }
            var rc = 64, sc = 4194304;
            function tc(a) {
                switch (a & -a) {
                  case 1:
                    return 1;

                  case 2:
                    return 2;

                  case 4:
                    return 4;

                  case 8:
                    return 8;

                  case 16:
                    return 16;

                  case 32:
                    return 32;

                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                    return a & 4194240;

                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    return a & 130023424;

                  case 134217728:
                    return 134217728;

                  case 268435456:
                    return 268435456;

                  case 536870912:
                    return 536870912;

                  case 1073741824:
                    return 1073741824;

                  default:
                    return a;
                }
            }
            function uc(a, b) {
                var c = a.pendingLanes;
                if (0 === c) return 0;
                var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
                if (0 !== g) {
                    var h = g & ~e;
                    0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
                } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
                if (0 === d) return 0;
                if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
                0 !== (d & 4) && (d |= c & 16);
                b = a.entangledLanes;
                if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, 
                d |= a[c], b &= ~e;
                return d;
            }
            function vc(a, b) {
                switch (a) {
                  case 1:
                  case 2:
                  case 4:
                    return b + 250;

                  case 8:
                  case 16:
                  case 32:
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                    return b + 5e3;

                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    return -1;

                  case 134217728:
                  case 268435456:
                  case 536870912:
                  case 1073741824:
                    return -1;

                  default:
                    return -1;
                }
            }
            function wc(a, b) {
                for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
                    var g = 31 - oc(f), h = 1 << g, k = e[g];
                    if (-1 === k) {
                        if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
                    } else k <= b && (a.expiredLanes |= h);
                    f &= ~h;
                }
            }
            function xc(a) {
                a = a.pendingLanes & -1073741825;
                return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
            }
            function yc() {
                var a = rc;
                rc <<= 1;
                0 === (rc & 4194240) && (rc = 64);
                return a;
            }
            function zc(a) {
                for (var b = [], c = 0; 31 > c; c++) b.push(a);
                return b;
            }
            function Ac(a, b, c) {
                a.pendingLanes |= b;
                536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
                a = a.eventTimes;
                b = 31 - oc(b);
                a[b] = c;
            }
            function Bc(a, b) {
                var c = a.pendingLanes & ~b;
                a.pendingLanes = b;
                a.suspendedLanes = 0;
                a.pingedLanes = 0;
                a.expiredLanes &= b;
                a.mutableReadLanes &= b;
                a.entangledLanes &= b;
                b = a.entanglements;
                var d = a.eventTimes;
                for (a = a.expirationTimes; 0 < c; ) {
                    var e = 31 - oc(c), f = 1 << e;
                    b[e] = 0;
                    d[e] = -1;
                    a[e] = -1;
                    c &= ~f;
                }
            }
            function Cc(a, b) {
                var c = a.entangledLanes |= b;
                for (a = a.entanglements; c; ) {
                    var d = 31 - oc(c), e = 1 << d;
                    e & b | a[d] & b && (a[d] |= b);
                    c &= ~e;
                }
            }
            var C = 0;
            function Dc(a) {
                a &= -a;
                return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
            }
            var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = new Map, Pc = new Map, Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function Sc(a, b) {
                switch (a) {
                  case "focusin":
                  case "focusout":
                    Lc = null;
                    break;

                  case "dragenter":
                  case "dragleave":
                    Mc = null;
                    break;

                  case "mouseover":
                  case "mouseout":
                    Nc = null;
                    break;

                  case "pointerover":
                  case "pointerout":
                    Oc.delete(b.pointerId);
                    break;

                  case "gotpointercapture":
                  case "lostpointercapture":
                    Pc.delete(b.pointerId);
                }
            }
            function Tc(a, b, c, d, e, f) {
                if (null === a || a.nativeEvent !== f) return a = {
                    blockedOn: b,
                    domEventName: c,
                    eventSystemFlags: d,
                    nativeEvent: f,
                    targetContainers: [ e ]
                }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
                a.eventSystemFlags |= d;
                b = a.targetContainers;
                null !== e && -1 === b.indexOf(e) && b.push(e);
                return a;
            }
            function Uc(a, b, c, d, e) {
                switch (b) {
                  case "focusin":
                    return Lc = Tc(Lc, a, b, c, d, e), !0;

                  case "dragenter":
                    return Mc = Tc(Mc, a, b, c, d, e), !0;

                  case "mouseover":
                    return Nc = Tc(Nc, a, b, c, d, e), !0;

                  case "pointerover":
                    var f = e.pointerId;
                    Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
                    return !0;

                  case "gotpointercapture":
                    return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
                }
                return !1;
            }
            function Vc(a) {
                var b = Wc(a.target);
                if (null !== b) {
                    var c = Vb(b);
                    if (null !== c) if (b = c.tag, 13 === b) {
                        if (b = Wb(c), null !== b) {
                            a.blockedOn = b;
                            Ic(a.priority, (function() {
                                Gc(c);
                            }));
                            return;
                        }
                    } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
                        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
                        return;
                    }
                }
                a.blockedOn = null;
            }
            function Xc(a) {
                if (null !== a.blockedOn) return !1;
                for (var b = a.targetContainers; 0 < b.length; ) {
                    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
                    if (null === c) {
                        c = a.nativeEvent;
                        var d = new c.constructor(c.type, c);
                        wb = d;
                        c.target.dispatchEvent(d);
                        wb = null;
                    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
                    b.shift();
                }
                return !0;
            }
            function Zc(a, b, c) {
                Xc(a) && c.delete(b);
            }
            function $c() {
                Jc = !1;
                null !== Lc && Xc(Lc) && (Lc = null);
                null !== Mc && Xc(Mc) && (Mc = null);
                null !== Nc && Xc(Nc) && (Nc = null);
                Oc.forEach(Zc);
                Pc.forEach(Zc);
            }
            function ad(a, b) {
                a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
            }
            function bd(a) {
                function b(b) {
                    return ad(b, a);
                }
                if (0 < Kc.length) {
                    ad(Kc[0], a);
                    for (var c = 1; c < Kc.length; c++) {
                        var d = Kc[c];
                        d.blockedOn === a && (d.blockedOn = null);
                    }
                }
                null !== Lc && ad(Lc, a);
                null !== Mc && ad(Mc, a);
                null !== Nc && ad(Nc, a);
                Oc.forEach(b);
                Pc.forEach(b);
                for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
                for (;0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
            }
            var cd = ua.ReactCurrentBatchConfig, dd = !0;
            function ed(a, b, c, d) {
                var e = C, f = cd.transition;
                cd.transition = null;
                try {
                    C = 1, fd(a, b, c, d);
                } finally {
                    C = e, cd.transition = f;
                }
            }
            function gd(a, b, c, d) {
                var e = C, f = cd.transition;
                cd.transition = null;
                try {
                    C = 4, fd(a, b, c, d);
                } finally {
                    C = e, cd.transition = f;
                }
            }
            function fd(a, b, c, d) {
                if (dd) {
                    var e = Yc(a, b, c, d);
                    if (null === e) hd(a, b, d, id, c), Sc(a, d); else if (Uc(e, a, b, c, d)) d.stopPropagation(); else if (Sc(a, d), 
                    b & 4 && -1 < Rc.indexOf(a)) {
                        for (;null !== e; ) {
                            var f = Cb(e);
                            null !== f && Ec(f);
                            f = Yc(a, b, c, d);
                            null === f && hd(a, b, d, id, c);
                            if (f === e) break;
                            e = f;
                        }
                        null !== e && d.stopPropagation();
                    } else hd(a, b, d, null, c);
                }
            }
            var id = null;
            function Yc(a, b, c, d) {
                id = null;
                a = xb(d);
                a = Wc(a);
                if (null !== a) if (b = Vb(a), null === b) a = null; else if (c = b.tag, 13 === c) {
                    a = Wb(b);
                    if (null !== a) return a;
                    a = null;
                } else if (3 === c) {
                    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
                    a = null;
                } else b !== a && (a = null);
                id = a;
                return null;
            }
            function jd(a) {
                switch (a) {
                  case "cancel":
                  case "click":
                  case "close":
                  case "contextmenu":
                  case "copy":
                  case "cut":
                  case "auxclick":
                  case "dblclick":
                  case "dragend":
                  case "dragstart":
                  case "drop":
                  case "focusin":
                  case "focusout":
                  case "input":
                  case "invalid":
                  case "keydown":
                  case "keypress":
                  case "keyup":
                  case "mousedown":
                  case "mouseup":
                  case "paste":
                  case "pause":
                  case "play":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointerup":
                  case "ratechange":
                  case "reset":
                  case "resize":
                  case "seeked":
                  case "submit":
                  case "touchcancel":
                  case "touchend":
                  case "touchstart":
                  case "volumechange":
                  case "change":
                  case "selectionchange":
                  case "textInput":
                  case "compositionstart":
                  case "compositionend":
                  case "compositionupdate":
                  case "beforeblur":
                  case "afterblur":
                  case "beforeinput":
                  case "blur":
                  case "fullscreenchange":
                  case "focus":
                  case "hashchange":
                  case "popstate":
                  case "select":
                  case "selectstart":
                    return 1;

                  case "drag":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "mousemove":
                  case "mouseout":
                  case "mouseover":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "scroll":
                  case "toggle":
                  case "touchmove":
                  case "wheel":
                  case "mouseenter":
                  case "mouseleave":
                  case "pointerenter":
                  case "pointerleave":
                    return 4;

                  case "message":
                    switch (ec()) {
                      case fc:
                        return 1;

                      case gc:
                        return 4;

                      case hc:
                      case ic:
                        return 16;

                      case jc:
                        return 536870912;

                      default:
                        return 16;
                    }

                  default:
                    return 16;
                }
            }
            var kd = null, ld = null, md = null;
            function nd() {
                if (md) return md;
                var a, d, b = ld, c = b.length, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
                for (a = 0; a < c && b[a] === e[a]; a++) ;
                var g = c - a;
                for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
                return md = e.slice(a, 1 < d ? 1 - d : void 0);
            }
            function od(a) {
                var b = a.keyCode;
                "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
                10 === a && (a = 13);
                return 32 <= a || 13 === a ? a : 0;
            }
            function pd() {
                return !0;
            }
            function qd() {
                return !1;
            }
            function rd(a) {
                function b(b, d, e, f, g) {
                    this._reactName = b;
                    this._targetInst = e;
                    this.type = d;
                    this.nativeEvent = f;
                    this.target = g;
                    this.currentTarget = null;
                    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
                    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
                    this.isPropagationStopped = qd;
                    return this;
                }
                A(b.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var a = this.nativeEvent;
                        a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), 
                        this.isDefaultPrevented = pd);
                    },
                    stopPropagation: function() {
                        var a = this.nativeEvent;
                        a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), 
                        this.isPropagationStopped = pd);
                    },
                    persist: function() {},
                    isPersistent: pd
                });
                return b;
            }
            var wd, xd, yd, sd = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(a) {
                    return a.timeStamp || Date.now();
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, td = rd(sd), ud = A({}, sd, {
                view: 0,
                detail: 0
            }), vd = rd(ud), Ad = A({}, ud, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: zd,
                button: 0,
                buttons: 0,
                relatedTarget: function(a) {
                    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
                },
                movementX: function(a) {
                    if ("movementX" in a) return a.movementX;
                    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, 
                    yd = a);
                    return wd;
                },
                movementY: function(a) {
                    return "movementY" in a ? a.movementY : xd;
                }
            }), Bd = rd(Ad), Cd = A({}, Ad, {
                dataTransfer: 0
            }), Dd = rd(Cd), Ed = A({}, ud, {
                relatedTarget: 0
            }), Fd = rd(Ed), Gd = A({}, sd, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }), Hd = rd(Gd), Id = A({}, sd, {
                clipboardData: function(a) {
                    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
                }
            }), Jd = rd(Id), Kd = A({}, sd, {
                data: 0
            }), Ld = rd(Kd), Md = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, Nd = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, Od = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function Pd(a) {
                var b = this.nativeEvent;
                return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
            }
            function zd() {
                return Pd;
            }
            var Qd = A({}, ud, {
                key: function(a) {
                    if (a.key) {
                        var b = Md[a.key] || a.key;
                        if ("Unidentified" !== b) return b;
                    }
                    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: zd,
                charCode: function(a) {
                    return "keypress" === a.type ? od(a) : 0;
                },
                keyCode: function(a) {
                    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
                },
                which: function(a) {
                    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
                }
            }), Rd = rd(Qd), Sd = A({}, Ad, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }), Td = rd(Sd), Ud = A({}, ud, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: zd
            }), Vd = rd(Ud), Wd = A({}, sd, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }), Xd = rd(Wd), Yd = A({}, Ad, {
                deltaX: function(a) {
                    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
                },
                deltaY: function(a) {
                    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
                },
                deltaZ: 0,
                deltaMode: 0
            }), Zd = rd(Yd), $d = [ 9, 13, 27, 32 ], ae = ia && "CompositionEvent" in window, be = null;
            ia && "documentMode" in document && (be = document.documentMode);
            var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
            function ge(a, b) {
                switch (a) {
                  case "keyup":
                    return -1 !== $d.indexOf(b.keyCode);

                  case "keydown":
                    return 229 !== b.keyCode;

                  case "keypress":
                  case "mousedown":
                  case "focusout":
                    return !0;

                  default:
                    return !1;
                }
            }
            function he(a) {
                a = a.detail;
                return "object" === typeof a && "data" in a ? a.data : null;
            }
            var ie = !1;
            function je(a, b) {
                switch (a) {
                  case "compositionend":
                    return he(b);

                  case "keypress":
                    if (32 !== b.which) return null;
                    fe = !0;
                    return ee;

                  case "textInput":
                    return a = b.data, a === ee && fe ? null : a;

                  default:
                    return null;
                }
            }
            function ke(a, b) {
                if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, 
                ie = !1, a) : null;
                switch (a) {
                  case "paste":
                    return null;

                  case "keypress":
                    if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                        if (b.char && 1 < b.char.length) return b.char;
                        if (b.which) return String.fromCharCode(b.which);
                    }
                    return null;

                  case "compositionend":
                    return de && "ko" !== b.locale ? null : b.data;

                  default:
                    return null;
                }
            }
            var le = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function me(a) {
                var b = a && a.nodeName && a.nodeName.toLowerCase();
                return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
            }
            function ne(a, b, c, d) {
                Eb(d);
                b = oe(b, "onChange");
                0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
                    event: c,
                    listeners: b
                }));
            }
            var pe = null, qe = null;
            function re(a) {
                se(a, 0);
            }
            function te(a) {
                var b = ue(a);
                if (Wa(b)) return a;
            }
            function ve(a, b) {
                if ("change" === a) return b;
            }
            var we = !1;
            if (ia) {
                var xe;
                if (ia) {
                    var ye = "oninput" in document;
                    if (!ye) {
                        var ze = document.createElement("div");
                        ze.setAttribute("oninput", "return;");
                        ye = "function" === typeof ze.oninput;
                    }
                    xe = ye;
                } else xe = !1;
                we = xe && (!document.documentMode || 9 < document.documentMode);
            }
            function Ae() {
                pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
            }
            function Be(a) {
                if ("value" === a.propertyName && te(qe)) {
                    var b = [];
                    ne(b, qe, a, xb(a));
                    Jb(re, b);
                }
            }
            function Ce(a, b, c) {
                "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
            }
            function De(a) {
                if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
            }
            function Ee(a, b) {
                if ("click" === a) return te(b);
            }
            function Fe(a, b) {
                if ("input" === a || "change" === a) return te(b);
            }
            function Ge(a, b) {
                return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
            }
            var He = "function" === typeof Object.is ? Object.is : Ge;
            function Ie(a, b) {
                if (He(a, b)) return !0;
                if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
                var c = Object.keys(a), d = Object.keys(b);
                if (c.length !== d.length) return !1;
                for (d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
                }
                return !0;
            }
            function Je(a) {
                for (;a && a.firstChild; ) a = a.firstChild;
                return a;
            }
            function Ke(a, b) {
                var c = Je(a);
                a = 0;
                for (var d; c; ) {
                    if (3 === c.nodeType) {
                        d = a + c.textContent.length;
                        if (a <= b && d >= b) return {
                            node: c,
                            offset: b - a
                        };
                        a = d;
                    }
                    a: {
                        for (;c; ) {
                            if (c.nextSibling) {
                                c = c.nextSibling;
                                break a;
                            }
                            c = c.parentNode;
                        }
                        c = void 0;
                    }
                    c = Je(c);
                }
            }
            function Le(a, b) {
                return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
            }
            function Me() {
                for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
                    try {
                        var c = "string" === typeof b.contentWindow.location.href;
                    } catch (d) {
                        c = !1;
                    }
                    if (c) a = b.contentWindow; else break;
                    b = Xa(a.document);
                }
                return b;
            }
            function Ne(a) {
                var b = a && a.nodeName && a.nodeName.toLowerCase();
                return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
            }
            function Oe(a) {
                var b = Me(), c = a.focusedElem, d = a.selectionRange;
                if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
                    if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, 
                    c.selectionEnd = Math.min(a, c.value.length); else if (a = (b = c.ownerDocument || document) && b.defaultView || window, 
                    a.getSelection) {
                        a = a.getSelection();
                        var e = c.textContent.length, f = Math.min(d.start, e);
                        d = void 0 === d.end ? f : Math.min(d.end, e);
                        !a.extend && f > d && (e = d, d = f, f = e);
                        e = Ke(c, f);
                        var g = Ke(c, d);
                        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), 
                        b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), 
                        a.addRange(b)));
                    }
                    b = [];
                    for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({
                        element: a,
                        left: a.scrollLeft,
                        top: a.scrollTop
                    });
                    "function" === typeof c.focus && c.focus();
                    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
                }
            }
            var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
            function Ue(a, b, c) {
                var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
                Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
                    start: d.selectionStart,
                    end: d.selectionEnd
                } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), 
                d = {
                    anchorNode: d.anchorNode,
                    anchorOffset: d.anchorOffset,
                    focusNode: d.focusNode,
                    focusOffset: d.focusOffset
                }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), 
                a.push({
                    event: b,
                    listeners: d
                }), b.target = Qe)));
            }
            function Ve(a, b) {
                var c = {};
                c[a.toLowerCase()] = b.toLowerCase();
                c["Webkit" + a] = "webkit" + b;
                c["Moz" + a] = "moz" + b;
                return c;
            }
            var We = {
                animationend: Ve("Animation", "AnimationEnd"),
                animationiteration: Ve("Animation", "AnimationIteration"),
                animationstart: Ve("Animation", "AnimationStart"),
                transitionend: Ve("Transition", "TransitionEnd")
            }, Xe = {}, Ye = {};
            ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, 
            delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
            function Ze(a) {
                if (Xe[a]) return Xe[a];
                if (!We[a]) return a;
                var c, b = We[a];
                for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
                return a;
            }
            var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = new Map, ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
            function ff(a, b) {
                df.set(a, b);
                fa(b, [ a ]);
            }
            for (var gf = 0; gf < ef.length; gf++) {
                var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
                ff(jf, "on" + kf);
            }
            ff($e, "onAnimationEnd");
            ff(af, "onAnimationIteration");
            ff(bf, "onAnimationStart");
            ff("dblclick", "onDoubleClick");
            ff("focusin", "onFocus");
            ff("focusout", "onBlur");
            ff(cf, "onTransitionEnd");
            ha("onMouseEnter", [ "mouseout", "mouseover" ]);
            ha("onMouseLeave", [ "mouseout", "mouseover" ]);
            ha("onPointerEnter", [ "pointerout", "pointerover" ]);
            ha("onPointerLeave", [ "pointerout", "pointerover" ]);
            fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
            fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
            fa("onBeforeInput", [ "compositionend", "keypress", "textInput", "paste" ]);
            fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
            fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
            fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
            function nf(a, b, c) {
                var d = a.type || "unknown-event";
                a.currentTarget = c;
                Ub(d, b, void 0, a);
                a.currentTarget = null;
            }
            function se(a, b) {
                b = 0 !== (b & 4);
                for (var c = 0; c < a.length; c++) {
                    var d = a[c], e = d.event;
                    d = d.listeners;
                    a: {
                        var f = void 0;
                        if (b) for (var g = d.length - 1; 0 <= g; g--) {
                            var h = d[g], k = h.instance, l = h.currentTarget;
                            h = h.listener;
                            if (k !== f && e.isPropagationStopped()) break a;
                            nf(e, h, l);
                            f = k;
                        } else for (g = 0; g < d.length; g++) {
                            h = d[g];
                            k = h.instance;
                            l = h.currentTarget;
                            h = h.listener;
                            if (k !== f && e.isPropagationStopped()) break a;
                            nf(e, h, l);
                            f = k;
                        }
                    }
                }
                if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
            }
            function D(a, b) {
                var c = b[of];
                void 0 === c && (c = b[of] = new Set);
                var d = a + "__bubble";
                c.has(d) || (pf(b, a, 2, !1), c.add(d));
            }
            function qf(a, b, c) {
                var d = 0;
                b && (d |= 4);
                pf(c, a, d, b);
            }
            var rf = "_reactListening" + Math.random().toString(36).slice(2);
            function sf(a) {
                if (!a[rf]) {
                    a[rf] = !0;
                    da.forEach((function(b) {
                        "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
                    }));
                    var b = 9 === a.nodeType ? a : a.ownerDocument;
                    null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
                }
            }
            function pf(a, b, c, d) {
                switch (jd(b)) {
                  case 1:
                    var e = ed;
                    break;

                  case 4:
                    e = gd;
                    break;

                  default:
                    e = fd;
                }
                c = e.bind(null, b, c, a);
                e = void 0;
                !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
                d ? void 0 !== e ? a.addEventListener(b, c, {
                    capture: !0,
                    passive: e
                }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
                    passive: e
                }) : a.addEventListener(b, c, !1);
            }
            function hd(a, b, c, d, e) {
                var f = d;
                if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
                    if (null === d) return;
                    var g = d.tag;
                    if (3 === g || 4 === g) {
                        var h = d.stateNode.containerInfo;
                        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
                        if (4 === g) for (g = d.return; null !== g; ) {
                            var k = g.tag;
                            if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
                            g = g.return;
                        }
                        for (;null !== h; ) {
                            g = Wc(h);
                            if (null === g) return;
                            k = g.tag;
                            if (5 === k || 6 === k) {
                                d = f = g;
                                continue a;
                            }
                            h = h.parentNode;
                        }
                    }
                    d = d.return;
                }
                Jb((function() {
                    var d = f, e = xb(c), g = [];
                    a: {
                        var h = df.get(a);
                        if (void 0 !== h) {
                            var k = td, n = a;
                            switch (a) {
                              case "keypress":
                                if (0 === od(c)) break a;

                              case "keydown":
                              case "keyup":
                                k = Rd;
                                break;

                              case "focusin":
                                n = "focus";
                                k = Fd;
                                break;

                              case "focusout":
                                n = "blur";
                                k = Fd;
                                break;

                              case "beforeblur":
                              case "afterblur":
                                k = Fd;
                                break;

                              case "click":
                                if (2 === c.button) break a;

                              case "auxclick":
                              case "dblclick":
                              case "mousedown":
                              case "mousemove":
                              case "mouseup":
                              case "mouseout":
                              case "mouseover":
                              case "contextmenu":
                                k = Bd;
                                break;

                              case "drag":
                              case "dragend":
                              case "dragenter":
                              case "dragexit":
                              case "dragleave":
                              case "dragover":
                              case "dragstart":
                              case "drop":
                                k = Dd;
                                break;

                              case "touchcancel":
                              case "touchend":
                              case "touchmove":
                              case "touchstart":
                                k = Vd;
                                break;

                              case $e:
                              case af:
                              case bf:
                                k = Hd;
                                break;

                              case cf:
                                k = Xd;
                                break;

                              case "scroll":
                                k = vd;
                                break;

                              case "wheel":
                                k = Zd;
                                break;

                              case "copy":
                              case "cut":
                              case "paste":
                                k = Jd;
                                break;

                              case "gotpointercapture":
                              case "lostpointercapture":
                              case "pointercancel":
                              case "pointerdown":
                              case "pointermove":
                              case "pointerout":
                              case "pointerover":
                              case "pointerup":
                                k = Td;
                            }
                            var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
                            t = [];
                            for (var u, w = d; null !== w; ) {
                                u = w;
                                var F = u.stateNode;
                                5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
                                if (J) break;
                                w = w.return;
                            }
                            0 < t.length && (h = new k(h, n, null, c, e), g.push({
                                event: h,
                                listeners: t
                            }));
                        }
                    }
                    if (0 === (b & 7)) {
                        a: {
                            h = "mouseover" === a || "pointerover" === a;
                            k = "mouseout" === a || "pointerout" === a;
                            if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
                            if (k || h) {
                                h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                                if (k) {
                                    if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), 
                                    n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                                } else k = null, n = d;
                                if (k !== n) {
                                    t = Bd;
                                    F = "onMouseLeave";
                                    x = "onMouseEnter";
                                    w = "mouse";
                                    if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", 
                                    w = "pointer";
                                    J = null == k ? h : ue(k);
                                    u = null == n ? h : ue(n);
                                    h = new t(F, w + "leave", k, c, e);
                                    h.target = J;
                                    h.relatedTarget = u;
                                    F = null;
                                    Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, 
                                    F = t);
                                    J = F;
                                    if (k && n) b: {
                                        t = k;
                                        x = n;
                                        w = 0;
                                        for (u = t; u; u = vf(u)) w++;
                                        u = 0;
                                        for (F = x; F; F = vf(F)) u++;
                                        for (;0 < w - u; ) t = vf(t), w--;
                                        for (;0 < u - w; ) x = vf(x), u--;
                                        for (;w--; ) {
                                            if (t === x || null !== x && t === x.alternate) break b;
                                            t = vf(t);
                                            x = vf(x);
                                        }
                                        t = null;
                                    } else t = null;
                                    null !== k && wf(g, h, k, t, !1);
                                    null !== n && null !== J && wf(g, J, n, t, !0);
                                }
                            }
                        }
                        a: {
                            h = d ? ue(d) : window;
                            k = h.nodeName && h.nodeName.toLowerCase();
                            if ("select" === k || "input" === k && "file" === h.type) var na = ve; else if (me(h)) if (we) na = Fe; else {
                                na = De;
                                var xa = Ce;
                            } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
                            if (na && (na = na(a, d))) {
                                ne(g, na, c, e);
                                break a;
                            }
                            xa && xa(a, h, d);
                            "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
                        }
                        xa = d ? ue(d) : window;
                        switch (a) {
                          case "focusin":
                            if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
                            break;

                          case "focusout":
                            Se = Re = Qe = null;
                            break;

                          case "mousedown":
                            Te = !0;
                            break;

                          case "contextmenu":
                          case "mouseup":
                          case "dragend":
                            Te = !1;
                            Ue(g, c, e);
                            break;

                          case "selectionchange":
                            if (Pe) break;

                          case "keydown":
                          case "keyup":
                            Ue(g, c, e);
                        }
                        var $a;
                        if (ae) b: {
                            switch (a) {
                              case "compositionstart":
                                var ba = "onCompositionStart";
                                break b;

                              case "compositionend":
                                ba = "onCompositionEnd";
                                break b;

                              case "compositionupdate":
                                ba = "onCompositionUpdate";
                                break b;
                            }
                            ba = void 0;
                        } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
                        ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, 
                        ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), 
                        g.push({
                            event: ba,
                            listeners: xa
                        }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
                        if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), 
                        g.push({
                            event: e,
                            listeners: d
                        }), e.data = $a);
                    }
                    se(g, b);
                }));
            }
            function tf(a, b, c) {
                return {
                    instance: a,
                    listener: b,
                    currentTarget: c
                };
            }
            function oe(a, b) {
                for (var c = b + "Capture", d = []; null !== a; ) {
                    var e = a, f = e.stateNode;
                    5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), 
                    f = Kb(a, b), null != f && d.push(tf(a, f, e)));
                    a = a.return;
                }
                return d;
            }
            function vf(a) {
                if (null === a) return null;
                do {
                    a = a.return;
                } while (a && 5 !== a.tag);
                return a ? a : null;
            }
            function wf(a, b, c, d, e) {
                for (var f = b._reactName, g = []; null !== c && c !== d; ) {
                    var h = c, k = h.alternate, l = h.stateNode;
                    if (null !== k && k === d) break;
                    5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), 
                    null != k && g.push(tf(c, k, h))));
                    c = c.return;
                }
                0 !== g.length && a.push({
                    event: b,
                    listeners: g
                });
            }
            var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
            function zf(a) {
                return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
            }
            function Af(a, b, c) {
                b = zf(b);
                if (zf(a) !== b && c) throw Error(p(425));
            }
            function Bf() {}
            var Cf = null, Df = null;
            function Ef(a, b) {
                return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
            }
            var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
                return Hf.resolve(null).then(a).catch(If);
            } : Ff;
            function If(a) {
                setTimeout((function() {
                    throw a;
                }));
            }
            function Kf(a, b) {
                var c = b, d = 0;
                do {
                    var e = c.nextSibling;
                    a.removeChild(c);
                    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
                        if (0 === d) {
                            a.removeChild(e);
                            bd(b);
                            return;
                        }
                        d--;
                    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
                    c = e;
                } while (c);
                bd(b);
            }
            function Lf(a) {
                for (;null != a; a = a.nextSibling) {
                    var b = a.nodeType;
                    if (1 === b || 3 === b) break;
                    if (8 === b) {
                        b = a.data;
                        if ("$" === b || "$!" === b || "$?" === b) break;
                        if ("/$" === b) return null;
                    }
                }
                return a;
            }
            function Mf(a) {
                a = a.previousSibling;
                for (var b = 0; a; ) {
                    if (8 === a.nodeType) {
                        var c = a.data;
                        if ("$" === c || "$!" === c || "$?" === c) {
                            if (0 === b) return a;
                            b--;
                        } else "/$" === c && b++;
                    }
                    a = a.previousSibling;
                }
                return null;
            }
            var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
            function Wc(a) {
                var b = a[Of];
                if (b) return b;
                for (var c = a.parentNode; c; ) {
                    if (b = c[uf] || c[Of]) {
                        c = b.alternate;
                        if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
                            if (c = a[Of]) return c;
                            a = Mf(a);
                        }
                        return b;
                    }
                    a = c;
                    c = a.parentNode;
                }
                return null;
            }
            function Cb(a) {
                a = a[Of] || a[uf];
                return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
            }
            function ue(a) {
                if (5 === a.tag || 6 === a.tag) return a.stateNode;
                throw Error(p(33));
            }
            function Db(a) {
                return a[Pf] || null;
            }
            var Sf = [], Tf = -1;
            function Uf(a) {
                return {
                    current: a
                };
            }
            function E(a) {
                0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
            }
            function G(a, b) {
                Tf++;
                Sf[Tf] = a.current;
                a.current = b;
            }
            var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
            function Yf(a, b) {
                var c = a.type.contextTypes;
                if (!c) return Vf;
                var d = a.stateNode;
                if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
                var f, e = {};
                for (f in c) e[f] = b[f];
                d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
                return e;
            }
            function Zf(a) {
                a = a.childContextTypes;
                return null !== a && void 0 !== a;
            }
            function $f() {
                E(Wf);
                E(H);
            }
            function ag(a, b, c) {
                if (H.current !== Vf) throw Error(p(168));
                G(H, b);
                G(Wf, c);
            }
            function bg(a, b, c) {
                var d = a.stateNode;
                b = b.childContextTypes;
                if ("function" !== typeof d.getChildContext) return c;
                d = d.getChildContext();
                for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
                return A({}, c, d);
            }
            function cg(a) {
                a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
                Xf = H.current;
                G(H, a);
                G(Wf, Wf.current);
                return !0;
            }
            function dg(a, b, c) {
                var d = a.stateNode;
                if (!d) throw Error(p(169));
                c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), 
                G(H, a)) : E(Wf);
                G(Wf, c);
            }
            var eg = null, fg = !1, gg = !1;
            function hg(a) {
                null === eg ? eg = [ a ] : eg.push(a);
            }
            function ig(a) {
                fg = !0;
                hg(a);
            }
            function jg() {
                if (!gg && null !== eg) {
                    gg = !0;
                    var a = 0, b = C;
                    try {
                        var c = eg;
                        for (C = 1; a < c.length; a++) {
                            var d = c[a];
                            do {
                                d = d(!0);
                            } while (null !== d);
                        }
                        eg = null;
                        fg = !1;
                    } catch (e) {
                        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
                    } finally {
                        C = b, gg = !1;
                    }
                }
                return null;
            }
            var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
            function tg(a, b) {
                kg[lg++] = ng;
                kg[lg++] = mg;
                mg = a;
                ng = b;
            }
            function ug(a, b, c) {
                og[pg++] = rg;
                og[pg++] = sg;
                og[pg++] = qg;
                qg = a;
                var d = rg;
                a = sg;
                var e = 32 - oc(d) - 1;
                d &= ~(1 << e);
                c += 1;
                var f = 32 - oc(b) + e;
                if (30 < f) {
                    var g = e - e % 5;
                    f = (d & (1 << g) - 1).toString(32);
                    d >>= g;
                    e -= g;
                    rg = 1 << 32 - oc(b) + e | c << e | d;
                    sg = f + a;
                } else rg = 1 << f | c << e | d, sg = a;
            }
            function vg(a) {
                null !== a.return && (tg(a, 1), ug(a, 1, 0));
            }
            function wg(a) {
                for (;a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
                for (;a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], 
                og[pg] = null;
            }
            var xg = null, yg = null, I = !1, zg = null;
            function Ag(a, b) {
                var c = Bg(5, null, null, 0);
                c.elementType = "DELETED";
                c.stateNode = b;
                c.return = a;
                b = a.deletions;
                null === b ? (a.deletions = [ c ], a.flags |= 16) : b.push(c);
            }
            function Cg(a, b) {
                switch (a.tag) {
                  case 5:
                    var c = a.type;
                    b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
                    return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;

                  case 6:
                    return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, 
                    xg = a, yg = null, !0) : !1;

                  case 13:
                    return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
                        id: rg,
                        overflow: sg
                    } : null, a.memoizedState = {
                        dehydrated: b,
                        treeContext: c,
                        retryLane: 1073741824
                    }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, 
                    yg = null, !0) : !1;

                  default:
                    return !1;
                }
            }
            function Dg(a) {
                return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
            }
            function Eg(a) {
                if (I) {
                    var b = yg;
                    if (b) {
                        var c = b;
                        if (!Cg(a, b)) {
                            if (Dg(a)) throw Error(p(418));
                            b = Lf(c.nextSibling);
                            var d = xg;
                            b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
                        }
                    } else {
                        if (Dg(a)) throw Error(p(418));
                        a.flags = a.flags & -4097 | 2;
                        I = !1;
                        xg = a;
                    }
                }
            }
            function Fg(a) {
                for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
                xg = a;
            }
            function Gg(a) {
                if (a !== xg) return !1;
                if (!I) return Fg(a), I = !0, !1;
                var b;
                (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
                if (b && (b = yg)) {
                    if (Dg(a)) throw Hg(), Error(p(418));
                    for (;b; ) Ag(a, b), b = Lf(b.nextSibling);
                }
                Fg(a);
                if (13 === a.tag) {
                    a = a.memoizedState;
                    a = null !== a ? a.dehydrated : null;
                    if (!a) throw Error(p(317));
                    a: {
                        a = a.nextSibling;
                        for (b = 0; a; ) {
                            if (8 === a.nodeType) {
                                var c = a.data;
                                if ("/$" === c) {
                                    if (0 === b) {
                                        yg = Lf(a.nextSibling);
                                        break a;
                                    }
                                    b--;
                                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                            }
                            a = a.nextSibling;
                        }
                        yg = null;
                    }
                } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
                return !0;
            }
            function Hg() {
                for (var a = yg; a; ) a = Lf(a.nextSibling);
            }
            function Ig() {
                yg = xg = null;
                I = !1;
            }
            function Jg(a) {
                null === zg ? zg = [ a ] : zg.push(a);
            }
            var Kg = ua.ReactCurrentBatchConfig;
            function Lg(a, b, c) {
                a = c.ref;
                if (null !== a && "function" !== typeof a && "object" !== typeof a) {
                    if (c._owner) {
                        c = c._owner;
                        if (c) {
                            if (1 !== c.tag) throw Error(p(309));
                            var d = c.stateNode;
                        }
                        if (!d) throw Error(p(147, a));
                        var e = d, f = "" + a;
                        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
                        b = function(a) {
                            var b = e.refs;
                            null === a ? delete b[f] : b[f] = a;
                        };
                        b._stringRef = f;
                        return b;
                    }
                    if ("string" !== typeof a) throw Error(p(284));
                    if (!c._owner) throw Error(p(290, a));
                }
                return a;
            }
            function Mg(a, b) {
                a = Object.prototype.toString.call(b);
                throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
            }
            function Ng(a) {
                var b = a._init;
                return b(a._payload);
            }
            function Og(a) {
                function b(b, c) {
                    if (a) {
                        var d = b.deletions;
                        null === d ? (b.deletions = [ c ], b.flags |= 16) : d.push(c);
                    }
                }
                function c(c, d) {
                    if (!a) return null;
                    for (;null !== d; ) b(c, d), d = d.sibling;
                    return null;
                }
                function d(a, b) {
                    for (a = new Map; null !== b; ) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), 
                    b = b.sibling;
                    return a;
                }
                function e(a, b) {
                    a = Pg(a, b);
                    a.index = 0;
                    a.sibling = null;
                    return a;
                }
                function f(b, c, d) {
                    b.index = d;
                    if (!a) return b.flags |= 1048576, c;
                    d = b.alternate;
                    if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
                    b.flags |= 2;
                    return c;
                }
                function g(b) {
                    a && null === b.alternate && (b.flags |= 2);
                    return b;
                }
                function h(a, b, c, d) {
                    if (null === b || 6 !== b.tag) return b = Qg(c, a.mode, d), b.return = a, b;
                    b = e(b, c);
                    b.return = a;
                    return b;
                }
                function k(a, b, c, d) {
                    var f = c.type;
                    if (f === ya) return m(a, b, c.props.children, d, c.key);
                    if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && Ng(f) === b.type)) return d = e(b, c.props), 
                    d.ref = Lg(a, b, c), d.return = a, d;
                    d = Rg(c.type, c.key, c.props, null, a.mode, d);
                    d.ref = Lg(a, b, c);
                    d.return = a;
                    return d;
                }
                function l(a, b, c, d) {
                    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Sg(c, a.mode, d), 
                    b.return = a, b;
                    b = e(b, c.children || []);
                    b.return = a;
                    return b;
                }
                function m(a, b, c, d, f) {
                    if (null === b || 7 !== b.tag) return b = Tg(c, a.mode, d, f), b.return = a, b;
                    b = e(b, c);
                    b.return = a;
                    return b;
                }
                function q(a, b, c) {
                    if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Qg("" + b, a.mode, c), 
                    b.return = a, b;
                    if ("object" === typeof b && null !== b) {
                        switch (b.$$typeof) {
                          case va:
                            return c = Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = Lg(a, null, b), 
                            c.return = a, c;

                          case wa:
                            return b = Sg(b, a.mode, c), b.return = a, b;

                          case Ha:
                            var d = b._init;
                            return q(a, d(b._payload), c);
                        }
                        if (eb(b) || Ka(b)) return b = Tg(b, a.mode, c, null), b.return = a, b;
                        Mg(a, b);
                    }
                    return null;
                }
                function r(a, b, c, d) {
                    var e = null !== b ? b.key : null;
                    if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
                    if ("object" === typeof c && null !== c) {
                        switch (c.$$typeof) {
                          case va:
                            return c.key === e ? k(a, b, c, d) : null;

                          case wa:
                            return c.key === e ? l(a, b, c, d) : null;

                          case Ha:
                            return e = c._init, r(a, b, e(c._payload), d);
                        }
                        if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
                        Mg(a, c);
                    }
                    return null;
                }
                function y(a, b, c, d, e) {
                    if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, 
                    h(b, a, "" + d, e);
                    if ("object" === typeof d && null !== d) {
                        switch (d.$$typeof) {
                          case va:
                            return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);

                          case wa:
                            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);

                          case Ha:
                            var f = d._init;
                            return y(a, b, c, f(d._payload), e);
                        }
                        if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
                        Mg(b, d);
                    }
                    return null;
                }
                function n(e, g, h, k) {
                    for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
                        u.index > w ? (x = u, u = null) : x = u.sibling;
                        var n = r(e, u, h[w], k);
                        if (null === n) {
                            null === u && (u = x);
                            break;
                        }
                        a && u && null === n.alternate && b(e, u);
                        g = f(n, g, w);
                        null === m ? l = n : m.sibling = n;
                        m = n;
                        u = x;
                    }
                    if (w === h.length) return c(e, u), I && tg(e, w), l;
                    if (null === u) {
                        for (;w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, 
                        m = u);
                        I && tg(e, w);
                        return l;
                    }
                    for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), 
                    g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
                    a && u.forEach((function(a) {
                        return b(e, a);
                    }));
                    I && tg(e, w);
                    return l;
                }
                function t(e, g, h, k) {
                    var l = Ka(h);
                    if ("function" !== typeof l) throw Error(p(150));
                    h = l.call(h);
                    if (null == h) throw Error(p(151));
                    for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, 
                    n = h.next()) {
                        m.index > w ? (x = m, m = null) : x = m.sibling;
                        var t = r(e, m, n.value, k);
                        if (null === t) {
                            null === m && (m = x);
                            break;
                        }
                        a && m && null === t.alternate && b(e, m);
                        g = f(t, g, w);
                        null === u ? l = t : u.sibling = t;
                        u = t;
                        m = x;
                    }
                    if (n.done) return c(e, m), I && tg(e, w), l;
                    if (null === m) {
                        for (;!n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), 
                        null === u ? l = n : u.sibling = n, u = n);
                        I && tg(e, w);
                        return l;
                    }
                    for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), 
                    g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
                    a && m.forEach((function(a) {
                        return b(e, a);
                    }));
                    I && tg(e, w);
                    return l;
                }
                function J(a, d, f, h) {
                    "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
                    if ("object" === typeof f && null !== f) {
                        switch (f.$$typeof) {
                          case va:
                            a: {
                                for (var k = f.key, l = d; null !== l; ) {
                                    if (l.key === k) {
                                        k = f.type;
                                        if (k === ya) {
                                            if (7 === l.tag) {
                                                c(a, l.sibling);
                                                d = e(l, f.props.children);
                                                d.return = a;
                                                a = d;
                                                break a;
                                            }
                                        } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && Ng(k) === l.type) {
                                            c(a, l.sibling);
                                            d = e(l, f.props);
                                            d.ref = Lg(a, l, f);
                                            d.return = a;
                                            a = d;
                                            break a;
                                        }
                                        c(a, l);
                                        break;
                                    } else b(a, l);
                                    l = l.sibling;
                                }
                                f.type === ya ? (d = Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Rg(f.type, f.key, f.props, null, a.mode, h), 
                                h.ref = Lg(a, d, f), h.return = a, a = h);
                            }
                            return g(a);

                          case wa:
                            a: {
                                for (l = f.key; null !== d; ) {
                                    if (d.key === l) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                        c(a, d.sibling);
                                        d = e(d, f.children || []);
                                        d.return = a;
                                        a = d;
                                        break a;
                                    } else {
                                        c(a, d);
                                        break;
                                    } else b(a, d);
                                    d = d.sibling;
                                }
                                d = Sg(f, a.mode, h);
                                d.return = a;
                                a = d;
                            }
                            return g(a);

                          case Ha:
                            return l = f._init, J(a, d, l(f._payload), h);
                        }
                        if (eb(f)) return n(a, d, f, h);
                        if (Ka(f)) return t(a, d, f, h);
                        Mg(a, f);
                    }
                    return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, 
                    null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), 
                    d = Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
                }
                return J;
            }
            var Ug = Og(!0), Vg = Og(!1), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
            function $g() {
                Zg = Yg = Xg = null;
            }
            function ah(a) {
                var b = Wg.current;
                E(Wg);
                a._currentValue = b;
            }
            function bh(a, b, c) {
                for (;null !== a; ) {
                    var d = a.alternate;
                    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
                    if (a === c) break;
                    a = a.return;
                }
            }
            function ch(a, b) {
                Xg = a;
                Zg = Yg = null;
                a = a.dependencies;
                null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = !0), a.firstContext = null);
            }
            function eh(a) {
                var b = a._currentValue;
                if (Zg !== a) if (a = {
                    context: a,
                    memoizedValue: b,
                    next: null
                }, null === Yg) {
                    if (null === Xg) throw Error(p(308));
                    Yg = a;
                    Xg.dependencies = {
                        lanes: 0,
                        firstContext: a
                    };
                } else Yg = Yg.next = a;
                return b;
            }
            var fh = null;
            function gh(a) {
                null === fh ? fh = [ a ] : fh.push(a);
            }
            function hh(a, b, c, d) {
                var e = b.interleaved;
                null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
                b.interleaved = c;
                return ih(a, d);
            }
            function ih(a, b) {
                a.lanes |= b;
                var c = a.alternate;
                null !== c && (c.lanes |= b);
                c = a;
                for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), 
                c = a, a = a.return;
                return 3 === c.tag ? c.stateNode : null;
            }
            var jh = !1;
            function kh(a) {
                a.updateQueue = {
                    baseState: a.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                };
            }
            function lh(a, b) {
                a = a.updateQueue;
                b.updateQueue === a && (b.updateQueue = {
                    baseState: a.baseState,
                    firstBaseUpdate: a.firstBaseUpdate,
                    lastBaseUpdate: a.lastBaseUpdate,
                    shared: a.shared,
                    effects: a.effects
                });
            }
            function mh(a, b) {
                return {
                    eventTime: a,
                    lane: b,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                };
            }
            function nh(a, b, c) {
                var d = a.updateQueue;
                if (null === d) return null;
                d = d.shared;
                if (0 !== (K & 2)) {
                    var e = d.pending;
                    null === e ? b.next = b : (b.next = e.next, e.next = b);
                    d.pending = b;
                    return ih(a, c);
                }
                e = d.interleaved;
                null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
                d.interleaved = b;
                return ih(a, c);
            }
            function oh(a, b, c) {
                b = b.updateQueue;
                if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
                    var d = b.lanes;
                    d &= a.pendingLanes;
                    c |= d;
                    b.lanes = c;
                    Cc(a, c);
                }
            }
            function ph(a, b) {
                var c = a.updateQueue, d = a.alternate;
                if (null !== d && (d = d.updateQueue, c === d)) {
                    var e = null, f = null;
                    c = c.firstBaseUpdate;
                    if (null !== c) {
                        do {
                            var g = {
                                eventTime: c.eventTime,
                                lane: c.lane,
                                tag: c.tag,
                                payload: c.payload,
                                callback: c.callback,
                                next: null
                            };
                            null === f ? e = f = g : f = f.next = g;
                            c = c.next;
                        } while (null !== c);
                        null === f ? e = f = b : f = f.next = b;
                    } else e = f = b;
                    c = {
                        baseState: d.baseState,
                        firstBaseUpdate: e,
                        lastBaseUpdate: f,
                        shared: d.shared,
                        effects: d.effects
                    };
                    a.updateQueue = c;
                    return;
                }
                a = c.lastBaseUpdate;
                null === a ? c.firstBaseUpdate = b : a.next = b;
                c.lastBaseUpdate = b;
            }
            function qh(a, b, c, d) {
                var e = a.updateQueue;
                jh = !1;
                var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
                if (null !== h) {
                    e.shared.pending = null;
                    var k = h, l = k.next;
                    k.next = null;
                    null === g ? f = l : g.next = l;
                    g = k;
                    var m = a.alternate;
                    null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, 
                    m.lastBaseUpdate = k));
                }
                if (null !== f) {
                    var q = e.baseState;
                    g = 0;
                    m = l = k = null;
                    h = f;
                    do {
                        var r = h.lane, y = h.eventTime;
                        if ((d & r) === r) {
                            null !== m && (m = m.next = {
                                eventTime: y,
                                lane: 0,
                                tag: h.tag,
                                payload: h.payload,
                                callback: h.callback,
                                next: null
                            });
                            a: {
                                var n = a, t = h;
                                r = b;
                                y = c;
                                switch (t.tag) {
                                  case 1:
                                    n = t.payload;
                                    if ("function" === typeof n) {
                                        q = n.call(y, q, r);
                                        break a;
                                    }
                                    q = n;
                                    break a;

                                  case 3:
                                    n.flags = n.flags & -65537 | 128;

                                  case 0:
                                    n = t.payload;
                                    r = "function" === typeof n ? n.call(y, q, r) : n;
                                    if (null === r || void 0 === r) break a;
                                    q = A({}, q, r);
                                    break a;

                                  case 2:
                                    jh = !0;
                                }
                            }
                            null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [ h ] : r.push(h));
                        } else y = {
                            eventTime: y,
                            lane: r,
                            tag: h.tag,
                            payload: h.payload,
                            callback: h.callback,
                            next: null
                        }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
                        h = h.next;
                        if (null === h) if (h = e.shared.pending, null === h) break; else r = h, h = r.next, 
                        r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
                    } while (1);
                    null === m && (k = q);
                    e.baseState = k;
                    e.firstBaseUpdate = l;
                    e.lastBaseUpdate = m;
                    b = e.shared.interleaved;
                    if (null !== b) {
                        e = b;
                        do {
                            g |= e.lane, e = e.next;
                        } while (e !== b);
                    } else null === f && (e.shared.lanes = 0);
                    rh |= g;
                    a.lanes = g;
                    a.memoizedState = q;
                }
            }
            function sh(a, b, c) {
                a = b.effects;
                b.effects = null;
                if (null !== a) for (b = 0; b < a.length; b++) {
                    var d = a[b], e = d.callback;
                    if (null !== e) {
                        d.callback = null;
                        d = c;
                        if ("function" !== typeof e) throw Error(p(191, e));
                        e.call(d);
                    }
                }
            }
            var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
            function xh(a) {
                if (a === th) throw Error(p(174));
                return a;
            }
            function yh(a, b) {
                G(wh, b);
                G(vh, a);
                G(uh, th);
                a = b.nodeType;
                switch (a) {
                  case 9:
                  case 11:
                    b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
                    break;

                  default:
                    a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
                }
                E(uh);
                G(uh, b);
            }
            function zh() {
                E(uh);
                E(vh);
                E(wh);
            }
            function Ah(a) {
                xh(wh.current);
                var b = xh(uh.current);
                var c = lb(b, a.type);
                b !== c && (G(vh, a), G(uh, c));
            }
            function Bh(a) {
                vh.current === a && (E(uh), E(vh));
            }
            var L = Uf(0);
            function Ch(a) {
                for (var b = a; null !== b; ) {
                    if (13 === b.tag) {
                        var c = b.memoizedState;
                        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
                    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
                        if (0 !== (b.flags & 128)) return b;
                    } else if (null !== b.child) {
                        b.child.return = b;
                        b = b.child;
                        continue;
                    }
                    if (b === a) break;
                    for (;null === b.sibling; ) {
                        if (null === b.return || b.return === a) return null;
                        b = b.return;
                    }
                    b.sibling.return = b.return;
                    b = b.sibling;
                }
                return null;
            }
            var Dh = [];
            function Eh() {
                for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
                Dh.length = 0;
            }
            var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = !1, Jh = !1, Kh = 0, Lh = 0;
            function P() {
                throw Error(p(321));
            }
            function Mh(a, b) {
                if (null === b) return !1;
                for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
                return !0;
            }
            function Nh(a, b, c, d, e, f) {
                Hh = f;
                M = b;
                b.memoizedState = null;
                b.updateQueue = null;
                b.lanes = 0;
                Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
                a = c(d, e);
                if (Jh) {
                    f = 0;
                    do {
                        Jh = !1;
                        Kh = 0;
                        if (25 <= f) throw Error(p(301));
                        f += 1;
                        O = N = null;
                        b.updateQueue = null;
                        Fh.current = Qh;
                        a = c(d, e);
                    } while (Jh);
                }
                Fh.current = Rh;
                b = null !== N && null !== N.next;
                Hh = 0;
                O = N = M = null;
                Ih = !1;
                if (b) throw Error(p(300));
                return a;
            }
            function Sh() {
                var a = 0 !== Kh;
                Kh = 0;
                return a;
            }
            function Th() {
                var a = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                null === O ? M.memoizedState = O = a : O = O.next = a;
                return O;
            }
            function Uh() {
                if (null === N) {
                    var a = M.alternate;
                    a = null !== a ? a.memoizedState : null;
                } else a = N.next;
                var b = null === O ? M.memoizedState : O.next;
                if (null !== b) O = b, N = a; else {
                    if (null === a) throw Error(p(310));
                    N = a;
                    a = {
                        memoizedState: N.memoizedState,
                        baseState: N.baseState,
                        baseQueue: N.baseQueue,
                        queue: N.queue,
                        next: null
                    };
                    null === O ? M.memoizedState = O = a : O = O.next = a;
                }
                return O;
            }
            function Vh(a, b) {
                return "function" === typeof b ? b(a) : b;
            }
            function Wh(a) {
                var b = Uh(), c = b.queue;
                if (null === c) throw Error(p(311));
                c.lastRenderedReducer = a;
                var d = N, e = d.baseQueue, f = c.pending;
                if (null !== f) {
                    if (null !== e) {
                        var g = e.next;
                        e.next = f.next;
                        f.next = g;
                    }
                    d.baseQueue = e = f;
                    c.pending = null;
                }
                if (null !== e) {
                    f = e.next;
                    d = d.baseState;
                    var h = g = null, k = null, l = f;
                    do {
                        var m = l.lane;
                        if ((Hh & m) === m) null !== k && (k = k.next = {
                            lane: 0,
                            action: l.action,
                            hasEagerState: l.hasEagerState,
                            eagerState: l.eagerState,
                            next: null
                        }), d = l.hasEagerState ? l.eagerState : a(d, l.action); else {
                            var q = {
                                lane: m,
                                action: l.action,
                                hasEagerState: l.hasEagerState,
                                eagerState: l.eagerState,
                                next: null
                            };
                            null === k ? (h = k = q, g = d) : k = k.next = q;
                            M.lanes |= m;
                            rh |= m;
                        }
                        l = l.next;
                    } while (null !== l && l !== f);
                    null === k ? g = d : k.next = h;
                    He(d, b.memoizedState) || (dh = !0);
                    b.memoizedState = d;
                    b.baseState = g;
                    b.baseQueue = k;
                    c.lastRenderedState = d;
                }
                a = c.interleaved;
                if (null !== a) {
                    e = a;
                    do {
                        f = e.lane, M.lanes |= f, rh |= f, e = e.next;
                    } while (e !== a);
                } else null === e && (c.lanes = 0);
                return [ b.memoizedState, c.dispatch ];
            }
            function Xh(a) {
                var b = Uh(), c = b.queue;
                if (null === c) throw Error(p(311));
                c.lastRenderedReducer = a;
                var d = c.dispatch, e = c.pending, f = b.memoizedState;
                if (null !== e) {
                    c.pending = null;
                    var g = e = e.next;
                    do {
                        f = a(f, g.action), g = g.next;
                    } while (g !== e);
                    He(f, b.memoizedState) || (dh = !0);
                    b.memoizedState = f;
                    null === b.baseQueue && (b.baseState = f);
                    c.lastRenderedState = f;
                }
                return [ f, d ];
            }
            function Yh() {}
            function Zh(a, b) {
                var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
                f && (d.memoizedState = e, dh = !0);
                d = d.queue;
                $h(ai.bind(null, c, d, a), [ a ]);
                if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
                    c.flags |= 2048;
                    bi(9, ci.bind(null, c, d, e, b), void 0, null);
                    if (null === Q) throw Error(p(349));
                    0 !== (Hh & 30) || di(c, b, e);
                }
                return e;
            }
            function di(a, b, c) {
                a.flags |= 16384;
                a = {
                    getSnapshot: b,
                    value: c
                };
                b = M.updateQueue;
                null === b ? (b = {
                    lastEffect: null,
                    stores: null
                }, M.updateQueue = b, b.stores = [ a ]) : (c = b.stores, null === c ? b.stores = [ a ] : c.push(a));
            }
            function ci(a, b, c, d) {
                b.value = c;
                b.getSnapshot = d;
                ei(b) && fi(a);
            }
            function ai(a, b, c) {
                return c((function() {
                    ei(b) && fi(a);
                }));
            }
            function ei(a) {
                var b = a.getSnapshot;
                a = a.value;
                try {
                    var c = b();
                    return !He(a, c);
                } catch (d) {
                    return !0;
                }
            }
            function fi(a) {
                var b = ih(a, 1);
                null !== b && gi(b, a, 1, -1);
            }
            function hi(a) {
                var b = Th();
                "function" === typeof a && (a = a());
                b.memoizedState = b.baseState = a;
                a = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Vh,
                    lastRenderedState: a
                };
                b.queue = a;
                a = a.dispatch = ii.bind(null, M, a);
                return [ b.memoizedState, a ];
            }
            function bi(a, b, c, d) {
                a = {
                    tag: a,
                    create: b,
                    destroy: c,
                    deps: d,
                    next: null
                };
                b = M.updateQueue;
                null === b ? (b = {
                    lastEffect: null,
                    stores: null
                }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, 
                c.next = a, a.next = d, b.lastEffect = a));
                return a;
            }
            function ji() {
                return Uh().memoizedState;
            }
            function ki(a, b, c, d) {
                var e = Th();
                M.flags |= a;
                e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
            }
            function li(a, b, c, d) {
                var e = Uh();
                d = void 0 === d ? null : d;
                var f = void 0;
                if (null !== N) {
                    var g = N.memoizedState;
                    f = g.destroy;
                    if (null !== d && Mh(d, g.deps)) {
                        e.memoizedState = bi(b, c, f, d);
                        return;
                    }
                }
                M.flags |= a;
                e.memoizedState = bi(1 | b, c, f, d);
            }
            function mi(a, b) {
                return ki(8390656, 8, a, b);
            }
            function $h(a, b) {
                return li(2048, 8, a, b);
            }
            function ni(a, b) {
                return li(4, 2, a, b);
            }
            function oi(a, b) {
                return li(4, 4, a, b);
            }
            function pi(a, b) {
                if ("function" === typeof b) return a = a(), b(a), function() {
                    b(null);
                };
                if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
                    b.current = null;
                };
            }
            function qi(a, b, c) {
                c = null !== c && void 0 !== c ? c.concat([ a ]) : null;
                return li(4, 4, pi.bind(null, b, a), c);
            }
            function ri() {}
            function si(a, b) {
                var c = Uh();
                b = void 0 === b ? null : b;
                var d = c.memoizedState;
                if (null !== d && null !== b && Mh(b, d[1])) return d[0];
                c.memoizedState = [ a, b ];
                return a;
            }
            function ti(a, b) {
                var c = Uh();
                b = void 0 === b ? null : b;
                var d = c.memoizedState;
                if (null !== d && null !== b && Mh(b, d[1])) return d[0];
                a = a();
                c.memoizedState = [ a, b ];
                return a;
            }
            function ui(a, b, c) {
                if (0 === (Hh & 21)) return a.baseState && (a.baseState = !1, dh = !0), a.memoizedState = c;
                He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = !0);
                return b;
            }
            function vi(a, b) {
                var c = C;
                C = 0 !== c && 4 > c ? c : 4;
                a(!0);
                var d = Gh.transition;
                Gh.transition = {};
                try {
                    a(!1), b();
                } finally {
                    C = c, Gh.transition = d;
                }
            }
            function wi() {
                return Uh().memoizedState;
            }
            function xi(a, b, c) {
                var d = yi(a);
                c = {
                    lane: d,
                    action: c,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (zi(a)) Ai(b, c); else if (c = hh(a, b, c, d), null !== c) {
                    var e = R();
                    gi(c, a, d, e);
                    Bi(c, b, d);
                }
            }
            function ii(a, b, c) {
                var d = yi(a), e = {
                    lane: d,
                    action: c,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (zi(a)) Ai(b, e); else {
                    var f = a.alternate;
                    if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, 
                    null !== f)) try {
                        var g = b.lastRenderedState, h = f(g, c);
                        e.hasEagerState = !0;
                        e.eagerState = h;
                        if (He(h, g)) {
                            var k = b.interleaved;
                            null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
                            b.interleaved = e;
                            return;
                        }
                    } catch (l) {}
                    c = hh(a, b, e, d);
                    null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
                }
            }
            function zi(a) {
                var b = a.alternate;
                return a === M || null !== b && b === M;
            }
            function Ai(a, b) {
                Jh = Ih = !0;
                var c = a.pending;
                null === c ? b.next = b : (b.next = c.next, c.next = b);
                a.pending = b;
            }
            function Bi(a, b, c) {
                if (0 !== (c & 4194240)) {
                    var d = b.lanes;
                    d &= a.pendingLanes;
                    c |= d;
                    b.lanes = c;
                    Cc(a, c);
                }
            }
            var Rh = {
                readContext: eh,
                useCallback: P,
                useContext: P,
                useEffect: P,
                useImperativeHandle: P,
                useInsertionEffect: P,
                useLayoutEffect: P,
                useMemo: P,
                useReducer: P,
                useRef: P,
                useState: P,
                useDebugValue: P,
                useDeferredValue: P,
                useTransition: P,
                useMutableSource: P,
                useSyncExternalStore: P,
                useId: P,
                unstable_isNewReconciler: !1
            }, Oh = {
                readContext: eh,
                useCallback: function(a, b) {
                    Th().memoizedState = [ a, void 0 === b ? null : b ];
                    return a;
                },
                useContext: eh,
                useEffect: mi,
                useImperativeHandle: function(a, b, c) {
                    c = null !== c && void 0 !== c ? c.concat([ a ]) : null;
                    return ki(4194308, 4, pi.bind(null, b, a), c);
                },
                useLayoutEffect: function(a, b) {
                    return ki(4194308, 4, a, b);
                },
                useInsertionEffect: function(a, b) {
                    return ki(4, 2, a, b);
                },
                useMemo: function(a, b) {
                    var c = Th();
                    b = void 0 === b ? null : b;
                    a = a();
                    c.memoizedState = [ a, b ];
                    return a;
                },
                useReducer: function(a, b, c) {
                    var d = Th();
                    b = void 0 !== c ? c(b) : b;
                    d.memoizedState = d.baseState = b;
                    a = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: a,
                        lastRenderedState: b
                    };
                    d.queue = a;
                    a = a.dispatch = xi.bind(null, M, a);
                    return [ d.memoizedState, a ];
                },
                useRef: function(a) {
                    var b = Th();
                    a = {
                        current: a
                    };
                    return b.memoizedState = a;
                },
                useState: hi,
                useDebugValue: ri,
                useDeferredValue: function(a) {
                    return Th().memoizedState = a;
                },
                useTransition: function() {
                    var a = hi(!1), b = a[0];
                    a = vi.bind(null, a[1]);
                    Th().memoizedState = a;
                    return [ b, a ];
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(a, b, c) {
                    var d = M, e = Th();
                    if (I) {
                        if (void 0 === c) throw Error(p(407));
                        c = c();
                    } else {
                        c = b();
                        if (null === Q) throw Error(p(349));
                        0 !== (Hh & 30) || di(d, b, c);
                    }
                    e.memoizedState = c;
                    var f = {
                        value: c,
                        getSnapshot: b
                    };
                    e.queue = f;
                    mi(ai.bind(null, d, f, a), [ a ]);
                    d.flags |= 2048;
                    bi(9, ci.bind(null, d, f, c, b), void 0, null);
                    return c;
                },
                useId: function() {
                    var a = Th(), b = Q.identifierPrefix;
                    if (I) {
                        var c = sg;
                        var d = rg;
                        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
                        b = ":" + b + "R" + c;
                        c = Kh++;
                        0 < c && (b += "H" + c.toString(32));
                        b += ":";
                    } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
                    return a.memoizedState = b;
                },
                unstable_isNewReconciler: !1
            }, Ph = {
                readContext: eh,
                useCallback: si,
                useContext: eh,
                useEffect: $h,
                useImperativeHandle: qi,
                useInsertionEffect: ni,
                useLayoutEffect: oi,
                useMemo: ti,
                useReducer: Wh,
                useRef: ji,
                useState: function() {
                    return Wh(Vh);
                },
                useDebugValue: ri,
                useDeferredValue: function(a) {
                    var b = Uh();
                    return ui(b, N.memoizedState, a);
                },
                useTransition: function() {
                    var a = Wh(Vh)[0], b = Uh().memoizedState;
                    return [ a, b ];
                },
                useMutableSource: Yh,
                useSyncExternalStore: Zh,
                useId: wi,
                unstable_isNewReconciler: !1
            }, Qh = {
                readContext: eh,
                useCallback: si,
                useContext: eh,
                useEffect: $h,
                useImperativeHandle: qi,
                useInsertionEffect: ni,
                useLayoutEffect: oi,
                useMemo: ti,
                useReducer: Xh,
                useRef: ji,
                useState: function() {
                    return Xh(Vh);
                },
                useDebugValue: ri,
                useDeferredValue: function(a) {
                    var b = Uh();
                    return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
                },
                useTransition: function() {
                    var a = Xh(Vh)[0], b = Uh().memoizedState;
                    return [ a, b ];
                },
                useMutableSource: Yh,
                useSyncExternalStore: Zh,
                useId: wi,
                unstable_isNewReconciler: !1
            };
            function Ci(a, b) {
                if (a && a.defaultProps) {
                    b = A({}, b);
                    a = a.defaultProps;
                    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
                    return b;
                }
                return b;
            }
            function Di(a, b, c, d) {
                b = a.memoizedState;
                c = c(d, b);
                c = null === c || void 0 === c ? b : A({}, b, c);
                a.memoizedState = c;
                0 === a.lanes && (a.updateQueue.baseState = c);
            }
            var Ei = {
                isMounted: function(a) {
                    return (a = a._reactInternals) ? Vb(a) === a : !1;
                },
                enqueueSetState: function(a, b, c) {
                    a = a._reactInternals;
                    var d = R(), e = yi(a), f = mh(d, e);
                    f.payload = b;
                    void 0 !== c && null !== c && (f.callback = c);
                    b = nh(a, f, e);
                    null !== b && (gi(b, a, e, d), oh(b, a, e));
                },
                enqueueReplaceState: function(a, b, c) {
                    a = a._reactInternals;
                    var d = R(), e = yi(a), f = mh(d, e);
                    f.tag = 1;
                    f.payload = b;
                    void 0 !== c && null !== c && (f.callback = c);
                    b = nh(a, f, e);
                    null !== b && (gi(b, a, e, d), oh(b, a, e));
                },
                enqueueForceUpdate: function(a, b) {
                    a = a._reactInternals;
                    var c = R(), d = yi(a), e = mh(c, d);
                    e.tag = 2;
                    void 0 !== b && null !== b && (e.callback = b);
                    b = nh(a, e, d);
                    null !== b && (gi(b, a, d, c), oh(b, a, d));
                }
            };
            function Fi(a, b, c, d, e, f, g) {
                a = a.stateNode;
                return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
            }
            function Gi(a, b, c) {
                var d = !1, e = Vf;
                var f = b.contextType;
                "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, 
                f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
                b = new b(c, f);
                a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
                b.updater = Ei;
                a.stateNode = b;
                b._reactInternals = a;
                d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
                return b;
            }
            function Hi(a, b, c, d) {
                a = b.state;
                "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
                "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
                b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
            }
            function Ii(a, b, c, d) {
                var e = a.stateNode;
                e.props = c;
                e.state = a.memoizedState;
                e.refs = {};
                kh(a);
                var f = b.contextType;
                "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, 
                e.context = Yf(a, f));
                e.state = a.memoizedState;
                f = b.getDerivedStateFromProps;
                "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
                "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, 
                "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), 
                b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
                "function" === typeof e.componentDidMount && (a.flags |= 4194308);
            }
            function Ji(a, b) {
                try {
                    var c = "", d = b;
                    do {
                        c += Pa(d), d = d.return;
                    } while (d);
                    var e = c;
                } catch (f) {
                    e = "\nError generating stack: " + f.message + "\n" + f.stack;
                }
                return {
                    value: a,
                    source: b,
                    stack: e,
                    digest: null
                };
            }
            function Ki(a, b, c) {
                return {
                    value: a,
                    source: null,
                    stack: null != c ? c : null,
                    digest: null != b ? b : null
                };
            }
            function Li(a, b) {
                try {
                    console.error(b.value);
                } catch (c) {
                    setTimeout((function() {
                        throw c;
                    }));
                }
            }
            var Mi = "function" === typeof WeakMap ? WeakMap : Map;
            function Ni(a, b, c) {
                c = mh(-1, c);
                c.tag = 3;
                c.payload = {
                    element: null
                };
                var d = b.value;
                c.callback = function() {
                    Oi || (Oi = !0, Pi = d);
                    Li(a, b);
                };
                return c;
            }
            function Qi(a, b, c) {
                c = mh(-1, c);
                c.tag = 3;
                var d = a.type.getDerivedStateFromError;
                if ("function" === typeof d) {
                    var e = b.value;
                    c.payload = function() {
                        return d(e);
                    };
                    c.callback = function() {
                        Li(a, b);
                    };
                }
                var f = a.stateNode;
                null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
                    Li(a, b);
                    "function" !== typeof d && (null === Ri ? Ri = new Set([ this ]) : Ri.add(this));
                    var c = b.stack;
                    this.componentDidCatch(b.value, {
                        componentStack: null !== c ? c : ""
                    });
                });
                return c;
            }
            function Si(a, b, c) {
                var d = a.pingCache;
                if (null === d) {
                    d = a.pingCache = new Mi;
                    var e = new Set;
                    d.set(b, e);
                } else e = d.get(b), void 0 === e && (e = new Set, d.set(b, e));
                e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
            }
            function Ui(a) {
                do {
                    var b;
                    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
                    if (b) return a;
                    a = a.return;
                } while (null !== a);
                return null;
            }
            function Vi(a, b, c, d, e) {
                if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, 
                c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), 
                b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
                a.flags |= 65536;
                a.lanes = e;
                return a;
            }
            var Wi = ua.ReactCurrentOwner, dh = !1;
            function Xi(a, b, c, d) {
                b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
            }
            function Yi(a, b, c, d, e) {
                c = c.render;
                var f = b.ref;
                ch(b, e);
                d = Nh(a, b, c, d, f, e);
                c = Sh();
                if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, 
                Zi(a, b, e);
                I && c && vg(b);
                b.flags |= 1;
                Xi(a, b, d, e);
                return b.child;
            }
            function $i(a, b, c, d, e) {
                if (null === a) {
                    var f = c.type;
                    if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, 
                    b.type = f, bj(a, b, f, d, e);
                    a = Rg(c.type, null, d, b, b.mode, e);
                    a.ref = b.ref;
                    a.return = b;
                    return b.child = a;
                }
                f = a.child;
                if (0 === (a.lanes & e)) {
                    var g = f.memoizedProps;
                    c = c.compare;
                    c = null !== c ? c : Ie;
                    if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
                }
                b.flags |= 1;
                a = Pg(f, d);
                a.ref = b.ref;
                a.return = b;
                return b.child = a;
            }
            function bj(a, b, c, d, e) {
                if (null !== a) {
                    var f = a.memoizedProps;
                    if (Ie(f, d) && a.ref === b.ref) if (dh = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = !0); else return b.lanes = a.lanes, 
                    Zi(a, b, e);
                }
                return cj(a, b, c, d, e);
            }
            function dj(a, b, c) {
                var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
                if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, G(ej, fj), fj |= c; else {
                    if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, 
                    b.memoizedState = {
                        baseLanes: a,
                        cachePool: null,
                        transitions: null
                    }, b.updateQueue = null, G(ej, fj), fj |= a, null;
                    b.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    };
                    d = null !== f ? f.baseLanes : c;
                    G(ej, fj);
                    fj |= d;
                } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), 
                fj |= d;
                Xi(a, b, e, c);
                return b.child;
            }
            function gj(a, b) {
                var c = b.ref;
                if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
            }
            function cj(a, b, c, d, e) {
                var f = Zf(c) ? Xf : H.current;
                f = Yf(b, f);
                ch(b, e);
                c = Nh(a, b, c, d, f, e);
                d = Sh();
                if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, 
                Zi(a, b, e);
                I && d && vg(b);
                b.flags |= 1;
                Xi(a, b, c, e);
                return b.child;
            }
            function hj(a, b, c, d, e) {
                if (Zf(c)) {
                    var f = !0;
                    cg(b);
                } else f = !1;
                ch(b, e);
                if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = !0; else if (null === a) {
                    var g = b.stateNode, h = b.memoizedProps;
                    g.props = h;
                    var k = g.context, l = c.contextType;
                    "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
                    var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
                    q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
                    jh = !1;
                    var r = b.memoizedState;
                    g.state = r;
                    qh(b, d, g, e);
                    k = b.memoizedState;
                    h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), 
                    k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), 
                    "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), 
                    "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), 
                    b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, 
                    d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
                } else {
                    g = b.stateNode;
                    lh(a, b);
                    h = b.memoizedProps;
                    l = b.type === b.elementType ? h : Ci(b.type, h);
                    g.props = l;
                    q = b.pendingProps;
                    r = g.context;
                    k = c.contextType;
                    "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
                    var y = c.getDerivedStateFromProps;
                    (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
                    jh = !1;
                    r = b.memoizedState;
                    g.state = r;
                    qh(b, d, g, e);
                    var n = b.memoizedState;
                    h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), 
                    n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), 
                    "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), 
                    "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), 
                    "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), 
                    b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, 
                    d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), 
                    "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), 
                    d = !1);
                }
                return jj(a, b, c, d, f, e);
            }
            function jj(a, b, c, d, e, f) {
                gj(a, b);
                var g = 0 !== (b.flags & 128);
                if (!d && !g) return e && dg(b, c, !1), Zi(a, b, f);
                d = b.stateNode;
                Wi.current = b;
                var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
                b.flags |= 1;
                null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
                b.memoizedState = d.state;
                e && dg(b, c, !0);
                return b.child;
            }
            function kj(a) {
                var b = a.stateNode;
                b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
                yh(a, b.containerInfo);
            }
            function lj(a, b, c, d, e) {
                Ig();
                Jg(e);
                b.flags |= 256;
                Xi(a, b, c, d);
                return b.child;
            }
            var mj = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function nj(a) {
                return {
                    baseLanes: a,
                    cachePool: null,
                    transitions: null
                };
            }
            function oj(a, b, c) {
                var h, d = b.pendingProps, e = L.current, f = !1, g = 0 !== (b.flags & 128);
                (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
                if (h) f = !0, b.flags &= -129; else if (null === a || null !== a.memoizedState) e |= 1;
                G(L, e & 1);
                if (null === a) {
                    Eg(b);
                    a = b.memoizedState;
                    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, 
                    null;
                    g = d.children;
                    a = d.fallback;
                    return f ? (d = b.mode, f = b.child, g = {
                        mode: "hidden",
                        children: g
                    }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), 
                    a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), 
                    b.memoizedState = mj, a) : qj(b, g);
                }
                e = a.memoizedState;
                if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
                if (f) {
                    f = d.fallback;
                    g = b.mode;
                    e = a.child;
                    h = e.sibling;
                    var k = {
                        mode: "hidden",
                        children: d.children
                    };
                    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, 
                    b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
                    null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
                    f.return = b;
                    d.return = b;
                    d.sibling = f;
                    b.child = d;
                    d = f;
                    f = b.child;
                    g = a.child.memoizedState;
                    g = null === g ? nj(c) : {
                        baseLanes: g.baseLanes | c,
                        cachePool: null,
                        transitions: g.transitions
                    };
                    f.memoizedState = g;
                    f.childLanes = a.childLanes & ~c;
                    b.memoizedState = mj;
                    return d;
                }
                f = a.child;
                a = f.sibling;
                d = Pg(f, {
                    mode: "visible",
                    children: d.children
                });
                0 === (b.mode & 1) && (d.lanes = c);
                d.return = b;
                d.sibling = null;
                null !== a && (c = b.deletions, null === c ? (b.deletions = [ a ], b.flags |= 16) : c.push(a));
                b.child = d;
                b.memoizedState = null;
                return d;
            }
            function qj(a, b) {
                b = pj({
                    mode: "visible",
                    children: b
                }, a.mode, 0, null);
                b.return = a;
                return a.child = b;
            }
            function sj(a, b, c, d) {
                null !== d && Jg(d);
                Ug(b, a.child, null, c);
                a = qj(b, b.pendingProps.children);
                a.flags |= 2;
                b.memoizedState = null;
                return a;
            }
            function rj(a, b, c, d, e, f, g) {
                if (c) {
                    if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
                    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
                    f = d.fallback;
                    e = b.mode;
                    d = pj({
                        mode: "visible",
                        children: d.children
                    }, e, 0, null);
                    f = Tg(f, e, g, null);
                    f.flags |= 2;
                    d.return = b;
                    f.return = b;
                    d.sibling = f;
                    b.child = d;
                    0 !== (b.mode & 1) && Ug(b, a.child, null, g);
                    b.child.memoizedState = nj(g);
                    b.memoizedState = mj;
                    return f;
                }
                if (0 === (b.mode & 1)) return sj(a, b, g, null);
                if ("$!" === e.data) {
                    d = e.nextSibling && e.nextSibling.dataset;
                    if (d) var h = d.dgst;
                    d = h;
                    f = Error(p(419));
                    d = Ki(f, d, void 0);
                    return sj(a, b, g, d);
                }
                h = 0 !== (g & a.childLanes);
                if (dh || h) {
                    d = Q;
                    if (null !== d) {
                        switch (g & -g) {
                          case 4:
                            e = 2;
                            break;

                          case 16:
                            e = 8;
                            break;

                          case 64:
                          case 128:
                          case 256:
                          case 512:
                          case 1024:
                          case 2048:
                          case 4096:
                          case 8192:
                          case 16384:
                          case 32768:
                          case 65536:
                          case 131072:
                          case 262144:
                          case 524288:
                          case 1048576:
                          case 2097152:
                          case 4194304:
                          case 8388608:
                          case 16777216:
                          case 33554432:
                          case 67108864:
                            e = 32;
                            break;

                          case 536870912:
                            e = 268435456;
                            break;

                          default:
                            e = 0;
                        }
                        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
                        0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
                    }
                    tj();
                    d = Ki(Error(p(421)));
                    return sj(a, b, g, d);
                }
                if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), 
                e._reactRetry = b, null;
                a = f.treeContext;
                yg = Lf(e.nextSibling);
                xg = b;
                I = !0;
                zg = null;
                null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, 
                qg = b);
                b = qj(b, d.children);
                b.flags |= 4096;
                return b;
            }
            function vj(a, b, c) {
                a.lanes |= b;
                var d = a.alternate;
                null !== d && (d.lanes |= b);
                bh(a.return, b, c);
            }
            function wj(a, b, c, d, e) {
                var f = a.memoizedState;
                null === f ? a.memoizedState = {
                    isBackwards: b,
                    rendering: null,
                    renderingStartTime: 0,
                    last: d,
                    tail: c,
                    tailMode: e
                } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, 
                f.tail = c, f.tailMode = e);
            }
            function xj(a, b, c) {
                var d = b.pendingProps, e = d.revealOrder, f = d.tail;
                Xi(a, b, d.children, c);
                d = L.current;
                if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128; else {
                    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
                        if (13 === a.tag) null !== a.memoizedState && vj(a, c, b); else if (19 === a.tag) vj(a, c, b); else if (null !== a.child) {
                            a.child.return = a;
                            a = a.child;
                            continue;
                        }
                        if (a === b) break a;
                        for (;null === a.sibling; ) {
                            if (null === a.return || a.return === b) break a;
                            a = a.return;
                        }
                        a.sibling.return = a.return;
                        a = a.sibling;
                    }
                    d &= 1;
                }
                G(L, d);
                if (0 === (b.mode & 1)) b.memoizedState = null; else switch (e) {
                  case "forwards":
                    c = b.child;
                    for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), 
                    c = c.sibling;
                    c = e;
                    null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
                    wj(b, !1, e, c, f);
                    break;

                  case "backwards":
                    c = null;
                    e = b.child;
                    for (b.child = null; null !== e; ) {
                        a = e.alternate;
                        if (null !== a && null === Ch(a)) {
                            b.child = e;
                            break;
                        }
                        a = e.sibling;
                        e.sibling = c;
                        c = e;
                        e = a;
                    }
                    wj(b, !0, c, null, f);
                    break;

                  case "together":
                    wj(b, !1, null, null, void 0);
                    break;

                  default:
                    b.memoizedState = null;
                }
                return b.child;
            }
            function ij(a, b) {
                0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
            }
            function Zi(a, b, c) {
                null !== a && (b.dependencies = a.dependencies);
                rh |= b.lanes;
                if (0 === (c & b.childLanes)) return null;
                if (null !== a && b.child !== a.child) throw Error(p(153));
                if (null !== b.child) {
                    a = b.child;
                    c = Pg(a, a.pendingProps);
                    b.child = c;
                    for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), 
                    c.return = b;
                    c.sibling = null;
                }
                return b.child;
            }
            function yj(a, b, c) {
                switch (b.tag) {
                  case 3:
                    kj(b);
                    Ig();
                    break;

                  case 5:
                    Ah(b);
                    break;

                  case 1:
                    Zf(b.type) && cg(b);
                    break;

                  case 4:
                    yh(b, b.stateNode.containerInfo);
                    break;

                  case 10:
                    var d = b.type._context, e = b.memoizedProps.value;
                    G(Wg, d._currentValue);
                    d._currentValue = e;
                    break;

                  case 13:
                    d = b.memoizedState;
                    if (null !== d) {
                        if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
                        if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
                        G(L, L.current & 1);
                        a = Zi(a, b, c);
                        return null !== a ? a.sibling : null;
                    }
                    G(L, L.current & 1);
                    break;

                  case 19:
                    d = 0 !== (c & b.childLanes);
                    if (0 !== (a.flags & 128)) {
                        if (d) return xj(a, b, c);
                        b.flags |= 128;
                    }
                    e = b.memoizedState;
                    null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
                    G(L, L.current);
                    if (d) break; else return null;

                  case 22:
                  case 23:
                    return b.lanes = 0, dj(a, b, c);
                }
                return Zi(a, b, c);
            }
            var zj, Aj, Bj, Cj;
            zj = function(a, b) {
                for (var c = b.child; null !== c; ) {
                    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode); else if (4 !== c.tag && null !== c.child) {
                        c.child.return = c;
                        c = c.child;
                        continue;
                    }
                    if (c === b) break;
                    for (;null === c.sibling; ) {
                        if (null === c.return || c.return === b) return;
                        c = c.return;
                    }
                    c.sibling.return = c.return;
                    c = c.sibling;
                }
            };
            Aj = function() {};
            Bj = function(a, b, c, d) {
                var e = a.memoizedProps;
                if (e !== d) {
                    a = b.stateNode;
                    xh(uh.current);
                    var f = null;
                    switch (c) {
                      case "input":
                        e = Ya(a, e);
                        d = Ya(a, d);
                        f = [];
                        break;

                      case "select":
                        e = A({}, e, {
                            value: void 0
                        });
                        d = A({}, d, {
                            value: void 0
                        });
                        f = [];
                        break;

                      case "textarea":
                        e = gb(a, e);
                        d = gb(a, d);
                        f = [];
                        break;

                      default:
                        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
                    }
                    ub(c, d);
                    var g;
                    c = null;
                    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
                        var h = e[l];
                        for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
                    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
                    for (l in d) {
                        var k = d[l];
                        h = null != e ? e[l] : void 0;
                        if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
                            for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), 
                            c[g] = "");
                            for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                        } else c || (f || (f = []), f.push(l, c)), c = k; else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, 
                        h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), 
                        f || h === k || (f = [])) : (f = f || []).push(l, k));
                    }
                    c && (f = f || []).push("style", c);
                    var l = f;
                    if (b.updateQueue = l) b.flags |= 4;
                }
            };
            Cj = function(a, b, c, d) {
                c !== d && (b.flags |= 4);
            };
            function Dj(a, b) {
                if (!I) switch (a.tailMode) {
                  case "hidden":
                    b = a.tail;
                    for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
                    null === c ? a.tail = null : c.sibling = null;
                    break;

                  case "collapsed":
                    c = a.tail;
                    for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
                    null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
                }
            }
            function S(a) {
                var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
                if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, 
                d |= e.flags & 14680064, e.return = a, e = e.sibling; else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, 
                d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
                a.subtreeFlags |= d;
                a.childLanes = c;
                return b;
            }
            function Ej(a, b, c) {
                var d = b.pendingProps;
                wg(b);
                switch (b.tag) {
                  case 2:
                  case 16:
                  case 15:
                  case 0:
                  case 11:
                  case 7:
                  case 8:
                  case 12:
                  case 9:
                  case 14:
                    return S(b), null;

                  case 1:
                    return Zf(b.type) && $f(), S(b), null;

                  case 3:
                    d = b.stateNode;
                    zh();
                    E(Wf);
                    E(H);
                    Eh();
                    d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
                    if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, 
                    null !== zg && (Fj(zg), zg = null));
                    Aj(a, b);
                    S(b);
                    return null;

                  case 5:
                    Bh(b);
                    var e = xh(wh.current);
                    c = b.type;
                    if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, 
                    b.flags |= 2097152); else {
                        if (!d) {
                            if (null === b.stateNode) throw Error(p(166));
                            S(b);
                            return null;
                        }
                        a = xh(uh.current);
                        if (Gg(b)) {
                            d = b.stateNode;
                            c = b.type;
                            var f = b.memoizedProps;
                            d[Of] = b;
                            d[Pf] = f;
                            a = 0 !== (b.mode & 1);
                            switch (c) {
                              case "dialog":
                                D("cancel", d);
                                D("close", d);
                                break;

                              case "iframe":
                              case "object":
                              case "embed":
                                D("load", d);
                                break;

                              case "video":
                              case "audio":
                                for (e = 0; e < lf.length; e++) D(lf[e], d);
                                break;

                              case "source":
                                D("error", d);
                                break;

                              case "img":
                              case "image":
                              case "link":
                                D("error", d);
                                D("load", d);
                                break;

                              case "details":
                                D("toggle", d);
                                break;

                              case "input":
                                Za(d, f);
                                D("invalid", d);
                                break;

                              case "select":
                                d._wrapperState = {
                                    wasMultiple: !!f.multiple
                                };
                                D("invalid", d);
                                break;

                              case "textarea":
                                hb(d, f), D("invalid", d);
                            }
                            ub(c, f);
                            e = null;
                            for (var g in f) if (f.hasOwnProperty(g)) {
                                var h = f[g];
                                "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), 
                                e = [ "children", h ]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), 
                                e = [ "children", "" + h ]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                            }
                            switch (c) {
                              case "input":
                                Va(d);
                                db(d, f, !0);
                                break;

                              case "textarea":
                                Va(d);
                                jb(d);
                                break;

                              case "select":
                              case "option":
                                break;

                              default:
                                "function" === typeof f.onClick && (d.onclick = Bf);
                            }
                            d = e;
                            b.updateQueue = d;
                            null !== d && (b.flags |= 4);
                        } else {
                            g = 9 === e.nodeType ? e : e.ownerDocument;
                            "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                            "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), 
                            a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                                is: d.is
                            }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                            a[Of] = b;
                            a[Pf] = d;
                            zj(a, b, !1, !1);
                            b.stateNode = a;
                            a: {
                                g = vb(c, d);
                                switch (c) {
                                  case "dialog":
                                    D("cancel", a);
                                    D("close", a);
                                    e = d;
                                    break;

                                  case "iframe":
                                  case "object":
                                  case "embed":
                                    D("load", a);
                                    e = d;
                                    break;

                                  case "video":
                                  case "audio":
                                    for (e = 0; e < lf.length; e++) D(lf[e], a);
                                    e = d;
                                    break;

                                  case "source":
                                    D("error", a);
                                    e = d;
                                    break;

                                  case "img":
                                  case "image":
                                  case "link":
                                    D("error", a);
                                    D("load", a);
                                    e = d;
                                    break;

                                  case "details":
                                    D("toggle", a);
                                    e = d;
                                    break;

                                  case "input":
                                    Za(a, d);
                                    e = Ya(a, d);
                                    D("invalid", a);
                                    break;

                                  case "option":
                                    e = d;
                                    break;

                                  case "select":
                                    a._wrapperState = {
                                        wasMultiple: !!d.multiple
                                    };
                                    e = A({}, d, {
                                        value: void 0
                                    });
                                    D("invalid", a);
                                    break;

                                  case "textarea":
                                    hb(a, d);
                                    e = gb(a, d);
                                    D("invalid", a);
                                    break;

                                  default:
                                    e = d;
                                }
                                ub(c, e);
                                h = e;
                                for (f in h) if (h.hasOwnProperty(f)) {
                                    var k = h[f];
                                    "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, 
                                    null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                                }
                                switch (c) {
                                  case "input":
                                    Va(a);
                                    db(a, d, !1);
                                    break;

                                  case "textarea":
                                    Va(a);
                                    jb(a);
                                    break;

                                  case "option":
                                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                                    break;

                                  case "select":
                                    a.multiple = !!d.multiple;
                                    f = d.value;
                                    null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
                                    break;

                                  default:
                                    "function" === typeof e.onClick && (a.onclick = Bf);
                                }
                                switch (c) {
                                  case "button":
                                  case "input":
                                  case "select":
                                  case "textarea":
                                    d = !!d.autoFocus;
                                    break a;

                                  case "img":
                                    d = !0;
                                    break a;

                                  default:
                                    d = !1;
                                }
                            }
                            d && (b.flags |= 4);
                        }
                        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
                    }
                    S(b);
                    return null;

                  case 6:
                    if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d); else {
                        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
                        c = xh(wh.current);
                        xh(uh.current);
                        if (Gg(b)) {
                            d = b.stateNode;
                            c = b.memoizedProps;
                            d[Of] = b;
                            if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
                              case 3:
                                Af(d.nodeValue, c, 0 !== (a.mode & 1));
                                break;

                              case 5:
                                !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                            }
                            f && (b.flags |= 4);
                        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, 
                        b.stateNode = d;
                    }
                    S(b);
                    return null;

                  case 13:
                    E(L);
                    d = b.memoizedState;
                    if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), 
                        b.flags |= 98560, f = !1; else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                            if (null === a) {
                                if (!f) throw Error(p(318));
                                f = b.memoizedState;
                                f = null !== f ? f.dehydrated : null;
                                if (!f) throw Error(p(317));
                                f[Of] = b;
                            } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                            S(b);
                            f = !1;
                        } else null !== zg && (Fj(zg), zg = null), f = !0;
                        if (!f) return b.flags & 65536 ? b : null;
                    }
                    if (0 !== (b.flags & 128)) return b.lanes = c, b;
                    d = null !== d;
                    d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
                    null !== b.updateQueue && (b.flags |= 4);
                    S(b);
                    return null;

                  case 4:
                    return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;

                  case 10:
                    return ah(b.type._context), S(b), null;

                  case 17:
                    return Zf(b.type) && $f(), S(b), null;

                  case 19:
                    E(L);
                    f = b.memoizedState;
                    if (null === f) return S(b), null;
                    d = 0 !== (b.flags & 128);
                    g = f.rendering;
                    if (null === g) if (d) Dj(f, !1); else {
                        if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                            g = Ch(a);
                            if (null !== g) {
                                b.flags |= 128;
                                Dj(f, !1);
                                d = g.updateQueue;
                                null !== d && (b.updateQueue = d, b.flags |= 4);
                                b.subtreeFlags = 0;
                                d = c;
                                for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, 
                                null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, 
                                f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, 
                                f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, 
                                f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, 
                                f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                                    lanes: a.lanes,
                                    firstContext: a.firstContext
                                }), c = c.sibling;
                                G(L, L.current & 1 | 2);
                                return b.child;
                            }
                            a = a.sibling;
                        }
                        null !== f.tail && B() > Gj && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
                    } else {
                        if (!d) if (a = Ch(g), null !== a) {
                            if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, 
                            b.flags |= 4), Dj(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), 
                            null;
                        } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, 
                        d = !0, Dj(f, !1), b.lanes = 4194304);
                        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, 
                        f.last = g);
                    }
                    if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), 
                    b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
                    S(b);
                    return null;

                  case 22:
                  case 23:
                    return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), 
                    d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), 
                    null;

                  case 24:
                    return null;

                  case 25:
                    return null;
                }
                throw Error(p(156, b.tag));
            }
            function Ij(a, b) {
                wg(b);
                switch (b.tag) {
                  case 1:
                    return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, 
                    b) : null;

                  case 3:
                    return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, 
                    b) : null;

                  case 5:
                    return Bh(b), null;

                  case 13:
                    E(L);
                    a = b.memoizedState;
                    if (null !== a && null !== a.dehydrated) {
                        if (null === b.alternate) throw Error(p(340));
                        Ig();
                    }
                    a = b.flags;
                    return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;

                  case 19:
                    return E(L), null;

                  case 4:
                    return zh(), null;

                  case 10:
                    return ah(b.type._context), null;

                  case 22:
                  case 23:
                    return Hj(), null;

                  case 24:
                    return null;

                  default:
                    return null;
                }
            }
            var Jj = !1, U = !1, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
            function Lj(a, b) {
                var c = a.ref;
                if (null !== c) if ("function" === typeof c) try {
                    c(null);
                } catch (d) {
                    W(a, b, d);
                } else c.current = null;
            }
            function Mj(a, b, c) {
                try {
                    c();
                } catch (d) {
                    W(a, b, d);
                }
            }
            var Nj = !1;
            function Oj(a, b) {
                Cf = dd;
                a = Me();
                if (Ne(a)) {
                    if ("selectionStart" in a) var c = {
                        start: a.selectionStart,
                        end: a.selectionEnd
                    }; else a: {
                        c = (c = a.ownerDocument) && c.defaultView || window;
                        var d = c.getSelection && c.getSelection();
                        if (d && 0 !== d.rangeCount) {
                            c = d.anchorNode;
                            var e = d.anchorOffset, f = d.focusNode;
                            d = d.focusOffset;
                            try {
                                c.nodeType, f.nodeType;
                            } catch (F) {
                                c = null;
                                break a;
                            }
                            var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
                            b: for (;;) {
                                for (var y; ;) {
                                    q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                                    q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                                    3 === q.nodeType && (g += q.nodeValue.length);
                                    if (null === (y = q.firstChild)) break;
                                    r = q;
                                    q = y;
                                }
                                for (;;) {
                                    if (q === a) break b;
                                    r === c && ++l === e && (h = g);
                                    r === f && ++m === d && (k = g);
                                    if (null !== (y = q.nextSibling)) break;
                                    q = r;
                                    r = q.parentNode;
                                }
                                q = y;
                            }
                            c = -1 === h || -1 === k ? null : {
                                start: h,
                                end: k
                            };
                        } else c = null;
                    }
                    c = c || {
                        start: 0,
                        end: 0
                    };
                } else c = null;
                Df = {
                    focusedElem: a,
                    selectionRange: c
                };
                dd = !1;
                for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, 
                V = a; else for (;null !== V; ) {
                    b = V;
                    try {
                        var n = b.alternate;
                        if (0 !== (b.flags & 1024)) switch (b.tag) {
                          case 0:
                          case 11:
                          case 15:
                            break;

                          case 1:
                            if (null !== n) {
                                var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                                x.__reactInternalSnapshotBeforeUpdate = w;
                            }
                            break;

                          case 3:
                            var u = b.stateNode.containerInfo;
                            1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                            break;

                          case 5:
                          case 6:
                          case 4:
                          case 17:
                            break;

                          default:
                            throw Error(p(163));
                        }
                    } catch (F) {
                        W(b, b.return, F);
                    }
                    a = b.sibling;
                    if (null !== a) {
                        a.return = b.return;
                        V = a;
                        break;
                    }
                    V = b.return;
                }
                n = Nj;
                Nj = !1;
                return n;
            }
            function Pj(a, b, c) {
                var d = b.updateQueue;
                d = null !== d ? d.lastEffect : null;
                if (null !== d) {
                    var e = d = d.next;
                    do {
                        if ((e.tag & a) === a) {
                            var f = e.destroy;
                            e.destroy = void 0;
                            void 0 !== f && Mj(b, c, f);
                        }
                        e = e.next;
                    } while (e !== d);
                }
            }
            function Qj(a, b) {
                b = b.updateQueue;
                b = null !== b ? b.lastEffect : null;
                if (null !== b) {
                    var c = b = b.next;
                    do {
                        if ((c.tag & a) === a) {
                            var d = c.create;
                            c.destroy = d();
                        }
                        c = c.next;
                    } while (c !== b);
                }
            }
            function Rj(a) {
                var b = a.ref;
                if (null !== b) {
                    var c = a.stateNode;
                    switch (a.tag) {
                      case 5:
                        a = c;
                        break;

                      default:
                        a = c;
                    }
                    "function" === typeof b ? b(a) : b.current = a;
                }
            }
            function Sj(a) {
                var b = a.alternate;
                null !== b && (a.alternate = null, Sj(b));
                a.child = null;
                a.deletions = null;
                a.sibling = null;
                5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], 
                delete b[Qf], delete b[Rf]));
                a.stateNode = null;
                a.return = null;
                a.dependencies = null;
                a.memoizedProps = null;
                a.memoizedState = null;
                a.pendingProps = null;
                a.stateNode = null;
                a.updateQueue = null;
            }
            function Tj(a) {
                return 5 === a.tag || 3 === a.tag || 4 === a.tag;
            }
            function Uj(a) {
                a: for (;;) {
                    for (;null === a.sibling; ) {
                        if (null === a.return || Tj(a.return)) return null;
                        a = a.return;
                    }
                    a.sibling.return = a.return;
                    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
                        if (a.flags & 2) continue a;
                        if (null === a.child || 4 === a.tag) continue a; else a.child.return = a, a = a.child;
                    }
                    if (!(a.flags & 2)) return a.stateNode;
                }
            }
            function Vj(a, b, c) {
                var d = a.tag;
                if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, 
                b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf)); else if (4 !== d && (a = a.child, 
                null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
            }
            function Wj(a, b, c) {
                var d = a.tag;
                if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a); else if (4 !== d && (a = a.child, 
                null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
            }
            var X = null, Xj = !1;
            function Yj(a, b, c) {
                for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
            }
            function Zj(a, b, c) {
                if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
                    lc.onCommitFiberUnmount(kc, c);
                } catch (h) {}
                switch (c.tag) {
                  case 5:
                    U || Lj(c, b);

                  case 6:
                    var d = X, e = Xj;
                    X = null;
                    Yj(a, b, c);
                    X = d;
                    Xj = e;
                    null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
                    break;

                  case 18:
                    null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), 
                    bd(a)) : Kf(X, c.stateNode));
                    break;

                  case 4:
                    d = X;
                    e = Xj;
                    X = c.stateNode.containerInfo;
                    Xj = !0;
                    Yj(a, b, c);
                    X = d;
                    Xj = e;
                    break;

                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
                        e = d = d.next;
                        do {
                            var f = e, g = f.destroy;
                            f = f.tag;
                            void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
                            e = e.next;
                        } while (e !== d);
                    }
                    Yj(a, b, c);
                    break;

                  case 1:
                    if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
                        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
                    } catch (h) {
                        W(c, b, h);
                    }
                    Yj(a, b, c);
                    break;

                  case 21:
                    Yj(a, b, c);
                    break;

                  case 22:
                    c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
                    break;

                  default:
                    Yj(a, b, c);
                }
            }
            function ak(a) {
                var b = a.updateQueue;
                if (null !== b) {
                    a.updateQueue = null;
                    var c = a.stateNode;
                    null === c && (c = a.stateNode = new Kj);
                    b.forEach((function(b) {
                        var d = bk.bind(null, a, b);
                        c.has(b) || (c.add(b), b.then(d, d));
                    }));
                }
            }
            function ck(a, b) {
                var c = b.deletions;
                if (null !== c) for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    try {
                        var f = a, g = b, h = g;
                        a: for (;null !== h; ) {
                            switch (h.tag) {
                              case 5:
                                X = h.stateNode;
                                Xj = !1;
                                break a;

                              case 3:
                                X = h.stateNode.containerInfo;
                                Xj = !0;
                                break a;

                              case 4:
                                X = h.stateNode.containerInfo;
                                Xj = !0;
                                break a;
                            }
                            h = h.return;
                        }
                        if (null === X) throw Error(p(160));
                        Zj(f, g, e);
                        X = null;
                        Xj = !1;
                        var k = e.alternate;
                        null !== k && (k.return = null);
                        e.return = null;
                    } catch (l) {
                        W(e, b, l);
                    }
                }
                if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
            }
            function dk(a, b) {
                var c = a.alternate, d = a.flags;
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ck(b, a);
                    ek(a);
                    if (d & 4) {
                        try {
                            Pj(3, a, a.return), Qj(3, a);
                        } catch (t) {
                            W(a, a.return, t);
                        }
                        try {
                            Pj(5, a, a.return);
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    }
                    break;

                  case 1:
                    ck(b, a);
                    ek(a);
                    d & 512 && null !== c && Lj(c, c.return);
                    break;

                  case 5:
                    ck(b, a);
                    ek(a);
                    d & 512 && null !== c && Lj(c, c.return);
                    if (a.flags & 32) {
                        var e = a.stateNode;
                        try {
                            ob(e, "");
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    }
                    if (d & 4 && (e = a.stateNode, null != e)) {
                        var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
                        a.updateQueue = null;
                        if (null !== k) try {
                            "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                            vb(h, g);
                            var l = vb(h, f);
                            for (g = 0; g < k.length; g += 2) {
                                var m = k[g], q = k[g + 1];
                                "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                            }
                            switch (h) {
                              case "input":
                                bb(e, f);
                                break;

                              case "textarea":
                                ib(e, f);
                                break;

                              case "select":
                                var r = e._wrapperState.wasMultiple;
                                e._wrapperState.wasMultiple = !!f.multiple;
                                var y = f.value;
                                null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
                            }
                            e[Pf] = f;
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    }
                    break;

                  case 6:
                    ck(b, a);
                    ek(a);
                    if (d & 4) {
                        if (null === a.stateNode) throw Error(p(162));
                        e = a.stateNode;
                        f = a.memoizedProps;
                        try {
                            e.nodeValue = f;
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    }
                    break;

                  case 3:
                    ck(b, a);
                    ek(a);
                    if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
                        bd(b.containerInfo);
                    } catch (t) {
                        W(a, a.return, t);
                    }
                    break;

                  case 4:
                    ck(b, a);
                    ek(a);
                    break;

                  case 13:
                    ck(b, a);
                    ek(a);
                    e = a.child;
                    e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
                    d & 4 && ak(a);
                    break;

                  case 22:
                    m = null !== c && null !== c.memoizedState;
                    a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
                    ek(a);
                    if (d & 8192) {
                        l = null !== a.memoizedState;
                        if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
                            for (q = V = m; null !== V; ) {
                                r = V;
                                y = r.child;
                                switch (r.tag) {
                                  case 0:
                                  case 11:
                                  case 14:
                                  case 15:
                                    Pj(4, r, r.return);
                                    break;

                                  case 1:
                                    Lj(r, r.return);
                                    var n = r.stateNode;
                                    if ("function" === typeof n.componentWillUnmount) {
                                        d = r;
                                        c = r.return;
                                        try {
                                            b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                                        } catch (t) {
                                            W(d, c, t);
                                        }
                                    }
                                    break;

                                  case 5:
                                    Lj(r, r.return);
                                    break;

                                  case 22:
                                    if (null !== r.memoizedState) {
                                        gk(q);
                                        continue;
                                    }
                                }
                                null !== y ? (y.return = r, V = y) : gk(q);
                            }
                            m = m.sibling;
                        }
                        a: for (m = null, q = a; ;) {
                            if (5 === q.tag) {
                                if (null === m) {
                                    m = q;
                                    try {
                                        e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, 
                                        k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, 
                                        h.style.display = rb("display", g));
                                    } catch (t) {
                                        W(a, a.return, t);
                                    }
                                }
                            } else if (6 === q.tag) {
                                if (null === m) try {
                                    q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                                } catch (t) {
                                    W(a, a.return, t);
                                }
                            } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                                q.child.return = q;
                                q = q.child;
                                continue;
                            }
                            if (q === a) break a;
                            for (;null === q.sibling; ) {
                                if (null === q.return || q.return === a) break a;
                                m === q && (m = null);
                                q = q.return;
                            }
                            m === q && (m = null);
                            q.sibling.return = q.return;
                            q = q.sibling;
                        }
                    }
                    break;

                  case 19:
                    ck(b, a);
                    ek(a);
                    d & 4 && ak(a);
                    break;

                  case 21:
                    break;

                  default:
                    ck(b, a), ek(a);
                }
            }
            function ek(a) {
                var b = a.flags;
                if (b & 2) {
                    try {
                        a: {
                            for (var c = a.return; null !== c; ) {
                                if (Tj(c)) {
                                    var d = c;
                                    break a;
                                }
                                c = c.return;
                            }
                            throw Error(p(160));
                        }
                        switch (d.tag) {
                          case 5:
                            var e = d.stateNode;
                            d.flags & 32 && (ob(e, ""), d.flags &= -33);
                            var f = Uj(a);
                            Wj(a, f, e);
                            break;

                          case 3:
                          case 4:
                            var g = d.stateNode.containerInfo, h = Uj(a);
                            Vj(a, h, g);
                            break;

                          default:
                            throw Error(p(161));
                        }
                    } catch (k) {
                        W(a, a.return, k);
                    }
                    a.flags &= -3;
                }
                b & 4096 && (a.flags &= -4097);
            }
            function hk(a, b, c) {
                V = a;
                ik(a, b, c);
            }
            function ik(a, b, c) {
                for (var d = 0 !== (a.mode & 1); null !== V; ) {
                    var e = V, f = e.child;
                    if (22 === e.tag && d) {
                        var g = null !== e.memoizedState || Jj;
                        if (!g) {
                            var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
                            h = Jj;
                            var l = U;
                            Jj = g;
                            if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, 
                            V = k) : jk(e);
                            for (;null !== f; ) V = f, ik(f, b, c), f = f.sibling;
                            V = e;
                            Jj = h;
                            U = l;
                        }
                        kk(a, b, c);
                    } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
                }
            }
            function kk(a) {
                for (;null !== V; ) {
                    var b = V;
                    if (0 !== (b.flags & 8772)) {
                        var c = b.alternate;
                        try {
                            if (0 !== (b.flags & 8772)) switch (b.tag) {
                              case 0:
                              case 11:
                              case 15:
                                U || Qj(5, b);
                                break;

                              case 1:
                                var d = b.stateNode;
                                if (b.flags & 4 && !U) if (null === c) d.componentDidMount(); else {
                                    var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                                }
                                var f = b.updateQueue;
                                null !== f && sh(b, f, d);
                                break;

                              case 3:
                                var g = b.updateQueue;
                                if (null !== g) {
                                    c = null;
                                    if (null !== b.child) switch (b.child.tag) {
                                      case 5:
                                        c = b.child.stateNode;
                                        break;

                                      case 1:
                                        c = b.child.stateNode;
                                    }
                                    sh(b, g, c);
                                }
                                break;

                              case 5:
                                var h = b.stateNode;
                                if (null === c && b.flags & 4) {
                                    c = h;
                                    var k = b.memoizedProps;
                                    switch (b.type) {
                                      case "button":
                                      case "input":
                                      case "select":
                                      case "textarea":
                                        k.autoFocus && c.focus();
                                        break;

                                      case "img":
                                        k.src && (c.src = k.src);
                                    }
                                }
                                break;

                              case 6:
                                break;

                              case 4:
                                break;

                              case 12:
                                break;

                              case 13:
                                if (null === b.memoizedState) {
                                    var l = b.alternate;
                                    if (null !== l) {
                                        var m = l.memoizedState;
                                        if (null !== m) {
                                            var q = m.dehydrated;
                                            null !== q && bd(q);
                                        }
                                    }
                                }
                                break;

                              case 19:
                              case 17:
                              case 21:
                              case 22:
                              case 23:
                              case 25:
                                break;

                              default:
                                throw Error(p(163));
                            }
                            U || b.flags & 512 && Rj(b);
                        } catch (r) {
                            W(b, b.return, r);
                        }
                    }
                    if (b === a) {
                        V = null;
                        break;
                    }
                    c = b.sibling;
                    if (null !== c) {
                        c.return = b.return;
                        V = c;
                        break;
                    }
                    V = b.return;
                }
            }
            function gk(a) {
                for (;null !== V; ) {
                    var b = V;
                    if (b === a) {
                        V = null;
                        break;
                    }
                    var c = b.sibling;
                    if (null !== c) {
                        c.return = b.return;
                        V = c;
                        break;
                    }
                    V = b.return;
                }
            }
            function jk(a) {
                for (;null !== V; ) {
                    var b = V;
                    try {
                        switch (b.tag) {
                          case 0:
                          case 11:
                          case 15:
                            var c = b.return;
                            try {
                                Qj(4, b);
                            } catch (k) {
                                W(b, c, k);
                            }
                            break;

                          case 1:
                            var d = b.stateNode;
                            if ("function" === typeof d.componentDidMount) {
                                var e = b.return;
                                try {
                                    d.componentDidMount();
                                } catch (k) {
                                    W(b, e, k);
                                }
                            }
                            var f = b.return;
                            try {
                                Rj(b);
                            } catch (k) {
                                W(b, f, k);
                            }
                            break;

                          case 5:
                            var g = b.return;
                            try {
                                Rj(b);
                            } catch (k) {
                                W(b, g, k);
                            }
                        }
                    } catch (k) {
                        W(b, b.return, k);
                    }
                    if (b === a) {
                        V = null;
                        break;
                    }
                    var h = b.sibling;
                    if (null !== h) {
                        h.return = b.return;
                        V = h;
                        break;
                    }
                    V = b.return;
                }
            }
            var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = 1 / 0, uk = null, Oi = !1, Pi = null, Ri = null, vk = !1, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
            function R() {
                return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
            }
            function yi(a) {
                if (0 === (a.mode & 1)) return 1;
                if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
                if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
                a = C;
                if (0 !== a) return a;
                a = window.event;
                a = void 0 === a ? 16 : jd(a.type);
                return a;
            }
            function gi(a, b, c, d) {
                if (50 < yk) throw yk = 0, zk = null, Error(p(185));
                Ac(a, c, d);
                if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), 
                Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
            }
            function Dk(a, b) {
                var c = a.callbackNode;
                wc(a, b);
                var d = uc(a, a === Q ? Z : 0);
                if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0; else if (b = d & -d, 
                a.callbackPriority !== b) {
                    null != c && bc(c);
                    if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf((function() {
                        0 === (K & 6) && jg();
                    })), c = null; else {
                        switch (Dc(d)) {
                          case 1:
                            c = fc;
                            break;

                          case 4:
                            c = gc;
                            break;

                          case 16:
                            c = hc;
                            break;

                          case 536870912:
                            c = jc;
                            break;

                          default:
                            c = hc;
                        }
                        c = Fk(c, Gk.bind(null, a));
                    }
                    a.callbackPriority = b;
                    a.callbackNode = c;
                }
            }
            function Gk(a, b) {
                Ak = -1;
                Bk = 0;
                if (0 !== (K & 6)) throw Error(p(327));
                var c = a.callbackNode;
                if (Hk() && a.callbackNode !== c) return null;
                var d = uc(a, a === Q ? Z : 0);
                if (0 === d) return null;
                if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d); else {
                    b = d;
                    var e = K;
                    K |= 2;
                    var f = Jk();
                    if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
                    do {
                        try {
                            Lk();
                            break;
                        } catch (h) {
                            Mk(a, h);
                        }
                    } while (1);
                    $g();
                    mk.current = f;
                    K = e;
                    null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
                }
                if (0 !== b) {
                    2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
                    if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
                    if (6 === b) Ck(a, d); else {
                        e = a.current.alternate;
                        if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, 
                        b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
                        a.finishedWork = e;
                        a.finishedLanes = d;
                        switch (b) {
                          case 0:
                          case 1:
                            throw Error(p(345));

                          case 2:
                            Pk(a, tk, uk);
                            break;

                          case 3:
                            Ck(a, d);
                            if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                                if (0 !== uc(a, 0)) break;
                                e = a.suspendedLanes;
                                if ((e & d) !== d) {
                                    R();
                                    a.pingedLanes |= a.suspendedLanes & e;
                                    break;
                                }
                                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                                break;
                            }
                            Pk(a, tk, uk);
                            break;

                          case 4:
                            Ck(a, d);
                            if ((d & 4194240) === d) break;
                            b = a.eventTimes;
                            for (e = -1; 0 < d; ) {
                                var g = 31 - oc(d);
                                f = 1 << g;
                                g = b[g];
                                g > e && (e = g);
                                d &= ~f;
                            }
                            d = e;
                            d = B() - d;
                            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                            if (10 < d) {
                                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                                break;
                            }
                            Pk(a, tk, uk);
                            break;

                          case 5:
                            Pk(a, tk, uk);
                            break;

                          default:
                            throw Error(p(329));
                        }
                    }
                }
                Dk(a, B());
                return a.callbackNode === c ? Gk.bind(null, a) : null;
            }
            function Nk(a, b) {
                var c = sk;
                a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
                a = Ik(a, b);
                2 !== a && (b = tk, tk = c, null !== b && Fj(b));
                return a;
            }
            function Fj(a) {
                null === tk ? tk = a : tk.push.apply(tk, a);
            }
            function Ok(a) {
                for (var b = a; ;) {
                    if (b.flags & 16384) {
                        var c = b.updateQueue;
                        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
                            var e = c[d], f = e.getSnapshot;
                            e = e.value;
                            try {
                                if (!He(f(), e)) return !1;
                            } catch (g) {
                                return !1;
                            }
                        }
                    }
                    c = b.child;
                    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c; else {
                        if (b === a) break;
                        for (;null === b.sibling; ) {
                            if (null === b.return || b.return === a) return !0;
                            b = b.return;
                        }
                        b.sibling.return = b.return;
                        b = b.sibling;
                    }
                }
                return !0;
            }
            function Ck(a, b) {
                b &= ~rk;
                b &= ~qk;
                a.suspendedLanes |= b;
                a.pingedLanes &= ~b;
                for (a = a.expirationTimes; 0 < b; ) {
                    var c = 31 - oc(b), d = 1 << c;
                    a[c] = -1;
                    b &= ~d;
                }
            }
            function Ek(a) {
                if (0 !== (K & 6)) throw Error(p(327));
                Hk();
                var b = uc(a, 0);
                if (0 === (b & 1)) return Dk(a, B()), null;
                var c = Ik(a, b);
                if (0 !== a.tag && 2 === c) {
                    var d = xc(a);
                    0 !== d && (b = d, c = Nk(a, d));
                }
                if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
                if (6 === c) throw Error(p(345));
                a.finishedWork = a.current.alternate;
                a.finishedLanes = b;
                Pk(a, tk, uk);
                Dk(a, B());
                return null;
            }
            function Qk(a, b) {
                var c = K;
                K |= 1;
                try {
                    return a(b);
                } finally {
                    K = c, 0 === K && (Gj = B() + 500, fg && jg());
                }
            }
            function Rk(a) {
                null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
                var b = K;
                K |= 1;
                var c = ok.transition, d = C;
                try {
                    if (ok.transition = null, C = 1, a) return a();
                } finally {
                    C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
                }
            }
            function Hj() {
                fj = ej.current;
                E(ej);
            }
            function Kk(a, b) {
                a.finishedWork = null;
                a.finishedLanes = 0;
                var c = a.timeoutHandle;
                -1 !== c && (a.timeoutHandle = -1, Gf(c));
                if (null !== Y) for (c = Y.return; null !== c; ) {
                    var d = c;
                    wg(d);
                    switch (d.tag) {
                      case 1:
                        d = d.type.childContextTypes;
                        null !== d && void 0 !== d && $f();
                        break;

                      case 3:
                        zh();
                        E(Wf);
                        E(H);
                        Eh();
                        break;

                      case 5:
                        Bh(d);
                        break;

                      case 4:
                        zh();
                        break;

                      case 13:
                        E(L);
                        break;

                      case 19:
                        E(L);
                        break;

                      case 10:
                        ah(d.type._context);
                        break;

                      case 22:
                      case 23:
                        Hj();
                    }
                    c = c.return;
                }
                Q = a;
                Y = a = Pg(a.current, null);
                Z = fj = b;
                T = 0;
                pk = null;
                rk = qk = rh = 0;
                tk = sk = null;
                if (null !== fh) {
                    for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
                        c.interleaved = null;
                        var e = d.next, f = c.pending;
                        if (null !== f) {
                            var g = f.next;
                            f.next = e;
                            d.next = g;
                        }
                        c.pending = d;
                    }
                    fh = null;
                }
                return a;
            }
            function Mk(a, b) {
                do {
                    var c = Y;
                    try {
                        $g();
                        Fh.current = Rh;
                        if (Ih) {
                            for (var d = M.memoizedState; null !== d; ) {
                                var e = d.queue;
                                null !== e && (e.pending = null);
                                d = d.next;
                            }
                            Ih = !1;
                        }
                        Hh = 0;
                        O = N = M = null;
                        Jh = !1;
                        Kh = 0;
                        nk.current = null;
                        if (null === c || null === c.return) {
                            T = 1;
                            pk = b;
                            Y = null;
                            break;
                        }
                        a: {
                            var f = a, g = c.return, h = c, k = b;
                            b = Z;
                            h.flags |= 32768;
                            if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                                var l = k, m = h, q = m.tag;
                                if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                                    var r = m.alternate;
                                    r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, 
                                    m.memoizedState = null);
                                }
                                var y = Ui(g);
                                if (null !== y) {
                                    y.flags &= -257;
                                    Vi(y, g, h, f, b);
                                    y.mode & 1 && Si(f, l, b);
                                    b = y;
                                    k = l;
                                    var n = b.updateQueue;
                                    if (null === n) {
                                        var t = new Set;
                                        t.add(k);
                                        b.updateQueue = t;
                                    } else n.add(k);
                                    break a;
                                } else {
                                    if (0 === (b & 1)) {
                                        Si(f, l, b);
                                        tj();
                                        break a;
                                    }
                                    k = Error(p(426));
                                }
                            } else if (I && h.mode & 1) {
                                var J = Ui(g);
                                if (null !== J) {
                                    0 === (J.flags & 65536) && (J.flags |= 256);
                                    Vi(J, g, h, f, b);
                                    Jg(Ji(k, h));
                                    break a;
                                }
                            }
                            f = k = Ji(k, h);
                            4 !== T && (T = 2);
                            null === sk ? sk = [ f ] : sk.push(f);
                            f = g;
                            do {
                                switch (f.tag) {
                                  case 3:
                                    f.flags |= 65536;
                                    b &= -b;
                                    f.lanes |= b;
                                    var x = Ni(f, k, b);
                                    ph(f, x);
                                    break a;

                                  case 1:
                                    h = k;
                                    var w = f.type, u = f.stateNode;
                                    if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                                        f.flags |= 65536;
                                        b &= -b;
                                        f.lanes |= b;
                                        var F = Qi(f, h, b);
                                        ph(f, F);
                                        break a;
                                    }
                                }
                                f = f.return;
                            } while (null !== f);
                        }
                        Sk(c);
                    } catch (na) {
                        b = na;
                        Y === c && null !== c && (Y = c = c.return);
                        continue;
                    }
                    break;
                } while (1);
            }
            function Jk() {
                var a = mk.current;
                mk.current = Rh;
                return null === a ? Rh : a;
            }
            function tj() {
                if (0 === T || 3 === T || 2 === T) T = 4;
                null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
            }
            function Ik(a, b) {
                var c = K;
                K |= 2;
                var d = Jk();
                if (Q !== a || Z !== b) uk = null, Kk(a, b);
                do {
                    try {
                        Tk();
                        break;
                    } catch (e) {
                        Mk(a, e);
                    }
                } while (1);
                $g();
                K = c;
                mk.current = d;
                if (null !== Y) throw Error(p(261));
                Q = null;
                Z = 0;
                return T;
            }
            function Tk() {
                for (;null !== Y; ) Uk(Y);
            }
            function Lk() {
                for (;null !== Y && !cc(); ) Uk(Y);
            }
            function Uk(a) {
                var b = Vk(a.alternate, a, fj);
                a.memoizedProps = a.pendingProps;
                null === b ? Sk(a) : Y = b;
                nk.current = null;
            }
            function Sk(a) {
                var b = a;
                do {
                    var c = b.alternate;
                    a = b.return;
                    if (0 === (b.flags & 32768)) {
                        if (c = Ej(c, b, fj), null !== c) {
                            Y = c;
                            return;
                        }
                    } else {
                        c = Ij(c, b);
                        if (null !== c) {
                            c.flags &= 32767;
                            Y = c;
                            return;
                        }
                        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null; else {
                            T = 6;
                            Y = null;
                            return;
                        }
                    }
                    b = b.sibling;
                    if (null !== b) {
                        Y = b;
                        return;
                    }
                    Y = b = a;
                } while (null !== b);
                0 === T && (T = 5);
            }
            function Pk(a, b, c) {
                var d = C, e = ok.transition;
                try {
                    ok.transition = null, C = 1, Wk(a, b, c, d);
                } finally {
                    ok.transition = e, C = d;
                }
                return null;
            }
            function Wk(a, b, c, d) {
                do {
                    Hk();
                } while (null !== wk);
                if (0 !== (K & 6)) throw Error(p(327));
                c = a.finishedWork;
                var e = a.finishedLanes;
                if (null === c) return null;
                a.finishedWork = null;
                a.finishedLanes = 0;
                if (c === a.current) throw Error(p(177));
                a.callbackNode = null;
                a.callbackPriority = 0;
                var f = c.lanes | c.childLanes;
                Bc(a, f);
                a === Q && (Y = Q = null, Z = 0);
                0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = !0, Fk(hc, (function() {
                    Hk();
                    return null;
                })));
                f = 0 !== (c.flags & 15990);
                if (0 !== (c.subtreeFlags & 15990) || f) {
                    f = ok.transition;
                    ok.transition = null;
                    var g = C;
                    C = 1;
                    var h = K;
                    K |= 4;
                    nk.current = null;
                    Oj(a, c);
                    dk(c, a);
                    Oe(Df);
                    dd = !!Cf;
                    Df = Cf = null;
                    a.current = c;
                    hk(c, a, e);
                    dc();
                    K = h;
                    C = g;
                    ok.transition = f;
                } else a.current = c;
                vk && (vk = !1, wk = a, xk = e);
                f = a.pendingLanes;
                0 === f && (Ri = null);
                mc(c.stateNode, d);
                Dk(a, B());
                if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], 
                d(e.value, {
                    componentStack: e.stack,
                    digest: e.digest
                });
                if (Oi) throw Oi = !1, a = Pi, Pi = null, a;
                0 !== (xk & 1) && 0 !== a.tag && Hk();
                f = a.pendingLanes;
                0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
                jg();
                return null;
            }
            function Hk() {
                if (null !== wk) {
                    var a = Dc(xk), b = ok.transition, c = C;
                    try {
                        ok.transition = null;
                        C = 16 > a ? 16 : a;
                        if (null === wk) var d = !1; else {
                            a = wk;
                            wk = null;
                            xk = 0;
                            if (0 !== (K & 6)) throw Error(p(331));
                            var e = K;
                            K |= 4;
                            for (V = a.current; null !== V; ) {
                                var f = V, g = f.child;
                                if (0 !== (V.flags & 16)) {
                                    var h = f.deletions;
                                    if (null !== h) {
                                        for (var k = 0; k < h.length; k++) {
                                            var l = h[k];
                                            for (V = l; null !== V; ) {
                                                var m = V;
                                                switch (m.tag) {
                                                  case 0:
                                                  case 11:
                                                  case 15:
                                                    Pj(8, m, f);
                                                }
                                                var q = m.child;
                                                if (null !== q) q.return = m, V = q; else for (;null !== V; ) {
                                                    m = V;
                                                    var r = m.sibling, y = m.return;
                                                    Sj(m);
                                                    if (m === l) {
                                                        V = null;
                                                        break;
                                                    }
                                                    if (null !== r) {
                                                        r.return = y;
                                                        V = r;
                                                        break;
                                                    }
                                                    V = y;
                                                }
                                            }
                                        }
                                        var n = f.alternate;
                                        if (null !== n) {
                                            var t = n.child;
                                            if (null !== t) {
                                                n.child = null;
                                                do {
                                                    var J = t.sibling;
                                                    t.sibling = null;
                                                    t = J;
                                                } while (null !== t);
                                            }
                                        }
                                        V = f;
                                    }
                                }
                                if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g; else b: for (;null !== V; ) {
                                    f = V;
                                    if (0 !== (f.flags & 2048)) switch (f.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                        Pj(9, f, f.return);
                                    }
                                    var x = f.sibling;
                                    if (null !== x) {
                                        x.return = f.return;
                                        V = x;
                                        break b;
                                    }
                                    V = f.return;
                                }
                            }
                            var w = a.current;
                            for (V = w; null !== V; ) {
                                g = V;
                                var u = g.child;
                                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u; else b: for (g = w; null !== V; ) {
                                    h = V;
                                    if (0 !== (h.flags & 2048)) try {
                                        switch (h.tag) {
                                          case 0:
                                          case 11:
                                          case 15:
                                            Qj(9, h);
                                        }
                                    } catch (na) {
                                        W(h, h.return, na);
                                    }
                                    if (h === g) {
                                        V = null;
                                        break b;
                                    }
                                    var F = h.sibling;
                                    if (null !== F) {
                                        F.return = h.return;
                                        V = F;
                                        break b;
                                    }
                                    V = h.return;
                                }
                            }
                            K = e;
                            jg();
                            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                                lc.onPostCommitFiberRoot(kc, a);
                            } catch (na) {}
                            d = !0;
                        }
                        return d;
                    } finally {
                        C = c, ok.transition = b;
                    }
                }
                return !1;
            }
            function Xk(a, b, c) {
                b = Ji(c, b);
                b = Ni(a, b, 1);
                a = nh(a, b, 1);
                b = R();
                null !== a && (Ac(a, 1, b), Dk(a, b));
            }
            function W(a, b, c) {
                if (3 === a.tag) Xk(a, a, c); else for (;null !== b; ) {
                    if (3 === b.tag) {
                        Xk(b, a, c);
                        break;
                    } else if (1 === b.tag) {
                        var d = b.stateNode;
                        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
                            a = Ji(c, a);
                            a = Qi(b, a, 1);
                            b = nh(b, a, 1);
                            a = R();
                            null !== b && (Ac(b, 1, a), Dk(b, a));
                            break;
                        }
                    }
                    b = b.return;
                }
            }
            function Ti(a, b, c) {
                var d = a.pingCache;
                null !== d && d.delete(b);
                b = R();
                a.pingedLanes |= a.suspendedLanes & c;
                Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
                Dk(a, b);
            }
            function Yk(a, b) {
                0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
                var c = R();
                a = ih(a, b);
                null !== a && (Ac(a, b, c), Dk(a, c));
            }
            function uj(a) {
                var b = a.memoizedState, c = 0;
                null !== b && (c = b.retryLane);
                Yk(a, c);
            }
            function bk(a, b) {
                var c = 0;
                switch (a.tag) {
                  case 13:
                    var d = a.stateNode;
                    var e = a.memoizedState;
                    null !== e && (c = e.retryLane);
                    break;

                  case 19:
                    d = a.stateNode;
                    break;

                  default:
                    throw Error(p(314));
                }
                null !== d && d.delete(b);
                Yk(a, c);
            }
            var Vk;
            Vk = function(a, b, c) {
                if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = !0; else {
                    if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = !1, yj(a, b, c);
                    dh = 0 !== (a.flags & 131072) ? !0 : !1;
                } else dh = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
                b.lanes = 0;
                switch (b.tag) {
                  case 2:
                    var d = b.type;
                    ij(a, b);
                    a = b.pendingProps;
                    var e = Yf(b, H.current);
                    ch(b, c);
                    e = Nh(null, b, d, a, e, c);
                    var f = Sh();
                    b.flags |= 1;
                    "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, 
                    b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, 
                    b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), 
                    e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, !0, f, c)) : (b.tag = 0, 
                    I && f && vg(b), Xi(null, b, e, c), b = b.child);
                    return b;

                  case 16:
                    d = b.elementType;
                    a: {
                        ij(a, b);
                        a = b.pendingProps;
                        e = d._init;
                        d = e(d._payload);
                        b.type = d;
                        e = b.tag = Zk(d);
                        a = Ci(d, a);
                        switch (e) {
                          case 0:
                            b = cj(null, b, d, a, c);
                            break a;

                          case 1:
                            b = hj(null, b, d, a, c);
                            break a;

                          case 11:
                            b = Yi(null, b, d, a, c);
                            break a;

                          case 14:
                            b = $i(null, b, d, Ci(d.type, a), c);
                            break a;
                        }
                        throw Error(p(306, d, ""));
                    }
                    return b;

                  case 0:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);

                  case 1:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);

                  case 3:
                    a: {
                        kj(b);
                        if (null === a) throw Error(p(387));
                        d = b.pendingProps;
                        f = b.memoizedState;
                        e = f.element;
                        lh(a, b);
                        qh(b, d, null, c);
                        var g = b.memoizedState;
                        d = g.element;
                        if (f.isDehydrated) if (f = {
                            element: d,
                            isDehydrated: !1,
                            cache: g.cache,
                            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                            transitions: g.transitions
                        }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                            e = Ji(Error(p(423)), b);
                            b = lj(a, b, d, c, e);
                            break a;
                        } else if (d !== e) {
                            e = Ji(Error(p(424)), b);
                            b = lj(a, b, d, c, e);
                            break a;
                        } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, 
                        c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling; else {
                            Ig();
                            if (d === e) {
                                b = Zi(a, b, c);
                                break a;
                            }
                            Xi(a, b, d, c);
                        }
                        b = b.child;
                    }
                    return b;

                  case 5:
                    return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, 
                    g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), 
                    gj(a, b), Xi(a, b, g, c), b.child;

                  case 6:
                    return null === a && Eg(b), null;

                  case 13:
                    return oj(a, b, c);

                  case 4:
                    return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), 
                    b.child;

                  case 11:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);

                  case 7:
                    return Xi(a, b, b.pendingProps, c), b.child;

                  case 8:
                    return Xi(a, b, b.pendingProps.children, c), b.child;

                  case 12:
                    return Xi(a, b, b.pendingProps.children, c), b.child;

                  case 10:
                    a: {
                        d = b.type._context;
                        e = b.pendingProps;
                        f = b.memoizedProps;
                        g = e.value;
                        G(Wg, d._currentValue);
                        d._currentValue = g;
                        if (null !== f) if (He(f.value, g)) {
                            if (f.children === e.children && !Wf.current) {
                                b = Zi(a, b, c);
                                break a;
                            }
                        } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                            var h = f.dependencies;
                            if (null !== h) {
                                g = f.child;
                                for (var k = h.firstContext; null !== k; ) {
                                    if (k.context === d) {
                                        if (1 === f.tag) {
                                            k = mh(-1, c & -c);
                                            k.tag = 2;
                                            var l = f.updateQueue;
                                            if (null !== l) {
                                                l = l.shared;
                                                var m = l.pending;
                                                null === m ? k.next = k : (k.next = m.next, m.next = k);
                                                l.pending = k;
                                            }
                                        }
                                        f.lanes |= c;
                                        k = f.alternate;
                                        null !== k && (k.lanes |= c);
                                        bh(f.return, c, b);
                                        h.lanes |= c;
                                        break;
                                    }
                                    k = k.next;
                                }
                            } else if (10 === f.tag) g = f.type === b.type ? null : f.child; else if (18 === f.tag) {
                                g = f.return;
                                if (null === g) throw Error(p(341));
                                g.lanes |= c;
                                h = g.alternate;
                                null !== h && (h.lanes |= c);
                                bh(g, c, b);
                                g = f.sibling;
                            } else g = f.child;
                            if (null !== g) g.return = f; else for (g = f; null !== g; ) {
                                if (g === b) {
                                    g = null;
                                    break;
                                }
                                f = g.sibling;
                                if (null !== f) {
                                    f.return = g.return;
                                    g = f;
                                    break;
                                }
                                g = g.return;
                            }
                            f = g;
                        }
                        Xi(a, b, e.children, c);
                        b = b.child;
                    }
                    return b;

                  case 9:
                    return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, 
                    Xi(a, b, d, c), b.child;

                  case 14:
                    return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);

                  case 15:
                    return bj(a, b, b.type, b.pendingProps, c);

                  case 17:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), 
                    b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), 
                    jj(null, b, d, !0, a, c);

                  case 19:
                    return xj(a, b, c);

                  case 22:
                    return dj(a, b, c);
                }
                throw Error(p(156, b.tag));
            };
            function Fk(a, b) {
                return ac(a, b);
            }
            function $k(a, b, c, d) {
                this.tag = a;
                this.key = c;
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
                this.index = 0;
                this.ref = null;
                this.pendingProps = b;
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
                this.mode = d;
                this.subtreeFlags = this.flags = 0;
                this.deletions = null;
                this.childLanes = this.lanes = 0;
                this.alternate = null;
            }
            function Bg(a, b, c, d) {
                return new $k(a, b, c, d);
            }
            function aj(a) {
                a = a.prototype;
                return !(!a || !a.isReactComponent);
            }
            function Zk(a) {
                if ("function" === typeof a) return aj(a) ? 1 : 0;
                if (void 0 !== a && null !== a) {
                    a = a.$$typeof;
                    if (a === Da) return 11;
                    if (a === Ga) return 14;
                }
                return 2;
            }
            function Pg(a, b) {
                var c = a.alternate;
                null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, 
                c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, 
                c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
                c.flags = a.flags & 14680064;
                c.childLanes = a.childLanes;
                c.lanes = a.lanes;
                c.child = a.child;
                c.memoizedProps = a.memoizedProps;
                c.memoizedState = a.memoizedState;
                c.updateQueue = a.updateQueue;
                b = a.dependencies;
                c.dependencies = null === b ? null : {
                    lanes: b.lanes,
                    firstContext: b.firstContext
                };
                c.sibling = a.sibling;
                c.index = a.index;
                c.ref = a.ref;
                return c;
            }
            function Rg(a, b, c, d, e, f) {
                var g = 2;
                d = a;
                if ("function" === typeof a) aj(a) && (g = 1); else if ("string" === typeof a) g = 5; else a: switch (a) {
                  case ya:
                    return Tg(c.children, e, f, b);

                  case za:
                    g = 8;
                    e |= 8;
                    break;

                  case Aa:
                    return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;

                  case Ea:
                    return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;

                  case Fa:
                    return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;

                  case Ia:
                    return pj(c, e, f, b);

                  default:
                    if ("object" === typeof a && null !== a) switch (a.$$typeof) {
                      case Ba:
                        g = 10;
                        break a;

                      case Ca:
                        g = 9;
                        break a;

                      case Da:
                        g = 11;
                        break a;

                      case Ga:
                        g = 14;
                        break a;

                      case Ha:
                        g = 16;
                        d = null;
                        break a;
                    }
                    throw Error(p(130, null == a ? a : typeof a, ""));
                }
                b = Bg(g, c, b, e);
                b.elementType = a;
                b.type = d;
                b.lanes = f;
                return b;
            }
            function Tg(a, b, c, d) {
                a = Bg(7, a, d, b);
                a.lanes = c;
                return a;
            }
            function pj(a, b, c, d) {
                a = Bg(22, a, d, b);
                a.elementType = Ia;
                a.lanes = c;
                a.stateNode = {
                    isHidden: !1
                };
                return a;
            }
            function Qg(a, b, c) {
                a = Bg(6, a, null, b);
                a.lanes = c;
                return a;
            }
            function Sg(a, b, c) {
                b = Bg(4, null !== a.children ? a.children : [], a.key, b);
                b.lanes = c;
                b.stateNode = {
                    containerInfo: a.containerInfo,
                    pendingChildren: null,
                    implementation: a.implementation
                };
                return b;
            }
            function al(a, b, c, d, e) {
                this.tag = b;
                this.containerInfo = a;
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
                this.timeoutHandle = -1;
                this.callbackNode = this.pendingContext = this.context = null;
                this.callbackPriority = 0;
                this.eventTimes = zc(0);
                this.expirationTimes = zc(-1);
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
                this.entanglements = zc(0);
                this.identifierPrefix = d;
                this.onRecoverableError = e;
                this.mutableSourceEagerHydrationData = null;
            }
            function bl(a, b, c, d, e, f, g, h, k) {
                a = new al(a, b, c, h, k);
                1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
                f = Bg(3, null, null, b);
                a.current = f;
                f.stateNode = a;
                f.memoizedState = {
                    element: d,
                    isDehydrated: c,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                };
                kh(f);
                return a;
            }
            function cl(a, b, c) {
                var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: wa,
                    key: null == d ? null : "" + d,
                    children: a,
                    containerInfo: b,
                    implementation: c
                };
            }
            function dl(a) {
                if (!a) return Vf;
                a = a._reactInternals;
                a: {
                    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
                    var b = a;
                    do {
                        switch (b.tag) {
                          case 3:
                            b = b.stateNode.context;
                            break a;

                          case 1:
                            if (Zf(b.type)) {
                                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                                break a;
                            }
                        }
                        b = b.return;
                    } while (null !== b);
                    throw Error(p(171));
                }
                if (1 === a.tag) {
                    var c = a.type;
                    if (Zf(c)) return bg(a, c, b);
                }
                return b;
            }
            function el(a, b, c, d, e, f, g, h, k) {
                a = bl(c, d, !0, a, e, f, g, h, k);
                a.context = dl(null);
                c = a.current;
                d = R();
                e = yi(c);
                f = mh(d, e);
                f.callback = void 0 !== b && null !== b ? b : null;
                nh(c, f, e);
                a.current.lanes = e;
                Ac(a, e, d);
                Dk(a, d);
                return a;
            }
            function fl(a, b, c, d) {
                var e = b.current, f = R(), g = yi(e);
                c = dl(c);
                null === b.context ? b.context = c : b.pendingContext = c;
                b = mh(f, g);
                b.payload = {
                    element: a
                };
                d = void 0 === d ? null : d;
                null !== d && (b.callback = d);
                a = nh(e, b, g);
                null !== a && (gi(a, e, g, f), oh(a, e, g));
                return g;
            }
            function gl(a) {
                a = a.current;
                if (!a.child) return null;
                switch (a.child.tag) {
                  case 5:
                    return a.child.stateNode;

                  default:
                    return a.child.stateNode;
                }
            }
            function hl(a, b) {
                a = a.memoizedState;
                if (null !== a && null !== a.dehydrated) {
                    var c = a.retryLane;
                    a.retryLane = 0 !== c && c < b ? c : b;
                }
            }
            function il(a, b) {
                hl(a, b);
                (a = a.alternate) && hl(a, b);
            }
            function jl() {
                return null;
            }
            var kl = "function" === typeof reportError ? reportError : function(a) {
                console.error(a);
            };
            function ll(a) {
                this._internalRoot = a;
            }
            ml.prototype.render = ll.prototype.render = function(a) {
                var b = this._internalRoot;
                if (null === b) throw Error(p(409));
                fl(a, b, null, null);
            };
            ml.prototype.unmount = ll.prototype.unmount = function() {
                var a = this._internalRoot;
                if (null !== a) {
                    this._internalRoot = null;
                    var b = a.containerInfo;
                    Rk((function() {
                        fl(null, a, null, null);
                    }));
                    b[uf] = null;
                }
            };
            function ml(a) {
                this._internalRoot = a;
            }
            ml.prototype.unstable_scheduleHydration = function(a) {
                if (a) {
                    var b = Hc();
                    a = {
                        blockedOn: null,
                        target: a,
                        priority: b
                    };
                    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
                    Qc.splice(c, 0, a);
                    0 === c && Vc(a);
                }
            };
            function nl(a) {
                return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
            }
            function ol(a) {
                return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
            }
            function pl() {}
            function ql(a, b, c, d, e) {
                if (e) {
                    if ("function" === typeof d) {
                        var f = d;
                        d = function() {
                            var a = gl(g);
                            f.call(a);
                        };
                    }
                    var g = el(b, d, a, 0, null, !1, !1, "", pl);
                    a._reactRootContainer = g;
                    a[uf] = g.current;
                    sf(8 === a.nodeType ? a.parentNode : a);
                    Rk();
                    return g;
                }
                for (;e = a.lastChild; ) a.removeChild(e);
                if ("function" === typeof d) {
                    var h = d;
                    d = function() {
                        var a = gl(k);
                        h.call(a);
                    };
                }
                var k = bl(a, 0, !1, null, null, !1, !1, "", pl);
                a._reactRootContainer = k;
                a[uf] = k.current;
                sf(8 === a.nodeType ? a.parentNode : a);
                Rk((function() {
                    fl(b, k, c, d);
                }));
                return k;
            }
            function rl(a, b, c, d, e) {
                var f = c._reactRootContainer;
                if (f) {
                    var g = f;
                    if ("function" === typeof e) {
                        var h = e;
                        e = function() {
                            var a = gl(g);
                            h.call(a);
                        };
                    }
                    fl(b, g, a, e);
                } else g = ql(c, b, a, e, d);
                return gl(g);
            }
            Ec = function(a) {
                switch (a.tag) {
                  case 3:
                    var b = a.stateNode;
                    if (b.current.memoizedState.isDehydrated) {
                        var c = tc(b.pendingLanes);
                        0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
                    }
                    break;

                  case 13:
                    Rk((function() {
                        var b = ih(a, 1);
                        if (null !== b) {
                            var c = R();
                            gi(b, a, 1, c);
                        }
                    })), il(a, 1);
                }
            };
            Fc = function(a) {
                if (13 === a.tag) {
                    var b = ih(a, 134217728);
                    if (null !== b) {
                        var c = R();
                        gi(b, a, 134217728, c);
                    }
                    il(a, 134217728);
                }
            };
            Gc = function(a) {
                if (13 === a.tag) {
                    var b = yi(a), c = ih(a, b);
                    if (null !== c) {
                        var d = R();
                        gi(c, a, b, d);
                    }
                    il(a, b);
                }
            };
            Hc = function() {
                return C;
            };
            Ic = function(a, b) {
                var c = C;
                try {
                    return C = a, b();
                } finally {
                    C = c;
                }
            };
            yb = function(a, b, c) {
                switch (b) {
                  case "input":
                    bb(a, c);
                    b = c.name;
                    if ("radio" === c.type && null != b) {
                        for (c = a; c.parentNode; ) c = c.parentNode;
                        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                        for (b = 0; b < c.length; b++) {
                            var d = c[b];
                            if (d !== a && d.form === a.form) {
                                var e = Db(d);
                                if (!e) throw Error(p(90));
                                Wa(d);
                                bb(d, e);
                            }
                        }
                    }
                    break;

                  case "textarea":
                    ib(a, c);
                    break;

                  case "select":
                    b = c.value, null != b && fb(a, !!c.multiple, b, !1);
                }
            };
            Gb = Qk;
            Hb = Rk;
            var sl = {
                usingClientEntryPoint: !1,
                Events: [ Cb, ue, Db, Eb, Fb, Qk ]
            }, tl = {
                findFiberByHostInstance: Wc,
                bundleType: 0,
                version: "18.3.1",
                rendererPackageName: "react-dom"
            };
            var ul = {
                bundleType: tl.bundleType,
                version: tl.version,
                rendererPackageName: tl.rendererPackageName,
                rendererConfig: tl.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: ua.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(a) {
                    a = Zb(a);
                    return null === a ? null : a.stateNode;
                },
                findFiberByHostInstance: tl.findFiberByHostInstance || jl,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!vl.isDisabled && vl.supportsFiber) try {
                    kc = vl.inject(ul), lc = vl;
                } catch (a) {}
            }
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
            exports.createPortal = function(a, b) {
                var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!nl(b)) throw Error(p(200));
                return cl(a, b, null, c);
            };
            exports.createRoot = function(a, b) {
                if (!nl(a)) throw Error(p(299));
                var c = !1, d = "", e = kl;
                null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), 
                void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
                b = bl(a, 1, !1, null, null, c, !1, d, e);
                a[uf] = b.current;
                sf(8 === a.nodeType ? a.parentNode : a);
                return new ll(b);
            };
            exports.findDOMNode = function(a) {
                if (null == a) return null;
                if (1 === a.nodeType) return a;
                var b = a._reactInternals;
                if (void 0 === b) {
                    if ("function" === typeof a.render) throw Error(p(188));
                    a = Object.keys(a).join(",");
                    throw Error(p(268, a));
                }
                a = Zb(b);
                a = null === a ? null : a.stateNode;
                return a;
            };
            exports.flushSync = function(a) {
                return Rk(a);
            };
            exports.hydrate = function(a, b, c) {
                if (!ol(b)) throw Error(p(200));
                return rl(null, a, b, !0, c);
            };
            exports.hydrateRoot = function(a, b, c) {
                if (!nl(a)) throw Error(p(405));
                var d = null != c && c.hydratedSources || null, e = !1, f = "", g = kl;
                null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), 
                void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
                b = el(b, null, a, 1, null != c ? c : null, e, !1, f, g);
                a[uf] = b.current;
                sf(a);
                if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), 
                null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [ c, e ] : b.mutableSourceEagerHydrationData.push(c, e);
                return new ml(b);
            };
            exports.render = function(a, b, c) {
                if (!ol(b)) throw Error(p(200));
                return rl(null, a, b, !1, c);
            };
            exports.unmountComponentAtNode = function(a) {
                if (!ol(a)) throw Error(p(40));
                return a._reactRootContainer ? (Rk((function() {
                    rl(null, null, a, !1, (function() {
                        a._reactRootContainer = null;
                        a[uf] = null;
                    }));
                })), !0) : !1;
            };
            exports.unstable_batchedUpdates = Qk;
            exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
                if (!ol(c)) throw Error(p(200));
                if (null == a || void 0 === a._reactInternals) throw Error(p(38));
                return rl(a, b, c, !1, d);
            };
            exports.version = "18.3.1-next-f1338f8080-20240426";
        },
        338: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            var m = __webpack_require__(961);
            if (true) {
                exports.createRoot = m.createRoot;
                exports.hydrateRoot = m.hydrateRoot;
            } else ;
        },
        961: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            function checkDCE() {
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
                if (false) ;
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
                } catch (err) {
                    console.error(err);
                }
            }
            if (true) {
                checkDCE();
                module.exports = __webpack_require__(551);
            }
        },
        801: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __rest = this && this.__rest || function(s, e) {
                var t = {};
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function") {
                    var i = 0;
                    for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
                }
                return t;
            };
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.defaultProps = void 0;
            const react_1 = __importDefault(__webpack_require__(540));
            const render_props_version_1 = __importDefault(__webpack_require__(870));
            exports.defaultProps = Object.assign(Object.assign({}, render_props_version_1.default.defaultProps), {
                stickyClassName: "sticky",
                wrapperClassName: "",
                stickyStyle: {}
            });
            function Sticky(props) {
                const _a = Object.assign(Object.assign({}, exports.defaultProps), props), {mode, onFixedToggle, hideOnBoundaryHit, offsetTransforms, disabled, boundaryElement, scrollElement, bottomOffset, topOffset, positionRecheckInterval, children, isIOSFixEnabled, dontUpdateHolderHeightWhenSticky, wrapperClassName, stickyClassName, stickyStyle} = _a, rest = __rest(_a, [ "mode", "onFixedToggle", "hideOnBoundaryHit", "offsetTransforms", "disabled", "boundaryElement", "scrollElement", "bottomOffset", "topOffset", "positionRecheckInterval", "children", "isIOSFixEnabled", "dontUpdateHolderHeightWhenSticky", "wrapperClassName", "stickyClassName", "stickyStyle" ]);
                return react_1.default.createElement(render_props_version_1.default, {
                    mode,
                    onFixedToggle,
                    hideOnBoundaryHit,
                    offsetTransforms,
                    disabled,
                    boundaryElement,
                    scrollElement,
                    bottomOffset,
                    topOffset,
                    positionRecheckInterval,
                    isIOSFixEnabled,
                    dontUpdateHolderHeightWhenSticky
                }, (({isFixed, wrapperStyles, wrapperRef, holderStyles, holderRef}) => react_1.default.createElement("div", Object.assign({}, rest, {
                    ref: holderRef,
                    style: holderStyles
                }), react_1.default.createElement("div", Object.assign({}, rest, {
                    className: `${wrapperClassName} ${isFixed ? stickyClassName : ""}`,
                    style: isFixed ? Object.assign(Object.assign({}, wrapperStyles), stickyStyle) : wrapperStyles,
                    ref: wrapperRef
                }), children))));
            }
            exports["default"] = Sticky;
        },
        919: (__unused_webpack_module, exports) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.unlisten = exports.listen = void 0;
            const elementsWithListeners = [];
            const registeredListeners = [];
            function createListener(el) {
                return {
                    el,
                    callbacks: {},
                    realCallbacks: {},
                    realListenersCnt: 0
                };
            }
            function addCallback(listener, event, cb) {
                if (listener.callbacks[event]) {
                    if (listener.callbacks[event].indexOf(cb) === -1) listener.callbacks[event].push(cb);
                    return;
                }
                listener.callbacks[event] = [ cb ];
                listener.realCallbacks[event] = e => {
                    for (let i = 0, l = listener.callbacks[event].length; i < l; i += 1) listener.callbacks[event][i](e);
                };
                listener.el.addEventListener(event, listener.realCallbacks[event]);
                listener.realListenersCnt += 1;
            }
            function removeCallback(listener, event, cb) {
                if (!listener.callbacks[event]) return;
                const idx = listener.callbacks[event].indexOf(cb);
                if (idx === -1) return;
                listener.callbacks[event].splice(idx, 1);
                if (listener.callbacks[event].length > 0) return;
                listener.el.removeEventListener(event, listener.realCallbacks[event]);
                delete listener.callbacks[event];
                delete listener.realCallbacks[event];
                listener.realListenersCnt -= 1;
            }
            function addListener(el, event, cb) {
                let idx = elementsWithListeners.indexOf(el);
                if (idx === -1) {
                    idx = elementsWithListeners.length;
                    elementsWithListeners.push(el);
                    registeredListeners.push(createListener(el));
                }
                const listener = registeredListeners[idx];
                addCallback(listener, event, cb);
            }
            function removeListener(el, event, cb) {
                const idx = elementsWithListeners.indexOf(el);
                if (idx === -1) return;
                const listener = registeredListeners[idx];
                removeCallback(listener, event, cb);
                if (listener.realListenersCnt > 0) return;
                elementsWithListeners.splice(idx, 1);
                registeredListeners.splice(idx, 1);
            }
            function listen(el, events, cb) {
                for (let i = 0, l = events.length; i < l; i += 1) addListener(el, events[i], cb);
            }
            exports.listen = listen;
            function unlisten(el, events, cb) {
                for (let i = 0, l = events.length; i < l; i += 1) removeListener(el, events[i], cb);
            }
            exports.unlisten = unlisten;
        },
        521: (__unused_webpack_module, exports) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            const basicSelectors = {};
            if (typeof document !== "undefined") {
                basicSelectors.body = document.body;
                basicSelectors.window = window;
                basicSelectors.document = document;
            }
            const matchesMethodName = (() => {
                if (typeof document !== "undefined" && document.body) {
                    const body = document.body;
                    return typeof body.matches === "function" ? "matches" : typeof body.webkitMatchesSelector === "function" ? "webkitMatchesSelector" : typeof body.mozMatchesSelector === "function" ? "mozMatchesSelector" : typeof body.msMatchesSelector === "function" ? "msMatchesSelector" : typeof body.oMatchesSelector === "function" ? "oMatchesSelector" : null;
                }
                return null;
            })();
            function find(selector, el) {
                if (!selector) return null;
                if (basicSelectors.hasOwnProperty(selector)) return basicSelectors[selector];
                if (selector[0] === "#") return document.getElementById(selector.slice(1));
                if (matchesMethodName === null) return null;
                let temp = el;
                while (temp = temp.parentElement) if (temp[matchesMethodName](selector)) return temp || null;
                return null;
            }
            exports["default"] = find;
        },
        28: (__unused_webpack_module, exports) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            function getClosestTransformedParent(el) {
                do {
                    const style = window.getComputedStyle(el);
                    if (style.transform !== "none" || style.webkitTransform !== "none") return el;
                    el = el.parentElement || el.parentNode;
                } while (el !== null && el.nodeType === 1);
                return null;
            }
            exports["default"] = getClosestTransformedParent;
        },
        744: (__unused_webpack_module, exports) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.isIntersecting = exports.getRect = exports.infiniteRect = void 0;
            exports.infiniteRect = {
                top: -1 / 0,
                bottom: 1 / 0,
                height: 1 / 0,
                left: -1 / 0,
                right: 1 / 0,
                width: 1 / 0
            };
            function getRect(el) {
                if (el && "getBoundingClientRect" in el && typeof el.getBoundingClientRect === "function") return el.getBoundingClientRect();
                if (el === window || el === document) return {
                    top: 0,
                    left: 0,
                    bottom: window.innerHeight,
                    height: window.innerHeight,
                    width: window.innerWidth,
                    right: window.innerWidth
                };
                return {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: 0,
                    height: 0
                };
            }
            exports.getRect = getRect;
            function isIntersecting(r1, r2, topOffset, bottomOffset) {
                const r1Top = r1.top + topOffset, r1Bottom = r1.bottom + bottomOffset;
                return r1Top >= r2.top && r1Top <= r2.bottom || r1Bottom >= r2.top && r1Bottom <= r2.bottom || r1Bottom >= r2.bottom && r1Top <= r2.top;
            }
            exports.isIntersecting = isIntersecting;
        },
        682: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.RenderPropSticky = void 0;
            const render_props_version_1 = __importDefault(__webpack_require__(870));
            exports.RenderPropSticky = render_props_version_1.default;
            const basic_version_1 = __importDefault(__webpack_require__(801));
            exports["default"] = basic_version_1.default;
        },
        870: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            const react_1 = __webpack_require__(540);
            const events_1 = __webpack_require__(919);
            const find_1 = __importDefault(__webpack_require__(521));
            const getClosestTransformedParent_1 = __importDefault(__webpack_require__(28));
            const rect_1 = __webpack_require__(744);
            const buildTopStyles = (container, props) => {
                const {bottomOffset, hideOnBoundaryHit} = props;
                const {top, height, width, boundaryBottom} = container;
                if (hideOnBoundaryHit || top + height + bottomOffset < boundaryBottom) return {
                    top: `${top}px`,
                    width: `${width}px`,
                    position: "fixed"
                };
                if (!hideOnBoundaryHit && boundaryBottom > 0) return {
                    top: `${boundaryBottom - height - bottomOffset}px`,
                    width: `${width}px`,
                    position: "fixed"
                };
                return {
                    width: `${width}px`,
                    bottom: `${bottomOffset}px`,
                    position: "absolute"
                };
            };
            const buildBottomStyles = (container, props) => {
                const {bottomOffset, hideOnBoundaryHit} = props;
                const {bottom, height, width, boundaryTop} = container;
                if (hideOnBoundaryHit || bottom - height - bottomOffset > boundaryTop) return {
                    width: `${width}px`,
                    top: `${bottom - height}px`,
                    position: "fixed"
                };
                return {
                    width: `${width}px`,
                    top: `${bottomOffset}px`,
                    position: "absolute"
                };
            };
            const buildStickyStyle = (mode, props, container) => (mode === "top" ? buildTopStyles : buildBottomStyles)(container, props);
            const isEqual = (obj1, obj2) => {
                const styles1 = obj1.wrapperStyles;
                const styles2 = obj2.wrapperStyles;
                if (obj1.isFixed !== obj2.isFixed || obj1.height !== obj2.height || !styles1 && styles2 || styles1 && !styles2) return false;
                if (!styles2) return true;
                for (const field in styles1) if (styles1.hasOwnProperty(field) && styles1[field] !== styles2[field]) return false;
                return true;
            };
            class Sticky extends react_1.Component {
                constructor() {
                    super(...arguments);
                    this.holderEl = null;
                    this.wrapperEl = null;
                    this.el = null;
                    this.scrollEl = null;
                    this.boundaryEl = null;
                    this.disabled = false;
                    this.checkPositionIntervalId = null;
                    this.lastMinHeight = null;
                    this.state = {
                        isFixed: false,
                        wrapperStyles: void 0,
                        holderStyles: void 0,
                        height: 0
                    };
                    this.holderRef = holderEl => {
                        if (holderEl === this.holderEl) return;
                        this.holderEl = holderEl;
                    };
                    this.wrapperRef = wrapperEl => {
                        if (wrapperEl === this.wrapperEl) return;
                        this.wrapperEl = wrapperEl;
                        this.updateScrollEl();
                        this.updateBoundaryEl();
                    };
                    this.checkPosition = () => {
                        const {holderEl, wrapperEl, boundaryEl, scrollEl, disabled} = this;
                        if (!scrollEl || !holderEl || !wrapperEl) {
                            console.error("Missing required elements:", {
                                scrollEl,
                                holderEl,
                                wrapperEl
                            });
                            return;
                        }
                        const {mode, onFixedToggle, offsetTransforms, isIOSFixEnabled, dontUpdateHolderHeightWhenSticky} = this.props;
                        if (disabled) {
                            if (this.state.isFixed) this.setState({
                                isFixed: false,
                                wrapperStyles: {}
                            });
                            return;
                        }
                        if (!holderEl.getBoundingClientRect || !wrapperEl.getBoundingClientRect) return;
                        const holderRect = holderEl.getBoundingClientRect();
                        const wrapperRect = wrapperEl.getBoundingClientRect();
                        const boundaryRect = boundaryEl ? (0, rect_1.getRect)(boundaryEl) : rect_1.infiniteRect;
                        const scrollRect = (0, rect_1.getRect)(scrollEl);
                        const isFixed = this.isFixed(holderRect, wrapperRect, boundaryRect, scrollRect);
                        let offsets = null;
                        if (offsetTransforms && isFixed && scrollEl instanceof HTMLElement) {
                            const closestTransformedParent = (0, getClosestTransformedParent_1.default)(scrollEl);
                            if (closestTransformedParent) offsets = (0, rect_1.getRect)(closestTransformedParent);
                        }
                        const minHeight = this.state.isFixed && dontUpdateHolderHeightWhenSticky && this.lastMinHeight ? this.lastMinHeight : wrapperRect.height;
                        this.lastMinHeight = minHeight;
                        const iosRenderingFixStyles = isIOSFixEnabled ? {
                            transform: "translateZ(0)",
                            WebkitTransform: "translateZ(0)"
                        } : void 0;
                        const newState = {
                            isFixed,
                            height: wrapperRect.height,
                            holderStyles: {
                                minHeight: `${minHeight}px`
                            },
                            wrapperStyles: isFixed ? Object.assign(Object.assign({}, iosRenderingFixStyles), buildStickyStyle(mode, this.props, {
                                boundaryTop: mode === "bottom" ? boundaryRect.top : 0,
                                boundaryBottom: mode === "top" ? boundaryRect.bottom : 0,
                                top: mode === "top" ? scrollRect.top - (offsets ? offsets.top : 0) : 0,
                                bottom: mode === "bottom" ? scrollRect.bottom - (offsets ? offsets.bottom : 0) : 0,
                                width: holderRect.width,
                                height: wrapperRect.height
                            })) : iosRenderingFixStyles
                        };
                        if (isFixed !== this.state.isFixed && onFixedToggle && typeof onFixedToggle === "function") onFixedToggle(isFixed);
                        if (!isEqual(this.state, newState)) this.setState(newState);
                    };
                }
                isFixed(holderRect, wrapperRect, boundaryRect, scrollRect) {
                    const {hideOnBoundaryHit, bottomOffset, topOffset, mode} = this.props;
                    if (this.disabled) return false;
                    if (hideOnBoundaryHit && boundaryRect && !(0, rect_1.isIntersecting)(boundaryRect, scrollRect, topOffset, bottomOffset)) return false;
                    const hideOffset = hideOnBoundaryHit ? wrapperRect.height + bottomOffset : 0;
                    if (mode === "top") return holderRect.top + topOffset < scrollRect.top && scrollRect.top + hideOffset <= boundaryRect.bottom;
                    return holderRect.bottom - topOffset > scrollRect.bottom && scrollRect.bottom - hideOffset >= boundaryRect.top;
                }
                updateScrollEl() {
                    if (!this.wrapperEl) return;
                    if (this.scrollEl) {
                        (0, events_1.unlisten)(this.scrollEl, [ "scroll" ], this.checkPosition);
                        this.scrollEl = null;
                    }
                    const {scrollElement} = this.props;
                    if (typeof scrollElement === "string") this.scrollEl = (0, find_1.default)(scrollElement, this.wrapperEl); else this.scrollEl = scrollElement;
                    if (this.scrollEl) (0, events_1.listen)(this.scrollEl, [ "scroll" ], this.checkPosition); else console.error("Cannot find scrollElement " + (typeof scrollElement === "string" ? scrollElement : "unknown"));
                }
                updateBoundaryEl() {
                    if (!this.wrapperEl) return;
                    const {boundaryElement} = this.props;
                    this.boundaryEl = (0, find_1.default)(boundaryElement, this.wrapperEl);
                    if (this.boundaryEl === window || this.boundaryEl === document) this.boundaryEl = null;
                }
                initialize() {
                    const {positionRecheckInterval, disabled} = this.props;
                    this.disabled = disabled;
                    (0, events_1.listen)(window, [ "scroll", "resize", "pageshow", "load" ], this.checkPosition);
                    this.checkPosition();
                    if (positionRecheckInterval) this.checkPositionIntervalId = setInterval(this.checkPosition, positionRecheckInterval);
                }
                componentDidUpdate({scrollElement, boundaryElement, disabled}) {
                    if (scrollElement !== this.props.scrollElement || this.scrollEl === null) this.updateScrollEl();
                    if (boundaryElement !== this.props.boundaryElement || this.boundaryEl === null) this.updateBoundaryEl();
                    if (disabled !== this.props.disabled) {
                        this.disabled = this.props.disabled;
                        this.checkPosition();
                    }
                }
                componentDidMount() {
                    this.initialize();
                    if (this.wrapperEl === null) console.error("Wrapper element is missing, please make sure that you have assigned refs correctly");
                }
                componentWillUnmount() {
                    if (this.scrollEl) (0, events_1.unlisten)(this.scrollEl, [ "scroll" ], this.checkPosition);
                    (0, events_1.unlisten)(window, [ "scroll", "resize", "pageshow", "load" ], this.checkPosition);
                    this.boundaryEl = null;
                    this.scrollEl = null;
                    if (this.checkPositionIntervalId) clearInterval(this.checkPositionIntervalId);
                }
                render() {
                    const {holderRef, wrapperRef} = this;
                    const {isFixed, wrapperStyles, holderStyles} = this.state;
                    return this.props.children({
                        holderRef,
                        wrapperRef,
                        isFixed,
                        wrapperStyles,
                        holderStyles
                    });
                }
            }
            Sticky.defaultProps = {
                mode: "top",
                topOffset: 0,
                bottomOffset: 0,
                isIOSFixEnabled: true,
                offsetTransforms: true,
                disabled: false,
                onFixedToggle: void 0,
                boundaryElement: void 0,
                hideOnBoundaryHit: true,
                scrollElement: "window",
                dontUpdateHolderHeightWhenSticky: false
            };
            exports["default"] = Sticky;
        },
        287: (__unused_webpack_module, exports) => {
            "use strict";
            /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */            var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
            function A(a) {
                if (null === a || "object" !== typeof a) return null;
                a = z && a[z] || a["@@iterator"];
                return "function" === typeof a ? a : null;
            }
            var B = {
                isMounted: function() {
                    return !1;
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }, C = Object.assign, D = {};
            function E(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            E.prototype.isReactComponent = {};
            E.prototype.setState = function(a, b) {
                if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, a, b, "setState");
            };
            E.prototype.forceUpdate = function(a) {
                this.updater.enqueueForceUpdate(this, a, "forceUpdate");
            };
            function F() {}
            F.prototype = E.prototype;
            function G(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            var H = G.prototype = new F;
            H.constructor = G;
            C(H, E.prototype);
            H.isPureReactComponent = !0;
            var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
                current: null
            }, L = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function M(a, b, e) {
                var d, c = {}, k = null, h = null;
                if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), 
                b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
                var g = arguments.length - 2;
                if (1 === g) c.children = e; else if (1 < g) {
                    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
                    c.children = f;
                }
                if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
                return {
                    $$typeof: l,
                    type: a,
                    key: k,
                    ref: h,
                    props: c,
                    _owner: K.current
                };
            }
            function N(a, b) {
                return {
                    $$typeof: l,
                    type: a.type,
                    key: b,
                    ref: a.ref,
                    props: a.props,
                    _owner: a._owner
                };
            }
            function O(a) {
                return "object" === typeof a && null !== a && a.$$typeof === l;
            }
            function escape(a) {
                var b = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + a.replace(/[=:]/g, (function(a) {
                    return b[a];
                }));
            }
            var P = /\/+/g;
            function Q(a, b) {
                return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
            }
            function R(a, b, e, d, c) {
                var k = typeof a;
                if ("undefined" === k || "boolean" === k) a = null;
                var h = !1;
                if (null === a) h = !0; else switch (k) {
                  case "string":
                  case "number":
                    h = !0;
                    break;

                  case "object":
                    switch (a.$$typeof) {
                      case l:
                      case n:
                        h = !0;
                    }
                }
                if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", 
                null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", (function(a) {
                    return a;
                }))) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), 
                b.push(c)), 1;
                h = 0;
                d = "" === d ? "." : d + ":";
                if (I(a)) for (var g = 0; g < a.length; g++) {
                    k = a[g];
                    var f = d + Q(k, g);
                    h += R(k, b, e, f, c);
                } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, 
                f = d + Q(k, g++), h += R(k, b, e, f, c); else if ("object" === k) throw b = String(a), 
                Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
                return h;
            }
            function S(a, b, e) {
                if (null == a) return a;
                var d = [], c = 0;
                R(a, d, "", "", (function(a) {
                    return b.call(e, a, c++);
                }));
                return d;
            }
            function T(a) {
                if (-1 === a._status) {
                    var b = a._result;
                    b = b();
                    b.then((function(b) {
                        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
                    }), (function(b) {
                        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
                    }));
                    -1 === a._status && (a._status = 0, a._result = b);
                }
                if (1 === a._status) return a._result.default;
                throw a._result;
            }
            var U = {
                current: null
            }, V = {
                transition: null
            }, W = {
                ReactCurrentDispatcher: U,
                ReactCurrentBatchConfig: V,
                ReactCurrentOwner: K
            };
            function X() {
                throw Error("act(...) is not supported in production builds of React.");
            }
            exports.Children = {
                map: S,
                forEach: function(a, b, e) {
                    S(a, (function() {
                        b.apply(this, arguments);
                    }), e);
                },
                count: function(a) {
                    var b = 0;
                    S(a, (function() {
                        b++;
                    }));
                    return b;
                },
                toArray: function(a) {
                    return S(a, (function(a) {
                        return a;
                    })) || [];
                },
                only: function(a) {
                    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
                    return a;
                }
            };
            exports.Component = E;
            exports.Fragment = p;
            exports.Profiler = r;
            exports.PureComponent = G;
            exports.StrictMode = q;
            exports.Suspense = w;
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
            exports.act = X;
            exports.cloneElement = function(a, b, e) {
                if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
                var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
                if (null != b) {
                    void 0 !== b.ref && (k = b.ref, h = K.current);
                    void 0 !== b.key && (c = "" + b.key);
                    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
                    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
                }
                var f = arguments.length - 2;
                if (1 === f) d.children = e; else if (1 < f) {
                    g = Array(f);
                    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
                    d.children = g;
                }
                return {
                    $$typeof: l,
                    type: a.type,
                    key: c,
                    ref: k,
                    props: d,
                    _owner: h
                };
            };
            exports.createContext = function(a) {
                a = {
                    $$typeof: u,
                    _currentValue: a,
                    _currentValue2: a,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                };
                a.Provider = {
                    $$typeof: t,
                    _context: a
                };
                return a.Consumer = a;
            };
            exports.createElement = M;
            exports.createFactory = function(a) {
                var b = M.bind(null, a);
                b.type = a;
                return b;
            };
            exports.createRef = function() {
                return {
                    current: null
                };
            };
            exports.forwardRef = function(a) {
                return {
                    $$typeof: v,
                    render: a
                };
            };
            exports.isValidElement = O;
            exports.lazy = function(a) {
                return {
                    $$typeof: y,
                    _payload: {
                        _status: -1,
                        _result: a
                    },
                    _init: T
                };
            };
            exports.memo = function(a, b) {
                return {
                    $$typeof: x,
                    type: a,
                    compare: void 0 === b ? null : b
                };
            };
            exports.startTransition = function(a) {
                var b = V.transition;
                V.transition = {};
                try {
                    a();
                } finally {
                    V.transition = b;
                }
            };
            exports.unstable_act = X;
            exports.useCallback = function(a, b) {
                return U.current.useCallback(a, b);
            };
            exports.useContext = function(a) {
                return U.current.useContext(a);
            };
            exports.useDebugValue = function() {};
            exports.useDeferredValue = function(a) {
                return U.current.useDeferredValue(a);
            };
            exports.useEffect = function(a, b) {
                return U.current.useEffect(a, b);
            };
            exports.useId = function() {
                return U.current.useId();
            };
            exports.useImperativeHandle = function(a, b, e) {
                return U.current.useImperativeHandle(a, b, e);
            };
            exports.useInsertionEffect = function(a, b) {
                return U.current.useInsertionEffect(a, b);
            };
            exports.useLayoutEffect = function(a, b) {
                return U.current.useLayoutEffect(a, b);
            };
            exports.useMemo = function(a, b) {
                return U.current.useMemo(a, b);
            };
            exports.useReducer = function(a, b, e) {
                return U.current.useReducer(a, b, e);
            };
            exports.useRef = function(a) {
                return U.current.useRef(a);
            };
            exports.useState = function(a) {
                return U.current.useState(a);
            };
            exports.useSyncExternalStore = function(a, b, e) {
                return U.current.useSyncExternalStore(a, b, e);
            };
            exports.useTransition = function() {
                return U.current.useTransition();
            };
            exports.version = "18.3.1";
        },
        540: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            if (true) module.exports = __webpack_require__(287);
        },
        463: (__unused_webpack_module, exports) => {
            "use strict";
            /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */            function f(a, b) {
                var c = a.length;
                a.push(b);
                a: for (;0 < c; ) {
                    var d = c - 1 >>> 1, e = a[d];
                    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d; else break a;
                }
            }
            function h(a) {
                return 0 === a.length ? null : a[0];
            }
            function k(a) {
                if (0 === a.length) return null;
                var b = a[0], c = a.pop();
                if (c !== b) {
                    a[0] = c;
                    a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
                        var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
                        if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, 
                        a[m] = c, d = m); else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n; else break a;
                    }
                }
                return b;
            }
            function g(a, b) {
                var c = a.sortIndex - b.sortIndex;
                return 0 !== c ? c : a.id - b.id;
            }
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var l = performance;
                exports.unstable_now = function() {
                    return l.now();
                };
            } else {
                var p = Date, q = p.now();
                exports.unstable_now = function() {
                    return p.now() - q;
                };
            }
            var r = [], t = [], u = 1, v = null, y = 3, z = !1, A = !1, B = !1, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            function G(a) {
                for (var b = h(t); null !== b; ) {
                    if (null === b.callback) k(t); else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, 
                    f(r, b); else break;
                    b = h(t);
                }
            }
            function H(a) {
                B = !1;
                G(a);
                if (!A) if (null !== h(r)) A = !0, I(J); else {
                    var b = h(t);
                    null !== b && K(H, b.startTime - a);
                }
            }
            function J(a, b) {
                A = !1;
                B && (B = !1, E(L), L = -1);
                z = !0;
                var c = y;
                try {
                    G(b);
                    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
                        var d = v.callback;
                        if ("function" === typeof d) {
                            v.callback = null;
                            y = v.priorityLevel;
                            var e = d(v.expirationTime <= b);
                            b = exports.unstable_now();
                            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
                            G(b);
                        } else k(r);
                        v = h(r);
                    }
                    if (null !== v) var w = !0; else {
                        var m = h(t);
                        null !== m && K(H, m.startTime - b);
                        w = !1;
                    }
                    return w;
                } finally {
                    v = null, y = c, z = !1;
                }
            }
            var N = !1, O = null, L = -1, P = 5, Q = -1;
            function M() {
                return exports.unstable_now() - Q < P ? !1 : !0;
            }
            function R() {
                if (null !== O) {
                    var a = exports.unstable_now();
                    Q = a;
                    var b = !0;
                    try {
                        b = O(!0, a);
                    } finally {
                        b ? S() : (N = !1, O = null);
                    }
                } else N = !1;
            }
            var S;
            if ("function" === typeof F) S = function() {
                F(R);
            }; else if ("undefined" !== typeof MessageChannel) {
                var T = new MessageChannel, U = T.port2;
                T.port1.onmessage = R;
                S = function() {
                    U.postMessage(null);
                };
            } else S = function() {
                D(R, 0);
            };
            function I(a) {
                O = a;
                N || (N = !0, S());
            }
            function K(a, b) {
                L = D((function() {
                    a(exports.unstable_now());
                }), b);
            }
            exports.unstable_IdlePriority = 5;
            exports.unstable_ImmediatePriority = 1;
            exports.unstable_LowPriority = 4;
            exports.unstable_NormalPriority = 3;
            exports.unstable_Profiling = null;
            exports.unstable_UserBlockingPriority = 2;
            exports.unstable_cancelCallback = function(a) {
                a.callback = null;
            };
            exports.unstable_continueExecution = function() {
                A || z || (A = !0, I(J));
            };
            exports.unstable_forceFrameRate = function(a) {
                0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
            };
            exports.unstable_getCurrentPriorityLevel = function() {
                return y;
            };
            exports.unstable_getFirstCallbackNode = function() {
                return h(r);
            };
            exports.unstable_next = function(a) {
                switch (y) {
                  case 1:
                  case 2:
                  case 3:
                    var b = 3;
                    break;

                  default:
                    b = y;
                }
                var c = y;
                y = b;
                try {
                    return a();
                } finally {
                    y = c;
                }
            };
            exports.unstable_pauseExecution = function() {};
            exports.unstable_requestPaint = function() {};
            exports.unstable_runWithPriority = function(a, b) {
                switch (a) {
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                    break;

                  default:
                    a = 3;
                }
                var c = y;
                y = a;
                try {
                    return b();
                } finally {
                    y = c;
                }
            };
            exports.unstable_scheduleCallback = function(a, b, c) {
                var d = exports.unstable_now();
                "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
                switch (a) {
                  case 1:
                    var e = -1;
                    break;

                  case 2:
                    e = 250;
                    break;

                  case 5:
                    e = 1073741823;
                    break;

                  case 4:
                    e = 1e4;
                    break;

                  default:
                    e = 5e3;
                }
                e = c + e;
                a = {
                    id: u++,
                    callback: b,
                    priorityLevel: a,
                    startTime: c,
                    expirationTime: e,
                    sortIndex: -1
                };
                c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, 
                K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
                return a;
            };
            exports.unstable_shouldYield = M;
            exports.unstable_wrapCallback = function(a) {
                var b = y;
                return function() {
                    var c = y;
                    y = b;
                    try {
                        return a.apply(this, arguments);
                    } finally {
                        y = c;
                    }
                };
            };
        },
        982: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            if (true) module.exports = __webpack_require__(463);
        },
        160: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            /**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */            var React = __webpack_require__(540);
            function is(x, y) {
                return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
            }
            var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
            exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
                var instRef = useRef(null);
                if (null === instRef.current) {
                    var inst = {
                        hasValue: !1,
                        value: null
                    };
                    instRef.current = inst;
                } else inst = instRef.current;
                instRef = useMemo((function() {
                    function memoizedSelector(nextSnapshot) {
                        if (!hasMemo) {
                            hasMemo = !0;
                            memoizedSnapshot = nextSnapshot;
                            nextSnapshot = selector(nextSnapshot);
                            if (void 0 !== isEqual && inst.hasValue) {
                                var currentSelection = inst.value;
                                if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                            }
                            return memoizedSelection = nextSnapshot;
                        }
                        currentSelection = memoizedSelection;
                        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                        var nextSelection = selector(nextSnapshot);
                        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, 
                        currentSelection;
                        memoizedSnapshot = nextSnapshot;
                        return memoizedSelection = nextSelection;
                    }
                    var memoizedSnapshot, memoizedSelection, hasMemo = !1, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
                    return [ function() {
                        return memoizedSelector(getSnapshot());
                    }, null === maybeGetServerSnapshot ? void 0 : function() {
                        return memoizedSelector(maybeGetServerSnapshot());
                    } ];
                }), [ getSnapshot, getServerSnapshot, selector, isEqual ]);
                var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
                useEffect((function() {
                    inst.hasValue = !0;
                    inst.value = value;
                }), [ value ]);
                useDebugValue(value);
                return value;
            };
        },
        418: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            if (true) module.exports = __webpack_require__(160);
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.n = module => {
            var getter = module && module.__esModule ? () => module["default"] : () => module;
            __webpack_require__.d(getter, {
                a: getter
            });
            return getter;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        __webpack_require__.p = "/";
    })();
    var __webpack_exports__ = {};
    (() => {
        "use strict";
        var react = __webpack_require__(540);
        var client = __webpack_require__(338);
        __webpack_require__(232);
        /**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
        var Action = (Action2 => {
            Action2["Pop"] = "POP";
            Action2["Push"] = "PUSH";
            Action2["Replace"] = "REPLACE";
            return Action2;
        })(Action || {});
        var PopStateEventType = "popstate";
        function createBrowserHistory(options = {}) {
            function createBrowserLocation(window2, globalHistory) {
                let {pathname, search, hash} = window2.location;
                return createLocation("", {
                    pathname,
                    search,
                    hash
                }, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
            }
            function createBrowserHref(window2, to) {
                return typeof to === "string" ? to : createPath(to);
            }
            return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
        }
        function invariant(value, message) {
            if (value === false || value === null || typeof value === "undefined") throw new Error(message);
        }
        function warning(cond, message) {
            if (!cond) {
                if (typeof console !== "undefined") console.warn(message);
                try {
                    throw new Error(message);
                } catch (e) {}
            }
        }
        function createKey() {
            return Math.random().toString(36).substring(2, 10);
        }
        function getHistoryState(location, index) {
            return {
                usr: location.state,
                key: location.key,
                idx: index
            };
        }
        function createLocation(current, to, state = null, key) {
            let location = {
                pathname: typeof current === "string" ? current : current.pathname,
                search: "",
                hash: "",
                ...typeof to === "string" ? parsePath(to) : to,
                state,
                key: to && to.key || key || createKey()
            };
            return location;
        }
        function createPath({pathname = "/", search = "", hash = ""}) {
            if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
            if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
            return pathname;
        }
        function parsePath(path) {
            let parsedPath = {};
            if (path) {
                let hashIndex = path.indexOf("#");
                if (hashIndex >= 0) {
                    parsedPath.hash = path.substring(hashIndex);
                    path = path.substring(0, hashIndex);
                }
                let searchIndex = path.indexOf("?");
                if (searchIndex >= 0) {
                    parsedPath.search = path.substring(searchIndex);
                    path = path.substring(0, searchIndex);
                }
                if (path) parsedPath.pathname = path;
            }
            return parsedPath;
        }
        function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
            let {window: window2 = document.defaultView, v5Compat = false} = options;
            let globalHistory = window2.history;
            let action = "POP";
            let listener = null;
            let index = getIndex();
            if (index == null) {
                index = 0;
                globalHistory.replaceState({
                    ...globalHistory.state,
                    idx: index
                }, "");
            }
            function getIndex() {
                let state = globalHistory.state || {
                    idx: null
                };
                return state.idx;
            }
            function handlePop() {
                action = "POP";
                let nextIndex = getIndex();
                let delta = nextIndex == null ? null : nextIndex - index;
                index = nextIndex;
                if (listener) listener({
                    action,
                    location: history.location,
                    delta
                });
            }
            function push(to, state) {
                action = "PUSH";
                let location = createLocation(history.location, to, state);
                if (validateLocation) validateLocation(location, to);
                index = getIndex() + 1;
                let historyState = getHistoryState(location, index);
                let url = history.createHref(location);
                try {
                    globalHistory.pushState(historyState, "", url);
                } catch (error) {
                    if (error instanceof DOMException && error.name === "DataCloneError") throw error;
                    window2.location.assign(url);
                }
                if (v5Compat && listener) listener({
                    action,
                    location: history.location,
                    delta: 1
                });
            }
            function replace2(to, state) {
                action = "REPLACE";
                let location = createLocation(history.location, to, state);
                if (validateLocation) validateLocation(location, to);
                index = getIndex();
                let historyState = getHistoryState(location, index);
                let url = history.createHref(location);
                globalHistory.replaceState(historyState, "", url);
                if (v5Compat && listener) listener({
                    action,
                    location: history.location,
                    delta: 0
                });
            }
            function createURL(to) {
                let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
                let href = typeof to === "string" ? to : createPath(to);
                href = href.replace(/ $/, "%20");
                invariant(base, `No window.location.(origin|href) available to create URL for href: ${href}`);
                return new URL(href, base);
            }
            let history = {
                get action() {
                    return action;
                },
                get location() {
                    return getLocation(window2, globalHistory);
                },
                listen(fn) {
                    if (listener) throw new Error("A history only accepts one active listener");
                    window2.addEventListener(PopStateEventType, handlePop);
                    listener = fn;
                    return () => {
                        window2.removeEventListener(PopStateEventType, handlePop);
                        listener = null;
                    };
                },
                createHref(to) {
                    return createHref2(window2, to);
                },
                createURL,
                encodeLocation(to) {
                    let url = createURL(to);
                    return {
                        pathname: url.pathname,
                        search: url.search,
                        hash: url.hash
                    };
                },
                push,
                replace: replace2,
                go(n) {
                    return globalHistory.go(n);
                }
            };
            return history;
        }
        new Set([ "lazy", "caseSensitive", "path", "id", "index", "children" ]);
        function matchRoutes(routes, locationArg, basename = "/") {
            return matchRoutesImpl(routes, locationArg, basename, false);
        }
        function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
            let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
            let pathname = stripBasename(location.pathname || "/", basename);
            if (pathname == null) return null;
            let branches = flattenRoutes(routes);
            rankRouteBranches(branches);
            let matches = null;
            for (let i = 0; matches == null && i < branches.length; ++i) {
                let decoded = decodePath(pathname);
                matches = matchRouteBranch(branches[i], decoded, allowPartial);
            }
            return matches;
        }
        function convertRouteMatchToUiMatch(match, loaderData) {
            let {route, pathname, params} = match;
            return {
                id: route.id,
                pathname,
                params,
                data: loaderData[route.id],
                handle: route.handle
            };
        }
        function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "") {
            let flattenRoute = (route, index, relativePath) => {
                let meta = {
                    relativePath: relativePath === void 0 ? route.path || "" : relativePath,
                    caseSensitive: route.caseSensitive === true,
                    childrenIndex: index,
                    route
                };
                if (meta.relativePath.startsWith("/")) {
                    invariant(meta.relativePath.startsWith(parentPath), `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`);
                    meta.relativePath = meta.relativePath.slice(parentPath.length);
                }
                let path = joinPaths([ parentPath, meta.relativePath ]);
                let routesMeta = parentsMeta.concat(meta);
                if (route.children && route.children.length > 0) {
                    invariant(route.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${path}".`);
                    flattenRoutes(route.children, branches, routesMeta, path);
                }
                if (route.path == null && !route.index) return;
                branches.push({
                    path,
                    score: computeScore(path, route.index),
                    routesMeta
                });
            };
            routes.forEach(((route, index) => {
                if (route.path === "" || !route.path?.includes("?")) flattenRoute(route, index); else for (let exploded of explodeOptionalSegments(route.path)) flattenRoute(route, index, exploded);
            }));
            return branches;
        }
        function explodeOptionalSegments(path) {
            let segments = path.split("/");
            if (segments.length === 0) return [];
            let [first, ...rest] = segments;
            let isOptional = first.endsWith("?");
            let required = first.replace(/\?$/, "");
            if (rest.length === 0) return isOptional ? [ required, "" ] : [ required ];
            let restExploded = explodeOptionalSegments(rest.join("/"));
            let result = [];
            result.push(...restExploded.map((subpath => subpath === "" ? required : [ required, subpath ].join("/"))));
            if (isOptional) result.push(...restExploded);
            return result.map((exploded => path.startsWith("/") && exploded === "" ? "/" : exploded));
        }
        function rankRouteBranches(branches) {
            branches.sort(((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta => meta.childrenIndex)), b.routesMeta.map((meta => meta.childrenIndex)))));
        }
        var paramRe = /^:[\w-]+$/;
        var dynamicSegmentValue = 3;
        var indexRouteValue = 2;
        var emptySegmentValue = 1;
        var staticSegmentValue = 10;
        var splatPenalty = -2;
        var isSplat = s => s === "*";
        function computeScore(path, index) {
            let segments = path.split("/");
            let initialScore = segments.length;
            if (segments.some(isSplat)) initialScore += splatPenalty;
            if (index) initialScore += indexRouteValue;
            return segments.filter((s => !isSplat(s))).reduce(((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue)), initialScore);
        }
        function compareIndexes(a, b) {
            let siblings = a.length === b.length && a.slice(0, -1).every(((n, i) => n === b[i]));
            return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
        }
        function matchRouteBranch(branch, pathname, allowPartial = false) {
            let {routesMeta} = branch;
            let matchedParams = {};
            let matchedPathname = "/";
            let matches = [];
            for (let i = 0; i < routesMeta.length; ++i) {
                let meta = routesMeta[i];
                let end = i === routesMeta.length - 1;
                let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
                let match = matchPath({
                    path: meta.relativePath,
                    caseSensitive: meta.caseSensitive,
                    end
                }, remainingPathname);
                let route = meta.route;
                if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) match = matchPath({
                    path: meta.relativePath,
                    caseSensitive: meta.caseSensitive,
                    end: false
                }, remainingPathname);
                if (!match) return null;
                Object.assign(matchedParams, match.params);
                matches.push({
                    params: matchedParams,
                    pathname: joinPaths([ matchedPathname, match.pathname ]),
                    pathnameBase: normalizePathname(joinPaths([ matchedPathname, match.pathnameBase ])),
                    route
                });
                if (match.pathnameBase !== "/") matchedPathname = joinPaths([ matchedPathname, match.pathnameBase ]);
            }
            return matches;
        }
        function matchPath(pattern, pathname) {
            if (typeof pattern === "string") pattern = {
                path: pattern,
                caseSensitive: false,
                end: true
            };
            let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
            let match = pathname.match(matcher);
            if (!match) return null;
            let matchedPathname = match[0];
            let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
            let captureGroups = match.slice(1);
            let params = compiledParams.reduce(((memo2, {paramName, isOptional}, index) => {
                if (paramName === "*") {
                    let splatValue = captureGroups[index] || "";
                    pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
                }
                const value = captureGroups[index];
                if (isOptional && !value) memo2[paramName] = void 0; else memo2[paramName] = (value || "").replace(/%2F/g, "/");
                return memo2;
            }), {});
            return {
                params,
                pathname: matchedPathname,
                pathnameBase,
                pattern
            };
        }
        function compilePath(path, caseSensitive = false, end = true) {
            warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`);
            let params = [];
            let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ((_, paramName, isOptional) => {
                params.push({
                    paramName,
                    isOptional: isOptional != null
                });
                return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
            }));
            if (path.endsWith("*")) {
                params.push({
                    paramName: "*"
                });
                regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
            } else if (end) regexpSource += "\\/*$"; else if (path !== "" && path !== "/") regexpSource += "(?:(?=\\/|$))";
            let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
            return [ matcher, params ];
        }
        function decodePath(value) {
            try {
                return value.split("/").map((v => decodeURIComponent(v).replace(/\//g, "%2F"))).join("/");
            } catch (error) {
                warning(false, `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`);
                return value;
            }
        }
        function stripBasename(pathname, basename) {
            if (basename === "/") return pathname;
            if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
            let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
            let nextChar = pathname.charAt(startIndex);
            if (nextChar && nextChar !== "/") return null;
            return pathname.slice(startIndex) || "/";
        }
        function resolvePath(to, fromPathname = "/") {
            let {pathname: toPathname, search = "", hash = ""} = typeof to === "string" ? parsePath(to) : to;
            let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
            return {
                pathname,
                search: normalizeSearch(search),
                hash: normalizeHash(hash)
            };
        }
        function resolvePathname(relativePath, fromPathname) {
            let segments = fromPathname.replace(/\/+$/, "").split("/");
            let relativeSegments = relativePath.split("/");
            relativeSegments.forEach((segment => {
                if (segment === "..") {
                    if (segments.length > 1) segments.pop();
                } else if (segment !== ".") segments.push(segment);
            }));
            return segments.length > 1 ? segments.join("/") : "/";
        }
        function getInvalidPathError(char, field, dest, path) {
            return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(path)}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
        }
        function getPathContributingMatches(matches) {
            return matches.filter(((match, index) => index === 0 || match.route.path && match.route.path.length > 0));
        }
        function getResolveToMatches(matches) {
            let pathMatches = getPathContributingMatches(matches);
            return pathMatches.map(((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase));
        }
        function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
            let to;
            if (typeof toArg === "string") to = parsePath(toArg); else {
                to = {
                    ...toArg
                };
                invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
                invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
                invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
            }
            let isEmptyPath = toArg === "" || to.pathname === "";
            let toPathname = isEmptyPath ? "/" : to.pathname;
            let from;
            if (toPathname == null) from = locationPathname; else {
                let routePathnameIndex = routePathnames.length - 1;
                if (!isPathRelative && toPathname.startsWith("..")) {
                    let toSegments = toPathname.split("/");
                    while (toSegments[0] === "..") {
                        toSegments.shift();
                        routePathnameIndex -= 1;
                    }
                    to.pathname = toSegments.join("/");
                }
                from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
            }
            let path = resolvePath(to, from);
            let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
            let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
            if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
            return path;
        }
        var joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
        var normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
        var normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
        var normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
        function isRouteErrorResponse(error) {
            return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
        }
        var validMutationMethodsArr = [ "POST", "PUT", "PATCH", "DELETE" ];
        new Set(validMutationMethodsArr);
        var validRequestMethodsArr = [ "GET", ...validMutationMethodsArr ];
        new Set(validRequestMethodsArr);
        new Set([ 301, 302, 303, 307, 308 ]);
        new Set([ 307, 308 ]);
        Symbol("ResetLoaderData");
        var DataRouterContext = react.createContext(null);
        DataRouterContext.displayName = "DataRouter";
        var DataRouterStateContext = react.createContext(null);
        DataRouterStateContext.displayName = "DataRouterState";
        var ViewTransitionContext = react.createContext({
            isTransitioning: false
        });
        ViewTransitionContext.displayName = "ViewTransition";
        var FetchersContext = react.createContext(new Map);
        FetchersContext.displayName = "Fetchers";
        var AwaitContext = react.createContext(null);
        AwaitContext.displayName = "Await";
        var NavigationContext = react.createContext(null);
        NavigationContext.displayName = "Navigation";
        var LocationContext = react.createContext(null);
        LocationContext.displayName = "Location";
        var RouteContext = react.createContext({
            outlet: null,
            matches: [],
            isDataRoute: false
        });
        RouteContext.displayName = "Route";
        var RouteErrorContext = react.createContext(null);
        RouteErrorContext.displayName = "RouteError";
        var ENABLE_DEV_WARNINGS = true;
        function useHref(to, {relative} = {}) {
            invariant(useInRouterContext(), `useHref() may be used only in the context of a <Router> component.`);
            let {basename, navigator: navigator2} = react.useContext(NavigationContext);
            let {hash, pathname, search} = useResolvedPath(to, {
                relative
            });
            let joinedPathname = pathname;
            if (basename !== "/") joinedPathname = pathname === "/" ? basename : joinPaths([ basename, pathname ]);
            return navigator2.createHref({
                pathname: joinedPathname,
                search,
                hash
            });
        }
        function useInRouterContext() {
            return react.useContext(LocationContext) != null;
        }
        function useLocation() {
            invariant(useInRouterContext(), `useLocation() may be used only in the context of a <Router> component.`);
            return react.useContext(LocationContext).location;
        }
        var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
        function useIsomorphicLayoutEffect(cb) {
            let isStatic = react.useContext(NavigationContext).static;
            if (!isStatic) react.useLayoutEffect(cb);
        }
        function useNavigate() {
            let {isDataRoute} = react.useContext(RouteContext);
            return isDataRoute ? useNavigateStable() : useNavigateUnstable();
        }
        function useNavigateUnstable() {
            invariant(useInRouterContext(), `useNavigate() may be used only in the context of a <Router> component.`);
            let dataRouterContext = react.useContext(DataRouterContext);
            let {basename, navigator: navigator2} = react.useContext(NavigationContext);
            let {matches} = react.useContext(RouteContext);
            let {pathname: locationPathname} = useLocation();
            let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
            let activeRef = react.useRef(false);
            useIsomorphicLayoutEffect((() => {
                activeRef.current = true;
            }));
            let navigate = react.useCallback(((to, options = {}) => {
                warning(activeRef.current, navigateEffectWarning);
                if (!activeRef.current) return;
                if (typeof to === "number") {
                    navigator2.go(to);
                    return;
                }
                let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
                if (dataRouterContext == null && basename !== "/") path.pathname = path.pathname === "/" ? basename : joinPaths([ basename, path.pathname ]);
                (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
            }), [ basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext ]);
            return navigate;
        }
        react.createContext(null);
        function useResolvedPath(to, {relative} = {}) {
            let {matches} = react.useContext(RouteContext);
            let {pathname: locationPathname} = useLocation();
            let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
            return react.useMemo((() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path")), [ to, routePathnamesJson, locationPathname, relative ]);
        }
        function useRoutes(routes, locationArg) {
            return useRoutesImpl(routes, locationArg);
        }
        function useRoutesImpl(routes, locationArg, dataRouterState, future) {
            invariant(useInRouterContext(), `useRoutes() may be used only in the context of a <Router> component.`);
            let {navigator: navigator2, static: isStatic} = react.useContext(NavigationContext);
            let {matches: parentMatches} = react.useContext(RouteContext);
            let routeMatch = parentMatches[parentMatches.length - 1];
            let parentParams = routeMatch ? routeMatch.params : {};
            let parentPathname = routeMatch ? routeMatch.pathname : "/";
            let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
            let parentRoute = routeMatch && routeMatch.route;
            if (ENABLE_DEV_WARNINGS) {
                let parentPath = parentRoute && parentRoute.path || "";
                warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`);
            }
            let locationFromContext = useLocation();
            let location;
            if (locationArg) {
                let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
                invariant(parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`);
                location = parsedLocationArg;
            } else location = locationFromContext;
            let pathname = location.pathname || "/";
            let remainingPathname = pathname;
            if (parentPathnameBase !== "/") {
                let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
                let segments = pathname.replace(/^\//, "").split("/");
                remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
            }
            let matches = !isStatic && dataRouterState && dataRouterState.matches && dataRouterState.matches.length > 0 ? dataRouterState.matches : matchRoutes(routes, {
                pathname: remainingPathname
            });
            if (ENABLE_DEV_WARNINGS) {
                warning(parentRoute || matches != null, `No routes matched location "${location.pathname}${location.search}${location.hash}" `);
                warning(matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0, `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
            }
            let renderedMatches = _renderMatches(matches && matches.map((match => Object.assign({}, match, {
                params: Object.assign({}, parentParams, match.params),
                pathname: joinPaths([ parentPathnameBase, navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname ]),
                pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([ parentPathnameBase, navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase ])
            }))), parentMatches, dataRouterState, future);
            if (locationArg && renderedMatches) return react.createElement(LocationContext.Provider, {
                value: {
                    location: {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                        ...location
                    },
                    navigationType: "POP"
                }
            }, renderedMatches);
            return renderedMatches;
        }
        function DefaultErrorComponent() {
            let error = useRouteError();
            let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
            let stack = error instanceof Error ? error.stack : null;
            let lightgrey = "rgba(200,200,200, 0.5)";
            let preStyles = {
                padding: "0.5rem",
                backgroundColor: lightgrey
            };
            let codeStyles = {
                padding: "2px 4px",
                backgroundColor: lightgrey
            };
            let devInfo = null;
            if (ENABLE_DEV_WARNINGS) {
                console.error("Error handled by React Router default ErrorBoundary:", error);
                devInfo = react.createElement(react.Fragment, null, react.createElement("p", null, "💿 Hey developer 👋"), react.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", react.createElement("code", {
                    style: codeStyles
                }, "ErrorBoundary"), " or", " ", react.createElement("code", {
                    style: codeStyles
                }, "errorElement"), " prop on your route."));
            }
            return react.createElement(react.Fragment, null, react.createElement("h2", null, "Unexpected Application Error!"), react.createElement("h3", {
                style: {
                    fontStyle: "italic"
                }
            }, message), stack ? react.createElement("pre", {
                style: preStyles
            }, stack) : null, devInfo);
        }
        var defaultErrorElement = react.createElement(DefaultErrorComponent, null);
        var RenderErrorBoundary = class extends react.Component {
            constructor(props) {
                super(props);
                this.state = {
                    location: props.location,
                    revalidation: props.revalidation,
                    error: props.error
                };
            }
            static getDerivedStateFromError(error) {
                return {
                    error
                };
            }
            static getDerivedStateFromProps(props, state) {
                if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") return {
                    error: props.error,
                    location: props.location,
                    revalidation: props.revalidation
                };
                return {
                    error: props.error !== void 0 ? props.error : state.error,
                    location: state.location,
                    revalidation: props.revalidation || state.revalidation
                };
            }
            componentDidCatch(error, errorInfo) {
                console.error("React Router caught the following error during render", error, errorInfo);
            }
            render() {
                return this.state.error !== void 0 ? react.createElement(RouteContext.Provider, {
                    value: this.props.routeContext
                }, react.createElement(RouteErrorContext.Provider, {
                    value: this.state.error,
                    children: this.props.component
                })) : this.props.children;
            }
        };
        function RenderedRoute({routeContext, match, children}) {
            let dataRouterContext = react.useContext(DataRouterContext);
            if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
            return react.createElement(RouteContext.Provider, {
                value: routeContext
            }, children);
        }
        function _renderMatches(matches, parentMatches = [], dataRouterState = null, future = null) {
            if (matches == null) {
                if (!dataRouterState) return null;
                if (dataRouterState.errors) matches = dataRouterState.matches; else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) matches = dataRouterState.matches; else return null;
            }
            let renderedMatches = matches;
            let errors = dataRouterState?.errors;
            if (errors != null) {
                let errorIndex = renderedMatches.findIndex((m => m.route.id && errors?.[m.route.id] !== void 0));
                invariant(errorIndex >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(errors).join(",")}`);
                renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
            }
            let renderFallback = false;
            let fallbackIndex = -1;
            if (dataRouterState) for (let i = 0; i < renderedMatches.length; i++) {
                let match = renderedMatches[i];
                if (match.route.HydrateFallback || match.route.hydrateFallbackElement) fallbackIndex = i;
                if (match.route.id) {
                    let {loaderData, errors: errors2} = dataRouterState;
                    let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
                    if (match.route.lazy || needsToRunLoader) {
                        renderFallback = true;
                        if (fallbackIndex >= 0) renderedMatches = renderedMatches.slice(0, fallbackIndex + 1); else renderedMatches = [ renderedMatches[0] ];
                        break;
                    }
                }
            }
            return renderedMatches.reduceRight(((outlet, match, index) => {
                let error;
                let shouldRenderHydrateFallback = false;
                let errorElement = null;
                let hydrateFallbackElement = null;
                if (dataRouterState) {
                    error = errors && match.route.id ? errors[match.route.id] : void 0;
                    errorElement = match.route.errorElement || defaultErrorElement;
                    if (renderFallback) if (fallbackIndex < 0 && index === 0) {
                        warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
                        shouldRenderHydrateFallback = true;
                        hydrateFallbackElement = null;
                    } else if (fallbackIndex === index) {
                        shouldRenderHydrateFallback = true;
                        hydrateFallbackElement = match.route.hydrateFallbackElement || null;
                    }
                }
                let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
                let getChildren = () => {
                    let children;
                    if (error) children = errorElement; else if (shouldRenderHydrateFallback) children = hydrateFallbackElement; else if (match.route.Component) children = react.createElement(match.route.Component, null); else if (match.route.element) children = match.route.element; else children = outlet;
                    return react.createElement(RenderedRoute, {
                        match,
                        routeContext: {
                            outlet,
                            matches: matches2,
                            isDataRoute: dataRouterState != null
                        },
                        children
                    });
                };
                return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? react.createElement(RenderErrorBoundary, {
                    location: dataRouterState.location,
                    revalidation: dataRouterState.revalidation,
                    component: errorElement,
                    error,
                    children: getChildren(),
                    routeContext: {
                        outlet: null,
                        matches: matches2,
                        isDataRoute: true
                    }
                }) : getChildren();
            }), null);
        }
        function getDataRouterConsoleError(hookName) {
            return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
        }
        function useDataRouterContext(hookName) {
            let ctx = react.useContext(DataRouterContext);
            invariant(ctx, getDataRouterConsoleError(hookName));
            return ctx;
        }
        function useDataRouterState(hookName) {
            let state = react.useContext(DataRouterStateContext);
            invariant(state, getDataRouterConsoleError(hookName));
            return state;
        }
        function useRouteContext(hookName) {
            let route = react.useContext(RouteContext);
            invariant(route, getDataRouterConsoleError(hookName));
            return route;
        }
        function useCurrentRouteId(hookName) {
            let route = useRouteContext(hookName);
            let thisRoute = route.matches[route.matches.length - 1];
            invariant(thisRoute.route.id, `${hookName} can only be used on routes that contain a unique "id"`);
            return thisRoute.route.id;
        }
        function useRouteId() {
            return useCurrentRouteId("useRouteId");
        }
        function useNavigation() {
            let state = useDataRouterState("useNavigation");
            return state.navigation;
        }
        function useMatches() {
            let {matches, loaderData} = useDataRouterState("useMatches");
            return react.useMemo((() => matches.map((m => convertRouteMatchToUiMatch(m, loaderData)))), [ matches, loaderData ]);
        }
        function useRouteError() {
            let error = react.useContext(RouteErrorContext);
            let state = useDataRouterState("useRouteError");
            let routeId = useCurrentRouteId("useRouteError");
            if (error !== void 0) return error;
            return state.errors?.[routeId];
        }
        function useNavigateStable() {
            let {router} = useDataRouterContext("useNavigate");
            let id = useCurrentRouteId("useNavigate");
            let activeRef = react.useRef(false);
            useIsomorphicLayoutEffect((() => {
                activeRef.current = true;
            }));
            let navigate = react.useCallback((async (to, options = {}) => {
                warning(activeRef.current, navigateEffectWarning);
                if (!activeRef.current) return;
                if (typeof to === "number") router.navigate(to); else await router.navigate(to, {
                    fromRouteId: id,
                    ...options
                });
            }), [ router, id ]);
            return navigate;
        }
        var alreadyWarned = {};
        function warningOnce(key, cond, message) {
            if (!cond && !alreadyWarned[key]) {
                alreadyWarned[key] = true;
                warning(false, message);
            }
        }
        react.memo(DataRoutes);
        function DataRoutes({routes, future, state}) {
            return useRoutesImpl(routes, void 0, state, future);
        }
        function Navigate({to, replace: replace2, state, relative}) {
            invariant(useInRouterContext(), `<Navigate> may be used only in the context of a <Router> component.`);
            let {static: isStatic} = react.useContext(NavigationContext);
            warning(!isStatic, `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);
            let {matches} = react.useContext(RouteContext);
            let {pathname: locationPathname} = useLocation();
            let navigate = useNavigate();
            let path = resolveTo(to, getResolveToMatches(matches), locationPathname, relative === "path");
            let jsonPath = JSON.stringify(path);
            react.useEffect((() => {
                navigate(JSON.parse(jsonPath), {
                    replace: replace2,
                    state,
                    relative
                });
            }), [ navigate, jsonPath, relative, replace2, state ]);
            return null;
        }
        function Route(_props) {
            invariant(false, `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`);
        }
        function Router({basename: basenameProp = "/", children = null, location: locationProp, navigationType = "POP", navigator: navigator2, static: staticProp = false}) {
            invariant(!useInRouterContext(), `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);
            let basename = basenameProp.replace(/^\/*/, "/");
            let navigationContext = react.useMemo((() => ({
                basename,
                navigator: navigator2,
                static: staticProp,
                future: {}
            })), [ basename, navigator2, staticProp ]);
            if (typeof locationProp === "string") locationProp = parsePath(locationProp);
            let {pathname = "/", search = "", hash = "", state = null, key = "default"} = locationProp;
            let locationContext = react.useMemo((() => {
                let trailingPathname = stripBasename(pathname, basename);
                if (trailingPathname == null) return null;
                return {
                    location: {
                        pathname: trailingPathname,
                        search,
                        hash,
                        state,
                        key
                    },
                    navigationType
                };
            }), [ basename, pathname, search, hash, state, key, navigationType ]);
            warning(locationContext != null, `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`);
            if (locationContext == null) return null;
            return react.createElement(NavigationContext.Provider, {
                value: navigationContext
            }, react.createElement(LocationContext.Provider, {
                children,
                value: locationContext
            }));
        }
        function Routes({children, location}) {
            return useRoutes(createRoutesFromChildren(children), location);
        }
        react.Component;
        function createRoutesFromChildren(children, parentPath = []) {
            let routes = [];
            react.Children.forEach(children, ((element, index) => {
                if (!react.isValidElement(element)) return;
                let treePath = [ ...parentPath, index ];
                if (element.type === react.Fragment) {
                    routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
                    return;
                }
                invariant(element.type === Route, `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);
                invariant(!element.props.index || !element.props.children, "An index route cannot have child routes.");
                let route = {
                    id: element.props.id || treePath.join("-"),
                    caseSensitive: element.props.caseSensitive,
                    element: element.props.element,
                    Component: element.props.Component,
                    index: element.props.index,
                    path: element.props.path,
                    loader: element.props.loader,
                    action: element.props.action,
                    hydrateFallbackElement: element.props.hydrateFallbackElement,
                    HydrateFallback: element.props.HydrateFallback,
                    errorElement: element.props.errorElement,
                    ErrorBoundary: element.props.ErrorBoundary,
                    hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
                    shouldRevalidate: element.props.shouldRevalidate,
                    handle: element.props.handle,
                    lazy: element.props.lazy
                };
                if (element.props.children) route.children = createRoutesFromChildren(element.props.children, treePath);
                routes.push(route);
            }));
            return routes;
        }
        var defaultMethod = "get";
        var defaultEncType = "application/x-www-form-urlencoded";
        function isHtmlElement(object) {
            return object != null && typeof object.tagName === "string";
        }
        function isButtonElement(object) {
            return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
        }
        function isFormElement(object) {
            return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
        }
        function isInputElement(object) {
            return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
        }
        function isModifiedEvent(event) {
            return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
        }
        function shouldProcessLinkClick(event, target) {
            return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
        }
        var _formDataSupportsSubmitter = null;
        function isFormDataSubmitterSupported() {
            if (_formDataSupportsSubmitter === null) try {
                new FormData(document.createElement("form"), 0);
                _formDataSupportsSubmitter = false;
            } catch (e) {
                _formDataSupportsSubmitter = true;
            }
            return _formDataSupportsSubmitter;
        }
        var supportedFormEncTypes = new Set([ "application/x-www-form-urlencoded", "multipart/form-data", "text/plain" ]);
        function getFormEncType(encType) {
            if (encType != null && !supportedFormEncTypes.has(encType)) {
                warning(false, `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`);
                return null;
            }
            return encType;
        }
        function getFormSubmissionInfo(target, basename) {
            let method;
            let action;
            let encType;
            let formData;
            let body;
            if (isFormElement(target)) {
                let attr = target.getAttribute("action");
                action = attr ? stripBasename(attr, basename) : null;
                method = target.getAttribute("method") || defaultMethod;
                encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
                formData = new FormData(target);
            } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
                let form = target.form;
                if (form == null) throw new Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);
                let attr = target.getAttribute("formaction") || form.getAttribute("action");
                action = attr ? stripBasename(attr, basename) : null;
                method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
                encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
                formData = new FormData(form, target);
                if (!isFormDataSubmitterSupported()) {
                    let {name, type, value} = target;
                    if (type === "image") {
                        let prefix = name ? `${name}.` : "";
                        formData.append(`${prefix}x`, "0");
                        formData.append(`${prefix}y`, "0");
                    } else if (name) formData.append(name, value);
                }
            } else if (isHtmlElement(target)) throw new Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`); else {
                method = defaultMethod;
                action = null;
                encType = defaultEncType;
                body = target;
            }
            if (formData && encType === "text/plain") {
                body = formData;
                formData = void 0;
            }
            return {
                action,
                method: method.toLowerCase(),
                encType,
                formData,
                body
            };
        }
        function invariant2(value, message) {
            if (value === false || value === null || typeof value === "undefined") throw new Error(message);
        }
        async function loadRouteModule(route, routeModulesCache) {
            if (route.id in routeModulesCache) return routeModulesCache[route.id];
            try {
                let routeModule = await import(route.module);
                routeModulesCache[route.id] = routeModule;
                return routeModule;
            } catch (error) {
                console.error(`Error loading route module \`${route.module}\`, reloading page...`);
                console.error(error);
                if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && void 0) ;
                window.location.reload();
                return new Promise((() => {}));
            }
        }
        function isPageLinkDescriptor(object) {
            return object != null && typeof object.page === "string";
        }
        function isHtmlLinkDescriptor(object) {
            if (object == null) return false;
            if (object.href == null) return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
            return typeof object.rel === "string" && typeof object.href === "string";
        }
        async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
            let links = await Promise.all(matches.map((async match => {
                let route = manifest.routes[match.route.id];
                if (route) {
                    let mod = await loadRouteModule(route, routeModules);
                    return mod.links ? mod.links() : [];
                }
                return [];
            })));
            return dedupeLinkDescriptors(links.flat(1).filter(isHtmlLinkDescriptor).filter((link => link.rel === "stylesheet" || link.rel === "preload")).map((link => link.rel === "stylesheet" ? {
                ...link,
                rel: "prefetch",
                as: "style"
            } : {
                ...link,
                rel: "prefetch"
            })));
        }
        function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
            let isNew = (match, index) => {
                if (!currentMatches[index]) return true;
                return match.route.id !== currentMatches[index].route.id;
            };
            let matchPathChanged = (match, index) => currentMatches[index].pathname !== match.pathname || currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"];
            if (mode === "assets") return nextMatches.filter(((match, index) => isNew(match, index) || matchPathChanged(match, index)));
            if (mode === "data") return nextMatches.filter(((match, index) => {
                let manifestRoute = manifest.routes[match.route.id];
                if (!manifestRoute || !manifestRoute.hasLoader) return false;
                if (isNew(match, index) || matchPathChanged(match, index)) return true;
                if (match.route.shouldRevalidate) {
                    let routeChoice = match.route.shouldRevalidate({
                        currentUrl: new URL(location.pathname + location.search + location.hash, window.origin),
                        currentParams: currentMatches[0]?.params || {},
                        nextUrl: new URL(page, window.origin),
                        nextParams: match.params,
                        defaultShouldRevalidate: true
                    });
                    if (typeof routeChoice === "boolean") return routeChoice;
                }
                return true;
            }));
            return [];
        }
        function getModuleLinkHrefs(matches, manifestPatch) {
            return dedupeHrefs(matches.map((match => {
                let route = manifestPatch.routes[match.route.id];
                if (!route) return [];
                let hrefs = [ route.module ];
                if (route.imports) hrefs = hrefs.concat(route.imports);
                return hrefs;
            })).flat(1));
        }
        function dedupeHrefs(hrefs) {
            return [ ...new Set(hrefs) ];
        }
        function sortKeys(obj) {
            let sorted = {};
            let keys = Object.keys(obj).sort();
            for (let key of keys) sorted[key] = obj[key];
            return sorted;
        }
        function dedupeLinkDescriptors(descriptors, preloads) {
            let set = new Set;
            let preloadsSet = new Set(preloads);
            return descriptors.reduce(((deduped, descriptor) => {
                let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
                if (alreadyModulePreload) return deduped;
                let key = JSON.stringify(sortKeys(descriptor));
                if (!set.has(key)) {
                    set.add(key);
                    deduped.push({
                        key,
                        link: descriptor
                    });
                }
                return deduped;
            }), []);
        }
        function createHtml(html) {
            return {
                __html: html
            };
        }
        Symbol("SingleFetchRedirect");
        function singleFetchUrl(reqUrl) {
            let url = typeof reqUrl === "string" ? new URL(reqUrl, typeof window === "undefined" ? "server://singlefetch/" : window.location.origin) : reqUrl;
            if (url.pathname === "/") url.pathname = "_root.data"; else url.pathname = `${url.pathname.replace(/\/$/, "")}.data`;
            return url;
        }
        react.Component;
        function RemixRootDefaultErrorBoundary({error, isOutsideRemixApp}) {
            console.error(error);
            let heyDeveloper = react.createElement("script", {
                dangerouslySetInnerHTML: {
                    __html: `\n        console.log(\n          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      `
                }
            });
            if (isRouteErrorResponse(error)) return react.createElement(BoundaryShell, {
                title: "Unhandled Thrown Response!"
            }, react.createElement("h1", {
                style: {
                    fontSize: "24px"
                }
            }, error.status, " ", error.statusText), heyDeveloper);
            let errorInstance;
            if (error instanceof Error) errorInstance = error; else {
                let errorString = error == null ? "Unknown Error" : typeof error === "object" && "toString" in error ? error.toString() : JSON.stringify(error);
                errorInstance = new Error(errorString);
            }
            return react.createElement(BoundaryShell, {
                title: "Application Error!",
                isOutsideRemixApp
            }, react.createElement("h1", {
                style: {
                    fontSize: "24px"
                }
            }, "Application Error"), react.createElement("pre", {
                style: {
                    padding: "2rem",
                    background: "hsla(10, 50%, 50%, 0.1)",
                    color: "red",
                    overflow: "auto"
                }
            }, errorInstance.stack), heyDeveloper);
        }
        function BoundaryShell({title, renderScripts, isOutsideRemixApp, children}) {
            let {routeModules} = useFrameworkContext();
            if (routeModules.root?.Layout && !isOutsideRemixApp) return children;
            return react.createElement("html", {
                lang: "en"
            }, react.createElement("head", null, react.createElement("meta", {
                charSet: "utf-8"
            }), react.createElement("meta", {
                name: "viewport",
                content: "width=device-width,initial-scale=1,viewport-fit=cover"
            }), react.createElement("title", null, title)), react.createElement("body", null, react.createElement("main", {
                style: {
                    fontFamily: "system-ui, sans-serif",
                    padding: "2rem"
                }
            }, children, renderScripts ? react.createElement(Scripts, null) : null)));
        }
        new Set;
        new Set;
        function isFogOfWarEnabled(isSpaMode) {
            return !isSpaMode;
        }
        function getPartialManifest(manifest, router) {
            let routeIds = new Set(router.state.matches.map((m => m.route.id)));
            let segments = router.state.location.pathname.split("/").filter(Boolean);
            let paths = [ "/" ];
            segments.pop();
            while (segments.length > 0) {
                paths.push(`/${segments.join("/")}`);
                segments.pop();
            }
            paths.forEach((path => {
                let matches = matchRoutes(router.routes, path, router.basename);
                if (matches) matches.forEach((m => routeIds.add(m.route.id)));
            }));
            let initialRoutes = [ ...routeIds ].reduce(((acc, id) => Object.assign(acc, {
                [id]: manifest.routes[id]
            })), {});
            return {
                ...manifest,
                routes: initialRoutes
            };
        }
        function useDataRouterContext2() {
            let context = react.useContext(DataRouterContext);
            invariant2(context, "You must render this element inside a <DataRouterContext.Provider> element");
            return context;
        }
        function useDataRouterStateContext() {
            let context = react.useContext(DataRouterStateContext);
            invariant2(context, "You must render this element inside a <DataRouterStateContext.Provider> element");
            return context;
        }
        var FrameworkContext = react.createContext(void 0);
        FrameworkContext.displayName = "FrameworkContext";
        function useFrameworkContext() {
            let context = react.useContext(FrameworkContext);
            invariant2(context, "You must render this element inside a <HydratedRouter> element");
            return context;
        }
        function usePrefetchBehavior(prefetch, theirElementProps) {
            let frameworkContext = react.useContext(FrameworkContext);
            let [maybePrefetch, setMaybePrefetch] = react.useState(false);
            let [shouldPrefetch, setShouldPrefetch] = react.useState(false);
            let {onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart} = theirElementProps;
            let ref = react.useRef(null);
            react.useEffect((() => {
                if (prefetch === "render") setShouldPrefetch(true);
                if (prefetch === "viewport") {
                    let callback = entries => {
                        entries.forEach((entry => {
                            setShouldPrefetch(entry.isIntersecting);
                        }));
                    };
                    let observer = new IntersectionObserver(callback, {
                        threshold: .5
                    });
                    if (ref.current) observer.observe(ref.current);
                    return () => {
                        observer.disconnect();
                    };
                }
            }), [ prefetch ]);
            react.useEffect((() => {
                if (maybePrefetch) {
                    let id = setTimeout((() => {
                        setShouldPrefetch(true);
                    }), 100);
                    return () => {
                        clearTimeout(id);
                    };
                }
            }), [ maybePrefetch ]);
            let setIntent = () => {
                setMaybePrefetch(true);
            };
            let cancelIntent = () => {
                setMaybePrefetch(false);
                setShouldPrefetch(false);
            };
            if (!frameworkContext) return [ false, ref, {} ];
            if (prefetch !== "intent") return [ shouldPrefetch, ref, {} ];
            return [ shouldPrefetch, ref, {
                onFocus: composeEventHandlers(onFocus, setIntent),
                onBlur: composeEventHandlers(onBlur, cancelIntent),
                onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
                onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
                onTouchStart: composeEventHandlers(onTouchStart, setIntent)
            } ];
        }
        function composeEventHandlers(theirHandler, ourHandler) {
            return event => {
                theirHandler && theirHandler(event);
                if (!event.defaultPrevented) ourHandler(event);
            };
        }
        function getActiveMatches(matches, errors, isSpaMode) {
            if (isSpaMode && !isHydrated) return [ matches[0] ];
            if (errors) {
                let errorIdx = matches.findIndex((m => errors[m.route.id] !== void 0));
                return matches.slice(0, errorIdx + 1);
            }
            return matches;
        }
        function PrefetchPageLinks({page, ...dataLinkProps}) {
            let {router} = useDataRouterContext2();
            let matches = react.useMemo((() => matchRoutes(router.routes, page, router.basename)), [ router.routes, page, router.basename ]);
            if (!matches) return null;
            return react.createElement(PrefetchPageLinksImpl, {
                page,
                matches,
                ...dataLinkProps
            });
        }
        function useKeyedPrefetchLinks(matches) {
            let {manifest, routeModules} = useFrameworkContext();
            let [keyedPrefetchLinks, setKeyedPrefetchLinks] = react.useState([]);
            react.useEffect((() => {
                let interrupted = false;
                void getKeyedPrefetchLinks(matches, manifest, routeModules).then((links => {
                    if (!interrupted) setKeyedPrefetchLinks(links);
                }));
                return () => {
                    interrupted = true;
                };
            }), [ matches, manifest, routeModules ]);
            return keyedPrefetchLinks;
        }
        function PrefetchPageLinksImpl({page, matches: nextMatches, ...linkProps}) {
            let location = useLocation();
            let {manifest, routeModules} = useFrameworkContext();
            let {loaderData, matches} = useDataRouterStateContext();
            let newMatchesForData = react.useMemo((() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "data")), [ page, nextMatches, matches, manifest, location ]);
            let newMatchesForAssets = react.useMemo((() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "assets")), [ page, nextMatches, matches, manifest, location ]);
            let dataHrefs = react.useMemo((() => {
                if (page === location.pathname + location.search + location.hash) return [];
                let routesParams = new Set;
                let foundOptOutRoute = false;
                nextMatches.forEach((m => {
                    let manifestRoute = manifest.routes[m.route.id];
                    if (!manifestRoute || !manifestRoute.hasLoader) return;
                    if (!newMatchesForData.some((m2 => m2.route.id === m.route.id)) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) foundOptOutRoute = true; else if (manifestRoute.hasClientLoader) foundOptOutRoute = true; else routesParams.add(m.route.id);
                }));
                if (routesParams.size === 0) return [];
                let url = singleFetchUrl(page);
                if (foundOptOutRoute && routesParams.size > 0) url.searchParams.set("_routes", nextMatches.filter((m => routesParams.has(m.route.id))).map((m => m.route.id)).join(","));
                return [ url.pathname + url.search ];
            }), [ loaderData, location, manifest, newMatchesForData, nextMatches, page, routeModules ]);
            let moduleHrefs = react.useMemo((() => getModuleLinkHrefs(newMatchesForAssets, manifest)), [ newMatchesForAssets, manifest ]);
            let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
            return react.createElement(react.Fragment, null, dataHrefs.map((href => react.createElement("link", {
                key: href,
                rel: "prefetch",
                as: "fetch",
                href,
                ...linkProps
            }))), moduleHrefs.map((href => react.createElement("link", {
                key: href,
                rel: "modulepreload",
                href,
                ...linkProps
            }))), keyedPrefetchLinks.map((({key, link}) => react.createElement("link", {
                key,
                ...link
            }))));
        }
        var isHydrated = false;
        function Scripts(props) {
            let {manifest, serverHandoffString, isSpaMode, renderMeta} = useFrameworkContext();
            let {router, static: isStatic, staticContext} = useDataRouterContext2();
            let {matches: routerMatches} = useDataRouterStateContext();
            let enableFogOfWar = isFogOfWarEnabled(isSpaMode);
            if (renderMeta) renderMeta.didRenderScripts = true;
            let matches = getActiveMatches(routerMatches, null, isSpaMode);
            react.useEffect((() => {
                isHydrated = true;
            }), []);
            let initialScripts = react.useMemo((() => {
                let streamScript = "window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());";
                let contextScript = staticContext ? `window.__reactRouterContext = ${serverHandoffString};${streamScript}` : " ";
                let routeModulesScript = !isStatic ? " " : `${manifest.hmr?.runtime ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}${!enableFogOfWar ? `import ${JSON.stringify(manifest.url)}` : ""};\n${matches.map(((match, index) => `import * as route${index} from ${JSON.stringify(manifest.routes[match.route.id].module)};`)).join("\n")}\n  ${enableFogOfWar ? `window.__reactRouterManifest = ${JSON.stringify(getPartialManifest(manifest, router), null, 2)};` : ""}\n  window.__reactRouterRouteModules = {${matches.map(((match, index) => `${JSON.stringify(match.route.id)}:route${index}`)).join(",")}};\n\nimport(${JSON.stringify(manifest.entry.module)});`;
                return react.createElement(react.Fragment, null, react.createElement("script", {
                    ...props,
                    suppressHydrationWarning: true,
                    dangerouslySetInnerHTML: createHtml(contextScript),
                    type: void 0
                }), react.createElement("script", {
                    ...props,
                    suppressHydrationWarning: true,
                    dangerouslySetInnerHTML: createHtml(routeModulesScript),
                    type: "module",
                    async: true
                }));
            }), []);
            let routePreloads = matches.map((match => {
                let route = manifest.routes[match.route.id];
                return route ? (route.imports || []).concat([ route.module ]) : [];
            })).flat(1);
            let preloads = isHydrated ? [] : manifest.entry.imports.concat(routePreloads);
            return isHydrated ? null : react.createElement(react.Fragment, null, !enableFogOfWar ? react.createElement("link", {
                rel: "modulepreload",
                href: manifest.url,
                crossOrigin: props.crossOrigin
            }) : null, react.createElement("link", {
                rel: "modulepreload",
                href: manifest.entry.module,
                crossOrigin: props.crossOrigin
            }), dedupe(preloads).map((path => react.createElement("link", {
                key: path,
                rel: "modulepreload",
                href: path,
                crossOrigin: props.crossOrigin
            }))), initialScripts);
        }
        function dedupe(array) {
            return [ ...new Set(array) ];
        }
        function mergeRefs(...refs) {
            return value => {
                refs.forEach((ref => {
                    if (typeof ref === "function") ref(value); else if (ref != null) ref.current = value;
                }));
            };
        }
        var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
        try {
            if (isBrowser) window.__reactRouterVersion = "7.1.5";
        } catch (e) {}
        function BrowserRouter({basename, children, window: window2}) {
            let historyRef = react.useRef();
            if (historyRef.current == null) historyRef.current = createBrowserHistory({
                window: window2,
                v5Compat: true
            });
            let history = historyRef.current;
            let [state, setStateImpl] = react.useState({
                action: history.action,
                location: history.location
            });
            let setState = react.useCallback((newState => {
                react.startTransition((() => setStateImpl(newState)));
            }), [ setStateImpl ]);
            react.useLayoutEffect((() => history.listen(setState)), [ history, setState ]);
            return react.createElement(Router, {
                basename,
                children,
                location: state.location,
                navigationType: state.action,
                navigator: history
            });
        }
        function HistoryRouter({basename, children, history}) {
            let [state, setStateImpl] = react.useState({
                action: history.action,
                location: history.location
            });
            let setState = react.useCallback((newState => {
                react.startTransition((() => setStateImpl(newState)));
            }), [ setStateImpl ]);
            react.useLayoutEffect((() => history.listen(setState)), [ history, setState ]);
            return react.createElement(Router, {
                basename,
                children,
                location: state.location,
                navigationType: state.action,
                navigator: history
            });
        }
        HistoryRouter.displayName = "unstable_HistoryRouter";
        var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
        var Link = react.forwardRef((function LinkWithRef({onClick, discover = "render", prefetch = "none", relative, reloadDocument, replace: replace2, state, target, to, preventScrollReset, viewTransition, ...rest}, forwardedRef) {
            let {basename} = react.useContext(NavigationContext);
            let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
            let absoluteHref;
            let isExternal = false;
            if (typeof to === "string" && isAbsolute) {
                absoluteHref = to;
                if (isBrowser) try {
                    let currentUrl = new URL(window.location.href);
                    let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
                    let path = stripBasename(targetUrl.pathname, basename);
                    if (targetUrl.origin === currentUrl.origin && path != null) to = path + targetUrl.search + targetUrl.hash; else isExternal = true;
                } catch (e) {
                    warning(false, `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
                }
            }
            let href = useHref(to, {
                relative
            });
            let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(prefetch, rest);
            let internalOnClick = useLinkClickHandler(to, {
                replace: replace2,
                state,
                target,
                preventScrollReset,
                relative,
                viewTransition
            });
            function handleClick(event) {
                if (onClick) onClick(event);
                if (!event.defaultPrevented) internalOnClick(event);
            }
            let link = react.createElement("a", {
                ...rest,
                ...prefetchHandlers,
                href: absoluteHref || href,
                onClick: isExternal || reloadDocument ? onClick : handleClick,
                ref: mergeRefs(forwardedRef, prefetchRef),
                target,
                "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
            });
            return shouldPrefetch && !isAbsolute ? react.createElement(react.Fragment, null, link, react.createElement(PrefetchPageLinks, {
                page: href
            })) : link;
        }));
        Link.displayName = "Link";
        var NavLink = react.forwardRef((function NavLinkWithRef({"aria-current": ariaCurrentProp = "page", caseSensitive = false, className: classNameProp = "", end = false, style: styleProp, to, viewTransition, children, ...rest}, ref) {
            let path = useResolvedPath(to, {
                relative: rest.relative
            });
            let location = useLocation();
            let routerState = react.useContext(DataRouterStateContext);
            let {navigator: navigator2, basename} = react.useContext(NavigationContext);
            let isTransitioning = routerState != null && useViewTransitionState(path) && viewTransition === true;
            let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
            let locationPathname = location.pathname;
            let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
            if (!caseSensitive) {
                locationPathname = locationPathname.toLowerCase();
                nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
                toPathname = toPathname.toLowerCase();
            }
            if (nextLocationPathname && basename) nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
            const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
            let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
            let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
            let renderProps = {
                isActive,
                isPending,
                isTransitioning
            };
            let ariaCurrent = isActive ? ariaCurrentProp : void 0;
            let className;
            if (typeof classNameProp === "function") className = classNameProp(renderProps); else className = [ classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null ].filter(Boolean).join(" ");
            let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
            return react.createElement(Link, {
                ...rest,
                "aria-current": ariaCurrent,
                className,
                ref,
                style,
                to,
                viewTransition
            }, typeof children === "function" ? children(renderProps) : children);
        }));
        NavLink.displayName = "NavLink";
        var Form = react.forwardRef((({discover = "render", fetcherKey, navigate, reloadDocument, replace: replace2, state, method = defaultMethod, action, onSubmit, relative, preventScrollReset, viewTransition, ...props}, forwardedRef) => {
            let submit = useSubmit();
            let formAction = useFormAction(action, {
                relative
            });
            let formMethod = method.toLowerCase() === "get" ? "get" : "post";
            let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
            let submitHandler = event => {
                onSubmit && onSubmit(event);
                if (event.defaultPrevented) return;
                event.preventDefault();
                let submitter = event.nativeEvent.submitter;
                let submitMethod = submitter?.getAttribute("formmethod") || method;
                submit(submitter || event.currentTarget, {
                    fetcherKey,
                    method: submitMethod,
                    navigate,
                    replace: replace2,
                    state,
                    relative,
                    preventScrollReset,
                    viewTransition
                });
            };
            return react.createElement("form", {
                ref: forwardedRef,
                method: formMethod,
                action: formAction,
                onSubmit: reloadDocument ? onSubmit : submitHandler,
                ...props,
                "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
            });
        }));
        Form.displayName = "Form";
        function ScrollRestoration({getKey, storageKey, ...props}) {
            let remixContext = react.useContext(FrameworkContext);
            let {basename} = react.useContext(NavigationContext);
            let location = useLocation();
            let matches = useMatches();
            useScrollRestoration({
                getKey,
                storageKey
            });
            let ssrKey = react.useMemo((() => {
                if (!remixContext || !getKey) return null;
                let userKey = getScrollRestorationKey(location, matches, basename, getKey);
                return userKey !== location.key ? userKey : null;
            }), []);
            if (!remixContext || remixContext.isSpaMode) return null;
            let restoreScroll = ((storageKey2, restoreKey) => {
                if (!window.history.state || !window.history.state.key) {
                    let key = Math.random().toString(32).slice(2);
                    window.history.replaceState({
                        key
                    }, "");
                }
                try {
                    let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
                    let storedY = positions[restoreKey || window.history.state.key];
                    if (typeof storedY === "number") window.scrollTo(0, storedY);
                } catch (error) {
                    console.error(error);
                    sessionStorage.removeItem(storageKey2);
                }
            }).toString();
            return react.createElement("script", {
                ...props,
                suppressHydrationWarning: true,
                dangerouslySetInnerHTML: {
                    __html: `(${restoreScroll})(${JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)}, ${JSON.stringify(ssrKey)})`
                }
            });
        }
        ScrollRestoration.displayName = "ScrollRestoration";
        function getDataRouterConsoleError2(hookName) {
            return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
        }
        function useDataRouterContext3(hookName) {
            let ctx = react.useContext(DataRouterContext);
            invariant(ctx, getDataRouterConsoleError2(hookName));
            return ctx;
        }
        function useDataRouterState2(hookName) {
            let state = react.useContext(DataRouterStateContext);
            invariant(state, getDataRouterConsoleError2(hookName));
            return state;
        }
        function useLinkClickHandler(to, {target, replace: replaceProp, state, preventScrollReset, relative, viewTransition} = {}) {
            let navigate = useNavigate();
            let location = useLocation();
            let path = useResolvedPath(to, {
                relative
            });
            return react.useCallback((event => {
                if (shouldProcessLinkClick(event, target)) {
                    event.preventDefault();
                    let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
                    navigate(to, {
                        replace: replace2,
                        state,
                        preventScrollReset,
                        relative,
                        viewTransition
                    });
                }
            }), [ location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, viewTransition ]);
        }
        var fetcherId = 0;
        var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
        function useSubmit() {
            let {router} = useDataRouterContext3("useSubmit");
            let {basename} = react.useContext(NavigationContext);
            let currentRouteId = useRouteId();
            return react.useCallback((async (target, options = {}) => {
                let {action, method, encType, formData, body} = getFormSubmissionInfo(target, basename);
                if (options.navigate === false) {
                    let key = options.fetcherKey || getUniqueFetcherId();
                    await router.fetch(key, currentRouteId, options.action || action, {
                        preventScrollReset: options.preventScrollReset,
                        formData,
                        body,
                        formMethod: options.method || method,
                        formEncType: options.encType || encType,
                        flushSync: options.flushSync
                    });
                } else await router.navigate(options.action || action, {
                    preventScrollReset: options.preventScrollReset,
                    formData,
                    body,
                    formMethod: options.method || method,
                    formEncType: options.encType || encType,
                    replace: options.replace,
                    state: options.state,
                    fromRouteId: currentRouteId,
                    flushSync: options.flushSync,
                    viewTransition: options.viewTransition
                });
            }), [ router, basename, currentRouteId ]);
        }
        function useFormAction(action, {relative} = {}) {
            let {basename} = react.useContext(NavigationContext);
            let routeContext = react.useContext(RouteContext);
            invariant(routeContext, "useFormAction must be used inside a RouteContext");
            let [match] = routeContext.matches.slice(-1);
            let path = {
                ...useResolvedPath(action ? action : ".", {
                    relative
                })
            };
            let location = useLocation();
            if (action == null) {
                path.search = location.search;
                let params = new URLSearchParams(path.search);
                let indexValues = params.getAll("index");
                let hasNakedIndexParam = indexValues.some((v => v === ""));
                if (hasNakedIndexParam) {
                    params.delete("index");
                    indexValues.filter((v => v)).forEach((v => params.append("index", v)));
                    let qs = params.toString();
                    path.search = qs ? `?${qs}` : "";
                }
            }
            if ((!action || action === ".") && match.route.index) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
            if (basename !== "/") path.pathname = path.pathname === "/" ? basename : joinPaths([ basename, path.pathname ]);
            return createPath(path);
        }
        var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
        var savedScrollPositions = {};
        function getScrollRestorationKey(location, matches, basename, getKey) {
            let key = null;
            if (getKey) if (basename !== "/") key = getKey({
                ...location,
                pathname: stripBasename(location.pathname, basename) || location.pathname
            }, matches); else key = getKey(location, matches);
            if (key == null) key = location.key;
            return key;
        }
        function useScrollRestoration({getKey, storageKey} = {}) {
            let {router} = useDataRouterContext3("useScrollRestoration");
            let {restoreScrollPosition, preventScrollReset} = useDataRouterState2("useScrollRestoration");
            let {basename} = react.useContext(NavigationContext);
            let location = useLocation();
            let matches = useMatches();
            let navigation = useNavigation();
            react.useEffect((() => {
                window.history.scrollRestoration = "manual";
                return () => {
                    window.history.scrollRestoration = "auto";
                };
            }), []);
            usePageHide(react.useCallback((() => {
                if (navigation.state === "idle") {
                    let key = getScrollRestorationKey(location, matches, basename, getKey);
                    savedScrollPositions[key] = window.scrollY;
                }
                try {
                    sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
                } catch (error) {
                    warning(false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`);
                }
                window.history.scrollRestoration = "auto";
            }), [ navigation.state, getKey, basename, location, matches, storageKey ]));
            if (typeof document !== "undefined") {
                react.useLayoutEffect((() => {
                    try {
                        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
                        if (sessionPositions) savedScrollPositions = JSON.parse(sessionPositions);
                    } catch (e) {}
                }), [ storageKey ]);
                react.useLayoutEffect((() => {
                    let disableScrollRestoration = router?.enableScrollRestoration(savedScrollPositions, (() => window.scrollY), getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0);
                    return () => disableScrollRestoration && disableScrollRestoration();
                }), [ router, basename, getKey ]);
                react.useLayoutEffect((() => {
                    if (restoreScrollPosition === false) return;
                    if (typeof restoreScrollPosition === "number") {
                        window.scrollTo(0, restoreScrollPosition);
                        return;
                    }
                    if (location.hash) {
                        let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
                        if (el) {
                            el.scrollIntoView();
                            return;
                        }
                    }
                    if (preventScrollReset === true) return;
                    window.scrollTo(0, 0);
                }), [ location, restoreScrollPosition, preventScrollReset ]);
            }
        }
        function usePageHide(callback, options) {
            let {capture} = options || {};
            react.useEffect((() => {
                let opts = capture != null ? {
                    capture
                } : void 0;
                window.addEventListener("pagehide", callback, opts);
                return () => {
                    window.removeEventListener("pagehide", callback, opts);
                };
            }), [ callback, capture ]);
        }
        function useViewTransitionState(to, opts = {}) {
            let vtContext = react.useContext(ViewTransitionContext);
            invariant(vtContext != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
            let {basename} = useDataRouterContext3("useViewTransitionState");
            let path = useResolvedPath(to, {
                relative: opts.relative
            });
            if (!vtContext.isTransitioning) return false;
            let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
            let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
            return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
        }
        new TextEncoder;
        var ServerMode = (ServerMode2 => {
            ServerMode2["Development"] = "development";
            ServerMode2["Production"] = "production";
            ServerMode2["Test"] = "test";
            return ServerMode2;
        })(ServerMode || {});
        new Set([ 100, 101, 204, 205, 304 ]);
        function i(e, t, r, n) {
            return new (r || (r = Promise))((function(o, a) {
                function i(e) {
                    try {
                        c(n.next(e));
                    } catch (e) {
                        a(e);
                    }
                }
                function u(e) {
                    try {
                        c(n.throw(e));
                    } catch (e) {
                        a(e);
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                        e(t);
                    }))).then(i, u);
                }
                c((n = n.apply(e, t || [])).next());
            }));
        }
        function u(e, t) {
            var r, n, o, a, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                },
                trys: [],
                ops: []
            };
            return a = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this;
            }), a;
            function u(a) {
                return function(u) {
                    return function(a) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (;i; ) try {
                            if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 
                            0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                            switch (n = 0, o && (a = [ 2 & a[0], o.value ]), a[0]) {
                              case 0:
                              case 1:
                                o = a;
                                break;

                              case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };

                              case 5:
                                i.label++, n = a[1], a = [ 0 ];
                                continue;

                              case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;

                              default:
                                if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    i = 0;
                                    continue;
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break;
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break;
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break;
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue;
                            }
                            a = t.call(e, i);
                        } catch (e) {
                            a = [ 6, e ], n = 0;
                        } finally {
                            r = o = 0;
                        }
                        if (5 & a[0]) throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        };
                    }([ a, u ]);
                };
            }
        }
        function c(e) {
            var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
            if (r) return r.call(e);
            if (e && "number" == typeof e.length) return {
                next: function() {
                    return e && n >= e.length && (e = void 0), {
                        value: e && e[n++],
                        done: !e
                    };
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function l(e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var n, o, a = r.call(e), i = [];
            try {
                for (;(void 0 === t || t-- > 0) && !(n = a.next()).done; ) i.push(n.value);
            } catch (e) {
                o = {
                    error: e
                };
            } finally {
                try {
                    n && !n.done && (r = a.return) && r.call(a);
                } finally {
                    if (o) throw o.error;
                }
            }
            return i;
        }
        function s(e, t, r) {
            if (r || 2 === arguments.length) for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), 
            n[o] = t[o]);
            return e.concat(n || Array.prototype.slice.call(t));
        }
        function f(e, t, r, n, o) {
            for (var a = [], f = 5; f < arguments.length; f++) a[f - 5] = arguments[f];
            return i(this, void 0, void 0, (function() {
                var i, f, h, y, v, b;
                return u(this, (function(u) {
                    switch (u.label) {
                      case 0:
                        u.trys.push([ 0, 12, 13, 14 ]), i = c(a), f = i.next(), u.label = 1;

                      case 1:
                        if (f.done) return [ 3, 11 ];
                        switch (h = f.value, typeof h) {
                          case "string":
                            return [ 3, 2 ];

                          case "number":
                            return [ 3, 4 ];

                          case "function":
                            return [ 3, 6 ];
                        }
                        return [ 3, 8 ];

                      case 2:
                        return [ 4, d(e, t, h, r, n, o) ];

                      case 3:
                        return u.sent(), [ 3, 10 ];

                      case 4:
                        return [ 4, p(h) ];

                      case 5:
                        return u.sent(), [ 3, 10 ];

                      case 6:
                        return [ 4, h.apply(void 0, s([ e, t, r, n, o ], l(a), !1)) ];

                      case 7:
                        return u.sent(), [ 3, 10 ];

                      case 8:
                        return [ 4, h ];

                      case 9:
                        u.sent(), u.label = 10;

                      case 10:
                        return f = i.next(), [ 3, 1 ];

                      case 11:
                        return [ 3, 14 ];

                      case 12:
                        return y = u.sent(), v = {
                            error: y
                        }, [ 3, 14 ];

                      case 13:
                        try {
                            f && !f.done && (b = i.return) && b.call(i);
                        } finally {
                            if (v) throw v.error;
                        }
                        return [ 7 ];

                      case 14:
                        return [ 2 ];
                    }
                }));
            }));
        }
        function d(e, t, r, n, o, a) {
            return i(this, void 0, void 0, (function() {
                var i, c;
                return u(this, (function(u) {
                    switch (u.label) {
                      case 0:
                        return i = e.textContent || "", c = function(e, t) {
                            var r = l(t).slice(0);
                            return s(s([], l(e), !1), [ NaN ], !1).findIndex((function(e, t) {
                                return r[t] !== e;
                            }));
                        }(i, r), [ 4, h(e, s(s([], l(v(i, t, c)), !1), l(y(r, t, c)), !1), n, o, a) ];

                      case 1:
                        return u.sent(), [ 2 ];
                    }
                }));
            }));
        }
        function p(e) {
            return i(this, void 0, void 0, (function() {
                return u(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return [ 4, new Promise((function(t) {
                            return setTimeout(t, e);
                        })) ];

                      case 1:
                        return t.sent(), [ 2 ];
                    }
                }));
            }));
        }
        function h(e, t, r, n, o) {
            return i(this, void 0, void 0, (function() {
                var a, i, s, f, d, h, y, v, b, m, w, g, x;
                return u(this, (function(S) {
                    switch (S.label) {
                      case 0:
                        if (a = t, o) {
                            for (i = 0, s = 1; s < t.length; s++) if (f = l([ t[s - 1], t[s] ], 2), d = f[0], 
                            (h = f[1]).length > d.length || "" === h) {
                                i = s;
                                break;
                            }
                            a = t.slice(i, t.length);
                        }
                        S.label = 1;

                      case 1:
                        S.trys.push([ 1, 6, 7, 8 ]), y = c(function(e) {
                            var t, r, n, o, a, i, l;
                            return u(this, (function(s) {
                                switch (s.label) {
                                  case 0:
                                    t = function(e) {
                                        return u(this, (function(t) {
                                            switch (t.label) {
                                              case 0:
                                                return [ 4, {
                                                    op: function(t) {
                                                        return requestAnimationFrame((function() {
                                                            return t.textContent = e;
                                                        }));
                                                    },
                                                    opCode: function(t) {
                                                        var r = t.textContent || "";
                                                        return "" === e || r.length > e.length ? "DELETE" : "WRITING";
                                                    }
                                                } ];

                                              case 1:
                                                return t.sent(), [ 2 ];
                                            }
                                        }));
                                    }, s.label = 1;

                                  case 1:
                                    s.trys.push([ 1, 6, 7, 8 ]), r = c(e), n = r.next(), s.label = 2;

                                  case 2:
                                    return n.done ? [ 3, 5 ] : (o = n.value, [ 5, t(o) ]);

                                  case 3:
                                    s.sent(), s.label = 4;

                                  case 4:
                                    return n = r.next(), [ 3, 2 ];

                                  case 5:
                                    return [ 3, 8 ];

                                  case 6:
                                    return a = s.sent(), i = {
                                        error: a
                                    }, [ 3, 8 ];

                                  case 7:
                                    try {
                                        n && !n.done && (l = r.return) && l.call(r);
                                    } finally {
                                        if (i) throw i.error;
                                    }
                                    return [ 7 ];

                                  case 8:
                                    return [ 2 ];
                                }
                            }));
                        }(a)), v = y.next(), S.label = 2;

                      case 2:
                        return v.done ? [ 3, 5 ] : (b = v.value, m = "WRITING" === b.opCode(e) ? r + r * (Math.random() - .5) : n + n * (Math.random() - .5), 
                        b.op(e), [ 4, p(m) ]);

                      case 3:
                        S.sent(), S.label = 4;

                      case 4:
                        return v = y.next(), [ 3, 2 ];

                      case 5:
                        return [ 3, 8 ];

                      case 6:
                        return w = S.sent(), g = {
                            error: w
                        }, [ 3, 8 ];

                      case 7:
                        try {
                            v && !v.done && (x = y.return) && x.call(y);
                        } finally {
                            if (g) throw g.error;
                        }
                        return [ 7 ];

                      case 8:
                        return [ 2 ];
                    }
                }));
            }));
        }
        function y(e, t, r) {
            var n, o;
            return void 0 === r && (r = 0), u(this, (function(a) {
                switch (a.label) {
                  case 0:
                    n = t(e), o = n.length, a.label = 1;

                  case 1:
                    return r < o ? [ 4, n.slice(0, ++r).join("") ] : [ 3, 3 ];

                  case 2:
                    return a.sent(), [ 3, 1 ];

                  case 3:
                    return [ 2 ];
                }
            }));
        }
        function v(e, t, r) {
            var n, o;
            return void 0 === r && (r = 0), u(this, (function(a) {
                switch (a.label) {
                  case 0:
                    n = t(e), o = n.length, a.label = 1;

                  case 1:
                    return o > r ? [ 4, n.slice(0, --o).join("") ] : [ 3, 3 ];

                  case 2:
                    return a.sent(), [ 3, 1 ];

                  case 3:
                    return [ 2 ];
                }
            }));
        }
        var b = "index-module_type__E-SaG";
        !function(e, t) {
            void 0 === t && (t = {});
            var r = t.insertAt;
            if (e && "undefined" != typeof document) {
                var n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
                o.type = "text/css", "top" === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), 
                o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
            }
        }(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
        var m = (0, react.memo)((0, react.forwardRef)((function(o, a) {
            var i = o.sequence, u = o.repeat, c = o.className, d = o.speed, p = void 0 === d ? 40 : d, h = o.deletionSpeed, y = o.omitDeletionAnimation, v = void 0 !== y && y, m = o.preRenderFirstString, w = void 0 !== m && m, g = o.wrapper, x = void 0 === g ? "span" : g, S = o.splitter, E = void 0 === S ? function(e) {
                return s([], l(e), !1);
            } : S, _ = o.cursor, k = void 0 === _ || _, O = o.style, T = function(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                }
                return r;
            }(o, [ "sequence", "repeat", "className", "speed", "deletionSpeed", "omitDeletionAnimation", "preRenderFirstString", "wrapper", "splitter", "cursor", "style" ]), A = T["aria-label"], C = T["aria-hidden"], N = T.role;
            h || (h = p);
            var P = new Array(2).fill(40);
            [ p, h ].forEach((function(e, t) {
                switch (typeof e) {
                  case "number":
                    P[t] = Math.abs(e - 100);
                    break;

                  case "object":
                    var r = e.type, n = e.value;
                    if ("number" != typeof n) break;
                    if ("keyStrokeDelayInMs" === r) P[t] = n;
                }
            }));
            var j, I, G, D, M, R, q = P[0], F = P[1], B = function(e, r) {
                void 0 === r && (r = null);
                var o = (0, react.useRef)(r);
                return (0, react.useEffect)((function() {
                    e && ("function" == typeof e ? e(o.current) : e.current = o.current);
                }), [ e ]), o;
            }(a), Q = b;
            j = c ? "".concat(k ? Q + " " : "").concat(c) : k ? Q : "", I = (0, react.useRef)((function() {
                var e, t = i;
                u === 1 / 0 ? e = f : "number" == typeof u && (t = Array(1 + u).fill(i).flat());
                var r = e ? s(s([], l(t), !1), [ e ], !1) : s([], l(t), !1);
                return f.apply(void 0, s([ B.current, E, q, F, v ], l(r), !1)), function() {
                    B.current;
                };
            })), G = (0, react.useRef)(), D = (0, react.useRef)(!1), M = (0, react.useRef)(!1), 
            R = l((0, react.useState)(0), 2)[1], D.current && (M.current = !0), (0, react.useEffect)((function() {
                return D.current || (G.current = I.current(), D.current = !0), R((function(e) {
                    return e + 1;
                })), function() {
                    M.current && G.current && G.current();
                };
            }), []);
            var W = x, L = w ? i.find((function(e) {
                return "string" == typeof e;
            })) || "" : null;
            return react.createElement(W, {
                "aria-hidden": C,
                "aria-label": A,
                role: N,
                style: O,
                className: j,
                children: A ? react.createElement("span", {
                    "aria-hidden": "true",
                    ref: B,
                    children: L
                }) : L,
                ref: A ? void 0 : B
            });
        })), (function(e, t) {
            return !0;
        }));
        var Home = function Home() {
            return react.createElement("div", {
                className: "page__home home"
            }, react.createElement("div", {
                className: "home__container"
            }, react.createElement(m, {
                sequence: [ "Welcome!", 3e3, "", 1500, function() {} ],
                wrapper: "span",
                speed: 250,
                cursor: true,
                repeat: 1 / 0,
                style: {
                    fontSize: "4rem",
                    display: "inline-block"
                }
            })));
        };
        const home_Home = Home;
        var useFetch = __webpack_require__(212);
        var Loading = function Loading() {
            return react.createElement("div", {
                className: "menu--page__load load"
            }, react.createElement("div", {
                className: "load__text"
            }, "Loading..."), react.createElement("div", {
                className: "load__dots-container"
            }, react.createElement("div", {
                className: "load__dot"
            }), react.createElement("div", {
                className: "load__dot"
            }), react.createElement("div", {
                className: "load__dot"
            }), react.createElement("div", {
                className: "load__dot"
            }), react.createElement("div", {
                className: "load__dot"
            })));
        };
        const default_Loading = Loading;
        var lib = __webpack_require__(682);
        var lib_default = __webpack_require__.n(lib);
        const plus = __webpack_require__.p + "../img/6f6b5696de4dcd7401293fb6596c41dd.svg";
        function _typeof(o) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o;
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            }, _typeof(o);
        }
        function _toConsumableArray(r) {
            return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _iterableToArray(r) {
            if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }
        function _arrayWithoutHoles(r) {
            if (Array.isArray(r)) return _arrayLikeToArray(r);
        }
        function ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                r && (o = o.filter((function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                }))), t.push.apply(t, o);
            }
            return t;
        }
        function _objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? ownKeys(Object(t), !0).forEach((function(r) {
                    _defineProperty(e, r, t[r]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }));
            }
            return e;
        }
        function _defineProperty(e, r, t) {
            return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e;
        }
        function _toPropertyKey(t) {
            var i = _toPrimitive(t, "string");
            return "symbol" == _typeof(i) ? i : i + "";
        }
        function _toPrimitive(t, r) {
            if ("object" != _typeof(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var i = e.call(t, r || "default");
                if ("object" != _typeof(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(t);
        }
        function _slicedToArray(r, e) {
            return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return _arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
            }
        }
        function _arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function _iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function _arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var CartContext = (0, react.createContext)();
        var CartProvider = function CartProvider(_ref) {
            var children = _ref.children;
            var _useState = (0, react.useState)([]), _useState2 = _slicedToArray(_useState, 2), cart = _useState2[0], setCart = _useState2[1];
            var _useState3 = (0, react.useState)(0), _useState4 = _slicedToArray(_useState3, 2), cartCounter = _useState4[0], setCartCounter = _useState4[1];
            var _useState5 = (0, react.useState)(false), _useState6 = _slicedToArray(_useState5, 2), isInitialized = _useState6[0], setIsInitialized = _useState6[1];
            var _useState7 = (0, react.useState)(0), _useState8 = _slicedToArray(_useState7, 2), totalPrice = _useState8[0], setTotalPrice = _useState8[1];
            (0, react.useEffect)((function() {
                var savedCart = localStorage.getItem("cart");
                if (savedCart) {
                    var jsonSavedCart = JSON.parse(savedCart);
                    setCart(jsonSavedCart);
                }
                setIsInitialized(true);
            }), []);
            (0, react.useEffect)((function() {
                if (isInitialized) {
                    localStorage.getItem("cart");
                    var newLocalStorage = JSON.stringify(cart);
                    localStorage.setItem("cart", newLocalStorage);
                    var initCartCounter = 0;
                    for (var i = 0; i < cart.length; i++) initCartCounter += cart[i].quantity;
                    setCartCounter(initCartCounter);
                    setTotalPrice(countTotalPrice());
                }
            }), [ cart, isInitialized ]);
            var countTotalPrice = function countTotalPrice() {
                var result = 0;
                var _loop = function _loop() {
                    var item = cart[i];
                    if (Array.isArray(item.price)) {
                        var _item$price$find;
                        result += ((_item$price$find = item.price.find((function(p) {
                            return p[item.selected_size];
                        }))) === null || _item$price$find === void 0 ? void 0 : _item$price$find[item.selected_size]) * item.quantity;
                    } else result += item.price * item.quantity;
                };
                for (var i = 0; i < cart.length; i++) _loop();
                return result;
            };
            var removeFromCart = function removeFromCart(dish) {
                setCart((function(prevCart) {
                    return prevCart.filter((function(item) {
                        return item.dish_id !== dish.dish_id;
                    }));
                }));
            };
            var updateCart = function updateCart(dish) {
                var category = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var newQuantity = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                setCart((function(prevCart) {
                    var isDishInCart = prevCart.find((function(item) {
                        return dish.dish_id === item.dish_id;
                    }));
                    if (isDishInCart) return prevCart.map((function(item) {
                        if (item.dish_id === dish.dish_id) if (!newQuantity) {
                            setCartCounter(cartCounter + 1);
                            return _objectSpread(_objectSpread({}, item), {}, {
                                quantity: item.quantity + 1
                            });
                        } else if (item.quantity > newQuantity) {
                            setCartCounter(cartCounter - 1);
                            return _objectSpread(_objectSpread({}, item), {}, {
                                quantity: newQuantity
                            });
                        } else {
                            setCartCounter(cartCounter + 1);
                            return _objectSpread(_objectSpread({}, item), {}, {
                                quantity: newQuantity
                            });
                        }
                        return item;
                    })); else {
                        setCartCounter(cartCounter + 1);
                        if (Array.isArray(dish.price)) return [].concat(_toConsumableArray(prevCart), [ _objectSpread(_objectSpread({}, dish), {}, {
                            selected_size: "Klein",
                            quantity: 1
                        }) ]); else if (category === "Döner-Dürüm-Pide") return [].concat(_toConsumableArray(prevCart), [ _objectSpread(_objectSpread({}, dish), {}, {
                            sauces: {
                                herbs: false,
                                garlic: false,
                                spicy: false
                            },
                            quantity: 1
                        }) ]); else return [].concat(_toConsumableArray(prevCart), [ _objectSpread(_objectSpread({}, dish), {}, {
                            quantity: 1
                        }) ]);
                    }
                }));
                document.querySelector(".cart__amount").classList.add("impulse");
                setTimeout((function() {
                    document.querySelector(".cart__amount").classList.remove("impulse");
                }), 500);
            };
            var handleChangeOption = function handleChangeOption(id, newOption) {
                setCart((function(prevCart) {
                    return prevCart.map((function(item) {
                        return item.dish_id === id ? _objectSpread(_objectSpread({}, item), {}, {
                            selected_size: newOption
                        }) : item;
                    }));
                }));
            };
            var handleSauceSelection = function handleSauceSelection(id, newSelection) {
                setCart((function(prevCart) {
                    return prevCart.map((function(item) {
                        return item.dish_id === id ? _objectSpread(_objectSpread({}, item), {}, {
                            sauces: newSelection
                        }) : item;
                    }));
                }));
            };
            var clearCart = function clearCart() {
                setCart([]);
            };
            return react.createElement(CartContext.Provider, {
                value: {
                    cart,
                    cartCounter,
                    totalPrice,
                    removeFromCart,
                    updateCart,
                    handleChangeOption,
                    handleSauceSelection,
                    clearCart
                }
            }, children);
        };
        var MenuList = function MenuList(_ref) {
            var dishes = _ref.dishes, activeCategory = _ref.activeCategory;
            var _useContext = (0, react.useContext)(CartContext), updateCart = _useContext.updateCart;
            if (activeCategory !== "Pizza") return react.createElement("ul", {
                className: "menu--page__list list"
            }, dishes.map((function(item) {
                return react.createElement("li", {
                    key: item.dish_id,
                    className: "list__item"
                }, react.createElement("div", {
                    className: "list__body"
                }, react.createElement("div", {
                    className: "list__number"
                }, item.number), react.createElement("div", {
                    className: "list__text"
                }, react.createElement("div", {
                    className: "list__title"
                }, item.name), item.description && react.createElement("div", {
                    className: "list__description"
                }, item.description))), react.createElement("div", {
                    className: "list__price"
                }, item.price.toFixed(2)), react.createElement("button", {
                    onClick: function onClick() {
                        return updateCart(item, activeCategory, null);
                    },
                    className: "list__button"
                }, react.createElement("img", {
                    src: plus,
                    alt: "Add Item"
                })));
            })));
            var groupedDishes = dishes.reduce((function(acc, dish) {
                var subcategory = dish.subcategory_id;
                if (!acc[subcategory]) acc[subcategory] = [];
                acc[subcategory].push(dish);
                return acc;
            }), {});
            return react.createElement("ul", {
                className: "menu--page__list list"
            }, Object.keys(groupedDishes).map((function(subcategory) {
                return react.createElement(react.Fragment, {
                    key: subcategory
                }, react.createElement(lib_default(), {
                    stickyStyle: {
                        top: "137px"
                    },
                    topOffset: -140
                }, react.createElement("div", {
                    className: "menu--page__pricelist pricelist"
                }, [ "Kinder", "Klein", "Groß", "Family", "Party" ].map((function(size) {
                    var _groupedDishes$subcat;
                    return react.createElement("div", {
                        key: size,
                        className: "pricelist__item"
                    }, react.createElement("div", {
                        className: "pricelist__size"
                    }, size), react.createElement("div", {
                        className: "pricelist__price"
                    }, ((_groupedDishes$subcat = groupedDishes[subcategory][0].price.find((function(p) {
                        return p[size];
                    }))) === null || _groupedDishes$subcat === void 0 ? void 0 : _groupedDishes$subcat[size]) || ""));
                })))), groupedDishes[subcategory].map((function(dish) {
                    return react.createElement("li", {
                        key: dish.dish_id,
                        className: "list__item"
                    }, react.createElement("div", {
                        className: "list__body"
                    }, react.createElement("div", {
                        className: "list__number"
                    }, dish.number), react.createElement("div", {
                        className: "list__text"
                    }, react.createElement("div", {
                        className: "list__title"
                    }, dish.name), dish.description && react.createElement("div", {
                        className: "list__description"
                    }, dish.description))), react.createElement("button", {
                        onClick: function onClick() {
                            return updateCart(dish);
                        },
                        className: "list__button"
                    }, react.createElement("img", {
                        src: plus,
                        alt: "Add Item"
                    })));
                })));
            })));
        };
        const menu_MenuList = MenuList;
        const arrow = __webpack_require__.p + "../img/45c7843cdbb3453794578461b8d229b4.svg";
        var Sidebar = function Sidebar(_ref) {
            var categories = _ref.categories, triggerSetActiveCategory = _ref.triggerSetActiveCategory;
            var handleClick = function handleClick(e) {
                if (document.querySelector(".sidebar__button")) if (e.target.closest(".sidebar__button")) document.documentElement.classList.toggle("menu-nav-open");
            };
            var toggleActiveCategory = function toggleActiveCategory(e) {
                var activeElements = document.getElementsByClassName("active");
                Array.from(activeElements).forEach((function(element) {
                    element.classList.remove("active", "disabled");
                }));
                e.target.parentElement.classList.add("active", "disabled");
                var category = e.target.innerText;
                triggerSetActiveCategory(category);
            };
            return react.createElement("aside", {
                className: "menu--page__sidebar sidebar"
            }, react.createElement("nav", {
                className: "sidebar__nav"
            }, react.createElement("ul", {
                className: "sidebar__list"
            }, categories.map((function(category) {
                return react.createElement("li", {
                    key: category.id,
                    className: "sidebar__item ".concat(category.id === 1 ? "active disabled" : "")
                }, react.createElement(Link, {
                    className: "sidebar__link",
                    onClick: toggleActiveCategory
                }, category.name));
            })))), react.createElement("button", {
                className: "sidebar__button",
                onClick: handleClick
            }, react.createElement("img", {
                src: arrow,
                alt: "arrow"
            })));
        };
        const menu_Sidebar = Sidebar;
        function Menu_slicedToArray(r, e) {
            return Menu_arrayWithHoles(r) || Menu_iterableToArrayLimit(r, e) || Menu_unsupportedIterableToArray(r, e) || Menu_nonIterableRest();
        }
        function Menu_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Menu_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return Menu_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Menu_arrayLikeToArray(r, a) : void 0;
            }
        }
        function Menu_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function Menu_iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function Menu_arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var Menu = function Menu(props) {
            var _useState = (0, react.useState)(), _useState2 = Menu_slicedToArray(_useState, 2), categories = _useState2[0], setCategories = _useState2[1];
            var _useState3 = (0, react.useState)(), _useState4 = Menu_slicedToArray(_useState3, 2), dishes = _useState4[0], setDishes = _useState4[1];
            var _useState5 = (0, react.useState)(""), _useState6 = Menu_slicedToArray(_useState5, 2), activeCategory = _useState6[0], setActiveCategory = _useState6[1];
            var _useFetch = (0, useFetch.A)(props.token, props.setToken), error = (_useFetch.data, 
            _useFetch.error), isPending = _useFetch.isPending, fetchData = _useFetch.fetchData;
            (0, react.useEffect)((function() {
                fetchData("/menu/categories", "GET", {
                    doOnSuccess: function doOnSuccess(data) {
                        var _data$;
                        setCategories(data);
                        var firstCategory = (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.name;
                        setActiveCategory(firstCategory);
                    },
                    doOnError: function doOnError() {
                        setCategories("");
                        setDishes("");
                    }
                });
            }), []);
            (0, react.useEffect)((function() {
                categories && activeCategory && fetchData("/menu/".concat(activeCategory), "GET", {
                    doOnSuccess: function doOnSuccess(data) {
                        setDishes(data);
                    },
                    doOnError: function doOnError() {
                        setCategories("");
                        setDishes("");
                    }
                });
            }), [ categories, activeCategory ]);
            var clean = function clean(category) {
                setDishes("");
                setActiveCategory(category);
            };
            return react.createElement("section", {
                className: "page__menu menu--page ".concat(isPending || error ? "centered" : "")
            }, isPending && react.createElement(default_Loading, null), error && react.createElement("div", null, error), categories && react.createElement(menu_Sidebar, {
                categories,
                triggerSetActiveCategory: clean
            }), dishes && react.createElement(react.Fragment, null, react.createElement("div", {
                className: "menu--page__content"
            }, react.createElement("div", {
                className: "menu--page__box"
            }, react.createElement(menu_MenuList, {
                dishes,
                activeCategory
            })))));
        };
        const menu_Menu = Menu;
        var SignIn = function SignIn(props) {
            var navigate = useNavigate();
            var _useFetch = (0, useFetch.A)(), fetchData = (_useFetch.data, _useFetch.error, 
            _useFetch.isPending, _useFetch.fetchData);
            var handleSubmit = function handleSubmit(e) {
                e.preventDefault();
                var formData = new FormData(e.target);
                var userData = {
                    username: formData.get("username").trim(),
                    password: formData.get("password").trim()
                };
                fetchData("/signIn", "POST", {
                    body: userData,
                    doOnSuccess: function doOnSuccess(data) {
                        props.setToken(data.token);
                        document.cookie = "token=".concat(data.token, "; path=/");
                        navigate("/menu");
                    },
                    doOnError: function doOnError() {
                        return e.target.reset();
                    }
                });
            };
            return react.createElement("div", {
                className: "auth-box"
            }, react.createElement("form", {
                onSubmit: handleSubmit
            }, react.createElement("div", {
                className: "user-box"
            }, react.createElement("input", {
                type: "text",
                name: "username",
                required: true
            }), react.createElement("label", null, "Username")), react.createElement("div", {
                className: "user-box"
            }, react.createElement("input", {
                type: "password",
                name: "password",
                required: true
            }), react.createElement("label", null, "Password")), react.createElement("center", null, react.createElement("button", {
                type: "submit",
                className: "submit"
            }, "sign in", react.createElement("span", null)))), react.createElement("div", {
                className: "bottom-text"
            }, react.createElement(Link, {
                className: "bottom-link",
                to: "/signUp"
            }, "sign up")));
        };
        const authentication_SignIn = SignIn;
        var SignUp = function SignUp() {
            var navigate = useNavigate();
            var _useFetch = (0, useFetch.A)(), fetchData = (_useFetch.data, _useFetch.isPending, 
            _useFetch.error, _useFetch.fetchData);
            var handleSubmit = function handleSubmit(e) {
                e.preventDefault();
                var formData = new FormData(e.target);
                var userData = {
                    username: formData.get("username").trim(),
                    password: formData.get("password").trim(),
                    confirmPassword: formData.get("confirmPassword").trim()
                };
                if (userData.password === userData.confirmPassword) fetchData("/signUp", "POST", {
                    body: {
                        username: userData.username,
                        password: userData.password
                    },
                    doOnSuccess: function doOnSuccess(data) {
                        alert(data.message);
                        navigate("/signIn");
                    },
                    doOnError: function doOnError() {
                        return e.target.reset();
                    }
                }); else {
                    alert("Passwords do not match");
                    e.target.reset();
                }
            };
            return react.createElement("div", {
                className: "auth-box"
            }, react.createElement("form", {
                onSubmit: handleSubmit
            }, react.createElement("div", {
                className: "user-box"
            }, react.createElement("input", {
                type: "text",
                name: "username",
                required: true
            }), react.createElement("label", null, "Username")), react.createElement("div", {
                className: "user-box"
            }, react.createElement("input", {
                type: "password",
                name: "password",
                required: true
            }), react.createElement("label", null, "Password")), react.createElement("div", {
                className: "user-box"
            }, react.createElement("input", {
                type: "password",
                name: "confirmPassword",
                required: true
            }), react.createElement("label", null, "Confirm Password")), react.createElement("center", null, react.createElement("button", {
                type: "submit",
                className: "submit"
            }, "sign up", react.createElement("span", null)))), react.createElement("div", {
                className: "bottom-text"
            }, react.createElement(Link, {
                className: "bottom-link",
                to: "/signIn"
            }, "sign in")));
        };
        const authentication_SignUp = SignUp;
        var with_selector = __webpack_require__(418);
        var IS_REACT_19 = null && React.version.startsWith("19");
        null && Symbol.for(IS_REACT_19 ? "react.transitional.element" : "react.element");
        null && Symbol.for("react.portal");
        null && Symbol.for("react.fragment");
        null && Symbol.for("react.strict_mode");
        null && Symbol.for("react.profiler");
        null && Symbol.for("react.consumer");
        null && Symbol.for("react.context");
        Symbol.for("react.forward_ref");
        null && Symbol.for("react.suspense");
        null && Symbol.for("react.suspense_list");
        Symbol.for("react.memo");
        null && Symbol.for("react.lazy");
        null && Symbol.for("react.offscreen");
        null && Symbol.for("react.client.reference");
        function defaultNoopBatch(callback) {
            callback();
        }
        function createListenerCollection() {
            let first = null;
            let last = null;
            return {
                clear() {
                    first = null;
                    last = null;
                },
                notify() {
                    defaultNoopBatch((() => {
                        let listener = first;
                        while (listener) {
                            listener.callback();
                            listener = listener.next;
                        }
                    }));
                },
                get() {
                    const listeners = [];
                    let listener = first;
                    while (listener) {
                        listeners.push(listener);
                        listener = listener.next;
                    }
                    return listeners;
                },
                subscribe(callback) {
                    let isSubscribed = true;
                    const listener = last = {
                        callback,
                        next: null,
                        prev: last
                    };
                    if (listener.prev) listener.prev.next = listener; else first = listener;
                    return function unsubscribe() {
                        if (!isSubscribed || first === null) return;
                        isSubscribed = false;
                        if (listener.next) listener.next.prev = listener.prev; else last = listener.prev;
                        if (listener.prev) listener.prev.next = listener.next; else first = listener.next;
                    };
                }
            };
        }
        var nullListeners = {
            notify() {},
            get: () => []
        };
        function createSubscription(store, parentSub) {
            let unsubscribe;
            let listeners = nullListeners;
            let subscriptionsAmount = 0;
            let selfSubscribed = false;
            function addNestedSub(listener) {
                trySubscribe();
                const cleanupListener = listeners.subscribe(listener);
                let removed = false;
                return () => {
                    if (!removed) {
                        removed = true;
                        cleanupListener();
                        tryUnsubscribe();
                    }
                };
            }
            function notifyNestedSubs() {
                listeners.notify();
            }
            function handleChangeWrapper() {
                if (subscription.onStateChange) subscription.onStateChange();
            }
            function isSubscribed() {
                return selfSubscribed;
            }
            function trySubscribe() {
                subscriptionsAmount++;
                if (!unsubscribe) {
                    unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
                    listeners = createListenerCollection();
                }
            }
            function tryUnsubscribe() {
                subscriptionsAmount--;
                if (unsubscribe && subscriptionsAmount === 0) {
                    unsubscribe();
                    unsubscribe = void 0;
                    listeners.clear();
                    listeners = nullListeners;
                }
            }
            function trySubscribeSelf() {
                if (!selfSubscribed) {
                    selfSubscribed = true;
                    trySubscribe();
                }
            }
            function tryUnsubscribeSelf() {
                if (selfSubscribed) {
                    selfSubscribed = false;
                    tryUnsubscribe();
                }
            }
            const subscription = {
                addNestedSub,
                notifyNestedSubs,
                handleChangeWrapper,
                isSubscribed,
                trySubscribe: trySubscribeSelf,
                tryUnsubscribe: tryUnsubscribeSelf,
                getListeners: () => listeners
            };
            return subscription;
        }
        var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isDOM = canUseDOM();
        var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
        var isReactNative = isRunningInReactNative();
        var getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? react.useLayoutEffect : react.useEffect;
        var react_redux_useIsomorphicLayoutEffect = getUseIsomorphicLayoutEffect();
        Object.defineProperty;
        Object.getOwnPropertyNames;
        Object.getOwnPropertySymbols;
        Object.getOwnPropertyDescriptor;
        Object.getPrototypeOf;
        Object.prototype;
        var ContextKey = Symbol.for(`react-redux-context`);
        var gT = typeof globalThis !== "undefined" ? globalThis : {};
        function getContext() {
            if (!react.createContext) return {};
            const contextMap = gT[ContextKey] ??= new Map;
            let realContext = contextMap.get(react.createContext);
            if (!realContext) {
                realContext = react.createContext(null);
                if (false) ;
                contextMap.set(react.createContext, realContext);
            }
            return realContext;
        }
        var ReactReduxContext = getContext();
        function Provider(providerProps) {
            const {children, context, serverState, store} = providerProps;
            const contextValue = react.useMemo((() => {
                const subscription = createSubscription(store);
                const baseContextValue = {
                    store,
                    subscription,
                    getServerState: serverState ? () => serverState : void 0
                };
                if (true) return baseContextValue;
            }), [ store, serverState ]);
            const previousState = react.useMemo((() => store.getState()), [ store ]);
            react_redux_useIsomorphicLayoutEffect((() => {
                const {subscription} = contextValue;
                subscription.onStateChange = subscription.notifyNestedSubs;
                subscription.trySubscribe();
                if (previousState !== store.getState()) subscription.notifyNestedSubs();
                return () => {
                    subscription.tryUnsubscribe();
                    subscription.onStateChange = void 0;
                };
            }), [ contextValue, previousState ]);
            const Context = context || ReactReduxContext;
            return react.createElement(Context.Provider, {
                value: contextValue
            }, children);
        }
        var Provider_default = Provider;
        function createReduxContextHook(context = ReactReduxContext) {
            return function useReduxContext2() {
                const contextValue = react.useContext(context);
                if (false) ;
                return contextValue;
            };
        }
        var useReduxContext = createReduxContextHook();
        function createStoreHook(context = ReactReduxContext) {
            const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
            const useStore2 = () => {
                const {store} = useReduxContext2();
                return store;
            };
            Object.assign(useStore2, {
                withTypes: () => useStore2
            });
            return useStore2;
        }
        var useStore = createStoreHook();
        function createDispatchHook(context = ReactReduxContext) {
            const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
            const useDispatch2 = () => {
                const store = useStore2();
                return store.dispatch;
            };
            Object.assign(useDispatch2, {
                withTypes: () => useDispatch2
            });
            return useDispatch2;
        }
        var useDispatch = createDispatchHook();
        var refEquality = (a, b) => a === b;
        function createSelectorHook(context = ReactReduxContext) {
            const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
            const useSelector2 = (selector, equalityFnOrOptions = {}) => {
                const {equalityFn = refEquality} = typeof equalityFnOrOptions === "function" ? {
                    equalityFn: equalityFnOrOptions
                } : equalityFnOrOptions;
                if (false) ;
                const reduxContext = useReduxContext2();
                const {store, subscription, getServerState} = reduxContext;
                react.useRef(true);
                const wrappedSelector = react.useCallback({
                    [selector.name](state) {
                        const selected = selector(state);
                        if (false) ;
                        return selected;
                    }
                }[selector.name], [ selector ]);
                const selectedState = (0, with_selector.useSyncExternalStoreWithSelector)(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
                react.useDebugValue(selectedState);
                return selectedState;
            };
            Object.assign(useSelector2, {
                withTypes: () => useSelector2
            });
            return useSelector2;
        }
        var useSelector = createSelectorHook();
        const box = __webpack_require__.p + "../img/2033dc5c45fcaf73f41779902842d08f.svg";
        const ibw_logo = __webpack_require__.p + "../img/df14faa28429d9f9e69d4d365572922a.svg";
        var Header = function Header(props) {
            var navigate = useNavigate();
            var _useContext = (0, react.useContext)(CartContext), cartCounter = _useContext.cartCounter;
            var _useFetch = (0, useFetch.A)(), fetchData = _useFetch.fetchData;
            var isAdmin = useSelector((function(state) {
                return state.user.admin;
            }));
            var handleLogout = function handleLogout() {
                fetchData("/logout", "POST", {
                    doOnSuccess: function doOnSuccess() {
                        props.logout();
                        navigate("/signIn");
                    }
                });
            };
            return react.createElement("header", {
                className: "header"
            }, react.createElement("div", {
                className: "header__container"
            }, react.createElement("div", {
                className: "header__logo"
            }, react.createElement(Link, {
                to: "/"
            }, react.createElement("img", {
                src: ibw_logo,
                alt: "Image"
            }))), react.createElement("div", {
                className: "header__menu menu"
            }, react.createElement("nav", {
                className: "menu__body"
            }, react.createElement("ul", {
                className: "menu__list"
            }, react.createElement("li", {
                className: "menu__item"
            }, react.createElement(Link, {
                to: "/menu",
                className: "menu__link"
            }, "Speisekarte")), isAdmin && react.createElement("li", {
                className: "menu__item"
            }, react.createElement(Link, {
                to: "/orders-overview",
                className: "menu__link"
            }, "Gesamtbestellung"))))), react.createElement("div", {
                className: "header__right"
            }, react.createElement(Link, {
                className: "header__cart cart",
                to: "/cart"
            }, react.createElement("div", {
                className: "cart__amount"
            }, cartCounter), react.createElement("div", {
                className: "cart__image"
            }, react.createElement("img", {
                src: box,
                alt: "Cart"
            }))), react.createElement("button", {
                "data-da": ".menu__body,767.98",
                className: "header__logout",
                id: "logout",
                onClick: handleLogout
            }, "Logout"), react.createElement("button", {
                type: "button",
                className: "menu__icon icon-menu"
            }, react.createElement("span", null)))));
        };
        const header_Header = Header;
        class InvalidTokenError extends Error {}
        InvalidTokenError.prototype.name = "InvalidTokenError";
        function b64DecodeUnicode(str) {
            return decodeURIComponent(atob(str).replace(/(.)/g, ((m, p) => {
                let code = p.charCodeAt(0).toString(16).toUpperCase();
                if (code.length < 2) code = "0" + code;
                return "%" + code;
            })));
        }
        function base64UrlDecode(str) {
            let output = str.replace(/-/g, "+").replace(/_/g, "/");
            switch (output.length % 4) {
              case 0:
                break;

              case 2:
                output += "==";
                break;

              case 3:
                output += "=";
                break;

              default:
                throw new Error("base64 string is not of the correct length");
            }
            try {
                return b64DecodeUnicode(output);
            } catch (err) {
                return atob(output);
            }
        }
        function jwtDecode(token, options) {
            if (typeof token !== "string") throw new InvalidTokenError("Invalid token specified: must be a string");
            options || (options = {});
            const pos = options.header === true ? 0 : 1;
            const part = token.split(".")[pos];
            if (typeof part !== "string") throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
            let decoded;
            try {
                decoded = base64UrlDecode(part);
            } catch (e) {
                throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
            }
            try {
                return JSON.parse(decoded);
            } catch (e) {
                throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
            }
        }
        function formatProdErrorMessage(code) {
            return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
        }
        var $$observable = (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
        var symbol_observable_default = $$observable;
        var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
        var ActionTypes = {
            INIT: `@@redux/INIT${randomString()}`,
            REPLACE: `@@redux/REPLACE${randomString()}`,
            PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
        };
        var actionTypes_default = ActionTypes;
        function redux_isPlainObject(obj) {
            if (typeof obj !== "object" || obj === null) return false;
            let proto = obj;
            while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
            return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
        }
        function createStore(reducer, preloadedState, enhancer) {
            if (typeof reducer !== "function") throw new Error(true ? formatProdErrorMessage(2) : 0);
            if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error(true ? formatProdErrorMessage(0) : 0);
            if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
                enhancer = preloadedState;
                preloadedState = void 0;
            }
            if (typeof enhancer !== "undefined") {
                if (typeof enhancer !== "function") throw new Error(true ? formatProdErrorMessage(1) : 0);
                return enhancer(createStore)(reducer, preloadedState);
            }
            let currentReducer = reducer;
            let currentState = preloadedState;
            let currentListeners = new Map;
            let nextListeners = currentListeners;
            let listenerIdCounter = 0;
            let isDispatching = false;
            function ensureCanMutateNextListeners() {
                if (nextListeners === currentListeners) {
                    nextListeners = new Map;
                    currentListeners.forEach(((listener, key) => {
                        nextListeners.set(key, listener);
                    }));
                }
            }
            function getState() {
                if (isDispatching) throw new Error(true ? formatProdErrorMessage(3) : 0);
                return currentState;
            }
            function subscribe(listener) {
                if (typeof listener !== "function") throw new Error(true ? formatProdErrorMessage(4) : 0);
                if (isDispatching) throw new Error(true ? formatProdErrorMessage(5) : 0);
                let isSubscribed = true;
                ensureCanMutateNextListeners();
                const listenerId = listenerIdCounter++;
                nextListeners.set(listenerId, listener);
                return function unsubscribe() {
                    if (!isSubscribed) return;
                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(6) : 0);
                    isSubscribed = false;
                    ensureCanMutateNextListeners();
                    nextListeners.delete(listenerId);
                    currentListeners = null;
                };
            }
            function dispatch(action) {
                if (!redux_isPlainObject(action)) throw new Error(true ? formatProdErrorMessage(7) : 0);
                if (typeof action.type === "undefined") throw new Error(true ? formatProdErrorMessage(8) : 0);
                if (typeof action.type !== "string") throw new Error(true ? formatProdErrorMessage(17) : 0);
                if (isDispatching) throw new Error(true ? formatProdErrorMessage(9) : 0);
                try {
                    isDispatching = true;
                    currentState = currentReducer(currentState, action);
                } finally {
                    isDispatching = false;
                }
                const listeners = currentListeners = nextListeners;
                listeners.forEach((listener => {
                    listener();
                }));
                return action;
            }
            function replaceReducer(nextReducer) {
                if (typeof nextReducer !== "function") throw new Error(true ? formatProdErrorMessage(10) : 0);
                currentReducer = nextReducer;
                dispatch({
                    type: actionTypes_default.REPLACE
                });
            }
            function observable() {
                const outerSubscribe = subscribe;
                return {
                    subscribe(observer) {
                        if (typeof observer !== "object" || observer === null) throw new Error(true ? formatProdErrorMessage(11) : 0);
                        function observeState() {
                            const observerAsObserver = observer;
                            if (observerAsObserver.next) observerAsObserver.next(getState());
                        }
                        observeState();
                        const unsubscribe = outerSubscribe(observeState);
                        return {
                            unsubscribe
                        };
                    },
                    [symbol_observable_default]() {
                        return this;
                    }
                };
            }
            dispatch({
                type: actionTypes_default.INIT
            });
            const store = {
                dispatch,
                subscribe,
                getState,
                replaceReducer,
                [symbol_observable_default]: observable
            };
            return store;
        }
        function assertReducerShape(reducers) {
            Object.keys(reducers).forEach((key => {
                const reducer = reducers[key];
                const initialState = reducer(void 0, {
                    type: actionTypes_default.INIT
                });
                if (typeof initialState === "undefined") throw new Error(true ? formatProdErrorMessage(12) : 0);
                if (typeof reducer(void 0, {
                    type: actionTypes_default.PROBE_UNKNOWN_ACTION()
                }) === "undefined") throw new Error(true ? formatProdErrorMessage(13) : 0);
            }));
        }
        function combineReducers(reducers) {
            const reducerKeys = Object.keys(reducers);
            const finalReducers = {};
            for (let i = 0; i < reducerKeys.length; i++) {
                const key = reducerKeys[i];
                if (false) ;
                if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
            }
            const finalReducerKeys = Object.keys(finalReducers);
            if (false) ;
            let shapeAssertionError;
            try {
                assertReducerShape(finalReducers);
            } catch (e) {
                shapeAssertionError = e;
            }
            return function combination(state = {}, action) {
                if (shapeAssertionError) throw shapeAssertionError;
                if (false) ;
                let hasChanged = false;
                const nextState = {};
                for (let i = 0; i < finalReducerKeys.length; i++) {
                    const key = finalReducerKeys[i];
                    const reducer = finalReducers[key];
                    const previousStateForKey = state[key];
                    const nextStateForKey = reducer(previousStateForKey, action);
                    if (typeof nextStateForKey === "undefined") {
                        action && action.type;
                        throw new Error(true ? formatProdErrorMessage(14) : 0);
                    }
                    nextState[key] = nextStateForKey;
                    hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                }
                hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
                return hasChanged ? nextState : state;
            };
        }
        function compose(...funcs) {
            if (funcs.length === 0) return arg => arg;
            if (funcs.length === 1) return funcs[0];
            return funcs.reduce(((a, b) => (...args) => a(b(...args))));
        }
        function applyMiddleware(...middlewares) {
            return createStore2 => (reducer, preloadedState) => {
                const store = createStore2(reducer, preloadedState);
                let dispatch = () => {
                    throw new Error(true ? formatProdErrorMessage(15) : 0);
                };
                const middlewareAPI = {
                    getState: store.getState,
                    dispatch: (action, ...args) => dispatch(action, ...args)
                };
                const chain = middlewares.map((middleware => middleware(middlewareAPI)));
                dispatch = compose(...chain)(store.dispatch);
                return {
                    ...store,
                    dispatch
                };
            };
        }
        function redux_isAction(action) {
            return redux_isPlainObject(action) && "type" in action && typeof action.type === "string";
        }
        function createThunkMiddleware(extraArgument) {
            const middleware = ({dispatch, getState}) => next => action => {
                if (typeof action === "function") return action(dispatch, getState, extraArgument);
                return next(action);
            };
            return middleware;
        }
        var redux_thunk_thunk = createThunkMiddleware();
        var withExtraArgument = createThunkMiddleware;
        var NOTHING = Symbol.for("immer-nothing");
        var DRAFTABLE = Symbol.for("immer-draftable");
        var DRAFT_STATE = Symbol.for("immer-state");
        function die(error, ...args) {
            if (false) ;
            throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
        }
        var immer_getPrototypeOf = Object.getPrototypeOf;
        function immer_isDraft(value) {
            return !!value && !!value[DRAFT_STATE];
        }
        function isDraftable(value) {
            if (!value) return false;
            return immer_isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
        }
        var objectCtorString = Object.prototype.constructor.toString();
        function immer_isPlainObject(value) {
            if (!value || typeof value !== "object") return false;
            const proto = immer_getPrototypeOf(value);
            if (proto === null) return true;
            const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
            if (Ctor === Object) return true;
            return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
        }
        function each(obj, iter) {
            if (getArchtype(obj) === 0) Reflect.ownKeys(obj).forEach((key => {
                iter(key, obj[key], obj);
            })); else obj.forEach(((entry, index) => iter(index, entry, obj)));
        }
        function getArchtype(thing) {
            const state = thing[DRAFT_STATE];
            return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
        }
        function has(thing, prop) {
            return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
        }
        function set(thing, propOrOldValue, value) {
            const t = getArchtype(thing);
            if (t === 2) thing.set(propOrOldValue, value); else if (t === 3) thing.add(value); else thing[propOrOldValue] = value;
        }
        function immer_is(x, y) {
            if (x === y) return x !== 0 || 1 / x === 1 / y; else return x !== x && y !== y;
        }
        function isMap(target) {
            return target instanceof Map;
        }
        function isSet(target) {
            return target instanceof Set;
        }
        function latest(state) {
            return state.copy_ || state.base_;
        }
        function shallowCopy(base, strict) {
            if (isMap(base)) return new Map(base);
            if (isSet(base)) return new Set(base);
            if (Array.isArray(base)) return Array.prototype.slice.call(base);
            const isPlain = immer_isPlainObject(base);
            if (strict === true || strict === "class_only" && !isPlain) {
                const descriptors = Object.getOwnPropertyDescriptors(base);
                delete descriptors[DRAFT_STATE];
                let keys = Reflect.ownKeys(descriptors);
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    const desc = descriptors[key];
                    if (desc.writable === false) {
                        desc.writable = true;
                        desc.configurable = true;
                    }
                    if (desc.get || desc.set) descriptors[key] = {
                        configurable: true,
                        writable: true,
                        enumerable: desc.enumerable,
                        value: base[key]
                    };
                }
                return Object.create(immer_getPrototypeOf(base), descriptors);
            } else {
                const proto = immer_getPrototypeOf(base);
                if (proto !== null && isPlain) return {
                    ...base
                };
                const obj = Object.create(proto);
                return Object.assign(obj, base);
            }
        }
        function freeze(obj, deep = false) {
            if (isFrozen(obj) || immer_isDraft(obj) || !isDraftable(obj)) return obj;
            if (getArchtype(obj) > 1) obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
            Object.freeze(obj);
            if (deep) Object.entries(obj).forEach((([key, value]) => freeze(value, true)));
            return obj;
        }
        function dontMutateFrozenCollections() {
            die(2);
        }
        function isFrozen(obj) {
            return Object.isFrozen(obj);
        }
        var plugins = {};
        function getPlugin(pluginKey) {
            const plugin = plugins[pluginKey];
            if (!plugin) die(0, pluginKey);
            return plugin;
        }
        var currentScope;
        function getCurrentScope() {
            return currentScope;
        }
        function createScope(parent_, immer_) {
            return {
                drafts_: [],
                parent_,
                immer_,
                canAutoFreeze_: true,
                unfinalizedDrafts_: 0
            };
        }
        function usePatchesInScope(scope, patchListener) {
            if (patchListener) {
                getPlugin("Patches");
                scope.patches_ = [];
                scope.inversePatches_ = [];
                scope.patchListener_ = patchListener;
            }
        }
        function revokeScope(scope) {
            leaveScope(scope);
            scope.drafts_.forEach(revokeDraft);
            scope.drafts_ = null;
        }
        function leaveScope(scope) {
            if (scope === currentScope) currentScope = scope.parent_;
        }
        function enterScope(immer2) {
            return currentScope = createScope(currentScope, immer2);
        }
        function revokeDraft(draft) {
            const state = draft[DRAFT_STATE];
            if (state.type_ === 0 || state.type_ === 1) state.revoke_(); else state.revoked_ = true;
        }
        function processResult(result, scope) {
            scope.unfinalizedDrafts_ = scope.drafts_.length;
            const baseDraft = scope.drafts_[0];
            const isReplaced = result !== void 0 && result !== baseDraft;
            if (isReplaced) {
                if (baseDraft[DRAFT_STATE].modified_) {
                    revokeScope(scope);
                    die(4);
                }
                if (isDraftable(result)) {
                    result = finalize(scope, result);
                    if (!scope.parent_) maybeFreeze(scope, result);
                }
                if (scope.patches_) getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
            } else result = finalize(scope, baseDraft, []);
            revokeScope(scope);
            if (scope.patches_) scope.patchListener_(scope.patches_, scope.inversePatches_);
            return result !== NOTHING ? result : void 0;
        }
        function finalize(rootScope, value, path) {
            if (isFrozen(value)) return value;
            const state = value[DRAFT_STATE];
            if (!state) {
                each(value, ((key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)));
                return value;
            }
            if (state.scope_ !== rootScope) return value;
            if (!state.modified_) {
                maybeFreeze(rootScope, state.base_, true);
                return state.base_;
            }
            if (!state.finalized_) {
                state.finalized_ = true;
                state.scope_.unfinalizedDrafts_--;
                const result = state.copy_;
                let resultEach = result;
                let isSet2 = false;
                if (state.type_ === 3) {
                    resultEach = new Set(result);
                    result.clear();
                    isSet2 = true;
                }
                each(resultEach, ((key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)));
                maybeFreeze(rootScope, result, false);
                if (path && rootScope.patches_) getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
            }
            return state.copy_;
        }
        function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
            if (false) ;
            if (immer_isDraft(childValue)) {
                const path = rootPath && parentState && parentState.type_ !== 3 && !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
                const res = finalize(rootScope, childValue, path);
                set(targetObject, prop, res);
                if (immer_isDraft(res)) rootScope.canAutoFreeze_ = false; else return;
            } else if (targetIsSet) targetObject.add(childValue);
            if (isDraftable(childValue) && !isFrozen(childValue)) {
                if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) return;
                finalize(rootScope, childValue);
                if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop)) maybeFreeze(rootScope, childValue);
            }
        }
        function maybeFreeze(scope, value, deep = false) {
            if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) freeze(value, deep);
        }
        function createProxyProxy(base, parent) {
            const isArray = Array.isArray(base);
            const state = {
                type_: isArray ? 1 : 0,
                scope_: parent ? parent.scope_ : getCurrentScope(),
                modified_: false,
                finalized_: false,
                assigned_: {},
                parent_: parent,
                base_: base,
                draft_: null,
                copy_: null,
                revoke_: null,
                isManual_: false
            };
            let target = state;
            let traps = objectTraps;
            if (isArray) {
                target = [ state ];
                traps = arrayTraps;
            }
            const {revoke, proxy} = Proxy.revocable(target, traps);
            state.draft_ = proxy;
            state.revoke_ = revoke;
            return proxy;
        }
        var objectTraps = {
            get(state, prop) {
                if (prop === DRAFT_STATE) return state;
                const source = latest(state);
                if (!has(source, prop)) return readPropFromProto(state, source, prop);
                const value = source[prop];
                if (state.finalized_ || !isDraftable(value)) return value;
                if (value === peek(state.base_, prop)) {
                    prepareCopy(state);
                    return state.copy_[prop] = createProxy(value, state);
                }
                return value;
            },
            has(state, prop) {
                return prop in latest(state);
            },
            ownKeys(state) {
                return Reflect.ownKeys(latest(state));
            },
            set(state, prop, value) {
                const desc = getDescriptorFromProto(latest(state), prop);
                if (desc?.set) {
                    desc.set.call(state.draft_, value);
                    return true;
                }
                if (!state.modified_) {
                    const current2 = peek(latest(state), prop);
                    const currentState = current2?.[DRAFT_STATE];
                    if (currentState && currentState.base_ === value) {
                        state.copy_[prop] = value;
                        state.assigned_[prop] = false;
                        return true;
                    }
                    if (immer_is(value, current2) && (value !== void 0 || has(state.base_, prop))) return true;
                    prepareCopy(state);
                    markChanged(state);
                }
                if (state.copy_[prop] === value && (value !== void 0 || prop in state.copy_) || Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
                state.copy_[prop] = value;
                state.assigned_[prop] = true;
                return true;
            },
            deleteProperty(state, prop) {
                if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
                    state.assigned_[prop] = false;
                    prepareCopy(state);
                    markChanged(state);
                } else delete state.assigned_[prop];
                if (state.copy_) delete state.copy_[prop];
                return true;
            },
            getOwnPropertyDescriptor(state, prop) {
                const owner = latest(state);
                const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
                if (!desc) return desc;
                return {
                    writable: true,
                    configurable: state.type_ !== 1 || prop !== "length",
                    enumerable: desc.enumerable,
                    value: owner[prop]
                };
            },
            defineProperty() {
                die(11);
            },
            getPrototypeOf(state) {
                return immer_getPrototypeOf(state.base_);
            },
            setPrototypeOf() {
                die(12);
            }
        };
        var arrayTraps = {};
        each(objectTraps, ((key, fn) => {
            arrayTraps[key] = function() {
                arguments[0] = arguments[0][0];
                return fn.apply(this, arguments);
            };
        }));
        arrayTraps.deleteProperty = function(state, prop) {
            if (false) ;
            return arrayTraps.set.call(this, state, prop, void 0);
        };
        arrayTraps.set = function(state, prop, value) {
            if (false) ;
            return objectTraps.set.call(this, state[0], prop, value, state[0]);
        };
        function peek(draft, prop) {
            const state = draft[DRAFT_STATE];
            const source = state ? latest(state) : draft;
            return source[prop];
        }
        function readPropFromProto(state, source, prop) {
            const desc = getDescriptorFromProto(source, prop);
            return desc ? `value` in desc ? desc.value : desc.get?.call(state.draft_) : void 0;
        }
        function getDescriptorFromProto(source, prop) {
            if (!(prop in source)) return;
            let proto = immer_getPrototypeOf(source);
            while (proto) {
                const desc = Object.getOwnPropertyDescriptor(proto, prop);
                if (desc) return desc;
                proto = immer_getPrototypeOf(proto);
            }
            return;
        }
        function markChanged(state) {
            if (!state.modified_) {
                state.modified_ = true;
                if (state.parent_) markChanged(state.parent_);
            }
        }
        function prepareCopy(state) {
            if (!state.copy_) state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
        }
        var Immer2 = class {
            constructor(config) {
                this.autoFreeze_ = true;
                this.useStrictShallowCopy_ = false;
                this.produce = (base, recipe, patchListener) => {
                    if (typeof base === "function" && typeof recipe !== "function") {
                        const defaultBase = recipe;
                        recipe = base;
                        const self = this;
                        return function curriedProduce(base2 = defaultBase, ...args) {
                            return self.produce(base2, (draft => recipe.call(this, draft, ...args)));
                        };
                    }
                    if (typeof recipe !== "function") die(6);
                    if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
                    let result;
                    if (isDraftable(base)) {
                        const scope = enterScope(this);
                        const proxy = createProxy(base, void 0);
                        let hasError = true;
                        try {
                            result = recipe(proxy);
                            hasError = false;
                        } finally {
                            if (hasError) revokeScope(scope); else leaveScope(scope);
                        }
                        usePatchesInScope(scope, patchListener);
                        return processResult(result, scope);
                    } else if (!base || typeof base !== "object") {
                        result = recipe(base);
                        if (result === void 0) result = base;
                        if (result === NOTHING) result = void 0;
                        if (this.autoFreeze_) freeze(result, true);
                        if (patchListener) {
                            const p = [];
                            const ip = [];
                            getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
                            patchListener(p, ip);
                        }
                        return result;
                    } else die(1, base);
                };
                this.produceWithPatches = (base, recipe) => {
                    if (typeof base === "function") return (state, ...args) => this.produceWithPatches(state, (draft => base(draft, ...args)));
                    let patches, inversePatches;
                    const result = this.produce(base, recipe, ((p, ip) => {
                        patches = p;
                        inversePatches = ip;
                    }));
                    return [ result, patches, inversePatches ];
                };
                if (typeof config?.autoFreeze === "boolean") this.setAutoFreeze(config.autoFreeze);
                if (typeof config?.useStrictShallowCopy === "boolean") this.setUseStrictShallowCopy(config.useStrictShallowCopy);
            }
            createDraft(base) {
                if (!isDraftable(base)) die(8);
                if (immer_isDraft(base)) base = immer_current(base);
                const scope = enterScope(this);
                const proxy = createProxy(base, void 0);
                proxy[DRAFT_STATE].isManual_ = true;
                leaveScope(scope);
                return proxy;
            }
            finishDraft(draft, patchListener) {
                const state = draft && draft[DRAFT_STATE];
                if (!state || !state.isManual_) die(9);
                const {scope_: scope} = state;
                usePatchesInScope(scope, patchListener);
                return processResult(void 0, scope);
            }
            setAutoFreeze(value) {
                this.autoFreeze_ = value;
            }
            setUseStrictShallowCopy(value) {
                this.useStrictShallowCopy_ = value;
            }
            applyPatches(base, patches) {
                let i;
                for (i = patches.length - 1; i >= 0; i--) {
                    const patch = patches[i];
                    if (patch.path.length === 0 && patch.op === "replace") {
                        base = patch.value;
                        break;
                    }
                }
                if (i > -1) patches = patches.slice(i + 1);
                const applyPatchesImpl = getPlugin("Patches").applyPatches_;
                if (immer_isDraft(base)) return applyPatchesImpl(base, patches);
                return this.produce(base, (draft => applyPatchesImpl(draft, patches)));
            }
        };
        function createProxy(value, parent) {
            const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
            const scope = parent ? parent.scope_ : getCurrentScope();
            scope.drafts_.push(draft);
            return draft;
        }
        function immer_current(value) {
            if (!immer_isDraft(value)) die(10, value);
            return currentImpl(value);
        }
        function currentImpl(value) {
            if (!isDraftable(value) || isFrozen(value)) return value;
            const state = value[DRAFT_STATE];
            let copy;
            if (state) {
                if (!state.modified_) return state.base_;
                state.finalized_ = true;
                copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
            } else copy = shallowCopy(value, true);
            each(copy, ((key, childValue) => {
                set(copy, key, currentImpl(childValue));
            }));
            if (state) state.finalized_ = false;
            return copy;
        }
        var immer = new Immer2;
        var produce = immer.produce;
        immer.produceWithPatches.bind(immer);
        immer.setAutoFreeze.bind(immer);
        immer.setUseStrictShallowCopy.bind(immer);
        immer.applyPatches.bind(immer);
        immer.createDraft.bind(immer);
        immer.finishDraft.bind(immer);
        var createDraftSafeSelectorCreator = (...args) => {
            const createSelector2 = createSelectorCreator(...args);
            const createDraftSafeSelector2 = Object.assign(((...args2) => {
                const selector = createSelector2(...args2);
                const wrappedSelector = (value, ...rest) => selector(isDraft(value) ? current(value) : value, ...rest);
                Object.assign(wrappedSelector, selector);
                return wrappedSelector;
            }), {
                withTypes: () => createDraftSafeSelector2
            });
            return createDraftSafeSelector2;
        };
        null && createDraftSafeSelectorCreator(weakMapMemoize);
        var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
            if (arguments.length === 0) return;
            if (typeof arguments[0] === "object") return compose;
            return compose.apply(null, arguments);
        };
        typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
        var hasMatchFunction = v => v && typeof v.match === "function";
        function createAction(type, prepareAction) {
            function actionCreator(...args) {
                if (prepareAction) {
                    let prepared = prepareAction(...args);
                    if (!prepared) throw new Error(true ? redux_toolkit_modern_formatProdErrorMessage(0) : 0);
                    return {
                        type,
                        payload: prepared.payload,
                        ..."meta" in prepared && {
                            meta: prepared.meta
                        },
                        ..."error" in prepared && {
                            error: prepared.error
                        }
                    };
                }
                return {
                    type,
                    payload: args[0]
                };
            }
            actionCreator.toString = () => `${type}`;
            actionCreator.type = type;
            actionCreator.match = action => redux_isAction(action) && action.type === type;
            return actionCreator;
        }
        var Tuple = class _Tuple extends Array {
            constructor(...items) {
                super(...items);
                Object.setPrototypeOf(this, _Tuple.prototype);
            }
            static get [Symbol.species]() {
                return _Tuple;
            }
            concat(...arr) {
                return super.concat.apply(this, arr);
            }
            prepend(...arr) {
                if (arr.length === 1 && Array.isArray(arr[0])) return new _Tuple(...arr[0].concat(this));
                return new _Tuple(...arr.concat(this));
            }
        };
        function freezeDraftable(val) {
            return isDraftable(val) ? produce(val, (() => {})) : val;
        }
        function getOrInsertComputed(map, key, compute) {
            if (map.has(key)) return map.get(key);
            return map.set(key, compute(key)).get(key);
        }
        function isBoolean(x) {
            return typeof x === "boolean";
        }
        var buildGetDefaultMiddleware = () => function getDefaultMiddleware(options) {
            const {thunk = true, immutableCheck = true, serializableCheck = true, actionCreatorCheck = true} = options ?? {};
            let middlewareArray = new Tuple;
            if (thunk) if (isBoolean(thunk)) middlewareArray.push(redux_thunk_thunk); else middlewareArray.push(withExtraArgument(thunk.extraArgument));
            if (false) ;
            return middlewareArray;
        };
        var SHOULD_AUTOBATCH = "RTK_autoBatch";
        var createQueueWithTimer = timeout => notify => {
            setTimeout(notify, timeout);
        };
        var autoBatchEnhancer = (options = {
            type: "raf"
        }) => next => (...args) => {
            const store = next(...args);
            let notifying = true;
            let shouldNotifyAtEndOfTick = false;
            let notificationQueued = false;
            const listeners = new Set;
            const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10) : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
            const notifyListeners = () => {
                notificationQueued = false;
                if (shouldNotifyAtEndOfTick) {
                    shouldNotifyAtEndOfTick = false;
                    listeners.forEach((l => l()));
                }
            };
            return Object.assign({}, store, {
                subscribe(listener2) {
                    const wrappedListener = () => notifying && listener2();
                    const unsubscribe = store.subscribe(wrappedListener);
                    listeners.add(listener2);
                    return () => {
                        unsubscribe();
                        listeners.delete(listener2);
                    };
                },
                dispatch(action) {
                    try {
                        notifying = !action?.meta?.[SHOULD_AUTOBATCH];
                        shouldNotifyAtEndOfTick = !notifying;
                        if (shouldNotifyAtEndOfTick) if (!notificationQueued) {
                            notificationQueued = true;
                            queueCallback(notifyListeners);
                        }
                        return store.dispatch(action);
                    } finally {
                        notifying = true;
                    }
                }
            });
        };
        var buildGetDefaultEnhancers = middlewareEnhancer => function getDefaultEnhancers(options) {
            const {autoBatch = true} = options ?? {};
            let enhancerArray = new Tuple(middlewareEnhancer);
            if (autoBatch) enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
            return enhancerArray;
        };
        function configureStore(options) {
            const getDefaultMiddleware = buildGetDefaultMiddleware();
            const {reducer = void 0, middleware, devTools = true, preloadedState = void 0, enhancers = void 0} = options || {};
            let rootReducer;
            if (typeof reducer === "function") rootReducer = reducer; else if (redux_isPlainObject(reducer)) rootReducer = combineReducers(reducer); else throw new Error(true ? redux_toolkit_modern_formatProdErrorMessage(1) : 0);
            if (false) ;
            let finalMiddleware;
            if (typeof middleware === "function") {
                finalMiddleware = middleware(getDefaultMiddleware);
                if (false) ;
            } else finalMiddleware = getDefaultMiddleware();
            if (false) ;
            let finalCompose = compose;
            if (devTools) finalCompose = composeWithDevTools({
                trace: "production" !== "production",
                ...typeof devTools === "object" && devTools
            });
            const middlewareEnhancer = applyMiddleware(...finalMiddleware);
            const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
            if (false) ;
            let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
            if (false) ;
            if (false) ;
            if (false) ;
            const composedEnhancer = finalCompose(...storeEnhancers);
            return createStore(rootReducer, preloadedState, composedEnhancer);
        }
        function executeReducerBuilderCallback(builderCallback) {
            const actionsMap = {};
            const actionMatchers = [];
            let defaultCaseReducer;
            const builder = {
                addCase(typeOrActionCreator, reducer) {
                    if (false) ;
                    const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
                    if (!type) throw new Error(true ? redux_toolkit_modern_formatProdErrorMessage(28) : 0);
                    if (type in actionsMap) throw new Error(true ? redux_toolkit_modern_formatProdErrorMessage(29) : 0);
                    actionsMap[type] = reducer;
                    return builder;
                },
                addMatcher(matcher, reducer) {
                    if (false) ;
                    actionMatchers.push({
                        matcher,
                        reducer
                    });
                    return builder;
                },
                addDefaultCase(reducer) {
                    if (false) ;
                    defaultCaseReducer = reducer;
                    return builder;
                }
            };
            builderCallback(builder);
            return [ actionsMap, actionMatchers, defaultCaseReducer ];
        }
        function isStateFunction(x) {
            return typeof x === "function";
        }
        function createReducer(initialState, mapOrBuilderCallback) {
            if (false) ;
            let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
            let getInitialState;
            if (isStateFunction(initialState)) getInitialState = () => freezeDraftable(initialState()); else {
                const frozenInitialState = freezeDraftable(initialState);
                getInitialState = () => frozenInitialState;
            }
            function reducer(state = getInitialState(), action) {
                let caseReducers = [ actionsMap[action.type], ...finalActionMatchers.filter((({matcher}) => matcher(action))).map((({reducer: reducer2}) => reducer2)) ];
                if (caseReducers.filter((cr => !!cr)).length === 0) caseReducers = [ finalDefaultCaseReducer ];
                return caseReducers.reduce(((previousState, caseReducer) => {
                    if (caseReducer) if (immer_isDraft(previousState)) {
                        const draft = previousState;
                        const result = caseReducer(draft, action);
                        if (result === void 0) return previousState;
                        return result;
                    } else if (!isDraftable(previousState)) {
                        const result = caseReducer(previousState, action);
                        if (result === void 0) {
                            if (previousState === null) return previousState;
                            throw Error("A case reducer on a non-draftable value must not return undefined");
                        }
                        return result;
                    } else return produce(previousState, (draft => caseReducer(draft, action)));
                    return previousState;
                }), state);
            }
            reducer.getInitialState = getInitialState;
            return reducer;
        }
        var matches = (matcher, action) => {
            if (hasMatchFunction(matcher)) return matcher.match(action); else return matcher(action);
        };
        function isAnyOf(...matchers) {
            return action => matchers.some((matcher => matches(matcher, action)));
        }
        var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
        var nanoid = (size = 21) => {
            let id = "";
            let i = size;
            while (i--) id += urlAlphabet[Math.random() * 64 | 0];
            return id;
        };
        var commonProperties = [ "name", "message", "stack", "code" ];
        var RejectWithValue = class {
            constructor(payload, meta) {
                this.payload = payload;
                this.meta = meta;
            }
            _type;
        };
        var FulfillWithMeta = class {
            constructor(payload, meta) {
                this.payload = payload;
                this.meta = meta;
            }
            _type;
        };
        var miniSerializeError = value => {
            if (typeof value === "object" && value !== null) {
                const simpleError = {};
                for (const property of commonProperties) if (typeof value[property] === "string") simpleError[property] = value[property];
                return simpleError;
            }
            return {
                message: String(value)
            };
        };
        (() => {
            function createAsyncThunk2(typePrefix, payloadCreator, options) {
                const fulfilled = createAction(typePrefix + "/fulfilled", ((payload, requestId, arg, meta) => ({
                    payload,
                    meta: {
                        ...meta || {},
                        arg,
                        requestId,
                        requestStatus: "fulfilled"
                    }
                })));
                const pending = createAction(typePrefix + "/pending", ((requestId, arg, meta) => ({
                    payload: void 0,
                    meta: {
                        ...meta || {},
                        arg,
                        requestId,
                        requestStatus: "pending"
                    }
                })));
                const rejected = createAction(typePrefix + "/rejected", ((error, requestId, arg, payload, meta) => ({
                    payload,
                    error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
                    meta: {
                        ...meta || {},
                        arg,
                        requestId,
                        rejectedWithValue: !!payload,
                        requestStatus: "rejected",
                        aborted: error?.name === "AbortError",
                        condition: error?.name === "ConditionError"
                    }
                })));
                function actionCreator(arg) {
                    return (dispatch, getState, extra) => {
                        const requestId = options?.idGenerator ? options.idGenerator(arg) : nanoid();
                        const abortController = new AbortController;
                        let abortHandler;
                        let abortReason;
                        function abort(reason) {
                            abortReason = reason;
                            abortController.abort();
                        }
                        const promise = async function() {
                            let finalAction;
                            try {
                                let conditionResult = options?.condition?.(arg, {
                                    getState,
                                    extra
                                });
                                if (isThenable(conditionResult)) conditionResult = await conditionResult;
                                if (conditionResult === false || abortController.signal.aborted) throw {
                                    name: "ConditionError",
                                    message: "Aborted due to condition callback returning false."
                                };
                                const abortedPromise = new Promise(((_, reject) => {
                                    abortHandler = () => {
                                        reject({
                                            name: "AbortError",
                                            message: abortReason || "Aborted"
                                        });
                                    };
                                    abortController.signal.addEventListener("abort", abortHandler);
                                }));
                                dispatch(pending(requestId, arg, options?.getPendingMeta?.({
                                    requestId,
                                    arg
                                }, {
                                    getState,
                                    extra
                                })));
                                finalAction = await Promise.race([ abortedPromise, Promise.resolve(payloadCreator(arg, {
                                    dispatch,
                                    getState,
                                    extra,
                                    requestId,
                                    signal: abortController.signal,
                                    abort,
                                    rejectWithValue: (value, meta) => new RejectWithValue(value, meta),
                                    fulfillWithValue: (value, meta) => new FulfillWithMeta(value, meta)
                                })).then((result => {
                                    if (result instanceof RejectWithValue) throw result;
                                    if (result instanceof FulfillWithMeta) return fulfilled(result.payload, requestId, arg, result.meta);
                                    return fulfilled(result, requestId, arg);
                                })) ]);
                            } catch (err) {
                                finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
                            } finally {
                                if (abortHandler) abortController.signal.removeEventListener("abort", abortHandler);
                            }
                            const skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                            if (!skipDispatch) dispatch(finalAction);
                            return finalAction;
                        }();
                        return Object.assign(promise, {
                            abort,
                            requestId,
                            arg,
                            unwrap() {
                                return promise.then(unwrapResult);
                            }
                        });
                    };
                }
                return Object.assign(actionCreator, {
                    pending,
                    rejected,
                    fulfilled,
                    settled: isAnyOf(rejected, fulfilled),
                    typePrefix
                });
            }
            createAsyncThunk2.withTypes = () => createAsyncThunk2;
        })();
        function unwrapResult(action) {
            if (action.meta && action.meta.rejectedWithValue) throw action.payload;
            if (action.error) throw action.error;
            return action.payload;
        }
        function isThenable(value) {
            return value !== null && typeof value === "object" && typeof value.then === "function";
        }
        var asyncThunkSymbol = Symbol.for("rtk-slice-createasyncthunk");
        var ReducerType = (ReducerType2 => {
            ReducerType2["reducer"] = "reducer";
            ReducerType2["reducerWithPrepare"] = "reducerWithPrepare";
            ReducerType2["asyncThunk"] = "asyncThunk";
            return ReducerType2;
        })(ReducerType || {});
        function getType(slice, actionKey) {
            return `${slice}/${actionKey}`;
        }
        function buildCreateSlice({creators} = {}) {
            const cAT = creators?.asyncThunk?.[asyncThunkSymbol];
            return function createSlice2(options) {
                const {name, reducerPath = name} = options;
                if (!name) throw new Error(true ? redux_toolkit_modern_formatProdErrorMessage(11) : 0);
                if (typeof process !== "undefined" && "production" === "development") ;
                const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
                const reducerNames = Object.keys(reducers);
                const context = {
                    sliceCaseReducersByName: {},
                    sliceCaseReducersByType: {},
                    actionCreators: {},
                    sliceMatchers: []
                };
                const contextMethods = {
                    addCase(typeOrActionCreator, reducer2) {
                        const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
                        if (!type) throw new Error(true ? redux_toolkit_modern_formatProdErrorMessage(12) : 0);
                        if (type in context.sliceCaseReducersByType) throw new Error(true ? redux_toolkit_modern_formatProdErrorMessage(13) : 0);
                        context.sliceCaseReducersByType[type] = reducer2;
                        return contextMethods;
                    },
                    addMatcher(matcher, reducer2) {
                        context.sliceMatchers.push({
                            matcher,
                            reducer: reducer2
                        });
                        return contextMethods;
                    },
                    exposeAction(name2, actionCreator) {
                        context.actionCreators[name2] = actionCreator;
                        return contextMethods;
                    },
                    exposeCaseReducer(name2, reducer2) {
                        context.sliceCaseReducersByName[name2] = reducer2;
                        return contextMethods;
                    }
                };
                reducerNames.forEach((reducerName => {
                    const reducerDefinition = reducers[reducerName];
                    const reducerDetails = {
                        reducerName,
                        type: getType(name, reducerName),
                        createNotation: typeof options.reducers === "function"
                    };
                    if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT); else handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
                }));
                function buildReducer() {
                    if (false) ;
                    const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [ options.extraReducers ];
                    const finalCaseReducers = {
                        ...extraReducers,
                        ...context.sliceCaseReducersByType
                    };
                    return createReducer(options.initialState, (builder => {
                        for (let key in finalCaseReducers) builder.addCase(key, finalCaseReducers[key]);
                        for (let sM of context.sliceMatchers) builder.addMatcher(sM.matcher, sM.reducer);
                        for (let m of actionMatchers) builder.addMatcher(m.matcher, m.reducer);
                        if (defaultCaseReducer) builder.addDefaultCase(defaultCaseReducer);
                    }));
                }
                const selectSelf = state => state;
                const injectedSelectorCache = new Map;
                let _reducer;
                function reducer(state, action) {
                    if (!_reducer) _reducer = buildReducer();
                    return _reducer(state, action);
                }
                function getInitialState() {
                    if (!_reducer) _reducer = buildReducer();
                    return _reducer.getInitialState();
                }
                function makeSelectorProps(reducerPath2, injected = false) {
                    function selectSlice(state) {
                        let sliceState = state[reducerPath2];
                        if (typeof sliceState === "undefined") if (injected) sliceState = getInitialState(); else if (false) ;
                        return sliceState;
                    }
                    function getSelectors(selectState = selectSelf) {
                        const selectorCache = getOrInsertComputed(injectedSelectorCache, injected, (() => new WeakMap));
                        return getOrInsertComputed(selectorCache, selectState, (() => {
                            const map = {};
                            for (const [name2, selector] of Object.entries(options.selectors ?? {})) map[name2] = wrapSelector(selector, selectState, getInitialState, injected);
                            return map;
                        }));
                    }
                    return {
                        reducerPath: reducerPath2,
                        getSelectors,
                        get selectors() {
                            return getSelectors(selectSlice);
                        },
                        selectSlice
                    };
                }
                const slice = {
                    name,
                    reducer,
                    actions: context.actionCreators,
                    caseReducers: context.sliceCaseReducersByName,
                    getInitialState,
                    ...makeSelectorProps(reducerPath),
                    injectInto(injectable, {reducerPath: pathOpt, ...config} = {}) {
                        const newReducerPath = pathOpt ?? reducerPath;
                        injectable.inject({
                            reducerPath: newReducerPath,
                            reducer
                        }, config);
                        return {
                            ...slice,
                            ...makeSelectorProps(newReducerPath, true)
                        };
                    }
                };
                return slice;
            };
        }
        function wrapSelector(selector, selectState, getInitialState, injected) {
            function wrapper(rootState, ...args) {
                let sliceState = selectState(rootState);
                if (typeof sliceState === "undefined") if (injected) sliceState = getInitialState(); else if (false) ;
                return selector(sliceState, ...args);
            }
            wrapper.unwrapped = selector;
            return wrapper;
        }
        var createSlice = buildCreateSlice();
        function buildReducerCreators() {
            function asyncThunk(payloadCreator, config) {
                return {
                    _reducerDefinitionType: "asyncThunk",
                    payloadCreator,
                    ...config
                };
            }
            asyncThunk.withTypes = () => asyncThunk;
            return {
                reducer(caseReducer) {
                    return Object.assign({
                        [caseReducer.name](...args) {
                            return caseReducer(...args);
                        }
                    }[caseReducer.name], {
                        _reducerDefinitionType: "reducer"
                    });
                },
                preparedReducer(prepare, reducer) {
                    return {
                        _reducerDefinitionType: "reducerWithPrepare",
                        prepare,
                        reducer
                    };
                },
                asyncThunk
            };
        }
        function handleNormalReducerDefinition({type, reducerName, createNotation}, maybeReducerWithPrepare, context) {
            let caseReducer;
            let prepareCallback;
            if ("reducer" in maybeReducerWithPrepare) {
                if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) throw new Error(true ? redux_toolkit_modern_formatProdErrorMessage(17) : 0);
                caseReducer = maybeReducerWithPrepare.reducer;
                prepareCallback = maybeReducerWithPrepare.prepare;
            } else caseReducer = maybeReducerWithPrepare;
            context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
        }
        function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
            return reducerDefinition._reducerDefinitionType === "asyncThunk";
        }
        function isCaseReducerWithPrepareDefinition(reducerDefinition) {
            return reducerDefinition._reducerDefinitionType === "reducerWithPrepare";
        }
        function handleThunkCaseReducerDefinition({type, reducerName}, reducerDefinition, context, cAT) {
            if (!cAT) throw new Error(true ? redux_toolkit_modern_formatProdErrorMessage(18) : 0);
            const {payloadCreator, fulfilled, pending, rejected, settled, options} = reducerDefinition;
            const thunk = cAT(type, payloadCreator, options);
            context.exposeAction(reducerName, thunk);
            if (fulfilled) context.addCase(thunk.fulfilled, fulfilled);
            if (pending) context.addCase(thunk.pending, pending);
            if (rejected) context.addCase(thunk.rejected, rejected);
            if (settled) context.addMatcher(thunk.settled, settled);
            context.exposeCaseReducer(reducerName, {
                fulfilled: fulfilled || noop,
                pending: pending || noop,
                rejected: rejected || noop,
                settled: settled || noop
            });
        }
        function noop() {}
        null && isDraft3;
        var assertFunction = (func, expected) => {
            if (typeof func !== "function") throw new TypeError(true ? redux_toolkit_modern_formatProdErrorMessage(32) : 0);
        };
        var {assign: redux_toolkit_modern_assign} = Object;
        var alm = "listenerMiddleware";
        var getListenerEntryPropsFrom = options => {
            let {type, actionCreator, matcher, predicate, effect} = options;
            if (type) predicate = createAction(type).match; else if (actionCreator) {
                type = actionCreator.type;
                predicate = actionCreator.match;
            } else if (matcher) predicate = matcher; else if (predicate) ; else throw new Error(true ? redux_toolkit_modern_formatProdErrorMessage(21) : 0);
            assertFunction(effect, "options.listener");
            return {
                predicate,
                type,
                effect
            };
        };
        var createListenerEntry = redux_toolkit_modern_assign((options => {
            const {type, predicate, effect} = getListenerEntryPropsFrom(options);
            const entry = {
                id: nanoid(),
                effect,
                type,
                predicate,
                pending: new Set,
                unsubscribe: () => {
                    throw new Error(true ? redux_toolkit_modern_formatProdErrorMessage(22) : 0);
                }
            };
            return entry;
        }), {
            withTypes: () => createListenerEntry
        });
        var addListener = redux_toolkit_modern_assign(createAction(`${alm}/add`), {
            withTypes: () => addListener
        });
        null && createAction(`${alm}/removeAll`);
        var removeListener = redux_toolkit_modern_assign(createAction(`${alm}/remove`), {
            withTypes: () => removeListener
        });
        Symbol.for("rtk-state-proxy-original");
        new WeakMap;
        function redux_toolkit_modern_formatProdErrorMessage(code) {
            return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
        }
        const initialState = {
            username: null,
            admin: false
        };
        const userSlice = createSlice({
            name: "user",
            initialState,
            reducers: {
                initUser: (state, action) => {
                    state.username = action.payload.username, state.admin = action.payload.admin;
                },
                logoutUser: state => {
                    state.username = null, state.admin = false;
                }
            }
        });
        const {initUser, logoutUser} = userSlice.actions;
        const user_userSlice = userSlice.reducer;
        function useToken_slicedToArray(r, e) {
            return useToken_arrayWithHoles(r) || useToken_iterableToArrayLimit(r, e) || useToken_unsupportedIterableToArray(r, e) || useToken_nonIterableRest();
        }
        function useToken_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function useToken_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return useToken_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? useToken_arrayLikeToArray(r, a) : void 0;
            }
        }
        function useToken_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function useToken_iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function useToken_arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        function useToken() {
            var dispatch = useDispatch();
            var _useState = (0, react.useState)(getToken()), _useState2 = useToken_slicedToArray(_useState, 2), token = _useState2[0], setToken = _useState2[1];
            function getToken() {
                var name = "token=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var cookieArray = decodedCookie.split(";");
                for (var i = 0; i < cookieArray.length; i++) {
                    var cookie = cookieArray[i].trim();
                    if (cookie.indexOf(name) === 0) {
                        var _token = cookie.substring(name.length, cookie.length);
                        var decodedToken = jwtDecode(_token);
                        dispatch(initUser({
                            username: decodedToken.sub.username,
                            admin: decodedToken.sub.admin
                        }));
                        return _token;
                    }
                }
                return null;
            }
            function saveToken(userToken) {
                var d = new Date;
                d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1e3);
                var expires = "expires=" + d.toUTCString();
                var decodedToken = jwtDecode(userToken);
                dispatch(initUser({
                    username: decodedToken.sub.username,
                    admin: decodedToken.sub.admin
                }));
                document.cookie = "token=".concat(userToken, ";").concat(expires, ";path=/");
                setToken(userToken);
            }
            function removeToken() {
                document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                dispatch(logoutUser());
                setToken(null);
            }
            return {
                setToken: saveToken,
                token,
                removeToken
            };
        }
        const functions_useToken = useToken;
        function OptionsDropdown_slicedToArray(r, e) {
            return OptionsDropdown_arrayWithHoles(r) || OptionsDropdown_iterableToArrayLimit(r, e) || OptionsDropdown_unsupportedIterableToArray(r, e) || OptionsDropdown_nonIterableRest();
        }
        function OptionsDropdown_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function OptionsDropdown_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return OptionsDropdown_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? OptionsDropdown_arrayLikeToArray(r, a) : void 0;
            }
        }
        function OptionsDropdown_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function OptionsDropdown_iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function OptionsDropdown_arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var OptionsDropdown = function OptionsDropdown(_ref) {
            var id = _ref.id, options = _ref.options, _ref$initValue = _ref.initValue, initValue = _ref$initValue === void 0 ? "Klein" : _ref$initValue;
            var _useState = (0, react.useState)(initValue), _useState2 = OptionsDropdown_slicedToArray(_useState, 2), selectedOption = _useState2[0], setSelectedOption = _useState2[1];
            var _useContext = (0, react.useContext)(CartContext), handleChangeOption = _useContext.handleChangeOption;
            (0, react.useEffect)((function() {
                handleChangeOption(id, selectedOption);
            }), [ selectedOption ]);
            var handleSelectChange = function handleSelectChange(event) {
                setSelectedOption(event.target.value);
            };
            return react.createElement(react.Fragment, null, react.createElement("label", {
                className: "list__select select",
                htmlFor: "slct"
            }, react.createElement("select", {
                id: "slct",
                value: selectedOption,
                onChange: handleSelectChange,
                required: true
            }, react.createElement("option", {
                value: "",
                disabled: true
            }, "Select option"), options.map((function(optionObj) {
                var optionKey = Object.keys(optionObj)[0];
                return react.createElement("option", {
                    key: optionKey,
                    value: optionKey
                }, optionKey);
            }))), react.createElement("svg", null, react.createElement("use", {
                xlinkHref: "#select-arrow-down"
            }))), react.createElement("svg", {
                className: "sprites"
            }, react.createElement("symbol", {
                id: "select-arrow-down",
                viewBox: "0 0 10 6"
            }, react.createElement("polyline", {
                points: "1 1 5 5 9 1"
            }))));
        };
        const default_OptionsDropdown = OptionsDropdown;
        function CustomCheckBox_typeof(o) {
            "@babel/helpers - typeof";
            return CustomCheckBox_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o;
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            }, CustomCheckBox_typeof(o);
        }
        function CustomCheckBox_ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                r && (o = o.filter((function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                }))), t.push.apply(t, o);
            }
            return t;
        }
        function CustomCheckBox_objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? CustomCheckBox_ownKeys(Object(t), !0).forEach((function(r) {
                    CustomCheckBox_defineProperty(e, r, t[r]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : CustomCheckBox_ownKeys(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }));
            }
            return e;
        }
        function CustomCheckBox_defineProperty(e, r, t) {
            return (r = CustomCheckBox_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e;
        }
        function CustomCheckBox_toPropertyKey(t) {
            var i = CustomCheckBox_toPrimitive(t, "string");
            return "symbol" == CustomCheckBox_typeof(i) ? i : i + "";
        }
        function CustomCheckBox_toPrimitive(t, r) {
            if ("object" != CustomCheckBox_typeof(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var i = e.call(t, r || "default");
                if ("object" != CustomCheckBox_typeof(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(t);
        }
        function CustomCheckBox_slicedToArray(r, e) {
            return CustomCheckBox_arrayWithHoles(r) || CustomCheckBox_iterableToArrayLimit(r, e) || CustomCheckBox_unsupportedIterableToArray(r, e) || CustomCheckBox_nonIterableRest();
        }
        function CustomCheckBox_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function CustomCheckBox_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return CustomCheckBox_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? CustomCheckBox_arrayLikeToArray(r, a) : void 0;
            }
        }
        function CustomCheckBox_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function CustomCheckBox_iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function CustomCheckBox_arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var CustomCheckBox = function CustomCheckBox(_ref) {
            var id = _ref.id, sauces = _ref.sauces;
            var _useState = (0, react.useState)(sauces), _useState2 = CustomCheckBox_slicedToArray(_useState, 2), checkedState = _useState2[0], setCheckedState = _useState2[1];
            var _useContext = (0, react.useContext)(CartContext), handleSauceSelection = _useContext.handleSauceSelection;
            (0, react.useEffect)((function() {
                handleSauceSelection(id, checkedState);
            }), [ checkedState ]);
            var handleCheckboxChange = function handleCheckboxChange(e) {
                var inputElement = e.currentTarget.querySelector("input");
                var name = inputElement.name;
                var newCheckedState = !checkedState[name];
                setCheckedState((function(prevState) {
                    return CustomCheckBox_objectSpread(CustomCheckBox_objectSpread({}, prevState), {}, CustomCheckBox_defineProperty({}, name, newCheckedState));
                }));
            };
            return react.createElement("div", {
                className: "customCheckBoxHolder"
            }, Object.keys(checkedState).map((function(sauce) {
                return react.createElement("div", {
                    className: "customCheckBoxBody",
                    onClick: handleCheckboxChange,
                    key: sauce
                }, react.createElement("input", {
                    className: "customCheckBoxInput",
                    name: sauce,
                    type: "checkbox",
                    checked: checkedState[sauce],
                    onChange: function onChange() {}
                }), react.createElement("label", {
                    className: "customCheckBoxWrapper",
                    htmlFor: sauce
                }, react.createElement("div", {
                    className: "customCheckBox"
                }, react.createElement("div", {
                    className: "inner"
                }, sauce === "herbs" ? "Kräuter" : sauce === "garlic" ? "Knoblauch" : "Scharf"))));
            })));
        };
        const default_CustomCheckBox = CustomCheckBox;
        var Quantity = function Quantity(_ref) {
            var parentClass = _ref.parentClass, item = _ref.item, _ref$isDisabled = _ref.isDisabled, isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled;
            var _useContext = (0, react.useContext)(CartContext), updateCart = _useContext.updateCart;
            var decreaseQuantity = function decreaseQuantity(dish, currentQuantity) {
                if (currentQuantity > 1) updateCart(dish, null, currentQuantity - 1);
            };
            var increaseQuantity = function increaseQuantity(dish, currentQuantity) {
                updateCart(dish, null, currentQuantity + 1);
            };
            return react.createElement("div", {
                className: "".concat(parentClass, "__quantity quantity")
            }, react.createElement(Link, {
                to: "#",
                onClick: function onClick() {
                    return decreaseQuantity(item, item.quantity);
                },
                className: "quantity__minus ".concat(isDisabled ? "disabled" : "")
            }, react.createElement("span", null, "-")), react.createElement("input", {
                name: "quantity",
                type: "text",
                className: "quantity__input",
                value: item.quantity,
                readOnly: true
            }), react.createElement(Link, {
                to: "#",
                onClick: function onClick() {
                    return increaseQuantity(item, item.quantity);
                },
                className: "quantity__plus ".concat(isDisabled ? "disabled" : "")
            }, react.createElement("span", null, "+")));
        };
        const default_Quantity = Quantity;
        const img_delete = __webpack_require__.p + "../img/b9f07c2e2ee7bbcb538d1c1c6ff66bb4.svg";
        var DeleteButton = function DeleteButton(_ref) {
            var parentClass = _ref.parentClass, dish = _ref.dish;
            var _useContext = (0, react.useContext)(CartContext), removeFromCart = _useContext.removeFromCart;
            return react.createElement("button", {
                className: "".concat(parentClass, "__delete"),
                onClick: function onClick() {
                    return removeFromCart(dish);
                }
            }, react.createElement("img", {
                src: img_delete,
                alt: "delete"
            }));
        };
        const default_DeleteButton = DeleteButton;
        function Cart_slicedToArray(r, e) {
            return Cart_arrayWithHoles(r) || Cart_iterableToArrayLimit(r, e) || Cart_unsupportedIterableToArray(r, e) || Cart_nonIterableRest();
        }
        function Cart_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Cart_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return Cart_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Cart_arrayLikeToArray(r, a) : void 0;
            }
        }
        function Cart_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function Cart_iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function Cart_arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var Cart = function Cart(props) {
            var _useContext = (0, react.useContext)(CartContext), cart = _useContext.cart, totalPrice = _useContext.totalPrice, clearCart = _useContext.clearCart;
            var _useState = (0, react.useState)(0), _useState2 = Cart_slicedToArray(_useState, 2), balance = _useState2[0], setBalance = _useState2[1];
            var _useFetch = (0, useFetch.A)(props.token, props.setToken), error = (_useFetch.data, 
            _useFetch.error), isPending = _useFetch.isPending, fetchData = _useFetch.fetchData;
            var tip = useSelector((function(state) {
                return state.tip.value;
            }));
            (0, react.useEffect)((function() {
                fetchData("/balance", "GET", {
                    doOnSuccess: function doOnSuccess(data) {
                        return setBalance(data.balance);
                    }
                });
            }), [ balance ]);
            var handleOrder = function handleOrder() {
                var orderPrice;
                if (tip) orderPrice = (totalPrice + .5).toFixed(2); else orderPrice = totalPrice.toFixed(2);
                fetchData("/cart/order", "POST", {
                    body: {
                        cart,
                        totalPrice: orderPrice
                    },
                    doOnSuccess: function doOnSuccess(data) {
                        alert(data.message);
                        clearCart();
                    }
                });
            };
            return react.createElement("div", {
                className: "page__cart cart--page"
            }, error && react.createElement("div", {
                style: {
                    textAlign: "center"
                }
            }, error), isPending && react.createElement(default_Loading, null), !error && !isPending && react.createElement("div", {
                className: "cart--page__container"
            }, react.createElement("div", {
                className: "cart--page__money"
            }, "Guthaben : ", react.createElement("span", null, balance)), react.createElement("h2", {
                className: "cart--page__main-text"
            }, "Deine Bestellung"), react.createElement("div", {
                className: "cart--page__box"
            }, react.createElement("ul", {
                className: "cart--page__list list"
            }, cart.length !== 0 ? react.createElement(react.Fragment, null, cart.map((function(item) {
                var _item$price$find;
                return react.createElement("li", {
                    className: "list__item",
                    key: item.dish_id
                }, react.createElement("div", {
                    className: "list__body"
                }, react.createElement("div", {
                    className: "list__number"
                }, item.number), react.createElement("div", {
                    className: "list__text"
                }, react.createElement("div", {
                    className: "list__title"
                }, item.name), item.description && react.createElement("div", {
                    className: "list__description"
                }, item.description)), Array.isArray(item.price) && react.createElement(default_OptionsDropdown, {
                    id: item.dish_id,
                    options: item.price,
                    initValue: item.selected_size
                }), item.sauces && react.createElement(default_CustomCheckBox, {
                    id: item.dish_id,
                    sauces: item.sauces
                })), react.createElement("div", {
                    className: "list__price"
                }, Array.isArray(item.price) ? (((_item$price$find = item.price.find((function(p) {
                    return p[item.selected_size];
                }))) === null || _item$price$find === void 0 ? void 0 : _item$price$find[item.selected_size]) * item.quantity).toFixed(2) : (item.price * item.quantity).toFixed(2)), react.createElement(default_Quantity, {
                    parentClass: "list",
                    item
                }), react.createElement(default_DeleteButton, {
                    parentClass: "list",
                    dish: item
                }));
            })), react.createElement("div", {
                className: "cart--page__total"
            }, "Gesamtsumme : ", totalPrice.toFixed(2), "€")) : react.createElement("li", {
                className: "list__empty"
            }, react.createElement("p", null, "Dein Warenkorb ist leer")))), react.createElement("button", {
                onClick: handleOrder,
                className: "cart--page__button"
            }, "Bestellen")));
        };
        var Error_Error = function Error() {
            return react.createElement("div", {
                style: {
                    textAlign: "center",
                    marginTop: "50px"
                }
            }, react.createElement("h1", null, "404 - Route does not exist"), react.createElement("p", null, "The page you're looking for doesn't exist."));
        };
        const error_Error = Error_Error;
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    lockPaddingElements.forEach((lockPaddingElement => {
                        lockPaddingElement.style.paddingRight = "";
                    }));
                    document.body.style.paddingRight = "";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                const lockPaddingValue = window.innerWidth - document.body.offsetWidth + "px";
                lockPaddingElements.forEach((lockPaddingElement => {
                    lockPaddingElement.style.paddingRight = lockPaddingValue;
                }));
                document.body.style.paddingRight = lockPaddingValue;
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.оbjects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const оbject = {};
                    оbject.element = node;
                    оbject.parent = node.parentNode;
                    оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.оbjects.push(оbject);
                }));
                this.arraySort(this.оbjects);
                this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                    this.mediaHandler(matchMedia, оbjectsFilter);
                }));
            }
            mediaHandler(matchMedia, оbjects) {
                if (matchMedia.matches) оbjects.forEach((оbject => {
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                })); else оbjects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if (place === "first") {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if (this.type === "min") arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return -1;
                        if (a.place === "last" || b.place === "first") return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if (a.place === "first" || b.place === "last") return 1;
                            if (a.place === "last" || b.place === "first") return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const dynamicAdapt = new DynamicAdapt("max");
        const dynamic_adapt = dynamicAdapt;
        const init = () => {
            menuInit();
            dynamic_adapt.init();
        };
        window["FLS"] = false;
        const app = init;
        var react_collapsible_dist = __webpack_require__(614);
        var dist_default = __webpack_require__.n(react_collapsible_dist);
        var NumberInput = __webpack_require__(363);
        const tipSlice_initialState = {
            value: false
        };
        const tipSlice = createSlice({
            name: "tip",
            initialState: tipSlice_initialState,
            reducers: {
                initTip: (state, action) => {
                    state.value = action.payload;
                },
                switchTip: state => {
                    state.value = !state.value;
                }
            }
        });
        const {switchTip, initTip} = tipSlice.actions;
        const Tip_tipSlice = tipSlice.reducer;
        function OrdersOverview_typeof(o) {
            "@babel/helpers - typeof";
            return OrdersOverview_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o;
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            }, OrdersOverview_typeof(o);
        }
        function OrdersOverview_ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                r && (o = o.filter((function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                }))), t.push.apply(t, o);
            }
            return t;
        }
        function OrdersOverview_objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? OrdersOverview_ownKeys(Object(t), !0).forEach((function(r) {
                    OrdersOverview_defineProperty(e, r, t[r]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : OrdersOverview_ownKeys(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }));
            }
            return e;
        }
        function OrdersOverview_defineProperty(e, r, t) {
            return (r = OrdersOverview_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e;
        }
        function OrdersOverview_toPropertyKey(t) {
            var i = OrdersOverview_toPrimitive(t, "string");
            return "symbol" == OrdersOverview_typeof(i) ? i : i + "";
        }
        function OrdersOverview_toPrimitive(t, r) {
            if ("object" != OrdersOverview_typeof(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var i = e.call(t, r || "default");
                if ("object" != OrdersOverview_typeof(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(t);
        }
        function OrdersOverview_slicedToArray(r, e) {
            return OrdersOverview_arrayWithHoles(r) || OrdersOverview_iterableToArrayLimit(r, e) || OrdersOverview_unsupportedIterableToArray(r, e) || OrdersOverview_nonIterableRest();
        }
        function OrdersOverview_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function OrdersOverview_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return OrdersOverview_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? OrdersOverview_arrayLikeToArray(r, a) : void 0;
            }
        }
        function OrdersOverview_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function OrdersOverview_iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function OrdersOverview_arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var OrdersOverview = function OrdersOverview(_ref) {
            var token = _ref.token, setToken = _ref.setToken;
            var dispatch = useDispatch();
            var tip = useSelector((function(state) {
                return state.tip.value;
            }));
            var _useFetch = (0, useFetch.A)(token, setToken), data = _useFetch.data, error = _useFetch.error, fetchData = (_useFetch.isPending, 
            _useFetch.fetchData);
            var _useState = (0, react.useState)([]), _useState2 = OrdersOverview_slicedToArray(_useState, 2), orders = _useState2[0], setOrders = _useState2[1];
            var _useState3 = (0, react.useState)(0), _useState4 = OrdersOverview_slicedToArray(_useState3, 2), totalPrice = _useState4[0], setTotalPrice = _useState4[1];
            var _useState5 = (0, react.useState)(0), _useState6 = OrdersOverview_slicedToArray(_useState5, 2), totalPriceWithTip = _useState6[0], setTotalPriceWithTip = _useState6[1];
            var _useState7 = (0, react.useState)(false), _useState8 = OrdersOverview_slicedToArray(_useState7, 2), openState = _useState8[0], setOpenState = _useState8[1];
            var _useState9 = (0, react.useState)(""), _useState10 = OrdersOverview_slicedToArray(_useState9, 2), buttonText = _useState10[0], setButtonText = _useState10[1];
            var todaysDate = (new Date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit"
            });
            (0, react.useEffect)((function() {
                fetchData("/orders", "GET", {
                    doOnSuccess: function doOnSuccess(data) {
                        return setOrders(data);
                    }
                });
                fetchData("/tip", "GET", {
                    doOnSuccess: function doOnSuccess(data) {
                        return dispatch(initTip(data));
                    }
                });
            }), []);
            (0, react.useEffect)((function() {
                var calculatedTotalPrice = 0;
                var calculatedTotalPriceWithTip = 0;
                orders.forEach((function(order) {
                    if (todaysDate === order.date) {
                        order.cart.forEach((function(item) {
                            var price;
                            if (Array.isArray(item.price)) {
                                var selectedSize = item.selected_size;
                                var priceObject = item.price.find((function(p) {
                                    return p[selectedSize] !== void 0;
                                }));
                                price = priceObject[selectedSize];
                            } else price = parseFloat(item.price);
                            calculatedTotalPrice += price * item.quantity;
                            calculatedTotalPriceWithTip += price * item.quantity;
                        }));
                        if (tip) calculatedTotalPriceWithTip += .5;
                    }
                }));
                setTotalPrice(calculatedTotalPrice);
                setTotalPriceWithTip(calculatedTotalPriceWithTip);
            }), [ orders ]);
            (0, react.useEffect)((function() {
                if (buttonText === "anzeigen") setButtonText("schließen"); else setButtonText("anzeigen");
            }), [ openState ]);
            var handleCheckState = function handleCheckState() {
                if (!tip) setOrders(orders.map((function(order) {
                    if (todaysDate === order.date) return OrdersOverview_objectSpread(OrdersOverview_objectSpread({}, order), {}, {
                        user: OrdersOverview_objectSpread(OrdersOverview_objectSpread({}, order.user), {}, {
                            balance: (parseFloat(order.user.balance) - .5).toFixed(2)
                        })
                    });
                    return order;
                }))); else setOrders(orders.map((function(order) {
                    if (todaysDate === order.date) return OrdersOverview_objectSpread(OrdersOverview_objectSpread({}, order), {}, {
                        user: OrdersOverview_objectSpread(OrdersOverview_objectSpread({}, order.user), {}, {
                            balance: (parseFloat(order.user.balance) + .5).toFixed(2)
                        })
                    });
                    return order;
                })));
                dispatch(switchTip());
                fetchData("/tip", "POST", {
                    body: {
                        tip: !tip
                    }
                });
            };
            return react.createElement("div", {
                className: "page__orders orders"
            }, error && react.createElement("p", null, error), orders.length > 0 && react.createElement(react.Fragment, null, react.createElement("div", {
                className: "orders__container"
            }, react.createElement("button", {
                className: "orders__button",
                onClick: function onClick() {
                    return setOpenState(!openState);
                }
            }, "Alle Bestellungen ", buttonText), react.createElement("div", {
                className: "orders__items"
            }, orders.map((function(order) {
                return react.createElement(dist_default(), {
                    trigger: order.user.username,
                    key: order.user.username,
                    open: openState,
                    handleTriggerClick: function handleTriggerClick() {}
                }, react.createElement("div", {
                    className: "Collapsible__body"
                }, react.createElement("div", {
                    className: "Collapsible__balance balance"
                }, react.createElement("div", {
                    className: "balance__text"
                }, "Guthaben : "), react.createElement(NumberInput.A, {
                    className: "balance",
                    initValue: order.user.balance,
                    username: order.user.username,
                    token,
                    setToken,
                    updateBalance: setOrders,
                    orders,
                    today: todaysDate
                })), react.createElement("div", {
                    className: "Collapsible__date"
                }, "Datum : ", order.date), react.createElement("ul", {
                    className: "cart--page__list list"
                }, order.cart.map((function(item) {
                    var _item$price$find;
                    return react.createElement("li", {
                        className: "list__item",
                        key: item.dish_id
                    }, react.createElement("div", {
                        className: "list__body"
                    }, react.createElement("div", {
                        className: "list__number"
                    }, item.number), react.createElement("div", {
                        className: "list__text"
                    }, react.createElement("div", {
                        className: "list__title"
                    }, item.name)), Array.isArray(item.price) && react.createElement(default_OptionsDropdown, {
                        id: item.dish_id,
                        options: item.price,
                        initValue: item.selected_size
                    }), item.sauces && react.createElement(default_CustomCheckBox, {
                        id: item.dish_id,
                        sauces: item.sauces
                    })), react.createElement("div", {
                        className: "list__price"
                    }, Array.isArray(item.price) ? (((_item$price$find = item.price.find((function(p) {
                        return p[item.selected_size];
                    }))) === null || _item$price$find === void 0 ? void 0 : _item$price$find[item.selected_size]) * item.quantity).toFixed(2) : (item.price * item.quantity).toFixed(2)), react.createElement(default_Quantity, {
                        parentClass: "list",
                        item,
                        isDisabled: true
                    }));
                })))));
            })))), react.createElement("div", {
                className: "orders__box"
            }, react.createElement("div", {
                className: "orders__prices"
            }, react.createElement("div", {
                className: "orders__total"
            }, "Gesamtsumme : ", totalPrice.toFixed(2)), tip && react.createElement("div", {
                className: "orders__totalWithTip"
            }, "mit Trinkgeld : ", totalPriceWithTip.toFixed(2))), react.createElement("div", {
                className: "orders__tip"
            }, react.createElement("label", {
                htmlFor: "tip"
            }, "Trinkgeld"), react.createElement("input", {
                type: "checkbox",
                id: "tip",
                checked: tip,
                className: "orders__checkbox",
                onChange: handleCheckState
            })))), orders.length < 1 && Array.isArray(data) && react.createElement("p", null, "Es gibt keine Bestellung für heute"));
        };
        const orders_OrdersOverview = OrdersOverview;
        var AppContent = function AppContent() {
            var _useToken = functions_useToken(), token = _useToken.token, removeToken = _useToken.removeToken, setToken = _useToken.setToken;
            var location = useLocation();
            (0, react.useEffect)((function() {
                var rootEl = document.querySelector(".wrapper");
                if (location.pathname === "/signIn" || location.pathname === "/signUp") rootEl.classList.add("bg-fs"); else rootEl.classList.remove("bg-fs");
            }), [ location.pathname ]);
            return react.createElement(react.Fragment, null, token && token !== "" && token !== void 0 ? react.createElement(react.Fragment, null, react.createElement(CartProvider, null, location.pathname !== "/" && location.pathname !== "/cart" && location.pathname !== "/menu" && location.pathname !== "/orders-overview" ? null : react.createElement(header_Header, {
                logout: removeToken
            }), react.createElement("main", {
                className: "page"
            }, react.createElement(Routes, null, react.createElement(Route, {
                path: "/",
                element: react.createElement(home_Home, {
                    token,
                    setToken
                })
            }), react.createElement(Route, {
                path: "/menu",
                element: react.createElement(menu_Menu, {
                    token,
                    setToken
                })
            }), react.createElement(Route, {
                path: "/cart",
                element: react.createElement(Cart, {
                    token,
                    setToken
                })
            }), react.createElement(Route, {
                path: "/orders-overview",
                element: react.createElement(orders_OrdersOverview, {
                    token,
                    setToken
                })
            }), react.createElement(Route, {
                path: "*",
                element: react.createElement(error_Error, null)
            }))))) : react.createElement("main", {
                className: "page"
            }, react.createElement(Routes, null, react.createElement(Route, {
                path: "/",
                element: react.createElement(Navigate, {
                    to: "/signIn"
                })
            }), react.createElement(Route, {
                path: "/signIn",
                element: react.createElement(authentication_SignIn, {
                    setToken
                })
            }), react.createElement(Route, {
                path: "/signUp",
                element: react.createElement(authentication_SignUp, null)
            }), react.createElement(Route, {
                path: "*",
                element: react.createElement(error_Error, null)
            }))));
        };
        var App = function App() {
            (0, react.useEffect)((function() {
                app();
            }));
            return react.createElement(BrowserRouter, null, react.createElement(AppContent, null));
        };
        const components_App = App;
        const store = configureStore({
            reducer: {
                tip: Tip_tipSlice,
                user: user_userSlice
            }
        });
        var root = document.querySelector("#root") ? document.querySelector("#root") : document.querySelector(".wrapper");
        client.createRoot(root).render(react.createElement(Provider_default, {
            store
        }, react.createElement(components_App, null)));
    })();
})();