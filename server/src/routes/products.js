const router = require("express").Router();
const Products = require("../models/products");
const Warranty = require("../models/warranty");
const cors = require("cors");




router.get("/filter", cors(), async (req, res) => {
  console.log("here");
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }
  try {
    // Find products whose title matches partially or fully with the query
    let matchedProducts = await Products.find({
      title: { $regex: query, $options: "i" },
    });
    if(matchedProducts.length===0){
      matchedProducts = await Products.find({
        title: query
    })
  }

    res.json(matchedProducts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


router.post("/warranty", cors(),async (req, res) => {
  try {
    const product = new Warranty(req.body);
    const savedProduct = await product.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/warranty/:serialNumber",cors(), async (req, res) => {
  try {
    const product = await Warranty.find({
      serialNumber: req.params.serialNumber,
    }).populate("productInfo");
    if (product && product.length > 0) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/products/:category/:subCategory?", cors(), async (req, res) => {
  try {
    let product;
    const category = req.params.category.replace(/%20/g, " ");

    if (req.params.subCategory) {
      const subCategory = req.params.subCategory.replace(/%20/g, " ");
      product = await Products.find({ category, subCategory });
    } else {
      product = await Products.find({ category });
    }

    if (product && product.length > 0) {
      product.sort((a, b) => b.createdAt - a.createdAt);

      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/product/:id", cors(), async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/create/product", cors(), async (req, res) => {
  try {
    const product = new Products(req.body);
    const savedProduct = await product.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
