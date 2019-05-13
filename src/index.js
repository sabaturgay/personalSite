import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer, Bounce } from 'react-toastify'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './utils/config'
import { Loader } from './components'

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
    <ToastContainer
      autoClose={3000}
      transition={Bounce}
    />
  </Suspense>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
