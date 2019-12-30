module.exports = {
  title: "Mapir Vue Component",
  description: "Bring Map.ir to your vuejs app",
  dest: "docs",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: "/mapir-vue-component/",

  theme: undefined,

  themeConfig: {
    nav: [
      {
        text: "Guide",
        link: "/guide/"
      },
      {
        text: "API",
        link: "/api/"
      },
      { text: "Github", link: "https://github.com/map-ir/mapir-vue" },
      {
        text: "Get API key",
        link: "https://corp.map.ir/registration"
      }
    ],

    sidebar: [
      {
        title: "Guide",
        collapsable: false,
        children: [
          ["/guide/", "Quickstart"],
          ["/guide/basemap.md", "Base map"],
          ["/guide/composition.md", "Composition"],
          ["/guide/controls.md", "Controls"],
          ["/guide/markers&popups.md", "Markers and popups"],
          ["/guide/layers&sources.md", "Layers and sources"]
        ]
      },
      {
        title: "API",
        collapsable: false,
        children: [
          ["/api/", "Map"],
          ["/api/controls.md", "Controls"],
          ["/api/marker.md", "MapMarker"],
          ["/api/popup.md", "Popup"],
          ["/api/Layers/", "Layer commons"],
          ["/api/Layers/geojsonlayer.md", "GeojsonLayer"],
          ["/api/Layers/vectorlayer.md", "VectorLayer"],
          ["/api/Layers/rasterlayer.md", "RasterLayer"],
          ["/api/Layers/imagelayer.md", "ImageLayer"],
          ["/api/Layers/videolayer.md", "VideoLayer"],
          ["/api/Layers/canvaslayer.md", "CanvasLayer"]
        ]
      },
      {
        title: "Plugin components",
        collapsable: false,
        children: [
          ["/plugin_components/", "Using plugin components"],
          [
            "/plugin_components/plugin_components_development.md",
            "Create a plugin component"
          ]
        ]
      }
      // ['/plugins/', 'Plugins'],
    ]
    // search: false
  }
};
