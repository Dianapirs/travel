import Header from './components/Header/Header';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import Pages from './components/Pages/Pages';
import Destination from './components/Destination/Destination';



function App() {
  return (

        <BrowserRouter>
    
            <Header />
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/destination' element={<Destination />}></Route>
              <Route path='/:slug/' element={<Pages />}></Route>
              
              {/* <Route path='/destination/:city' element={<DestinationPage />}></Route> */}
            </Routes>
            <Footer />
          
        </BrowserRouter>

  );
}


export default App;
