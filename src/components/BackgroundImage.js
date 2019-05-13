import React from 'react'
import PropTypes from 'prop-types'

class BackgroundImage extends React.Component {
  render() {
    const {
      props: { backgroundImage, blurRate },
    } = this

    return (
      <div
        className="h-100 w-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          filter: `blur(${blurRate}px)`,
          position: 'absolute',
        }}
      />
    )
  }
}

BackgroundImage.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  blurRate: PropTypes.number,
}
BackgroundImage.defaultProps = {
  blurRate: 5,
}


export default BackgroundImage
