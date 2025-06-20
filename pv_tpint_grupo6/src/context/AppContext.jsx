import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const toggleFavorite = (id) => {
    const updated = products.map(product =>
      product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
    );
    setProducts(updated);
  };

  return (
    <AppContext.Provider value={{ products, setProducts, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
};
