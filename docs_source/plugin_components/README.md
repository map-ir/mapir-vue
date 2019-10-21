# Plugin components

MapirVue implements wrapper for core Mapbox Gl JS library API.  
Any other functions, like [Mapbox Gl JS plugins](https://docs.mapbox.com/mapbox-gl-js/plugins/) is out of scope.
However, they can be implemented as plugin components.

## Using plugin components

Using plugin components is easy. Just put component inside `mapir` components tree and pass necessary props to it.
Below is example for using [VueMapbox Geocoder](https://github.com/map-ir/mapir-vue-geocoder).

```vue
<template>
  <mapir :apiKey="apiKey">
    <mapGeocoderControl
      :apiKey="apiKey"
      :input.sync="defaultInput"
      @results="handleSearch"
    />
  </mapir>
</template>

<script>
import { mapir } from "mapir-vue";
import mapGeocoderControl from "mapir-vue-geocoder";

export default {
  name: "App",

  components: {
    mapir,
    mapGeocoderControl
  },
  data() {
    return {
      apiKey: "some_token",
      defaultInput: "Bodhgaya"
    };
  },
  methods: {
    handleSearch(event) {
      console.log(event);
    }
  }
};
</script>
```

If you didn't find plugin your need, it's easy to implement plugin component yourself.
MapirVue solves map loading task and give some useful helpers.
Check out development [documantation](/plugin_components/plugin_components_development.md).

## Available plugin components

- [VueMapbox Geocoder](https://github.com/map-ir/mapir-vue-geocoder)
