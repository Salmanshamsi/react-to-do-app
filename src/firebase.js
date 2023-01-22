import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD2jFVACOzSGuHTyWsCIyH2fCK74KjyarU",
  authDomain: "react-to-do-app-sylani.firebaseapp.com",
  projectId: "react-to-do-app-sylani",
  storageBucket: "react-to-do-app-sylani.appspot.com",
  messagingSenderId: "678280658876",
  appId: "1:678280658876:web:a089f9b0cba01da95375b9"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}