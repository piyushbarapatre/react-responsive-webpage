import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Abc",
    title: "CEO",
    image: "home.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typ1500s, when an unknown printer took a ga",
  },

  {
    id: 2,
    name: "Abc",
    title: "CEO",
    image: "home.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typ1500s, when an unknown printer took a ga",
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  sliderToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Test = () => {
  return (
    <div className="testimonial-slider">
      <h2>TESTIMONIAL</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <div className="testimonial-content">
              <img src={testimonial.image} />
              <p>{testimonial.text}</p>
              <h3>{testimonial.name}</h3>
              <p className="testimonial-title">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Test;
