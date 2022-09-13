const { Classroom } = require("../../models");
const router = require("express").Router();

//Get all
router.get("/", async (req, res) => {
  try {
    const categoryData = await Classroom.findAll({
      include: [{ model: Student }],
    });
    res.status(200).json(classroomData);
  } catch {
    res.status(500).json(err);
  }
});

// Get one by id
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Classroom.findByPk(req.params.id, {
      include: [{ model: Student }],
    });

    if (!categoryData) {
      res
        .status(404)
        .json({ message: `No classroom found with ID: ${req.params.id}` });
      return;
    }

    res.status(200).json(classroomData);
  } catch {
    res.status(500).json(err);
  }
});

// Create one
router.post("/", async (req, res) => {
  try {
    const newCategoryData = await Classroom.create({
      classroomName: req.body.classroomName,
    });

    res.status(200).json(newclassroomData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update one by id
router.put("/:id", async (req, res) => {
  try {
    const classroomData = await Classroom.findByPk(req.params.id);
    const updateclassroomData = await Classroom.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!classroomData) {
      res
        .status(404)
        .json({ message: `No classrom found with ID: ${req.params.id}` });
      return;
    }

    if (!updateclassroomData[0]) {
      res.status(400).json({
        message: `No classroom data updated for ID: ${req.params.id}`,
      });
      return;
    }

    res.status(200).json(updateData);
  } catch {
    res.status(500).json(err);
  }
});
