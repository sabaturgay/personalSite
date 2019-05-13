import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { Wrapper, FormInput } from '../../components'
import { utilAPI } from '../../utils'

class PageComponent extends React.Component {
  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, onClick,
      },
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
          onClick={onClick}
        >
          PageComponent
        </Button>
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

PageComponent.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  onClick: PropTypes.func,
}
PageComponent.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
  onClick: () => console.log('button clicked'),
}


export default PageComponent
