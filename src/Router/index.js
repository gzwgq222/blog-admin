import Login from '../pages/admin/login'
import Layout from '../pages/admin/layout'
import layoutRouter from './layout'

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
  }
]

export default routes