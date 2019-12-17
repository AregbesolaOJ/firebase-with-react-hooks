import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBX1wvLep0zWlA48ba5YROzf4z35pXk44s",
    authDomain: "firestore-app-ec2a3.firebaseapp.com",
    databaseURL: "https://firestore-app-ec2a3.firebaseio.com",
    projectId: "firestore-app-ec2a3",
    storageBucket: "firestore-app-ec2a3.appspot.com",
    messagingSenderId: "893327221720",
    appId: "1:893327221720:web:ba01d1ebec96b3ef5788ad",
    measurementId: "G-W3BNFQNSRC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
