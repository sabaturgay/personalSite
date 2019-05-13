import React from 'react'
import {
  Nav,
  Navbar,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

class NavbarDefault extends React.Component {
  render() {
    const { props: { appName, navItems } } = this
    return (
      <Navbar
        bg="dark"
        expand="lg"
      >
        <Navbar.Brand><Link to="/">{appName}</Link></Navbar.Brand>
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
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

NavbarDefault.propTypes = {
  appName: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
}
NavbarDefault.defaultProps = {
}


export default NavbarDefault
