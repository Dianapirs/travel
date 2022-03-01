import React from "react";
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





function Main() {

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

    return (
    <>
        <main className='main-page'>
            <div className='main-page__titleBlock'>
                <h1 className='main-page__title'>It’s Time To<br /> Explore The World</h1>
            </div>
            <button className='main-page__btn-plan'>Plan Your Trip</button>
            
        </main>
        <form className='main-page__search'>
            <div className='main-page__country'>
                <h3>Destinations</h3>
                <select className='main-page__choice'>
                    <option>First country</option>
                </select>
            </div>
            <div className='main-page__search_data'>
                <h3>Check in</h3>
                <input className='main-page__choice' type='date' />
            </div>
            <div className='main-page__search_price'>
                <h3>Max Price($)</h3>
                <input placeholder='100' className='main-page__choice' type='number' min='100' />
            </div>
            <button className='main-page__search_btn-discover'>Discover Now</button>
        </form>
        <section className='blocks'>

                <div className='blocks__choose'>
                    <img  src={map} />
                    <h4 className='blocks__title'>Choose Destination</h4>
                    <p className='blocks__desc'>Have a look and happy travels!</p>
                </div>


                <div className='blocks__explore'>
                    <img  src={binocular} />
                    <h4 className='blocks__title'>Explore The Place</h4>
                    <p className='blocks__desc'>To travel is to explore and experience new places, people and things</p>
                </div>


                <div className='blocks__start'>
                    <img  src={backpack} />
                    <h4 className='blocks__title'>Start Your Journey</h4>
                    <p className='blocks__desc'>Are you ready to start your journey?</p>
                </div>


                <div className='blocks__enjoy'>
                    <img  src={ukelele} />
                    <h4 className='blocks__title'>Let’s Enjoy</h4>
                    <p className='blocks__desc'>Enjoy the journey and see where it takes you.</p>
                </div>

        </section>
        <section className="top">
            <div className="top__inf">
                <h2 className="top__inf_title">Top <span>Destinations</span> In The World</h2>
                <p className="top__inf_desc">It is a long established fact that a reader will be the distracted by the readable content of a page when looking at its layout from it.</p>
                <button className="top__inf_btn">Discover more</button>
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
                    return (
                        <li key={index} className='choose-dest__dest'>
                            <img src={item.picture} alt="#" className="choose-dest__picture"/>
                            <div className="choose-dest__description">
                                <h3 className="choose-dest__country">{item.country}, {item.hotel}</h3>
                                <div className="choose-dest__price-btn">
                                    <span className="choose-dest__price">{item.price}$</span><br />
                                    <button className="choose-dest__btn-add">+</button>
                                </div>
                            </div>

                        </li>
                        )
                })}
            </div>
            <button className="choose-dest__viewAll">View All Places</button>
                
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
