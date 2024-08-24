import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import ProductList from "../components/ProductList";
import Basket from "../components/Basket";
import CategoryPanel from "../components/CategoryPanel";
import ProductCategory from "../components/ProductCategory";
import style from "../css/container.module.css";
import { useParams } from "react-router-dom";

function Categories() {
  const { id } = useParams();
  const [selectedId, SetselectedId] = useState(parseInt(id, 10));

  return (
    <div className={`${style.container} ${style.py} ${style.dflex}`}>
      <CategoryPanel setCategory={SetselectedId} category={selectedId} />
      <ProductCategory category={selectedId} />
    </div>
  );
}

export default Categories;
