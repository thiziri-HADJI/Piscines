<template>
      <div class="reservation">
        <div class="card">
        <div class = "card-body">
          <label class="titre">Souhaitez vous réserver une séance baignade ?</label>
          <div class="field">
            <label class="label">Nom</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" v-model="nom">
            </div>
          </div>

           <div class="field">
            <label class="label">Prénom</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" v-model="prenom"> 
            </div>
          </div>

          <div class="field has-addons">
            <div class="control1">
              <label class="label">Piscine</label>
            </div>
            <div class="control2">
              <select v-model="piscine">
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
              <select v-model="prix">
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
              <input type="datetime-local" v-model="date">
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control7">
              <button class="button is-link" v-on:click="messageReserv">Reserver</button>
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
    },
    messageReserv: function() {
      // `this` fait référence à l'instance de Vue à l'intérieur de `methods`
      alert('Bonjour ' + this.prenom + ' ' + this.nom + ' !\n\n' +
       'Vous avez réservé une séance dans la piscine : \n' + this.piscine + ' \n' +
       'Pour un ' + this.prix + ' le ' + this.date + ' \n\n' + 'merci d\'en prendre note ;) ')
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
  margin-left: auto;
  margin-right: auto;
}

field is-grouped{
  margin-left: 50px;
}
</style>
