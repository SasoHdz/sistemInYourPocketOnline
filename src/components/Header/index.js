import React from "react";

const Header = ({ title, section }) => {
  return (
    <div className="w-full h-28 bg-primary relative text-center">
      <p className="text-3xl font-medium text-yellow-50 mt-7">
        {title ? title : "SIYP"}
      </p>
      <div className="w-20 h-20 bg-yellow-50 rounded-full absolute top-0 right-0 mr-2 mt-3">
        <div className="w-full h-full bg-logo bg-cover"></div>
      </div>
      <div className="w-fit text-2xl text-yellow-50 font-medium rounded-md bg-secondary mx-auto mt-8 px-3">
        {section ? section : "Home"}
      </div>
    </div>
  );
};

export { Header };
