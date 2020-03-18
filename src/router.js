import Vue from 'vue'
import Router from 'vue-router'

const Upload = () => import('./views/Upload/Upload.vue')
const Mobeill = () => import('./views/Mobeill/Mobeill.vue')



Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'mobeill',
    component: Mobeill
  },
  {
    path: '/',
    name: 'upload',
    component: Upload
  }

]
export default new Router({
  mode: 'hash',
  routes
})
