import Info from '../info'
import Article from '../pages/article'
import Tags from '../pages/tags'
import Home from '../pages/home'

const routes = [
  {
    icon: 'home',
    title: '首页',
    path: '/home/page',
    component: Home
  },
  {
    icon: 'bars',
    title: '分类',
    path: '/home/info',
    component: Info
  },
  {
    icon: 'edit',
    title: '文章',
    path: '/home/article',
    component: Article
  },
  {
    icon: 'tags',
    title: '标签',
    path: '/home/tags',
    component: Tags
  }
]

export default routes