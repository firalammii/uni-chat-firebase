// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7fepqUwZqLFHRTBrdCCoENW4VVM9klYc",
    authDomain: "uni-chat-4fe98.firebaseapp.com",
    projectId: "uni-chat-4fe98",
    storageBucket: "uni-chat-4fe98.appspot.com",
    messagingSenderId: "466030168965",
    appId: "1:466030168965:web:ea0f64150abed8f6a452ec"
};

// Initialize Firebases
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



// export const auth = firebase.initializeApp({
//     apiKey: "AIzaSyB7fepqUwZqLFHRTBrdCCoENW4VVM9klYc",
//     authDomain: "uni-chat-4fe98.firebaseapp.com",
//     projectId: "uni-chat-4fe98",
//     storageBucket: "uni-chat-4fe98.appspot.com",
//     messagingSenderId: "466030168965",
//     appId: "1:466030168965:web:ea0f64150abed8f6a452ec"
// }).auth();