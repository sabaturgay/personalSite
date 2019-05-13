import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  text, number, object, array,
} from '@storybook/addon-knobs'

import { ImageItem } from '../../src/components'

export const getDefaultImageData = () => (
  {
    imageId: text('imageId', '7c3b40f9-fe3c-45d5-bc9f-3081e023b159'),
    tags: array(
      'tags',
      [
        object('tag1', { className: 'menu', probability: 0.243 }),
        object('tag2', { className: 'envelope', probability: 0.198 }),
        object('tag3', { className: 'carton', probability: 0.124 }),
      ],
    ),
    url: text('url', 'https://source.unsplash.com/daily'),
  }
)

storiesOf('ImageItem', module)
  .add('default', () => (
    <ImageItem
      onClick={action('clicked')}
      {...getDefaultImageData()}
    />
  ))
