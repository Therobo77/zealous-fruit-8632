import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, db } from "../../Nitesh/firebase";
import Styles from "./Register.module.css";
export const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...form,
        timeStamp: serverTimestamp(),
        displayName: form.name,
        username: "users",
      });
      alert("Register successfull");
      navigate("/");
    } catch (err) {
      if (err.message === "Firebase: Error (auth/email-already-in-use).")
        alert("Email already exist please enter right email");
      if (
        err.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      )
        alert("Password is to short Please Enter at least 6 Characters");
    }

    // navigate("/");
  };

  return (
    <>
      <div className={Styles.forapper1}>
        <div className={Styles.adorm1}>
          <p></p>
          <p className={Styles.trncs2}>
            CREATE <br /> ACCOUNT
          </p>
          <br />
          <form onSubmit={handleSubmit}>
            <lable className={Styles.trncs1}>Name</lable>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter Name"
              onInput={handleChange}
            />
            <br />
            <lable className={Styles.trncs1}>Email</lable>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter Email"
              onInput={handleChange}
            />
            <br />
            <lable className={Styles.trncs1}>Password</lable>
            <input
              required
              type="password"
              name="password"
              placeholder="Enter Password"
              onInput={handleChange}
            />
            <br />
            <lable className={Styles.trncs1}>Phone Number</lable>
            <input
              required
              type="number"
              name="phone"
              placeholder="Phone Number"
              onInput={handleChange}
            />
            <br />
            <br></br>
            <button
              type="Submit"
              style={{
                backgroundColor: "rgb(255,51,153)",
                border: "none",
                width: "100%",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Submit
            </button>
          </form>
          <p></p>

          <p
            style={{
              color: "rgb(255,51,153)",
            }}
          >
            <Link to={`/login`}>Back to Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};
