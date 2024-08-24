import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import style from "../css/navbar.module.css";
import container from "../css/container.module.css";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { ExampleContext } from "../ExampleContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { cartItems } = useContext(ExampleContext);

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/product?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className={style.nav}>
      <div className={`${style.navContainer} ${container.container}`}>
        <Link to="/" className={style.h1}>
          <h1>E-Commerce</h1>
        </Link>
        <div className={style.search}>
          <input
            placeholder="Search products here..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className={style.searchButton} onClick={handleSearch}>
            SEARCH
          </div>
        </div>
        <div className={style.order}>
          <Link to="/" className={style.navIcons}>
            <CiHeart size={30} />
          </Link>
          <Link to="/cart" className={style.navIcons}>
            <CiShoppingBasket size={30} />
          </Link>
          {cartItems.length === 0 ? (
            <></>
          ) : (
            <div className={style.counter}>{cartItems.length}</div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
