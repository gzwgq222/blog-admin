// import api from './api'
import React, { Component } from 'react';
import {
  // BrowserRouter,
  HashRouter,
  Route,
  Redirect
} from 'react-router-dom';
import routes from './Router'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Route exact path="/" render={() => <Redirect to="/web/index" push />} />
        {/* <Route exact path="/web" render={() => <Redirect to="/web/index" push />} /> */}
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
      </HashRouter>
    );
  }
}

export default App;
