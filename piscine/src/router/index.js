import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../components/AboutPage.vue'
import HomePage from '../components/HomePage.vue'
import Piscine from '../components/Piscine.vue'
import Reservation from '../components/Reservation.vue'
import PiscineDetail from '../components/PiscineDetail.vue'

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
]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})
export default router 