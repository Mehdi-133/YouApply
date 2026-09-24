import express, { Router } from "express";
import offerController from "../controllers/offerController.js";

const offerRoutes = express.Router();

offerRoutes.get("/", offerController.index);
offerRoutes.get("/new", offerController.new);
offerRoutes.post("/" , offerController.create )

export default offerRoutes;
