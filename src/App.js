import React, { Component } from 'react'

import { storeAPI, utilAPI } from './utils'
import BaseRoute from './pages'
import { Loader } from './components'

const { StoreContext } = storeAPI
class App extends Component {
  state = {
    isLoading: true,
    store: storeAPI.INITIAL_STORE,
  }

  async componentDidMount() {
    utilAPI.initializeApp(this)
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
