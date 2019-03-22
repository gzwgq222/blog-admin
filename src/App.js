// import api from './api'
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './pages/login'
import Layout from './pages/layout'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={()=><Link to='/login'><h3>home page</h3></Link>} />
          <Route path="/login" component={Login} />
          <Route excat path="/home" component={Layout} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
