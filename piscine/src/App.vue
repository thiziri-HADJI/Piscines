  <template>
    <div>
      <MenuView />
    <div class="container">
      <router-view />
    </div>
    <footer class="footer">
      <div class="buttons is-right">
        <a href="#" class="button is-info is-light is-rounded is-uppercase is-size-6">Haut de page</a>
      </div>
  </footer>
  </div>
</template>

<script>
import MenuView from './components/MenuView.vue';

export default {
  name: 'App',
  components: {
    MenuView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #02315f;
}
.footer{
  margin-top:50px;
  background-color: #3e8ed0;
  padding: 16px;
  color: white;
  font-weight: bold;
}
</style>
