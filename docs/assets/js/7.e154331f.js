(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    221: function(t, o, i) {
      "use strict";
      i.r(o);
      var a = i(25),
        n = i(24),
        r = {
          name: "Controls",
          components: {
            mapir: a.g,
            mapNavigationControl: a.d,
            mapGeolocateControl: a.b,
            mapScaleControl: a.f
          },
          data: function() {
            return { coordinates: [51.420296, 35.732379], mapirToken: n.a };
          }
        },
        p = i(0),
        e = Object(p.a)(
          r,
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
                    o("mapAttributionControl"),
                    this._v(" "),
                    o("mapNavigationControl", {
                      attrs: { position: "top-right" }
                    }),
                    this._v(" "),
                    o("mapGeolocateControl", {
                      attrs: { position: "top-right" }
                    }),
                    this._v(" "),
                    o("mapScaleControl", { attrs: { position: "top-right" } }),
                    this._v(" "),
                    o("mapNavigationControl", {
                      attrs: { position: "top-left" }
                    }),
                    this._v(" "),
                    o("mapGeolocateControl", {
                      attrs: { position: "top-left" }
                    }),
                    this._v(" "),
                    o("mapScaleControl", { attrs: { position: "top-left" } })
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
      o.default = e.exports;
    }
  }
]);
