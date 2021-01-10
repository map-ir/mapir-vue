<template>
  <div style="width: 100%; height: 400px;">
    <mapir :apiKey="mapirToken">
      <mapAttributionControl />
      <mapNavigationControl position="top-right" />
      <mapGeolocateControl position="top-right" />
      <mapScaleControl position="top-right" />
      <mapNavigationControl position="top-left" />
      <mapGeolocateControl position="top-left" />
      <mapScaleControl position="top-left" />
    </mapir>
  </div>
</template>

<script>
import {
  mapir,
  mapNavigationControl,
  mapGeolocateControl,
  mapScaleControl
} from "../../../src/main";

import token from "./token";

export default {
  name: "Controls",
  components: {
    mapir,
    mapNavigationControl,
    mapGeolocateControl,
    mapScaleControl
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
