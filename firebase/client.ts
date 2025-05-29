import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmzXh-k3su7iO_FoSgTEishIopfSS6siU",
  authDomain: "intervu-65a66.firebaseapp.com",
  projectId: "intervu-65a66",
  storageBucket: "intervu-65a66.firebasestorage.app",
  messagingSenderId: "184947639529",
  appId: "1:184947639529:web:9f03d5aca2edfbff02dc78",
  measurementId: "G-6V4M0YWNZ9",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);
