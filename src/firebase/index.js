import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBbpuf6-9BscwuLANNuikYkBUmApwXZoDA",
    authDomain: "ecommerce-cocostore.firebaseapp.com",
    projectId: "ecommerce-cocostore",
    storageBucket: "ecommerce-cocostore.appspot.com",
    messagingSenderId: "406957660403",
    appId: "1:406957660403:web:eb0535c2753b5fd50b7f86"
})

export const getFirebase=()=> app();

export const getFirestore=()=> firebase.firestore(app);