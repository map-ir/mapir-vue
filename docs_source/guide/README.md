# Quickstart

## Using as ES module

### prerequisites

please install `@vue/cli-plugin-babel` version `4.0.0` as development dependancy (which uses `@babel/core` version `7.7.4`):

```json
"@vue/cli-plugin-babel": "^4.0.0"
```

and add it to `babel.config.js`:

```js
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"]
};
```

### Installation

You can install `mapir-vue` via npm:

```bash
npm i mapir-vue
```

::: tip mapbox dependancy
since our component uses [mapbox](https://www.mapbox.com/) as it's foundation, by installing `mapir-vue`, `mapbox-gl@1.6.0` is installed as dependancy.
:::

::: danger package rename
`mapir-vue` package would rename to `mapir-vue-component` in **future releases**.
:::

## Using in browser

### Installation

Add Vue, MapboxGL and mapir-vue scripts on your page:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- ... -->
    <!-- Mapbox GL CSS -->
    <link
      href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css"
      rel="stylesheet"
    />
    <!-- mapir-vue CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/mapir-vue@latest/dist/mapir-vue.css"
      rel="stylesheet"
    />
    <!-- Mapbox GL JS -->
    <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.js"></script>
    <!-- VueJS -->
    <script src="https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js"></script>
    <!-- mapir-vue -->
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/mapir-vue@latest/dist/mapir-vue.min.js"
    ></script>
    <!-- ... -->
  </head>
</html>
```

All components will be placed in global MapirVue object (`MapirVue.mapir` etc.)
