const express = require("express");
const router = express.Router();
const imformationController  = require("../controllers/informationController")

router.put("/:name",
    imformationController.allData
);

module.exports = router