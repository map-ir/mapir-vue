# Composition (slots)

You can use Mapbox-GL features as Vue component and compose it as a child of `mapir`, check examples below for further details.

::: tip render order
All components placed under `mapir` will be rendered only after map fully loaded.
:::

## Examples

### map controls

<br/>

<ClientOnly>
  <SimpleControls />
</ClientOnly>

```vue
<template>
  <mapir :apiKey="mapirToken">
    <mapNavigationControl position="top-right" />
    <mapGeolocateControl position="top-right" />
  </mapir>
</template>

<script>
import { mapir, mapNavigationControl, mapGeolocateControl } from "mapir-vue";

export default {
  name: "SimpleControls",
  components: {
    mapir,
    mapNavigationControl,
    mapGeolocateControl
  },
  data() {
    return {
      coordinates: [51.420296, 35.732379],
      mapirToken: "<Your API Key>"
    };
  }
};
</script>
```

### popup

<br/>

<ClientOnly>
  <Popup />
</ClientOnly>

```vue
<template>
  <mapir :apiKey="mapirToken" :center="coordinates">
    <mapPopup :coordinates="popupCoordinates" anchor="bottom" :showed="true">
      <span>Hello world!</span>
    </mapPopup>
  </mapir>
</template>

<script>
import { mapir, mapPopup } from "mapir-vue";

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
      mapirToken: "<Your API Key>"
    };
  }
};
</script>
```

mapir-vue component will work even if it wrapped in another component as long as they in components sub-tree of base map component.

For example:

**_Popup wrapper_**:

```vue
<template>
  <div class="popup-wrapper">
    <mapPopup :coordinates="popupCoordinates" anchor="bottom" :showed="true">
      <span>Hello world!</span>
    </mapPopup>
  </div>
</template>

<script>
import { mapPopup } from 'mapir-vue';

export default {
  name: 'PopupWrapper'
  components: {
    mapPopup
  },
  computed() {
    popupCoordinates() {
      // Here we can do some work for calculate proper coordinates
      //...
      return [51, 32]
    }
  }
}
</script>
```

**_Main component_**:

```vue
<template>
  <div id="#app">
    <mapir :apiKey="mapirToken" :center="coordinates">
      <PopupWrapper />
      <!-- works! -->
    </mapir>
  </div>
</template>

<script>
import { mapir } from "mapir-vue";
import PopupWrapper from "PopupWrapper"; // wrapper for popup

export default {
  components: {
    mapir,
    PopupWrapper // wrapper for popup
  },
  data() {
    return {
      coordinates: [51.420296, 35.732379],
      mapirToken: "<Your API Key>"
    };
  }
};
</script>
```

::: tip
MapirVue internally use dependency injection mechanism (`provide/inject` in Vue [docs](https://vuejs.org)). It means that any component in `mapir` sub-tree can access to `map`, `mapbox` and `actions` through `inject` property.
:::

After successful mount all components emits `added` envent with Vue component object and additional data, such as corresponding Mapbox GL JS object or object containing layer id in payload.
