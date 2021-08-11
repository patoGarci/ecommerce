import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAp-0zCqL3rPj--XT8YuF50BcxZeZIxUBM",
    authDomain: "mi-tienda-ag.firebaseapp.com",
    projectId: "mi-tienda-ag",
    storageBucket: "mi-tienda-ag.appspot.com",
    messagingSenderId: "491689771177",
    appId: "1:491689771177:web:cdecf496ed28ffb0a529b8"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}