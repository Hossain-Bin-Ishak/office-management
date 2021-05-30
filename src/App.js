import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import Login from "./components/LogInForm/Login";
import PrivateRoute from "./components/LogInForm/PrivateRoute";
import SignUp from "./components/LogInForm/SignUp"
import Navbar from "./components/Navbar/Navbar";
export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
