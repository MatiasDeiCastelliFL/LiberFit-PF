import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Cards from "./components/Atoms/Card/Card";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
