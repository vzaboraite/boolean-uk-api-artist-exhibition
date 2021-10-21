const express = require("express");
const { createArtist } = require("./controller");

const router = express.Router();

router.post("/", createArtist);

module.exports = router;
