import { createContext, useState } from "react";

export const ExampleContext = createContext();

export const ExampleProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Ürün varsa, quantity değerini artır
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Ürün yoksa, listeye quantity değeri 1 olarak ekle
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <ExampleContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </ExampleContext.Provider>
  );
};
