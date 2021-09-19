const express = require("express");
const router = express.Router();
const surfaceController  = require("../controllers/surfaceController")

router.get("/:name",
    surfaceController.surfaceData
);

module.exports = router