import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/home'
import Info from '../info'
import Article from '../pages/article'
import ArticleItem from '../pages/article/item'
import Tags from '../pages/tags/tags'

export default  <div>
  <Route path="/page" component={Home} />
  <Route path="/info" component={Info} />
  <Route path="/article" component={Article} />
  <Route path="/article-item" component={ArticleItem} />
  <Route path="/tags" component={Tags} />
  </div>
