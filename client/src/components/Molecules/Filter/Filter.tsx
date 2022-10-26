import React from "react";
import Content from "../../Atoms/Filters/Content";
import Item from "../../Atoms/Filters/Item";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";

function Filter() {
  const [isShowing, setIsShowing] = React.useState(false);
  return (
    <div className="space-y-4 select-none w-max">
      <details className="group">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
          <Item />
          <ChevronDownIcon className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" />
        </summary>
        <Content />
      </details>
    </div>
  );
}

export default Filter;
