(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    223: function(e, r, a) {
      "use strict";
      a.r(r);
      var n = a(25),
        t = a(24),
        o = {
          name: "mapirMarker",
          components: { mapir: n.g, mapMarker: n.c },
          data: function() {
            return {
              coordinates: [51.420296, 35.732379],
              markerCoordinates: [51.420296, 35.732379],
              mapirToken: t.a
            };
          },
          created: function() {},
          methods: {
            markerOnClick: function(e) {
              console.log("marker clicked: ", e);
            },
            getlatLng: function() {
              console.log(this.markerCoordinates);
            }
          }
        },
        i = a(0),
        c = Object(i.a)(
          o,
          function() {
            var e = this,
              r = e.$createElement,
              a = e._self._c || r;
            return a(
              "div",
              { staticStyle: { width: "100%", height: "400px" } },
              [
                a(
                  "mapir",
                  { attrs: { apiKey: e.mapirToken, center: e.coordinates } },
                  [
                    a("mapMarker", {
                      attrs: {
                        coordinates: e.markerCoordinates,
                        color: "blue",
                        draggable: !0
                      },
                      on: {
                        "update:coordinates": function(r) {
                          e.markerCoordinates = r;
                        },
                        click: e.markerOnClick,
                        dragend: e.getlatLng
                      }
                    })
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
      r.default = c.exports;
    }
  }
]);
