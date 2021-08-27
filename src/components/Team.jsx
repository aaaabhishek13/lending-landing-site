import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-6 col-sm-12 team"
                  >
                    <div className="thumbnail">
                      {" "}
                      <img
                        src={d.img}
                        style={{ height: 260 }}
                        alt="..."
                        className="team-img"
                      />
                      <div className="caption">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={d.profile}
                        >
                          <h4 style={{ textDecoration: "underline" }}>
                            {d.name}
                          </h4>
                        </a>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
