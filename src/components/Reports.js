import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { authActions } from "../store/auth";
import downloadImg from "../assets/undraw_cloud_files_wmo8.svg";
import "./dashboard.css";
import "./Reports.css";
import reportIcon from "../assets/report.png";
import resultIcon from "../assets/result.png";

export default function Reports() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const [error, setError] = useState("");
  const logout = true;
  const history = useHistory();

  function handleLogout() {
    setError("");

    try {
      dispatch(authActions.logout());
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
      history.push("/dashboard");
    } catch {
      setError("Failed to load Page");
    }
  }

  return (
    <>
      <div className="background">
        <div>
          <div className=" report">
            <Col xs={12} md={8}>
              <Card className="report--section">
                <Row>
                  <h1 className="report--title">Report:</h1>
                </Row>
                <Row>
                  <Col xs={12} md={8}>
                    <Image src={downloadImg} className="download--img" />
                  </Col>
                  <Col xs={6} md={4}>
                    <Row>
                      <Button
                        className="btn btn-custom btn-lg report--btn"
                        onClick={handleForm}
                      >
                        Download{" "}
                        <span>
                          <i class="fa fa-arrow-down"></i>
                        </span>
                      </Button>
                    </Row>
                  </Col>
                </Row>
                <Row></Row>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card className="remarks--section">
                <h1 className="remark--title">Remarks:</h1>
                <h3 className="report--desc">
                  Remarks, if any, will be displayed here.
                </h3>
              </Card>
            </Col>
          </div>
        </div>
        <div className="report--controls ">
          <Col xs={12} md={6}>
            <Card className="home">
              <Card.Body className="tsr--card--body">
                <Row>
                  <h3 className="home--card--title">Get back to dashboard</h3>
                </Row>
                <Row>
                  <Button
                    className="btn btn-custom btn-lg page-scroll tsr--btn"
                    onClick={handleForm}
                  >
                    Dashboard
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6} md={6}>
            <Card className="logout2">
              <Card.Body className="logout--card--body">
                <h3 className=" logout--card--title">Logout from session</h3>
                <Button
                  className="btn btn-custom btn-lg  logout--btn"
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
    </>
  );
}
