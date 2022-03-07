<template>
       <div class="container">
         <div v-if="!isLoading">
            <div v-for="inf in info" :key="inf">
                   <h1 class="taille"><strong> {{inf.fields.nom_complet}}</strong> </h1>
                   <h2 class="taille2"> {{inf.fields.adresse}} {{inf.fields.cp}} {{inf.fields.commune}} </h2>
                   <p class="taille3"> Coordonnées de la Piscine </p>
                   <table class="table is-striped is-fullwidth">
                     <thead>
                        <tr>
                          <th>Telephone</th>
                          <th>Site Web</th>
                          <th>Position maps</th>
                          <th>Accès PMR</th>
                        </tr>
                      </thead>
                      <tbody>
                         <tr>
                            <td>{{inf.fields.tel}}</td>
                            <td><a :href="inf.fields.web" target="out">Page web</a></td>
                            <td><a :href="redirectMap(inf)" target="out">map</a></td>
                            <td>
                              <p v-if="inf.fields.acces_pmr_equipt == 'OUI'" class="accesPMROK">{{inf.fields.acces_pmr_equipt}} </p>
                              <p v-else class="accesPMRKO"> {{inf.fields.acces_pmr_equipt}}</p>
                            </td>        
                         </tr>
                      </tbody>
                   </table>
                   <p class="taille3"> Liste des équipements de la Piscine </p>
                   <div class="scroll">
                   <table class="table is-bordered">
                     <thead>
                        <tr>
                          <th>Bassin sportif</th>
                          <th>Pataugeoire</th>
                          <th>Toboggan</th>
                          <th>Bassin d'apprentissage</th>
                          <th>Plongeoir</th>
                          <th>Solarium</th>
                          <th>Bassin de loisir</th>
                          <th>Accessibilité handicapé</th>
                          <th>Libre service aliment alimentaire</th>
                        </tr>
                      </thead>
                      <tbody>
                         <tr>
                            <td>
                              <p v-if="inf.fields.bassin_sportif == null"> ------- </p>
                              <p v-else> {{inf.fields.bassin_sportif}}</p>
                              </td>
                            <td>
                              <p v-if="inf.fields.pataugeoire == null"> ------- </p>
                              <p v-else> {{inf.fields.pataugeoire}}</p>
                              </td>
                            <td>
                              <p v-if="inf.fields.toboggan == null"> ------- </p>
                              <p v-else> {{inf.fields.toboggan}}</p>
                              </td>   
                            <td>
                              <p v-if="inf.fields.bassin_apprentissage == null"> ------- </p>
                              <p v-else> {{inf.fields.bassin_apprentissage}}</p>
                              </td>
                            <td>
                              <p v-if="inf.fields.plongeoir == null"> ------- </p>
                              <p v-else> {{inf.fields.plongeoir}}</p>
                              </td>
                            <td>
                              <p v-if="inf.fields.solarium == null"> ------- </p>
                              <p v-else> {{inf.fields.solarium}}</p>
                              </td>
                            <td>
                              <p v-if="inf.fields.bassin_loisir == null"> ------- </p>
                              <p v-else> {{inf.fields.bassin_loisir}}</p>
                              </td>
                            <td>
                              <p v-if="inf.fields.accessibilite_handicap == null"> ------- </p>
                              <p v-else> {{inf.fields.accessibilite_handicap}}</p>
                              </td>
                            <td>
                              <p v-if="inf.fields.libre_service == null"> ------- </p>
                              <p v-else> {{inf.fields.libre_service}}</p>
                              </td>     
                         </tr>
                      </tbody>
                   </table>
                   </div>
            </div>
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
      info: {},
    };
   },

    methods: {
        redirectMap(info){
       return  "https://maps.google.com/?q=" + info.fields.location[0] + "," + info.fields.location[1]
      }
    },

   mounted() {
    axios.get(`https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_piscines-nantes-metropole&q=&rows=100&facet=commune&facet=acces_pmr_equipt&facet=bassin_sportif&facet=pataugeoire&facet=toboggan&facet=bassin_apprentissage&facet=plongeoir&facet=solarium&facet=bassin_loisir&facet=accessibilite_handicap&facet=libre_service`)
    .then(response => {
          this.info = response.data.records.filter((record) => record.recordid == this.id);
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

 <style>
 .taille {
   font-size: 80px;
 }
  .taille2 {
   font-size: 30px;
   margin-bottom: 50px;
   color: rgb(0, 81, 255);
 }
  .taille3 {
   font-size: 25px;
   margin-top: 50px;
   margin-bottom: 30px;
   color: black;
 }
 .table {
  margin-left: auto;
  margin-right: auto;
 }
 .scroll {
   overflow-x: scroll ;
 }

 .accesPMROK {
   background-color :rgb(41, 221, 110)
 }
 .accesPMRKO {
   background-color :rgb(226, 102, 102)
 }
 </style>