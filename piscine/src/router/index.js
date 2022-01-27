import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../components/AboutPage.vue'
import HomePage from '../components/HomePage.vue'

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
]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})
export default router 