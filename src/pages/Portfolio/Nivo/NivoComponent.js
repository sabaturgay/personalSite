import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { generateCountriesData } from '@nivo/generators'
import { HeatMap } from 'nivo'

import { Wrapper, FormInput } from '../../../components'
import { utilAPI } from '../../../utils'

const keys = [
  'hot dogs',
  'burgers',
  'sandwich',
  'kebab',
  'fries',
  'donut',
  'junk',
  'sushi',
  'ramen',
  'curry',
  'udon',
  'bagel',
]
const commonProperties = {
  width: 900,
  height: 500,
  margin: {
    top: 60, right: 80, bottom: 60, left: 80,
  },
  data: generateCountriesData(keys, { size: 9, min: 0, max: 100 }),
  indexBy: 'country',
  keys,
}
class NivoComponent extends React.Component {
  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, onClick,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
          Nivo Example
        <HeatMap
          {...commonProperties}
          tooltip={({
            xKey, yKey, value, color,
          }) => (
            <strong style={{ color }}>
              {xKey}
              {' '}
/
              {' '}
              {yKey}
:
              {' '}
              {value}
            </strong>
          )}
          theme={{
            tooltip: {
              container: {
                background: 'gray',
              },
            },
          }}
        />
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

NivoComponent.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  onClick: PropTypes.func,
}
NivoComponent.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
  onClick: () => console.log('button clicked'),
}


export default NivoComponent
