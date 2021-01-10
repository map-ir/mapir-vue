<template>
  <div style="width: 100%; height: 400px;">
    <mapir :apiKey="mapirToken" :center="coordinates">
      <mapPopup :coordinates="popupCoordinates" anchor="bottom" :showed="true">
        <span>Hello world!</span>
      </mapPopup>
    </mapir>
  </div>
</template>

<script>
import { mapir, mapPopup } from "../../../src/main";
import token from "./token";

export default {
  name: "Popup",
  components: {
    mapir,
    mapPopup
  },
  data() {
    return {
      coordinates: [51.420296, 35.732379],
      popupCoordinates: [51.420296, 35.732379],
      mapirToken: token
    };
  },
  created() {},
  methods: {}
};
</script>

<style></style>
