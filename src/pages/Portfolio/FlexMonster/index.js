import React from 'react'
import PropTypes from 'prop-types'

import { withWrapper } from '../../../hocs'
import { routePaths, storeItemKeys } from '../../../constants'

import FlexMonsterComponent from './FlexMonsterComponent'

class FlexMonster extends React.Component {
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
      <FlexMonsterComponent
        {...this.state}
        user={user}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

FlexMonster.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
FlexMonster.defaultProps = {
}

export default withWrapper(FlexMonster, wantedStoreKeys)
