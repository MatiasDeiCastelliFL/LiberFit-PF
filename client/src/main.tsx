import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./App/Store";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios";
axios.defaults.baseURL =
    import.meta.env.VITE_API || import.meta.env.VITE_LOCAL_HOST;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-v43r6x15y7ej413r.us.auth0.com"
            clientId="4uHsBsu5Uz9t7ixWsg37y1VggiEbiu8r"
            redirectUri={window.location.origin}
        >
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </Auth0Provider>
    </React.StrictMode>
);
