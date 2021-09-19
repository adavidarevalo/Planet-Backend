const express = require("express");
const router = express.Router();
const structureController  = require("../controllers/structureController")

router.get("/:name",
    structureController.structureContainer
);

module.exports = router