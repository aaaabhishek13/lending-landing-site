import React, { Component } from "react";

export class OurStory extends Component {
  render() {
    return (
      <div id="ourstory" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>OUR STORY</h2>
            <h3>{this.props.data
              ? this.props.data.caption : "Loading..."}</h3>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.content.map((d,i) => (
                  <div  key={`${i}`} className="col-xs-12">
                    {" "}
                    <p>{d}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default OurStory;
