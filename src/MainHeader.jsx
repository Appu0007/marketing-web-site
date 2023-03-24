import React, { Component } from "react";

class MainHeader extends Component {
  render() {
    return (
      <div className="main-container1">
        <div className="row2">
          <div className="column1">
            <h1>
              Digital Marketing <span> Agency</span>
            </h1>
            <p>
              As a digital Marketing Agency , We strive to understand <br />
              our <span>client's</span> bussiness Goals , First then all
              <span>decisions</span> are <br />
              made with those
            </p>
          </div>
          <div className="column2">
            <img
              src={require("./component/portrait.png")}
              alt=""
              width="650px"
              className="head-img-size"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
