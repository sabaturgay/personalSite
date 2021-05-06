import React from 'react'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import uuidv4 from 'uuid/v4'
import asyncMapSeries from 'async/mapSeries'
import asyncMap from 'async/map'


const utils = {
  /**
   * @function
   * router go back
   * @param {React.Component} component
   */
  initializeApp: async (component) => {
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
  reduceImageSize: (file, SIZE) => new Promise(async (res, rej) => {
    const blobUrl = file.objectURL
    const image = new Image()
    image.crossOrigin = 'anonymous'
    image.src = blobUrl
    image.onload = async () => {
      const WIDTH = SIZE
      const { width, height } = image
      if (width <= WIDTH) {
        res(file)
      }
      const scaleFactor = WIDTH / width
      // reduce image size
      const canvas = document.createElement('canvas')
      canvas.width = WIDTH
      canvas.height = height * scaleFactor
      const context = canvas.getContext('2d')
      context.drawImage(image, 0, 0, canvas.width, canvas.height)
      // context.scale(scale, scale)
      context.canvas.toBlob((blob) => {
        const reducedSizeFile = new File([blob], 'x.png', {
          type: 'image/jpeg',
          lastModified: Date.now(),
        })
        res(reducedSizeFile)
      }, 'image/png', 1)
    }
  })
}

export default utils
