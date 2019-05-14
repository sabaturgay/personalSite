import firebase from 'firebase/app'
import 'firebase/storage'

const storageAPI = {
  put: async (storagePath, file, metaData, progressFunc) => new Promise((resolve, reject) => {
    const storageRef = firebase.storage().ref()
    const uploadTask = storageRef.child(storagePath).put(file, metaData)
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      progressFunc, ({ code }) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break

          case 'storage/canceled':
            // User canceled the upload
            break

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break
          default:
        }
        reject(code)
      }, async () => {
        // Upload completed successfully, now we can get the download URL
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL()
        console.log('File available at', downloadURL)
        resolve(downloadURL)
      })
  }),
  delete: async (storagePath) => {
    const storageRef = firebase.storage().ref()
    await storageRef.child(storagePath).delete()
  },
}

export default storageAPI
