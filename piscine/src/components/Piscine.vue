<template>
    <div v-if="infos" class="columns is-multiline" :class="{ 'is-active': mobileMenuActive }">
        <div v-for="info in infos" :key="info.recordid" class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
            <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p><strong>{{info.fields.nom_complet}}</strong></p>
                    </div>
                </div>
            </div>
            <div class="content">
                <p>{{info.fields.adresse}} {{info.fields.cp}} {{info.fields.commune}}</p>
                <p>{{info.fields.tel}}</p>
                <a class="button is-info is-rounded" v-on:click="pageDetails(info)" >Détails</a>
                <button class="button is-warning is-rounded"> <a :href="info.fields.web" target="out">Site web</a></button>
                <a :href="redirectMap(info)" target="out"> <button class="button is-primary is-rounded"> Google Maps</button>
                </a>
            </div>
        </div>
    </div>
    </div>
    <div v-else>
      <div v-if="errors">
        {{errors.message}}
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Piscine",
    props: {
      info: {},
  },
    data() {
        return {
            infos: {},
            errors: {},
            mobileMenuActive: false
        };
    },

    methods: {
      pageDetails(info){
        this.$router.push({
        name: "PiscineDetail",
        params: { id: info.recordid },
      });
      },
      redirectMap(info){
       return  "https://maps.google.com/?q=" + info.fields.location[0] + "," + info.fields.location[1]
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
}
</script>

<style>
.card {
    background-color: #f1efeff3;
    margin-bottom: 2px;
    height: 100%;
}
.button {
    margin: 10px;
}

</style>