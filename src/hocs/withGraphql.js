import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query, Mutation, Subscription } from 'react-apollo'

import { storeAPI } from '../utils'

const QUERY = 'query'
const MUTATION = 'mutation'
const SUBSCRIPTION = 'subscription'

/**
 * @function
 * hoc for pages
 * @param {React.ComponentClass} HOComponent
* @param {{ name: string, GQL_STRING: string, variables: {}, storeName: [string]}} gqlOperation
*  @return {React.ComponentClass}
 */
const withGraphql = (HOComponent, {
  GQL_STRING, variables, name, storeName,
}) => {
  const type = GQL_STRING.trim().split(' ')[0]
  const GQL = gql(GQL_STRING)
  return class extends Component {
    render() {
      const { graphql } = this.props
      const forwardedGraphqlProps = { ...graphql }
      switch (type) {
        case QUERY:
          return (
            <Query
              query={GQL}
              variables={variables}
            >
              {
                (gqlProps) => {
                  forwardedGraphqlProps[name] = gqlProps
                  if (!gqlProps.loading && !gqlProps.error && storeName) {
                    const storeData = {}
                    storeData[storeName] = Object.values(gqlProps.data)[0]
                    storeAPI.set(storeData)
                  }
                  return (
                    <HOComponent
                      graphql={forwardedGraphqlProps}
                    />
                  )
                }
              }
            </Query>
          )
        case MUTATION:
          return (
            <Mutation
              mutation={GQL}
              variables={variables}
            >
              {
                (mutate, gqlProps) => {
                  forwardedGraphqlProps[name] = { mutate, ...gqlProps }
                  if (!gqlProps.loading && !gqlProps.error && !gqlProps.data && storeName) {
                    const storeData = {}
                    storeData[storeName] = Object.values(gqlProps.data)[0]
                    storeAPI.set(storeData)
                  }
                  return (
                    <HOComponent
                      graphql={forwardedGraphqlProps}
                    />
                  )
                }
              }
            </Mutation>
          )
        case SUBSCRIPTION:
          return (
            <Subscription
              subscription={GQL}
              variables={variables}
            >
              {
                (gqlProps) => {
                  forwardedGraphqlProps[name] = gqlProps
                  if (!gqlProps.loading && !gqlProps.error && storeName) {
                    const storeData = {}
                    storeData[storeName] = Object.values(gqlProps.data)[0]
                    storeAPI.set(storeData)
                  }
                  return (
                    <HOComponent
                      graphql={forwardedGraphqlProps}
                    />
                  )
                }
              }
            </Subscription>
          )

        default:
          break
      }
    }
  }
}

/**
 * @function
 * hoc for pages
 * @param {React.ComponentClass} HOComponent
* @param {Array<{ name: string, GQL_STRING: string, variables: {}, storeName: [string]}>} gqlOperations
*  @return {React.ComponentClass}
 */
const func = (HOComponent, gqlOperations) => gqlOperations
  .reduce((resultComponent, operation) => withGraphql(resultComponent,
    operation),
  HOComponent)

export default func
