const Student = require("./Student");
const User = require("./User");
const Classroom = require("./Class");

Student.belongsTo(Classroom, {
  foreignKey: "class_id",
});
Classroom.belongsTo(User, {
  foreignKey: "user_id",
});
Classroom.hasMany(Student, {
  foreignKey: "class_id",
  onDelete: "CASCADE",
});
User.hasMany(Classroom, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

module.exports = { Student, User, Classroom };
