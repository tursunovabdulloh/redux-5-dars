import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvRGGOb6MDqSR7SsE9aVOTgyvS9QKBinI",
  authDomain: "login-3ce02.firebaseapp.com",
  projectId: "login-3ce02",
  storageBucket: "login-3ce02.appspot.com",
  messagingSenderId: "1021213336354",
  appId: "1:1021213336354:web:20309e46e38945ff987b7b",
  measurementId: "G-W029TWCPRJ",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
