// import api from './api'
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from './Router'

class App extends Component {
  render() {
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
