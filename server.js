const express = require("express");

const productApi = require("./api/ProductsApi");
const variantsApi = require("./api/VariantsApi");
const searchController = require("./Controllers/searchController");
const DbConnect = require("./Helpers/DbConnect");

const app = express();

//middle ware for body parsing

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// api end point for product
app.use("/products", productApi);

//api end point for products
app.use("/variants", variantsApi);

app.use("/search", searchController);

//function to connect database
DbConnect();

app.listen(3500, () => {
  console.log("Server Running on Port 3500");
});
