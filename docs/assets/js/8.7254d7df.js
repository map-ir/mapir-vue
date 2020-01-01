(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    221: function(e, o, i) {
      "use strict";
      i.r(o);
      var t = i(29),
        a = {
          name: "Geojson",
          components: { mapir: t.g, mapGeojsonLayer: t.a },
          data: function() {
            return {
              coordinates: [51.420296, 35.732379],
              MapirToken:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQxNGJmMWJmY2Y0MzI3MTM2YWFmYTU5NzJlZmZiZWMyMGZlYmUyMDdlNzU4M2VkNmNkNjM5YWE3YzVhYjJhOThkMWZjMDgzMGY2MTdkNWU3In0.eyJhdWQiOiI2OTQ1IiwianRpIjoiNDE0YmYxYmZjZjQzMjcxMzZhYWZhNTk3MmVmZmJlYzIwZmViZTIwN2U3NTgzZWQ2Y2Q2MzlhYTdjNWFiMmE5OGQxZmMwODMwZjYxN2Q1ZTciLCJpYXQiOjE1NzU3ODg2NTcsIm5iZiI6MTU3NTc4ODY1NywiZXhwIjoxNTc4Mjk0MjU3LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.LO11zLo_76J_QJlkTxwSMBER1kgYaf46oWmIE3X4objfsQ2jGo0Voi3H4qe2t00TeyPyjkpeqQdG-IMpbKkTK0jYNf4DRE2Bnh8Uny59H5Vm5tGWPyvNq3lmixOXDJs7yLfUv4EIdr_1TY9nIj5EN6NO8NOr82XExxBStzmzawwll1Zh7l2hM5Wuj3LzoMGnVH35RZQC81QfIQiWNM5tTWzVylAUc5FDdASGnwwPwBW2AVueWAZ-OiArMH74OH86boenofV9WX5St6xvqlAxHSB3G0sv4-207OezMxKOyaHKP9AFRaj9zmluFUZH3s4QG2coP8mBWfbhRk_EokaKMQ",
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
          },
          created: function() {},
          methods: {}
        },
        n = i(0),
        r = Object(n.a)(
          a,
          function() {
            var e = this.$createElement,
              o = this._self._c || e;
            return o(
              "mapir",
              { attrs: { apiKey: this.MapirToken, center: this.coordinates } },
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
