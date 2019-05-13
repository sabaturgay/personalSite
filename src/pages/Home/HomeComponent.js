import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { utilAPI, authAPI } from '../../utils'
import {
  Wrapper,
} from '../../components'

class HomeComponent extends React.Component {
  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        <Button
          variant="primary"
          onClick={utilAPI.changeState(this, { shouldRedirect: true })}
        >
          Profile
        </Button>
        <Button
          variant="secondary"
          onClick={authAPI.signout}
        >
          Signout
        </Button>
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}
HomeComponent.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
}
HomeComponent.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
}


export default HomeComponent
