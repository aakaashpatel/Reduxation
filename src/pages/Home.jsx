import React, { useEffect, useState } from "react";
import { add } from "../components/Redux/CartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      {error && <div>Error: {error}</div>}

      <div className="productsWrapper">
        {product.map((product, index) => {
          return (
            <div className="card" key={index}>
              <img src={product.images[0]} alt="img" />
              <h4>{product.title}</h4>
              <h5>₹ {product.price}</h5>
              <button className="btn" onClick={() => handleAdd(product)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
