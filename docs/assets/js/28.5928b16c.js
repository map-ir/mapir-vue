(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    241: function(t, s, a) {
      "use strict";
      a.r(s);
      var n = a(0),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                a("h1", { attrs: { id: "quickstart" } }, [
                  a(
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
                a("h2", { attrs: { id: "using-as-es-module" } }, [
                  a(
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
                a("h3", { attrs: { id: "prerequisites" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#prerequisites" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" prerequisites")
                ]),
                t._v(" "),
                a("p", [
                  t._v("please install "),
                  a("code", [t._v("@vue/cli-plugin-babel")]),
                  t._v(" version "),
                  a("code", [t._v("4.0.0")]),
                  t._v(" as development dependancy (which uses "),
                  a("code", [t._v("@babel/core")]),
                  t._v(" version "),
                  a("code", [t._v("7.7.4")]),
                  t._v("):")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-json extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-json" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"@vue/cli-plugin-babel"')]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"^4.0.0"')
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("p", [
                  t._v("and add it to "),
                  a("code", [t._v("babel.config.js")]),
                  t._v(":")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      t._v("module"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("exports "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  presets"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"@vue/cli-plugin-babel/preset"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h3", { attrs: { id: "installation" } }, [
                  a(
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
                a("p", [
                  t._v("You can install "),
                  a("code", [t._v("mapir-vue")]),
                  t._v(" via npm:")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-bash extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-bash" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("npm")]
                      ),
                      t._v(" i mapir-vue\n")
                    ])
                  ])
                ]),
                a("div", { staticClass: "custom-block tip" }, [
                  a("p", { staticClass: "custom-block-title" }, [
                    t._v("mapbox dependancy")
                  ]),
                  t._v(" "),
                  a("p", [
                    t._v("since our component uses "),
                    a(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("mapbox"), a("OutboundLink")],
                      1
                    ),
                    t._v(" as it's foundation, by installing "),
                    a("code", [t._v("mapir-vue")]),
                    t._v(", "),
                    a("code", [t._v("mapbox-gl@1.6.0")]),
                    t._v(" is installed as dependancy.")
                  ])
                ]),
                t._v(" "),
                a("div", { staticClass: "custom-block danger" }, [
                  a("p", { staticClass: "custom-block-title" }, [
                    t._v("package rename")
                  ]),
                  t._v(" "),
                  a("p", [
                    a("code", [t._v("mapir-vue")]),
                    t._v(" package would rename to "),
                    a("code", [t._v("mapir-vue-component")]),
                    t._v(" in "),
                    a("strong", [t._v("future releases")]),
                    t._v(".")
                  ])
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "using-in-browser" } }, [
                  a(
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
                a("h3", { attrs: { id: "installation-2" } }, [
                  a(
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
                a("p", [
                  t._v("Add Vue, MapboxGL and mapir-vue scripts on your page:")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-html extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token doctype" } },
                        [t._v("<!DOCTYPE html>")]
                      ),
                      t._v("\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("html")
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n  "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("head")
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- ... --\x3e")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- Mapbox GL CSS --\x3e")]
                      ),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("link")
                        ]),
                        t._v("\n      "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("href")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            a(
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
                            a(
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
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("rel")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("stylesheet"),
                            a(
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
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- mapir-vue CSS --\x3e")]
                      ),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("link")
                        ]),
                        t._v("\n      "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("href")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            a(
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
                            a(
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
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("rel")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("stylesheet"),
                            a(
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
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- Mapbox GL JS --\x3e")]
                      ),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("src")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            a(
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
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      a("span", { pre: !0, attrs: { class: "token script" } }),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- VueJS --\x3e")]
                      ),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("src")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            a(
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
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      a("span", { pre: !0, attrs: { class: "token script" } }),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- mapir-vue --\x3e")]
                      ),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        t._v("\n      "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("type")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("text/javascript"),
                            a(
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
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("src")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            a(
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
                            a(
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
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      a("span", { pre: !0, attrs: { class: "token script" } }),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- ... --\x3e")]
                      ),
                      t._v("\n  "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("head")
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("html")
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("p", [
                  t._v(
                    "All components will be placed in global MapirVue object ("
                  ),
                  a("code", [t._v("MapirVue.mapir")]),
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
      s.default = e.exports;
    }
  }
]);
