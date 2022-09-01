
const router = require("express").Router();
const restaurantRoutes = require("./restaurant-routes");
const reviewRoutes = require("./review-routes");
const userRoutes = require("./user-routes");

router.use("/restaurant", restaurantRoutes);
router.use("/review", reviewRoutes)
router.use("/user", userRoutes);

module.exports = router;

