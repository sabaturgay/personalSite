import React from 'react'
import {
  Button, Nav, Row, Tab, Col,
} from 'react-bootstrap'
import PropTypes from 'prop-types'

import { Wrapper, FormInput } from '../../components'
import { utilAPI } from '../../utils'
import tabs from './tabs'

class PortfolioComponent extends React.Component {
  state = {
    selectedTab: 'AframeCharts',
  }

  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect,
      },
      state: { selectedTab },
    } = this

    return (
      <Wrapper
        isLoading={isLoading}
        backgroundImage="/charts.jpg"
        blurRate={1.5}
      >
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="Victory"
          onSelect={(key) => { this.setState({ selectedTab: key }) }}
        >
          <Row className="h-100 mh-100">

            <Col
              sm={3}
              style={{ background: 'rgb(47,47,47)' }}
              className="h-100 mh-100"
            >
              <Nav
                variant="pills"
                className="flex-column"
              >
                <h2>Technologies and Frameworks</h2>
                {
                  Object.keys(tabs).map(key => (
                    <Nav.Item key={key}>
                      <Nav.Link eventKey={key}>{key}</Nav.Link>
                    </Nav.Item>
                  ))
                }
                <h2>My Sites</h2>
                <a href="https://tensorflow-memory-box.herokuapp.com/">
                  <Button>
                    Go My thesis project
                  </Button>
                </a>
              </Nav>
            </Col>
            <Col
              sm={9}
              className="h-100 mh-100"
            >
              <Tab.Content className="h-100 mh-100">
                {
                  Object.keys(tabs).map((key) => {
                    const { Component } = tabs[key]
                    return (
                      <Tab.Pane
                        key={key}
                        eventKey={key}
                        className="h-100 mh-100"
                      >
                        <Component />
                      </Tab.Pane>
                    )
                  })
                }
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

PortfolioComponent.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  onClick: PropTypes.func,
}
PortfolioComponent.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
  onClick: () => console.log('button clicked'),
}


export default PortfolioComponent
