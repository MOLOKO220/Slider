"use client";
import "./Slider.scss";
// slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactSlickSlider, { Settings } from "react-slick";
// components
import ReviewItem from "../ReviewItem/ReviewItem";
// data
import { reviews } from "@/app/data/reviews";

export default function Slider() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="Slider">
      <ReactSlickSlider {...settings}>
        {reviews.map((el) => {
          return (
            <ReviewItem
              key={el.name}
              logoSrc={el.logoSrc}
              photoSrc={el.photoSrc}
              name={el.name}
              position={el.position}
              reviewText={el.reviewText}
            />
          );
        })}
      </ReactSlickSlider>
    </section>
  );
}
