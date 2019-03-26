import List from '../pages/web/list/list'
import Archive from '../pages/web/archive'
import About from '../pages/web/about'

const webRoutes = [
  {
    icon: 'home',
    title: '首页',
    path: '/web/index',
   component: List
  },
  {
    icon: 'home',
    title: '归档',
    path: '/web/archive',
   component: Archive
  },
  {
    icon: 'home',
    title: '归档',
    path: '/web/about',
   component: About
  }
]

export default webRoutes