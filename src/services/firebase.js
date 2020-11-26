import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAXDYqyYi-gk9yNy6aGJSaeV-2L-Miozjo",
    authDomain: "mercadolivre-clonern-6681e.firebaseapp.com",
    databaseURL: "https://mercadolivre-clonern-6681e.firebaseio.com",
    projectId: "mercadolivre-clonern-6681e",
    storageBucket: "mercadolivre-clonern-6681e.appspot.com",
    messagingSenderId: "359665315236",
    appId: "1:359665315236:web:876b6bdeb15dc677612531",
    measurementId: "G-D2CMGCB40H"
};

firebase.initializeApp(firebaseConfig);