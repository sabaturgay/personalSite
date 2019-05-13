import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { Wrapper, FormInput } from '../../../components'
import { utilAPI } from '../../../utils'
import {
  Entity, Scene, Camera, Environment,
} from './AframeComponents'

class AframeChartsComponent extends React.Component {
  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, onClick,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        <h2>AframeCharts</h2>
        <Scene
          id="scene"
          embedded="true"
          // background={`color: rgb(${prominentColor[0]}, ${prominentColor[1]}, ${prominentColor[2]})`}
        >
          {/* <Assets/> */}
          <Camera />
          <Environment backgroundColor="#756d5b" plane={false}/>
          <Entity
            charts="dataPoints: /aframeData.json; type: bar"
            position="0 0 -10"
          />
        </Scene>
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

AframeChartsComponent.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  onClick: PropTypes.func,
}
AframeChartsComponent.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
  onClick: () => console.log('button clicked'),
}


export default AframeChartsComponent
