const express = require("express");
const { createUserAPI } = require("../controller/user.controller");
const router = express.Router();

router.post("/api/v1/user", createUserAPI);

module.exports = router;
