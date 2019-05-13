import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

import styles from './Friend.module.css';

// import {toProfile} from '../../../routing';
import Image from "../../profile/Image";
//to={toProfile(webId)}>
export default ({webId, name, imageSrc}) =>
  <ListItem className={styles.friend} button component={Link} > 
    <ListItemIcon>
      <Image className={styles.avatar} name={name} src={imageSrc}/>
    </ListItemIcon>
    <ListItemText
        primary={name}
        secondary={webId}
    />
  </ListItem>
