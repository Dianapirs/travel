
import React, { useContext, Component } from "react";
import Slider from "react-slick";
import destinations from  "../../destinations.json";
import "../../App.css";
import { AppContext } from "../../App";

export default function LazyLoad() {
  const { addDest} = useContext(AppContext);

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
            let cartData = localStorage.getItem('cartData');
            cartData = JSON.parse(cartData);

            if (!cartData || cartData.length === 0) cartData = [];

            let a = null;
            a = cartData.find(i => i.id === item.id);

              return (
                  <div key={index}>
                      <img className="slider__image" src={item.picture} alt="#" />
                      <div className="slider__information">
                          <h2 className="slider__country">{item.country}</h2>
                          <h3 className="slider__hotel">{item.hotel}</h3>
                          <p className="slider__desc">{item.description}</p>
                          <p className="slider__price">{item.price}$</p>
                          {!a ? <button className="slider__add" onClick={() => addDest(item)}>+</button> : ''}
                      </div>
                  </div>
                  )
          })}
                      
          </Slider>


      
    </div>
  );

}

// export default class LazyLoad extends Component {
//   //static contextType = AppContext

//   render() {
    

//     const settings = {
//       dots: true,
//       lazyLoad: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       initialSlide: 2
//     };



//     return (
//       <div className="slider">
//         <h1 className="slider__title"> Choose the Destination</h1>
        
        
//         <Slider {...settings}>
//             {destinations.map((item, index) => {
//                 return (
//                     <div key={index}>
//                         <img className="slider__image" src={item.picture} alt="#" />
//                         <div className="slider__information">
//                             <h2 className="slider__country">{item.country}</h2>
//                             <h3 className="slider__hotel">{item.hotel}</h3>
//                             <p className="slider__desc">{item.description}</p>
//                             <p className="slider__price">{item.price}$</p>
//                             <button className="slider__add">+</button>
//                         </div>
//                     </div>
//                     )
//             })}
                        
//             </Slider>


        
//       </div>
//     );
//   }
  
// }



