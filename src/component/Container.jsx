import React, { Component } from "react";

class container extends Component {
  state = {
    cardlist: [
      {
        id: "1",
        photo:
          "https://thumbs.dreamstime.com/b/sample-responsive-web-design-technology-concept-image-multi-device-technology-responsive-web-design-laptop-digital-tablet-143444401.jpg",
        Name: "Fully Responsive.",
        para: "jLorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque ad illum voluptatum sed corrupti odit molestias ducimus, voluptates harum",
      },
      {
        id: "2",
        photo:
          "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_01-850x412.jpg",
        Name: "SEO Optimized.",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque ad illum voluptatum sed corrupti odit molestias ducimus, voluptates harum",
      },
      {
        id: "3",
        photo:
          "https://www.usnews.com/dims4/USNEWS/fb6e5fb/2147483647/crop/2000x1334%2B0%2B2/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F65%2F62%2Fc9cb60d24ac89d56462b1228574a%2F201009-codingcomputer-stock.jpg",
        Name: "Ecommerce Integrated",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque ad illum voluptatum sed corrupti odit molestias ducimus, voluptates harum",
      },
      {
        id: "4",
        photo:
          "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
        Name: "Awesome Features",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque ad illum voluptatum sed corrupti odit molestias ducimus, voluptates harum",
      },
      {
        id: "5",
        photo:
          "https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/051/Web_development_-_Main.png",
        Name: "Awesome Features",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque ad illum voluptatum sed corrupti odit molestias ducimus, voluptates harum",
      },
      {
        id: "6",
        photo:
          "https://www.motocms.com/blog/wp-content/uploads/2019/11/how-to-become-a-web-developer.jpg",
        Name: "One-Click Import",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque ad illum voluptatum sed corrupti odit molestias ducimus, voluptates harum",
      },
    ],
  };
  render() {
    return (
      <div className="row">
        <div className="main-head-contain">
          <div className="heading2">
            <div>
              <h3 className="head-main">Some Awesome Features</h3>
              <p className="para2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda atque ad illum voluptatum sed corrupti odit molestias
                ducimus, voluptates harum?
              </p>
            </div>

            <div>
              <a href="">Explore all feature</a>
            </div>
          </div>
        </div>
        {this.state.cardlist.map((list) => {
          return (
            <div className="col" key={list.id}>
              <div className="card3" id="card1">
                <img src={list.photo} className="card-img-top" id="card-img3" />
                <div className="card-body1">
                  <h5 className="card-title1">{list.Name}</h5>
                  <p className="card-text">{list.para}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default container;
