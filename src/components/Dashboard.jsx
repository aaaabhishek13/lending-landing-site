import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { authActions } from "../store/auth";
import BarChart from "./BarChart";
import "./dashboard.css";
import reportIcon from "../assets/report.png";
import resultIcon from "../assets/result.png";

export default function Dashboard() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const [error, setError] = useState("");
  const { logout } = true;
  const history = useHistory();

  function handleLogout() {
    setError("");

    try {
      //await logout();
      dispatch(authActions.logout());
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  function handleForm() {
    setError("");
    history.push("/forms");

    try {
      //await logout();
      history.push("/forms");
    } catch {
      setError("Failed to load Page");
    }
  }
  function handleReport() {
    // setError("");
    // history.push("/reports");

    try {
      //await logout();
      history.push("/reports");
    } catch {
      setError("Failed to load Page");
    }
  }

  return (
    <div className="page">
      <div>
        <div className=" dashboard  ">
          <Col xs={12} md={8}>
            <h1 className="dashboard--title">Hi Welcome,</h1>
            <br />
            <h1 className="dashboard--desc">
              Verify The Title Of Your Property
            </h1>
            <Button
              className="btn btn-custom btn-lg dashboard--btn"
              onClick={handleForm}
            >
              Get Started
            </Button>
          </Col>
          <Col xs={6} md={4}>
            <Card className="chart">
              <BarChart />
            </Card>
          </Col>
        </div>
      </div>
      <div className="dashboard--controls ">
        <Col xs={12} md={8}>
          <Card className="tsr">
            <Card.Body className="tsr--card--body">
              <Row>
                <Image src={reportIcon} className="report--icon" />
              </Row>
              <Row>
                <h3 className="card--title">Generate Title Search Report</h3>
                <h3 className="card--desc">
                  Get your title search report in just a click
                </h3>
              </Row>
              <Row>
                <Button
                  className="btn btn-custom btn-lg page-scroll tsr--btn"
                  onClick={handleForm}
                >
                  Generate Report
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card className="status">
            <Card.Body className="status--card--body">
              <Row>
                <Image src={resultIcon} className="report--check--icon" />
              </Row>
              <h3 className="card--title">Past Report</h3>
              <h3 className="card--desc">Check your past reports here</h3>
              <Button
                className="btn btn-custom btn-lg page-scroll status--btn"
                onClick={handleReport}
              >
                Check
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
}
