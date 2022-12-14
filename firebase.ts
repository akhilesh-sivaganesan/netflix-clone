// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQIOEUxIGLDJNnT0XusLL8WtOYms-JhnM",
    authDomain: "netflix-clone-7699d.firebaseapp.com",
    projectId: "netflix-clone-7699d",
    storageBucket: "netflix-clone-7699d.appspot.com",
    messagingSenderId: "670543277588",
    appId: "1:670543277588:web:84d5287f5e13c800f80101",
    measurementId: "G-EK3V7CJ7XS"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }