import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderSection } from '../styles';

// Import the images from the assets directory
import img1 from '../assets/background1.jpg';
import img2 from '../assets/background2.jpg';
import img3 from '../assets/background3.jpg';
import img4 from '../assets/background4.jpg';
import img5 from '../assets/background5.jpg';

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    fade: true,
  };

  const images = [img1, img2, img3, img4, img5];

  return (
    <SliderSection>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className="slider-image-container">
            <img
              src={src}
              alt={`Slide ${idx}`}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </SliderSection>
  );
};

export { ImageSlider };