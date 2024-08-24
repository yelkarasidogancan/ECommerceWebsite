import React, { useEffect, useState } from "react";
import style from "../css/product.module.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../dataService";

function ProductCategory(props) {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllProducts()
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className={`${style.pLeft} ${style.container} ${style.w100}`}>
      {(props.category
        ? product.filter((x) => x.category == props.category)
        : product
      ).map((item, index) => (
        <div key={index} className={style.card}>
          <Link to={`/product/${item.id}`} className={style.image}>
            <img src={item.image} alt="" />
            <CiHeart size={30} className={style.heart} />
          </Link>
          <div className={style.footer}>
            <p className={style.name}>{item.name}</p>
            <div className={style.price}>{item.price}$</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCategory;
