import React from 'react'
import PropTypes from 'prop-types'

import { routePaths, storeItemKeys } from '../../constants'
import { withWrapper } from '../../hocs'

import ProfileComponent from './ProfileComponent'

class Profile extends React.Component {
  state = {
    isLoading: false,
    redirectPath: routePaths.HOME,
  }

  render() {
    const {
      props: { store: { user } },
    } = this

    return (
      <ProfileComponent
        {...this.state}
        user={user}
      />
    )
  }
}

const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

Profile.defaultProps = {
  store: PropTypes.shape({
    user: PropTypes.object.isRequired,
  }).isRequired,
}
Profile.propTypes = {
}

export default withWrapper(Profile, wantedStoreKeys)
