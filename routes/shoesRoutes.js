const express = require("express");
const { products, recommendedProducts } = require("../data/shoes");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    products,
  });
});

router.get("/recommended", (req, res, next) => {
  res.json({
    products: recommendedProducts,
  });
});

module.exports = router;
