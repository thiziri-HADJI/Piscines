<template>
  <div class="reservation">
    <div class="card">
      <p class="card-header-title">Souhaitez vous réserver une séance baignade ?</p>
        <div class = "card-content">

          <div class="field">
            <label class="label">Nom</label>
            <div class="control">
              <input class="input" type="text" placeholder="Votre nom" v-model="nom">          
            </div>
          </div>

          <div class="field">
            <label class="label">Prénom</label>
            <div class="control">
                <input class="input" type="text" placeholder="Votre prénom" v-model="prenom"> 
            </div>
          </div>

          <div class="field">
              <label class="label">Piscine</label>
              <div class="control">
                <div class="select">
                  <select v-model="piscine">
                    <option v-for="info in infos" :key="info.recordid">
                      {{ info.fields.nom_complet }}
                    </option>
                  </select>
                </div>
             </div>
          </div>

          <div class="field">
            <label class="label">Catégorie</label>
              <div class="control">
                <div class="select">
                  <select v-model="prix">
                    <option>Enfant</option>
                    <option>Adulte</option>
                  </select>
                </div>
              </div>
          </div>

          <div class="field">
            <label class="label">Date</label>
             <div class="control">
                <input type="date" v-model="date">
             </div>
          </div>
        </div>  
    </div>
    <input class="button is-link is-outlined" type="button" @click="messageReserv" value="Réserver"/>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "reservation",
    data() {
      return {
        infos:{},
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
        'Pour un ' + this.prix + ' le ' + this.date + ' \n\n' + 'Merci d\'en prendre note ;) ')
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
    text-align: left;
  }
</style>
