import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'

import { Loader } from './index'

export const WRAPPER_TYPES = {
  PAGE: 0,
}
const STYLES = [
  {
    height: '100%', background: 'rgb(47,47,47)', paddingRight: 0, paddingLeft: 0,
  },
]
class Wrapper extends React.Component {
  render() {
    const {
      props: {
        isLoading, progress,
        loadingText, children,
        backgroundImage,
        style, type,
      },
    } = this
    return (
      isLoading
        ? (
          <Loader
            progress={progress}
            loadingText={loadingText}
          />
        )
        : (
          <Container
            style={{ ...STYLES[type], ...style }}
            fluid
            className="h-100 mh-100"
          >
            {backgroundImage ? (
              <div
                className="h-100 w-100"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  filter: 'blur(5px)',
                  position: 'absolute',
                }}
              />
            ) : null}
            {children}
          </Container>
        )
    )
  }
}

Wrapper.propTypes = {
  isLoading: PropTypes.bool,
  progress: PropTypes.number,
  loadingText: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.number,
}

Wrapper.defaultProps = {
  isLoading: false,
  progress: null,
  loadingText: null,
  style: {},
  type: WRAPPER_TYPES.PAGE,
}

export default Wrapper
