<template>
  <div style="width: 100%; height: 400px;">
    <mapir :apiKey="mapirToken" :center="coordinates">
      <mapMarker
        :coordinates.sync="markerCoordinates"
        color="blue"
        @click="markerOnClick"
        :draggable="true"
        @dragend="getlatLng"
      />
    </mapir>
  </div>
</template>

<script>
import { mapir, mapMarker } from "../../../src/main";
import token from "./token";

export default {
  name: "mapirMarker",
  components: {
    mapir,
    mapMarker
  },
  data() {
    return {
      coordinates: [51.420296, 35.732379],
      markerCoordinates: [51.420296, 35.732379],
      mapirToken: token
    };
  },
  created() {},
  methods: {
    markerOnClick(e) {
      // e.mapboxEvent.stopPropagation();
      console.log("marker clicked: ", e);
    },
    getlatLng() {
      // console.log(e)
      console.log(this.markerCoordinates);
    }
  }
};
</script>

<style></style>
