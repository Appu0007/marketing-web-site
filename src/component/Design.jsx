import React, { Component } from "react";

class Design extends Component {
  render() {
    return (
      <div className="main-new-container">
        <div className="new-container">
          <div className="writing2">
            <h1 className="design-head"><u>What We Do</u></h1>
            <h4 className="design-head">Innovative Design & Branding</h4>
            <p className="design-para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              minus culpa omnis nisi natus reprehenderit!
            </p>
            <button className="btn-1">Learn more</button>
          </div>
          <div className="new-img-container">
            <img
              className="new-img"
              src="https://mymodernmet.com/wp/wp-content/uploads/2019/12/photos-of-indonesia-rarindra-prakarsa-4.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Design;
