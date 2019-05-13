import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    const {
      props: { appName, footerText },
    } = this

    return (
      <footer className="page-footer font-small blue fixed-bottom">
        <div className="footer-copyright text-center py-3">
          {footerText}
          <Link to="/">
            {appName}
          </Link>
        </div>

      </footer>
    )
  }
}

Footer.propTypes = {
  appName: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
}
Footer.defaultProps = {
}


export default Footer
