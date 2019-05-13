import React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch, Redirect,
} from 'react-router-dom'

import Signin from './Signin'
import Home from './Home/index'
import Profile from './Profile'

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
      SIGNIN, HOME, PROFILE, GALLERY,
    } = routePaths
    return (
      <Router>
        <div style={{ height: '100%' }}>

          {
          user
            ? (
              <NavbarUser
                user={user}
                navItems={[{ name: 'Home', path: HOME }, { name: 'Gallery', path: GALLERY }]}
                navButtons={[{ name: 'Signout', onClick: authAPI.signout }]}
              />
            )
            : (
              <NavbarDefault
                appName={texts.APP_NAME}
                navItems={[{ name: 'Home', path: HOME }, { name: 'Signin', path: SIGNIN }]}
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
            <Redirect
          // from="/"
              to={user ? HOME : SIGNIN}
            />
          </Switch>
          <Footer
            appName={texts.APP_NAME}
            footerText={texts.FOOTER_TEXT}
          />
        </div>
      </Router>
    )
  }
}

const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

export default withWrapper(BaseRoute, wantedStoreKeys)
