import _ from 'lodash'
import schema from './schema'

console.log(schema)

_.forEach(schema.getTypeMap(), (type) => {
  const { astNode } = type
  console.log(Object.getPrototypeOf(type))
  // console.log(_.)
  // if (astNode) {
  //   const { kind } = astNode
  //   switch (kind) {
  //     case "ObjectTypeDefinition":

  //       break;
  //     case "ObjectTypeDefinition":

  //       break;

  //     default:
  //       break;
  //   }
  // }
})


export default {
  sources: [{ type: 'file', value: 'https://turgaysaba.solid.community/profile/card' }],
  queryFormat: 'graphql',
  '@context': {
    user: { '@id': 'http://xmlns.com/foaf/0.1/maker', '@singular': true },
    user_name: { '@singular': true },
    user_address: { '@singular': true },
    user_address_streetAddress: { '@singular': true },
    user_address_region: { '@singular': true },
    name: { '@id': 'http://www.w3.org/2006/vcard/ns#fn', '@singular': true },
    address: { '@id': 'http://www.w3.org/2006/vcard/ns#hasAddress', '@singular': true },
    streetAddress: { '@id': 'http://www.w3.org/2006/vcard/ns#street-address', '@singular': true },
    region: { '@id': 'http://www.w3.org/2006/vcard/ns#region' },
    address_streetAddress: { '@singular': true },
    address_region: { '@singular': true },
  },
}