import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from 'components/App';
import Login from 'containers/Login';

import Toggle from './Toggle';

class ProtectedRoutes extends React.Component {
  renderToggle = () => <Toggle />

  renderLogin = () => <Login />

  render() {
    return (
      <App>
        <Switch>
          <Route path="/" render={this.renderLogin} />
          <Route path="/player" render={this.renderToggle} />
        </Switch>
      </App>
    );
  }
}

export default ProtectedRoutes;
