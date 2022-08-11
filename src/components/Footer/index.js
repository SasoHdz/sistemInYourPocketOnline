import React from "react";

const Footer = ({ text, url }) => {
  return (
    <div className="w-full h-1/5 bg-primary text-center pt-3">
      <a
        className="font-light text-base text-yellow-50"
        href={url ? url : "https://www.instagram.com/sasohdz_dev/"}
        target="__blank"
      >
        {text ? text : "by @SasoHdzDev"}
      </a>
    </div>
  );
};

export { Footer };
