import React, { Component } from "react";

export class OurTech extends Component {
  render() {
    return (
      <div id="ourtech">
        <div id="about" style={{ background: "#f6f6f6" }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h2>OUR INNOVATIVE TECHNOLOGY</h2>
                  <h3>
                    {this.props.data ? this.props.data.caption : "loading..."}
                  </h3>
                  {this.props.data
                    ? this.props.data.content.map((content, i) => (
                        <p key={`ourtech${i}`}>{content}</p>
                      ))
                    : "loading..."}
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                {" "}
                <img
                  src="img/threads.jpg"
                  className="img-responsive"
                  alt=""
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurTech;
