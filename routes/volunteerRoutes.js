const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  console.log("inside get");
});

router.route("/").post((req, res) => {
  console.log("inside post");
});

module.exports = router;
