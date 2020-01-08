(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    224: function(i, o, t) {
      "use strict";
      t.r(o);
      var e = t(24),
        n = {
          name: "Popup",
          components: { mapir: e.g, mapPopup: e.e },
          data: function() {
            return {
              coordinates: [51.420296, 35.732379],
              popupCoordinates: [51.420296, 35.732379],
              mapirToken:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQxNGJmMWJmY2Y0MzI3MTM2YWFmYTU5NzJlZmZiZWMyMGZlYmUyMDdlNzU4M2VkNmNkNjM5YWE3YzVhYjJhOThkMWZjMDgzMGY2MTdkNWU3In0.eyJhdWQiOiI2OTQ1IiwianRpIjoiNDE0YmYxYmZjZjQzMjcxMzZhYWZhNTk3MmVmZmJlYzIwZmViZTIwN2U3NTgzZWQ2Y2Q2MzlhYTdjNWFiMmE5OGQxZmMwODMwZjYxN2Q1ZTciLCJpYXQiOjE1NzU3ODg2NTcsIm5iZiI6MTU3NTc4ODY1NywiZXhwIjoxNTc4Mjk0MjU3LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.LO11zLo_76J_QJlkTxwSMBER1kgYaf46oWmIE3X4objfsQ2jGo0Voi3H4qe2t00TeyPyjkpeqQdG-IMpbKkTK0jYNf4DRE2Bnh8Uny59H5Vm5tGWPyvNq3lmixOXDJs7yLfUv4EIdr_1TY9nIj5EN6NO8NOr82XExxBStzmzawwll1Zh7l2hM5Wuj3LzoMGnVH35RZQC81QfIQiWNM5tTWzVylAUc5FDdASGnwwPwBW2AVueWAZ-OiArMH74OH86boenofV9WX5St6xvqlAxHSB3G0sv4-207OezMxKOyaHKP9AFRaj9zmluFUZH3s4QG2coP8mBWfbhRk_EokaKMQ"
            };
          },
          created: function() {},
          methods: {}
        },
        a = t(0),
        m = Object(a.a)(
          n,
          function() {
            var i = this.$createElement,
              o = this._self._c || i;
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
      o.default = m.exports;
    }
  }
]);
