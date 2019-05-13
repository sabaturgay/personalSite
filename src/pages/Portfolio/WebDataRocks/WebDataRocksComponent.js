import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Wrapper, FormInput } from '../../../components'
import { utilAPI } from '../../../utils'

class WebDataRocksComponent extends React.Component {
  componentDidMount() {
    const { WebDataRocks } = window
    const x = new WebDataRocks({
      container: '#wdr-component',
      toolbar: true,
      report: {
        dataSource: {
          filename: 'https://cdn.webdatarocks.com/data/data.csv',
        },
      },
    })
  }

  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, onClick,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>

        <h2>WebDataRocks</h2>
        <div id="wdr-component" />
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
