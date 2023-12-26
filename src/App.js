import './App.css';
import './Header.css';

import { Routes, Route } from 'react-router-dom'

import React from 'react';

import Home from "./Home";
import Places from "./Places";
import Workers from "./Workers";
import Groups from "./Groups";
import Goods from "./Goods";
import History from "./History";
import ErrPage from "./ErrPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/history" element={<History />} />
        <Route path="/error" element={<ErrPage />} />
      </Routes>
    </div>
  );
}

export default App;

