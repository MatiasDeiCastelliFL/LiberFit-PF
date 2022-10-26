import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landing, Home } from "./page/Index";
import CardsCategory from "./components/Molecules/CardCategory/CardsCategory";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route 
          path="/home" 
          element={<Home />}
          handle = {{
            crumb: (data: { threadName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => <span>{data.threadName}</span>,
          }}
        
        >
          <Route path="/home/:category" element={<CardsCategory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
