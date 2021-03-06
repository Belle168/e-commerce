import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { Product } from "./Product";
import "./AllProducts.css";

export const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="Products container">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};


