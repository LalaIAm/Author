import { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setUser, setError } from "../store/Auth/Auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config/firebase";

const LoginForm = ({ className = "" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState('')


  const handleSignIn = async (e) => {
    e.preventDefault();
    return createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        updateProfile(credential.user, { displayName: name });
        dispatch(setUser(credential.user));
        navigate('/dashboard')
      })
      .catch((error) => {
       
        setError(error.message)
      });
  };

  return (
    <div className={`content1 ${className}`}>
      <div className="content-child" />
      <form
        data-test="register-form"
        className="welcome"
        onSubmit={handleSignIn}
      >
        <div className="hello-stranger">Hello Stranger!</div>
        <div className="email-input1">
          <TextInput
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            required
            data-test="name-input"
          />
          <TextInput
            type="email"
            placeholder="You@Email.com"
            onChange={(e) => setEmail(e.target.value)}
            required
            data-test="email-input"
          />
          <TextInput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            data-test="password-input"
          />
        </div>
        <div className="error">
          {error && error.length > 1 && <p>{error}</p>}
        </div>
        <Button type="submit">Get Started</Button>
        {error && (
          <p data-test="error-message" className="error-message">
            Oh, no! {error}
          </p>
        )}
      </form>
      <div className="account">
        <div className="already-have-an">Already have an account?</div>
        <div className="login-link">
          <Link className="log-in2" to="/login">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
