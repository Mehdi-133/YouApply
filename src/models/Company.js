import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

class Company extends Model {}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Company",
    tableName: "company",
    timestamps: false,
  }
);

export default Company;


