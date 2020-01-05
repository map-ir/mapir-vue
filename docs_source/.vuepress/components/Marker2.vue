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
      mapirToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNjNmVhNzY4ZmZlNDYzMDc3YWQ0N2FhYmRiOTZiMDBmNzM0MTQ5ODZmMGNjY2NjNDg1ZmY1NzJkODc3MDRjNjVjNTE0NzZmMjJkNGUxYmFkIn0.eyJhdWQiOiI2OTgxIiwianRpIjoiY2M2ZWE3NjhmZmU0NjMwNzdhZDQ3YWFiZGI5NmIwMGY3MzQxNDk4NmYwY2NjY2M0ODVmZjU3MmQ4NzcwNGM2NWM1MTQ3NmYyMmQ0ZTFiYWQiLCJpYXQiOjE1NzU5NTY4NzksIm5iZiI6MTU3NTk1Njg3OSwiZXhwIjoxNTc4NDYyNDc5LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.eMvK5TXkHotGZK-oVPFmVuRhEoNOsWxQzW3BOSzYNpVNO1zJHuW34whUKtzl4AcBWxXZ-w2uXusdjzZ0v0PGY7iV8meHhmqTi4t0oY0TTKd6bpDlaHck-Cg9DwVCZpkbWoj4dvuIfVzI7lztaqP9HpMoqUED-Nrk6POuhND7h9MxrJ5gsgOcn8VMBrxLvH3HJVHcbcH283gpsS-iUadWwBbYEIALBx99jUx2lE1dxxFHPKoYwopHkLdXSO37FPDKgMRR6QDmuMAxtRlRA1acxoIFKk5iV7EA82vjihC1f8AZwLnvUtJBRgiYZQO6XApCe1B8NzLtr079jUNvn6fv3g"
    };
  },
  created() {
  },
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

<style>
</style>