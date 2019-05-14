import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { utilAPI } from '../../utils'
import {
  Wrapper,
} from '../../components'
import { routePaths } from '../../constants'

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
        <Row className="h-100 align-items-center justify-content-center">
          <Link to={routePaths.PORTFOLIO}>
            <Button
              block
              variant="outline-primary"
            >
          Go to My Portfolio
            </Button>
          </Link>
          {utilAPI.redirect(redirectPath, shouldRedirect)}

        </Row>
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
