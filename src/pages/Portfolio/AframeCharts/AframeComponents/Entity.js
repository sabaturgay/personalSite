import React from 'react'
import PropTypes from 'prop-types'

class Entity extends React.Component {
  render() {
    const {
      props: { children, ...rest },
    } = this

    return (
      <a-entity
        {...rest}
      >
        {children}
      </a-entity>
    )
  }
}

Entity.propTypes = {
  name: PropTypes.string,
}
Entity.defaultProps = {
  name: 'Entity',
}


export default Entity
