import React, { Component } from 'react'

import { storeAPI } from '../utils'

const { StoreContext } = storeAPI

/**
 * @function
 * hoc for pages
 * @param {React.ComponentClass} HOComponent
 * @param {Array<string>} [wantedStoreKeys]
*  @return {React.ComponentClass}
 */
const func = (HOComponent, wantedStoreKeys) => {
  const WithStore = class extends Component {
    render() {
      const { ...rest } = this.props
      return (
        <StoreContext.Consumer>
          {
            ({ store }) => {
              const wantedStoreItems = {}
              wantedStoreKeys
                && wantedStoreKeys.forEach((key) => { wantedStoreItems[key] = store[key] })
              return (
                <HOComponent
                  {...rest}
                  store={{ ...wantedStoreItems }}
                  storeAPI={storeAPI}
                />
              )
            }
          }
        </StoreContext.Consumer>
      )
    }
  }
  return WithStore
}

export default func
