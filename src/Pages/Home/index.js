import React from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const Home = ({text}) => {
  return (
    <section className="w-full h-screen flex flex-col">
        <Header title="Home"/>
        <div className="w-11/12 h-3/5 mx-auto mt-5 flex flex-col">
          <p className="text-base text-justify">{text}</p>
          <div className="w-full h-3/4 mt-3 flex flex-col justify-around text-xl items-center">
            <a href=""><button>Iniciar</button></a>
            <a href=""><button>Configuración</button></a>
            <a href=""><button>Historial</button></a> 
          </div>
        </div>
        <Footer />
    </section>
  )
}

export { Home }
