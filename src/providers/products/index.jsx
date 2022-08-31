import { createContext, useState } from "react";
import { productsDataBase } from "../../services/db";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsDataBase);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
