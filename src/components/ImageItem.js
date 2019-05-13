import React from 'react'
import PropTypes from 'prop-types'
import {
  Row, Col, Card,
} from 'react-bootstrap'
import BadgeButton from './BadgeButton'

class ImageItem extends React.Component {
  render() {
    const {
      props: {
        imageId, tags, url,
      },
    } = this
    return (
      <Card key={imageId}>
        <Card.Img
          variant="top"
          src={url}
        />
        <Card.Body>
          <Row>
            {tags.map(({ className, probability }) => (
              <Col>
                <BadgeButton
                  name={className}
                  badgeText={probability}
                  style={{ marginTop: 5 }}
                />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

    )
  }
}

ImageItem.propTypes = {
  imageId: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string.isRequired,
    probability: PropTypes.number.isRequired,
  })).isRequired,
  url: PropTypes.string.isRequired,
}
ImageItem.defaultProps = {
}

export default ImageItem
