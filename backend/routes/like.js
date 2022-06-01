const express = require("express");
const router = express.Router();
const likeCtrl = require("../controllers/like");

router.post("/", likeCtrl.like);

module.exports = router;
