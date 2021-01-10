<template>
  <div style="width: 100%; height: 400px;">
    <mapir :apiKey="mapirToken">
      <mapNavigationControl position="top-right" />
      <mapGeolocateControl position="top-right" />
    </mapir>
  </div>
</template>

<script>
import {
  mapir,
  mapNavigationControl,
  mapGeolocateControl
} from "../../../src/main";
import token from "./token";

export default {
  name: "SimpleControls",
  components: {
    mapir,
    mapNavigationControl,
    mapGeolocateControl
  },
  data() {
    return {
      coordinates: [51.420296, 35.732379],
      mapirToken: token
    };
  }
};
</script>

<style></style>
