// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCixRJOGakybkSh5ETwmfKGmS0USHf1jCk",
  authDomain: "comment-box-generator.firebaseapp.com",
  projectId: "comment-box-generator",
  storageBucket: "comment-box-generator.appspot.com",
  messagingSenderId: "647120612294",
  appId: "1:647120612294:web:8450ee27526bd5213e60c7",
  measurementId: "G-PG7FPW2GGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
