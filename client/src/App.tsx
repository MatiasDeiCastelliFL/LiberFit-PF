import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./page/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
