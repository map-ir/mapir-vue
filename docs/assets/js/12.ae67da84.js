(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    226: function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n(25),
        i = n(24),
        a = {
          name: "Simple",
          components: { mapir: o.g },
          data: function() {
            return { coordinates: [51.420296, 35.732379], mapirToken: i.a };
          },
          created: function() {},
          methods: {
            markerOnClick: function(t) {
              t.mapboxEvent.stopPropagation(),
                console.log("marker clicked: ", t);
            },
            getlatLng: function() {
              console.log(this.markerCoordinates);
            }
          }
        },
        r = n(0),
        c = Object(r.a)(
          a,
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "div",
              { staticStyle: { width: "100%", height: "400px" } },
              [
                e("mapir", {
                  attrs: { apiKey: this.mapirToken, center: this.coordinates }
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
      e.default = c.exports;
    }
  }
]);
