import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyAWNESa2Q_yIKThAuFW2dzUIHvfHuJvQgA",
  authDomain: "project67-51a57.firebaseapp.com",
  databaseURL: "https://project67-51a57-default-rtdb.firebaseio.com",
  projectId: "project67-51a57",
  storageBucket: "project67-51a57.appspot.com",
  messagingSenderId: "330383620169",
  appId: "1:330383620169:web:8d96984b187dd677982798",
  measurementId: "G-EP6B6RCVYD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
