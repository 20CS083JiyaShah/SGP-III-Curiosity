import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "../components/Login.component.css";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import LoginTeacher from "./LoginTeacher";

function Login() {
  const [showteacher, setShowTeacher] = useState(false);
  const [showStudent, setShowStudent] = useState(true);
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
  const handleStudentClick = () => {
    setShowStudent(true);
    setShowTeacher(false);

    document.getElementById("hello");
  };
  const handleTeacherClick = () => {
    setShowStudent(false);
    setShowTeacher(true);
  };

  return (
    <div id="hello">
      {showStudent && (
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <h2>Student Login</h2>
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
            <Typography>
              {" "}
              Do you have an account ?<Link href="/signup">Sign Up</Link>
            </Typography>
            <RadioGroup defaultValue="student">
              <FormControlLabel
                value="student"
                control={
                  <Radio
                    color="primary"
                    onChange={() => handleStudentClick()}
                  />
                }
                label="Student"
              />
              <FormControlLabel
                value="teacher"
                control={
                  <Radio
                    color="primary"
                    onChange={() => handleTeacherClick()}
                  />
                }
                label="Teacher"
              />
            </RadioGroup>
          </Paper>
        </Grid>
      )}
      {showteacher && <LoginTeacher showteacher={showteacher} />}
    </div>
  );
}

export default Login;
