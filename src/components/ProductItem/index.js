import React from 'react'

import { BsX } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";

const ProductItem = ({name,price}) => {
  return (
    <li className="w-full h-14 flex justify-between items-center pl-5 bg-lime-500 rounded-sm border-b-2 text-black-400">
      <p className="text-lg font-medium">{name +"  "} ${price}</p>
      <div className="w-10 h-full flex flex-col items-center justify-center">
        <BsX className='text-2xl font-medium'/>
        <BsGearFill className='text-md font-medium'/>
      </div>
    </li>
  )
}

export {ProductItem}