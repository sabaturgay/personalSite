import React from 'react'
import PropTypes from 'prop-types'
import solidAuth from 'solid-auth-client'


import { withWrapper } from '../../../hocs'
import { routePaths, storeItemKeys } from '../../../constants'

import SolidAuthComponent from './SolidAuthComponent'

class SolidAuth extends React.Component {
  state = {
    isLoading: false,
    redirectPath: routePaths.HOME,
    shouldRedirect: false,
  }

  signin = async () => {
    const userData = await solidAuth.popupLogin({ popupUri: 'https://solid.github.io/solid-auth-client/dist/popup.html' })
    const { webId } = userData
    this.setState({ userData })
  }

  signout = async () => {
    await solidAuth.logout()
  }

  render() {
    const {
      props: { store: { user }, state: { userData } },
    } = this
    return (
      <SolidAuthComponent
        {...this.state}
        user={userData}
        signin={this.signin}
        signout={this.signout}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

SolidAuth.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
SolidAuth.defaultProps = {
}

export default withWrapper(SolidAuth, wantedStoreKeys)
