import loadable from '../utils/loadable'

const adminLayout = loadable(()=>import('../pages/admin/layout'))
const webLayout = loadable(()=>import('../pages/web/layout'))

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