import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { LoggedIn, LoggedOut } from '@solid/react'
import { Wrapper, FormInput } from '../../../components'
import { utilAPI } from '../../../utils'

class SolidAuthComponent extends React.Component {
  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, onClick, signin, signout, user,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        <h2>Solid Auth</h2>
        <LoggedOut>
          Please Use Solid Authentication to Enter the System
          <div>
            <Button onClick={signin}>
            Signin
            </Button>
          </div>
        </LoggedOut>


        <LoggedIn>
          {JSON.stringify(user)}
          <Button onClick={signout}>
            Signout
          </Button>
        </LoggedIn>

        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

SolidAuthComponent.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  onClick: PropTypes.func,
}
SolidAuthComponent.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
  onClick: () => console.log('button clicked'),
}


export default SolidAuthComponent
