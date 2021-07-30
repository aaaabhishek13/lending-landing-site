import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
// import Header from "./components/header";
// import OurStory from "./components/ourstory";
// import WhatWeDo from "./components/WhatWeDo";
// import OurTech from "./components/OurTech";
// import Services from "./components/services";
// import Gallery from "./components/gallery";
// import Testimonials from "./components/testimonials";
// import Team from "./components/Team";
// import Contact from "./components/contact";
import Login from "./components/Login";
import Signup from "./components/Signup.jsx";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Forms from "./components/Forms";
// import JsonData from "./data/data.json";
export class App extends Component {
  // state = {
  //   landingPageData: {},
  // };
  // getlandingPageData() {
  //   this.setState({ landingPageData: JsonData });
  // }

  // componentDidMount() {
  //   this.getlandingPageData();
  // }

  render() {
    return (
      <div>
        <Router>
          <Navigation />
          <Switch>
            {/* <Route path="/">
              <Home /> */}
            {/* <Header data={this.state.landingPageData.Header} />
              <OurStory data={this.state.landingPageData.Ourstory} />
              <WhatWeDo data={this.state.landingPageData.Whatwedo} />
              <OurTech data={this.state.landingPageData.OurTech} />
              <Team data={this.state.landingPageData.Team} />
              <Contact data={this.state.landingPageData.Contact} /> */}
            {/* </Route> */}
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/forms" component={Forms} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
