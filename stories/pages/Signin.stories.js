import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  text, number, array, boolean,
} from '@storybook/addon-knobs'


import SigninComponent from '../../src/pages/Signin/index'

export const getDefaultData = () => (
  {
    isLoading: boolean('isLoading', false),
    submit: action('submit'),
    onEmailChange: action('onEmailChange'),
    onPasswordChange: action('onPasswordChange'),
  }
)
export const getWithOtherData = () => (
  {
    isLoading: boolean('isLoading', false),
    submit: action('submit'),
    onEmailChange: action('onEmailChange'),
    onPasswordChange: action('onPasswordChange'),
  }
)

storiesOf('SigninComponent', module)
  .add('default', () => (
    <SigninComponent
      {...getDefaultData()}
    />
  )).add('withOther', () => (
    <SigninComponent
      {...getWithOtherData()}
    />
  ))
