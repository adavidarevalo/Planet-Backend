const express = require("express");
const router = express.Router();
const menu  = require("../controllers/menu")

router.get("/",
    menu.allMenu
);

module.exports = router