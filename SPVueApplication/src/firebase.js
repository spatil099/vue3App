// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, getDoc } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIw51pUR8OJWaLoOZNmNkGUmw-zzP4Wm4",
  authDomain: "spappstore-c67ec.firebaseapp.com",
  projectId: "spappstore-c67ec",
  storageBucket: "spappstore-c67ec.appspot.com",
  messagingSenderId: "1005758352247",
  appId: "1:1005758352247:web:825c216509c430865aaf72",
  measurementId: "G-4F6WP4GR0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db,collection,getDocs,getStorage, ref, uploadBytesResumable, getDownloadURL, addDoc,  doc, getDoc }