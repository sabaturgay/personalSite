import React from 'react'
import PropTypes from 'prop-types'

class Environment extends React.Component {
  render() {
    const {
      props: {
        backgroundColor, src, plane,
      },
    } = this

    return (
      <a-entity>
        <a-sky
          id="sky"
        // position="0 0 0"
        // rotation="0 0 0"
        // scale="1 1 1"
        // radius="5000"
        // segments-width="64"
        // segments-height="20"
          color={backgroundColor}
          opacity="1"
        // flat-shading="true"
          shader="standard"
        // side="double"
        // repeat="1 1"
          visible="true"
          src={src}
        />
        {
        backgroundColor && plane && (
          <a-plane
            color={backgroundColor}
              // src="/floor.jpg"
            height="100"
            width="10"
            rotation="-90 0 0"
          />
        )
      }

      </a-entity>
    )
  }
}

Environment.propTypes = {
  name: PropTypes.string,
}
Environment.defaultProps = {
  name: 'Environment',
}


export default Environment
