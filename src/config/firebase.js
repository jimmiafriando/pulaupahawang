import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCMYYV5j65Jhie3sIhOPXuDKs7Y1RyezSY",
    authDomain: "pulau-pahawang.firebaseapp.com",
    projectId: "pulau-pahawang",
    storageBucket: "gs://pulau-pahawang.appspot.com",
    messagingSenderId: "852755752582",
    appId: "1:852755752582:web:5ebe21198110e0506cd307",
    measurementId: "G-SV2RWDKS79",
    databaseURL: "https://pulau-pahawang-default-rtdb.asia-southeast1.firebasedatabase.app/"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const storage = firebase.storage();
  export const database = firebase.database();

  export default firebase;