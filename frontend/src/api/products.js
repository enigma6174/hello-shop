import axios from "axios";

export const getProductList = () => {
  try {
    const response = axios.get("/api/products");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProductData = (id) => {
  try {
    const response = axios.get(`/api/products/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
