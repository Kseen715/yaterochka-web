import './App.css';
import './Header.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React from 'react';

import Home from "./Home";
import Places from "./Places";
import Workers from "./Workers";
import Groups from "./Groups";
import Goods from "./Goods";
import History from "./History";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/goods" element={<Goods />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

