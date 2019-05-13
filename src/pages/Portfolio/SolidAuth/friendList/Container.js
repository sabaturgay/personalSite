import React from 'react';

import FriendList from './FriendList';
import CircularProgress from "@material-ui/core/CircularProgress";

export default ({pending, friends}) => (
    pending ?
        <CircularProgress/> :
        <FriendList friends={friends}/>
);