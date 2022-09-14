const { Student } = require("../../models");
const router = require("express").Router();

// POST

router.post("/", async (req, res) => {
  // const { firstName, lastName } = req.body;
  // const UserId = req.session.userId;

  try {
    const newStudent = await Student.create({
      firstName: "",
      lastName: "",
    });

    res.status(200).json(newStudent);
  } catch (err) {
    console.log("🚀 ~ file: user.js ~ line 26 ~ router.post ~ error", error);
    return res.status(400).json({ message: "Something has gone wrong" }, err);
  }
});
