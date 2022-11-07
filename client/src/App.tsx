import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landing, Home } from "./page/Index";
import CardsCategory from "./components/Molecules/CardCategory/CardsCategory";
import Details from "./components/Organisms/Details/Details";
import LoginForm from "./components/Molecules/LoginForm/LoginForm";
import SingUp from "./components/Molecules/LoginSignup/LoginSignup";
import Dashboard from "./page/Dashboard/Dashboard";
import UserConfig from "./components/Organisms/UserConfig/UserConfig";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "universal-cookie";
alert(import.meta.env.VITE_API)
function App() {
    const cookies = new Cookies();
    const { user } = useAuth0();

    
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
                {cookies.get("name") || user?.name ? null : (
                    <Route path="/login" element={<LoginForm />} />
                )}
                {cookies.get("name") || user?.name ? null : (
                    <Route path="/signup" element={<SingUp />} />
                )}
                {cookies.get("name") || user?.name ? (
                    <Route path="/dashboard" element={<Dashboard />}>
                        {cookies.get("RolId") === "3" && (
                            <Route path="/dashboard/:cliente">
                                <Route path="/dashboard/:cliente/:item" />
                                <Route path="/dashboard/:cliente/:item/:ejercicio" />
                            </Route>
                        )}
                        {cookies.get("RolId") === "1" && (
                            <Route path="/dashboard/admin/:category">
                                <Route path="/dashboard/admin/:category" />
                                <Route path="/dashboard/admin/:category/:item" />
                            </Route>
                        )}
                    </Route>
                ) : null}
                {cookies.get("name") || user?.name ? (
                    <Route path="/UserConfig" element={<UserConfig />} />
                ) : null}
            </Routes>
        </div>
    );
}

export default App;
