import React from 'react'
import PropTypes from 'prop-types'

import { withWrapper } from '../../hocs'
import { routePaths, storeItemKeys, user } from '../../constants'
import HomeComponent from './HomeComponent'

class Home extends React.Component {
  state = {
    isLoading: false,
    redirectPath: routePaths.PROFILE,
  }


  render() {
  

    return (
      <HomeComponent
        {...this.state}
        user={user}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

Home.defaultProps = {
  store: PropTypes.shape({
    user: PropTypes.object.isRequired,
  }).isRequired,
}
Home.propTypes = {
}

export default withWrapper(Home, wantedStoreKeys)
