import React from 'react'
import PropTypes from 'prop-types'

import { withWrapper } from '../../../hocs'
import { routePaths, storeItemKeys } from '../../../constants'

import AframeChartsComponent from './AframeChartsComponent'

class AframeCharts extends React.Component {
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
      <AframeChartsComponent
        {...this.state}
        user={user}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

AframeCharts.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
AframeCharts.defaultProps = {
}

export default withWrapper(AframeCharts, wantedStoreKeys)
