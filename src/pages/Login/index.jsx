import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

import "./style.css";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user);
        navigate("/about");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <section>
      <div className="container">
        <div className="box">
          <h1 className="font-mono text-5xl text-white mb-10">Login</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="passwordDiv">
              <p className="password">Email</p>
              <input
                className="passwordInp"
                type="email"
                value={data.email}
                placeholder="username@gmail.com"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="passwordDiv">
              <p className="password">Password</p>
              <input
                className="passwordInp"
                type="password"
                value={data.password}
                placeholder="Password"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
            <button className="submitBtn" type="submit">
              Submit
            </button>
          </form>
          <Link to="/signup" className="aBtn">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}
