import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Dog from '../components/Dog.vue'
import Monkey from '../components/Monkey.vue'
import Squirrel from '../components/Squirrel.vue'
import FullStackers from '../components/FullStackers.vue'


// const Home = { template: '<div>foo</div>' }
// const Squirrel = { template: '<div>bar</div>' }
// const Dog = { template: '<div>bar</div>' }
// const Monkey = { template: '<div>bar</div>' }



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dog',
      name: 'dog',
      component: Dog,
    },
    {
      path: '/monkey',
      name: 'monkey',
      component: Monkey,
    },
    {
      path: '/squirrel',
      name: 'squirrel',
      component: Squirrel,
    },
    {
      path: '/fullstackers',
      name: 'fullstackers',
      component: FullStackers,
    },
  ]
})

export default router
