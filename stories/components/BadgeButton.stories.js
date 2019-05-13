import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  text, number, object, array,
} from '@storybook/addon-knobs'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BadgeButton } from '../../src/components'

export const getDefaultImageData = () => (
  {
    name: text('name', 'car'),
    badgeText: text('badgeText', '0.1232'),
    color: text('color', 'primary'),
    onClick: action('clicked'),
  }
)

storiesOf('BadgeButton', module)
  .add('default', () => (
    <BadgeButton
      {...getDefaultImageData()}
    />
  ))
