(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    222: function(i, e, o) {
      "use strict";
      o.r(e);
      var a = o(29),
        r = {
          name: "mapirMarker",
          components: { mapir: a.g, mapMarker: a.c },
          data: function() {
            return {
              coordinates: [51.420296, 35.732379],
              markerCoordinates: [51.420296, 35.732379],
              MapirToken:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNjNmVhNzY4ZmZlNDYzMDc3YWQ0N2FhYmRiOTZiMDBmNzM0MTQ5ODZmMGNjY2NjNDg1ZmY1NzJkODc3MDRjNjVjNTE0NzZmMjJkNGUxYmFkIn0.eyJhdWQiOiI2OTgxIiwianRpIjoiY2M2ZWE3NjhmZmU0NjMwNzdhZDQ3YWFiZGI5NmIwMGY3MzQxNDk4NmYwY2NjY2M0ODVmZjU3MmQ4NzcwNGM2NWM1MTQ3NmYyMmQ0ZTFiYWQiLCJpYXQiOjE1NzU5NTY4NzksIm5iZiI6MTU3NTk1Njg3OSwiZXhwIjoxNTc4NDYyNDc5LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.eMvK5TXkHotGZK-oVPFmVuRhEoNOsWxQzW3BOSzYNpVNO1zJHuW34whUKtzl4AcBWxXZ-w2uXusdjzZ0v0PGY7iV8meHhmqTi4t0oY0TTKd6bpDlaHck-Cg9DwVCZpkbWoj4dvuIfVzI7lztaqP9HpMoqUED-Nrk6POuhND7h9MxrJ5gsgOcn8VMBrxLvH3HJVHcbcH283gpsS-iUadWwBbYEIALBx99jUx2lE1dxxFHPKoYwopHkLdXSO37FPDKgMRR6QDmuMAxtRlRA1acxoIFKk5iV7EA82vjihC1f8AZwLnvUtJBRgiYZQO6XApCe1B8NzLtr079jUNvn6fv3g"
            };
          },
          created: function() {},
          methods: {
            markerOnClick: function(i) {
              i.mapboxEvent.stopPropagation(),
                console.log("marker clicked: ", i);
            },
            getlatLng: function() {
              console.log(this.markerCoordinates);
            }
          }
        },
        t = o(0),
        n = Object(t.a)(
          r,
          function() {
            var i = this,
              e = i.$createElement,
              o = i._self._c || e;
            return o(
              "div",
              { staticStyle: { width: "100%", height: "400px" } },
              [
                o(
                  "mapir",
                  { attrs: { apiKey: i.MapirToken, center: i.coordinates } },
                  [
                    o("mapMarker", {
                      attrs: {
                        coordinates: i.markerCoordinates,
                        color: "blue",
                        draggable: !0
                      },
                      on: {
                        "update:coordinates": function(e) {
                          i.markerCoordinates = e;
                        },
                        click: i.markerOnClick,
                        dragend: i.getlatLng
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
      e.default = n.exports;
    }
  }
]);
