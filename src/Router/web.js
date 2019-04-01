import loadable from '../utils/loadable'

const List = loadable(()=>import('../pages/web/list/list'))
const ArticleDetail = loadable(()=>import('../pages/web/list/detail'))
const Archive = loadable(()=>import('../pages/web/archive'))
const About = loadable(()=>import('../pages/web/about'))
const Star = loadable(()=>import('../pages/web/star'))

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
