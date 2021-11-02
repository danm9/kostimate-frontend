import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { Home } from "./Components/Home/Home";
// import { Profile } from "./Components/Profile/Profile";
import { Dashboard } from "./Components/Dashboard/Dashboard";
// import { ProjectSetup } from "./Components/ProjectSetup/ProjectSetup";
import { Projects } from "./Components/Projects/Projects";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/projects" component={Projects} />
        {/* <Route path="/home" component={ProjectSetup} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
