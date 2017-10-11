import Firebase from 'firebase'
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
}

export const firebaseApp = Firebase.initializeApp(config)
export const auth = firebaseApp.auth()
export const database = firebaseApp.database()
