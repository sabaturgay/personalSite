import React from 'react'

import withStore from './withStore'
// import withGraphql from './withGraphql'
// import withLoading from './withLoading'

/**
 * @function
 * hoc for pages
 * @param {React.ComponentClass} HOComponent
 * @param {Array<string>} [wantedStoreKeys]
//  * @param {Array<{ name: string, GQL_STRING: string, variables: {}}>} [gqlOperations]
*  @return {React.ComponentClass}
 */

// let WithWrapper = withLoading(withStore(HOComponent, wantedStoreKeys))
// if (gqlOperations) {
//   WithWrapper = withGraphql(WithWrapper, gqlOperations)
// }
// return WithWrapper
const func = (HOComponent, wantedStoreKeys) => withStore(HOComponent, wantedStoreKeys)


export default func
