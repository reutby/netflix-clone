/* eslint-disable no-undef */
import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import {seedDatabase} from "../seed";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "netflix-clone-69fb7.firebaseapp.com",
    projectId: "netflix-clone-69fb7",
    storageBucket: "netflix-clone-69fb7.appspot.com",
    messagingSenderId: "738154478211",
    appId: process.env.REACT_APP_FIREBASE_API_ID
};

const firebase= Firebase.initializeApp(firebaseConfig);

//seedDatabase(firebase);

export {firebase} ;