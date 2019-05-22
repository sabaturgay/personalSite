import { buildSchema } from 'graphql'

export default buildSchema(`
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
`)
