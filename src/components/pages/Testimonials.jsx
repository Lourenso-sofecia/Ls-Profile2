import { FormatQuote } from '@mui/icons-material';
import React from 'react'
import {testimonials} from '../data/dummydata';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="testimonials hero">
        <div className="container">
          <br />
          <Slider {...settings}>
            {testimonials.map((value) =>(
              <div className="box-testimonials">
                <i data-aos='zoom-out-right'>
                  <FormatQuote />
                </i>
                <p data-aos='zoom-out-left'>{value.text}</p>
                <div className="img">
                  <img src={value.img} alt="" data-aos='zoom-out-up'/>
                </div>
                <div className="testimonials-name">
                  <h3 data-aos='zoom-out-left'>{value.name}</h3>
                  <label data-aos='zoom-out-right' htmlFor="">{value.post}</label>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <br />
    </>
  )
}
