// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmsqmjgh8zgn35vefUIqv8CpJS0UlXBEI",
  authDomain: "netflix-clone-gpt.firebaseapp.com",
  projectId: "netflix-clone-gpt",
  storageBucket: "netflix-clone-gpt.appspot.com",
  messagingSenderId: "362962125847",
  appId: "1:362962125847:web:2b6f82e4b31119263e4852",
  measurementId: "G-12FM6TRP9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

