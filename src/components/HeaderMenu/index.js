import React from "react";
import { BsJustify } from "react-icons/bs";

const HeaderMenu = ({ title }) => {
  return (
    <div className="w-full h-12 text-yellow-50 bg-primary flex flex-row justify-center relative">
      <BsJustify className="font-bold text-4xl absolute left-2 mt-1" />
      <h3 className="font-semibold text-3xl text-center">
        {title ? title : "Punto Venta"}
      </h3>
    </div>
  );
};

export { HeaderMenu };
