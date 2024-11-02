// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

import fb from './firebaseconfig';

let firebaseConfig = fb;

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // Store these in your .env file for security
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID // Optional
// };

// console.log(firebaseConfig)

console.log('??AUTH')

console.log(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// // Initialize services
// const db = getFirestore(app);
// const auth = getAuth(app);

export default app;