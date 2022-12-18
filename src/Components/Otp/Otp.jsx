import {React, useState} from 'react'
import CloseIcon from "@mui/icons-material/Close";
import Styles from "./Otp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Nitesh/firebase";
import { adminSuccessful, userError, userSuccessful } from "../../Redux/Authentication/action";


const Otp = () => {
    const { error,email } = useSelector((a) => {
        return { error: a.AuthReducer.isError, token: a.AuthReducer.token, email:a.UserAuth.email };
      });
    const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in

            const user = userCredential.user;
            if (email === "admin@gmail.com") {
              dispatch(adminSuccessful(user));
              
              navigate("/admin/");
            } else {
              dispatch(userSuccessful(user));
              navigate("/");
            }
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ..
            dispatch(userError());
            navigate("/register")
          });
      };

  return (
    <div>
      <div className={Styles.OTP}>
      <div className={Styles.link1}>
        <Link to="/" className={Styles.link}>
          <CloseIcon />
        </Link>
      </div>
      <h1>Enter <br/>Password</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="Enter your Phone / Email">Enter your Password</label>
        <input
          type="password"
          value={password}
          onChange={(a) => setPassword(a.target.value)}
        />
        <br />
        <br />
        <button type="submit" >Continue</button>
        {error && <span >Wrong email & password!</span>}
      </form>
    </div>
    </div>
  )
}

export default Otp
