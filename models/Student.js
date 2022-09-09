const { UUIDV4, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Student extends Model {}
Student.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacherID: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      references: {
        model: "User",
        key: "teacherID",
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Student;
