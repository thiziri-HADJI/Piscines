  <template>
    <div>
      <MenuView />
    <div class="container">
      <router-view />
    </div>
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
</style>
