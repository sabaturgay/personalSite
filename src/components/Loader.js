import React from 'react'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie'
import LoadingAnimation from '../assets/anim/loading.json'

class Loader extends React.Component {
  render() {
    const { props: { progress, loadingText } } = this

    return (
      <div
        style={{
          height: '100%', background: 'rgb(47,47,47)', paddingRight: 0, paddingLeft: 0,
        }}
        className="d-flex align-items-center justify-content-center"
      >
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: LoadingAnimation,
          }}
          height={window.innerHeight / 2}
        >
          {`${loadingText} ${progress || ''} `}
        </Lottie>
      </div>
    )
  }
}

Loader.propTypes = {
  progress: PropTypes.number,
  loadingText: PropTypes.string,
}
Loader.defaultProps = {
  progress: null,
  loadingText: '...Loading',
}
export default Loader
