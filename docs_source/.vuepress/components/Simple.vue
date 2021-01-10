<template>
  <div style="width: 100%; height: 400px;">
    <mapir :apiKey="mapirToken" :center="coordinates"></mapir>
  </div>
</template>

<script>
import { mapir } from "../../../src/main";
import token from "./token";

export default {
  name: "Simple",
  components: {
    mapir
  },
  data() {
    return {
      coordinates: [51.420296, 35.732379],
      mapirToken: token
    };
  },
  created() {},
  methods: {
    markerOnClick(e) {
      e.mapboxEvent.stopPropagation();
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
