const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateToken");
// router.use(validateToken);
const {
  createAdmin,
  deleteAdmin,
  createUser,
  listVolunteers,
  deleteVolunteer,
} = require("../controller/adminController");

router.route("/register").post(createAdmin);

router.route("/remove/:id").delete(deleteAdmin);

router.route("/createUser").post(createUser);
router.route("/listVolunteers").get(listVolunteers);
router.route("/deleteUser/:email").delete(deleteVolunteer);

router.get("/login", () => {
  console.log("inside login");
});

module.exports = router;
