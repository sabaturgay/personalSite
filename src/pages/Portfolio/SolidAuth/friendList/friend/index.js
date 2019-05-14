import React from 'react'

import { evaluateExpressions } from '@solid/react'
import FriendContainer from './Container'

const FriendEvaluation = evaluateExpressions(['name', 'imageSrc'], FriendContainer)

export default ({ webId }) => (
  <FriendEvaluation
    webId={webId}
    name={`[${webId}].name`}
    imageSrc={`[${webId}].image`}
  />
)
