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
        isLoading, redirectPath, shouldRedirect, onClick, signin, signout, userData,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        <h2>Solid Auth</h2>
        {
          this._renderContent(userData)
          }
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }

  _renderContent = () => {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, onClick, signin, signout, userData,
      },
    } = this

    if (userData) {
      return (
        <div>
          {
          Object.keys(userData).map(key => (
            <div>
              <span>{key}</span>
              <span>{userData[key]}</span>
            </div>
          ))
        }
          <Button onClick={signout}>
          Signout
          </Button>
        </div>
      )
    }
    return (
      <div>
          Please Use Solid Authentication to Enter the System
        <div>
          <Button onClick={signin}>
            Signin
          </Button>
        </div>
      </div>
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
