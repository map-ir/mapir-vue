(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    238: function(e, r, t) {
      "use strict";
      t.r(r);
      var a = t(0),
        o = Object(a.a)(
          {},
          function() {
            var e = this,
              r = e.$createElement,
              t = e._self._c || r;
            return t(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                t("h1", { attrs: { id: "marker" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#marker" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Marker")
                ]),
                e._v(" "),
                t("h2", { attrs: { id: "props" } }, [
                  t(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#props" } },
                    [e._v("#")]
                  ),
                  e._v(" Props")
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "offset" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#offset" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("offset")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type")]),
                    e._v(": "),
                    t("code", [e._v("Array<number>")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(
                      " The offset in pixels as a PointLike object to apply relative to the element's center. Negatives indicate left and up."
                    )
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See:")]),
                    e._v(" "),
                    t("code", [e._v("offset")]),
                    e._v(" in "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#marker",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Marker"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "coordinates" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#coordinates" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("coordinates")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type")]),
                    e._v(": "),
                    t("code", [e._v("Array<number>")])
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Required")])]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Synced")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" Marker coordinates in format "),
                    t("code", [e._v("[longitude, latitude]")])
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "color" } }, [
                  t(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#color" } },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("color")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type")]),
                    e._v(": "),
                    t("code", [e._v("string")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(
                      " The color to use for the default marker if custom marker is not provided. The default is light blue."
                    )
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "anchor" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#anchor" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("anchor")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type")]),
                    e._v(": "),
                    t("code", [e._v("string")])
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Default")]),
                    e._v(" "),
                    t("code", [e._v("center")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(
                      " A string indicating the part of the Marker that should be positioned closest to the coordinate set via Marker#setLngLat . Options are 'center' , 'top' , 'bottom' , 'left' , 'right' , 'top-left' , 'top-right' , 'bottom-left' , and 'bottom-right' . The default is 'center'."
                    )
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See")]),
                    e._v(" "),
                    t("code", [e._v("options.anchor")]),
                    e._v(" in "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#marker",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Marker"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "draggable" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#draggable" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("draggable")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type")]),
                    e._v(": "),
                    t("code", [e._v("boolean")])
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Default")]),
                    e._v(" "),
                    t("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(
                      " A boolean indicating whether or not a marker is able to be dragged to a new position on the map."
                    )
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See")]),
                    e._v(" "),
                    t("code", [e._v("options.draggable")]),
                    e._v(" in "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#marker",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Marker"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h2", { attrs: { id: "slots" } }, [
                  t(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#slots" } },
                    [e._v("#")]
                  ),
                  e._v(" Slots")
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "marker-2" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#marker-2" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("marker")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(
                      " Slot for custom marker. Can be HTML element or Vue component."
                    )
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "default" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#default" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("default")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(
                      " Slot for popup component. When popup put inside marker, popup automaticaly mounted to marker, similiar as "
                    ),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#marker#setpopup",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("setPopup"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h2", { attrs: { id: "methods" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#methods" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Methods")
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "remove" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#remove" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v(".remove()")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" Removes marker from the map.")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Returns")]),
                    e._v(" "),
                    t("code", [e._v("Marker")]),
                    e._v(" MapboxGL marker.")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See")]),
                    e._v(" "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#marker#remove",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Marker.remove"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "togglepopup" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#togglepopup" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v(".togglePopup()")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(
                      " Opens or closes the bound popup, depending on the current state."
                    )
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Returns")]),
                    e._v(" "),
                    t("code", [e._v("Marker")]),
                    e._v(" MapboxGL marker.")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See")]),
                    e._v(" "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#marker#togglepopup",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Marker.togglePopup"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h2", { attrs: { id: "events" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#events" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Events")
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "added" } }, [
                  t(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#added" } },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@added")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" Fires when marker added on the map.")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Payload")]),
                    e._v(" "),
                    t("code", [
                      e._v(
                        "{ component: MarkerComponent, map: Map, marker: Marker }"
                      )
                    ]),
                    e._v(" Object with "),
                    t("code", [e._v("Marker")]),
                    e._v(" component, parent map and MapboxGl "),
                    t("code", [e._v("Marker")]),
                    e._v(" object")
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "removed" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#removed" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@removed")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" Fires when marker removed the map.")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Payload")]),
                    e._v(" "),
                    t("code", [
                      e._v(
                        "{ component: MarkerComponent, map: Map, marker: Marker }"
                      )
                    ]),
                    e._v(" Object with "),
                    t("code", [e._v("Marker")]),
                    e._v(" component, parent map and MapboxGl "),
                    t("code", [e._v("Marker")]),
                    e._v(" object")
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "drag" } }, [
                  t(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#drag" } },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@drag")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" Fires when marker dragged if marker "),
                    t("code", [e._v("draggable")]),
                    e._v(" prop is "),
                    t("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Payload")]),
                    e._v(" "),
                    t("code", [
                      e._v(
                        "{ component: MarkerComponent, map: Map, actualEvent: Event }"
                      )
                    ]),
                    e._v(" Object with "),
                    t("code", [e._v("Marker")]),
                    e._v(" component, parent map and original MapboxGl event")
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "dragstart" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#dragstart" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@dragstart")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" Fires when marker dragging starts if marker "),
                    t("code", [e._v("draggable")]),
                    e._v(" prop is "),
                    t("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Payload")]),
                    e._v(" "),
                    t("code", [
                      e._v(
                        "{ component: MarkerComponent, map: Map, actualEvent: Event }"
                      )
                    ]),
                    e._v(" Object with "),
                    t("code", [e._v("Marker")]),
                    e._v(" component, parent map and original MapboxGl event")
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "dragend" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#dragend" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@dragend")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" Fires when marker dragging ends if marker "),
                    t("code", [e._v("draggable")]),
                    e._v(" prop is "),
                    t("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Payload")]),
                    e._v(" "),
                    t("code", [
                      e._v(
                        "{ component: MarkerComponent, map: Map, actualEvent: Event }"
                      )
                    ]),
                    e._v(" Object with "),
                    t("code", [e._v("Marker")]),
                    e._v(" component, parent map and original MapboxGl event")
                  ])
                ]),
                e._v(" "),
                t(
                  "h3",
                  { attrs: { id: "click" } },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#click" }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    t("code", [e._v("@click")]),
                    e._v(" "),
                    t("Badge", {
                      attrs: { text: "experimental", type: "warn" }
                    })
                  ],
                  1
                ),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" Fires marker is clicked.")
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Payload")])])
                ]),
                e._v(" "),
                t("div", { staticClass: "language- extra-class" }, [
                  t("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    t("code", [
                      e._v(
                        "    {\n        component: MarkerComponent,\n        map: Map,\n        actualEvent: DOMEvent,\n        marker: Marker\n    }\n"
                      )
                    ])
                  ])
                ]),
                t("p", [
                  e._v("Object with "),
                  t("code", [e._v("Marker")]),
                  e._v(" component, parent map and original MapboxGl event")
                ]),
                e._v(" "),
                t(
                  "h3",
                  { attrs: { id: "mouseenter" } },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#mouseenter" }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    t("code", [e._v("@mouseenter")]),
                    e._v(" "),
                    t("Badge", {
                      attrs: { text: "experimental", type: "warn" }
                    })
                  ],
                  1
                ),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" Fires when mouse cursor enters marker area.")
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Payload")])])
                ]),
                e._v(" "),
                t("div", { staticClass: "language- extra-class" }, [
                  t("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    t("code", [
                      e._v(
                        "    {\n        component: MarkerComponent,\n        map: Map,\n        actualEvent: DOMEvent,\n        marker: Marker\n    }\n"
                      )
                    ])
                  ])
                ]),
                t("p", [
                  e._v("Object with "),
                  t("code", [e._v("Marker")]),
                  e._v(" component, parent map and original MapboxGl event")
                ]),
                e._v(" "),
                t(
                  "h3",
                  { attrs: { id: "mouseleave" } },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#mouseleave" }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    t("code", [e._v("@mouseleave")]),
                    e._v(" "),
                    t("Badge", {
                      attrs: { text: "experimental", type: "warn" }
                    })
                  ],
                  1
                ),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" Fires when mouse cursor leaves marker area.")
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Payload")])])
                ]),
                e._v(" "),
                t("div", { staticClass: "language- extra-class" }, [
                  t("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    t("code", [
                      e._v(
                        "    {\n        component: MarkerComponent,\n        map: Map,\n        actualEvent: DOMEvent,\n        marker: Marker\n    }\n"
                      )
                    ])
                  ])
                ]),
                t("p", [
                  e._v("Object with "),
                  t("code", [e._v("Marker")]),
                  e._v(" component, parent map and original MapboxGl event")
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
      r.default = o.exports;
    }
  }
]);
