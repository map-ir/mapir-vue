(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    239: function(t, a, s) {
      "use strict";
      s.r(a);
      var n = s(0),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a;
            return s(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                s("h1", { attrs: { id: "quickstart" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#quickstart" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Quickstart")
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "using-as-es-module" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#using-as-es-module" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Using as ES module")
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "installation" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#installation" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Installation")
                ]),
                t._v(" "),
                s("p", [
                  t._v("You can install "),
                  s("code", [t._v("mapir-vue")]),
                  t._v(" via npm:")
                ]),
                t._v(" "),
                s("div", { staticClass: "language-bash extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-bash" } }, [
                    s("code", [
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("npm")]
                      ),
                      t._v(" i mapir-vue\n")
                    ])
                  ])
                ]),
                s("div", { staticClass: "custom-block tip" }, [
                  s("p", { staticClass: "custom-block-title" }, [
                    t._v("mapbox dependancy")
                  ]),
                  t._v(" "),
                  s("p", [
                    t._v("since our component uses "),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("mapbox"), s("OutboundLink")],
                      1
                    ),
                    t._v(" as it's foundation, by installing "),
                    s("code", [t._v("mapir-vue")]),
                    t._v(", "),
                    s("code", [t._v("mapbox-gl@1.6.0")]),
                    t._v(" is installed as dependancy.")
                  ])
                ]),
                t._v(" "),
                s("div", { staticClass: "custom-block warning" }, [
                  s("p", { staticClass: "custom-block-title" }, [
                    t._v("package rename")
                  ]),
                  t._v(" "),
                  s("p", [
                    s("code", [t._v("mapir-vue")]),
                    t._v(" package would rename to "),
                    s("code", [t._v("mapir-vue-component")]),
                    t._v(" in "),
                    s("strong", [t._v("future releases")]),
                    t._v(".")
                  ])
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "using-in-browser" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#using-in-browser" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Using in browser")
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "installation-2" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#installation-2" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Installation")
                ]),
                t._v(" "),
                s("p", [
                  t._v("Add Vue, MapboxGL and mapir-vue scripts on your page:")
                ]),
                t._v(" "),
                s("div", { staticClass: "language-html extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    s("code", [
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token doctype" } },
                        [t._v("<!DOCTYPE html>")]
                      ),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("html")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n  "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("head")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- ... --\x3e")]
                      ),
                      t._v("\n    "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- Mapbox GL CSS --\x3e")]
                      ),
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("link")
                        ]),
                        t._v("\n      "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("href")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v(
                              "https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css"
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n      "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("rel")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("stylesheet"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      t._v("\n    "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- mapir-vue CSS --\x3e")]
                      ),
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("link")
                        ]),
                        t._v("\n      "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("href")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v(
                              "https://cdn.jsdelivr.net/npm/mapir-vue@latest/dist/mapir-vue.css"
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n      "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("rel")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("stylesheet"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      t._v("\n    "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- Mapbox GL JS --\x3e")]
                      ),
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("src")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v(
                              "https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.js"
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s("span", { pre: !0, attrs: { class: "token script" } }),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- VueJS --\x3e")]
                      ),
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("src")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v(
                              "https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js"
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s("span", { pre: !0, attrs: { class: "token script" } }),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- mapir-vue --\x3e")]
                      ),
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        t._v("\n      "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("type")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("text/javascript"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n      "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("src")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v(
                              "https://cdn.jsdelivr.net/npm/mapir-vue@latest/dist/mapir-vue.min.js"
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s("span", { pre: !0, attrs: { class: "token script" } }),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- ... --\x3e")]
                      ),
                      t._v("\n  "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("head")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("html")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("p", [
                  t._v(
                    "All components will be placed in global MapirVue object ("
                  ),
                  s("code", [t._v("MapirVue.mapir")]),
                  t._v(" etc.)")
                ])
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      a.default = e.exports;
    }
  }
]);
