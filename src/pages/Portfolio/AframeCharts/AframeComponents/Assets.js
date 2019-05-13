import React from 'react'
import { Button, Image } from 'react-bootstrap'
import PropTypes from 'prop-types'

class Assets extends React.Component {
  constructor(props) {
    super(props)
    this.loadedCount = 0
  }

  render() {
    const {
      props: {
        name, onLoad, data, sounds,
      },
    } = this
    return (
      <a-assets>
        {
          data.map(({ url, imageId }, index) => (
            <img
              crossOrigin="anonymous"
              key={imageId}
              id={`imageAsset${index}`}
              src={url}
              onLoad={() => {
                this.loadedCount += 1
                this.loadedCount === data.length && onLoad()
              }}
            />
          ))
        }
        {/* <a-entity>
          {
          sounds.map(({ url, moodColor }) => (
            <audio
              id={`soundAsset${moodColor}`}
              crossOrigin="anonymous"
              src={url}
            />
          ))
        }
        </a-entity> */}
      </a-assets>
    )
  }
}

Assets.propTypes = {
  name: PropTypes.string,
}
Assets.defaultProps = {
  name: 'Assets',
  data: [],
}


export default Assets
