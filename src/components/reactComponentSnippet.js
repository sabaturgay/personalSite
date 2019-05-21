import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

class ComponentName extends React.Component {
  render() {
    const {
      props: { onClick },
    } = this

    return (
      <Grid>
        ComponentName
      </Grid>
    )
  }
}

ComponentName.propTypes = {
  onClick: PropTypes.func,
}
ComponentName.defaultProps = {
  onClick: () => { },
}


export default ComponentName
