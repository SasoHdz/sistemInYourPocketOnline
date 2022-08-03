import React from 'react';

const Home = () => {
  return (
    <section className="w-full h-screen flex flex-col content-center">
        <div className="w-full h-28 bg-slate-500">
            <div className="w-full h-auto flex justify-around pt-5">
                <p>SIYP</p>
                <div className="w-28 h-20 bg-red-500">Logo</div>
            </div>
            <div className="absolute">Home</div>
        </div>
        <p>Lorem ipsumvfdsdfsdfsdfdsfsdfsdfsfr</p>
        <a href=""><button>Iniciar</button></a>
        <a href=""><button>Configuración</button></a>
        <a href=""><button>Historial</button></a>
        <div>
            Footer
        </div>
    </section>
  )
}

export { Home }
