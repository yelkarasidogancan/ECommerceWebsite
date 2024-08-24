import React, { useEffect, useState } from "react";
import container from "../css/container.module.css";
import { useLocation } from "react-router-dom";
import style from "../css/product.module.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../dataService";
import { height, width } from "@mui/system";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchProduct() {
  const query = useQuery();
  const searchTerm = query.get("search") || "";

  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllProducts()
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message));
  }, []);

  // Arama sonucuna göre filtreleme
  const filteredProducts = product.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`${style.container} ${container.container}`}>
      {filteredProducts.length != 0 ? (
        filteredProducts.map((item, index) => (
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
        ))
      ) : (
        <div className={style.center}>
          The Product You Are Looking For Could Not Be Found
        </div>
      )}
    </div>
  );
}

export default SearchProduct;
