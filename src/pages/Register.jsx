import React from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Register() {
  const dispatch = useDispatch();

  const registerWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(login(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  };
  return (
    <div className="min-h-screen grid place-items-center">
      <button
        onClick={registerWithGoogle}
        className="btn btn-primary h-20 w-40"
      >
        <h1 className="font-serif font-semibold ">Google</h1>
      </button>
    </div>
  );
}

export default Register;
