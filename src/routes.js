import React, { useContext } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import App from './App';
import history from './history';
import EventPage from './components/EventPage';
import StoreContext from './store/context';

const Routes = () => {
  const context = useContext(StoreContext);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      context.state.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )

  return (
    <div>
      <Router history={history} >
        <div>
          <Switch>
            <Route exact path='/' component={App} />
            <PrivateRoute path='/events' component={EventPage} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Routes;