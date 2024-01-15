const express = require("express");
const router = express.Router();
const { login } = require("../controller/volunteerController");

router.route("/login").post(login);

module.exports = router;
