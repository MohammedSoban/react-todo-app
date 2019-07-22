import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA1370aYdq1sIEfAZ3urLuZnxK259mfX1M",
    authDomain: "react-todo-app-4f387.firebaseapp.com",
    databaseURL: "https://react-todo-app-4f387.firebaseio.com",
    projectId: "react-todo-app-4f387",
    storageBucket: "",
    messagingSenderId: "959062283168",
    appId: "1:959062283168:web:7e4910964471b2a6"
  };
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.firestore().settings({timestampsInSnapshots: true})

   export default firebase;  