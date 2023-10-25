import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyC_wX92AyvASOBiaJiHiLjnhFxoAIc03aQ",
  authDomain: "chat-translate-app-3de5e.firebaseapp.com",
  projectId: "chat-translate-app-3de5e",
  storageBucket: "chat-translate-app-3de5e.appspot.com",
  messagingSenderId: "564724095715",
  appId: "1:564724095715:web:b801635142e12788d783d6"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };