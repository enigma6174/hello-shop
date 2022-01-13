import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

export const getProducts = asyncHandler(async (request, response) => {
  const products = await Product.find({});
  response.json(products);
});

export const getProductById = asyncHandler(async (request, response) => {
  const product = await Product.findById(request.params.id);
  if (product) {
    response.json(product);
  } else {
    response.status(404);
    throw new Error("Product Not Found");
  }
});
