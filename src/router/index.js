import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import AboutMain from '../components/Pages/About/AboutMain.vue'
import BlogMain from '../components/Pages/Blog/BlogMain.vue'
import BlogDetails from '../components/Pages/Blog/BlogDetails.vue'
import ProjectMain from '../components/Pages/Project/ProjectMain.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'BlogMain',
    component: BlogMain
  },
  {
    path: '/blog/article',
    name: 'BlogDetails',
    component: BlogDetails
  },
  {
    path: '/project',
    name: 'ProjectMain',
    component: ProjectMain
  },
  {
    path: '/about',
    name: 'AboutMain',
    component: AboutMain
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router