import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SchoolManager from './components/SchoolManager';
import ClassManager from './components/ClassManager';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/school' element={<SchoolManager/>}/>
      <Route path='/class' element={<ClassManager/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
