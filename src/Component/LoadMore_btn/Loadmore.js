import React, { useEffect, useState } from "react";
import "./style.css";

const Loadmore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((pravData) => [...pravData, ...result.products]);
        setLoading(false);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log("error", error);
      setLoading(false);

      // Implement a backoff mechanism
      setTimeout(() => {
        fetchProducts();
      }, 60000); // Retry after 1 minute
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if(products && products.length === 100) setDisableButton(true);
  },[products]);

  if (loading) {
    return <div>Loading data | please wait.</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="products">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="btn_container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p>:null}
      </div>
    </div>
  );
};

export default Loadmore;
