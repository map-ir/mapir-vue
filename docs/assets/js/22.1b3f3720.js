(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    233: function(e, t, o) {
      "use strict";
      o.r(t);
      var r = o(0),
        a = Object(r.a)(
          {},
          function() {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t;
            return o(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                o("h1", { attrs: { id: "canvaslayer" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#canvaslayer" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" CanvasLayer")
                ]),
                e._v(" "),
                o("h2", { attrs: { id: "props" } }, [
                  o(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#props" } },
                    [e._v("#")]
                  ),
                  e._v(" Props")
                ]),
                e._v(" "),
                o(
                  "p",
                  [
                    e._v("All common "),
                    o("router-link", { attrs: { to: "/api/Layers/#props" } }, [
                      e._v("layers props")
                    ])
                  ],
                  1
                ),
                e._v(" "),
                o("h3", { attrs: { id: "source" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#source" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("source")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Object | String")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" A data source containing video.")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("Video source")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#videosource",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox API Docs"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("div", { staticClass: "custom-block tip" }, [
                  o("p", { staticClass: "custom-block-title" }, [
                    e._v("Reactivity")
                  ]),
                  e._v(" "),
                  o("p", [
                    o("code", [e._v("coordinates")]),
                    e._v(" field of the "),
                    o("code", [e._v("source")]),
                    e._v(
                      " prop is reactive.\nIf you change it's value, changes automatically applied to the map."
                    )
                  ])
                ]),
                e._v(" "),
                o("h2", { attrs: { id: "computed-getters" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#computed-getters" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Computed getters")
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "video" } }, [
                  o(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#video" } },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("video")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Description")]),
                    e._v(" Returns the HTML video element.")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See")]),
                    e._v(" "),
                    o("code", [e._v(".getVideo()")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#videosource#getvideo",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("method"), o("OutboundLink")],
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
      t.default = a.exports;
    }
  }
]);
