import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { Form, Button, Card, Alert } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import "./Signup.css";

const isEmpty = (value) => value.trim() === "";

export default function Signup() {
  const dispatch = useDispatch();
  //const signup = true;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  //refs
  const userNameRef = useRef();
  const organizationRef = useRef();
  const designationRef = useRef();
  const empidRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      //await signup(emailRef.current.value, passwordRef.current.value);
      dispatch(authActions.login());
      history.push("/dashboard");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="container ">
        <Card className="cardd2">
          <Card.Body className="signup--card--body">
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group id="userame">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  ref={userNameRef}
                  placeholder="Please enter your full name"
                  required
                />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  placeholder="Please enter your email address"
                  required
                />
              </Form.Group>
              <Form.Group id="organization">
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  type="text"
                  ref={organizationRef}
                  placeholder="Please enter your organization name"
                  required
                />
              </Form.Group>
              <Form.Group id="designation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  ref={designationRef}
                  placeholder="Designation"
                  required
                />
              </Form.Group>
              <Form.Group id="empid">
                <Form.Label>Employee ID</Form.Label>
                <Form.Control
                  type="text"
                  ref={empidRef}
                  placeholder="Please enter your Employee ID"
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  isInvalid={error}
                  type="password"
                  placeholder="Please enter your password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Please confirm the given password"
                  required
                />
              </Form.Group>
              <Button
                disabled={loading}
                className="btn btn-custom btn-lg page-scroll signup--btn"
                type="submit"
              >
                Sign Up
                <Link to="/dashboard" />
              </Button>
            </Form>
            <div className="w-100 text-center mt-2 link--url">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
