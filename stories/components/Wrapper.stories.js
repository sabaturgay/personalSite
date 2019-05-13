import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  text, number, array, boolean, object,
} from '@storybook/addon-knobs'


import Wrapper from '../../src/components/Wrapper'

export const getDefaultData = () => (
  {
    isLoading: boolean('isLoading', false),
    onClick: action('onClick'),
    style: object('style', { background: 'black' }),

  }
)
export const getWithBackgroundImageData = () => (
  {
    isLoading: boolean('isLoading', false),
    onClick: action('onClick'),
    backgroundImage: text('backgroundImage', 'https://images.pexels.com/photos/2198050/pexels-photo-2198050.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  }
)

storiesOf('Wrapper', module)
  .add('default', () => (
    <Wrapper
      {...getDefaultData()}
    />
  )).add('withBackground', () => (
    <Wrapper
      {...getWithBackgroundImageData()}
    />
  ))
