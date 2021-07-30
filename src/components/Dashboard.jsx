import React, { useState } from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import BarChart from "./BarChart";
import "./dashboard.css";
import reportIcon from "../assets/report.png";
import resultIcon from "../assets/result.png";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { logout } = true;
  const history = useHistory();

  function handleLogout() {
    setError("");

    try {
      //await logout();
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

  return (
    <>
      <div className=" dashboard  ">
        <div>
          <Col xs={12} md={8}>
            <h1 className="dashboard--title">Hi, Welcome,</h1>
            <br />
            <h1>
              Simplify the hassle of collateral Title Search Report by providing
              an instant-on the go decision with zero physical intervention in
              the journey of secured lending from financial institutions.
            </h1>
            <Button
              className="btn btn-custom btn-lg dashboard--btn"
              onClick={handleForm}
            >
              Get Started
            </Button>
          </Col>
          <Col xs={6} md={4}>
            <BarChart />
          </Col>
        </div>
      </div>
      <div>
        <Col xs={6} md={4}>
          <Card className="tsr">
            <Card.Body className="tsr--card--body">
              <Row>
                <Image src={reportIcon} className="report--icon" />
              </Row>
              <Row>
                <h3 className="card--title">Generate Title Search Report</h3>
                <h3 className="card--desc">
                  Get your title search report done in just one step:
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
        <Col xs={6} md={3}>
          <Card className="status">
            <Card.Body className="status--card--body">
              <Row>
                <Image src={resultIcon} className="report--icon" />
              </Row>
              <h3 className="card--title">Verification Status</h3>
              <h3 className="card--desc">
                Check your verification status in just one click
              </h3>
              <Button className="btn btn-custom btn-lg page-scroll status--btn">
                Check
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card className="logout">
            <Card.Body className="logout--card--body">
              <h3 className=" logout--card--title">Logout</h3>
              <h3 className=" logout--card--desc">Logout from session</h3>
              <Button
                className="btn btn-custom btn-lg page-scroll logout--btn"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
      {/* <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}
      {/* <div className="container cardd">
        <h2>Hello this is dashboard</h2>
      </div> */}
    </>
  );
}
