import React from "react";
import { BtnMoreRest } from "../BtnMoreRest";

const ItemProductTable = ({ price, name, pzs }) => {
  return (
    <div className="w-full h-12 pt-2 flex flex-row bg-primary text-light text-yellow-50 border-l-4 border-b-2 border-gray-400">
      <div className="w-1/5 h-full text-center">
        <p>${price ? price : "75"}</p>
      </div>
      <div className="w-2/5 h-full text-center">
        <p>{name ? name : "Indio"}</p>
      </div>
      <div className="w-2/5 h-full flex flex-row justify-around text-center">
        <p>{pzs ? pzs : 1}</p>
        <BtnMoreRest />
      </div>
    </div>
  );
};

export { ItemProductTable };
