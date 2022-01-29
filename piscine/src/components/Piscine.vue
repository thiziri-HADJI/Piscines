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
                <button class="button is-info is-rounded"> Détails </button>
                <a class="button is-info is-rounded" v-on:click="pageDetails(info)" >Voir les détails</a>
                <button class="button is-primary is-rounded"> <a :href="info.fields.web" target="out">Site web</a></button>
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
}
.button {
    margin-bottom: 10px;
    margin-left: 10px;
}
</style>