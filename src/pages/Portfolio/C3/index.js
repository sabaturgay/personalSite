import React from 'react'
import PropTypes from 'prop-types'

import { withWrapper } from '../../../hocs'
import { routePaths, storeItemKeys } from '../../../constants'

import C3Component from './C3Component'

class C3 extends React.Component {
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
      <C3Component
        {...this.state}
        user={user}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

C3.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
C3.defaultProps = {
}

export default withWrapper(C3, wantedStoreKeys)
