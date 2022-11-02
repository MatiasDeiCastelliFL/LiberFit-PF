import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landing, Home } from "./page/Index";
import CardsCategory from "./components/Molecules/CardCategory/CardsCategory";
import Details from "./components/Organisms/Details/Details";
import LoginForm from "./components/Molecules/LoginForm/LoginForm";
import SingUp from "./components/Molecules/LoginSignup/LoginSignup";
import Dashboard from "./page/Dashboard/Dashboard";
// import Dcliente from "./page/Dashboard/Dcliente";
import DAdmin from "./page/Dashboard/DAdmin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={<Home />}
          handle={{
            crumb: (data: {
              threadName:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => <span>{data.threadName}</span>,
          }}
        >
          <Route path="/home/:category" element={<CardsCategory />} />
          <Route path="/home/:category/:name" element={<Details />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/dashboard" element={<Dashboard/>}>
          {/* <Route path='/dashboard/:cliente' element={<Dcliente/>}/> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
