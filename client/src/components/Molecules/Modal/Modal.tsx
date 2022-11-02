import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Input from "./../../Atoms/Inputs/Modal/Input";
import Select from "../../Atoms/Inputs/Modal/Select";
import { useAppDispatch, useAppSelector } from "./../../../App/Hooks/Hooks";
import { openModal } from "../../../App/Action/Action";
import { useForm } from "react-hook-form";
import Content from "../../Atoms/ModalItems/Content";

interface Props {
    active: boolean;
}

function Modal() {
    const dispatch = useAppDispatch();
    const { modal } = useAppSelector((state) => state);

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

    const inputs = [
        {
            ph: "Documento",
            type: "number",
            span: "#",
            value: input.documento,
            name: "documento",
        },
        {
            ph: "Nombre",
            type: "Text",
            span: "",
            value: input.nombre,
            name: "nombre",
            ref: "El nombre es requerido",
        },
        {
            ph: "Apellido",
            type: "Text",
            span: "",
            value: input.apellido,
            name: "apellido",
            ref: "El apellido es requerido",
        },
        {
            ph: "Correo",
            type: "Text",
            span: "",
            value: input.correo,
            name: "correo",
            ref: "El correo es requerido",
        },
        {
            ph: "Telefono",
            type: "number",
            span: "+57",
            value: input.telefono,
            name: "telefono",
            ref: "El telefono es requerido",
        },
        {
            ph: "Ciudad",
            type: "Text",
            span: "",
            value: input.ciudad,
            name: "ciudad",
            ref: "La ciudad es requerido",
        },
        {
            ph: "Codigo Postal",
            type: "number",
            span: "",
            value: input.codigoPostal,
            name: "codigoPostal",
            ref: "El codigo postal es requerido",
        },
    ];

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
        console.log(data);
    };


    return (
        <>
            {modal.open ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        PASARELA DE PAGO
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
                                <div className="relative p-6 flex-auto w-max">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {/* {!next ? (
                                            inputs.map((d) => (
                                                <div className="mt-3 mb-3">
                                                    {d.type === "Number" &&
                                                    d.span.length ? (
                                                        <Select
                                                            placeholder={d.ph}
                                                            span={d.span}
                                                            option={""}
                                                        />
                                                    ) : (
                                                        <Input
                                                            type={d.type}
                                                            placeholder={d.ph}
                                                            values={d.value}
                                                            names={d.name}
                                                            onChange={
                                                                handleOnChange
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            ))
                                        ) : (
                                           <Content/>
                                        )} */}
                                        <Content/>
                                    </form>
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
