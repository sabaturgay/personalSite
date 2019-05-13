import React from 'react'
import PropTypes from 'prop-types'

import { withWrapper } from '../../../hocs'
import { routePaths, storeItemKeys } from '../../../constants'

import NivoComponent from './NivoComponent'

class Nivo extends React.Component {
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
      <NivoComponent
        {...this.state}
        user={user}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

Nivo.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
Nivo.defaultProps = {
}

export default withWrapper(Nivo, wantedStoreKeys)
