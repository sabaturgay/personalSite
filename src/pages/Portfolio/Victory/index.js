import React from 'react'
import PropTypes from 'prop-types'

import { withWrapper } from '../../../hocs'
import { routePaths, storeItemKeys } from '../../../constants'

import VictoryComponent from './VictoryComponent'

class Victory extends React.Component {
  state = {
    isLoading: false,
    redirectPath: routePaths.HOME,
    shouldRedirect: false,
  }

  render() {
    const {
      props: { store: { user } },
    } = this
    return (
      <VictoryComponent
        {...this.state}
        user={user}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

Victory.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
Victory.defaultProps = {
}

export default withWrapper(Victory, wantedStoreKeys)
