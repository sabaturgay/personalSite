import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './Friend.module.css';

export default ({webId}) =>
    <ListItem className={styles.friend}>
      <ListItemIcon>
        <CircularProgress/>
      </ListItemIcon>
      <ListItemText
          primary="Loading..."
          secondary={webId}
      />
    </ListItem>
