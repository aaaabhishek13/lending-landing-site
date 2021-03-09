import React, { Component } from "react";

export class WhatWeDo extends Component {
  render() {
    return (
      <div id="whatwedo">
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                {" "}
                <img
                  src="img/graph.jpg"
                  className="img-responsive"
                  alt=""
                />{" "}
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h2>WHAT WE DO</h2>
                  <h3>
                    {this.props.data ? this.props.data.caption : "loading..."}
                  </h3>
                  {this.props.data
                    ? this.props.data.content.map((content, i) => (
                        <p key={`whatwedo${i}`}>{content}</p>
                      ))
                    : "loading..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
