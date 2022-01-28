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
                <p>{{info.fields.adresse}}</p>
                <p>{{info.fields.tel}}</p>
                <a href="url">page web</a>
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
            infos: [],
            errors: [],
            url:"",
            mobileMenuActive: false
        }
    },

  mounted() {
    axios.get(`https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_piscines-nantes-metropole&q=&rows=15&facet=commune&facet=acces_pmr_equipt&facet=bassin_sportif&facet=pataugeoire&facet=toboggan&facet=bassin_apprentissage&facet=plongeoir&facet=solarium&facet=bassin_loisir&facet=accessibilite_handicap&facet=libre_service`)
    .then(response => {
      this.infos = response.data.records
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>