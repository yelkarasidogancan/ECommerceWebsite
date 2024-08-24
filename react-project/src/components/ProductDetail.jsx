import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../css/container.module.css";
import productStyle from "../css/detail.module.css";
import ReactImageMagnify from "react-image-magnify";
import { ExampleContext } from "../ExampleContext";
import { fetchProductById } from "../dataService";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductById(parseInt(id))
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message));
  }, []);

  const { addToCart } = useContext(ExampleContext);

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  return (
    <div className={`${style.py} ${style.container} ${productStyle.container}`}>
      <div className={productStyle.image}>
        <ReactImageMagnify
          {...{
            className: productStyle.img,
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: product.image,
            },
            largeImage: {
              src: product.image,
              width: 1200,
              height: 1200,
            },
          }}
        />
      </div>
      <div className={productStyle.detailContainer}>
        <h2>{product.name}</h2>
        <p className={productStyle.description}>{product.description}</p>
        <h2 className={productStyle.price}>{product.price}$</h2>
        <button
          onClick={() => addToCart(product)}
          className={productStyle.button}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
