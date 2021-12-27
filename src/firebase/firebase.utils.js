import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCStEpWr3jQT59XQ9LUkbOo2GEYFa04lvc",
    authDomain: "crown-cloning.firebaseapp.com",
    projectId: "crown-cloning",
    storageBucket: "crown-cloning.appspot.com",
    messagingSenderId: "389069758688",
    appId: "1:389069758688:web:84662240d44693a72eb085",
    measurementId: "G-F592HQ62WT"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
