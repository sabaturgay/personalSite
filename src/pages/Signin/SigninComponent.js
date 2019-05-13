import React from 'react'
import {
  Button, Col, Row, Card,
} from 'react-bootstrap'
import PropTypes from 'prop-types'

import { Wrapper } from '../../components'
import { utilAPI } from '../../utils'

class SigninComponent extends React.Component {
  render() {
    const {
      props: {
        isLoading, signinWithGoogle,
      },
    } = this
    return (
      <Wrapper
        isLoading={isLoading}
        backgroundImage="https://images.pexels.com/photos/5842/people-vintage-photo-memories.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      >
        <Row
          className="justify-content-center align-items-center"
          style={{ height: '100%' }}
        >
          <Col xs={{ span: 6 }}>
            <Card style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: 20, alignSelf: 'center' }}>
              <h1>
                Welcome to MemoryBox
              </h1>
              <p>
                We work hard to make you experience wonderful moments with your memories
              </p>
              <Button
                variant="primary"
                onClick={signinWithGoogle}
                style={{ marginTop: 10 }}
              >
                Signin with Google
              </Button>
              <Button
                variant="primary"
                onClick={signinWithGoogle}
                style={{ marginTop: 10 }}
              >
                Signup with Google
              </Button>
            </Card>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

SigninComponent.propTypes = {
  isLoading: PropTypes.bool,
  signinWithGoogle: PropTypes.func.isRequired,
}
SigninComponent.defaultProps = {
  isLoading: false,
}


export default SigninComponent
