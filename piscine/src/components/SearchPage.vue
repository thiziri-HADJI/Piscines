<template>
  <div class="card-filters">
    <p class="card-header-title">Filtres des piscines :</p>
    <!--1ere ligne de filtre-->
    <div class="columns">
      <div class="column">  
        <label class="label">Accès PMR :</label> 
        <div class="control">
          <label class="radio">
            <input type="radio" id="PMR-oui" value="OUI" v-model="picked1" />
            Oui 
          </label>
          <label class="radio">
            <input type="radio" id="PMR-non" value="NON" v-model="picked1" />
            Non 
          </label>
        </div>
      </div>

      <div class="column">          
        <label class="label">Bassin de Loisir :</label>
        <div class="control">
          <label class="radio">
            <input type="radio" id="BL-oui" value="OUI" v-model="picked2" />
            Oui 
          </label>
          <label class="radio">
            <input type="radio" id="BL-non" value="NON" v-model="picked2" />
            Non 
          </label>
          </div>
      </div>

      <div class="column">          
        <label class="label">Bassin sportif :</label>
        <div class="control">
          <label class="radio">
            <input type="radio" id="BS-oui" value="OUI" v-model="picked3" />
            Oui 
          </label>
          <label class="radio">
            <input type="radio" id="BS-non" value="NON" v-model="picked3" />
            Non 
          </label>
        </div>
      </div>

      <div class="column">          
        <label class="label">Bassin d'apprentissage :</label>
        <div class="control">
          <label class="radio">
            <input type="radio" id="BL-oui" value="OUI" v-model="picked4" />
            Oui 
          </label>
          <label class="radio">
            <input type="radio" id="BL-non" value="NON" v-model="picked4" />
            Non 
          </label>
        </div>
      </div>        
    </div>
    <!--2eme ligne de filtre-->
    <div class="columns">
      <div class="column">  
        <label class="label">Pataugeoire :</label> 
        <div class="control">
          <label class="radio">
            <input type="radio" id="P-oui" value="OUI" v-model="picked5" />
            Oui 
          </label>
          <label class="radio">
            <input type="radio" id="P-non" value="NON" v-model="picked5" />
            Non 
          </label>
        </div>
      </div>

      <div class="column">          
        <label class="label">Solarium :</label>
        <div class="control">
          <label class="radio">
            <input type="radio" id="S-oui" value="OUI" v-model="picked6" />
            Oui 
          </label>
          <label class="radio">
            <input type="radio" id="S-non" value="NON" v-model="picked6" />
            Non 
          </label>
        </div>
      </div>

      <div class="column">          
        <label class="label">Toboggan :</label>
        <div class="control">
          <label class="radio">
          <input type="radio" id="T-oui" value="OUI" v-model="picked7" />
            Oui 
          </label>
          <label class="radio">
          <input type="radio" id="T-non" value="NON" v-model="picked7" />
            Non 
          </label>
        </div>
      </div>

      <div class="column">          
        <label class="label">Plongeoir :</label>
        <div class="control">
          <label class="radio">
            <input type="radio" id="PL-oui" value="OUI" v-model="picked8" />
            Oui 
          </label>
          <label class="radio">
            <input type="radio" id="PL-non" value="NON" v-model="picked8" />
            Non 
          </label>
        </div>
      </div>    
    </div>
  </div>
  <!--Résultats de la recherche-->
  <div class="resultat">
    <div class="card">
      <p class="card-header-title">Les piscines répondant aux critères :</p>
      <div class="card-content">
        <div class="content">
          <div v-for="inf in infos" :key="inf.fields.nom_complet">
            <div v-if="inf.fields.acces_pmr_equipt == picked1 ||
              inf.fields.bassin_loisir == picked2 ||
              inf.fields.bassin_sportif == picked3 || 
              inf.fields.bassin_apprentissage == picked4 ||
              inf.fields.pataugeoire == picked5 ||
              inf.fields.solarium == picked6 ||
              inf.fields.toboggan == picked7 || 
              inf.fields.plongeoir == picked8 "><li>{{inf.fields.nom_complet}}</li> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <input class="button is-danger is-outlined" type="button" 
  onclick='window.location.reload(false)' value="Réinitialiser les filtres"/>  

</template>

<script>

import axios from 'axios';

export default {
  name: "reservation",
  data() {
    return {
      infos:{},
      nextComposterId: 1,
      composters: new Array(),
      picked1: '',
      picked2: '',
      picked3: '',
      picked4: '',
      picked5: '',
      picked6: '',
      picked7: '',
      picked8: '',
    };
  },

  methods: {
    listePiscines(info){
      this.$router.push({
        name: "Reservation",
        params: { id: info.fields.nom_complet },
      });
    }
  },

  mounted() {
    axios.get(`https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_piscines-nantes-metropole&q=&rows=100&facet=commune&facet=acces_pmr_equipt&facet=bassin_sportif&facet=pataugeoire&facet=toboggan&facet=bassin_apprentissage&facet=plongeoir&facet=solarium&facet=bassin_loisir&facet=accessibilite_handicap&facet=libre_service`)
    .then(response => {
      this.infos = response.data.records
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
};
</script>

<style>
  .card-filters {
      background-color: #f1efeff3;
      margin-bottom: 20px;
      height: 100%;
      border-radius: 0.25rem;
  }
  .card-header-title{
    font-size: 20px;
  }
  .card-results {
      background-color: #f1efeff3;
      margin-bottom: 20px;
      height: 100%;
      border-radius: 0.25rem;
  }
  .content{
    text-align: left;
    color: black;
    margin-left: 15px;
  }
</style>
