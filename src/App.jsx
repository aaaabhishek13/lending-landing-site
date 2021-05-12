import React, { Component } from "react";
import Navigation from "./components/navigation";
import Header from "./components/header";
import OurStory from "./components/ourstory";
import WhatWeDo from "./components/WhatWeDo";
import OurTech from "./components/OurTech";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Team from "./components/Team";
import Contact from "./components/contact";
import JsonData from "./data/data.json";

export class App extends Component {
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
        <Navigation />
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

export default App;
