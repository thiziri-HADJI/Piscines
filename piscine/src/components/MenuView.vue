<template>
 <nav class="navbar is-info" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img class="navbar-brand-img" src="../../public/assets/img/logo.png">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': mobileMenuActive }" @click="mobileMenuActive = !mobileMenuActive">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu" :class="{ 'is-active': mobileMenuActive }">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/"> Accueil </router-link>
      <router-link class="navbar-item" to="/piscine"> Liste des piscines </router-link>
      <router-link class="navbar-item" to="/map"> Carte </router-link>
      <router-link class="navbar-item" to="/reservation"> Réservation </router-link>
      <router-link class="navbar-item" to="/search"> Recherche avancée</router-link>
    </div>

    <div class="navbar-end">
      <router-link class="navbar-item" to="/about"> A propos </router-link>
      <a class="navbar-item">
            Created by TRD :)
      </a>
    </div>
  </div>
</nav>
</template>

<script>
  export default {
    name: "MenuView",
    data() {
     return {
       mobileMenuActive: false,
     };
   },
  };
</script>

<style>
.navbar {
    background-color: #f1efeff3;
    margin-bottom: 20px;
}
.router-link-active {
    text-decoration: rgb(247, 6, 6) underline;
    font-weight: bold;
    font-size: large;
}
</style>