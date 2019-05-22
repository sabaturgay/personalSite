import { newEngine } from '@comunica/actor-init-sparql'
import { bindingsStreamToGraphQl } from '@comunica/actor-sparql-serialize-tree'
import { ActionContext } from '@comunica/core'
import RdfString from 'rdf-string'

// Convert graphql to sparql
import { Converter } from 'graphql-to-sparql'
import { toSparql } from 'sparqlalgebrajs'

import context from './context'

const sparqlConverter = new Converter()

// graphql query
const actionContext = ActionContext
const myEngine = newEngine()


export default {
  query: async graphqlQuery => new Promise((resolve) => {
    myEngine.query(graphqlQuery, context)
      .then((result) => {
        // Post query metadata
        console.log({ type: 'queryInfo', queryType: result.type })

        const bindings = result.type === 'bindings'
        const resultsToTree = true
        let resultsIterator
        switch (result.type) {
          case 'quads':
            resultsIterator = result.quadStream
            break
          case 'bindings':
            resultsIterator = result.bindingsStream
            break
          case 'boolean':
            result.booleanResult.then((exists) => {
              console.log({ type: 'result', result: exists })
              console.log({ type: 'end' })
            }).catch(postError)
            break
          default:
            break
        }

        if (resultsIterator) {
          if (resultsToTree) {
            bindingsStreamToGraphQl(resultsIterator, actionContext(context), { materializeRdfJsTerms: true })
              .then((results) => {
                (Array.isArray(results) ? results : [results]).forEach((result) => {
                  console.log({ type: 'result', result: { result: `\n${JSON.stringify(result, null, '  ')}` } })
                })
                resolve((Array.isArray(results) ? results : [results]))
                console.log({ type: 'end' })
              })
              .catch(postError)
          } else {
            resultsIterator.on('data', (result) => {
              if (bindings) { result = result.map(RdfString.termToString).toObject() } else { result = RdfString.quadToStringQuad(result) }
              console.log({ type: 'result', result })
              resolve(result)
            })
            resultsIterator.on('end', () => {
              console.log({ type: 'end' })
            })
            resultsIterator.on('error', postError)
          }
        }
      })
  }),
  convertGraphqlToSparql: (graphqlQuery) => {
    const sparqlAlgebra = sparqlConverter.graphqlToSparqlAlgebra(graphqlQuery, {
      hero: 'http://example.org/hero',
      name: 'http://example.org/name',
      friends: 'http://example.org/friends',
    })
    const sparqlQuery = toSparql(sparqlAlgebra)
    return { sparqlAlgebra, sparqlQuery }
  },
}

const postError = (error) => {
  error = { message: error.message || error.toString() }
  console.log({ type: 'error', error })
}
