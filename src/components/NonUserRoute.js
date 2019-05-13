import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { storeAPI } from '../utils'
import { routePaths } from '../constants'

export default ({ component: WantedComponent, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      storeAPI.get('user')
        ? <Redirect to={routePaths.HOME} />
        : <WantedComponent {...props} />
    )}
  />
)
