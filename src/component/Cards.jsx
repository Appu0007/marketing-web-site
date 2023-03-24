import React, { Component } from "react";

class Cards extends Component {
  state = {
    detail: [
      {
        id: "1",
        photo:
          "https://cdn.pixabay.com/photo/2017/06/27/11/48/team-spirit-2447163__480.jpg",
        Name: "Great Support",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque ad illum voluptatum sed corrupti odit molestias ducimus, voluptates harum",
      },
      {
        id: "2",
        photo:
          "https://thumbs.dreamstime.com/b/close-up-hands-contemporary-website-developer-man-typing-writing-code-program-working-partner-office-147191492.jpg",
        Name: "Pixel-Perfect Design",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque ad illum voluptatum sed corrupti odit molestias ducimus, voluptates harum",
      },
      {
        id: "3",
        photo:
          "https://thumbs.dreamstime.com/b/back-view-portrait-contemporary-web-developer-writing-code-program-sitting-desk-working-startup-project-modern-116658678.jpg",
        Name: "SEO Optimized",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque ad illum voluptatum sed corrupti odit molestias ducimus, voluptates harum",
      },
    ],
  };
  render() {
    return (
        
      <div className="row">
         <div className="heading1">
          <h1 className="head-1">Marketing & Design</h1>
          <p className="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque ad illum voluptatum sed corrupti odit molestias ducimus, voluptates harum?</p>
        </div>
        {this.state.detail.map((Newcard) => {
          return (
            <div className="col" key={Newcard.id}>
              <div className="card" id="card2">
                <img src={Newcard.photo} className="card-img-top" id="card-img" />
                <div className="card-body">
                  <h4 className="card-title" id="card-name">{Newcard.Name}</h4>
                  <p className="card-text">
                    {Newcard.para}
                  </p>
                  <a href="">Learn more</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
