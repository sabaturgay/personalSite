import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { Wrapper, FormInput } from '../../components'
import { utilAPI } from '../../utils'
import { withWrapper } from '../../hocs'
import { routePaths, storeItemKeys } from '../../constants'

class Page extends React.Component {
  state = {
    isLoading: false,
    redirectPath: routePaths.HOME,
    shouldRedirect: false,
  }

  render() {
    const {
      state: {
        isLoading, redirectPath, shouldRedirect,
      },
      props: { store: { user } },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        <FormInput
          label="Email"
          placeholder="email"
          onChange={utilAPI.onChange(this, 'email')}
          type="email"
        />
        <Button
          variant="primary"
          onClick={() => {

          }}
        >
          Page
        </Button>
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

const { USER } = storeItemKeys
const wantedStoreKeys = [USER]

Page.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
}
Page.defaultProps = {
}

export default withWrapper(Page, wantedStoreKeys)
