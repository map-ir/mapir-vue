# Markers and Popups

## Marker

<br />

<ClientOnly>
  <Marker2 />
</ClientOnly>

The Marker component is a wrapper around the [Mapbox-GL Marker API](https://docs.mapbox.com/mapbox-gl-js/api/#marker).

```vue
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
import { mapir, mapMarker } from "mapir-vue";

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
      mapirToken: "<Your API Key>"
    };
  }
};
</script>
```

### Props

|      Prop       |  Type   |                                                                Description                                                                 |
| :-------------: | :-----: | :----------------------------------------------------------------------------------------------------------------------------------------: |
|    **kind**     | Boolean |                             Sets the marker to be circle-marker or icon (circle-marker has only color `white`)                             |
|    **color**    | Boolean | Sets the color of the marker (not applicable when using the `marker` slot), default color is `red` and you can also use `blue` and `green` |
| **coordinates** | Boolean |                                          The GeoJSON coordinates for marker placement on the map                                           |
|   **offset**    |  Array  |                                       Displays the marker at an offset distance from the coordinates                                       |

See full list of props on [API page](/api/marker.md#props)

### Slots

The Marker component has two slots: the `marker` slot and default slot used for popup.

#### The `marker` slot

The _marker_ slot allows you to customize the look of the marker. Here is an example of using the [Vuetify `v-icon` component](https://vuetifyjs.com/en/components/icons) instead of the default marker icon:

```vue
<template>
  <mapir :apiKey="mapirToken" :center="coordinates">
    <mapMarker :coordinates="coordinates">
      <v-icon slot="marker">mdi-map-marker</v-icon>
    </mapMarker>
  </mapir>
</template>

<script>
import { mapir, mapMarker } from "mapir-vue";

export default {
  components: {
    mapir,
    mapMarker
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

### Default slot

Default slot allows you to specify content to display in a Mapbox popup when the marker is clicked. See [Markers & Popups together section](#markers-popups-together).

## Popup

<br />

<ClientOnly>
  <Popup />
</ClientOnly>

The Popup component is wrapper around the [Mapbox GL Popup API](https://docs.mapbox.com/mapbox-gl-js/api/#popup), a simple popup is created as so:

```vue
<template>
  <div style="width: 100%; height: 400px;">
    <mapir :apiKey="mapirToken" :center="coordinates">
      <mapPopup :coordinates="popupCoordinates" anchor="bottom" :showed="true">
        <span>Hello world!</span>
      </mapPopup>
    </mapir>
  </div>
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

::: tip Showing popups
Popups added to the map is hidden by default. If you want to show the popup immediately you need to set the prop `showed` to `true`
:::

You can specify content inside popup in default slot. It can be HTML or Vue component.
In this example [Vuetify card component](https://vuetifyjs.com/en/components/cards) used as a content for popup:

```vue
<template>
  <mapir :apiKey="mapirToken" :center="coordinates">
    <mapPopup :coordinates="coordinates" anchor="top">
      <VCard> <div>Hello, I'm popup!</div> </VCard>
    </mapPopup>
  </mapir>
</template>

<script>
import { mapir, mapPopup } from "mapir-vue";

export default {
  components: {
    mapir,
    mapPopup
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

Also if you set `onlyText` prop to `true` content in Popup default slot will be treated as plain text. It can be useful if you loading popup content from external untrusted source.

### Props

|     Prop     |  Type   |                                                  Description                                                  |
| :----------: | :-----: | :-----------------------------------------------------------------------------------------------------------: |
|    showed    | Boolean |                       If `true`, the popup shows immediately after component is created                       |
| closeButton  | Boolean |                  If `true`, a close button will appear in the top right corner of the popup                   |
| closeOnClick | Boolean |                            If true, the popup will closed when the map is clicked                             |
| coordinates  |  Array  | The GeoJSON coordinates for popup placement on the map. If popup used inside marker this prop will be ignored |
|    anchor    | String  |        prop specifies the part of the Popup that should be positioned closest to the coordinates point        |

Full list of props you can see on [API page](/api/popup.md#props)

## Markers & Popups together

<br />

<ClientOnly>
  <Marker2 />
</ClientOnly>

Popup often used inside of map markers. You can achive this by passing Popup inside Marker in default slot:

```vue
<template>
  <mapir :apiKey="mapboxapiKey" :center="coordinates">
    <mapMarker :coordinates="coordinates">
      <mapPopup>
        <VCard>
          <div>Hello, I'm popup!</div>
        </VCard>
      </mapPopup>
    </mapMarker>
  </mapir>
</template>

<script>
import { mapir, mapPopup, mapMarker } from "mapir-vue";

export default {
  components: {
    mapir,
    mapMarker,
    mapPopup
  },

  data() {
    return {
      coordinates: [-111.549668, 39.014]
    };
  }
};
</script>
```

In this case, Popup will be automatically bound to Marker. You can use `togglePopup` Marker method to toggle visibility of bound Popup.
Take note that Popup `coordinates` prop will be ignored.
