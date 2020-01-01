---
home: true
heroImage: /logo.svg
actionText: Get Started →
actionLink: /guide/
features:
  - title: Declarative style
    details: You can use map elements like layers, markers, popups as Vue components and control them via synchronized props
  - title: Vuefied
    details: Map elements declared as components respect Vue lifecycle, emit map events like Vue events and can be used in OOP-style

  - title: Promisified async actions
    details: You can do async map operations and get results in Promise without messing with map events and figuring out what action cause it
footer: MIT Licensed
---

<!-- ::: tip Persian Documentation
Persian documentation would be available on support.map.ir soon.
::: -->

This component is based on Soal's vue-mapbox [available here!](https://github.com/soal/vue-mapbox)

## Quick Start

<ClientOnly>
  <Simple />
</ClientOnly>

```vue
<template>
  <mapir :center="center" :apiKey="apiKey"></mapir>
</template>

<script>
import { mapir } from "mapir-vue";

export default {
  name: "App",
  components: {
    mapir
  },
  data() {
    return {
      apiKey: "some_token",
      center: [51.420296, 35.732379]
    };
  }
};
</script>

<style>
#app {
  width: 90vw;
  height: 90vh;
}
</style>
```

you can get your API Key from [registration panel](https://corp.map.ir/registration/)

<!-- ::: tip Dependencies
[Vue.js 2.5+](https://github.com/vuejs/vue)
::: -->

<!-- ::: warning Browser compatibility
_Coming soon_
::: -->
