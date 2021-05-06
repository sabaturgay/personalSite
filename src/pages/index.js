import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Redirect,
} from 'react-router-dom'

import Signin from './Signin'
import Home from './Home/index'
import Profile from './Profile'
import Portfolio from './Portfolio'

import {
  PrivateRoute,  NavbarDefault, NavbarUser,
} from '../components'
import { routePaths, storeItemKeys, texts } from '../constants'
import { withWrapper } from '../hocs'

class BaseRoute extends React.Component {
  render() {
    const user = { email: 'turgaysaba@outlook.com', displayName: 'Turgay SABA', photoURL: '/profile.jpeg' }
    const {
      SIGNIN, HOME, PROFILE, PORTFOLIO,
    } = routePaths
    return (
      <Router>
        <div
          className="h-100"
          style={{ background: 'rgb(52, 61, 70)' }}
        >

            <NavbarUser
                user={user}
                navItems={[{ name: 'Home', path: HOME }, { name: 'Portfolio', path: PORTFOLIO }]}
                navButtons={[]}
              />
          <Switch>
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
              path={PORTFOLIO}
              component={Portfolio}
            />
            <Redirect
          // from="/"
              to={user ? HOME : SIGNIN}
            />
          </Switch>
        </div>
        {/* <Footer
            appName={texts.APP_NAME}
            footerText={texts.FOOTER_TEXT}
          /> */}
      </Router>
    )
  }
}

const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

export default withWrapper(BaseRoute, wantedStoreKeys)
