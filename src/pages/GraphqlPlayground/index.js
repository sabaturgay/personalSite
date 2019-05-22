import React from 'react'
// import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import GraphiQL from 'graphiql'
import '../../../node_modules/graphiql/graphiql.css'


import { Wrapper } from '../../components'
// import { utilAPI } from '../../utils'
import { withWrapper } from '../../hocs'
import { storeItemKeys } from '../../constants'
import graphqlWithRdf from './graphqlWithRdf'

import schema from './schema'

function graphQLFetcher(graphQLParams) {
  console.log(graphQLParams)
  const { query } = graphQLParams
  return new Promise(async (resolve) => {
    const res = await graphqlWithRdf.query(query)
    console.log(res)
    resolve(res[0])
  })
}

class GraphqlPlayground extends React.Component {
  state = {
    isLoading: false,
    // redirectPath: routePaths.HOME,
    // shouldRedirect: false,
  }


  render() {
    const {
      state: {
        isLoading,
      },
      // props: { store: { user } },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        <GraphiQL
          schema={schema}
          fetcher={graphQLFetcher}
        />
      </Wrapper>
    )
  }
}

const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

GraphqlPlayground.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
GraphqlPlayground.defaultProps = {
}

export default withWrapper(GraphqlPlayground, wantedStoreKeys)
