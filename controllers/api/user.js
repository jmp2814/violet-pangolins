const { User } = require("../../models/User");
const router = require("express").Router();

router.get("/", async (req, res) => {
  if (req.session.loggedIn) {
    return res.json({ message: "You are logged in" });
  } else {
    return res.json({ message: "You are logged out" });
  }
});

//Create a new User Route

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  if ((!username, !email, !password)) {
    return res
      .status(400)
      .json({ message: "You did not give me all the info!" });
  }
  try {
    const newUser = await User.create({
      username,
      email,
      password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = newUser.id;
      return res.status(201).json(newUser);
    });
  } catch (error) {
    console.log("🚀 ~ file: user.js ~ line 26 ~ router.post ~ error", error);
    return res.status(500).json({ message: "Something has gone wrong" });
  }
});

/**
 * Create a new User Route
 * /api/user/login
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if ((!email, !password)) {
    return res.status(400).json({ message: "Please add required fields" });
  }

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    const isValidPassword = user.checkPassword(password);

    if (isValidPassword) {
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = user.id;
        return res.status(200).json(user);
      });
    } else {
      res.status(404).json({ message: "Some of your info is bad" });
    }
  } catch (error) {
    console.log("🚀 ~ file: user.js ~ line 26 ~ router.post ~ error", error);
    return res.status(500).json({ message: "Something has gone wrong" });
  }
});

//Logout
router.post("/logout", async (req, res) => {
  req.session.destroy(() => {
    res.status(204).end();
  });
});

module.exports = router;
