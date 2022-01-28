<template>
  <div>
    <h1 class="title"> Bienvenue sur notre application des piscines</h1>
    <h1 class="title"> de la métropole Nantaise </h1> 
    <img src="../../public/assets/img/logo.png" width="450"> 
    <div class="buttons has-addons is-centered">
      <button class="button is-info" onclick="location.href = './piscine';"> Accéder à la liste des piscines</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
}
</script>