import React, { useState } from "react";
import "./Login";
import Grid from "@mui/material/Grid";
import "../components/Login.component.css";
import {
  Paper,
  TextField,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import Login from "./Login";
function LoginTeacher() {
  const [showStudent, setShowStudent] = useState(false);
  const [showTeacher, setShowTeacher] = useState(true);
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
  const handleStudent = () => {
    setShowTeacher(false);
    setShowStudent(true);
  };
  const handleTeacher = () => {
    setShowTeacher(true);
    setShowStudent(false);
  };
  return (
    <div id="hello">
      {showTeacher && (
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <h2>Teacher Login</h2>
            </Grid>
            <TextField
              label="Username"
              placeholder="Enter username"
              fullWidth
              required
              sx={{ mb: 1 }}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Login
            </Button>
            <RadioGroup defaultValue="teacher">
              <FormControlLabel
                value="student"
                control={
                  <Radio color="primary" onChange={() => handleStudent()} />
                }
                label="Student"
              />
              <FormControlLabel
                value="teacher"
                control={
                  <Radio color="primary" onChange={() => handleTeacher()} />
                }
                label="Teacher"
              />
            </RadioGroup>
          </Paper>
        </Grid>
      )}
      {showStudent && <Login />}
    </div>
  );
}

export default LoginTeacher;
