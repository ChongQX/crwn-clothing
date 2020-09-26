import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQc8_MmEI9eyF3fogX6Zfg4QMbWAaserc",
    authDomain: "crown-db-2c512.firebaseapp.com",
    databaseURL: "https://crown-db-2c512.firebaseio.com",
    projectId: "crown-db-2c512",
    storageBucket: "crown-db-2c512.appspot.com",
    messagingSenderId: "320367174661",
    appId: "1:320367174661:web:ab8507f0c8167e22f7686c",
    measurementId: "G-WFNQTR53RN"
  };

  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//trigger google popup when using provider
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;