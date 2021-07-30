import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Image } from "react-bootstrap";
import "./Forms.css";
import { Link, useHistory } from "react-router-dom";
import undraw from "../assets/undraw_House_searching_re_stk8.svg";

export default function Forms() {
  const history = useHistory();
  const submitHandler = () => {
    history.push("/dashboard");
  };
  return (
    <>
      <div className="container cardd3">
        <Card>
          <Card.Body className="form--card--body">
            <Image src={undraw} fluid className="forms--img" />
            <h1 className="text-center mb-4">
              Generate Your Title Search Report
            </h1>
            <Form onSubmit={submitHandler}>
              <Form.Group id="state">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
              </Form.Group>
              <Form.Group id="district">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="District Name"
                  required
                />
              </Form.Group>
              <Form.Group id="village">
                <Form.Label>Village</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your village name"
                  required
                />
              </Form.Group>
              <Form.Group id="khata">
                <Form.Label>Khata Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your khata number"
                  required
                />
              </Form.Group>
              <Form.Group id="survey">
                <Form.Label>Survey No.</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your khata number"
                  required
                />
              </Form.Group>
              <Button
                className="btn btn-custom btn-lg page-scroll forms--btn"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
