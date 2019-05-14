import React from 'react'
import PropTypes from 'prop-types'

class Scene extends React.Component {
  render() {
    const {
      props: { children, ...rest },
    } = this

    return (
      <a-scene
        {...rest}
      >
        {children}
      </a-scene>
    )
  }
}

Scene.propTypes = {
  name: PropTypes.string,
}
Scene.defaultProps = {
  name: 'Scene',
}


export default Scene
