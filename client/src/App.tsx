import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./page/Index";
import CardsContent from "./components/Molecules/CardsContent/CardsContent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cards/*" element={<CardsContent />} />
      </Routes>
    </div>
  );
}

export default App;
