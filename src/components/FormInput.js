import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

class FormInput extends React.Component {
  constructor(props) {
    super(props)
    this.id = (Math.random() * 10000).toString()
    this.input = React.createRef()
  }


  render() {
    const {
      label, children, ...rest
    } = this.props
    const { id } = this
    return (
      <Form.Group>
        {
          label
            ? (
              <Form.Label
                htmlFor={id}
                style={{ color: 'white' }}
              >
                {label}
              </Form.Label>
            )
            : null
        }
        <Form.Control
          ref={this.input}
          id={id}
          {...rest}
        >
          {children}
        </Form.Control>
      </Form.Group>
    )
  }
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}
FormInput.defaultProps = {
  disabled: false,
}
export default FormInput
