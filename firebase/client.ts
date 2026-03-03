
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsjyslmbZJpFGp4OQULf3E1lCclXneIJY",
  authDomain: "prepwise-fe2fc.firebaseapp.com",
  projectId: "prepwise-fe2fc",
  storageBucket: "prepwise-fe2fc.firebasestorage.app",
  messagingSenderId: "122966098188",
  appId: "1:122966098188:web:b73c1bf3472a81dc598929",
  measurementId: "G-SY76ELY104"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);