import React from "react";
import Grid from "@mui/material/Grid";
import "../components/Login.component.css";
import { Paper, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { validEmail } from "../components/Regex";



function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (password !== password) {
  seterror("Passwords do not match");
  } else {
  setEmail("");
  setPassword("");
  const res = SignUp(email, password);
  if (res.error) seterror(res.error)
  }
  };  

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
  const [message, setMessage] = useState("");
  
  function isValidEmail(email) {
    return validEmail.test(email);
  }
  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      seterror("Email is invalid");
    } else {
      seterror(null);
    }

    setMessage(event.target.value);
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Sign Up</h2>
          </Grid>
          <TextField
            label=" Enter Username"
            placeholder="Enter username"
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <TextField
            label="Enter Password"
            placeholder="Enter password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <TextField
            label="Enter E-mail"
            placeholder="Enter E-mail"
            type="email"
            value={message}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            sx={{ mb: 5 }}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign Up
          </Button>
        </Paper>
      </Grid>{" "}
      {error && <Alert severity="error">Enter Charusat E-mail address</Alert>}
    </div>
  );
}

export default SignUp;
