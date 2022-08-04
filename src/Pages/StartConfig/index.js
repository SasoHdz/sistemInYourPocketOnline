import React from 'react'

import { Header } from '../../components/Header';
import { BtnPrimary } from '../../components/BtnPrimary';
import { BtnSecondary } from '../../components/BtnSecondary';
import { ProductItem } from '../../components/ProductItem';

const StartConfig = () => {

  const products = 
  [ {name:"Cerv Indio", price:"45"},{name:"Cerv Lager", price:"45"},{name:"Margarita", price:"75"},
    {name:"Prep Mich", price:"25"},{name:"Chelada", price:"15"},{name:"CieloRojo", price:"25"}
  ];

  return (
    <section className="w-full h-screen flex flex-col">
        <Header title="Configuracion"/>
        <div className="w-11/12 h-3/4 mt-5 mx-auto flex flex-col items-center">
            <BtnPrimary text="Agregar Producto" />
            <ul className="w-11/12 h-3/4 overflow-scroll mt-2 bg-blue-700 rounded-lg">
                {
                    products.map((product)=>{
                        return <ProductItem key={product.name} name={product.name} price={product.price} />
                    })
                }
            </ul>
            <BtnPrimary text="Guardar" />
            <BtnSecondary text="Cancelar"/>
        </div>
    </section>
  )
}

export {StartConfig};