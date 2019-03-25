import Login from '../pages/admin/login'
import Layout from '../pages/admin/layout'
import layoutRouter from './layout'
import webLayout from '../pages/web/layout'

const routes = [
  {
    path: '/login',
    excat: true,
    component: Login
  },
  {
    path: '/admin',
    component: Layout,
    routes: layoutRouter
  },
  {
    path: '/web',
    component: webLayout
  }
]

export default routes