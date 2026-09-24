import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

class Offer extends Model {}

Offer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    job_title: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    opp_type: {
      type: DataTypes.ENUM("stage", "alternance"),
      allowNull: false,
    },

    location: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    missions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    profile: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    duration: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    work_mode: {
      type: DataTypes.ENUM("presentiel", "hybride", "remote"),
      allowNull: false,
    },

    salary: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    published_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    status: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Offer",
    tableName: "offer",
    timestamps: false,
  }
);

export default Offer;