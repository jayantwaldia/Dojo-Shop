import { createContext, useReducer } from "react";
import { products } from "../../backend/db/products";
import { productSortReducer, productFilterReducer } from "./ProductReducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsList, dispatchProductList] = useReducer(
    productSortReducer,
    products
  );

  const [productsFilterList, dispatchProductFilterList] = useReducer(
    productFilterReducer,
    products
  );

  const filterProduct = (check, name) => {
    console.log(check, name);
    if (check === true && name === "men") {
      dispatchProductFilterList({
        type: "FILTER_MEN",
        payload: productsFilterList,
      });
    }
    if (check === true && name === "women") {
      dispatchProductFilterList({
        type: "FILTER_WOMEN",
        payload: productsFilterList,
      });
    }
  };

  const sortProduct = (filterType) => {
    if (filterType === "Price: Low to High") {
      dispatchProductList({ type: "LOW_TO_HIGH", payload: productsList });
    } else if (filterType === "Price: High to Low") {
      dispatchProductList({ type: "HIGH_TO_LOW", payload: productsList });
    } else if (filterType === "Best Rating") {
      dispatchProductList({ type: "BEST_RATING", payload: productsList });
    }
  };
  return (
    <ProductContext.Provider
      value={{ productsList, sortProduct, filterProduct, productsFilterList }}
    >
      {children}
    </ProductContext.Provider>
  );
};
