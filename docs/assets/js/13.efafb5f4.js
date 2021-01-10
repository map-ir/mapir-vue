(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    227: function(t, o, a) {
      "use strict";
      a.r(o);
      var i = a(25),
        n = a(24),
        e = {
          name: "SimpleControls",
          components: {
            mapir: i.g,
            mapNavigationControl: i.d,
            mapGeolocateControl: i.b
          },
          data: function() {
            return { coordinates: [51.420296, 35.732379], mapirToken: n.a };
          }
        },
        r = a(0),
        p = Object(r.a)(
          e,
          function() {
            var t = this.$createElement,
              o = this._self._c || t;
            return o(
              "div",
              { staticStyle: { width: "100%", height: "400px" } },
              [
                o(
                  "mapir",
                  { attrs: { apiKey: this.mapirToken } },
                  [
                    o("mapNavigationControl", {
                      attrs: { position: "top-right" }
                    }),
                    this._v(" "),
                    o("mapGeolocateControl", {
                      attrs: { position: "top-right" }
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
      o.default = p.exports;
    }
  }
]);
