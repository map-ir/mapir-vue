<template>
  <div style="display: none">
    <!-- slot for custom marker -->
    <slot name="marker" />
    <!-- slot for popup -->
    <slot v-if="marker" />
  </div>
</template>

<script>
import withEvents from "../../lib/withEvents";
import withSelfEvents from "./withSelfEvents";

const markerEvents = {
  drag: "drag",
  dragstart: "dragstart",
  dragend: "dragend"
};

const markerDOMEvents = {
  click: "click",
  mouseenter: "mouseenter",
  mouseleave: "mouseleave"
};

export default {
  name: "MapMarker",
  mixins: [withEvents, withSelfEvents],

  inject: ["mapbox", "map"],

  provide() {
    const self = this;
    return {
      get marker() {
        return self.marker;
      }
    };
  },

  props: {
    // mapbox marker options
    offset: {
      type: [Object, Array],
      default: () => [0, 0]
    },
    coordinates: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      default: 'red'
    },
    anchor: {
      type: String,
      default: "center"
    },
    draggable: {
      type: Boolean,
      default: false
    },
    kind: {
      type: String,
      default: 'normal' // can be 'circle' for a white circle marker
    }
  },

  data() {
    return {
      initial: true,
      marker: undefined
    };
  },

  watch: {
    coordinates(lngLat) {
      if (this.initial) return;
      this.marker.setLngLat(lngLat);
    },
    draggable(next) {
      if (this.initial) return;
      this.marker.setDraggable(next);
    }
  },

  mounted() {
    var markerElement = document.createElement("div");
    markerElement.className = `map-marker ${this.$props.color} ${this.$props.kind || ''}`;

    const markerOptions = {
      element: markerElement,
      ...this.$props
    };
    if (this.$slots.marker) {
      markerOptions.element = this.$slots.marker[0].elm;
    }
    this.marker = new this.mapbox.Marker(markerOptions);

    if (this.$listeners["update:coordinates"]) {
      this.marker.on("dragend", event => {
        let newCoordinates;
        if (this.coordinates instanceof Array) {
          newCoordinates = [event.target._lngLat.lng, event.target._lngLat.lat];
        } else {
          newCoordinates = event.target._lngLat;
        }
        this.$emit("update:coordinates", newCoordinates);
      });
    }

    const eventNames = Object.keys(markerEvents);
    this.$_bindSelfEvents(eventNames, this.marker);

    this.initial = false;
    this.$_addMarker();
  },

  beforeDestroy() {
    if (this.map !== undefined && this.marker !== undefined) {
      this.marker.remove();
    }
  },

  methods: {
    $_addMarker() {
      this.marker.setLngLat(this.coordinates).addTo(this.map);
      this.$_bindMarkerDOMEvents();
      this.$_emitEvent("added", { marker: this.marker });
    },

    $_emitSelfEvent(event) {
      this.$_emitMapEvent(event, { marker: this.marker });
    },

    $_bindMarkerDOMEvents() {
      Object.keys(this.$listeners).forEach(key => {
        if (Object.values(markerDOMEvents).includes(key)) {
          this.marker._element.addEventListener(key, event => {
            this.$_emitSelfEvent(event);
          });
        }
      });
    },

    remove() {
      this.marker.remove();
      this.$_emitEvent("removed");
    },

    togglePopup() {
      return this.marker.togglePopup();
    }
  }
};
</script>

<style>
.map-marker {
  background-image: url('~./assets/marker-default-blue.svg');
  background-size: cover;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}
.map-marker.blue {
  background-image: url('~./assets/marker-default-blue.svg');
}
.map-marker.red {
  background-image: url('~./assets/marker-default-red.svg');
}
.map-marker.green {
  background-image: url('~./assets/marker-default-green.svg');
}
.map-marker.circle {
  background-image: url('~./assets/marker-circle-white.svg');
}
</style>