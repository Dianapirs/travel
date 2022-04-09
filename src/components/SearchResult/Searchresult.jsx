import React, { useContext } from "react";
import { AppContext } from "../../App";
import '../../App.css';


function SearchResult() {
 
    const { addDest} = useContext(AppContext);
    
    let localData = localStorage.getItem('searchData');
    if(localData && localData.length > 2) {
        localData = JSON.parse(localData);
    } else {
        return (
            <h1 className="noResults">No results</h1>
        )
    }

    return (
        <>
        <h1 className="pageTitle">Choose The Destination</h1>
        <ul>
            {localData.map((item, index) => {
                let cartData = localStorage.getItem('cartData');
                cartData = JSON.parse(cartData);
    
                if (!cartData || cartData.length === 0) cartData = [];

                let a = null;
                a = cartData.find(i => i.id === item.id);
                return (
                    <li className='countries__list' key={index}>
                        <img className="countries__image" src={item.picture} alt="#" />
                        <div className="countries__information">
                        <h2 className="slider__country">{item.country}</h2>
                            <h3 className="slider__hotel">{item.hotel}</h3>
                            <p className="slider__desc">{item.description}</p>
                            <p className="slider__price">{item.price}$</p>
                            {!a ? <button className="slider__add" onClick={() => addDest(item)}>+</button> : ''}
                        </div>
                    </li>
                )
                
            })}
        </ul>
        </>        
    );
  }
  export default SearchResult;