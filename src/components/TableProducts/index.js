import React from "react";
import { ItemProductTable } from "../ItemProductTable";

const TableProducts = () => {
  const items = [
    {
      price: 75,
      name: "Lager 1L",
      pzs: 2,
    },
    {
      price: 75,
      name: "Lager 1/2L",
      pzs: 2,
    },
    {
      price: 75,
      name: "Ambar 1L",
      pzs: 2,
    },
    {
      price: 75,
      name: "Michelada",
      pzs: 2,
    },
  ];

  return (
    <div className="w-11/12 h-52 mx-auto mt-2 bg-secondaryBg overflow-scroll">
      <div className="w-full h-7 flex flex-row border-blue-700 border-2">
        <div className="w-1/5 h-full bg-secondaryBg text-center font-light text-primary border-blue-700 border-r-2">
          Precio
        </div>
        <div className="w-2/5 h-full bg-secondaryBg text-center font-light text-primary border-blue-700 border-r-2">
          Nombre
        </div>
        <div className="w-2/5 h-full bg-secondaryBg text-center font-light text-primary border-blue-700 border-r-2">
          Cantidad
        </div>
      </div>
      {items.map((item) => {
        return (
          <ItemProductTable
            key={item.name}
            price={item.price * item.pzs}
            name={item.name}
            pzs={item.pzs}
          />
        );
      })}
    </div>
  );
};

export { TableProducts };
