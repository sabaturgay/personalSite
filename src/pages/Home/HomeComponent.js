import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'

import { utilAPI } from '../../utils'
import {
  Wrapper,
} from '../../components'
import { routePaths } from '../../constants'

import Image1 from '../../assets/images/crossPlatform.png'
import Image2 from '../../assets/images/fastPrototyping.png'
import Image3 from '../../assets/images/collaborativeWorking.png'
import Image4 from '../../assets/images/continuousDeployment.png'

const IMAGES = [
  Image1,
  Image2,
  Image3,
  Image4,
]
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
        <SwipeableViews style={{ height: '100%' }} enableMouseEvents>
          {
            IMAGES.map((image, index) => (
              <Row
                key={index}
                className="h-100 align-items-center justify-content-center"
              >
                <img
                  src={image}
                  height={500}
                  alt={index}
                />
              </Row>
            ))
          }
          <Row className="h-100 align-items-center justify-content-center">
            <Link to={routePaths.PORTFOLIO}>
              <Button
                block
                variant="outline-primary"
              >
          Go to My Portfolio
              </Button>
            </Link>

          </Row>
        </SwipeableViews>
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
