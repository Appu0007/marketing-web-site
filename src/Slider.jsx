import React, { Component } from "react";

class slider extends Component {
  state = {
    slidelist: [
      {
        video: "https://www.youtube.com/embed/nOdDtnHWaDo",
      },
      {
        video: "https://www.youtube.com/embed/ShPPkZEeLPo",
      },
      {
        video: "https://www.youtube.com/embed/zf1C1peIk8I",
      },
    ],
  };
  render() {
    return (
      <div className="boss-container">
        <div className="main-container">
          <h2 className=" head">Digital Branding & Advertising</h2>
          <p className="discrib">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            est ullam saepe quis ipsam expedita consequatur? Laudantium maxime
            velit labore.
          </p>
        </div>
        <div className="video-container">
          {this.state.slidelist.map((slide, ind) => {
            return (
              <div key={ind}>
                <iframe src={slide.video} autoPlay loop className="video" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default slider;
