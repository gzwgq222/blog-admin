import Info from '../info'
import Article from '../pages/article'
import Tags from '../pages/tags'
import Home from '../pages/home'
import ArticleItem from '../pages/article/item'

const routes = [
  {
    menu: true,
    icon: 'home',
    title: '首页',
    path: '/home/page',
    component: Home
  },
  {
    menu: true,
    icon: 'bars',
    title: '分类',
    path: '/home/info',
    component: Info
  },
  {
    menu: true,
    icon: 'edit',
    title: '文章',
    path: '/home/article',
    component: Article
  },
  {
    menu: true,
    icon: 'tags',
    title: '标签',
    path: '/home/tags',
    component: Tags
  },
  {
    icon: 'edit',
    title: '文章详情',
    path: '/home/article-item',
    component: ArticleItem
  }
]

export default routes