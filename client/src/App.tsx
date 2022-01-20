import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SchoolManager from './components/SchoolManager';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/school' element={<SchoolManager/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
