const router = require("express").Router();
const userRoutes = require("./user");
const studentRoutes = require("./student");
const classRoutes = require("./class");


router.use("/user", userRoutes);
router.use("/student", studentRoutes);
router.use("/class", classRoutes);

module.exports = router;