import React from "react";

const BtnMoreRest = () => {
  return (
    <div className="w-14 h-6 flex flex-row">
      <button className="h-full w-6 grid content-center text-xl text-center bg-secondary text-primary font-bold border-r-2 border-blue-700">
        +
      </button>
      <button className="h-full w-6 grid content-center text-xl text-center bg-secondary text-primary font-bold border-l-2 border-blue-700">
        -
      </button>
    </div>
  );
};

export { BtnMoreRest };
