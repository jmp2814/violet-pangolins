const Student = require("./Student");
const User = require("./User");
const Class = require("./Class");

Class.hasMany(Student, {
  foreignKey: "class_id",
  onDelete: "CASCADE",
});
User.hasMany(Class, {
  foreignKey: "id",
  onDelete: "CASCADE",
});
Student.belongsTo(Class, {
  foreignKey: "class_id",
});
Class.belongsTo(User, {
  foreignKey: "id",
});
module.exports = { Student, User, Class };
