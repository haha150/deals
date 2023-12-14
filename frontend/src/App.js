import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Deals from './components/deals/Deals';
import Fourohfour from './components/fourohfour/Fourohfour';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Deals />} />
          <Route path='*' exact={true} element={<Fourohfour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
