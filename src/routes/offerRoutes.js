import express from "express";
import offerController from "../controllers/offerController.js";
import adminController from "../controllers/adminController.js";

const offerRoutes = express.Router();

offerRoutes.get("/offers", offerController.index);
offerRoutes.get("/offers/new", offerController.new);
offerRoutes.post("/offers", offerController.create);
offerRoutes.get("/admin", adminController.index);

export default offerRoutes;
