# Map controls

## Overview

Controls is UI elemetns for controlling view of the map, such as scale or bearing.
You can check them out in Mapbox GL JS [documentation](https://docs.mapbox.com/mapbox-gl-js/api/#user%20interface)
In mapir-vue they exposed as Vue components, so you can control they properties and behavior dynamically by changing props.

_All controls_:

```vue
<template>
  <div id="#app">
    <mapir
      :apiKey="apiKey"
      :attributionControl="false"
    >
      <mapAttributionControl />
      <mapNavigationControl position="top-right" />
      <mapGeolocateControl position="top-right" />
      <mapNavigationControl position="top-right" />
      <mapGeolocateControl position="top-right" />
      <mapScaleControl />
    </mapir>
  </div>
</template>

<script>
import {
  mapir,
  mapAttributionControl,
  mapNavigationControl,
  mapGeolocateControl,
  mapFullscreenControl,
  mapScaleControl
} from "mapir-vue";

export default {
  components: {
    mapir,
    mapNavigationControl,
    mapGeolocateControl
  },
  data() {
    return {
      apiKey: "some_token"
    };
  }
};
</script>
```

See list of controls and they properties in [API docs](/api/controls.md).

### Attribution control

Due to Mapbox [policy](https://docs.mapbox.com/help/how-attribution-works/) attribution control
is enabled by default. You can disable default attributions by setting
`attributionControl` prop of mapir to `false` and set your own attribution
using AttributionControl component.
