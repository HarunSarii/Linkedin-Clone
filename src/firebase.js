import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyC69eFTOcjMTtsOdDajnswWkKKYk1BdkLE",
    authDomain: "linkedin-clone-642ac.firebaseapp.com",
    projectId: "linkedin-clone-642ac",
    storageBucket: "linkedin-clone-642ac.appspot.com",
    messagingSenderId: "546207216601",
    appId: "1:546207216601:web:8be204c6600e49f018dfc8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage};

  export default db;