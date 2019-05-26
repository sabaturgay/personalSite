import { buildSchema } from 'graphql'

const graphqlSchema = `
  type Query {
    user: User
  }

  type User {
    name: String
    address: Address
  }

  type Address {
    streetAddress: String
    region: String
  }
`
const schema = buildSchema(graphqlSchema)
export default schema
