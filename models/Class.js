const { UUIDV4, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Class extends Model {}
Class.init(
  {
    className: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numbStudent: {
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

module.exports = Class;
