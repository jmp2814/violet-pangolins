const Student = require("./Student");
const User = require("./User");
const Class = require("./Class");

User.hasMany(Student, {
  foreignKey: "TeacherID",
  onDelete: "CASCADE",
});
User.hasMany(Class, {
  foreignKey: "TeacherID",
  onDelete: "CASCADE",
});
Student.belongsTo(User, {
  foreignKey: "TeacherID",
});
Class.belongsTo(User, {
  foreignKey: "TeacherID",
});
module.exports = { Student, User, Class };
