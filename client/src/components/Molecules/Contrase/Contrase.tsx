import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { CambiarContraseña } from "../../../App/Action/Action";
import { useAppDispatch } from "../../../App/Hooks/Hooks";
import Cookies from "universal-cookie";
import Swal from "sweetalert2"

interface Inp {
    email: string;
    password: string;
}
const cookies = new Cookies();

const Constrase = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inp>();

  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  const [pass, setPass] = useState<boolean>(false)

  const onSubmit = handleSubmit((data) => {
    console.log(data); // {email,passwod}
    dispatch(CambiarContraseña(data))
  });

    return (
        <div
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{
                backgroundImage: "url(https://fondosmil.com/fondo/4046.jpg)",
            }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <div className="bg-white opacity-95 rounded-2xl  shadow-2xl flex w-2/3 max-w-4xl">
                        {/* Sign in */}
                        <div className="w-3/5 p-5">
                            <div className="text-left font-bold">
                                <span className="text-red-400 text-2xl px-2">
                                    Liberfit
                                </span>
                                Gym
                            </div>
                            <div className="py-4 mt-4 mb-4">
                                <h2 className="text-3xl font-bold text-redClare">
                                    Recuperacion de contraseña
                                </h2>
                                <div className="border-2 w-14 border-redClare inline-block mb-2"></div>
                            </div>
                            <div className="flex justify-center my-2">
              </div>
              <form onSubmit={onSubmit} className="flex flex-col items-center">
                <div className=" bg-redGray w-64 p-2 flex items-center mt-3">
                  <FaRegEnvelope className="m-2" />
                  <input
                    type="text"
                    {...register("email", {
                      required: true,
                      pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                    })}
                    placeholder="email.."
                    className="bg-redGray outline-none text-sm flex-1 "
                  />
                </div>
                <div className="text-red-500 text-sm mt-2">
                  {errors.email?.type === "required" && (
                    <p>tu email es requerido</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p>tu emeil esta incompleto</p>
                  )}
                </div>
                <div className=" bg-redGray w-64 p-2 flex items-center mt-3">
                  <FaRegEnvelope className="m-2" />
                  <input
                    type="text"
                    {...register("email", {
                      required: true,
                      pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                    })}
                    placeholder="email.."
                    className="bg-redGray outline-none text-sm flex-1 "
                  />
                </div>
                <div className="text-red-500 text-sm mt-2">
                  {errors.email?.type === "required" && (
                    <p>tu email es requerido</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p>tu emeil esta incompleto</p>
                  )}
                </div>
                <div className="flex mt-4">
                  <input
                    type="submit"
                    value="Enviar"
                    className="border-2 border-red-400 rounded-full px-8 py-2 inline-block font-semibold 
                  hover:bg-red-400 hover:text-white"
                                    />
                                    
                                </div>
                            </form>
                        </div>

                        {/* Sing un */}
                        <div className="w-2/5 bg-redClare text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                            <h2 className="text-3xl font-bold mb-2">
                                Hola amigo Gym!
                            </h2>
                            <div className="border-2 w-10 border-whithe inline-block mb-2"></div>
                            <p className="mb-2">
                                Empieza Tu nueva Rutina y cambia tu vida...❤
                            </p>

                            <Link
                                to="/login"
                                className="border-2 border-white rounded-full px-10 py-2 m-2 inline-block font-semibold 
                        hover:bg-white hover:text-red-600"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Constrase;