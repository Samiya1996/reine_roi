import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";


const config = {
    apiKey: "AIzaSyDxe9XYeiELMMqD1T8yue3ITJmz-oB2ROs",
    authDomain: "shopping-db-43873.firebaseapp.com",
    projectId: "shopping-db-43873",
    storageBucket: "shopping-db-43873.appspot.com",
    messagingSenderId: "192639742601",
    appId: "1:192639742601:web:00b4d467c462ee6ddf0c58",
    measurementId: "G-1GEC7CT60R"
  }


  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;