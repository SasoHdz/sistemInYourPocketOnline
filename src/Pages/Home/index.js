import React from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BtnPrimary } from "../../components/BtnPrimary";

const Home = ({ text }) => {
  return (
    <section className="w-full h-screen flex flex-col">
      <Header title="Home" />
      <div className="w-11/12 h-80 mx-auto mt-7 flex flex-col justify-between border-b-2 border-neutral-900 text-center">
        <h4 className="text-primary font-semibold text-xl">Bienvenido</h4>
        <h4 className="text-primary font-semibold text-xl">
          System in your pocket
        </h4>
        <p className="mb-3 font-light text-base text-justify">
          Un sistema sencillo, accesible y facil de usar. Pensado para pequeños
          negocios. Comienza a configurar tu punto deventa.
        </p>
      </div>
      <div className="w-11/12 h-3/5 mx-auto mt-5 flex flex-col">
        <p className="text-base text-justify">{text}</p>
        <div className="w-full h-3/4 mt-3 flex flex-col justify-around text-xl items-center">
          <a href="">
            <BtnPrimary text="Iniciar" />
          </a>
          <a href="">
            <BtnPrimary text="Configuración" />
          </a>
          <a href="">
            <BtnPrimary text="Historial" />
          </a>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export { Home };
