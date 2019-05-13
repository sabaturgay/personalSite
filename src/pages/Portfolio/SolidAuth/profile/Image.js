import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';

import styles from './Profile.module.css';

export default ({name, src, ...props}) => src ?
    <Avatar alt={name} src={src} className={styles.avatar} {...props}/> :
    <Avatar alt={name} className={styles.avatar} {...props}><FaceIcon/></Avatar>