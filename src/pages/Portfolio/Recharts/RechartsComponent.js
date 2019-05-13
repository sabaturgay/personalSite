import React from 'react'
import { Button, Tabs, Tab } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { ResponsiveContainer } from 'recharts'

import { Wrapper, FormInput } from '../../../components'
import { utilAPI } from '../../../utils'
import LineChart from './LineChart'
import PieChart from './PieChart'
import ScatterChart from './ScatterChart'
import ComposedChart from './ComposedChart'
import AreaChart from './AreaChart'

const charts = {
  LineChart: { Component: LineChart },
  PieChart: { Component: PieChart },
  ScatterChart: { Component: ScatterChart },
  ComposedChart: { Component: ComposedChart },
  AreaChart: { Component: AreaChart },
}
class RechartsComponent extends React.Component {
  state={
    chart: 'LineChart',
  }

  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, onClick,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        <h2>Recharts</h2>
        <Tabs
          defaultActiveKey="LineChart"
          onSelect={(key) => { this.setState({ chart: key }) }}
        >
          {
            Object.keys(charts).map((key) => {
              const { state: { chart } } = this
              const { Component } = charts[key]
              return (
                <Tab
                  eventKey={key}
                  title={key}
                  key={key}
                >
                  {
                    chart === key && (
                      <ResponsiveContainer
                        width={700}
                        height="80%"
                        key={key}
                      >
                        <Component />
                      </ResponsiveContainer>
                    )
                  }
                </Tab>
              )
            })
          }


        </Tabs>
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

RechartsComponent.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  onClick: PropTypes.func,
}
RechartsComponent.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
  onClick: () => console.log('button clicked'),
}


export default RechartsComponent
