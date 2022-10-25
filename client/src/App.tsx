import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Landing,Home } from "./page/Index";

import CardsContainer from "./components/Molecules/CardsContainer/CardsContainer";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/home/:category" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
