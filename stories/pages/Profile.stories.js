import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  text, number, array, boolean, object,
} from '@storybook/addon-knobs'


import ProfileComponent from '../../src/pages/Profile/index'

export const getDefaultData = () => (
  {
    isLoading: boolean('isLoading', false),
    user: object('user', {
      displayName: text('displayName', 'ts'),
      email: text('email', 'ts@gmail.com'),
    }),
  }
)
export const getWithOtherData = () => (
  {
    isLoading: boolean('isLoading', false),
    user: object('user', {
      displayName: text('displayName', 'ts'),
      email: text('email', 'ts@gmail.com'),
    }),
  }
)

storiesOf('ProfileComponent', module)
  .add('default', () => (
    <ProfileComponent
      {...getDefaultData()}
    />
  )).add('withOther', () => (
    <ProfileComponent
      {...getWithOtherData()}
    />
  ))
