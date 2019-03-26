import Login from '../pages/admin/login'
import adminLayout from '../pages/admin/layout'
import webLayout from '../pages/web/layout'
import adminRouter from './admin'
import webRouter from './web'

const routes = [
  {
    path: '/login',
    excat: true,
    component: Login
  },
  {
    path: '/admin',
    component: adminLayout,
    routes: adminRouter
  },
  {
    path: '/web',
    component: webLayout,
    routes: webRouter
  }
]

export default routes