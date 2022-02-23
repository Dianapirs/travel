import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/Pages/Pages';

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Main />

      </BrowserRouter>


  );
}

export default App;
