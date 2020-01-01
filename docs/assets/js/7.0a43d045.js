(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    220: function(t, i, o) {
      "use strict";
      o.r(i);
      var a = o(29),
        n = {
          name: "Controls",
          components: {
            mapir: a.g,
            mapNavigationControl: a.d,
            mapGeolocateControl: a.b,
            mapScaleControl: a.f
          },
          data: function() {
            return {
              coordinates: [51.420296, 35.732379],
              MapirToken:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNjNmVhNzY4ZmZlNDYzMDc3YWQ0N2FhYmRiOTZiMDBmNzM0MTQ5ODZmMGNjY2NjNDg1ZmY1NzJkODc3MDRjNjVjNTE0NzZmMjJkNGUxYmFkIn0.eyJhdWQiOiI2OTgxIiwianRpIjoiY2M2ZWE3NjhmZmU0NjMwNzdhZDQ3YWFiZGI5NmIwMGY3MzQxNDk4NmYwY2NjY2M0ODVmZjU3MmQ4NzcwNGM2NWM1MTQ3NmYyMmQ0ZTFiYWQiLCJpYXQiOjE1NzU5NTY4NzksIm5iZiI6MTU3NTk1Njg3OSwiZXhwIjoxNTc4NDYyNDc5LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.eMvK5TXkHotGZK-oVPFmVuRhEoNOsWxQzW3BOSzYNpVNO1zJHuW34whUKtzl4AcBWxXZ-w2uXusdjzZ0v0PGY7iV8meHhmqTi4t0oY0TTKd6bpDlaHck-Cg9DwVCZpkbWoj4dvuIfVzI7lztaqP9HpMoqUED-Nrk6POuhND7h9MxrJ5gsgOcn8VMBrxLvH3HJVHcbcH283gpsS-iUadWwBbYEIALBx99jUx2lE1dxxFHPKoYwopHkLdXSO37FPDKgMRR6QDmuMAxtRlRA1acxoIFKk5iV7EA82vjihC1f8AZwLnvUtJBRgiYZQO6XApCe1B8NzLtr079jUNvn6fv3g"
            };
          }
        },
        p = o(0),
        N = Object(p.a)(
          n,
          function() {
            var t = this.$createElement,
              i = this._self._c || t;
            return i(
              "div",
              { staticStyle: { width: "100%", height: "400px" } },
              [
                i(
                  "mapir",
                  { attrs: { apiKey: this.MapirToken } },
                  [
                    i("mapAttributionControl"),
                    this._v(" "),
                    i("mapNavigationControl", {
                      attrs: { position: "top-right" }
                    }),
                    this._v(" "),
                    i("mapGeolocateControl", {
                      attrs: { position: "top-right" }
                    }),
                    this._v(" "),
                    i("mapScaleControl", { attrs: { position: "top-right" } }),
                    this._v(" "),
                    i("mapNavigationControl", {
                      attrs: { position: "top-left" }
                    }),
                    this._v(" "),
                    i("mapGeolocateControl", {
                      attrs: { position: "top-left" }
                    }),
                    this._v(" "),
                    i("mapScaleControl", { attrs: { position: "top-left" } })
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
      i.default = N.exports;
    }
  }
]);
