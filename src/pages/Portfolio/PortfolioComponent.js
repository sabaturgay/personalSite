import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import {
  Button, Nav, Row, Tab, Col,
} from 'react-bootstrap'
import PropTypes from 'prop-types'

import { Wrapper } from '../../components'
import { utilAPI } from '../../utils'
import tabs from './tabs'

class PortfolioComponent extends React.Component {
  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, match: { url },
      },
    } = this

    return (
      <Wrapper
        isLoading={isLoading}
        // backgroundImage="/charts.jpg"
        blurRate={1.5}
      >
        <Tab.Container
          id="left-tabs-example"
          // defaultActiveKey="Victory"
        >
          <Row className="h-100">

            <Col
              sm={3}
              style={{ background: 'rgb(47,47,47, 0.9)' }}
              className="h-100"
            >
              <Nav
                variant="pills"
                className="flex-column"
              >
                {
                  Object.keys(tabs).map(topic => (
                    <Col key={topic}>
                      <h2>{topic}</h2>
                      {Object.keys(tabs[topic]).map(key => (
                        <Link
                          to={`${url}/${key}`}
                          style={{ padding: 20 }}
                          key={key}
                        >
                          <Button
                            block
                            variant="outline-primary"
                          >
                            {key}
                          </Button>
                        </Link>
                      ))}
                    </Col>
                  ))
                }
                <h2 style={{ paddingLeft: 20 }}>My Sites</h2>
                <a
                  href="https://sabaturgay.github.io/resume/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: 20 }}
                >
                  <Button block>
                    Resume
                  </Button>
                </a>
                <a
                  href="https://next-starter-ibu0ukvcz-sabaturgay.vercel.app/Graph/CaseLawExplorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: 20 }}
                >
                  <Button block>
                    Perfect Graph
                  </Button>
                </a>
                <a
                  href="https://sabaturgay.github.io/perfect-graph-docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: 20 }}
                >
                  <Button block>
                    Perfect Graph Docs
                  </Button>
                </a>
              </Nav>
            </Col>
            <Col
              sm={9}
              className="h-100"
            >
              <Tab.Content
                className="h-100"
                style={{ padding: 20 }}
              >
                <Switch>
                  {
                  Object.keys(tabs).map(topic => Object.keys(tabs[topic]).map((key) => {
                    const { Component } = tabs[topic][key]
                    return (
                      <Route
                        key={key}
                        exact
                        path={`${url}/${key}`}
                        component={Component}
                      />
                    )
                  }))
                }
                </Switch>
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
