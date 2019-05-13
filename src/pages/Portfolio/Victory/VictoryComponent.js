import React from 'react'
import { Button, Tabs, Tab } from 'react-bootstrap'
import PropTypes from 'prop-types'
import {
  VictoryChart, VictoryAxis, VictoryBar, VictoryStack, VictoryTheme, VictoryPolarAxis,
} from 'victory'
import math from 'mathjs'

import { Wrapper, FormInput } from '../../../components'
import { utilAPI } from '../../../utils'
import theme from './theme'

const style = { parent: { maxWidth: '60%' } }

class VictoryComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.getData(),
    }
  }


  makeDynamic = () => {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: this.getData(),
      })
    }, 3000)
  }

  stopDynamic = () => {
    window.clearInterval(this.setStateInterval)
  }

  getData = () => {
    const bars = math.random(6, 10)
    const result = math.range(0, bars).map(bar => ({ x: bar + 1, y: math.random(2, 10) }))
    console.log(result)
    return result._data
  }

  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, onClick,
      },
      state: {
        dynamic,
      },
    } = this

    return (
      <Wrapper isLoading={isLoading}>
        <h2>Victory</h2>
        <Tabs
          defaultActiveKey="simple"
        >
          <Tab
            eventKey="simple"
            title="Simple"
          >
            {this._renderSimpleChart()}
          </Tab>
          <Tab
            eventKey="advanced"
            title="Advanced"
          >
            {this._renderAdvancedChart()}
          </Tab>
          <Tab
            eventKey="animated"
            title="Animated"
          >
            {this._renderAnimationChart(dynamic)}
          </Tab>
          <Tab
            eventKey="polar"
            title="Polar Chart"
          >
            {this._renderPolarChart()}
          </Tab>
        </Tabs>

        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }

  _renderSimpleChart = () => (
    <VictoryChart
      domainPadding={20}
      theme={theme}
      style={style}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={x => (`$${x / 1000}k`)}
      />
      <VictoryBar
        data={data}
        x="quarter"
        y="earnings"
      />
    </VictoryChart>
  )

  _renderAdvancedChart = () => (
    <VictoryChart
      domainPadding={20}
      theme={theme}
      style={style}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={x => (`$${x / 1000}k`)}
      />
      <VictoryStack>
        <VictoryBar
          data={data2012}
          x="quarter"
          y="earnings"
        />
        <VictoryBar
          data={data2013}
          x="quarter"
          y="earnings"
        />
        <VictoryBar
          data={data2014}
          x="quarter"
          y="earnings"
        />
        <VictoryBar
          data={data2015}
          x="quarter"
          y="earnings"
        />
      </VictoryStack>
    </VictoryChart>
  )

  _renderAnimationChart = dynamic => (
    <div>
      <VictoryChart
        theme={theme}
        domainPadding={{ x: 20 }}
        animate={{ duration: 500 }}
        style={style}
      >
        <VictoryBar
          data={this.state.data}
          style={{
            data: { fill: 'tomato', width: 12 },
          }}
          animate={{
            onExit: {
              duration: 500,
              before: () => ({
                _y: 0,
                fill: 'orange',
                label: 'BYE',
              }),
            },
          }}
        />

      </VictoryChart>
      <Button onClick={() => {
        this.setState({ dynamic: !dynamic })
        !dynamic ? this.makeDynamic() : this.stopDynamic()
      }}
      >
        {!dynamic ? 'Make Dynamic' : 'Stop'}
      </Button>
    </div>
  )

  _renderPolarChart = () => (
    <VictoryChart
      polar
      theme={theme}
      innerRadius={50}
      style={style}
    >
      <VictoryPolarAxis />
      <VictoryPolarAxis
        dependentAxis
        tickValues={[1, 3, 5]}
        axisAngle={40}
      />
      <VictoryBar
        data={[
          { x: 0, y: 2 },
          { x: 60, y: 3 },
          { x: 120, y: 5 },
          { x: 180, y: 4 },
          { x: 240, y: 4 },
          { x: 300, y: 4 },
        ]}
        style={{ data: { fill: '#c43a31', width: 30 } }}
      />
    </VictoryChart>
  )
}

VictoryComponent.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  onClick: PropTypes.func,
}
VictoryComponent.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
  onClick: () => console.log('button clicked'),
}


export default VictoryComponent

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
]
const data2012 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
]

const data2013 = [
  { quarter: 1, earnings: 15000 },
  { quarter: 2, earnings: 12500 },
  { quarter: 3, earnings: 19500 },
  { quarter: 4, earnings: 13000 },
]

const data2014 = [
  { quarter: 1, earnings: 11500 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 20000 },
  { quarter: 4, earnings: 15500 },
]

const data2015 = [
  { quarter: 1, earnings: 18000 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 12000 },
]
