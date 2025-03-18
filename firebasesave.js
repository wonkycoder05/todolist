// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.APIKEY,
  authDomain: import.meta.env.AUTHDOM,
  projectId: import.meta.env.PRJCTID,
  storageBucket: import.meta.env.STRGBCKT,
  messagingSenderId:import.meta.env.MSGSNDRID,
  appId: import.meta.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)