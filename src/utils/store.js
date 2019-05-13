import React from 'react'
import firebase from 'firebase/app'
import gql from 'graphql-tag'

import createGraphqlClient from './createGraphqlClient'
import { storeItemKeys } from '../constants'
import authAPI from './auth'

/**
 *  @typedef {import('apollo-client').ApolloClient} ApolloClient
*/

const storeAPI = {
  INITIAL_STORE: {
    user: null,
  },
  /**
   * description
   * @type {ApolloClient}
   */
  graphqlClient: null,
  /**
   * @type {React.Component}
   */
  store: null,
  StoreContext: React.createContext({}),
  /**
   * @async
   * @function
   * Set Store Item
   * @param {{}} data
   * @param {boolean} [persist]
   * @param {string} [persistKey]
   */
  set: (data, persist, persistKey) => {
    storeAPI.store.setState({ store: { ...storeAPI.store.state.store, ...data } })
    persist && Object.keys(data).forEach(key => localStorage.setItem(persistKey || key, JSON.stringify(data[key])))
  },
  /**
   * @function
   * get value from store
   * @param {string} key
   * @returns {any}
   */
  get: key => storeAPI.store.state.store[key],
  /**
   * @function
   * get value from local storage with key
   * @param {string} key
   * @returns {Promise<{}>}
   */
  getFromLocalStorage: async (key) => {
    const dataString = await localStorage.getItem(key)
    return JSON.parse(dataString)
  },
  /**
   * @function
   * query with graphql
   * @param {string} GQL_STRING
   * @param {{}} variables
   * @returns {Promise<{}>}
   */
  query: async (GQL_STRING, variables) => {
    const vals = await storeAPI.graphqlClient.query({
      query: gql(GQL_STRING),
      variables,
    })
    return vals
  },
  /**
   * @function
   * mutate data with graphql
   * @param {string} GQL_STRING
   * @param {{}} variables
   * @returns {Promise<{}>}
   */
  mutate: async (GQL_STRING, variables) => {
    const vals = await storeAPI.graphqlClient.mutate({
      mutation: gql(GQL_STRING),
      variables,
    })
    return vals
  },
  /**
   * callback for graphql subscription
   * @callback observer
   * @param {{}} data
   */
  /**
   * @function
   * subscribe to graphql server
   * @param {string} GQL_STRING
   * @param {{}} variables
   * @param {observer} callback
   */
  subscribe: async (GQL_STRING, variables, callback) => {
    storeAPI.graphqlClient.subscribe({
      query: gql(GQL_STRING),
      variables,
    }).subscribe(callback)
  },
}
export default storeAPI
