import React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch, Redirect,
} from 'react-router-dom'

import Signin from './Signin'
import Home from './Home/index'
import Profile from './Profile'
import Portfolio from './Portfolio'
import {
  PrivateRoute, NonUserRoute, NavbarDefault, NavbarUser, Footer,
} from '../components'
import { routePaths, storeItemKeys, texts } from '../constants'
import { withWrapper } from '../hocs'
import { authAPI } from '../utils'

class BaseRoute extends React.Component {
  render() {
    const { store: { user } } = this.props
    const {
      SIGNIN, HOME, PROFILE, PORTFOLIO,
    } = routePaths
    return (
      <Router>
        <div style={{ height: '100%' }}>

          {
          user
            ? (
              <NavbarUser
                user={user}
                navItems={[{ name: 'Home', path: HOME }, { name: 'Portfolio', path: PORTFOLIO }]}
                // navButtons={[{ name: 'Portfolio', path: PORTFOLIO }]}
              />
            )
            : (
              <NavbarDefault
                appName={texts.APP_NAME}
                navItems={[{ name: 'Home', path: HOME }, { name: 'Portfolio', path: PORTFOLIO }]}
              />
            )
        }
          <Switch>
            <NonUserRoute
              exact
              path={SIGNIN}
              component={Signin}
            />
            <PrivateRoute
              exact
              path={HOME}
              component={Home}
            />
            <PrivateRoute
              exact
              path={PROFILE}
              component={Profile}
            />
            <PrivateRoute
              exact
              path={PORTFOLIO}
              component={Portfolio}
            />
            <Redirect
          // from="/"
              to={user ? HOME : SIGNIN}
            />
          </Switch>
          {/* <Footer
            appName={texts.APP_NAME}
            footerText={texts.FOOTER_TEXT}
          /> */}
        </div>
      </Router>
    )
  }
}

const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

export default withWrapper(BaseRoute, wantedStoreKeys)
