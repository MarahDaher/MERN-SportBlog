// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-64168.firebaseapp.com",
  projectId: "mern-blog-64168",
  storageBucket: "mern-blog-64168.appspot.com",
  messagingSenderId: "887440078319",
  appId: "1:887440078319:web:d1cd36558e76991354321a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
