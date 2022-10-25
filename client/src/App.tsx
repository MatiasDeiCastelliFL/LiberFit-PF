import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landing, Home } from "./page/Index";
import CardsCategory from "./components/Molecules/CardCategory/CardsCategory";
import Nav from "./components/Molecules/nav/Nav";
import CardsContent from "./components/Molecules/CardsContent/CardsContent";
import About from "./components/Atoms/About/About"
import Login from "./components/Atoms/Login/Login"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/:category" element={<CardsCategory />} />
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
