# Layers and sources

<br />

<ClientOnly>
  <Geojson />
</ClientOnly>

`mapir` component easily allows drawing geographic features on the map using vue components, for example, `mapGeojsonLayer` component make it easy to draw geoJSON data on the map, using `source` prop that contains data for the desired layer (for example, GeoJSON object or url), and `layer` prop which has the configurations that declares how layer draws on the map (again object or url).

> You can read more about it in Mapbox-GL JS docs for [sources](https://docs.mapbox.com/mapbox-gl-js/api/#sources) and [layers](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers).

::: tip sources and layers
There is several layers types for drawing different types of sources.
several layers can use common `source` and draw it's data differently
:::

For example adding a layer with GeoJSON data:

## Adding layers

```vue
<template>
  <div style="width: 100%; height: 400px;">
    <mapir :apiKey="mapirToken" :center="coordinates">
      <mapGeojsonLayer
        sourceId="mySource"
        :source="geoJsonSource"
        layerId="myLayer"
        :layer="geoJsonlayer"
      />
    </mapir>
  </div>
</template>

<script>
import { mapir, mapGeojsonLayer } from "../../../src/main";

export default {
  name: "Geojson",
  components: {
    mapir,
    mapGeojsonLayer
  },
  data() {
    return {
      coordinates: [51.420296, 35.732379],
      mapirToken: "<Your API Key>",
      geoJsonSource: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [51.35061264038086, 35.74888069888655],
                    [51.34992599487305, 35.72352080874787],
                    [51.39352798461914, 35.678912411239935],
                    [51.4683723449707, 35.69048511140501],
                    [51.48468017578124, 35.7491593341318],
                    [51.39919281005859, 35.78244922192265],
                    [51.35061264038086, 35.74888069888655]
                  ]
                ]
              }
            }
          ]
        }
      },
      geoJsonlayer: {
        id: "myLayer",
        type: "fill",
        source: "mySource",
        paint: {
          "fill-color": "#888888",
          "fill-opacity": 0.4
        }
      }
    };
  }
};
</script>
```

In this example `geoJsonSource` can be an `object`, representing GeoJSON feature or `string` with URL to GeoJSON.

Sources are stored in Mapbox GL JS `Map` object by `sourceId`. If you sure that source already added to map, you can skip `source` prop and just pass `sourceId` and use same source for different layers. If you try to add same source with same `id` twice, MapirVue would just use `source` that already existed on the map, but you can set `replaceSource` prop to `true` to just replace old source with new one passed in `source` prop.

By default when Layer components destroying, it removes source from map. If you want to keep source on Map (for example, for future using or if other layers use this source), set `clearSource` prop to `false`.

## Reactivity

Layer components watch for changes in object in their `layer` prop and translate changes to map accordingly. For example, if you change content of `filter` prop in GeojsonLayer, changes will be automatically applied to layer on the map. Not all layer settings can be set dynamically, currently reactive properties are `minzoom`, `maxzoom`, `paint`, `layout` and `filter`.

## Layer getters

GeoJSON and Vector layers has getters for their features: `.getRenderedFeatures(filter?)`, `.getSourceFeatures(geometry?, filter?)` and `.getFeatureState(featureId)`. They works similar to [`.queryRenderedFeatures()`](https://docs.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures) and [`.querySourceFeatures()`](https://docs.mapbox.com/mapbox-gl-js/api/#map#querysourcefeatures) Map methods, but returns features only from source of current layer.

## Layer methods

Layer components has methods `move()` and `remove()`.
First moves a layer to a different z-position. Second destroys component and removes layer and source from map event if layer created with prop `clearSource: false`.

## Layer events

Layers emits events when loading data or on user interaction like `click`. See full list of events in [API section](/api/Layers/README.md#events)

## Migration from 0.1

In versoin `0.1` layer and source options was exposed via separate props.
Since `0.2` there are consolidated `source` object props for data source and `layer` for layer options. See [sources](https://docs.mapbox.com/mapbox-gl-js/api/#sources) and [layers](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers) in Mapbox GL JS docs.
