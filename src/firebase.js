// Your web app's Firebase configuration
import firebase from "firebase/app"
import "firebase/firestore"


var firebaseConfig = {
    apiKey: "AIzaSyAnpbVl57dUH8I62_z7yJ0MoyFgOvHoQ18",
    authDomain: "crud-react-e4318.firebaseapp.com",
    databaseURL: "https://crud-react-e4318.firebaseio.com",
    projectId: "crud-react-e4318",
    storageBucket: "crud-react-e4318.appspot.com",
    messagingSenderId: "903614176112",
    appId: "1:903614176112:web:a7c91fc3ca4b5e008a4db5",
    measurementId: "G-TLVJ59H1PN"
  };
  // Initialize Firebase
const  fb = firebase.initializeApp(firebaseConfig);


export const db =   fb.firestore()