import React, { Component } from "react";
import Slider from "react-slick";
import destinations from  "../../destinations.json";
import "../../App.css";


export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };


    return (
      <div className="slider">
        <h1 className="slider__title"> Choose the Destination</h1>
        
        
        <Slider {...settings}>
            {destinations.map((item, index) => {
                return (
                    <div key={index}>
                        <img className="slider__image" src={item.picture} alt="#" />
                        <div className="slider__information">
                            <h2 className="slider__country">{item.country}</h2>
                            <h3 className="slider__hotel">{item.hotel}</h3>
                            <p className="slider__desc">{item.description}</p>
                            <p className="slider__price">{item.price}$</p>
                            <button className="slider__add">+</button>
                        </div>
                    </div>
                    )
            })}
                        
            </Slider>


        
      </div>
    );
  }
}
