import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  text, number, array, boolean,
} from '@storybook/addon-knobs'


import SignupComponent from '../../src/pages/Signup/index'

export const getDefaultData = () => (
  {
    isLoading: boolean('isLoading', false),
    submit: action('submit'),
    onEmailChange: action('onEmailChange'),
    onPasswordChange: action('onPasswordChange'),
    onNameChange: action('onNameChange'),
  }
)
export const getWithOtherData = () => (
  {
    isLoading: boolean('isLoading', false),
    submit: action('submit'),
    onEmailChange: action('onEmailChange'),
    onPasswordChange: action('onPasswordChange'),
    onNameChange: action('onNameChange'),
  }
)

storiesOf('SignupComponent', module)
  .add('default', () => (
    <SignupComponent
      {...getDefaultData()}
    />
  )).add('withOther', () => (
    <SignupComponent
      {...getWithOtherData()}
    />
  ))
