import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

// https://breathtaking-life.tistory.com/126

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
};

const initializeFirebase = () => {
  firebase.initializeApp(firebaseConfig);
};

export default initializeFirebase;
