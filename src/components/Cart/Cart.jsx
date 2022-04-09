
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import "../../App.css";

function Cart() {  
    const { cart, setCart} = useContext(AppContext);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartData, setCartData] = useState([]);

    let totalPrice = 0;
    useEffect(() => {
        let cartDataTmp = localStorage.getItem('cartData');

        if(cartDataTmp && cartDataTmp.length > 2) {
            cartDataTmp = JSON.parse(cartDataTmp);



            cartDataTmp.forEach(dest => {
                totalPrice = totalPrice + dest.price;
            })

            setCartTotal(totalPrice);
            setCartData([...cartDataTmp]);
        }
 
    }, [setCart, cart]);

    
    function removeDest(item) {
        let cartDataTMP = localStorage.getItem('cartData');
        if(cartDataTMP && cartData.length > 0) {
            cartDataTMP = JSON.parse(cartDataTMP);
        }

        let arr = [];
       
        arr = cartDataTMP.filter(i => {
            return i.id !== item.id;
        });

        setCart([...arr]);
        setCartData([...arr]);

        localStorage.setItem('cartData', JSON.stringify(arr));
    }

    return (
        <div className="cart">
            <h1 className="pageTitle">My Destinations</h1>
            <ul>
            {(cartData && cartData.length > 0) ? cartData.map((item, index) => {
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
                
            }) : <h1 className="noResults">No results</h1>}
        </ul>
        {(cartData && cartData.length > 0) ? <div className="total-price">Total Price: ${cartTotal}</div> : ''}
            
        </div>
    );
  }
  
  export default Cart;