const express = require("express");

const router = express.Router();

const sendUnix = require("../controllers/controller");

router.get("/:time", sendUnix);

module.exports = router;
