import sequelize from "../src/config/sequelize.js";

try {
  await sequelize.authenticate();

  console.log("Sequelize connected successfully");
} catch (error) {
  console.error("Unable to connect with Sequelize:", error);
} finally {
  await sequelize.close();
}