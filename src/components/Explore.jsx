import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import photo from '../../public/1.jpg';

export default function Explore() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="max-w-screer-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-bold text-xl pb-2 mt-12 text-center mb-5">Popular Places</h1>
        <div>
        <Slider {...settings}>
          <div className="card glass w-96">
            <figure>
            <img src="1.jpg" className="mt-5 pl-5 pr-5" alt="car!"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Dasashwamedh Ghat</h2>
              <p>It is a beautiful and impressive structure that offers stunning views of the river and the city.</p>
              <div className="card-actions justify-end">
              <button className="btn glass">Know More</button>
              </div>
            </div>
          </div>
          <div className="card glass w-96">
            <figure>
            <img src="2.jpg" className="mt-5 pl-5 pr-5" alt="car!"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kashi Vishwanath - Gyanvapi</h2>
              <p>It is one of the 12 Jyotirlingas that are Shivalingas that are the physical symbols of Lord Shiva.</p>
              <div className="card-actions justify-end">
              <button className="btn glass">Know More</button>
              </div>
            </div>
          </div>
          <div className="card glass w-96">
            <figure>
            <img src="3.jpg" className="mt-5 pl-5 pr-5" alt="car!"/>
            </figure>
              <div className="card-body">
                <h2 className="card-title">ASSI Ghat</h2>
                <p>The Assi Ghat is the southernmost ghat in Varanasi. It is one of the biggest ghats in Varanasi.</p>
                <div className="card-actions justify-end">
                <button className="btn glass">Know More</button>
                </div>
              </div>
            </div>
        </Slider>
      </div>
      <div>
        <Slider {...settings}>
          <div className="card glass w-96">
            <figure>
            <img src="4.jpg" className="mt-5 pl-5 pr-5" alt="car!"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Madikardika Ghat</h2>
              <p>Manikarnika Ghat is one of the holiest cremation grounds among the sacred riverfronts.</p>
              <div className="card-actions justify-end">
              <button className="btn glass">Know More</button>
              </div>
            </div>
          </div>
          <div className="card glass w-96">
            <figure>
            <img src="5.jpg" className="mt-5 pl-5 pr-5" alt="car!"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Dhamek Stupa - Sarnath</h2>
              <p>Dhamek Stupa (also spelled Dhamekh and Dhamekha) is a massive stupa.</p>
              <div className="card-actions justify-end">
              <button className="btn glass">Know More</button>
              </div>
            </div>
          </div>
          <div className="card glass w-96">
            <figure>
            <img src="6.jpg" className="mt-5 pl-5 pr-5" alt="car!"/>
            </figure>
              <div className="card-body">
                <h2 className="card-title">Ramnagar Fort</h2>
                <p>The Ramnagar Fort is a fortification in Ramnagar, Varanasi, Uttar Pradesh, India.</p>
                <div className="card-actions justify-end">
                <button className="btn glass">Know More</button>
                </div>
              </div>
            </div>
        </Slider>
      </div>

    </div>
    </>
  )
}

