# Composition

You can use Mapbox GL feature as Vue component and compose it as a child of Map. During creation all components waits until map properly initialized.

For example, adding map controls:

```vue
<template>
<div id="#app">
  <mapir
    :apiKey="apiKey"
  >
    <mapNavigationControl position="top-right"/>
    <mapGeolocateControl position="top-right" />
  </map-map>
</div>
</template>

<script>
import { mapir, mapNavigationControl, mapGeolocateControl } from "mapir-vue";

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

Adding a popup:

```vue
<template>
  <div id="#app">
    <mapir :apiKey="apiKey">
      <mapNavigationControl position="top-right" />
      <mapGeolocateControl position="top-right" />
      <mapPopup :coordinates="popupCoordinates">
        <span>Hello world!</span>
      </mapPopup>
    </mapir>
  </div>
</template>

<script>
import {
  mapir,
  mapNavigationControl,
  mapGeolocateControl,
  mapPopup
} from "mapir-vue";

export default {
  components: {
    mapir,
    mapNavigationControl,
    mapGeolocateControl,
    mapPopup
  },
  data() {
    return {
      apiKey: "some_token",
      popupCoordinates: [10, 10]
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
    <mapPopup :coordinates="popupCoordinates">
      <span>Hello world from wrapped popup!</span>
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
      return [10, 10]
    }
  }
}
</script>
```

**_Main component_**:

```vue
<template>
  <div id="#app">
    <mapir :apiKey="apiKey">
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
      apiKey: "some_token"
    };
  }
};
</script>
```

::: tip
MapirVue internally use dependency injection mechanism (`provide/inject` in Vue [docs](https://vuejs.org)). It means that any component in `mapir` sub-tree can access to `map`, `mapbox` and `actions` through `inject` property.
:::

After successful mount all components emits `added` envent with Vue component object and additional data, such as corresponding Mapbox GL JS object or object containing layer id in payload.
