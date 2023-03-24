import React, { Component } from "react";

class Client extends Component {
  state = {
    list: [
      { id: 1, percentage: "75%", para: "Annualized Growth" },
      {
        id: 2,
        percentage: "558+",
        para: "client we have worked with",
      },
      { id: 3, percentage: "789462", para: "client conversations this year" },
    ],
  };
  render() {
    return (
      <div className="rating">
        {this.state.list.map((rate) => {
          return (
            <div className="card2" key={rate.id}>
              <div className="col">
                <p className="font">{rate.percentage}</p>
                <p className="client-text">{rate.para}</p>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    );
  }
}

export default Client;
