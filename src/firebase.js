// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy2ANSLd-fOI1ZuPG_Yu-Q3fvwnDC8XqE",
  authDomain: "interior-store-a6c17.firebaseapp.com",
  projectId: "interior-store-a6c17",
  storageBucket: "interior-store-a6c17.appspot.com",
  messagingSenderId: "305764716498",
  appId: "1:305764716498:web:f6503da1e077339f9ac20b",
  measurementId: "G-FJCWTKHWW1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
