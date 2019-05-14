import React from 'react'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie'
import LoadingAnimation from '../assets/anim/noData.json'

class NoData extends React.Component {
  render() {
    const {
      props: { text },
    } = this

    return (
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: LoadingAnimation,
        }}
        height={window.innerHeight / 2}
      >
        {text}
      </Lottie>
    )
  }
}

NoData.propTypes = {
  text: PropTypes.string,
}
NoData.defaultProps = {
  text: 'NoData',
}


export default NoData
