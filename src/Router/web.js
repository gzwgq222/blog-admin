import List from '../pages/web/list/list'
import Archive from '../pages/web/archive'
import About from '../pages/web/about'
import Star from '../pages/web/star'

const webRoutes = [
  {
    icon: 'home',
    title: '首页',
    path: '/web/index',
    component: List
  },
  {
    icon: 'edit',
    title: '归档',
    path: '/web/archive',
    component: Archive
  },
  {
    icon: 'star',
    title: '收藏',
    path: '/web/star',
    component: Star
  },
  {
    icon: 'team',
    title: '关于',
    path: '/web/about',
    component: About
  }
]

export default webRoutes
