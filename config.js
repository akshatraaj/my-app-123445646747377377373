import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDa6Tk8z_xrrfYPJv-QmgPEKKN-2tDu-QQ",
  authDomain: "reminder-app-play-store.firebaseapp.com",
  databaseURL: "https://reminder-app-play-store.firebaseio.com",
  projectId: "reminder-app-play-store",
  storageBucket: "reminder-app-play-store.appspot.com",
  messagingSenderId: "174135806270",
  appId: "1:174135806270:web:fe96a58ba30f4015a0446f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
