(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    220: function(t, n, e) {
      "use strict";
      e.r(n);
      var i = e(25),
        a = e(24),
        c = {
          name: "ClickEvent",
          components: { mapir: i.g },
          data: function() {
            return { coordinates: [51.420296, 35.732379], mapirToken: a.a };
          },
          created: function() {},
          methods: {
            mapOnClick: function(t) {
              alert(
                "coordinate clicked: ".concat(
                  JSON.stringify(t.actualEvent.lngLat, 2)
                )
              );
            }
          }
        },
        o = e(0),
        r = Object(o.a)(
          c,
          function() {
            var t = this.$createElement,
              n = this._self._c || t;
            return n(
              "div",
              { staticStyle: { width: "100%", height: "400px" } },
              [
                n("mapir", {
                  attrs: { apiKey: this.mapirToken, center: this.coordinates },
                  on: { click: this.mapOnClick }
                })
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
      n.default = r.exports;
    }
  }
]);
