import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHKmApq66r0Tjus7ZIl_u5MrgD6PRJ0pg",
  authDomain: "register-app-6eca8.firebaseapp.com",
  projectId: "register-app-6eca8",
  storageBucket: "register-app-6eca8.appspot.com",
  messagingSenderId: "9021776565",
  appId: "1:9021776565:web:6dce9c205385fe848cd4fc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
