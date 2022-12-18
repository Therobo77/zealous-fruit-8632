import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CloseIcon from "@mui/icons-material/Close";
import Styles from "./login.module.css";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../Nitesh/firebase";
import { adminSuccessful, userError, userSuccessful } from "../Redux/Authentication/action";
import { AdminLoginSuccessful } from "../Redux/Authentication/actionType";
import { setUserEmail } from "../Redux/UserAuth/action";

export default function Login() {
  // const { error } = useSelector((a) => {
  //   return { error: a.AuthReducer.isError, token: a.AuthReducer.token };
  // });
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       if (email === "admin@gmail.com") {
  //         dispatch(AdminLoginSuccessful(user));
  //         navigate("/admin");
  //       } else {
  //         dispatch(userSuccessful(user));
  //         navigate("/");
  //       }
  //     })
  //     .catch((error) => {
  //       // const errorCode = error.code;
  //       // const errorMessage = error.message;
  //       // ..
  //       dispatch(userError());
  //     });
  // };
  const handlegoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        // const name = res.user.displayName;
        // const email = res.user.email;
        // const profilepic = res.user.photoURL;
        const uid = res.user.email;
        // console.log(uid);
        if (uid === "niteshsindhu1435@gmail.com") {
          dispatch(adminSuccessful("jsndbkjfnjkdsnfsd5f4ds54f5sddsjsfkj"));
          navigate("/");
        } else {
          dispatch(userSuccessful("njkshfkjsdf5sd4f4ds5f415s4d5f4sd656"));
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUserAuth=()=>{
    dispatch(setUserEmail(email))
    navigate("/otpPage")
  }
  return (
    <div className={Styles.Login}>
      <div className={Styles.link1}>
        <Link to="/" className={Styles.link}>
          <CloseIcon />
        </Link>
      </div>
      <h1>LOGIN</h1>
      <form onSubmit={handleUserAuth}>
        <label htmlFor="Enter your Phone / Email">
          Enter your Phone / Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(a) => setEmail(a.target.value)}
        />
        <br />
        {/* <label htmlFor="Enter your Phone / Email">Enter your Password</label>
        <input
          type="password"
          value={password}
          onChange={(a) => setPassword(a.target.value)}
        />
        <br /> */}
        <button type="submit">Continue</button>
        {/* {error && <span>Wrong email & password!</span>} */}
      </form>
      <p className={Styles.or}>
        <hr /> Or <hr />
      </p>
      <div className={Styles.google} onClick={handlegoogle}>
        <img src="https://static.nnnow.com/google-social-login.svg" alt="" />
        <p>Continue with Google</p>
      </div>
      <br />
      <div className={Styles.facebook}>
        <img src="https://static.nnnow.com/facebook.png" alt="" />
        <p>Continue with Facebook</p>
      </div>
      <div className={Styles.privacy}>
        <p>
          By proceeding, you agree to
          <a href="https://sephora.nnnow.com/privacypolicy"> Privacy Policy</a>,
          <a href="https://sephora.nnnow.com/termsconditions">
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
  );
}
