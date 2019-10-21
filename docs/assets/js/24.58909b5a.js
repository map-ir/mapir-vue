(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    162: function(t, a, n) {
      "use strict";
      n.r(a);
      var s = n(17),
        e = Object(s.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              n = t._self._c || a;
            return n(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                n("h1", { attrs: { id: "plugin-components" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#plugin-components",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Plugin components")
                ]),
                t._v(" "),
                n("p", [
                  t._v(
                    "MapirVue implements wrapper for core Mapbox Gl JS library API."
                  ),
                  n("br"),
                  t._v("\nAny other functions, like "),
                  n(
                    "a",
                    {
                      attrs: {
                        href: "https://docs.mapbox.com/mapbox-gl-js/plugins/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("Mapbox Gl JS plugins"), n("OutboundLink")],
                    1
                  ),
                  t._v(
                    " is out of scope.\nHowever, they can be implemented as plugin components."
                  )
                ]),
                t._v(" "),
                n("h2", { attrs: { id: "using-plugin-components" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#using-plugin-components",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Using plugin components")
                ]),
                t._v(" "),
                n("p", [
                  t._v(
                    "Using plugin components is easy. Just put component inside "
                  ),
                  n("code", [t._v("mapir")]),
                  t._v(
                    " components tree and pass necessary props to it.\nBelow is example for using "
                  ),
                  n(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/map-ir/mapir-vue-geocoder",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("VueMapbox Geocoder"), n("OutboundLink")],
                    1
                  ),
                  t._v(".")
                ]),
                t._v(" "),
                n("div", { staticClass: "language-vue extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                    n("code", [
                      n("span", { pre: !0, attrs: { class: "token tag" } }, [
                        n("span", { pre: !0, attrs: { class: "token tag" } }, [
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template")
                        ]),
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n  "),
                      n("span", { pre: !0, attrs: { class: "token tag" } }, [
                        n("span", { pre: !0, attrs: { class: "token tag" } }, [
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("mapir")
                        ]),
                        t._v(" "),
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":apiKey")]
                        ),
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            n(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            n(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("apiKey"),
                            n(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      n("span", { pre: !0, attrs: { class: "token tag" } }, [
                        n("span", { pre: !0, attrs: { class: "token tag" } }, [
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("mapGeocoderControl")
                        ]),
                        t._v("\n      "),
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":apiKey")]
                        ),
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            n(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            n(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("apiKey"),
                            n(
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
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":input.sync")]
                        ),
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            n(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            n(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("defaultInput"),
                            n(
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
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("@results")]
                        ),
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            n(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            n(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("handleSearch"),
                            n(
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
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      t._v("\n  "),
                      n("span", { pre: !0, attrs: { class: "token tag" } }, [
                        n("span", { pre: !0, attrs: { class: "token tag" } }, [
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("mapir")
                        ]),
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n"),
                      n("span", { pre: !0, attrs: { class: "token tag" } }, [
                        n("span", { pre: !0, attrs: { class: "token tag" } }, [
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template")
                        ]),
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n\n"),
                      n("span", { pre: !0, attrs: { class: "token tag" } }, [
                        n("span", { pre: !0, attrs: { class: "token tag" } }, [
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      n(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token script language-javascript" }
                        },
                        [
                          t._v("\n"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("import")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" mapir "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("from")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"mapir-vue"')]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("import")]
                          ),
                          t._v(" mapGeocoderControl "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("from")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"mapir-vue-geocoder"')]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n\n"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("export")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("default")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  name"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"App"')]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\n  components"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    mapir"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    mapGeocoderControl\n  "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("data")]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("return")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      apiKey"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"some_token"')]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      defaultInput"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Bodhgaya"')]
                          ),
                          t._v("\n    "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n  "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  methods"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("handleSearch")]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          t._v("event"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      console"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("log")]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          t._v("event"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n    "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n  "),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n")
                        ]
                      ),
                      n("span", { pre: !0, attrs: { class: "token tag" } }, [
                        n("span", { pre: !0, attrs: { class: "token tag" } }, [
                          n(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        n(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                n(
                  "p",
                  [
                    t._v(
                      "If you didn't find plugin your need, it's easy to implement plugin component yourself.\nMapirVue solves map loading task and give some useful helpers.\nCheck out development "
                    ),
                    n(
                      "router-link",
                      {
                        attrs: {
                          to:
                            "/plugin_components/plugin_components_development.html"
                        }
                      },
                      [t._v("documantation")]
                    ),
                    t._v(".")
                  ],
                  1
                ),
                t._v(" "),
                n("h2", { attrs: { id: "available-plugin-components" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#available-plugin-components",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Available plugin components")
                ]),
                t._v(" "),
                n("ul", [
                  n("li", [
                    n(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/map-ir/mapir-vue-geocoder",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("VueMapbox Geocoder"), n("OutboundLink")],
                      1
                    )
                  ])
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
      e.options.__file = "README.md";
      a.default = e.exports;
    }
  }
]);
