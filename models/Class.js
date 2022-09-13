const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Classroom extends Model {}

Classroom.init(
  {
    classroomName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numbStudent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      primaryKey: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      references: {
        model: "user",
        key: "user_id",
      },
    },
    class_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "Classroom",
  }
);

module.exports = Classroom;
