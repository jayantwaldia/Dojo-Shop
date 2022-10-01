import { products } from "../../backend/db/products";

export const productReducer = (data, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return [...action.payload.sort((el1, el2) => el1.price - el2.price)];
    case "HIGH_TO_LOW":
      return [...action.payload.sort((el1, el2) => el2.price - el1.price)];
    case "BEST_RATING":
      return [
        ...action.payload.sort(
          (el1, el2) => el2.reviews.average - el1.reviews.average
        ),
      ];
    case "FILTER_SEX":
      if (action.value === "Men") {
        return products.filter((product) => product.category === "men");
      }
      if (action.value === "Women") {
        return products.filter((product) => product.category === "women");
      }
    case "DEF":
      return products;

    default:
      return data;
  }
};
