<template>
  <div id="map" class="map">
    Localisation des piscines de Nantes métropole
  </div>
</template>

<script>
import Map from 'ol/Map';
import View from 'ol/View';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import XYZ from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Icon, Style} from 'ol/style';
import VectorSource from 'ol/source/Vector';

import 'ol/ol.css'

const rome = new Feature({
  geometry: new Point(fromLonLat([-1,47])),
});

rome.setStyle(
  new Style({
    image: new Icon({
      src: './../../public/assets/img/bigdot.png',
      scale: 0.2,
    }),
  })
);

const vectorSource = new VectorSource({
  features: [rome],
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

const tileLayer = new TileLayer({
  source: new XYZ({
    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  }),
});

  export default {
    name: 'MapContainer',
    components: {},
    props: {},
    mounted() {
        new Map({
        target: 'map',
        layers: [tileLayer, vectorLayer],
        view: new View({
          center: fromLonLat([-1.5461534,47.1983256]),
          zoom: 12,
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