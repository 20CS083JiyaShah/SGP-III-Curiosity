import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LoginTeacher from "./pages/LoginTeacher";
import FirebaseConfig from "./FirebaseConfig";
import React,{useState,useEffect} from "react";

import { initializeApp } from 'firebase/app'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const  App = ()  => {

  const [user,setUser] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }
  
  const clearErrors=()=>{
    setEmailError('');
    setPassword('');
  }

  const handleLogin = () =>{
    FirebaseConfig
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err) => {
        switch (err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
        }
      });
  };

  const handleSignUp=()=>{
    FirebaseConfig
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err) => {
        switch (err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;  
        }
      });
  };

  const handleLogout=()=>{
    FirebaseConfig.auth().signOut();
  };

  const authListner=()=>{
    FirebaseConfig.auth().onAuthStateChanged((user)=> {
      if(user){
        setUser(user);
      }
      else {
        setUser(" ");
      }
    });
  };

  useEffect(() => {
    authListner();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login 
              email ={email}
              setEmail = {setEmail}
              password = {password}
              setPassword = {setPassword}
              handleLogin = {handleLogin}
              handleSignUp = {handleSignUp}
              hasAccount = {hasAccount}
              setHasAccount = {setHasAccount}
              emailError = {emailError}
              passwordError = {passwordError}
            />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/loginTeacher">
            <LoginTeacher />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
