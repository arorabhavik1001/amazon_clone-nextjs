import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCaqNPJUQFRWYqQDPHnT3t6qPcQMf0u9X4",
  authDomain: "clone-c43a8.firebaseapp.com",
  projectId: "clone-c43a8",
  storageBucket: "clone-c43a8.appspot.com",
  messagingSenderId: "885515983682",
  appId: "1:885515983682:web:26be644bbd44fe8682c6db",
  measurementId: "G-L0M2WF9CT2",
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};