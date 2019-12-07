# MapirVueComponent
[![npm version](https://badge.fury.io/js/mapir-vue.svg)](https://www.npmjs.com/package/mapir-vue-component)

![Map.ir](https://map.ir/css/images/mapir-logo.png) Vue wrapper for mapbox-gl-js. Expose a bunch of component meant to be simple to use for Vue.

## Get API Key
🔑 You should first get api key from [Map.ir](https://corp.map.ir/registration/)

## Installation

```
npm i mapir-vue-component
```

## Quick start 

### Template
```xml
 <template>
  <div id="app">
    <mapir :apiKey="MapirApiKey" :center="coordinates" @load="onMapLoaded" @click="onClick"/>
  </div>
</template>
```
### Script
```jsx
<script>
import { mapir } from "mapir-vue";

export default {
  name: "App",
  components: {
    mapir
  },
  data() {
    return {
      coordinates: [51.420296, 35.732379],
      MapirApiKey: "pk.Mapir" // your Api Key.
    };
  },
  created() {
    this.map = null;
  },
  methods: {
    onMapLoaded(event) {
      // in component
      this.map = event.map;
      // or just to store if you want have access from other components
      this.$store.map = event.map;
    },
    onClick(e) {
      console.log(e, "HIiiiiiiii");
    }
  }
};
</script>
```
### Style
```jsx
<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
```
[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-template-xo2c9?fontsize=14)

📖 [English Documentation](https://map-ir.github.io/mapir-vue/)
