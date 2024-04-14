import React, { useEffect, useState } from "react";
import axios  from "axios";
import DisplayProduct from "./DisplayProduct";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try{

        axios.get("https://fakestoreapi.com/products").then((y) => {
            setData(y.data);
        });
    }catch(error){
        console.log('something is wrong');
    }
  }, []);
  return (
    <div>
      {data.map((value, index) => {
        return <DisplayProduct item={value} index={index} />;
      })}
    </div>
  );
};

export default Product;
