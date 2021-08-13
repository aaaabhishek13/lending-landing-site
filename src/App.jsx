import React, { Component } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Reports from "./components/Reports";
import Login from "./components/Login";
import Signup from "./components/Signup.jsx";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Forms from "./components/Forms";

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {isAuth && <Route path="/dashboard" component={Dashboard} />}
          {isAuth && <Route path="/forms" component={Forms} />}
          {isAuth && <Route path="/reports" component={Reports} />}
        </Switch>
      </Router>
    </div>
  );
}
