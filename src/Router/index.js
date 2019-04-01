import adminLayout from '../pages/admin/layout'
import webLayout from '../pages/web/layout'

const routes = [
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