import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

import { utilAPI } from '../../utils'
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
      <Wrapper
        isLoading={isLoading}
        // backgroundImage="/charts.jpg"
        blurRate={1.5}
      >
        <div className="h-100 align-items-center justify-content-center">
          <Button
            block
            variant="outline-primary"
          >
          Go to My Portfolio
          </Button>
        </div>
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
