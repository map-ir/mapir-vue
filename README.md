# MapirVueComponent

[![npm version](https://badge.fury.io/js/mapir-vue.svg)](https://www.npmjs.com/package/mapir-vue)

![Map.ir](https://map.ir/css/images/mapir-logo.png) Vue wrapper for mapbox-gl-js. Expose a bunch of component meant to be simple to use for Vue.

## Get API Key

🔑 You should first get api key from [Map.ir](https://corp.map.ir/registration/)

## Installation

```
npm i mapir-vue
```

## Quick start

### Template

```html
<template>
  <div id="app">
    <mapir :center="center" :apiKey="apiKey"></mapir>
  </div>
</template>
```

### Script

```html
<script>
  import { mapir } from "mapir-vue";

  export default {
    name: "App",
    components: { mapir },
    data() {
      return {
        apiKey: YOUR_API_KEY,
        center: [51.420296, 35.732379]
      };
    }
  };
</script>
```

### html

```html
<style>
  #app {
    width: 90vw;
    height: 90vh;
  }
</style>
```

[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-template-xo2c9?fontsize=14)

📖 [English Documentation](https://map-ir.github.io/mapir-vue/)
