import React from "react";

import { HeaderMenu } from "../../components/HeaderMenu";
import { TableProducts } from "../../components/TableProducts";
import { InputSearch } from "../../components/IntputSearch";

const Register = () => {
  return (
    <section className="w-full h-screen flex flex-col">
      <HeaderMenu title="Mich Hdz" />
      <TableProducts />
      <InputSearch />
    </section>
  );
};

export { Register };
