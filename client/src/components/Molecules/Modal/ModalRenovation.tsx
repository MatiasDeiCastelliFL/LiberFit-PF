import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Input from "./../../Atoms/Inputs/Modal/Input";
import Select from "../../Atoms/Inputs/Modal/Select";
import { useAppDispatch, useAppSelector } from "./../../../App/Hooks/Hooks";
import { openModal } from "../../../App/Action/Action";
import { useForm } from "react-hook-form";
import Content from "../../Atoms/ModalItems/Content";
import Bronze from "../../../assets/IMG/bronze.svg";
import Silver from "../../../assets/IMG/silver.svg";
import Gold from "../../../assets/IMG/gold.svg";
import {postPaymentPaypal} from "../../../App/Action/Action";

interface Props {
    active: boolean;
}

function Modal() {
    const dispatch = useAppDispatch();
    const { modal } = useAppSelector((state) => state);
    const { subscriptions }  = useAppSelector((state) => state.data);
    const { user } = useAppSelector((state) => state.data);
    const { paymentState } = useAppSelector((state) => state.payment);
    const [old_LastDate, setOld_LastDate] = useState(new Date());

    

    const initialState = {
        documento: "",
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        ciudad: "",
        codigoPostal: "",
    };

    const memoryData: any[] = [];

    const [next, setNext] = useState(false);

    const [input, setInput] = useState(initialState);

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();


    let handleOnChange = (e: any) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    let continueForm = () => {
        memoryData.push(input);
        setNext(true);
    };

    const closeModal = () => {
        dispatch(openModal(false));
        memoryData.splice(0, 6);
        setNext(false);
    };

    const onSubmit = (data: any) => {
    };


    const pay = (e: any) => {
        e.preventDefault();
        try {
            const payload = {
                amount : subscriptions[e.target.value].price,
                description: subscriptions[e.target.value].description,
                ClientId: user.id,
                subscriptionId: subscriptions[e.target.value].id,
                old_LastDate: old_LastDate,
                token: user.token,
            }
            dispatch(postPaymentPaypal(payload));
        } catch (error) {
            console.log(error);
            alert("Error al iniciar pasarela de pagos intentelo de nuevo");
        }
        dispatch(openModal(false));
    }

    useEffect(() => {
        if (paymentState){
            const lastPayment:any = paymentState[paymentState.length - 1];
            if (lastPayment){
                setOld_LastDate(new Date(lastPayment.fechaFinalizacion));
            }
        }
    }, [])


    return (
        <>
            {modal.open ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-custom_6 bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-extrabold text-gray-600">
                                        Selecciona tu plan
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={closeModal}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-4 flex gap-4 flex-col w-max">
                                    {
                                        subscriptions.map((item:any, index:any) => (
                                            index !== 0 ? (
                                        
                                                <button onClick={pay} value={index} className={`w-ful flex justify-between text-gray-100 font-semibold p-3 rounded-xl ${(item.name === 'Oro')? ' bg-yellow_custom': (item.name=== 'Plata')? 'bg-blue_custom': 'bg-red_custom'} hover:cursor-pointer scale-95 hover:scale-100 transition-all ease-in-out`}>
                                                    <div className="flex flex-col">
                                                        <img src={(item.name === 'Oro')?Gold:(item.name==='Plata')?Silver:Bronze} alt="logoPlan" className="h-10 w-10"/>
                                                        <span className="text-sm">{item.name}</span>
                                                    </div>
                                                    <div className="flex flex-col justify-end items-end">
                                                        <p>{item.description}</p>
                                                        <p>$ {item.price}</p>
                                                    </div>
                                                </button>

                                            ) : null
                                        ))
                                    }
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={closeModal}
                                    >
                                        Cerrar
                                    </button>
                                    {!next ? (
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={continueForm}
                                        >
                                            Finalizar
                                        </button>
                                    ) : (
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={closeModal}
                                        >
                                            Pagar
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default Modal;