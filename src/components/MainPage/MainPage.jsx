import React, { useContext } from "react";
import map from '../../assets/img/map.png';
import binocular from '../../assets/img/binocular.png';
import backpack from '../../assets/img/backpack1.png';
import ukelele from '../../assets/img/ukelele1.png';
import destinations from '../../destinations.json';
import lighthouse from '../../assets/img/lighthouse1.png';
import iconMusic from '../../assets/img/icon_music.png';
import iconWorld from '../../assets/img/icon_world.png';
import chooseQ from '../../assets/img/choose-q.png';
import chooseC from '../../assets/img/choose-c.png';
import googlePlay from '../../assets/img/google-play.png';
import appleStore from '../../assets/img/apple-store.png';
import appsImage from '../../assets/img/apps-image.png';
import { Link } from "react-router-dom";
import countries from '../../countries.json';
import { AppContext } from "../../App";





function Main() {

    const {setSearchData, addDest} = useContext(AppContext);

    let newDestinations = [];
    function topDestinations() {
        while(true) {
            if(newDestinations.length < 3) {
                let randomDestinations = destinations[(Math.floor(Math.random() * (destinations.length)))]
                let resultFind = newDestinations.find((item) => {
                    return (
                        item.country === randomDestinations.country
                    )
                })
                /*if(newDestinations.indexOf(randomDestinations) === -1) newDestinations.push(randomDestinations);*/
                if(!resultFind) newDestinations.push(randomDestinations);
            } else break
        }
        
        
    }

    function search (){
        let arr = [];
        let maxPriceValue = document.getElementById('maxPrice').value;
        let countryValue = document.getElementById('country').value;
        destinations.map(item => {
            if(item.country === countryValue && item.price <= maxPriceValue) arr.push(item);
            });
        setSearchData([...arr]);
        localStorage.setItem('searchData', JSON.stringify(arr));
    };



    return (
    <>
        <main className='main-page'>
            <div className='main-page__titleBlock'>
                <h1 className='main-page__title'>It’s Time To<br /> Explore The World</h1>
            </div>
            <Link to='/destination'>
                <button className='main-page__btn-plan'>Plan Your Trip</button>
            </Link>
            
        </main>
        <form className='main-page__search'>
            <div className='main-page__country'>
                <h3>Destinations</h3>
                <select id='country' className='main-page__choice'>
                    {countries.map((item, index) => {
                        return (
                            <option className="choice__country" key={index}>{item.country}</option>
                        )
                    })}
                    
                </select>
            </div>
            
            <div className='main-page__search_price'>
                <h3>Max Price($)</h3>
                <input id='maxPrice' placeholder='100' className='main-page__choice' type='number' defaultValue='' min='100' />
            </div>
            <Link to='/search'>
                <button onClick={() => search()} className='main-page__search_btn-discover'>Discover Now</button>
            </Link>
        </form>
        <section className='blocks'>

                <Link className='blocks__choose' to='/destination'>
                    <div >
                    <img  src={map} />
                    <h4 className='blocks__title'>Choose Destination</h4>
                    <p className='blocks__desc'>Have a look and happy travels!</p>
                </div>
                </Link>


                <Link className='blocks__explore' to='/explore'>
                    <div >
                        <img  src={binocular} />
                        <h4 className='blocks__title'>Explore The Place</h4>
                        <p className='blocks__desc'>To travel is to explore and experience new places, people and things</p>
                    </div>
                </Link>


                <Link className='blocks__start' to='/start'>
                    <div >
                        <img  src={backpack} />
                        <h4 className='blocks__title'>Start Your Journey</h4>
                        <p className='blocks__desc'>Are you ready to start your journey?</p>
                    </div>
                </Link>


                <Link className='blocks__enjoy' to='/enjoy'>
                    <div>
                        <img  src={ukelele} />
                        <h4 className='blocks__title'>Let’s Enjoy</h4>
                        <p className='blocks__desc'>Enjoy the journey and see where it takes you.</p>
                    </div>
                </Link>

        </section>
        <section className="top">
            <div className="top__inf">
                <h2 className="top__inf_title">Top <span>Destinations</span> In The World</h2>
                <p className="top__inf_desc">It is a long established fact that a reader will be the distracted by the readable content of a page when looking at its layout from it.</p>
                <Link to='/explore'>
                    <button className="top__inf_btn">Discover more</button>
                </Link>
            </div>
            <div className="top__destinations">
                {topDestinations()}
                {newDestinations.map((item, index) => {
                return (
                    <li key={index} className='top__destinations_dest'>
                        <img src={item.picture} alt="#" className="dest-picture"/>
                        <h3 className="dest-country">{item.country}</h3>
                    </li>
                    )
                })}
                
            </div>

        </section>
        <section className="offering">
        
          <div className='offering__picture'>
            <img className='offering__picture_lighthouse' src={lighthouse} />
          </div>
          <div className='offering__text'>
            <h2 className='offering__text_title'>We Offering In Total 793 Tours Out The World</h2>
            <div>
              <img src={iconMusic} />
              <h4>Best Travel Guide Always For Your Services</h4>
            </div>
            <div>
              <img src={iconWorld} />
              <h4>World Class Services Provide For You</h4>
            </div>
            <div>
              <img src={iconMusic} />
              <h4>24/7 Strong Customer Support</h4>
            </div>
            
          </div>

        </section>

        <section className="choose-dest">
            <div className="choose-dest__top">
                <img src={chooseQ} alt='#' />
                <h2 className="choose-dest__title">Choose Your Destination</h2>
                <img src={chooseC} alt='#' />
            </div>
            <div className="choose-dest__wrapper">
                {topDestinations()}
                {newDestinations.map((item, index) => {
                    let cartData = localStorage.getItem('cartData');
                    cartData = JSON.parse(cartData);
        
                    if (!cartData || cartData.length === 0) cartData = [];
        
                    let a = null;
                    a = cartData.find(i => i.id === item.id);
        
                    return (
                        <li key={index} className='choose-dest__dest'>
                            <img src={item.picture} alt="#" className="choose-dest__picture"/>
                            <div className="choose-dest__description">
                                <h3 className="choose-dest__country">{item.country}, {item.hotel}</h3>
                                <div className="choose-dest__price-btn">
                                    <span className="choose-dest__price">{item.price}$</span><br />
                                    {!a ? <button className="choose-dest__btn-add" onClick={() => addDest(item)}>+</button> : ''}
                                </div>
                            </div>

                        </li>
                        )
                })}
            </div>
            <Link className="choose-dest__btn-link" to='/destination'>
                <button className="choose-dest__viewAll">View All Places</button>
            </Link>
                
        </section>
        <section className="apps">
            <div className="apps__left-part">
                <h3 className="apps__title">Download Now Travel Community Apps</h3>
                <div className="apps__links">
                    <a href='https://play.google.com/store'>
                        <img src={googlePlay} alt='#' />
                    </a>
                    <a href='https://www.apple.com/ru/app-store/'>
                        <img src={appleStore} alt='#' />
                    </a>
                </div>
            </div>
            <div className="apps__right-part">
                <img className="apps__right-part_img" src={appsImage} alt='#' />
            </div>
        </section>
      </>
    );
  }
  
  export default Main;
