<template>
      <div class="reservation">
        <div class="card">
        <div class = "card-body">
          <label class="titre">Quelle piscine choisir ?</label>
          <div class="field has-addons">
            <div class="control11">
              <label class="label">Accès PMR</label>
            </div>
            <div class="control">
               <div id="v-model-radiobutton">
                    <input type="radio" id="PMR-oui" value="OUI" v-model="picked1" />
                        <label for="PMR-oui"> Oui </label>
                    <input type="radio" id="PMR-non" value="NON" v-model="picked1" />
                        <label for="PMR-non"> Non </label>
                        <br />
                        <span>Choix : {{ picked1 }}</span>
                </div>
            </div>
             <div class="control13">
              <label class="label">Bassin de Loisir</label>
            </div>
            <div class="control">
               <div id="v-model-radiobutton">
                    <input type="radio" id="BL-oui" value="OUI" v-model="picked2" />
                        <label for="BL-oui"> Oui </label>
                    <input type="radio" id="BL-non" value="NON" v-model="picked2" />
                        <label for="BL-non"> Non </label>
                        <br />
                        <span>Choix : {{ picked2 }}</span>
                </div>
            </div>
          </div>

            <div class="field has-addons">
            <div class="control11">
              <label class="label">Bassin sportif</label>
            </div>
            <div class="control">
               <div id="v-model-radiobutton">
                    <input type="radio" id="BS-oui" value="OUI" v-model="picked3" />
                        <label for="BS-oui"> Oui </label>
                    <input type="radio" id="BS-non" value="NON" v-model="picked3" />
                        <label for="BS-non"> Non </label>
                        <br />
                        <span>Choix : {{ picked3 }}</span>
                </div>
            </div>
            <div class="control13">
              <label class="label">Bassin d'apprentissage</label>
            </div>
            <div class="control">
               <div id="v-model-radiobutton">
                    <input type="radio" id="BA-oui" value="OUI" v-model="picked4" />
                        <label for="BA-oui"> Oui </label>
                    <input type="radio" id="BA-non" value="NON" v-model="picked4" />
                        <label for="BA-non"> Non </label>
                        <br />
                        <span>Choix : {{ picked4 }}</span>
                </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control11">
              <label class="label">Pataugeoire</label>
            </div>
            <div class="control">
               <div id="v-model-radiobutton">
                    <input type="radio" id="P-oui" value="OUI" v-model="picked5" />
                        <label for="P-oui"> Oui </label>
                    <input type="radio" id="P-non" value="NON" v-model="picked5" />
                        <label for="P-non"> Non </label>
                        <br />
                        <span>Choix : {{ picked5 }}</span>
                </div>
            </div>
            <div class="control13">
              <label class="label">Solarium</label>
            </div>
            <div class="control">
               <div id="v-model-radiobutton">
                    <input type="radio" id="S-oui" value="OUI" v-model="picked6" />
                        <label for="S-oui"> Oui </label>
                    <input type="radio" id="S-non" value="NON" v-model="picked6" />
                        <label for="S-non"> Non </label>
                        <br />
                        <span>Choix : {{ picked6 }}</span>
                </div>
            </div>
          </div>

            <div class="field has-addons">
            <div class="control11">
              <label class="label">Toboggan</label>
            </div>
            <div class="control">
               <div id="v-model-radiobutton">
                    <input type="radio" id="T-oui" value="OUI" v-model="picked7" />
                        <label for="T-oui"> Oui </label>
                    <input type="radio" id="T-non" value="NON" v-model="picked7" />
                        <label for="T-non"> Non </label>
                        <br />
                        <span>Choix : {{ picked7 }}</span>
                </div>
            </div>
            <div class="control13">
              <label class="label">Plongeoir</label>
            </div>
            <div class="control">
               <div id="v-model-radiobutton">
                    <input type="radio" id="PL-oui" value="OUI" v-model="picked8" />
                        <label for="PL-oui"> Oui </label>
                    <input type="radio" id="PL-non" value="NON" v-model="picked8" />
                        <label for="PL-non"> Non </label>
                        <br />
                        <span>Choix : {{ picked8 }}</span>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div class="resultat">
        <div class="card">
            <div class = "card-body">
                <label class="titre">Les piscines répondant aux critères ?</label>
                 <div v-for="inf in infos" :key="inf.fields.nom_complet">
                      <div v-if="inf.fields.acces_pmr_equipt == picked1 ||
                      inf.fields.bassin_loisir == picked2 ||
                      inf.fields.bassin_sportif == picked3 || 
                      inf.fields.bassin_apprentissage == picked4 ||
                      inf.fields.pataugeoire == picked5 ||
                      inf.fields.solarium == picked6 ||
                      inf.fields.toboggan == picked7 || 
                      inf.fields.plongeoir == picked8 "> {{inf.fields.nom_complet}} </div>
                 </div>
            </div>
        </div>
      </div>
      <div class="field is-grouped">
            <div class="control17">
              <input class="button is-link" type="button" onclick='window.location.reload(false)' value="Rafraichir la liste"/>
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
.titre{
  font-size: 40px;
}

.control{
    margin-right: auto;
    
}

.control11{
    margin-left: auto;
    margin-right: auto;
    margin-top: 1px;
}

.control13{
    margin-left: auto;
    margin-right: auto;
}

.control17{
  text-align: left;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
}

</style>
