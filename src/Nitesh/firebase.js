
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyDA0NDxtoECgbgkJX93oiw1_efBOyoSXEA",
  authDomain: "sephora-a3e67.firebaseapp.com",
  projectId: "sephora-a3e67",
  storageBucket: "sephora-a3e67.appspot.com",
  messagingSenderId: "574398804117",
  appId: "1:574398804117:web:2b3fa4a7be95227ff7ab9c",
  measurementId: "G-P5CX0Z2Z3V"
};
// const firebaseConfig = {
//     apiKey: "AIzaSyDA0NDxtoECgbgkJX93oiw1_efBOyoSXEA",
//     authDomain: "sephora-a3e67.firebaseapp.com",
//     projectId: "sephora-a3e67",
//     storageBucket: "sephora-a3e67.appspot.com",
//     messagingSenderId: "574398804117",
//     appId: "1:574398804117:web:2b3fa4a7be95227ff7ab9c",
//     measurementId: "G-P5CX0Z2Z3V"
//   };
// Initialize Firebase
// console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage(app);