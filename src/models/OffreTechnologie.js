import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

class OffreTechnologie extends Model {}

OffreTechnologie.init(
  {
    offer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    technology_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "OffreTechnologie",
    tableName: "offre_technologie",
    timestamps: false,
  },
);

export default OffreTechnologie;
