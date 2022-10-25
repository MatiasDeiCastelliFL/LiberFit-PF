import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landing, Home } from "./page/Index";
import CardsCategory from "./components/Molecules/CardCategory/CardsCategory";
import Nav from "./components/Molecules/nav/Nav";
import CardsContent from "./components/Molecules/CardsContent/CardsContent";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/:category" element={<CardsCategory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
