import firebase from 'firebase/app';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDDvUtir5UDKCkZXKIjvaQ3r2_DNr_NiWA",
    authDomain: "nat-mov-app.firebaseapp.com",
    databaseURL: "https://nat-mov-app.firebaseio.com",
    projectId: "nat-mov-app",
    storageBucket: "nat-mov-app.appspot.com",
    messagingSenderId: "877265564527",
    appId: "1:877265564527:web:1593b3fa4d270695d82e9a"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();

