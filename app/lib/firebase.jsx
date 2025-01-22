// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// import { getStorage } from 'firebase/storage'
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzo9uVKyPg_sJQPD-g2OCt7zpG6X2Fnoo",
  authDomain: "blog-website-sys.firebaseapp.com",
  projectId: "blog-website-sys",
  storageBucket: "blog-website-sys.firebasestorage.app",
  messagingSenderId: "180590803066",
  appId: "1:180590803066:web:5cb4d26809f809e8f123c3",
  measurementId: "G-8355FZ3GL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();
// export const storage = getStorage();