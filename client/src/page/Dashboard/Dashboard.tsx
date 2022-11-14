import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../App/Hooks/Hooks";
import DashboardTemplate from '../../components/Templates/DashboardTemplate/DashboardTemplate'
import { getLocations } from "./../../App/Action/Action";
import {getPaymentInfo} from "../../App/Action/FilterActions"
function Dashboard() {

  const dispatch = useAppDispatch()

  const { user } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(getLocations())
    dispatch(getPaymentInfo(user.id, user.token));
  }, [])

  return (
    <DashboardTemplate/>
  )
}

export default Dashboard;
