import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  text, number, object, array, boolean,
} from '@storybook/addon-knobs'


import HomeComponent from '../../src/pages/Home/HomeComponent'

export const getDefaultData = () => (
  {
    isLoading: boolean('isLoading', false),
  }
)
export const getWithOtherData = () => (
  {
    isLoading: boolean('isLoading', false),
  }
)

storiesOf('HomeComponent', module)
  .add('default', () => (
    <HomeComponent
      {...getDefaultData()}
    />
  )).add('withOther', () => (
    <HomeComponent
      {...getWithOtherData()}
    />
  ))
