import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { Image } from 'react-bootstrap'
// import Image from '../SolidAuth/profile/Image'

import styles from '../SolidAuth/profile/Profile.module.css'

export default ({ displayName, photoURL, email }) => (
  <Grid
    container
    spacing={16}
    direction="row"
    justify="space-around"
    alignItems="center"
    style={{ padding: 20 }}
  >
    <Grid
      // item
      xs={12}
      justify="center"
      alignItems="center"
      className="d-flex justify-content-center"
      style={{ padding: 30 }}
    >
      <Image
        src={photoURL}
        thumbnail
        style={{
          width: 150,
        }}
      />
    </Grid>
    <Grid
      // item
      xs={12}
    >
      <div className="d-flex justify-content-center"><h2>{displayName}</h2></div>
      <div className="d-flex justify-content-center"><h2>{email}</h2></div>
    </Grid>
  </Grid>
)
