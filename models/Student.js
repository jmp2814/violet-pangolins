const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

class Student extends Model {}

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
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      references: {
        model: "class",
        key: "class_id",
      },
    },
  },
  {
    sequelize,
    modelName: "student",
  }
);

module.exports = Student;
