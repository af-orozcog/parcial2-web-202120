import React, { useState, useEffect } from 'react';
import {Chart} from "../components/Chart";
import {getProductsService} from "../services/product";
import {FormattedMessage} from "react-intl";

export const Report = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    getProductsService("").then(r => setProducts(r));
  })

  return (
    <section id='report'>
      <div className='report-container'>
        <h1>
          <FormattedMessage
            id="inventory"
            defaultMessage="Unidades en inventario"
          />
        </h1>
        <Chart
          data={products}
        />
      </div>
    </section>
  );
};
