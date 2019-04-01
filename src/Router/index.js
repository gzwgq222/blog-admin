import Login from '../pages/admin/login'
import adminLayout from '../pages/admin/layout'
import webLayout from '../pages/web/layout'

const routes = [
  {
    path: '/login',
    excat: true,
    component: Login
  },
  {
    path: '/admin',
    component: adminLayout
  },
  {
    path: '/web',
    component: webLayout
  }
]

export default routes