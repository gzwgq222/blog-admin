import Login from '../pages/login'
import Layout from '../pages/layout'
import layoutRouter from './layout'

const routes = [
  {
    path: '/login',
    excat: true,
    component: Login
  },
  {
    path: '/home',
    component: Layout,
    routes: layoutRouter
  }
]

export default routes