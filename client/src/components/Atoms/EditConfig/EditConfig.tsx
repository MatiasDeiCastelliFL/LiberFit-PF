import React, {useState, useRef, useEffect } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Cookies from "universal-cookie";
import { useStateManager } from "react-select";
import { editUser } from "../../../App/Action/Action";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";



interface Props {
    field: string;
    type: string;
    title: string;
    info: any;
}

const EditConfig = ({field,type, title, info}:Props) => {

    const dispatch = useAppDispatch()
    const cookies = new Cookies()
    
    const [disable, setDisable] = useState(true);
    
    const inputRef = useRef<HTMLInputElement>(null);
    
    const { data } = useAppSelector((state) => state);
    const { user } = data

    const [value, setValue] = useState();

    
    const handleEdit = () => {
        if (disable===true) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    const handleChage = (e:any) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setDisable(true)
        dispatch(
            editUser(
                {
                    ...user,
                    [field]: value
                }
            )
        )
        alert("Your changes have been saved")
    }



    useEffect(() => {
    }, [user, value])

    return (
        <div className="flex justify-between w-full p-4">
            <div>
                <h1 className="text-xl">{title}</h1>
                <form onSubmit={handleSubmit} className='text-md flex gap-2'>
                    {
                        disable ? <p className="text-white bg-transparent h-full" >{user[field]}</p> 
                        : 
                        <div className = "flex gap-3">
                            <input ref={inputRef} autoFocus placeholder={`Ingresa tu nuevo ${title}`}  onChange={handleChage}  type={type} className="text-white w-fit bg-transparent h-full" value={value}/>
                            <input type="submit" name="confirmat" id={title} value="Confirmar" className="bg-redClare px-2 rounded-lg" />
                        </div>  
                    }
                </form>
            </div>
            <button className="bg-transparent" onClick={handleEdit}>
                <PencilSquareIcon className="h-8 w-8 text-white hover:text-redClare"/>
            </button>
        </div>
    );
}

export default EditConfig;