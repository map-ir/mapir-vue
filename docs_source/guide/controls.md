# Map controls

<ClientOnly>
  <Controls />
</ClientOnly>

## Overview

Controls are UI elements for controlling view of the map, such as scale or bearing.
You can check them out in Mapbox-GL JS ([documentation](https://docs.mapbox.com/mapbox-gl-js/api/#user%20interface)).
In `mapir-vue` they are exposed as Vue components, so you can control they properties and behavior dynamically by changing props:

_All controls_:

```vue
<template>
  <div style="width: 100%; height: 400px;">
    <mapir :apiKey="MapirToken">
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
} from "mapir-vue";

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
      MapirToken: "<Your API Key>"
    };
  }
};
</script>
```

See list of controls and they properties in [API docs](/api/controls.md).
