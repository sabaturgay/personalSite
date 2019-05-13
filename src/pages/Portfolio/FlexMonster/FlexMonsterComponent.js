import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import * as FlexmonsterReact from 'react-flexmonster'

import { Wrapper, FormInput } from '../../../components'
import { utilAPI } from '../../../utils'

class FlexMonsterComponent extends React.Component {
  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, onClick,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        <h2>FlexMonster</h2>
        <FlexmonsterReact.Pivot
          toolbar
          componentFolder="https://cdn.flexmonster.com/"
          width="100%"
          report="https://cdn.flexmonster.com/reports/report.json"
        />
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

FlexMonsterComponent.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  onClick: PropTypes.func,
}
FlexMonsterComponent.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
  onClick: () => console.log('button clicked'),
}


export default FlexMonsterComponent
