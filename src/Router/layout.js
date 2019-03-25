import Tags from '../pages/admin/tags'
import Home from '../pages/admin/home'
import Category from '../pages/admin/category'
import Article from '../pages/admin/article'
import ArticleItem from '../pages/admin/article/item'

const routes = [
  {
    menu: true,
    icon: 'home',
    title: '首页',
    path: '/admin/page',
    component: Home
  },
  {
    menu: true,
    icon: 'edit',
    title: '文章',
    path: '/admin/article',
    component: Article
  },
  {
    menu: true,
    icon: 'tags',
    title: '标签',
    path: '/admin/tags',
    component: Tags
  },
  {
    menu: true,
    icon: 'folder',
    title: '分类',
    path: '/admin/category',
    component: Category
  },
  {
    icon: 'edit',
    title: '文章详情',
    path: '/admin/article-item',
    component: ArticleItem
  }
]

export default routes