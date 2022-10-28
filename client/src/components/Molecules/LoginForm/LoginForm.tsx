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

interface Inp {
  username: string;
  password: string;
}
const LoginForm = () => {
  const [input, setInput] = useState<Inp>({
    username: "",
    password: "",
  });
  console.log(input);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-full h-full bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(https://fondosmil.com/fondo/4046.jpg)" }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white opacity-90 rounded-2xl  shadow-2xl flex w-2/3 max-w-4xl">
            {/* Sign in */}
            <div className="w-3/5 p-5">
              <div className="text-left font-bold">
                <span className="text-green-500 text-2xl px-2">Liberfit</span>
                Gym
              </div>
              <div className="py-4">
                <h2 className="text-3xl font-bold text-green-500">
                  Sing in to Account
                </h2>
                <div className="border-2 w-14 border-green-500 inline-block mb-2"></div>
              </div>
              <div className="flex justify-center my-2">
                <div className="border-2 w-min border-green-200 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm" />
                </div>
                <div className="border-2 w-min border-green-200 rounded-full p-3 mx-1">
                  <FaLinkedinIn className="text-sm" />
                </div>
                <div className="border-2 w-min border-green-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm" />
                </div>
              </div>
              <p className="text-green-800 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className=" bg-redGray w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="m-2" />
                  <input
                    onChange={handleChange}
                    value={input.username}
                    type="username"
                    name="username"
                    placeholder="username.."
                    className="bg-redGray outline-none text-sm flex-1 "
                  />
                </div>
                <div className=" bg-redGray w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="m-2" />
                  <input
                    onChange={handleChange}
                    value={input.password}
                    type="password"
                    name="password"
                    placeholder="password.."
                    className="bg-redGray outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />{" "}
                    Remember me
                  </label>
                  <Link to="" className="text-xs">
                    Forgot Password?
                  </Link>
                </div>
                <Link
                  to=""
                  className="border-2 border-green-500 rounded-full px-10 py-2 inline-block font-semibold 
                        hover:bg-green-600 hover:text-white"
                >
                  Sing Up
                </Link>
              </div>
            </div>
            {/* Sing un */}
            <div className="w-2/5 bg-redClare text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
              <div className="border-2 w-10 border-whithe inline-block mb-2"></div>
              <p className="mb-2">
                Empieza Tu nueva Rutina y cambia tu vida...
              </p>
              <Link
                to=""
                className="border-2 border-white rounded-full px-10 py-2 inline-block font-semibold 
                        hover:bg-white hover:text-green-600"
              >
                Sing Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
