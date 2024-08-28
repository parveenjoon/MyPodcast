// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKOnSQjo0eHQOtTc_4mCyvo_UzkjxBuJw",
  authDomain: "mypodcastapp-6684c.firebaseapp.com",
  projectId: "mypodcastapp-6684c",
  storageBucket: "mypodcastapp-6684c.appspot.com",
  messagingSenderId: "829920408006",
  appId: "1:829920408006:web:d62f0f649c91f6410382c7",
  measurementId: "G-XEDV6QGQCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export{auth, db, storage};
