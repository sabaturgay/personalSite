import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

class className extends React.Component {
  render() {
    const {
      props: { name },
    } = this

    return (
      <div>
        className
      </div>
    )
  }
}

className.propTypes = {
  name: PropTypes.string,
}
className.defaultProps = {
  name: 'className',
}


export default className
