import React, { useState, useEffect } from "react";
import style from "../css/categoryFilter.module.css";
import { fetchAllCategories } from "../dataService";

function Category(props) {
  const [selectedCategory, setSelectedCategory] = useState(props.category);
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);

  const handleRadioChange = (categoryId) => {
    setSelectedCategory(categoryId);
    props.setCategory(categoryId); // Eğer üst bileşene de bildirmeniz gerekiyorsa
  };

  useEffect(() => {
    fetchAllCategories()
      .then((data) => setCategory(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className={style.border}>
      <h4>Categories</h4>
      {category.map((category, index) => (
        <div key={index} className={style.option}>
          <input
            data-id={category.id}
            checked={category.id === props.category}
            type="radio"
            onChange={() => handleRadioChange(category.id)}
          />
          <label htmlFor="">{category.name}</label>
        </div>
      ))}
    </div>
  );
}

export default Category;
