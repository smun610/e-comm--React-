
import  firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp7ErqUQnDZEci39WiW9NnlkEAzi9wFtc",
  authDomain: "anddigital-aa556.firebaseapp.com",
  projectId: "anddigital-aa556",
  storageBucket: "anddigital-aa556.appspot.com",
  messagingSenderId: "61389949367",
  appId: "1:61389949367:web:46ec6f704e027562e58032",
  measurementId: "G-TBZP08KXP3"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(); 

const db = firebase.firestore(); 

const storage = firebase.storage(); 

export {auth, db,storage}