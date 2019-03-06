import React from 'react'
import { Route } from 'react-router-dom';
import Home from '../home'
import Info from '../info'
import Article from '../pages/article'
import ArticleItem from '../pages/article/articleItem'

export default  <div>
  <Route path="/home" component={Home} />
  <Route path="/info" component={Info} />
  <Route path="/article" component={Article} />
  <Route path="/article-item" component={ArticleItem} />
  </div>
