import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { setDoc, getDoc ,doc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC5ZF6rjNrlFZBKs04O0N5xE8G6Kgolwqk",
  authDomain: "linkedin-7654b.firebaseapp.com",
  projectId: "linkedin-7654b",
  storageBucket: "linkedin-7654b.appspot.com",
  messagingSenderId: "797928868613",
  appId: "1:797928868613:web:a2c3071a0d58717693856c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {
  app, db, setDoc, getDoc ,doc
}