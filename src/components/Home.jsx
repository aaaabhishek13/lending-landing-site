import React, { Component } from "react";
import Header from "./header";
import OurStory from "./ourstory";
import WhatWeDo from "./WhatWeDo";
import OurTech from "./OurTech";
import Team from "./Team";
import Contact from "./contact";
import JsonData from "../data/data.json";
class Home extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }
  render() {
    return (
      <div>
        <Header data={this.state.landingPageData.Header} />
        <OurStory data={this.state.landingPageData.Ourstory} />
        <WhatWeDo data={this.state.landingPageData.Whatwedo} />
        <OurTech data={this.state.landingPageData.OurTech} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    );
  }
}

export default Home;
