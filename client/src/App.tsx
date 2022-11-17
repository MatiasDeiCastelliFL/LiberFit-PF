import React, {useEffect} from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landing, Home, Dashboard, UserConfig, SingUp, Details, CardsCategory, LoginForm, PaymentComplet , PaymentCancel, About} from "./page/Index";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "universal-cookie";
import Payments from "./components/Organisms/DashboardSections/Cliente/Content/Payments";
import { loginGoogle } from "./App/Action/Action";
import { useAppDispatch } from "./App/Hooks/Hooks";
import jwt_decode from "jwt-decode";
import Constrase from "./components/Molecules/Contrase/Contrase";

function App() {
    const cookies = new Cookies();
    const { user } = useAuth0();
    const dispatch = useAppDispatch();

    const [rol, setRol] = React.useState("");
    
    const loginGoog = (user:any) => {
        if(user) {
            dispatch(loginGoogle({
                email: user?.email,
                password: user?.nickname,
                picture: user?.picture,
                name: user?.name
            }))
            .then(response => {
                return response?.data.token
                // console.log("-->",response?.data)
              })
              .then(response => {
                console.log(response)
                var respuesta = response
                var decode:any = jwt_decode(respuesta)
          
                // console.log("<--->",decode.user.email)
          
                cookies.set("id", decode.user.id,{path: "/"})
                cookies.set("email", decode.user.email,{path: "/"})
                cookies.set("name", decode.user.name,{path: "/"})
                cookies.set("phone", decode.user.phone,{path: "/"})
                cookies.set("image", decode.user.image,{path: "/"})
                cookies.set("RolId", decode.user.RolId,{path: "/"})
                setRol(cookies.get("RolId"));
                cookies.set("loginWith","auth0",{path:"/"})
                cookies.set("token",respuesta,{path:"/"})
                
                
                
                // alert(`Bienvenido ${decode.user.email}`)
                // window.location.href="./home"
                // logout()
            });
        }
    };
    useEffect(() => {
        setTimeout(() => {
            loginGoog(user)
        }, 3000);
        loginGoog(user);
    }, [user]);
    
    useEffect(() => {
        if (cookies.get("RolId")) {
            setRol(cookies.get("RolId"));
        }

        console.log('rol',rol);
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route path="/paymentComplet" element={<PaymentComplet />} />
                <Route path="/paymentCancel" element={<PaymentCancel />} />
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
                <Route path="/about" element={<About/>}/>
                {cookies.get("name") || user?.name ? <Route path="/login" element={<LoginForm />} /> : (
                    <Route path="/login" element={<LoginForm />} />
                )}
                {cookies.get("name") || user?.name ? <Route path="/signup" element={<SingUp />} /> : (
                    <Route path="/signup" element={<SingUp />} />
                )}
                <Route path="/recuperacion" element={<Constrase />} />
                <Route path="/payments" element={<Payments/>}></Route>
                {cookies.get("name") || user?.name ? (
                    <Route path="/dashboard" element={<Dashboard />}>
                        {rol === "3" && (
                            <Route path="/dashboard/:cliente">
                                <Route path="/dashboard/:cliente/:item" />
                                <Route path="/dashboard/:cliente/:item/:ejercicio"/>
                            </Route>
                        )}
                        {cookies.get("RolId") === "1" && (
                            <Route path="/dashboard/admin">
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

