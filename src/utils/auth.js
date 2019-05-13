import firebase from 'firebase/app'
import { localStorageKeys } from '../constants'

import { storeAPI, utilAPI } from './index'

const auth = {
  signup: async (userInfo) => {
    try {
      const { email, password } = userInfo
      const {
        user: {
          displayName, phoneNumber, photoURL, uid,
        },
      } = await firebase.auth().createUserWithEmailAndPassword(email, password)
      const user = {
        displayName, phoneNumber, photoURL, uid, ...userInfo,
      }
      await firebase.database().ref(`users/${uid}`).set(user)
      storeAPI.set({ user })
      utilAPI.toast('you are signed up')
    } catch (error) {
      utilAPI.toast(null, error.message)
      throw (error)
    }
  },
  signinWithProvider: async () => {
    try {
      const { user, additionalUserInfo: { isNewUser } } = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      storeAPI.set({ user })
      utilAPI.toast(isNewUser ? 'you are signed up' : 'you are signed in')
    } catch (err) {
      console.error(err)
      utilAPI.toast('Error', JSON.stringify(err))
    }
  },
  signin: async (email, password) => {
    try {
      const {
        user: {
          uid,
        },
      } = await firebase.auth().signInWithEmailAndPassword(email, password)
      const userData = await firebase.database().ref(`users/${uid}`).once('value')
      const user = userData.val()
      storeAPI.set({ user })
      utilAPI.toast('you are signed in')
    } catch (error) {
      utilAPI.toast(null, error.message)
    }
  },
  silentSignin: async () => new Promise((res, rej) => {
    firebase.auth().onAuthStateChanged((user) => {
      res(user)
    }, (err) => {
      rej(err)
    })
  }),
  signout: async () => {
    await firebase.auth().signOut()
    await localStorage.removeItem(localStorageKeys.USER)
    storeAPI.set({ user: null })
    utilAPI.toast('you are signed out')
  },

}

export default auth
