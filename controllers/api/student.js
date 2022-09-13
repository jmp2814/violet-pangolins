const { Student, Classroom } = require("../../models");
const router = require("express").Router();

// POST

router.post("/", async (req, res) => {
  const { title, image, description } = req.body;
  const UserId = req.session.userId;

  try {
    const newStudent = await Student.create({
      first_name:"",
      last_name:"",
      author: "",
      class_id,
      user_id,
    });

    res.json(newStudent);
  } catch (error) {
    console.log("🚀 ~ file: user.js ~ line 26 ~ router.post ~ error", error);
    return res
      .status(500)
      .json({ message: "Something has gone wrong" });
  }
});
