(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    225: function(i, t, o) {
      "use strict";
      o.r(t);
      var N = o(29),
        a = {
          name: "SimpleControls",
          components: {
            mapir: N.g,
            mapNavigationControl: N.d,
            mapGeolocateControl: N.b
          },
          data: function() {
            return {
              coordinates: [51.420296, 35.732379],
              MapirToken:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNjNmVhNzY4ZmZlNDYzMDc3YWQ0N2FhYmRiOTZiMDBmNzM0MTQ5ODZmMGNjY2NjNDg1ZmY1NzJkODc3MDRjNjVjNTE0NzZmMjJkNGUxYmFkIn0.eyJhdWQiOiI2OTgxIiwianRpIjoiY2M2ZWE3NjhmZmU0NjMwNzdhZDQ3YWFiZGI5NmIwMGY3MzQxNDk4NmYwY2NjY2M0ODVmZjU3MmQ4NzcwNGM2NWM1MTQ3NmYyMmQ0ZTFiYWQiLCJpYXQiOjE1NzU5NTY4NzksIm5iZiI6MTU3NTk1Njg3OSwiZXhwIjoxNTc4NDYyNDc5LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.eMvK5TXkHotGZK-oVPFmVuRhEoNOsWxQzW3BOSzYNpVNO1zJHuW34whUKtzl4AcBWxXZ-w2uXusdjzZ0v0PGY7iV8meHhmqTi4t0oY0TTKd6bpDlaHck-Cg9DwVCZpkbWoj4dvuIfVzI7lztaqP9HpMoqUED-Nrk6POuhND7h9MxrJ5gsgOcn8VMBrxLvH3HJVHcbcH283gpsS-iUadWwBbYEIALBx99jUx2lE1dxxFHPKoYwopHkLdXSO37FPDKgMRR6QDmuMAxtRlRA1acxoIFKk5iV7EA82vjihC1f8AZwLnvUtJBRgiYZQO6XApCe1B8NzLtr079jUNvn6fv3g"
            };
          }
        },
        n = o(0),
        m = Object(n.a)(
          a,
          function() {
            var i = this.$createElement,
              t = this._self._c || i;
            return t(
              "div",
              { staticStyle: { width: "100%", height: "400px" } },
              [
                t(
                  "mapir",
                  { attrs: { apiKey: this.MapirToken } },
                  [
                    t("mapNavigationControl", {
                      attrs: { position: "top-right" }
                    }),
                    this._v(" "),
                    t("mapGeolocateControl", {
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
      t.default = m.exports;
    }
  }
]);
