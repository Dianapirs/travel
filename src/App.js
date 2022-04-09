import Header from './components/Header/Header';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import Pages from './components/Pages/Pages';
import Destination from './components/Destination/Destination';
import Countries from './components/Countries/Countries';
import React, { useEffect, useState } from 'react';
import SearchResult from './components/SearchResult/Searchresult';
import Cart from './components/Cart/Cart';
import Sidebar from './Sidebar';

export const AppContext = React.createContext();

function App() {

  const [searchData, setSearchData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {

		if (cart.length === 0) {
			let cartData = localStorage.getItem('cartData');
			if (cartData && cartData.length > 0) cartData = JSON.parse(cartData);
			if (cartData && cartData.length > 0) setCart([...cartData]);
		}
	}, [cart]);

  const addDest = (item) => {
    let cartArr = cart;

    let a = null;
    a = cartArr.find(i => i.id === item.id);

    if (!a) cartArr.push(item);
    
    setCart([...cartArr]);
    localStorage.setItem('cartData', JSON.stringify(cart));
    
  }

  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <AppContext.Provider value={ {cart, setCart, searchData, setSearchData, addDest} }>
          <BrowserRouter>
      
            <Header />
        
            <Routes>
              <Route path='/' element={<Main />}></Route>  
              <Route path='/destination' element={<Destination />}></Route>
              <Route path='/:slug/' element={<Pages />}></Route>
              <Route path='/explore' element={<Countries />}></Route>
              <Route path='/search' element={<SearchResult />}></Route>
              <Route path='/myAccount' element={<Cart cart={cart} setCart={setCart} /> }></Route>
              
            </Routes>
        
            <Footer />
      
          </BrowserRouter>
        </AppContext.Provider>
      </div>
      
    </div>
    
        

  );
}

export default App;


