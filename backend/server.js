import express from "express";
import dotenv from "dotenv";

import products from "./data/products.js";

dotenv.config();

const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/api/products", (request, response) => {
  response.json(products);
});

app.get("/api/products/:id", (request, response) => {
  const product = products.find((p) => p._id === request.params.id);
  response.json(product);
});

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`[INFO] server running in ${MODE} mode on port ${PORT}`)
);
