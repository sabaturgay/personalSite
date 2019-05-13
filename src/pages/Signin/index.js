import React from 'react'

import { withWrapper } from '../../hocs'
import { authAPI } from '../../utils'
import SigninComponent from './SigninComponent'

class Signin extends React.Component {
  state = {
    isLoading: false,
    email: 'ts12@gmail.com',
    password: '123456789',
  }

  submit = async () => {
    const {
      email, password,
    } = this.state
    this.setState({ isLoading: true })
    await authAPI.signin(email, password)
  }

  signinWithGoogle = async () => {
    await authAPI.signinWithProvider()
  }

  render() {
    return (
      <SigninComponent
        {...this.state}
        submit={this.submit}
        signinWithGoogle={this.signinWithGoogle}
      />
    )
  }
}

// const { USER } = storeItemKeys
const wantedStoreKeys = []

Signin.defaultProps = {
}
Signin.propTypes = {
}
export default withWrapper(Signin, wantedStoreKeys)
