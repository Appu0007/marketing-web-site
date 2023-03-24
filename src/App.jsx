import React, { Component } from "react";
import Cards from "./component/Cards";
import Client from "./component/Client";
import Container from "./component/Container";
import Slider from "./Slider";
import Team from "./component/Team";
import Design from "./component/Design";
import Rating from "./component/Rating";
import MainHeader from "./MainHeader";
import Navbar from "./component/Navbar";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <MainHeader/>
        <Cards />
        <Client />
        <Container />
        <Slider />
        <Team />
        <Design />
        <Rating />
      </div>
    );
  }
}

export default App;
