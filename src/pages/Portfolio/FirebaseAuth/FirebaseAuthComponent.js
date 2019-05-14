import React from 'react'
import { Button, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { Wrapper } from '../../../components'
import { utilAPI } from '../../../utils'
import Profile from './Profile'

class FirebaseAuthComponent extends React.Component {
  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, user, signin, signout,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        <h2>Firebase Auth</h2>
        <Row className="h-100 justify-content-center align-items-center">
          {
            user
              ? (
                <div>
                  <Profile
                    {...user}
                  />
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="outline-danger"
                      onClick={signout}
                    >
Signout

                    </Button>
                  </div>
                </div>
              )
              : (
                <Button
                  variant="outline-primary"
                  onClick={signin}
                >
Signin with Google

                </Button>
              )
          }
        </Row>


        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

FirebaseAuthComponent.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  onClick: PropTypes.func,
}
FirebaseAuthComponent.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
  onClick: () => console.log('button clicked'),
}


export default FirebaseAuthComponent
