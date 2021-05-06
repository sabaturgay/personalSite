import React, { Component } from 'react'
import './App.css'

import { storeAPI } from './utils'
import BaseRoute from './pages'
import { Loader } from './components'

const { StoreContext } = storeAPI
class App extends Component {
  state = {
    isLoading: false,
    store: storeAPI.INITIAL_STORE,
  }

  render() {
    const { state: { isLoading, store } } = this
    if (isLoading) return <Loader />

    return (
      <StoreContext.Provider value={{ store }}>
        <BaseRoute />
      </StoreContext.Provider>
    )
  }
}

export default App
