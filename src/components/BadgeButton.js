import React from 'react'
import { Badge, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { htmlCodes } from '../constants'

class BadgeButton extends React.Component {
  render() {
    const {
      props: {
        name, badgeText, ...rest
      },
    } = this

    return (
      <Button
        {...rest}
      >
        {`${name}`}
        {htmlCodes.SPACE}
        <Badge variant="secondary">{badgeText}</Badge>
      </Button>
    )
  }
}

BadgeButton.propTypes = {
  name: PropTypes.string.isRequired,
  badgeText: PropTypes.string.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
}
BadgeButton.defaultProps = {
  onClick: () => {},
  variant: 'outline-primary',
}


export default BadgeButton
