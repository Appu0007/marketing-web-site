import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-rating-stars-component";

// Import Swiper styles

// import required modules
import { FreeMode, Pagination } from "swiper";
import star from "react-rating-stars-component/dist/star";
const Carousel = () => {
  let reactSwipeEl;

  const [cards, setCards] = useState([
    {
      photo:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Appu",
      status: "Devoloper",
      description:
        "A Web Developer is a professional who is responsible for the design and construction of websites. They ensure that sites meet user expectations by ensuring they ",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      name: "Chandan",
      status: "Devoloper",
      description:
        "A Web Developer is a professional who is responsible for the design and construction of websites. They ensure that sites meet user expectations by ensuring they ",
    },
    {
      photo: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
      name: "Nag",
      status: "Devoloper",
      description:
        "A Web Developer is a professional who is responsible for the design and construction of websites. They ensure that sites meet user expectations by ensuring they ",
    },
    {
      photo:
        "https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg",
      name: "Vinod",
      status: "Devoloper",
      description:
        "A Web Developer is a professional who is responsible for the design and construction of websites. They ensure that sites meet user expectations by ensuring they ",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      name: "Kishor",
      status: "Devoloper",
      description:
        "A Web Developer is a professional who is responsible for the design and construction of websites. They ensure that sites meet user expectations by ensuring they",
    },
  ]);

  return (
    <div>
      <div className="rating-head">
        <h2 className="main-head">What Our Client Say</h2>
        <p className="rating-para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          ipsum ipsam dolorum ullam laboriosam quod temporibus amet ducimus
          eveniet dicta?
        </p>
      </div>
      

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="box">
              <div className="card-wrapper swiper-wrapper">
                <div className="card swiper-slide" id="rating-container1">
                  <div className="image-content">
                    <span className="overlay"> </span>
                    <p className="description" id="">
                      {card.description}
                    </p>
                  </div>
                  <div className="stars">
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700">
                  
                  </ReactStars>
                  </div>
                
                  
                  <div className="card-image" id="img-name">
                    <img src={card.photo} alt="" className="card-img" />
                    <div>
                      <h2 className="name">{card.name}</h2>
                      <h6>{card.status}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
