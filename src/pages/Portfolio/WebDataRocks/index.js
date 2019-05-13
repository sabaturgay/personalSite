import React from 'react'
import PropTypes from 'prop-types'

import { withWrapper } from '../../../hocs'
import { routePaths, storeItemKeys } from '../../../constants'

import WebDataRocksComponent from './WebDataRocksComponent'

class WebDataRocks extends React.Component {
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
      <WebDataRocksComponent
        {...this.state}
        user={user}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

WebDataRocks.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
WebDataRocks.defaultProps = {
}

export default withWrapper(WebDataRocks, wantedStoreKeys)
