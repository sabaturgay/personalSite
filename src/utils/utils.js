import React from 'react'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import uuidv4 from 'uuid/v4'
import asyncMapSeries from 'async/mapSeries'
import asyncMap from 'async/map'
import firebase from 'firebase/app'

import createGraphqlClient from './createGraphqlClient'
import authAPI from './auth'
import storeAPI from './store'
import createTranslator from './i18n/index'
/**
 *  @typedef {import('i18next').default.TFunction} TFunction
*/

const utils = {
  /**
   * translator
   * @type {TFunction}
   */
  translator: null,
  /**
   * @function
   * router go back
   * @param {React.Component} component
   */
  initializeApp: async (component) => {
    storeAPI.store = component
    const store = {}
    const user = await authAPI.silentSignin()
    store.user = user
    // const { data } = await firebase.functions().httpsCallable('getToken')()
    // storeAPI.graphqlClient = createGraphqlClient(data)
    utils.translator = await createTranslator()
    component.setState({ store, isLoading: false })
  },
  /**
   * @function
   * toast message
   * @param {string|null} msg
   * @param {string} [error]
   */
  toast: (msg, error) => (
    error
      ? toast.error(error, {
        position: toast.POSITION.TOP_LEFT,
      })
      : toast.success(msg, {
        position: toast.POSITION.TOP_LEFT,
      })),
  /**
   * @function
   * route to another page
   * @param {string} path
   * @param {boolean} flag
   * @return {React.ComponentElement|null} flag
   */
  redirect: (path, flag) => (
    flag
      ? (
        <Redirect
          to={path}
          push
        />
      )
      : null
  ),
  /**
   * @function
   * router go back
   * @param {React.Component} component
   */
  routerBack: component => () => {
    const { props: { history } } = component
    history.goBack()
  },
  /**
   * @function
   * change state with given key and event
   * @param {React.Component} component
   * @param {string} key
   */
  onChange: (component, key) => (e) => {
    const newState = { ...component.state }
    newState[key] = e.target.value
    component.setState({ ...newState })
  },
  /**
   * @function
   * change state with given JSON
   * @param {React.Component} component
   * @param {string} key
   */
  changeState: (component, data) => () => {
    component.setState({ ...component.state, ...data })
  },
  /**
   * @function
   * on enter at an input
   * @param {{ key }} e
   * @param {Function} mainFunc
   */
  onEnter: (e, mainFunc) => (e.key === 'Enter' ? mainFunc() : ''),
  /**
   * @function
   * create ref
   * @param {React.Component} component
   * @param {string} elementName
   */
  createRef: (component, elementName) => (ref) => { component[elementName] = ref },
  /**
   * @function
   * create uuid
  *  @return {string}
   */
  createUuid: () => uuidv4(),

  /**
   * @callback mapCallback
   * @param {Error} err
   * @param {any} result
   */
  /**
   * mapFunc
   * @callback mapProcessItem
   * @param {any} item
   * @param {mapCallback} callback
   */
  /**
   * @async
   * @function
   * serially map array to async operation and then call callback
   * @param {Array<any>} arr
   * @param {mapProcessItem} func
  *  @return {Promise<Array<any|{}>>}
   */
  mapSeries: (arr, func) => new Promise((resolve, reject) => {
    asyncMapSeries(arr, func, (err, results) => {
      if (err) {
        reject(err)
      }
      resolve(results)
    })
  }),
  /**
   * @async
   * @function
   * parallelly map array to async operation and then call callback
   * @param {Array<any>} arr
   * @param {mapProcessItem} func
  *  @return {Promise<Array<any|{}>>}
   */
  mapParellel: (arr, func) => new Promise((resolve, reject) => {
    asyncMap(arr, func, (err, results) => {
      if (err) {
        reject(err)
      }
      resolve(results)
    })
  }),

}

export default utils
