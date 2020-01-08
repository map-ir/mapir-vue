(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    115: function(e, t, n) {
      var r = n(15),
        o = n(116)(!0);
      r(r.S, "Object", {
        entries: function(e) {
          return o(e);
        }
      });
    },
    116: function(e, t, n) {
      var r = n(17),
        o = n(42),
        i = n(30),
        a = n(99).f;
      e.exports = function(e) {
        return function(t) {
          for (var n, s = i(t), c = o(s), u = c.length, l = 0, p = []; u > l; )
            (n = c[l++]), (r && !a.call(s, n)) || p.push(e ? [n, s[n]] : s[n]);
          return p;
        };
      };
    },
    13: function(e, t, n) {
      var r = n(15),
        o = n(200),
        i = n(30),
        a = n(64),
        s = n(202);
      r(r.S, "Object", {
        getOwnPropertyDescriptors: function(e) {
          for (
            var t, n, r = i(e), c = a.f, u = o(r), l = {}, p = 0;
            u.length > p;

          )
            void 0 !== (n = c(r, (t = u[p++]))) && s(l, t, n);
          return l;
        }
      });
    },
    200: function(e, t, n) {
      var r = n(65),
        o = n(201),
        i = n(16),
        a = n(14).Reflect;
      e.exports =
        (a && a.ownKeys) ||
        function(e) {
          var t = r.f(i(e)),
            n = o.f;
          return n ? t.concat(n(e)) : t;
        };
    },
    201: function(e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    202: function(e, t, n) {
      "use strict";
      var r = n(26),
        o = n(41);
      e.exports = function(e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : (e[t] = n);
      };
    },
    203: function(e, t, n) {
      e.exports = n(204);
    },
    204: function(e, t, n) {
      n(205);
      var r = n(29).Object;
      e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n);
      };
    },
    205: function(e, t, n) {
      var r = n(45);
      r(r.S + r.F * !n(39), "Object", { defineProperty: n(38).f });
    },
    206: function(e, t, n) {
      var r = n(15),
        o = n(28),
        i = n(18),
        a = n(207),
        s = "[" + a + "]",
        c = RegExp("^" + s + s + "*"),
        u = RegExp(s + s + "*$"),
        l = function(e, t, n) {
          var o = {},
            s = i(function() {
              return !!a[e]() || "​" != "​"[e]();
            }),
            c = (o[e] = s ? t(p) : a[e]);
          n && (o[n] = c), r(r.P + r.F * s, "String", o);
        },
        p = (l.trim = function(e, t) {
          return (
            (e = String(o(e))),
            1 & t && (e = e.replace(c, "")),
            2 & t && (e = e.replace(u, "")),
            e
          );
        });
      e.exports = l;
    },
    207: function(e, t) {
      e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
    },
    208: function(e, t, n) {
      "use strict";
      var r = n(57),
        o = n(16),
        i = n(209),
        a = n(58),
        s = n(36),
        c = n(59),
        u = n(61),
        l = n(18),
        p = Math.min,
        m = [].push,
        f = !l(function() {
          RegExp(4294967295, "y");
        });
      n(60)("split", 2, function(e, t, n, l) {
        var d;
        return (
          (d =
            "c" == "abbc".split(/(b)*/)[1] ||
            4 != "test".split(/(?:)/, -1).length ||
            2 != "ab".split(/(?:ab)*/).length ||
            4 != ".".split(/(.?)(.?)/).length ||
            ".".split(/()()/).length > 1 ||
            "".split(/.?/).length
              ? function(e, t) {
                  var o = String(this);
                  if (void 0 === e && 0 === t) return [];
                  if (!r(e)) return n.call(o, e, t);
                  for (
                    var i,
                      a,
                      s,
                      c = [],
                      l =
                        (e.ignoreCase ? "i" : "") +
                        (e.multiline ? "m" : "") +
                        (e.unicode ? "u" : "") +
                        (e.sticky ? "y" : ""),
                      p = 0,
                      f = void 0 === t ? 4294967295 : t >>> 0,
                      d = new RegExp(e.source, l + "g");
                    (i = u.call(d, o)) &&
                    !(
                      (a = d.lastIndex) > p &&
                      (c.push(o.slice(p, i.index)),
                      i.length > 1 &&
                        i.index < o.length &&
                        m.apply(c, i.slice(1)),
                      (s = i[0].length),
                      (p = a),
                      c.length >= f)
                    );

                  )
                    d.lastIndex === i.index && d.lastIndex++;
                  return (
                    p === o.length
                      ? (!s && d.test("")) || c.push("")
                      : c.push(o.slice(p)),
                    c.length > f ? c.slice(0, f) : c
                  );
                }
              : "0".split(void 0, 0).length
              ? function(e, t) {
                  return void 0 === e && 0 === t ? [] : n.call(this, e, t);
                }
              : n),
          [
            function(n, r) {
              var o = e(this),
                i = null == n ? void 0 : n[t];
              return void 0 !== i ? i.call(n, o, r) : d.call(String(o), n, r);
            },
            function(e, t) {
              var r = l(d, e, this, t, d !== n);
              if (r.done) return r.value;
              var u = o(e),
                m = String(this),
                h = i(u, RegExp),
                v = u.unicode,
                g =
                  (u.ignoreCase ? "i" : "") +
                  (u.multiline ? "m" : "") +
                  (u.unicode ? "u" : "") +
                  (f ? "y" : "g"),
                y = new h(f ? u : "^(?:" + u.source + ")", g),
                b = void 0 === t ? 4294967295 : t >>> 0;
              if (0 === b) return [];
              if (0 === m.length) return null === c(y, m) ? [m] : [];
              for (var O = 0, j = 0, x = []; j < m.length; ) {
                y.lastIndex = f ? j : 0;
                var P,
                  w = c(y, f ? m : m.slice(j));
                if (
                  null === w ||
                  (P = p(s(y.lastIndex + (f ? 0 : j)), m.length)) === O
                )
                  j = a(m, j, v);
                else {
                  if ((x.push(m.slice(O, j)), x.length === b)) return x;
                  for (var S = 1; S <= w.length - 1; S++)
                    if ((x.push(w[S]), x.length === b)) return x;
                  j = O = P;
                }
              }
              return x.push(m.slice(O)), x;
            }
          ]
        );
      });
    },
    209: function(e, t, n) {
      var r = n(16),
        o = n(91),
        i = n(12)("species");
      e.exports = function(e, t) {
        var n,
          a = r(e).constructor;
        return void 0 === a || null == (n = r(a)[i]) ? t : o(n);
      };
    },
    210: function(e, t, n) {
      window,
        (e.exports = (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 0))
          );
        })([
          function(e, t, n) {
            e.exports = n(1);
          },
          function(e, t, n) {
            "use strict";
            n.r(t);
            var r = {
                events: [
                  {
                    name: "moveend",
                    check: function(e, t) {
                      return t.center && e.isMoving();
                    }
                  },
                  {
                    name: "zoomend",
                    check: function(e, t) {
                      return (
                        void 0 !== t.zoom && null !== t.zoom && e.isZooming()
                      );
                    }
                  },
                  {
                    name: "rotateend",
                    check: function(e, t) {
                      return (
                        void 0 !== t.bearing &&
                        null !== t.bearing &&
                        e.isRotating()
                      );
                    }
                  },
                  {
                    name: "pitchend",
                    check: function(e, t) {
                      return (
                        void 0 !== t.pitch && null !== t.bearing && e.isMoving()
                      );
                    }
                  }
                ],
                getter: function(e) {
                  return {
                    center: e.getCenter(),
                    zoom: e.getZoom(),
                    bearing: e.getBearing(),
                    pitch: e.getPitch()
                  };
                }
              },
              o = {
                events: [
                  {
                    name: "moveend",
                    check: function(e) {
                      return e.isMoving();
                    }
                  }
                ],
                getter: function(e) {
                  return { center: e.getCenter() };
                }
              },
              i = {
                events: [
                  {
                    name: "zoomend",
                    check: function(e) {
                      return e.isZooming();
                    }
                  }
                ],
                getter: function(e) {
                  return { zoom: e.getZoom() };
                }
              },
              a = {
                events: [
                  {
                    name: "rotateend",
                    check: function(e) {
                      return e.isRotating();
                    }
                  }
                ],
                getter: function(e) {
                  return { bearing: e.getBearing() };
                }
              },
              s = {
                setCenter: o,
                panBy: o,
                panTo: o,
                setZoom: i,
                zoomTo: i,
                zoomIn: i,
                zoomOut: i,
                setBearing: a,
                rotateTo: a,
                resetNorth: a,
                snapToNorth: a,
                setPitch: {
                  events: [
                    {
                      name: "pitchend",
                      check: function(e) {
                        return !0;
                      }
                    }
                  ],
                  getter: function(e) {
                    return { pitch: e.getPitch() };
                  }
                },
                fitBounds: {
                  events: [
                    {
                      name: "zoomend",
                      check: function(e) {
                        return e.isZooming();
                      }
                    },
                    {
                      name: "moveend",
                      check: function(e) {
                        return e.isMoving();
                      }
                    },
                    {
                      name: "rotateend",
                      check: function(e) {
                        return e.isRotating();
                      }
                    }
                  ],
                  getter: function(e) {
                    return {
                      zoom: e.getZoom(),
                      bearing: e.getBearing(),
                      pitch: e.getPitch(),
                      center: e.getCenter()
                    };
                  }
                },
                fitScreenCoordinates: {
                  events: [
                    {
                      name: "zoomend",
                      check: function(e, t) {
                        return e.isZooming();
                      }
                    },
                    {
                      name: "moveend",
                      check: function(e, t) {
                        return e.isMoving();
                      }
                    },
                    {
                      name: "rotateend",
                      check: function(e, t) {
                        return t.bearing && e.isRotating();
                      }
                    }
                  ],
                  getter: function(e) {
                    return {
                      zoom: e.getZoom(),
                      center: e.getCenter(),
                      bearing: e.getBearing(),
                      pitch: e.getPitch()
                    };
                  }
                },
                jumpTo: r,
                easeTo: r,
                flyTo: r
              };
            function c(e) {
              return (c =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function(e) {
                      return typeof e;
                    }
                  : function(e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
            function u(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (r = r.concat(
                    Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  r.forEach(function(t) {
                    l(e, t, n[t]);
                  });
              }
              return e;
            }
            function l(e, t, n) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (e[t] = n),
                e
              );
            }
            function p(e) {
              return ""
                .concat(e, "-")
                .concat(("" + Math.random()).split(".")[1]);
            }
            function m(e, t, n, r) {
              return function o(i) {
                i.type === t && i.eventId === n && (e.off(t, o), r(i));
              };
            }
            var f = function(e, t) {
                var n = e[t],
                  r = n.length;
                return function() {
                  for (
                    var o = [],
                      i = { eventId: p(t) },
                      a = s[t].events.map(function(t, n) {
                        return {
                          event: t,
                          func: new Promise(function(r, a) {
                            (o[n] = {
                              event: t,
                              func: m(e, t.name, i.eventId, r)
                            }),
                              e.on(t.name, o[n].func);
                          })
                        };
                      }),
                      l = [],
                      f = 0;
                    f < r;
                    f++
                  )
                    f === r - 1
                      ? l.push(
                          u(
                            {},
                            i,
                            (f < 0 || arguments.length <= f
                              ? void 0
                              : arguments[f]) || {}
                          )
                        )
                      : l.push(
                          (f < 0 || arguments.length <= f
                            ? void 0
                            : arguments[f]) || null
                        );
                  var d = [],
                    h = (arguments.length <= 0 ? void 0 : arguments[0]) || {};
                  try {
                    n.apply(e, l),
                      "fitBounds" === t && (h = {}),
                      "fitScreenCoordinates" === t &&
                        (((h = { bearing: null }).bearing = null),
                        "number" ==
                          typeof (arguments.length <= 2
                            ? void 0
                            : arguments[2]) &&
                          (h.bearing =
                            arguments.length <= 2 ? void 0 : arguments[2]),
                        (arguments.length <= 3 ? void 0 : arguments[3]) &&
                          "object" ===
                            c(arguments.length <= 3 ? void 0 : arguments[3]) &&
                          (h = u(
                            {},
                            h,
                            arguments.length <= 3 ? void 0 : arguments[3]
                          ))),
                      (d = a.map(function(t) {
                        var n = t.event,
                          r = t.func;
                        return n.check(e, h)
                          ? r
                          : (e.off(n.name, r), Promise.resolve());
                      }));
                  } catch (t) {
                    throw (o.forEach(function(t) {
                      var n = t.event,
                        r = t.func;
                      e.off(n.name, r);
                    }),
                    t);
                  }
                  return Promise.all(d).then(function() {
                    return s[t].getter(e);
                  });
                };
              },
              d = function(e) {
                var t = Object.keys(s),
                  n = {};
                return (
                  t.forEach(function(r) {
                    -1 !== t.indexOf(r) && (n[r] = f(e, r));
                  }),
                  n
                );
              };
            function h(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              return t ? f(e, t) : d(e);
            }
            n.d(t, "default", function() {
              return h;
            });
          }
        ]).default);
    },
    211: function(e) {
      e.exports = JSON.parse(
        '{"name":"mapir-vue","version":"2.2.12","author":{"name":"Mohammad H. Sattarian","email":"mh.sattarian@map.ir","url":"https://github.com/mhsattarian"},"contributors":[{"name":"Reyhaneh Masoumi","email":"r.masoumi@map.ir","url":"https://github.com/ReyhaneMasumi"}],"homepage":"https://github.com/map-ir/mapir-vue","repository":{"type":"git","url":"https://github.com/map-ir/mapir-vue.git"},"private":false,"main":"dist/mapir-vue.umd.js","module":"src/main.js","scripts":{"start":"npm run serve","build":"cross-env vue-cli-service build --target lib --name mapir-vue src/main.js","serve":"cross-env vue-cli-service build --target lib --name mapir-vue src/main.js --watch","lint":"vue-cli-service lint","docs:serve":"vuepress dev docs_source","docs:build":"vuepress build docs_source"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.{js,json,css,md}":["prettier --write","git add"]},"dependencies":{"@babel/plugin-syntax-dynamic-import":"^7.2.0","@vuepress/plugin-register-components":"^1.2.0","babel-loader":"^7.1.5","map-promisified":"latest","mapbox-gl":"^1.6.0"},"peerDependencies":{"mapbox-gl":"^1.6.0","vue":"^2.6.6"},"devDependencies":{"@vue/cli-plugin-babel":"^3.2.0","@vue/cli-plugin-eslint":"^3.2.1","@vue/cli-service":"^3.2.0","@vue/eslint-config-prettier":"^4.0.1","babel-eslint":"^10.0.1","cross-env":"^6.0.3","eslint":"^5.10.0","eslint-loader":"2.1.1","husky":"^1.2.0","lint-staged":"^8.1.0","vue":"^2.6.6","vue-template-compiler":"^2.6.6","vuepress":"^1.2.0"}}'
      );
    },
    212: function(e, t, n) {
      "use strict";
      var r = n(84);
      n.n(r).a;
    },
    213: function(e, t, n) {
      var r = n(15),
        o = n(116)(!1);
      r(r.S, "Object", {
        values: function(e) {
          return o(e);
        }
      });
    },
    214: function(e, t, n) {
      "use strict";
      var r = n(85);
      n.n(r).a;
    },
    24: function(e, t, n) {
      "use strict";
      n(13), n(19), n(22), n(11), n(10);
      var r = n(203),
        o = n.n(r);
      function i(e, t, n) {
        return (
          t in e
            ? o()(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function(t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = {
          methods: {
            $_emitEvent: function(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              this.$emit(e, s({ map: this.map, component: this }, t));
            },
            $_emitMapEvent: function(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              this.$_emitEvent(e.type, s({ actualEvent: e }, t));
            }
          }
        },
        u = {
          resize: { name: "resize" },
          webglcontextlost: { name: "webglcontextlost" },
          webglcontextrestored: { name: "webglcontextrestored" },
          remove: { name: "remove" },
          movestart: { name: "movestart" },
          load: { name: "load" },
          contextmenu: { name: "contextmenu" },
          dblclick: { name: "dblclick" },
          click: { name: "click" },
          touchcancel: { name: "touchcancel" },
          touchmove: { name: "touchmove" },
          touchend: { name: "touchend" },
          touchstart: { name: "touchstart" },
          dataloading: { name: "dataloading" },
          mousemove: { name: "mousemove" },
          mouseup: { name: "mouseup" },
          mousedown: { name: "mousedown" },
          sourcedataloading: { name: "sourcedataloading" },
          error: { name: "error" },
          data: { name: "data" },
          styledata: { name: "styledata" },
          sourcedata: { name: "sourcedata" },
          mouseout: { name: "mouseout" },
          styledataloading: { name: "styledataloading" },
          moveend: { name: "moveend" },
          move: { name: "move" },
          render: { name: "render" },
          zoom: { name: "zoom" },
          zoomstart: { name: "zoomstart" },
          zoomend: { name: "zoomend" },
          boxzoomstart: { name: "boxzoomstart" },
          boxzoomcancel: { name: "boxzoomcancel" },
          boxzoomend: { name: "boxzoomend" },
          rotate: { name: "rotate" },
          rotatestart: { name: "rotatestart" },
          rotateend: { name: "rotateend" },
          dragend: { name: "dragend" },
          drag: { name: "drag" },
          dragstart: { name: "dragstart" },
          pitch: { name: "pitch" },
          idle: { name: "idle" }
        },
        l =
          (n(83),
          n(208),
          {
            container: {
              type: [String, HTMLElement],
              default: function() {
                return "map-".concat(("" + Math.random()).split(".")[1]);
              }
            },
            mapboxAccessToken: { type: String, default: void 0 },
            apiKey: { type: String, required: !0, default: void 0 },
            minZoom: { type: Number, default: 0 },
            maxZoom: { type: Number, default: 22 },
            mapStyle: {
              type: [String, Object],
              required: !1,
              default: "https://map.ir/vector/styles/main/mapir-xyz-style.json"
            },
            hash: { type: Boolean, default: !1 },
            interactive: { type: Boolean, default: !0 },
            bearingSnap: { type: Number, default: 7 },
            pitchWithRotate: { type: Boolean, default: !0 },
            clickTolerance: { type: Number, default: 3 },
            attributionControl: { type: Boolean, default: !0 },
            customAttribution: { type: [String, Array], default: null },
            logoPosition: {
              type: String,
              default: "bottom-left",
              validator: function(e) {
                return [
                  "top-left",
                  "top-right",
                  "bottom-left",
                  "bottom-right"
                ].includes(e);
              }
            },
            failIfMajorPerformanceCaveat: { type: Boolean, default: !1 },
            preserveDrawingBuffer: { type: Boolean, default: !1 },
            refreshExpiredTiles: { type: Boolean, default: !0 },
            maxBounds: { type: Array, default: function() {} },
            scrollZoom: {
              type: [Boolean, Object],
              default: function() {
                return !0;
              }
            },
            boxZoom: { type: Boolean, default: !0 },
            dragRotate: { type: Boolean, default: !0 },
            dragPan: { type: Boolean, default: !0 },
            keyboard: { type: Boolean, default: !0 },
            doubleClickZoom: { type: Boolean, default: !0 },
            touchZoomRotate: {
              type: [Boolean, Object],
              default: function() {
                return !0;
              }
            },
            trackResize: { type: Boolean, default: !0 },
            center: {
              type: [Object, Array],
              default: function() {
                return [51.450691, 35.723521];
              }
            },
            zoom: { type: Number, default: 9 },
            bearing: { type: Number, default: 0 },
            pitch: { type: Number, default: 0 },
            bounds: { type: [Object, Array], default: void 0 },
            fitBoundsOptions: { type: Object, default: void 0 },
            renderWorldCopies: { type: Boolean, default: !0 },
            RTLTextPluginUrl: {
              type: String,
              default:
                "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"
            },
            light: { type: Object, default: void 0 },
            tileBoundaries: { type: Boolean, default: !1 },
            collisionBoxes: { type: Boolean, default: !1 },
            repaint: { type: Boolean, default: !1 },
            transformRequest: { type: Function, default: void 0 },
            maxTileCacheSize: { type: Number, default: null },
            localIdeographFontFamily: { type: String, default: null },
            collectResourceTiming: { type: Boolean, default: !1 },
            fadeDuration: { type: Number, default: 300 },
            crossSourceCollisions: { type: Boolean, default: !0 }
          }),
        p =
          (n(115),
          {
            maxBounds: function(e) {
              this.map.setMaxBounds(e);
            },
            minZoom: function(e) {
              this.map.setMinZoom(e);
            },
            maxZoom: function(e) {
              this.map.setMaxZoom(e);
            },
            mapStyle: function(e) {
              this.map.setStyle(e);
            },
            collisionBoxes: function(e) {
              this.map.showCollisionBoxes = e;
            },
            tileBoundaries: function(e) {
              this.map.showTileBoundaries = e;
            },
            repaint: function(e) {
              this.map.repaint = e;
            },
            zoom: function(e) {
              this.map.setZoom(e);
            },
            center: function(e) {
              this.map.setCenter(e);
            },
            bearing: function(e) {
              this.map.setBearing(e);
            },
            pitch: function(e) {
              this.map.setPitch(e);
            },
            light: function(e) {
              this.map.setLigh(e);
            }
          });
      function m(e, t, n, r) {
        var o = this;
        this.initial ||
          (this.$listeners["update:".concat(e)]
            ? (this.propsIsUpdating[e]
                ? ((this._watcher.active = !1),
                  this.$nextTick(function() {
                    o._watcher.active = !0;
                  }))
                : ((this._watcher.active = !0), t(n, r)),
              (this.propsIsUpdating[e] = !1))
            : t(n, r));
      }
      var f,
        d = {
          watch:
            ((f = {}),
            Object.entries(p).forEach(function(e) {
              f[e[0]] = function(t, n) {
                return m.call(this, e[0], e[1].bind(this), t, n);
              };
            }),
            f)
        };
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var v = {
          methods: {
            $_updateSyncedPropsFabric: function(e, t) {
              var n = this;
              return function() {
                n.propsIsUpdating[e] = !0;
                var r = "function" == typeof t ? t() : t;
                return n.$emit("update:".concat(e), r);
              };
            },
            $_bindPropsUpdateEvents: function() {
              var e = this;
              [
                {
                  events: ["moveend"],
                  prop: "center",
                  getter: this.map.getCenter.bind(this.map)
                },
                {
                  events: ["zoomend"],
                  prop: "zoom",
                  getter: this.map.getZoom.bind(this.map)
                },
                {
                  events: ["rotate"],
                  prop: "bearing",
                  getter: this.map.getBearing.bind(this.map)
                },
                {
                  events: ["pitch"],
                  prop: "pitch",
                  getter: this.map.getPitch.bind(this.map)
                }
              ].forEach(function(t) {
                var n = t.events,
                  r = t.prop,
                  o = t.getter;
                n.forEach(function(t) {
                  e.$listeners["update:".concat(r)] &&
                    e.map.on(t, e.$_updateSyncedPropsFabric(r, o));
                });
              });
            },
            $_loadMap: function() {
              var e = this;
              return this.mapboxPromise.then(function(t) {
                return (
                  (e.mapbox = t.default ? t.default : t),
                  new Promise(function(t) {
                    e.mapboxAccessToken &&
                      (e.mapbox.accessToken = e.mapboxAccessToken);
                    var n = "".concat(e.mapStyle),
                      r = new e.mapbox.Map(
                        (function(e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? h(Object(n), !0).forEach(function(t) {
                                  i(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n)
                                )
                              : h(Object(n)).forEach(function(t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t)
                                  );
                                });
                          }
                          return e;
                        })({}, e._props, {
                          container: e.$refs.container,
                          style: n,
                          transformRequest: function(t, n) {
                            return {
                              url: t,
                              headers: {
                                "x-api-key": e.apiKey,
                                "Mapir-SDK": "vue/"
                                  .concat(e.vueVersion, "-map/")
                                  .concat(e.componentVersion)
                              }
                            };
                          }
                        })
                      ).addControl(
                        new e.mapbox.AttributionControl({
                          customAttribution: "© Map © Openstreetmap"
                        })
                      );
                    r.on("load", function() {
                      return t(r);
                    });
                  })
                );
              });
            },
            $_RTLTextPluginError: function(e) {
              this.$emit("rtl-plugin-error", { map: this.map, error: e });
            },
            $_bindMapEvents: function(e) {
              var t = this;
              Object.keys(this.$listeners).forEach(function(n) {
                e.includes(n) && t.map.on(n, t.$_emitMapEvent);
              });
            },
            $_unbindEvents: function(e) {
              var t = this;
              e.forEach(function(e) {
                t.map.off(e, t.$_emitMapEvent);
              });
            }
          }
        },
        g = n(210),
        y = n.n(g);
      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var O = {
          created: function() {
            this.actions = {};
          },
          methods: {
            $_registerAsyncActions: function(e) {
              this.actions = (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? b(Object(n), !0).forEach(function(t) {
                        i(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : b(Object(n)).forEach(function(t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({}, y()(e), {
                stop: function() {
                  var e = this;
                  this.map.stop();
                  var t = {
                    pitch: this.map.getPitch(),
                    zoom: this.map.getZoom(),
                    bearing: this.map.getBearing(),
                    center: this.map.getCenter()
                  };
                  return (
                    Object.entries(t).forEach(function(t) {
                      e.$_updateSyncedPropsFabric(t[0], t[1])();
                    }),
                    Promise.resolve(t)
                  );
                }
              });
            }
          }
        },
        j = n(211);
      function x(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var P = {
          name: "Map",
          mixins: [d, O, v, c],
          props: (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? x(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : x(Object(n)).forEach(function(t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })({ mapboxGl: { type: Object, default: null } }, l),
          provide: function() {
            var e = this;
            return {
              get mapbox() {
                return e.mapbox;
              },
              get map() {
                return e.map;
              },
              get actions() {
                return e.actions;
              }
            };
          },
          data: function() {
            return { initial: !0, initialized: !1 };
          },
          computed: {
            loaded: function() {
              return !!this.map && this.map.loaded();
            },
            version: function() {
              return this.map ? this.map.version : null;
            },
            isStyleLoaded: function() {
              return !!this.map && this.map.isStyleLoaded();
            },
            areTilesLoaded: function() {
              return !!this.map && this.map.areTilesLoaded();
            },
            isMoving: function() {
              return !!this.map && this.map.isMoving();
            },
            canvas: function() {
              return this.map ? this.map.getCanvas() : null;
            },
            canvasContainer: function() {
              return this.map ? this.map.getCanvasContainer() : null;
            },
            images: function() {
              return this.map ? this.map.listImages() : null;
            },
            vueVersion: function() {
              var e;
              return (
                Object.keys(j)
                  .filter(function(e) {
                    return e.includes("pendenc");
                  })
                  .forEach(function(t) {
                    null != j[t].vue && (e = j[t].vue);
                  }),
                (e = e || "").slice(1)
              );
            },
            componentVersion: function() {
              return j.version;
            }
          },
          created: function() {
            (this.map = null),
              (this.propsIsUpdating = {}),
              (this.mapboxPromise = this.mapboxGl
                ? Promise.resolve(this.mapboxGl)
                : n.e(37).then(n.t.bind(null, 216, 7)));
          },
          mounted: function() {
            var e = this,
              t = this;
            this.$_loadMap().then(function(n) {
              e.map = n;
              ["unavailable", "error"].includes(
                t.mapbox.getRTLTextPluginStatus()
              ) &&
                void 0 !== e.RTLTextPluginUrl &&
                e.mapbox.setRTLTextPlugin(
                  e.RTLTextPluginUrl,
                  e.$_RTLTextPluginError
                );
              var r = Object.keys(u);
              e.$_bindMapEvents(r),
                e.$_registerAsyncActions(n),
                e.$_bindPropsUpdateEvents(),
                (e.initial = !1),
                (e.initialized = !0),
                e.$emit("load", { map: n, component: e });
            });
            var n = document.createElement("div");
            n.className = "holder-logo";
            var r = document.createElement("a");
            (r.href = "http://corp.map.ir/"),
              (r.target = "_blank"),
              (r.className = "map-logo"),
              n.appendChild(r),
              this.$refs.container.appendChild(n);
          },
          beforeDestroy: function() {
            var e = this;
            this.$nextTick(function() {
              e.map && e.map.remove();
            });
          }
        },
        w = (n(212), n(0)),
        S = Object(w.a)(
          P,
          function() {
            var e = this.$createElement;
            return (this._self._c || e)(
              "div",
              { staticClass: "map-wrapper" },
              [
                this._m(0),
                this._v(" "),
                this.initialized ? this._t("default") : this._e()
              ],
              2
            );
          },
          [
            function() {
              var e = this.$createElement;
              return (this._self._c || e)("div", {
                ref: "container",
                attrs: { id: this.container }
              });
            }
          ],
          !1,
          null,
          null,
          null
        ).exports;
      function E(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(n), !0).forEach(function(t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var _ = {
          methods: {
            $_emitSelfEvent: function(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              this.$_emitMapEvent(e, $({ control: this.control }, t));
            },
            $_bindSelfEvents: function(e, t) {
              var n = this;
              Object.keys(this.$listeners).forEach(function(r) {
                e.includes(r) && t.on(r, n.$_emitSelfEvent);
              });
            },
            $_unbindSelfEvents: function(e, t) {
              var n = this;
              0 !== e.length &&
                t &&
                e.forEach(function(e) {
                  t.off(e, n.$_emitSelfEvent);
                });
            }
          }
        },
        k = {
          mixins: [c, _],
          inject: ["mapbox", "map", "actions"],
          props: { position: { type: String, default: "top-right" } },
          beforeDestroy: function() {
            this.map && this.control && this.map.removeControl(this.control);
          },
          methods: {
            $_addControl: function() {
              try {
                this.map.addControl(this.control, this.position);
              } catch (e) {
                return void this.$_emitEvent("error", { error: e });
              }
              this.$_emitEvent("added", { control: this.control });
            }
          },
          render: function() {}
        },
        I = {
          name: "NavigationControl",
          mixins: [k],
          props: {
            showCompass: { type: Boolean, default: !0 },
            showZoom: { type: Boolean, default: !0 }
          },
          created: function() {
            (this.control = new this.mapbox.NavigationControl(this.$props)),
              this.$_addControl();
          }
        },
        M = {
          trackuserlocationstart: "trackuserlocationstart",
          trackuserlocationend: "trackuserlocationend",
          geolocate: "geolocate",
          error: "error"
        },
        L = {
          name: "GeolocateControl",
          mixins: [c, _, k],
          props: {
            positionOptions: {
              type: Object,
              default: function() {
                return { enableHighAccuracy: !1, timeout: 6e3 };
              }
            },
            fitBoundsOptions: {
              type: Object,
              default: function() {
                return { maxZoom: 15 };
              }
            },
            trackUserLocation: { type: Boolean, default: !1 },
            showUserLocation: { type: Boolean, default: !0 }
          },
          created: function() {
            var e = this.mapbox.GeolocateControl;
            (this.control = new e(this.$props)),
              this.$_addControl(),
              this.$_bindSelfEvents(Object.keys(M), this.control);
          },
          methods: {
            trigger: function() {
              if (this.control) return this.control.trigger();
            }
          }
        },
        B =
          (HTMLElement,
          Boolean,
          {
            name: "ScaleControl",
            mixins: [k],
            props: {
              maxWidth: { type: Number, default: 150 },
              unit: {
                type: String,
                default: "metric",
                validator: function(e) {
                  return ["imperial", "metric", "nautical"].includes(e);
                }
              }
            },
            watch: {
              unit: function(e, t) {
                this.control && e !== t && this.control.setUnit(e);
              }
            },
            created: function() {
              (this.control = new this.mapbox.ScaleControl(this.$props)),
                this.$_addControl();
            }
          });
      n(213);
      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var T = { drag: "drag", dragstart: "dragstart", dragend: "dragend" },
        D = {
          click: "click",
          mouseenter: "mouseenter",
          mouseleave: "mouseleave"
        },
        z = {
          name: "MapMarker",
          mixins: [c, _],
          inject: ["mapbox", "map"],
          provide: function() {
            var e = this;
            return {
              get marker() {
                return e.marker;
              }
            };
          },
          props: {
            offset: {
              type: [Object, Array],
              default: function() {
                return [0, 0];
              }
            },
            coordinates: { type: Array, required: !0 },
            color: { type: String, default: "red" },
            anchor: { type: String, default: "center" },
            draggable: { type: Boolean, default: !1 },
            kind: { type: String, default: "normal" }
          },
          data: function() {
            return { initial: !0, marker: void 0 };
          },
          watch: {
            coordinates: function(e) {
              this.initial || this.marker.setLngLat(e);
            },
            draggable: function(e) {
              this.initial || this.marker.setDraggable(e);
            }
          },
          mounted: function() {
            var e = this,
              t = document.createElement("div");
            t.className = "map-marker "
              .concat(this.$props.color, " ")
              .concat(this.$props.kind || "");
            var n = (function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? C(Object(n), !0).forEach(function(t) {
                      i(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : C(Object(n)).forEach(function(t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({ element: t }, this.$props);
            this.$slots.marker && (n.element = this.$slots.marker[0].elm),
              (this.marker = new this.mapbox.Marker(n)),
              this.$listeners["update:coordinates"] &&
                this.marker.on("dragend", function(t) {
                  var n;
                  (n =
                    e.coordinates instanceof Array
                      ? [t.target._lngLat.lng, t.target._lngLat.lat]
                      : t.target._lngLat),
                    e.$emit("update:coordinates", n);
                });
            var r = Object.keys(T);
            this.$_bindSelfEvents(r, this.marker),
              (this.initial = !1),
              this.$_addMarker();
          },
          beforeDestroy: function() {
            void 0 !== this.map &&
              void 0 !== this.marker &&
              this.marker.remove();
          },
          methods: {
            $_addMarker: function() {
              this.marker.setLngLat(this.coordinates).addTo(this.map),
                this.$_bindMarkerDOMEvents(),
                this.$_emitEvent("added", { marker: this.marker });
            },
            $_emitSelfEvent: function(e) {
              this.$_emitMapEvent(e, { marker: this.marker });
            },
            $_bindMarkerDOMEvents: function() {
              var e = this;
              Object.keys(this.$listeners).forEach(function(t) {
                Object.values(D).includes(t) &&
                  e.marker._element.addEventListener(t, function(t) {
                    e.$_emitSelfEvent(t);
                  });
              });
            },
            remove: function() {
              this.marker.remove(), this.$_emitEvent("removed");
            },
            togglePopup: function() {
              return this.marker.togglePopup();
            }
          }
        },
        N =
          (n(214),
          Object(w.a)(
            z,
            function() {
              var e = this.$createElement;
              return (this._self._c || e)(
                "div",
                { staticStyle: { display: "none" } },
                [
                  this._t("marker"),
                  this._v(" "),
                  this.marker ? this._t("default") : this._e()
                ],
                2
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        A = { open: "open", close: "close" },
        R = {
          name: "Popup",
          mixins: [c, _],
          inject: {
            mapbox: { default: null },
            map: { default: null },
            marker: { default: null }
          },
          props: {
            closeButton: { type: Boolean, default: !0 },
            closeOnClick: { type: Boolean, default: !0 },
            anchor: {
              validator: function(e) {
                return (
                  "string" == typeof e &&
                  [
                    "top",
                    "bottom",
                    "left",
                    "right",
                    "top-left",
                    "top-right",
                    "bottom-left",
                    "bottom-right"
                  ].includes(e)
                );
              },
              default: void 0
            },
            offset: {
              type: [Number, Object, Array],
              default: function() {
                return [0, 0];
              }
            },
            coordinates: { type: Array },
            onlyText: { type: Boolean, default: !1 },
            showed: { type: Boolean, default: !1 }
          },
          data: function() {
            return { initial: !0, popup: void 0 };
          },
          computed: {
            open: {
              get: function() {
                return void 0 !== this.popup && this.popup.isOpen();
              },
              set: function(e) {
                this.map &&
                  this.popup &&
                  (e ? this.popup.addTo(this.map) : this.popup.remove());
              }
            }
          },
          watch: {
            coordinates: function(e) {
              this.initial || this.popup.setLngLat(e);
            },
            showed: function(e, t) {
              e !== t &&
                ((this.open = e), this.marker && this.marker.togglePopup());
            }
          },
          created: function() {
            this.popup = new this.mapbox.Popup(this.$props);
          },
          mounted: function() {
            this.$_addPopup(), (this.initial = !1);
          },
          beforeDestroy: function() {
            this.map && (this.popup.remove(), this.$_emitEvent("removed"));
          },
          methods: {
            $_addPopup: function() {
              if (
                ((this.popup = new this.mapbox.Popup(this.$props)),
                void 0 !== this.coordinates &&
                  this.popup.setLngLat(this.coordinates),
                void 0 !== this.$slots.default)
              )
                if (this.onlyText)
                  if (3 === this.$slots.default[0].elm.nodeType) {
                    var e = document.createElement("span");
                    e.appendChild(this.$slots.default[0].elm),
                      this.popup.setText(e.innerText);
                  } else
                    this.popup.setText(this.$slots.default[0].elm.innerText);
                else this.popup.setDOMContent(this.$slots.default[0].elm);
              this.$_bindSelfEvents(Object.keys(A), this.popup),
                this.$_emitEvent("added", { popup: this.popup }),
                this.marker && this.marker.setPopup(this.popup),
                this.showed &&
                  ((this.open = !0), this.marker && this.marker.togglePopup());
            },
            $_emitSelfEvent: function(e) {
              this.$_emitMapEvent(e, { popup: this.popup });
            },
            remove: function() {
              this.popup.remove(),
                this.$_emitEvent("remove", { popup: this.popup });
            }
          }
        },
        Z = Object(w.a)(
          R,
          function() {
            var e = this.$createElement;
            return (this._self._c || e)(
              "div",
              { staticStyle: { display: "none" } },
              [this._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        F =
          (n(23),
          [
            "mousedown",
            "mouseup",
            "click",
            "dblclick",
            "mousemove",
            "mouseenter",
            "mouseleave",
            "mouseover",
            "mouseout",
            "contextmenu",
            "touchstart",
            "touchend",
            "touchcancel"
          ]);
      function U(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var q = {
        mixins: [c],
        props: (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? U(Object(n), !0).forEach(function(t) {
                  i(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : U(Object(n)).forEach(function(t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        })(
          {},
          {
            sourceId: { type: String, required: !0 },
            source: { type: [Object, String], default: void 0 }
          },
          {},
          {
            layerId: { type: String, required: !0 },
            layer: { type: Object, required: !0 },
            before: { type: String, default: void 0 }
          },
          {},
          {
            clearSource: { type: Boolean, default: !0 },
            replaceSource: { type: Boolean, default: !1 },
            replace: { type: Boolean, default: !1 }
          }
        ),
        inject: ["mapbox", "map"],
        data: function() {
          return { initial: !0 };
        },
        computed: {
          sourceLoaded: function() {
            return !!this.map && this.map.isSourceLoaded(this.sourceId);
          },
          mapLayer: function() {
            return this.map ? this.map.getLayer(this.layerId) : null;
          },
          mapSource: function() {
            return this.map ? this.map.getSource(this.sourceId) : null;
          }
        },
        created: function() {
          this.layer.minzoom &&
            this.$watch("layer.minzoom", function(e) {
              this.initial ||
                this.map.setLayerZoomRange(this.layerId, e, this.layer.maxzoom);
            }),
            this.layer.maxzoom &&
              this.$watch("layer.maxzoom", function(e) {
                this.initial ||
                  this.map.setLayerZoomRange(
                    this.layerId,
                    this.layer.minzoom,
                    e
                  );
              }),
            this.layer.paint &&
              this.$watch(
                "layer.paint",
                function(e) {
                  if (!this.initial && e)
                    for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                      var r = n[t];
                      this.map.setPaintProperty(this.layerId, r, e[r]);
                    }
                },
                { deep: !0 }
              ),
            this.layer.layout &&
              this.$watch(
                "layer.layout",
                function(e) {
                  if (!this.initial && e)
                    for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                      var r = n[t];
                      this.map.setLayoutProperty(this.layerId, r, e[r]);
                    }
                },
                { deep: !0 }
              ),
            this.layer.filter &&
              this.$watch(
                "layer.filter",
                function(e) {
                  this.initial || this.map.setFilter(this.layerId, e);
                },
                { deep: !0 }
              );
        },
        beforeDestroy: function() {
          if (this.map && this.map.loaded()) {
            try {
              this.map.removeLayer(this.layerId);
            } catch (e) {
              this.$_emitEvent("layer-does-not-exist", {
                layerId: this.sourceId,
                error: e
              });
            }
            if (this.clearSource)
              try {
                this.map.removeSource(this.sourceId);
              } catch (e) {
                this.$_emitEvent("source-does-not-exist", {
                  sourceId: this.sourceId,
                  error: e
                });
              }
          }
        },
        methods: {
          $_emitLayerMapEvent: function(e) {
            return this.$_emitMapEvent(e, { layerId: this.layerId });
          },
          $_bindLayerEvents: function(e) {
            var t = this;
            Object.keys(this.$listeners).forEach(function(n) {
              e.includes(n) && t.map.on(n, t.layerId, t.$_emitLayerMapEvent);
            });
          },
          $_unbindEvents: function(e) {
            var t = this;
            this.map &&
              e.forEach(function(e) {
                t.map.off(e, t.layerId, t.$_emitLayerMapEvent);
              });
          },
          $_watchSourceLoading: function(e) {
            "source" === e.dataType &&
              e.sourceId === this.sourceId &&
              (this.$_emitEvent("layer-source-loading", {
                sourceId: this.sourceId
              }),
              this.map.off("dataloading", this.$_watchSourceLoading));
          },
          move: function(e) {
            this.map.moveLayer(this.layerId, e),
              this.$_emitEvent("layer-moved", {
                layerId: this.layerId,
                beforeId: e
              });
          },
          remove: function() {
            this.map.removeLayer(this.layerId),
              this.map.removeSource(this.sourceId),
              this.$_emitEvent("layer-removed", { layerId: this.layerId }),
              this.$destroy();
          }
        },
        render: function() {}
      };
      function G(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? G(Object(n), !0).forEach(function(t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var H = {
        name: "GeojsonLayer",
        mixins: [q],
        computed: {
          getSourceFeatures: function() {
            var e = this;
            return function(t) {
              return e.map
                ? e.map.querySourceFeatures(e.sourceId, { filter: t })
                : null;
            };
          },
          getRenderedFeatures: function() {
            var e = this;
            return function(t, n) {
              return e.map
                ? e.map.queryRenderedFeatures(t, {
                    layers: [e.layerId],
                    filter: n
                  })
                : null;
            };
          },
          getClusterExpansionZoom: function() {
            var e = this;
            return function(t) {
              return new Promise(function(n, r) {
                if (!e.mapSource)
                  return r(
                    new Error(
                      "Map source with id ".concat(e.sourceId, " not found.")
                    )
                  );
                e.mapSource.getClusterExpansionZoom(t, function(e, t) {
                  return e ? r(e) : n(t);
                });
              });
            };
          },
          getClusterChildren: function() {
            var e = this;
            return function(t) {
              return new Promise(function(n, r) {
                var o = e.mapSource;
                if (!o)
                  return r(
                    new Error(
                      "Map source with id ".concat(e.sourceId, " not found.")
                    )
                  );
                o.getClusterChildren(t, function(e, t) {
                  return e ? r(e) : n(t);
                });
              });
            };
          },
          getClusterLeaves: function() {
            var e = this;
            return function() {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return new Promise(function(t, r) {
                if (!e.mapSource)
                  return r(
                    new Error(
                      "Map source with id ".concat(e.sourceId, " not found.")
                    )
                  );
                var o;
                (o = e.mapSource).getClusterLeaves.apply(
                  o,
                  n.concat([
                    function(e, n) {
                      return e ? r(e) : t(n);
                    }
                  ])
                );
              });
            };
          }
        },
        created: function() {
          this.source &&
            this.$watch(
              "source.data",
              function(e) {
                this.initial || this.mapSource.setData(e);
              },
              { deep: !0 }
            ),
            this.$_deferredMount();
        },
        methods: {
          $_deferredMount: function() {
            if (
              (this.map.on("dataloading", this.$_watchSourceLoading),
              this.source)
            ) {
              var e = V({ type: "geojson" }, this.source);
              try {
                this.map.addSource(this.sourceId, e);
              } catch (t) {
                this.replaceSource &&
                  (this.map.removeSource(this.sourceId),
                  this.map.addSource(this.sourceId, e));
              }
            }
            this.$_addLayer(),
              this.$_bindLayerEvents(F),
              this.map.off("dataloading", this.$_watchSourceLoading),
              (this.initial = !1);
          },
          $_addLayer: function() {
            var e = this.map.getLayer(this.layerId);
            if (e) {
              if (!this.replace)
                return (
                  this.$_emitEvent("layer-exists", { layerId: this.layerId }), e
                );
              this.map.removeLayer(this.layerId);
            }
            var t = V({ id: this.layerId, source: this.sourceId }, this.layer);
            this.map.addLayer(t, this.before),
              this.$_emitEvent("added", { layerId: this.layerId });
          },
          setFeatureState: function(e, t) {
            if (this.map) {
              var n = { id: e, source: this.source };
              return this.map.setFeatureState(n, t);
            }
          },
          getFeatureState: function(e) {
            if (this.map) {
              var t = { id: e, source: this.source };
              return this.map.getFeatureState(t);
            }
          },
          removeFeatureState: function(e, t, n) {
            if (this.map) {
              var r = { id: e, source: this.source, sourceLayer: t };
              return this.map.removeFeatureState(r, n);
            }
          }
        }
      };
      n.d(t, "g", function() {
        return K;
      }),
        n.d(t, "d", function() {
          return J;
        }),
        n.d(t, "b", function() {
          return W;
        }),
        n.d(t, "f", function() {
          return X;
        }),
        n.d(t, "a", function() {
          return Y;
        }),
        n.d(t, "c", function() {
          return Q;
        }),
        n.d(t, "e", function() {
          return ee;
        });
      var K = S,
        J = I,
        W = L,
        X = B,
        Y = H,
        Q = N,
        ee = Z;
    },
    83: function(e, t, n) {
      "use strict";
      var r = n(14),
        o = n(32),
        i = n(35),
        a = n(98),
        s = n(51),
        c = n(18),
        u = n(65).f,
        l = n(64).f,
        p = n(26).f,
        m = n(206).trim,
        f = r.Number,
        d = f,
        h = f.prototype,
        v = "Number" == i(n(92)(h)),
        g = "trim" in String.prototype,
        y = function(e) {
          var t = s(e, !1);
          if ("string" == typeof t && t.length > 2) {
            var n,
              r,
              o,
              i = (t = g ? t.trim() : m(t, 3)).charCodeAt(0);
            if (43 === i || 45 === i) {
              if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
            } else if (48 === i) {
              switch (t.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (o = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (o = 55);
                  break;
                default:
                  return +t;
              }
              for (var a, c = t.slice(2), u = 0, l = c.length; u < l; u++)
                if ((a = c.charCodeAt(u)) < 48 || a > o) return NaN;
              return parseInt(c, r);
            }
          }
          return +t;
        };
      if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
        f = function(e) {
          var t = arguments.length < 1 ? 0 : e,
            n = this;
          return n instanceof f &&
            (v
              ? c(function() {
                  h.valueOf.call(n);
                })
              : "Number" != i(n))
            ? a(new d(y(t)), n, f)
            : y(t);
        };
        for (
          var b,
            O = n(17)
              ? u(d)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            j = 0;
          O.length > j;
          j++
        )
          o(d, (b = O[j])) && !o(f, b) && p(f, b, l(d, b));
        (f.prototype = h), (h.constructor = f), n(31)(r, "Number", f);
      }
    },
    84: function(e, t, n) {},
    85: function(e, t, n) {}
  }
]);
