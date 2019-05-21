import React from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import {
  Playground, store, getQuery, setResponse,
} from 'graphql-playground-react'
import { Provider } from 'react-redux'

import graphqlWithRdf from './graphqlWithRdf'

import { Wrapper } from '../../../components'
import { utilAPI } from '../../../utils'
import { routePaths, storeItemKeys } from '../../../constants'
import { withWrapper } from '../../../hocs'

class GraphqlPlayground extends React.Component {
  state = {
    isLoading: false,
    redirectPath: routePaths.HOME,
    shouldRedirect: false,
  }

  componentDidMount() {
    // setTimeout(() => {
    //   // const playgroundState = this.playground.context.store.getState()
    //   // const graphqlQuery = getQuery(playgroundState)
    //   // const sparqlConverter = new Converter()

    //   // const algebra = sparqlConverter.graphqlToSparqlAlgebra(graphqlQuery, {
    //   //   hero: 'http://example.org/hero',
    //   //   name: 'http://example.org/name',
    //   //   friends: 'http://example.org/friends',
    //   // })
    //   // const sparqlQuery = toSparql(algebra)
    //   // console.log(sparqlQuery)
    //   // console.log(getResponses(playgroundState))
    // }, 3000)

  }

  render() {
    const {
      state: {
        isLoading, redirectPath, shouldRedirect,
      },
      // props: { store: { user } },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        <Button
          onClick={async () => {
            const playgroundState = this.playground.context.store.getState()
            const graphqlQuery = getQuery(playgroundState).trim()
            console.log(graphqlQuery)
            const result = await graphqlWithRdf.query(graphqlQuery)
            setResponse(result)
            console.log(result)
          }}
        >
          Run
        </Button>
        <Provider store={store}>
          <Playground
            ref={(c) => { this.playground = c }}
            // endpoint="https://api.graph.cool/simple/v1/swapi"
            config={{
              schemaPath: '/schema.graphql',
              extensions: {
                endpoints: {
                  default: 'https://api.graph.cool/simple/v1/swapi',
                },
              },
            }}
          />
        </Provider>
        {/* <FormInput
          label="Email"
          placeholder="email"
          onChange={utilAPI.onChange(this, 'email')}
          type="email"
        />
        <Button
          variant="primary"
          onClick={() => {

          }}
        >
          GraphqlPlayground
        </Button> */}
        {utilAPI.redirect(redirectPath, shouldRedirect)}
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
