<template>
  <div class="container">
    <l-map style="height:100vh" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker v-for="marker in markers" :key="marker.recordid" :lat-lng="marker.location" @click="clickedMarker(marker.location)">
        <l-popup v-if="clicked">
          <p class="popup" align=center>{{ info.fields.nom_complet }}</p>
          <p class="popup" align=center>{{ info.fields.tel }}</p>
        </l-popup>
        <l-icon>
          <img src="../../public/assets/img/dot.png" width="40"/>
        </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer, LMarker, LPopup, LIcon} from "@vue-leaflet/vue-leaflet";
import axios from "axios";

export default {
  name: "MapContainer",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
  },
  data() {
    return {
      infos: {},
      info: {},
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      center: [47.22, -1.55],
      zoom: 12,
      markers: new Array(),
      clicked: false,
    };
  },
  mounted() {
    this.getPiscines();
  },
  methods: {
    getPiscines() {
      axios
        .get("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_piscines-nantes-metropole&q=&rows=100&facet=commune&facet=acces_pmr_equipt&facet=bassin_sportif&facet=pataugeoire&facet=toboggan&facet=bassin_apprentissage&facet=plongeoir&facet=solarium&facet=bassin_loisir&facet=accessibilite_handicap&facet=libre_service")
        .then((response) => {
          this.infos = response.data.records;
          this.infos.forEach((value) => {
            var marker = {
              recordid: value.recordid,
              location: value.fields.location,
            };
            this.markers.push(marker);
          });
        })
        .catch((e) => {
          this.errors.push(e)
        });
    },
    //cliquer deux fois pour l'initialisation - à fixer
    clickedMarker(location) {
      this.info = this.infos.filter((record) => record.fields.location == location)[0];
      this.clicked = true;
    },
  },
};
</script>

<style>
.popup {
  color: #001aff;
}
</style>