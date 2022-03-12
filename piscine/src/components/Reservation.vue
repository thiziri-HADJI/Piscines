<template>
      <div class="reservation">
        <div class="card">
        <div class = "card-body">
          
          <label class="titre">Vous souhaitez reserver ?</label>
          <div class="field">
            <label class="label">Nom</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>

           <div class="field">
            <label class="label">Prénom</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>

          <div class="field has-addons">
            <div class="control1">
              <label class="label">Piscine</label>
            </div>
            <div class="control2">
              <select>
                <option v-for="info in infos" :key="info.recordid">
                  {{ info.fields.nom_complet }}
                </option>
              </select>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control3">
              <label class="label">Pour</label>
            </div>
            <div class="control4">
              <select>
                  <option>Enfant</option>
                  <option>Adulte</option>
                </select>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control5">
              <label class="label">Date</label>
            </div>
            <div class="control6">
              <input type="datetime-local">
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control7">
              <button class="button is-link">Reserver</button>
            </div>
          </div>
        </div>
        </div>
      </div>
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
.titre{
  font-size: 40px;
}
.field{
  font-size: 30px;
  text-align: left;
  margin-top: 15px;
  margin-left: 20px;
}
.control1{
  text-align: left;
  margin-top: 15px;
  width: 70px;
}
.control2{
  text-align: left;
  width: 70px;
}
.control3{
  text-align: left;
  margin-top: 15px;
  width: 70px;
}
.control4{
  text-align: left;
  width: 70px;
  height: 30px;
}
.control5{
  text-align: left;
  width: 70px;
  margin-top: 15px;
}
.control7{
  text-align: left;
  margin-top: 25px;
  margin-left: 50%;
}

field is-grouped{
  margin-left: 50px;
}
</style>
