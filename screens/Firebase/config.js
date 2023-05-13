// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8q37tN8XF0k-OpraxGgIjBtG91F3_YgE",
  authDomain: "fir-auth-604dc.firebaseapp.com",
  projectId: "fir-auth-604dc",
  storageBucket: "fir-auth-604dc.appspot.com",
  messagingSenderId: "940592335901",
  appId: "1:940592335901:web:52205c65612ef6169b8af4"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app()
}

const auth = firebase.auth()

export {auth};