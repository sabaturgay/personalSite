import React from 'react'
import PropTypes from 'prop-types'

import { withWrapper } from '../../../hocs'
import { routePaths, storeItemKeys } from '../../../constants'

import RechartsComponent from './RechartsComponent'

class Recharts extends React.Component {
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
      <RechartsComponent
        {...this.state}
        user={user}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

Recharts.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
Recharts.defaultProps = {
}

export default withWrapper(Recharts, wantedStoreKeys)
