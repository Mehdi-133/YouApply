import express, { Router } from "express"
import offerController from "../controllers/offerController.js";

const offerRoutes = express.Router()



offerRoutes.get('/' , offerController.index)


export default offerRoutes
