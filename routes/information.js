const express = require("express");
const router = express.Router();
const imformationController  = require("../controllers/informationController")

router.get("/",
    imformationController.allData
);

module.exports = router