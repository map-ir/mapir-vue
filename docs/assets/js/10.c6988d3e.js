(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    224: function(t, o, e) {
      "use strict";
      e.r(o);
      var n = e(25),
        a = e(24),
        p = {
          name: "Popup",
          components: { mapir: n.g, mapPopup: n.e },
          data: function() {
            return {
              coordinates: [51.420296, 35.732379],
              popupCoordinates: [51.420296, 35.732379],
              mapirToken: a.a
            };
          },
          created: function() {},
          methods: {}
        },
        i = e(0),
        r = Object(i.a)(
          p,
          function() {
            var t = this.$createElement,
              o = this._self._c || t;
            return o(
              "div",
              { staticStyle: { width: "100%", height: "400px" } },
              [
                o(
                  "mapir",
                  {
                    attrs: { apiKey: this.mapirToken, center: this.coordinates }
                  },
                  [
                    o(
                      "mapPopup",
                      {
                        attrs: {
                          coordinates: this.popupCoordinates,
                          anchor: "bottom",
                          showed: !0
                        }
                      },
                      [o("span", [this._v("Hello world!")])]
                    )
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
      o.default = r.exports;
    }
  }
]);
