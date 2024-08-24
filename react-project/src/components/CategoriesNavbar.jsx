import React, { useEffect, useState } from "react";
import container from "../css/container.module.css";
import style from "../css/categories-nav.module.css";
import { FiAlignLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { fetchAllCategories } from "../dataService";
function CategoriesNavbar() {
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllCategories()
      .then((data) => setCategory(data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <nav className={style.nav}>
      <div className={`${style.navContainer} ${container.container}`}>
        <div className={style.leftSide}>
          <Link to="/category/0" className={style.showCategories}>
            <FiAlignLeft size={25} />
            <p>Show Categories</p>
          </Link>
          <div className={style.popular}>
            {category.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.id}`}
                className={style.item}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={style.rightSide}>Free Shipping</div>
      </div>
    </nav>
  );
}

export default CategoriesNavbar;
