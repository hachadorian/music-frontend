import React from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { UserProvider } from "./utils/UserContext";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="h-screen flex justify-center items-center">
            <Login />
          </div>
        </Route>
        <UserProvider>
          <Home />
        </UserProvider>
      </Switch>
    </Router>
  );
};

export default App;
