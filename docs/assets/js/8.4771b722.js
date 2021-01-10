(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    222: function(e, o, t) {
      "use strict";
      t.r(o);
      var r = t(25),
        a = t(24),
        n = {
          name: "Geojson",
          components: { mapir: r.g, mapGeojsonLayer: r.a },
          data: function() {
            return {
              coordinates: [51.420296, 35.732379],
              mapirToken: a.a,
              geoJsonSource: {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      properties: {},
                      geometry: {
                        type: "Polygon",
                        coordinates: [
                          [
                            [51.35061264038086, 35.74888069888655],
                            [51.34992599487305, 35.72352080874787],
                            [51.39352798461914, 35.678912411239935],
                            [51.4683723449707, 35.69048511140501],
                            [51.48468017578124, 35.7491593341318],
                            [51.39919281005859, 35.78244922192265],
                            [51.35061264038086, 35.74888069888655]
                          ]
                        ]
                      }
                    }
                  ]
                }
              },
              geoJsonlayer: {
                id: "myLayer",
                type: "fill",
                source: "mySource",
                paint: { "fill-color": "#888888", "fill-opacity": 0.4 }
              }
            };
          }
        },
        s = t(0),
        i = Object(s.a)(
          n,
          function() {
            var e = this.$createElement,
              o = this._self._c || e;
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
                    o("mapGeojsonLayer", {
                      attrs: {
                        sourceId: "mySource",
                        source: this.geoJsonSource,
                        layerId: "myLayer",
                        layer: this.geoJsonlayer
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
      o.default = i.exports;
    }
  }
]);
