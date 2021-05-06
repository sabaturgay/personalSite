import React, { Component } from 'react'
import './App.css'

import BaseRoute from './pages'
import { Loader } from './components'

class App extends Component {
  state = {
    isLoading: false,
  }

  render() {
    const { state: { isLoading, } } = this
    if (isLoading) return <Loader />

    return (
        <BaseRoute />
    )
  }
}

export default App
