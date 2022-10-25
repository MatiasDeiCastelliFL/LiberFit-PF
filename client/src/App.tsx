import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CardsContent from "./components/Molecules/CardsContent/CardsContent";
import { Landing,Home } from "./page/Index";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cards/*" element={<CardsContent />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
