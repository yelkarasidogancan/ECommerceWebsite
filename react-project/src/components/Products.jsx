import React, { useState } from "react";
import style from "../css/container.module.css";
import product from "../css/product.module.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Products() {
  const [value, setValue] = React.useState("1");

  // const data = [{name:""}]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = {
    clothes: [
      {
        id: 1,
        name: "T-Shirt",
        price: "20",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde cumque iure velit placeat quia aperiam nam ullam eveniet, sed pariatur neque, dolorem, voluptatem in similique quisquam magnam quis exercitationem maiores!",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        name: "Jeans",
        price: "40",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde cumque iure velit placeat quia aperiam nam ullam eveniet, sed pariatur neque, dolorem, voluptatem in similique quisquam magnam quis exercitationem maiores!",
        image:
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 3,
        name: "T-Shirt",
        price: "20",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde cumque iure velit placeat quia aperiam nam ullam eveniet, sed pariatur neque, dolorem, voluptatem in similique quisquam magnam quis exercitationem maiores!",
        image:
          "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        name: "Jeans",
        price: "40",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde cumque iure velit placeat quia aperiam nam ullam eveniet, sed pariatur neque, dolorem, voluptatem in similique quisquam magnam quis exercitationem maiores!",
        image:
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 5,
        name: "T-Shirt",
        price: "20",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde cumque iure velit placeat quia aperiam nam ullam eveniet, sed pariatur neque, dolorem, voluptatem in similique quisquam magnam quis exercitationem maiores!",
        image:
          "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    tech: [
      {
        id: 6,
        name: "Smartphone",
        price: "300",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde cumque iure velit placeat quia aperiam nam ullam eveniet, sed pariatur neque, dolorem, voluptatem in similique quisquam magnam quis exercitationem maiores!",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 7,
        name: "Laptop",
        price: "1000",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde cumque iure velit placeat quia aperiam nam ullam eveniet, sed pariatur neque, dolorem, voluptatem in similique quisquam magnam quis exercitationem maiores!",
        image:
          "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    house: [
      {
        id: 8,
        name: "Chair",
        price: "50",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde cumque iure velit placeat quia aperiam nam ullam eveniet, sed pariatur neque, dolorem, voluptatem in similique quisquam magnam quis exercitationem maiores!",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 9,
        name: "Table",
        price: "150",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde cumque iure velit placeat quia aperiam nam ullam eveniet, sed pariatur neque, dolorem, voluptatem in similique quisquam magnam quis exercitationem maiores!",
        image:
          "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  };

  const renderCards = (items) => {
    return (
      <div className={product.container}>
        {items.map((item, index) => (
          <div key={index} className={product.card}>
            <Link to={`/product/${item.id}`} className={product.image}>
              <img src={item.image} alt="" />
              <CiHeart size={30} className={product.heart} />
            </Link>
            <div className={product.footer}>
              <p className={product.name}>{item.name}</p>
              <div className={product.price}>{item.price}$</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`${style.py} ${style.container}`}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Clothes" value="1" />
              <Tab label="Tech" value="2" />
              <Tab label="House" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">{renderCards(data.clothes)}</TabPanel>
          <TabPanel value="2">{renderCards(data.tech)}</TabPanel>
          <TabPanel value="3">{renderCards(data.house)}</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
export default Products;
