<template>
  <div style="width: 100%; height: 400px;">
    <mapir
      :apiKey="mapirToken"
      :center="coordinates"
      @click="mapOnClick"
    ></mapir>
  </div>
</template>

<script>
import { mapir } from "../../../src/main";
import token from "./token";

export default {
  name: "ClickEvent",
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
    mapOnClick(e) {
      alert(`coordinate clicked: ${JSON.stringify(e.actualEvent.lngLat, 2)}`);
    }
  }
};
</script>

<style></style>
