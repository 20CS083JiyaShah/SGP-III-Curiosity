import * as firebase from "firebase/app";
import "firebase/auth";
import withFirebaseAuth from 'react-with-firebase-auth'
import firebaseConfig from './firebaseConfig';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
 } from "firebase/auth";
 import { getFirestore, addDoc, collection } from "firebase/firestore";
 const db = getFirestore();
 const auth = getAuth();


const firebaseConfig = {
    apiKey: "AIzaSyBe-ar7cubVO15RfSIuOOG9Nl2blnLeOA8",
    authDomain: "curiosity-d7220.firebaseapp.com",
    projectId: "curiosity-d7220",
    storageBucket: "curiosity-d7220.appspot.com",
    messagingSenderId: "702597929577",
    appId: "1:702597929577:web:0f8894467fc496aecd20f8"
  };
  const app = initializeApp(firebaseConfig);

  const signUp = async (email, password) => {
    try {
    const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
    );
    const user = userCredential.user;
    await addDoc(collection(db, "users"), {
    uid: user.uid,
    email: user.email,
    });
    return true
    } catch (error) {
    return {error: error.message}
    }
   };

   const signIn = async (email, password) => {
    try {
    const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
    );
    const user = userCredential.user;
    return true
    } catch (error) {
    return {error: error.message}
    }
   };

   const signOut = async() => {
    try {
    await signOut(auth)
    return true
    } catch (error) {
    return false
    }
   };

  export default app; 