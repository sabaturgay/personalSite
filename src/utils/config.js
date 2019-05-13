import firebase from 'firebase/app'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

import { registerPlugin } from 'react-filepond'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const config = {
  apiKey: 'AIzaSyBguRh5XZZf0Gqip2MCTz5yVgs3O1pqgP4',
  authDomain: 'examplereact-62509.firebaseapp.com',
  databaseURL: 'https://examplereact-62509.firebaseio.com',
  projectId: 'examplereact-62509',
  storageBucket: '',
  messagingSenderId: '578715305063',
}
firebase.initializeApp(config)
