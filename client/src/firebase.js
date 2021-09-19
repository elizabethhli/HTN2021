import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDmNYJhvKpLDrRYVplM9Z9xBsiS3PADr_4",
  authDomain: "hack-the-north-b9ca2.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig);

export default app