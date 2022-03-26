import Header from './components/Header/Header';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import Pages from './components/Pages/Pages';
import Destination from './components/Destination/Destination';
import Countries from './components/Countries/Countries';
import React, { useState } from 'react';
import SearchResult from './components/SearchResult/Searchresult';

export const AppContext = React.createContext();

function App() {
  const [searchData, setSearchData] = useState([]);
  const [cart, setCart] = useState([]);
  return (

    <AppContext.Provider value={ {cart, setCart, searchData, setSearchData} }>
      <BrowserRouter>
    
        <Header />
    
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/destination' element={<Destination />}></Route>
          <Route path='/:slug/' element={<Pages />}></Route>
          <Route path='/explore' element={<Countries />}></Route>
          <Route path='/search' element={<SearchResult />}></Route>
          
          {/* <Route path='/destination/:city' element={<DestinationPage />}></Route> */}
        </Routes>
    
        <Footer />
  
      </BrowserRouter>
    </AppContext.Provider>
        

  );
}


export default App;
