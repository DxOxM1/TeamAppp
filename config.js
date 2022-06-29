import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC6lLsai8hTdPgVyLwSuMXYp3e5G8CJX84",
  authDomain: "projectredo67.firebaseapp.com",
  projectId: "projectredo67",
  storageBucket: "projectredo67.appspot.com",
  messagingSenderId: "505439848424",
  appId: "1:505439848424:web:239a5c22c827d96adc865d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();