// import api from './api'
import React, { Component } from 'react';
import {
  // BrowserRouter,
  HashRouter,
  Route,
  Redirect
} from 'react-router-dom'

import routes from './Router'
import AuthRouter  from './AuthRouter'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Route exact path="/" render={() => <Redirect to="/web/index" push />} />
        {/* <Route exact path="/web" render={() => <Redirect to="/web/index" push />} /> */}
        {routes.map((v, i) => {
          return v.path === 'path'
            ? <Route key={i} path={v.path} component={v.component} />
            : <Route key={i} path={v.path} component={v.component} />
        })}
        </div>
      </HashRouter>
    );
  }
}

export default App;
