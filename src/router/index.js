import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingForm from '../views/DataBindingForm.vue'
import DataBindingAttr from '../views/DataBindingAttr.vue'
import LoopCondition from '../views/LoopCondition.vue'
import Event from '../views/Event.vue'
import ComputeWatch from '../views/ComputeWatch.vue'
import Http from '../views/Http.vue';
import Components from '../views/Components.vue';
import Slot from '../views/Slot.vue';
import Provide from '../views/Provide.vue';
import Composition from '../views/Composition.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/dbhtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/dbform',
    name: 'DataBindingForm',
    component: DataBindingForm
  },
  {
    path: '/dbattr',
    name: 'DataBindingAttr',
    component: DataBindingAttr
  },
  {
    path: '/loopcond',
    name: 'LoopCondition',
    component: LoopCondition
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/comp',
    name: 'ComputeWatch',
    component: ComputeWatch
  },
  {
    path: '/http',
    name: 'Http',
    component: Http
  },
  {
    path: '/comps',
    name: 'Components',
    component: Components
  },
  {
    path: '/slot',
    name: 'Slot',
    component: Slot
  },{
    path: '/prov',
    name: 'Provide',
    component: Provide
  },{
    path: '/compos',
    name: 'Composition',
    component: Composition
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
