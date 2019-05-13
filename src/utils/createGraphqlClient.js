import { ApolloLink, split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { ApolloClient } from 'apollo-client'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default ({ uri, token }) => {
  // Create an http link:
  const httpLink = new HttpLink({
    uri,
  })

  // Create a WebSocket link:
  const wsLink = new WebSocketLink({
    uri: uri.replace('http', 'ws'),
    options: {
      reconnect: true,
      connectionParams: {
        Authorization: token,
      },
    },
  })

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
  // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition'
      && definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink,
  )

  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return forward(operation)
  })
  const onErrorMiddleware = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ))
    }
    if (networkError) console.log(`[Network error]: ${networkError}`)
  })

  const client = new ApolloClient({
    link: ApolloLink.from([
      authMiddleware, onErrorMiddleware, link,
    ]),
    cache: new InMemoryCache(),
  })
  return client
}
