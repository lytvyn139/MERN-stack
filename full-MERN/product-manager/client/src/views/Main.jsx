import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";
export default () => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/see_all_products").then((res) => {
      setProduct(res.data);
      setLoaded(true);
    });
  }, []);
  return (
    <div>
      <p>to add navigate to: http://localhost:3000/product/see_products</p>
      <ProductForm />
      <ProductList product={product} />
    </div>
  );
};
