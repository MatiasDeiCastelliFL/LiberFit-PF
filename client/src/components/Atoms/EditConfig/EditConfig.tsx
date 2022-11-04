import React, {useState, useRef, useEffect } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Cookies from "universal-cookie";
import { useStateManager } from "react-select";
import { editUser } from "../../../App/Action/Action";
import { useAppDispatch } from "../../../App/Hooks/Hooks";

interface Props {
    name: string;
    type: string;
}

const EditConfig = ({name,type}:Props) => {

    const dispatch = useAppDispatch()
    const [disable, setDisable] = useState(true);
    const cookies = new Cookies()
    const [value, setValue] = useState(cookies.get(name));
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEdit = () => {
        if (disable===true) {
            setDisable(false)
        } else {
            inputRef.current?.focus()
            setDisable(true)
        }
    }

    const handleChage = (e:any) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(value)
        dispatch(
            editUser({
                name: name,
                phone: cookies.get("phone"), 
                email: cookies.get("email"), 
                password: cookies.get("password"), 
                image: cookies.get("image"),
            })
        )
    }

    useEffect(() => {
        console.log('focused: ', document.activeElement)
    }, [disable, document.activeElement])

    return (
        <div className="flex justify-between w-full p-4">
            <div>
                <h1 className="text-xl font-black font-sans">Nombre</h1>
                <form onSubmit={handleSubmit}>
                    <input ref={inputRef}  onChange={handleChage}  type={type} className="text-white bg-transparent text-lg h-full" value={value} disabled={!disable}/>
                </form>
            </div>
            <button className="bg-transparent" onClick={handleEdit}>
                <PencilSquareIcon className="h-8 w-8 text-white"/>
            </button>
        </div>
    );
}

export default EditConfig;