import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";

function Content() {
  const solutions = [
    {
      name: "Configuracion",
      description: "Measure actions your users take",
      href: "##",
    },
    {
      name: "Cerrar sesion",
      description: "Create your own targeted content",
      href: "##",
    },
  ];
  return (
    <div>
      <Transition
        show={true}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className=" absolute right-80 z-10 translate-y-pop  w-52 max-w-sm  transform px-4 sm:px-0">
          <div className="relative grid bg-white shadow-md border-t  rounded-lg  gap-8  p-4 lg:grid-rows">
            {solutions.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-m-3 flex items-center rounded-md transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center  text-white sm:h-12 sm:w-12"></div>
                <div className="">
                  <p className="text-sm font-medium  text-gray-900">
                    {item.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default Content;
