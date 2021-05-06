import React from 'react'
import { Route,  } from 'react-router-dom'

export default ({ component: WantedComponent, ...rest }) => (
  <Route
    {...rest}
    render={props => (<WantedComponent {...props} />
    )}
  />
)
