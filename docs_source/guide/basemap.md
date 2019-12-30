# Base map

## prerequisit

For using mapir component you need a **API Key**, head over to [registration panel](https://corp.map.ir/registration/) and get yours.

## Adding mapir component

to use `mapir-vue`, simply import and add it to the `components` in your `.vue` file:

```vue
<template>
  <div id="app">
    <mapir :center="center" :apiKey="apiKey"></mapir>
  </div>
</template>

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

<style>
#app {
  width: 90vw;
  height: 90vh;
}
</style>
```

make sure place `mapir` component in an element with `width` and `height` set, now you should be able to see map on your page, like below:

::: tip
If you need, you can pass Mapbox-gl-js implementation as `mapboxGl` prop. May be useful for **lazy-loading**:

```vue
<template>
  <mapir :mapboxGl="mapbox - gl" :apiKey="apiKey" @load="onMapLoaded" />
</template>
```

If none is passed, MapirVue imports Mapbox-gl internally.
:::

### Interact with map properties as Map props

You can control map parameters like zoom, bearing, pitch, etc. by changing props.
If you set `.sync` modifier ([Vue docs](https://vuejs.org/v2/guide/components.html#sync-Modifier)) to prop, it will updates when you use operations that takes time to proceed. For example, if you use `flyTo` method, props `zoom`, `center`, `bearing`, `pitch` will be updated when animation ends.

Full list of props is available at [API docs](/api/#props), note field `Synced` in descriptions.

<!-- ## Map loading -->

## Events and Map object

Events are subscribable object, which trigger on user actions and
Payload of each event contains Mapbox-GL `Map` object. for example when map loads, `mapir` component emits `load` event, you can access the map object using `event.map`.

> See full list of **events** on [API](/api/#events) page.

### Storing Map object

Take note that it's generally bad idea to add anything but primitive types and **plain objects** to Vuex or component's `data`. Vue adds getters and setters to every property, so if you add `Map` object to Vuex store or component `data`, it may lead to weird bugs.
If you want to store map object, store it as non-reactive property like in example below:

```vue
<template>
  <mapir :apiKey="apiKey" @load="onMapLoaded" />
</template>

<script>
export default {
  created() {
    // define a variable here to be non-reactive
    this.map = null;
  },
  methods: {
    onMapLoaded(event) {
      // in component
      this.map = event.map;
      // or just to store if you want have access from other components
      this.$store.map = event.map;
    }
  }
};
</script>
```

## Map actions

Actions are asynchronous map methods exposed from mapir component in `actions` property of the component object. They return `Promise`, that resolves when action completed. each promise resolves with map properties that has been changed by used actions:

```vue
<script>
export deafult {
  name: 'App',
  methods: {
    async onMapLoad(event) {
      // Here we cathing 'load' map event
      const asyncActions = event.component.actions

      const newParams = await asyncActions.flyTo({
        center: [30, 30],
        zoom: 9,
        speed: 1
      })
      console.log(newParams)
      /* => {
              center: [30, 30],
              zoom: 9,
              bearing: 9,
              pitch: 7
            }
      */
    }
  }
}
</script>
```

> See full list of **actions** on [API](/api/#actions) page.

### Method `actions.stop()`

Method `.stop()` just stops all animations on map, updates props with new positions and return Promise with map parameters at the moment when `.stop()` called.
