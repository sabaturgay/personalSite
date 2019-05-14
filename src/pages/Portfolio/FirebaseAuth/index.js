import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import 'firebase/auth'

import { withWrapper } from '../../../hocs'
import { routePaths, storeItemKeys } from '../../../constants'
import { utilAPI } from '../../../utils'
import FirebaseAuthComponent from './FirebaseAuthComponent'

class FirebaseAuth extends React.Component {
  state = {
    isLoading: false,
    redirectPath: routePaths.HOME,
    shouldRedirect: false,
  }

  async componentDidMount() {
    let userData
    this.setState({ isLoading: true })
    try {
      userData = await this.silentSignin()
    } catch (error) {
      console.error(error)
      utilAPI.toast('Error', JSON.stringify(error))
    }
    this.setState({ userData, isLoading: false })
  }

  silentSignin= async () => new Promise((res, rej) => {
    firebase.auth().onAuthStateChanged((user) => {
      res(user)
    }, (err) => {
      console.error(err)
      rej(err)
    })
  })

  signinWithProvider= async () => {
    let userData
    this.setState({ isLoading: true })
    try {
      const { user, additionalUserInfo: { isNewUser } } = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      // storeAPI.set({ user })
      userData = user
      utilAPI.toast(isNewUser ? 'you are signed up' : 'you are signed in')
    } catch (err) {
      console.error(err)
      utilAPI.toast('Error', JSON.stringify(err))
    }
    this.setState({ userData, isLoading: false })
  }

  signout = async () => {
    this.setState({ isLoading: false })
    try {
      await firebase.auth().signOut()
    } catch (error) {
      console.error(error)
      utilAPI.toast('Error', JSON.stringify(error))
    }
    this.setState({ isLoading: false, userData: null })
  }

  render() {
    const {
      state: { userData },
    } = this
    return (
      <FirebaseAuthComponent
        {...this.state}
        user={userData}
        signin={this.signinWithProvider}
        signout={this.signout}
      />
    )
  }
}


const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

FirebaseAuth.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
FirebaseAuth.defaultProps = {
}

export default withWrapper(FirebaseAuth, wantedStoreKeys)
