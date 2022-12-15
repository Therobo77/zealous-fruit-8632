import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email,setEmail]=useState("")
  const [password, setPassword] = useState("")
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      dispatch({ type: "LOGIN", payload: user });
      navigate("/");
      // console.log(user)
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // ..
      setError(true)
    });
  
  }
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email" onChange={(a)=>setEmail(a.target.value)} />
        <input type="password" placerholder="password"  onChange={(a)=>setPassword(a.target.value)}/>
        <button type="submit">Login</button>
        {error &&  <span>Wrong email & password!</span>}
      </form>
    </div>
  );
};

export default Login;
