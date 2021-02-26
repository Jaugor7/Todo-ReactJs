// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_68hbO-aIMgGyP4KCrPAou8AK-TdBCGU",
    authDomain: "todoreactjs-c8ea0.firebaseapp.com",
    projectId: "todoreactjs-c8ea0",
    storageBucket: "todoreactjs-c8ea0.appspot.com",
    messagingSenderId: "673223352928",
    appId: "1:673223352928:web:766e395fc229126f029905",
    measurementId: "G-Y0TJ8YVC1R"
});

const db = firebaseApp.firestore();

export default db;

