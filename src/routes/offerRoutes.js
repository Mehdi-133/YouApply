import express from "express";
import offerController from "../controllers/offerController.js";
import adminController from "../controllers/adminController.js";

const offerRoutes = express.Router();

offerRoutes.get("/offers", offerController.index);
offerRoutes.get("/followed-offers", offerController.followed);
offerRoutes.get("/offers/:id/show" , offerController.show)
offerRoutes.get("/offers/new", offerController.new);
offerRoutes.post("/offers", adminController.create);
offerRoutes.get("/admin", adminController.index);
offerRoutes.get("/offers/:id/edit", adminController.edit);
offerRoutes.post("/offers/:id/edit" , adminController.update)
offerRoutes.delete("/offers/:id" , adminController.delete)


export default offerRoutes;
