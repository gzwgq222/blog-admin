import adminLayout from '../pages/admin/layout'
import webLayout from '../pages/web/layout'
import adminRouter from './admin'
import webRouter from './web'

const routes = [
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