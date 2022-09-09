const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');
class Student extends Model {
}
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
        teacher: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
);
module.exports = Student;