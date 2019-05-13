import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { Wrapper, FormInput } from '../../../components'
import { utilAPI } from '../../../utils'

class WebDataRocksComponent extends React.Component {
  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, onClick,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        
          WebDataRocks Example
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

WebDataRocksComponent.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  onClick: PropTypes.func,
}
WebDataRocksComponent.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
  onClick: () => console.log('button clicked'),
}


export default WebDataRocksComponent
