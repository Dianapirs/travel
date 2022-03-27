
import { useContext } from "react";
import { AppContext } from "../../App";
import "../../App.css";

function Cart() {  
    const { setCart} = useContext(AppContext);

    let cartData = localStorage.getItem('cartData');


    if(cartData && cartData.length > 2) {
        cartData = JSON.parse(cartData);
    } else {
        return (
            <h1 className="noResults">No results</h1>
        )
    }

    function removeDest(item) {
        let arr = [];
       
        arr = cartData.filter(i => {
            return i.id !== item.id;
        });
        setCart([...arr]);

        
        localStorage.setItem('cartData', JSON.stringify(arr));
    }

    


    return (
        <div className="cart">
            <h1 className="pageTitle">My Destinations</h1>
            <ul>
            {cartData.map((item, index) => {
                return (
                    <li className='countries__list' key={index}>
                        <img className="countries__image" src={item.picture} alt="#" />
                        <div className="countries__information">
                        <h2 className="slider__country">{item.country}</h2>
                            <h3 className="slider__hotel">{item.hotel}</h3>
                            <p className="slider__desc">{item.description}</p>
                            <p className="slider__price">{item.price}$</p>
                            <button onClick={() => removeDest(item)} className='slider__add'>X</button>
                        </div>
                    </li>
                )
                
            })}
        </ul>
            
        </div>
    );
  }
  
  export default Cart;