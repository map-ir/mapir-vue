(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    244: function(t, a, s) {
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
                s("h1", { attrs: { id: "layers-and-sources" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#layers-and-sources" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Layers and sources")
                ]),
                t._v(" "),
                s("p", [
                  s("code", [t._v("mapir")]),
                  t._v(
                    " component easily allows drawing geographic features on the map using vue components, for example, "
                  ),
                  s("code", [t._v("mapGeojsonLayer")]),
                  t._v(
                    " component make it easy to draw geoJSON data on the map. each if these components use "
                  ),
                  s("code", [t._v("source")]),
                  t._v(
                    " prop that contains data for the desired layer (for example, GeoJSON object or url), and "
                  ),
                  s("code", [t._v("layer")]),
                  t._v(
                    " prop which has the configurations that declares how layer draws on the map (again object or url)."
                  )
                ]),
                t._v(" "),
                s("blockquote", [
                  s("p", [
                    t._v(
                      "You can read more about it in Mapbox-GL JS docs for "
                    ),
                    s(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#sources",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("sources"), s("OutboundLink")],
                      1
                    ),
                    t._v(" and "),
                    s(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("layers"), s("OutboundLink")],
                      1
                    ),
                    t._v(".")
                  ])
                ]),
                t._v(" "),
                s("div", { staticClass: "custom-block tip" }, [
                  s("p", { staticClass: "custom-block-title" }, [
                    t._v("sources and layers")
                  ]),
                  t._v(" "),
                  s("p", [
                    t._v(
                      "There is several layers types for drawing different types of sources.\nalso, multiple layers can use common "
                    ),
                    s("code", [t._v("source")]),
                    t._v(" and draw it's data differently.")
                  ])
                ]),
                t._v(" "),
                s("p", [t._v("For example adding a layer with GeoJSON data:")]),
                t._v(" "),
                s("h2", { attrs: { id: "adding-layers" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#adding-layers" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Adding layers")
                ]),
                t._v(" "),
                s("br"),
                t._v(" "),
                s("ClientOnly", [s("Geojson")], 1),
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
                          t._v("mapGeojsonLayer")
                        ]),
                        t._v("\n        "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("sourceId")]
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
                            t._v("mySource"),
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
                        t._v("\n        "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":source")]
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
                            t._v("geoJsonSource"),
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
                        t._v("\n        "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("layerId")]
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
                            t._v("myLayer"),
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
                        t._v("\n        "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":layer")]
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
                            t._v("geoJsonlayer"),
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
                            t._v(" mapir"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" mapGeojsonLayer "),
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
                              [t._v('"Geojson"')]
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
                            t._v("\n    mapGeojsonLayer\n  "),
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
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n      geoJsonSource"),
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
                            t._v("\n        type"),
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
                              [t._v('"geojson"')]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        data"),
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
                            t._v("\n          type"),
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
                              [t._v('"FeatureCollection"')]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n          features"),
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
                            t._v("\n            "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n              type"),
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
                              [t._v('"Feature"')]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n              properties"),
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
                            t._v("\n              geometry"),
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
                            t._v("\n                type"),
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
                              [t._v('"Polygon"')]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                coordinates"),
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
                            t._v("\n                  "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            t._v("\n                    "),
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
                              [t._v("51.35061264038086")]
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
                              [t._v("35.74888069888655")]
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
                            t._v("\n                    "),
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
                              [t._v("51.34992599487305")]
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
                              [t._v("35.72352080874787")]
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
                            t._v("\n                    "),
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
                              [t._v("51.39352798461914")]
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
                              [t._v("35.678912411239935")]
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
                            t._v("\n                    "),
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
                              [t._v("51.4683723449707")]
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
                              [t._v("35.69048511140501")]
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
                            t._v("\n                    "),
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
                              [t._v("51.48468017578124")]
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
                              [t._v("35.7491593341318")]
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
                            t._v("\n                    "),
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
                              [t._v("51.39919281005859")]
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
                              [t._v("35.78244922192265")]
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
                            t._v("\n                    "),
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
                              [t._v("51.35061264038086")]
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
                              [t._v("35.74888069888655")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            t._v("\n                  "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            t._v("\n                "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            t._v("\n              "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n            "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n          "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            t._v("\n        "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
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
                              [t._v(",")]
                            ),
                            t._v("\n      geoJsonlayer"),
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
                            t._v("\n        id"),
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
                              [t._v('"myLayer"')]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        type"),
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
                              [t._v('"fill"')]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        source"),
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
                              [t._v('"mySource"')]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        paint"),
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
                            t._v("\n          "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"fill-color"')]
                            ),
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
                              [t._v('"#888888"')]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n          "),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"fill-opacity"')]
                            ),
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
                              [t._v("0.4")]
                            ),
                            t._v("\n        "),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
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
                s("div", { staticClass: "custom-block tip" }, [
                  s("p", { staticClass: "custom-block-title" }, [
                    t._v("Layer Source")
                  ]),
                  t._v(" "),
                  s("p", [
                    t._v("In this example "),
                    s("code", [t._v("geoJsonSource")]),
                    t._v(" can be an "),
                    s("code", [t._v("object")]),
                    t._v(", representing GeoJSON feature or "),
                    s("code", [t._v("string")]),
                    t._v(" with URL to GeoJSON.")
                  ])
                ]),
                t._v(" "),
                s("h4", { attrs: { id: "accessing-sources" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#accessing-sources" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Accessing Sources")
                ]),
                t._v(" "),
                s("p", [
                  t._v("Sources are stored in "),
                  s("code", [t._v("Map")]),
                  t._v(" object by "),
                  s("code", [t._v("sourceId")]),
                  t._v(
                    ". If you sure that source already added to map, you can skip "
                  ),
                  s("code", [t._v("source")]),
                  t._v(" prop and just pass "),
                  s("code", [t._v("sourceId")]),
                  t._v(
                    " and use same source for different layers. If you try to add same source with same "
                  ),
                  s("code", [t._v("id")]),
                  t._v(" twice, MapirVue would just use "),
                  s("code", [t._v("source")]),
                  t._v(" that already existed on the map, but you can set "),
                  s("code", [t._v("replaceSource")]),
                  t._v(" prop to "),
                  s("code", [t._v("true")]),
                  t._v(" to just replace old source with new one passed in "),
                  s("code", [t._v("source")]),
                  t._v(" prop.")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "By default when destroying layer components, source is removed from map. If you want to keep the source (for example, for future using or if other layers use this source), set "
                  ),
                  s("code", [t._v("clearSource")]),
                  t._v(" prop to "),
                  s("code", [t._v("false")]),
                  t._v(".")
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "reactivity" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#reactivity" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Reactivity")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "Layer components watch for changes in object in their "
                  ),
                  s("code", [t._v("layer")]),
                  t._v(
                    " prop and translate changes to map accordingly. For example, if you change content of "
                  ),
                  s("code", [t._v("filter")]),
                  t._v(
                    " prop in GeojsonLayer, changes will be automatically applied to layer on the map. Not all layer settings can be set dynamically, currently reactive properties are "
                  ),
                  s("code", [t._v("minzoom")]),
                  t._v(", "),
                  s("code", [t._v("maxzoom")]),
                  t._v(", "),
                  s("code", [t._v("paint")]),
                  t._v(", "),
                  s("code", [t._v("layout")]),
                  t._v(" and "),
                  s("code", [t._v("filter")]),
                  t._v(".")
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "layer-getters" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#layer-getters" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Layer getters")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "GeoJSON and Vector layers has getters for their features: "
                  ),
                  s("code", [t._v(".getRenderedFeatures(filter?)")]),
                  t._v(", "),
                  s("code", [t._v(".getSourceFeatures(geometry?, filter?)")]),
                  t._v(" and "),
                  s("code", [t._v(".getFeatureState(featureId)")]),
                  t._v(". They work similar to "),
                  s(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v(".queryRenderedFeatures()"), s("OutboundLink")],
                    1
                  ),
                  t._v(" and "),
                  s(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.mapbox.com/mapbox-gl-js/api/#map#querysourcefeatures",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v(".querySourceFeatures()"), s("OutboundLink")],
                    1
                  ),
                  t._v(
                    " Mapbox-gl JS Map methods, but return features only from source of current layer."
                  )
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "layer-methods" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#layer-methods" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Layer methods")
                ]),
                t._v(" "),
                s("p", [
                  t._v("Layer components has methods "),
                  s("code", [t._v("move()")]),
                  t._v(" and "),
                  s("code", [t._v("remove()")]),
                  t._v(
                    ".\nFirst moves a layer to a different z-position. Second destroys component and removes layer and source from map event if layer created with prop "
                  ),
                  s("code", [t._v("clearSource: false")]),
                  t._v(".")
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "layer-events" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#layer-events" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Layer events")
                ]),
                t._v(" "),
                s(
                  "p",
                  [
                    t._v(
                      "Layers emits events when loading data or on user interaction like "
                    ),
                    s("code", [t._v("click")]),
                    t._v(". See full list of events in "),
                    s("router-link", { attrs: { to: "/api/Layers/#events" } }, [
                      t._v("API section")
                    ])
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
      a.default = e.exports;
    }
  }
]);
