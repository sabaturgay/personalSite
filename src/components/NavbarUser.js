import React from 'react'
import {
  Nav,
  Navbar,
  Button,
  Image,
  Container, Row, Col,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = require('../assets/images/defaultUser.png')

class NavbarUser extends React.Component {
  render() {
    const {
      props: { user: { photoURL, displayName, email }, navItems, navButtons },
    } = this

    return (
      <Navbar
        bg="dark"
        expand="lg"
      >
        <Navbar.Brand>
          <Container>
            <Row>
              <Col>
                <Image
                  src={photoURL || DEFAULT_IMAGE}
                  thumbnail
                  style={{
                    width: 60,
                  }}
                />

              </Col>
              <Col>
                <span>{displayName}</span>
                <br />
                <span>{email}</span>

              </Col>
            </Row>

          </Container>


        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          {
              navItems.map(({ path, name }) => (
                <Nav.Item key={path}>
                  <Link
                    to={path}
                    style={{ margin: 10 }}
                  >
                    {name}
                  </Link>
                </Nav.Item>
              ))
            }

          {
              navButtons.map(({ onClick, name }) => (
                <Button
                  variant="secondary"
                  onClick={onClick}
                  key={name}
                >
                  {name}
                </Button>
              ))
            }

        </Navbar.Collapse>

      </Navbar>
    )
  }
}

NavbarUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
  }).isRequired,
}

NavbarUser.defaultProps = {
  navItems: [],
  navButtons: [],
}


export default NavbarUser
