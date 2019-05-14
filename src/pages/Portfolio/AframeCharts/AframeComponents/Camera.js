import React from 'react'
import PropTypes from 'prop-types'

class Camera extends React.Component {
  render() {
    return (
      <a-entity
        id="main-camera-wrapper"
        position="-5 0 2"
        rotation="0 -30 0"
        animation="property: position; easing: easeOutQuad; startEvents: imageClicked;"
      >
        <a-camera
          id="camera"
          user-height="0"
          visible="true"
          wasd-controls="enabled: true; acceleration: 500;"
          cursor="rayOrigin: mouse;"
          raycaster="objects: .clickable"
          look-controls="pointerLockEnabled: true;"
        >
          <a-cursor
            id="fuse-cursor"
            fuse="true"
            geometry="radiusInner: 0.02; radiusOuter: 0.03; thetaLength: 360; thetaStart: 90;"
            color="#232323"
            opacity="1"
            repeat="1 1"
            shader="flat"
            position="0 0 -1"
            objects=".clickable"
            rotation="0 0 0"
            scale="1 1 1"
            visible="true"
          />
          <a-ring
            id="fuse-progress"
            radius-inner="0.02"
            radius-outer="0.03"
            theta-length="360"
            theta-start="90"
            color="#FFE066"
            opacity="0"
            repeat="1 1"
            shader="flat"
            position="0 0 -0.999"
            rotation="0 0 0"
            scale="1 1 1"
            visible="true"
            class="clickable"
            animation="delay: 0; dir: normal; dur: 1500; easing: linear; loop: 0; property: geometry.thetaLength; startEvents: fusing; to: 0; from: 360;"
            animation__1="delay: 0; dir: normal; dur: 500; easing: linear; loop: 0; property: opacity; startEvents: fusing; to: 1; from: 0;"
          />
        </a-camera>
      </a-entity>
    )
  }
}

Camera.propTypes = {
  name: PropTypes.string,
}
Camera.defaultProps = {
  name: 'Camera',
}


export default Camera
