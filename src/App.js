import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LoginTeacher from "./pages/LoginTeacher";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
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
