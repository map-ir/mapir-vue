(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    241: function(t, a, s) {
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
                s("h1", { attrs: { id: "base-map" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#base-map" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Base map")
                ]),
                t._v(" "),
                s("br"),
                t._v(" "),
                s("ClientOnly", [s("Simple")], 1),
                t._v(" "),
                s("h2", { attrs: { id: "prerequisit" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#prerequisit" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" prerequisit")
                ]),
                t._v(" "),
                s("p", [
                  t._v("For using mapir component you need a "),
                  s("strong", [t._v("API Key")]),
                  t._v(", head over to "),
                  s(
                    "a",
                    {
                      attrs: {
                        href: "https://corp.map.ir/registration/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("registration panel"), s("OutboundLink")],
                    1
                  ),
                  t._v(" and get yours.")
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "adding-mapir-component" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#adding-mapir-component" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Adding mapir component")
                ]),
                t._v(" "),
                s("p", [
                  t._v("to use "),
                  s("code", [t._v("mapir-vue")]),
                  t._v(", simply import and add it to the "),
                  s("code", [t._v("components")]),
                  t._v(" in your "),
                  s("code", [t._v(".vue")]),
                  t._v(" file:")
                ]),
                t._v(" "),
                s("div", { staticClass: "language-vue extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template")
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
                          t._v("div")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("id")]
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
                            t._v("app"),
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
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("mapir")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":center")]
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
                            t._v("center"),
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
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":apiKey")]
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
                            t._v("apiKey"),
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
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("mapir")
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
                            [t._v("</")]
                          ),
                          t._v("div")
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
                          t._v("template")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s("span", { pre: !0, attrs: { class: "token script" } }, [
                        s(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token language-javascript" }
                          },
                          [
                            t._v("\n"),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" mapir "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"mapir-vue"')]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n"),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("export")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("default")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  name"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"App"')]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  components"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" mapir "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("data")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("return")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n      apiKey"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token constant" } },
                              [t._v("YOUR_API_KEY")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n      center"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("51.420296")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("35.732379")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ]
                        )
                      ]),
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
                      t._v("\n\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("style")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s("span", { pre: !0, attrs: { class: "token style" } }, [
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token language-css" } },
                          [
                            t._v("\n"),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token selector" } },
                              [t._v("#app")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("width")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" 90vw"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("height")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" 90vh"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n")
                          ]
                        )
                      ]),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("style")
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
                  t._v("make sure place "),
                  s("code", [t._v("mapir")]),
                  t._v(" component in an element with "),
                  s("code", [t._v("width")]),
                  t._v(" and "),
                  s("code", [t._v("height")]),
                  t._v(
                    " set, now you should be able to see map on your page, like below:"
                  )
                ]),
                t._v(" "),
                s("div", { staticClass: "custom-block tip" }, [
                  s("p", { staticClass: "custom-block-title" }, [t._v("TIP")]),
                  t._v(" "),
                  s("p", [
                    t._v(
                      "If you need, you can pass Mapbox-gl-js implementation as "
                    ),
                    s("code", [t._v("mapboxGl")]),
                    t._v(" prop. May be useful for "),
                    s("strong", [t._v("lazy-loading")]),
                    t._v(":")
                  ]),
                  t._v(" "),
                  s("div", { staticClass: "language-vue extra-class" }, [
                    s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                      s("code", [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token tag" } },
                            [
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" }
                                },
                                [t._v("<")]
                              ),
                              t._v("template")
                            ]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(">")]
                          )
                        ]),
                        t._v("\n  "),
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token tag" } },
                            [
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" }
                                },
                                [t._v("<")]
                              ),
                              t._v("mapir")
                            ]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token attr-name" } },
                            [t._v(":mapboxGl")]
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
                              t._v("mapbox - gl"),
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token attr-name" } },
                            [t._v(":apiKey")]
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
                              t._v("apiKey"),
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token attr-name" } },
                            [t._v("@load")]
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
                              t._v("onMapLoaded"),
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("/>")]
                          )
                        ]),
                        t._v("\n"),
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token tag" } },
                            [
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" }
                                },
                                [t._v("</")]
                              ),
                              t._v("template")
                            ]
                          ),
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
                      "If none is passed, MapirVue imports Mapbox-gl internally."
                    )
                  ])
                ]),
                t._v(" "),
                s(
                  "h3",
                  {
                    attrs: { id: "interact-with-map-properties-as-map-props" }
                  },
                  [
                    s(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#interact-with-map-properties-as-map-props"
                        }
                      },
                      [t._v("#")]
                    ),
                    t._v(" Interact with map properties as Map props")
                  ]
                ),
                t._v(" "),
                s("p", [
                  t._v(
                    "You can control map parameters like zoom, bearing, pitch, etc. by changing props.\nIf you set "
                  ),
                  s("code", [t._v(".sync")]),
                  t._v(" modifier ("),
                  s(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://vuejs.org/v2/guide/components.html#sync-Modifier",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("Vue docs"), s("OutboundLink")],
                    1
                  ),
                  t._v(
                    ") to prop, it will updates when you use operations that takes time to proceed. For example, if you use "
                  ),
                  s("code", [t._v("flyTo")]),
                  t._v(" method, props "),
                  s("code", [t._v("zoom")]),
                  t._v(", "),
                  s("code", [t._v("center")]),
                  t._v(", "),
                  s("code", [t._v("bearing")]),
                  t._v(", "),
                  s("code", [t._v("pitch")]),
                  t._v(" will be updated when animation ends.")
                ]),
                t._v(" "),
                s(
                  "p",
                  [
                    t._v("Full list of props is available at "),
                    s("router-link", { attrs: { to: "/api/#props" } }, [
                      t._v("API docs")
                    ]),
                    t._v(", note field "),
                    s("code", [t._v("Synced")]),
                    t._v(" in descriptions.")
                  ],
                  1
                ),
                t._v(" "),
                s("h2", { attrs: { id: "events-and-map-object" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#events-and-map-object" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Events and Map object")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "Events are subscribable object, which trigger on user actions and\nPayload of each event contains Mapbox-GL "
                  ),
                  s("code", [t._v("Map")]),
                  t._v(" object. for example when map loads, "),
                  s("code", [t._v("mapir")]),
                  t._v(" component emits "),
                  s("code", [t._v("load")]),
                  t._v(" event, you can access the map object using "),
                  s("code", [t._v("event.map")]),
                  t._v(".")
                ]),
                t._v(" "),
                s("blockquote", [
                  s(
                    "p",
                    [
                      t._v("See full list of "),
                      s("strong", [t._v("events")]),
                      t._v(" on "),
                      s("router-link", { attrs: { to: "/api/#events" } }, [
                        t._v("API")
                      ]),
                      t._v(" page.")
                    ],
                    1
                  )
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "example-map-click-event" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#example-map-click-event" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" example: map click event")
                ]),
                t._v(" "),
                s("p", [
                  t._v("Here is an example of adding event listeners (here "),
                  s("code", [t._v("click")]),
                  t._v(
                    " event) on mapir component, click on map to trigger the event:"
                  )
                ]),
                t._v(" "),
                s("ClientOnly", [s("ClickEvent")], 1),
                t._v(" "),
                s("div", { staticClass: "language-vue extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template")
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
                          t._v("div")
                        ]),
                        s(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token style-attr language-css" }
                          },
                          [
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token attr-name" } },
                              [
                                t._v(" "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token attr-name" }
                                  },
                                  [t._v("style")]
                                )
                              ]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('="')]
                            ),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token attr-value" } },
                              [
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" }
                                  },
                                  [t._v("width")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" }
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" 100%"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" }
                                  },
                                  [t._v(";")]
                                ),
                                t._v(" "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" }
                                  },
                                  [t._v("height")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" }
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" 400px"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" }
                                  },
                                  [t._v(";")]
                                )
                              ]
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
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("mapir")
                        ]),
                        t._v("\n      "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":apiKey")]
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
                            t._v("mapirToken"),
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
                          [t._v(":center")]
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
                            t._v("coordinates"),
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
                          [t._v("@click")]
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
                            t._v("mapOnClick"),
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
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("mapir")
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
                            [t._v("</")]
                          ),
                          t._v("div")
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
                          t._v("template")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s("span", { pre: !0, attrs: { class: "token script" } }, [
                        s(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token language-javascript" }
                          },
                          [
                            t._v("\n"),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" mapir "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"mapir-vue"')]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n"),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("export")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("default")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  name"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"ClickEvent"')]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  components"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    mapir\n  "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("data")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("return")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n      coordinates"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("51.420296")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("35.732379")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n      mapirToken"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"<Your API Key>"')]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  methods"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("mapOnClick")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token parameter" } },
                              [t._v("e")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n      "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("alert")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token template-string" }
                              },
                              [
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token template-punctuation string"
                                    }
                                  },
                                  [t._v("`")]
                                ),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v("coordinate clicked: ")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token interpolation" }
                                  },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: {
                                          class:
                                            "token interpolation-punctuation punctuation"
                                        }
                                      },
                                      [t._v("${")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token constant" }
                                      },
                                      [t._v("JSON")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" }
                                      },
                                      [t._v(".")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token function" }
                                      },
                                      [t._v("stringify")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" }
                                      },
                                      [t._v("(")]
                                    ),
                                    t._v("e"),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" }
                                      },
                                      [t._v(".")]
                                    ),
                                    t._v("actualEvent"),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" }
                                      },
                                      [t._v(".")]
                                    ),
                                    t._v("lngLat"),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" }
                                      },
                                      [t._v(",")]
                                    ),
                                    t._v(" "),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token number" }
                                      },
                                      [t._v("2")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" }
                                      },
                                      [t._v(")")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: {
                                          class:
                                            "token interpolation-punctuation punctuation"
                                        }
                                      },
                                      [t._v("}")]
                                    )
                                  ]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token template-punctuation string"
                                    }
                                  },
                                  [t._v("`")]
                                )
                              ]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ]
                        )
                      ]),
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
                      t._v("\n")
                    ])
                  ])
                ]),
                s("h2", { attrs: { id: "storing-map-object" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#storing-map-object" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Storing Map object")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "Take note that it's generally bad idea to add anything but primitive types and "
                  ),
                  s("strong", [t._v("plain objects")]),
                  t._v(" to Vuex or component's "),
                  s("code", [t._v("data")]),
                  t._v(
                    ". Vue adds getters and setters to every property, so if you add "
                  ),
                  s("code", [t._v("Map")]),
                  t._v(" object to Vuex store or component "),
                  s("code", [t._v("data")]),
                  t._v(
                    ", it may lead to weird bugs.\nIf you want to store map object, store it as non-reactive property like in example below:"
                  )
                ]),
                t._v(" "),
                s("div", { staticClass: "language-vue extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template")
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
                          t._v("mapir")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":apiKey")]
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
                            t._v("apiKey"),
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
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("@load")]
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
                            t._v("onMapLoaded"),
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
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
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
                          t._v("template")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s("span", { pre: !0, attrs: { class: "token script" } }, [
                        s(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token language-javascript" }
                          },
                          [
                            t._v("\n"),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("export")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("default")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("created")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "// define a variable here to be non-reactive"
                                )
                              ]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("this")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("map "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("null")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  methods"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("onMapLoaded")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token parameter" } },
                              [t._v("event")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n      "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// in component")]
                            ),
                            t._v("\n      "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("this")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("map "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" event"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("map"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n      "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "// or just to store if you want have access from other components"
                                )
                              ]
                            ),
                            t._v("\n      "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("this")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("$store"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("map "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" event"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("map"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ]
                        )
                      ]),
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
                      t._v("\n")
                    ])
                  ])
                ]),
                s("h2", { attrs: { id: "map-actions" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#map-actions" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Map actions")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "Actions are asynchronous map methods exposed from mapir component in "
                  ),
                  s("code", [t._v("actions")]),
                  t._v(" property of the component object. They return "),
                  s("code", [t._v("Promise")]),
                  t._v(
                    ", that resolves when action completed. each promise resolves with map properties that has been changed by used actions:"
                  )
                ]),
                t._v(" "),
                s("div", { staticClass: "language-vue extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s("span", { pre: !0, attrs: { class: "token script" } }, [
                        s(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token language-javascript" }
                          },
                          [
                            t._v("\n"),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("export")]
                            ),
                            t._v(" deafult "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  name"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'App'")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  methods"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("async")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("onMapLoad")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token parameter" } },
                              [t._v("event")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n      "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// Here we cathing 'load' map event")]
                            ),
                            t._v("\n      "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" asyncActions "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" event"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("component"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("actions\n\n      "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" newParams "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" asyncActions"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("flyTo")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        center"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("30")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("30")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        zoom"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("9")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        speed"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1")]
                            ),
                            t._v("\n      "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n      console"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("log")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("newParams"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n      "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "/* => {\n              center: [30, 30],\n              zoom: 9,\n              bearing: 9,\n              pitch: 7\n            }\n      */"
                                )
                              ]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n")
                          ]
                        )
                      ]),
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
                      t._v("\n")
                    ])
                  ])
                ]),
                s("blockquote", [
                  s(
                    "p",
                    [
                      t._v("See full list of "),
                      s("strong", [t._v("actions")]),
                      t._v(" on "),
                      s("router-link", { attrs: { to: "/api/#actions" } }, [
                        t._v("API")
                      ]),
                      t._v(" page.")
                    ],
                    1
                  )
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "method-actions-stop" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#method-actions-stop" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Method "),
                  s("code", [t._v("actions.stop()")])
                ]),
                t._v(" "),
                s("p", [
                  t._v("Method "),
                  s("code", [t._v(".stop()")]),
                  t._v(
                    " just stops all animations on map, updates props with new positions and return Promise with map parameters at the moment when "
                  ),
                  s("code", [t._v(".stop()")]),
                  t._v(" called.")
                ])
              ],
              1
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
