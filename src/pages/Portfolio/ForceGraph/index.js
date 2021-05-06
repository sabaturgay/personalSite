import React from 'react'
import PropTypes from 'prop-types'

import { withWrapper } from '../../../hocs'
import { routePaths, storeItemKeys, user } from '../../../constants'

import ForceGraphComponent from './ForceGraphComponent'

class ForceGraph extends React.Component {
  state = {
    isLoading: false,
    redirectPath: routePaths.HOME,
    shouldRedirect: false,
  }

  render() {

    return (
      <ForceGraphComponent
        {...this.state}
        user={user}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

ForceGraph.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
ForceGraph.defaultProps = {
}

export default withWrapper(ForceGraph, wantedStoreKeys)
