import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { Wrapper } from '../../components'
import { utilAPI } from '../../utils'

class ProfileComponent extends React.Component {
  render() {
    const {
      props: {
        user, isLoading, redirectPath, shouldRedirect,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        Profile
        <div>{JSON.stringify(user)}</div>
        <div>
          <Button
            variant="secondary"
            onClick={utilAPI.routerBack(this)}
          >
            Back
          </Button>
        </div>
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

ProfileComponent.propTypes = {
  user: PropTypes.object.isRequired,
}
ProfileComponent.defaultProps = {
}


export default ProfileComponent
