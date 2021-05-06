import React from 'react'
import PropTypes from 'prop-types'

import { withWrapper } from '../../hocs'
import { routePaths, storeItemKeys, user } from '../../constants'

import PageComponent from './PageComponent'

class PageWrapper extends React.Component {
  state = {
    isLoading: false,
    redirectPath: routePaths.HOME,
    shouldRedirect: false,
  }

  render() {
   
    return (
      <PageComponent
        {...this.state}
        user={user}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

PageWrapper.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
PageWrapper.defaultProps = {
}

export default withWrapper(PageWrapper, wantedStoreKeys)
