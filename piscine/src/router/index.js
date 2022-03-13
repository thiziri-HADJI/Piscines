import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../components/AboutPage.vue'
import HomePage from '../components/HomePage.vue'
import MapPage from '../components/MapPage.vue'
import Piscine from '../components/Piscine.vue'
import Reservation from '../components/Reservation.vue'
import PiscineDetail from '../components/PiscineDetail.vue'
import SearchPage from '../components/SearchPage.vue'


const routes = [
{
    path: '/about',
    name: 'About',
    component: AboutPage
},
{
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/piscine',
    name: 'Piscine',
    component: Piscine
  },
  {
    path: '/piscinedetail/:id',
    name: 'PiscineDetail',
    props: true,
    component: PiscineDetail
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation
  },
  {
    path: '/map',
    name: 'Map',
    component: MapPage
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage
  },
]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})
export default router 