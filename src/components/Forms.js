import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Image } from "react-bootstrap";

import "./Forms.css";

import { Link, useHistory } from "react-router-dom";
import undraw from "../assets/undraw_House_searching_re_stk8.svg";

export default function Forms() {
  const history = useHistory();

  const submitHandler = () => {
    history.push("/reports");
  };
  return (
    <>
      <div className="container ">
        <Card className="cardd3">
          <Card.Body className="form--card--body">
            <Image src={undraw} fluid className="forms--img" />
            <h1 className="text-center mb-4">
              Generate Your Title Search Report
            </h1>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  name="state"
                  defaultValue={{ label: "state" }}
                  required
                >
                  <option>Select State</option>
                  <option value="AN">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BH">Bihar</option>
                  <option value="CH">Chhattisgarh</option>
                  <option value="GO">Goa</option>
                  <option value="GT">Gujrat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KR">Karnataka</option>
                  <option value="KA">Kerala</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="MG">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NG">Nagaland</option>
                  <option value="OD">Odissa</option>
                  <option value="PN">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telengana</option>
                  <option value="TR">Tripura</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="WB">West Bengal</option>
                </Form.Control>
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
                <Form.Label>Survey Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your survey number"
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
