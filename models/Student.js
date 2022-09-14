const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

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
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      references: {
        model: "Classroom",
        key: "class_id",
      },
    },
  },
  {
    sequelize,
    modelName: "Student",
  }
);

module.exports = Student;
