const express = require("express");
const {
  createExhibitionWithAddress,
  getAllExhibitions,
} = require("./controller");

const router = express.Router();

router.post("/", createExhibitionWithAddress);

router.get("/", getAllExhibitions);

module.exports = router;
