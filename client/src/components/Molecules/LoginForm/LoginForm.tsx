import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnLogin from "../../Atoms/Inputs/BtnLogin/BtnLogin";
// import {} from "@heroicons/react/24/outline"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { loginAction } from "../../../App/Action/Action"
import { useAppDispatch } from "../../../App/Hooks/Hooks"
import Cookies from "universal-cookie"

interface Inp {
  email: string;
  password: string;
}
const cookies = new Cookies()

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inp>();

  const dispatch = useAppDispatch()

 /* console.log(cookies.get("id"))
  console.log(cookies.get("name"))
  console.log(cookies.get("email")) */

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    dispatch(loginAction(data))
    .then(response => {
      return response?.data.data
      // console.log("-->",response?.data.data)
    })
    .then(response => {
      var respuesta = response
      cookies.set("id", respuesta.id,{path: "/"})
      cookies.set("email", respuesta.email,{path: "/"})
      cookies.set("name", respuesta.name,{path: "/"})
      cookies.set("phone", respuesta.phone,{path: "/"})
      cookies.set("image", respuesta.image,{path: "/"})
      alert(`Bienvenido ${respuesta.name}`)
      // console.log("asdasd-->",respuesta.name)
      window.location.href="./home"
    })
    .catch(error => {
      console.log(error)
    })
  });

  return (
    <div
      className="w-full h-full bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(https://fondosmil.com/fondo/4046.jpg)" }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white opacity-95 rounded-2xl  shadow-2xl flex w-2/3 max-w-4xl">
            {/* Sign in */}
            <div className="w-3/5 p-5">
              <div className="text-left font-bold">
                <span className="text-red-400 text-2xl px-2">Liberfit</span>
                Gym
              </div>
              <div className="py-4">
                <h2 className="text-3xl font-bold text-redClare">
                  Iniciar sesión
                </h2>
                <div className="border-2 w-14 border-redClare inline-block mb-2"></div>
              </div>
              <div className="flex justify-center my-2">
                <div className="border-2 w-min border-red-300 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm" />
                </div>
                <div className="border-2 w-min border-red-300 rounded-full p-3 mx-1">
                  <FaLinkedinIn className="text-sm" />
                </div>
                <div className="border-2 w-min border-red-300 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm" />
                </div>
              </div>
              <p className=" text-red-800 my-3">o usa tu cuenta de correo</p>
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
                  <MdLockOutline className="m-2" />
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      maxLength: 10,
                      pattern: /^[a-zA-Z0-9\_\-]+$/i,
                    })}
                    placeholder="password.."
                    className="bg-redGray outline-none text-sm flex-1"
                  />
                </div>
                <div className="text-red-600 text-sm mt-2">
                  {errors.password?.type === "required" && (
                    <p>tu password es requerido</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p>tu password debe tener menos de 10 caracteres</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p>tu password no puede tener espacio</p>
                  )}
                </div>
                  <Link to="" className="text-xs p-2">
                    ¿Se te olvido tu contraseña?
                  </Link>
                <div className="flex">
                  <input
                    type="submit"
                    value="Iniciar"
                    className="border-2 border-red-400 rounded-full px-8 py-2 inline-block font-semibold 
                  hover:bg-red-400 hover:text-white"
                  />
                  <Link
                    to="/signup"
                    className="border-2 border-white rounded-full px-8 py-2 inline-block font-semibold 
                hover:bg-white hover:text-red-400"
                  >
                    Inscribirse
                  </Link>
                </div>
              </form>
            </div>

            {/* Sing un */}
            <div className="w-2/5 bg-redClare text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">Hola amigo Gym!</h2>
              <div className="border-2 w-10 border-whithe inline-block mb-2"></div>
              <p className="mb-2">
                Empieza Tu nueva Rutina y cambia tu vida...❤
              </p>

              <Link
                to="/home"
                className="border-2 border-white rounded-full px-10 py-2 m-2 inline-block font-semibold 
                        hover:bg-white hover:text-red-600"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
