import React, { useEffect, useState } from 'react';
import {Card} from "../components/Card"
import { getProductsService } from "../services/product";
import {FormattedMessage} from "react-intl";

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
      getProductsService(searchKey).then(r => setProducts(r));
    },[searchKey])

  const listproductos = products.map((entry, index) => {
      return (
        <Card
          key={entry["_id"]}
          name={entry.name}
          picture={entry.picture}
          price={entry.price}
          isActive={entry.isActive}
        />
      )
    }
  )

  return (
    <section id='home'>
      <div className='home-container'>
        <h1>
          <FormattedMessage
            id={"gallery"}
            defaultMessage={"Gallery"}
          />
        </h1>
        <div className='home-card'>
          {listproductos}
        </div>
      </div>
    </section>
  );
};
