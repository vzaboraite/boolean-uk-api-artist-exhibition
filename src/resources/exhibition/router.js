const express = require("express");
const { createExhibitionWithAddress } = require("./controller");

const router = express.Router();

router.post("/", createExhibitionWithAddress);

module.exports = router;
