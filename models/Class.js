const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Class extends Model { }

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
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "class",
  }
);

module.exports = Class;
