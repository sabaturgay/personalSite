import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import FriendList from './FriendList'

export default ({ pending, friends }) => (
  pending
    ? <CircularProgress />
    : <FriendList friends={friends} />
)
