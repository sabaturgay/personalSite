import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Wrapper } from '../../../components'
import { utilAPI } from '../../../utils'
import Profile from './profile'

class SolidAuthComponent extends React.Component {
  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        <h2>Solid Auth</h2>
        {
          this._renderContent()
          }
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }

  _renderContent = () => {
    const {
      props: {
        signin, signout, userData,
      },
    } = this

    if (userData) {
      return (
        <div>
          {/* {
          Object.keys(userData).map(key => (
            <div>
              <span>{key}</span>
              <span>{JSON.stringify(userData[key])}</span>
            </div>
          ))
        } */}
          <Profile webId={userData.webId} />

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
