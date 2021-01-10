<template>
  <div style="width: 100%; height: 400px;">
    <mapir :apiKey="mapirToken" :center="coordinates">
      <mapGeojsonLayer
        sourceId="mySource"
        :source="geoJsonSource"
        layerId="myLayer"
        :layer="geoJsonlayer"
      />
    </mapir>
  </div>
</template>

<script>
import { mapir, mapGeojsonLayer } from "../../../src/main";
import token from "./token";

export default {
  name: "Geojson",
  components: {
    mapir,
    mapGeojsonLayer
  },
  data() {
    return {
      coordinates: [51.420296, 35.732379],
      mapirToken: token,
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
        paint: {
          "fill-color": "#888888",
          "fill-opacity": 0.4
        }
      }
    };
  }
};
</script>

<style></style>
