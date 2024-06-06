import React, { useState } from "react";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    let valid = true;
    let errors = {};

    // Email validation
    if (!data.email) {
      valid = false;
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      valid = false;
      errors.email = "Email is invalid.";
    }

    // Password validation
    if (!data.password) {
      valid = false;
      errors.password = "Password is required.";
    } else if (data.password.length < 6) {
      valid = false;
      errors.password = "Password must be at least 6 characters.";
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/about");
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
          <h1 className="font-mono text-5xl text-white mb-10">Sign Up</h1>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.passwordDiv}>
              <p className={style.password}>Email</p>
              <input
                className={`${style.passwordInp} ${
                  errors.email ? style.errorInput : ""
                }`}
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
                className={`${style.passwordInp} ${
                  errors.password ? style.errorInput : ""
                }`}
                type="password"
                value={data.password}
                placeholder="Password"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
            <button on className={style.submitBtn} type="submit">
              Submit
            </button>
          </form>
          <Link to={"/login"} className={style.a}>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
