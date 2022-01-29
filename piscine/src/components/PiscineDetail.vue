<template>
       <div class="container">
         <div v-if="!isLoading">
           <h1 class="title"> {{info}} </h1>
         </div>
    <p v-else>Chargement en cours...</p>
       </div>
 </template>

<script>
import axios from "axios";

 export default {
   name: "PiscineDetail",
   props: {
      id: String,
   },
   data() {
    return {
      isLoading: true,
      info: [],
    };
   },
   mounted() {
    axios.get(`https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_piscines-nantes-metropole&q=&rows=100&facet=commune&facet=acces_pmr_equipt&facet=bassin_sportif&facet=pataugeoire&facet=toboggan&facet=bassin_apprentissage&facet=plongeoir&facet=solarium&facet=bassin_loisir&facet=accessibilite_handicap&facet=libre_service`)
    .then(response => {
          this.info = response.data.records.filter((record) => record.recordid == '0aff6b7d076caeffcf8cc2a067d8a6dd23ec1542');
          console.log(this.info);
          console.log(this.id);
          this.isLoading = false;
    })
    .catch(error => {
      console.log(error)
    })
  }

 };
 </script>