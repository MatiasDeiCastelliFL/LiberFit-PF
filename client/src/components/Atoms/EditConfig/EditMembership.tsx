import React, {useState,useEffect} from 'react'
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import EditConfig from "./EditConfig"
import { useAppDispatch, useAppSelector } from '../../../App/Hooks/Hooks';

import { openModal } from '../../../App/Action/Action';

interface Props {
    field: string;
    type: string;
    title: string;
}

export const EditMembership = ({field,type, title}:Props) => {

    const [editing, setEditing] = useState(false)

    const dispatch = useAppDispatch();

    const { user } = useAppSelector((state) => state.data);
    const { subscriptions } = useAppSelector((state) => state.data);
    const { paymentState } = useAppSelector((state) => state.payment);

    const lastPayment:any = paymentState[paymentState.length - 1];
    const [daysLeft, setDaysLeft] = React.useState<any>();
    const [cssPercentage, setCssPercentage] = React.useState<any>();
    const [membership, setMembership] = React.useState(subscriptions[0]);


    useEffect(() => {
        if (lastPayment) {
            setMembership(subscriptions.filter((sub:any) => sub.id === user.SubscriptionId)[0]);
            const today = new Date();
            console.log(today);
            setDaysLeft(Math.floor((new Date(lastPayment.fechaFinalizacion).getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
            const datLeftPercent = Math.floor((daysLeft * 100) / (membership.duration*30));
            setCssPercentage({
                width: `${datLeftPercent}%`
            })
        }

    }, [])


    const handleEdit = () =>{
        setEditing(!editing)
        dispatch(openModal(true));
    }
    

    

    return (

        <div className="flex justify-between w-full p-4">
            <div className='flex flex-col'>
            <h1 className="text-xl font-extrabold">{title}</h1>
                {   

                    <p className='text-lg h-full'>{membership.name}</p>
                    
                }
            </div>
            <button className="bg-transparent" onClick={handleEdit}>
                <PencilSquareIcon className="h-8 w-8  text-neutral-900 hover:text-redClare"/>
            </button>
        </div>
    );

}

export default EditMembership;