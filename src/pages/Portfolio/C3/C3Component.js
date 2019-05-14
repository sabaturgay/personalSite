import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import c3 from 'c3'
import './c3.css'

import { Wrapper } from '../../../components'
import { utilAPI } from '../../../utils'

class C3Component extends React.Component {
  componentDidMount() {
    c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25],
        ],
        axes: {
          data2: 'y2',
        },
        types: {
          data2: 'bar',
        },
      },
      axis: {
        y: {
          label: {
            text: 'Y Label',
            position: 'outer-middle',
          },
          tick: {
            format: d3.format('$,'), // ADD
          },
        },
        y2: {
          show: true,
          label: {
            text: 'Y2 Label',
            position: 'outer-middle',
          },
        },
      },
    })
  }


  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect,
      },
    } = this
    return (
      <Wrapper isLoading={isLoading}>
        <h2>C3</h2>
        <div id="chart" />
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

C3Component.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  onClick: PropTypes.func,
}
C3Component.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
  onClick: () => console.log('button clicked'),
}


export default C3Component
