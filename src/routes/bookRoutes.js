const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
router.get("/:id", bookController.getBookDetail);
module.exports = router;
