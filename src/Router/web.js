import List from '../pages/web/list/list'
import ArticleDetail from '../pages/web/list/detail'
import Archive from '../pages/web/archive'
import About from '../pages/web/about'
import Star from '../pages/web/star'

const webRoutes = [
  {
    menu: true,
    icon: 'home',
    title: '首页',
    path: '/web/index',
    component: List
  },
  {
    menu: true,
    icon: 'edit',
    title: '归档',
    path: '/web/archive',
    component: Archive
  },
  {
    menu: true,
    icon: 'star',
    title: '收藏',
    path: '/web/star',
    component: Star
  },
  {
    menu: true,
    icon: 'team',
    title: '关于',
    path: '/web/about',
    component: About
  },
  {
    icon: 'more',
    title: '文章详情',
    path: '/web/detail/:id',
    component: ArticleDetail
  }
]

export default webRoutes
