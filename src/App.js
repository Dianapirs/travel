import Header from './components/Header/Header';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/Pages/Pages';
import Footer from './components/Footer/Footer';



function App() {
  return (

        <BrowserRouter>
    
            <Header />
            <Main />
            <Footer />
          
        </BrowserRouter>

  );
}


export default App;
