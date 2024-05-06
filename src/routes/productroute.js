const express = require("express");
const {
  CreateProduct,
  getProductId,
  getAllProduct,
  getProductname,
  getProductbrand,
  getProductprice,
  UpdateProduct,
  DeleteProduct,
  searchProducts
} = require("../controllers/productcontrollers");
const router = express.Router();

router.post("/create", CreateProduct);
router.get("/getproduct/:id", getProductId);
router.get("/getallproducts", getAllProduct);
router.get("/getproductname/:searchterm", getProductname);
router.get("/getproductbrand/:searchterm", getProductbrand);
router.get("/getproductprice/:searchterm", getProductprice);
router.put("/update/:id",UpdateProduct);
router.delete("/delete/:id",DeleteProduct);
router.get("/search/:name",searchProducts)


module.exports = router;
