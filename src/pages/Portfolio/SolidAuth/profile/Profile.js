import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import FriendList from '../friendList';
import Image from './Image';
import Paper from "@material-ui/core/Paper";

import styles from "./Profile.module.css";

export default ({ webId, fullName, imageSrc }) =>
      <Grid container
            spacing={16}
            direction="row"
            justify="flex-start"
            alignItems="center">
        <Grid item xs={12} md={2}>
          <Image name={fullName} src={imageSrc}/>
        </Grid>
        <Grid item xs={12} md={10}>
          <Paper className={styles.header} elevation={1}>
            <Typography variant="h5" component="h3">
              {fullName}
            </Typography>
            <Typography variant="caption">
              {webId}
            </Typography>
          </Paper>

        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" component="h4">
            {fullName} knows:
          </Typography>
          <Paper className={styles.friendList} elevation={1}>
            <FriendList webId={webId}/>
          </Paper>
        </Grid>
      </Grid>
