const router = require("express").Router();
const Products = require("../models/products");

// router.get("/products/:category", async (req, res) => {
//   try {
//     const category = req.params.category.replace(/%20/g, " ");

//     const product = await Products.find({ category });
//     if (product && product.length > 0) {
//       product.sort((a, b) => b.createdAt - a.createdAt);
//       res.status(200).json(product);
//     } else {
//       res.status(404).json({ message: "Products not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.get("/products/:category/:subCategory?", async (req, res) => {
  try {
      let product;
    const category = req.params.category.replace(/%20/g, " ");
    if(req.params.subCategory){
        const subCategory = req.params.subCategory.replace(/%20/g, " ");
        product = await Products.find({ category, subCategory });
    }
    else{
        product = await Products.find({ category});
    }
  
    if (product && product.length > 0) {
      product.sort((a, b) => b.createdAt - a.createdAt);
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/create/product", async (req, res) => {
  try {
    const product = new Products(req.body);
    const savedProduct = await product.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
