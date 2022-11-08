import React, {useState,useEffect} from 'react'
import Payments from "../../Molecules/Payments/Payments";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import EditConfig from "./EditConfig"

interface Props {
    field: string;
    type: string;
    title: string;
    info: any;
}

export const EditMemberdsip = ({field,type, title, info}:Props) => {

    const [editing, setEditing] = useState(false)
    const 
    const handleEdit = () =>{
        setEditing(!editing)
    }
    
    useEffect(() => {
        dispatch(getPayment(id))
    }, [])

    

    return (

        <div className="flex justify-between w-full p-4">
            {   
                editing? <Payments />:
                <EditConfig type="text" field="membership" title="Plan Actual" info={info}/>
            }
        </div>
    );

}

