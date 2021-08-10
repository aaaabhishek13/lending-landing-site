import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { Form, Button, Card, Alert, Image, Row, Col } from "react-bootstrap";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import loginimg from "../assets/undraw_Lighthouse_frb8.svg";

export default function Login() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  //const login = true;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      dispatch(authActions.login());
      setLoading(true);
      // await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="lgn">
      <div className="container d-flex ">
        <div className="">
          <Card className="cardd ">
            <Card.Body className="login--card--body">
              <Image src={loginimg} fluid className="login--img" />
              <h2 className="text-center mb-4 log--in">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    placeholder="Please enter your email address"
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Button
                  disabled={loading}
                  className="btn btn-custom login--btn"
                  type="submit"
                >
                  Log In
                  <Link to="/dashboard" />
                </Button>
              </Form>
              <div className="w-100 text-center mt-3 link--url">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <div className="w-100 text-center mt-2 link--url">
                Need an account? <Link to="/signup">Sign Up</Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
