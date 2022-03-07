<template>
  <div id="map" class="map">
    Open Layers map
  </div>
</template>

<script>
  import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

 import 'ol/ol.css'

  export default {
    name: 'MapContainer',
    components: {},
    props: {},
    mounted() {
        new Map({
        target: 'map',
        layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],

        // the map view will initially show the whole world
        view: new View({
          resolution: 10,
          center: [-1.553621,47.218371],
          constrainOnlyCenter: true,
        }),
      })
    },
  }
    
</script>

<style>

.map{
    height: 80vh;
    width: 100vw;
    max-width:1084px;
    margin-left: auto;
    margin-right: auto;
    
}

</style>