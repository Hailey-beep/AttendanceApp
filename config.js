 import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBr4V6hfQNI0HLjPS5UnKNpLJN_EcqUbKI",
    authDomain: "attendance-app-5f0bd.firebaseapp.com",
    databaseURL: "https://attendance-app-5f0bd-default-rtdb.firebaseio.com",
    projectId: "attendance-app-5f0bd",
    storageBucket: "attendance-app-5f0bd.appspot.com",
    messagingSenderId: "148534215253",
    appId: "1:148534215253:web:6a31fbdf867e066857cadc"
  };
  // Initialize Firebase
  if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
//initialize your database

  export default firebase.database()
