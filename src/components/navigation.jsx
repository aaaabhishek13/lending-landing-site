import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authActions } from "../store/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Navigation() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      style={{ position: "sticky" }}
    >
      <div className="">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-target="#bs-example-navbar-collapse-1"
            data-toggle="collapse"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{ padding: 0 }}
          >
            <img
              alt="Brand"
              src="img/logo2.png"
              style={{
                marginRight: 10,
                height: "inherit",
                display: "inline",
              }}
            />
            <span className="hidden-xs" style={{ fontSize: 20 }}>
              Lending <span style={{ fontWeight: 700 }}>Katalyst</span>
            </span>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          {isAuth && (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/#ourstory" className="page-scroll">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/#whatwedo" className="page-scroll">
                  What We Do
                </a>
              </li>
              <li>
                <a href="/#ourtech" className="page-scroll">
                  Our Technology
                </a>
              </li>
              <li>
                <a href="/#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="/#contact" className="page-scroll">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/login" onClick={logoutHandler}>
                  Logout
                </Link>
              </li>
            </ul>
          )}
          {!isAuth && (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/#ourstory" className="page-scroll">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/#whatwedo" className="page-scroll">
                  What We Do
                </a>
              </li>
              <li>
                <a href="/#ourtech" className="page-scroll">
                  Our Technology
                </a>
              </li>
              <li>
                <a href="/#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="/#contact" className="page-scroll">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
