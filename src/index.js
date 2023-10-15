import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ImsouaneSurfGuide from './views/imsouane-surf-guide'
import LandingPage from './views/landing-page'
import ImsouaneTaxi from './views/imsouane-taxi'
import SurfboardRental from './views/surfboard-rental'
import About from './views/about'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={ImsouaneSurfGuide}
          exact
          path="/imsouane-surf-guide"
        />
        <Route component={LandingPage} exact path="/" />
        <Route component={ImsouaneTaxi} exact path="/imsouane-taxi" />
        <Route component={SurfboardRental} exact path="/surfboard-rental" />
        <Route component={About} exact path="/about" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
