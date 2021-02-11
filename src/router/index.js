import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: List
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue'),
  },
  {
    path: '/task/:id',
    name: 'task',
    component: () => import('../views/Task.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
