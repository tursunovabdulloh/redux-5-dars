import React, { useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
function SignUp() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <section>
      <div className={style.container}>
        <div className={style.box}>
          <h1 className="font-mono text-5xl">Sign Up</h1>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.passwordDiv}>
              <p className={style.password}>Email</p>
              <input
                className={style.passwordInp}
                type="email"
                value={data.email}
                placeholder="username@gmail.com"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className={style.passwordDiv}>
              <p className={style.password}>Password</p>
              <input
                className={style.passwordInp}
                type="password"
                value={data.password}
                placeholder="Password"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
            <button className={style.submitBtn} type="submit">
              Submit
            </button>
          </form>
          <Link to={"/"} className={style.a}>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
export default SignUp;
