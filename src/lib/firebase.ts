// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv-Xyn7Rpx_MH5OL0V9hz0npaQ0WNx-rA",
  authDomain: "vynora-19890.firebaseapp.com",
  projectId: "vynora-19890",
  storageBucket: "vynora-19890.appspot.com",
  messagingSenderId: "101906739000",
  appId: "1:101906739000:web:baa72fbead35e17e6b9bcd",
  measurementId: "G-WDBNMLKW7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, db, storage, auth, analytics }; 