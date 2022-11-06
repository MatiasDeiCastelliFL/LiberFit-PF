import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks"
import { getPayment } from "../../../App/Action/Action"
export default function Payments() {

    const dispatch = useAppDispatch()
    const getPay = useAppSelector(state => state.payment)

    useEffect(() => {
        dispatch(getPayment())
    }, [])
    
  return (
    <div>Payments</div>
  )
}
