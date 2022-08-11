import React from "react";

import { BsXCircle } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";

const ProductItem = ({ name, price }) => {
  return (
    <li className="w-full h-14 bg-blueItem opacity-90 flex justify-between items-center pl-5 rounded-sm border-b-2">
      <p className="text-yellow-50 text-2xl font-semibold">
        {name + "  "} ${price}
      </p>
      <div className="w-3/12 h-full mr-2 flex flex-row justify-around items-center">
        <BsXCircle className="text-yellow-50 text-2xl mr-1 font-medium" />
        <BsGearFill className="text-yellow-50 text-2xl font-medium" />
      </div>
    </li>
  );
};

export { ProductItem };
