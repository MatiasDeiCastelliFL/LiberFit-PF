import React, { useEffect, useState } from 'react';
import { getClients } from '../../../App/Action/Action';
import { useAppSelector, useAppDispatch } from '../../../App/Hooks/Hooks';

interface Props {
  dashboard: boolean;
}




function GlobalTable({ dashboard }: Props) {

  const { data } = useAppSelector((state) => state);

  const [sortOrder, setSortOrder] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getClients())  
  }, [])

  console.log(data.clients)

  return (
    <div>
    </div>
  )
}

export default GlobalTable;