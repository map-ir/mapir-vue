(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    219: function(i, t, n) {
      "use strict";
      n.r(t);
      var e = {
          name: "ClickEvent",
          components: { mapir: n(24).g },
          data: function() {
            return {
              coordinates: [51.420296, 35.732379],
              mapirToken:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQxNGJmMWJmY2Y0MzI3MTM2YWFmYTU5NzJlZmZiZWMyMGZlYmUyMDdlNzU4M2VkNmNkNjM5YWE3YzVhYjJhOThkMWZjMDgzMGY2MTdkNWU3In0.eyJhdWQiOiI2OTQ1IiwianRpIjoiNDE0YmYxYmZjZjQzMjcxMzZhYWZhNTk3MmVmZmJlYzIwZmViZTIwN2U3NTgzZWQ2Y2Q2MzlhYTdjNWFiMmE5OGQxZmMwODMwZjYxN2Q1ZTciLCJpYXQiOjE1NzU3ODg2NTcsIm5iZiI6MTU3NTc4ODY1NywiZXhwIjoxNTc4Mjk0MjU3LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.LO11zLo_76J_QJlkTxwSMBER1kgYaf46oWmIE3X4objfsQ2jGo0Voi3H4qe2t00TeyPyjkpeqQdG-IMpbKkTK0jYNf4DRE2Bnh8Uny59H5Vm5tGWPyvNq3lmixOXDJs7yLfUv4EIdr_1TY9nIj5EN6NO8NOr82XExxBStzmzawwll1Zh7l2hM5Wuj3LzoMGnVH35RZQC81QfIQiWNM5tTWzVylAUc5FDdASGnwwPwBW2AVueWAZ-OiArMH74OH86boenofV9WX5St6xvqlAxHSB3G0sv4-207OezMxKOyaHKP9AFRaj9zmluFUZH3s4QG2coP8mBWfbhRk_EokaKMQ"
            };
          },
          created: function() {},
          methods: {
            mapOnClick: function(i) {
              alert(
                "coordinate clicked: ".concat(
                  JSON.stringify(i.actualEvent.lngLat, 2)
                )
              );
            }
          }
        },
        a = n(0),
        c = Object(a.a)(
          e,
          function() {
            var i = this.$createElement,
              t = this._self._c || i;
            return t(
              "div",
              { staticStyle: { width: "100%", height: "400px" } },
              [
                t("mapir", {
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
      t.default = c.exports;
    }
  }
]);
