import { useState } from "react";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Styles from "./Register.module.css";
export const Register = () => {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Password: "",
    Num: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form.Name));

    var userList = JSON.parse(localStorage.getItem("allusers")) || [];
    for (let i = 0; i < userList.length; i++) {
      if (form.Email == userList[i].Email && form.Num == userList[i].Num) {
        alert(`Email and mobile number already exist`);
        return;
      } else if (form.Email == userList[i].Email) {
        alert(`Email already exist`);
        return;
      } else if (form.Num == userList[i].Num) {
        alert(`Mobile number already exist`);
        return;
      }
    }
    userList.push(form);
    localStorage.setItem("allusers", JSON.stringify(userList));
    alert("Register successfull");
    navigate("/");
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
              name="Name"
              placeholder="Enter Name"
              onInput={handleChange}
            />
            <br />
            <lable className={Styles.trncs1}>Email</lable>
            <input
              required
              type="email"
              name="Email"
              placeholder="Enter Email"
              onInput={handleChange}
            />
            <br />
            <lable className={Styles.trncs1}>Password</lable>
            <input
              required
              type="password"
              name="Password"
              placeholder="Enter Password"
              onInput={handleChange}
            />
            <br />
            <lable className={Styles.trncs1}>Phone Number</lable>
            <input
              required
              type="number"
              name="Num"
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
              onSubmit={navigate("/")}
            >Submit</button>
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
