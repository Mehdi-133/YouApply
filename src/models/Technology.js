import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

class Technology extends Model {}
Technology.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Technology",
    tableName: "Technology",
    timestamps: false,
  },
);

export default Technology;
