// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGW12HgQMGZ98OJ5qb81Sz44sEITy2l_E",
  authDomain: "netflix-clone-fe31c.firebaseapp.com",
  projectId: "netflix-clone-fe31c",
  storageBucket: "netflix-clone-fe31c.appspot.com",
  messagingSenderId: "602924393240",
  appId: "1:602924393240:web:43a1de1b73254068b3b46d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
