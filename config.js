import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC4sm1pg1Y-horldFuEFmp0scdi2_f4idE",
  authDomain: "projectkeeper-84035.firebaseapp.com",
  databaseURL: "https://projectkeeper-84035-default-rtdb.firebaseio.com",
  projectId: "projectkeeper-84035",
  storageBucket: "projectkeeper-84035.appspot.com",
  messagingSenderId: "544686509475",
  appId: "1:544686509475:web:dbd83067d4f88ed1f39e16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
