import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../../../../App/Hooks/Hooks"
import { useMemo } from "react";
import { useTable } from "react-table";
import Table from '../../../../Molecules/DashboardTables/UsersTable';
import Cookies from 'universal-cookie';
import { getPaymentInfo } from "../../../../../App/Action/FilterActions";

const Payments = () => {

  const dispatch = useAppDispatch();
  const cookies = new Cookies();
  const { paymentState } = useAppSelector((state) => state.payment);


  useEffect(() => {
    dispatch(getPaymentInfo(cookies.get("id"), cookies.get("token")));
    
  }, []);

  useEffect(() => {
    console.log("paymentState", paymentState);
  }, [paymentState]);

  return(
    <div className="w-tables overflow-hidden ">
      {
        paymentState.length ? (
          <div>
              {
                paymentState.map((item: any) => {
                  return <p>{item.name}</p>
                })
              }
          </div>
        ) : (
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <h1>No hay pagos</h1>
          </div>
        )
      }
    </div>
  )
}

export default Payments