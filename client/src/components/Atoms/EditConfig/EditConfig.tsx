import React, {useState, useRef, useEffect } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Cookies from "universal-cookie";
import { editUser, getUserInfo } from "../../../App/Action/Action";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";
import toast, { Toaster } from 'react-hot-toast';




interface Props {
    field: any | string;
    type: string;
    title: string;
}

const EditConfig = ({field,type, title}:Props) => {

    const dispatch = useAppDispatch()
    const cookies = new Cookies()
    
    const [disable, setDisable] = useState(true);
    
    const [error, setError] = useState(false);
    
    const { data } = useAppSelector((state) => state);

    const [value, setValue] = useState(data.user[field]);

    let RegExpresions : any = {
    }

    RegExpresions = {
        name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
        email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        phone: /^\d{7,14}$/,
    };
    

    const handleEdit = () => {
        if (disable===true) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    const handleChage = (e:any) => {
        setError(false)
        setValue(e.target.value)
    }

    const onSubmit = (e:any) => {
        e.preventDefault()
        console.log(RegExpresions[field])
        if (RegExpresions[field].test(value)) {
            setError(false)
            setDisable(true)
            dispatch(
                editUser(
                    {
                        ...data.user,
                        [field]: value,
                        token: data.user.token
                    }
                )
            )
            toast.success(`Se ha actualizado el campo ${title} correctamente`, {
                duration: 6000,
                position: 'top-center',
            })
            setTimeout(() => {
                dispatch(getUserInfo(cookies.get("id")))
            }, 500);
        } else {
            setError(true)
        }
    }



    useEffect(() => {
    }, [data.user, value, data])

    useEffect(() => {
        //dispatch(getUserInfo(cookies.get("id")))
    }, [])

    return (
        <div className="flex justify-between w-full p-4">
            <div>
                <h1 className="text-xl font-extrabold">{title}</h1>
                <form onSubmit={onSubmit} className='text-md flex gap-2'>
                    {
                        disable ? <p className=" text-neutral-500 bg-transparent h-full" >{data.user[field]}</p> 
                        : 
                        <div className="flex flex-col">
                            <div className = "flex gap-3">
                                <input  autoFocus 
                                        placeholder={`Ingresa tu nuevo ${title}`}  
                                        onChange={handleChage}  
                                        type={type} 
                                        className=" text-neutral-500 w-fit bg-transparent h-full" 
                                        value={value}/>
                                <input type="submit" name="confirmat" id={title} value="Confirmar" className="bg-redClare px-2 rounded-lg" />
                            </div>  
                            {
                                error ? <p className="text-red-500">El formato no es correcto</p> : null
                            }
                        </div>
                    }
                </form>
            </div>
            <button className="bg-transparent" onClick={handleEdit}>
                <PencilSquareIcon className="h-8 w-8  text-neutral-900 hover:text-redClare"/>
            </button>
        </div>
    );
}

export default EditConfig;