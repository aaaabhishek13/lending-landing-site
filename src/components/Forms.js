import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Image } from "react-bootstrap";

import "./Forms.css";

import { Link, useHistory } from "react-router-dom";
import undraw from "../assets/undraw_House_searching_re_stk8.svg";
const axios = require("axios");

export default function Forms() {
  const history = useHistory();
  let url = "http://localhost:8080/forms";
  //refs
  const stateRef = useRef();
  const districtRef = useRef();
  const villageRef = useRef();
  const khataRef = useRef();
  const surveyRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const stateValue = stateRef.current.value;
    const districtValue = districtRef.current.value;
    const villageValue = villageRef.current.value;
    const khataValue = khataRef.current.value;
    const surveyValue = surveyRef.current.value;
    await axios
      .post(
        url,
        {
          state: stateValue,
          district: districtValue,
          village: villageValue,
          khata: khataValue,
          survey: surveyValue,
        },
        { "Content-Type": "application/json" }
      )
      .then((res) => {
        console.log(res.data);
        history.push("/reports");
      })
      .catch((err) => {
        console.log(err);
      });
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
                  ref={stateRef}
                >
                  <option>Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujrat">Gujrat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odissa">Odissa</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telengana">Telengana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                </Form.Control>
              </Form.Group>
              <Form.Group id="district">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="District Name"
                  required
                  ref={districtRef}
                />
              </Form.Group>
              <Form.Group id="village">
                <Form.Label>Village</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your village name"
                  required
                  ref={villageRef}
                />
              </Form.Group>
              <Form.Group id="khata">
                <Form.Label>Khata Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your khata number"
                  required
                  ref={khataRef}
                />
              </Form.Group>
              <Form.Group id="survey">
                <Form.Label>Survey Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your survey number"
                  required
                  ref={surveyRef}
                />
              </Form.Group>
              <div className="centerbtn">
                <Button
                  className="btn btn-custom btn-lg page-scroll forms--btn"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
