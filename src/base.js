import firebase from 'firebase'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyDD-rkPoRSwcqRTIOOWS5uTdwJm6NQ4NiI",
    authDomain: "calma-c199b.firebaseapp.com",
    databaseURL: "https://calma-c199b-default-rtdb.firebaseio.com",
    projectId: "calma-c199b",
    storageBucket: "calma-c199b.appspot.com",
    messagingSenderId: "884734352259",
    appId: "1:884734352259:web:6447fd1d4a65624162f4b6",
    measurementId: "G-8WTJT8NQ2B"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default app;
