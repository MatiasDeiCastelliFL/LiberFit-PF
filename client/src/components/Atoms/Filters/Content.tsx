import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Content() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const params = useParams()
  const {category} = useParams()
  return (
    <div className="flex">

    </div>
  );
}

export default Content;
