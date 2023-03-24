import React, { Component } from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsGithub } from "react-icons/bs";

class Team extends Component {
  state = {
    profile: [
      {
        id: "1",
        photo:
          "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
        name: "Appu",
        post: "Developer",
        discribtion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratio minima aut soluta quo ea quaerat officia necessitatibus reiciendisvoluptate",
      },
      {
        id: "2",
        photo:
          "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
        name: "Mridu",
        post: "Developer",
        discribtion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratio minima aut soluta quo ea quaerat officia necessitatibus reiciendisvoluptate",
      },
      {
        id: "3",
        photo:
          "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
        name: "Manish",
        post: "Developer",
        discribtion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratio minima aut soluta quo ea quaerat officia necessitatibus reiciendisvoluptate",
      },
      {
        id: "4",
        photo:
          "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
        name: "Chandan",
        post: "Developer",
        discribtion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratio minima aut soluta quo ea quaerat officia necessitatibus reiciendisvoluptate",
      },
    ],
  };
  render() {
    return (
      <div className="row">
        <div className="team-para">
          <div className="teampara">
            <h1 className="team-head">Our Special Team</h1>
            <p className="writing">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione
              minima aut soluta quo ea quaerat officia necessitatibus reiciendis
              voluptate!
            </p>
          </div>
        </div>
        {this.state.profile.map((File) => {
          return (
            <div className="col" key={File.id}>
              <div className="card-wrapper swiper-wrapper" id="rating-main">
                <div className="card swiper-slide" id="rating-container">
                  <div className="new-swipe-card">
                    <div className="image-content">
                      <span className="overlay"></span>

                      <div className="card-image" id="card-image1">
                        <img
                          src={File.photo}
                          className="card-img"
                          id="card-img1"
                        />
                      </div>
                    </div>

                    <div className="card-content">
                      <h2 className="name">{File.name}</h2>
                      <h6>{File.post}</h6>
                      <p className="description">{File.discribtion}</p>
                      <div className="icons">
                        <a href="#" className="icons-all">
                          <AiFillTwitterCircle />
                        </a>
                        <a href="#"  className="icons-all">
                          <BsFacebook />
                        </a>
                        <a href="#"  className="icons-all">
                          <BsGithub />
                        </a>
                        <a href="#"  className="icons-all">
                          <AiFillLinkedin />
                        </a>
                   
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Team;
