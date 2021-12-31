const express = require("express");

const router = express.Router();

const { sendUnix, emptyDate } = require("../controllers/controller");

router.get("/:time", sendUnix);
router.get("/", emptyDate);
module.exports = router;
