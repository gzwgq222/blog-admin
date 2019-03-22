// import api from './api'
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login'
// import Home from '../pages/home'
import Info from './info'
import Article from './pages/article'
// import ArticleItem from '../pages/article/item'
import Tags from './pages/tags/tags'
import Layout from './pages/layout'


class App extends Component {
  render() {
    const routes = [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/home',
        component: Layout,
        routes: [
          {
            path: '/home/tag',
            component: Tags
          },
          {
            path: '/home/info',
            component: Info
          },
          {
            path: '/home/article',
            component: Article
          },
        ]
      }
    ]
    return (
      <BrowserRouter>
        <div>
        {routes.map((route, i) => (
          <Route
          key={i}
          path={route.path}
          render={props => (
            <route.component {...props} routes={route.routes} />
          )}
         />
        ))}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
