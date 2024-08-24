import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const allProducts = [
  { id: 1, name: "Ürün 1", description: "Açıklama 1" },
  { id: 2, name: "Ürün 2", description: "Açıklama 2" },
  // Diğer ürünler...
];

function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Arama terimine göre ürünleri filtreleme
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Ürünler</h1>
      <input
        type="text"
        placeholder="Ürün ara..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </li>
          ))
        ) : (
          <p>Ürün Bulunamadı</p>
        )}
      </ul>
    </div>
  );
}

export default ProductList;
