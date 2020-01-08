(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    243: function(t, a, s) {
      "use strict";
      s.r(a);
      var n = s(0),
        p = Object(n.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a;
            return s(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                s("h1", { attrs: { id: "map-controls" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#map-controls" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Map controls")
                ]),
                t._v(" "),
                s("ClientOnly", [s("Controls")], 1),
                t._v(" "),
                s("h2", { attrs: { id: "overview" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#overview" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Overview")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "Controls are UI elements for controlling view of the map, such as scale or bearing.\nYou can check them out in Mapbox-GL JS ("
                  ),
                  s(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.mapbox.com/mapbox-gl-js/api/#user%20interface",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("documentation"), s("OutboundLink")],
                    1
                  ),
                  t._v(").\nIn "),
                  s("code", [t._v("mapir-vue")]),
                  t._v(
                    " they are exposed as Vue components, so you can control they properties and behavior dynamically by changing props:"
                  )
                ]),
                t._v(" "),
                s("p", [s("em", [t._v("All controls")]), t._v(":")]),
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
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n      "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("mapAttributionControl")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      t._v("\n      "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("mapNavigationControl")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("position")]
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
                            t._v("top-right"),
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
                      t._v("\n      "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("mapGeolocateControl")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("position")]
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
                            t._v("top-right"),
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
                      t._v("\n      "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("mapScaleControl")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("position")]
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
                            t._v("top-right"),
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
                      t._v("\n      "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("mapNavigationControl")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("position")]
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
                            t._v("top-left"),
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
                      t._v("\n      "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("mapGeolocateControl")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("position")]
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
                            t._v("top-left"),
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
                      t._v("\n      "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("mapScaleControl")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("position")]
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
                            t._v("top-left"),
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
                      t._v("\n    "),
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
                            t._v("\n  mapir"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  mapNavigationControl"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  mapGeolocateControl"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  mapScaleControl\n"),
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
                              [t._v('"Controls"')]
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
                            t._v("\n    mapir"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    mapNavigationControl"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    mapGeolocateControl"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    mapScaleControl\n  "),
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
                s(
                  "p",
                  [
                    t._v("See list of controls and they properties in "),
                    s("router-link", { attrs: { to: "/api/controls.html" } }, [
                      t._v("API docs")
                    ]),
                    t._v(".")
                  ],
                  1
                )
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
      a.default = p.exports;
    }
  }
]);
