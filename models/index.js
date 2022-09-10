const Student = require("./Student");
const User = require("./User");
const Class = require("./Class");

User.hasMany(Student, {
  foreignKey: "id",
  onDelete: "CASCADE",
});
User.hasMany(Class, {
  foreignKey: "id",
  onDelete: "CASCADE",
});
Student.belongsTo(User, {
  foreignKey: "id",
});
Class.belongsTo(User, {
  foreignKey: "id",
});
module.exports = { Student, User, Class };
