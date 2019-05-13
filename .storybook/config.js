import { configure, addDecorator } from '@storybook/react';
import {
  withKnobs,
} from '@storybook/addon-knobs'
import {
  withInfo,
} from '@storybook/addon-info'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import 'filepond/dist/filepond.min.css'

//DECORATORS
addDecorator(withKnobs)
addDecorator(withInfo)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

