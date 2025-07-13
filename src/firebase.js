// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-n3ZUqkE5uH8VHy_WqelCvnwNn3Wq7-c",
  authDomain: "personal-site-d7a7d.firebaseapp.com",
  projectId: "personal-site-d7a7d",
  storageBucket: "personal-site-d7a7d.appspot.com",
  messagingSenderId: "374161431638",
  appId: "1:374161431638:web:7a4080e3f772fa27c72ff7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
