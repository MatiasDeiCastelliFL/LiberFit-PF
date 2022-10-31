import React, { useState } from "react";
import Content from "../../Atoms/Filters/Content";
import Item from "../../Atoms/Filters/Item";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "./../../../App/Hooks/Hooks";
import { openFilters } from "./../../../App/Action/Action";
import { useLocation } from "react-router-dom";

function Filter() {
  const dispatch = useAppDispatch();
  const location = useLocation()
  const { filter } = useAppSelector((state) => state);

  const open = () => {
    dispatch(openFilters(!filter.open));
  };

  

  return (
    <div className="space-y-4 select-none w-max">
      <details className="group">
        <summary
          className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
          onClick={open}
        >
          <Item />
          <ChevronDownIcon className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" />
        </summary>
        <Transition
          show={filter.open}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Content />
        </Transition>
      </details>
    </div>
  );
}

export default Filter;
