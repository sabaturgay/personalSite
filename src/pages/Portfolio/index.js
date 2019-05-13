import React from 'react'
import PropTypes from 'prop-types'

import { withWrapper } from '../../hocs'
import { routePaths, storeItemKeys } from '../../constants'

import PorfolioComponent from './PortfolioComponent'

class Porfolio extends React.Component {
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
      <PorfolioComponent
        {...this.state}
        user={user}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

Porfolio.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
Porfolio.defaultProps = {
}

export default withWrapper(Porfolio, wantedStoreKeys)
